import {
  flowRendererV2,
  flowStyles
} from "./chunk-4MTTDY6K.js";
import {
  flowDb,
  parser$1
} from "./chunk-MZZGKJ3Q.js";
import "./chunk-TCPVT3RZ.js";
import "./chunk-4S5ZMBXZ.js";
import "./chunk-CBAROFL4.js";
import "./chunk-TLWFXHBW.js";
import "./chunk-7SJCSEDE.js";
import "./chunk-3PYFJK5A.js";
import "./chunk-YV43AHMX.js";
import {
  require_dist
} from "./chunk-5G4YUUOS.js";
import "./chunk-R5262Q2Q.js";
import "./chunk-7CESJEJ3.js";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-W3FTNUPT.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-4c9a7611.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-4c9a7611-EH5QPAPI.js.map
