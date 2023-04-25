export default class Controller {
  #view;
  #worker;
  #events = {
    alive: () => {},
    progress: ({ percent }) => {
      this.#view.updateProgress(percent);
    },
    ocurrenceUpdate: ({ ocurrencies, linesLength, took }) => {
      const [[key, num]] = Object.entries(ocurrencies);
      this.#view.updateDebugLog(
        `found ${num} ocurrencies of ${key} - over ${linesLength} lines - took: ${took}`
      );
    },
  };

  constructor({ view, worker }) {
    this.#view = view;
    this.#worker = this.#configureWorker(worker);
  }

  static init(deps) {
    return new Controller(deps).init();
  }

  init() {
    this.#view.configureOnFileChange(this.#configureOnFileChange.bind(this));
    this.#view.configureOnFormSubmit(this.#configureOnFormSubmit.bind(this));

    return this;
  }

  #configureWorker(worker) {
    worker.onmessage = ({ data }) => this.#events[data.eventType](data);

    return worker;
  }

  #configureOnFileChange(file) {
    this.#view.setFileSize(file.size.formatBytes());
  }

  #configureOnFormSubmit({ description, file }) {
    const query = {};

    query["call description"] = new RegExp(description, "i");

    if (this.#view.isWorkerEnabled()) {
      this.#worker.postMessage({ query, file });
      console.log("worker thread");
      return;
    }

    console.log("main thread");
  }
}
