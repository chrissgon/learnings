import Controller from "./controller.js";
import Service from "./service.js";
import View from "./view.js";

const worker = new Worker("./src/worker.js", {
  type: "module",
});

Controller.init({
  view: new View(),
  worker,
});

Number.prototype.formatBytes = function () {
  var units = ["B", "KB", "MB", "GB", "TB"],
    bytes = this,
    i;

  for (i = 0; bytes >= 1024 && i < 4; i++) {
    bytes /= 1024;
  }

  return bytes.toFixed(2) + units[i];
};
