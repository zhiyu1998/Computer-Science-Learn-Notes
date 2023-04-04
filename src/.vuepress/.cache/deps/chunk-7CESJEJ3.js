import {
  getConfig,
  sanitizeText
} from "./chunk-W3FTNUPT.js";

// node_modules/mermaid/dist/commonDb-2ace122b.js
var title = "";
var diagramTitle = "";
var description = "";
var sanitizeText2 = (txt) => sanitizeText(txt, getConfig());
var clear = function() {
  title = "";
  description = "";
  diagramTitle = "";
};
var setAccTitle = function(txt) {
  title = sanitizeText2(txt).replace(/^\s+/g, "");
};
var getAccTitle = function() {
  return title || diagramTitle;
};
var setAccDescription = function(txt) {
  description = sanitizeText2(txt).replace(/\n\s+/g, "\n");
};
var getAccDescription = function() {
  return description;
};
var setDiagramTitle = function(txt) {
  diagramTitle = sanitizeText2(txt);
};
var getDiagramTitle = function() {
  return diagramTitle;
};
var commonDb = {
  setAccTitle,
  getAccTitle,
  setDiagramTitle,
  getDiagramTitle,
  getAccDescription,
  setAccDescription,
  clear
};
var commonDb$1 = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear,
  default: commonDb,
  getAccDescription,
  getAccTitle,
  getDiagramTitle,
  setAccDescription,
  setAccTitle,
  setDiagramTitle
}, Symbol.toStringTag, { value: "Module" }));

export {
  clear,
  setAccTitle,
  getAccTitle,
  setAccDescription,
  getAccDescription,
  setDiagramTitle,
  getDiagramTitle,
  commonDb$1
};
//# sourceMappingURL=chunk-7CESJEJ3.js.map
