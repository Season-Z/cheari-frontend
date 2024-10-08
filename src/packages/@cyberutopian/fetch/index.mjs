import { useState as ne, useRef as se, useEffect as W, useCallback as Sr } from "react";
const Ul = (e) => O == null ? void 0 : O.request(e);
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rr() {
  this.__data__ = [], this.size = 0;
}
var Or = Rr;
function $r(e, t) {
  return e === t || e !== e && t !== t;
}
var Mt = $r, Cr = Mt;
function xr(e, t) {
  for (var r = e.length; r--; )
    if (Cr(e[r][0], t))
      return r;
  return -1;
}
var fe = xr, Pr = fe, jr = Array.prototype, Nr = jr.splice;
function Dr(e) {
  var t = this.__data__, r = Pr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Nr.call(t, r, 1), --this.size, !0;
}
var Lr = Dr, Fr = fe;
function Ir(e) {
  var t = this.__data__, r = Fr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Br = Ir, Ur = fe;
function Mr(e) {
  return Ur(this.__data__, e) > -1;
}
var qr = Mr, Hr = fe;
function kr(e, t) {
  var r = this.__data__, n = Hr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var zr = kr, Gr = Or, Kr = Lr, Jr = Br, Wr = qr, Vr = zr;
function B(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
B.prototype.clear = Gr;
B.prototype.delete = Kr;
B.prototype.get = Jr;
B.prototype.has = Wr;
B.prototype.set = Vr;
var de = B, Xr = de;
function Qr() {
  this.__data__ = new Xr(), this.size = 0;
}
var Zr = Qr;
function Yr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var en = Yr;
function tn(e) {
  return this.__data__.get(e);
}
var rn = tn;
function nn(e) {
  return this.__data__.has(e);
}
var sn = nn, an = typeof Z == "object" && Z && Z.Object === Object && Z, qt = an, on = qt, cn = typeof self == "object" && self && self.Object === Object && self, un = on || cn || Function("return this")(), P = un, ln = P, fn = ln.Symbol, He = fn, Ye = He, Ht = Object.prototype, dn = Ht.hasOwnProperty, pn = Ht.toString, K = Ye ? Ye.toStringTag : void 0;
function hn(e) {
  var t = dn.call(e, K), r = e[K];
  try {
    e[K] = void 0;
    var n = !0;
  } catch {
  }
  var s = pn.call(e);
  return n && (t ? e[K] = r : delete e[K]), s;
}
var yn = hn, mn = Object.prototype, gn = mn.toString;
function bn(e) {
  return gn.call(e);
}
var _n = bn, et = He, vn = yn, wn = _n, En = "[object Null]", Tn = "[object Undefined]", tt = et ? et.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? Tn : En : tt && tt in Object(e) ? vn(e) : wn(e);
}
var pe = Sn;
function An(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var kt = An, Rn = pe, On = kt, $n = "[object AsyncFunction]", Cn = "[object Function]", xn = "[object GeneratorFunction]", Pn = "[object Proxy]";
function jn(e) {
  if (!On(e))
    return !1;
  var t = Rn(e);
  return t == Cn || t == xn || t == $n || t == Pn;
}
var zt = jn, Nn = P, Dn = Nn["__core-js_shared__"], Ln = Dn, Te = Ln, rt = function() {
  var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fn(e) {
  return !!rt && rt in e;
}
var In = Fn, Bn = Function.prototype, Un = Bn.toString;
function Mn(e) {
  if (e != null) {
    try {
      return Un.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gt = Mn, qn = zt, Hn = In, kn = kt, zn = Gt, Gn = /[\\^$.*+?()[\]{}|]/g, Kn = /^\[object .+?Constructor\]$/, Jn = Function.prototype, Wn = Object.prototype, Vn = Jn.toString, Xn = Wn.hasOwnProperty, Qn = RegExp(
  "^" + Vn.call(Xn).replace(Gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zn(e) {
  if (!kn(e) || Hn(e))
    return !1;
  var t = qn(e) ? Qn : Kn;
  return t.test(zn(e));
}
var Yn = Zn;
function es(e, t) {
  return e == null ? void 0 : e[t];
}
var ts = es, rs = Yn, ns = ts;
function ss(e, t) {
  var r = ns(e, t);
  return rs(r) ? r : void 0;
}
var U = ss, as = U, os = P, is = as(os, "Map"), ke = is, cs = U, us = cs(Object, "create"), he = us, nt = he;
function ls() {
  this.__data__ = nt ? nt(null) : {}, this.size = 0;
}
var fs = ls;
function ds(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ps = ds, hs = he, ys = "__lodash_hash_undefined__", ms = Object.prototype, gs = ms.hasOwnProperty;
function bs(e) {
  var t = this.__data__;
  if (hs) {
    var r = t[e];
    return r === ys ? void 0 : r;
  }
  return gs.call(t, e) ? t[e] : void 0;
}
var _s = bs, vs = he, ws = Object.prototype, Es = ws.hasOwnProperty;
function Ts(e) {
  var t = this.__data__;
  return vs ? t[e] !== void 0 : Es.call(t, e);
}
var Ss = Ts, As = he, Rs = "__lodash_hash_undefined__";
function Os(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = As && t === void 0 ? Rs : t, this;
}
var $s = Os, Cs = fs, xs = ps, Ps = _s, js = Ss, Ns = $s;
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
M.prototype.clear = Cs;
M.prototype.delete = xs;
M.prototype.get = Ps;
M.prototype.has = js;
M.prototype.set = Ns;
var Ds = M, st = Ds, Ls = de, Fs = ke;
function Is() {
  this.size = 0, this.__data__ = {
    hash: new st(),
    map: new (Fs || Ls)(),
    string: new st()
  };
}
var Bs = Is;
function Us(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ms = Us, qs = Ms;
function Hs(e, t) {
  var r = e.__data__;
  return qs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ye = Hs, ks = ye;
function zs(e) {
  var t = ks(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Gs = zs, Ks = ye;
function Js(e) {
  return Ks(this, e).get(e);
}
var Ws = Js, Vs = ye;
function Xs(e) {
  return Vs(this, e).has(e);
}
var Qs = Xs, Zs = ye;
function Ys(e, t) {
  var r = Zs(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var ea = Ys, ta = Bs, ra = Gs, na = Ws, sa = Qs, aa = ea;
function q(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = ta;
q.prototype.delete = ra;
q.prototype.get = na;
q.prototype.has = sa;
q.prototype.set = aa;
var Kt = q, oa = de, ia = ke, ca = Kt, ua = 200;
function la(e, t) {
  var r = this.__data__;
  if (r instanceof oa) {
    var n = r.__data__;
    if (!ia || n.length < ua - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ca(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var fa = la, da = de, pa = Zr, ha = en, ya = rn, ma = sn, ga = fa;
function H(e) {
  var t = this.__data__ = new da(e);
  this.size = t.size;
}
H.prototype.clear = pa;
H.prototype.delete = ha;
H.prototype.get = ya;
H.prototype.has = ma;
H.prototype.set = ga;
var ba = H, _a = "__lodash_hash_undefined__";
function va(e) {
  return this.__data__.set(e, _a), this;
}
var wa = va;
function Ea(e) {
  return this.__data__.has(e);
}
var Ta = Ea, Sa = Kt, Aa = wa, Ra = Ta;
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Sa(); ++t < r; )
    this.add(e[t]);
}
ae.prototype.add = ae.prototype.push = Aa;
ae.prototype.has = Ra;
var Oa = ae;
function $a(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Ca = $a;
function xa(e, t) {
  return e.has(t);
}
var Pa = xa, ja = Oa, Na = Ca, Da = Pa, La = 1, Fa = 2;
function Ia(e, t, r, n, s, a) {
  var o = r & La, i = e.length, f = t.length;
  if (i != f && !(o && f > i))
    return !1;
  var u = a.get(e), l = a.get(t);
  if (u && l)
    return u == t && l == e;
  var p = -1, m = !0, b = r & Fa ? new ja() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var d = e[p], y = t[p];
    if (n)
      var h = o ? n(y, d, p, t, e, a) : n(d, y, p, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      m = !1;
      break;
    }
    if (b) {
      if (!Na(t, function(_, v) {
        if (!Da(b, v) && (d === _ || s(d, _, r, n, a)))
          return b.push(v);
      })) {
        m = !1;
        break;
      }
    } else if (!(d === y || s(d, y, r, n, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var Jt = Ia, Ba = P, Ua = Ba.Uint8Array, Ma = Ua;
function qa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, s) {
    r[++t] = [s, n];
  }), r;
}
var Ha = qa;
function ka(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var za = ka, at = He, ot = Ma, Ga = Mt, Ka = Jt, Ja = Ha, Wa = za, Va = 1, Xa = 2, Qa = "[object Boolean]", Za = "[object Date]", Ya = "[object Error]", eo = "[object Map]", to = "[object Number]", ro = "[object RegExp]", no = "[object Set]", so = "[object String]", ao = "[object Symbol]", oo = "[object ArrayBuffer]", io = "[object DataView]", it = at ? at.prototype : void 0, Se = it ? it.valueOf : void 0;
function co(e, t, r, n, s, a, o) {
  switch (r) {
    case io:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case oo:
      return !(e.byteLength != t.byteLength || !a(new ot(e), new ot(t)));
    case Qa:
    case Za:
    case to:
      return Ga(+e, +t);
    case Ya:
      return e.name == t.name && e.message == t.message;
    case ro:
    case so:
      return e == t + "";
    case eo:
      var i = Ja;
    case no:
      var f = n & Va;
      if (i || (i = Wa), e.size != t.size && !f)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Xa, o.set(e, t);
      var l = Ka(i(e), i(t), n, s, a, o);
      return o.delete(e), l;
    case ao:
      if (Se)
        return Se.call(e) == Se.call(t);
  }
  return !1;
}
var uo = co;
function lo(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
var fo = lo, po = Array.isArray, ze = po, ho = fo, yo = ze;
function mo(e, t, r) {
  var n = t(e);
  return yo(e) ? n : ho(n, r(e));
}
var go = mo;
function bo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[s++] = o);
  }
  return a;
}
var _o = bo;
function vo() {
  return [];
}
var wo = vo, Eo = _o, To = wo, So = Object.prototype, Ao = So.propertyIsEnumerable, ct = Object.getOwnPropertySymbols, Ro = ct ? function(e) {
  return e == null ? [] : (e = Object(e), Eo(ct(e), function(t) {
    return Ao.call(e, t);
  }));
} : To, Oo = Ro;
function $o(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Co = $o;
function xo(e) {
  return e != null && typeof e == "object";
}
var me = xo, Po = pe, jo = me, No = "[object Arguments]";
function Do(e) {
  return jo(e) && Po(e) == No;
}
var Lo = Do, ut = Lo, Fo = me, Wt = Object.prototype, Io = Wt.hasOwnProperty, Bo = Wt.propertyIsEnumerable, Uo = ut(function() {
  return arguments;
}()) ? ut : function(e) {
  return Fo(e) && Io.call(e, "callee") && !Bo.call(e, "callee");
}, Mo = Uo, oe = { exports: {} };
function qo() {
  return !1;
}
var Ho = qo;
oe.exports;
(function(e, t) {
  var r = P, n = Ho, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? r.Buffer : void 0, f = i ? i.isBuffer : void 0, u = f || n;
  e.exports = u;
})(oe, oe.exports);
var Vt = oe.exports, ko = 9007199254740991, zo = /^(?:0|[1-9]\d*)$/;
function Go(e, t) {
  var r = typeof e;
  return t = t ?? ko, !!t && (r == "number" || r != "symbol" && zo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ko = Go, Jo = 9007199254740991;
function Wo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jo;
}
var Xt = Wo, Vo = pe, Xo = Xt, Qo = me, Zo = "[object Arguments]", Yo = "[object Array]", ei = "[object Boolean]", ti = "[object Date]", ri = "[object Error]", ni = "[object Function]", si = "[object Map]", ai = "[object Number]", oi = "[object Object]", ii = "[object RegExp]", ci = "[object Set]", ui = "[object String]", li = "[object WeakMap]", fi = "[object ArrayBuffer]", di = "[object DataView]", pi = "[object Float32Array]", hi = "[object Float64Array]", yi = "[object Int8Array]", mi = "[object Int16Array]", gi = "[object Int32Array]", bi = "[object Uint8Array]", _i = "[object Uint8ClampedArray]", vi = "[object Uint16Array]", wi = "[object Uint32Array]", w = {};
w[pi] = w[hi] = w[yi] = w[mi] = w[gi] = w[bi] = w[_i] = w[vi] = w[wi] = !0;
w[Zo] = w[Yo] = w[fi] = w[ei] = w[di] = w[ti] = w[ri] = w[ni] = w[si] = w[ai] = w[oi] = w[ii] = w[ci] = w[ui] = w[li] = !1;
function Ei(e) {
  return Qo(e) && Xo(e.length) && !!w[Vo(e)];
}
var Ti = Ei;
function Si(e) {
  return function(t) {
    return e(t);
  };
}
var Ai = Si, ie = { exports: {} };
ie.exports;
(function(e, t) {
  var r = qt, n = t && !t.nodeType && t, s = n && !0 && e && !e.nodeType && e, a = s && s.exports === n, o = a && r.process, i = function() {
    try {
      var f = s && s.require && s.require("util").types;
      return f || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(ie, ie.exports);
var Ri = ie.exports, Oi = Ti, $i = Ai, lt = Ri, ft = lt && lt.isTypedArray, Ci = ft ? $i(ft) : Oi, Qt = Ci, xi = Co, Pi = Mo, ji = ze, Ni = Vt, Di = Ko, Li = Qt, Fi = Object.prototype, Ii = Fi.hasOwnProperty;
function Bi(e, t) {
  var r = ji(e), n = !r && Pi(e), s = !r && !n && Ni(e), a = !r && !n && !s && Li(e), o = r || n || s || a, i = o ? xi(e.length, String) : [], f = i.length;
  for (var u in e)
    (t || Ii.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Di(u, f))) && i.push(u);
  return i;
}
var Ui = Bi, Mi = Object.prototype;
function qi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mi;
  return e === r;
}
var Hi = qi;
function ki(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var zi = ki, Gi = zi, Ki = Gi(Object.keys, Object), Ji = Ki, Wi = Hi, Vi = Ji, Xi = Object.prototype, Qi = Xi.hasOwnProperty;
function Zi(e) {
  if (!Wi(e))
    return Vi(e);
  var t = [];
  for (var r in Object(e))
    Qi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Yi = Zi, ec = zt, tc = Xt;
function rc(e) {
  return e != null && tc(e.length) && !ec(e);
}
var nc = rc, sc = Ui, ac = Yi, oc = nc;
function ic(e) {
  return oc(e) ? sc(e) : ac(e);
}
var cc = ic, uc = go, lc = Oo, fc = cc;
function dc(e) {
  return uc(e, fc, lc);
}
var pc = dc, dt = pc, hc = 1, yc = Object.prototype, mc = yc.hasOwnProperty;
function gc(e, t, r, n, s, a) {
  var o = r & hc, i = dt(e), f = i.length, u = dt(t), l = u.length;
  if (f != l && !o)
    return !1;
  for (var p = f; p--; ) {
    var m = i[p];
    if (!(o ? m in t : mc.call(t, m)))
      return !1;
  }
  var b = a.get(e), d = a.get(t);
  if (b && d)
    return b == t && d == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var h = o; ++p < f; ) {
    m = i[p];
    var _ = e[m], v = t[m];
    if (n)
      var E = o ? n(v, _, m, t, e, a) : n(_, v, m, e, t, a);
    if (!(E === void 0 ? _ === v || s(_, v, r, n, a) : E)) {
      y = !1;
      break;
    }
    h || (h = m == "constructor");
  }
  if (y && !h) {
    var A = e.constructor, S = t.constructor;
    A != S && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof S == "function" && S instanceof S) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var bc = gc, _c = U, vc = P, wc = _c(vc, "DataView"), Ec = wc, Tc = U, Sc = P, Ac = Tc(Sc, "Promise"), Rc = Ac, Oc = U, $c = P, Cc = Oc($c, "Set"), xc = Cc, Pc = U, jc = P, Nc = Pc(jc, "WeakMap"), Dc = Nc, xe = Ec, Pe = ke, je = Rc, Ne = xc, De = Dc, Zt = pe, k = Gt, pt = "[object Map]", Lc = "[object Object]", ht = "[object Promise]", yt = "[object Set]", mt = "[object WeakMap]", gt = "[object DataView]", Fc = k(xe), Ic = k(Pe), Bc = k(je), Uc = k(Ne), Mc = k(De), L = Zt;
(xe && L(new xe(new ArrayBuffer(1))) != gt || Pe && L(new Pe()) != pt || je && L(je.resolve()) != ht || Ne && L(new Ne()) != yt || De && L(new De()) != mt) && (L = function(e) {
  var t = Zt(e), r = t == Lc ? e.constructor : void 0, n = r ? k(r) : "";
  if (n)
    switch (n) {
      case Fc:
        return gt;
      case Ic:
        return pt;
      case Bc:
        return ht;
      case Uc:
        return yt;
      case Mc:
        return mt;
    }
  return t;
});
var qc = L, Ae = ba, Hc = Jt, kc = uo, zc = bc, bt = qc, _t = ze, vt = Vt, Gc = Qt, Kc = 1, wt = "[object Arguments]", Et = "[object Array]", Y = "[object Object]", Jc = Object.prototype, Tt = Jc.hasOwnProperty;
function Wc(e, t, r, n, s, a) {
  var o = _t(e), i = _t(t), f = o ? Et : bt(e), u = i ? Et : bt(t);
  f = f == wt ? Y : f, u = u == wt ? Y : u;
  var l = f == Y, p = u == Y, m = f == u;
  if (m && vt(e)) {
    if (!vt(t))
      return !1;
    o = !0, l = !1;
  }
  if (m && !l)
    return a || (a = new Ae()), o || Gc(e) ? Hc(e, t, r, n, s, a) : kc(e, t, f, r, n, s, a);
  if (!(r & Kc)) {
    var b = l && Tt.call(e, "__wrapped__"), d = p && Tt.call(t, "__wrapped__");
    if (b || d) {
      var y = b ? e.value() : e, h = d ? t.value() : t;
      return a || (a = new Ae()), s(y, h, r, n, a);
    }
  }
  return m ? (a || (a = new Ae()), zc(e, t, r, n, s, a)) : !1;
}
var Vc = Wc, Xc = Vc, St = me;
function Yt(e, t, r, n, s) {
  return e === t ? !0 : e == null || t == null || !St(e) && !St(t) ? e !== e && t !== t : Xc(e, t, r, n, Yt, s);
}
var Qc = Yt, Zc = Qc;
function Yc(e, t) {
  return Zc(e, t);
}
var eu = Yc;
const tu = /* @__PURE__ */ Ar(eu), ru = (e, t) => {
  const [r, n] = ne(!1), s = se(!1), a = se(t);
  W(() => {
    if (!s.current)
      s.current = !0;
    else if (r)
      return e();
  }, [r]), W(() => {
    const o = !tu(a.current, t);
    o && (a.current = t), n(o);
  }, [t]), W(() => () => {
    s.current = !1;
  }, []);
}, nu = (e) => {
  const [t, r] = ne(!1), n = se(e);
  n.current = e, W(() => {
    t && n.current();
  }, [t]), W(() => (r(!0), () => {
    r(!1);
  }), []);
}, Ml = (e, t) => {
  const [r, n] = ne(!1), [s, a] = ne(), o = se(e);
  o.current = e;
  const i = Sr((p, m) => new Promise((b) => {
    n(!0), O == null || O.request({
      ...o.current,
      data: p === void 0 ? o.current.data : p,
      ...m
    }).then((d) => (a(d.data), b(d), d)).catch((d) => {
      const y = { msg: d };
      return b(y), y;
    }).finally(() => {
      n(!1);
    });
  }), []), f = (p, m) => i(p, m), u = () => O == null ? void 0 : O.cancelRequest(o.current.url), l = () => O == null ? void 0 : O.cancelAllRequest();
  return nu(() => {
    t != null && t.manual || i();
  }), ru(() => {
    t != null && t.manual || i();
  }, [o.current]), { loading: r, data: s, sendRequest: f, cancel: u, cancelAll: l };
};
function er(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: su } = Object.prototype, { getPrototypeOf: Ge } = Object, ge = ((e) => (t) => {
  const r = su.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => ge(t) === e), be = (e) => (t) => typeof t === e, { isArray: z } = Array, V = be("undefined");
function au(e) {
  return e !== null && !V(e) && e.constructor !== null && !V(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tr = x("ArrayBuffer");
function ou(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tr(e.buffer), t;
}
const iu = be("string"), $ = be("function"), rr = be("number"), _e = (e) => e !== null && typeof e == "object", cu = (e) => e === !0 || e === !1, ee = (e) => {
  if (ge(e) !== "object")
    return !1;
  const t = Ge(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, uu = x("Date"), lu = x("File"), fu = x("Blob"), du = x("FileList"), pu = (e) => _e(e) && $(e.pipe), hu = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $(e.append) && ((t = ge(e)) === "formdata" || // detect form-data instance
  t === "object" && $(e.toString) && e.toString() === "[object FormData]"));
}, yu = x("URLSearchParams"), [mu, gu, bu, _u] = ["ReadableStream", "Request", "Response", "Headers"].map(x), vu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), z(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let i;
    for (n = 0; n < o; n++)
      i = a[n], t.call(null, e[i], i, e);
  }
}
function nr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const F = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), sr = (e) => !V(e) && e !== F;
function Le() {
  const { caseless: e } = sr(this) && this || {}, t = {}, r = (n, s) => {
    const a = e && nr(t, s) || s;
    ee(t[a]) && ee(n) ? t[a] = Le(t[a], n) : ee(n) ? t[a] = Le({}, n) : z(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && X(arguments[n], r);
  return t;
}
const wu = (e, t, r, { allOwnKeys: n } = {}) => (X(t, (s, a) => {
  r && $(s) ? e[a] = er(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), Eu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Tu = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Su = (e, t, r, n) => {
  let s, a, o;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = r !== !1 && Ge(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Au = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ru = (e) => {
  if (!e)
    return null;
  if (z(e))
    return e;
  let t = e.length;
  if (!rr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ou = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ge(Uint8Array)), $u = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Cu = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, xu = x("HTMLFormElement"), Pu = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), At = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ju = x("RegExp"), ar = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  X(r, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(e, n);
}, Nu = (e) => {
  ar(e, (t, r) => {
    if ($(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if ($(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Du = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return z(e) ? n(e) : n(String(e).split(t)), r;
}, Lu = () => {
}, Fu = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Re = "abcdefghijklmnopqrstuvwxyz", Rt = "0123456789", or = {
  DIGIT: Rt,
  ALPHA: Re,
  ALPHA_DIGIT: Re + Re.toUpperCase() + Rt
}, Iu = (e = 16, t = or.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Bu(e) {
  return !!(e && $(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Uu = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (_e(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = z(n) ? [] : {};
        return X(n, (o, i) => {
          const f = r(o, s + 1);
          !V(f) && (a[i] = f);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Mu = x("AsyncFunction"), qu = (e) => e && (_e(e) || $(e)) && $(e.then) && $(e.catch), ir = ((e, t) => e ? setImmediate : t ? ((r, n) => (F.addEventListener("message", ({ source: s, data: a }) => {
  s === F && a === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), F.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  $(F.postMessage)
), Hu = typeof queueMicrotask < "u" ? queueMicrotask.bind(F) : typeof process < "u" && process.nextTick || ir, c = {
  isArray: z,
  isArrayBuffer: tr,
  isBuffer: au,
  isFormData: hu,
  isArrayBufferView: ou,
  isString: iu,
  isNumber: rr,
  isBoolean: cu,
  isObject: _e,
  isPlainObject: ee,
  isReadableStream: mu,
  isRequest: gu,
  isResponse: bu,
  isHeaders: _u,
  isUndefined: V,
  isDate: uu,
  isFile: lu,
  isBlob: fu,
  isRegExp: ju,
  isFunction: $,
  isStream: pu,
  isURLSearchParams: yu,
  isTypedArray: Ou,
  isFileList: du,
  forEach: X,
  merge: Le,
  extend: wu,
  trim: vu,
  stripBOM: Eu,
  inherits: Tu,
  toFlatObject: Su,
  kindOf: ge,
  kindOfTest: x,
  endsWith: Au,
  toArray: Ru,
  forEachEntry: $u,
  matchAll: Cu,
  isHTMLForm: xu,
  hasOwnProperty: At,
  hasOwnProp: At,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ar,
  freezeMethods: Nu,
  toObjectSet: Du,
  toCamelCase: Pu,
  noop: Lu,
  toFiniteNumber: Fu,
  findKey: nr,
  global: F,
  isContextDefined: sr,
  ALPHABET: or,
  generateString: Iu,
  isSpecCompliantForm: Bu,
  toJSONObject: Uu,
  isAsyncFn: Mu,
  isThenable: qu,
  setImmediate: ir,
  asap: Hu
};
function g(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const cr = g.prototype, ur = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ur[e] = { value: e };
});
Object.defineProperties(g, ur);
Object.defineProperty(cr, "isAxiosError", { value: !0 });
g.from = (e, t, r, n, s, a) => {
  const o = Object.create(cr);
  return c.toFlatObject(e, o, function(f) {
    return f !== Error.prototype;
  }, (i) => i !== "isAxiosError"), g.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const ku = null;
function Fe(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function lr(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ot(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = lr(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function zu(e) {
  return c.isArray(e) && !e.some(Fe);
}
const Gu = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ve(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !c.isUndefined(h[y]);
  });
  const n = r.metaTokens, s = r.visitor || l, a = r.dots, o = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (c.isDate(d))
      return d.toISOString();
    if (!f && c.isBlob(d))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, y, h) {
    let _ = d;
    if (d && !h && typeof d == "object") {
      if (c.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && zu(d) || (c.isFileList(d) || c.endsWith(y, "[]")) && (_ = c.toArray(d)))
        return y = lr(y), _.forEach(function(E, A) {
          !(c.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ot([y], A, a) : o === null ? y : y + "[]",
            u(E)
          );
        }), !1;
    }
    return Fe(d) ? !0 : (t.append(Ot(h, y, a), u(d)), !1);
  }
  const p = [], m = Object.assign(Gu, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Fe
  });
  function b(d, y) {
    if (!c.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(d), c.forEach(d, function(_, v) {
        (!(c.isUndefined(_) || _ === null) && s.call(
          t,
          _,
          c.isString(v) ? v.trim() : v,
          y,
          m
        )) === !0 && b(_, y ? y.concat(v) : [v]);
      }), p.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function $t(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ke(e, t) {
  this._pairs = [], e && ve(e, this, t);
}
const fr = Ke.prototype;
fr.append = function(t, r) {
  this._pairs.push([t, r]);
};
fr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, $t);
  } : $t;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Ku(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ku, s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = c.isURLSearchParams(t) ? t.toString() : new Ke(t, r).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ju {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ct = Ju, pr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wu = typeof URLSearchParams < "u" ? URLSearchParams : Ke, Vu = typeof FormData < "u" ? FormData : null, Xu = typeof Blob < "u" ? Blob : null, Qu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wu,
    FormData: Vu,
    Blob: Xu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Je = typeof window < "u" && typeof document < "u", Ie = typeof navigator == "object" && navigator || void 0, Zu = Je && (!Ie || ["ReactNative", "NativeScript", "NS"].indexOf(Ie.product) < 0), Yu = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), el = Je && window.location.href || "http://localhost", tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Je,
  hasStandardBrowserEnv: Zu,
  hasStandardBrowserWebWorkerEnv: Yu,
  navigator: Ie,
  origin: el
}, Symbol.toStringTag, { value: "Module" })), R = {
  ...tl,
  ...Qu
};
function rl(e, t) {
  return ve(e, new R.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return R.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function nl(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function sl(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function hr(e) {
  function t(r, n, s, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const i = Number.isFinite(+o), f = a >= r.length;
    return o = !o && c.isArray(s) ? s.length : o, f ? (c.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !i) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), t(r, n, s[o], a) && c.isArray(s[o]) && (s[o] = sl(s[o])), !i);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, s) => {
      t(nl(n), s, r, 0);
    }), r;
  }
  return null;
}
function al(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const We = {
  transitional: pr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = c.isObject(t);
    if (a && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(hr(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return rl(t, this.formSerializer).toString();
      if ((i = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ve(
          i ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), al(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || We.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? g.from(i, g.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  We.headers[e] = {};
});
const Ve = We, ol = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), il = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && ol[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, xt = Symbol("internals");
function J(e) {
  return e && String(e).trim().toLowerCase();
}
function te(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(te) : String(e);
}
function cl(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ul = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oe(e, t, r, n, s) {
  if (c.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!c.isString(t)) {
    if (c.isString(n))
      return t.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(t);
  }
}
function ll(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function fl(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, o) {
        return this[n].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
class we {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(i, f, u) {
      const l = J(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = c.findKey(s, l);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || f] = te(i));
    }
    const o = (i, f) => c.forEach(i, (u, l) => a(u, l, f));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (c.isString(t) && (t = t.trim()) && !ul(t))
      o(il(t), r);
    else if (c.isHeaders(t))
      for (const [i, f] of t.entries())
        a(f, i, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = J(t), t) {
      const n = c.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return cl(s);
        if (c.isFunction(r))
          return r.call(this, s, n);
        if (c.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = J(t), t) {
      const n = c.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Oe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = J(o), o) {
        const i = c.findKey(n, o);
        i && (!r || Oe(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Oe(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return c.forEach(this, (s, a) => {
      const o = c.findKey(n, a);
      if (o) {
        r[o] = te(s), delete r[a];
        return;
      }
      const i = t ? ll(a) : String(a).trim();
      i !== a && delete r[a], r[i] = te(s), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && c.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[xt] = this[xt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const i = J(o);
      n[i] || (fl(s, o), n[i] = !0);
    }
    return c.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
we.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(we.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
c.freezeMethods(we);
const C = we;
function $e(e, t) {
  const r = this || Ve, n = t || r, s = C.from(n.headers);
  let a = n.data;
  return c.forEach(e, function(i) {
    a = i.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function yr(e) {
  return !!(e && e.__CANCEL__);
}
function G(e, t, r) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(G, g, {
  __CANCEL__: !0
});
function mr(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new g(
    "Request failed with status code " + r.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function dl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function pl(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = n[a];
    o || (o = u), r[s] = f, n[s] = u;
    let p = a, m = 0;
    for (; p !== s; )
      m += r[p++], p = p % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), u - o < t)
      return;
    const b = l && u - l;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function hl(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const o = (u, l = Date.now()) => {
    r = l, s = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - r;
    p >= n ? o(u, l) : (s = u, a || (a = setTimeout(() => {
      a = null, o(s);
    }, n - p)));
  }, () => s && o(s)];
}
const ce = (e, t, r = 3) => {
  let n = 0;
  const s = pl(50, 250);
  return hl((a) => {
    const o = a.loaded, i = a.lengthComputable ? a.total : void 0, f = o - n, u = s(f), l = o <= i;
    n = o;
    const p = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && i && l ? (i - o) / u : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, Pt = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, jt = (e) => (...t) => c.asap(() => e(...t)), yl = R.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = R.navigator && /(msie|trident)/i.test(R.navigator.userAgent), r = document.createElement("a");
    let n;
    function s(a) {
      let o = a;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const i = c.isString(o) ? s(o) : o;
      return i.protocol === n.protocol && i.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), ml = R.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      c.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), c.isString(n) && o.push("path=" + n), c.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function gl(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bl(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gr(e, t) {
  return e && !gl(t) ? bl(e, t) : t;
}
const Nt = (e) => e instanceof C ? { ...e } : e;
function I(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, p) {
    return c.isPlainObject(u) && c.isPlainObject(l) ? c.merge.call({ caseless: p }, u, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function s(u, l, p) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return n(void 0, u, p);
    } else
      return n(u, l, p);
  }
  function a(u, l) {
    if (!c.isUndefined(l))
      return n(void 0, l);
  }
  function o(u, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function i(u, l, p) {
    if (p in t)
      return n(u, l);
    if (p in e)
      return n(void 0, u);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: i,
    headers: (u, l) => s(Nt(u), Nt(l), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = f[l] || s, m = p(e[l], t[l], l);
    c.isUndefined(m) && p !== i || (r[l] = m);
  }), r;
}
const br = (e) => {
  const t = I({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: i } = t;
  t.headers = o = C.from(o), t.url = dr(gr(t.baseURL, t.url), e.params, e.paramsSerializer), i && o.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let f;
  if (c.isFormData(r)) {
    if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((f = o.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((p) => p.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (R.hasStandardBrowserEnv && (n && c.isFunction(n) && (n = n(t)), n || n !== !1 && yl(t.url))) {
    const u = s && a && ml.read(a);
    u && o.set(s, u);
  }
  return t;
}, _l = typeof XMLHttpRequest < "u", vl = _l && function(e) {
  return new Promise(function(r, n) {
    const s = br(e);
    let a = s.data;
    const o = C.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: f, onDownloadProgress: u } = s, l, p, m, b, d;
    function y() {
      b && b(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function _() {
      if (!h)
        return;
      const E = C.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), S = {
        data: !i || i === "text" || i === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: E,
        config: e,
        request: h
      };
      mr(function(D) {
        r(D), y();
      }, function(D) {
        n(D), y();
      }, S), h = null;
    }
    "onloadend" in h ? h.onloadend = _ : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, h.onabort = function() {
      h && (n(new g("Request aborted", g.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const S = s.transitional || pr;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), n(new g(
        A,
        S.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        h
      )), h = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in h && c.forEach(o.toJSON(), function(A, S) {
      h.setRequestHeader(S, A);
    }), c.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), i && i !== "json" && (h.responseType = s.responseType), u && ([m, d] = ce(u, !0), h.addEventListener("progress", m)), f && h.upload && ([p, b] = ce(f), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (l = (E) => {
      h && (n(!E || E.type ? new G(null, e, h) : E), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const v = dl(s.url);
    if (v && R.protocols.indexOf(v) === -1) {
      n(new g("Unsupported protocol " + v + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(a || null);
  });
}, wl = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const a = function(u) {
      if (!s) {
        s = !0, i();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof g ? l : new G(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: f } = n;
    return f.unsubscribe = () => c.asap(i), f;
  }
}, El = wl, Tl = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, Sl = async function* (e, t) {
  for await (const r of Al(e))
    yield* Tl(r, t);
}, Al = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Dt = (e, t, r, n) => {
  const s = Sl(e, t);
  let a = 0, o, i = (f) => {
    o || (o = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          i(), f.close();
          return;
        }
        let p = l.byteLength;
        if (r) {
          let m = a += p;
          r(m);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw i(u), u;
      }
    },
    cancel(f) {
      return i(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ee = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _r = Ee && typeof ReadableStream == "function", Rl = Ee && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), vr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ol = _r && vr(() => {
  let e = !1;
  const t = new Request(R.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Lt = 64 * 1024, Be = _r && vr(() => c.isReadableStream(new Response("").body)), ue = {
  stream: Be && ((e) => e.body)
};
Ee && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ue[t] && (ue[t] = c.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const $l = async (e) => {
  if (e == null)
    return 0;
  if (c.isBlob(e))
    return e.size;
  if (c.isSpecCompliantForm(e))
    return (await new Request(R.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(e) || c.isArrayBuffer(e))
    return e.byteLength;
  if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e))
    return (await Rl(e)).byteLength;
}, Cl = async (e, t) => {
  const r = c.toFiniteNumber(e.getContentLength());
  return r ?? $l(t);
}, xl = Ee && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: i,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: p = "same-origin",
    fetchOptions: m
  } = br(e);
  u = u ? (u + "").toLowerCase() : "text";
  let b = El([s, a && a.toAbortSignal()], o), d;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let h;
  try {
    if (f && Ol && r !== "get" && r !== "head" && (h = await Cl(l, n)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), j;
      if (c.isFormData(n) && (j = S.headers.get("content-type")) && l.setContentType(j), S.body) {
        const [D, Q] = Pt(
          h,
          ce(jt(f))
        );
        n = Dt(S.body, Lt, D, Q);
      }
    }
    c.isString(p) || (p = p ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    d = new Request(t, {
      ...m,
      signal: b,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: _ ? p : void 0
    });
    let v = await fetch(d);
    const E = Be && (u === "stream" || u === "response");
    if (Be && (i || E && y)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((Ze) => {
        S[Ze] = v[Ze];
      });
      const j = c.toFiniteNumber(v.headers.get("content-length")), [D, Q] = i && Pt(
        j,
        ce(jt(i), !0)
      ) || [];
      v = new Response(
        Dt(v.body, Lt, D, () => {
          Q && Q(), y && y();
        }),
        S
      );
    }
    u = u || "text";
    let A = await ue[c.findKey(ue, u) || "text"](v, e);
    return !E && y && y(), await new Promise((S, j) => {
      mr(S, j, {
        data: A,
        headers: C.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (_) {
    throw y && y(), _ && _.name === "TypeError" && /fetch/i.test(_.message) ? Object.assign(
      new g("Network Error", g.ERR_NETWORK, e, d),
      {
        cause: _.cause || _
      }
    ) : g.from(_, _ && _.code, e, d);
  }
}), Ue = {
  http: ku,
  xhr: vl,
  fetch: xl
};
c.forEach(Ue, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ft = (e) => `- ${e}`, Pl = (e) => c.isFunction(e) || e === null || e === !1, wr = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let o;
      if (n = r, !Pl(r) && (n = Ue[(o = String(r)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([i, f]) => `adapter ${i} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(Ft).join(`
`) : " " + Ft(a[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ue
};
function Ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new G(null, e);
}
function It(e) {
  return Ce(e), e.headers = C.from(e.headers), e.data = $e.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wr.getAdapter(e.adapter || Ve.adapter)(e).then(function(n) {
    return Ce(e), n.data = $e.call(
      e,
      e.transformResponse,
      n
    ), n.headers = C.from(n.headers), n;
  }, function(n) {
    return yr(n) || (Ce(e), n && n.response && (n.response.data = $e.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = C.from(n.response.headers))), Promise.reject(n);
  });
}
const Er = "1.7.7", Xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Xe[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Bt = {};
Xe.transitional = function(t, r, n) {
  function s(a, o) {
    return "[Axios v" + Er + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, i) => {
    if (t === !1)
      throw new g(
        s(o, " has been removed" + (r ? " in " + r : "")),
        g.ERR_DEPRECATED
      );
    return r && !Bt[o] && (Bt[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, i) : !0;
  };
};
function jl(e, t, r) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], o = t[a];
    if (o) {
      const i = e[a], f = i === void 0 || o(i, a, e);
      if (f !== !0)
        throw new g("option " + a + " must be " + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new g("Unknown option " + a, g.ERR_BAD_OPTION);
  }
}
const Me = {
  assertOptions: jl,
  validators: Xe
}, N = Me.validators;
class le {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ct(),
      response: new Ct()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = I(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && Me.assertOptions(n, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (c.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Me.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && c.merge(
      a.common,
      a[r.method]
    );
    a && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), r.headers = C.concat(o, a);
    const i = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, p = 0, m;
    if (!f) {
      const d = [It.bind(this), void 0];
      for (d.unshift.apply(d, i), d.push.apply(d, u), m = d.length, l = Promise.resolve(r); p < m; )
        l = l.then(d[p++], d[p++]);
      return l;
    }
    m = i.length;
    let b = r;
    for (p = 0; p < m; ) {
      const d = i[p++], y = i[p++];
      try {
        b = d(b);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      l = It.call(this, b);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, m = u.length; p < m; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = I(this.defaults, t);
    const r = gr(t.baseURL, t.url);
    return dr(r, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  le.prototype[t] = function(r, n) {
    return this.request(I(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, i) {
      return this.request(I(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  le.prototype[t] = r(), le.prototype[t + "Form"] = r(!0);
});
const re = le;
class Qe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((i) => {
        n.subscribe(i), a = i;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, i) {
      n.reason || (n.reason = new G(a, o, i), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Qe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Nl = Qe;
function Dl(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ll(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const qe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(qe).forEach(([e, t]) => {
  qe[t] = e;
});
const Fl = qe;
function Tr(e) {
  const t = new re(e), r = er(re.prototype.request, t);
  return c.extend(r, re.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Tr(I(e, s));
  }, r;
}
const T = Tr(Ve);
T.Axios = re;
T.CanceledError = G;
T.CancelToken = Nl;
T.isCancel = yr;
T.VERSION = Er;
T.toFormData = ve;
T.AxiosError = g;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = Dl;
T.isAxiosError = Ll;
T.mergeConfig = I;
T.AxiosHeaders = C;
T.formToJSON = (e) => hr(c.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = wr.getAdapter;
T.HttpStatusCode = Fl;
T.default = T;
const Il = T, Ut = /* @__PURE__ */ new Map([
  ["ERR_BAD_OPTION_VALUE", "Invalid or unsupported value provided in axios configuration."],
  ["ERR_BAD_OPTION", "Invalid option provided in axios configuration."],
  ["ECONNABORTED", "Request timed out due to exceeding timeout specified in axios configuration."],
  ["ETIMEDOUT", "Request timed out due to exceeding default axios timelimit."],
  ["ERR_NETWORK", "Network-related issue."],
  [
    "ERR_FR_TOO_MANY_REDIRECTS",
    "Request is redirected too many times; exceeds max redirects specified in axios configuration."
  ],
  ["ERR_DEPRECATED", "Deprecated feature or method used in axios."],
  ["ERR_BAD_RESPONSE", "Response cannot be parsed properly or is in an unexpected format."],
  ["ERR_BAD_REQUEST", "Requested has unexpected format or missing required parameters."],
  ["ERR_CANCELED", "Feature or method is canceled explicitly by the user."],
  ["ERR_NOT_SUPPORT", "Feature or method not supported in the current axios environment."],
  ["ERR_INVALID_URL", "Invalid URL provided for axios request."]
]);
let ql = class {
  constructor(t) {
    var r, n, s, a;
    this.instance = Il.create(t), this.abortControllerMap = /* @__PURE__ */ new Map(), this.interceptorsObj = t.interceptors, this.instance.interceptors.request.use(
      (o) => {
        const i = new AbortController(), f = o.url || "";
        return o.signal = i.signal, this.abortControllerMap.set(f, i), o;
      },
      (o) => o
    ), this.instance.interceptors.request.use(
      (r = this.interceptorsObj) == null ? void 0 : r.requestInterceptors,
      (n = this.interceptorsObj) == null ? void 0 : n.requestInterceptorsCatch
    ), this.instance.interceptors.response.use(
      (s = this.interceptorsObj) == null ? void 0 : s.responseInterceptors,
      (a = this.interceptorsObj) == null ? void 0 : a.responseInterceptorsCatch
    ), this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (o) => {
        const i = o.config.url || "";
        return this.abortControllerMap.delete(i), o.data;
      },
      (o) => o
    );
  }
  request(t) {
    return new Promise((r, n) => {
      var s;
      (s = t.interceptors) != null && s.requestInterceptors && (t = t.interceptors.requestInterceptors(t)), this.instance.request(t).then((a) => {
        var o;
        if (Ut.has(a.code))
          return n(`请求失败：${Ut.get(a.code)}`);
        (o = t.interceptors) != null && o.responseInterceptors && (a = t.interceptors.responseInterceptors(a)), r(a);
      }).catch((a) => {
        n(a);
      });
    });
  }
  /**
   * 取消全部请求
   */
  cancelAllRequest() {
    for (const [, t] of this.abortControllerMap)
      t.abort();
    this.abortControllerMap.clear();
  }
  /**
   * 取消指定的请求
   * @param url 待取消的请求URL
   */
  cancelRequest(t) {
    var n;
    const r = Array.isArray(t) ? t : [t];
    for (const s of r)
      (n = this.abortControllerMap.get(s)) == null || n.abort(), this.abortControllerMap.delete(s);
  }
}, O = null;
const kl = (e) => {
  O = e;
};
export {
  ql as Request,
  Ul as fetch,
  O as requestInstance,
  kl as setup,
  Ml as useFetch
};
//# sourceMappingURL=index.mjs.map
