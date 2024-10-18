import x from "react";
var f = { exports: {} }, s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = x, m = Symbol.for("react.element"), y = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
function i(o, r, p) {
  var e, t = {}, n = null, _ = null;
  p !== void 0 && (n = "" + p), r.key !== void 0 && (n = "" + r.key), r.ref !== void 0 && (_ = r.ref);
  for (e in r)
    a.call(r, e) && !c.hasOwnProperty(e) && (t[e] = r[e]);
  if (o && o.defaultProps)
    for (e in r = o.defaultProps, r)
      t[e] === void 0 && (t[e] = r[e]);
  return { $$typeof: m, type: o, key: n, ref: _, props: t, _owner: j.current };
}
s.Fragment = y;
s.jsx = i;
s.jsxs = i;
f.exports = s;
var u = f.exports;
const d = u.jsx, O = u.jsxs;
export {
  d as a,
  O as j
};
