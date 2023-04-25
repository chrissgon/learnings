export default class Worker {
  #elFile = document.querySelector("#file");
  #elSize = document.querySelector("#size");
  #elForm = document.querySelector("#form");
  #elProgress = document.querySelector("#progress");
  #elDebug = document.querySelector("#debug");
  #elWorker = document.querySelector("#worker");

  setFileSize(size) {
    this.#elSize.innerText = `File size: ${size}\n`;
  }

  configureOnFileChange(fn) {
    this.#elFile.addEventListener("change", (e) => {
      fn(e.target.files[0]);
    });
  }

  configureOnFormSubmit(fn) {
    this.#elForm.reset();
    this.#elForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const file = this.#elFile.files[0];

      if (!file) return alert("no file");

      const form = new FormData(e.currentTarget);
      const description = form.get("description");

      fn({ description, file });

      this.updateDebugLog("");
    });
  }

  updateDebugLog(text, reset = true) {
    if (reset) {
      this.#elDebug.innerText = text;
      return;
    }

    this.#elDebug.innerText += `${text}\n`;
  }

  updateProgress(percent) {
    this.#elProgress.value = percent;
  }
  isWorkerEnabled() {
    return this.#elWorker.checked;
  }
}
