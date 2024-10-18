import { useRef as $n, useEffect as mt, useState as Eo, useCallback as Md, useMemo as Pd } from "react";
import { a as yt, j as Wd } from "../helps/jsx-runtime-c94ad48e.js";
import { c as vt } from "../helps/_commonjsHelpers-aeeeeb92.js";
function Dd(s, p, f) {
  return p in s ? Object.defineProperty(s, p, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[p] = f, s;
}
function Co(s, p) {
  var f = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(s);
    p && (m = m.filter(function(O) {
      return Object.getOwnPropertyDescriptor(s, O).enumerable;
    })), f.push.apply(f, m);
  }
  return f;
}
function To(s) {
  for (var p = 1; p < arguments.length; p++) {
    var f = arguments[p] != null ? arguments[p] : {};
    p % 2 ? Co(Object(f), !0).forEach(function(m) {
      Dd(s, m, f[m]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(f)) : Co(Object(f)).forEach(function(m) {
      Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(f, m));
    });
  }
  return s;
}
function Bd(s, p) {
  if (s == null)
    return {};
  var f = {}, m = Object.keys(s), O, E;
  for (E = 0; E < m.length; E++)
    O = m[E], !(p.indexOf(O) >= 0) && (f[O] = s[O]);
  return f;
}
function Fd(s, p) {
  if (s == null)
    return {};
  var f = Bd(s, p), m, O;
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(s);
    for (O = 0; O < E.length; O++)
      m = E[O], !(p.indexOf(m) >= 0) && Object.prototype.propertyIsEnumerable.call(s, m) && (f[m] = s[m]);
  }
  return f;
}
function Ud(s, p) {
  return Nd(s) || Gd(s, p) || $d(s, p) || Hd();
}
function Nd(s) {
  if (Array.isArray(s))
    return s;
}
function Gd(s, p) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
    var f = [], m = !0, O = !1, E = void 0;
    try {
      for (var L = s[Symbol.iterator](), X; !(m = (X = L.next()).done) && (f.push(X.value), !(p && f.length === p)); m = !0)
        ;
    } catch ($) {
      O = !0, E = $;
    } finally {
      try {
        !m && L.return != null && L.return();
      } finally {
        if (O)
          throw E;
      }
    }
    return f;
  }
}
function $d(s, p) {
  if (s) {
    if (typeof s == "string")
      return Lo(s, p);
    var f = Object.prototype.toString.call(s).slice(8, -1);
    if (f === "Object" && s.constructor && (f = s.constructor.name), f === "Map" || f === "Set")
      return Array.from(s);
    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))
      return Lo(s, p);
  }
}
function Lo(s, p) {
  (p == null || p > s.length) && (p = s.length);
  for (var f = 0, m = new Array(p); f < p; f++)
    m[f] = s[f];
  return m;
}
function Hd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qd(s, p, f) {
  return p in s ? Object.defineProperty(s, p, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[p] = f, s;
}
function Mo(s, p) {
  var f = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(s);
    p && (m = m.filter(function(O) {
      return Object.getOwnPropertyDescriptor(s, O).enumerable;
    })), f.push.apply(f, m);
  }
  return f;
}
function Po(s) {
  for (var p = 1; p < arguments.length; p++) {
    var f = arguments[p] != null ? arguments[p] : {};
    p % 2 ? Mo(Object(f), !0).forEach(function(m) {
      qd(s, m, f[m]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(f)) : Mo(Object(f)).forEach(function(m) {
      Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(f, m));
    });
  }
  return s;
}
function Kd() {
  for (var s = arguments.length, p = new Array(s), f = 0; f < s; f++)
    p[f] = arguments[f];
  return function(m) {
    return p.reduceRight(function(O, E) {
      return E(O);
    }, m);
  };
}
function xt(s) {
  return function p() {
    for (var f = this, m = arguments.length, O = new Array(m), E = 0; E < m; E++)
      O[E] = arguments[E];
    return O.length >= s.length ? s.apply(this, O) : function() {
      for (var L = arguments.length, X = new Array(L), $ = 0; $ < L; $++)
        X[$] = arguments[$];
      return p.apply(f, [].concat(O, X));
    };
  };
}
function xr(s) {
  return {}.toString.call(s).includes("Object");
}
function zd(s) {
  return !Object.keys(s).length;
}
function Ot(s) {
  return typeof s == "function";
}
function Yd(s, p) {
  return Object.prototype.hasOwnProperty.call(s, p);
}
function Zd(s, p) {
  return xr(p) || Ae("changeType"), Object.keys(p).some(function(f) {
    return !Yd(s, f);
  }) && Ae("changeField"), p;
}
function Xd(s) {
  Ot(s) || Ae("selectorType");
}
function Jd(s) {
  Ot(s) || xr(s) || Ae("handlerType"), xr(s) && Object.values(s).some(function(p) {
    return !Ot(p);
  }) && Ae("handlersType");
}
function Qd(s) {
  s || Ae("initialIsRequired"), xr(s) || Ae("initialType"), zd(s) && Ae("initialContent");
}
function Vd(s, p) {
  throw new Error(s[p] || s.default);
}
var kd = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Ae = xt(Vd)(kd), mr = {
  changes: Zd,
  selector: Xd,
  handler: Jd,
  initial: Qd
};
function jd(s) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  mr.initial(s), mr.handler(p);
  var f = {
    current: s
  }, m = xt(t_)(f, p), O = xt(e_)(f), E = xt(mr.changes)(s), L = xt(n_)(f);
  function X() {
    var an = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(On) {
      return On;
    };
    return mr.selector(an), an(f.current);
  }
  function $(an) {
    Kd(m, O, E, L)(an);
  }
  return [X, $];
}
function n_(s, p) {
  return Ot(p) ? p(s.current) : p;
}
function e_(s, p) {
  return s.current = Po(Po({}, s.current), p), p;
}
function t_(s, p, f) {
  return Ot(p) ? p(s.current) : Object.keys(f).forEach(function(m) {
    var O;
    return (O = p[m]) === null || O === void 0 ? void 0 : O.call(p, s.current[m]);
  }), f;
}
var r_ = {
  create: jd
}, i_ = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
function u_(s) {
  return function p() {
    for (var f = this, m = arguments.length, O = new Array(m), E = 0; E < m; E++)
      O[E] = arguments[E];
    return O.length >= s.length ? s.apply(this, O) : function() {
      for (var L = arguments.length, X = new Array(L), $ = 0; $ < L; $++)
        X[$] = arguments[$];
      return p.apply(f, [].concat(O, X));
    };
  };
}
function f_(s) {
  return {}.toString.call(s).includes("Object");
}
function o_(s) {
  return s || Wo("configIsRequired"), f_(s) || Wo("configType"), s.urls ? (a_(), {
    paths: {
      vs: s.urls.monacoBase
    }
  }) : s;
}
function a_() {
  console.warn(Bo.deprecation);
}
function l_(s, p) {
  throw new Error(s[p] || s.default);
}
var Bo = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, Wo = u_(l_)(Bo), c_ = {
  config: o_
}, s_ = function() {
  for (var p = arguments.length, f = new Array(p), m = 0; m < p; m++)
    f[m] = arguments[m];
  return function(O) {
    return f.reduceRight(function(E, L) {
      return L(E);
    }, O);
  };
};
function Fo(s, p) {
  return Object.keys(p).forEach(function(f) {
    p[f] instanceof Object && s[f] && Object.assign(p[f], Fo(s[f], p[f]));
  }), To(To({}, s), p);
}
var h_ = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Yi(s) {
  var p = !1, f = new Promise(function(m, O) {
    s.then(function(E) {
      return p ? O(h_) : m(E);
    }), s.catch(O);
  });
  return f.cancel = function() {
    return p = !0;
  }, f;
}
var g_ = r_.create({
  config: i_,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Uo = Ud(g_, 2), bt = Uo[0], yr = Uo[1];
function p_(s) {
  var p = c_.config(s), f = p.monaco, m = Fd(p, ["monaco"]);
  yr(function(O) {
    return {
      config: Fo(O.config, m),
      monaco: f
    };
  });
}
function d_() {
  var s = bt(function(p) {
    var f = p.monaco, m = p.isInitialized, O = p.resolve;
    return {
      monaco: f,
      isInitialized: m,
      resolve: O
    };
  });
  if (!s.isInitialized) {
    if (yr({
      isInitialized: !0
    }), s.monaco)
      return s.resolve(s.monaco), Yi(Zi);
    if (window.monaco && window.monaco.editor)
      return No(window.monaco), s.resolve(window.monaco), Yi(Zi);
    s_(__, w_)(m_);
  }
  return Yi(Zi);
}
function __(s) {
  return document.body.appendChild(s);
}
function v_(s) {
  var p = document.createElement("script");
  return s && (p.src = s), p;
}
function w_(s) {
  var p = bt(function(m) {
    var O = m.config, E = m.reject;
    return {
      config: O,
      reject: E
    };
  }), f = v_("".concat(p.config.paths.vs, "/loader.js"));
  return f.onload = function() {
    return s();
  }, f.onerror = p.reject, f;
}
function m_() {
  var s = bt(function(f) {
    var m = f.config, O = f.resolve, E = f.reject;
    return {
      config: m,
      resolve: O,
      reject: E
    };
  }), p = window.require;
  p.config(s.config), p(["vs/editor/editor.main"], function(f) {
    No(f), s.resolve(f);
  }, function(f) {
    s.reject(f);
  });
}
function No(s) {
  bt().monaco || yr({
    monaco: s
  });
}
function x_() {
  return bt(function(s) {
    var p = s.monaco;
    return p;
  });
}
var Zi = new Promise(function(s, p) {
  return yr({
    resolve: s,
    reject: p
  });
}), Xi = {
  config: p_,
  init: d_,
  __getMonacoInstance: x_
};
function At(s, p, f = !0) {
  const m = $n(!0);
  mt(
    m.current || !f ? () => {
      m.current = !1;
    } : s,
    p
  );
}
function A_(s) {
  s.editor.defineTheme("cyber", {
    base: "vs",
    inherit: !0,
    rules: [
      {
        token: "comment",
        foreground: "#898A8F"
      },
      {
        token: "keyword",
        foreground: "#A626A4"
      },
      {
        token: "identifier",
        foreground: "#0184BC"
      },
      {
        token: "property",
        foreground: "#4078F2"
      },
      {
        token: "variable",
        foreground: "#4078F2"
      },
      {
        token: "operator",
        foreground: "#D25D66"
      },
      {
        token: "string",
        foreground: "#4D9C4C"
      },
      {
        token: "number",
        foreground: "#986801"
      },
      {
        token: "flow",
        foreground: "#ce63eb"
      }
    ],
    colors: {
      "editorLineNumber.foreground": "#86909c"
    }
  }), s.editor.setTheme("cyber");
}
function Do(s, p, f, m) {
  return y_(s, m) || O_(s, p, f, m);
}
function y_(s, p) {
  return s.editor.getModel(Go(s, p));
}
function O_(s, p, f, m) {
  return s.editor.createModel(p, f, m ? Go(s, m) : void 0);
}
function Go(s, p) {
  return s.Uri.parse(p);
}
const b_ = () => /* @__PURE__ */ yt("div", {
  className: "flex justify-center items-center w-full h-full",
  children: "loading..."
}), $o = (s) => {
  const {
    width: p,
    height: f,
    onMount: m,
    beforeMount: O,
    onChange: E,
    value: L,
    path: X,
    language: $,
    line: an,
    overrideServices: On,
    options: gn = {}
  } = s, [en, Ln] = Eo(!1), [Hn, jn] = Eo(!0), q = $n(null), W = $n(null), J = $n(null), ln = $n(m), bn = $n(O), vn = $n(L), cn = $n(), wn = $n(!1), ne = $n(!1), Xe = () => {
    var z, Q;
    (z = cn.current) == null || z.dispose(), (Q = W.current.getModel()) == null || Q.dispose(), W.current.dispose();
  }, Or = () => {
    q.current && A_(q.current);
  };
  mt(() => {
    const z = Xi.init();
    return z.then((Q) => (q.current = Q) && jn(!1)).catch((Q) => (Q == null ? void 0 : Q.type) !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => W.current ? Xe() : z.cancel();
  }, []), At(() => {
    var Q, Mn;
    const z = Do(q.current, L || "", $ || "", X || "");
    z !== ((Q = W.current) == null ? void 0 : Q.getModel()) && ((Mn = W.current) == null || Mn.setModel(z));
  }, [X], en), At(() => {
    var z;
    (z = W.current) == null || z.updateOptions(gn);
  }, [gn], en), At(() => {
    !W.current || L === void 0 || (W.current.getOption(q.current.editor.EditorOption.readOnly) ? W.current.setValue(L) : L !== W.current.getValue() && (ne.current = !0, W.current.executeEdits("", [{
      range: W.current.getModel().getFullModelRange(),
      text: L,
      forceMoveMarkers: !0
    }]), W.current.pushUndoStop(), ne.current = !1));
  }, [L], en), At(() => {
    var Q, Mn;
    const z = (Q = W.current) == null ? void 0 : Q.getModel();
    z && $ && ((Mn = q.current) == null || Mn.editor.setModelLanguage(z, $));
  }, [$], en);
  const St = Md(() => {
    var z, Q;
    if (!(!J.current || !q.current) && !wn.current) {
      (z = bn.current) == null || z.call(bn, q.current);
      const Mn = X, br = Do(q.current, L || "", $ || "", Mn || "");
      W.current = (Q = q.current) == null ? void 0 : Q.editor.create(J.current, {
        model: br,
        automaticLayout: !0,
        scrollBeyondLastLine: !1,
        ...gn
      }, On), an !== void 0 && W.current.revealLine(an), Ln(!0), wn.current = !0;
    }
  }, [L, $, X, gn, On, an]);
  return mt(() => {
    var z;
    en && ((z = ln.current) == null || z.call(ln, W.current, q.current), Or());
  }, [en]), mt(() => {
    !Hn && !en && St();
  }, [Hn, en, St]), mt(() => {
    var z, Q;
    en && E && ((z = cn.current) == null || z.dispose(), cn.current = (Q = W.current) == null ? void 0 : Q.onDidChangeModelContent((Mn) => {
      ne.current || E(W.current.getValue(), Mn);
    }));
  }, [en, E]), vn.current = L, /* @__PURE__ */ Wd("section", {
    className: "utopian-editor",
    style: {
      width: p,
      height: f
    },
    children: [!en && /* @__PURE__ */ yt(b_, {}), /* @__PURE__ */ yt("div", {
      ref: J,
      style: {
        width: p,
        height: f,
        ...!en && {
          display: "none"
        }
      }
    })]
  });
};
var Ar = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ar.exports;
(function(s, p) {
  (function() {
    var f, m = "4.17.21", O = 200, E = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", L = "Expected a function", X = "Invalid `variable` option passed into `_.template`", $ = "__lodash_hash_undefined__", an = 500, On = "__lodash_placeholder__", gn = 1, en = 2, Ln = 4, Hn = 1, jn = 2, q = 1, W = 2, J = 4, ln = 8, bn = 16, vn = 32, cn = 64, wn = 128, ne = 256, Xe = 512, Or = 30, St = "...", z = 800, Q = 16, Mn = 1, br = 2, Ho = 3, ye = 1 / 0, se = 9007199254740991, qo = 17976931348623157e292, It = 0 / 0, Jn = 4294967295, Ko = Jn - 1, zo = Jn >>> 1, Yo = [
      ["ary", wn],
      ["bind", q],
      ["bindKey", W],
      ["curry", ln],
      ["curryRight", bn],
      ["flip", Xe],
      ["partial", vn],
      ["partialRight", cn],
      ["rearg", ne]
    ], Me = "[object Arguments]", Rt = "[object Array]", Zo = "[object AsyncFunction]", Je = "[object Boolean]", Qe = "[object Date]", Xo = "[object DOMException]", Et = "[object Error]", Ct = "[object Function]", Ji = "[object GeneratorFunction]", qn = "[object Map]", Ve = "[object Number]", Jo = "[object Null]", ee = "[object Object]", Qi = "[object Promise]", Qo = "[object Proxy]", ke = "[object RegExp]", Kn = "[object Set]", je = "[object String]", Tt = "[object Symbol]", Vo = "[object Undefined]", nt = "[object WeakMap]", ko = "[object WeakSet]", et = "[object ArrayBuffer]", Pe = "[object DataView]", Sr = "[object Float32Array]", Ir = "[object Float64Array]", Rr = "[object Int8Array]", Er = "[object Int16Array]", Cr = "[object Int32Array]", Tr = "[object Uint8Array]", Lr = "[object Uint8ClampedArray]", Mr = "[object Uint16Array]", Pr = "[object Uint32Array]", jo = /\b__p \+= '';/g, na = /\b(__p \+=) '' \+/g, ea = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Vi = /&(?:amp|lt|gt|quot|#39);/g, ki = /[&<>"']/g, ta = RegExp(Vi.source), ra = RegExp(ki.source), ia = /<%-([\s\S]+?)%>/g, ua = /<%([\s\S]+?)%>/g, ji = /<%=([\s\S]+?)%>/g, fa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oa = /^\w*$/, aa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wr = /[\\^$.*+?()[\]{}|]/g, la = RegExp(Wr.source), Dr = /^\s+/, ca = /\s/, sa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ha = /\{\n\/\* \[wrapped with (.+)\] \*/, ga = /,? & /, pa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, da = /[()=,{}\[\]\/\s]/, _a = /\\(\\)?/g, va = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, nu = /\w*$/, wa = /^[-+]0x[0-9a-f]+$/i, ma = /^0b[01]+$/i, xa = /^\[object .+?Constructor\]$/, Aa = /^0o[0-7]+$/i, ya = /^(?:0|[1-9]\d*)$/, Oa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Lt = /($^)/, ba = /['\n\r\u2028\u2029\\]/g, Mt = "\\ud800-\\udfff", Sa = "\\u0300-\\u036f", Ia = "\\ufe20-\\ufe2f", Ra = "\\u20d0-\\u20ff", eu = Sa + Ia + Ra, tu = "\\u2700-\\u27bf", ru = "a-z\\xdf-\\xf6\\xf8-\\xff", Ea = "\\xac\\xb1\\xd7\\xf7", Ca = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ta = "\\u2000-\\u206f", La = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", iu = "A-Z\\xc0-\\xd6\\xd8-\\xde", uu = "\\ufe0e\\ufe0f", fu = Ea + Ca + Ta + La, Br = "['’]", Ma = "[" + Mt + "]", ou = "[" + fu + "]", Pt = "[" + eu + "]", au = "\\d+", Pa = "[" + tu + "]", lu = "[" + ru + "]", cu = "[^" + Mt + fu + au + tu + ru + iu + "]", Fr = "\\ud83c[\\udffb-\\udfff]", Wa = "(?:" + Pt + "|" + Fr + ")", su = "[^" + Mt + "]", Ur = "(?:\\ud83c[\\udde6-\\uddff]){2}", Nr = "[\\ud800-\\udbff][\\udc00-\\udfff]", We = "[" + iu + "]", hu = "\\u200d", gu = "(?:" + lu + "|" + cu + ")", Da = "(?:" + We + "|" + cu + ")", pu = "(?:" + Br + "(?:d|ll|m|re|s|t|ve))?", du = "(?:" + Br + "(?:D|LL|M|RE|S|T|VE))?", _u = Wa + "?", vu = "[" + uu + "]?", Ba = "(?:" + hu + "(?:" + [su, Ur, Nr].join("|") + ")" + vu + _u + ")*", Fa = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ua = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wu = vu + _u + Ba, Na = "(?:" + [Pa, Ur, Nr].join("|") + ")" + wu, Ga = "(?:" + [su + Pt + "?", Pt, Ur, Nr, Ma].join("|") + ")", $a = RegExp(Br, "g"), Ha = RegExp(Pt, "g"), Gr = RegExp(Fr + "(?=" + Fr + ")|" + Ga + wu, "g"), qa = RegExp([
      We + "?" + lu + "+" + pu + "(?=" + [ou, We, "$"].join("|") + ")",
      Da + "+" + du + "(?=" + [ou, We + gu, "$"].join("|") + ")",
      We + "?" + gu + "+" + pu,
      We + "+" + du,
      Ua,
      Fa,
      au,
      Na
    ].join("|"), "g"), Ka = RegExp("[" + hu + Mt + eu + uu + "]"), za = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ya = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Za = -1, Y = {};
    Y[Sr] = Y[Ir] = Y[Rr] = Y[Er] = Y[Cr] = Y[Tr] = Y[Lr] = Y[Mr] = Y[Pr] = !0, Y[Me] = Y[Rt] = Y[et] = Y[Je] = Y[Pe] = Y[Qe] = Y[Et] = Y[Ct] = Y[qn] = Y[Ve] = Y[ee] = Y[ke] = Y[Kn] = Y[je] = Y[nt] = !1;
    var K = {};
    K[Me] = K[Rt] = K[et] = K[Pe] = K[Je] = K[Qe] = K[Sr] = K[Ir] = K[Rr] = K[Er] = K[Cr] = K[qn] = K[Ve] = K[ee] = K[ke] = K[Kn] = K[je] = K[Tt] = K[Tr] = K[Lr] = K[Mr] = K[Pr] = !0, K[Et] = K[Ct] = K[nt] = !1;
    var Xa = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ja = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Qa = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Va = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ka = parseFloat, ja = parseInt, mu = typeof vt == "object" && vt && vt.Object === Object && vt, nl = typeof self == "object" && self && self.Object === Object && self, fn = mu || nl || Function("return this")(), $r = p && !p.nodeType && p, Oe = $r && !0 && s && !s.nodeType && s, xu = Oe && Oe.exports === $r, Hr = xu && mu.process, Pn = function() {
      try {
        var c = Oe && Oe.require && Oe.require("util").types;
        return c || Hr && Hr.binding && Hr.binding("util");
      } catch {
      }
    }(), Au = Pn && Pn.isArrayBuffer, yu = Pn && Pn.isDate, Ou = Pn && Pn.isMap, bu = Pn && Pn.isRegExp, Su = Pn && Pn.isSet, Iu = Pn && Pn.isTypedArray;
    function Sn(c, d, g) {
      switch (g.length) {
        case 0:
          return c.call(d);
        case 1:
          return c.call(d, g[0]);
        case 2:
          return c.call(d, g[0], g[1]);
        case 3:
          return c.call(d, g[0], g[1], g[2]);
      }
      return c.apply(d, g);
    }
    function el(c, d, g, A) {
      for (var R = -1, U = c == null ? 0 : c.length; ++R < U; ) {
        var tn = c[R];
        d(A, tn, g(tn), c);
      }
      return A;
    }
    function Wn(c, d) {
      for (var g = -1, A = c == null ? 0 : c.length; ++g < A && d(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function tl(c, d) {
      for (var g = c == null ? 0 : c.length; g-- && d(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function Ru(c, d) {
      for (var g = -1, A = c == null ? 0 : c.length; ++g < A; )
        if (!d(c[g], g, c))
          return !1;
      return !0;
    }
    function he(c, d) {
      for (var g = -1, A = c == null ? 0 : c.length, R = 0, U = []; ++g < A; ) {
        var tn = c[g];
        d(tn, g, c) && (U[R++] = tn);
      }
      return U;
    }
    function Wt(c, d) {
      var g = c == null ? 0 : c.length;
      return !!g && De(c, d, 0) > -1;
    }
    function qr(c, d, g) {
      for (var A = -1, R = c == null ? 0 : c.length; ++A < R; )
        if (g(d, c[A]))
          return !0;
      return !1;
    }
    function Z(c, d) {
      for (var g = -1, A = c == null ? 0 : c.length, R = Array(A); ++g < A; )
        R[g] = d(c[g], g, c);
      return R;
    }
    function ge(c, d) {
      for (var g = -1, A = d.length, R = c.length; ++g < A; )
        c[R + g] = d[g];
      return c;
    }
    function Kr(c, d, g, A) {
      var R = -1, U = c == null ? 0 : c.length;
      for (A && U && (g = c[++R]); ++R < U; )
        g = d(g, c[R], R, c);
      return g;
    }
    function rl(c, d, g, A) {
      var R = c == null ? 0 : c.length;
      for (A && R && (g = c[--R]); R--; )
        g = d(g, c[R], R, c);
      return g;
    }
    function zr(c, d) {
      for (var g = -1, A = c == null ? 0 : c.length; ++g < A; )
        if (d(c[g], g, c))
          return !0;
      return !1;
    }
    var il = Yr("length");
    function ul(c) {
      return c.split("");
    }
    function fl(c) {
      return c.match(pa) || [];
    }
    function Eu(c, d, g) {
      var A;
      return g(c, function(R, U, tn) {
        if (d(R, U, tn))
          return A = U, !1;
      }), A;
    }
    function Dt(c, d, g, A) {
      for (var R = c.length, U = g + (A ? 1 : -1); A ? U-- : ++U < R; )
        if (d(c[U], U, c))
          return U;
      return -1;
    }
    function De(c, d, g) {
      return d === d ? wl(c, d, g) : Dt(c, Cu, g);
    }
    function ol(c, d, g, A) {
      for (var R = g - 1, U = c.length; ++R < U; )
        if (A(c[R], d))
          return R;
      return -1;
    }
    function Cu(c) {
      return c !== c;
    }
    function Tu(c, d) {
      var g = c == null ? 0 : c.length;
      return g ? Xr(c, d) / g : It;
    }
    function Yr(c) {
      return function(d) {
        return d == null ? f : d[c];
      };
    }
    function Zr(c) {
      return function(d) {
        return c == null ? f : c[d];
      };
    }
    function Lu(c, d, g, A, R) {
      return R(c, function(U, tn, H) {
        g = A ? (A = !1, U) : d(g, U, tn, H);
      }), g;
    }
    function al(c, d) {
      var g = c.length;
      for (c.sort(d); g--; )
        c[g] = c[g].value;
      return c;
    }
    function Xr(c, d) {
      for (var g, A = -1, R = c.length; ++A < R; ) {
        var U = d(c[A]);
        U !== f && (g = g === f ? U : g + U);
      }
      return g;
    }
    function Jr(c, d) {
      for (var g = -1, A = Array(c); ++g < c; )
        A[g] = d(g);
      return A;
    }
    function ll(c, d) {
      return Z(d, function(g) {
        return [g, c[g]];
      });
    }
    function Mu(c) {
      return c && c.slice(0, Bu(c) + 1).replace(Dr, "");
    }
    function In(c) {
      return function(d) {
        return c(d);
      };
    }
    function Qr(c, d) {
      return Z(d, function(g) {
        return c[g];
      });
    }
    function tt(c, d) {
      return c.has(d);
    }
    function Pu(c, d) {
      for (var g = -1, A = c.length; ++g < A && De(d, c[g], 0) > -1; )
        ;
      return g;
    }
    function Wu(c, d) {
      for (var g = c.length; g-- && De(d, c[g], 0) > -1; )
        ;
      return g;
    }
    function cl(c, d) {
      for (var g = c.length, A = 0; g--; )
        c[g] === d && ++A;
      return A;
    }
    var sl = Zr(Xa), hl = Zr(Ja);
    function gl(c) {
      return "\\" + Va[c];
    }
    function pl(c, d) {
      return c == null ? f : c[d];
    }
    function Be(c) {
      return Ka.test(c);
    }
    function dl(c) {
      return za.test(c);
    }
    function _l(c) {
      for (var d, g = []; !(d = c.next()).done; )
        g.push(d.value);
      return g;
    }
    function Vr(c) {
      var d = -1, g = Array(c.size);
      return c.forEach(function(A, R) {
        g[++d] = [R, A];
      }), g;
    }
    function Du(c, d) {
      return function(g) {
        return c(d(g));
      };
    }
    function pe(c, d) {
      for (var g = -1, A = c.length, R = 0, U = []; ++g < A; ) {
        var tn = c[g];
        (tn === d || tn === On) && (c[g] = On, U[R++] = g);
      }
      return U;
    }
    function Bt(c) {
      var d = -1, g = Array(c.size);
      return c.forEach(function(A) {
        g[++d] = A;
      }), g;
    }
    function vl(c) {
      var d = -1, g = Array(c.size);
      return c.forEach(function(A) {
        g[++d] = [A, A];
      }), g;
    }
    function wl(c, d, g) {
      for (var A = g - 1, R = c.length; ++A < R; )
        if (c[A] === d)
          return A;
      return -1;
    }
    function ml(c, d, g) {
      for (var A = g + 1; A--; )
        if (c[A] === d)
          return A;
      return A;
    }
    function Fe(c) {
      return Be(c) ? Al(c) : il(c);
    }
    function zn(c) {
      return Be(c) ? yl(c) : ul(c);
    }
    function Bu(c) {
      for (var d = c.length; d-- && ca.test(c.charAt(d)); )
        ;
      return d;
    }
    var xl = Zr(Qa);
    function Al(c) {
      for (var d = Gr.lastIndex = 0; Gr.test(c); )
        ++d;
      return d;
    }
    function yl(c) {
      return c.match(Gr) || [];
    }
    function Ol(c) {
      return c.match(qa) || [];
    }
    var bl = function c(d) {
      d = d == null ? fn : Ue.defaults(fn.Object(), d, Ue.pick(fn, Ya));
      var g = d.Array, A = d.Date, R = d.Error, U = d.Function, tn = d.Math, H = d.Object, kr = d.RegExp, Sl = d.String, Dn = d.TypeError, Ft = g.prototype, Il = U.prototype, Ne = H.prototype, Ut = d["__core-js_shared__"], Nt = Il.toString, G = Ne.hasOwnProperty, Rl = 0, Fu = function() {
        var n = /[^.]+$/.exec(Ut && Ut.keys && Ut.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Gt = Ne.toString, El = Nt.call(H), Cl = fn._, Tl = kr(
        "^" + Nt.call(G).replace(Wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), $t = xu ? d.Buffer : f, de = d.Symbol, Ht = d.Uint8Array, Uu = $t ? $t.allocUnsafe : f, qt = Du(H.getPrototypeOf, H), Nu = H.create, Gu = Ne.propertyIsEnumerable, Kt = Ft.splice, $u = de ? de.isConcatSpreadable : f, rt = de ? de.iterator : f, be = de ? de.toStringTag : f, zt = function() {
        try {
          var n = Ce(H, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Ll = d.clearTimeout !== fn.clearTimeout && d.clearTimeout, Ml = A && A.now !== fn.Date.now && A.now, Pl = d.setTimeout !== fn.setTimeout && d.setTimeout, Yt = tn.ceil, Zt = tn.floor, jr = H.getOwnPropertySymbols, Wl = $t ? $t.isBuffer : f, Hu = d.isFinite, Dl = Ft.join, Bl = Du(H.keys, H), rn = tn.max, sn = tn.min, Fl = A.now, Ul = d.parseInt, qu = tn.random, Nl = Ft.reverse, ni = Ce(d, "DataView"), it = Ce(d, "Map"), ei = Ce(d, "Promise"), Ge = Ce(d, "Set"), ut = Ce(d, "WeakMap"), ft = Ce(H, "create"), Xt = ut && new ut(), $e = {}, Gl = Te(ni), $l = Te(it), Hl = Te(ei), ql = Te(Ge), Kl = Te(ut), Jt = de ? de.prototype : f, ot = Jt ? Jt.valueOf : f, Ku = Jt ? Jt.toString : f;
      function u(n) {
        if (k(n) && !C(n) && !(n instanceof B)) {
          if (n instanceof Bn)
            return n;
          if (G.call(n, "__wrapped__"))
            return Yf(n);
        }
        return new Bn(n);
      }
      var He = function() {
        function n() {
        }
        return function(e) {
          if (!V(e))
            return {};
          if (Nu)
            return Nu(e);
          n.prototype = e;
          var t = new n();
          return n.prototype = f, t;
        };
      }();
      function Qt() {
      }
      function Bn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = f;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: ia,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ua,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ji,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = Qt.prototype, u.prototype.constructor = u, Bn.prototype = He(Qt.prototype), Bn.prototype.constructor = Bn;
      function B(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Jn, this.__views__ = [];
      }
      function zl() {
        var n = new B(this.__wrapped__);
        return n.__actions__ = mn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = mn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = mn(this.__views__), n;
      }
      function Yl() {
        if (this.__filtered__) {
          var n = new B(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Zl() {
        var n = this.__wrapped__.value(), e = this.__dir__, t = C(n), r = e < 0, i = t ? n.length : 0, o = us(0, i, this.__views__), a = o.start, l = o.end, h = l - a, _ = r ? l : a - 1, v = this.__iteratees__, w = v.length, x = 0, y = sn(h, this.__takeCount__);
        if (!t || !r && i == h && y == h)
          return df(n, this.__actions__);
        var S = [];
        n:
          for (; h-- && x < y; ) {
            _ += e;
            for (var M = -1, I = n[_]; ++M < w; ) {
              var D = v[M], F = D.iteratee, Cn = D.type, _n = F(I);
              if (Cn == br)
                I = _n;
              else if (!_n) {
                if (Cn == Mn)
                  continue n;
                break n;
              }
            }
            S[x++] = I;
          }
        return S;
      }
      B.prototype = He(Qt.prototype), B.prototype.constructor = B;
      function Se(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function Xl() {
        this.__data__ = ft ? ft(null) : {}, this.size = 0;
      }
      function Jl(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function Ql(n) {
        var e = this.__data__;
        if (ft) {
          var t = e[n];
          return t === $ ? f : t;
        }
        return G.call(e, n) ? e[n] : f;
      }
      function Vl(n) {
        var e = this.__data__;
        return ft ? e[n] !== f : G.call(e, n);
      }
      function kl(n, e) {
        var t = this.__data__;
        return this.size += this.has(n) ? 0 : 1, t[n] = ft && e === f ? $ : e, this;
      }
      Se.prototype.clear = Xl, Se.prototype.delete = Jl, Se.prototype.get = Ql, Se.prototype.has = Vl, Se.prototype.set = kl;
      function te(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function jl() {
        this.__data__ = [], this.size = 0;
      }
      function nc(n) {
        var e = this.__data__, t = Vt(e, n);
        if (t < 0)
          return !1;
        var r = e.length - 1;
        return t == r ? e.pop() : Kt.call(e, t, 1), --this.size, !0;
      }
      function ec(n) {
        var e = this.__data__, t = Vt(e, n);
        return t < 0 ? f : e[t][1];
      }
      function tc(n) {
        return Vt(this.__data__, n) > -1;
      }
      function rc(n, e) {
        var t = this.__data__, r = Vt(t, n);
        return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
      }
      te.prototype.clear = jl, te.prototype.delete = nc, te.prototype.get = ec, te.prototype.has = tc, te.prototype.set = rc;
      function re(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function ic() {
        this.size = 0, this.__data__ = {
          hash: new Se(),
          map: new (it || te)(),
          string: new Se()
        };
      }
      function uc(n) {
        var e = lr(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function fc(n) {
        return lr(this, n).get(n);
      }
      function oc(n) {
        return lr(this, n).has(n);
      }
      function ac(n, e) {
        var t = lr(this, n), r = t.size;
        return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
      }
      re.prototype.clear = ic, re.prototype.delete = uc, re.prototype.get = fc, re.prototype.has = oc, re.prototype.set = ac;
      function Ie(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.__data__ = new re(); ++e < t; )
          this.add(n[e]);
      }
      function lc(n) {
        return this.__data__.set(n, $), this;
      }
      function cc(n) {
        return this.__data__.has(n);
      }
      Ie.prototype.add = Ie.prototype.push = lc, Ie.prototype.has = cc;
      function Yn(n) {
        var e = this.__data__ = new te(n);
        this.size = e.size;
      }
      function sc() {
        this.__data__ = new te(), this.size = 0;
      }
      function hc(n) {
        var e = this.__data__, t = e.delete(n);
        return this.size = e.size, t;
      }
      function gc(n) {
        return this.__data__.get(n);
      }
      function pc(n) {
        return this.__data__.has(n);
      }
      function dc(n, e) {
        var t = this.__data__;
        if (t instanceof te) {
          var r = t.__data__;
          if (!it || r.length < O - 1)
            return r.push([n, e]), this.size = ++t.size, this;
          t = this.__data__ = new re(r);
        }
        return t.set(n, e), this.size = t.size, this;
      }
      Yn.prototype.clear = sc, Yn.prototype.delete = hc, Yn.prototype.get = gc, Yn.prototype.has = pc, Yn.prototype.set = dc;
      function zu(n, e) {
        var t = C(n), r = !t && Le(n), i = !t && !r && xe(n), o = !t && !r && !i && Ye(n), a = t || r || i || o, l = a ? Jr(n.length, Sl) : [], h = l.length;
        for (var _ in n)
          (e || G.call(n, _)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          o && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          oe(_, h))) && l.push(_);
        return l;
      }
      function Yu(n) {
        var e = n.length;
        return e ? n[hi(0, e - 1)] : f;
      }
      function _c(n, e) {
        return cr(mn(n), Re(e, 0, n.length));
      }
      function vc(n) {
        return cr(mn(n));
      }
      function ti(n, e, t) {
        (t !== f && !Zn(n[e], t) || t === f && !(e in n)) && ie(n, e, t);
      }
      function at(n, e, t) {
        var r = n[e];
        (!(G.call(n, e) && Zn(r, t)) || t === f && !(e in n)) && ie(n, e, t);
      }
      function Vt(n, e) {
        for (var t = n.length; t--; )
          if (Zn(n[t][0], e))
            return t;
        return -1;
      }
      function wc(n, e, t, r) {
        return _e(n, function(i, o, a) {
          e(r, i, t(i), a);
        }), r;
      }
      function Zu(n, e) {
        return n && Vn(e, un(e), n);
      }
      function mc(n, e) {
        return n && Vn(e, An(e), n);
      }
      function ie(n, e, t) {
        e == "__proto__" && zt ? zt(n, e, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : n[e] = t;
      }
      function ri(n, e) {
        for (var t = -1, r = e.length, i = g(r), o = n == null; ++t < r; )
          i[t] = o ? f : Fi(n, e[t]);
        return i;
      }
      function Re(n, e, t) {
        return n === n && (t !== f && (n = n <= t ? n : t), e !== f && (n = n >= e ? n : e)), n;
      }
      function Fn(n, e, t, r, i, o) {
        var a, l = e & gn, h = e & en, _ = e & Ln;
        if (t && (a = i ? t(n, r, i, o) : t(n)), a !== f)
          return a;
        if (!V(n))
          return n;
        var v = C(n);
        if (v) {
          if (a = os(n), !l)
            return mn(n, a);
        } else {
          var w = hn(n), x = w == Ct || w == Ji;
          if (xe(n))
            return wf(n, l);
          if (w == ee || w == Me || x && !i) {
            if (a = h || x ? {} : Ff(n), !l)
              return h ? Qc(n, mc(a, n)) : Jc(n, Zu(a, n));
          } else {
            if (!K[w])
              return i ? n : {};
            a = as(n, w, l);
          }
        }
        o || (o = new Yn());
        var y = o.get(n);
        if (y)
          return y;
        o.set(n, a), ho(n) ? n.forEach(function(I) {
          a.add(Fn(I, e, t, I, n, o));
        }) : co(n) && n.forEach(function(I, D) {
          a.set(D, Fn(I, e, t, D, n, o));
        });
        var S = _ ? h ? Oi : yi : h ? An : un, M = v ? f : S(n);
        return Wn(M || n, function(I, D) {
          M && (D = I, I = n[D]), at(a, D, Fn(I, e, t, D, n, o));
        }), a;
      }
      function xc(n) {
        var e = un(n);
        return function(t) {
          return Xu(t, n, e);
        };
      }
      function Xu(n, e, t) {
        var r = t.length;
        if (n == null)
          return !r;
        for (n = H(n); r--; ) {
          var i = t[r], o = e[i], a = n[i];
          if (a === f && !(i in n) || !o(a))
            return !1;
        }
        return !0;
      }
      function Ju(n, e, t) {
        if (typeof n != "function")
          throw new Dn(L);
        return dt(function() {
          n.apply(f, t);
        }, e);
      }
      function lt(n, e, t, r) {
        var i = -1, o = Wt, a = !0, l = n.length, h = [], _ = e.length;
        if (!l)
          return h;
        t && (e = Z(e, In(t))), r ? (o = qr, a = !1) : e.length >= O && (o = tt, a = !1, e = new Ie(e));
        n:
          for (; ++i < l; ) {
            var v = n[i], w = t == null ? v : t(v);
            if (v = r || v !== 0 ? v : 0, a && w === w) {
              for (var x = _; x--; )
                if (e[x] === w)
                  continue n;
              h.push(v);
            } else
              o(e, w, r) || h.push(v);
          }
        return h;
      }
      var _e = Of(Qn), Qu = Of(ui, !0);
      function Ac(n, e) {
        var t = !0;
        return _e(n, function(r, i, o) {
          return t = !!e(r, i, o), t;
        }), t;
      }
      function kt(n, e, t) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var o = n[r], a = e(o);
          if (a != null && (l === f ? a === a && !En(a) : t(a, l)))
            var l = a, h = o;
        }
        return h;
      }
      function yc(n, e, t, r) {
        var i = n.length;
        for (t = T(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === f || r > i ? i : T(r), r < 0 && (r += i), r = t > r ? 0 : po(r); t < r; )
          n[t++] = e;
        return n;
      }
      function Vu(n, e) {
        var t = [];
        return _e(n, function(r, i, o) {
          e(r, i, o) && t.push(r);
        }), t;
      }
      function on(n, e, t, r, i) {
        var o = -1, a = n.length;
        for (t || (t = cs), i || (i = []); ++o < a; ) {
          var l = n[o];
          e > 0 && t(l) ? e > 1 ? on(l, e - 1, t, r, i) : ge(i, l) : r || (i[i.length] = l);
        }
        return i;
      }
      var ii = bf(), ku = bf(!0);
      function Qn(n, e) {
        return n && ii(n, e, un);
      }
      function ui(n, e) {
        return n && ku(n, e, un);
      }
      function jt(n, e) {
        return he(e, function(t) {
          return ae(n[t]);
        });
      }
      function Ee(n, e) {
        e = we(e, n);
        for (var t = 0, r = e.length; n != null && t < r; )
          n = n[kn(e[t++])];
        return t && t == r ? n : f;
      }
      function ju(n, e, t) {
        var r = e(n);
        return C(n) ? r : ge(r, t(n));
      }
      function pn(n) {
        return n == null ? n === f ? Vo : Jo : be && be in H(n) ? is(n) : vs(n);
      }
      function fi(n, e) {
        return n > e;
      }
      function Oc(n, e) {
        return n != null && G.call(n, e);
      }
      function bc(n, e) {
        return n != null && e in H(n);
      }
      function Sc(n, e, t) {
        return n >= sn(e, t) && n < rn(e, t);
      }
      function oi(n, e, t) {
        for (var r = t ? qr : Wt, i = n[0].length, o = n.length, a = o, l = g(o), h = 1 / 0, _ = []; a--; ) {
          var v = n[a];
          a && e && (v = Z(v, In(e))), h = sn(v.length, h), l[a] = !t && (e || i >= 120 && v.length >= 120) ? new Ie(a && v) : f;
        }
        v = n[0];
        var w = -1, x = l[0];
        n:
          for (; ++w < i && _.length < h; ) {
            var y = v[w], S = e ? e(y) : y;
            if (y = t || y !== 0 ? y : 0, !(x ? tt(x, S) : r(_, S, t))) {
              for (a = o; --a; ) {
                var M = l[a];
                if (!(M ? tt(M, S) : r(n[a], S, t)))
                  continue n;
              }
              x && x.push(S), _.push(y);
            }
          }
        return _;
      }
      function Ic(n, e, t, r) {
        return Qn(n, function(i, o, a) {
          e(r, t(i), o, a);
        }), r;
      }
      function ct(n, e, t) {
        e = we(e, n), n = $f(n, e);
        var r = n == null ? n : n[kn(Nn(e))];
        return r == null ? f : Sn(r, n, t);
      }
      function nf(n) {
        return k(n) && pn(n) == Me;
      }
      function Rc(n) {
        return k(n) && pn(n) == et;
      }
      function Ec(n) {
        return k(n) && pn(n) == Qe;
      }
      function st(n, e, t, r, i) {
        return n === e ? !0 : n == null || e == null || !k(n) && !k(e) ? n !== n && e !== e : Cc(n, e, t, r, st, i);
      }
      function Cc(n, e, t, r, i, o) {
        var a = C(n), l = C(e), h = a ? Rt : hn(n), _ = l ? Rt : hn(e);
        h = h == Me ? ee : h, _ = _ == Me ? ee : _;
        var v = h == ee, w = _ == ee, x = h == _;
        if (x && xe(n)) {
          if (!xe(e))
            return !1;
          a = !0, v = !1;
        }
        if (x && !v)
          return o || (o = new Yn()), a || Ye(n) ? Wf(n, e, t, r, i, o) : ts(n, e, h, t, r, i, o);
        if (!(t & Hn)) {
          var y = v && G.call(n, "__wrapped__"), S = w && G.call(e, "__wrapped__");
          if (y || S) {
            var M = y ? n.value() : n, I = S ? e.value() : e;
            return o || (o = new Yn()), i(M, I, t, r, o);
          }
        }
        return x ? (o || (o = new Yn()), rs(n, e, t, r, i, o)) : !1;
      }
      function Tc(n) {
        return k(n) && hn(n) == qn;
      }
      function ai(n, e, t, r) {
        var i = t.length, o = i, a = !r;
        if (n == null)
          return !o;
        for (n = H(n); i--; ) {
          var l = t[i];
          if (a && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
            return !1;
        }
        for (; ++i < o; ) {
          l = t[i];
          var h = l[0], _ = n[h], v = l[1];
          if (a && l[2]) {
            if (_ === f && !(h in n))
              return !1;
          } else {
            var w = new Yn();
            if (r)
              var x = r(_, v, h, n, e, w);
            if (!(x === f ? st(v, _, Hn | jn, r, w) : x))
              return !1;
          }
        }
        return !0;
      }
      function ef(n) {
        if (!V(n) || hs(n))
          return !1;
        var e = ae(n) ? Tl : xa;
        return e.test(Te(n));
      }
      function Lc(n) {
        return k(n) && pn(n) == ke;
      }
      function Mc(n) {
        return k(n) && hn(n) == Kn;
      }
      function Pc(n) {
        return k(n) && _r(n.length) && !!Y[pn(n)];
      }
      function tf(n) {
        return typeof n == "function" ? n : n == null ? yn : typeof n == "object" ? C(n) ? ff(n[0], n[1]) : uf(n) : Io(n);
      }
      function li(n) {
        if (!pt(n))
          return Bl(n);
        var e = [];
        for (var t in H(n))
          G.call(n, t) && t != "constructor" && e.push(t);
        return e;
      }
      function Wc(n) {
        if (!V(n))
          return _s(n);
        var e = pt(n), t = [];
        for (var r in n)
          r == "constructor" && (e || !G.call(n, r)) || t.push(r);
        return t;
      }
      function ci(n, e) {
        return n < e;
      }
      function rf(n, e) {
        var t = -1, r = xn(n) ? g(n.length) : [];
        return _e(n, function(i, o, a) {
          r[++t] = e(i, o, a);
        }), r;
      }
      function uf(n) {
        var e = Si(n);
        return e.length == 1 && e[0][2] ? Nf(e[0][0], e[0][1]) : function(t) {
          return t === n || ai(t, n, e);
        };
      }
      function ff(n, e) {
        return Ri(n) && Uf(e) ? Nf(kn(n), e) : function(t) {
          var r = Fi(t, n);
          return r === f && r === e ? Ui(t, n) : st(e, r, Hn | jn);
        };
      }
      function nr(n, e, t, r, i) {
        n !== e && ii(e, function(o, a) {
          if (i || (i = new Yn()), V(o))
            Dc(n, e, a, t, nr, r, i);
          else {
            var l = r ? r(Ci(n, a), o, a + "", n, e, i) : f;
            l === f && (l = o), ti(n, a, l);
          }
        }, An);
      }
      function Dc(n, e, t, r, i, o, a) {
        var l = Ci(n, t), h = Ci(e, t), _ = a.get(h);
        if (_) {
          ti(n, t, _);
          return;
        }
        var v = o ? o(l, h, t + "", n, e, a) : f, w = v === f;
        if (w) {
          var x = C(h), y = !x && xe(h), S = !x && !y && Ye(h);
          v = h, x || y || S ? C(l) ? v = l : j(l) ? v = mn(l) : y ? (w = !1, v = wf(h, !0)) : S ? (w = !1, v = mf(h, !0)) : v = [] : _t(h) || Le(h) ? (v = l, Le(l) ? v = _o(l) : (!V(l) || ae(l)) && (v = Ff(h))) : w = !1;
        }
        w && (a.set(h, v), i(v, h, r, o, a), a.delete(h)), ti(n, t, v);
      }
      function of(n, e) {
        var t = n.length;
        if (t)
          return e += e < 0 ? t : 0, oe(e, t) ? n[e] : f;
      }
      function af(n, e, t) {
        e.length ? e = Z(e, function(o) {
          return C(o) ? function(a) {
            return Ee(a, o.length === 1 ? o[0] : o);
          } : o;
        }) : e = [yn];
        var r = -1;
        e = Z(e, In(b()));
        var i = rf(n, function(o, a, l) {
          var h = Z(e, function(_) {
            return _(o);
          });
          return { criteria: h, index: ++r, value: o };
        });
        return al(i, function(o, a) {
          return Xc(o, a, t);
        });
      }
      function Bc(n, e) {
        return lf(n, e, function(t, r) {
          return Ui(n, r);
        });
      }
      function lf(n, e, t) {
        for (var r = -1, i = e.length, o = {}; ++r < i; ) {
          var a = e[r], l = Ee(n, a);
          t(l, a) && ht(o, we(a, n), l);
        }
        return o;
      }
      function Fc(n) {
        return function(e) {
          return Ee(e, n);
        };
      }
      function si(n, e, t, r) {
        var i = r ? ol : De, o = -1, a = e.length, l = n;
        for (n === e && (e = mn(e)), t && (l = Z(n, In(t))); ++o < a; )
          for (var h = 0, _ = e[o], v = t ? t(_) : _; (h = i(l, v, h, r)) > -1; )
            l !== n && Kt.call(l, h, 1), Kt.call(n, h, 1);
        return n;
      }
      function cf(n, e) {
        for (var t = n ? e.length : 0, r = t - 1; t--; ) {
          var i = e[t];
          if (t == r || i !== o) {
            var o = i;
            oe(i) ? Kt.call(n, i, 1) : di(n, i);
          }
        }
        return n;
      }
      function hi(n, e) {
        return n + Zt(qu() * (e - n + 1));
      }
      function Uc(n, e, t, r) {
        for (var i = -1, o = rn(Yt((e - n) / (t || 1)), 0), a = g(o); o--; )
          a[r ? o : ++i] = n, n += t;
        return a;
      }
      function gi(n, e) {
        var t = "";
        if (!n || e < 1 || e > se)
          return t;
        do
          e % 2 && (t += n), e = Zt(e / 2), e && (n += n);
        while (e);
        return t;
      }
      function P(n, e) {
        return Ti(Gf(n, e, yn), n + "");
      }
      function Nc(n) {
        return Yu(Ze(n));
      }
      function Gc(n, e) {
        var t = Ze(n);
        return cr(t, Re(e, 0, t.length));
      }
      function ht(n, e, t, r) {
        if (!V(n))
          return n;
        e = we(e, n);
        for (var i = -1, o = e.length, a = o - 1, l = n; l != null && ++i < o; ) {
          var h = kn(e[i]), _ = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != a) {
            var v = l[h];
            _ = r ? r(v, h, l) : f, _ === f && (_ = V(v) ? v : oe(e[i + 1]) ? [] : {});
          }
          at(l, h, _), l = l[h];
        }
        return n;
      }
      var sf = Xt ? function(n, e) {
        return Xt.set(n, e), n;
      } : yn, $c = zt ? function(n, e) {
        return zt(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Gi(e),
          writable: !0
        });
      } : yn;
      function Hc(n) {
        return cr(Ze(n));
      }
      function Un(n, e, t) {
        var r = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var o = g(i); ++r < i; )
          o[r] = n[r + e];
        return o;
      }
      function qc(n, e) {
        var t;
        return _e(n, function(r, i, o) {
          return t = e(r, i, o), !t;
        }), !!t;
      }
      function er(n, e, t) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof e == "number" && e === e && i <= zo) {
          for (; r < i; ) {
            var o = r + i >>> 1, a = n[o];
            a !== null && !En(a) && (t ? a <= e : a < e) ? r = o + 1 : i = o;
          }
          return i;
        }
        return pi(n, e, yn, t);
      }
      function pi(n, e, t, r) {
        var i = 0, o = n == null ? 0 : n.length;
        if (o === 0)
          return 0;
        e = t(e);
        for (var a = e !== e, l = e === null, h = En(e), _ = e === f; i < o; ) {
          var v = Zt((i + o) / 2), w = t(n[v]), x = w !== f, y = w === null, S = w === w, M = En(w);
          if (a)
            var I = r || S;
          else
            _ ? I = S && (r || x) : l ? I = S && x && (r || !y) : h ? I = S && x && !y && (r || !M) : y || M ? I = !1 : I = r ? w <= e : w < e;
          I ? i = v + 1 : o = v;
        }
        return sn(o, Ko);
      }
      function hf(n, e) {
        for (var t = -1, r = n.length, i = 0, o = []; ++t < r; ) {
          var a = n[t], l = e ? e(a) : a;
          if (!t || !Zn(l, h)) {
            var h = l;
            o[i++] = a === 0 ? 0 : a;
          }
        }
        return o;
      }
      function gf(n) {
        return typeof n == "number" ? n : En(n) ? It : +n;
      }
      function Rn(n) {
        if (typeof n == "string")
          return n;
        if (C(n))
          return Z(n, Rn) + "";
        if (En(n))
          return Ku ? Ku.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -ye ? "-0" : e;
      }
      function ve(n, e, t) {
        var r = -1, i = Wt, o = n.length, a = !0, l = [], h = l;
        if (t)
          a = !1, i = qr;
        else if (o >= O) {
          var _ = e ? null : ns(n);
          if (_)
            return Bt(_);
          a = !1, i = tt, h = new Ie();
        } else
          h = e ? [] : l;
        n:
          for (; ++r < o; ) {
            var v = n[r], w = e ? e(v) : v;
            if (v = t || v !== 0 ? v : 0, a && w === w) {
              for (var x = h.length; x--; )
                if (h[x] === w)
                  continue n;
              e && h.push(w), l.push(v);
            } else
              i(h, w, t) || (h !== l && h.push(w), l.push(v));
          }
        return l;
      }
      function di(n, e) {
        return e = we(e, n), n = $f(n, e), n == null || delete n[kn(Nn(e))];
      }
      function pf(n, e, t, r) {
        return ht(n, e, t(Ee(n, e)), r);
      }
      function tr(n, e, t, r) {
        for (var i = n.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(n[o], o, n); )
          ;
        return t ? Un(n, r ? 0 : o, r ? o + 1 : i) : Un(n, r ? o + 1 : 0, r ? i : o);
      }
      function df(n, e) {
        var t = n;
        return t instanceof B && (t = t.value()), Kr(e, function(r, i) {
          return i.func.apply(i.thisArg, ge([r], i.args));
        }, t);
      }
      function _i(n, e, t) {
        var r = n.length;
        if (r < 2)
          return r ? ve(n[0]) : [];
        for (var i = -1, o = g(r); ++i < r; )
          for (var a = n[i], l = -1; ++l < r; )
            l != i && (o[i] = lt(o[i] || a, n[l], e, t));
        return ve(on(o, 1), e, t);
      }
      function _f(n, e, t) {
        for (var r = -1, i = n.length, o = e.length, a = {}; ++r < i; ) {
          var l = r < o ? e[r] : f;
          t(a, n[r], l);
        }
        return a;
      }
      function vi(n) {
        return j(n) ? n : [];
      }
      function wi(n) {
        return typeof n == "function" ? n : yn;
      }
      function we(n, e) {
        return C(n) ? n : Ri(n, e) ? [n] : zf(N(n));
      }
      var Kc = P;
      function me(n, e, t) {
        var r = n.length;
        return t = t === f ? r : t, !e && t >= r ? n : Un(n, e, t);
      }
      var vf = Ll || function(n) {
        return fn.clearTimeout(n);
      };
      function wf(n, e) {
        if (e)
          return n.slice();
        var t = n.length, r = Uu ? Uu(t) : new n.constructor(t);
        return n.copy(r), r;
      }
      function mi(n) {
        var e = new n.constructor(n.byteLength);
        return new Ht(e).set(new Ht(n)), e;
      }
      function zc(n, e) {
        var t = e ? mi(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.byteLength);
      }
      function Yc(n) {
        var e = new n.constructor(n.source, nu.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function Zc(n) {
        return ot ? H(ot.call(n)) : {};
      }
      function mf(n, e) {
        var t = e ? mi(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.length);
      }
      function xf(n, e) {
        if (n !== e) {
          var t = n !== f, r = n === null, i = n === n, o = En(n), a = e !== f, l = e === null, h = e === e, _ = En(e);
          if (!l && !_ && !o && n > e || o && a && h && !l && !_ || r && a && h || !t && h || !i)
            return 1;
          if (!r && !o && !_ && n < e || _ && t && i && !r && !o || l && t && i || !a && i || !h)
            return -1;
        }
        return 0;
      }
      function Xc(n, e, t) {
        for (var r = -1, i = n.criteria, o = e.criteria, a = i.length, l = t.length; ++r < a; ) {
          var h = xf(i[r], o[r]);
          if (h) {
            if (r >= l)
              return h;
            var _ = t[r];
            return h * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function Af(n, e, t, r) {
        for (var i = -1, o = n.length, a = t.length, l = -1, h = e.length, _ = rn(o - a, 0), v = g(h + _), w = !r; ++l < h; )
          v[l] = e[l];
        for (; ++i < a; )
          (w || i < o) && (v[t[i]] = n[i]);
        for (; _--; )
          v[l++] = n[i++];
        return v;
      }
      function yf(n, e, t, r) {
        for (var i = -1, o = n.length, a = -1, l = t.length, h = -1, _ = e.length, v = rn(o - l, 0), w = g(v + _), x = !r; ++i < v; )
          w[i] = n[i];
        for (var y = i; ++h < _; )
          w[y + h] = e[h];
        for (; ++a < l; )
          (x || i < o) && (w[y + t[a]] = n[i++]);
        return w;
      }
      function mn(n, e) {
        var t = -1, r = n.length;
        for (e || (e = g(r)); ++t < r; )
          e[t] = n[t];
        return e;
      }
      function Vn(n, e, t, r) {
        var i = !t;
        t || (t = {});
        for (var o = -1, a = e.length; ++o < a; ) {
          var l = e[o], h = r ? r(t[l], n[l], l, t, n) : f;
          h === f && (h = n[l]), i ? ie(t, l, h) : at(t, l, h);
        }
        return t;
      }
      function Jc(n, e) {
        return Vn(n, Ii(n), e);
      }
      function Qc(n, e) {
        return Vn(n, Df(n), e);
      }
      function rr(n, e) {
        return function(t, r) {
          var i = C(t) ? el : wc, o = e ? e() : {};
          return i(t, n, b(r, 2), o);
        };
      }
      function qe(n) {
        return P(function(e, t) {
          var r = -1, i = t.length, o = i > 1 ? t[i - 1] : f, a = i > 2 ? t[2] : f;
          for (o = n.length > 3 && typeof o == "function" ? (i--, o) : f, a && dn(t[0], t[1], a) && (o = i < 3 ? f : o, i = 1), e = H(e); ++r < i; ) {
            var l = t[r];
            l && n(e, l, r, o);
          }
          return e;
        });
      }
      function Of(n, e) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!xn(t))
            return n(t, r);
          for (var i = t.length, o = e ? i : -1, a = H(t); (e ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
            ;
          return t;
        };
      }
      function bf(n) {
        return function(e, t, r) {
          for (var i = -1, o = H(e), a = r(e), l = a.length; l--; ) {
            var h = a[n ? l : ++i];
            if (t(o[h], h, o) === !1)
              break;
          }
          return e;
        };
      }
      function Vc(n, e, t) {
        var r = e & q, i = gt(n);
        function o() {
          var a = this && this !== fn && this instanceof o ? i : n;
          return a.apply(r ? t : this, arguments);
        }
        return o;
      }
      function Sf(n) {
        return function(e) {
          e = N(e);
          var t = Be(e) ? zn(e) : f, r = t ? t[0] : e.charAt(0), i = t ? me(t, 1).join("") : e.slice(1);
          return r[n]() + i;
        };
      }
      function Ke(n) {
        return function(e) {
          return Kr(bo(Oo(e).replace($a, "")), n, "");
        };
      }
      function gt(n) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new n();
            case 1:
              return new n(e[0]);
            case 2:
              return new n(e[0], e[1]);
            case 3:
              return new n(e[0], e[1], e[2]);
            case 4:
              return new n(e[0], e[1], e[2], e[3]);
            case 5:
              return new n(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var t = He(n.prototype), r = n.apply(t, e);
          return V(r) ? r : t;
        };
      }
      function kc(n, e, t) {
        var r = gt(n);
        function i() {
          for (var o = arguments.length, a = g(o), l = o, h = ze(i); l--; )
            a[l] = arguments[l];
          var _ = o < 3 && a[0] !== h && a[o - 1] !== h ? [] : pe(a, h);
          if (o -= _.length, o < t)
            return Tf(
              n,
              e,
              ir,
              i.placeholder,
              f,
              a,
              _,
              f,
              f,
              t - o
            );
          var v = this && this !== fn && this instanceof i ? r : n;
          return Sn(v, this, a);
        }
        return i;
      }
      function If(n) {
        return function(e, t, r) {
          var i = H(e);
          if (!xn(e)) {
            var o = b(t, 3);
            e = un(e), t = function(l) {
              return o(i[l], l, i);
            };
          }
          var a = n(e, t, r);
          return a > -1 ? i[o ? e[a] : a] : f;
        };
      }
      function Rf(n) {
        return fe(function(e) {
          var t = e.length, r = t, i = Bn.prototype.thru;
          for (n && e.reverse(); r--; ) {
            var o = e[r];
            if (typeof o != "function")
              throw new Dn(L);
            if (i && !a && ar(o) == "wrapper")
              var a = new Bn([], !0);
          }
          for (r = a ? r : t; ++r < t; ) {
            o = e[r];
            var l = ar(o), h = l == "wrapper" ? bi(o) : f;
            h && Ei(h[0]) && h[1] == (wn | ln | vn | ne) && !h[4].length && h[9] == 1 ? a = a[ar(h[0])].apply(a, h[3]) : a = o.length == 1 && Ei(o) ? a[l]() : a.thru(o);
          }
          return function() {
            var _ = arguments, v = _[0];
            if (a && _.length == 1 && C(v))
              return a.plant(v).value();
            for (var w = 0, x = t ? e[w].apply(this, _) : v; ++w < t; )
              x = e[w].call(this, x);
            return x;
          };
        });
      }
      function ir(n, e, t, r, i, o, a, l, h, _) {
        var v = e & wn, w = e & q, x = e & W, y = e & (ln | bn), S = e & Xe, M = x ? f : gt(n);
        function I() {
          for (var D = arguments.length, F = g(D), Cn = D; Cn--; )
            F[Cn] = arguments[Cn];
          if (y)
            var _n = ze(I), Tn = cl(F, _n);
          if (r && (F = Af(F, r, i, y)), o && (F = yf(F, o, a, y)), D -= Tn, y && D < _) {
            var nn = pe(F, _n);
            return Tf(
              n,
              e,
              ir,
              I.placeholder,
              t,
              F,
              nn,
              l,
              h,
              _ - D
            );
          }
          var Xn = w ? t : this, ce = x ? Xn[n] : n;
          return D = F.length, l ? F = ws(F, l) : S && D > 1 && F.reverse(), v && h < D && (F.length = h), this && this !== fn && this instanceof I && (ce = M || gt(ce)), ce.apply(Xn, F);
        }
        return I;
      }
      function Ef(n, e) {
        return function(t, r) {
          return Ic(t, n, e(r), {});
        };
      }
      function ur(n, e) {
        return function(t, r) {
          var i;
          if (t === f && r === f)
            return e;
          if (t !== f && (i = t), r !== f) {
            if (i === f)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Rn(t), r = Rn(r)) : (t = gf(t), r = gf(r)), i = n(t, r);
          }
          return i;
        };
      }
      function xi(n) {
        return fe(function(e) {
          return e = Z(e, In(b())), P(function(t) {
            var r = this;
            return n(e, function(i) {
              return Sn(i, r, t);
            });
          });
        });
      }
      function fr(n, e) {
        e = e === f ? " " : Rn(e);
        var t = e.length;
        if (t < 2)
          return t ? gi(e, n) : e;
        var r = gi(e, Yt(n / Fe(e)));
        return Be(e) ? me(zn(r), 0, n).join("") : r.slice(0, n);
      }
      function jc(n, e, t, r) {
        var i = e & q, o = gt(n);
        function a() {
          for (var l = -1, h = arguments.length, _ = -1, v = r.length, w = g(v + h), x = this && this !== fn && this instanceof a ? o : n; ++_ < v; )
            w[_] = r[_];
          for (; h--; )
            w[_++] = arguments[++l];
          return Sn(x, i ? t : this, w);
        }
        return a;
      }
      function Cf(n) {
        return function(e, t, r) {
          return r && typeof r != "number" && dn(e, t, r) && (t = r = f), e = le(e), t === f ? (t = e, e = 0) : t = le(t), r = r === f ? e < t ? 1 : -1 : le(r), Uc(e, t, r, n);
        };
      }
      function or(n) {
        return function(e, t) {
          return typeof e == "string" && typeof t == "string" || (e = Gn(e), t = Gn(t)), n(e, t);
        };
      }
      function Tf(n, e, t, r, i, o, a, l, h, _) {
        var v = e & ln, w = v ? a : f, x = v ? f : a, y = v ? o : f, S = v ? f : o;
        e |= v ? vn : cn, e &= ~(v ? cn : vn), e & J || (e &= ~(q | W));
        var M = [
          n,
          e,
          i,
          y,
          w,
          S,
          x,
          l,
          h,
          _
        ], I = t.apply(f, M);
        return Ei(n) && Hf(I, M), I.placeholder = r, qf(I, n, e);
      }
      function Ai(n) {
        var e = tn[n];
        return function(t, r) {
          if (t = Gn(t), r = r == null ? 0 : sn(T(r), 292), r && Hu(t)) {
            var i = (N(t) + "e").split("e"), o = e(i[0] + "e" + (+i[1] + r));
            return i = (N(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return e(t);
        };
      }
      var ns = Ge && 1 / Bt(new Ge([, -0]))[1] == ye ? function(n) {
        return new Ge(n);
      } : qi;
      function Lf(n) {
        return function(e) {
          var t = hn(e);
          return t == qn ? Vr(e) : t == Kn ? vl(e) : ll(e, n(e));
        };
      }
      function ue(n, e, t, r, i, o, a, l) {
        var h = e & W;
        if (!h && typeof n != "function")
          throw new Dn(L);
        var _ = r ? r.length : 0;
        if (_ || (e &= ~(vn | cn), r = i = f), a = a === f ? a : rn(T(a), 0), l = l === f ? l : T(l), _ -= i ? i.length : 0, e & cn) {
          var v = r, w = i;
          r = i = f;
        }
        var x = h ? f : bi(n), y = [
          n,
          e,
          t,
          r,
          i,
          v,
          w,
          o,
          a,
          l
        ];
        if (x && ds(y, x), n = y[0], e = y[1], t = y[2], r = y[3], i = y[4], l = y[9] = y[9] === f ? h ? 0 : n.length : rn(y[9] - _, 0), !l && e & (ln | bn) && (e &= ~(ln | bn)), !e || e == q)
          var S = Vc(n, e, t);
        else
          e == ln || e == bn ? S = kc(n, e, l) : (e == vn || e == (q | vn)) && !i.length ? S = jc(n, e, t, r) : S = ir.apply(f, y);
        var M = x ? sf : Hf;
        return qf(M(S, y), n, e);
      }
      function Mf(n, e, t, r) {
        return n === f || Zn(n, Ne[t]) && !G.call(r, t) ? e : n;
      }
      function Pf(n, e, t, r, i, o) {
        return V(n) && V(e) && (o.set(e, n), nr(n, e, f, Pf, o), o.delete(e)), n;
      }
      function es(n) {
        return _t(n) ? f : n;
      }
      function Wf(n, e, t, r, i, o) {
        var a = t & Hn, l = n.length, h = e.length;
        if (l != h && !(a && h > l))
          return !1;
        var _ = o.get(n), v = o.get(e);
        if (_ && v)
          return _ == e && v == n;
        var w = -1, x = !0, y = t & jn ? new Ie() : f;
        for (o.set(n, e), o.set(e, n); ++w < l; ) {
          var S = n[w], M = e[w];
          if (r)
            var I = a ? r(M, S, w, e, n, o) : r(S, M, w, n, e, o);
          if (I !== f) {
            if (I)
              continue;
            x = !1;
            break;
          }
          if (y) {
            if (!zr(e, function(D, F) {
              if (!tt(y, F) && (S === D || i(S, D, t, r, o)))
                return y.push(F);
            })) {
              x = !1;
              break;
            }
          } else if (!(S === M || i(S, M, t, r, o))) {
            x = !1;
            break;
          }
        }
        return o.delete(n), o.delete(e), x;
      }
      function ts(n, e, t, r, i, o, a) {
        switch (t) {
          case Pe:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case et:
            return !(n.byteLength != e.byteLength || !o(new Ht(n), new Ht(e)));
          case Je:
          case Qe:
          case Ve:
            return Zn(+n, +e);
          case Et:
            return n.name == e.name && n.message == e.message;
          case ke:
          case je:
            return n == e + "";
          case qn:
            var l = Vr;
          case Kn:
            var h = r & Hn;
            if (l || (l = Bt), n.size != e.size && !h)
              return !1;
            var _ = a.get(n);
            if (_)
              return _ == e;
            r |= jn, a.set(n, e);
            var v = Wf(l(n), l(e), r, i, o, a);
            return a.delete(n), v;
          case Tt:
            if (ot)
              return ot.call(n) == ot.call(e);
        }
        return !1;
      }
      function rs(n, e, t, r, i, o) {
        var a = t & Hn, l = yi(n), h = l.length, _ = yi(e), v = _.length;
        if (h != v && !a)
          return !1;
        for (var w = h; w--; ) {
          var x = l[w];
          if (!(a ? x in e : G.call(e, x)))
            return !1;
        }
        var y = o.get(n), S = o.get(e);
        if (y && S)
          return y == e && S == n;
        var M = !0;
        o.set(n, e), o.set(e, n);
        for (var I = a; ++w < h; ) {
          x = l[w];
          var D = n[x], F = e[x];
          if (r)
            var Cn = a ? r(F, D, x, e, n, o) : r(D, F, x, n, e, o);
          if (!(Cn === f ? D === F || i(D, F, t, r, o) : Cn)) {
            M = !1;
            break;
          }
          I || (I = x == "constructor");
        }
        if (M && !I) {
          var _n = n.constructor, Tn = e.constructor;
          _n != Tn && "constructor" in n && "constructor" in e && !(typeof _n == "function" && _n instanceof _n && typeof Tn == "function" && Tn instanceof Tn) && (M = !1);
        }
        return o.delete(n), o.delete(e), M;
      }
      function fe(n) {
        return Ti(Gf(n, f, Jf), n + "");
      }
      function yi(n) {
        return ju(n, un, Ii);
      }
      function Oi(n) {
        return ju(n, An, Df);
      }
      var bi = Xt ? function(n) {
        return Xt.get(n);
      } : qi;
      function ar(n) {
        for (var e = n.name + "", t = $e[e], r = G.call($e, e) ? t.length : 0; r--; ) {
          var i = t[r], o = i.func;
          if (o == null || o == n)
            return i.name;
        }
        return e;
      }
      function ze(n) {
        var e = G.call(u, "placeholder") ? u : n;
        return e.placeholder;
      }
      function b() {
        var n = u.iteratee || $i;
        return n = n === $i ? tf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function lr(n, e) {
        var t = n.__data__;
        return ss(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
      }
      function Si(n) {
        for (var e = un(n), t = e.length; t--; ) {
          var r = e[t], i = n[r];
          e[t] = [r, i, Uf(i)];
        }
        return e;
      }
      function Ce(n, e) {
        var t = pl(n, e);
        return ef(t) ? t : f;
      }
      function is(n) {
        var e = G.call(n, be), t = n[be];
        try {
          n[be] = f;
          var r = !0;
        } catch {
        }
        var i = Gt.call(n);
        return r && (e ? n[be] = t : delete n[be]), i;
      }
      var Ii = jr ? function(n) {
        return n == null ? [] : (n = H(n), he(jr(n), function(e) {
          return Gu.call(n, e);
        }));
      } : Ki, Df = jr ? function(n) {
        for (var e = []; n; )
          ge(e, Ii(n)), n = qt(n);
        return e;
      } : Ki, hn = pn;
      (ni && hn(new ni(new ArrayBuffer(1))) != Pe || it && hn(new it()) != qn || ei && hn(ei.resolve()) != Qi || Ge && hn(new Ge()) != Kn || ut && hn(new ut()) != nt) && (hn = function(n) {
        var e = pn(n), t = e == ee ? n.constructor : f, r = t ? Te(t) : "";
        if (r)
          switch (r) {
            case Gl:
              return Pe;
            case $l:
              return qn;
            case Hl:
              return Qi;
            case ql:
              return Kn;
            case Kl:
              return nt;
          }
        return e;
      });
      function us(n, e, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var o = t[r], a = o.size;
          switch (o.type) {
            case "drop":
              n += a;
              break;
            case "dropRight":
              e -= a;
              break;
            case "take":
              e = sn(e, n + a);
              break;
            case "takeRight":
              n = rn(n, e - a);
              break;
          }
        }
        return { start: n, end: e };
      }
      function fs(n) {
        var e = n.match(ha);
        return e ? e[1].split(ga) : [];
      }
      function Bf(n, e, t) {
        e = we(e, n);
        for (var r = -1, i = e.length, o = !1; ++r < i; ) {
          var a = kn(e[r]);
          if (!(o = n != null && t(n, a)))
            break;
          n = n[a];
        }
        return o || ++r != i ? o : (i = n == null ? 0 : n.length, !!i && _r(i) && oe(a, i) && (C(n) || Le(n)));
      }
      function os(n) {
        var e = n.length, t = new n.constructor(e);
        return e && typeof n[0] == "string" && G.call(n, "index") && (t.index = n.index, t.input = n.input), t;
      }
      function Ff(n) {
        return typeof n.constructor == "function" && !pt(n) ? He(qt(n)) : {};
      }
      function as(n, e, t) {
        var r = n.constructor;
        switch (e) {
          case et:
            return mi(n);
          case Je:
          case Qe:
            return new r(+n);
          case Pe:
            return zc(n, t);
          case Sr:
          case Ir:
          case Rr:
          case Er:
          case Cr:
          case Tr:
          case Lr:
          case Mr:
          case Pr:
            return mf(n, t);
          case qn:
            return new r();
          case Ve:
          case je:
            return new r(n);
          case ke:
            return Yc(n);
          case Kn:
            return new r();
          case Tt:
            return Zc(n);
        }
      }
      function ls(n, e) {
        var t = e.length;
        if (!t)
          return n;
        var r = t - 1;
        return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(sa, `{
/* [wrapped with ` + e + `] */
`);
      }
      function cs(n) {
        return C(n) || Le(n) || !!($u && n && n[$u]);
      }
      function oe(n, e) {
        var t = typeof n;
        return e = e ?? se, !!e && (t == "number" || t != "symbol" && ya.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function dn(n, e, t) {
        if (!V(t))
          return !1;
        var r = typeof e;
        return (r == "number" ? xn(t) && oe(e, t.length) : r == "string" && e in t) ? Zn(t[e], n) : !1;
      }
      function Ri(n, e) {
        if (C(n))
          return !1;
        var t = typeof n;
        return t == "number" || t == "symbol" || t == "boolean" || n == null || En(n) ? !0 : oa.test(n) || !fa.test(n) || e != null && n in H(e);
      }
      function ss(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ei(n) {
        var e = ar(n), t = u[e];
        if (typeof t != "function" || !(e in B.prototype))
          return !1;
        if (n === t)
          return !0;
        var r = bi(t);
        return !!r && n === r[0];
      }
      function hs(n) {
        return !!Fu && Fu in n;
      }
      var gs = Ut ? ae : zi;
      function pt(n) {
        var e = n && n.constructor, t = typeof e == "function" && e.prototype || Ne;
        return n === t;
      }
      function Uf(n) {
        return n === n && !V(n);
      }
      function Nf(n, e) {
        return function(t) {
          return t == null ? !1 : t[n] === e && (e !== f || n in H(t));
        };
      }
      function ps(n) {
        var e = pr(n, function(r) {
          return t.size === an && t.clear(), r;
        }), t = e.cache;
        return e;
      }
      function ds(n, e) {
        var t = n[1], r = e[1], i = t | r, o = i < (q | W | wn), a = r == wn && t == ln || r == wn && t == ne && n[7].length <= e[8] || r == (wn | ne) && e[7].length <= e[8] && t == ln;
        if (!(o || a))
          return n;
        r & q && (n[2] = e[2], i |= t & q ? 0 : J);
        var l = e[3];
        if (l) {
          var h = n[3];
          n[3] = h ? Af(h, l, e[4]) : l, n[4] = h ? pe(n[3], On) : e[4];
        }
        return l = e[5], l && (h = n[5], n[5] = h ? yf(h, l, e[6]) : l, n[6] = h ? pe(n[5], On) : e[6]), l = e[7], l && (n[7] = l), r & wn && (n[8] = n[8] == null ? e[8] : sn(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function _s(n) {
        var e = [];
        if (n != null)
          for (var t in H(n))
            e.push(t);
        return e;
      }
      function vs(n) {
        return Gt.call(n);
      }
      function Gf(n, e, t) {
        return e = rn(e === f ? n.length - 1 : e, 0), function() {
          for (var r = arguments, i = -1, o = rn(r.length - e, 0), a = g(o); ++i < o; )
            a[i] = r[e + i];
          i = -1;
          for (var l = g(e + 1); ++i < e; )
            l[i] = r[i];
          return l[e] = t(a), Sn(n, this, l);
        };
      }
      function $f(n, e) {
        return e.length < 2 ? n : Ee(n, Un(e, 0, -1));
      }
      function ws(n, e) {
        for (var t = n.length, r = sn(e.length, t), i = mn(n); r--; ) {
          var o = e[r];
          n[r] = oe(o, t) ? i[o] : f;
        }
        return n;
      }
      function Ci(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var Hf = Kf(sf), dt = Pl || function(n, e) {
        return fn.setTimeout(n, e);
      }, Ti = Kf($c);
      function qf(n, e, t) {
        var r = e + "";
        return Ti(n, ls(r, ms(fs(r), t)));
      }
      function Kf(n) {
        var e = 0, t = 0;
        return function() {
          var r = Fl(), i = Q - (r - t);
          if (t = r, i > 0) {
            if (++e >= z)
              return arguments[0];
          } else
            e = 0;
          return n.apply(f, arguments);
        };
      }
      function cr(n, e) {
        var t = -1, r = n.length, i = r - 1;
        for (e = e === f ? r : e; ++t < e; ) {
          var o = hi(t, i), a = n[o];
          n[o] = n[t], n[t] = a;
        }
        return n.length = e, n;
      }
      var zf = ps(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(aa, function(t, r, i, o) {
          e.push(i ? o.replace(_a, "$1") : r || t);
        }), e;
      });
      function kn(n) {
        if (typeof n == "string" || En(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -ye ? "-0" : e;
      }
      function Te(n) {
        if (n != null) {
          try {
            return Nt.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function ms(n, e) {
        return Wn(Yo, function(t) {
          var r = "_." + t[0];
          e & t[1] && !Wt(n, r) && n.push(r);
        }), n.sort();
      }
      function Yf(n) {
        if (n instanceof B)
          return n.clone();
        var e = new Bn(n.__wrapped__, n.__chain__);
        return e.__actions__ = mn(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function xs(n, e, t) {
        (t ? dn(n, e, t) : e === f) ? e = 1 : e = rn(T(e), 0);
        var r = n == null ? 0 : n.length;
        if (!r || e < 1)
          return [];
        for (var i = 0, o = 0, a = g(Yt(r / e)); i < r; )
          a[o++] = Un(n, i, i += e);
        return a;
      }
      function As(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
          var o = n[e];
          o && (i[r++] = o);
        }
        return i;
      }
      function ys() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = g(n - 1), t = arguments[0], r = n; r--; )
          e[r - 1] = arguments[r];
        return ge(C(t) ? mn(t) : [t], on(e, 1));
      }
      var Os = P(function(n, e) {
        return j(n) ? lt(n, on(e, 1, j, !0)) : [];
      }), bs = P(function(n, e) {
        var t = Nn(e);
        return j(t) && (t = f), j(n) ? lt(n, on(e, 1, j, !0), b(t, 2)) : [];
      }), Ss = P(function(n, e) {
        var t = Nn(e);
        return j(t) && (t = f), j(n) ? lt(n, on(e, 1, j, !0), f, t) : [];
      });
      function Is(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === f ? 1 : T(e), Un(n, e < 0 ? 0 : e, r)) : [];
      }
      function Rs(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === f ? 1 : T(e), e = r - e, Un(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Es(n, e) {
        return n && n.length ? tr(n, b(e, 3), !0, !0) : [];
      }
      function Cs(n, e) {
        return n && n.length ? tr(n, b(e, 3), !0) : [];
      }
      function Ts(n, e, t, r) {
        var i = n == null ? 0 : n.length;
        return i ? (t && typeof t != "number" && dn(n, e, t) && (t = 0, r = i), yc(n, e, t, r)) : [];
      }
      function Zf(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : T(t);
        return i < 0 && (i = rn(r + i, 0)), Dt(n, b(e, 3), i);
      }
      function Xf(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== f && (i = T(t), i = t < 0 ? rn(r + i, 0) : sn(i, r - 1)), Dt(n, b(e, 3), i, !0);
      }
      function Jf(n) {
        var e = n == null ? 0 : n.length;
        return e ? on(n, 1) : [];
      }
      function Ls(n) {
        var e = n == null ? 0 : n.length;
        return e ? on(n, ye) : [];
      }
      function Ms(n, e) {
        var t = n == null ? 0 : n.length;
        return t ? (e = e === f ? 1 : T(e), on(n, e)) : [];
      }
      function Ps(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
          var i = n[e];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Qf(n) {
        return n && n.length ? n[0] : f;
      }
      function Ws(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : T(t);
        return i < 0 && (i = rn(r + i, 0)), De(n, e, i);
      }
      function Ds(n) {
        var e = n == null ? 0 : n.length;
        return e ? Un(n, 0, -1) : [];
      }
      var Bs = P(function(n) {
        var e = Z(n, vi);
        return e.length && e[0] === n[0] ? oi(e) : [];
      }), Fs = P(function(n) {
        var e = Nn(n), t = Z(n, vi);
        return e === Nn(t) ? e = f : t.pop(), t.length && t[0] === n[0] ? oi(t, b(e, 2)) : [];
      }), Us = P(function(n) {
        var e = Nn(n), t = Z(n, vi);
        return e = typeof e == "function" ? e : f, e && t.pop(), t.length && t[0] === n[0] ? oi(t, f, e) : [];
      });
      function Ns(n, e) {
        return n == null ? "" : Dl.call(n, e);
      }
      function Nn(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : f;
      }
      function Gs(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return t !== f && (i = T(t), i = i < 0 ? rn(r + i, 0) : sn(i, r - 1)), e === e ? ml(n, e, i) : Dt(n, Cu, i, !0);
      }
      function $s(n, e) {
        return n && n.length ? of(n, T(e)) : f;
      }
      var Hs = P(Vf);
      function Vf(n, e) {
        return n && n.length && e && e.length ? si(n, e) : n;
      }
      function qs(n, e, t) {
        return n && n.length && e && e.length ? si(n, e, b(t, 2)) : n;
      }
      function Ks(n, e, t) {
        return n && n.length && e && e.length ? si(n, e, f, t) : n;
      }
      var zs = fe(function(n, e) {
        var t = n == null ? 0 : n.length, r = ri(n, e);
        return cf(n, Z(e, function(i) {
          return oe(i, t) ? +i : i;
        }).sort(xf)), r;
      });
      function Ys(n, e) {
        var t = [];
        if (!(n && n.length))
          return t;
        var r = -1, i = [], o = n.length;
        for (e = b(e, 3); ++r < o; ) {
          var a = n[r];
          e(a, r, n) && (t.push(a), i.push(r));
        }
        return cf(n, i), t;
      }
      function Li(n) {
        return n == null ? n : Nl.call(n);
      }
      function Zs(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && dn(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : T(e), t = t === f ? r : T(t)), Un(n, e, t)) : [];
      }
      function Xs(n, e) {
        return er(n, e);
      }
      function Js(n, e, t) {
        return pi(n, e, b(t, 2));
      }
      function Qs(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = er(n, e);
          if (r < t && Zn(n[r], e))
            return r;
        }
        return -1;
      }
      function Vs(n, e) {
        return er(n, e, !0);
      }
      function ks(n, e, t) {
        return pi(n, e, b(t, 2), !0);
      }
      function js(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = er(n, e, !0) - 1;
          if (Zn(n[r], e))
            return r;
        }
        return -1;
      }
      function nh(n) {
        return n && n.length ? hf(n) : [];
      }
      function eh(n, e) {
        return n && n.length ? hf(n, b(e, 2)) : [];
      }
      function th(n) {
        var e = n == null ? 0 : n.length;
        return e ? Un(n, 1, e) : [];
      }
      function rh(n, e, t) {
        return n && n.length ? (e = t || e === f ? 1 : T(e), Un(n, 0, e < 0 ? 0 : e)) : [];
      }
      function ih(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === f ? 1 : T(e), e = r - e, Un(n, e < 0 ? 0 : e, r)) : [];
      }
      function uh(n, e) {
        return n && n.length ? tr(n, b(e, 3), !1, !0) : [];
      }
      function fh(n, e) {
        return n && n.length ? tr(n, b(e, 3)) : [];
      }
      var oh = P(function(n) {
        return ve(on(n, 1, j, !0));
      }), ah = P(function(n) {
        var e = Nn(n);
        return j(e) && (e = f), ve(on(n, 1, j, !0), b(e, 2));
      }), lh = P(function(n) {
        var e = Nn(n);
        return e = typeof e == "function" ? e : f, ve(on(n, 1, j, !0), f, e);
      });
      function ch(n) {
        return n && n.length ? ve(n) : [];
      }
      function sh(n, e) {
        return n && n.length ? ve(n, b(e, 2)) : [];
      }
      function hh(n, e) {
        return e = typeof e == "function" ? e : f, n && n.length ? ve(n, f, e) : [];
      }
      function Mi(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = he(n, function(t) {
          if (j(t))
            return e = rn(t.length, e), !0;
        }), Jr(e, function(t) {
          return Z(n, Yr(t));
        });
      }
      function kf(n, e) {
        if (!(n && n.length))
          return [];
        var t = Mi(n);
        return e == null ? t : Z(t, function(r) {
          return Sn(e, f, r);
        });
      }
      var gh = P(function(n, e) {
        return j(n) ? lt(n, e) : [];
      }), ph = P(function(n) {
        return _i(he(n, j));
      }), dh = P(function(n) {
        var e = Nn(n);
        return j(e) && (e = f), _i(he(n, j), b(e, 2));
      }), _h = P(function(n) {
        var e = Nn(n);
        return e = typeof e == "function" ? e : f, _i(he(n, j), f, e);
      }), vh = P(Mi);
      function wh(n, e) {
        return _f(n || [], e || [], at);
      }
      function mh(n, e) {
        return _f(n || [], e || [], ht);
      }
      var xh = P(function(n) {
        var e = n.length, t = e > 1 ? n[e - 1] : f;
        return t = typeof t == "function" ? (n.pop(), t) : f, kf(n, t);
      });
      function jf(n) {
        var e = u(n);
        return e.__chain__ = !0, e;
      }
      function Ah(n, e) {
        return e(n), n;
      }
      function sr(n, e) {
        return e(n);
      }
      var yh = fe(function(n) {
        var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(o) {
          return ri(o, n);
        };
        return e > 1 || this.__actions__.length || !(r instanceof B) || !oe(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
          func: sr,
          args: [i],
          thisArg: f
        }), new Bn(r, this.__chain__).thru(function(o) {
          return e && !o.length && o.push(f), o;
        }));
      });
      function Oh() {
        return jf(this);
      }
      function bh() {
        return new Bn(this.value(), this.__chain__);
      }
      function Sh() {
        this.__values__ === f && (this.__values__ = go(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? f : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function Ih() {
        return this;
      }
      function Rh(n) {
        for (var e, t = this; t instanceof Qt; ) {
          var r = Yf(t);
          r.__index__ = 0, r.__values__ = f, e ? i.__wrapped__ = r : e = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function Eh() {
        var n = this.__wrapped__;
        if (n instanceof B) {
          var e = n;
          return this.__actions__.length && (e = new B(this)), e = e.reverse(), e.__actions__.push({
            func: sr,
            args: [Li],
            thisArg: f
          }), new Bn(e, this.__chain__);
        }
        return this.thru(Li);
      }
      function Ch() {
        return df(this.__wrapped__, this.__actions__);
      }
      var Th = rr(function(n, e, t) {
        G.call(n, t) ? ++n[t] : ie(n, t, 1);
      });
      function Lh(n, e, t) {
        var r = C(n) ? Ru : Ac;
        return t && dn(n, e, t) && (e = f), r(n, b(e, 3));
      }
      function Mh(n, e) {
        var t = C(n) ? he : Vu;
        return t(n, b(e, 3));
      }
      var Ph = If(Zf), Wh = If(Xf);
      function Dh(n, e) {
        return on(hr(n, e), 1);
      }
      function Bh(n, e) {
        return on(hr(n, e), ye);
      }
      function Fh(n, e, t) {
        return t = t === f ? 1 : T(t), on(hr(n, e), t);
      }
      function no(n, e) {
        var t = C(n) ? Wn : _e;
        return t(n, b(e, 3));
      }
      function eo(n, e) {
        var t = C(n) ? tl : Qu;
        return t(n, b(e, 3));
      }
      var Uh = rr(function(n, e, t) {
        G.call(n, t) ? n[t].push(e) : ie(n, t, [e]);
      });
      function Nh(n, e, t, r) {
        n = xn(n) ? n : Ze(n), t = t && !r ? T(t) : 0;
        var i = n.length;
        return t < 0 && (t = rn(i + t, 0)), vr(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && De(n, e, t) > -1;
      }
      var Gh = P(function(n, e, t) {
        var r = -1, i = typeof e == "function", o = xn(n) ? g(n.length) : [];
        return _e(n, function(a) {
          o[++r] = i ? Sn(e, a, t) : ct(a, e, t);
        }), o;
      }), $h = rr(function(n, e, t) {
        ie(n, t, e);
      });
      function hr(n, e) {
        var t = C(n) ? Z : rf;
        return t(n, b(e, 3));
      }
      function Hh(n, e, t, r) {
        return n == null ? [] : (C(e) || (e = e == null ? [] : [e]), t = r ? f : t, C(t) || (t = t == null ? [] : [t]), af(n, e, t));
      }
      var qh = rr(function(n, e, t) {
        n[t ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Kh(n, e, t) {
        var r = C(n) ? Kr : Lu, i = arguments.length < 3;
        return r(n, b(e, 4), t, i, _e);
      }
      function zh(n, e, t) {
        var r = C(n) ? rl : Lu, i = arguments.length < 3;
        return r(n, b(e, 4), t, i, Qu);
      }
      function Yh(n, e) {
        var t = C(n) ? he : Vu;
        return t(n, dr(b(e, 3)));
      }
      function Zh(n) {
        var e = C(n) ? Yu : Nc;
        return e(n);
      }
      function Xh(n, e, t) {
        (t ? dn(n, e, t) : e === f) ? e = 1 : e = T(e);
        var r = C(n) ? _c : Gc;
        return r(n, e);
      }
      function Jh(n) {
        var e = C(n) ? vc : Hc;
        return e(n);
      }
      function Qh(n) {
        if (n == null)
          return 0;
        if (xn(n))
          return vr(n) ? Fe(n) : n.length;
        var e = hn(n);
        return e == qn || e == Kn ? n.size : li(n).length;
      }
      function Vh(n, e, t) {
        var r = C(n) ? zr : qc;
        return t && dn(n, e, t) && (e = f), r(n, b(e, 3));
      }
      var kh = P(function(n, e) {
        if (n == null)
          return [];
        var t = e.length;
        return t > 1 && dn(n, e[0], e[1]) ? e = [] : t > 2 && dn(e[0], e[1], e[2]) && (e = [e[0]]), af(n, on(e, 1), []);
      }), gr = Ml || function() {
        return fn.Date.now();
      };
      function jh(n, e) {
        if (typeof e != "function")
          throw new Dn(L);
        return n = T(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function to(n, e, t) {
        return e = t ? f : e, e = n && e == null ? n.length : e, ue(n, wn, f, f, f, f, e);
      }
      function ro(n, e) {
        var t;
        if (typeof e != "function")
          throw new Dn(L);
        return n = T(n), function() {
          return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = f), t;
        };
      }
      var Pi = P(function(n, e, t) {
        var r = q;
        if (t.length) {
          var i = pe(t, ze(Pi));
          r |= vn;
        }
        return ue(n, r, e, t, i);
      }), io = P(function(n, e, t) {
        var r = q | W;
        if (t.length) {
          var i = pe(t, ze(io));
          r |= vn;
        }
        return ue(e, r, n, t, i);
      });
      function uo(n, e, t) {
        e = t ? f : e;
        var r = ue(n, ln, f, f, f, f, f, e);
        return r.placeholder = uo.placeholder, r;
      }
      function fo(n, e, t) {
        e = t ? f : e;
        var r = ue(n, bn, f, f, f, f, f, e);
        return r.placeholder = fo.placeholder, r;
      }
      function oo(n, e, t) {
        var r, i, o, a, l, h, _ = 0, v = !1, w = !1, x = !0;
        if (typeof n != "function")
          throw new Dn(L);
        e = Gn(e) || 0, V(t) && (v = !!t.leading, w = "maxWait" in t, o = w ? rn(Gn(t.maxWait) || 0, e) : o, x = "trailing" in t ? !!t.trailing : x);
        function y(nn) {
          var Xn = r, ce = i;
          return r = i = f, _ = nn, a = n.apply(ce, Xn), a;
        }
        function S(nn) {
          return _ = nn, l = dt(D, e), v ? y(nn) : a;
        }
        function M(nn) {
          var Xn = nn - h, ce = nn - _, Ro = e - Xn;
          return w ? sn(Ro, o - ce) : Ro;
        }
        function I(nn) {
          var Xn = nn - h, ce = nn - _;
          return h === f || Xn >= e || Xn < 0 || w && ce >= o;
        }
        function D() {
          var nn = gr();
          if (I(nn))
            return F(nn);
          l = dt(D, M(nn));
        }
        function F(nn) {
          return l = f, x && r ? y(nn) : (r = i = f, a);
        }
        function Cn() {
          l !== f && vf(l), _ = 0, r = h = i = l = f;
        }
        function _n() {
          return l === f ? a : F(gr());
        }
        function Tn() {
          var nn = gr(), Xn = I(nn);
          if (r = arguments, i = this, h = nn, Xn) {
            if (l === f)
              return S(h);
            if (w)
              return vf(l), l = dt(D, e), y(h);
          }
          return l === f && (l = dt(D, e)), a;
        }
        return Tn.cancel = Cn, Tn.flush = _n, Tn;
      }
      var ng = P(function(n, e) {
        return Ju(n, 1, e);
      }), eg = P(function(n, e, t) {
        return Ju(n, Gn(e) || 0, t);
      });
      function tg(n) {
        return ue(n, Xe);
      }
      function pr(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new Dn(L);
        var t = function() {
          var r = arguments, i = e ? e.apply(this, r) : r[0], o = t.cache;
          if (o.has(i))
            return o.get(i);
          var a = n.apply(this, r);
          return t.cache = o.set(i, a) || o, a;
        };
        return t.cache = new (pr.Cache || re)(), t;
      }
      pr.Cache = re;
      function dr(n) {
        if (typeof n != "function")
          throw new Dn(L);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, e[0]);
            case 2:
              return !n.call(this, e[0], e[1]);
            case 3:
              return !n.call(this, e[0], e[1], e[2]);
          }
          return !n.apply(this, e);
        };
      }
      function rg(n) {
        return ro(2, n);
      }
      var ig = Kc(function(n, e) {
        e = e.length == 1 && C(e[0]) ? Z(e[0], In(b())) : Z(on(e, 1), In(b()));
        var t = e.length;
        return P(function(r) {
          for (var i = -1, o = sn(r.length, t); ++i < o; )
            r[i] = e[i].call(this, r[i]);
          return Sn(n, this, r);
        });
      }), Wi = P(function(n, e) {
        var t = pe(e, ze(Wi));
        return ue(n, vn, f, e, t);
      }), ao = P(function(n, e) {
        var t = pe(e, ze(ao));
        return ue(n, cn, f, e, t);
      }), ug = fe(function(n, e) {
        return ue(n, ne, f, f, f, e);
      });
      function fg(n, e) {
        if (typeof n != "function")
          throw new Dn(L);
        return e = e === f ? e : T(e), P(n, e);
      }
      function og(n, e) {
        if (typeof n != "function")
          throw new Dn(L);
        return e = e == null ? 0 : rn(T(e), 0), P(function(t) {
          var r = t[e], i = me(t, 0, e);
          return r && ge(i, r), Sn(n, this, i);
        });
      }
      function ag(n, e, t) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new Dn(L);
        return V(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), oo(n, e, {
          leading: r,
          maxWait: e,
          trailing: i
        });
      }
      function lg(n) {
        return to(n, 1);
      }
      function cg(n, e) {
        return Wi(wi(e), n);
      }
      function sg() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return C(n) ? n : [n];
      }
      function hg(n) {
        return Fn(n, Ln);
      }
      function gg(n, e) {
        return e = typeof e == "function" ? e : f, Fn(n, Ln, e);
      }
      function pg(n) {
        return Fn(n, gn | Ln);
      }
      function dg(n, e) {
        return e = typeof e == "function" ? e : f, Fn(n, gn | Ln, e);
      }
      function _g(n, e) {
        return e == null || Xu(n, e, un(e));
      }
      function Zn(n, e) {
        return n === e || n !== n && e !== e;
      }
      var vg = or(fi), wg = or(function(n, e) {
        return n >= e;
      }), Le = nf(function() {
        return arguments;
      }()) ? nf : function(n) {
        return k(n) && G.call(n, "callee") && !Gu.call(n, "callee");
      }, C = g.isArray, mg = Au ? In(Au) : Rc;
      function xn(n) {
        return n != null && _r(n.length) && !ae(n);
      }
      function j(n) {
        return k(n) && xn(n);
      }
      function xg(n) {
        return n === !0 || n === !1 || k(n) && pn(n) == Je;
      }
      var xe = Wl || zi, Ag = yu ? In(yu) : Ec;
      function yg(n) {
        return k(n) && n.nodeType === 1 && !_t(n);
      }
      function Og(n) {
        if (n == null)
          return !0;
        if (xn(n) && (C(n) || typeof n == "string" || typeof n.splice == "function" || xe(n) || Ye(n) || Le(n)))
          return !n.length;
        var e = hn(n);
        if (e == qn || e == Kn)
          return !n.size;
        if (pt(n))
          return !li(n).length;
        for (var t in n)
          if (G.call(n, t))
            return !1;
        return !0;
      }
      function bg(n, e) {
        return st(n, e);
      }
      function Sg(n, e, t) {
        t = typeof t == "function" ? t : f;
        var r = t ? t(n, e) : f;
        return r === f ? st(n, e, f, t) : !!r;
      }
      function Di(n) {
        if (!k(n))
          return !1;
        var e = pn(n);
        return e == Et || e == Xo || typeof n.message == "string" && typeof n.name == "string" && !_t(n);
      }
      function Ig(n) {
        return typeof n == "number" && Hu(n);
      }
      function ae(n) {
        if (!V(n))
          return !1;
        var e = pn(n);
        return e == Ct || e == Ji || e == Zo || e == Qo;
      }
      function lo(n) {
        return typeof n == "number" && n == T(n);
      }
      function _r(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= se;
      }
      function V(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function k(n) {
        return n != null && typeof n == "object";
      }
      var co = Ou ? In(Ou) : Tc;
      function Rg(n, e) {
        return n === e || ai(n, e, Si(e));
      }
      function Eg(n, e, t) {
        return t = typeof t == "function" ? t : f, ai(n, e, Si(e), t);
      }
      function Cg(n) {
        return so(n) && n != +n;
      }
      function Tg(n) {
        if (gs(n))
          throw new R(E);
        return ef(n);
      }
      function Lg(n) {
        return n === null;
      }
      function Mg(n) {
        return n == null;
      }
      function so(n) {
        return typeof n == "number" || k(n) && pn(n) == Ve;
      }
      function _t(n) {
        if (!k(n) || pn(n) != ee)
          return !1;
        var e = qt(n);
        if (e === null)
          return !0;
        var t = G.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && Nt.call(t) == El;
      }
      var Bi = bu ? In(bu) : Lc;
      function Pg(n) {
        return lo(n) && n >= -se && n <= se;
      }
      var ho = Su ? In(Su) : Mc;
      function vr(n) {
        return typeof n == "string" || !C(n) && k(n) && pn(n) == je;
      }
      function En(n) {
        return typeof n == "symbol" || k(n) && pn(n) == Tt;
      }
      var Ye = Iu ? In(Iu) : Pc;
      function Wg(n) {
        return n === f;
      }
      function Dg(n) {
        return k(n) && hn(n) == nt;
      }
      function Bg(n) {
        return k(n) && pn(n) == ko;
      }
      var Fg = or(ci), Ug = or(function(n, e) {
        return n <= e;
      });
      function go(n) {
        if (!n)
          return [];
        if (xn(n))
          return vr(n) ? zn(n) : mn(n);
        if (rt && n[rt])
          return _l(n[rt]());
        var e = hn(n), t = e == qn ? Vr : e == Kn ? Bt : Ze;
        return t(n);
      }
      function le(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Gn(n), n === ye || n === -ye) {
          var e = n < 0 ? -1 : 1;
          return e * qo;
        }
        return n === n ? n : 0;
      }
      function T(n) {
        var e = le(n), t = e % 1;
        return e === e ? t ? e - t : e : 0;
      }
      function po(n) {
        return n ? Re(T(n), 0, Jn) : 0;
      }
      function Gn(n) {
        if (typeof n == "number")
          return n;
        if (En(n))
          return It;
        if (V(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = V(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Mu(n);
        var t = ma.test(n);
        return t || Aa.test(n) ? ja(n.slice(2), t ? 2 : 8) : wa.test(n) ? It : +n;
      }
      function _o(n) {
        return Vn(n, An(n));
      }
      function Ng(n) {
        return n ? Re(T(n), -se, se) : n === 0 ? n : 0;
      }
      function N(n) {
        return n == null ? "" : Rn(n);
      }
      var Gg = qe(function(n, e) {
        if (pt(e) || xn(e)) {
          Vn(e, un(e), n);
          return;
        }
        for (var t in e)
          G.call(e, t) && at(n, t, e[t]);
      }), vo = qe(function(n, e) {
        Vn(e, An(e), n);
      }), wr = qe(function(n, e, t, r) {
        Vn(e, An(e), n, r);
      }), $g = qe(function(n, e, t, r) {
        Vn(e, un(e), n, r);
      }), Hg = fe(ri);
      function qg(n, e) {
        var t = He(n);
        return e == null ? t : Zu(t, e);
      }
      var Kg = P(function(n, e) {
        n = H(n);
        var t = -1, r = e.length, i = r > 2 ? e[2] : f;
        for (i && dn(e[0], e[1], i) && (r = 1); ++t < r; )
          for (var o = e[t], a = An(o), l = -1, h = a.length; ++l < h; ) {
            var _ = a[l], v = n[_];
            (v === f || Zn(v, Ne[_]) && !G.call(n, _)) && (n[_] = o[_]);
          }
        return n;
      }), zg = P(function(n) {
        return n.push(f, Pf), Sn(wo, f, n);
      });
      function Yg(n, e) {
        return Eu(n, b(e, 3), Qn);
      }
      function Zg(n, e) {
        return Eu(n, b(e, 3), ui);
      }
      function Xg(n, e) {
        return n == null ? n : ii(n, b(e, 3), An);
      }
      function Jg(n, e) {
        return n == null ? n : ku(n, b(e, 3), An);
      }
      function Qg(n, e) {
        return n && Qn(n, b(e, 3));
      }
      function Vg(n, e) {
        return n && ui(n, b(e, 3));
      }
      function kg(n) {
        return n == null ? [] : jt(n, un(n));
      }
      function jg(n) {
        return n == null ? [] : jt(n, An(n));
      }
      function Fi(n, e, t) {
        var r = n == null ? f : Ee(n, e);
        return r === f ? t : r;
      }
      function np(n, e) {
        return n != null && Bf(n, e, Oc);
      }
      function Ui(n, e) {
        return n != null && Bf(n, e, bc);
      }
      var ep = Ef(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Gt.call(e)), n[e] = t;
      }, Gi(yn)), tp = Ef(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Gt.call(e)), G.call(n, e) ? n[e].push(t) : n[e] = [t];
      }, b), rp = P(ct);
      function un(n) {
        return xn(n) ? zu(n) : li(n);
      }
      function An(n) {
        return xn(n) ? zu(n, !0) : Wc(n);
      }
      function ip(n, e) {
        var t = {};
        return e = b(e, 3), Qn(n, function(r, i, o) {
          ie(t, e(r, i, o), r);
        }), t;
      }
      function up(n, e) {
        var t = {};
        return e = b(e, 3), Qn(n, function(r, i, o) {
          ie(t, i, e(r, i, o));
        }), t;
      }
      var fp = qe(function(n, e, t) {
        nr(n, e, t);
      }), wo = qe(function(n, e, t, r) {
        nr(n, e, t, r);
      }), op = fe(function(n, e) {
        var t = {};
        if (n == null)
          return t;
        var r = !1;
        e = Z(e, function(o) {
          return o = we(o, n), r || (r = o.length > 1), o;
        }), Vn(n, Oi(n), t), r && (t = Fn(t, gn | en | Ln, es));
        for (var i = e.length; i--; )
          di(t, e[i]);
        return t;
      });
      function ap(n, e) {
        return mo(n, dr(b(e)));
      }
      var lp = fe(function(n, e) {
        return n == null ? {} : Bc(n, e);
      });
      function mo(n, e) {
        if (n == null)
          return {};
        var t = Z(Oi(n), function(r) {
          return [r];
        });
        return e = b(e), lf(n, t, function(r, i) {
          return e(r, i[0]);
        });
      }
      function cp(n, e, t) {
        e = we(e, n);
        var r = -1, i = e.length;
        for (i || (i = 1, n = f); ++r < i; ) {
          var o = n == null ? f : n[kn(e[r])];
          o === f && (r = i, o = t), n = ae(o) ? o.call(n) : o;
        }
        return n;
      }
      function sp(n, e, t) {
        return n == null ? n : ht(n, e, t);
      }
      function hp(n, e, t, r) {
        return r = typeof r == "function" ? r : f, n == null ? n : ht(n, e, t, r);
      }
      var xo = Lf(un), Ao = Lf(An);
      function gp(n, e, t) {
        var r = C(n), i = r || xe(n) || Ye(n);
        if (e = b(e, 4), t == null) {
          var o = n && n.constructor;
          i ? t = r ? new o() : [] : V(n) ? t = ae(o) ? He(qt(n)) : {} : t = {};
        }
        return (i ? Wn : Qn)(n, function(a, l, h) {
          return e(t, a, l, h);
        }), t;
      }
      function pp(n, e) {
        return n == null ? !0 : di(n, e);
      }
      function dp(n, e, t) {
        return n == null ? n : pf(n, e, wi(t));
      }
      function _p(n, e, t, r) {
        return r = typeof r == "function" ? r : f, n == null ? n : pf(n, e, wi(t), r);
      }
      function Ze(n) {
        return n == null ? [] : Qr(n, un(n));
      }
      function vp(n) {
        return n == null ? [] : Qr(n, An(n));
      }
      function wp(n, e, t) {
        return t === f && (t = e, e = f), t !== f && (t = Gn(t), t = t === t ? t : 0), e !== f && (e = Gn(e), e = e === e ? e : 0), Re(Gn(n), e, t);
      }
      function mp(n, e, t) {
        return e = le(e), t === f ? (t = e, e = 0) : t = le(t), n = Gn(n), Sc(n, e, t);
      }
      function xp(n, e, t) {
        if (t && typeof t != "boolean" && dn(n, e, t) && (e = t = f), t === f && (typeof e == "boolean" ? (t = e, e = f) : typeof n == "boolean" && (t = n, n = f)), n === f && e === f ? (n = 0, e = 1) : (n = le(n), e === f ? (e = n, n = 0) : e = le(e)), n > e) {
          var r = n;
          n = e, e = r;
        }
        if (t || n % 1 || e % 1) {
          var i = qu();
          return sn(n + i * (e - n + ka("1e-" + ((i + "").length - 1))), e);
        }
        return hi(n, e);
      }
      var Ap = Ke(function(n, e, t) {
        return e = e.toLowerCase(), n + (t ? yo(e) : e);
      });
      function yo(n) {
        return Ni(N(n).toLowerCase());
      }
      function Oo(n) {
        return n = N(n), n && n.replace(Oa, sl).replace(Ha, "");
      }
      function yp(n, e, t) {
        n = N(n), e = Rn(e);
        var r = n.length;
        t = t === f ? r : Re(T(t), 0, r);
        var i = t;
        return t -= e.length, t >= 0 && n.slice(t, i) == e;
      }
      function Op(n) {
        return n = N(n), n && ra.test(n) ? n.replace(ki, hl) : n;
      }
      function bp(n) {
        return n = N(n), n && la.test(n) ? n.replace(Wr, "\\$&") : n;
      }
      var Sp = Ke(function(n, e, t) {
        return n + (t ? "-" : "") + e.toLowerCase();
      }), Ip = Ke(function(n, e, t) {
        return n + (t ? " " : "") + e.toLowerCase();
      }), Rp = Sf("toLowerCase");
      function Ep(n, e, t) {
        n = N(n), e = T(e);
        var r = e ? Fe(n) : 0;
        if (!e || r >= e)
          return n;
        var i = (e - r) / 2;
        return fr(Zt(i), t) + n + fr(Yt(i), t);
      }
      function Cp(n, e, t) {
        n = N(n), e = T(e);
        var r = e ? Fe(n) : 0;
        return e && r < e ? n + fr(e - r, t) : n;
      }
      function Tp(n, e, t) {
        n = N(n), e = T(e);
        var r = e ? Fe(n) : 0;
        return e && r < e ? fr(e - r, t) + n : n;
      }
      function Lp(n, e, t) {
        return t || e == null ? e = 0 : e && (e = +e), Ul(N(n).replace(Dr, ""), e || 0);
      }
      function Mp(n, e, t) {
        return (t ? dn(n, e, t) : e === f) ? e = 1 : e = T(e), gi(N(n), e);
      }
      function Pp() {
        var n = arguments, e = N(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var Wp = Ke(function(n, e, t) {
        return n + (t ? "_" : "") + e.toLowerCase();
      });
      function Dp(n, e, t) {
        return t && typeof t != "number" && dn(n, e, t) && (e = t = f), t = t === f ? Jn : t >>> 0, t ? (n = N(n), n && (typeof e == "string" || e != null && !Bi(e)) && (e = Rn(e), !e && Be(n)) ? me(zn(n), 0, t) : n.split(e, t)) : [];
      }
      var Bp = Ke(function(n, e, t) {
        return n + (t ? " " : "") + Ni(e);
      });
      function Fp(n, e, t) {
        return n = N(n), t = t == null ? 0 : Re(T(t), 0, n.length), e = Rn(e), n.slice(t, t + e.length) == e;
      }
      function Up(n, e, t) {
        var r = u.templateSettings;
        t && dn(n, e, t) && (e = f), n = N(n), e = wr({}, e, r, Mf);
        var i = wr({}, e.imports, r.imports, Mf), o = un(i), a = Qr(i, o), l, h, _ = 0, v = e.interpolate || Lt, w = "__p += '", x = kr(
          (e.escape || Lt).source + "|" + v.source + "|" + (v === ji ? va : Lt).source + "|" + (e.evaluate || Lt).source + "|$",
          "g"
        ), y = "//# sourceURL=" + (G.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Za + "]") + `
`;
        n.replace(x, function(I, D, F, Cn, _n, Tn) {
          return F || (F = Cn), w += n.slice(_, Tn).replace(ba, gl), D && (l = !0, w += `' +
__e(` + D + `) +
'`), _n && (h = !0, w += `';
` + _n + `;
__p += '`), F && (w += `' +
((__t = (` + F + `)) == null ? '' : __t) +
'`), _ = Tn + I.length, I;
        }), w += `';
`;
        var S = G.call(e, "variable") && e.variable;
        if (!S)
          w = `with (obj) {
` + w + `
}
`;
        else if (da.test(S))
          throw new R(X);
        w = (h ? w.replace(jo, "") : w).replace(na, "$1").replace(ea, "$1;"), w = "function(" + (S || "obj") + `) {
` + (S ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + w + `return __p
}`;
        var M = So(function() {
          return U(o, y + "return " + w).apply(f, a);
        });
        if (M.source = w, Di(M))
          throw M;
        return M;
      }
      function Np(n) {
        return N(n).toLowerCase();
      }
      function Gp(n) {
        return N(n).toUpperCase();
      }
      function $p(n, e, t) {
        if (n = N(n), n && (t || e === f))
          return Mu(n);
        if (!n || !(e = Rn(e)))
          return n;
        var r = zn(n), i = zn(e), o = Pu(r, i), a = Wu(r, i) + 1;
        return me(r, o, a).join("");
      }
      function Hp(n, e, t) {
        if (n = N(n), n && (t || e === f))
          return n.slice(0, Bu(n) + 1);
        if (!n || !(e = Rn(e)))
          return n;
        var r = zn(n), i = Wu(r, zn(e)) + 1;
        return me(r, 0, i).join("");
      }
      function qp(n, e, t) {
        if (n = N(n), n && (t || e === f))
          return n.replace(Dr, "");
        if (!n || !(e = Rn(e)))
          return n;
        var r = zn(n), i = Pu(r, zn(e));
        return me(r, i).join("");
      }
      function Kp(n, e) {
        var t = Or, r = St;
        if (V(e)) {
          var i = "separator" in e ? e.separator : i;
          t = "length" in e ? T(e.length) : t, r = "omission" in e ? Rn(e.omission) : r;
        }
        n = N(n);
        var o = n.length;
        if (Be(n)) {
          var a = zn(n);
          o = a.length;
        }
        if (t >= o)
          return n;
        var l = t - Fe(r);
        if (l < 1)
          return r;
        var h = a ? me(a, 0, l).join("") : n.slice(0, l);
        if (i === f)
          return h + r;
        if (a && (l += h.length - l), Bi(i)) {
          if (n.slice(l).search(i)) {
            var _, v = h;
            for (i.global || (i = kr(i.source, N(nu.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(v); )
              var w = _.index;
            h = h.slice(0, w === f ? l : w);
          }
        } else if (n.indexOf(Rn(i), l) != l) {
          var x = h.lastIndexOf(i);
          x > -1 && (h = h.slice(0, x));
        }
        return h + r;
      }
      function zp(n) {
        return n = N(n), n && ta.test(n) ? n.replace(Vi, xl) : n;
      }
      var Yp = Ke(function(n, e, t) {
        return n + (t ? " " : "") + e.toUpperCase();
      }), Ni = Sf("toUpperCase");
      function bo(n, e, t) {
        return n = N(n), e = t ? f : e, e === f ? dl(n) ? Ol(n) : fl(n) : n.match(e) || [];
      }
      var So = P(function(n, e) {
        try {
          return Sn(n, f, e);
        } catch (t) {
          return Di(t) ? t : new R(t);
        }
      }), Zp = fe(function(n, e) {
        return Wn(e, function(t) {
          t = kn(t), ie(n, t, Pi(n[t], n));
        }), n;
      });
      function Xp(n) {
        var e = n == null ? 0 : n.length, t = b();
        return n = e ? Z(n, function(r) {
          if (typeof r[1] != "function")
            throw new Dn(L);
          return [t(r[0]), r[1]];
        }) : [], P(function(r) {
          for (var i = -1; ++i < e; ) {
            var o = n[i];
            if (Sn(o[0], this, r))
              return Sn(o[1], this, r);
          }
        });
      }
      function Jp(n) {
        return xc(Fn(n, gn));
      }
      function Gi(n) {
        return function() {
          return n;
        };
      }
      function Qp(n, e) {
        return n == null || n !== n ? e : n;
      }
      var Vp = Rf(), kp = Rf(!0);
      function yn(n) {
        return n;
      }
      function $i(n) {
        return tf(typeof n == "function" ? n : Fn(n, gn));
      }
      function jp(n) {
        return uf(Fn(n, gn));
      }
      function nd(n, e) {
        return ff(n, Fn(e, gn));
      }
      var ed = P(function(n, e) {
        return function(t) {
          return ct(t, n, e);
        };
      }), td = P(function(n, e) {
        return function(t) {
          return ct(n, t, e);
        };
      });
      function Hi(n, e, t) {
        var r = un(e), i = jt(e, r);
        t == null && !(V(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = jt(e, un(e)));
        var o = !(V(t) && "chain" in t) || !!t.chain, a = ae(n);
        return Wn(i, function(l) {
          var h = e[l];
          n[l] = h, a && (n.prototype[l] = function() {
            var _ = this.__chain__;
            if (o || _) {
              var v = n(this.__wrapped__), w = v.__actions__ = mn(this.__actions__);
              return w.push({ func: h, args: arguments, thisArg: n }), v.__chain__ = _, v;
            }
            return h.apply(n, ge([this.value()], arguments));
          });
        }), n;
      }
      function rd() {
        return fn._ === this && (fn._ = Cl), this;
      }
      function qi() {
      }
      function id(n) {
        return n = T(n), P(function(e) {
          return of(e, n);
        });
      }
      var ud = xi(Z), fd = xi(Ru), od = xi(zr);
      function Io(n) {
        return Ri(n) ? Yr(kn(n)) : Fc(n);
      }
      function ad(n) {
        return function(e) {
          return n == null ? f : Ee(n, e);
        };
      }
      var ld = Cf(), cd = Cf(!0);
      function Ki() {
        return [];
      }
      function zi() {
        return !1;
      }
      function sd() {
        return {};
      }
      function hd() {
        return "";
      }
      function gd() {
        return !0;
      }
      function pd(n, e) {
        if (n = T(n), n < 1 || n > se)
          return [];
        var t = Jn, r = sn(n, Jn);
        e = b(e), n -= Jn;
        for (var i = Jr(r, e); ++t < n; )
          e(t);
        return i;
      }
      function dd(n) {
        return C(n) ? Z(n, kn) : En(n) ? [n] : mn(zf(N(n)));
      }
      function _d(n) {
        var e = ++Rl;
        return N(n) + e;
      }
      var vd = ur(function(n, e) {
        return n + e;
      }, 0), wd = Ai("ceil"), md = ur(function(n, e) {
        return n / e;
      }, 1), xd = Ai("floor");
      function Ad(n) {
        return n && n.length ? kt(n, yn, fi) : f;
      }
      function yd(n, e) {
        return n && n.length ? kt(n, b(e, 2), fi) : f;
      }
      function Od(n) {
        return Tu(n, yn);
      }
      function bd(n, e) {
        return Tu(n, b(e, 2));
      }
      function Sd(n) {
        return n && n.length ? kt(n, yn, ci) : f;
      }
      function Id(n, e) {
        return n && n.length ? kt(n, b(e, 2), ci) : f;
      }
      var Rd = ur(function(n, e) {
        return n * e;
      }, 1), Ed = Ai("round"), Cd = ur(function(n, e) {
        return n - e;
      }, 0);
      function Td(n) {
        return n && n.length ? Xr(n, yn) : 0;
      }
      function Ld(n, e) {
        return n && n.length ? Xr(n, b(e, 2)) : 0;
      }
      return u.after = jh, u.ary = to, u.assign = Gg, u.assignIn = vo, u.assignInWith = wr, u.assignWith = $g, u.at = Hg, u.before = ro, u.bind = Pi, u.bindAll = Zp, u.bindKey = io, u.castArray = sg, u.chain = jf, u.chunk = xs, u.compact = As, u.concat = ys, u.cond = Xp, u.conforms = Jp, u.constant = Gi, u.countBy = Th, u.create = qg, u.curry = uo, u.curryRight = fo, u.debounce = oo, u.defaults = Kg, u.defaultsDeep = zg, u.defer = ng, u.delay = eg, u.difference = Os, u.differenceBy = bs, u.differenceWith = Ss, u.drop = Is, u.dropRight = Rs, u.dropRightWhile = Es, u.dropWhile = Cs, u.fill = Ts, u.filter = Mh, u.flatMap = Dh, u.flatMapDeep = Bh, u.flatMapDepth = Fh, u.flatten = Jf, u.flattenDeep = Ls, u.flattenDepth = Ms, u.flip = tg, u.flow = Vp, u.flowRight = kp, u.fromPairs = Ps, u.functions = kg, u.functionsIn = jg, u.groupBy = Uh, u.initial = Ds, u.intersection = Bs, u.intersectionBy = Fs, u.intersectionWith = Us, u.invert = ep, u.invertBy = tp, u.invokeMap = Gh, u.iteratee = $i, u.keyBy = $h, u.keys = un, u.keysIn = An, u.map = hr, u.mapKeys = ip, u.mapValues = up, u.matches = jp, u.matchesProperty = nd, u.memoize = pr, u.merge = fp, u.mergeWith = wo, u.method = ed, u.methodOf = td, u.mixin = Hi, u.negate = dr, u.nthArg = id, u.omit = op, u.omitBy = ap, u.once = rg, u.orderBy = Hh, u.over = ud, u.overArgs = ig, u.overEvery = fd, u.overSome = od, u.partial = Wi, u.partialRight = ao, u.partition = qh, u.pick = lp, u.pickBy = mo, u.property = Io, u.propertyOf = ad, u.pull = Hs, u.pullAll = Vf, u.pullAllBy = qs, u.pullAllWith = Ks, u.pullAt = zs, u.range = ld, u.rangeRight = cd, u.rearg = ug, u.reject = Yh, u.remove = Ys, u.rest = fg, u.reverse = Li, u.sampleSize = Xh, u.set = sp, u.setWith = hp, u.shuffle = Jh, u.slice = Zs, u.sortBy = kh, u.sortedUniq = nh, u.sortedUniqBy = eh, u.split = Dp, u.spread = og, u.tail = th, u.take = rh, u.takeRight = ih, u.takeRightWhile = uh, u.takeWhile = fh, u.tap = Ah, u.throttle = ag, u.thru = sr, u.toArray = go, u.toPairs = xo, u.toPairsIn = Ao, u.toPath = dd, u.toPlainObject = _o, u.transform = gp, u.unary = lg, u.union = oh, u.unionBy = ah, u.unionWith = lh, u.uniq = ch, u.uniqBy = sh, u.uniqWith = hh, u.unset = pp, u.unzip = Mi, u.unzipWith = kf, u.update = dp, u.updateWith = _p, u.values = Ze, u.valuesIn = vp, u.without = gh, u.words = bo, u.wrap = cg, u.xor = ph, u.xorBy = dh, u.xorWith = _h, u.zip = vh, u.zipObject = wh, u.zipObjectDeep = mh, u.zipWith = xh, u.entries = xo, u.entriesIn = Ao, u.extend = vo, u.extendWith = wr, Hi(u, u), u.add = vd, u.attempt = So, u.camelCase = Ap, u.capitalize = yo, u.ceil = wd, u.clamp = wp, u.clone = hg, u.cloneDeep = pg, u.cloneDeepWith = dg, u.cloneWith = gg, u.conformsTo = _g, u.deburr = Oo, u.defaultTo = Qp, u.divide = md, u.endsWith = yp, u.eq = Zn, u.escape = Op, u.escapeRegExp = bp, u.every = Lh, u.find = Ph, u.findIndex = Zf, u.findKey = Yg, u.findLast = Wh, u.findLastIndex = Xf, u.findLastKey = Zg, u.floor = xd, u.forEach = no, u.forEachRight = eo, u.forIn = Xg, u.forInRight = Jg, u.forOwn = Qg, u.forOwnRight = Vg, u.get = Fi, u.gt = vg, u.gte = wg, u.has = np, u.hasIn = Ui, u.head = Qf, u.identity = yn, u.includes = Nh, u.indexOf = Ws, u.inRange = mp, u.invoke = rp, u.isArguments = Le, u.isArray = C, u.isArrayBuffer = mg, u.isArrayLike = xn, u.isArrayLikeObject = j, u.isBoolean = xg, u.isBuffer = xe, u.isDate = Ag, u.isElement = yg, u.isEmpty = Og, u.isEqual = bg, u.isEqualWith = Sg, u.isError = Di, u.isFinite = Ig, u.isFunction = ae, u.isInteger = lo, u.isLength = _r, u.isMap = co, u.isMatch = Rg, u.isMatchWith = Eg, u.isNaN = Cg, u.isNative = Tg, u.isNil = Mg, u.isNull = Lg, u.isNumber = so, u.isObject = V, u.isObjectLike = k, u.isPlainObject = _t, u.isRegExp = Bi, u.isSafeInteger = Pg, u.isSet = ho, u.isString = vr, u.isSymbol = En, u.isTypedArray = Ye, u.isUndefined = Wg, u.isWeakMap = Dg, u.isWeakSet = Bg, u.join = Ns, u.kebabCase = Sp, u.last = Nn, u.lastIndexOf = Gs, u.lowerCase = Ip, u.lowerFirst = Rp, u.lt = Fg, u.lte = Ug, u.max = Ad, u.maxBy = yd, u.mean = Od, u.meanBy = bd, u.min = Sd, u.minBy = Id, u.stubArray = Ki, u.stubFalse = zi, u.stubObject = sd, u.stubString = hd, u.stubTrue = gd, u.multiply = Rd, u.nth = $s, u.noConflict = rd, u.noop = qi, u.now = gr, u.pad = Ep, u.padEnd = Cp, u.padStart = Tp, u.parseInt = Lp, u.random = xp, u.reduce = Kh, u.reduceRight = zh, u.repeat = Mp, u.replace = Pp, u.result = cp, u.round = Ed, u.runInContext = c, u.sample = Zh, u.size = Qh, u.snakeCase = Wp, u.some = Vh, u.sortedIndex = Xs, u.sortedIndexBy = Js, u.sortedIndexOf = Qs, u.sortedLastIndex = Vs, u.sortedLastIndexBy = ks, u.sortedLastIndexOf = js, u.startCase = Bp, u.startsWith = Fp, u.subtract = Cd, u.sum = Td, u.sumBy = Ld, u.template = Up, u.times = pd, u.toFinite = le, u.toInteger = T, u.toLength = po, u.toLower = Np, u.toNumber = Gn, u.toSafeInteger = Ng, u.toString = N, u.toUpper = Gp, u.trim = $p, u.trimEnd = Hp, u.trimStart = qp, u.truncate = Kp, u.unescape = zp, u.uniqueId = _d, u.upperCase = Yp, u.upperFirst = Ni, u.each = no, u.eachRight = eo, u.first = Qf, Hi(u, function() {
        var n = {};
        return Qn(u, function(e, t) {
          G.call(u.prototype, t) || (n[t] = e);
        }), n;
      }(), { chain: !1 }), u.VERSION = m, Wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        u[n].placeholder = u;
      }), Wn(["drop", "take"], function(n, e) {
        B.prototype[n] = function(t) {
          t = t === f ? 1 : rn(T(t), 0);
          var r = this.__filtered__ && !e ? new B(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = sn(t, r.__takeCount__) : r.__views__.push({
            size: sn(t, Jn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, B.prototype[n + "Right"] = function(t) {
          return this.reverse()[n](t).reverse();
        };
      }), Wn(["filter", "map", "takeWhile"], function(n, e) {
        var t = e + 1, r = t == Mn || t == Ho;
        B.prototype[n] = function(i) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: b(i, 3),
            type: t
          }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), Wn(["head", "last"], function(n, e) {
        var t = "take" + (e ? "Right" : "");
        B.prototype[n] = function() {
          return this[t](1).value()[0];
        };
      }), Wn(["initial", "tail"], function(n, e) {
        var t = "drop" + (e ? "" : "Right");
        B.prototype[n] = function() {
          return this.__filtered__ ? new B(this) : this[t](1);
        };
      }), B.prototype.compact = function() {
        return this.filter(yn);
      }, B.prototype.find = function(n) {
        return this.filter(n).head();
      }, B.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, B.prototype.invokeMap = P(function(n, e) {
        return typeof n == "function" ? new B(this) : this.map(function(t) {
          return ct(t, n, e);
        });
      }), B.prototype.reject = function(n) {
        return this.filter(dr(b(n)));
      }, B.prototype.slice = function(n, e) {
        n = T(n);
        var t = this;
        return t.__filtered__ && (n > 0 || e < 0) ? new B(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== f && (e = T(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
      }, B.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, B.prototype.toArray = function() {
        return this.take(Jn);
      }, Qn(B.prototype, function(n, e) {
        var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = u[r ? "take" + (e == "last" ? "Right" : "") : e], o = r || /^find/.test(e);
        i && (u.prototype[e] = function() {
          var a = this.__wrapped__, l = r ? [1] : arguments, h = a instanceof B, _ = l[0], v = h || C(a), w = function(D) {
            var F = i.apply(u, ge([D], l));
            return r && x ? F[0] : F;
          };
          v && t && typeof _ == "function" && _.length != 1 && (h = v = !1);
          var x = this.__chain__, y = !!this.__actions__.length, S = o && !x, M = h && !y;
          if (!o && v) {
            a = M ? a : new B(this);
            var I = n.apply(a, l);
            return I.__actions__.push({ func: sr, args: [w], thisArg: f }), new Bn(I, x);
          }
          return S && M ? n.apply(this, l) : (I = this.thru(w), S ? r ? I.value()[0] : I.value() : I);
        });
      }), Wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Ft[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        u.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return e.apply(C(o) ? o : [], i);
          }
          return this[t](function(a) {
            return e.apply(C(a) ? a : [], i);
          });
        };
      }), Qn(B.prototype, function(n, e) {
        var t = u[e];
        if (t) {
          var r = t.name + "";
          G.call($e, r) || ($e[r] = []), $e[r].push({ name: e, func: t });
        }
      }), $e[ir(f, W).name] = [{
        name: "wrapper",
        func: f
      }], B.prototype.clone = zl, B.prototype.reverse = Yl, B.prototype.value = Zl, u.prototype.at = yh, u.prototype.chain = Oh, u.prototype.commit = bh, u.prototype.next = Sh, u.prototype.plant = Rh, u.prototype.reverse = Eh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Ch, u.prototype.first = u.prototype.head, rt && (u.prototype[rt] = Ih), u;
    }, Ue = bl();
    Oe ? ((Oe.exports = Ue)._ = Ue, $r._ = Ue) : fn._ = Ue;
  }).call(vt);
})(Ar, Ar.exports);
var wt = Ar.exports;
const S_ = (s) => {
  const {
    editorRef: p,
    monacoRef: f,
    immediately: m,
    value: O,
    language: E,
    errorMessage: L,
    startLineNumber: X,
    startColumn: $,
    endLineNumber: an,
    endColumn: On,
    ...gn
  } = s, en = $n(), Ln = $n(null), Hn = Pd(() => E && wt.toLower(E), [E]), jn = (W, J) => {
    var bn;
    const ln = J == null ? void 0 : J.getModel();
    (bn = J == null ? void 0 : J.getAction("editor.action.formatDocument")) == null || bn.run().then(() => {
      const vn = an && an - 1, cn = {
        startLineNumber: X,
        startColumn: $,
        endLineNumber: vn,
        endColumn: On
      }, wn = {
        message: L,
        severity: W == null ? void 0 : W.MarkerSeverity.Error,
        startLineNumber: cn.startLineNumber,
        startColumn: cn.startColumn,
        endLineNumber: cn.endLineNumber,
        endColumn: cn.endColumn
      };
      wt.isNumber(X) && wt.isNumber($) && wt.isNumber(an) && wt.isNumber(On) ? (W == null || W.editor.setModelMarkers(ln, L, [wn]), J.deltaDecorations([], [{
        range: cn,
        options: {
          isWholeLine: !0,
          className: "utopian-markers-bg"
        }
      }]), X && setTimeout(() => {
        J.revealLineInCenter(X);
      }, 20)) : J.trigger("", "closeMarkersNavigation", "");
    }).finally(() => {
      J == null || J.updateOptions({
        readOnly: !0,
        renderValidationDecorations: "on"
      });
    });
  }, q = (W, J) => {
    en.current = W, Ln.current = J, p && (p.current = W), f && (f.current = J), m && jn(J, W);
  };
  return At(() => {
    Ln.current && en.current && jn(Ln.current, en.current);
  }, [O, X, $, an, On]), /* @__PURE__ */ yt($o, {
    ...gn,
    value: O,
    language: Hn,
    onMount: q
  });
}, I_ = (s) => /* @__PURE__ */ yt($o, {
  ...s
});
I_.ValidateCodeEditor = S_;
const T_ = {
  config: async (s) => {
    Xi.config(s || {
      paths: {
        vs: "./monaco/vs"
      },
      "vs/nls": {
        availableLanguages: {
          "*": "zh-cn"
        }
      }
    });
  },
  init() {
    Xi.init();
  }
};
export {
  I_ as CodeEditor,
  T_ as bootstrap
};
