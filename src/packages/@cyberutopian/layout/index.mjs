import de, { useState as j, useRef as rr, useEffect as G, useMemo as m, memo as Z, cloneElement as ar } from "react";
import "react-dom";
import { Breadcrumb as nr, Spin as sr } from "antd";
var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function or() {
  this.__data__ = [], this.size = 0;
}
var cr = or;
function lr(e, t) {
  return e === t || e !== e && t !== t;
}
var St = lr, ur = St;
function fr(e, t) {
  for (var r = e.length; r--; )
    if (ur(e[r][0], t))
      return r;
  return -1;
}
var ee = fr, vr = ee, pr = Array.prototype, dr = pr.splice;
function hr(e) {
  var t = this.__data__, r = vr(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : dr.call(t, r, 1), --this.size, !0;
}
var gr = hr, yr = ee;
function _r(e) {
  var t = this.__data__, r = yr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var br = _r, $r = ee;
function mr(e) {
  return $r(this.__data__, e) > -1;
}
var wr = mr, xr = ee;
function Sr(e, t) {
  var r = this.__data__, a = xr(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Tr = Sr, Or = cr, Ar = gr, jr = br, Cr = wr, Pr = Tr;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = Or;
E.prototype.delete = Ar;
E.prototype.get = jr;
E.prototype.has = Cr;
E.prototype.set = Pr;
var te = E, Er = te;
function Nr() {
  this.__data__ = new Er(), this.size = 0;
}
var Lr = Nr;
function Ir(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Mr = Ir;
function Dr(e) {
  return this.__data__.get(e);
}
var Rr = Dr;
function Fr(e) {
  return this.__data__.has(e);
}
var Br = Fr, Hr = typeof U == "object" && U && U.Object === Object && U, Tt = Hr, Gr = Tt, zr = typeof self == "object" && self && self.Object === Object && self, Ur = Gr || zr || Function("return this")(), S = Ur, Kr = S, qr = Kr.Symbol, Te = qr, Le = Te, Ot = Object.prototype, kr = Ot.hasOwnProperty, Vr = Ot.toString, B = Le ? Le.toStringTag : void 0;
function Wr(e) {
  var t = kr.call(e, B), r = e[B];
  try {
    e[B] = void 0;
    var a = !0;
  } catch {
  }
  var s = Vr.call(e);
  return a && (t ? e[B] = r : delete e[B]), s;
}
var Jr = Wr, Xr = Object.prototype, Yr = Xr.toString;
function Qr(e) {
  return Yr.call(e);
}
var Zr = Qr, Ie = Te, ea = Jr, ta = Zr, ra = "[object Null]", aa = "[object Undefined]", Me = Ie ? Ie.toStringTag : void 0;
function na(e) {
  return e == null ? e === void 0 ? aa : ra : Me && Me in Object(e) ? ea(e) : ta(e);
}
var re = na;
function sa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var At = sa, ia = re, oa = At, ca = "[object AsyncFunction]", la = "[object Function]", ua = "[object GeneratorFunction]", fa = "[object Proxy]";
function va(e) {
  if (!oa(e))
    return !1;
  var t = ia(e);
  return t == la || t == ua || t == ca || t == fa;
}
var jt = va, pa = S, da = pa["__core-js_shared__"], ha = da, le = ha, De = function() {
  var e = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ga(e) {
  return !!De && De in e;
}
var ya = ga, _a = Function.prototype, ba = _a.toString;
function $a(e) {
  if (e != null) {
    try {
      return ba.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ct = $a, ma = jt, wa = ya, xa = At, Sa = Ct, Ta = /[\\^$.*+?()[\]{}|]/g, Oa = /^\[object .+?Constructor\]$/, Aa = Function.prototype, ja = Object.prototype, Ca = Aa.toString, Pa = ja.hasOwnProperty, Ea = RegExp(
  "^" + Ca.call(Pa).replace(Ta, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Na(e) {
  if (!xa(e) || wa(e))
    return !1;
  var t = ma(e) ? Ea : Oa;
  return t.test(Sa(e));
}
var La = Na;
function Ia(e, t) {
  return e == null ? void 0 : e[t];
}
var Ma = Ia, Da = La, Ra = Ma;
function Fa(e, t) {
  var r = Ra(e, t);
  return Da(r) ? r : void 0;
}
var N = Fa, Ba = N, Ha = S, Ga = Ba(Ha, "Map"), Oe = Ga, za = N, Ua = za(Object, "create"), ae = Ua, Re = ae;
function Ka() {
  this.__data__ = Re ? Re(null) : {}, this.size = 0;
}
var qa = Ka;
function ka(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Va = ka, Wa = ae, Ja = "__lodash_hash_undefined__", Xa = Object.prototype, Ya = Xa.hasOwnProperty;
function Qa(e) {
  var t = this.__data__;
  if (Wa) {
    var r = t[e];
    return r === Ja ? void 0 : r;
  }
  return Ya.call(t, e) ? t[e] : void 0;
}
var Za = Qa, en = ae, tn = Object.prototype, rn = tn.hasOwnProperty;
function an(e) {
  var t = this.__data__;
  return en ? t[e] !== void 0 : rn.call(t, e);
}
var nn = an, sn = ae, on = "__lodash_hash_undefined__";
function cn(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = sn && t === void 0 ? on : t, this;
}
var ln = cn, un = qa, fn = Va, vn = Za, pn = nn, dn = ln;
function L(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
L.prototype.clear = un;
L.prototype.delete = fn;
L.prototype.get = vn;
L.prototype.has = pn;
L.prototype.set = dn;
var hn = L, Fe = hn, gn = te, yn = Oe;
function _n() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (yn || gn)(),
    string: new Fe()
  };
}
var bn = _n;
function $n(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var mn = $n, wn = mn;
function xn(e, t) {
  var r = e.__data__;
  return wn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ne = xn, Sn = ne;
function Tn(e) {
  var t = Sn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var On = Tn, An = ne;
function jn(e) {
  return An(this, e).get(e);
}
var Cn = jn, Pn = ne;
function En(e) {
  return Pn(this, e).has(e);
}
var Nn = En, Ln = ne;
function In(e, t) {
  var r = Ln(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Mn = In, Dn = bn, Rn = On, Fn = Cn, Bn = Nn, Hn = Mn;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = Dn;
I.prototype.delete = Rn;
I.prototype.get = Fn;
I.prototype.has = Bn;
I.prototype.set = Hn;
var Pt = I, Gn = te, zn = Oe, Un = Pt, Kn = 200;
function qn(e, t) {
  var r = this.__data__;
  if (r instanceof Gn) {
    var a = r.__data__;
    if (!zn || a.length < Kn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Un(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var kn = qn, Vn = te, Wn = Lr, Jn = Mr, Xn = Rr, Yn = Br, Qn = kn;
function M(e) {
  var t = this.__data__ = new Vn(e);
  this.size = t.size;
}
M.prototype.clear = Wn;
M.prototype.delete = Jn;
M.prototype.get = Xn;
M.prototype.has = Yn;
M.prototype.set = Qn;
var Zn = M, es = "__lodash_hash_undefined__";
function ts(e) {
  return this.__data__.set(e, es), this;
}
var rs = ts;
function as(e) {
  return this.__data__.has(e);
}
var ns = as, ss = Pt, is = rs, os = ns;
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ss(); ++t < r; )
    this.add(e[t]);
}
W.prototype.add = W.prototype.push = is;
W.prototype.has = os;
var cs = W;
function ls(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var us = ls;
function fs(e, t) {
  return e.has(t);
}
var vs = fs, ps = cs, ds = us, hs = vs, gs = 1, ys = 2;
function _s(e, t, r, a, s, n) {
  var i = r & gs, o = e.length, c = t.length;
  if (o != c && !(i && c > o))
    return !1;
  var l = n.get(e), f = n.get(t);
  if (l && f)
    return l == t && f == e;
  var v = -1, u = !0, p = r & ys ? new ps() : void 0;
  for (n.set(e, t), n.set(t, e); ++v < o; ) {
    var d = e[v], g = t[v];
    if (a)
      var y = i ? a(g, d, v, t, e, n) : a(d, g, v, e, t, n);
    if (y !== void 0) {
      if (y)
        continue;
      u = !1;
      break;
    }
    if (p) {
      if (!ds(t, function(b, w) {
        if (!hs(p, w) && (d === b || s(d, b, r, a, n)))
          return p.push(w);
      })) {
        u = !1;
        break;
      }
    } else if (!(d === g || s(d, g, r, a, n))) {
      u = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), u;
}
var Et = _s, bs = S, $s = bs.Uint8Array, ms = $s;
function ws(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, s) {
    r[++t] = [s, a];
  }), r;
}
var xs = ws;
function Ss(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var Ts = Ss, Be = Te, He = ms, Os = St, As = Et, js = xs, Cs = Ts, Ps = 1, Es = 2, Ns = "[object Boolean]", Ls = "[object Date]", Is = "[object Error]", Ms = "[object Map]", Ds = "[object Number]", Rs = "[object RegExp]", Fs = "[object Set]", Bs = "[object String]", Hs = "[object Symbol]", Gs = "[object ArrayBuffer]", zs = "[object DataView]", Ge = Be ? Be.prototype : void 0, ue = Ge ? Ge.valueOf : void 0;
function Us(e, t, r, a, s, n, i) {
  switch (r) {
    case zs:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Gs:
      return !(e.byteLength != t.byteLength || !n(new He(e), new He(t)));
    case Ns:
    case Ls:
    case Ds:
      return Os(+e, +t);
    case Is:
      return e.name == t.name && e.message == t.message;
    case Rs:
    case Bs:
      return e == t + "";
    case Ms:
      var o = js;
    case Fs:
      var c = a & Ps;
      if (o || (o = Cs), e.size != t.size && !c)
        return !1;
      var l = i.get(e);
      if (l)
        return l == t;
      a |= Es, i.set(e, t);
      var f = As(o(e), o(t), a, s, n, i);
      return i.delete(e), f;
    case Hs:
      if (ue)
        return ue.call(e) == ue.call(t);
  }
  return !1;
}
var Ks = Us;
function qs(e, t) {
  for (var r = -1, a = t.length, s = e.length; ++r < a; )
    e[s + r] = t[r];
  return e;
}
var ks = qs, Vs = Array.isArray, Ae = Vs, Ws = ks, Js = Ae;
function Xs(e, t, r) {
  var a = t(e);
  return Js(e) ? a : Ws(a, r(e));
}
var Ys = Xs;
function Qs(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, s = 0, n = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (n[s++] = i);
  }
  return n;
}
var Zs = Qs;
function ei() {
  return [];
}
var ti = ei, ri = Zs, ai = ti, ni = Object.prototype, si = ni.propertyIsEnumerable, ze = Object.getOwnPropertySymbols, ii = ze ? function(e) {
  return e == null ? [] : (e = Object(e), ri(ze(e), function(t) {
    return si.call(e, t);
  }));
} : ai, oi = ii;
function ci(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var li = ci;
function ui(e) {
  return e != null && typeof e == "object";
}
var se = ui, fi = re, vi = se, pi = "[object Arguments]";
function di(e) {
  return vi(e) && fi(e) == pi;
}
var hi = di, Ue = hi, gi = se, Nt = Object.prototype, yi = Nt.hasOwnProperty, _i = Nt.propertyIsEnumerable, bi = Ue(function() {
  return arguments;
}()) ? Ue : function(e) {
  return gi(e) && yi.call(e, "callee") && !_i.call(e, "callee");
}, $i = bi, J = { exports: {} };
function mi() {
  return !1;
}
var wi = mi;
J.exports;
(function(e, t) {
  var r = S, a = wi, s = t && !t.nodeType && t, n = s && !0 && e && !e.nodeType && e, i = n && n.exports === s, o = i ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, l = c || a;
  e.exports = l;
})(J, J.exports);
var Lt = J.exports, xi = 9007199254740991, Si = /^(?:0|[1-9]\d*)$/;
function Ti(e, t) {
  var r = typeof e;
  return t = t ?? xi, !!t && (r == "number" || r != "symbol" && Si.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Oi = Ti, Ai = 9007199254740991;
function ji(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ai;
}
var It = ji, Ci = re, Pi = It, Ei = se, Ni = "[object Arguments]", Li = "[object Array]", Ii = "[object Boolean]", Mi = "[object Date]", Di = "[object Error]", Ri = "[object Function]", Fi = "[object Map]", Bi = "[object Number]", Hi = "[object Object]", Gi = "[object RegExp]", zi = "[object Set]", Ui = "[object String]", Ki = "[object WeakMap]", qi = "[object ArrayBuffer]", ki = "[object DataView]", Vi = "[object Float32Array]", Wi = "[object Float64Array]", Ji = "[object Int8Array]", Xi = "[object Int16Array]", Yi = "[object Int32Array]", Qi = "[object Uint8Array]", Zi = "[object Uint8ClampedArray]", eo = "[object Uint16Array]", to = "[object Uint32Array]", _ = {};
_[Vi] = _[Wi] = _[Ji] = _[Xi] = _[Yi] = _[Qi] = _[Zi] = _[eo] = _[to] = !0;
_[Ni] = _[Li] = _[qi] = _[Ii] = _[ki] = _[Mi] = _[Di] = _[Ri] = _[Fi] = _[Bi] = _[Hi] = _[Gi] = _[zi] = _[Ui] = _[Ki] = !1;
function ro(e) {
  return Ei(e) && Pi(e.length) && !!_[Ci(e)];
}
var ao = ro;
function no(e) {
  return function(t) {
    return e(t);
  };
}
var so = no, X = { exports: {} };
X.exports;
(function(e, t) {
  var r = Tt, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, n = s && s.exports === a, i = n && r.process, o = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(X, X.exports);
var io = X.exports, oo = ao, co = so, Ke = io, qe = Ke && Ke.isTypedArray, lo = qe ? co(qe) : oo, Mt = lo, uo = li, fo = $i, vo = Ae, po = Lt, ho = Oi, go = Mt, yo = Object.prototype, _o = yo.hasOwnProperty;
function bo(e, t) {
  var r = vo(e), a = !r && fo(e), s = !r && !a && po(e), n = !r && !a && !s && go(e), i = r || a || s || n, o = i ? uo(e.length, String) : [], c = o.length;
  for (var l in e)
    (t || _o.call(e, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    ho(l, c))) && o.push(l);
  return o;
}
var $o = bo, mo = Object.prototype;
function wo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || mo;
  return e === r;
}
var xo = wo;
function So(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var To = So, Oo = To, Ao = Oo(Object.keys, Object), jo = Ao, Co = xo, Po = jo, Eo = Object.prototype, No = Eo.hasOwnProperty;
function Lo(e) {
  if (!Co(e))
    return Po(e);
  var t = [];
  for (var r in Object(e))
    No.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Io = Lo, Mo = jt, Do = It;
function Ro(e) {
  return e != null && Do(e.length) && !Mo(e);
}
var Fo = Ro, Bo = $o, Ho = Io, Go = Fo;
function zo(e) {
  return Go(e) ? Bo(e) : Ho(e);
}
var Uo = zo, Ko = Ys, qo = oi, ko = Uo;
function Vo(e) {
  return Ko(e, ko, qo);
}
var Wo = Vo, ke = Wo, Jo = 1, Xo = Object.prototype, Yo = Xo.hasOwnProperty;
function Qo(e, t, r, a, s, n) {
  var i = r & Jo, o = ke(e), c = o.length, l = ke(t), f = l.length;
  if (c != f && !i)
    return !1;
  for (var v = c; v--; ) {
    var u = o[v];
    if (!(i ? u in t : Yo.call(t, u)))
      return !1;
  }
  var p = n.get(e), d = n.get(t);
  if (p && d)
    return p == t && d == e;
  var g = !0;
  n.set(e, t), n.set(t, e);
  for (var y = i; ++v < c; ) {
    u = o[v];
    var b = e[u], w = t[u];
    if (a)
      var O = i ? a(w, b, u, t, e, n) : a(b, w, u, e, t, n);
    if (!(O === void 0 ? b === w || s(b, w, r, a, n) : O)) {
      g = !1;
      break;
    }
    y || (y = u == "constructor");
  }
  if (g && !y) {
    var x = e.constructor, $ = t.constructor;
    x != $ && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return n.delete(e), n.delete(t), g;
}
var Zo = Qo, ec = N, tc = S, rc = ec(tc, "DataView"), ac = rc, nc = N, sc = S, ic = nc(sc, "Promise"), oc = ic, cc = N, lc = S, uc = cc(lc, "Set"), fc = uc, vc = N, pc = S, dc = vc(pc, "WeakMap"), hc = dc, he = ac, ge = Oe, ye = oc, _e = fc, be = hc, Dt = re, D = Ct, Ve = "[object Map]", gc = "[object Object]", We = "[object Promise]", Je = "[object Set]", Xe = "[object WeakMap]", Ye = "[object DataView]", yc = D(he), _c = D(ge), bc = D(ye), $c = D(_e), mc = D(be), A = Dt;
(he && A(new he(new ArrayBuffer(1))) != Ye || ge && A(new ge()) != Ve || ye && A(ye.resolve()) != We || _e && A(new _e()) != Je || be && A(new be()) != Xe) && (A = function(e) {
  var t = Dt(e), r = t == gc ? e.constructor : void 0, a = r ? D(r) : "";
  if (a)
    switch (a) {
      case yc:
        return Ye;
      case _c:
        return Ve;
      case bc:
        return We;
      case $c:
        return Je;
      case mc:
        return Xe;
    }
  return t;
});
var wc = A, fe = Zn, xc = Et, Sc = Ks, Tc = Zo, Qe = wc, Ze = Ae, et = Lt, Oc = Mt, Ac = 1, tt = "[object Arguments]", rt = "[object Array]", K = "[object Object]", jc = Object.prototype, at = jc.hasOwnProperty;
function Cc(e, t, r, a, s, n) {
  var i = Ze(e), o = Ze(t), c = i ? rt : Qe(e), l = o ? rt : Qe(t);
  c = c == tt ? K : c, l = l == tt ? K : l;
  var f = c == K, v = l == K, u = c == l;
  if (u && et(e)) {
    if (!et(t))
      return !1;
    i = !0, f = !1;
  }
  if (u && !f)
    return n || (n = new fe()), i || Oc(e) ? xc(e, t, r, a, s, n) : Sc(e, t, c, r, a, s, n);
  if (!(r & Ac)) {
    var p = f && at.call(e, "__wrapped__"), d = v && at.call(t, "__wrapped__");
    if (p || d) {
      var g = p ? e.value() : e, y = d ? t.value() : t;
      return n || (n = new fe()), s(g, y, r, a, n);
    }
  }
  return u ? (n || (n = new fe()), Tc(e, t, r, a, s, n)) : !1;
}
var Pc = Cc, Ec = Pc, nt = se;
function Rt(e, t, r, a, s) {
  return e === t ? !0 : e == null || t == null || !nt(e) && !nt(t) ? e !== e && t !== t : Ec(e, t, r, a, Rt, s);
}
var Nc = Rt, Lc = Nc;
function Ic(e, t) {
  return Lc(e, t);
}
var Mc = Ic;
const Dc = /* @__PURE__ */ ir(Mc);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var st;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(st || (st = {}));
function it(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ft(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Rc(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
var ot;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ot || (ot = {}));
function ie(e, t, r) {
  return r === void 0 && (r = "/"), Fc(e, t, r, !1);
}
function Fc(e, t, r, a) {
  let s = typeof t == "string" ? Rc(t) : t, n = Yc(s.pathname || "/", r);
  if (n == null)
    return null;
  let i = Bt(e);
  Bc(i);
  let o = null;
  for (let c = 0; o == null && c < i.length; ++c) {
    let l = Xc(n);
    o = Wc(i[c], l, a);
  }
  return o;
}
function Bt(e, t, r, a) {
  t === void 0 && (t = []), r === void 0 && (r = []), a === void 0 && (a = "");
  let s = (n, i, o) => {
    let c = {
      relativePath: o === void 0 ? n.path || "" : o,
      caseSensitive: n.caseSensitive === !0,
      childrenIndex: i,
      route: n
    };
    c.relativePath.startsWith("/") && (it(c.relativePath.startsWith(a), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + a + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(a.length));
    let l = k([a, c.relativePath]), f = r.concat(c);
    n.children && n.children.length > 0 && (it(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      n.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + l + '".')
    ), Bt(n.children, t, f, l)), !(n.path == null && !n.index) && t.push({
      path: l,
      score: kc(l, n.index),
      routesMeta: f
    });
  };
  return e.forEach((n, i) => {
    var o;
    if (n.path === "" || !((o = n.path) != null && o.includes("?")))
      s(n, i);
    else
      for (let c of Ht(n.path))
        s(n, i, c);
  }), t;
}
function Ht(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [r, ...a] = t, s = r.endsWith("?"), n = r.replace(/\?$/, "");
  if (a.length === 0)
    return s ? [n, ""] : [n];
  let i = Ht(a.join("/")), o = [];
  return o.push(...i.map((c) => c === "" ? n : [n, c].join("/"))), s && o.push(...i), o.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function Bc(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : Vc(t.routesMeta.map((a) => a.childrenIndex), r.routesMeta.map((a) => a.childrenIndex)));
}
const Hc = /^:[\w-]+$/, Gc = 3, zc = 2, Uc = 1, Kc = 10, qc = -2, ct = (e) => e === "*";
function kc(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(ct) && (a += qc), t && (a += zc), r.filter((s) => !ct(s)).reduce((s, n) => s + (Hc.test(n) ? Gc : n === "" ? Uc : Kc), a);
}
function Vc(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, s) => a === t[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Wc(e, t, r) {
  r === void 0 && (r = !1);
  let {
    routesMeta: a
  } = e, s = {}, n = "/", i = [];
  for (let o = 0; o < a.length; ++o) {
    let c = a[o], l = o === a.length - 1, f = n === "/" ? t : t.slice(n.length) || "/", v = lt({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: l
    }, f), u = c.route;
    if (!v && l && r && !a[a.length - 1].route.index && (v = lt({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: !1
    }, f)), !v)
      return null;
    Object.assign(s, v.params), i.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: k([n, v.pathname]),
      pathnameBase: Qc(k([n, v.pathnameBase])),
      route: u
    }), v.pathnameBase !== "/" && (n = k([n, v.pathnameBase]));
  }
  return i;
}
function lt(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, a] = Jc(e.path, e.caseSensitive, e.end), s = t.match(r);
  if (!s)
    return null;
  let n = s[0], i = n.replace(/(.)\/+$/, "$1"), o = s.slice(1);
  return {
    params: a.reduce((l, f, v) => {
      let {
        paramName: u,
        isOptional: p
      } = f;
      if (u === "*") {
        let g = o[v] || "";
        i = n.slice(0, n.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const d = o[v];
      return p && !d ? l[u] = void 0 : l[u] = (d || "").replace(/%2F/g, "/"), l;
    }, {}),
    pathname: n,
    pathnameBase: i,
    pattern: e
  };
}
function Jc(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Ft(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let a = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, o, c) => (a.push({
    paramName: o,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (a.push({
    paramName: "*"
  }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), a];
}
function Xc(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ft(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Yc(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
const k = (e) => e.join("/").replace(/\/\/+/g, "/"), Qc = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Gt = ["post", "put", "patch", "delete"];
new Set(Gt);
const Zc = ["get", ...Gt];
new Set(Zc);
var zt = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = de, tl = Symbol.for("react.element"), rl = Symbol.for("react.fragment"), al = Object.prototype.hasOwnProperty, nl = el.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sl = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ut(e, t, r) {
  var a, s = {}, n = null, i = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (a in t)
    al.call(t, a) && !sl.hasOwnProperty(a) && (s[a] = t[a]);
  if (e && e.defaultProps)
    for (a in t = e.defaultProps, t)
      s[a] === void 0 && (s[a] = t[a]);
  return { $$typeof: tl, type: e, key: n, ref: i, props: s, _owner: nl.current };
}
oe.Fragment = rl;
oe.jsx = Ut;
oe.jsxs = Ut;
zt.exports = oe;
var je = zt.exports;
const il = je.Fragment, h = je.jsx, V = je.jsxs, ce = (e) => {
  let t = window.localStorage.getItem("user");
  if (t)
    try {
      t = JSON.parse(t);
    } catch (r) {
      console.log("用户信息解析失败：", r);
    }
  return t ? `${e}` : e;
}, ol = (e, t) => {
  const r = t || ce("routerStack");
  window.localStorage.setItem(r, JSON.stringify(e));
}, Kt = (e) => {
  const t = e || ce("routerStack");
  let r = window.localStorage.getItem(t);
  if (r)
    try {
      r = JSON.parse(r);
    } catch {
      console.log("路由堆栈解析失败", r);
    }
  return r || [];
}, cl = (e, t) => {
  const r = t || ce("routerMap");
  window.localStorage.setItem(r, JSON.stringify(e));
}, qt = (e) => {
  const t = e || ce("routerMap");
  let r = window.localStorage.getItem(t);
  if (r)
    try {
      r = JSON.parse(r);
    } catch {
      console.log("路由对象解析失败", r);
    }
  return r;
}, ve = (e, t, r) => {
  var l, f, v;
  const a = ie(e, r), s = a ? (l = a[a.length - 1]) == null ? void 0 : l.route : void 0;
  if (!s)
    return !1;
  const n = qt(), i = t === s.path, o = (n == null ? void 0 : n[s == null ? void 0 : s.path]) || "", c = (f = i ? void 0 : o.params ? r + (o == null ? void 0 : o.params) : o.pathname) == null ? void 0 : f.replace("undefined", "");
  return {
    title: /* @__PURE__ */ h("div", {
      className: "flex justify-start items-center",
      children: (v = s == null ? void 0 : s.options) == null ? void 0 : v.title
    }),
    href: c,
    value: s.path,
    className: i ? "active" : ""
  };
}, ll = (e, t) => {
  const r = e.length - 1, a = t.length;
  if (e[r] !== t[0])
    return !1;
  let s = r, n = 0;
  const i = [];
  let o = 0;
  for (; s > 0 || n < a; ) {
    const c = e[s], l = t[n];
    if (o++, o >= 100)
      break;
    if (c === l) {
      if (i.push(n), s--, n++, s < 0 || n > a)
        break;
    } else
      n++;
  }
  return i;
}, ul = (e, t) => {
  let r = !1;
  for (let a = e.length - 1; a >= 0; a--)
    if (e[a] !== t[a]) {
      if (e[a] > t[a]) {
        r = !1;
        break;
      }
      if (e[a] < t[a]) {
        r = !0;
        break;
      }
    }
  return r;
}, fl = (e, t, r, a) => {
  var v;
  if (!t[r])
    return [ve(a, r, r)];
  const s = [];
  for (const u of e)
    if (u) {
      const p = ie(a, u), d = p ? (v = p[p.length - 1]) == null ? void 0 : v.route.path : void 0;
      d && s.push(d);
    }
  const n = s.slice().reverse(), i = e.slice().reverse(), o = Object.values(t[r] || {}) || [];
  let c = [], l = [], f = [];
  for (const u of o) {
    const p = u.length, d = s.slice(-p);
    if (Dc(d, u)) {
      c = e.slice(-p).map((b) => ve(a, r, b)).filter(Boolean);
      break;
    }
    const g = ll(u, n);
    Array.isArray(g) && g.length === p && !ul(l, g) && (l = g, f = g.map((y) => i[y]).reverse());
  }
  return c.length || (c = f.map((u) => ve(a, r, u)).filter(Boolean)), c;
}, vl = (e) => {
  const t = {}, r = (a, s, n, i, o) => {
    var c, l;
    for (const f of a) {
      const v = n ? n.concat(f.route) : [f.route];
      if (f.children) {
        let u;
        if (i) {
          const p = (c = s[f.route]) != null && c[i] ? `${o}-${i}` : i;
          s[f.route] = {
            ...s[f.route] || {},
            [p]: v,
            [o]: v
          };
        } else
          s[f.route] = {
            [f.route]: v
          }, u = f.route;
        r(f.children, s, v, f.route, o || u);
      } else if (o && (s[f.route] = {
        ...s[f.route] || {},
        [o]: v
      }), i) {
        const u = (l = s[f.route]) != null && l[i] ? `${o}-${i}` : i;
        s[f.route] = {
          ...s[f.route] || {},
          [u]: v
        };
      }
    }
  };
  return r(e, t), t;
};
var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pl = typeof q == "object" && q && q.Object === Object && q, kt = pl, dl = kt, hl = typeof self == "object" && self && self.Object === Object && self, gl = dl || hl || Function("return this")(), T = gl, yl = T, _l = yl.Symbol, Ce = _l, ut = Ce, Vt = Object.prototype, bl = Vt.hasOwnProperty, $l = Vt.toString, H = ut ? ut.toStringTag : void 0;
function ml(e) {
  var t = bl.call(e, H), r = e[H];
  try {
    e[H] = void 0;
    var a = !0;
  } catch {
  }
  var s = $l.call(e);
  return a && (t ? e[H] = r : delete e[H]), s;
}
var wl = ml, xl = Object.prototype, Sl = xl.toString;
function Tl(e) {
  return Sl.call(e);
}
var Ol = Tl, ft = Ce, Al = wl, jl = Ol, Cl = "[object Null]", Pl = "[object Undefined]", vt = ft ? ft.toStringTag : void 0;
function El(e) {
  return e == null ? e === void 0 ? Pl : Cl : vt && vt in Object(e) ? Al(e) : jl(e);
}
var Pe = El;
function Nl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wt = Nl, Ll = Pe, Il = Wt, Ml = "[object AsyncFunction]", Dl = "[object Function]", Rl = "[object GeneratorFunction]", Fl = "[object Proxy]";
function Bl(e) {
  if (!Il(e))
    return !1;
  var t = Ll(e);
  return t == Dl || t == Rl || t == Ml || t == Fl;
}
var Hl = Bl, Gl = T, zl = Gl["__core-js_shared__"], Ul = zl, pe = Ul, pt = function() {
  var e = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kl(e) {
  return !!pt && pt in e;
}
var ql = Kl, kl = Function.prototype, Vl = kl.toString;
function Wl(e) {
  if (e != null) {
    try {
      return Vl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jt = Wl, Jl = Hl, Xl = ql, Yl = Wt, Ql = Jt, Zl = /[\\^$.*+?()[\]{}|]/g, eu = /^\[object .+?Constructor\]$/, tu = Function.prototype, ru = Object.prototype, au = tu.toString, nu = ru.hasOwnProperty, su = RegExp(
  "^" + au.call(nu).replace(Zl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function iu(e) {
  if (!Yl(e) || Xl(e))
    return !1;
  var t = Jl(e) ? su : eu;
  return t.test(Ql(e));
}
var ou = iu;
function cu(e, t) {
  return e == null ? void 0 : e[t];
}
var lu = cu, uu = ou, fu = lu;
function vu(e, t) {
  var r = fu(e, t);
  return uu(r) ? r : void 0;
}
var R = vu, pu = R, du = T, hu = pu(du, "Map"), gu = hu, yu = R;
yu(Object, "create");
var _u = T;
_u.Uint8Array;
var dt = Ce, ht = dt ? dt.prototype : void 0;
ht && ht.valueOf;
function bu(e) {
  return e != null && typeof e == "object";
}
var Xt = bu, $u = Pe, mu = Xt, wu = "[object Arguments]";
function xu(e) {
  return mu(e) && $u(e) == wu;
}
var Su = xu, gt = Su, Tu = Xt, Yt = Object.prototype, Ou = Yt.hasOwnProperty, Au = Yt.propertyIsEnumerable;
gt(function() {
  return arguments;
}());
var Y = { exports: {} };
function ju() {
  return !1;
}
var Cu = ju;
Y.exports;
(function(e, t) {
  var r = T, a = Cu, s = t && !t.nodeType && t, n = s && !0 && e && !e.nodeType && e, i = n && n.exports === s, o = i ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, l = c || a;
  e.exports = l;
})(Y, Y.exports);
Y.exports;
var Q = { exports: {} };
Q.exports;
(function(e, t) {
  var r = kt, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, n = s && s.exports === a, i = n && r.process, o = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Q, Q.exports);
var Pu = Q.exports, yt = Pu;
yt && yt.isTypedArray;
var Eu = R, Nu = T, Lu = Eu(Nu, "DataView"), Iu = Lu, Mu = R, Du = T, Ru = Mu(Du, "Promise"), Fu = Ru, Bu = R, Hu = T, Gu = Bu(Hu, "Set"), zu = Gu, Uu = R, Ku = T, qu = Uu(Ku, "WeakMap"), ku = qu, $e = Iu, me = gu, we = Fu, xe = zu, Se = ku, Qt = Pe, F = Jt, _t = "[object Map]", Vu = "[object Object]", bt = "[object Promise]", $t = "[object Set]", mt = "[object WeakMap]", wt = "[object DataView]", Wu = F($e), Ju = F(me), Xu = F(we), Yu = F(xe), Qu = F(Se), P = Qt;
($e && P(new $e(new ArrayBuffer(1))) != wt || me && P(new me()) != _t || we && P(we.resolve()) != bt || xe && P(new xe()) != $t || Se && P(new Se()) != mt) && (P = function(e) {
  var t = Qt(e), r = t == Vu ? e.constructor : void 0, a = r ? F(r) : "";
  if (a)
    switch (a) {
      case Wu:
        return wt;
      case Ju:
        return _t;
      case Xu:
        return bt;
      case Yu:
        return $t;
      case Qu:
        return mt;
    }
  return t;
});
const xt = () => {
  const [e, t] = j({ transitionStart: !1, transitionEnd: !0 }), r = rr(null);
  return G(() => {
    if (!r.current)
      return;
    const a = (n) => {
      n.stopPropagation(), n.preventDefault(), n.target === r.current && t({ transitionStart: !0, transitionEnd: !1 });
    }, s = (n) => {
      n.stopPropagation(), n.preventDefault(), n.target === r.current && t({ transitionStart: !1, transitionEnd: !0 });
    };
    return r.current.addEventListener("transitionstart", a), r.current.addEventListener("transitionend", s), () => {
      var n, i;
      (n = r.current) == null || n.addEventListener("transitionstart", a), (i = r.current) == null || i.removeEventListener("transitionend", s);
    };
  }, [r.current]), { wrapperDiv: r, transitionend: e.transitionEnd, transitionstart: e.transitionStart };
};
function Ee(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: a
  } = e, s = de.createContext(void 0);
  s.displayName = a;
  function n() {
    const i = de.useContext(s);
    if (!i && t)
      throw new Error(r);
    return i;
  }
  return [s.Provider, n, s];
}
const [hf, gf, yf] = Ee(), [Zu, Ne, _f] = Ee(), [ef, Zt, bf] = Ee(), $f = ({
  breadConfig: e
}) => {
  const t = window.location, {
    routes: r
  } = Ne(), [a, s] = j([]), n = m(() => vl(e), [e]), i = m(() => {
    var c;
    const o = ie(r, t);
    return o ? (c = o[o.length - 1]) == null ? void 0 : c.route.path : "";
  }, [t.pathname]);
  return G(() => {
    const o = qt() || {};
    i && (o[i] = {
      pathname: t.pathname,
      params: window.location.search
    }, cl(o));
    const c = Kt();
    if (c && (c.slice(-1)[0] !== i && c.push(i), c.length > 50 && c.shift(), ol(c), i)) {
      const l = fl(c, n, i, r);
      s(l);
    }
  }, [i, t == null ? void 0 : t.pathname]), /* @__PURE__ */ h(nr, {
    items: a
  });
}, tf = (e) => {
  const {
    className: t
  } = e;
  return /* @__PURE__ */ h("header", {
    ...e,
    className: "box-border h-[64px] pr-[12px] flex justify-end items-center " + t,
    children: e.children
  });
}, mf = Z(tf), rf = () => /* @__PURE__ */ h("div", {
  className: "flex justify-center items-center w-full h-full",
  children: /* @__PURE__ */ h(sr, {})
}), wf = ({
  children: e,
  loading: t,
  theme: r,
  routes: a,
  onExpand: s,
  ...n
}) => {
  const [i, o] = j(!0);
  return G(() => {
    s == null || s(i);
  }, [i]), t ? /* @__PURE__ */ h(rf, {}) : /* @__PURE__ */ h(Zu, {
    value: {
      isExpanded: i,
      setIsExpanded: o,
      theme: r,
      routes: a
    },
    children: /* @__PURE__ */ h("div", {
      ...n,
      className: "min-w-[1400px] " + n.className,
      children: e
    })
  });
}, af = ({ maxWidth: e, minWidth: t, isExpanded: r }) => {
  const { wrapperDiv: a, transitionend: s } = xt(), { wrapperDiv: n, transitionend: i } = xt(), [o, c] = j(!1), [l, f] = j(!1), v = m(() => r || o ? e : t, [o, r]);
  let u = !1;
  r && s && (u = !0);
  let p = !1;
  return o && i && (p = !0), { wrapperFatherDiv: a, wrapperChildDiv: n, navWidth: v, showNav: l ? !1 : p || u, setActiveNav: c, setForceHide: f };
}, er = (e, t) => {
  let r = {}, a = [], s = [], n = {};
  for (const [i, o] of e.entries()) {
    let c = {}, l = [], f = {};
    if (o.children && o.children.length) {
      const u = er(o.children, o.value);
      c = u.menuMap, l = u.menuList, f = u.menuOpenKeyMap, s = s.concat(u.flatMenuList);
    }
    o.children && o.children.length ? r = { ...r, ...c } : r = { ...r, ...c, [o.route]: { ...o, index: i } };
    const v = { ...o, children: l };
    s = s.concat(o), a = a.concat(v), n = {
      ...n,
      ...f,
      [o.value]: t ? [t, v.value].filter(Boolean) : []
    };
  }
  return { menuMap: r, menuList: a, menuOpenKeyMap: n, flatMenuList: s };
}, nf = (e, t, r = "") => t.filter(
  (a) => {
    var s, n, i, o;
    return ((s = a.options) == null ? void 0 : s.showNav) && (e && ((n = a.options) != null && n.role) ? (o = (i = a.options) == null ? void 0 : i.role) == null ? void 0 : o.includes(e) : !0);
  }
).map((a) => {
  var s, n, i, o;
  return {
    title: ((s = a.options) == null ? void 0 : s.title) || "",
    icon: (n = a.options) == null ? void 0 : n.icon,
    route: a.path ? r + a.path : void 0,
    value: (i = a.options) == null ? void 0 : i.title,
    children: a.children && nf(e, a.children) || [],
    role: (o = a.options) == null ? void 0 : o.role
  };
}) || [], sf = ({
  open: e,
  ...t
}) => /* @__PURE__ */ h("div", {
  ...t,
  className: "icon " + t.className,
  children: /* @__PURE__ */ h("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 1024 1024",
    focusable: "false",
    style: {
      fill: "currentColor"
    },
    children: e ? /* @__PURE__ */ h("path", {
      d: "M864 640L512 288 160 640l68.16 68.16L512 424.32l283.776 283.84L864 640z"
    }) : /* @__PURE__ */ h("path", {
      d: "M864 404.16l-352 352-352-352L228.16 336 512 619.84l283.776-283.84L864 404.16z"
    })
  })
}), tr = (e) => {
  var O, x;
  const {
    data: t,
    activeKey: r,
    setActiveKey: a,
    open: s,
    setOpen: n,
    fatherKeys: i
  } = e, {
    theme: o
  } = Ne(), {
    showNav: c,
    onItemClick: l
  } = Zt(), f = m(() => t.value === r, [t.value, r]), v = ((O = t.children) == null ? void 0 : O.length) || 0, u = m(() => !!v, [v]), p = m(() => v * (44 + 4), [v]), d = m(() => s.includes(t.value), [s, t.value]), g = m(() => i == null ? void 0 : i.concat(t.value), [i, t.value]), y = m(() => !!i.length, [i]), b = t.icon ? (
    // @ts-ignore
    ar(t.icon, {
      className: "title-16 " + (f ? "text-text-1" : "text-text-5") + " "
    })
  ) : /* @__PURE__ */ h("div", {
    className: t.icon ? "" : "pl-[12px]"
  });
  return /* @__PURE__ */ V(il, {
    children: [/* @__PURE__ */ V("div", {
      onClick: ($) => {
        if ($.stopPropagation(), u) {
          $.preventDefault();
          const C = d ? s.filter((z) => z !== t.value) : s.concat(t.value);
          n(C);
        } else
          a(t.value);
        return l == null ? void 0 : l($, t);
      },
      className: "w-full h-[44px] text-14 box-border px-[14px] py-[11px] mb-[4px] cursor-pointer flex justify-between items-center rounded-[10px] relative z-10 " + (f ? "text-[#fff]" : y ? "text-text-5 hover:bg-[#CEDFEF]" : "title-14 text-text-6 hover:bg-[#CEDFEF]"),
      children: [/* @__PURE__ */ V("div", {
        className: "flex justify-between items-center",
        children: [b, c && /* @__PURE__ */ h("div", {
          className: "ml-[12px] overflow-hidden",
          style: {
            width: c ? "auto" : 0
          },
          children: t.title
        })]
      }), u && c ? /* @__PURE__ */ h(sf, {
        className: "text-14 text-text-5 p-[4px]",
        open: d
      }) : null, f && !u ? /* @__PURE__ */ h("div", {
        className: "absolute left-0 w-full h-[44px] rounded-[10px] -z-10",
        style: {
          backgroundColor: o.color
        }
      }) : null]
    }), /* @__PURE__ */ h("div", {
      className: "transition-[height] duration-300 ease-in-out overflow-hidden",
      style: {
        height: d ? `${p}px` : "0px"
      },
      children: (x = t.children) == null ? void 0 : x.map(($) => /* @__PURE__ */ h(tr, {
        ...e,
        data: $,
        fatherKeys: g
      }, $.value))
    })]
  });
}, of = Z(tr), cf = ({
  pathname: e,
  navigationMenu: t
}) => {
  const {
    showNav: r
  } = Zt(), {
    menuList: a,
    menuMap: s,
    flatMenuList: n
  } = m(() => er(t), [t]), i = m(() => a.map((u) => u.value), [a]), o = m(() => Object.keys(s), [s]), [c, l] = j(), [f, v] = j(i);
  return G(() => {
    var u;
    if (e === "/")
      l((u = s["/"]) == null ? void 0 : u.value), v(i);
    else {
      let {
        item: p,
        menuChildren: d
      } = n.reduce((g, y) => (y.route === e && (g.item = y), y.route && y.route !== "/" && e.includes(y.route) && (g.menuChildren = !0), g), {
        item: void 0,
        menuChildren: !1
      });
      if (!p)
        if (d) {
          const y = Kt().reverse().find((b) => b !== "/" && o.includes(b));
          p = y ? s[y] : void 0;
        } else
          p = void 0;
      l(p && p.value);
    }
    v(r ? i : []);
  }, [e, r, o, i]), /* @__PURE__ */ h("ul", {
    className: "flex-1 overflow-y-scroll overflow-x-hidden",
    style: {
      paddingRight: r ? "8px" : ""
    },
    children: a.map((u) => /* @__PURE__ */ h("li", {
      children: /* @__PURE__ */ h(of, {
        ...{
          data: u,
          activeKey: c,
          setActiveKey: l,
          open: f,
          setOpen: v,
          showNav: r,
          fatherKeys: []
        }
      })
    }, u.value))
  });
}, lf = Z(cf), uf = ({
  open: e,
  ...t
}) => /* @__PURE__ */ h("div", {
  ...t,
  className: "icon " + t.className,
  children: /* @__PURE__ */ h("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 1024 1024",
    focusable: "false",
    style: {
      fill: "currentColor"
    },
    children: e ? /* @__PURE__ */ h("path", {
      d: "M408.512 423.488h518.144V346.496H408.512v76.992z m0 250.496h518.144V596.992H408.512v76.992zM926.72 96H97.664v76.992h828.992V96z m0 751.488H97.664v76.992h828.992v-76.992zM101.888 519.04l193.664 152.512c7.232 5.76 17.856 0.64 17.856-8.512V357.888a11.008 11.008 0 0 0-17.856-8.512L101.888 501.888a10.88 10.88 0 0 0 0 17.152z"
    }) : /* @__PURE__ */ h("path", {
      d: "M408.512 423.488h518.144V346.496H408.512v76.992z m0 250.496h518.144V596.992H408.512v76.992zM926.72 96H97.664v76.992h828.992V96z m0 751.488H97.664v76.992h828.992v-76.992zM309.248 519.04l-193.728 152.512a11.008 11.008 0 0 1-17.856-8.512V357.888c0-9.152 10.56-14.208 17.92-8.512l193.664 152.512a10.88 10.88 0 0 1 0 17.152z"
    })
  })
}), ff = ({
  maxWidth: e,
  minWidth: t,
  foldUpPath: r,
  navigationMenu: a,
  onItemClick: s,
  titleRender: n,
  ...i
}) => {
  const {
    isExpanded: o,
    setIsExpanded: c,
    routes: l,
    theme: f
  } = Ne(), {
    wrapperFatherDiv: v,
    wrapperChildDiv: u,
    setActiveNav: p,
    setForceHide: d,
    navWidth: g,
    showNav: y
  } = af({
    maxWidth: e,
    minWidth: t,
    isExpanded: o
  }), b = window.location.pathname;
  G(() => {
    var z;
    const $ = ie(l, window.location), C = $ ? (z = $[$.length - 1]) == null ? void 0 : z.route.path : "";
    C && r.includes(C) && (c(!1), d(!0), p(!1));
  }, [b]);
  const w = () => {
    o || (p(!0), d(!1));
  }, O = () => {
    o || (p(!1), d(!1));
  }, x = ($) => {
    $.stopPropagation(), c((C) => !C);
  };
  return /* @__PURE__ */ h(ef, {
    value: {
      showNav: y,
      onItemClick: s
    },
    children: /* @__PURE__ */ h("nav", {
      ...i,
      className: "relative h-full transition-[width] duration-300 ease-in-out z-50 " + i.className,
      style: {
        ...i.style,
        width: `${o ? e : t}px`
      },
      ref: v,
      onMouseEnter: w,
      onMouseLeave: O,
      children: /* @__PURE__ */ V("section", {
        className: "px-[8px] pr-[4px] box-border h-full overflow-x-hidden transition-[width] duration-300 ease-in-out bg-[#EEF5FB] z-70 flex flex-col",
        ref: u,
        style: {
          width: g,
          top: "0px",
          left: "0px",
          position: o ? "static" : "absolute",
          backgroundColor: f.bg
        },
        children: [n == null ? void 0 : n(y), /* @__PURE__ */ h(lf, {
          pathname: b,
          navigationMenu: a
        }), /* @__PURE__ */ h("div", {
          className: "text-right pb-[12px] mt-[8px] overflow-hidden",
          style: {
            width: e - 16
          },
          children: /* @__PURE__ */ h(uf, {
            className: "text-16 cursor-pointer p-[6px] rounded-[4px] bg-[#F7FBFF]",
            open: o,
            onClick: x
          })
        })]
      })
    })
  });
}, xf = Z(ff);
export {
  yf as CyberLayoutContext,
  hf as CyberLayoutProvider,
  wf as Layout,
  $f as LayoutBreadcrumb,
  mf as LayoutHeader,
  xf as LayoutNavigation,
  rf as Loading,
  nf as formatNavigationData,
  gf as useCyberLayoutContext
};
//# sourceMappingURL=index.mjs.map
