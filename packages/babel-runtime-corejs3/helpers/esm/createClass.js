import _Object$defineProperty from "core-js-pure/features/object/define-property.js";
import toPropertyKey from "./toPropertyKey.js";
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), _Object$defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), _Object$defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
export { _createClass as default };