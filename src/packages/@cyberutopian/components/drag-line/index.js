import st, { useState as it, useRef as lt } from "react";
import { g as Ot, a as Et } from "../helps/_commonjsHelpers-aeeeeb92.js";
import ut from "react-dom";
import { a as O } from "../helps/jsx-runtime-c94ad48e.js";
var A = { exports: {} }, ct = {}, ft = { exports: {} }, Rt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Xt = Rt, Yt = Xt;
function dt() {
}
function pt() {
}
pt.resetWarningCache = dt;
var Wt = function() {
  function t(r, o, a, u, f, d) {
    if (d !== Yt) {
      var g = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw g.name = "Invariant Violation", g;
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: pt,
    resetWarningCache: dt
  };
  return n.PropTypes = n, n;
};
ft.exports = Wt();
var ht = ft.exports;
function gt(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = gt(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function ot() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = gt(t)) && (r && (r += " "), r += e);
  return r;
}
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ot,
  default: ot
}, Symbol.toStringTag, { value: "Module" })), Lt = /* @__PURE__ */ Ot(Ft);
var h = {}, T = {};
Object.defineProperty(T, "__esModule", {
  value: !0
});
T.dontSetMe = Bt;
T.findInArray = Ut;
T.int = It;
T.isFunction = $t;
T.isNum = At;
function Ut(t, e) {
  for (let n = 0, r = t.length; n < r; n++)
    if (e.apply(e, [t[n], n, t]))
      return t[n];
}
function $t(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Function]";
}
function At(t) {
  return typeof t == "number" && !isNaN(t);
}
function It(t) {
  return parseInt(t, 10);
}
function Bt(t, e, n) {
  if (t[e])
    return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var E = {};
Object.defineProperty(E, "__esModule", {
  value: !0
});
E.browserPrefixToKey = yt;
E.browserPrefixToStyle = Ht;
E.default = void 0;
E.getPrefix = mt;
const k = ["Moz", "Webkit", "O", "ms"];
function mt() {
  var t;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (t = window.document) === null || t === void 0 || (t = t.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || e in n)
    return "";
  for (let r = 0; r < k.length; r++)
    if (yt(e, k[r]) in n)
      return k[r];
  return "";
}
function yt(t, e) {
  return e ? "".concat(e).concat(Vt(t)) : t;
}
function Ht(t, e) {
  return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
}
function Vt(t) {
  let e = "", n = !0;
  for (let r = 0; r < t.length; r++)
    n ? (e += t[r].toUpperCase(), n = !1) : t[r] === "-" ? n = !0 : e += t[r];
  return e;
}
E.default = mt();
Object.defineProperty(h, "__esModule", {
  value: !0
});
h.addClassName = St;
h.addEvent = Gt;
h.addUserSelectStyles = oe;
h.createCSSTransform = te;
h.createSVGTransform = ee;
h.getTouch = ne;
h.getTouchIdentifier = re;
h.getTranslation = j;
h.innerHeight = Jt;
h.innerWidth = Qt;
h.matchesSelector = Dt;
h.matchesSelectorAndParentsTo = kt;
h.offsetXYFromParent = Zt;
h.outerHeight = jt;
h.outerWidth = Kt;
h.removeClassName = bt;
h.removeEvent = zt;
h.removeUserSelectStyles = ae;
var w = T, at = qt(E);
function vt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (vt = function(r) {
    return r ? n : e;
  })(t);
}
function qt(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = vt(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in t)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var u = o ? Object.getOwnPropertyDescriptor(t, a) : null;
      u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = t[a];
    }
  return r.default = t, n && n.set(t, r), r;
}
let $ = "";
function Dt(t, e) {
  return $ || ($ = (0, w.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, w.isFunction)(t[n]);
  })), (0, w.isFunction)(t[$]) ? t[$](e) : !1;
}
function kt(t, e, n) {
  let r = t;
  do {
    if (Dt(r, e))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Gt(t, e, n, r) {
  if (!t)
    return;
  const o = {
    capture: !0,
    ...r
  };
  t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
}
function zt(t, e, n, r) {
  if (!t)
    return;
  const o = {
    capture: !0,
    ...r
  };
  t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null;
}
function jt(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, w.int)(n.borderTopWidth), e += (0, w.int)(n.borderBottomWidth), e;
}
function Kt(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e += (0, w.int)(n.borderLeftWidth), e += (0, w.int)(n.borderRightWidth), e;
}
function Jt(t) {
  let e = t.clientHeight;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, w.int)(n.paddingTop), e -= (0, w.int)(n.paddingBottom), e;
}
function Qt(t) {
  let e = t.clientWidth;
  const n = t.ownerDocument.defaultView.getComputedStyle(t);
  return e -= (0, w.int)(n.paddingLeft), e -= (0, w.int)(n.paddingRight), e;
}
function Zt(t, e, n) {
  const o = e === e.ownerDocument.body ? {
    left: 0,
    top: 0
  } : e.getBoundingClientRect(), a = (t.clientX + e.scrollLeft - o.left) / n, u = (t.clientY + e.scrollTop - o.top) / n;
  return {
    x: a,
    y: u
  };
}
function te(t, e) {
  const n = j(t, e, "px");
  return {
    [(0, at.browserPrefixToKey)("transform", at.default)]: n
  };
}
function ee(t, e) {
  return j(t, e, "");
}
function j(t, e, n) {
  let {
    x: r,
    y: o
  } = t, a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
  if (e) {
    const u = "".concat(typeof e.x == "string" ? e.x : e.x + n), f = "".concat(typeof e.y == "string" ? e.y : e.y + n);
    a = "translate(".concat(u, ", ").concat(f, ")") + a;
  }
  return a;
}
function ne(t, e) {
  return t.targetTouches && (0, w.findInArray)(t.targetTouches, (n) => e === n.identifier) || t.changedTouches && (0, w.findInArray)(t.changedTouches, (n) => e === n.identifier);
}
function re(t) {
  if (t.targetTouches && t.targetTouches[0])
    return t.targetTouches[0].identifier;
  if (t.changedTouches && t.changedTouches[0])
    return t.changedTouches[0].identifier;
}
function oe(t) {
  if (!t)
    return;
  let e = t.getElementById("react-draggable-style-el");
  e || (e = t.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(e)), t.body && St(t.body, "react-draggable-transparent-selection");
}
function ae(t) {
  if (t)
    try {
      if (t.body && bt(t.body, "react-draggable-transparent-selection"), t.selection)
        t.selection.empty();
      else {
        const e = (t.defaultView || window).getSelection();
        e && e.type !== "Caret" && e.removeAllRanges();
      }
    } catch {
    }
}
function St(t, e) {
  t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
}
function bt(t, e) {
  t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
}
var x = {};
Object.defineProperty(x, "__esModule", {
  value: !0
});
x.canDragX = le;
x.canDragY = ue;
x.createCoreData = fe;
x.createDraggableData = de;
x.getBoundPosition = se;
x.getControlPosition = ce;
x.snapToGrid = ie;
var b = T, Y = h;
function se(t, e, n) {
  if (!t.props.bounds)
    return [e, n];
  let {
    bounds: r
  } = t.props;
  r = typeof r == "string" ? r : pe(r);
  const o = K(t);
  if (typeof r == "string") {
    const {
      ownerDocument: a
    } = o, u = a.defaultView;
    let f;
    if (r === "parent" ? f = o.parentNode : f = a.querySelector(r), !(f instanceof u.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const d = f, g = u.getComputedStyle(o), D = u.getComputedStyle(d);
    r = {
      left: -o.offsetLeft + (0, b.int)(D.paddingLeft) + (0, b.int)(g.marginLeft),
      top: -o.offsetTop + (0, b.int)(D.paddingTop) + (0, b.int)(g.marginTop),
      right: (0, Y.innerWidth)(d) - (0, Y.outerWidth)(o) - o.offsetLeft + (0, b.int)(D.paddingRight) - (0, b.int)(g.marginRight),
      bottom: (0, Y.innerHeight)(d) - (0, Y.outerHeight)(o) - o.offsetTop + (0, b.int)(D.paddingBottom) - (0, b.int)(g.marginBottom)
    };
  }
  return (0, b.isNum)(r.right) && (e = Math.min(e, r.right)), (0, b.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, b.isNum)(r.left) && (e = Math.max(e, r.left)), (0, b.isNum)(r.top) && (n = Math.max(n, r.top)), [e, n];
}
function ie(t, e, n) {
  const r = Math.round(e / t[0]) * t[0], o = Math.round(n / t[1]) * t[1];
  return [r, o];
}
function le(t) {
  return t.props.axis === "both" || t.props.axis === "x";
}
function ue(t) {
  return t.props.axis === "both" || t.props.axis === "y";
}
function ce(t, e, n) {
  const r = typeof e == "number" ? (0, Y.getTouch)(t, e) : null;
  if (typeof e == "number" && !r)
    return null;
  const o = K(n), a = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Y.offsetXYFromParent)(r || t, a, n.props.scale);
}
function fe(t, e, n) {
  const r = !(0, b.isNum)(t.lastX), o = K(t);
  return r ? {
    node: o,
    deltaX: 0,
    deltaY: 0,
    lastX: e,
    lastY: n,
    x: e,
    y: n
  } : {
    node: o,
    deltaX: e - t.lastX,
    deltaY: n - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: e,
    y: n
  };
}
function de(t, e) {
  const n = t.props.scale;
  return {
    node: e.node,
    x: t.state.x + e.deltaX / n,
    y: t.state.y + e.deltaY / n,
    deltaX: e.deltaX / n,
    deltaY: e.deltaY / n,
    lastX: t.state.x,
    lastY: t.state.y
  };
}
function pe(t) {
  return {
    left: t.left,
    top: t.top,
    right: t.right,
    bottom: t.bottom
  };
}
function K(t) {
  const e = t.findDOMNode();
  if (!e)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return e;
}
var I = {}, B = {};
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.default = he;
function he() {
}
Object.defineProperty(I, "__esModule", {
  value: !0
});
I.default = void 0;
var G = me(st), S = J(ht), ge = J(ut), y = h, C = x, z = T, F = J(B);
function J(t) {
  return t && t.__esModule ? t : { default: t };
}
function wt(t) {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (wt = function(r) {
    return r ? n : e;
  })(t);
}
function me(t, e) {
  if (!e && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var n = wt(e);
  if (n && n.has(t))
    return n.get(t);
  var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in t)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
      var u = o ? Object.getOwnPropertyDescriptor(t, a) : null;
      u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = t[a];
    }
  return r.default = t, n && n.set(t, r), r;
}
function v(t, e, n) {
  return e = ye(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ye(t) {
  var e = ve(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function ve(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
const P = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let M = P.mouse, H = class extends G.Component {
  constructor() {
    super(...arguments), v(this, "dragging", !1), v(this, "lastX", NaN), v(this, "lastY", NaN), v(this, "touchIdentifier", null), v(this, "mounted", !1), v(this, "handleDragStart", (e) => {
      if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(e.target instanceof r.defaultView.Node) || this.props.handle && !(0, y.matchesSelectorAndParentsTo)(e.target, this.props.handle, n) || this.props.cancel && (0, y.matchesSelectorAndParentsTo)(e.target, this.props.cancel, n))
        return;
      e.type === "touchstart" && e.preventDefault();
      const o = (0, y.getTouchIdentifier)(e);
      this.touchIdentifier = o;
      const a = (0, C.getControlPosition)(e, o, this);
      if (a == null)
        return;
      const {
        x: u,
        y: f
      } = a, d = (0, C.createCoreData)(this, u, f);
      (0, F.default)("DraggableCore: handleDragStart: %j", d), (0, F.default)("calling", this.props.onStart), !(this.props.onStart(e, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, y.addUserSelectStyles)(r), this.dragging = !0, this.lastX = u, this.lastY = f, (0, y.addEvent)(r, M.move, this.handleDrag), (0, y.addEvent)(r, M.stop, this.handleDragStop));
    }), v(this, "handleDrag", (e) => {
      const n = (0, C.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: o
      } = n;
      if (Array.isArray(this.props.grid)) {
        let f = r - this.lastX, d = o - this.lastY;
        if ([f, d] = (0, C.snapToGrid)(this.props.grid, f, d), !f && !d)
          return;
        r = this.lastX + f, o = this.lastY + d;
      }
      const a = (0, C.createCoreData)(this, r, o);
      if ((0, F.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(e, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = r, this.lastY = o;
    }), v(this, "handleDragStop", (e) => {
      if (!this.dragging)
        return;
      const n = (0, C.getControlPosition)(e, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: o
      } = n;
      if (Array.isArray(this.props.grid)) {
        let d = r - this.lastX || 0, g = o - this.lastY || 0;
        [d, g] = (0, C.snapToGrid)(this.props.grid, d, g), r = this.lastX + d, o = this.lastY + g;
      }
      const a = (0, C.createCoreData)(this, r, o);
      if (this.props.onStop(e, a) === !1 || this.mounted === !1)
        return !1;
      const f = this.findDOMNode();
      f && this.props.enableUserSelectHack && (0, y.removeUserSelectStyles)(f.ownerDocument), (0, F.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, f && ((0, F.default)("DraggableCore: Removing handlers"), (0, y.removeEvent)(f.ownerDocument, M.move, this.handleDrag), (0, y.removeEvent)(f.ownerDocument, M.stop, this.handleDragStop));
    }), v(this, "onMouseDown", (e) => (M = P.mouse, this.handleDragStart(e))), v(this, "onMouseUp", (e) => (M = P.mouse, this.handleDragStop(e))), v(this, "onTouchStart", (e) => (M = P.touch, this.handleDragStart(e))), v(this, "onTouchEnd", (e) => (M = P.touch, this.handleDragStop(e)));
  }
  componentDidMount() {
    this.mounted = !0;
    const e = this.findDOMNode();
    e && (0, y.addEvent)(e, P.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const e = this.findDOMNode();
    if (e) {
      const {
        ownerDocument: n
      } = e;
      (0, y.removeEvent)(n, P.mouse.move, this.handleDrag), (0, y.removeEvent)(n, P.touch.move, this.handleDrag), (0, y.removeEvent)(n, P.mouse.stop, this.handleDragStop), (0, y.removeEvent)(n, P.touch.stop, this.handleDragStop), (0, y.removeEvent)(e, P.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, y.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var e, n;
    return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : ge.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ G.cloneElement(G.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
I.default = H;
v(H, "displayName", "DraggableCore");
v(H, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: S.default.bool,
  children: S.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: S.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: S.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, e) {
    if (t[e] && t[e].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: S.default.arrayOf(S.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: S.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: S.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: S.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: S.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: S.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: S.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: S.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: S.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: z.dontSetMe,
  style: z.dontSetMe,
  transform: z.dontSetMe
});
v(H, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), t.default = void 0;
  var e = V(st), n = D(ht), r = D(ut), o = D(Lt), a = h, u = x, f = T, d = D(I), g = D(B);
  function D(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function _(s) {
    if (typeof WeakMap != "function")
      return null;
    var i = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (_ = function(l) {
      return l ? c : i;
    })(s);
  }
  function V(s, i) {
    if (!i && s && s.__esModule)
      return s;
    if (s === null || typeof s != "object" && typeof s != "function")
      return { default: s };
    var c = _(i);
    if (c && c.has(s))
      return c.get(s);
    var l = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in s)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(s, p)) {
        var N = m ? Object.getOwnPropertyDescriptor(s, p) : null;
        N && (N.get || N.set) ? Object.defineProperty(l, p, N) : l[p] = s[p];
      }
    return l.default = s, c && c.set(s, l), l;
  }
  function q() {
    return q = Object.assign ? Object.assign.bind() : function(s) {
      for (var i = 1; i < arguments.length; i++) {
        var c = arguments[i];
        for (var l in c)
          Object.prototype.hasOwnProperty.call(c, l) && (s[l] = c[l]);
      }
      return s;
    }, q.apply(this, arguments);
  }
  function R(s, i, c) {
    return i = _t(i), i in s ? Object.defineProperty(s, i, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : s[i] = c, s;
  }
  function _t(s) {
    var i = Nt(s, "string");
    return typeof i == "symbol" ? i : String(i);
  }
  function Nt(s, i) {
    if (typeof s != "object" || s === null)
      return s;
    var c = s[Symbol.toPrimitive];
    if (c !== void 0) {
      var l = c.call(s, i || "default");
      if (typeof l != "object")
        return l;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(s);
  }
  class L extends e.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(i, c) {
      let {
        position: l
      } = i, {
        prevPropsPosition: m
      } = c;
      return l && (!m || l.x !== m.x || l.y !== m.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
        position: l,
        prevPropsPosition: m
      }), {
        x: l.x,
        y: l.y,
        prevPropsPosition: {
          ...l
        }
      }) : null;
    }
    constructor(i) {
      super(i), R(this, "onDragStart", (c, l) => {
        if ((0, g.default)("Draggable: onDragStart: %j", l), this.props.onStart(c, (0, u.createDraggableData)(this, l)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), R(this, "onDrag", (c, l) => {
        if (!this.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", l);
        const m = (0, u.createDraggableData)(this, l), p = {
          x: m.x,
          y: m.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: W,
            y: X
          } = p;
          p.x += this.state.slackX, p.y += this.state.slackY;
          const [U, Q] = (0, u.getBoundPosition)(this, p.x, p.y);
          p.x = U, p.y = Q, p.slackX = this.state.slackX + (W - p.x), p.slackY = this.state.slackY + (X - p.y), m.x = p.x, m.y = p.y, m.deltaX = p.x - this.state.x, m.deltaY = p.y - this.state.y;
        }
        if (this.props.onDrag(c, m) === !1)
          return !1;
        this.setState(p);
      }), R(this, "onDragStop", (c, l) => {
        if (!this.state.dragging || this.props.onStop(c, (0, u.createDraggableData)(this, l)) === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", l);
        const p = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: W,
            y: X
          } = this.props.position;
          p.x = W, p.y = X;
        }
        this.setState(p);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: i.position ? i.position.x : i.defaultPosition.x,
        y: i.position ? i.position.y : i.defaultPosition.y,
        prevPropsPosition: {
          ...i.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, i.position && !(i.onDrag || i.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var i, c;
      return (i = (c = this.props) === null || c === void 0 || (c = c.nodeRef) === null || c === void 0 ? void 0 : c.current) !== null && i !== void 0 ? i : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: i,
        bounds: c,
        children: l,
        defaultPosition: m,
        defaultClassName: p,
        defaultClassNameDragging: N,
        defaultClassNameDragged: W,
        position: X,
        positionOffset: U,
        scale: Q,
        ...Ct
      } = this.props;
      let Z = {}, tt = null;
      const et = !!!X || this.state.dragging, nt = X || m, rt = {
        // Set left if horizontal drag is enabled
        x: (0, u.canDragX)(this) && et ? this.state.x : nt.x,
        // Set top if vertical drag is enabled
        y: (0, u.canDragY)(this) && et ? this.state.y : nt.y
      };
      this.state.isElementSVG ? tt = (0, a.createSVGTransform)(rt, U) : Z = (0, a.createCSSTransform)(rt, U);
      const Mt = (0, o.default)(l.props.className || "", p, {
        [N]: this.state.dragging,
        [W]: this.state.dragged
      });
      return /* @__PURE__ */ e.createElement(d.default, q({}, Ct, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ e.cloneElement(e.Children.only(l), {
        className: Mt,
        style: {
          ...l.props.style,
          ...Z
        },
        transform: tt
      }));
    }
  }
  t.default = L, R(L, "displayName", "Draggable"), R(L, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...d.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: n.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: f.dontSetMe,
    style: f.dontSetMe,
    transform: f.dontSetMe
  }), R(L, "defaultProps", {
    ...d.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(ct);
const {
  default: Pt,
  DraggableCore: De
} = ct;
A.exports = Pt;
A.exports.default = Pt;
A.exports.DraggableCore = De;
var Se = A.exports;
const Tt = /* @__PURE__ */ Et(Se), be = ({
  initWidth: t,
  offsetWidth: e,
  style: n,
  position: r,
  bounds: o,
  onChange: a
}) => {
  const [u, f] = it(r), d = lt(null);
  return /* @__PURE__ */ O("div", {
    className: "w-[3px] flex absolute z-50 bottom-0 top-0 bg-transparent",
    style: {
      ...n || {},
      left: `${t}px`
    },
    children: /* @__PURE__ */ O(Tt, {
      axis: "x",
      nodeRef: d,
      position: u,
      bounds: o || {
        right: t - e,
        left: -100
      },
      onDrag: (g, D) => {
        const _ = t + D.x;
        return f({
          x: D.x,
          y: 0
        }), a(_);
      },
      children: /* @__PURE__ */ O("div", {
        ref: d,
        className: "h-full cursor-ew-resize bg-transparent hover:bg-fill-6 w-[3px]"
      })
    })
  });
}, we = ({
  className: t,
  style: e,
  initHeight: n,
  offsetHeight: r,
  bounds: o,
  position: a,
  onChange: u
}) => {
  const [f, d] = it({
    x: 0,
    y: 0
  }), g = lt(null);
  return /* @__PURE__ */ O("div", {
    className: "h-[3px] flex absolute right-0 left-0 z-50 flex-col bg-transparent " + t,
    style: {
      ...e || {},
      top: `${n}px`
    },
    children: /* @__PURE__ */ O(Tt, {
      axis: "y",
      nodeRef: g,
      position: a || f,
      bounds: o || {
        top: r - n,
        bottom: 300
      },
      onDrag: (D, _) => {
        const V = n + _.y;
        return d({
          x: 0,
          y: _.y
        }), u(V, _);
      },
      children: /* @__PURE__ */ O("div", {
        ref: g,
        className: "w-full cursor-ns-resize bg-transparent hover:bg-fill-6 h-[3px]"
      })
    })
  });
}, xt = () => /* @__PURE__ */ O("div", {
  children: "请使用DragLine的子组件"
});
xt.HorizontalDragLine = be;
xt.VerticalDragLine = we;
export {
  xt as DragLine
};
