import Service from "./service.js";
postMessage({ eventType: "alive" });
const service = new Service();

onmessage = ({ data }) => {
  const { query, file } = data;
  service.processFile({
    query,
    file,
    onOcurrenceUpdate(args) {
      postMessage({ eventType: "ocurrenceUpdate", ...args });
    },
    onProgress(percent) {
      postMessage({ eventType: "progress", percent });
    },
  });
};
