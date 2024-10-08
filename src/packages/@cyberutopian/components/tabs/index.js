import { I as g, a as N } from "../helps/hooks-9158977a.js";
import { memo as D, useMemo as b, useRef as y, useEffect as E, createElement as C } from "react";
import { j as u, a as n } from "../helps/jsx-runtime-c94ad48e.js";
import "react-dom";
const I = (m) => {
  const {
    icon: c,
    itemRef: s,
    index: i,
    itemsLength: p,
    fileName: a,
    filePath: d,
    isActive: l,
    activeKey: r,
    hideDivider: o,
    onCloseTab: f,
    onChange: h,
    ...e
  } = m, t = b(() => {
    if (l)
      return i === 0 ? "left" : i === p - 1 ? "right" : "middle";
  }, [i, p, l]), x = b(() => t ? t !== "left" : !1, [t]), k = (v) => {
    v.preventDefault(), v.stopPropagation(), f(r, {
      fileName: a,
      filePath: d,
      key: r
    });
  }, w = () => {
    h(r, {
      ...e,
      icon: c,
      fileName: a,
      filePath: d,
      activeKey: r,
      key: r
    });
  };
  return /* @__PURE__ */ u("div", {
    id: e.key,
    ref: s,
    "data-key": r,
    "data-type": e.type,
    className: "flex items-center shrink-0 grow-0",
    children: [/* @__PURE__ */ u("div", {
      className: "relative cursor-pointer pt-[2px] pb-[6px] pl-[5px] pr-[4px] box-border " + (l ? "bg-fill-1 rounded-t-[8px]" : ""),
      "data-pane": r,
      "data-type": e.type,
      onClick: w,
      children: [/* @__PURE__ */ u("div", {
        className: "flex items-center pl-[7px] pr-[8px] py-[1px] radius-8 " + (l ? "" : "hover:bg-[#D8DBDF]"),
        children: [/* @__PURE__ */ n(g, {
          type: c || "icon-wenjian-xuanzhong",
          className: "text-fill-7 w-[13px] h-[13px]"
        }), /* @__PURE__ */ n("span", {
          className: "ml-[8px] mr-[12px] " + (l ? "text-text-8" : "text-text-4"),
          children: a
        }), /* @__PURE__ */ n(g, {
          type: "icon-danchuangguanbi_close",
          className: "text-[#A8ADBD] w-[11px] h-[11px] p-[2px] box-content rounded-[4px] hover:bg-fill-6",
          onClick: k
        })]
      }), l && /* @__PURE__ */ n("div", {
        className: "absolute w-[8px] h-[8px] right-[-8px] bottom-[0px] bg-fill-1",
        children: /* @__PURE__ */ n("div", {
          className: "w-full h-full rounded-bl-[16px] bg-[#ECEDEF]"
        })
      }), x && /* @__PURE__ */ n("div", {
        className: "absolute w-[8px] h-[8px] left-[-8px] bottom-[0px] bg-fill-1",
        children: /* @__PURE__ */ n("div", {
          className: "w-full h-full rounded-br-[16px] bg-[#ECEDEF]"
        })
      })]
    }), o ? /* @__PURE__ */ n("div", {
      className: "w-[1px] h-[20px]"
    }) : /* @__PURE__ */ n("div", {
      className: "w-[1px] h-[20px] mb-[3px] bg-line-3"
    })]
  }, i);
}, R = D(I), F = (m) => {
  const {
    className: c,
    items: s,
    activeKey: i,
    tabsRef: p,
    onCloseTab: a,
    onChange: d,
    ...l
  } = m, r = y({}), o = y(null), {
    wrapperRef: f
  } = N(), h = b(() => {
    const e = [];
    for (let t = 0; t < s.length; t++)
      if (s[t].key === i) {
        t - 1 >= 0 && e.push(t - 1), e.push(t);
        break;
      }
    return e;
  }, [s, i]);
  return E(() => {
    if (!i)
      return;
    const e = r.current[i];
    e && (o.current && clearTimeout(o.current), o.current = setTimeout(() => {
      e.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }, 500));
  }, [i, s.length]), /* @__PURE__ */ n("div", {
    ref: p,
    children: /* @__PURE__ */ n("div", {
      ...l,
      ref: f,
      className: "utopian-editor-tab flex shrink-0 grow-0 relative pt-[4px] text-13 bg-[#ECEDEF] overflow-x-scroll overflow-y-hidden " + c,
      children: s.map((e, t) => /* @__PURE__ */ C(R, {
        ...e,
        key: e.key,
        index: t,
        itemRef: (x) => r.current[e.key] = x,
        itemsLength: s.length,
        activeKey: e.key,
        isActive: e.key === i,
        hideDivider: h.includes(t),
        onCloseTab: a,
        onChange: d
      }))
    })
  });
};
export {
  F as Tabs
};
