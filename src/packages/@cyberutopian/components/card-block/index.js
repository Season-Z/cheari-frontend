import { j as a, a as l } from "../helps/jsx-runtime-c94ad48e.js";
import "react";
const i = (e) => /* @__PURE__ */ a("div", {
  className: "flex justify-between items-start " + e.className,
  children: [/* @__PURE__ */ a("div", {
    children: [e.title && /* @__PURE__ */ l("span", {
      className: "title-18 font-medium text-text-8",
      style: {
        textShadow: "0px 4px 10px rgba(78,89,105,0.06)"
      },
      children: e.title
    }), e.subTitle ? /* @__PURE__ */ l("span", {
      className: "ml-[18px] text-text-5 text-16",
      children: e.subTitle
    }) : null]
  }), e.extra ? /* @__PURE__ */ l("div", {
    children: e.extra
  }) : null]
}), s = ({
  className: e,
  children: x,
  ...t
}) => /* @__PURE__ */ a("div", {
  className: `
        px-[24px]
        py-[20px]
        bg-[#fff] 
        radius-16 
        flex
        flex-col
        ${e || ""}
        `,
  children: [t.title || t.subTitle || t.extra ? /* @__PURE__ */ l(i, {
    title: t.title,
    subTitle: t.subTitle,
    extra: t.extra,
    className: "mb-[16px] items-center"
  }) : null, /* @__PURE__ */ l("div", {
    className: "flex-1 flex flex-col",
    children: x
  })]
}), c = (e) => /* @__PURE__ */ l(s, {
  ...e
});
c.TitleBar = i;
export {
  c as CardBlock
};
