export default class Service {
  processFile({ query, file, onOcurrenceUpdate, onProgress }) {
    const linesLength = { counter: 0 };

    const progressFn = this.#setupProgress(file.size, onProgress);

    const startedAt = performance.now();
    const elapsed = () =>
      `${Math.round((performance.now() - startedAt) / 1000)} secs`;

    const onUpdate = () => {
      return (ocurrencies) => {
        onOcurrenceUpdate({
          ocurrencies,
          took: elapsed(),
          linesLength: linesLength.counter,
        });
      };
    };

    file
      .stream()
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(this.#csvToJSON({ progressFn, linesLength }))
      .pipeTo(this.#findOcurrencies({ query, onOcurrenceUpdate: onUpdate() }));
  }

  #findOcurrencies({ query, onOcurrenceUpdate }) {
    // const queryKeys = Object.keys(query);
    const ocurrencies = {};

    return new WritableStream({
      write(JSONLine) {
        for (const [key, regex] of Object.entries(query)) {
          ocurrencies[regex] = ocurrencies[regex] ?? 0;
          if (regex.test(JSONLine[key])) {
            ocurrencies[regex]++;
            onOcurrenceUpdate(ocurrencies);
          }
        }
      },
      close() {
        onOcurrenceUpdate(ocurrencies);
      },
    });
  }

  #csvToJSON({ progressFn, linesLength }) {
    const columns = [];
    return new TransformStream({
      transform(chunk, controller) {
        progressFn(chunk.length);
        const lines = chunk.split("\n");
        linesLength.counter += lines.length;

        if (!columns.length) {
          const firstLine = lines.shift();
          columns.push(...firstLine.split(","));
          --linesLength.counter;
        }

        for (const line of lines) {
          if (!line.length) continue;

          const organizedLine = [];

          const itemsOfLine = line.split(",");

          for (const [index, item] of itemsOfLine.entries()) {
            organizedLine[columns[index]] = item.trimEnd();
          }

          controller.enqueue(organizedLine);
        }
      },
    });
  }

  #setupProgress(bytes, onProgress) {
    let uploaded = 0;
    onProgress(0);

    return (chunkLength) => {
      uploaded += chunkLength;
      onProgress((100 / bytes) * uploaded);
    };
  }
}
