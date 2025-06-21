var __defProp = Object.defineProperty
  , __defProps = Object.defineProperties
  , __getOwnPropDescs = Object.getOwnPropertyDescriptors
  , __getOwnPropSymbols = Object.getOwnPropertySymbols
  , __hasOwnProp = Object.prototype.hasOwnProperty
  , __propIsEnum = Object.prototype.propertyIsEnumerable
  , __defNormalProp = (e, t, r) => t in e ? __defProp(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , __spreadValues = (e, t) => {
    for (var r in t || (t = {}))
        __hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r]);
    if (__getOwnPropSymbols)
        for (var r of __getOwnPropSymbols(t))
            __propIsEnum.call(t, r) && __defNormalProp(e, r, t[r]);
    return e
}
  , __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t));
!function(e, t, r, n) {
    "use strict";
    const o = "object" == typeof global && global && global.Object === Object && global;
    var i = "object" == typeof self && self && self.Object === Object && self;
    const a = o || i || Function("return this")();
    const d = a.Symbol;
    var u = Object.prototype
      , s = u.hasOwnProperty
      , l = u.toString
      , c = d ? d.toStringTag : void 0;
    var f = Object.prototype.toString;
    var $ = d ? d.toStringTag : void 0;
    function p(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : $ && $ in Object(e) ? function(e) {
            var t = s.call(e, c)
              , r = e[c];
            try {
                e[c] = void 0;
                var n = !0
            } catch (Rn) {}
            var o = l.call(e);
            return n && (t ? e[c] = r : delete e[c]),
            o
        }(e) : function(e) {
            return f.call(e)
        }(e)
    }
    function h(e) {
        return null != e && "object" == typeof e
    }
    function m(e) {
        return "symbol" == typeof e || h(e) && "[object Symbol]" == p(e)
    }
    function _(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
            o[r] = t(e[r], r, e);
        return o
    }
    const y = Array.isArray;
    var v = d ? d.prototype : void 0
      , g = v ? v.toString : void 0;
    function b(e) {
        if ("string" == typeof e)
            return e;
        if (y(e))
            return _(e, b) + "";
        if (m(e))
            return g ? g.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }
    var w = /\s/;
    function C(e) {
        for (var t = e.length; t-- && w.test(e.charAt(t)); )
            ;
        return t
    }
    var P = /^\s+/;
    function S(e) {
        return e ? e.slice(0, C(e) + 1).replace(P, "") : e
    }
    function O(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    var x = /^[-+]0x[0-9a-f]+$/i
      , M = /^0b[01]+$/i
      , E = /^0o[0-7]+$/i
      , D = parseInt;
    var N = 1 / 0;
    function I(e) {
        return e ? (e = function(e) {
            if ("number" == typeof e)
                return e;
            if (m(e))
                return NaN;
            if (O(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = O(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = S(e);
            var r = M.test(e);
            return r || E.test(e) ? D(e.slice(2), r ? 2 : 8) : x.test(e) ? NaN : +e
        }(e)) === N || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
    }
    function T(e) {
        var t = I(e)
          , r = t % 1;
        return t == t ? r ? t - r : t : 0
    }
    function k(e) {
        return e
    }
    function A(e) {
        if (!O(e))
            return !1;
        var t = p(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
    const j = a["__core-js_shared__"];
    var L, R = (L = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "")) ? "Symbol(src)_1." + L : "";
    var F = Function.prototype.toString;
    function B(e) {
        if (null != e) {
            try {
                return F.call(e)
            } catch (Rn) {}
            try {
                return e + ""
            } catch (Rn) {}
        }
        return ""
    }
    var U = /^\[object .+?Constructor\]$/
      , Y = Function.prototype
      , z = Object.prototype
      , W = Y.toString
      , G = z.hasOwnProperty
      , H = RegExp("^" + W.call(G).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function V(e) {
        return !(!O(e) || (t = e,
        R && R in t)) && (A(e) ? H : U).test(B(e));
        var t
    }
    function q(e, t) {
        var r = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return V(r) ? r : void 0
    }
    const K = q(a, "WeakMap");
    var Z = Object.create;
    const J = function() {
        function e() {}
        return function(t) {
            if (!O(t))
                return {};
            if (Z)
                return Z(t);
            e.prototype = t;
            var r = new e;
            return e.prototype = void 0,
            r
        }
    }();
    var X = Date.now;
    var Q = function() {
        try {
            var e = q(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (Rn) {}
    }();
    const ee = Q;
    var te = ee ? function(e, t) {
        return ee(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (r = t,
            function() {
                return r
            }
            ),
            writable: !0
        });
        var r
    }
    : k;
    var re, ne, oe, ie = (re = te,
    ne = 0,
    oe = 0,
    function() {
        var e = X()
          , t = 16 - (e - oe);
        if (oe = e,
        t > 0) {
            if (++ne >= 800)
                return arguments[0]
        } else
            ne = 0;
        return re.apply(void 0, arguments)
    }
    );
    const ae = ie;
    function de(e) {
        return e != e
    }
    function ue(e, t, r) {
        return t == t ? function(e, t, r) {
            for (var n = r - 1, o = e.length; ++n < o; )
                if (e[n] === t)
                    return n;
            return -1
        }(e, t, r) : function(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }(e, de, r)
    }
    var se = /^(?:0|[1-9]\d*)$/;
    function le(e, t) {
        var r = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && se.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    function ce(e, t, r) {
        "__proto__" == t && ee ? ee(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    function fe(e, t) {
        return e === t || e != e && t != t
    }
    var $e = Object.prototype.hasOwnProperty;
    function pe(e, t, r) {
        var n = e[t];
        $e.call(e, t) && fe(n, r) && (void 0 !== r || t in e) || ce(e, t, r)
    }
    var he = Math.max;
    function me(e, t) {
        return ae(function(e, t, r) {
            return t = he(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = he(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var d = Array(t + 1); ++o < t; )
                    d[o] = n[o];
                return d[t] = r(a),
                function(e, t, r) {
                    switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                    }
                    return e.apply(t, r)
                }(e, this, d)
            }
        }(e, t, k), e + "")
    }
    function _e(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function ye(e) {
        return null != e && _e(e.length) && !A(e)
    }
    function ve(e, t, r) {
        if (!O(r))
            return !1;
        var n = typeof t;
        return !!("number" == n ? ye(r) && le(t, r.length) : "string" == n && t in r) && fe(r[t], e)
    }
    var ge = Object.prototype;
    function be(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || ge)
    }
    function we(e) {
        return h(e) && "[object Arguments]" == p(e)
    }
    var Ce = Object.prototype
      , Pe = Ce.hasOwnProperty
      , Se = Ce.propertyIsEnumerable
      , Oe = we(function() {
        return arguments
    }()) ? we : function(e) {
        return h(e) && Pe.call(e, "callee") && !Se.call(e, "callee")
    }
    ;
    const xe = Oe;
    var Me = "object" == typeof exports && exports && !exports.nodeType && exports
      , Ee = Me && "object" == typeof module && module && !module.nodeType && module
      , De = Ee && Ee.exports === Me ? a.Buffer : void 0;
    const Ne = (De ? De.isBuffer : void 0) || function() {
        return !1
    }
    ;
    var Ie = {};
    function Te(e) {
        return function(t) {
            return e(t)
        }
    }
    Ie["[object Float32Array]"] = Ie["[object Float64Array]"] = Ie["[object Int8Array]"] = Ie["[object Int16Array]"] = Ie["[object Int32Array]"] = Ie["[object Uint8Array]"] = Ie["[object Uint8ClampedArray]"] = Ie["[object Uint16Array]"] = Ie["[object Uint32Array]"] = !0,
    Ie["[object Arguments]"] = Ie["[object Array]"] = Ie["[object ArrayBuffer]"] = Ie["[object Boolean]"] = Ie["[object DataView]"] = Ie["[object Date]"] = Ie["[object Error]"] = Ie["[object Function]"] = Ie["[object Map]"] = Ie["[object Number]"] = Ie["[object Object]"] = Ie["[object RegExp]"] = Ie["[object Set]"] = Ie["[object String]"] = Ie["[object WeakMap]"] = !1;
    var ke = "object" == typeof exports && exports && !exports.nodeType && exports
      , Ae = ke && "object" == typeof module && module && !module.nodeType && module
      , je = Ae && Ae.exports === ke && o.process;
    const Le = function() {
        try {
            var e = Ae && Ae.require && Ae.require("util").types;
            return e || je && je.binding && je.binding("util")
        } catch (Rn) {}
    }();
    var Re = Le && Le.isTypedArray;
    const Fe = Re ? Te(Re) : function(e) {
        return h(e) && _e(e.length) && !!Ie[p(e)]
    }
    ;
    var Be = Object.prototype.hasOwnProperty;
    function Ue(e, t) {
        var r = y(e)
          , n = !r && xe(e)
          , o = !r && !n && Ne(e)
          , i = !r && !n && !o && Fe(e)
          , a = r || n || o || i
          , d = a ? function(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }(e.length, String) : []
          , u = d.length;
        for (var s in e)
            !t && !Be.call(e, s) || a && ("length" == s || o && ("offset" == s || "parent" == s) || i && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || le(s, u)) || d.push(s);
        return d
    }
    function Ye(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    const ze = Ye(Object.keys, Object);
    var We = Object.prototype.hasOwnProperty;
    function Ge(e) {
        if (!be(e))
            return ze(e);
        var t = [];
        for (var r in Object(e))
            We.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
    function He(e) {
        return ye(e) ? Ue(e) : Ge(e)
    }
    var Ve = Object.prototype.hasOwnProperty;
    function qe(e) {
        if (!O(e))
            return function(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e))
                        t.push(r);
                return t
            }(e);
        var t = be(e)
          , r = [];
        for (var n in e)
            ("constructor" != n || !t && Ve.call(e, n)) && r.push(n);
        return r
    }
    function Ke(e) {
        return ye(e) ? Ue(e, !0) : qe(e)
    }
    var Ze = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
      , Je = /^\w*$/;
    function Xe(e, t) {
        if (y(e))
            return !1;
        var r = typeof e;
        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !m(e)) || (Je.test(e) || !Ze.test(e) || null != t && e in Object(t))
    }
    const Qe = q(Object, "create");
    var et = Object.prototype.hasOwnProperty;
    var tt = Object.prototype.hasOwnProperty;
    function rt(e) {
        var t = -1
          , r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    function nt(e, t) {
        for (var r = e.length; r--; )
            if (fe(e[r][0], t))
                return r;
        return -1
    }
    rt.prototype.clear = function() {
        this.__data__ = Qe ? Qe(null) : {},
        this.size = 0
    }
    ,
    rt.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0,
        t
    }
    ,
    rt.prototype.get = function(e) {
        var t = this.__data__;
        if (Qe) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return et.call(t, e) ? t[e] : void 0
    }
    ,
    rt.prototype.has = function(e) {
        var t = this.__data__;
        return Qe ? void 0 !== t[e] : tt.call(t, e)
    }
    ,
    rt.prototype.set = function(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        r[e] = Qe && void 0 === t ? "__lodash_hash_undefined__" : t,
        this
    }
    ;
    var ot = Array.prototype.splice;
    function it(e) {
        var t = -1
          , r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    it.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    it.prototype.delete = function(e) {
        var t = this.__data__
          , r = nt(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : ot.call(t, r, 1),
        --this.size,
        !0)
    }
    ,
    it.prototype.get = function(e) {
        var t = this.__data__
          , r = nt(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    ,
    it.prototype.has = function(e) {
        return nt(this.__data__, e) > -1
    }
    ,
    it.prototype.set = function(e, t) {
        var r = this.__data__
          , n = nt(r, e);
        return n < 0 ? (++this.size,
        r.push([e, t])) : r[n][1] = t,
        this
    }
    ;
    const at = q(a, "Map");
    function dt(e, t) {
        var r, n, o = e.__data__;
        return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof t ? "string" : "hash"] : o.map
    }
    function ut(e) {
        var t = -1
          , r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ut.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new rt,
            map: new (at || it),
            string: new rt
        }
    }
    ,
    ut.prototype.delete = function(e) {
        var t = dt(this, e).delete(e);
        return this.size -= t ? 1 : 0,
        t
    }
    ,
    ut.prototype.get = function(e) {
        return dt(this, e).get(e)
    }
    ,
    ut.prototype.has = function(e) {
        return dt(this, e).has(e)
    }
    ,
    ut.prototype.set = function(e, t) {
        var r = dt(this, e)
          , n = r.size;
        return r.set(e, t),
        this.size += r.size == n ? 0 : 1,
        this
    }
    ;
    function st(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t)
            throw new TypeError("Expected a function");
        var r = function() {
            var n = arguments
              , o = t ? t.apply(this, n) : n[0]
              , i = r.cache;
            if (i.has(o))
                return i.get(o);
            var a = e.apply(this, n);
            return r.cache = i.set(o, a) || i,
            a
        };
        return r.cache = new (st.Cache || ut),
        r
    }
    st.Cache = ut;
    var lt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
      , ct = /\\(\\)?/g
      , ft = function(e) {
        var t = st(e, (function(e) {
            return 500 === r.size && r.clear(),
            e
        }
        ))
          , r = t.cache;
        return t
    }((function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""),
        e.replace(lt, (function(e, r, n, o) {
            t.push(n ? o.replace(ct, "$1") : r || e)
        }
        )),
        t
    }
    ));
    const $t = ft;
    function pt(e) {
        return null == e ? "" : b(e)
    }
    function ht(e, t) {
        return y(e) ? e : Xe(e, t) ? [e] : $t(pt(e))
    }
    function mt(e) {
        if ("string" == typeof e || m(e))
            return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }
    function _t(e, t) {
        for (var r = 0, n = (t = ht(t, e)).length; null != e && r < n; )
            e = e[mt(t[r++])];
        return r && r == n ? e : void 0
    }
    function yt(e, t, r) {
        var n = null == e ? void 0 : _t(e, t);
        return void 0 === n ? r : n
    }
    const vt = Ye(Object.getPrototypeOf, Object);
    var gt = Function.prototype
      , bt = Object.prototype
      , wt = gt.toString
      , Ct = bt.hasOwnProperty
      , Pt = wt.call(Object);
    function St(e, t, r) {
        var n = e.length;
        return r = void 0 === r ? n : r,
        !t && r >= n ? e : function(e, t, r) {
            var n = -1
              , o = e.length;
            t < 0 && (t = -t > o ? 0 : o + t),
            (r = r > o ? o : r) < 0 && (r += o),
            o = t > r ? 0 : r - t >>> 0,
            t >>>= 0;
            for (var i = Array(o); ++n < o; )
                i[n] = e[n + t];
            return i
        }(e, t, r)
    }
    var Ot = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    function xt(e) {
        return Ot.test(e)
    }
    var Mt = "\\ud800-\\udfff"
      , Et = "[" + Mt + "]"
      , Dt = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
      , Nt = "\\ud83c[\\udffb-\\udfff]"
      , It = "[^" + Mt + "]"
      , Tt = "(?:\\ud83c[\\udde6-\\uddff]){2}"
      , kt = "[\\ud800-\\udbff][\\udc00-\\udfff]"
      , At = "(?:" + Dt + "|" + Nt + ")" + "?"
      , jt = "[\\ufe0e\\ufe0f]?"
      , Lt = jt + At + ("(?:\\u200d(?:" + [It, Tt, kt].join("|") + ")" + jt + At + ")*")
      , Rt = "(?:" + [It + Dt + "?", Dt, Tt, kt, Et].join("|") + ")"
      , Ft = RegExp(Nt + "(?=" + Nt + ")|" + Rt + Lt, "g");
    function Bt(e) {
        return xt(e) ? function(e) {
            return e.match(Ft) || []
        }(e) : function(e) {
            return e.split("")
        }(e)
    }
    function Ut(e) {
        var t = this.__data__ = new it(e);
        this.size = t.size
    }
    Ut.prototype.clear = function() {
        this.__data__ = new it,
        this.size = 0
    }
    ,
    Ut.prototype.delete = function(e) {
        var t = this.__data__
          , r = t.delete(e);
        return this.size = t.size,
        r
    }
    ,
    Ut.prototype.get = function(e) {
        return this.__data__.get(e)
    }
    ,
    Ut.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ,
    Ut.prototype.set = function(e, t) {
        var r = this.__data__;
        if (r instanceof it) {
            var n = r.__data__;
            if (!at || n.length < 199)
                return n.push([e, t]),
                this.size = ++r.size,
                this;
            r = this.__data__ = new ut(n)
        }
        return r.set(e, t),
        this.size = r.size,
        this
    }
    ;
    var Yt = "object" == typeof exports && exports && !exports.nodeType && exports
      , zt = Yt && "object" == typeof module && module && !module.nodeType && module
      , Wt = zt && zt.exports === Yt ? a.Buffer : void 0
      , Gt = Wt ? Wt.allocUnsafe : void 0;
    var Ht = Object.prototype.propertyIsEnumerable
      , Vt = Object.getOwnPropertySymbols;
    const qt = Vt ? function(e) {
        return null == e ? [] : (e = Object(e),
        function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }(Vt(e), (function(t) {
            return Ht.call(e, t)
        }
        )))
    }
    : function() {
        return []
    }
    ;
    function Kt(e) {
        return function(e, t, r) {
            var n = t(e);
            return y(e) ? n : function(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n; )
                    e[o + r] = t[r];
                return e
            }(n, r(e))
        }(e, He, qt)
    }
    const Zt = q(a, "DataView");
    const Jt = q(a, "Promise");
    const Xt = q(a, "Set");
    var Qt = "[object Map]"
      , er = "[object Promise]"
      , tr = "[object Set]"
      , rr = "[object WeakMap]"
      , nr = "[object DataView]"
      , or = B(Zt)
      , ir = B(at)
      , ar = B(Jt)
      , dr = B(Xt)
      , ur = B(K)
      , sr = p;
    (Zt && sr(new Zt(new ArrayBuffer(1))) != nr || at && sr(new at) != Qt || Jt && sr(Jt.resolve()) != er || Xt && sr(new Xt) != tr || K && sr(new K) != rr) && (sr = function(e) {
        var t = p(e)
          , r = "[object Object]" == t ? e.constructor : void 0
          , n = r ? B(r) : "";
        if (n)
            switch (n) {
            case or:
                return nr;
            case ir:
                return Qt;
            case ar:
                return er;
            case dr:
                return tr;
            case ur:
                return rr
            }
        return t
    }
    );
    const lr = sr;
    const cr = a.Uint8Array;
    function fr(e, t) {
        var r, n, o = t ? (r = e.buffer,
        n = new r.constructor(r.byteLength),
        new cr(n).set(new cr(r)),
        n) : e.buffer;
        return new e.constructor(o,e.byteOffset,e.length)
    }
    function $r(e) {
        var t = -1
          , r = null == e ? 0 : e.length;
        for (this.__data__ = new ut; ++t < r; )
            this.add(e[t])
    }
    function pr(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
            if (t(e[r], r, e))
                return !0;
        return !1
    }
    $r.prototype.add = $r.prototype.push = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"),
        this
    }
    ,
    $r.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ;
    function hr(e, t, r, n, o, i) {
        var a = 1 & r
          , d = e.length
          , u = t.length;
        if (d != u && !(a && u > d))
            return !1;
        var s = i.get(e)
          , l = i.get(t);
        if (s && l)
            return s == t && l == e;
        var c = -1
          , f = !0
          , $ = 2 & r ? new $r : void 0;
        for (i.set(e, t),
        i.set(t, e); ++c < d; ) {
            var p = e[c]
              , h = t[c];
            if (n)
                var m = a ? n(h, p, c, t, e, i) : n(p, h, c, e, t, i);
            if (void 0 !== m) {
                if (m)
                    continue;
                f = !1;
                break
            }
            if ($) {
                if (!pr(t, (function(e, t) {
                    if (a = t,
                    !$.has(a) && (p === e || o(p, e, r, n, i)))
                        return $.push(t);
                    var a
                }
                ))) {
                    f = !1;
                    break
                }
            } else if (p !== h && !o(p, h, r, n, i)) {
                f = !1;
                break
            }
        }
        return i.delete(e),
        i.delete(t),
        f
    }
    function mr(e) {
        var t = -1
          , r = Array(e.size);
        return e.forEach((function(e, n) {
            r[++t] = [n, e]
        }
        )),
        r
    }
    function _r(e) {
        var t = -1
          , r = Array(e.size);
        return e.forEach((function(e) {
            r[++t] = e
        }
        )),
        r
    }
    var yr = d ? d.prototype : void 0
      , vr = yr ? yr.valueOf : void 0;
    var gr = Object.prototype.hasOwnProperty;
    var br = "[object Arguments]"
      , wr = "[object Array]"
      , Cr = "[object Object]"
      , Pr = Object.prototype.hasOwnProperty;
    function Sr(e, t, r, n, o, i) {
        var a = y(e)
          , d = y(t)
          , u = a ? wr : lr(e)
          , s = d ? wr : lr(t)
          , l = (u = u == br ? Cr : u) == Cr
          , c = (s = s == br ? Cr : s) == Cr
          , f = u == s;
        if (f && Ne(e)) {
            if (!Ne(t))
                return !1;
            a = !0,
            l = !1
        }
        if (f && !l)
            return i || (i = new Ut),
            a || Fe(e) ? hr(e, t, r, n, o, i) : function(e, t, r, n, o, i, a) {
                switch (r) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                        return !1;
                    e = e.buffer,
                    t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !i(new cr(e), new cr(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return fe(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var d = mr;
                case "[object Set]":
                    var u = 1 & n;
                    if (d || (d = _r),
                    e.size != t.size && !u)
                        return !1;
                    var s = a.get(e);
                    if (s)
                        return s == t;
                    n |= 2,
                    a.set(e, t);
                    var l = hr(d(e), d(t), n, o, i, a);
                    return a.delete(e),
                    l;
                case "[object Symbol]":
                    if (vr)
                        return vr.call(e) == vr.call(t)
                }
                return !1
            }(e, t, u, r, n, o, i);
        if (!(1 & r)) {
            var $ = l && Pr.call(e, "__wrapped__")
              , p = c && Pr.call(t, "__wrapped__");
            if ($ || p) {
                var h = $ ? e.value() : e
                  , m = p ? t.value() : t;
                return i || (i = new Ut),
                o(h, m, r, n, i)
            }
        }
        return !!f && (i || (i = new Ut),
        function(e, t, r, n, o, i) {
            var a = 1 & r
              , d = Kt(e)
              , u = d.length;
            if (u != Kt(t).length && !a)
                return !1;
            for (var s = u; s--; ) {
                var l = d[s];
                if (!(a ? l in t : gr.call(t, l)))
                    return !1
            }
            var c = i.get(e)
              , f = i.get(t);
            if (c && f)
                return c == t && f == e;
            var $ = !0;
            i.set(e, t),
            i.set(t, e);
            for (var p = a; ++s < u; ) {
                var h = e[l = d[s]]
                  , m = t[l];
                if (n)
                    var _ = a ? n(m, h, l, t, e, i) : n(h, m, l, e, t, i);
                if (!(void 0 === _ ? h === m || o(h, m, r, n, i) : _)) {
                    $ = !1;
                    break
                }
                p || (p = "constructor" == l)
            }
            if ($ && !p) {
                var y = e.constructor
                  , v = t.constructor;
                y == v || !("constructor"in e) || !("constructor"in t) || "function" == typeof y && y instanceof y && "function" == typeof v && v instanceof v || ($ = !1)
            }
            return i.delete(e),
            i.delete(t),
            $
        }(e, t, r, n, o, i))
    }
    function Or(e, t, r, n, o) {
        return e === t || (null == e || null == t || !h(e) && !h(t) ? e != e && t != t : Sr(e, t, r, n, Or, o))
    }
    function xr(e) {
        return e == e && !O(e)
    }
    function Mr(e, t) {
        return function(r) {
            return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
        }
    }
    function Er(e) {
        var t = function(e) {
            for (var t = He(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, xr(o)]
            }
            return t
        }(e);
        return 1 == t.length && t[0][2] ? Mr(t[0][0], t[0][1]) : function(r) {
            return r === e || function(e, t, r, n) {
                var o = r.length
                  , i = o
                  , a = !n;
                if (null == e)
                    return !i;
                for (e = Object(e); o--; ) {
                    var d = r[o];
                    if (a && d[2] ? d[1] !== e[d[0]] : !(d[0]in e))
                        return !1
                }
                for (; ++o < i; ) {
                    var u = (d = r[o])[0]
                      , s = e[u]
                      , l = d[1];
                    if (a && d[2]) {
                        if (void 0 === s && !(u in e))
                            return !1
                    } else {
                        var c = new Ut;
                        if (n)
                            var f = n(s, l, u, e, t, c);
                        if (!(void 0 === f ? Or(l, s, 3, n, c) : f))
                            return !1
                    }
                }
                return !0
            }(r, e, t)
        }
    }
    function Dr(e, t) {
        return null != e && t in Object(e)
    }
    function Nr(e, t) {
        return null != e && function(e, t, r) {
            for (var n = -1, o = (t = ht(t, e)).length, i = !1; ++n < o; ) {
                var a = mt(t[n]);
                if (!(i = null != e && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : !!(o = null == e ? 0 : e.length) && _e(o) && le(a, o) && (y(e) || xe(e))
        }(e, t, Dr)
    }
    var Ir;
    function Tr(e) {
        return Xe(e) ? (t = mt(e),
        function(e) {
            return null == e ? void 0 : e[t]
        }
        ) : function(e) {
            return function(t) {
                return _t(t, e)
            }
        }(e);
        var t
    }
    function kr(e) {
        return "function" == typeof e ? e : null == e ? k : "object" == typeof e ? y(e) ? (t = e[0],
        r = e[1],
        Xe(t) && xr(r) ? Mr(mt(t), r) : function(e) {
            var n = yt(e, t);
            return void 0 === n && n === r ? Nr(e, t) : Or(r, n, 3)
        }
        ) : Er(e) : Tr(e);
        var t, r
    }
    const Ar = function(e, t, r) {
        for (var n = -1, o = Object(e), i = r(e), a = i.length; a--; ) {
            var d = i[Ir ? a : ++n];
            if (!1 === t(o[d], d, o))
                break
        }
        return e
    };
    var jr = function(e, t) {
        return function(r, n) {
            if (null == r)
                return r;
            if (!ye(r))
                return e(r, n);
            for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && !1 !== n(a[i], i, a); )
                ;
            return r
        }
    }((function(e, t) {
        return e && Ar(e, t, He)
    }
    ));
    const Lr = jr;
    function Rr(e, t, r) {
        (void 0 !== r && !fe(e[t], r) || void 0 === r && !(t in e)) && ce(e, t, r)
    }
    function Fr(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
            return e[t]
    }
    function Br(e) {
        return function(e, t, r, n) {
            var o = !r;
            r || (r = {});
            for (var i = -1, a = t.length; ++i < a; ) {
                var d = t[i]
                  , u = n ? n(r[d], e[d], d, r, e) : void 0;
                void 0 === u && (u = e[d]),
                o ? ce(r, d, u) : pe(r, d, u)
            }
            return r
        }(e, Ke(e))
    }
    function Ur(e, t, r, n, o, i, a) {
        var d = Fr(e, r)
          , u = Fr(t, r)
          , s = a.get(u);
        if (s)
            Rr(e, r, s);
        else {
            var l, c = i ? i(d, u, r + "", e, t, a) : void 0, f = void 0 === c;
            if (f) {
                var $ = y(u)
                  , m = !$ && Ne(u)
                  , _ = !$ && !m && Fe(u);
                c = u,
                $ || m || _ ? y(d) ? c = d : h(l = d) && ye(l) ? c = function(e, t) {
                    var r = -1
                      , n = e.length;
                    for (t || (t = Array(n)); ++r < n; )
                        t[r] = e[r];
                    return t
                }(d) : m ? (f = !1,
                c = function(e, t) {
                    if (t)
                        return e.slice();
                    var r = e.length
                      , n = Gt ? Gt(r) : new e.constructor(r);
                    return e.copy(n),
                    n
                }(u, !0)) : _ ? (f = !1,
                c = fr(u, !0)) : c = [] : function(e) {
                    if (!h(e) || "[object Object]" != p(e))
                        return !1;
                    var t = vt(e);
                    if (null === t)
                        return !0;
                    var r = Ct.call(t, "constructor") && t.constructor;
                    return "function" == typeof r && r instanceof r && wt.call(r) == Pt
                }(u) || xe(u) ? (c = d,
                xe(d) ? c = Br(d) : O(d) && !A(d) || (c = function(e) {
                    return "function" != typeof e.constructor || be(e) ? {} : J(vt(e))
                }(u))) : f = !1
            }
            f && (a.set(u, c),
            o(c, u, n, i, a),
            a.delete(u)),
            Rr(e, r, c)
        }
    }
    function Yr(e, t, r, n, o) {
        e !== t && Ar(t, (function(i, a) {
            if (o || (o = new Ut),
            O(i))
                Ur(e, t, a, r, Yr, n, o);
            else {
                var d = n ? n(Fr(e, a), i, a + "", e, t, o) : void 0;
                void 0 === d && (d = i),
                Rr(e, a, d)
            }
        }
        ), Ke)
    }
    function zr(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
            if (!t(e[r], r, e))
                return !1;
        return !0
    }
    function Wr(e, t) {
        var r = !0;
        return Lr(e, (function(e, n, o) {
            return r = !!t(e, n, o)
        }
        )),
        r
    }
    function Gr(e) {
        return null == e ? [] : function(e, t) {
            return _(t, (function(t) {
                return e[t]
            }
            ))
        }(e, He(e))
    }
    var Hr = Math.max;
    function Vr(e, t, r, n) {
        e = ye(e) ? e : Gr(e),
        r = r && !n ? T(r) : 0;
        var o = e.length;
        return r < 0 && (r = Hr(o + r, 0)),
        function(e) {
            return "string" == typeof e || !y(e) && h(e) && "[object String]" == p(e)
        }(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && ue(e, t, r) > -1
    }
    var qr = Object.prototype.hasOwnProperty;
    function Kr(e) {
        if (null == e)
            return !0;
        if (ye(e) && (y(e) || "string" == typeof e || "function" == typeof e.splice || Ne(e) || Fe(e) || xe(e)))
            return !e.length;
        var t = lr(e);
        if ("[object Map]" == t || "[object Set]" == t)
            return !e.size;
        if (be(e))
            return !Ge(e).length;
        for (var r in e)
            if (qr.call(e, r))
                return !1;
        return !0
    }
    function Zr(e) {
        return null == e
    }
    var Jr = Le && Le.isRegExp;
    const Xr = Jr ? Te(Jr) : function(e) {
        return h(e) && "[object RegExp]" == p(e)
    }
    ;
    var Qr;
    const en = (Qr = function(e, t, r) {
        Yr(e, t, r)
    }
    ,
    me((function(e, t) {
        var r = -1
          , n = t.length
          , o = n > 1 ? t[n - 1] : void 0
          , i = n > 2 ? t[2] : void 0;
        for (o = Qr.length > 3 && "function" == typeof o ? (n--,
        o) : void 0,
        i && ve(t[0], t[1], i) && (o = n < 3 ? void 0 : o,
        n = 1),
        e = Object(e); ++r < n; ) {
            var a = t[r];
            a && Qr(e, a, r, o)
        }
        return e
    }
    )));
    function tn(e, t, r) {
        return null == e ? e : function(e, t, r, n) {
            if (!O(e))
                return e;
            for (var o = -1, i = (t = ht(t, e)).length, a = i - 1, d = e; null != d && ++o < i; ) {
                var u = mt(t[o])
                  , s = r;
                if ("__proto__" === u || "constructor" === u || "prototype" === u)
                    return e;
                if (o != a) {
                    var l = d[u];
                    void 0 === (s = n ? n(l, u, d) : void 0) && (s = O(l) ? l : le(t[o + 1]) ? [] : {})
                }
                pe(d, u, s),
                d = d[u]
            }
            return e
        }(e, t, r)
    }
    function rn(e, t) {
        var r;
        return Lr(e, (function(e, n, o) {
            return !(r = t(e, n, o))
        }
        )),
        !!r
    }
    function nn(e, t, r) {
        return r && "number" != typeof r && ve(e, t, r) && (t = r = void 0),
        (r = void 0 === r ? 4294967295 : r >>> 0) ? (e = pt(e)) && ("string" == typeof t || null != t && !Xr(t)) && !(t = b(t)) && xt(e) ? St(Bt(e), 0, r) : e.split(t, r) : []
    }
    function on(e, t) {
        for (var r = e.length; r-- && ue(t, e[r], 0) > -1; )
            ;
        return r
    }
    function an(e, t, r) {
        if ((e = pt(e)) && (r || void 0 === t))
            return S(e);
        if (!e || !(t = b(t)))
            return e;
        var n = Bt(e)
          , o = Bt(t)
          , i = function(e, t) {
            for (var r = -1, n = e.length; ++r < n && ue(t, e[r], 0) > -1; )
                ;
            return r
        }(n, o);
        return St(n, i, on(n, o) + 1).join("")
    }
    function dn(e, t, r) {
        if ((e = pt(e)) && (r || void 0 === t))
            return e.slice(0, C(e) + 1);
        if (!e || !(t = b(t)))
            return e;
        var n = Bt(e);
        return St(n, 0, on(n, Bt(t)) + 1).join("")
    }
    const un = {
        VITE_APP_ENV: "production",
        VITE_MOCK_LOGIN_UID: "10000155",
        VITE_API_URL: "https://api.ecomsend.com",
        VITE_API_URL_GO: "https://ecomsend-go.ecomsend.com",
        VITE_SHOPIFY_API_KEY: "bda73e80e3a30463cb353d7ee7aa3edc",
        VITE_DEFAULT_LANG: "en",
        VITE_ENABLE_HTTP_REPLACE_HTTPS: "true",
        VITE_I18N_DEBUG: "false",
        VITE_COOKIE_NAME_PREFIX: "ecomsend_",
        VITE_EXTENSION_UUID: "a5670cf8-5705-4b01-ad9e-447033feae26",
        VITE_PLUGIN_IS_PREVIEW: "false",
        VITE_CHANNELWILL_PAGE_URL: "https://aio-apps.channelwill.com",
        BASE_URL: "/",
        MODE: "production",
        DEV: !1,
        PROD: !0,
        SSR: !1
    }
      , sn = {
        get env() {
            return un.VITE_APP_ENV
        },
        get mode() {
            return un.MODE
        },
        get isDev() {
            return un.DEV
        },
        get isProd() {
            return un.PROD
        },
        get mockLoginUid() {
            return Number(un.VITE_MOCK_LOGIN_UID)
        },
        get apiURL() {
            return un.VITE_API_URL
        },
        get apiURLGo() {
            return un.VITE_API_URL_GO
        },
        get shopifyApiKey() {
            return un.VITE_SHOPIFY_API_KEY
        },
        get defaultLang() {
            return un.VITE_DEFAULT_LANG
        },
        get enableHttpReplaceHttps() {
            return "true" === un.VITE_ENABLE_HTTP_REPLACE_HTTPS
        },
        get extensionUUID() {
            return un.VITE_EXTENSION_UUID
        },
        get i18nDebug() {
            return "true" === un.VITE_I18N_DEBUG
        },
        get cookieNamePrefix() {
            return un.VITE_COOKIE_NAME_PREFIX
        },
        get pluginIsPreview() {
            return "true" === un.VITE_PLUGIN_IS_PREVIEW
        },
        get pluginBuildTime() {
            return un.VITE_PLUGIN_BUILD_TIME
        }
    }
      , ln = new URLSearchParams(window.location.search)
      , cn = yt(window, "EcomSendApps.common.shop.id", ln.get("shop-id"))
      , fn = `${sn.apiURL}/v2/store-frontend/${cn}/popups`
      , $n = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
      , pn = {
        getConfig: async e => new Promise(( (t, r) => {
            (async (e="", t={}, r="GET") => {
                let n = {
                    method: r,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    }
                };
                if ("GET" == (r = r.toUpperCase())) {
                    let r = "";
                    Object.keys(t).forEach((e => {
                        r += e + "=" + t[e] + "&"
                    }
                    )),
                    "" !== r && (r = r.substr(0, r.lastIndexOf("&")),
                    e = e + "?" + r)
                }
                "POST" == r && Object.defineProperty(n, "body", {
                    value: JSON.stringify(t)
                });
                try {
                    const t = await fetch(e, n);
                    return await t.json()
                } catch (o) {
                    throw new Error(o)
                }
            }
            )(`${fn}/${e || ""}`).then((e => {
                t(e)
            }
            )).catch((e => {
                r(e)
            }
            ))
        }
        )),
        async subscribed(e) {
            const {popupId: t, email: r, first_name: n, last_name: o, phone: i, birthday: a, gdpr: d, tcpa: u, year: s, month: l, day: c} = e
              , f = {
                email: r,
                first_name: n,
                last_name: o,
                phone: i || void 0,
                gdpr: d,
                tcpa: u,
                birthday: a,
                locale: window.shopLocale,
                referrer: window.location.href
            }
              , $ = await fetch(`${fn}/${t}/draw`, {
                body: JSON.stringify(f),
                headers: $n,
                cache: "no-cache",
                method: "POST"
            });
            return {
                data: await $.json(),
                status: $.status
            }
        },
        sendReport(e, t) {
            const r = {
                popup_id: e
            };
            fetch(`${fn}/${e}/hello`, {
                body: JSON.stringify(r),
                cache: "no-cache",
                headers: $n,
                method: "POST"
            }).then((e => null))
        }
    };
    var hn = (e => (e[e.ANY = 0] = "ANY",
    e[e.IN = 1] = "IN",
    e[e.NOTIN = 2] = "NOTIN",
    e))(hn || {})
      , mn = (e => (e[e.ALL = 0] = "ALL",
    e[e.PERIOD = 1] = "PERIOD",
    e))(mn || {})
      , _n = (e => (e.PercentageOff = "0",
    e.FixedAmount = "1",
    e.FreeShipping = "2",
    e))(_n || {})
      , yn = (e => (e.LEFT = "left",
    e.RIGHT = "right",
    e))(yn || {})
      , vn = (e => (e[e.AFTER_POPUP_IS_CLOSED = 0] = "AFTER_POPUP_IS_CLOSED",
    e[e.BEFORE_DISPLAYING_POPUP = 2] = "BEFORE_DISPLAYING_POPUP",
    e[e.AFTER_POPUP_IS_CLOSED_AND_BEFORE_DISPLAYING_POPUP = 4] = "AFTER_POPUP_IS_CLOSED_AND_BEFORE_DISPLAYING_POPUP",
    e))(vn || {})
      , gn = (e => (e[e.Timer = 0] = "Timer",
    e[e.ExitingPage = 1] = "ExitingPage",
    e[e.ScrollingPage = 2] = "ScrollingPage",
    e))(gn || {})
      , bn = (e => (e[e.EveryTime = 0] = "EveryTime",
    e[e.Limit = 1] = "Limit",
    e))(bn || {})
      , wn = (e => (e.Minute = "minute",
    e.Hour = "hour",
    e.Day = "day",
    e.Week = "week",
    e.Month = "month",
    e.Year = "year",
    e))(wn || {})
      , Cn = (e => (e.All = "all",
    e.Desktop = "desktop",
    e.Mobile = "mobile",
    e))(Cn || {})
      , Pn = (e => (e[e.AnyPage = 0] = "AnyPage",
    e[e.SpecificPage = 1] = "SpecificPage",
    e))(Pn || {})
      , Sn = (e => (e.Equals = "0",
    e.DoesNotEqual = "1",
    e.Contains = "2",
    e.DoesNotContain = "3",
    e.IsHomepage = "4",
    e.IsNotHomepage = "5",
    e))(Sn || {})
      , On = (e => (e[e.OR = 0] = "OR",
    e[e.AND = 1] = "AND",
    e))(On || {})
      , xn = (e => (e.NAME = "name",
    e.EMAIL = "email",
    e.PHONE = "phone",
    e.GDPR = "gdpr",
    e.TCPA = "tcpa",
    e.BIRTHDAY = "birthday",
    e))(xn || {})
      , Mn = (e => (e.BOTH = "both",
    e.FIRST = "first_name",
    e.LAST = "last_name",
    e))(Mn || {})
      , En = (e => (e.SUBMIT = "submit",
    e.CLOSE = "close",
    e.LINK = "url",
    e))(En || {})
      , Dn = (e => (e.MMDDYYYY = "MM/DD/YYYY",
    e.DDMMYYYY = "DD/MM/YYYY",
    e.YYYYMMDD = "YYYY/MM/DD",
    e))(Dn || {})
      , Nn = (e => (e[e.Close = 0] = "Close",
    e[e.OpenSpecificPage = 1] = "OpenSpecificPage",
    e))(Nn || {})
      , In = (e => (e.SpinWheel = "spin-wheel",
    e.OptIn = "opt-in",
    e))(In || {});
    const Tn = {
        rules: {
            rewards: [{
                label: "10% OFF",
                chance: 40,
                discount_coupon: {
                    value: "discount_code",
                    discount_code: {
                        ttl: 1,
                        type: "1",
                        value: 100,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }, {
                label: "No luck",
                chance: 0,
                discount_coupon: {
                    value: "no_discount",
                    discount_code: {
                        ttl: 1,
                        type: "0",
                        value: 0,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }, {
                label: "15% OFF",
                chance: 30,
                discount_coupon: {
                    value: "discount_code",
                    discount_code: {
                        ttl: 1,
                        type: "0",
                        value: 15,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }, {
                label: "Sorry...",
                chance: 0,
                discount_coupon: {
                    value: "no_discount",
                    discount_code: {
                        ttl: 1,
                        type: "0",
                        value: 0,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }, {
                label: "Free shipping",
                chance: 30,
                discount_coupon: {
                    value: "discount_code",
                    discount_code: {
                        ttl: 1,
                        type: "2",
                        value: 0,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }, {
                label: "Almost",
                chance: 0,
                discount_coupon: {
                    value: "no_discount",
                    discount_code: {
                        ttl: 1,
                        type: "0",
                        value: 0,
                        has_ttl: !1
                    },
                    manually_code: ""
                }
            }],
            discount_coupon: {
                discount_code: {
                    has_ttl: !0,
                    ttl: 1,
                    type: _n.PercentageOff,
                    value: 10
                },
                manually_code: "",
                value: "discount_code"
            },
            marketing_branding: {
                remove_powered_by: !1
            },
            location: {
                in: [],
                type: 0,
                not_in: []
            },
            schedule: {
                type: 0,
                end_unix: -1,
                start_unix: -1,
                has_end_unix: !1
            },
            page_display_rules: {
                match_mode: On.OR,
                specific_page: [{
                    operator: Sn.Equals,
                    type: "url",
                    value: ""
                }],
                type: Pn.AnyPage
            },
            sidebar_widget: {
                show: !1,
                show_position: yn.LEFT
            },
            sticky_discount_bar: !1,
            trigger: {
                devices: Cn.All,
                frequency: {
                    limit: {
                        per: wn.Day,
                        value: 2
                    },
                    type: bn.EveryTime
                },
                when: {
                    scroll_offset: 50,
                    timeout: 0,
                    type: gn.Timer
                }
            }
        },
        style: {
            colors: {
                checkbox: "#454545",
                input: "#121212",
                error_color: "#D72C0D",
                footer_text_color: "#6D7175",
                popup_background_color: "#FFFFFF",
                primary_button_background_color: "#202223",
                primary_button_text_color: "#FFFFFF",
                secondary_button: "#202223",
                sidebar_widget_background_color: "#202223",
                sidebar_widget_text_color: "#FFFFFF",
                sticky_discount_bar_background_color: "#121127",
                sticky_discount_bar_text_color: "#FFFFFF",
                text_description_color: "#6D7175",
                text_heading_color: "#202223",
                wheel: {}
            },
            css: "body{color:red}",
            display: {
                align: "center",
                corner_radius: "standard",
                size: "standard"
            },
            layout: {
                image_position: "none",
                image_mobile_position: "none",
                image_url: "",
                hide_on_mobile: !1
            },
            logo: {
                url: "",
                width: 65
            }
        },
        text: {
            error_text: {
                already_subscribed: "You have already subscribed",
                first_name: "Please enter your first name",
                invalid_email: "Please enter valid email address!",
                last_name: "Please enter your last name",
                submit_error: "Sorry, please try again later",
                phone_number: "Please enter valid phone number",
                policy_not_checked: "Please check the policy"
            },
            sidebar_widget: {
                button_text: "Get 10% OFF"
            },
            start_status: {
                heading: "Get 10% OFF your order",
                description: "Sign up and unlock your instant discount.",
                footer_text: "You are signing up to receive communication via email and can unsubscribe at any time.",
                actions: {
                    primary_btn: {
                        link: "",
                        text: "Claim discount",
                        action: En.SUBMIT,
                        enabled: !0,
                        new_context: !0
                    },
                    secondary_btn: {
                        link: "",
                        text: "No, thanks",
                        action: En.CLOSE,
                        enabled: !0,
                        new_context: !0
                    }
                },
                forms: {
                    email: {
                        enabled: !0,
                        required: !0,
                        placeholder: "Email address"
                    },
                    gdpr: {
                        content: "<p>I agree to receive marketing emails</p>",
                        enabled: !1
                    },
                    name: {
                        layout: "vertical",
                        enabled: !1,
                        field_type: Mn.BOTH,
                        first_name: {
                            required: !0,
                            placeholder: "First name"
                        },
                        last_name: {
                            required: !0,
                            placeholder: "Last name"
                        }
                    },
                    phone: {
                        country: "US",
                        enabled: !1,
                        required: !0,
                        placeholder: "Phone number"
                    },
                    tcpa: {
                        content: "<p>By signing up, you agree to receive recurring automated marketing messages at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Msg frequency varies. Msg & data rates may apply. View Privacy Policy & Terms.</p>",
                        enabled: !1
                    },
                    birthday: {
                        day: {
                            placeholder: "DD"
                        },
                        enabled: !1,
                        format: "MM/DD/YYYY",
                        month: {
                            placeholder: "MM"
                        },
                        label: "Birthday",
                        required: !0,
                        year: {
                            placeholder: "YYYY"
                        }
                    }
                },
                forms_index: [xn.EMAIL]
            },
            sticky_discount_bar: {
                description: "Don't forget to use your discount code"
            },
            success_status: {
                button_action: {
                    enabled: !0,
                    open_specific_page: "",
                    open_specific_page_new_window: !1,
                    type: Nn.Close
                },
                button_text: "Shop now",
                description: "Thanks for subscribing. Copy your discount code and apply to your next order.",
                heading: "Discount unlocked 🎉"
            }
        },
        template: {
            id: 1,
            slug: 'opt-in__1"',
            type: In.OptIn
        }
    };
    var kn, An;
    let jn = (kn = e.action.bound,
    Ln = (An = class {
        constructor() {
            this.template = Tn.template,
            this.rules = Tn.rules,
            this.text = Tn.text,
            this.style = Tn.style,
            this.discount_code = void 0,
            this.id = 0,
            e.makeAutoObservable(this)
        }
        setStoreConfig(e) {
            this.id = e.id,
            this.rules = e.rules,
            this.text = e.text,
            this.style = e.style,
            e.template && (this.template = e.template)
        }
        setConfig(e, t) {
            tn(this, e, t)
        }
    }
    ).prototype,
    Rn = "setStoreConfig",
    Fn = [kn],
    Bn = Object.getOwnPropertyDescriptor(An.prototype, "setStoreConfig"),
    Un = An.prototype,
    Yn = {},
    Object.keys(Bn).forEach((function(e) {
        Yn[e] = Bn[e]
    }
    )),
    Yn.enumerable = !!Yn.enumerable,
    Yn.configurable = !!Yn.configurable,
    ("value"in Yn || Yn.initializer) && (Yn.writable = !0),
    Yn = Fn.slice().reverse().reduce((function(e, t) {
        return t(Ln, Rn, e) || e
    }
    ), Yn),
    Un && void 0 !== Yn.initializer && (Yn.value = Yn.initializer ? Yn.initializer.call(Un) : void 0,
    Yn.initializer = void 0),
    void 0 === Yn.initializer && Object.defineProperty(Ln, Rn, Yn),
    An);
    var Ln, Rn, Fn, Bn, Un, Yn, zn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Wn(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Gn = {
        exports: {}
    };
    Gn.exports = function() {
        var e = 1e3
          , t = 6e4
          , r = 36e5
          , n = "millisecond"
          , o = "second"
          , i = "minute"
          , a = "hour"
          , d = "day"
          , u = "week"
          , s = "month"
          , l = "quarter"
          , c = "year"
          , f = "date"
          , $ = "Invalid Date"
          , p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , m = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(e) {
                var t = ["th", "st", "nd", "rd"]
                  , r = e % 100;
                return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]"
            }
        }
          , _ = function(e, t, r) {
            var n = String(e);
            return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
        }
          , y = {
            s: _,
            z: function(e) {
                var t = -e.utcOffset()
                  , r = Math.abs(t)
                  , n = Math.floor(r / 60)
                  , o = r % 60;
                return (t <= 0 ? "+" : "-") + _(n, 2, "0") + ":" + _(o, 2, "0")
            },
            m: function e(t, r) {
                if (t.date() < r.date())
                    return -e(r, t);
                var n = 12 * (r.year() - t.year()) + (r.month() - t.month())
                  , o = t.clone().add(n, s)
                  , i = r - o < 0
                  , a = t.clone().add(n + (i ? -1 : 1), s);
                return +(-(n + (r - o) / (i ? o - a : a - o)) || 0)
            },
            a: function(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            },
            p: function(e) {
                return {
                    M: s,
                    y: c,
                    w: u,
                    d: d,
                    D: f,
                    h: a,
                    m: i,
                    s: o,
                    ms: n,
                    Q: l
                }[e] || String(e || "").toLowerCase().replace(/s$/, "")
            },
            u: function(e) {
                return void 0 === e
            }
        }
          , v = "en"
          , g = {};
        g[v] = m;
        var b = "$isDayjsObject"
          , w = function(e) {
            return e instanceof O || !(!e || !e[b])
        }
          , C = function e(t, r, n) {
            var o;
            if (!t)
                return v;
            if ("string" == typeof t) {
                var i = t.toLowerCase();
                g[i] && (o = i),
                r && (g[i] = r,
                o = i);
                var a = t.split("-");
                if (!o && a.length > 1)
                    return e(a[0])
            } else {
                var d = t.name;
                g[d] = t,
                o = d
            }
            return !n && o && (v = o),
            o || !n && v
        }
          , P = function(e, t) {
            if (w(e))
                return e.clone();
            var r = "object" == typeof t ? t : {};
            return r.date = e,
            r.args = arguments,
            new O(r)
        }
          , S = y;
        S.l = C,
        S.i = w,
        S.w = function(e, t) {
            return P(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset
            })
        }
        ;
        var O = function() {
            function m(e) {
                this.$L = C(e.locale, null, !0),
                this.parse(e),
                this.$x = this.$x || e.x || {},
                this[b] = !0
            }
            var _ = m.prototype;
            return _.parse = function(e) {
                this.$d = function(e) {
                    var t = e.date
                      , r = e.utc;
                    if (null === t)
                        return new Date(NaN);
                    if (S.u(t))
                        return new Date;
                    if (t instanceof Date)
                        return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                        var n = t.match(p);
                        if (n) {
                            var o = n[2] - 1 || 0
                              , i = (n[7] || "0").substring(0, 3);
                            return r ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)) : new Date(n[1],o,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,i)
                        }
                    }
                    return new Date(t)
                }(e),
                this.init()
            }
            ,
            _.init = function() {
                var e = this.$d;
                this.$y = e.getFullYear(),
                this.$M = e.getMonth(),
                this.$D = e.getDate(),
                this.$W = e.getDay(),
                this.$H = e.getHours(),
                this.$m = e.getMinutes(),
                this.$s = e.getSeconds(),
                this.$ms = e.getMilliseconds()
            }
            ,
            _.$utils = function() {
                return S
            }
            ,
            _.isValid = function() {
                return !(this.$d.toString() === $)
            }
            ,
            _.isSame = function(e, t) {
                var r = P(e);
                return this.startOf(t) <= r && r <= this.endOf(t)
            }
            ,
            _.isAfter = function(e, t) {
                return P(e) < this.startOf(t)
            }
            ,
            _.isBefore = function(e, t) {
                return this.endOf(t) < P(e)
            }
            ,
            _.$g = function(e, t, r) {
                return S.u(e) ? this[t] : this.set(r, e)
            }
            ,
            _.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            _.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            _.startOf = function(e, t) {
                var r = this
                  , n = !!S.u(t) || t
                  , l = S.p(e)
                  , $ = function(e, t) {
                    var o = S.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y,t,e), r);
                    return n ? o : o.endOf(d)
                }
                  , p = function(e, t) {
                    return S.w(r.toDate()[e].apply(r.toDate("s"), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), r)
                }
                  , h = this.$W
                  , m = this.$M
                  , _ = this.$D
                  , y = "set" + (this.$u ? "UTC" : "");
                switch (l) {
                case c:
                    return n ? $(1, 0) : $(31, 11);
                case s:
                    return n ? $(1, m) : $(0, m + 1);
                case u:
                    var v = this.$locale().weekStart || 0
                      , g = (h < v ? h + 7 : h) - v;
                    return $(n ? _ - g : _ + (6 - g), m);
                case d:
                case f:
                    return p(y + "Hours", 0);
                case a:
                    return p(y + "Minutes", 1);
                case i:
                    return p(y + "Seconds", 2);
                case o:
                    return p(y + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            _.endOf = function(e) {
                return this.startOf(e, !1)
            }
            ,
            _.$set = function(e, t) {
                var r, u = S.p(e), l = "set" + (this.$u ? "UTC" : ""), $ = (r = {},
                r[d] = l + "Date",
                r[f] = l + "Date",
                r[s] = l + "Month",
                r[c] = l + "FullYear",
                r[a] = l + "Hours",
                r[i] = l + "Minutes",
                r[o] = l + "Seconds",
                r[n] = l + "Milliseconds",
                r)[u], p = u === d ? this.$D + (t - this.$W) : t;
                if (u === s || u === c) {
                    var h = this.clone().set(f, 1);
                    h.$d[$](p),
                    h.init(),
                    this.$d = h.set(f, Math.min(this.$D, h.daysInMonth())).$d
                } else
                    $ && this.$d[$](p);
                return this.init(),
                this
            }
            ,
            _.set = function(e, t) {
                return this.clone().$set(e, t)
            }
            ,
            _.get = function(e) {
                return this[S.p(e)]()
            }
            ,
            _.add = function(n, l) {
                var f, $ = this;
                n = Number(n);
                var p = S.p(l)
                  , h = function(e) {
                    var t = P($);
                    return S.w(t.date(t.date() + Math.round(e * n)), $)
                };
                if (p === s)
                    return this.set(s, this.$M + n);
                if (p === c)
                    return this.set(c, this.$y + n);
                if (p === d)
                    return h(1);
                if (p === u)
                    return h(7);
                var m = (f = {},
                f[i] = t,
                f[a] = r,
                f[o] = e,
                f)[p] || 1
                  , _ = this.$d.getTime() + n * m;
                return S.w(_, this)
            }
            ,
            _.subtract = function(e, t) {
                return this.add(-1 * e, t)
            }
            ,
            _.format = function(e) {
                var t = this
                  , r = this.$locale();
                if (!this.isValid())
                    return r.invalidDate || $;
                var n = e || "YYYY-MM-DDTHH:mm:ssZ"
                  , o = S.z(this)
                  , i = this.$H
                  , a = this.$m
                  , d = this.$M
                  , u = r.weekdays
                  , s = r.months
                  , l = r.meridiem
                  , c = function(e, r, o, i) {
                    return e && (e[r] || e(t, n)) || o[r].slice(0, i)
                }
                  , f = function(e) {
                    return S.s(i % 12 || 12, e, "0")
                }
                  , p = l || function(e, t, r) {
                    var n = e < 12 ? "AM" : "PM";
                    return r ? n.toLowerCase() : n
                }
                ;
                return n.replace(h, (function(e, n) {
                    return n || function(e) {
                        switch (e) {
                        case "YY":
                            return String(t.$y).slice(-2);
                        case "YYYY":
                            return S.s(t.$y, 4, "0");
                        case "M":
                            return d + 1;
                        case "MM":
                            return S.s(d + 1, 2, "0");
                        case "MMM":
                            return c(r.monthsShort, d, s, 3);
                        case "MMMM":
                            return c(s, d);
                        case "D":
                            return t.$D;
                        case "DD":
                            return S.s(t.$D, 2, "0");
                        case "d":
                            return String(t.$W);
                        case "dd":
                            return c(r.weekdaysMin, t.$W, u, 2);
                        case "ddd":
                            return c(r.weekdaysShort, t.$W, u, 3);
                        case "dddd":
                            return u[t.$W];
                        case "H":
                            return String(i);
                        case "HH":
                            return S.s(i, 2, "0");
                        case "h":
                            return f(1);
                        case "hh":
                            return f(2);
                        case "a":
                            return p(i, a, !0);
                        case "A":
                            return p(i, a, !1);
                        case "m":
                            return String(a);
                        case "mm":
                            return S.s(a, 2, "0");
                        case "s":
                            return String(t.$s);
                        case "ss":
                            return S.s(t.$s, 2, "0");
                        case "SSS":
                            return S.s(t.$ms, 3, "0");
                        case "Z":
                            return o
                        }
                        return null
                    }(e) || o.replace(":", "")
                }
                ))
            }
            ,
            _.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            _.diff = function(n, f, $) {
                var p, h = this, m = S.p(f), _ = P(n), y = (_.utcOffset() - this.utcOffset()) * t, v = this - _, g = function() {
                    return S.m(h, _)
                };
                switch (m) {
                case c:
                    p = g() / 12;
                    break;
                case s:
                    p = g();
                    break;
                case l:
                    p = g() / 3;
                    break;
                case u:
                    p = (v - y) / 6048e5;
                    break;
                case d:
                    p = (v - y) / 864e5;
                    break;
                case a:
                    p = v / r;
                    break;
                case i:
                    p = v / t;
                    break;
                case o:
                    p = v / e;
                    break;
                default:
                    p = v
                }
                return $ ? p : S.a(p)
            }
            ,
            _.daysInMonth = function() {
                return this.endOf(s).$D
            }
            ,
            _.$locale = function() {
                return g[this.$L]
            }
            ,
            _.locale = function(e, t) {
                if (!e)
                    return this.$L;
                var r = this.clone()
                  , n = C(e, t, !0);
                return n && (r.$L = n),
                r
            }
            ,
            _.clone = function() {
                return S.w(this.$d, this)
            }
            ,
            _.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            _.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            _.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            _.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            m
        }()
          , x = O.prototype;
        return P.prototype = x,
        [["$ms", n], ["$s", o], ["$m", i], ["$H", a], ["$W", d], ["$M", s], ["$y", c], ["$D", f]].forEach((function(e) {
            x[e[1]] = function(t) {
                return this.$g(t, e[0], e[1])
            }
        }
        )),
        P.extend = function(e, t) {
            return e.$i || (e(t, O, P),
            e.$i = !0),
            P
        }
        ,
        P.locale = C,
        P.isDayjs = w,
        P.unix = function(e) {
            return P(1e3 * e)
        }
        ,
        P.en = g[v],
        P.Ls = g,
        P.p = {},
        P
    }();
    const Hn = Wn(Gn.exports);
    /*! js-cookie v3.0.5 | MIT */
    function Vn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                e[n] = r[n]
        }
        return e
    }
    var qn = function e(t, r) {
        function n(e, n, o) {
            if ("undefined" != typeof document) {
                "number" == typeof (o = Vn({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                o.expires && (o.expires = o.expires.toUTCString()),
                e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var i = "";
                for (var a in o)
                    o[a] && (i += "; " + a,
                    !0 !== o[a] && (i += "=" + o[a].split(";")[0]));
                return document.cookie = e + "=" + t.write(n, e) + i
            }
        }
        return Object.create({
            set: n,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < r.length; o++) {
                        var i = r[o].split("=")
                          , a = i.slice(1).join("=");
                        try {
                            var d = decodeURIComponent(i[0]);
                            if (n[d] = t.read(a, d),
                            e === d)
                                break
                        } catch (Rn) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                n(e, "", Vn({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(t) {
                return e(this.converter, Vn({}, this.attributes, t))
            },
            withConverter: function(t) {
                return e(Vn({}, this.converter, t), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(r)
            },
            converter: {
                value: Object.freeze(t)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)),
            e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });
    const Kn = new class {
        get env() {
            return sn.env
        }
        get cookieNamePrefix() {
            return sn.cookieNamePrefix
        }
    }
      , Zn = function(e) {
        return function(e, t) {
            var r;
            if ("function" != typeof t)
                throw new TypeError("Expected a function");
            return e = T(e),
            function() {
                return --e > 0 && (r = t.apply(this, arguments)),
                e <= 1 && (t = void 0),
                r
            }
        }(2, e)
    }(( () => {}
    ));
    function Jn() {
        if (fe(io.getSessionStorage("is_preview", "false"), "true"))
            return Zn(),
            !0;
        const e = "true" === yt(window, "EcomSendApps.searchParams.popup-preview", "false");
        if (e) {
            io.setSessionStorage("is_preview", "true");
            let e = yt(window, "EcomSendApps.searchParams.popup-id");
            e && io.setSessionStorage("popup_id", e)
        }
        return e || sn.pluginIsPreview
    }
    function Xn() {
        return "none" !== yt(window, "EcomSendApps.searchParams.user-select", "false")
    }
    function Qn() {
        const e = /iPad|iPhone|iPod/.test(navigator.userAgent)
          , t = navigator.userAgent.includes("Macintosh")
          , r = navigator.maxTouchPoints >= 1;
        return e || t && (r || function() {
            const e = new Audio;
            return e.volume = .5,
            1 === e.volume
        }())
    }
    tn(window, "EcomSendApps.isPreviewMode", Jn);
    const eo = function() {
        try {
            const e = "__test__";
            return sessionStorage.setItem(e, e),
            sessionStorage.removeItem(e),
            !0
        } catch (Rn) {
            return !1
        }
    }();
    const to = eo ? sessionStorage : new class {
        constructor() {
            this.data = {},
            this.length = this.data.length
        }
        setItem(e, t) {
            this.data[e] = t
        }
        getItem(e) {
            return this.data[e]
        }
        removeItem(e) {
            delete this.data[e]
        }
        clear() {
            this.data = {}
        }
        key(e) {
            return Object.values(this.data)[e]
        }
    }
      , {get: ro, set: no, remove: oo} = qn;
    const io = new class {
        setSessionStorage(e, t) {
            to.setItem(Kn.cookieNamePrefix + e, t)
        }
        getSessionStorage(e, t="") {
            const r = to.getItem(Kn.cookieNamePrefix + e);
            return Zr(r) ? t : r
        }
        getCookie(e, t) {
            const r = ro(Kn.cookieNamePrefix + e);
            return void 0 === r ? t : r
        }
        getCookies() {
            return ro()
        }
        removeCookie(e, t) {
            oo(Kn.cookieNamePrefix + e, t)
        }
        removeCookieNoPrefix(e) {
            oo(e)
        }
        setCookie(e, t, r) {
            no(Kn.cookieNamePrefix + e, t, r)
        }
        getLocalStorage(e, t="") {
            const r = localStorage.getItem(Kn.cookieNamePrefix + e);
            return Zr(r) ? t : r
        }
        setLocalStorage(e, t) {
            localStorage.setItem(Kn.cookieNamePrefix + e, t)
        }
        setExpires(e, t) {
            this.setLocalStorage(e, t)
        }
        getExpires(e) {
            return Hn.unix(Number(this.getLocalStorage(e)))
        }
        hasLocalStorage(e) {
            return Zr(localStorage.getItem(Kn.cookieNamePrefix + e))
        }
        removeLocalStorage(e) {
            localStorage.removeItem(Kn.cookieNamePrefix + e)
        }
        setDiscountCode(e, t, r) {
            this.setCookie(`discount_code${r}`, e, {
                expires: t.toDate()
            })
        }
        getDiscountCode(e) {
            return this.getCookie(`discount_code${e}`, void 0) || void 0
        }
        setPreviewDiscountCode(e, t, r) {
            this.setCookie(`preview_discount_code${r}`, e, {
                expires: t.toDate()
            })
        }
        getPreviewDiscountCode(e) {
            return this.getCookie(`preview_discount_code${e}`, void 0) || void 0
        }
        setRemoveModal(e) {
            this.setCookie("remove_modal", String(e.unix()), {
                expires: e.toDate()
            })
        }
        setForeverRemoveModal() {
            this.setLocalStorage("forever_remove", "true")
        }
        getForeverRemoveModal() {
            return Boolean(this.getLocalStorage("forever_remove"))
        }
        getRemoveModal() {
            return this.getCookie("remove_modal", void 0) || void 0
        }
        setSubscribedStatus(e, t) {
            this.setCookie("is_subscribed", e, {
                expires: t.toDate()
            })
        }
        incrementModalShowCount(e, t) {
            const r = this.getModalShowCount(t)
              , n = function(e) {
                return Hn().add(1, e)
            }(e);
            if (0 === r)
                this.setCookie(Jn() ? `preview_modal_limit${t}` : `modal_limit${t}`, String(2), {
                    expires: n.toDate()
                }),
                this.setExpires(Jn() ? `preview_expires_time${t}` : `expires_time${t}`, String(n.unix()));
            else {
                const e = this.getExpires(Jn() ? `preview_expires_time${t}` : `expires_time${t}`).toDate() || n.toDate();
                this.setCookie(Jn() ? `preview_modal_limit${t}` : `modal_limit${t}`, String(r + 1), {
                    expires: e
                })
            }
        }
        clearModalShowCount() {}
        getModalShowCount(e) {
            return Number(this.getCookie(Jn() ? `preview_modal_limit${e}` : `modal_limit${e}`, "0") || "0")
        }
    }
    ;
    const ao = {
        ConfigStore: new jn,
        IntentionsStore: new class {
            constructor() {
                this.modal_success_status = !1,
                this.modal_success_status_list = {},
                this.show_modal = !1,
                this.show_modal_by_id = void 0,
                this.show_widget_modal_list = [],
                this.show_widget_modal = !1,
                this.show_sticky_bar_list = [],
                this.show_sticky_bar = !1,
                this.is_subscribed_list = [],
                this.is_subscribed = !1,
                e.makeAutoObservable(this)
            }
            setConfig(e, t) {
                tn(this, e, t)
            }
            setModalSuccessStatus(e, t) {
                this.modal_success_status_list[e] = t
            }
            showWidgetModal(e) {
                "true" === io.getSessionStorage(`close_widget_modal${e}`) || this.show_widget_modal_list.includes(e) || this.setConfig("show_widget_modal_list", [...this.show_widget_modal_list, e])
            }
            hideWidgetModal(e) {
                let t = this.show_widget_modal_list.indexOf(e);
                -1 !== t && this.show_widget_modal_list.splice(t, 1)
            }
            showStickyBar(e) {
                this.show_sticky_bar_list.includes(e) || this.setConfig("show_sticky_bar_list", [...this.show_sticky_bar_list, e])
            }
            hideStickyBar(e) {
                let t = this.show_sticky_bar_list.indexOf(e);
                -1 !== t && this.show_sticky_bar_list.splice(t, 1)
            }
            showModalById(e) {
                this.show_modal_by_id = e
            }
        }
        ,
        PopupsStore: new class {
            constructor() {
                this.popups = [],
                e.makeAutoObservable(this)
            }
            setConfig(e, t) {
                tn(this, e, t)
            }
        }
    };
    function uo(e=!1, t) {
        const r = Array.from(document.getElementsByTagName("html"));
        r[0].addEventListener("mouseleave", (function n() {
            const {IntentionsStore: o, PopupsStore: i} = ao;
            o.show_modal || (po.showModal(!1, e, t),
            r[0].removeEventListener("mouseleave", n))
        }
        ))
    }
    const so = {
        [Sn.Equals]: (e, t) => fe(e || "/", `/${an(nn(t, "?")[0], "/")}`),
        [Sn.DoesNotEqual]: (e, t) => !fe(e, `/${an(nn(t, "?")[0], "/")}`),
        [Sn.Contains]: (e, t) => Vr(e, t),
        [Sn.DoesNotContain]: (e, t) => !Vr(e, t),
        [Sn.IsHomepage]() {
            var e;
            return "index" === (null == (e = window.EcomSendApps.common) ? void 0 : e.template)
        },
        [Sn.IsNotHomepage]() {
            var e;
            return "index" !== (null == (e = window.EcomSendApps.common) ? void 0 : e.template)
        }
    };
    function lo(e, t, r=!1) {
        return r ? function(e, t, r) {
            var n = y(e) ? pr : rn;
            return r && ve(e, t, r) && (t = void 0),
            n(e, kr(t))
        }(e, (e => so[e.operator](t, e.value))) : function(e, t, r) {
            var n = y(e) ? zr : Wr;
            return r && ve(e, t, r) && (t = void 0),
            n(e, kr(t))
        }(e, (e => so[e.operator](t, e.value)))
    }
    const co = () => {
        let e = navigator.userAgent
          , t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
          , r = !1;
        for (let i = 0; i < t.length; i++)
            if (e.indexOf(t[i]) > 0) {
                r = !0;
                break
            }
        let n = window.screen.width
          , o = window.screen.height;
        return n > 325 && o < 750 && (r = !0),
        r
    }
    ;
    const {IntentionsStore: fo, PopupsStore: $o} = ao
      , po = {
        initQueueMap: {},
        clean() {
            Object.keys(io.getCookies()).forEach((e => {
                var t, r, n, o, i, a;
                t = e,
                r = sn.cookieNamePrefix,
                t = pt(t),
                n = null == n ? 0 : (o = T(n),
                i = 0,
                a = t.length,
                o == o && (void 0 !== a && (o = o <= a ? o : a),
                void 0 !== i && (o = o >= i ? o : i)),
                o),
                r = b(r),
                t.slice(n, n + r.length) == r && io.removeCookieNoPrefix(e)
            }
            )),
            localStorage.clear(),
            to.clear()
        },
        closeOtherComponent(e, t) {
            switch (e) {
            case "show_modal":
                fo.hideWidgetModal(t),
                fo.hideStickyBar(t);
                break;
            case "show_sticky_bar":
                fo.hideWidgetModal(t),
                fo.setModalSuccessStatus(t, !1);
                break;
            case "show_widget_modal":
                fo.hideStickyBar(t),
                fo.setModalSuccessStatus(t, !1)
            }
        },
        getTargetPopupConfig: e => $o.popups.find((t => t.id === e)),
        isImmediateShow: e => e.rules.trigger.when.type === gn.ExitingPage || (Jn() ? !Zr(io.getCookie(`preview_discount_code${e.id}`)) : !Zr(io.getCookie(`discount_code${e.id}`))) || "true" === io.getSessionStorage(`pp_already_show${e.id}`) || Jn() && !Xn(),
        initPopup(e) {
            let t = this.getTargetPopupConfig(e);
            if (Jn()) {
                if (this.isSetExitPage(t) && Xn() ? uo(Jn(), e) : !fo.show_modal && this.showModal(!1, !0, e),
                !Xn())
                    return;
                return this.showStickyBar(e),
                void this.showWidget(e)
            }
            this.isPassword() || (Jn() || t.status) && "true" !== io.getCookie(Jn() ? `pp_preview_forever_remove${e}` : `pp_forever_remove${e}`) && (this.showWidget(e),
            this.isSetExitPage(t) ? uo(Jn(), e) : !fo.show_modal && this.showModal(!1, !1, e),
            this.showStickyBar(e))
        },
        init(e, t=!1) {
            let r = this.getTargetPopupConfig(e)
              , {timeout: n, type: o} = r.rules.trigger.when;
            const i = "true" == io.getSessionStorage(`pp_already_show${e}`);
            if ((o !== gn.Timer || this.isImmediateShow(r)) && (n = 0),
            t) {
                const {show_display: t} = r.rules.sidebar_widget
                  , o = i && t !== vn.BEFORE_DISPLAYING_POPUP;
                (t === vn.BEFORE_DISPLAYING_POPUP || t === vn.AFTER_POPUP_IS_CLOSED_AND_BEFORE_DISPLAYING_POPUP || o) && this.showWidget(e),
                this.initQueueMap[e] = !0;
                let a = setTimeout(( () => {
                    i ? this.showStickyBar(e) : this.initPopup(e),
                    clearTimeout(a),
                    this.initQueueMap[e] = !1
                }
                ), 1e3 * n)
            } else
                !this.initQueueMap[e] && this.initPopup(e)
        },
        isPassword: () => "password" === window.EcomSendApps.common.template,
        isSetExitPage: e => e.rules.trigger.when.type === gn.ExitingPage,
        removeModal(e, t) {
            let r = this.getTargetPopupConfig(t);
            switch (e) {
            case "normal":
                io.setSessionStorage(`pp_window_normal${t}`, "true"),
                io.setSessionStorage(`pp_already_show${t}`, "true"),
                fo.setConfig("show_modal", !1);
                const {sidebar_widget: e} = r.rules
                  , n = e.show_display === vn.AFTER_POPUP_IS_CLOSED || e.show_display === vn.AFTER_POPUP_IS_CLOSED_AND_BEFORE_DISPLAYING_POPUP;
                e.show && n && fo.showWidgetModal(t);
                break;
            case "success_subscriber":
                io.setSessionStorage(`pp_window_normal${t}`, "true"),
                io.setSessionStorage(`pp_already_show${t}`, "true"),
                fo.setConfig("show_modal", !1),
                r.rules.sticky_discount_bar && this.showStickyBar(t);
                break;
            case "forever":
                let o = Hn().add(365, "day");
                io.setCookie(Jn() ? `pp_preview_forever_remove${t}` : `pp_forever_remove${t}`, "true", {
                    expires: o.toDate()
                }),
                fo.setConfig("show_modal", !1),
                fo.hideStickyBar(t),
                fo.hideWidgetModal(t)
            }
        },
        sendModalReport(e) {
            if (!Jn()) {
                if (Zr(e))
                    throw new Error("popupId is empty");
                const t = yt(window, "EcomSendApps.common.customer.id", "");
                pn.sendReport(e, t)
            }
        },
        setDiscountCode(e, t=!1, r) {
            t ? io.setPreviewDiscountCode(e, Hn().add(365, "day"), r) : io.setDiscountCode(e, Hn().add(365, "day"), r)
        },
        setSubscribedStatus() {
            io.setSubscribedStatus("1", Hn().add(100, "days"))
        },
        showModal(e=!1, t=!1, r, n=!1) {
            let o = this.getTargetPopupConfig(r);
            e && (this.closeOtherComponent("show_modal", r),
            fo.showModalById(r),
            fo.setConfig("show_modal", !0),
            this.sendModalReport(r),
            fo.hideWidgetModal(r));
            let i = (document.body.scrollHeight || document.documentElement.scrollHeight) - (window.innerHeight || document.documentElement.clientHeight)
              , a = ((document.body.scrollTop || document.documentElement.scrollTop) / i * 100).toFixed(2);
            if ("NaN" === a && (a = "0"),
            Xn() && o.rules.trigger.when.type === gn.ScrollingPage && Number(a) < o.rules.trigger.when.scroll_offset && !n) {
                let n = !1;
                window.addEventListener("scroll", function(e, t) {
                    let r = !0;
                    return function() {
                        if (!r)
                            return;
                        const n = this
                          , o = [...arguments];
                        r = !1,
                        setTimeout(( () => {
                            e.apply(n, o),
                            r = !0
                        }
                        ), t)
                    }
                }(( () => {
                    let a = ((document.body.scrollTop || document.documentElement.scrollTop) / i * 100).toFixed(2);
                    const d = o.rules.sidebar_widget.show_display === vn.AFTER_POPUP_IS_CLOSED;
                    if (Number(a) >= o.rules.trigger.when.scroll_offset && (!d || d && !fo.show_widget_modal_list.includes(r)) && !n && !fo.show_modal) {
                        n = !0;
                        "true" == io.getSessionStorage(`pp_already_show${r}`) || this.showModal(e, t, r, !0)
                    }
                }
                ), 200))
            } else {
                if (t && "true" !== io.getSessionStorage("not_ft")) {
                    let e = io.getSessionStorage("popup_id")
                      , t = window.atob(e)
                      , r = io.getSessionStorage("is_preview");
                    const n = io.getSessionStorage(`close_widget_modal${t}`);
                    to.clear(),
                    n && io.setSessionStorage(`close_widget_modal${t}`, n),
                    io.setSessionStorage("popup_id", e),
                    io.setSessionStorage("is_preview", r),
                    io.setSessionStorage("not_ft", "true"),
                    io.removeCookie(`preview_discount_code${t}`),
                    io.removeCookie(`pp_preview_success_subscribed${t}`),
                    io.removeCookie(`preview_modal_limit${t}`)
                }
                if ((Jn() ? Zr(io.getPreviewDiscountCode(r)) : Zr(io.getDiscountCode(r))) && "true" !== io.getCookie(Jn() ? `pp_preview_success_subscribed${r}` : `pp_success_subscribed${r}`)) {
                    if ("true" === io.getSessionStorage(`pp_window_normal${r}`))
                        return "session_false";
                    if (this.isOverLimit(o) && Xn())
                        this.removeModal("normal", r);
                    else
                        switch (o.rules.page_display_rules.type) {
                        case Pn.SpecificPage:
                            Xn() && !lo(o.rules.page_display_rules.specific_page, dn(window.location.pathname, "/"), o.rules.page_display_rules.match_mode === On.OR) || (this.closeOtherComponent("show_modal", r),
                            fo.showModalById(r),
                            fo.setConfig("show_modal", !0),
                            fo.hideWidgetModal(r),
                            this.sendModalReport(r),
                            Xn() && io.incrementModalShowCount(o.rules.trigger.frequency.limit.per, r));
                            break;
                        case Pn.AnyPage:
                            this.closeOtherComponent("show_modal", r),
                            fo.showModalById(r),
                            fo.setConfig("show_modal", !0),
                            this.sendModalReport(r),
                            fo.hideWidgetModal(r),
                            Xn() && io.incrementModalShowCount(o.rules.trigger.frequency.limit.per, r);
                            break;
                        default:
                            fo.setConfig("show_modal", !1)
                        }
                }
            }
        },
        showStickyBar(e) {
            if (Jn() && "true" !== io.getSessionStorage("not_ft"))
                return;
            let t = this.getTargetPopupConfig(e);
            fo.show_widget_modal_list.includes(e) || "true" !== io.getCookie(Jn() ? `pp_preview_forever_remove${e}` : `pp_forever_remove${e}`) && ((Jn() ? Kr(io.getPreviewDiscountCode(e)) : Kr(io.getDiscountCode(e))) || !t.rules.sticky_discount_bar || (fo.show_modal_by_id === e && fo.setConfig("show_modal", !1),
            fo.showStickyBar(e),
            fo.hideWidgetModal(e)))
        },
        showWidget(e) {
            const t = "true" == io.getSessionStorage(`pp_already_show${e}`)
              , r = this.getTargetPopupConfig(e)
              , n = r.rules.sidebar_widget.show_display === vn.AFTER_POPUP_IS_CLOSED
              , o = r.rules.sidebar_widget.show_display === vn.BEFORE_DISPLAYING_POPUP;
            if ((!Jn() || "true" === io.getSessionStorage("not_ft") || !n) && "true" !== io.getCookie(Jn() ? `pp_preview_success_subscribed${e}` : `pp_success_subscribed${e}`) && "true" !== io.getSessionStorage(`close_widget_modal${e}`) && (!n || t) && (Jn() ? Kr(io.getPreviewDiscountCode(e)) : Kr(io.getDiscountCode(e)) || !r.rules.sticky_discount_bar))
                if (r.rules.sidebar_widget.show) {
                    if (t && o)
                        return;
                    !(!t && o) && o || fo.show_modal_by_id || fo.showWidgetModal(e)
                } else
                    fo.hideWidgetModal(e)
        },
        isOverLimit(e) {
            const t = io.getModalShowCount(e.id)
              , {type: r, limit: n} = e.rules.trigger.frequency;
            return r === bn.Limit && n.value < t
        }
    };
    tn(window, "EcomSendApps.actions", po);
    const ho = ["Googlebot-Image", "Googlebot-News", "Googlebot", "Storebot-Google", "Google-InspectionTool", "GoogleOther", "AdsBot-Google-Mobile", "AdsBot-Google", "APIs-Google", "Mediapartners-Google", "FeedFetcher-Google", "GoogleProducer", "Google-Read-Aloud", "bingbot", "AdIdxBot", "BingPreview", "MicrosoftPreview"];
    var mo = vo;
    function _o(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    function yo(e) {
        return e
    }
    function vo(e, t) {
        const r = (t = t || {}).delimiter || "."
          , n = t.maxDepth
          , o = t.transformKey || yo
          , i = {};
        return function e(a, d, u) {
            u = u || 1,
            Object.keys(a).forEach((function(s) {
                const l = a[s]
                  , c = t.safe && Array.isArray(l)
                  , f = Object.prototype.toString.call(l)
                  , $ = _o(l)
                  , p = "[object Object]" === f || "[object Array]" === f
                  , h = d ? d + r + o(s) : o(s);
                if (!c && !$ && p && Object.keys(l).length && (!t.maxDepth || u < n))
                    return e(l, h, u + 1);
                i[h] = l
            }
            ))
        }(e),
        i
    }
    if (vo.flatten = vo,
    vo.unflatten = function e(t, r) {
        const n = (r = r || {}).delimiter || "."
          , o = r.overwrite || !1
          , i = r.transformKey || yo
          , a = {};
        if (_o(t) || "[object Object]" !== Object.prototype.toString.call(t))
            return t;
        function d(e) {
            const t = Number(e);
            return isNaN(t) || -1 !== e.indexOf(".") || r.object ? e : t
        }
        return t = Object.keys(t).reduce((function(e, o) {
            const i = Object.prototype.toString.call(t[o]);
            return !("[object Object]" === i || "[object Array]" === i) || function(e) {
                const t = Object.prototype.toString.call(e)
                  , r = "[object Array]" === t
                  , n = "[object Object]" === t;
                if (!e)
                    return !0;
                if (r)
                    return !e.length;
                if (n)
                    return !Object.keys(e).length
            }(t[o]) ? (e[o] = t[o],
            e) : (a = o,
            d = e,
            u = vo(t[o], r),
            Object.keys(u).reduce((function(e, t) {
                return e[a + n + t] = u[t],
                e
            }
            ), d));
            var a, d, u
        }
        ), {}),
        Object.keys(t).forEach((function(u) {
            const s = u.split(n).map(i);
            let l = d(s.shift())
              , c = d(s[0])
              , f = a;
            for (; void 0 !== c; ) {
                if ("__proto__" === l)
                    return;
                const e = Object.prototype.toString.call(f[l])
                  , t = "[object Object]" === e || "[object Array]" === e;
                if (!o && !t && void 0 !== f[l])
                    return;
                (o && !t || !o && null == f[l]) && (f[l] = "number" != typeof c || r.object ? {} : []),
                f = f[l],
                s.length > 0 && (l = d(s.shift()),
                c = d(s[0]))
            }
            f[l] = e(t[u], r)
        }
        )),
        a
    }
    ,
    !t.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
    if (!e.makeObservable)
        throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
    function go(e) {
        e()
    }
    function bo(t) {
        return e.getDependencyTree(t)
    }
    var wo = function() {
        function e(e) {
            var t = this;
            Object.defineProperty(this, "finalize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
            }),
            Object.defineProperty(this, "registrations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map
            }),
            Object.defineProperty(this, "sweepTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, "sweep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function(e) {
                    void 0 === e && (e = 1e4),
                    clearTimeout(t.sweepTimeout),
                    t.sweepTimeout = void 0;
                    var r = Date.now();
                    t.registrations.forEach((function(n, o) {
                        r - n.registeredAt >= e && (t.finalize(n.value),
                        t.registrations.delete(o))
                    }
                    )),
                    t.registrations.size > 0 && t.scheduleSweep()
                }
            }),
            Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function() {
                    t.sweep(0)
                }
            })
        }
        return Object.defineProperty(e.prototype, "register", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(e, t, r) {
                this.registrations.set(r, {
                    value: t,
                    registeredAt: Date.now()
                }),
                this.scheduleSweep()
            }
        }),
        Object.defineProperty(e.prototype, "unregister", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(e) {
                this.registrations.delete(e)
            }
        }),
        Object.defineProperty(e.prototype, "scheduleSweep", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function() {
                void 0 === this.sweepTimeout && (this.sweepTimeout = setTimeout(this.sweep, 1e4))
            }
        }),
        e
    }()
      , Co = new ("undefined" != typeof FinalizationRegistry ? FinalizationRegistry : wo)((function(e) {
        var t;
        null === (t = e.reaction) || void 0 === t || t.dispose(),
        e.reaction = null
    }
    ))
      , Po = globalThis && globalThis.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
            return e;
        var n, o, i = r.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                a.push(n.value)
        } catch (d) {
            o = {
                error: d
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    ;
    function So(e) {
        return "observer".concat(e)
    }
    var Oo = function() {};
    function xo() {
        return new Oo
    }
    var Mo, Eo = "function" == typeof Symbol && Symbol.for;
    function Do(r) {
        var n = r.children
          , o = r.render
          , i = n || o;
        return "function" != typeof i ? null : function(r, n) {
            void 0 === n && (n = "observed");
            var o = Po(t.useState(xo), 1)[0]
              , i = Po(t.useState(), 2)[1]
              , a = function() {
                return i([])
            }
              , d = t.useRef(null);
            d.current || (d.current = {
                reaction: null,
                mounted: !1,
                changedBeforeMount: !1
            });
            var u, s, l = d.current;
            if (l.reaction || (l.reaction = new e.Reaction(So(n),(function() {
                l.mounted ? a() : l.changedBeforeMount = !0
            }
            )),
            Co.register(o, l, l)),
            t.useDebugValue(l.reaction, bo),
            t.useEffect((function() {
                return Co.unregister(l),
                l.mounted = !0,
                l.reaction ? l.changedBeforeMount && (l.changedBeforeMount = !1,
                a()) : (l.reaction = new e.Reaction(So(n),(function() {
                    a()
                }
                )),
                a()),
                function() {
                    l.reaction.dispose(),
                    l.reaction = null,
                    l.mounted = !1,
                    l.changedBeforeMount = !1
                }
            }
            ), []),
            l.reaction.track((function() {
                try {
                    u = r()
                } catch (Rn) {
                    s = Rn
                }
            }
            )),
            s)
                throw s;
            return u
        }(i)
    }
    Eo ? Symbol.for("react.forward_ref") : "function" == typeof t.forwardRef && t.forwardRef((function(e) {
        return null
    }
    )).$$typeof,
    Eo ? Symbol.for("react.memo") : "function" == typeof t.memo && t.memo((function(e) {
        return null
    }
    )).$$typeof,
    Do.displayName = "Observer",
    globalThis && globalThis.__read,
    (Mo = r.unstable_batchedUpdates) || (Mo = go),
    e.configure({
        reactionScheduler: Mo
    }),
    Co.finalizeAllImmediately;
    var No, Io = {
        exports: {}
    }, To = {};
    Io.exports = function() {
        if (No)
            return To;
        No = 1;
        var e = t
          , r = Symbol.for("react.element")
          , n = Symbol.for("react.fragment")
          , o = Object.prototype.hasOwnProperty
          , i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , a = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function d(e, t, n) {
            var d, u = {}, s = null, l = null;
            for (d in void 0 !== n && (s = "" + n),
            void 0 !== t.key && (s = "" + t.key),
            void 0 !== t.ref && (l = t.ref),
            t)
                o.call(t, d) && !a.hasOwnProperty(d) && (u[d] = t[d]);
            if (e && e.defaultProps)
                for (d in t = e.defaultProps)
                    void 0 === u[d] && (u[d] = t[d]);
            return {
                $$typeof: r,
                type: e,
                key: s,
                ref: l,
                props: u,
                _owner: i.current
            }
        }
        return To.Fragment = n,
        To.jsx = d,
        To.jsxs = d,
        To
    }();
    var ko = Io.exports;
    const Ao = ko.jsx
      , jo = ko.jsxs
      , Lo = ko.Fragment;
    function Ro() {
        return Ro = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        Ro.apply(this, arguments)
    }
    var Fo = ["children"]
      , Bo = t.createContext({});
    function Uo(e) {
        var r = e.children
          , n = function(e, t) {
            if (null == e)
                return {};
            var r, n, o = {}, i = Object.keys(e);
            for (n = 0; n < i.length; n++)
                r = i[n],
                t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o
        }(e, Fo)
          , o = t.useContext(Bo)
          , i = t.useRef(Ro({}, o, n)).current;
        return Ao(Bo.Provider, {
            value: i,
            children: r
        })
    }
    if (Uo.displayName = "MobXProvider",
    !t.Component)
        throw new Error("mobx-react requires React to be available");
    if (!e.observable)
        throw new Error("mobx-react requires mobx to be available");
    var Yo = {}
      , zo = r;
    Yo.createRoot = zo.createRoot,
    Yo.hydrateRoot = zo.hydrateRoot;
    var Wo = {
        exports: {}
    };
    /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
    !function(e) {
        !function() {
            var t = {}.hasOwnProperty;
            function r() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    r && (e = o(e, n(r)))
                }
                return e
            }
            function n(e) {
                if ("string" == typeof e || "number" == typeof e)
                    return e;
                if ("object" != typeof e)
                    return "";
                if (Array.isArray(e))
                    return r.apply(null, e);
                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                    return e.toString();
                var n = "";
                for (var i in e)
                    t.call(e, i) && e[i] && (n = o(n, i));
                return n
            }
            function o(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (r.default = r,
            e.exports = r) : window.classNames = r
        }()
    }(Wo);
    const Go = Wn(Wo.exports);
    var Ho = !1;
    if ("undefined" != typeof window) {
        var Vo = {
            get passive() {
                Ho = !0
            }
        };
        window.addEventListener("testPassive", null, Vo),
        window.removeEventListener("testPassive", null, Vo)
    }
    var qo = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
      , Ko = []
      , Zo = !1
      , Jo = -1
      , Xo = void 0
      , Qo = void 0
      , ei = function(e) {
        return Ko.some((function(t) {
            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
        }
        ))
    }
      , ti = function(e) {
        var t = e || window.event;
        return !!ei(t.target) || (t.touches.length > 1 || (t.preventDefault && t.preventDefault(),
        !1))
    }
      , ri = function(e, t) {
        if (e && !Ko.some((function(t) {
            return t.targetElement === e
        }
        ))) {
            var r = {
                targetElement: e,
                options: t || {}
            };
            Ko = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }(Ko), [r]),
            qo ? (e.ontouchstart = function(e) {
                1 === e.targetTouches.length && (Jo = e.targetTouches[0].clientY)
            }
            ,
            e.ontouchmove = function(t) {
                1 === t.targetTouches.length && function(e, t) {
                    var r = e.targetTouches[0].clientY - Jo;
                    !ei(e.target) && (t && 0 === t.scrollTop && r > 0 || function(e) {
                        return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                    }(t) && r < 0 ? ti(e) : e.stopPropagation())
                }(t, e)
            }
            ,
            Zo || (document.addEventListener("touchmove", ti, Ho ? {
                passive: !1
            } : void 0),
            Zo = !0)) : function(e) {
                if (void 0 === Qo) {
                    var t = !!e && !0 === e.reserveScrollBarGap
                      , r = window.innerWidth - document.documentElement.clientWidth;
                    t && r > 0 && (Qo = document.body.style.paddingRight,
                    document.body.style.paddingRight = r + "px")
                }
                void 0 === Xo && (Xo = document.body.style.overflow,
                document.body.style.overflow = "hidden")
            }(t)
        }
    }
      , ni = function(e) {
        e && (Ko = Ko.filter((function(t) {
            return t.targetElement !== e
        }
        )),
        qo ? (e.ontouchstart = null,
        e.ontouchmove = null,
        Zo && 0 === Ko.length && (document.removeEventListener("touchmove", ti, Ho ? {
            passive: !1
        } : void 0),
        Zo = !1)) : Ko.length || (void 0 !== Qo && (document.body.style.paddingRight = Qo,
        Qo = void 0),
        void 0 !== Xo && (document.body.style.overflow = Xo,
        Xo = void 0)))
    };
    function oi(e, r={
        isStateful: !0
    }) {
        const n = function(e=null) {
            let[r,n] = t.useState(e);
            const {current: o} = t.useRef({
                current: r
            });
            return Object.defineProperty(o, "current", {
                get: () => r,
                set: e => {
                    Object.is(r, e) || (r = e,
                    n(e))
                }
            }),
            o
        }(null)
          , o = t.useRef(null)
          , i = r.isStateful ? n : o;
        return t.useEffect(( () => {
            !e || ("function" == typeof e ? e(i.current) : e.current = i.current)
        }
        )),
        i
    }
    function ii() {
        return ii = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        ii.apply(this, arguments)
    }
    var ai = function(e) {
        var t = e.classes
          , r = e.classNames
          , n = e.styles
          , o = e.id
          , i = e.closeIcon
          , a = e.onClick;
        return Ao("button", {
            id: o,
            className: Go(t.closeButton, null == r ? void 0 : r.closeButton),
            style: null == n ? void 0 : n.closeButton,
            onClick: a,
            "data-testid": "close-button",
            children: i || Ao("svg", {
                className: null == r ? void 0 : r.closeIcon,
                style: null == n ? void 0 : n.closeIcon,
                width: 28,
                height: 28,
                viewBox: "0 0 36 36",
                "data-testid": "close-icon",
                children: Ao("path", {
                    d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
                })
            })
        })
    }
      , di = "undefined" != typeof window
      , ui = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
    function si(e) {
        return null === e.offsetParent || "hidden" === getComputedStyle(e).visibility
    }
    function li(e) {
        if ("INPUT" !== e.tagName || "radio" !== e.type || !e.name)
            return !0;
        var t = (e.form || e.ownerDocument).querySelectorAll('input[type="radio"][name="' + e.name + '"]')
          , r = function(e, t) {
            for (var r = 0; r < e.length; r++)
                if (e[r].checked && e[r].form === t)
                    return e[r]
        }(t, e.form);
        return r === e || void 0 === r && t[0] === e
    }
    function ci(e) {
        for (var t = document.activeElement, r = e.querySelectorAll(ui.join(",")), n = [], o = 0; o < r.length; o++) {
            var i = r[o];
            (t === i || !i.disabled && fi(i) > -1 && !si(i) && li(i)) && n.push(i)
        }
        return n
    }
    function fi(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return isNaN(t) ? function(e) {
            return e.getAttribute("contentEditable")
        }(e) ? 0 : e.tabIndex : t
    }
    var $i = function(e) {
        var r = e.container
          , n = e.initialFocusRef
          , o = t.useRef();
        return t.useEffect((function() {
            var e = function(e) {
                (null == r ? void 0 : r.current) && function(e, t) {
                    if (e && "Tab" === e.key) {
                        if (!t || !t.contains)
                            return process,
                            !1;
                        if (!t.contains(e.target))
                            return !1;
                        var r = ci(t)
                          , n = r[0]
                          , o = r[r.length - 1];
                        e.shiftKey && e.target === n ? (o.focus(),
                        e.preventDefault()) : !e.shiftKey && e.target === o && (n.focus(),
                        e.preventDefault())
                    }
                }(e, r.current)
            };
            if (di && document.addEventListener("keydown", e),
            di && (null == r ? void 0 : r.current)) {
                var t = function() {
                    -1 !== ui.findIndex((function(e) {
                        var t;
                        return null == (t = document.activeElement) ? void 0 : t.matches(e)
                    }
                    )) && (o.current = document.activeElement)
                };
                if (n)
                    t(),
                    requestAnimationFrame((function() {
                        var e;
                        null == (e = n.current) || e.focus()
                    }
                    ));
                else {
                    var i = ci(r.current);
                    i[0] && (t(),
                    i[0].focus())
                }
            }
            return function() {
                var t;
                di && (document.removeEventListener("keydown", e),
                null == (t = o.current) || t.focus())
            }
        }
        ), [r, n]),
        null
    }
      , pi = []
      , hi = function(e) {
        pi.push(e)
    }
      , mi = function(e) {
        pi = pi.filter((function(t) {
            return t !== e
        }
        ))
    }
      , _i = function(e) {
        return !!pi.length && pi[pi.length - 1] === e
    };
    var yi = {
        root: "react-responsive-modal-root",
        overlay: "react-responsive-modal-overlay",
        overlayAnimationIn: "react-responsive-modal-overlay-in",
        overlayAnimationOut: "react-responsive-modal-overlay-out",
        modalContainer: "react-responsive-modal-container",
        modalContainerCenter: "react-responsive-modal-containerCenter",
        modal: "react-responsive-modal-modal",
        modalAnimationIn: "react-responsive-modal-modal-in",
        modalAnimationOut: "react-responsive-modal-modal-out",
        closeButton: "react-responsive-modal-closeButton"
    }
      , vi = t.forwardRef((function(e, n) {
        var o, i, a, d, u = e.open, s = e.center, l = e.blockScroll, c = void 0 === l || l, f = e.closeOnEsc, $ = void 0 === f || f, p = e.closeOnOverlayClick, h = void 0 === p || p, m = e.container, _ = e.showCloseIcon, y = void 0 === _ || _, v = e.closeIconId, g = e.closeIcon, b = e.focusTrapped, w = void 0 === b || b, C = e.initialFocusRef, P = void 0 === C ? void 0 : C, S = e.animationDuration, O = void 0 === S ? 300 : S, x = e.classNames, M = e.styles, E = e.role, D = void 0 === E ? "dialog" : E, N = e.ariaDescribedby, I = e.ariaLabelledby, T = e.containerId, k = e.modalId, A = e.onClose, j = e.onEscKeyDown, L = e.onOverlayClick, R = e.onAnimationEnd, F = e.children, B = e.reserveScrollBarGap, U = oi(n), Y = t.useRef(null), z = t.useRef(null), W = t.useRef(null);
        null === W.current && di && (W.current = document.createElement("div"));
        var G = t.useState(!1)
          , H = G[0]
          , V = G[1];
        !function(e, r) {
            t.useEffect((function() {
                return r && hi(e),
                function() {
                    mi(e)
                }
            }
            ), [r, e])
        }(Y, u),
        function(e, r, n, o, i) {
            var a = t.useRef(null);
            t.useEffect((function() {
                return r && e.current && o && (a.current = e.current,
                ri(e.current, {
                    reserveScrollBarGap: i
                })),
                function() {
                    a.current && (ni(a.current),
                    a.current = null)
                }
            }
            ), [r, n, e, o, i])
        }(Y, u, H, c, B);
        var q = function(e) {
            27 === e.keyCode && _i(Y) && (null == j || j(e),
            $ && A())
        };
        t.useEffect((function() {
            return function() {
                H && (W.current && !m && document.body.contains(W.current) && document.body.removeChild(W.current),
                document.removeEventListener("keydown", q))
            }
        }
        ), [H]),
        t.useEffect((function() {
            u && !H && (V(!0),
            !W.current || m || document.body.contains(W.current) || document.body.appendChild(W.current),
            document.addEventListener("keydown", q))
        }
        ), [u]);
        var K = function() {
            z.current = !1
        }
          , Z = m || W.current
          , J = u ? null != (o = null == x ? void 0 : x.overlayAnimationIn) ? o : yi.overlayAnimationIn : null != (i = null == x ? void 0 : x.overlayAnimationOut) ? i : yi.overlayAnimationOut
          , X = u ? null != (a = null == x ? void 0 : x.modalAnimationIn) ? a : yi.modalAnimationIn : null != (d = null == x ? void 0 : x.modalAnimationOut) ? d : yi.modalAnimationOut;
        return H && Z ? r.createPortal(jo("div", {
            className: Go(yi.root, null == x ? void 0 : x.root),
            style: null == M ? void 0 : M.root,
            "data-testid": "root",
            children: [Ao("div", {
                className: Go(yi.overlay, null == x ? void 0 : x.overlay),
                "data-testid": "overlay",
                "aria-hidden": !0,
                style: ii({
                    animation: J + " " + O + "ms"
                }, null == M ? void 0 : M.overlay)
            }), Ao("div", {
                ref: Y,
                id: T,
                className: Go(yi.modalContainer, s && yi.modalContainerCenter, null == x ? void 0 : x.modalContainer),
                style: null == M ? void 0 : M.modalContainer,
                "data-testid": "modal-container",
                onClick: function(e) {
                    null === z.current && (z.current = !0),
                    z.current ? (null == L || L(e),
                    h && A(),
                    z.current = null) : z.current = null
                },
                children: jo("div", {
                    ref: U,
                    className: Go(yi.modal, null == x ? void 0 : x.modal),
                    style: ii({
                        animation: X + " " + O + "ms"
                    }, null == M ? void 0 : M.modal),
                    onMouseDown: K,
                    onMouseUp: K,
                    onClick: K,
                    onAnimationEnd: function() {
                        u || V(!1),
                        null == R || R()
                    },
                    id: k,
                    role: D,
                    "aria-modal": "true",
                    "aria-labelledby": I,
                    "aria-describedby": N,
                    "data-testid": "modal",
                    tabIndex: -1,
                    children: [w && Ao($i, {
                        container: U,
                        initialFocusRef: P
                    }), F, y && Ao(ai, {
                        classes: yi,
                        classNames: x,
                        styles: M,
                        closeIcon: g,
                        onClick: A,
                        id: v
                    })]
                })
            })]
        }), Z) : null
    }
    ));
    function gi(e, t="ecomsend") {
        return `${t}__${e}`
    }
    function bi(e, t="ecomsend") {
        return `${t}-SpinWheel__${e}`
    }
    var wi = (e => (e[e.OK = 200] = "OK",
    e[e.ACCEPTED = 201] = "ACCEPTED",
    e[e.REDIRECT = 302] = "REDIRECT",
    e[e.PARAM_ERROR = 400] = "PARAM_ERROR",
    e[e.NOT_LOGIN = 401] = "NOT_LOGIN",
    e[e.NOT_AUTH = 403] = "NOT_AUTH",
    e[e.NOT_FOUND = 404] = "NOT_FOUND",
    e[e.CONFLICT = 409] = "CONFLICT",
    e[e.SERVER_ERROR = 500] = "SERVER_ERROR",
    e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED",
    e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE",
    e))(wi || {});
    const Ci = e => Ao("svg", __spreadProps(__spreadValues({
        width: 16,
        height: 16,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), {
        style: {
            width: "16px",
            height: "16px"
        },
        children: Ao("path", {
            d: "m9.414 8 6.293-6.293A1 1 0 0 0 14.293.293L8 6.586 1.707.293A1 1 0 1 0 .293 1.707L6.586 8 .293 14.293a1 1 0 1 0 1.414 1.414L8 9.414l6.293 6.293a.997.997 0 0 0 1.631-.324 1 1 0 0 0-.217-1.09L9.414 8Z",
            fill: "#6C6B80"
        })
    }))
      , Pi = () => jo("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        children: [Ao("circle", {
            transform: "translate(8 0)",
            cx: "0",
            cy: "16",
            r: "0",
            children: Ao("animate", {
                attributeName: "r",
                values: "0; 4; 0; 0",
                dur: "1.2s",
                repeatCount: "indefinite",
                begin: "0",
                keyTimes: "0;0.2;0.7;1",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                calcMode: "spline"
            })
        }), Ao("circle", {
            transform: "translate(16 0)",
            cx: "0",
            cy: "16",
            r: "0",
            children: Ao("animate", {
                attributeName: "r",
                values: "0; 4; 0; 0",
                dur: "1.2s",
                repeatCount: "indefinite",
                begin: "0.3",
                keyTimes: "0;0.2;0.7;1",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                calcMode: "spline"
            })
        }), Ao("circle", {
            transform: "translate(24 0)",
            cx: "0",
            cy: "16",
            r: "0",
            children: Ao("animate", {
                attributeName: "r",
                values: "0; 4; 0; 0",
                dur: "1.2s",
                repeatCount: "indefinite",
                begin: "0.6",
                keyTimes: "0;0.2;0.7;1",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
                calcMode: "spline"
            })
        })]
    })
      , Si = {
        xButton: "_xButton_1vm0o_2",
        loadingBox: "_loadingBox_1vm0o_24",
        text: "_text_1vm0o_33",
        mobile: "_mobile_1vm0o_38",
        disabled: "_disabled_1vm0o_41",
        "btn-radius-standard": "_btn-radius-standard_1vm0o_44",
        "btn-radius-none": "_btn-radius-none_1vm0o_47",
        "btn-radius-large": "_btn-radius-large_1vm0o_50",
        block: "_block_1vm0o_53",
        small: "_small_1vm0o_60"
    };
    function Oi({buttonTextConfig: e, size: t, shape: r, colors: n, action: o, loading: i, block: a, isMobile: d, onClick: u, classNames: s}) {
        return Ao(Lo, {
            children: !Kr(e) && Ao("div", {
                className: Go(gi("Button"), Si.xButton, Si[`btn-radius-${r}`], Si[t || ""], a && Si.block, o && Si.disabled, d && Si.mobile, s),
                style: {
                    "--bg-color": `${n.primary_button_background_color}`,
                    background: `${n.primary_button_background_color}`,
                    color: `${n.primary_button_text_color}`
                },
                onClick: () => "function" == typeof u && u(),
                role: "button",
                children: Ao("div", i ? {
                    className: Si.loadingBox,
                    children: Ao(Pi, {})
                } : {
                    className: Si.text,
                    children: e
                })
            })
        })
    }
    var xi = {}
      , Mi = function(e) {
        if (navigator.clipboard)
            return navigator.clipboard.writeText(e).catch((function(e) {
                throw void 0 !== e ? e : new DOMException("The request is not allowed","NotAllowedError")
            }
            ));
        var t = document.createElement("span");
        t.textContent = e,
        t.style.whiteSpace = "pre",
        t.style.webkitUserSelect = "auto",
        t.style.userSelect = "all",
        document.body.appendChild(t);
        var r = window.getSelection()
          , n = window.document.createRange();
        r.removeAllRanges(),
        n.selectNode(t),
        r.addRange(n);
        var o = !1;
        try {
            o = window.document.execCommand("copy")
        } catch (i) {}
        return r.removeAllRanges(),
        window.document.body.removeChild(t),
        o ? Promise.resolve() : Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))
    };
    /*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var Ei = {};
    Object.defineProperty(Ei, "__esModule", {
        value: !0
    }),
    Ei.useTimedToggle = void 0;
    var Di = t;
    Ei.useTimedToggle = function(e) {
        var t = Di.useState(!1)
          , r = t[0]
          , n = t[1]
          , o = Di.useRef()
          , i = Di.useRef(e);
        return Di.useEffect((function() {
            return function() {
                return clearTimeout(o.current)
            }
        }
        ), []),
        [r, function(e) {
            clearTimeout(o.current),
            n(!i.current),
            o.current = window.setTimeout((function() {
                return n(i.current)
            }
            ), e)
        }
        ]
    }
    ;
    var Ni = zn && zn.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ;
    Object.defineProperty(xi, "__esModule", {
        value: !0
    });
    var Ii = xi.useClipboard = void 0
      , Ti = Ni(Mi)
      , ki = t
      , Ai = Ei;
    function ji(e) {
        return e && ("TEXTAREA" === e.nodeName || "INPUT" === e.nodeName)
    }
    Ii = xi.useClipboard = function(e) {
        void 0 === e && (e = {});
        var t = Ai.useTimedToggle(!1)
          , r = t[0]
          , n = t[1]
          , o = ki.useRef(null)
          , i = ki.useRef(e);
        return i.current = e,
        {
            copied: r,
            copy: ki.useCallback((function(e) {
                var t = i.current
                  , r = o.current;
                function a() {
                    t.onSuccess && t.onSuccess(),
                    t.copiedTimeout && n(t.copiedTimeout),
                    t.selectOnCopy && ji(r) && r.select()
                }
                function d() {
                    t.onError && t.onError(),
                    !1 !== t.selectOnError && ji(r) && r.select()
                }
                function u(e) {
                    Ti.default(e).then(a).catch(d)
                }
                "string" == typeof e ? u(e) : r && u(r.value)
            }
            ), []),
            isSupported: function() {
                return !!navigator.clipboard || "function" == typeof document.execCommand && "function" == typeof document.queryCommandSupported && document.queryCommandSupported("copy")
            },
            target: o
        }
    }
    ;
    const Li = e => jo("svg", __spreadProps(__spreadValues({
        width: 28,
        height: 28,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), {
        children: [Ao("mask", {
            id: "copy_svg__a",
            style: {
                maskType: "alpha"
            },
            maskUnits: "userSpaceOnUse",
            x: 8,
            y: 3,
            width: 17,
            height: 17,
            children: Ao("path", {
                d: "M24.5 3.5v16.334h-2.178V5.678H8.167V3.5H24.5Z",
                fill: "#fff"
            })
        }), Ao("g", {
            mask: "url(#copy_svg__a)",
            children: Ao("rect", {
                x: 23.333,
                y: 18.667,
                width: 14,
                height: 14,
                rx: 1.167,
                transform: "rotate(-180 23.333 18.667)",
                stroke: "#6C6B80",
                strokeWidth: 2.333
            })
        }), Ao("path", {
            d: "M18.667 22.167c0 .644-.523 1.166-1.167 1.166H5.833a1.167 1.167 0 0 1-1.166-1.166V10.5c0-.644.522-1.167 1.166-1.167H17.5c.644 0 1.167.523 1.167 1.167v11.667Z",
            stroke: "#6C6B80",
            strokeWidth: 2.333
        })]
    }))
      , Ri = e => Ao("svg", __spreadProps(__spreadValues({
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), {
        children: Ao("path", {
            d: "m7.293 14.707-3-3a.999.999 0 1 1 1.414-1.414l2.236 2.236 6.298-7.18a.999.999 0 1 1 1.518 1.3l-7 8a1 1 0 0 1-.72.35 1.017 1.017 0 0 1-.746-.292z",
            fill: "#5C5F62"
        })
    }))
      , Fi = {
        myCustomInputContent: "_myCustomInputContent_1n64r_2",
        small: "_small_1n64r_7",
        stickyMobileStyle: "_stickyMobileStyle_1n64r_10",
        mobile: "_mobile_1n64r_13",
        block: "_block_1n64r_17",
        myCustomInput: "_myCustomInput_1n64r_2",
        stickyBarCustomStyle: "_stickyBarCustomStyle_1n64r_46",
        copyBtn: "_copyBtn_1n64r_49",
        discountCodeInput: "_discountCodeInput_1n64r_54",
        large: "_large_1n64r_60",
        standard: "_standard_1n64r_63",
        "input-radius-standard": "_input-radius-standard_1n64r_69",
        "input-radius-none": "_input-radius-none_1n64r_72",
        "input-radius-large": "_input-radius-large_1n64r_75",
        "input-radius-small": "_input-radius-small_1n64r_78"
    };
    function Bi({size: e, shape: t, color: r, value: n, placeholder: o, stickyBarCustomStyle: i, block: a, isSuccess: d, isMobile: u, fromSticky: s, isManuallyCode: l, manuallyCode: c, className: f, id: $, onChange: p, type: h, style: m, autoComplete: _, onBlur: y, ariaLabel: v}) {
        const g = Ii({
            copiedTimeout: 2e3,
            onSuccess() {
                g.target.current.select()
            }
        });
        return jo("div", {
            className: Go(gi("Input__Wrap"), Fi.myCustomInputContent, a && Fi.block, u && Fi.mobile, s && Fi.stickyMobileStyle, Fi[e], f),
            children: [Ao("input", {
                className: Go(gi("Input__Input"), Fi.myCustomInput, Fi[e], Fi[`input-radius-${t}`], i && Fi.stickyBarCustomStyle, d && Fi.discountCodeInput),
                style: __spreadValues({
                    "--color": `${r}`
                }, m),
                value: l && d && c ? c : n,
                readOnly: d,
                id: $,
                placeholder: o,
                type: h || (d ? "" : "email"),
                ref: g.target,
                autoComplete: _,
                onChange: p,
                onBlur: () => y && y(),
                "aria-label": v
            }), d && Ao("div", {
                className: Go(gi("Input_CopyBtn"), Fi.copyBtn),
                onClick: g.copy,
                children: g.copied ? Ao(Ri, {}) : Ao(Li, {})
            })]
        })
    }
    const Ui = {
        modalContainer: "_modalContainer_rds7d_2",
        modalContent: "_modalContent_rds7d_22",
        myCustomDialogWrapper: "_myCustomDialogWrapper_rds7d_29",
        "size-standard": "_size-standard_rds7d_34",
        myCustomDialog: "_myCustomDialog_rds7d_29",
        titleText: "_titleText_rds7d_37",
        titleHelpText: "_titleHelpText_rds7d_40",
        "size-large": "_size-large_rds7d_43",
        "size-small": "_size-small_rds7d_52",
        left: "_left_rds7d_61",
        right: "_right_rds7d_61",
        "cornerRadius-standard": "_cornerRadius-standard_rds7d_64",
        "cornerRadius-none": "_cornerRadius-none_rds7d_67",
        "cornerRadius-large": "_cornerRadius-large_rds7d_70",
        customPic: "_customPic_rds7d_79",
        errContent: "_errContent_rds7d_88",
        errIcon: "_errIcon_rds7d_94",
        errText: "_errText_rds7d_106",
        myLogoImg: "_myLogoImg_rds7d_112",
        center: "_center_rds7d_116",
        closeText: "_closeText_rds7d_174",
        small: "_small_rds7d_191",
        descriptionText: "_descriptionText_rds7d_195",
        closeBtn: "_closeBtn_rds7d_236",
        mobilePosition: "_mobilePosition_rds7d_250",
        adminModalContainer: "_adminModalContainer_rds7d_255",
        bottomLayout: "_bottomLayout_rds7d_286",
        greySign: "_greySign_rds7d_362",
        blueText: "_blueText_rds7d_373"
    }
      , Yi = "_errContent_1dz3r_2"
      , zi = "_embed_1dz3r_8"
      , Wi = "_errIcon_1dz3r_12"
      , Gi = "_errText_1dz3r_24"
      , Hi = e => Ao("svg", __spreadProps(__spreadValues({
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), {
        children: Ao("path", {
            d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
            fill: "#5C5F62"
        })
    }))
      , Vi = ({colors: e, errText: t, embed: r}) => jo("div", {
        className: Go(bi("Modal__ErrTextMarkup"), Yi, r ? zi : null),
        style: {
            color: `${e.error_color}`,
            fill: `${e.error_color}`
        },
        children: [Ao("div", {
            className: Wi,
            children: Ao(Hi, {})
        }), Ao("span", {
            className: Gi,
            children: t
        })]
    })
      , qi = {
        version: 4,
        country_calling_codes: {
            1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
            7: ["RU", "KZ"],
            20: ["EG"],
            27: ["ZA"],
            30: ["GR"],
            31: ["NL"],
            32: ["BE"],
            33: ["FR"],
            34: ["ES"],
            36: ["HU"],
            39: ["IT", "VA"],
            40: ["RO"],
            41: ["CH"],
            43: ["AT"],
            44: ["GB", "GG", "IM", "JE"],
            45: ["DK"],
            46: ["SE"],
            47: ["NO", "SJ"],
            48: ["PL"],
            49: ["DE"],
            51: ["PE"],
            52: ["MX"],
            53: ["CU"],
            54: ["AR"],
            55: ["BR"],
            56: ["CL"],
            57: ["CO"],
            58: ["VE"],
            60: ["MY"],
            61: ["AU", "CC", "CX"],
            62: ["ID"],
            63: ["PH"],
            64: ["NZ"],
            65: ["SG"],
            66: ["TH"],
            81: ["JP"],
            82: ["KR"],
            84: ["VN"],
            86: ["CN"],
            90: ["TR"],
            91: ["IN"],
            92: ["PK"],
            93: ["AF"],
            94: ["LK"],
            95: ["MM"],
            98: ["IR"],
            211: ["SS"],
            212: ["MA", "EH"],
            213: ["DZ"],
            216: ["TN"],
            218: ["LY"],
            220: ["GM"],
            221: ["SN"],
            222: ["MR"],
            223: ["ML"],
            224: ["GN"],
            225: ["CI"],
            226: ["BF"],
            227: ["NE"],
            228: ["TG"],
            229: ["BJ"],
            230: ["MU"],
            231: ["LR"],
            232: ["SL"],
            233: ["GH"],
            234: ["NG"],
            235: ["TD"],
            236: ["CF"],
            237: ["CM"],
            238: ["CV"],
            239: ["ST"],
            240: ["GQ"],
            241: ["GA"],
            242: ["CG"],
            243: ["CD"],
            244: ["AO"],
            245: ["GW"],
            246: ["IO"],
            247: ["AC"],
            248: ["SC"],
            249: ["SD"],
            250: ["RW"],
            251: ["ET"],
            252: ["SO"],
            253: ["DJ"],
            254: ["KE"],
            255: ["TZ"],
            256: ["UG"],
            257: ["BI"],
            258: ["MZ"],
            260: ["ZM"],
            261: ["MG"],
            262: ["RE", "YT"],
            263: ["ZW"],
            264: ["NA"],
            265: ["MW"],
            266: ["LS"],
            267: ["BW"],
            268: ["SZ"],
            269: ["KM"],
            290: ["SH", "TA"],
            291: ["ER"],
            297: ["AW"],
            298: ["FO"],
            299: ["GL"],
            350: ["GI"],
            351: ["PT"],
            352: ["LU"],
            353: ["IE"],
            354: ["IS"],
            355: ["AL"],
            356: ["MT"],
            357: ["CY"],
            358: ["FI", "AX"],
            359: ["BG"],
            370: ["LT"],
            371: ["LV"],
            372: ["EE"],
            373: ["MD"],
            374: ["AM"],
            375: ["BY"],
            376: ["AD"],
            377: ["MC"],
            378: ["SM"],
            380: ["UA"],
            381: ["RS"],
            382: ["ME"],
            383: ["XK"],
            385: ["HR"],
            386: ["SI"],
            387: ["BA"],
            389: ["MK"],
            420: ["CZ"],
            421: ["SK"],
            423: ["LI"],
            500: ["FK"],
            501: ["BZ"],
            502: ["GT"],
            503: ["SV"],
            504: ["HN"],
            505: ["NI"],
            506: ["CR"],
            507: ["PA"],
            508: ["PM"],
            509: ["HT"],
            590: ["GP", "BL", "MF"],
            591: ["BO"],
            592: ["GY"],
            593: ["EC"],
            594: ["GF"],
            595: ["PY"],
            596: ["MQ"],
            597: ["SR"],
            598: ["UY"],
            599: ["CW", "BQ"],
            670: ["TL"],
            672: ["NF"],
            673: ["BN"],
            674: ["NR"],
            675: ["PG"],
            676: ["TO"],
            677: ["SB"],
            678: ["VU"],
            679: ["FJ"],
            680: ["PW"],
            681: ["WF"],
            682: ["CK"],
            683: ["NU"],
            685: ["WS"],
            686: ["KI"],
            687: ["NC"],
            688: ["TV"],
            689: ["PF"],
            690: ["TK"],
            691: ["FM"],
            692: ["MH"],
            850: ["KP"],
            852: ["HK"],
            853: ["MO"],
            855: ["KH"],
            856: ["LA"],
            880: ["BD"],
            886: ["TW"],
            960: ["MV"],
            961: ["LB"],
            962: ["JO"],
            963: ["SY"],
            964: ["IQ"],
            965: ["KW"],
            966: ["SA"],
            967: ["YE"],
            968: ["OM"],
            970: ["PS"],
            971: ["AE"],
            972: ["IL"],
            973: ["BH"],
            974: ["QA"],
            975: ["BT"],
            976: ["MN"],
            977: ["NP"],
            992: ["TJ"],
            993: ["TM"],
            994: ["AZ"],
            995: ["GE"],
            996: ["KG"],
            998: ["UZ"]
        },
        countries: {
            AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
            AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
            AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
            AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
            AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
            AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
            AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
            AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
            AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
            AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
            AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
            AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
            AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
            AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
            AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
            BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
            BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
            BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
            BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
            BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
            BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
            BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]],
            BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
            BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]],
            BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
            BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
            BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
            BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
            BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
            BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
            BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
            BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
            BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
            BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
            BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
            CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
            CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"],
            CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
            CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
            CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
            CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
            CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
            CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
            CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
            CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"],
            CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"],
            CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
            CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
            CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
            CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
            CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
            CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
            CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
            DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
            DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
            DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
            DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
            DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
            DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
            EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
            EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
            EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"],
            EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
            ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
            ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
            ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
            FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
            FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            FK: ["500", "00", "[2-7]\\d{4}", [5]],
            FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
            FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
            FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
            GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
            GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
            GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
            GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
            GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"],
            GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
            GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
            GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
            GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
            GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
            GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
            GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
            GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
            GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
            GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
            GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
            GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
            GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
            HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
            HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
            HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]],
            HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
            ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
            IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
            IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
            IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
            IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
            IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
            IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
            IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
            IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
            JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]],
            JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
            JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
            JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"],
            KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
            KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
            KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
            KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
            KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
            KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
            KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
            KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
            KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
            KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
            KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
            LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
            LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
            LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
            LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"],
            LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
            LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"],
            LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
            LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"],
            LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
            LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
            LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
            MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],
            MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
            MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
            ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
            MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
            MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"],
            MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
            MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
            ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
            MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
            MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
            MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
            MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
            MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
            MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
            MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
            MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
            MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
            MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
            MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
            MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
            NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
            NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
            NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]],
            NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
            NG: ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
            NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
            NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
            NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
            NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
            NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
            NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
            NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
            OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
            PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
            PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
            PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
            PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
            PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
            PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
            PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
            PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
            PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
            PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
            PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
            PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
            QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
            RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
            RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
            RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
            RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
            RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"],
            SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
            SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
            SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
            SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
            SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
            SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
            SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
            SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
            SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
            SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
            SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
            SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
            SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"],
            SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
            SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
            ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
            SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
            SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
            SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"],
            SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
            TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
            TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
            TD: ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
            TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
            TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
            TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
            TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
            TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
            TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
            TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
            TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
            TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
            TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
            TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
            TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
            TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
            UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
            UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
            US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468]))\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]],
            UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
            UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]],
            VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
            VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
            VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
            VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
            VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
            VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
            VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
            WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
            WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
            XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"],
            YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
            YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],
            ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
            ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
            ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
        },
        nonGeographic: {
            800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
            808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
            870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]],
            878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
            881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]],
            882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],
            883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],
            888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
            979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
        }
    };
    function Ki(e) {
        return (Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Zi(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function Ji(e) {
        var t = ta();
        return function() {
            var r, n = na(e);
            if (t) {
                var o = na(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else
                r = n.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" === Ki(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Xi(e)
            }(this, r)
        }
    }
    function Xi(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Qi(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Qi = function(e) {
            if (null === e || (r = e,
            -1 === Function.toString.call(r).indexOf("[native code]")))
                return e;
            var r;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, n)
            }
            function n() {
                return ea(e, arguments, na(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            ra(n, e)
        }
        ,
        Qi(e)
    }
    function ea(e, t, r) {
        return ea = ta() ? Reflect.construct : function(e, t, r) {
            var n = [null];
            n.push.apply(n, t);
            var o = new (Function.bind.apply(e, n));
            return r && ra(o, r.prototype),
            o
        }
        ,
        ea.apply(null, arguments)
    }
    function ta() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (Rn) {
            return !1
        }
    }
    function ra(e, t) {
        return (ra = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function na(e) {
        return (na = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    var oa = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && ra(e, t)
        }(i, e);
        var t, r, n, o = Ji(i);
        function i(e) {
            var t;
            return function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, i),
            t = o.call(this, e),
            Object.setPrototypeOf(Xi(t), i.prototype),
            t.name = t.constructor.name,
            t
        }
        return t = i,
        r && Zi(t.prototype, r),
        n && Zi(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }(Qi(Error))
      , ia = "0-9０-９٠-٩۰-۹"
      , aa = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～");
    function da(e, t) {
        e = e.split("-"),
        t = t.split("-");
        for (var r = e[0].split("."), n = t[0].split("."), o = 0; o < 3; o++) {
            var i = Number(r[o])
              , a = Number(n[o]);
            if (i > a)
                return 1;
            if (a > i)
                return -1;
            if (!isNaN(i) && isNaN(a))
                return 1;
            if (isNaN(i) && !isNaN(a))
                return -1
        }
        return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0
    }
    var ua = {}.constructor;
    function sa(e) {
        return null != e && e.constructor === ua
    }
    function la(e) {
        return (la = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function ca(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function fa(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function $a(e, t, r) {
        return t && fa(e.prototype, t),
        r && fa(e, r),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    var pa = " ext. "
      , ha = /^\d+$/
      , ma = function() {
        function e(t) {
            ca(this, e),
            function(e) {
                if (!e)
                    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                if (!sa(e) || !sa(e.countries))
                    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(sa(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + wa(e) + ": " + e, "."))
            }(t),
            this.metadata = t,
            Pa.call(this, t)
        }
        return $a(e, [{
            key: "getCountries",
            value: function() {
                return Object.keys(this.metadata.countries).filter((function(e) {
                    return "001" !== e
                }
                ))
            }
        }, {
            key: "getCountryMetadata",
            value: function(e) {
                return this.metadata.countries[e]
            }
        }, {
            key: "nonGeographic",
            value: function() {
                if (!(this.v1 || this.v2 || this.v3))
                    return this.metadata.nonGeographic || this.metadata.nonGeographical
            }
        }, {
            key: "hasCountry",
            value: function(e) {
                return void 0 !== this.getCountryMetadata(e)
            }
        }, {
            key: "hasCallingCode",
            value: function(e) {
                if (this.getCountryCodesForCallingCode(e))
                    return !0;
                if (this.nonGeographic()) {
                    if (this.nonGeographic()[e])
                        return !0
                } else {
                    var t = this.countryCallingCodes()[e];
                    if (t && 1 === t.length && "001" === t[0])
                        return !0
                }
            }
        }, {
            key: "isNonGeographicCallingCode",
            value: function(e) {
                return this.nonGeographic() ? !!this.nonGeographic()[e] : !this.getCountryCodesForCallingCode(e)
            }
        }, {
            key: "country",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "selectNumberingPlan",
            value: function(e, t) {
                if (e && ha.test(e) && (t = e,
                e = null),
                e && "001" !== e) {
                    if (!this.hasCountry(e))
                        throw new Error("Unknown country: ".concat(e));
                    this.numberingPlan = new _a(this.getCountryMetadata(e),this)
                } else if (t) {
                    if (!this.hasCallingCode(t))
                        throw new Error("Unknown calling code: ".concat(t));
                    this.numberingPlan = new _a(this.getNumberingPlanMetadata(t),this)
                } else
                    this.numberingPlan = void 0;
                return this
            }
        }, {
            key: "getCountryCodesForCallingCode",
            value: function(e) {
                var t = this.countryCallingCodes()[e];
                if (t) {
                    if (1 === t.length && 3 === t[0].length)
                        return;
                    return t
                }
            }
        }, {
            key: "getCountryCodeForCallingCode",
            value: function(e) {
                var t = this.getCountryCodesForCallingCode(e);
                if (t)
                    return t[0]
            }
        }, {
            key: "getNumberingPlanMetadata",
            value: function(e) {
                var t = this.getCountryCodeForCallingCode(e);
                if (t)
                    return this.getCountryMetadata(t);
                if (this.nonGeographic()) {
                    var r = this.nonGeographic()[e];
                    if (r)
                        return r
                } else {
                    var n = this.countryCallingCodes()[e];
                    if (n && 1 === n.length && "001" === n[0])
                        return this.metadata.countries["001"]
                }
            }
        }, {
            key: "countryCallingCode",
            value: function() {
                return this.numberingPlan.callingCode()
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                return this.numberingPlan.IDDPrefix()
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                return this.numberingPlan.defaultIDDPrefix()
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.numberingPlan.nationalNumberPattern()
            }
        }, {
            key: "possibleLengths",
            value: function() {
                return this.numberingPlan.possibleLengths()
            }
        }, {
            key: "formats",
            value: function() {
                return this.numberingPlan.formats()
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this.numberingPlan.nationalPrefixForParsing()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.numberingPlan.nationalPrefixTransformRule()
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.numberingPlan.leadingDigits()
            }
        }, {
            key: "hasTypes",
            value: function() {
                return this.numberingPlan.hasTypes()
            }
        }, {
            key: "type",
            value: function(e) {
                return this.numberingPlan.type(e)
            }
        }, {
            key: "ext",
            value: function() {
                return this.numberingPlan.ext()
            }
        }, {
            key: "countryCallingCodes",
            value: function() {
                return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
            }
        }, {
            key: "chooseCountryByCountryCallingCode",
            value: function(e) {
                return this.selectNumberingPlan(e)
            }
        }, {
            key: "hasSelectedNumberingPlan",
            value: function() {
                return void 0 !== this.numberingPlan
            }
        }]),
        e
    }()
      , _a = function() {
        function e(t, r) {
            ca(this, e),
            this.globalMetadataObject = r,
            this.metadata = t,
            Pa.call(this, r.metadata)
        }
        return $a(e, [{
            key: "callingCode",
            value: function() {
                return this.metadata[0]
            }
        }, {
            key: "getDefaultCountryMetadataForRegion",
            value: function() {
                return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
            }
        }, {
            key: "IDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2)
                    return this.metadata[1]
            }
        }, {
            key: "defaultIDDPrefix",
            value: function() {
                if (!this.v1 && !this.v2)
                    return this.metadata[12]
            }
        }, {
            key: "nationalNumberPattern",
            value: function() {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.v1)
                    return this.metadata[this.v2 ? 2 : 3]
            }
        }, {
            key: "_getFormats",
            value: function(e) {
                return e[this.v1 ? 2 : this.v2 ? 3 : 4]
            }
        }, {
            key: "formats",
            value: function() {
                var e = this;
                return (this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map((function(t) {
                    return new ya(t,e)
                }
                ))
            }
        }, {
            key: "nationalPrefix",
            value: function() {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
            }
        }, {
            key: "_getNationalPrefixFormattingRule",
            value: function(e) {
                return e[this.v1 ? 4 : this.v2 ? 5 : 6]
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "_nationalPrefixForParsing",
            value: function() {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
            }
        }, {
            key: "nationalPrefixForParsing",
            value: function() {
                return this._nationalPrefixForParsing() || this.nationalPrefix()
            }
        }, {
            key: "nationalPrefixTransformRule",
            value: function() {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
            }
        }, {
            key: "_getNationalPrefixIsOptionalWhenFormatting",
            value: function() {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
            }
        }, {
            key: "leadingDigits",
            value: function() {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
            }
        }, {
            key: "types",
            value: function() {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
            }
        }, {
            key: "hasTypes",
            value: function() {
                return (!this.types() || 0 !== this.types().length) && !!this.types()
            }
        }, {
            key: "type",
            value: function(e) {
                if (this.hasTypes() && ba(this.types(), e))
                    return new ga(ba(this.types(), e),this)
            }
        }, {
            key: "ext",
            value: function() {
                return this.v1 || this.v2 ? pa : this.metadata[13] || pa
            }
        }]),
        e
    }()
      , ya = function() {
        function e(t, r) {
            ca(this, e),
            this._format = t,
            this.metadata = r
        }
        return $a(e, [{
            key: "pattern",
            value: function() {
                return this._format[0]
            }
        }, {
            key: "format",
            value: function() {
                return this._format[1]
            }
        }, {
            key: "leadingDigitsPatterns",
            value: function() {
                return this._format[2] || []
            }
        }, {
            key: "nationalPrefixFormattingRule",
            value: function() {
                return this._format[3] || this.metadata.nationalPrefixFormattingRule()
            }
        }, {
            key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
            value: function() {
                return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
            value: function() {
                return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
            }
        }, {
            key: "usesNationalPrefix",
            value: function() {
                return !(!this.nationalPrefixFormattingRule() || va.test(this.nationalPrefixFormattingRule()))
            }
        }, {
            key: "internationalFormat",
            value: function() {
                return this._format[5] || this.format()
            }
        }]),
        e
    }()
      , va = /^\(?\$1\)?$/
      , ga = function() {
        function e(t, r) {
            ca(this, e),
            this.type = t,
            this.metadata = r
        }
        return $a(e, [{
            key: "pattern",
            value: function() {
                return this.metadata.v1 ? this.type : this.type[0]
            }
        }, {
            key: "possibleLengths",
            value: function() {
                if (!this.metadata.v1)
                    return this.type[1] || this.metadata.possibleLengths()
            }
        }]),
        e
    }();
    function ba(e, t) {
        switch (t) {
        case "FIXED_LINE":
            return e[0];
        case "MOBILE":
            return e[1];
        case "TOLL_FREE":
            return e[2];
        case "PREMIUM_RATE":
            return e[3];
        case "PERSONAL_NUMBER":
            return e[4];
        case "VOICEMAIL":
            return e[5];
        case "UAN":
            return e[6];
        case "PAGER":
            return e[7];
        case "VOIP":
            return e[8];
        case "SHARED_COST":
            return e[9]
        }
    }
    var wa = function(e) {
        return la(e)
    };
    function Ca(e, t) {
        if ((t = new ma(t)).hasCountry(e))
            return t.country(e).countryCallingCode();
        throw new Error("Unknown country: ".concat(e))
    }
    function Pa(e) {
        var t = e.version;
        "number" == typeof t ? (this.v1 = 1 === t,
        this.v2 = 2 === t,
        this.v3 = 3 === t,
        this.v4 = 4 === t) : t ? -1 === da(t, "1.2.0") ? this.v2 = !0 : -1 === da(t, "1.7.35") ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
    }
    var Sa = function(e) {
        return "([".concat(ia, "]{1,").concat(e, "})")
    };
    function Oa(e) {
        var t = "[  \\t,]*"
          , r = "[:\\.．]?[  \\t,-]*"
          , n = "#?"
          , o = "[  \\t]*";
        return ";ext=" + Sa("20") + "|" + (t + "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)" + r + Sa("20") + n) + "|" + (t + "(?:[xｘ#＃~～]|int|ｉｎｔ)" + r + Sa("9") + n) + "|" + ("[- ]+" + Sa("6") + "#") + "|" + (o + "(?:,{2}|;)" + r + Sa("15") + n) + "|" + (o + "(?:,)+" + r + Sa("9") + n)
    }
    var xa = "[" + ia + "]{2}"
      , Ma = "[+＋]{0,1}(?:[" + aa + "]*[" + ia + "]){3,}[" + aa + ia + "]*"
      , Ea = new RegExp("^[+＋]{0,1}(?:[" + aa + "]*[" + ia + "]){1,2}$","i")
      , Da = Ma + "(?:" + Oa() + ")?"
      , Na = new RegExp("^" + xa + "$|^" + Da + "$","i");
    var Ia = new RegExp("(?:" + Oa() + ")$","i");
    var Ta = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9"
    };
    function ka(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Aa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Aa(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Aa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    function ja(e) {
        for (var t, r = "", n = ka(e.split("")); !(t = n()).done; ) {
            r += La(t.value, r) || ""
        }
        return r
    }
    function La(e, t, r) {
        return "+" === e ? t ? void ("function" == typeof r && r("end")) : "+" : function(e) {
            return Ta[e]
        }(e)
    }
    function Ra(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Fa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Fa(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Fa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    function Ba(e, t) {
        return Ua(e, void 0, t)
    }
    function Ua(e, t, r) {
        var n = r.type(t)
          , o = n && n.possibleLengths() || r.possibleLengths();
        if (!o)
            return "IS_POSSIBLE";
        if ("FIXED_LINE_OR_MOBILE" === t) {
            if (!r.type("FIXED_LINE"))
                return Ua(e, "MOBILE", r);
            var i = r.type("MOBILE");
            i && (o = function(e, t) {
                for (var r, n = e.slice(), o = Ra(t); !(r = o()).done; ) {
                    var i = r.value;
                    e.indexOf(i) < 0 && n.push(i)
                }
                return n.sort((function(e, t) {
                    return e - t
                }
                ))
            }(o, i.possibleLengths()))
        } else if (t && !n)
            return "INVALID_LENGTH";
        var a = e.length
          , d = o[0];
        return d === a ? "IS_POSSIBLE" : d > a ? "TOO_SHORT" : o[o.length - 1] < a ? "TOO_LONG" : o.indexOf(a, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
    }
    function Ya(e, t) {
        return "IS_POSSIBLE" === Ba(e, t)
    }
    function za(e, t) {
        return e = e || "",
        new RegExp("^(?:" + t + ")$").test(e)
    }
    function Wa(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Ga(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Ga(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Ga(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    var Ha = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
    function Va(e, t, r) {
        if (t = t || {},
        e.country || e.countryCallingCode) {
            (r = new ma(r)).selectNumberingPlan(e.country, e.countryCallingCode);
            var n = t.v2 ? e.nationalNumber : e.phone;
            if (za(n, r.nationalNumberPattern())) {
                if (qa(n, "FIXED_LINE", r))
                    return r.type("MOBILE") && "" === r.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : r.type("MOBILE") ? qa(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                for (var o, i = Wa(Ha); !(o = i()).done; ) {
                    var a = o.value;
                    if (qa(n, a, r))
                        return a
                }
            }
        }
    }
    function qa(e, t, r) {
        return !(!(t = r.type(t)) || !t.pattern()) && (!(t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0) && za(e, t.pattern()))
    }
    function Ka(e, t, r) {
        var n = new ma(r).getCountryCodesForCallingCode(e);
        return n ? n.filter((function(e) {
            return function(e, t, r) {
                var n = new ma(r);
                if (n.selectNumberingPlan(t),
                n.numberingPlan.possibleLengths().indexOf(e.length) >= 0)
                    return !0;
                return !1
            }(t, e, r)
        }
        )) : []
    }
    var Za = /(\$\d)/;
    function Ja(e, t, r) {
        var n = r.useInternationalFormat
          , o = r.withNationalPrefix;
        r.carrierCode,
        r.metadata;
        var i = e.replace(new RegExp(t.pattern()), n ? t.internationalFormat() : o && t.nationalPrefixFormattingRule() ? t.format().replace(Za, t.nationalPrefixFormattingRule()) : t.format());
        return n ? function(e) {
            return e.replace(new RegExp("[".concat(aa, "]+"),"g"), " ").trim()
        }(i) : i
    }
    var Xa = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
    function Qa(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return ed(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return ed(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function ed(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    function td(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function rd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? td(Object(r), !0).forEach((function(t) {
                nd(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : td(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function nd(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    var od = {
        formatExtension: function(e, t, r) {
            return "".concat(e).concat(r.ext()).concat(t)
        }
    };
    function id(e, t, r, n) {
        if (r = r ? rd(rd({}, od), r) : od,
        n = new ma(n),
        e.country && "001" !== e.country) {
            if (!n.hasCountry(e.country))
                throw new Error("Unknown country: ".concat(e.country));
            n.country(e.country)
        } else {
            if (!e.countryCallingCode)
                return e.phone || "";
            n.selectNumberingPlan(e.countryCallingCode)
        }
        var o, i = n.countryCallingCode(), a = r.v2 ? e.nationalNumber : e.phone;
        switch (t) {
        case "NATIONAL":
            return a ? dd(o = ad(a, e.carrierCode, "NATIONAL", n, r), e.ext, n, r.formatExtension) : "";
        case "INTERNATIONAL":
            return a ? (o = ad(a, null, "INTERNATIONAL", n, r),
            dd(o = "+".concat(i, " ").concat(o), e.ext, n, r.formatExtension)) : "+".concat(i);
        case "E.164":
            return "+".concat(i).concat(a);
        case "RFC3966":
            return function(e) {
                var t = e.number
                  , r = e.ext;
                if (!t)
                    return "";
                if ("+" !== t[0])
                    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                return "tel:".concat(t).concat(r ? ";ext=" + r : "")
            }({
                number: "+".concat(i).concat(a),
                ext: e.ext
            });
        case "IDD":
            if (!r.fromCountry)
                return;
            var d = function(e, t, r, n, o) {
                var i = Ca(n, o.metadata);
                if (i === r) {
                    var a = ad(e, t, "NATIONAL", o);
                    return "1" === r ? r + " " + a : a
                }
                var d = function(e, t, r) {
                    var n = new ma(r);
                    return n.selectNumberingPlan(e, t),
                    n.defaultIDDPrefix() ? n.defaultIDDPrefix() : Xa.test(n.IDDPrefix()) ? n.IDDPrefix() : void 0
                }(n, void 0, o.metadata);
                if (d)
                    return "".concat(d, " ").concat(r, " ").concat(ad(e, null, "INTERNATIONAL", o))
            }(a, e.carrierCode, i, r.fromCountry, n);
            return dd(d, e.ext, n, r.formatExtension);
        default:
            throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
        }
    }
    function ad(e, t, r, n, o) {
        var i = function(e, t) {
            for (var r, n = Qa(e); !(r = n()).done; ) {
                var o = r.value;
                if (o.leadingDigitsPatterns().length > 0) {
                    var i = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
                    if (0 !== t.search(i))
                        continue
                }
                if (za(t, o.pattern()))
                    return o
            }
        }(n.formats(), e);
        return i ? Ja(e, i, {
            useInternationalFormat: "INTERNATIONAL" === r,
            withNationalPrefix: !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !o || !1 !== o.nationalPrefix,
            carrierCode: t,
            metadata: n
        }) : e
    }
    function dd(e, t, r, n) {
        return t ? n(e, t, r) : e
    }
    function ud(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function sd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ud(Object(r), !0).forEach((function(t) {
                ld(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function ld(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function cd(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var fd = function() {
        function e(t, r, n) {
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            !t)
                throw new TypeError("`country` or `countryCallingCode` not passed");
            if (!r)
                throw new TypeError("`nationalNumber` not passed");
            if (!n)
                throw new TypeError("`metadata` not passed");
            var o = function(e, t) {
                var r, n, o = new ma(t);
                $d(e) ? (r = e,
                o.selectNumberingPlan(r),
                n = o.countryCallingCode()) : n = e;
                return {
                    country: r,
                    countryCallingCode: n
                }
            }(t, n)
              , i = o.country
              , a = o.countryCallingCode;
            this.country = i,
            this.countryCallingCode = a,
            this.nationalNumber = r,
            this.number = "+" + this.countryCallingCode + this.nationalNumber,
            this.getMetadata = function() {
                return n
            }
        }
        var t, r, n;
        return t = e,
        (r = [{
            key: "setExt",
            value: function(e) {
                this.ext = e
            }
        }, {
            key: "getPossibleCountries",
            value: function() {
                return this.country ? [this.country] : Ka(this.countryCallingCode, this.nationalNumber, this.getMetadata())
            }
        }, {
            key: "isPossible",
            value: function() {
                return function(e, t, r) {
                    if (void 0 === t && (t = {}),
                    r = new ma(r),
                    t.v2) {
                        if (!e.countryCallingCode)
                            throw new Error("Invalid phone number object passed");
                        r.selectNumberingPlan(e.countryCallingCode)
                    } else {
                        if (!e.phone)
                            return !1;
                        if (e.country) {
                            if (!r.hasCountry(e.country))
                                throw new Error("Unknown country: ".concat(e.country));
                            r.country(e.country)
                        } else {
                            if (!e.countryCallingCode)
                                throw new Error("Invalid phone number object passed");
                            r.selectNumberingPlan(e.countryCallingCode)
                        }
                    }
                    if (r.possibleLengths())
                        return Ya(e.phone || e.nationalNumber, r);
                    if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
                        return !0;
                    throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
                }(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "isValid",
            value: function() {
                return e = this,
                t = {
                    v2: !0
                },
                r = this.getMetadata(),
                t = t || {},
                (r = new ma(r)).selectNumberingPlan(e.country, e.countryCallingCode),
                r.hasTypes() ? void 0 !== Va(e, t, r.metadata) : za(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern());
                var e, t, r
            }
        }, {
            key: "isNonGeographic",
            value: function() {
                return new ma(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)
            }
        }, {
            key: "isEqual",
            value: function(e) {
                return this.number === e.number && this.ext === e.ext
            }
        }, {
            key: "getType",
            value: function() {
                return Va(this, {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "format",
            value: function(e, t) {
                return id(this, e, t ? sd(sd({}, t), {}, {
                    v2: !0
                }) : {
                    v2: !0
                }, this.getMetadata())
            }
        }, {
            key: "formatNational",
            value: function(e) {
                return this.format("NATIONAL", e)
            }
        }, {
            key: "formatInternational",
            value: function(e) {
                return this.format("INTERNATIONAL", e)
            }
        }, {
            key: "getURI",
            value: function(e) {
                return this.format("RFC3966", e)
            }
        }]) && cd(t.prototype, r),
        n && cd(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }()
      , $d = function(e) {
        return /^[A-Z]{2}$/.test(e)
    };
    var pd = new RegExp("([" + ia + "])");
    function hd(e, t) {
        var r = function(e, t) {
            if (e && t.numberingPlan.nationalPrefixForParsing()) {
                var r = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")")
                  , n = r.exec(e);
                if (n) {
                    var o, i, a, d = n.length - 1, u = d > 0 && n[d];
                    if (t.nationalPrefixTransformRule() && u)
                        o = e.replace(r, t.nationalPrefixTransformRule()),
                        d > 1 && (i = n[1]);
                    else {
                        var s = n[0];
                        o = e.slice(s.length),
                        u && (i = n[1])
                    }
                    if (u) {
                        var l = e.indexOf(n[1]);
                        e.slice(0, l) === t.numberingPlan.nationalPrefix() && (a = t.numberingPlan.nationalPrefix())
                    } else
                        a = n[0];
                    return {
                        nationalNumber: o,
                        nationalPrefix: a,
                        carrierCode: i
                    }
                }
            }
            return {
                nationalNumber: e
            }
        }(e, t)
          , n = r.carrierCode
          , o = r.nationalNumber;
        if (o !== e) {
            if (!function(e, t, r) {
                if (za(e, r.nationalNumberPattern()) && !za(t, r.nationalNumberPattern()))
                    return !1;
                return !0
            }(e, o, t))
                return {
                    nationalNumber: e
                };
            if (t.possibleLengths() && !function(e, t) {
                switch (Ba(e, t)) {
                case "TOO_SHORT":
                case "INVALID_LENGTH":
                    return !1;
                default:
                    return !0
                }
            }(o, t))
                return {
                    nationalNumber: e
                }
        }
        return {
            nationalNumber: o,
            carrierCode: n
        }
    }
    function md(e, t, r, n) {
        if (!e)
            return {};
        var o;
        if ("+" !== e[0]) {
            var i = function(e, t, r, n) {
                if (t) {
                    var o = new ma(n);
                    o.selectNumberingPlan(t, r);
                    var i = new RegExp(o.IDDPrefix());
                    if (0 === e.search(i)) {
                        var a = (e = e.slice(e.match(i)[0].length)).match(pd);
                        if (!(a && null != a[1] && a[1].length > 0 && "0" === a[1]))
                            return e
                    }
                }
            }(e, t, r, n);
            if (!i || i === e) {
                if (t || r) {
                    var a = function(e, t, r, n) {
                        var o = t ? Ca(t, n) : r;
                        if (0 === e.indexOf(o)) {
                            (n = new ma(n)).selectNumberingPlan(t, r);
                            var i = e.slice(o.length)
                              , a = hd(i, n).nationalNumber
                              , d = hd(e, n).nationalNumber;
                            if (!za(d, n.nationalNumberPattern()) && za(a, n.nationalNumberPattern()) || "TOO_LONG" === Ba(d, n))
                                return {
                                    countryCallingCode: o,
                                    number: i
                                }
                        }
                        return {
                            number: e
                        }
                    }(e, t, r, n)
                      , d = a.countryCallingCode
                      , u = a.number;
                    if (d)
                        return {
                            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                            countryCallingCode: d,
                            number: u
                        }
                }
                return {
                    number: e
                }
            }
            o = !0,
            e = "+" + i
        }
        if ("0" === e[1])
            return {};
        n = new ma(n);
        for (var s = 2; s - 1 <= 3 && s <= e.length; ) {
            var l = e.slice(1, s);
            if (n.hasCallingCode(l))
                return n.selectNumberingPlan(l),
                {
                    countryCallingCodeSource: o ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
                    countryCallingCode: l,
                    number: e.slice(s)
                };
            s++
        }
        return {}
    }
    function _d(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (r)
            return (r = r.call(e)).next.bind(r);
        if (Array.isArray(e) || (r = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return yd(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return yd(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
                return n >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[n++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function yd(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    function vd(e, t) {
        var r = t.nationalNumber
          , n = t.defaultCountry
          , o = t.metadata;
        var i = o.getCountryCodesForCallingCode(e);
        if (i)
            return 1 === i.length ? i[0] : function(e, t) {
                var r = t.countries;
                t.defaultCountry;
                var n = t.metadata;
                n = new ma(n);
                for (var o, i = _d(r); !(o = i()).done; ) {
                    var a = o.value;
                    if (n.country(a),
                    n.leadingDigits()) {
                        if (e && 0 === e.search(n.leadingDigits()))
                            return a
                    } else if (Va({
                        phone: e,
                        country: a
                    }, void 0, n.metadata))
                        return a
                }
            }(r, {
                countries: i,
                defaultCountry: n,
                metadata: o.metadata
            })
    }
    var gd = "([" + ia + "]|[\\-\\.\\(\\)]?)"
      , bd = new RegExp("^\\+" + gd + "*[" + ia + "]" + gd + "*$","g")
      , wd = new RegExp("^(" + ("[" + ia + "]+((\\-)*[" + ia + "])*") + "\\.)*" + ("[a-zA-Z]+((\\-)*[" + ia + "])*") + "\\.?$","g")
      , Cd = "tel:"
      , Pd = ";phone-context=";
    function Sd(e, t) {
        var r, n = t.extractFormattedPhoneNumber, o = function(e) {
            var t = e.indexOf(Pd);
            if (t < 0)
                return null;
            var r = t + 15;
            if (r >= e.length)
                return "";
            var n = e.indexOf(";", r);
            return n >= 0 ? e.substring(r, n) : e.substring(r)
        }(e);
        if (!function(e) {
            return null === e || 0 !== e.length && (bd.test(e) || wd.test(e))
        }(o))
            throw new oa("NOT_A_NUMBER");
        if (null === o)
            r = n(e) || "";
        else {
            r = "",
            "+" === o.charAt(0) && (r += o);
            var i, a = e.indexOf(Cd);
            i = a >= 0 ? a + 4 : 0;
            var d = e.indexOf(Pd);
            r += e.substring(i, d)
        }
        var u = r.indexOf(";isub=");
        if (u > 0 && (r = r.substring(0, u)),
        "" !== r)
            return r
    }
    var Od = new RegExp("[+＋" + ia + "]")
      , xd = new RegExp("[^" + ia + "#]+$");
    function Md(e, t, r) {
        if (t = t || {},
        r = new ma(r),
        t.defaultCountry && !r.hasCountry(t.defaultCountry)) {
            if (t.v2)
                throw new oa("INVALID_COUNTRY");
            throw new Error("Unknown country: ".concat(t.defaultCountry))
        }
        var n = function(e, t, r) {
            var n = Sd(e, {
                extractFormattedPhoneNumber: function(e) {
                    return function(e, t, r) {
                        if (!e)
                            return;
                        if (e.length > 250) {
                            if (r)
                                throw new oa("TOO_LONG");
                            return
                        }
                        if (!1 === t)
                            return e;
                        var n = e.search(Od);
                        if (n < 0)
                            return;
                        return e.slice(n).replace(xd, "")
                    }(e, r, t)
                }
            });
            if (!n)
                return {};
            if (!function(e) {
                return e.length >= 2 && Na.test(e)
            }(n))
                return function(e) {
                    return Ea.test(e)
                }(n) ? {
                    error: "TOO_SHORT"
                } : {};
            var o = function(e) {
                var t = e.search(Ia);
                if (t < 0)
                    return {};
                for (var r = e.slice(0, t), n = e.match(Ia), o = 1; o < n.length; ) {
                    if (n[o])
                        return {
                            number: r,
                            ext: n[o]
                        };
                    o++
                }
            }(n);
            if (o.ext)
                return o;
            return {
                number: n
            }
        }(e, t.v2, t.extract)
          , o = n.number
          , i = n.ext
          , a = n.error;
        if (!o) {
            if (t.v2) {
                if ("TOO_SHORT" === a)
                    throw new oa("TOO_SHORT");
                throw new oa("NOT_A_NUMBER")
            }
            return {}
        }
        var d = function(e, t, r, n) {
            var o, i = md(ja(e), t, r, n.metadata), a = i.countryCallingCodeSource, d = i.countryCallingCode, u = i.number;
            if (d)
                n.selectNumberingPlan(d);
            else {
                if (!u || !t && !r)
                    return {};
                n.selectNumberingPlan(t, r),
                t && (o = t),
                d = r || Ca(t, n.metadata)
            }
            if (!u)
                return {
                    countryCallingCodeSource: a,
                    countryCallingCode: d
                };
            var s = hd(ja(u), n)
              , l = s.nationalNumber
              , c = s.carrierCode
              , f = vd(d, {
                nationalNumber: l,
                defaultCountry: t,
                metadata: n
            });
            f && (o = f,
            "001" === f || n.country(o));
            return {
                country: o,
                countryCallingCode: d,
                countryCallingCodeSource: a,
                nationalNumber: l,
                carrierCode: c
            }
        }(o, t.defaultCountry, t.defaultCallingCode, r)
          , u = d.country
          , s = d.nationalNumber
          , l = d.countryCallingCode
          , c = d.countryCallingCodeSource
          , f = d.carrierCode;
        if (!r.hasSelectedNumberingPlan()) {
            if (t.v2)
                throw new oa("INVALID_COUNTRY");
            return {}
        }
        if (!s || s.length < 2) {
            if (t.v2)
                throw new oa("TOO_SHORT");
            return {}
        }
        if (s.length > 17) {
            if (t.v2)
                throw new oa("TOO_LONG");
            return {}
        }
        if (t.v2) {
            var $ = new fd(l,s,r.metadata);
            return u && ($.country = u),
            f && ($.carrierCode = f),
            i && ($.ext = i),
            $.__countryCallingCodeSource = c,
            $
        }
        var p = !!(t.extended ? r.hasSelectedNumberingPlan() : u) && za(s, r.nationalNumberPattern());
        return t.extended ? {
            country: u,
            countryCallingCode: l,
            carrierCode: f,
            valid: p,
            possible: !!p || !(!0 !== t.extended || !r.possibleLengths() || !Ya(s, r)),
            phone: s,
            ext: i
        } : p ? function(e, t, r) {
            var n = {
                country: e,
                phone: t
            };
            r && (n.ext = r);
            return n
        }(u, s, i) : {}
    }
    function Ed(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Dd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ed(Object(r), !0).forEach((function(t) {
                Nd(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ed(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Nd(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function Id(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Td(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function kd(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == r)
                return;
            var n, o, i = [], a = !0, d = !1;
            try {
                for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value),
                !t || i.length !== t); a = !0)
                    ;
            } catch (u) {
                d = !0,
                o = u
            } finally {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (d)
                        throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Ad(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return Ad(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Ad(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    function jd(e) {
        var t, r, n, o = kd(Array.prototype.slice.call(e), 4), i = o[0], a = o[1], d = o[2], u = o[3];
        if ("string" != typeof i)
            throw new TypeError("A text for parsing must be a string.");
        if (t = i,
        a && "string" != typeof a) {
            if (!sa(a))
                throw new Error("Invalid second argument: ".concat(a));
            d ? (r = a,
            n = d) : n = a
        } else
            u ? (r = d,
            n = u) : (r = void 0,
            n = d),
            a && (r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Id(Object(r), !0).forEach((function(t) {
                        Td(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }({
                defaultCountry: a
            }, r));
        return {
            text: t,
            options: r,
            metadata: n
        }
    }
    function Ld(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function Rd(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ld(Object(r), !0).forEach((function(t) {
                Fd(e, t, r[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }
            ))
        }
        return e
    }
    function Fd(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function Bd(e, t, r) {
        t && t.defaultCountry && !function(e, t) {
            return t.countries.hasOwnProperty(e)
        }(t.defaultCountry, r) && (t = Rd(Rd({}, t), {}, {
            defaultCountry: void 0
        }));
        try {
            return function(e, t, r) {
                return Md(e, Dd(Dd({}, t), {}, {
                    v2: !0
                }), r)
            }(e, t, r)
        } catch (n) {
            if (!(n instanceof oa))
                throw n
        }
    }
    function Ud() {
        var e = jd(arguments);
        return Bd(e.text, e.options, e.metadata)
    }
    function Yd() {
        return function(e, t) {
            var r = Array.prototype.slice.call(t);
            return r.push(qi),
            e.apply(this, r)
        }(Ud, arguments)
    }
    var zd = {
        exports: {}
    }
      , Wd = {
        exports: {}
    };
    !function(e, t) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if (!("string" == typeof e || e instanceof String)) {
                var t = r(e);
                throw null === e ? t = "null" : "object" === t && (t = e.constructor.name),
                new TypeError("Expected a string but received a ".concat(t))
            }
        }
        ,
        e.exports = t.default,
        e.exports.default = t.default
    }(Wd, Wd.exports);
    var Gd = Wd.exports
      , Hd = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var r, i;
            (0,
            n.default)(e),
            "object" === o(t) ? (r = t.min || 0,
            i = t.max) : (r = arguments[1],
            i = arguments[2]);
            var a = encodeURI(e).split(/%..|./).length - 1;
            return a >= r && (void 0 === i || a <= i)
        }
        ;
        var r, n = (r = Gd) && r.__esModule ? r : {
            default: r
        };
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        e.exports = t.default,
        e.exports.default = t.default
    }(Hd, Hd.exports);
    var Vd = Hd.exports
      , qd = {
        exports: {}
    }
      , Kd = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            for (var r in t)
                void 0 === e[r] && (e[r] = t[r]);
            return e
        }
        ,
        e.exports = t.default,
        e.exports.default = t.default
    }(Kd, Kd.exports);
    var Zd = Kd.exports;
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)(e),
            (t = (0,
            n.default)(t, i)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
            !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
            var o = e.split(".")
              , a = o[o.length - 1];
            if (t.require_tld) {
                if (o.length < 2)
                    return !1;
                if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(a))
                    return !1;
                if (/\s/.test(a))
                    return !1
            }
            if (!t.allow_numeric_tld && /^\d+$/.test(a))
                return !1;
            return o.every((function(e) {
                return !(e.length > 63 && !t.ignore_max_length) && (!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) && (!/[\uff01-\uff5e]/.test(e) && (!/^-|-$/.test(e) && !(!t.allow_underscores && /_/.test(e)))))
            }
            ))
        }
        ;
        var r = o(Gd)
          , n = o(Zd);
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_numeric_tld: !1,
            allow_wildcard: !1,
            ignore_max_length: !1
        };
        e.exports = t.default,
        e.exports.default = t.default
    }(qd, qd.exports);
    var Jd = qd.exports
      , Xd = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ((0,
            n.default)(t),
            !(r = String(r)))
                return e(t, 4) || e(t, 6);
            if ("4" === r)
                return a.test(t);
            if ("6" === r)
                return u.test(t);
            return !1
        }
        ;
        var r, n = (r = Gd) && r.__esModule ? r : {
            default: r
        };
        var o = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"
          , i = "(".concat(o, "[.]){3}").concat(o)
          , a = new RegExp("^".concat(i, "$"))
          , d = "(?:[0-9a-fA-F]{1,4})"
          , u = new RegExp("^(" + "(?:".concat(d, ":){7}(?:").concat(d, "|:)|") + "(?:".concat(d, ":){6}(?:").concat(i, "|:").concat(d, "|:)|") + "(?:".concat(d, ":){5}(?::").concat(i, "|(:").concat(d, "){1,2}|:)|") + "(?:".concat(d, ":){4}(?:(:").concat(d, "){0,1}:").concat(i, "|(:").concat(d, "){1,3}|:)|") + "(?:".concat(d, ":){3}(?:(:").concat(d, "){0,2}:").concat(i, "|(:").concat(d, "){1,4}|:)|") + "(?:".concat(d, ":){2}(?:(:").concat(d, "){0,3}:").concat(i, "|(:").concat(d, "){1,5}|:)|") + "(?:".concat(d, ":){1}(?:(:").concat(d, "){0,4}:").concat(i, "|(:").concat(d, "){1,6}|:)|") + "(?::((?::".concat(d, "){0,5}:").concat(i, "|(?::").concat(d, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
        e.exports = t.default,
        e.exports.default = t.default
    }(Xd, Xd.exports);
    var Qd = Xd.exports;
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ((0,
            r.default)(e),
            (t = (0,
            a.default)(t, u)).require_display_name || t.allow_display_name) {
                var d = e.match(s);
                if (d) {
                    var m = d[1];
                    if (e = e.replace(m, "").replace(/(^<|>$)/g, ""),
                    m.endsWith(" ") && (m = m.slice(0, -1)),
                    !function(e) {
                        var t = e.replace(/^"(.+)"$/, "$1");
                        if (!t.trim())
                            return !1;
                        if (/[\.";<>]/.test(t)) {
                            if (t === e)
                                return !1;
                            if (!(t.split('"').length === t.split('\\"').length))
                                return !1
                        }
                        return !0
                    }(m))
                        return !1
                } else if (t.require_display_name)
                    return !1
            }
            if (!t.ignore_max_length && e.length > h)
                return !1;
            var _ = e.split("@")
              , y = _.pop()
              , v = y.toLowerCase();
            if (t.host_blacklist.includes(v))
                return !1;
            if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(v))
                return !1;
            var g = _.join("@");
            if (t.domain_specific_validation && ("gmail.com" === v || "googlemail.com" === v)) {
                var b = (g = g.toLowerCase()).split("+")[0];
                if (!(0,
                n.default)(b.replace(/\./g, ""), {
                    min: 6,
                    max: 30
                }))
                    return !1;
                for (var w = b.split("."), C = 0; C < w.length; C++)
                    if (!c.test(w[C]))
                        return !1
            }
            if (!(!1 !== t.ignore_max_length || (0,
            n.default)(g, {
                max: 64
            }) && (0,
            n.default)(y, {
                max: 254
            })))
                return !1;
            if (!(0,
            o.default)(y, {
                require_tld: t.require_tld,
                ignore_max_length: t.ignore_max_length,
                allow_underscores: t.allow_underscores
            })) {
                if (!t.allow_ip_domain)
                    return !1;
                if (!(0,
                i.default)(y)) {
                    if (!y.startsWith("[") || !y.endsWith("]"))
                        return !1;
                    var P = y.slice(1, -1);
                    if (0 === P.length || !(0,
                    i.default)(P))
                        return !1
                }
            }
            if ('"' === g[0])
                return g = g.slice(1, g.length - 1),
                t.allow_utf8_local_part ? p.test(g) : f.test(g);
            for (var S = t.allow_utf8_local_part ? $ : l, O = g.split("."), x = 0; x < O.length; x++)
                if (!S.test(O[x]))
                    return !1;
            if (t.blacklisted_chars && -1 !== g.search(new RegExp("[".concat(t.blacklisted_chars, "]+"),"g")))
                return !1;
            return !0
        }
        ;
        var r = d(Gd)
          , n = d(Vd)
          , o = d(Jd)
          , i = d(Qd)
          , a = d(Zd);
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = {
            allow_display_name: !1,
            allow_underscores: !1,
            require_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0,
            blacklisted_chars: "",
            ignore_max_length: !1,
            host_blacklist: [],
            host_whitelist: []
        }
          , s = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i
          , l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i
          , c = /^[a-z\d]+$/
          , f = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i
          , $ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
          , p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i
          , h = 254;
        e.exports = t.default,
        e.exports.default = t.default
    }(zd, zd.exports);
    const eu = Wn(zd.exports);
    var tu = {
        exports: {}
    };
    !function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return (0,
            r.default)(e),
            0 === ((t = (0,
            n.default)(t, i)).ignore_whitespace ? e.trim().length : e.length)
        }
        ;
        var r = o(Gd)
          , n = o(Zd);
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            ignore_whitespace: !1
        };
        e.exports = t.default,
        e.exports.default = t.default
    }(tu, tu.exports);
    const ru = Wn(tu.exports);
    function nu(e) {
        const t = e.startsWith("+86");
        if (t)
            return function(e) {
                return /^1[3-9]\d{9}$/.test(e.replaceAll(" ", "").replaceAll("+86", ""))
            }(e);
        const r = t ? Yd(e, "CN") : Yd(e);
        return !!r && r.isValid()
    }
    var ou = (e => (e.EmailError = "email",
    e.FirstNameError = "first_name",
    e.LastNameError = "last_name",
    e.PhoneError = "phone",
    e.GdprError = "gdpr",
    e.TcpaError = "tcpa",
    e.BirthdayError = "birthday",
    e))(ou || {});
    const iu = e => {
        if (Hn(e).isValid() && Hn(e).isBefore(Hn()) && /^\d{4}-\d{2}-\d{2}$/.test(e)) {
            const [t,r,n] = e.split("-").map(Number);
            return !(t <= 999 || r < 1 || r > 12 || n < 1 || n > 31)
        }
        return !1
    }
      , au = {
        labelWrapper: "_labelWrapper_rn85h_2",
        small: "_small_rn85h_9",
        standard: "_standard_rn85h_12",
        large: "_large_rn85h_15",
        mobile: "_mobile_rn85h_18",
        inputWrapper: "_inputWrapper_rn85h_30",
        yearWrapper: "_yearWrapper_rn85h_35",
        monthWrapper: "_monthWrapper_rn85h_39",
        dayWrapper: "_dayWrapper_rn85h_43"
    }
      , du = ["04", "06", "09", "11", "4", "6", "9"]
      , uu = (e, t, r) => {
        const n = Number(e);
        return t ? du.includes(t) ? Math.min(n, 30) : "02" === t && 4 === (null == r ? void 0 : r.length) ? Math.min(n, Number(r) % 4 == 0 ? 29 : 28) : n : n
    }
      , su = e => /^\d+$/.test(e)
      , lu = e => {
        const {label: r, year: n, month: o, day: i, cornerRadius: a, colors: d, error: u, yearValue: s, monthValue: l, dayValue: c, format: f, onChange: $, showErrorText: p, size: h, isMobile: m} = e
          , _ = e => {
            setTimeout(( () => {
                var t, r;
                return null == (r = null == (t = null == document ? void 0 : document.getElementById) ? void 0 : t.call(document, e)) ? void 0 : r.focus()
            }
            ), 0)
        }
        ;
        t.useEffect(( () => {
            if (!c)
                return;
            const e = uu(c, l, s);
            $(e < 10 && e > 0 ? `0${e}` : String(e), "day")
        }
        ), [s, l, uu]);
        const y = Ao(Bi, {
            className: au.yearWrapper,
            shape: a,
            size: h,
            color: d.primary_button_background_color,
            style: {
                color: d.input
            },
            value: s,
            id: "year_input",
            placeholder: n.placeholder,
            onChange: e => {
                const {value: t} = e.target;
                !su(t) && "" !== t || t.length > 4 || ($(t, "year"),
                t.length >= 4 && f === Dn.YYYYMMDD && _("month_input"))
            }
            ,
            type: "text",
            ariaLabel: "Year"
        })
          , v = Ao(Bi, {
            className: au.monthWrapper,
            shape: a,
            size: h,
            color: d.primary_button_background_color,
            style: {
                color: d.input
            },
            value: l,
            id: "month_input",
            placeholder: o.placeholder,
            onChange: e => {
                const {value: t} = e.target;
                (su(t) || "" === t) && ($(t.slice(0, 2), "month"),
                2 === Number(t) && Number(c) > 29 && $("29", "day"),
                t.length >= 2 && (f === Dn.YYYYMMDD || f === Dn.MMDDYYYY ? _("day_input") : f === Dn.DDMMYYYY && _("year_input")))
            }
            ,
            onBlur: () => {
                Number(l) >= 1 && 1 === l.length && $(`0${l}`, "month"),
                Number(l) > 12 && setTimeout(( () => $("12", "month")), 0)
            }
            ,
            type: "text",
            ariaLabel: "Month"
        })
          , g = Ao(Bi, {
            className: au.dayWrapper,
            shape: a,
            size: h,
            color: d.primary_button_background_color,
            style: {
                color: d.input
            },
            value: c,
            id: "day_input",
            placeholder: i.placeholder,
            onChange: e => {
                const {value: t} = e.target;
                if (!su(t) && "" !== t)
                    return;
                let r = t.slice(0, 2);
                s && Number(s) % 4 != 0 ? 2 === Number(l) && Number(t) > 28 && (r = "28") : 2 === Number(l) && Number(t) > 29 && (r = "29"),
                $(r, "day"),
                t.length >= 2 && (f === Dn.DDMMYYYY && _("month_input"),
                f === Dn.MMDDYYYY && _("year_input"))
            }
            ,
            onBlur: () => {
                if (!c || 0 === Number(c))
                    return;
                let e = Math.max(Number(c), 0);
                e = Math.min(e, 31),
                du.includes(l) && (e = Math.min(e, 30)),
                2 === Number(l) && (e > 29 ? e = 29 : 4 === s.length && Number(s) % 4 != 0 && e > 28 && (e = 28)),
                setTimeout(( () => {
                    const t = e < 10 ? `0${e}` : String(e);
                    $(t, "day")
                }
                ), 0)
            }
            ,
            type: "text",
            ariaLabel: "Day"
        })
          , b = p && (e.required || s || l || c) && !iu(`${s}-${l}-${c}`);
        return jo("div", {
            className: Go(gi("Input__BirthdayWrapper")),
            children: [Ao("div", {
                className: Go(gi("Input__Label"), au.labelWrapper, au[h], m && au.mobile),
                style: {
                    color: d.label_text_color
                },
                children: r
            }), jo("div", {
                className: Go(gi("Input__Wrapper"), au.inputWrapper),
                children: [f === Dn.YYYYMMDD && jo(Lo, {
                    children: [y, v, g]
                }), f === Dn.MMDDYYYY && jo(Lo, {
                    children: [v, g, y]
                }), f === Dn.DDMMYYYY && jo(Lo, {
                    children: [g, v, y]
                })]
            }), b && Ao(Vi, {
                embed: !0,
                errText: u,
                colors: d
            })]
        })
    }
    ;
    var cu = (e => (e[e.EmailInvalid = 1001] = "EmailInvalid",
    e[e.AlreadySubscribe = 1002] = "AlreadySubscribe",
    e[e.SubmitFail = 1003] = "SubmitFail",
    e[e.FirstNameInvalid = 1004] = "FirstNameInvalid",
    e[e.LastNameInvalid = 1005] = "LastNameInvalid",
    e[e.PhoneInvalid = 1030] = "PhoneInvalid",
    e[e.PhoneAlreadySubscribe = 1031] = "PhoneAlreadySubscribe",
    e[e.GDPRInvalid = 1040] = "GDPRInvalid",
    e[e.TCPAInvalid = 1050] = "TCPAInvalid",
    e))(cu || {});
    const fu = e => {
        const {required: t, cornerRadius: r, placeholder: n, colors: o, error: i, alreadyError: a, size: d, value: u, onChange: s, showErrorText: l, errorCodeList: c} = e
          , f = t && l && !eu(u) || l && !t && "" !== u && !eu(u)
          , $ = c.includes(cu.AlreadySubscribe);
        return jo("div", {
            children: [Ao(Bi, {
                id: "email",
                size: d,
                shape: r,
                value: u,
                color: o.primary_button_background_color,
                style: {
                    color: o.input
                },
                placeholder: n,
                autoComplete: "email",
                onChange: e => "function" == typeof s && s(e.target.value),
                ariaLabel: n
            }), (f || c.includes(cu.EmailInvalid)) && !$ && Ao(Vi, {
                embed: !0,
                errText: i,
                colors: o
            }), $ && Ao(Vi, {
                embed: !0,
                errText: a,
                colors: o
            })]
        })
    }
      , $u = {
        inputWrapper: "_inputWrapper_1k4f0_2",
        horizontal: "_horizontal_1k4f0_2",
        small: "_small_1k4f0_7",
        first: "_first_1k4f0_10",
        last: "_last_1k4f0_13"
    }
      , pu = e => {
        let {layout: t, field_type: r, first_name: n, last_name: o, cornerRadius: i, colors: a, error: d, firstValue: u, lastValue: s, onChange: l, showErrorText: c, size: f} = e
          , $ = r !== Mn.LAST
          , p = r !== Mn.FIRST;
        return r !== Mn.LAST && r !== Mn.FIRST || (t = "vertical"),
        jo("div", {
            style: {
                marginBottom: "small" === f ? 16 : 20,
                display: "horizontal" === t ? "flex" : ""
            },
            children: [$ && jo("div", {
                className: Go($u.inputWrapper, $u[t], $u[f], $u.first),
                children: [Ao(Bi, {
                    shape: i,
                    size: f,
                    color: a.primary_button_background_color,
                    style: {
                        color: a.input
                    },
                    value: u,
                    id: "first_name",
                    placeholder: n.placeholder,
                    onChange: e => "function" == typeof l && l(e.target.value, "first"),
                    type: "text",
                    ariaLabel: n.placeholder
                }), n.required && c && "" == u && Ao(Vi, {
                    embed: !0,
                    errText: d.first_name,
                    colors: a
                })]
            }), p && jo("div", {
                className: Go($u.inputWrapper, $u[t], $u[f], $u.last),
                children: [Ao(Bi, {
                    size: f,
                    shape: i,
                    color: a.primary_button_background_color,
                    style: {
                        color: a.input
                    },
                    value: s,
                    id: "last_name",
                    placeholder: o.placeholder,
                    onChange: e => "function" == typeof l && l(e.target.value, "last"),
                    type: "text",
                    ariaLabel: o.placeholder
                }), o.required && c && "" == s && Ao(Vi, {
                    embed: !0,
                    errText: d.last_name,
                    colors: a
                })]
            })]
        })
    }
    ;
    var hu = {
        exports: {}
    };
    !function(e) {
        !function(r, n) {
            e.exports = n(t)
        }(0, (e => ( () => {
            var t = {
                0: (e, t, r) => {
                    r.r(t)
                }
                ,
                374: (e, t, r) => {
                    r.r(t)
                }
                ,
                840: (e, t, r) => {
                    r.r(t)
                }
                ,
                481: (e, t, r) => {
                    r.r(t)
                }
                ,
                549: (e, t, r) => {
                    r.r(t)
                }
                ,
                153: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                      , o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    }
                    : function(e, t) {
                        e.default = t
                    }
                    )
                      , a = this && this.__importStar || function(e) {
                        if (e && e.__esModule)
                            return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                        return i(t, e),
                        t
                    }
                      , d = this && this.__rest || function(e, t) {
                        var r = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.CountrySelector = void 0,
                    r(0);
                    var u = a(r(156))
                      , s = r(946)
                      , l = r(515)
                      , c = r(332)
                      , f = r(425)
                      , $ = r(60);
                    t.CountrySelector = function(e) {
                        var t, r, o = e.selectedCountry, i = e.onSelect, a = e.disabled, p = e.hideDropdown, h = e.countries, m = void 0 === h ? s.defaultCountries : h, _ = e.renderButtonWrapper, y = d(e, ["selectedCountry", "onSelect", "disabled", "hideDropdown", "countries", "renderButtonWrapper"]), v = (0,
                        u.useState)(!1), g = v[0], b = v[1], w = (0,
                        u.useMemo)((function() {
                            if (o)
                                return (0,
                                c.getCountry)({
                                    value: o,
                                    field: "iso2",
                                    countries: m
                                })
                        }
                        ), [m, o]), C = (0,
                        u.useRef)(null);
                        return u.default.createElement("div", {
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector"],
                                rawClassNames: [y.className]
                            }),
                            style: y.style,
                            ref: C
                        }, (t = {
                            title: null == w ? void 0 : w.name,
                            onClick: function() {
                                return b((function(e) {
                                    return !e
                                }
                                ))
                            },
                            onMouseDown: function(e) {
                                return e.preventDefault()
                            },
                            onKeyDown: function(e) {
                                e.key && ["ArrowUp", "ArrowDown"].includes(e.key) && (e.preventDefault(),
                                b(!0))
                            },
                            disabled: p || a,
                            role: "combobox",
                            "aria-label": "Country selector",
                            "aria-haspopup": "listbox",
                            "aria-expanded": g
                        },
                        r = u.default.createElement("div", {
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector-button__button-content"],
                                rawClassNames: [y.buttonContentWrapperClassName]
                            }),
                            style: y.buttonContentWrapperStyle
                        }, u.default.createElement(f.FlagEmoji, {
                            iso2: o,
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector-button__flag-emoji", a && "country-selector-button__flag-emoji--disabled"],
                                rawClassNames: [y.flagClassName]
                            }),
                            style: n({
                                visibility: o ? "visible" : "hidden"
                            }, y.flagStyle)
                        }), !p && u.default.createElement("div", {
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector-button__dropdown-arrow", a && "country-selector-button__dropdown-arrow--disabled", g && "country-selector-button__dropdown-arrow--active"],
                                rawClassNames: [y.dropdownArrowClassName]
                            }),
                            style: y.dropdownArrowStyle
                        })),
                        _ ? _({
                            children: r,
                            rootProps: t
                        }) : u.default.createElement("button", n({}, t, {
                            type: "button",
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector-button", g && "country-selector-button--active", a && "country-selector-button--disabled", p && "country-selector-button--hide-dropdown"],
                                rawClassNames: [y.buttonClassName]
                            }),
                            "data-country": o,
                            style: y.buttonStyle
                        }), r)), u.default.createElement($.CountrySelectorDropdown, n({
                            show: g,
                            countries: m,
                            onSelect: function(e) {
                                b(!1),
                                null == i || i(e)
                            },
                            selectedCountry: o,
                            onClose: function() {
                                b(!1)
                            }
                        }, y.dropdownStyleProps)))
                    }
                },
                60: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                      , o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    }
                    : function(e, t) {
                        e.default = t
                    }
                    )
                      , a = this && this.__importStar || function(e) {
                        if (e && e.__esModule)
                            return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                        return i(t, e),
                        t
                    }
                      , d = this && this.__rest || function(e, t) {
                        var r = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.CountrySelectorDropdown = void 0,
                    r(374);
                    var u = a(r(156))
                      , s = r(946)
                      , l = r(515)
                      , c = r(332)
                      , f = r(425);
                    t.CountrySelectorDropdown = function(e) {
                        var t = e.show
                          , r = e.dialCodePrefix
                          , o = void 0 === r ? "+" : r
                          , i = e.selectedCountry
                          , a = e.countries
                          , $ = void 0 === a ? s.defaultCountries : a
                          , p = e.onSelect
                          , h = e.onClose
                          , m = d(e, ["show", "dialCodePrefix", "selectedCountry", "countries", "onSelect", "onClose"])
                          , _ = (0,
                        u.useRef)(null)
                          , y = (0,
                        u.useRef)()
                          , v = (0,
                        u.useRef)({
                            updatedAt: void 0,
                            value: ""
                        })
                          , g = (0,
                        u.useCallback)((function(e) {
                            return $.findIndex((function(t) {
                                return (0,
                                c.parseCountry)(t).iso2 === e
                            }
                            ))
                        }
                        ), [$])
                          , b = (0,
                        u.useState)(g(i))
                          , w = b[0]
                          , C = b[1]
                          , P = function() {
                            y.current !== i && C(g(i))
                        }
                          , S = (0,
                        u.useCallback)((function(e) {
                            C(g(e.iso2)),
                            null == p || p(e)
                        }
                        ), [p, g])
                          , O = function(e) {
                            var t = $.length - 1;
                            C((function(r) {
                                var n, o = (n = r,
                                "prev" === e ? n - 1 : "next" === e ? n + 1 : "last" === e ? t : 0);
                                return o < 0 ? 0 : o > t ? t : o
                            }
                            ))
                        }
                          , x = (0,
                        u.useCallback)((function() {
                            if (_.current && void 0 !== w) {
                                var e = (0,
                                c.parseCountry)($[w]).iso2;
                                if (e !== y.current) {
                                    var t = _.current.querySelector('[data-country="'.concat(e, '"]'));
                                    t && ((0,
                                    c.scrollToChild)(_.current, t),
                                    y.current = e)
                                }
                            }
                        }
                        ), [w, $]);
                        return (0,
                        u.useEffect)((function() {
                            x()
                        }
                        ), [w, x]),
                        (0,
                        u.useEffect)((function() {
                            _.current && (t ? _.current.focus() : P())
                        }
                        ), [t]),
                        (0,
                        u.useEffect)((function() {
                            P()
                        }
                        ), [i]),
                        u.default.createElement("ul", {
                            ref: _,
                            role: "listbox",
                            className: (0,
                            l.buildClassNames)({
                                addPrefix: ["country-selector-dropdown"],
                                rawClassNames: [m.className]
                            }),
                            style: n({
                                display: t ? "block" : "none"
                            }, m.style),
                            onKeyDown: function(e) {
                                if (e.stopPropagation(),
                                "Enter" !== e.key)
                                    if ("Escape" !== e.key) {
                                        if ("ArrowUp" === e.key)
                                            return e.preventDefault(),
                                            void O("prev");
                                        if ("ArrowDown" === e.key)
                                            return e.preventDefault(),
                                            void O("next");
                                        if ("PageUp" === e.key)
                                            return e.preventDefault(),
                                            void O("first");
                                        if ("PageDown" === e.key)
                                            return e.preventDefault(),
                                            void O("last");
                                        " " === e.key && e.preventDefault(),
                                        1 !== e.key.length || e.altKey || e.ctrlKey || e.metaKey || function(e) {
                                            var t = v.current.updatedAt && (new Date).getTime() - v.current.updatedAt.getTime() > 1e3;
                                            v.current = {
                                                value: t ? e : "".concat(v.current.value).concat(e),
                                                updatedAt: new Date
                                            };
                                            var r = $.findIndex((function(e) {
                                                return (0,
                                                c.parseCountry)(e).name.toLowerCase().startsWith(v.current.value)
                                            }
                                            ));
                                            -1 !== r && C(r)
                                        }(e.key.toLocaleLowerCase())
                                    } else
                                        null == h || h();
                                else {
                                    var t = (0,
                                    c.parseCountry)($[w]);
                                    S(t)
                                }
                            },
                            onBlur: h,
                            tabIndex: -1,
                            "aria-activedescendant": "".concat((0,
                            c.parseCountry)($[w]).iso2, "-option")
                        }, $.map((function(e, t) {
                            var r = (0,
                            c.parseCountry)(e)
                              , n = r.iso2 === i
                              , a = t === w;
                            return u.default.createElement("li", {
                                key: r.iso2,
                                "data-country": r.iso2,
                                role: "option",
                                "aria-selected": n,
                                "aria-label": "".concat(r.name, " ").concat(o).concat(r.dialCode),
                                id: "".concat(r.iso2, "-option"),
                                className: (0,
                                l.buildClassNames)({
                                    addPrefix: ["country-selector-dropdown__list-item", n && "country-selector-dropdown__list-item--selected", a && "country-selector-dropdown__list-item--focused"],
                                    rawClassNames: [m.listItemClassName]
                                }),
                                onClick: function() {
                                    return S(r)
                                },
                                style: m.listItemStyle
                            }, u.default.createElement(f.FlagEmoji, {
                                iso2: r.iso2,
                                className: (0,
                                l.buildClassNames)({
                                    addPrefix: ["country-selector-dropdown__list-item-flag-emoji"],
                                    rawClassNames: [m.listItemFlagClassName]
                                }),
                                style: m.listItemFlagStyle
                            }), u.default.createElement("span", {
                                className: (0,
                                l.buildClassNames)({
                                    addPrefix: ["country-selector-dropdown__list-item-country-name"],
                                    rawClassNames: [m.listItemCountryNameClassName]
                                }),
                                style: m.listItemCountryNameStyle
                            }, r.name), u.default.createElement("span", {
                                className: (0,
                                l.buildClassNames)({
                                    addPrefix: ["country-selector-dropdown__list-item-dial-code"],
                                    rawClassNames: [m.listItemDialCodeClassName]
                                }),
                                style: m.listItemDialCodeStyle
                            }, o, r.dialCode))
                        }
                        )))
                    }
                },
                7: function(e, t, r) {
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.DialCodePreview = void 0,
                    r(840);
                    var o = n(r(156))
                      , i = r(515);
                    t.DialCodePreview = function(e) {
                        var t = e.dialCode
                          , r = e.prefix
                          , n = e.disabled
                          , a = e.style
                          , d = e.className;
                        return o.default.createElement("div", {
                            className: (0,
                            i.buildClassNames)({
                                addPrefix: ["dial-code-preview", n && "dial-code-preview--disabled"],
                                rawClassNames: [d]
                            }),
                            style: a
                        }, "".concat(r).concat(t))
                    }
                },
                425: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                      , o = this && this.__rest || function(e, t) {
                        var r = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }
                      , i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.FlagEmoji = void 0,
                    r(481);
                    var a = i(r(156))
                      , d = r(515)
                      , u = "abcdefghijklmnopqrstuvwxyz".split("").reduce((function(e, t, r) {
                        var o, i, a;
                        return n(n({}, e), ((o = {})[t] = (i = r,
                        a = parseInt("1f1e6", 16),
                        Number(a + i).toString(16)),
                        o))
                    }
                    ), {});
                    t.FlagEmoji = function(e) {
                        var t = e.iso2
                          , r = e.size
                          , i = void 0 === r ? "24px" : r
                          , s = e.protocol
                          , l = void 0 === s ? "https" : s
                          , c = e.disableLazyLoading
                          , f = e.className
                          , $ = o(e, ["iso2", "size", "protocol", "disableLazyLoading", "className"]);
                        if (!t)
                            return a.default.createElement("img", n({
                                width: i,
                                height: i
                            }, $));
                        var p, h = [u[(p = t)[0]], u[p[1]]].join("-"), m = "".concat(l, "://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/").concat(h, ".svg");
                        return a.default.createElement("img", n({
                            className: (0,
                            d.buildClassNames)({
                                addPrefix: ["flag-emoji"],
                                rawClassNames: [f]
                            }),
                            src: m,
                            width: i,
                            height: i,
                            draggable: !1,
                            "data-country": t,
                            loading: c ? void 0 : "lazy"
                        }, $))
                    }
                },
                28: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                      , o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    }
                    : function(e, t) {
                        e.default = t
                    }
                    )
                      , a = this && this.__importStar || function(e) {
                        if (e && e.__esModule)
                            return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                        return i(t, e),
                        t
                    }
                      , d = this && this.__rest || function(e, t) {
                        var r = {};
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.PhoneInput = void 0,
                    r(549);
                    var u = a(r(156))
                      , s = r(946)
                      , l = r(882)
                      , c = r(515)
                      , f = r(332)
                      , $ = r(153)
                      , p = r(7);
                    t.PhoneInput = function(e) {
                        var t, r = e.hideDropdown, o = e.placeholder, i = e.disabled, a = e.showDisabledDialCodeAndPrefix, h = e.inputProps, m = e.onChange, _ = e.style, y = e.className, v = e.inputStyle, g = e.inputClassName, b = e.countrySelectorStyleProps, w = e.dialCodePreviewStyleProps, C = e.value, P = e.countries, S = void 0 === P ? s.defaultCountries : P, O = d(e, ["hideDropdown", "placeholder", "disabled", "showDisabledDialCodeAndPrefix", "inputProps", "onChange", "style", "className", "inputStyle", "inputClassName", "countrySelectorStyleProps", "dialCodePreviewStyleProps", "value", "countries"]), x = (0,
                        l.usePhoneInput)(n(n({
                            value: C,
                            countries: S
                        }, O), {
                            onChange: function(e) {
                                null == m || m(e.phone, e.country)
                            }
                        })), M = x.phone, E = x.inputRef, D = x.country, N = x.setCountry, I = x.handlePhoneValueChange, T = (0,
                        u.useMemo)((function() {
                            if (D)
                                return (0,
                                f.getCountry)({
                                    value: D,
                                    field: "iso2",
                                    countries: S
                                })
                        }
                        ), [S, D]), k = O.disableDialCodeAndPrefix && a && (null == T ? void 0 : T.dialCode);
                        return u.default.createElement("div", {
                            className: (0,
                            c.buildClassNames)({
                                addPrefix: ["input-container"],
                                rawClassNames: [y]
                            }),
                            style: _
                        }, u.default.createElement($.CountrySelector, n({
                            onSelect: function(e) {
                                return N(e.iso2)
                            },
                            selectedCountry: D,
                            countries: S,
                            disabled: i,
                            hideDropdown: r
                        }, b)), k && u.default.createElement(p.DialCodePreview, n({
                            dialCode: T.dialCode,
                            prefix: null !== (t = O.prefix) && void 0 !== t ? t : "+",
                            disabled: i
                        }, w)), u.default.createElement("input", n({
                            onChange: I,
                            value: M,
                            type: "tel",
                            ref: E,
                            className: (0,
                            c.buildClassNames)({
                                addPrefix: ["input", i && "input--disabled"],
                                rawClassNames: [g]
                            }),
                            placeholder: o,
                            disabled: i,
                            style: v
                        }, h)))
                    }
                },
                946: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.defaultCountries = void 0,
                    t.defaultCountries = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", ". .... ....", 0, ["2", "3", "4", "7", "8"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "... .... ...."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d'Ivoire", ["africa"], "ci", "225", ".. .. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 0, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["33", "55", "81", "229", "656", "664", "774", "998"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 1], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "224", "225", "228", "229", "231", "234", "239", "240", "248", "251", "252", "253", "254", "256", "260", "262", "267", "269", "270", "276", "281", "301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "330", "334", "336", "337", "339", "347", "351", "352", "360", "361", "386", "401", "402", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432", "434", "435", "440", "443", "447", "469", "478", "479", "480", "484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517", "518", "520", "530", "540", "541", "551", "559", "561", "562", "563", "567", "570", "571", "573", "574", "575", "580", "585", "586", "601", "602", "603", "605", "606", "607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "630", "631", "636", "641", "646", "650", "651", "660", "661", "662", "678", "681", "682", "689", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714", "715", "716", "717", "718", "719", "720", "724", "727", "731", "732", "734", "740", "754", "757", "760", "762", "763", "765", "769", "770", "772", "773", "774", "775", "779", "781", "785", "786", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814", "815", "816", "817", "818", "828", "830", "831", "832", "843", "845", "847", "848", "850", "856", "857", "858", "859", "860", "862", "863", "864", "865", "870", "878", "901", "903", "904", "906", "907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "928", "931", "936", "937", "940", "941", "947", "949", "951", "952", "954", "956", "970", "971", "972", "973", "978", "979", "980", "985", "989"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]]
                }
                ,
                11: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                      , o = this && this.__spreadArray || function(e, t, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = t.length; o < i; o++)
                                !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)),
                                n[o] = t[o]);
                        return e.concat(n || Array.prototype.slice.call(t))
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.useHistoryState = void 0;
                    var i = r(156)
                      , a = r(795)
                      , d = {
                        size: 20,
                        overrideLastItemDebounceMS: -1
                    };
                    t.useHistoryState = function(e, t) {
                        var r = n(n({}, d), t)
                          , u = r.size
                          , s = r.overrideLastItemDebounceMS
                          , l = r.onChange
                          , c = (0,
                        i.useState)(e)
                          , f = c[0]
                          , $ = c[1]
                          , p = (0,
                        i.useState)([f])
                          , h = p[0]
                          , m = p[1]
                          , _ = (0,
                        i.useState)(0)
                          , y = _[0]
                          , v = _[1]
                          , g = (0,
                        a.useTimer)();
                        return [f, function(e, t) {
                            if (("object" != typeof e || Object.entries(e).toString() !== Object.entries(f).toString()) && e !== f) {
                                var r = s > 0
                                  , n = g.check()
                                  , i = !r || void 0 === n || n > s;
                                if (void 0 !== (null == t ? void 0 : t.overrideLastItem) ? t.overrideLastItem : !i)
                                    m((function(t) {
                                        return o(o([], t.slice(0, y), !0), [e], !1)
                                    }
                                    ));
                                else {
                                    var a = h.length >= u;
                                    m((function(t) {
                                        return o(o([], t.slice(a ? 1 : 0, y + 1), !0), [e], !1)
                                    }
                                    )),
                                    a || v((function(e) {
                                        return e + 1
                                    }
                                    ))
                                }
                                $(e),
                                null == l || l(e)
                            }
                        }
                        , function() {
                            if (y <= 0)
                                return {
                                    success: !1
                                };
                            var e = h[y - 1];
                            return $(e),
                            v((function(e) {
                                return e - 1
                            }
                            )),
                            null == l || l(e),
                            {
                                success: !0,
                                value: e
                            }
                        }
                        , function() {
                            if (y + 1 >= h.length)
                                return {
                                    success: !1
                                };
                            var e = h[y + 1];
                            return $(e),
                            v((function(e) {
                                return e + 1
                            }
                            )),
                            null == l || l(e),
                            {
                                success: !0,
                                value: e
                            }
                        }
                        ]
                    }
                },
                882: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.usePhoneInput = t.defaultConfig = t.MASK_CHAR = void 0;
                    var n = r(156)
                      , o = r(946)
                      , i = r(332)
                      , a = r(11);
                    t.MASK_CHAR = ".",
                    t.defaultConfig = {
                        defaultCountry: "us",
                        value: "",
                        prefix: "+",
                        defaultMask: "............",
                        charAfterDialCode: " ",
                        historySaveDebounceMS: 200,
                        disableCountryGuess: !1,
                        disableDialCodePrefill: !1,
                        forceDialCode: !1,
                        disableDialCodeAndPrefix: !1,
                        countries: o.defaultCountries
                    },
                    t.usePhoneInput = function(e) {
                        var r = e.defaultCountry
                          , o = void 0 === r ? t.defaultConfig.defaultCountry : r
                          , d = e.value
                          , u = void 0 === d ? t.defaultConfig.value : d
                          , s = e.countries
                          , l = void 0 === s ? t.defaultConfig.countries : s
                          , c = e.prefix
                          , f = void 0 === c ? t.defaultConfig.prefix : c
                          , $ = e.defaultMask
                          , p = void 0 === $ ? t.defaultConfig.defaultMask : $
                          , h = e.charAfterDialCode
                          , m = void 0 === h ? t.defaultConfig.charAfterDialCode : h
                          , _ = e.historySaveDebounceMS
                          , y = void 0 === _ ? t.defaultConfig.historySaveDebounceMS : _
                          , v = e.disableCountryGuess
                          , g = void 0 === v ? t.defaultConfig.disableCountryGuess : v
                          , b = e.disableDialCodePrefill
                          , w = void 0 === b ? t.defaultConfig.disableDialCodePrefill : b
                          , C = e.forceDialCode
                          , P = void 0 === C ? t.defaultConfig.forceDialCode : C
                          , S = e.disableDialCodeAndPrefix
                          , O = void 0 === S ? t.defaultConfig.disableDialCodeAndPrefix : S
                          , x = e.onChange
                          , M = !O && !g
                          , E = (0,
                        n.useRef)(null)
                          , D = function(e) {
                            var r, n = e.value, o = e.country, a = e.trimNonDigitsEnd, d = e.insertDialCodeOnEmpty, u = !e.forceDisableCountryGuess && M ? (0,
                            i.guessCountryByPartialNumber)({
                                phone: n,
                                countries: l,
                                currentCountryIso2: o.iso2
                            }) : void 0, s = null !== (r = null == u ? void 0 : u.country) && void 0 !== r ? r : o;
                            return {
                                phone: s ? (0,
                                i.formatPhone)(n, {
                                    prefix: f,
                                    mask: s.format || p,
                                    maskChar: t.MASK_CHAR,
                                    dialCode: s.dialCode,
                                    trimNonDigitsEnd: a,
                                    charAfterDialCode: m,
                                    forceDialCode: P,
                                    insertDialCodeOnEmpty: d,
                                    disableDialCodeAndPrefix: O
                                }) : n,
                                countryGuessResult: u,
                                formatCountry: s
                            }
                        }
                          , N = function(e) {
                            Promise.resolve().then((function() {
                                var t;
                                null === (t = E.current) || void 0 === t || t.setSelectionRange(e, e)
                            }
                            ))
                        }
                          , I = (0,
                        a.useHistoryState)((function() {
                            var e = (0,
                            i.guessCountryByPartialNumber)({
                                phone: u,
                                countries: l,
                                currentCountryIso2: o
                            }).country || (0,
                            i.getCountry)({
                                value: o,
                                field: "iso2",
                                countries: l
                            })
                              , t = e || (0,
                            i.parseCountry)(l.find((function(e) {
                                return "us" === (0,
                                i.parseCountry)(e).iso2
                            }
                            )))
                              , r = D({
                                value: u,
                                country: t,
                                insertDialCodeOnEmpty: !w
                            }).phone;
                            return N(r.length),
                            {
                                phone: r,
                                country: t.iso2
                            }
                        }
                        ), {
                            overrideLastItemDebounceMS: y,
                            onChange: x
                        })
                          , T = I[0]
                          , k = T.phone
                          , A = T.country
                          , j = I[1]
                          , L = I[2]
                          , R = I[3]
                          , F = (0,
                        n.useMemo)((function() {
                            return (0,
                            i.getCountry)({
                                value: A,
                                field: "iso2",
                                countries: l
                            })
                        }
                        ), [l, A])
                          , B = function(e, t) {
                            var r, n, o = void 0 === t ? {} : t, a = o.deletion, d = o.cursorPosition, u = o.insertDialCodeOnEmpty, s = o.inserted, l = e, c = d;
                            P && !O && F && !(0,
                            i.removeNonDigits)(e).startsWith(F.dialCode) && e && (s && e.startsWith(f) && e.length - (null != d ? d : 0) == 0 ? l = e : (l = k,
                            c = 0));
                            var $ = D({
                                value: l,
                                country: F,
                                trimNonDigitsEnd: "backward" === a,
                                insertDialCodeOnEmpty: u,
                                forceDisableCountryGuess: P && !!a && (0,
                                i.removeNonDigits)(l).length < F.dialCode.length
                            })
                              , p = $.phone
                              , h = $.countryGuessResult
                              , _ = F;
                            M && (null == h ? void 0 : h.country) && h.country.name !== A && h.fullDialCodeMatch && (_ = h.country);
                            var y = (0,
                            i.getCursorPosition)({
                                cursorPositionAfterInput: null != c ? c : 0,
                                phoneBeforeInput: k,
                                phoneAfterInput: e,
                                phoneAfterFormatted: p,
                                leftOffset: P ? f.length + (null !== (n = null === (r = null == F ? void 0 : F.dialCode) || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0) + m.length : 0,
                                deletion: a
                            });
                            return j({
                                phone: p,
                                country: _.iso2
                            }),
                            N(y),
                            p
                        };
                        (0,
                        n.useEffect)((function() {
                            var e = E.current;
                            if (e) {
                                var t = function(e) {
                                    if (e.key) {
                                        var t = e.ctrlKey
                                          , r = e.shiftKey
                                          , n = "z" === e.key.toLowerCase();
                                        t && n && (r ? R() : L())
                                    }
                                };
                                return e.addEventListener("keydown", t),
                                function() {
                                    e.removeEventListener("keydown", t)
                                }
                            }
                        }
                        ), [E, L, R]);
                        var U = (0,
                        n.useState)(!1)
                          , Y = U[0]
                          , z = U[1];
                        return (0,
                        n.useEffect)((function() {
                            if (!Y)
                                return z(!0),
                                void (u !== k && (null == x || x({
                                    phone: k,
                                    country: A
                                })));
                            u !== k && B(u)
                        }
                        ), [u]),
                        {
                            phone: k,
                            country: A,
                            setCountry: function(e) {
                                var t = (0,
                                i.getCountry)({
                                    value: e,
                                    field: "iso2",
                                    countries: l
                                });
                                if (t) {
                                    var r = O ? "" : "".concat(f).concat(t.dialCode).concat(m);
                                    j({
                                        phone: r,
                                        country: t.iso2
                                    }),
                                    Promise.resolve().then((function() {
                                        var e;
                                        null === (e = E.current) || void 0 === e || e.focus()
                                    }
                                    ))
                                }
                            },
                            handlePhoneValueChange: function(e) {
                                var t;
                                e.preventDefault();
                                var r = e.nativeEvent.inputType
                                  , n = null == r ? void 0 : r.startsWith("insertFrom")
                                  , o = B(e.target.value, {
                                    deletion: function() {
                                        var e;
                                        if (null !== (e = null == r ? void 0 : r.toLocaleLowerCase().includes("delete")) && void 0 !== e && e)
                                            return (null == r ? void 0 : r.toLocaleLowerCase().includes("forward")) ? "forward" : "backward"
                                    }(),
                                    inserted: n,
                                    cursorPosition: null !== (t = e.target.selectionStart) && void 0 !== t ? t : 0
                                });
                                return O && F ? (0,
                                i.addDialCode)({
                                    phone: o,
                                    dialCode: F.dialCode,
                                    charAfterDialCode: m,
                                    prefix: f
                                }) : o
                            },
                            inputRef: E
                        }
                    }
                }
                ,
                393: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.usePhoneValidation = void 0;
                    var n = r(332);
                    t.usePhoneValidation = function(e, t) {
                        return (0,
                        n.validatePhone)(e, t)
                    }
                }
                ,
                795: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.useTimer = void 0;
                    var n = r(156);
                    t.useTimer = function() {
                        var e = (0,
                        n.useRef)()
                          , t = (0,
                        n.useRef)(Date.now());
                        return {
                            check: function() {
                                var r = Date.now()
                                  , n = e.current ? r - t.current : void 0;
                                return e.current = t.current,
                                t.current = r,
                                n
                            }
                        }
                    }
                }
                ,
                515: function(e, t) {
                    var r = this && this.__spreadArray || function(e, t, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = t.length; o < i; o++)
                                !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)),
                                n[o] = t[o]);
                        return e.concat(n || Array.prototype.slice.call(t))
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.buildClassNames = t.classNamesWithPrefix = t.joinClasses = t.classPrefix = void 0,
                    t.classPrefix = "react-international-phone-",
                    t.joinClasses = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return e.filter((function(e) {
                            return !!e
                        }
                        )).join(" ").trim()
                    }
                    ,
                    t.classNamesWithPrefix = function() {
                        for (var e = [], r = 0; r < arguments.length; r++)
                            e[r] = arguments[r];
                        return t.joinClasses.apply(void 0, e).split(" ").map((function(e) {
                            return "".concat(t.classPrefix).concat(e)
                        }
                        )).join(" ")
                    }
                    ,
                    t.buildClassNames = function(e) {
                        var n = e.addPrefix
                          , o = e.rawClassNames;
                        return t.joinClasses.apply(void 0, r([t.classNamesWithPrefix.apply(void 0, n)], o, !1))
                    }
                },
                62: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.applyMask = void 0,
                    t.applyMask = function(e) {
                        var t = e.value
                          , r = e.mask
                          , n = e.maskSymbol
                          , o = e.offset
                          , i = void 0 === o ? 0 : o
                          , a = e.trimNonMaskCharsLeftover
                          , d = void 0 !== a && a;
                        if (t.length < i)
                            return t;
                        for (var u = t.slice(0, i), s = t.slice(i), l = u, c = 0, f = 0, $ = r.split(""); f < $.length; f++) {
                            var p = $[f];
                            if (c >= s.length) {
                                if (!d && p !== n) {
                                    l += p;
                                    continue
                                }
                                break
                            }
                            p === n ? (l += s[c],
                            c += 1) : l += p
                        }
                        return l
                    }
                }
                ,
                239: function(e, t, r) {
                    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , o = this && this.__exportStar || function(e, t) {
                        for (var r in e)
                            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    o(r(62), t),
                    o(r(939), t),
                    o(r(222), t)
                },
                939: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.removeNonDigits = void 0,
                    t.removeNonDigits = function(e) {
                        return e.replace(/\D/g, "")
                    }
                }
                ,
                222: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.scrollToChild = void 0,
                    t.scrollToChild = function(e, t) {
                        var r = e.style.display;
                        "block" !== r && (e.style.display = "block");
                        var n = e.getBoundingClientRect()
                          , o = t.getBoundingClientRect()
                          , i = o.top - n.top
                          , a = n.bottom - o.bottom;
                        i >= 0 && a >= 0 || (Math.abs(i) < Math.abs(a) ? e.scrollTop += i : e.scrollTop -= a),
                        e.style.display = r
                    }
                }
                ,
                298: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.buildCountryData = void 0,
                    t.buildCountryData = function(e) {
                        for (var t = [e.name, e.regions, e.iso2, e.dialCode, e.format, e.priority, e.areaCodes], r = 0; r < t.length; r += 1)
                            if (0 !== r) {
                                var n = t[r - 1]
                                  , o = t[r];
                                if (void 0 === n && void 0 !== o) {
                                    var i = JSON.stringify(t, (function(e, t) {
                                        return void 0 === t ? "__undefined" : t
                                    }
                                    )).replace(/"__undefined"/g, "undefined");
                                    throw new Error("[react-international-phone] invalid country values passed to buildCountryData. Check ".concat(n, " in: ").concat(i))
                                }
                            }
                        return t.filter((function(e) {
                            return void 0 !== e
                        }
                        ))
                    }
                }
                ,
                891: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getCountry = void 0;
                    var n = r(300);
                    t.getCountry = function(e) {
                        var t = e.value
                          , r = e.field
                          , o = e.countries;
                        if (["regions", "priority"].includes(r))
                            throw new Error('Field "'.concat(r, '" is not supported'));
                        var i = o.find((function(e) {
                            var o = (0,
                            n.parseCountry)(e);
                            return t === o[r]
                        }
                        ));
                        if (i)
                            return (0,
                            n.parseCountry)(i)
                    }
                }
                ,
                4: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.guessCountryByPartialNumber = void 0;
                    var n = r(239)
                      , o = r(891)
                      , i = r(300);
                    t.guessCountryByPartialNumber = function(e) {
                        var t, r = e.phone, a = e.countries, d = e.currentCountryIso2, u = {
                            country: void 0,
                            fullDialCodeMatch: !1,
                            areaCodeMatch: void 0
                        };
                        if (!r)
                            return u;
                        var s = (0,
                        n.removeNonDigits)(r);
                        if (!s)
                            return u;
                        for (var l = u, c = function(e) {
                            var t, r, n, o, i = e.country, a = e.fullDialCodeMatch, d = e.areaCodeMatch, u = i.dialCode === (null === (t = l.country) || void 0 === t ? void 0 : t.dialCode), s = (null !== (r = i.priority) && void 0 !== r ? r : 0) < (null !== (o = null === (n = l.country) || void 0 === n ? void 0 : n.priority) && void 0 !== o ? o : 0);
                            u && !s || (l = {
                                country: i,
                                fullDialCodeMatch: a,
                                areaCodeMatch: d
                            })
                        }, f = 0, $ = a; f < $.length; f++) {
                            var p = $[f]
                              , h = (0,
                            i.parseCountry)(p)
                              , m = h.dialCode
                              , _ = h.areaCodes;
                            if (s.startsWith(m)) {
                                var y = !l.country || Number(m) >= Number(l.country.dialCode);
                                if (_)
                                    for (var v = s.substring(m.length), g = 0, b = _; g < b.length; g++) {
                                        var w = b[g];
                                        if (v.startsWith(w))
                                            return {
                                                country: h,
                                                fullDialCodeMatch: !0,
                                                areaCodeMatch: !0
                                            }
                                    }
                                !y && m !== s && l.fullDialCodeMatch || c({
                                    country: h,
                                    fullDialCodeMatch: !0,
                                    areaCodeMatch: _ ? !_ : void 0
                                })
                            }
                            l.fullDialCodeMatch || s.length < m.length && m.startsWith(s) && (!l.country || Number(m) <= Number(l.country.dialCode)) && c({
                                country: h,
                                fullDialCodeMatch: !1
                            })
                        }
                        if (d) {
                            var C = (0,
                            o.getCountry)({
                                value: d,
                                field: "iso2",
                                countries: a
                            });
                            l && C && (null === (t = l.country) || void 0 === t ? void 0 : t.dialCode) === C.dialCode && l.country !== C && l.fullDialCodeMatch && !l.areaCodeMatch && (l = {
                                country: C,
                                areaCodeMatch: !(null == C ? void 0 : C.areaCodes) && void 0,
                                fullDialCodeMatch: !0
                            })
                        }
                        return l
                    }
                }
                ,
                88: function(e, t, r) {
                    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , o = this && this.__exportStar || function(e, t) {
                        for (var r in e)
                            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    o(r(298), t),
                    o(r(891), t),
                    o(r(4), t),
                    o(r(300), t)
                },
                300: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.parseCountry = void 0,
                    t.parseCountry = function(e) {
                        return {
                            name: e[0],
                            regions: e[1],
                            iso2: e[2],
                            dialCode: e[3],
                            format: e[4],
                            priority: e[5],
                            areaCodes: e[6]
                        }
                    }
                }
                ,
                332: function(e, t, r) {
                    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , o = this && this.__exportStar || function(e, t) {
                        for (var r in e)
                            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    o(r(239), t),
                    o(r(88), t),
                    o(r(165), t)
                },
                820: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.addDialCode = void 0;
                    var n = r(214);
                    t.addDialCode = function(e) {
                        var t = e.phone
                          , r = e.dialCode
                          , o = e.prefix
                          , i = void 0 === o ? "+" : o
                          , a = e.charAfterDialCode
                          , d = void 0 === a ? " " : a;
                        return "".concat(i).concat(r).concat(d).concat((0,
                        n.removeDialCode)({
                            phone: t,
                            dialCode: r,
                            charAfterDialCode: d,
                            prefix: i
                        }))
                    }
                }
                ,
                380: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.formatPhone = void 0;
                    var n = r(239);
                    t.formatPhone = function(e, t) {
                        var r = !t.disableDialCodeAndPrefix && t.forceDialCode
                          , o = !t.disableDialCodeAndPrefix && t.insertDialCodeOnEmpty
                          , i = e
                          , a = function(e) {
                            return t.trimNonDigitsEnd ? e.trim() : e
                        };
                        if (!i)
                            return o && !i.length || r ? a("".concat(t.prefix).concat(t.dialCode).concat(t.charAfterDialCode)) : a(i);
                        if ((i = (0,
                        n.removeNonDigits)(i)) === t.dialCode && !t.disableDialCodeAndPrefix)
                            return a("".concat(t.prefix).concat(t.dialCode).concat(t.charAfterDialCode));
                        if (t.dialCode.startsWith(i) && !t.disableDialCodeAndPrefix)
                            return a(r ? "".concat(t.prefix).concat(t.dialCode).concat(t.charAfterDialCode) : "".concat(t.prefix).concat(i));
                        if (!i.startsWith(t.dialCode) && !t.disableDialCodeAndPrefix) {
                            if (r)
                                return a("".concat(t.prefix).concat(t.dialCode).concat(t.charAfterDialCode));
                            if (i.length < t.dialCode.length)
                                return a("".concat(t.prefix).concat(i))
                        }
                        var d, u = (d = t.dialCode.length,
                        t.disableDialCodeAndPrefix && (d = 0),
                        {
                            phoneLeftSide: i.slice(0, d),
                            phoneRightSide: i.slice(d)
                        }), s = u.phoneLeftSide, l = u.phoneRightSide;
                        return s = "".concat(t.prefix).concat(s).concat(t.charAfterDialCode),
                        l = (0,
                        n.applyMask)({
                            value: l,
                            mask: t.mask,
                            maskSymbol: t.maskChar,
                            trimNonMaskCharsLeftover: t.trimNonDigitsEnd
                        }),
                        t.disableDialCodeAndPrefix && (s = ""),
                        a("".concat(s).concat(l))
                    }
                }
                ,
                775: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.getCursorPosition = void 0;
                    var r = function(e) {
                        return /\d/.test(e)
                    };
                    t.getCursorPosition = function(e) {
                        var t = e.phoneBeforeInput
                          , n = e.phoneAfterInput
                          , o = e.phoneAfterFormatted
                          , i = e.cursorPositionAfterInput
                          , a = e.leftOffset
                          , d = void 0 === a ? 0 : a
                          , u = e.deletion;
                        if (i < d)
                            return d;
                        if (!t)
                            return o.length;
                        var s = "backward" === u;
                        if (0 === i && n.length > 0 && o.length > 0) {
                            if (s)
                                return 0;
                            for (var l = 0; l < o.length; l += 1)
                                if (r(o[l]))
                                    return l;
                            return o.length
                        }
                        if (n.length < t.length && 1 === n.length)
                            return o.length;
                        var c = null;
                        for (l = i - 1; l >= 0; l -= 1)
                            if (r(n[l])) {
                                c = l;
                                break
                            }
                        if (null === c)
                            return 0 !== i ? i : o.length;
                        var f = 0;
                        for (l = 0; l < c; l += 1)
                            r(n[l]) && (f += 1);
                        s && (f -= 1);
                        var $ = 0
                          , p = 0;
                        for (l = 0; l < o.length && ($ += 1,
                        r(o[l]) && (p += 1),
                        p !== f + 1); l += 1)
                            ;
                        for (; !r(o[$]) && $ < o.length; )
                            $ += 1;
                        return s && ($ += 1),
                        $
                    }
                }
                ,
                165: function(e, t, r) {
                    var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                        void 0 === n && (n = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get"in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }),
                        Object.defineProperty(e, n, o)
                    }
                    : function(e, t, r, n) {
                        void 0 === n && (n = r),
                        e[n] = t[r]
                    }
                    )
                      , o = this && this.__exportStar || function(e, t) {
                        for (var r in e)
                            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    o(r(820), t),
                    o(r(380), t),
                    o(r(775), t),
                    o(r(214), t),
                    o(r(684), t)
                },
                214: (e, t) => {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.removeDialCode = void 0,
                    t.removeDialCode = function(e) {
                        var t = e.phone
                          , r = e.dialCode
                          , n = e.prefix
                          , o = void 0 === n ? "+" : n
                          , i = e.charAfterDialCode
                          , a = void 0 === i ? " " : i;
                        if (!t || !r)
                            return t;
                        var d = t;
                        return d.startsWith(o) && (d = d.replace(o, "")),
                        d.startsWith(r) ? ((d = d.replace(r, "")).startsWith(a) && (d = d.replace(a, "")),
                        d) : t
                    }
                }
                ,
                684: function(e, t, r) {
                    var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var o in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        ,
                        n.apply(this, arguments)
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.validatePhone = void 0;
                    var o = r(882)
                      , i = r(239)
                      , a = r(88);
                    t.validatePhone = function(e, t) {
                        var r, d = n(n({}, o.defaultConfig), t), u = d.countries, s = d.defaultMask, l = d.defaultMaskMinPhoneLength, c = void 0 === l ? 10 : l, f = d.prefix, $ = d.charAfterDialCode, p = (null == t ? void 0 : t.country) ? (0,
                        a.getCountry)({
                            value: t.country,
                            field: "iso2",
                            countries: u
                        }) : null, h = (0,
                        a.guessCountryByPartialNumber)({
                            phone: e,
                            countries: u,
                            currentCountryIso2: null == t ? void 0 : t.country
                        }), m = (null === (r = h.country) || void 0 === r ? void 0 : r.iso2) === (null == p ? void 0 : p.iso2), _ = !p || m ? h : {
                            country: p,
                            fullDialCodeMatch: !1,
                            areaCodeMatch: !(null == p ? void 0 : p.areaCodes) && void 0
                        }, y = _.country, v = _.fullDialCodeMatch, g = _.areaCodeMatch;
                        if (!y)
                            return {
                                country: y,
                                lengthMatch: !1,
                                dialCodeMatch: v,
                                areaCodeMatch: g,
                                formatMatch: !1,
                                isValid: !1
                            };
                        var b = y.format || s
                          , w = !y.format
                          , C = w ? c - y.dialCode.length : b.length - b.replaceAll(o.MASK_CHAR, "").length
                          , P = w ? b.slice(0, C) : b
                          , S = "".concat(f).concat(y.dialCode).concat($).concat(P).split("").every((function(t, r) {
                            var n = e[r] === t
                              , i = t === o.MASK_CHAR && Number.isFinite(+e[r]);
                            return n || i
                        }
                        ))
                          , O = (0,
                        i.removeNonDigits)(e)
                          , x = y.dialCode.length + C;
                        return O.length < x ? {
                            country: y,
                            lengthMatch: !1,
                            dialCodeMatch: v,
                            areaCodeMatch: g,
                            formatMatch: S,
                            isValid: !1
                        } : {
                            country: y,
                            lengthMatch: !0,
                            dialCodeMatch: v,
                            areaCodeMatch: g,
                            formatMatch: S,
                            isValid: O.startsWith(y.dialCode)
                        }
                    }
                },
                156: t => {
                    t.exports = e
                }
            }
              , r = {};
            function n(e) {
                var o = r[e];
                if (void 0 !== o)
                    return o.exports;
                var i = r[e] = {
                    exports: {}
                };
                return t[e].call(i.exports, i, i.exports, n),
                i.exports
            }
            n.r = e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ;
            var o = {};
            return ( () => {
                var e = o;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.validatePhone = e.parseCountry = e.buildCountryData = e.usePhoneValidation = e.usePhoneInput = e.defaultCountries = e.PhoneInput = e.FlagEmoji = e.DialCodePreview = e.CountrySelectorDropdown = e.CountrySelector = void 0;
                var t = n(153);
                Object.defineProperty(e, "CountrySelector", {
                    enumerable: !0,
                    get: function() {
                        return t.CountrySelector
                    }
                });
                var r = n(60);
                Object.defineProperty(e, "CountrySelectorDropdown", {
                    enumerable: !0,
                    get: function() {
                        return r.CountrySelectorDropdown
                    }
                });
                var i = n(7);
                Object.defineProperty(e, "DialCodePreview", {
                    enumerable: !0,
                    get: function() {
                        return i.DialCodePreview
                    }
                });
                var a = n(425);
                Object.defineProperty(e, "FlagEmoji", {
                    enumerable: !0,
                    get: function() {
                        return a.FlagEmoji
                    }
                });
                var d = n(28);
                Object.defineProperty(e, "PhoneInput", {
                    enumerable: !0,
                    get: function() {
                        return d.PhoneInput
                    }
                });
                var u = n(946);
                Object.defineProperty(e, "defaultCountries", {
                    enumerable: !0,
                    get: function() {
                        return u.defaultCountries
                    }
                });
                var s = n(882);
                Object.defineProperty(e, "usePhoneInput", {
                    enumerable: !0,
                    get: function() {
                        return s.usePhoneInput
                    }
                });
                var l = n(393);
                Object.defineProperty(e, "usePhoneValidation", {
                    enumerable: !0,
                    get: function() {
                        return l.usePhoneValidation
                    }
                });
                var c = n(332);
                Object.defineProperty(e, "buildCountryData", {
                    enumerable: !0,
                    get: function() {
                        return c.buildCountryData
                    }
                }),
                Object.defineProperty(e, "parseCountry", {
                    enumerable: !0,
                    get: function() {
                        return c.parseCountry
                    }
                }),
                Object.defineProperty(e, "validatePhone", {
                    enumerable: !0,
                    get: function() {
                        return c.validatePhone
                    }
                })
            }
            )(),
            o
        }
        )()))
    }(hu);
    var mu = hu.exports;
    const _u = {
        inputWrapper: "_inputWrapper_qsuuw_2",
        "size-small": "_size-small_qsuuw_11",
        "radius-standard": "_radius-standard_qsuuw_20",
        "radius-none": "_radius-none_qsuuw_23",
        "radius-large": "_radius-large_qsuuw_26"
    }
      , yu = t.forwardRef(( (e, r) => {
        const {required: n, country: o, cornerRadius: i, placeholder: a, colors: d, size: u, error: s, alreadyError: l, value: c, onChange: f, showErrorText: $, errorCodeList: p} = e
          , [h,m] = t.useState($)
          , [_,y] = t.useState(o)
          , v = e => {
            const t = mu.defaultCountries.find((t => t[2] === e.toLowerCase()));
            return t ? t[0] : e
        }
        ;
        t.useEffect(( () => {
            $ && m(!0)
        }
        ), [$]),
        t.useEffect(( () => {
            $ && m(!1)
        }
        ), [_, a, $]),
        t.useEffect(( () => {
            const e = mu.defaultCountries.find((e => e[2] === o.toLocaleLowerCase()));
            if (e) {
                m(!1);
                const t = `+${e[3]}`;
                (!c || c === t || !c.startsWith(t)) && "function" == typeof f && f(t)
            }
        }
        ), [o, f]),
        t.useImperativeHandle(r, ( () => ({
            updateInputErrorShow() {
                m(!0)
            }
        })));
        const g = $ && h && (n || function(e) {
            var t;
            const r = e.trim().match(/^\+\d+\s*(\d.*)?$/);
            if (r)
                return ((null == (t = r[1]) ? void 0 : t.trim()) || "").length > 0;
            return !1
        }(c)) && !nu(c)
          , b = p.includes(cu.AlreadySubscribe);
        return jo("div", {
            children: [Ao("div", {
                style: {
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                },
                children: jo("span", {
                    role: "img",
                    "aria-label": `${v(_)} flag`,
                    children: [v(_), " flag for phone input"]
                })
            }), Ao(mu.PhoneInput, {
                style: {
                    "--react-international-phone-text-color": d.input
                },
                className: Go(_u.inputWrapper, gi("Modal__Phone"), _u[`radius-${i}`], _u[`size-${u}`]),
                defaultCountry: o.toLocaleLowerCase(),
                value: c,
                placeholder: a,
                onChange: (e, t) => {
                    y(t),
                    "function" == typeof f && f(e)
                }
            }), (g || p.includes(cu.PhoneInvalid)) && !b && Ao(Vi, {
                embed: !0,
                errText: s,
                colors: d
            }), b && Ao(Vi, {
                embed: !0,
                errText: l,
                colors: d
            })]
        })
    }
    ))
      , vu = "_pretty_1n924_2"
      , gu = "_state_1n924_25"
      , bu = "_svg_1n924_25"
      , wu = "_richTextStyle_1n924_89"
      , Cu = e => {
        const {value: t, onChange: r} = e
          , {labelText: n, svgColor: o="#089BE9"} = e;
        return jo("div", {
            className: vu,
            children: [Ao("input", {
                type: "checkbox",
                name: "checkbox",
                checked: t,
                onChange: () => r(!t)
            }), jo("div", {
                className: gu,
                children: [Ao("svg", {
                    className: bu,
                    viewBox: "0 0 1260 1024",
                    children: Ao("path", {
                        d: "M157.538462 315.076923l275.692307 315.076923L1142.153846 0l118.153846 118.153846-827.076923 905.846154L0 433.230769z",
                        fill: o,
                        "p-id": "10987"
                    })
                }), Ao("label", {
                    className: wu,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })]
            })]
        })
    }
      , Pu = {
        checkedWrapper: "_checkedWrapper_tibs3_2",
        small: "_small_tibs3_8"
    }
      , Su = e => {
        let {content: t, value: r, onChange: n, error: o, colors: i, size: a, showErrorText: d} = e;
        return jo("div", {
            className: Go(gi("Modal__PolicyBoxWrapper"), Pu.checkedWrapper, Pu[a]),
            style: {
                color: `${i.checkbox}`
            },
            children: [Ao(Cu, {
                value: r,
                onChange: n,
                labelText: t
            }), d && 0 == r && Ao(Vi, {
                errText: o,
                colors: i
            })]
        })
    }
      , Ou = (e, t) => {
        let {enabled: r, type: n, open_specific_page: o, open_specific_page_new_window: i} = e;
        r && (n === Nn.Close ? t() : n === Nn.OpenSpecificPage && o && window.open(o, i ? "_blank" : "_self"))
    }
      , xu = (e, t) => {
        let {action: r, link: n, new_context: o} = e;
        r === En.CLOSE ? t() : r === En.LINK && n && window.open(n, o ? "_blank" : "_self")
    }
      , Mu = (e, t) => {
        if ("<p></p>" === e)
            return "";
        let r = e.replaceAll("<li>\n<a href=", "<li><a href=");
        return t ? r.replaceAll('target="_self"', 'target="_blank"') : r
    }
      , Eu = t.forwardRef(( (e, r) => {
        const {forms: n, formsIndex: o, actions: i, errorText: a, cornerRadius: d, isAdmin: u, size: s, isMobile: l, colors: c, actionMap: f} = e
          , $ = [];
        o.forEach((e => {
            n[e] && n[e].enabled && $.push(n[e])
        }
        ));
        const [p,h] = t.useState(!1)
          , [m,_] = t.useState([])
          , [y,v] = t.useState("")
          , [g,b] = t.useState("")
          , [w,C] = t.useState("")
          , [P,S] = t.useState("")
          , [O,x] = t.useState("")
          , [M,E] = t.useState("")
          , [D,N] = t.useState("")
          , [I,T] = t.useState(!1)
          , [k,A] = t.useState(!1)
          , [j,L] = t.useState(!1)
          , R = t.useRef(null);
        t.useImperativeHandle(r, ( () => ({
            clearForm: () => {
                if (h(!1),
                _([]),
                v(""),
                b(""),
                C(""),
                S(""),
                x(""),
                E(""),
                n.phone) {
                    const e = mu.defaultCountries.find((e => e[2] == n.phone.country.toLocaleLowerCase()));
                    e && e[3] !== D && N("+" + e[3])
                }
                T(!1),
                A(!1)
            }
        })));
        const F = () => {
            R.current && R.current.updateInputErrorShow();
            const e = {
                email: y,
                phone: D,
                first_name: g,
                last_name: w,
                birthday: `${P}-${O}-${M}`,
                year: P,
                month: O,
                day: M,
                gdpr: k,
                tcpa: I
            };
            "" === e.birthday.replaceAll("-", "") && (e.birthday = "");
            const [t,r] = (e => {
                const {formsIndex: t, forms: r, data: n} = e
                  , o = [];
                for (const i of t)
                    r[i].enabled && ((i === xn.EMAIL && r[i].required && !eu(n.email) || i === xn.EMAIL && !r[i].required && n.email && !eu(n.email)) && o.push("email"),
                    i === xn.NAME && (r[i].field_type !== Mn.LAST && r[i].first_name.required && ru(n.first_name) && o.push("first_name"),
                    r[i].field_type !== Mn.FIRST && r[i].last_name.required && ru(n.last_name) && o.push("last_name")),
                    i === xn.PHONE && r[i].required && !nu(n.phone) && o.push("phone"),
                    i !== xn.PHONE || r[i].required || (("" === n.phone || 1 === n.phone.trim().split(" ").length || n.phone.length <= 3) && (n.phone = ""),
                    "" === n.phone || nu(n.phone) || o.push("phone")),
                    i !== xn.GDPR || n.gdpr || o.push("gdpr"),
                    i !== xn.TCPA || n.tcpa || o.push("tcpa"),
                    i === xn.BIRTHDAY && (n.birthday.replaceAll("-", "") || r[i].required) && (iu(n.birthday) || o.push("birthday")));
                return [0 !== o.length, o]
            }
            )({
                formsIndex: o,
                forms: n,
                data: e
            });
            if (t) {
                const e = r[0] === ou.PhoneError
                  , t = e ? document.querySelector(".react-international-phone-input") : document.getElementById(r[0]);
                return e && (t.value = D),
                t && t.focus(),
                void h(!0)
            }
            _([]),
            L(!0),
            f.submit(e).then((e => {
                _([]),
                setTimeout(( () => {
                    L(!0)
                }
                ), e.timer || 0)
            }
            )).catch((e => {
                var t;
                L(!1),
                e && (_(e),
                e.includes(cu.PhoneInvalid) && document.querySelector(".react-international-phone-input").focus(),
                e.includes(cu.EmailInvalid) && (null == (t = document.getElementById("email")) || t.focus()))
            }
            ))
        }
        ;
        return t.useEffect(( () => {
            var e, t, r;
            (null == (r = null == (t = null == (e = null == window ? void 0 : window.EcomSendApps) ? void 0 : e.common) ? void 0 : t.customer) ? void 0 : r.email) && v(window.EcomSendApps.common.customer.email),
            window.setPopupEmail = e => v(e)
        }
        ), []),
        jo(Lo, {
            children: [o.map((e => {
                if (n[e].enabled)
                    switch (e) {
                    case xn.NAME:
                        return t.createElement(pu, __spreadProps(__spreadValues({}, n[e]), {
                            error: {
                                first_name: a.first_name,
                                last_name: a.last_name
                            },
                            cornerRadius: d,
                            size: s,
                            colors: c,
                            firstValue: g,
                            lastValue: w,
                            onChange: (e, t) => {
                                "first" === t && b(e),
                                "last" === t && C(e)
                            }
                            ,
                            showErrorText: p,
                            key: e
                        }));
                    case xn.EMAIL:
                        return t.createElement(fu, __spreadProps(__spreadValues({}, n[e]), {
                            error: a.invalid_email,
                            alreadyError: a.already_subscribed,
                            cornerRadius: d,
                            size: s,
                            colors: c,
                            value: y,
                            onChange: v,
                            showErrorText: p,
                            errorCodeList: m,
                            key: e
                        }));
                    case xn.PHONE:
                        return t.createElement(yu, __spreadProps(__spreadValues({}, n[e]), {
                            error: a.phone_number,
                            alreadyError: a.already_subscribed,
                            cornerRadius: d,
                            size: s,
                            colors: c,
                            value: D,
                            onChange: N,
                            showErrorText: p,
                            errorCodeList: m,
                            ref: R,
                            key: e
                        }));
                    case xn.BIRTHDAY:
                        return t.createElement(lu, __spreadProps(__spreadValues({}, n[e]), {
                            error: a.invalid_birthday,
                            cornerRadius: d,
                            size: s,
                            isMobile: l,
                            colors: c,
                            yearValue: P,
                            monthValue: O,
                            dayValue: M,
                            onChange: (e, t) => {
                                ( (e, t) => {
                                    "year" === t && S(e),
                                    "month" === t && x(e),
                                    "day" === t && E(e)
                                }
                                )(e, t)
                            }
                            ,
                            showErrorText: p,
                            key: e
                        }));
                    case xn.TCPA:
                        return t.createElement(Su, __spreadProps(__spreadValues({}, n[e]), {
                            error: a.policy_not_checked,
                            colors: c,
                            size: s,
                            value: I,
                            onChange: T,
                            showErrorText: p,
                            content: Mu(n[e].content, u),
                            key: e
                        }));
                    case xn.GDPR:
                        return t.createElement(Su, __spreadProps(__spreadValues({}, n[e]), {
                            error: a.policy_not_checked,
                            colors: c,
                            size: s,
                            value: k,
                            onChange: A,
                            showErrorText: p,
                            content: Mu(n[e].content, u),
                            key: e
                        }));
                    default:
                        return null
                    }
            }
            )), i.primary_btn.enabled && Ao(Oi, {
                shape: d,
                colors: c,
                size: s,
                buttonTextConfig: i.primary_btn.text,
                loading: j,
                onClick: () => {
                    if (u || j)
                        return;
                    const {action: e, link: t, new_context: r} = i.primary_btn;
                    e === En.LINK && t ? window.open(t, r ? "_blank" : "_self") : e === En.SUBMIT ? F() : e === En.CLOSE && f.close()
                }
            })]
        })
    }
    ));
    function Du({popupId: e, myDialogStyle: t, successStatus: r, textConfig: n, isAdmin: o, isHideRemove: i, marketingBranding: a, colors: d, manuallyCode: u, isNoDiscount: s, isManuallyCode: l, onClose: c}) {
        const {start_status: f, success_status: $, error_text: p} = n
          , {size: h, alignment: m, cornerRadius: _, logoURL: y, logoWidth: v, imgLayout: g, imgMobilePosition: b, imgURL: w} = t
          , {IntentionsStore: C, ConfigStore: P} = ao;
        function S(t) {
            if (e)
                return new Promise((async (r, n) => {
                    try {
                        const {data: o, status: i} = await pn.subscribed(__spreadValues({
                            popupId: e
                        }, t));
                        if (wi.OK === i) {
                            let t = Hn().add(365, "day");
                            io.setCookie(Jn() ? `pp_preview_success_subscribed${e}` : `pp_success_subscribed${e}`, "true", {
                                expires: t.toDate()
                            }),
                            po.setDiscountCode(o.discount_code, Jn() && !0, e),
                            C.setModalSuccessStatus(e, !0),
                            P.setConfig("discount_code", o.discount_code),
                            r(!0)
                        } else
                            n(o.status)
                    } catch (o) {
                        n([cu.SubmitFail])
                    }
                }
                ))
        }
        const O = ({titleText: e, titleHelpText: t}) => Ao(Do, {
            children: () => jo(Lo, {
                children: [e && Ao("header", {
                    className: Go(gi("Modal__TitleText"), Ui.titleText, Ui[h]),
                    style: {
                        color: `${null == d ? void 0 : d.text_heading_color}`
                    },
                    children: e
                }), t && Ao("div", {
                    className: Go(gi("Modal__TitleHelpText"), Ui.titleHelpText, Ui[h]),
                    style: {
                        color: `${null == d ? void 0 : d.text_description_color}`
                    },
                    children: t
                })]
            })
        });
        return Ao(Do, {
            children: () => Ao("div", {
                className: Go(gi("Modal__Container"), Ui.modalContainer, o ? null : Ui.adminModalContainer),
                children: jo("div", {
                    className: Go(gi("Modal__Content"), Ui.modalContent, Ui[`size-${h}`], Ui[`cornerRadius-${_}`], ["left", "right"].includes(g) ? Ui[g] : null, ["left", "right"].includes(g) && "background" === b ? Ui.mobilePosition : null),
                    style: w && ("background" === g || ["left", "right"].includes(g) && "background" === b) ? {
                        backgroundColor: `${null == d ? void 0 : d.popup_background_color}`,
                        "--backgroundImage": `url(${w})`,
                        backgroundImage: "var(--backgroundImage)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    } : {
                        backgroundColor: `${null == d ? void 0 : d.popup_background_color}`
                    },
                    children: [["left", "right"].includes(g) && Ao("div", {
                        className: Go(gi("Modal__CustomPic"), Ui.customPic),
                        style: {
                            backgroundImage: `url(${w})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }
                    }), Ao("div", {
                        className: Go(gi("Modal__CustomDialogWrapper"), Ui.myCustomDialogWrapper),
                        children: jo("div", {
                            className: Go(gi("Modal__CustomDialog"), Ui.myCustomDialog, Ui[m]),
                            children: [Ao("div", {
                                className: Go(gi("Modal__CloseButton"), Ui.closeBtn),
                                onClick: c,
                                children: Ao(Ci, {})
                            }), y ? Ao("img", {
                                className: Ui.myLogoImg,
                                src: y,
                                alt: "logo",
                                style: {
                                    "--width": `${v}%`
                                }
                            }) : null, Ao(O, {
                                titleText: r ? $.heading : f.heading,
                                titleHelpText: r ? $.description : f.description
                            }), !r && Ao(Eu, {
                                isAdmin: o,
                                forms: f.forms,
                                formsIndex: f.forms_index,
                                actions: f.actions,
                                errorText: p,
                                cornerRadius: _,
                                size: h,
                                colors: d,
                                actionMap: {
                                    close: c,
                                    submit: S
                                }
                            }), r && !s && Ao(Bi, {
                                size: h,
                                shape: _,
                                id: "Discount_code",
                                color: d.primary_button_background_color,
                                manuallyCode: u,
                                value: e && C.modal_success_status_list[e] ? P.discount_code : "",
                                placeholder: "Discount_code",
                                isSuccess: r,
                                isManuallyCode: l,
                                onChange: () => {}
                            }), r && $.button_action.enabled && Ao(Oi, {
                                classNames: gi("Button__Success_status"),
                                colors: d,
                                buttonTextConfig: $.button_text,
                                size: h,
                                onClick: () => {
                                    !o && Ou($.button_action, c)
                                }
                                ,
                                shape: _
                            }), !r && jo(Lo, {
                                children: [f.actions.secondary_btn.enabled && f.actions.secondary_btn.text && Ao("div", {
                                    onClick: () => {
                                        !o && xu(f.actions.secondary_btn, c)
                                    }
                                    ,
                                    className: Go(gi("Modal__CloseText"), Ui.closeText, Ui[h]),
                                    style: {
                                        "--color": `${null == d ? void 0 : d.secondary_button}`,
                                        background: `${null == d ? void 0 : d.secondary_button}`
                                    },
                                    children: f.actions.secondary_btn.text
                                }), f.footer_text && Ao("div", {
                                    className: Go(gi("Modal__DescriptionText"), Ui.descriptionText, Ui[h]),
                                    style: {
                                        color: `${null == d ? void 0 : d.footer_text_color}`
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: Mu(f.footer_text, o)
                                    }
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    }
    const Nu = {
        titleText: "_titleText_1naa9_2",
        titleTextMobile: "_titleTextMobile_1naa9_12",
        small: "_small_1naa9_22",
        large: "_large_1naa9_25",
        titleHelpText: "_titleHelpText_1naa9_29",
        titleHelpTextMobile: "_titleHelpTextMobile_1naa9_61",
        closeText: "_closeText_1naa9_73",
        descriptionText: "_descriptionText_1naa9_94",
        errContent: "_errContent_1naa9_116"
    }
      , Iu = ({titleText: e, titleHelpText: t, colors: r, size: n, fontSize: o, isMobile: i}) => Ao(Do, {
        children: () => jo(Lo, {
            children: [e && Ao("header", {
                className: Go(bi("Modal__TitleText"), i ? Nu.titleTextMobile : Nu.titleText, Nu[n]),
                style: {
                    color: `${null == r ? void 0 : r.text_heading_color}`,
                    fontSize: o
                },
                children: e
            }), t && Ao("div", {
                className: Go(bi("Modal__TitleHelpText"), i ? Nu.titleHelpTextMobile : Nu.titleHelpText, Nu[n]),
                style: {
                    color: `${null == r ? void 0 : r.text_description_color}`
                },
                children: t
            })]
        })
    });
    let Tu = [4, 5, 0, 1, 2, 3]
      , ku = [3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
    const Au = e => Ao(Do, {
        children: () => {
            let {mustSpin: t, setMustSpin: r, rewards: o, colors: i, prizeNumber: a} = e
              , d = [];
            return o = function(e, t) {
                let r = []
                  , n = 0;
                for (; n < e.length; n++)
                    r.push(e[n + t]),
                    n + t >= e.length - 1 && (t = 0 - (n + 1));
                return r
            }(o, 2),
            a = Tu[a],
            [...o, ...o].forEach(( (e, t) => {
                d.push({
                    option: e.label,
                    style: {
                        textAlign: "right",
                        backgroundColor: i[`bg${ku[t]}`],
                        textColor: i[`text${ku[t]}`]
                    }
                })
            }
            )),
            Ao(n.Wheel, {
                mustStartSpinning: t,
                prizeNumber: a,
                data: d,
                outerBorderWidth: 0,
                radiusLineColor: "none",
                innerBorderWidth: 0,
                spinDuration: .6,
                textDistance: 58,
                fontSize: 15,
                onStopSpinning: () => {
                    r(!1)
                }
            })
        }
    })
      , ju = {
        modalContainer: "_modalContainer_rg2mi_2",
        adminModalContainer: "_adminModalContainer_rg2mi_6",
        modalContent: "_modalContent_rg2mi_15",
        forbidUserSelect: "_forbidUserSelect_rg2mi_20",
        customDialogWrapper: "_customDialogWrapper_rg2mi_23",
        closeBtn: "_closeBtn_rg2mi_33",
        customDialog: "_customDialog_rg2mi_23",
        spinWheelWrapper: "_spinWheelWrapper_rg2mi_63",
        customDialogContent: "_customDialogContent_rg2mi_69",
        middleWrapper: "_middleWrapper_rg2mi_78",
        myLogoImg: "_myLogoImg_rg2mi_81",
        descriptionText: "_descriptionText_rg2mi_85",
        small: "_small_rg2mi_106",
        center: "_center_rg2mi_126",
        left: "_left_rg2mi_140",
        closeText: "_closeText_rg2mi_143",
        right: "_right_rg2mi_152",
        marketingBranding: "_marketingBranding_rg2mi_165",
        greySign: "_greySign_rg2mi_174",
        blueText: "_blueText_rg2mi_185",
        errContent: "_errContent_rg2mi_217",
        errIcon: "_errIcon_rg2mi_224",
        errText: "_errText_rg2mi_236",
        hideBackground: "_hideBackground_rg2mi_304"
    };
    function Lu({popupId: e, forbidUserSelect: r, rulesConfig: n, myDialogStyle: o, successStatus: i, textConfig: a, isAdmin: d, marketingBranding: u, colors: s, manuallyCode: l, isHideRemove: c, isManuallyCode: f, onClose: $}) {
        const {IntentionsStore: p} = ao
          , {start_status: h, success_status: m, error_text: _} = a
          , y = t.useRef(null)
          , {size: v, alignment: g, cornerRadius: b, logoURL: w, logoWidth: C, imgURL: P, hideOnMobile: S} = o
          , [O,x] = t.useState(!1)
          , [M,E] = t.useState(0)
          , [D,N] = t.useState(m.heading)
          , [I,T] = t.useState(m.description)
          , k = t.useRef(null);
        function A(t) {
            if (e)
                return new Promise((async (r, o) => {
                    try {
                        const {data: i, status: a} = await pn.subscribed(__spreadValues({
                            popupId: e
                        }, t));
                        if (wi.OK === a) {
                            ( () => {
                                let e = null;
                                clearInterval(e),
                                e = setInterval(( () => {
                                    var t, r, n;
                                    0 != (null == (t = null == k ? void 0 : k.current) ? void 0 : t.scrollTop) ? null == (n = null == k ? void 0 : k.current) || n.scroll(0, Math.max((null == (r = null == k ? void 0 : k.current) ? void 0 : r.scrollTop) - 50, 0)) : clearInterval(e)
                                }
                                ), 10)
                            }
                            )(),
                            E(i.reward_index),
                            x(!0);
                            const t = Hn().add(365, "day");
                            setTimeout(( () => {
                                io.setCookie(Jn() ? `pp_preview_success_subscribed${e}` : `pp_success_subscribed${e}`, "true", {
                                    expires: t.toDate()
                                }),
                                io.setCookie(Jn() ? `pp_preview_success_subscribed${e}_reward_index` : `pp_success_subscribed${e}_reward_index`, `${i.reward_index}`, {
                                    expires: t.toDate()
                                }),
                                po.setDiscountCode(i.discount_code, Jn() && !0, e),
                                p.setModalSuccessStatus(e, !0),
                                N(D.replaceAll("{{reward_label}}", n.rewards[i.reward_index].label)),
                                T(I.replaceAll("{{reward_label}}", n.rewards[i.reward_index].label))
                            }
                            ), 7e3),
                            r({
                                timer: 7e3
                            })
                        } else
                            o(i.status)
                    } catch (i) {
                        o([cu.SubmitFail])
                    }
                }
                ))
        }
        const j = () => {
            $(),
            y.current && y.current.clearForm()
        }
        ;
        return Ao(Do, {
            children: () => {
                io.getCookie(Jn() ? `pp_preview_success_subscribed${e}` : `pp_success_subscribed${e}`);
                const t = Jn() ? io.getCookie(`preview_discount_code${e}`) : io.getCookie(`discount_code${e}`);
                return Ao("div", {
                    className: Go(bi("Modal__Container"), ju.modalContainer, r ? ju.forbidUserSelect : "", d ? ju.adminModalContainer : null),
                    children: Ao("div", {
                        className: Go(bi("Modal__Content"), ju.modalContent, S ? ju.hideBackground : "", ju[`size-${v}`], ju[`cornerRadius-${b}`]),
                        style: {
                            backgroundColor: `${null == s ? void 0 : s.popup_background_color}`,
                            backgroundImage: P ? `url(${P})` : "",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        },
                        children: Ao("div", {
                            className: Go(bi("Modal__CustomDialogWrapper"), ju.customDialogWrapper),
                            children: jo("div", {
                                className: Go(bi("Modal__CustomDialog"), ju.customDialog),
                                ref: k,
                                children: [Ao("div", {
                                    className: Go(bi("Modal__CloseButton"), ju.closeBtn),
                                    onClick: j,
                                    children: Ao(Ci, {})
                                }), Ao("div", {
                                    className: Go(bi("Modal__SpinWheelWrapper"), ju.spinWheelWrapper),
                                    children: Ao(Au, {
                                        colors: s.wheel,
                                        rewards: n.rewards,
                                        prizeNumber: M,
                                        mustSpin: O,
                                        setMustSpin: x
                                    })
                                }), Ao("div", {
                                    className: Go(bi("Modal__CustomDialogContent"), ju.customDialogContent, ju[g]),
                                    children: jo("div", {
                                        className: Go(bi("Modal__MiddleWrapper"), ju.middleWrapper),
                                        children: [w && Ao("img", {
                                            className: ju.myLogoImg,
                                            src: w,
                                            alt: "logo",
                                            style: {
                                                "--width": `${C}%`
                                            }
                                        }), Ao(Iu, {
                                            titleText: i ? d ? m.heading : D : h.heading,
                                            titleHelpText: i ? d ? m.description : I : h.description,
                                            colors: s
                                        }), !i && Ao(Eu, {
                                            ref: y,
                                            isAdmin: d,
                                            forms: h.forms,
                                            formsIndex: h.forms_index,
                                            actions: h.actions,
                                            errorText: _,
                                            cornerRadius: b,
                                            size: v,
                                            colors: s,
                                            actionMap: {
                                                close: j,
                                                submit: A
                                            }
                                        }), jo("div", {
                                            children: [i && Ao(Bi, {
                                                size: v,
                                                shape: b,
                                                id: "Discount_code",
                                                color: s.primary_button_background_color,
                                                manuallyCode: l,
                                                value: t,
                                                placeholder: "Discount_code",
                                                isSuccess: i,
                                                isManuallyCode: f,
                                                onChange: () => {}
                                            }), i && m.button_action.enabled && Ao(Oi, {
                                                classNames: gi("Button__Success_status"),
                                                colors: s,
                                                buttonTextConfig: m.button_text,
                                                size: v,
                                                onClick: () => {
                                                    !d && Ou(m.button_action, j)
                                                }
                                                ,
                                                shape: b
                                            })]
                                        }), !i && jo(Lo, {
                                            children: [h.actions.secondary_btn.enabled && h.actions.secondary_btn.text && Ao("div", {
                                                onClick: () => {
                                                    !d && xu(h.actions.secondary_btn, j)
                                                }
                                                ,
                                                className: Go(bi("Modal__CloseText"), ju.closeText),
                                                style: {
                                                    "--color": `${null == s ? void 0 : s.secondary_button}`,
                                                    background: `${null == s ? void 0 : s.secondary_button}`
                                                },
                                                children: h.actions.secondary_btn.text
                                            }), h.footer_text && Ao("div", {
                                                className: Go(bi("Modal__DescriptionText"), ju.descriptionText),
                                                style: {
                                                    color: `${null == s ? void 0 : s.footer_text_color}`
                                                },
                                                dangerouslySetInnerHTML: {
                                                    __html: Mu(h.footer_text, d)
                                                }
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        })
    }
    const Ru = "_myCustomSticky_1x33c_2"
      , Fu = "_stickyBarCloseBtn_1x33c_11"
      , Bu = "_mobilePlatform_1x33c_19"
      , Uu = "_pcPlatform_1x33c_23"
      , Yu = "_stickyContentBox_1x33c_26"
      , zu = "_discountText_1x33c_36";
    function Wu({popupId: e, discountType: r, discountCode: n, manuallyCode: o, colors: i, stickyBarDescription: a, myStickyBarStyle: d, mobilePlatformParam: u}) {
        var s;
        const l = d
          , {sticky_discount_bar_background_color: c, sticky_discount_bar_text_color: f} = i;
        return t.useEffect(( () => {
            var t, r;
            const n = null == (t = document.getElementById(`sticky-bar-${e}`)) ? void 0 : t.offsetHeight;
            let o = document.querySelector(".EcomSendAPP") ? document.querySelector(".EcomSendAPP").offsetHeight : 0;
            null == (r = document.querySelector(".EcomSendAPP")) || r.setAttribute("style", `height:${o + (n || 0)}px`)
        }
        ), []),
        Ao(Lo, {
            children: jo("div", {
                id: `sticky-bar-${e}`,
                className: Go(gi("Popover__Sticky"), Ru, "sticky-bar_unset"),
                style: __spreadProps(__spreadValues({
                    top: document.querySelector(".EcomSendAPP") ? document.querySelector(".EcomSendAPP").offsetHeight - ((null == (s = document.getElementById(`sticky-bar-${e}`)) ? void 0 : s.offsetHeight) || 0) : 0
                }, l), {
                    background: `${c}`
                }),
                children: [jo("div", {
                    className: Go(gi("Popover__Sticky__Container"), Yu, u ? Bu : Uu),
                    children: [Ao("span", {
                        className: Go(gi("Popover__Sticky__DiscountText"), zu),
                        style: {
                            color: `${f}`
                        },
                        children: a
                    }), Ao(Bi, {
                        value: "manually_code" === r ? o : n,
                        placeholder: "Discount_code",
                        size: "regular",
                        shape: "small",
                        color: "#6C6B80",
                        isSuccess: !0,
                        fromSticky: !0,
                        stickyBarCustomStyle: !u,
                        block: !!u,
                        onChange: () => {}
                    })]
                }), Ao("div", {
                    className: Go(gi("Popover__Sticky__CloseButton"), Fu, u ? Bu : Uu),
                    onClick: () => {
                        var t, r;
                        if (!e)
                            return;
                        po.removeModal("forever", e);
                        let n = document.querySelector(".EcomSendAPP").offsetHeight;
                        const o = null == (t = document.getElementById(`sticky-bar-${e}`)) ? void 0 : t.offsetHeight;
                        null == (r = document.querySelector(".EcomSendAPP")) || r.setAttribute("style", `height:${n - (o || 0)}px`)
                    }
                    ,
                    children: Ao(Ci, {})
                })]
            })
        })
    }
    const Gu = e => jo("svg", __spreadProps(__spreadValues({
        width: 28,
        height: 28,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), {
        children: [Ao("g", {
            filter: "url(#widget_btn_svg__a)",
            children: Ao("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 22c5.523 0 10-4.477 10-10S19.523 2 14 2 4 6.477 4 12s4.477 10 10 10Zm4.817-13.933L14.884 12l3.933 3.933a.625.625 0 1 1-.884.884L14 12.884l-3.933 3.933a.625.625 0 0 1-.884-.884L13.116 12 9.183 8.067a.625.625 0 0 1 .884-.884L14 11.116l3.933-3.933a.625.625 0 0 1 .884.884Z",
                fill: "#fff"
            })
        }), Ao("defs", {
            children: jo("filter", {
                id: "widget_btn_svg__a",
                x: 0,
                y: 0,
                width: 28,
                height: 28,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [Ao("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), Ao("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), Ao("feOffset", {
                    dy: 2
                }), Ao("feGaussianBlur", {
                    stdDeviation: 2
                }), Ao("feColorMatrix", {
                    values: "0 0 0 0 0.0705882 0 0 0 0 0.0666667 0 0 0 0 0.152941 0 0 0 0.2 0"
                }), Ao("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_90_3334"
                }), Ao("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_90_3334",
                    result: "shape"
                })]
            })
        })]
    }))
      , Hu = "_widgetContent_1qtor_2"
      , Vu = "_mobilePlatform_1qtor_7"
      , qu = "_left_1qtor_11"
      , Ku = "_right_1qtor_14"
      , Zu = "_widgetIndexTop_1qtor_17"
      , Ju = "_myCustomWidget_1qtor_20"
      , Xu = "_mobile_left_1qtor_30"
      , Qu = "_mobile_right_1qtor_34"
      , es = "_widgetText_1qtor_41"
      , ts = "_stickyWidgetCloseBtn_1qtor_49";
    function rs({popupId: e, widgetText: t, position: r, mobilePlatformParam: n, colors: o, fixedPosition: i, onOpen: a, isSpinWheel: d}) {
        const {IntentionsStore: u} = ao
          , {sidebar_widget_background_color: s, sidebar_widget_text_color: l} = o
          , c = Go(gi("Popover__Widget"), Hu, fe(r, yn.LEFT) && [qu], fe(r, yn.RIGHT) && [Ku], n && [Vu], d && Zu);
        return Ao(Lo, {
            children: Ao("div", {
                className: Go(gi("Popover__Widget"), c),
                style: i ? {
                    position: "fixed",
                    top: "-10vh"
                } : {
                    position: "relative",
                    top: "-10vh"
                },
                children: jo("div", {
                    className: Go(gi("Popover__Widget__CustomContainer"), gi(fe(r, yn.LEFT) ? "Popover__Widget__left" : fe(r, yn.RIGHT) ? "Popover__Widget__right" : ""), Ju, n && [Vu], fe(r, yn.LEFT) && [Xu], fe(r, yn.RIGHT) && [Qu]),
                    style: {
                        background: `${s}`
                    },
                    onClick: a,
                    children: [Ao(Gu, {
                        className: Go(ts, null === r ? null : r === yn.LEFT ? qu : Ku),
                        onClick: t => {
                            e && u.hideWidgetModal(e),
                            e && io.setSessionStorage(`close_widget_modal${e}`, "true"),
                            t.stopPropagation()
                        }
                    }), Ao("span", {
                        className: Go(gi("Popover__Widget__Text"), es),
                        style: {
                            color: `${l}`
                        },
                        children: t
                    })]
                })
            })
        })
    }
    var ns = {
        exports: {}
    };
    !function(e) {
        e.exports = function() {
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }
              , t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g
              , r = /\d/
              , n = /\d\d/
              , o = /\d\d?/
              , i = /\d*[^-_:/,()\s\d]+/
              , a = {}
              , d = function(e) {
                return (e = +e) + (e > 68 ? 1900 : 2e3)
            }
              , u = function(e) {
                return function(t) {
                    this[e] = +t
                }
            }
              , s = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
                (this.zone || (this.zone = {})).offset = function(e) {
                    if (!e)
                        return 0;
                    if ("Z" === e)
                        return 0;
                    var t = e.match(/([+-]|\d\d)/g)
                      , r = 60 * t[1] + (+t[2] || 0);
                    return 0 === r ? 0 : "+" === t[0] ? -r : r
                }(e)
            }
            ]
              , l = function(e) {
                var t = a[e];
                return t && (t.indexOf ? t : t.s.concat(t.f))
            }
              , c = function(e, t) {
                var r, n = a.meridiem;
                if (n) {
                    for (var o = 1; o <= 24; o += 1)
                        if (e.indexOf(n(o, 0, t)) > -1) {
                            r = o > 12;
                            break
                        }
                } else
                    r = e === (t ? "pm" : "PM");
                return r
            }
              , f = {
                A: [i, function(e) {
                    this.afternoon = c(e, !1)
                }
                ],
                a: [i, function(e) {
                    this.afternoon = c(e, !0)
                }
                ],
                Q: [r, function(e) {
                    this.month = 3 * (e - 1) + 1
                }
                ],
                S: [r, function(e) {
                    this.milliseconds = 100 * +e
                }
                ],
                SS: [n, function(e) {
                    this.milliseconds = 10 * +e
                }
                ],
                SSS: [/\d{3}/, function(e) {
                    this.milliseconds = +e
                }
                ],
                s: [o, u("seconds")],
                ss: [o, u("seconds")],
                m: [o, u("minutes")],
                mm: [o, u("minutes")],
                H: [o, u("hours")],
                h: [o, u("hours")],
                HH: [o, u("hours")],
                hh: [o, u("hours")],
                D: [o, u("day")],
                DD: [n, u("day")],
                Do: [i, function(e) {
                    var t = a.ordinal
                      , r = e.match(/\d+/);
                    if (this.day = r[0],
                    t)
                        for (var n = 1; n <= 31; n += 1)
                            t(n).replace(/\[|\]/g, "") === e && (this.day = n)
                }
                ],
                w: [o, u("week")],
                ww: [n, u("week")],
                M: [o, u("month")],
                MM: [n, u("month")],
                MMM: [i, function(e) {
                    var t = l("months")
                      , r = (l("monthsShort") || t.map((function(e) {
                        return e.slice(0, 3)
                    }
                    ))).indexOf(e) + 1;
                    if (r < 1)
                        throw new Error;
                    this.month = r % 12 || r
                }
                ],
                MMMM: [i, function(e) {
                    var t = l("months").indexOf(e) + 1;
                    if (t < 1)
                        throw new Error;
                    this.month = t % 12 || t
                }
                ],
                Y: [/[+-]?\d+/, u("year")],
                YY: [n, function(e) {
                    this.year = d(e)
                }
                ],
                YYYY: [/\d{4}/, u("year")],
                Z: s,
                ZZ: s
            };
            function $(r) {
                var n, o;
                n = r,
                o = a && a.formats;
                for (var i = (r = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t, r, n) {
                    var i = n && n.toUpperCase();
                    return r || o[n] || e[n] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, r) {
                        return t || r.slice(1)
                    }
                    ))
                }
                ))).match(t), d = i.length, u = 0; u < d; u += 1) {
                    var s = i[u]
                      , l = f[s]
                      , c = l && l[0]
                      , $ = l && l[1];
                    i[u] = $ ? {
                        regex: c,
                        parser: $
                    } : s.replace(/^\[|\]$/g, "")
                }
                return function(e) {
                    for (var t = {}, r = 0, n = 0; r < d; r += 1) {
                        var o = i[r];
                        if ("string" == typeof o)
                            n += o.length;
                        else {
                            var a = o.regex
                              , u = o.parser
                              , s = e.slice(n)
                              , l = a.exec(s)[0];
                            u.call(t, l),
                            e = e.replace(l, "")
                        }
                    }
                    return function(e) {
                        var t = e.afternoon;
                        if (void 0 !== t) {
                            var r = e.hours;
                            t ? r < 12 && (e.hours += 12) : 12 === r && (e.hours = 0),
                            delete e.afternoon
                        }
                    }(t),
                    t
                }
            }
            return function(e, t, r) {
                r.p.customParseFormat = !0,
                e && e.parseTwoDigitYear && (d = e.parseTwoDigitYear);
                var n = t.prototype
                  , o = n.parse;
                n.parse = function(e) {
                    var t = e.date
                      , n = e.utc
                      , i = e.args;
                    this.$u = n;
                    var d = i[1];
                    if ("string" == typeof d) {
                        var u = !0 === i[2]
                          , s = !0 === i[3]
                          , l = u || s
                          , c = i[2];
                        s && (c = i[2]),
                        a = this.$locale(),
                        !u && c && (a = r.Ls[c]),
                        this.$d = function(e, t, r, n) {
                            try {
                                if (["x", "X"].indexOf(t) > -1)
                                    return new Date(("X" === t ? 1e3 : 1) * e);
                                var o = $(t)(e)
                                  , i = o.year
                                  , a = o.month
                                  , d = o.day
                                  , u = o.hours
                                  , s = o.minutes
                                  , l = o.seconds
                                  , c = o.milliseconds
                                  , f = o.zone
                                  , p = o.week
                                  , h = new Date
                                  , m = d || (i || a ? 1 : h.getDate())
                                  , _ = i || h.getFullYear()
                                  , y = 0;
                                i && !a || (y = a > 0 ? a - 1 : h.getMonth());
                                var v, g = u || 0, b = s || 0, w = l || 0, C = c || 0;
                                return f ? new Date(Date.UTC(_, y, m, g, b, w, C + 60 * f.offset * 1e3)) : r ? new Date(Date.UTC(_, y, m, g, b, w, C)) : (v = new Date(_,y,m,g,b,w,C),
                                p && (v = n(v).week(p).toDate()),
                                v)
                            } catch (P) {
                                return new Date("")
                            }
                        }(t, d, n, r),
                        this.init(),
                        c && !0 !== c && (this.$L = this.locale(c).$L),
                        l && t != this.format(d) && (this.$d = new Date("")),
                        a = {}
                    } else if (d instanceof Array)
                        for (var f = d.length, p = 1; p <= f; p += 1) {
                            i[1] = d[p - 1];
                            var h = r.apply(this, i);
                            if (h.isValid()) {
                                this.$d = h.$d,
                                this.$L = h.$L,
                                this.init();
                                break
                            }
                            p === f && (this.$d = new Date(""))
                        }
                    else
                        o.call(this, e)
                }
            }
        }()
    }(ns);
    const os = Wn(ns.exports);
    var is = {
        exports: {}
    };
    !function(e) {
        e.exports = function() {
            var e = {
                year: 0,
                month: 1,
                day: 2,
                hour: 3,
                minute: 4,
                second: 5
            }
              , t = {};
            return function(r, n, o) {
                var i, a = function(e, r, n) {
                    void 0 === n && (n = {});
                    var o = new Date(e);
                    return function(e, r) {
                        void 0 === r && (r = {});
                        var n = r.timeZoneName || "short"
                          , o = e + "|" + n
                          , i = t[o];
                        return i || (i = new Intl.DateTimeFormat("en-US",{
                            hour12: !1,
                            timeZone: e,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZoneName: n
                        }),
                        t[o] = i),
                        i
                    }(r, n).formatToParts(o)
                }, d = function(t, r) {
                    for (var n = a(t, r), i = [], d = 0; d < n.length; d += 1) {
                        var u = n[d]
                          , s = u.type
                          , l = u.value
                          , c = e[s];
                        c >= 0 && (i[c] = parseInt(l, 10))
                    }
                    var f = i[3]
                      , $ = 24 === f ? 0 : f
                      , p = i[0] + "-" + i[1] + "-" + i[2] + " " + $ + ":" + i[4] + ":" + i[5] + ":000"
                      , h = +t;
                    return (o.utc(p).valueOf() - (h -= h % 1e3)) / 6e4
                }, u = n.prototype;
                u.tz = function(e, t) {
                    void 0 === e && (e = i);
                    var r, n = this.utcOffset(), a = this.toDate(), d = a.toLocaleString("en-US", {
                        timeZone: e
                    }), u = Math.round((a - new Date(d)) / 1e3 / 60), s = 15 * -Math.round(a.getTimezoneOffset() / 15) - u;
                    if (Number(s)) {
                        if (r = o(d, {
                            locale: this.$L
                        }).$set("millisecond", this.$ms).utcOffset(s, !0),
                        t) {
                            var l = r.utcOffset();
                            r = r.add(n - l, "minute")
                        }
                    } else
                        r = this.utcOffset(0, t);
                    return r.$x.$timezone = e,
                    r
                }
                ,
                u.offsetName = function(e) {
                    var t = this.$x.$timezone || o.tz.guess()
                      , r = a(this.valueOf(), t, {
                        timeZoneName: e
                    }).find((function(e) {
                        return "timezonename" === e.type.toLowerCase()
                    }
                    ));
                    return r && r.value
                }
                ;
                var s = u.startOf;
                u.startOf = function(e, t) {
                    if (!this.$x || !this.$x.$timezone)
                        return s.call(this, e, t);
                    var r = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                        locale: this.$L
                    });
                    return s.call(r, e, t).tz(this.$x.$timezone, !0)
                }
                ,
                o.tz = function(e, t, r) {
                    var n = r && t
                      , a = r || t || i
                      , u = d(+o(), a);
                    if ("string" != typeof e)
                        return o(e).tz(a);
                    var s = function(e, t, r) {
                        var n = e - 60 * t * 1e3
                          , o = d(n, r);
                        if (t === o)
                            return [n, t];
                        var i = d(n -= 60 * (o - t) * 1e3, r);
                        return o === i ? [n, o] : [e - 60 * Math.min(o, i) * 1e3, Math.max(o, i)]
                    }(o.utc(e, n).valueOf(), u, a)
                      , l = s[0]
                      , c = s[1]
                      , f = o(l).utcOffset(c);
                    return f.$x.$timezone = a,
                    f
                }
                ,
                o.tz.guess = function() {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                ,
                o.tz.setDefault = function(e) {
                    i = e
                }
            }
        }()
    }(is);
    const as = Wn(is.exports);
    var ds = {
        exports: {}
    };
    !function(e) {
        e.exports = function() {
            var e = "minute"
              , t = /[+-]\d\d(?::?\d\d)?/g
              , r = /([+-]|\d\d)/g;
            return function(n, o, i) {
                var a = o.prototype;
                i.utc = function(e) {
                    return new o({
                        date: e,
                        utc: !0,
                        args: arguments
                    })
                }
                ,
                a.utc = function(t) {
                    var r = i(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return t ? r.add(this.utcOffset(), e) : r
                }
                ,
                a.local = function() {
                    return i(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                }
                ;
                var d = a.parse;
                a.parse = function(e) {
                    e.utc && (this.$u = !0),
                    this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                    d.call(this, e)
                }
                ;
                var u = a.init;
                a.init = function() {
                    if (this.$u) {
                        var e = this.$d;
                        this.$y = e.getUTCFullYear(),
                        this.$M = e.getUTCMonth(),
                        this.$D = e.getUTCDate(),
                        this.$W = e.getUTCDay(),
                        this.$H = e.getUTCHours(),
                        this.$m = e.getUTCMinutes(),
                        this.$s = e.getUTCSeconds(),
                        this.$ms = e.getUTCMilliseconds()
                    } else
                        u.call(this)
                }
                ;
                var s = a.utcOffset;
                a.utcOffset = function(n, o) {
                    var i = this.$utils().u;
                    if (i(n))
                        return this.$u ? 0 : i(this.$offset) ? s.call(this) : this.$offset;
                    if ("string" == typeof n && null === (n = function(e) {
                        void 0 === e && (e = "");
                        var n = e.match(t);
                        if (!n)
                            return null;
                        var o = ("" + n[0]).match(r) || ["-", 0, 0]
                          , i = o[0]
                          , a = 60 * +o[1] + +o[2];
                        return 0 === a ? 0 : "+" === i ? a : -a
                    }(n)))
                        return this;
                    var a = Math.abs(n) <= 16 ? 60 * n : n
                      , d = this;
                    if (o)
                        return d.$offset = a,
                        d.$u = 0 === n,
                        d;
                    if (0 !== n) {
                        var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                        (d = this.local().add(a + u, e)).$offset = a,
                        d.$x.$localOffset = u
                    } else
                        d = this.utc();
                    return d
                }
                ;
                var l = a.format;
                a.format = function(e) {
                    var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return l.call(this, t)
                }
                ,
                a.valueOf = function() {
                    var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * e
                }
                ,
                a.isUTC = function() {
                    return !!this.$u
                }
                ,
                a.toISOString = function() {
                    return this.toDate().toISOString()
                }
                ,
                a.toString = function() {
                    return this.toDate().toUTCString()
                }
                ;
                var c = a.toDate;
                a.toDate = function(e) {
                    return "s" === e && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : c.call(this)
                }
                ;
                var f = a.diff;
                a.diff = function(e, t, r) {
                    if (e && this.$u === e.$u)
                        return f.call(this, e, t, r);
                    var n = this.local()
                      , o = i(e).local();
                    return f.call(n, o, t, r)
                }
            }
        }()
    }(ds);
    const us = Wn(ds.exports);
    Hn.extend(os),
    Hn.extend(us),
    Hn.extend(as);
    const ss = (e, t) => {
        let r;
        return r = e.filter((e => (e => {
            switch (e) {
            case Cn.Desktop:
                return !co();
            case Cn.Mobile:
                return co();
            default:
                return !0
            }
        }
        )(e.rules.trigger.devices) && (e => {
            const {type: t, specific_page: r, match_mode: n} = e;
            let {AnyPage: o, SpecificPage: i} = Pn;
            return t === o || (t === i ? lo(r, dn(window.location.pathname, "/"), n === On.OR) : void 0)
        }
        )(e.rules.page_display_rules) && ( (e, t) => e.type === hn.ANY || (e.type === hn.IN ? e.in.includes(t.country_iso_code) : e.type === hn.NOTIN ? !e.not_in.includes(t.country_iso_code) : void 0))(e.rules.location, t) && ( (e, t) => {
            let {type: r, start_unix: n, has_end_unix: o, end_unix: i} = e;
            if (r === mn.PERIOD) {
                let e = Hn(Hn().tz(t.timezone).format("YYYY-MM-DD HH:mm:ss")).unix();
                return o ? e > n && e < i : e > n
            }
            return !0
        }
        )(e.rules.schedule, t))),
        r
    }
    ;
    function ls() {
        Jn();
        const [e,r] = t.useState(!0)
          , {ConfigStore: n, IntentionsStore: o, PopupsStore: i} = ao
          , a = t.useCallback((async () => {
            const e = function() {
                let e = yt(window, "EcomSendApps.searchParams.popup-id", "false");
                return e || (e = io.getSessionStorage("popup_id")),
                e ? window.atob(e) : ""
            }()
              , t = await pn.getConfig(e);
            if (e)
                Xn() ? i.setConfig("popups", ss([t.data], t.metadata)) : i.setConfig("popups", [t.data]);
            else {
                let {data: e, metadata: r} = t;
                Xn() && (e = ss(e, r)),
                e = e.filter(( (t, r) => e.findIndex((e => e.template.type === t.template.type)) === r)),
                e.sort((function(e, t) {
                    const r = e.template.type
                      , n = t.template.type;
                    return r > n ? -1 : r < n ? 1 : 0
                }
                )),
                i.setConfig("popups", e)
            }
            r(!1)
        }
        ), []);
        t.useLayoutEffect(( () => {
            a().then(null)
        }
        ), []),
        t.useEffect(( () => {
            if (!e) {
                i.popups.forEach((e => {
                    po.init(e.id, !0)
                }
                ));
                const e = document.getElementById("ecomsend-custom-style");
                e && (e.innerHTML = i.popups.map((e => e.style.css)).join("\n"))
            }
        }
        ), [e]);
        const d = e => {
            o.modal_success_status_list[e] ? po.removeModal("success_subscriber", e) : po.removeModal("normal", e),
            i.popups.forEach((e => {
                po.init(e.id)
            }
            ))
        }
        ;
        return Ao(Do, {
            children: () => {
                const e = e => {
                    let {start_status: t, success_status: r, error_text: n, sidebar_widget: o, sticky_discount_bar: i} = e;
                    return "won_reward"in r && (r = r.won_reward),
                    {
                        start_status: t,
                        success_status: r,
                        error_text: n,
                        sidebar_widget: o,
                        sticky_discount_bar: i
                    }
                }
                  , t = e => {
                    const {display: t, colors: r, logo: n, layout: i} = e;
                    return setTimeout(( () => {
                        document.body.style.overflow = o.show_modal ? "hidden" : "initial"
                    }
                    ), 10),
                    {
                        alignment: t.align,
                        cornerRadius: t.corner_radius,
                        imgLayout: i.image_position,
                        imgMobilePosition: i.image_mobile_position,
                        imgURL: i.image_url,
                        hideOnMobile: i.hide_on_mobile,
                        logoURL: n.url,
                        logoWidth: n.width,
                        size: t.size,
                        wheel: r.wheel
                    }
                }
                ;
                return jo("div", {
                    className: "EcomSendAPP",
                    children: [o.show_sticky_bar_list.map((e => {
                        const t = Jn() ? io.getCookie(`pp_preview_success_subscribed${e}_reward_index`) : io.getCookie(`pp_success_subscribed${e}_reward_index`)
                          , r = i.popups.find((t => t.id === e));
                        let n;
                        if (void 0 !== t) {
                            const r = i.popups.find((t => t.id === e));
                            r && (n = r.rules.rewards[Number(t)].discount_coupon)
                        }
                        return Ao(Wu, {
                            popupId: e,
                            discountType: n ? n.value : r.rules.discount_coupon.value,
                            colors: __spreadValues({}, r.style.colors),
                            manuallyCode: n ? n.manually_code : r.rules.discount_coupon.manually_code,
                            discountCode: Jn() ? io.getCookie(`preview_discount_code${e}`) : io.getCookie(`discount_code${e}`),
                            stickyBarDescription: r.text.sticky_discount_bar.description
                        }, e)
                    }
                    )), o.show_widget_modal_list.map((e => {
                        const t = i.popups.find((t => t.id === e));
                        return Ao(rs, {
                            isSpinWheel: t.template.type === In.SpinWheel,
                            popupId: e,
                            widgetText: t ? t.text.sidebar_widget.button_text : "",
                            position: t ? t.rules.sidebar_widget.show_position : null,
                            fixedPosition: !0,
                            colors: t ? t.style.colors : n.style.colors,
                            onOpen: () => (e => {
                                po.showModal(!0, !1, e)
                            }
                            )(e)
                        }, t.id)
                    }
                    )), i.popups.map((r => r.template.type === In.SpinWheel ? jo("div", {
                        className: "spinWheelWrapper " + (o.show_modal && o.show_modal_by_id == r.id ? "dialogVisible" : "hideWrapper"),
                        style: Xn() ? {} : {
                            overflow: "hidden"
                        },
                        children: [Ao(Lu, {
                            popupId: r.id,
                            forbidUserSelect: !Xn(),
                            rulesConfig: r.rules,
                            myDialogStyle: t(r.style),
                            marketingBranding: r.rules.marketing_branding.remove_powered_by,
                            successStatus: o.modal_success_status_list[r.id],
                            colors: r.style.colors,
                            isHideRemove: !0,
                            textConfig: e(r.text),
                            onClose: () => d(r.id)
                        }), !Xn() && Ao("div", {
                            className: "iframeMask"
                        })]
                    }, r.id) : r.template.type === In.OptIn ? jo(vi, {
                        open: o.show_modal && o.show_modal_by_id == r.id,
                        onClose: () => d(r.id),
                        animationDuration: 200,
                        center: !0,
                        closeOnEsc: !1,
                        blockScroll: !Qn(),
                        "aria-modal": !0,
                        focusTrapped: !1,
                        showCloseIcon: !1,
                        closeOnOverlayClick: !1,
                        classNames: {
                            modal: "pp-modal",
                            overlay: "pp-overlay"
                        },
                        children: [Ao(Du, {
                            popupId: r.id,
                            myDialogStyle: t(r.style),
                            marketingBranding: r.rules.marketing_branding.remove_powered_by,
                            successStatus: o.modal_success_status_list[r.id],
                            colors: r.style.colors,
                            isManuallyCode: "manually_code" === r.rules.discount_coupon.value,
                            isHideRemove: !0,
                            manuallyCode: r.rules.discount_coupon.manually_code,
                            textConfig: r.text,
                            isNoDiscount: "no_discount" === r.rules.discount_coupon.value,
                            onClose: () => d(r.id)
                        }), !Xn() && Ao("div", {
                            className: "iframeMask"
                        })]
                    }, r.id) : void 0))]
                })
            }
        })
    }
    const cs = new URLSearchParams(window.location.search);
    if (tn(window, "EcomSendApps.searchParams", {
        "clean-cookie": cs.get("clean-cookie") || "false",
        "popup-preview": cs.get("popup-preview") || "false",
        "popup-id": cs.get("popup-id"),
        "shop-id": cs.get("shop-id"),
        "user-select": cs.get("user-select")
    }),
    cs.has("clean-cookie") && "true" === cs.get("clean-cookie") && po.clean(),
    tn(window, "EcomSendApps.buildTime", "2025-06-10 17:31:33"),
    Kr(yt(window, "EcomSendApps.config.text", {})) || en(window.EcomSendApps.config.text, mo.unflatten(yt(window, "EcomSendApps.texts", {}))),
    !(ho.sort(( (e, t) => e.length > t.length ? -1 : 1)).filter((e => {
        var t;
        return !0 === (null == (t = null == navigator ? void 0 : navigator.userAgent) ? void 0 : t.includes(e))
    }
    )).length > 0)) {
        const e = document.createElement("div");
        e.setAttribute("id", "ecomsend-widget");
        Yo.createRoot(e).render(Ao(t.StrictMode, {
            children: Ao(Uo, __spreadProps(__spreadValues({}, ao), {
                children: Ao(ls, {})
            }))
        })),
        document.body.insertBefore(e, document.body.childNodes[0])
    }
}(mobx, React, ReactDOM, Wheel);
