import { H as N, I as P } from "../helps/hooks-9158977a.js";
import { useRef as a, useMemo as f, useLayoutEffect as w, useState as g, useEffect as H, memo as k, Children as b, Fragment as W, cloneElement as M } from "react";
import { createPortal as O } from "react-dom";
import { a as l, j as E } from "../helps/jsx-runtime-c94ad48e.js";
const [j, L, q] = N(), I = ({
  children: e
}) => {
  const t = a(!1), n = f(() => document.createElement("div"), []), r = () => {
    n.parentElement || document.body.appendChild(n), t.current = !0;
  }, c = () => {
    var u;
    (u = n.parentElement) == null || u.removeChild(n), t.current = !1;
  };
  return w(() => (r(), c), []), O(e, n);
}, S = (e, t, n) => {
  const [r, c] = g(!1), [u, d] = g({ x: 0, y: 0 }), { handleContext: x } = L();
  H(() => {
    var o;
    return (o = e == null ? void 0 : e.current) == null || o.addEventListener("contextmenu", m, !0), window.addEventListener("contextmenu", h, !0), window.addEventListener("click", h), () => {
      var i;
      (i = e == null ? void 0 : e.current) == null || i.removeEventListener("contextmenu", m, !0), window.removeEventListener("contextmenu", h, !0), window.removeEventListener("click", h);
    };
  }, [e == null ? void 0 : e.current]);
  const m = (o) => {
    o.preventDefault(), o.stopPropagation(), n && (x == null || x(o), c(!0), setTimeout(() => {
      const { clientX: i, clientY: s } = o, { clientWidth: v, clientHeight: p } = t == null ? void 0 : t.current, y = i + v > window.innerWidth, C = s + p > window.innerHeight;
      y && d({ x: i - v, y: s }), C && d({ x: i, y: s - p }), !C && !y && d({ x: i, y: s });
    }, 0));
  }, h = () => {
    c(!1);
  };
  return { visible: r, x: u.x, y: u.y };
}, $ = (e) => b.toArray(e).length === 1, z = (e, t, n) => {
  if (t) {
    const c = b.only(e);
    return M(c, {
      ref: n
    });
  }
  return e(n);
}, A = ({
  data: e
}) => {
  const {
    handleSelect: t
  } = L();
  return /* @__PURE__ */ E("div", {
    className: "flex text-text-5 px-[12px] py-[4px] rounded-[4px] cursor-pointer " + (e.danger ? "hover:bg-error-background hover:text-error" : "hover:bg-fill-4"),
    onClick: () => t == null ? void 0 : t(e),
    children: [e.icon && /* @__PURE__ */ l(P, {
      type: e.icon,
      className: "mr-[8px]"
    }), /* @__PURE__ */ l("span", {
      children: e.label
    })]
  });
}, D = ({
  className: e,
  style: t,
  isNode: n,
  data: r,
  children: c,
  shouldOpen: u = !0
}) => {
  const d = a(null), x = a(null), {
    visible: m,
    x: h,
    y: o
  } = S(d, x, u), i = z(c, n, d);
  return /* @__PURE__ */ E(W, {
    children: [/* @__PURE__ */ l(I, {
      children: m && r.length ? /* @__PURE__ */ l("ul", {
        className: "fixed z-50 w-[200px] text-13 box-border p-[4px] bg-text-1 radius-8 " + e,
        ref: x,
        style: {
          ...t,
          top: `${o + 5}px`,
          left: `${h + 10}px`,
          boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.1)"
        },
        children: r.map((s) => /* @__PURE__ */ l("li", {
          children: s.type === "divider" ? /* @__PURE__ */ l("div", {
            className: "w-full h-[1px] bg-line-1 my-[4px]"
          }) : /* @__PURE__ */ l(A, {
            data: s
          })
        }, s.key))
      }) : null
    }), i]
  });
}, F = (e) => {
  var r;
  const t = f(() => typeof e.children != "function", [e.children]), n = f(() => t ? $(e.children) : !0, [t, e.children]);
  return w(() => {
    n || console.error("Contextmenu 只允许有一个子节点");
  }, [n]), n ? /* @__PURE__ */ l(j, {
    value: {
      handleContext: e.handleContext,
      handleSelect: e.handleSelect
    },
    children: /* @__PURE__ */ l(D, {
      ...e,
      isNode: t
    })
  }) : t ? e.children : (r = e.children) == null ? void 0 : r.call(e, null);
}, B = k(F);
export {
  B as Contextmenu
};
