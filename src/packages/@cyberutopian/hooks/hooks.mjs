import oe, { useState as b, useRef as O, useEffect as w, useLayoutEffect as N, useCallback as Re, useMemo as De } from "react";
import { unstable_batchedUpdates as ie } from "react-dom";
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ze() {
  this.__data__ = [], this.size = 0;
}
var Qe = Ze;
function ke(e, t) {
  return e === t || e !== e && t !== t;
}
var Me = ke, et = Me;
function tt(e, t) {
  for (var r = e.length; r--; )
    if (et(e[r][0], t))
      return r;
  return -1;
}
var U = tt, rt = U, at = Array.prototype, nt = at.splice;
function st(e) {
  var t = this.__data__, r = rt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : nt.call(t, r, 1), --this.size, !0;
}
var ot = st, it = U;
function ct(e) {
  var t = this.__data__, r = it(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ut = ct, lt = U;
function ft(e) {
  return lt(this.__data__, e) > -1;
}
var pt = ft, vt = U;
function dt(e, t) {
  var r = this.__data__, n = vt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var gt = dt, ht = Qe, _t = ot, yt = ut, bt = pt, $t = gt;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = ht;
P.prototype.delete = _t;
P.prototype.get = yt;
P.prototype.has = bt;
P.prototype.set = $t;
var B = P, St = B;
function Tt() {
  this.__data__ = new St(), this.size = 0;
}
var wt = Tt;
function At(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var mt = At;
function Ct(e) {
  return this.__data__.get(e);
}
var Et = Ct;
function Ot(e) {
  return this.__data__.has(e);
}
var jt = Ot, Pt = typeof G == "object" && G && G.Object === Object && G, Ge = Pt, Lt = Ge, xt = typeof self == "object" && self && self.Object === Object && self, It = Lt || xt || Function("return this")(), A = It, Rt = A, Dt = Rt.Symbol, ae = Dt, ce = ae, He = Object.prototype, Mt = He.hasOwnProperty, Gt = He.toString, M = ce ? ce.toStringTag : void 0;
function Ht(e) {
  var t = Mt.call(e, M), r = e[M];
  try {
    e[M] = void 0;
    var n = !0;
  } catch {
  }
  var s = Gt.call(e);
  return n && (t ? e[M] = r : delete e[M]), s;
}
var qt = Ht, zt = Object.prototype, Ft = zt.toString;
function Nt(e) {
  return Ft.call(e);
}
var Ut = Nt, ue = ae, Bt = qt, Kt = Ut, Wt = "[object Null]", Vt = "[object Undefined]", le = ue ? ue.toStringTag : void 0;
function Jt(e) {
  return e == null ? e === void 0 ? Vt : Wt : le && le in Object(e) ? Bt(e) : Kt(e);
}
var K = Jt;
function Xt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qe = Xt, Yt = K, Zt = qe, Qt = "[object AsyncFunction]", kt = "[object Function]", er = "[object GeneratorFunction]", tr = "[object Proxy]";
function rr(e) {
  if (!Zt(e))
    return !1;
  var t = Yt(e);
  return t == kt || t == er || t == Qt || t == tr;
}
var ze = rr, ar = A, nr = ar["__core-js_shared__"], sr = nr, X = sr, fe = function() {
  var e = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function or(e) {
  return !!fe && fe in e;
}
var ir = or, cr = Function.prototype, ur = cr.toString;
function lr(e) {
  if (e != null) {
    try {
      return ur.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fe = lr, fr = ze, pr = ir, vr = qe, dr = Fe, gr = /[\\^$.*+?()[\]{}|]/g, hr = /^\[object .+?Constructor\]$/, _r = Function.prototype, yr = Object.prototype, br = _r.toString, $r = yr.hasOwnProperty, Sr = RegExp(
  "^" + br.call($r).replace(gr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tr(e) {
  if (!vr(e) || pr(e))
    return !1;
  var t = fr(e) ? Sr : hr;
  return t.test(dr(e));
}
var wr = Tr;
function Ar(e, t) {
  return e == null ? void 0 : e[t];
}
var mr = Ar, Cr = wr, Er = mr;
function Or(e, t) {
  var r = Er(e, t);
  return Cr(r) ? r : void 0;
}
var L = Or, jr = L, Pr = A, Lr = jr(Pr, "Map"), ne = Lr, xr = L, Ir = xr(Object, "create"), W = Ir, pe = W;
function Rr() {
  this.__data__ = pe ? pe(null) : {}, this.size = 0;
}
var Dr = Rr;
function Mr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gr = Mr, Hr = W, qr = "__lodash_hash_undefined__", zr = Object.prototype, Fr = zr.hasOwnProperty;
function Nr(e) {
  var t = this.__data__;
  if (Hr) {
    var r = t[e];
    return r === qr ? void 0 : r;
  }
  return Fr.call(t, e) ? t[e] : void 0;
}
var Ur = Nr, Br = W, Kr = Object.prototype, Wr = Kr.hasOwnProperty;
function Vr(e) {
  var t = this.__data__;
  return Br ? t[e] !== void 0 : Wr.call(t, e);
}
var Jr = Vr, Xr = W, Yr = "__lodash_hash_undefined__";
function Zr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Xr && t === void 0 ? Yr : t, this;
}
var Qr = Zr, kr = Dr, ea = Gr, ta = Ur, ra = Jr, aa = Qr;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
x.prototype.clear = kr;
x.prototype.delete = ea;
x.prototype.get = ta;
x.prototype.has = ra;
x.prototype.set = aa;
var na = x, ve = na, sa = B, oa = ne;
function ia() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (oa || sa)(),
    string: new ve()
  };
}
var ca = ia;
function ua(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var la = ua, fa = la;
function pa(e, t) {
  var r = e.__data__;
  return fa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var V = pa, va = V;
function da(e) {
  var t = va(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var ga = da, ha = V;
function _a(e) {
  return ha(this, e).get(e);
}
var ya = _a, ba = V;
function $a(e) {
  return ba(this, e).has(e);
}
var Sa = $a, Ta = V;
function wa(e, t) {
  var r = Ta(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Aa = wa, ma = ca, Ca = ga, Ea = ya, Oa = Sa, ja = Aa;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
I.prototype.clear = ma;
I.prototype.delete = Ca;
I.prototype.get = Ea;
I.prototype.has = Oa;
I.prototype.set = ja;
var Ne = I, Pa = B, La = ne, xa = Ne, Ia = 200;
function Ra(e, t) {
  var r = this.__data__;
  if (r instanceof Pa) {
    var n = r.__data__;
    if (!La || n.length < Ia - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new xa(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Da = Ra, Ma = B, Ga = wt, Ha = mt, qa = Et, za = jt, Fa = Da;
function R(e) {
  var t = this.__data__ = new Ma(e);
  this.size = t.size;
}
R.prototype.clear = Ga;
R.prototype.delete = Ha;
R.prototype.get = qa;
R.prototype.has = za;
R.prototype.set = Fa;
var Na = R, Ua = "__lodash_hash_undefined__";
function Ba(e) {
  return this.__data__.set(e, Ua), this;
}
var Ka = Ba;
function Wa(e) {
  return this.__data__.has(e);
}
var Va = Wa, Ja = Ne, Xa = Ka, Ya = Va;
function q(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Ja(); ++t < r; )
    this.add(e[t]);
}
q.prototype.add = q.prototype.push = Xa;
q.prototype.has = Ya;
var Za = q;
function Qa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var ka = Qa;
function en(e, t) {
  return e.has(t);
}
var tn = en, rn = Za, an = ka, nn = tn, sn = 1, on = 2;
function cn(e, t, r, n, s, a) {
  var o = r & sn, i = e.length, c = t.length;
  if (i != c && !(o && c > i))
    return !1;
  var u = a.get(e), v = a.get(t);
  if (u && v)
    return u == t && v == e;
  var g = -1, p = !0, h = r & on ? new rn() : void 0;
  for (a.set(e, t), a.set(t, e); ++g < i; ) {
    var d = e[g], l = t[g];
    if (n)
      var _ = o ? n(l, d, g, t, e, a) : n(d, l, g, e, t, a);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!an(t, function($, S) {
        if (!nn(h, S) && (d === $ || s(d, $, r, n, a)))
          return h.push(S);
      })) {
        p = !1;
        break;
      }
    } else if (!(d === l || s(d, l, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Ue = cn, un = A, ln = un.Uint8Array, fn = ln;
function pn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, s) {
    r[++t] = [s, n];
  }), r;
}
var vn = pn;
function dn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var gn = dn, de = ae, ge = fn, hn = Me, _n = Ue, yn = vn, bn = gn, $n = 1, Sn = 2, Tn = "[object Boolean]", wn = "[object Date]", An = "[object Error]", mn = "[object Map]", Cn = "[object Number]", En = "[object RegExp]", On = "[object Set]", jn = "[object String]", Pn = "[object Symbol]", Ln = "[object ArrayBuffer]", xn = "[object DataView]", he = de ? de.prototype : void 0, Y = he ? he.valueOf : void 0;
function In(e, t, r, n, s, a, o) {
  switch (r) {
    case xn:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ln:
      return !(e.byteLength != t.byteLength || !a(new ge(e), new ge(t)));
    case Tn:
    case wn:
    case Cn:
      return hn(+e, +t);
    case An:
      return e.name == t.name && e.message == t.message;
    case En:
    case jn:
      return e == t + "";
    case mn:
      var i = yn;
    case On:
      var c = n & $n;
      if (i || (i = bn), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Sn, o.set(e, t);
      var v = _n(i(e), i(t), n, s, a, o);
      return o.delete(e), v;
    case Pn:
      if (Y)
        return Y.call(e) == Y.call(t);
  }
  return !1;
}
var Rn = In;
function Dn(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
var Mn = Dn, Gn = Array.isArray, se = Gn, Hn = Mn, qn = se;
function zn(e, t, r) {
  var n = t(e);
  return qn(e) ? n : Hn(n, r(e));
}
var Fn = zn;
function Nn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[s++] = o);
  }
  return a;
}
var Un = Nn;
function Bn() {
  return [];
}
var Kn = Bn, Wn = Un, Vn = Kn, Jn = Object.prototype, Xn = Jn.propertyIsEnumerable, _e = Object.getOwnPropertySymbols, Yn = _e ? function(e) {
  return e == null ? [] : (e = Object(e), Wn(_e(e), function(t) {
    return Xn.call(e, t);
  }));
} : Vn, Zn = Yn;
function Qn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var kn = Qn;
function es(e) {
  return e != null && typeof e == "object";
}
var J = es, ts = K, rs = J, as = "[object Arguments]";
function ns(e) {
  return rs(e) && ts(e) == as;
}
var ss = ns, ye = ss, os = J, Be = Object.prototype, is = Be.hasOwnProperty, cs = Be.propertyIsEnumerable, us = ye(function() {
  return arguments;
}()) ? ye : function(e) {
  return os(e) && is.call(e, "callee") && !cs.call(e, "callee");
}, ls = us, z = { exports: {} };
function fs() {
  return !1;
}
var ps = fs;
z.exports;
(function(e, t) {
  var r = A, n = ps, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? r.Buffer : void 0, c = i ? i.isBuffer : void 0, u = c || n;
  e.exports = u;
})(z, z.exports);
var Ke = z.exports, vs = 9007199254740991, ds = /^(?:0|[1-9]\d*)$/;
function gs(e, t) {
  var r = typeof e;
  return t = t ?? vs, !!t && (r == "number" || r != "symbol" && ds.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var hs = gs, _s = 9007199254740991;
function ys(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _s;
}
var We = ys, bs = K, $s = We, Ss = J, Ts = "[object Arguments]", ws = "[object Array]", As = "[object Boolean]", ms = "[object Date]", Cs = "[object Error]", Es = "[object Function]", Os = "[object Map]", js = "[object Number]", Ps = "[object Object]", Ls = "[object RegExp]", xs = "[object Set]", Is = "[object String]", Rs = "[object WeakMap]", Ds = "[object ArrayBuffer]", Ms = "[object DataView]", Gs = "[object Float32Array]", Hs = "[object Float64Array]", qs = "[object Int8Array]", zs = "[object Int16Array]", Fs = "[object Int32Array]", Ns = "[object Uint8Array]", Us = "[object Uint8ClampedArray]", Bs = "[object Uint16Array]", Ks = "[object Uint32Array]", f = {};
f[Gs] = f[Hs] = f[qs] = f[zs] = f[Fs] = f[Ns] = f[Us] = f[Bs] = f[Ks] = !0;
f[Ts] = f[ws] = f[Ds] = f[As] = f[Ms] = f[ms] = f[Cs] = f[Es] = f[Os] = f[js] = f[Ps] = f[Ls] = f[xs] = f[Is] = f[Rs] = !1;
function Ws(e) {
  return Ss(e) && $s(e.length) && !!f[bs(e)];
}
var Vs = Ws;
function Js(e) {
  return function(t) {
    return e(t);
  };
}
var Xs = Js, F = { exports: {} };
F.exports;
(function(e, t) {
  var r = Ge, n = t && !t.nodeType && t, s = n && !0 && e && !e.nodeType && e, a = s && s.exports === n, o = a && r.process, i = function() {
    try {
      var c = s && s.require && s.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(F, F.exports);
var Ys = F.exports, Zs = Vs, Qs = Xs, be = Ys, $e = be && be.isTypedArray, ks = $e ? Qs($e) : Zs, Ve = ks, eo = kn, to = ls, ro = se, ao = Ke, no = hs, so = Ve, oo = Object.prototype, io = oo.hasOwnProperty;
function co(e, t) {
  var r = ro(e), n = !r && to(e), s = !r && !n && ao(e), a = !r && !n && !s && so(e), o = r || n || s || a, i = o ? eo(e.length, String) : [], c = i.length;
  for (var u in e)
    (t || io.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    no(u, c))) && i.push(u);
  return i;
}
var uo = co, lo = Object.prototype;
function fo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || lo;
  return e === r;
}
var po = fo;
function vo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var go = vo, ho = go, _o = ho(Object.keys, Object), yo = _o, bo = po, $o = yo, So = Object.prototype, To = So.hasOwnProperty;
function wo(e) {
  if (!bo(e))
    return $o(e);
  var t = [];
  for (var r in Object(e))
    To.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Ao = wo, mo = ze, Co = We;
function Eo(e) {
  return e != null && Co(e.length) && !mo(e);
}
var Oo = Eo, jo = uo, Po = Ao, Lo = Oo;
function xo(e) {
  return Lo(e) ? jo(e) : Po(e);
}
var Io = xo, Ro = Fn, Do = Zn, Mo = Io;
function Go(e) {
  return Ro(e, Mo, Do);
}
var Ho = Go, Se = Ho, qo = 1, zo = Object.prototype, Fo = zo.hasOwnProperty;
function No(e, t, r, n, s, a) {
  var o = r & qo, i = Se(e), c = i.length, u = Se(t), v = u.length;
  if (c != v && !o)
    return !1;
  for (var g = c; g--; ) {
    var p = i[g];
    if (!(o ? p in t : Fo.call(t, p)))
      return !1;
  }
  var h = a.get(e), d = a.get(t);
  if (h && d)
    return h == t && d == e;
  var l = !0;
  a.set(e, t), a.set(t, e);
  for (var _ = o; ++g < c; ) {
    p = i[g];
    var $ = e[p], S = t[p];
    if (n)
      var y = o ? n(S, $, p, t, e, a) : n($, S, p, e, t, a);
    if (!(y === void 0 ? $ === S || s($, S, r, n, a) : y)) {
      l = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (l && !_) {
    var m = e.constructor, j = t.constructor;
    m != j && "constructor" in e && "constructor" in t && !(typeof m == "function" && m instanceof m && typeof j == "function" && j instanceof j) && (l = !1);
  }
  return a.delete(e), a.delete(t), l;
}
var Uo = No, Bo = L, Ko = A, Wo = Bo(Ko, "DataView"), Vo = Wo, Jo = L, Xo = A, Yo = Jo(Xo, "Promise"), Zo = Yo, Qo = L, ko = A, ei = Qo(ko, "Set"), ti = ei, ri = L, ai = A, ni = ri(ai, "WeakMap"), si = ni, Q = Vo, k = ne, ee = Zo, te = ti, re = si, Je = K, D = Fe, Te = "[object Map]", oi = "[object Object]", we = "[object Promise]", Ae = "[object Set]", me = "[object WeakMap]", Ce = "[object DataView]", ii = D(Q), ci = D(k), ui = D(ee), li = D(te), fi = D(re), E = Je;
(Q && E(new Q(new ArrayBuffer(1))) != Ce || k && E(new k()) != Te || ee && E(ee.resolve()) != we || te && E(new te()) != Ae || re && E(new re()) != me) && (E = function(e) {
  var t = Je(e), r = t == oi ? e.constructor : void 0, n = r ? D(r) : "";
  if (n)
    switch (n) {
      case ii:
        return Ce;
      case ci:
        return Te;
      case ui:
        return we;
      case li:
        return Ae;
      case fi:
        return me;
    }
  return t;
});
var pi = E, Z = Na, vi = Ue, di = Rn, gi = Uo, Ee = pi, Oe = se, je = Ke, hi = Ve, _i = 1, Pe = "[object Arguments]", Le = "[object Array]", H = "[object Object]", yi = Object.prototype, xe = yi.hasOwnProperty;
function bi(e, t, r, n, s, a) {
  var o = Oe(e), i = Oe(t), c = o ? Le : Ee(e), u = i ? Le : Ee(t);
  c = c == Pe ? H : c, u = u == Pe ? H : u;
  var v = c == H, g = u == H, p = c == u;
  if (p && je(e)) {
    if (!je(t))
      return !1;
    o = !0, v = !1;
  }
  if (p && !v)
    return a || (a = new Z()), o || hi(e) ? vi(e, t, r, n, s, a) : di(e, t, c, r, n, s, a);
  if (!(r & _i)) {
    var h = v && xe.call(e, "__wrapped__"), d = g && xe.call(t, "__wrapped__");
    if (h || d) {
      var l = h ? e.value() : e, _ = d ? t.value() : t;
      return a || (a = new Z()), s(l, _, r, n, a);
    }
  }
  return p ? (a || (a = new Z()), gi(e, t, r, n, s, a)) : !1;
}
var $i = bi, Si = $i, Ie = J;
function Xe(e, t, r, n, s) {
  return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : Si(e, t, r, n, Xe, s);
}
var Ti = Xe, wi = Ti;
function Ai(e, t) {
  return wi(e, t);
}
var mi = Ai;
const Ci = /* @__PURE__ */ Ye(mi), ji = (e, t) => {
  const [r, n] = b(!1), s = O(!1), a = O(t);
  w(() => {
    if (!s.current)
      s.current = !0;
    else if (r)
      return e();
  }, [r]), w(() => {
    const o = !Ci(a.current, t);
    o && (a.current = t), n(o);
  }, [t]), w(() => () => {
    s.current = !1;
  }, []);
}, Pi = () => {
  const e = O(null);
  return { wrapper: e, isElementInViewport: () => {
    if (!e.current)
      return !1;
    const r = e.current.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, s = window.innerWidth || document.documentElement.clientWidth;
    return r.top < n && r.left < s && r.bottom > 0 && r.right > 0;
  } };
}, C = {}, Li = (e) => {
  var n;
  const [t, r] = b(((n = C.global) == null ? void 0 : n.state) || e);
  return C.global || (C.global = {
    state: t,
    sets: []
  }), N(() => {
    C.global.sets.push(r);
  }, []), [
    t,
    Re((s) => {
      const a = typeof s == "function" ? s(C.global.state) : s;
      C.global.state = a, r(a), C.global.sets.forEach((o) => o(a));
    }, [])
  ];
}, T = {}, xi = (e) => {
  var s;
  const t = window.location.pathname, [r, n] = b(((s = T[t]) == null ? void 0 : s.state) || e);
  return T[t] || (T[t] = {
    state: r,
    sets: []
  }), N(() => {
    T[t].sets.push(n);
  }, [t]), w(() => {
    Object.keys(T).forEach((a) => {
      a && a !== t && Reflect.deleteProperty(T, a);
    });
  }, [t]), [
    r,
    Re(
      (a) => {
        const o = typeof a == "function" ? a(T[t].state) : a;
        T[t].state = o, n(o), T[t].sets.forEach((i) => i(o));
      },
      [t]
    )
  ];
}, Ii = () => {
  const e = O(null), t = De(() => document.createElement("div"), []);
  N(() => {
    const a = document.createElement("style");
    document.head.appendChild(a);
    const o = (i, c, u) => {
      "insertRule" in i ? i.insertRule(c, u) : "addRule" in i && i.addRule(selector, c, u);
    };
    o(
      a.sheet,
      `.utopian-scrollbar {
        overflow: auto;
        position: relative;
      }
      `,
      0
    ), o(
      a.sheet,
      `.utopian-scrollbar::-webkit-scrollbar {
        width: 0;
        height: 0;
      }`,
      0
    ), o(
      a.sheet,
      `
        .utopian-scrollbar .bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 4px;
          background: #C9CDD4;
          border-radius: 3px;
          opacity: 0;
          z-index: 50;
          transition: opacity 0.3s;
          pointer-events: none;
        }
      `,
      0
    ), o(
      a.sheet,
      `
        .utopian-scrollbar .bar.show {
          opacity: 1;
        }
      `,
      0
    );
  }, []);
  const r = () => {
    const a = e.current, o = a.scrollLeft, i = a.scrollWidth, c = a.clientWidth, u = o / i * c, v = c / i * c;
    t.style.width = `${v}px`, t.style.left = `${u + o}px`;
  }, n = () => {
    const a = e.current, o = a.scrollWidth;
    a.clientWidth < o ? (r(), t.classList.add("show")) : t.classList.remove("show");
  }, s = () => {
    r(), t.classList.remove("show");
  };
  return w(() => {
    var a, o;
    if (e.current)
      return e.current.classList.add("utopian-scrollbar"), t.classList.add("bar"), (a = e.current) == null || a.appendChild(t), (o = e.current) == null || o.addEventListener("scroll", r), e.current.addEventListener("mouseover", n), e.current.addEventListener("mouseout", s), () => {
        var i, c, u, v;
        (i = e.current) == null || i.removeEventListener("scroll", r), (c = e.current) == null || c.removeEventListener("mouseover", n), (u = e.current) == null || u.removeEventListener("mouseout", s), t && ((v = e.current) == null || v.removeChild(t));
      };
  }, [e.current]), { wrapperRef: e, scrollRect: r, scrollVisible: n };
}, Ri = () => {
  const e = O(null), [t, r] = b(!1);
  return w(() => {
    if (!e.current)
      return;
    const n = () => {
      e.current.scrollTop > 0 && !t ? r(!0) : r(!1);
    };
    return e.current.addEventListener("scroll", n), () => {
      !e.current || !n || e.current.removeEventListener("scroll", n);
    };
  }, [e.current]), { scrollEleRef: e, scrolled: t };
}, Di = (e, t) => {
  const r = O(null), n = De(() => document.createElement("div"), []);
  function s(a, o, i, c) {
    "insertRule" in a ? a.insertRule(`${o} { ${i} }`, c) : "addRule" in a && a.addRule(o, i, c);
  }
  return N(() => {
    const a = document.createElement("style");
    document.head.appendChild(a), s(
      a.sheet,
      ".scroll-container::before",
      ` content: '';
        position: absolute;
        top: ${e || 0}px;
        left: ${t || 0}px;
        width: 100%;
        height: 4px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;`,
      0
    ), s(a.sheet, ".scroll-container.scrolled::before", " opacity: 1;", 0);
  }, [e, t]), w(() => {
    r.current && (r.current.parentElement.classList.add("relative"), r.current.classList.add("scroll-container"), r.current.addEventListener("scroll", () => {
      r.current.scrollTop > 0 ? r.current.classList.add("scrolled") : r.current.classList.remove("scrolled");
    }));
  }, [r.current]), { wrapperRef: r, Wrapper: n };
}, Mi = (e) => {
  const {
    requestParams: t,
    request: r
  } = e, [n, s] = b([]), [a, o] = b([]), [i, c] = b({
    total: 0,
    pageSize: 10,
    current: 1
  }), [u, v] = b([]), [g, p] = b(), {
    loading: h,
    sendRequest: d,
    data: l
  } = r({
    url: t.url,
    req: {
      // 每次状态改变都会触发重新请求，但是 pageIndex 未归 0
      // 又不存在改变了参数还留在本页的场景（可以在外层传递 pageIndex），故此处硬编码为 0
      pageIndex: 1,
      pageSize: i.pageSize,
      ...t.req
    }
  });
  w(() => {
    ie(() => {
      v((l == null ? void 0 : l.records) || []), c({
        current: (l == null ? void 0 : l.pageIndex) || 1,
        pageSize: (l == null ? void 0 : l.pageSize) || 10,
        total: (l == null ? void 0 : l.total) || 0
      }), p(l);
    });
  }, [l]);
  const _ = {
    selectedRowKeys: n,
    onChange: (y, m) => {
      ie(() => {
        s(y), o(m);
      });
    }
  }, $ = async (y) => {
    const {
      current: m,
      pageSize: j
    } = y;
    d({
      pageIndex: m || i.current,
      pageSize: j || i.pageSize,
      ...t.req
    });
  }, S = async (y) => {
    d({
      pageIndex: y || i.current,
      pageSize: i.pageSize,
      ...t.req
    });
  };
  return {
    tableProps: {
      rowSelection: _,
      pagination: {
        ...i,
        showTotal: (y) => `共${y}条`,
        showSizeChanger: !0
      },
      loading: h,
      dataSource: u,
      onChange: $
      // expandable: expanded ? expandableConfig : undefined,
    },
    selectedRows: a,
    changePage: S,
    sendRequest: d,
    rawData: g
  };
}, Gi = () => {
  const [e, t] = b({ transitionStart: !1, transitionEnd: !0 }), r = O(null);
  return w(() => {
    if (!r.current)
      return;
    const n = (a) => {
      a.stopPropagation(), a.preventDefault(), a.target === r.current && t({ transitionStart: !0, transitionEnd: !1 });
    }, s = (a) => {
      a.stopPropagation(), a.preventDefault(), a.target === r.current && t({ transitionStart: !1, transitionEnd: !0 });
    };
    return r.current.addEventListener("transitionstart", n), r.current.addEventListener("transitionend", s), () => {
      var a, o;
      (a = r.current) == null || a.addEventListener("transitionstart", n), (o = r.current) == null || o.removeEventListener("transitionend", s);
    };
  }, [r.current]), { wrapperDiv: r, transitionend: e.transitionEnd, transitionstart: e.transitionStart };
};
function Hi(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, s = oe.createContext(void 0);
  s.displayName = n;
  function a() {
    const o = oe.useContext(s);
    if (!o && t)
      throw new Error(r);
    return o;
  }
  return [s.Provider, a, s];
}
export {
  Hi as createContext,
  T as routerStates,
  ji as useDepEffect,
  Pi as useElementInViewport,
  Li as useGlobalState,
  xi as useRouterState,
  Ri as useScrollCheck,
  Di as useScrollShadow,
  Ii as useScrollbar,
  Mi as useTableProvider,
  Gi as useTransitionend
};
