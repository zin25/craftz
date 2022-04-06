/*! For license information please see component---src-templates-blog-template-js-ca2476916a3046845bb5.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "89ui": function(e, t, n) {
            "use strict";
            var r = n("5NKs"),
                o = n("R8uD"),
                a = r(n("d+NK"));
            t.renderRichText = function(e, t) {
                var n = e.raw,
                    r = e.references;
                void 0 === t && (t = {});
                var i = JSON.parse(n);
                if (!r || !r.length) return (0, o.documentToReactComponents)(i, t);
                var c = {
                        items: [{
                            sys: {
                                type: "Entry"
                            },
                            richText: i
                        }],
                        includes: {
                            Entry: r.filter((function(e) {
                                return "ContentfulAsset" !== e.__typename
                            })).map((function(e) {
                                return Object.assign({}, e, {
                                    sys: {
                                        type: "Entry",
                                        id: e.contentful_id
                                    }
                                })
                            })),
                            Asset: r.filter((function(e) {
                                return "ContentfulAsset" === e.__typename
                            })).map((function(e) {
                                return Object.assign({}, e, {
                                    sys: {
                                        type: "Asset",
                                        id: e.contentful_id
                                    }
                                })
                            }))
                        }
                    },
                    u = (0, a.default)(c, {
                        removeUnresolved: !0
                    });
                return (0, o.documentToReactComponents)(u[0].richText, t)
            }
        },
        Ny4R: function(e, t, n) {
            e.exports = {
                post: "blog-template-module--post--CPKNB",
                recommendation: "blog-template-module--recommendation--2E60g",
                nav: "blog-template-module--nav--hWMd4",
                back: "blog-template-module--back--3zgGm",
                navTitle: "blog-template-module--navTitle--2rT24",
                blogPost: "blog-template-module--blogPost--2NVOD",
                cards: "blog-template-module--cards--2OhXi",
                titles: "blog-template-module--titles--1o8e1",
                title: "blog-template-module--title--PtK2s",
                subtitle: "blog-template-module--subtitle--kwH_o",
                meta: "blog-template-module--meta--ooStb",
                caption: "blog-template-module--caption--C_F9k",
                category: "blog-template-module--category--37bKr",
                figure: "blog-template-module--figure--14iP0",
                hero: "blog-template-module--hero--IYRIp",
                body: "blog-template-module--body--Sp0PD",
                readmore: "blog-template-module--readmore--3xWWJ",
                img: "blog-template-module--img--2rcTI",
                p: "blog-template-module--p--1A58B",
                code: "blog-template-module--code--1fsLn",
                url: "blog-template-module--url--2qaNY",
                heading1: "blog-template-module--heading1--oYX1Z",
                heading2: "blog-template-module--heading2--2PzIT",
                heading3: "blog-template-module--heading3--13iJY"
            }
        },
        Q1PT: function(e, t, n) {
            (function(t) {
                var n;
                n = function() {
                    "use strict";
                    var e = Function.prototype.toString,
                        n = Object.create,
                        r = Object.defineProperty,
                        o = Object.getOwnPropertyDescriptor,
                        a = Object.getOwnPropertyNames,
                        i = Object.getOwnPropertySymbols,
                        c = Object.getPrototypeOf,
                        u = Object.prototype,
                        l = u.hasOwnProperty,
                        f = u.propertyIsEnumerable,
                        s = "function" == typeof i,
                        p = "function" == typeof WeakMap,
                        m = function(t, r) {
                            if (!t.constructor) return n(null);
                            var o = t.constructor,
                                a = t.__proto__ || c(t);
                            if (o === r.Object) return a === r.Object.prototype ? {} : n(a);
                            if (~e.call(o).indexOf("[native code]")) try {
                                return new o
                            } catch (u) {}
                            return n(a)
                        },
                        d = function(e, t, n, r) {
                            var o = m(e, t);
                            for (var a in r.set(e, o), e) l.call(e, a) && (o[a] = n(e[a], r));
                            if (s) {
                                var c = i(e),
                                    u = c.length;
                                if (u)
                                    for (var p = 0, d = void 0; p < u; p++) d = c[p], f.call(e, d) && (o[d] = n(e[d], r))
                            }
                            return o
                        },
                        y = function(e, t, n, c) {
                            var u = m(e, t);
                            c.set(e, u);
                            var l = s ? a(e).concat(i(e)) : a(e),
                                f = l.length;
                            if (f)
                                for (var p = 0, d = void 0, y = void 0; p < f; p++)
                                    if ("callee" !== (d = l[p]) && "caller" !== d)
                                        if (y = o(e, d)) {
                                            y.get || y.set || (y.value = n(e[d], c));
                                            try {
                                                r(u, d, y)
                                            } catch (h) {
                                                u[d] = y.value
                                            }
                                        } else u[d] = n(e[d], c);
                            return u
                        },
                        h = Array.isArray,
                        b = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : void(console && console.error && console.error('Unable to locate global object, returning "this".'));

                    function v(e, t) {
                        var r = !(!t || !t.isStrict),
                            o = t && t.realm || b,
                            a = r ? y : d;
                        return function e(t, n) {
                            if (!t || "object" != typeof t) return t;
                            if (n.has(t)) return n.get(t);
                            var i, c, u, l = t.constructor;
                            if (l === o.Object) return a(t, o, e, n);
                            if (h(t)) {
                                if (r) return y(t, o, e, n);
                                var f = t.length;
                                i = new l, n.set(t, i);
                                for (var s = 0; s < f; s++) i[s] = e(t[s], n);
                                return i
                            }
                            if (t instanceof o.Date) return new l(t.getTime());
                            if (t instanceof o.RegExp) return (i = new l(t.source, t.flags || (u = "", (c = t).global && (u += "g"), c.ignoreCase && (u += "i"), c.multiline && (u += "m"), c.unicode && (u += "u"), c.sticky && (u += "y"), u))).lastIndex = t.lastIndex, i;
                            if (o.Map && t instanceof o.Map) return i = new l, n.set(t, i), t.forEach((function(t, r) {
                                i.set(r, e(t, n))
                            })), i;
                            if (o.Set && t instanceof o.Set) return i = new l, n.set(t, i), t.forEach((function(t) {
                                i.add(e(t, n))
                            })), i;
                            if (o.Blob && t instanceof o.Blob) return i = new Blob([t], {
                                type: t.type
                            });
                            if (o.Buffer && o.Buffer.isBuffer(t)) return i = o.Buffer.allocUnsafe ? o.Buffer.allocUnsafe(t.length) : new l(t.length), n.set(t, i), t.copy(i), i;
                            if (o.ArrayBuffer) {
                                if (o.ArrayBuffer.isView(t)) return i = new l(t.buffer.slice(0)), n.set(t, i), i;
                                if (t instanceof o.ArrayBuffer) return i = t.slice(0), n.set(t, i), i
                            }
                            return "function" == typeof t.then || t instanceof Error || o.WeakMap && t instanceof o.WeakMap || o.WeakSet && t instanceof o.WeakSet ? t : a(t, o, e, n)
                        }(e, function() {
                            if (p) return new WeakMap;
                            var e = n({
                                has: function(t) {
                                    return !!~e._keys.indexOf(t)
                                },
                                set: function(t, n) {
                                    e._keys.push(t), e._values.push(n)
                                },
                                get: function(t) {
                                    return e._values[e._keys.indexOf(t)]
                                }
                            });
                            return e._keys = [], e._values = [], e
                        }())
                    }
                    return v.strict = function(e, t) {
                        return v(e, {
                            isStrict: !0,
                            realm: t ? t.realm : void 0
                        })
                    }, v
                }, e.exports = n()
            }).call(this, n("yLpj"))
        },
        R8uD: function(e, t, n) {
            "use strict";
            (function(e) {
                n("E9XD"), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n("q1tI"),
                    a = (r = o) && "object" == typeof r && "default" in r ? r.default : r,
                    i = function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    },
                    c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
                var u, l = function(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== c ? c : "undefined" != typeof self ? self : {};

                    function r(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }
                    var o = function(e) {
                            return e && e.Math == Math && e
                        },
                        a = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n && n) || Function("return this")(),
                        i = function(e) {
                            try {
                                return !!e()
                            } catch (t) {
                                return !0
                            }
                        },
                        u = !i((function() {
                            return 7 != Object.defineProperty({}, 1, {
                                get: function() {
                                    return 7
                                }
                            })[1]
                        })),
                        l = {}.propertyIsEnumerable,
                        f = Object.getOwnPropertyDescriptor,
                        s = {
                            f: f && !l.call({
                                1: 2
                            }, 1) ? function(e) {
                                var t = f(this, e);
                                return !!t && t.enumerable
                            } : l
                        },
                        p = function(e, t) {
                            return {
                                enumerable: !(1 & e),
                                configurable: !(2 & e),
                                writable: !(4 & e),
                                value: t
                            }
                        },
                        m = {}.toString,
                        d = "".split,
                        y = i((function() {
                            return !Object("z").propertyIsEnumerable(0)
                        })) ? function(e) {
                            return "String" == function(e) {
                                return m.call(e).slice(8, -1)
                            }(e) ? d.call(e, "") : Object(e)
                        } : Object,
                        h = function(e) {
                            return y(function(e) {
                                if (null == e) throw TypeError("Can't call method on " + e);
                                return e
                            }(e))
                        },
                        b = function(e) {
                            return "object" == typeof e ? null !== e : "function" == typeof e
                        },
                        v = function(e, t) {
                            if (!b(e)) return e;
                            var n, r;
                            if (t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                            if ("function" == typeof(n = e.valueOf) && !b(r = n.call(e))) return r;
                            if (!t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                            throw TypeError("Can't convert object to primitive value")
                        },
                        g = {}.hasOwnProperty,
                        E = function(e, t) {
                            return g.call(e, t)
                        },
                        O = a.document,
                        w = b(O) && b(O.createElement),
                        S = function(e) {
                            return w ? O.createElement(e) : {}
                        },
                        T = !u && !i((function() {
                            return 7 != Object.defineProperty(S("div"), "a", {
                                get: function() {
                                    return 7
                                }
                            }).a
                        })),
                        j = Object.getOwnPropertyDescriptor,
                        _ = {
                            f: u ? j : function(e, t) {
                                if (e = h(e), t = v(t, !0), T) try {
                                    return j(e, t)
                                } catch (n) {}
                                if (E(e, t)) return p(!s.f.call(e, t), e[t])
                            }
                        },
                        I = function(e) {
                            if (!b(e)) throw TypeError(String(e) + " is not an object");
                            return e
                        },
                        A = Object.defineProperty,
                        N = {
                            f: u ? A : function(e, t, n) {
                                if (I(e), t = v(t, !0), I(n), T) try {
                                    return A(e, t, n)
                                } catch (r) {}
                                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                                return "value" in n && (e[t] = n.value), e
                            }
                        },
                        D = u ? function(e, t, n) {
                            return N.f(e, t, p(1, n))
                        } : function(e, t, n) {
                            return e[t] = n, e
                        },
                        P = function(e, t) {
                            try {
                                D(a, e, t)
                            } catch (n) {
                                a[e] = t
                            }
                            return t
                        },
                        x = a["__core-js_shared__"] || P("__core-js_shared__", {}),
                        L = Function.toString;
                    "function" != typeof x.inspectSource && (x.inspectSource = function(e) {
                        return L.call(e)
                    });
                    var k, R, M, C = x.inspectSource,
                        H = a.WeakMap,
                        B = "function" == typeof H && /native code/.test(C(H)),
                        G = r((function(e) {
                            (e.exports = function(e, t) {
                                return x[e] || (x[e] = void 0 !== t ? t : {})
                            })("versions", []).push({
                                version: "3.6.5",
                                mode: "global",
                                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                            })
                        })),
                        K = 0,
                        Y = Math.random(),
                        U = function(e) {
                            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++K + Y).toString(36)
                        },
                        W = G("keys"),
                        F = function(e) {
                            return W[e] || (W[e] = U(e))
                        },
                        $ = {},
                        z = a.WeakMap;
                    if (B) {
                        var q = new z,
                            V = q.get,
                            Q = q.has,
                            J = q.set;
                        k = function(e, t) {
                            return J.call(q, e, t), t
                        }, R = function(e) {
                            return V.call(q, e) || {}
                        }, M = function(e) {
                            return Q.call(q, e)
                        }
                    } else {
                        var X = F("state");
                        $[X] = !0, k = function(e, t) {
                            return D(e, X, t), t
                        }, R = function(e) {
                            return E(e, X) ? e[X] : {}
                        }, M = function(e) {
                            return E(e, X)
                        }
                    }
                    var Z = {
                            set: k,
                            get: R,
                            has: M,
                            enforce: function(e) {
                                return M(e) ? R(e) : k(e, {})
                            },
                            getterFor: function(e) {
                                return function(t) {
                                    var n;
                                    if (!b(t) || (n = R(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                    return n
                                }
                            }
                        },
                        ee = r((function(e) {
                            var t = Z.get,
                                n = Z.enforce,
                                r = String(String).split("String");
                            (e.exports = function(e, t, o, i) {
                                var c = !!i && !!i.unsafe,
                                    u = !!i && !!i.enumerable,
                                    l = !!i && !!i.noTargetGet;
                                "function" == typeof o && ("string" != typeof t || E(o, "name") || D(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== a ? (c ? !l && e[t] && (u = !0) : delete e[t], u ? e[t] = o : D(e, t, o)) : u ? e[t] = o : P(t, o)
                            })(Function.prototype, "toString", (function() {
                                return "function" == typeof this && t(this).source || C(this)
                            }))
                        })),
                        te = a,
                        ne = function(e) {
                            return "function" == typeof e ? e : void 0
                        },
                        re = function(e, t) {
                            return arguments.length < 2 ? ne(te[e]) || ne(a[e]) : te[e] && te[e][t] || a[e] && a[e][t]
                        },
                        oe = Math.ceil,
                        ae = Math.floor,
                        ie = function(e) {
                            return isNaN(e = +e) ? 0 : (e > 0 ? ae : oe)(e)
                        },
                        ce = Math.min,
                        ue = Math.max,
                        le = Math.min,
                        fe = function(e) {
                            return function(t, n, r) {
                                var o, a, i = h(t),
                                    c = (o = i.length) > 0 ? ce(ie(o), 9007199254740991) : 0,
                                    u = function(e, t) {
                                        var n = ie(e);
                                        return n < 0 ? ue(n + t, 0) : le(n, t)
                                    }(r, c);
                                if (e && n != n) {
                                    for (; c > u;)
                                        if ((a = i[u++]) != a) return !0
                                } else
                                    for (; c > u; u++)
                                        if ((e || u in i) && i[u] === n) return e || u || 0;
                                return !e && -1
                            }
                        },
                        se = {
                            includes: fe(!0),
                            indexOf: fe(!1)
                        },
                        pe = se.indexOf,
                        me = function(e, t) {
                            var n, r = h(e),
                                o = 0,
                                a = [];
                            for (n in r) !E($, n) && E(r, n) && a.push(n);
                            for (; t.length > o;) E(r, n = t[o++]) && (~pe(a, n) || a.push(n));
                            return a
                        },
                        de = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                        ye = de.concat("length", "prototype"),
                        he = {
                            f: Object.getOwnPropertyNames || function(e) {
                                return me(e, ye)
                            }
                        },
                        be = {
                            f: Object.getOwnPropertySymbols
                        },
                        ve = re("Reflect", "ownKeys") || function(e) {
                            var t = he.f(I(e)),
                                n = be.f;
                            return n ? t.concat(n(e)) : t
                        },
                        ge = function(e, t) {
                            for (var n = ve(t), r = N.f, o = _.f, a = 0; a < n.length; a++) {
                                var i = n[a];
                                E(e, i) || r(e, i, o(t, i))
                            }
                        },
                        Ee = /#|\.prototype\./,
                        Oe = function(e, t) {
                            var n = Se[we(e)];
                            return n == je || n != Te && ("function" == typeof t ? i(t) : !!t)
                        },
                        we = Oe.normalize = function(e) {
                            return String(e).replace(Ee, ".").toLowerCase()
                        },
                        Se = Oe.data = {},
                        Te = Oe.NATIVE = "N",
                        je = Oe.POLYFILL = "P",
                        _e = Oe,
                        Ie = _.f,
                        Ae = function(e, t) {
                            var n, r, o, i, c, u = e.target,
                                l = e.global,
                                f = e.stat;
                            if (n = l ? a : f ? a[u] || P(u, {}) : (a[u] || {}).prototype)
                                for (r in t) {
                                    if (i = t[r], o = e.noTargetGet ? (c = Ie(n, r)) && c.value : n[r], !_e(l ? r : u + (f ? "." : "#") + r, e.forced) && void 0 !== o) {
                                        if (typeof i == typeof o) continue;
                                        ge(i, o)
                                    }(e.sham || o && o.sham) && D(i, "sham", !0), ee(n, r, i, e)
                                }
                        },
                        Ne = Object.keys || function(e) {
                            return me(e, de)
                        },
                        De = s.f,
                        Pe = function(e) {
                            return function(t) {
                                for (var n, r = h(t), o = Ne(r), a = o.length, i = 0, c = []; a > i;) n = o[i++], u && !De.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                                return c
                            }
                        },
                        xe = {
                            entries: Pe(!0),
                            values: Pe(!1)
                        }.values;
                    Ae({
                        target: "Object",
                        stat: !0
                    }, {
                        values: function(e) {
                            return xe(e)
                        }
                    });
                    te.Object.values;
                    var Le, ke = !!Object.getOwnPropertySymbols && !i((function() {
                            return !String(Symbol())
                        })),
                        Re = ke && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                        Me = G("wks"),
                        Ce = a.Symbol,
                        He = Re ? Ce : Ce && Ce.withoutSetter || U,
                        Be = u ? Object.defineProperties : function(e, t) {
                            I(e);
                            for (var n, r = Ne(t), o = r.length, a = 0; o > a;) N.f(e, n = r[a++], t[n]);
                            return e
                        },
                        Ge = re("document", "documentElement"),
                        Ke = F("IE_PROTO"),
                        Ye = function() {},
                        Ue = function(e) {
                            return "<script>" + e + "<\/script>"
                        },
                        We = function() {
                            try {
                                Le = document.domain && new ActiveXObject("htmlfile")
                            } catch (r) {}
                            var e, t;
                            We = Le ? function(e) {
                                e.write(Ue("")), e.close();
                                var t = e.parentWindow.Object;
                                return e = null, t
                            }(Le) : ((t = S("iframe")).style.display = "none", Ge.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Ue("document.F=Object")), e.close(), e.F);
                            for (var n = de.length; n--;) delete We.prototype[de[n]];
                            return We()
                        };
                    $[Ke] = !0;
                    var Fe, $e = Object.create || function(e, t) {
                            var n;
                            return null !== e ? (Ye.prototype = I(e), n = new Ye, Ye.prototype = null, n[Ke] = e) : n = We(), void 0 === t ? n : Be(n, t)
                        },
                        ze = (E(Me, Fe = "unscopables") || (ke && E(Ce, Fe) ? Me[Fe] = Ce[Fe] : Me[Fe] = He("Symbol." + Fe)), Me[Fe]),
                        qe = Array.prototype;
                    null == qe[ze] && N.f(qe, ze, {
                        configurable: !0,
                        value: $e(null)
                    });
                    var Ve, Qe = Object.defineProperty,
                        Je = {},
                        Xe = function(e) {
                            throw e
                        },
                        Ze = se.includes;
                    Ae({
                        target: "Array",
                        proto: !0,
                        forced: ! function(e, t) {
                            if (E(Je, e)) return Je[e];
                            t || (t = {});
                            var n = [][e],
                                r = !!E(t, "ACCESSORS") && t.ACCESSORS,
                                o = E(t, 0) ? t[0] : Xe,
                                a = E(t, 1) ? t[1] : void 0;
                            return Je[e] = !!n && !i((function() {
                                if (r && !u) return !0;
                                var e = {
                                    length: -1
                                };
                                r ? Qe(e, 1, {
                                    enumerable: !0,
                                    get: Xe
                                }) : e[1] = 1, n.call(e, o, a)
                            }))
                        }("indexOf", {
                            ACCESSORS: !0,
                            1: 0
                        })
                    }, {
                        includes: function(e) {
                            return Ze(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), Ve = "includes", qe[ze][Ve] = !0;
                    var et, tt, nt, rt = function(e, t, n) {
                            if (function(e) {
                                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function")
                                }(e), void 0 === t) return e;
                            switch (n) {
                                case 0:
                                    return function() {
                                        return e.call(t)
                                    };
                                case 1:
                                    return function(n) {
                                        return e.call(t, n)
                                    };
                                case 2:
                                    return function(n, r) {
                                        return e.call(t, n, r)
                                    };
                                case 3:
                                    return function(n, r, o) {
                                        return e.call(t, n, r, o)
                                    }
                            }
                            return function() {
                                return e.apply(t, arguments)
                            }
                        },
                        ot = Function.call;
                    et = "includes", rt(ot, a["Array"].prototype[et], tt);
                    ! function(e) {
                        e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block"
                    }(nt || (nt = {}));
                    var at, it = nt;
                    ! function(e) {
                        e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                    }(at || (at = {}));
                    var ct, ut = at,
                        lt = [it.PARAGRAPH, it.HEADING_1, it.HEADING_2, it.HEADING_3, it.HEADING_4, it.HEADING_5, it.HEADING_6, it.OL_LIST, it.UL_LIST, it.HR, it.QUOTE, it.EMBEDDED_ENTRY, it.EMBEDDED_ASSET],
                        ft = [it.HR, it.EMBEDDED_ENTRY, it.EMBEDDED_ASSET],
                        st = ((ct = {})[it.OL_LIST] = [it.LIST_ITEM], ct[it.UL_LIST] = [it.LIST_ITEM], ct[it.LIST_ITEM] = lt.slice(), ct[it.QUOTE] = [it.PARAGRAPH], ct),
                        pt = {
                            nodeType: it.DOCUMENT,
                            data: {},
                            content: [{
                                nodeType: it.PARAGRAPH,
                                data: {},
                                content: [{
                                    nodeType: "text",
                                    value: "",
                                    marks: [],
                                    data: {}
                                }]
                            }]
                        };
                    var mt = Object.freeze({
                        isInline: function(e) {
                            return Object.values(ut).includes(e.nodeType)
                        },
                        isBlock: function(e) {
                            return Object.values(it).includes(e.nodeType)
                        },
                        isText: function(e) {
                            return "text" === e.nodeType
                        }
                    });
                    t.BLOCKS = it, t.CONTAINERS = st, t.EMPTY_DOCUMENT = pt, t.INLINES = ut, t.MARKS = {
                        BOLD: "bold",
                        ITALIC: "italic",
                        UNDERLINE: "underline",
                        CODE: "code"
                    }, t.TOP_LEVEL_BLOCKS = lt, t.VOID_BLOCKS = ft, t.helpers = mt
                }));
                (u = l) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") && u.default;
                var f, s, p = l.BLOCKS,
                    m = (l.CONTAINERS, l.EMPTY_DOCUMENT, l.INLINES),
                    d = l.MARKS,
                    y = (l.TOP_LEVEL_BLOCKS, l.VOID_BLOCKS, l.helpers);

                function h(e, t) {
                    return e.map((function(e, n) {
                        return r = b(e, t), a = n, o.isValidElement(r) && null === r.key ? o.cloneElement(r, {
                            key: a
                        }) : r;
                        var r, a
                    }))
                }

                function b(e, t) {
                    var n = t.renderNode,
                        r = t.renderMark,
                        o = t.renderText;
                    if (y.isText(e)) return e.marks.reduce((function(e, t) {
                        return r[t.type] ? r[t.type](e) : e
                    }), o ? o(e.value) : e.value);
                    var i = h(e.content, t);
                    return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, i) : a.createElement(a.Fragment, null, i)
                }
                var v = ((f = {})[p.DOCUMENT] = function(e, t) {
                        return t
                    }, f[p.PARAGRAPH] = function(e, t) {
                        return a.createElement("p", null, t)
                    }, f[p.HEADING_1] = function(e, t) {
                        return a.createElement("h1", null, t)
                    }, f[p.HEADING_2] = function(e, t) {
                        return a.createElement("h2", null, t)
                    }, f[p.HEADING_3] = function(e, t) {
                        return a.createElement("h3", null, t)
                    }, f[p.HEADING_4] = function(e, t) {
                        return a.createElement("h4", null, t)
                    }, f[p.HEADING_5] = function(e, t) {
                        return a.createElement("h5", null, t)
                    }, f[p.HEADING_6] = function(e, t) {
                        return a.createElement("h6", null, t)
                    }, f[p.EMBEDDED_ENTRY] = function(e, t) {
                        return a.createElement("div", null, t)
                    }, f[p.UL_LIST] = function(e, t) {
                        return a.createElement("ul", null, t)
                    }, f[p.OL_LIST] = function(e, t) {
                        return a.createElement("ol", null, t)
                    }, f[p.LIST_ITEM] = function(e, t) {
                        return a.createElement("li", null, t)
                    }, f[p.QUOTE] = function(e, t) {
                        return a.createElement("blockquote", null, t)
                    }, f[p.HR] = function() {
                        return a.createElement("hr", null)
                    }, f[m.ASSET_HYPERLINK] = function(e) {
                        return E(m.ASSET_HYPERLINK, e)
                    }, f[m.ENTRY_HYPERLINK] = function(e) {
                        return E(m.ENTRY_HYPERLINK, e)
                    }, f[m.EMBEDDED_ENTRY] = function(e) {
                        return E(m.EMBEDDED_ENTRY, e)
                    }, f[m.HYPERLINK] = function(e, t) {
                        return a.createElement("a", {
                            href: e.data.uri
                        }, t)
                    }, f),
                    g = ((s = {})[d.BOLD] = function(e) {
                        return a.createElement("b", null, e)
                    }, s[d.ITALIC] = function(e) {
                        return a.createElement("i", null, e)
                    }, s[d.UNDERLINE] = function(e) {
                        return a.createElement("u", null, e)
                    }, s[d.CODE] = function(e) {
                        return a.createElement("code", null, e)
                    }, s);

                function E(e, t) {
                    return a.createElement("span", {
                        key: t.data.target.sys.id
                    }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
                }
                t.documentToReactComponents = function(e, t) {
                    return void 0 === t && (t = {}), e ? b(e, {
                        renderNode: i({}, v, t.renderNode),
                        renderMark: i({}, g, t.renderMark),
                        renderText: t.renderText
                    }) : null
                }
            }).call(this, n("yLpj"))
        },
        RVJn: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("xsX3"),
                i = n("9eSz"),
                c = n.n(i),
                u = n("Wbzz");
            t.a = function(e) {
                var t = e.slug,
                    n = e.hero,
                    r = e.category,
                    i = e.createdAt,
                    l = e.title,
                    f = e.subtitle;
                return o.a.createElement("div", {
                    className: a.card
                }, o.a.createElement("div", {
                    className: a.blogpost
                }, o.a.createElement(u.Link, {
                    to: "/" + t,
                    className: a.hero
                }, o.a.createElement(c.a, {
                    fluid: n,
                    alt: l
                })), o.a.createElement("div", {
                    className: a.caption
                }, o.a.createElement("p", {
                    className: a.header
                }, o.a.createElement(u.Link, {
                    to: "/",
                    className: a.category
                }, r.name), " ", "• ", i), o.a.createElement(u.Link, {
                    to: "/" + t,
                    className: a.titles
                }, o.a.createElement("h2", {
                    className: a.title
                }, l), o.a.createElement("p", {
                    className: a.subtitle
                }, f)))), o.a.createElement("hr", {
                    className: a.line
                }))
            }
        },
        "d+NK": function(e, t, n) {
            "use strict";
            n.r(t);
            n("E9XD");
            var r = n("Q1PT"),
                o = n.n(r),
                a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function i(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var c = {},
                u = function(e) {
                    return e && e.sys && "Link" === e.sys.type
                },
                l = function(e) {
                    return e.type + "!" + e.id
                },
                f = function e(t, n, r, o) {
                    if (n(t)) return r(t);
                    if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
                        for (var i in t) t.hasOwnProperty(i) && (t[i] = e(t[i], n, r, o));
                        o && (t = function(e) {
                            if (Array.isArray(e)) return e.filter((function(e) {
                                return e !== c
                            }));
                            for (var t in e) e[t] === c && delete e[t];
                            return e
                        }(t))
                    }
                    return t
                },
                s = function(e, t, n) {
                    var r = function(e, t) {
                        var n = t.sys,
                            r = n.linkType,
                            o = n.id,
                            a = l({
                                type: r,
                                id: o
                            });
                        return e.get(a) || c
                    }(e, t);
                    return r === c ? n ? r : t : r
                };
            t.default = function(e, t) {
                if (t = t || {}, !e.items) return [];
                var n = o()(e),
                    r = Object.keys(n.includes || {}).reduce((function(t, n) {
                        return [].concat(i(t), i(e.includes[n]))
                    }), []),
                    a = [].concat(i(n.items), i(r)),
                    c = new Map(a.map((function(e) {
                        return [l(e.sys), e]
                    })));
                return a.forEach((function(e) {
                    var n = function(e, t) {
                        return Array.isArray(t) ? Object.keys(e).filter((function(e) {
                            return -1 !== t.indexOf(e)
                        })).reduce((function(t, n) {
                            return t[n] = e[n], t
                        }), {}) : e
                    }(e, t.itemEntryPoints);
                    Object.assign(e, f(n, u, (function(e) {
                        return s(c, e, t.removeUnresolved)
                    }), t.removeUnresolved))
                })), n.items
            }
        },
        "s/Ur": function(e, t, n) {
            var r;
            n("E9XD"), "undefined" != typeof self && self, e.exports = (r = n("q1tI"), function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 7)
            }([function(e, t, n) {
                "use strict";

                function r(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                            } catch (u) {
                                o = !0, a = u
                            } finally {
                                try {
                                    r || null == c.return || c.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                            return n
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var a = n(1),
                    i = n.n(a),
                    c = n(8),
                    u = n.n(c),
                    l = n(2),
                    f = n(10),
                    s = n.n(f),
                    p = n(3),
                    m = n(6),
                    d = function(e) {
                        if (!e) return null;
                        var t = Object.keys(e);
                        return 0 === t.length ? null : t.reduce((function(t, n) {
                            return t[Object(l.a)(n)] = e[n], t
                        }), {})
                    },
                    y = function() {
                        var e = i.a.useRef(!1);
                        return i.a.useEffect((function() {
                            e.current = !0
                        }), []), e.current
                    },
                    h = function(e) {
                        var t = function() {
                                return function(e) {
                                    return e.query || Object(p.a)(e)
                                }(e)
                            },
                            n = r(i.a.useState(t), 2),
                            o = n[0],
                            a = n[1];
                        return i.a.useEffect((function() {
                            var e = t();
                            o !== e && a(e)
                        }), [e]), o
                    };
                t.a = function(e, t, n) {
                    var o = function(e) {
                            var t = i.a.useContext(m.a),
                                n = function() {
                                    return d(e) || d(t)
                                },
                                o = r(i.a.useState(n), 2),
                                a = o[0],
                                c = o[1];
                            return i.a.useEffect((function() {
                                var e = n();
                                s()(a, e) || c(e)
                            }), [e, t]), a
                        }(t),
                        a = h(e);
                    if (!a) throw new Error("Invalid or missing MediaQuery!");
                    var c = function(e) {
                            var t = r(i.a.useState(e.matches), 2),
                                n = t[0],
                                o = t[1];
                            return i.a.useEffect((function() {
                                var t = function() {
                                    o(e.matches)
                                };
                                return e.addListener(t), t(),
                                    function() {
                                        e.removeListener(t)
                                    }
                            }), [e]), n
                        }(function(e, t) {
                            var n = function() {
                                    return u()(e, t || {}, !!t)
                                },
                                o = r(i.a.useState(n), 2),
                                a = o[0],
                                c = o[1],
                                l = y();
                            return i.a.useEffect((function() {
                                return l && c(n()),
                                    function() {
                                        a.dispose()
                                    }
                            }), [e, t]), a
                        }(a, o)),
                        l = y();
                    return i.a.useEffect((function() {
                        l && n && n(c)
                    }), [c]), c
                }
            }, function(e, t) {
                e.exports = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return "-" + e.toLowerCase()
                }
                var o = /[A-Z]/g,
                    a = /^ms-/,
                    i = {};
                t.a = function(e) {
                    if (i.hasOwnProperty(e)) return i[e];
                    var t = e.replace(o, r);
                    return i[e] = a.test(t) ? "-" + t : t
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(2),
                    o = n(11);
                t.a = function(e) {
                    var t = [];
                    return Object.keys(o.a.all).forEach((function(n) {
                        var o = e[n];
                        null != o && t.push(function(e, t) {
                            var n = Object(r.a)(e);
                            return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")")
                        }(n, o))
                    })), t.join(" and ")
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = n(13)
            }, function(e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, function(e, t, n) {
                "use strict";
                var r = n(1),
                    o = n.n(r).a.createContext();
                t.a = o
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    o = n(17),
                    a = n(3),
                    i = n(6);
                n.d(t, "default", (function() {
                    return o.a
                })), n.d(t, "useMediaQuery", (function() {
                    return r.a
                })), n.d(t, "toQuery", (function() {
                    return a.a
                })), n.d(t, "Context", (function() {
                    return i.a
                }))
            }, function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    function r(e) {
                        i.matches = e.matches, i.media = e.media
                    }
                    var i = this;
                    if (a && !n) {
                        var c = a.call(window, e);
                        this.matches = c.matches, this.media = c.media, c.addListener(r)
                    } else this.matches = o(e, t), this.media = e;
                    this.addListener = function(e) {
                        c && c.addListener(e)
                    }, this.removeListener = function(e) {
                        c && c.removeListener(e)
                    }, this.dispose = function() {
                        c && c.removeListener(r)
                    }
                }
                var o = n(9).match,
                    a = "undefined" != typeof window ? window.matchMedia : null;
                e.exports = function(e, t, n) {
                    return new r(e, t, n)
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e.split(",").map((function(e) {
                        var t = (e = e.trim()).match(c),
                            n = t[1],
                            r = t[2],
                            o = t[3] || "",
                            a = {};
                        return a.inverse = !!n && "not" === n.toLowerCase(), a.type = r ? r.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], a.expressions = o.map((function(e) {
                            var t = e.match(u),
                                n = t[1].toLowerCase().match(l);
                            return {
                                modifier: n[1],
                                feature: n[2],
                                value: t[2]
                            }
                        })), a
                    }))
                }

                function o(e) {
                    var t, n = Number(e);
                    return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
                }

                function a(e) {
                    var t = parseFloat(e);
                    switch (String(e).match(s)[1]) {
                        case "dpcm":
                            return t / 2.54;
                        case "dppx":
                            return 96 * t;
                        default:
                            return t
                    }
                }

                function i(e) {
                    var t = parseFloat(e);
                    switch (String(e).match(f)[1]) {
                        case "em":
                        case "rem":
                            return 16 * t;
                        case "cm":
                            return 96 * t / 2.54;
                        case "mm":
                            return 96 * t / 2.54 / 10;
                        case "in":
                            return 96 * t;
                        case "pt":
                            return 72 * t;
                        case "pc":
                            return 72 * t / 12;
                        default:
                            return t
                    }
                }
                t.match = function(e, t) {
                    return r(e).some((function(e) {
                        var n = e.inverse,
                            r = "all" === e.type || t.type === e.type;
                        if (r && n || !r && !n) return !1;
                        var c = e.expressions.every((function(e) {
                            var n = e.feature,
                                r = e.modifier,
                                c = e.value,
                                u = t[n];
                            if (!u) return !1;
                            switch (n) {
                                case "orientation":
                                case "scan":
                                    return u.toLowerCase() === c.toLowerCase();
                                case "width":
                                case "height":
                                case "device-width":
                                case "device-height":
                                    c = i(c), u = i(u);
                                    break;
                                case "resolution":
                                    c = a(c), u = a(u);
                                    break;
                                case "aspect-ratio":
                                case "device-aspect-ratio":
                                case "device-pixel-ratio":
                                    c = o(c), u = o(u);
                                    break;
                                case "grid":
                                case "color":
                                case "color-index":
                                case "monochrome":
                                    c = parseInt(c, 10) || 1, u = parseInt(u, 10) || 0
                            }
                            switch (r) {
                                case "min":
                                    return u >= c;
                                case "max":
                                    return u <= c;
                                default:
                                    return u === c
                            }
                        }));
                        return c && !n || !c && n
                    }))
                }, t.parse = r;
                var c = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                    u = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                    l = /^(?:(min|max)-)?(.+)/,
                    f = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                    s = /(dpi|dpcm|dppx)?$/
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    if (e === t) return !0;
                    if (!e || !t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t),
                        o = n.length;
                    if (r.length !== o) return !1;
                    for (var a = 0; a < o; a++) {
                        var i = n[a];
                        if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
                    }
                    return !0
                }
            }, function(e, t, n) {
                "use strict";

                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            a(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var i = n(12),
                    c = n.n(i),
                    u = c.a.oneOfType([c.a.string, c.a.number]),
                    l = {
                        orientation: c.a.oneOf(["portrait", "landscape"]),
                        scan: c.a.oneOf(["progressive", "interlace"]),
                        aspectRatio: c.a.string,
                        deviceAspectRatio: c.a.string,
                        height: u,
                        deviceHeight: u,
                        width: u,
                        deviceWidth: u,
                        color: c.a.bool,
                        colorIndex: c.a.bool,
                        monochrome: c.a.bool,
                        resolution: u
                    },
                    f = o({
                        minAspectRatio: c.a.string,
                        maxAspectRatio: c.a.string,
                        minDeviceAspectRatio: c.a.string,
                        maxDeviceAspectRatio: c.a.string,
                        minHeight: u,
                        maxHeight: u,
                        minDeviceHeight: u,
                        maxDeviceHeight: u,
                        minWidth: u,
                        maxWidth: u,
                        minDeviceWidth: u,
                        maxDeviceWidth: u,
                        minColor: c.a.number,
                        maxColor: c.a.number,
                        minColorIndex: c.a.number,
                        maxColorIndex: c.a.number,
                        minMonochrome: c.a.number,
                        maxMonochrome: c.a.number,
                        minResolution: u,
                        maxResolution: u
                    }, l),
                    s = {
                        all: c.a.bool,
                        grid: c.a.bool,
                        aural: c.a.bool,
                        braille: c.a.bool,
                        handheld: c.a.bool,
                        print: c.a.bool,
                        projection: c.a.bool,
                        screen: c.a.bool,
                        tty: c.a.bool,
                        tv: c.a.bool,
                        embossed: c.a.bool
                    },
                    p = o(o({}, s), f);
                l.type = Object.keys(s), t.a = {
                    all: p,
                    types: s,
                    matchers: l,
                    features: f
                }
            }, function(e, t, n) {
                var r = n(4);
                e.exports = n(14)(r.isElement, !0)
            }, function(e, t, n) {
                "use strict";
                ! function() {
                    function e(e) {
                        if ("object" == typeof e && null !== e) {
                            var t = e.$$typeof;
                            switch (t) {
                                case o:
                                    var n = e.type;
                                    switch (n) {
                                        case s:
                                        case p:
                                        case i:
                                        case u:
                                        case c:
                                        case d:
                                            return n;
                                        default:
                                            var r = n && n.$$typeof;
                                            switch (r) {
                                                case f:
                                                case m:
                                                case b:
                                                case h:
                                                case l:
                                                    return r;
                                                default:
                                                    return t
                                            }
                                    }
                                case a:
                                    return t
                            }
                        }
                    }

                    function n(t) {
                        return e(t) === p
                    }
                    var r = "function" == typeof Symbol && Symbol.for,
                        o = r ? Symbol.for("react.element") : 60103,
                        a = r ? Symbol.for("react.portal") : 60106,
                        i = r ? Symbol.for("react.fragment") : 60107,
                        c = r ? Symbol.for("react.strict_mode") : 60108,
                        u = r ? Symbol.for("react.profiler") : 60114,
                        l = r ? Symbol.for("react.provider") : 60109,
                        f = r ? Symbol.for("react.context") : 60110,
                        s = r ? Symbol.for("react.async_mode") : 60111,
                        p = r ? Symbol.for("react.concurrent_mode") : 60111,
                        m = r ? Symbol.for("react.forward_ref") : 60112,
                        d = r ? Symbol.for("react.suspense") : 60113,
                        y = r ? Symbol.for("react.suspense_list") : 60120,
                        h = r ? Symbol.for("react.memo") : 60115,
                        b = r ? Symbol.for("react.lazy") : 60116,
                        v = r ? Symbol.for("react.block") : 60121,
                        g = r ? Symbol.for("react.fundamental") : 60117,
                        E = r ? Symbol.for("react.responder") : 60118,
                        O = r ? Symbol.for("react.scope") : 60119,
                        w = s,
                        S = p,
                        T = f,
                        j = l,
                        _ = o,
                        I = m,
                        A = i,
                        N = b,
                        D = h,
                        P = a,
                        x = u,
                        L = c,
                        k = d,
                        R = !1;
                    t.AsyncMode = w, t.ConcurrentMode = S, t.ContextConsumer = T, t.ContextProvider = j, t.Element = _, t.ForwardRef = I, t.Fragment = A, t.Lazy = N, t.Memo = D, t.Portal = P, t.Profiler = x, t.StrictMode = L, t.Suspense = k, t.isAsyncMode = function(t) {
                        return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(t) || e(t) === s
                    }, t.isConcurrentMode = n, t.isContextConsumer = function(t) {
                        return e(t) === f
                    }, t.isContextProvider = function(t) {
                        return e(t) === l
                    }, t.isElement = function(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === o
                    }, t.isForwardRef = function(t) {
                        return e(t) === m
                    }, t.isFragment = function(t) {
                        return e(t) === i
                    }, t.isLazy = function(t) {
                        return e(t) === b
                    }, t.isMemo = function(t) {
                        return e(t) === h
                    }, t.isPortal = function(t) {
                        return e(t) === a
                    }, t.isProfiler = function(t) {
                        return e(t) === u
                    }, t.isStrictMode = function(t) {
                        return e(t) === c
                    }, t.isSuspense = function(t) {
                        return e(t) === d
                    }, t.isValidElementType = function(e) {
                        return "string" == typeof e || "function" == typeof e || e === i || e === p || e === u || e === c || e === d || e === y || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === l || e.$$typeof === f || e.$$typeof === m || e.$$typeof === g || e.$$typeof === E || e.$$typeof === O || e.$$typeof === v)
                    }, t.typeOf = e
                }()
            }, function(e, t, n) {
                "use strict";

                function r() {
                    return null
                }
                var o, a = n(4),
                    i = n(15),
                    c = n(5),
                    u = n(16),
                    l = Function.call.bind(Object.prototype.hasOwnProperty);
                o = function(e) {
                    var t = "Warning: " + e;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }, e.exports = function(e, t) {
                    function n(e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                    }

                    function f(e) {
                        this.message = e, this.stack = ""
                    }

                    function s(e) {
                        function n(n, i, u, l, s, p, m) {
                            if (l = l || g, p = p || u, m !== c) {
                                if (t) {
                                    var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw d.name = "Invariant Violation", d
                                }
                                if ("undefined" != typeof console) {
                                    var y = l + ":" + u;
                                    !r[y] && a < 3 && (o("You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), r[y] = !0, a++)
                                }
                            }
                            return null == i[u] ? n ? new f(null === i[u] ? "The " + s + " `" + p + "` is marked as required in `" + l + "`, but its value is `null`." : "The " + s + " `" + p + "` is marked as required in `" + l + "`, but its value is `undefined`.") : null : e(i, u, l, s, p)
                        }
                        var r = {},
                            a = 0,
                            i = n.bind(null, !1);
                        return i.isRequired = n.bind(null, !0), i
                    }

                    function p(e) {
                        return s((function(t, n, r, o, a, i) {
                            var c = t[n];
                            return d(c) !== e ? new f("Invalid " + o + " `" + a + "` of type `" + y(c) + "` supplied to `" + r + "`, expected `" + e + "`.") : null
                        }))
                    }

                    function m(t) {
                        switch (typeof t) {
                            case "number":
                            case "string":
                            case "undefined":
                                return !0;
                            case "boolean":
                                return !t;
                            case "object":
                                if (Array.isArray(t)) return t.every(m);
                                if (null === t || e(t)) return !0;
                                var n = function(e) {
                                    var t = e && (b && e[b] || e[v]);
                                    if ("function" == typeof t) return t
                                }(t);
                                if (!n) return !1;
                                var r, o = n.call(t);
                                if (n !== t.entries) {
                                    for (; !(r = o.next()).done;)
                                        if (!m(r.value)) return !1
                                } else
                                    for (; !(r = o.next()).done;) {
                                        var a = r.value;
                                        if (a && !m(a[1])) return !1
                                    }
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function d(e) {
                        var t = typeof e;
                        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function(e, t) {
                            return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }(t, e) ? "symbol" : t
                    }

                    function y(e) {
                        if (null == e) return "" + e;
                        var t = d(e);
                        if ("object" === t) {
                            if (e instanceof Date) return "date";
                            if (e instanceof RegExp) return "regexp"
                        }
                        return t
                    }

                    function h(e) {
                        var t = y(e);
                        switch (t) {
                            case "array":
                            case "object":
                                return "an " + t;
                            case "boolean":
                            case "date":
                            case "regexp":
                                return "a " + t;
                            default:
                                return t
                        }
                    }
                    var b = "function" == typeof Symbol && Symbol.iterator,
                        v = "@@iterator",
                        g = "<<anonymous>>",
                        E = {
                            array: p("array"),
                            bool: p("boolean"),
                            func: p("function"),
                            number: p("number"),
                            object: p("object"),
                            string: p("string"),
                            symbol: p("symbol"),
                            any: s(r),
                            arrayOf: function(e) {
                                return s((function(t, n, r, o, a) {
                                    if ("function" != typeof e) return new f("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                                    var i = t[n];
                                    if (!Array.isArray(i)) return new f("Invalid " + o + " `" + a + "` of type `" + d(i) + "` supplied to `" + r + "`, expected an array.");
                                    for (var u = 0; u < i.length; u++) {
                                        var l = e(i, u, r, o, a + "[" + u + "]", c);
                                        if (l instanceof Error) return l
                                    }
                                    return null
                                }))
                            },
                            element: s((function(t, n, r, o, a) {
                                var i = t[n];
                                return e(i) ? null : new f("Invalid " + o + " `" + a + "` of type `" + d(i) + "` supplied to `" + r + "`, expected a single ReactElement.")
                            })),
                            elementType: s((function(e, t, n, r, o) {
                                var i = e[t];
                                return a.isValidElementType(i) ? null : new f("Invalid " + r + " `" + o + "` of type `" + d(i) + "` supplied to `" + n + "`, expected a single ReactElement type.")
                            })),
                            instanceOf: function(e) {
                                return s((function(t, n, r, o, a) {
                                    if (!(t[n] instanceof e)) {
                                        var i = e.name || g;
                                        return new f("Invalid " + o + " `" + a + "` of type `" + ((c = t[n]).constructor && c.constructor.name ? c.constructor.name : g) + "` supplied to `" + r + "`, expected instance of `" + i + "`.")
                                    }
                                    var c;
                                    return null
                                }))
                            },
                            node: s((function(e, t, n, r, o) {
                                return m(e[t]) ? null : new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.")
                            })),
                            objectOf: function(e) {
                                return s((function(t, n, r, o, a) {
                                    if ("function" != typeof e) return new f("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                                    var i = t[n],
                                        u = d(i);
                                    if ("object" !== u) return new f("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + r + "`, expected an object.");
                                    for (var s in i)
                                        if (l(i, s)) {
                                            var p = e(i, s, r, o, a + "." + s, c);
                                            if (p instanceof Error) return p
                                        }
                                    return null
                                }))
                            },
                            oneOf: function(e) {
                                function t(t, r, o, a, i) {
                                    for (var c = t[r], u = 0; u < e.length; u++)
                                        if (n(c, e[u])) return null;
                                    var l = JSON.stringify(e, (function(e, t) {
                                        return "symbol" === y(t) ? String(t) : t
                                    }));
                                    return new f("Invalid " + a + " `" + i + "` of value `" + String(c) + "` supplied to `" + o + "`, expected one of " + l + ".")
                                }
                                return Array.isArray(e) ? s(t) : (o(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), r)
                            },
                            oneOfType: function(e) {
                                if (!Array.isArray(e)) return o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    if ("function" != typeof n) return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + h(n) + " at index " + t + "."), r
                                }
                                return s((function(t, n, r, o, a) {
                                    for (var i = 0; i < e.length; i++)
                                        if (null == (0, e[i])(t, n, r, o, a, c)) return null;
                                    return new f("Invalid " + o + " `" + a + "` supplied to `" + r + "`.")
                                }))
                            },
                            shape: function(e) {
                                return s((function(t, n, r, o, a) {
                                    var i = t[n],
                                        u = d(i);
                                    if ("object" !== u) return new f("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + r + "`, expected `object`.");
                                    for (var l in e) {
                                        var s = e[l];
                                        if (s) {
                                            var p = s(i, l, r, o, a + "." + l, c);
                                            if (p) return p
                                        }
                                    }
                                    return null
                                }))
                            },
                            exact: function(e) {
                                return s((function(t, n, r, o, a) {
                                    var u = t[n],
                                        l = d(u);
                                    if ("object" !== l) return new f("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                                    var s = i({}, t[n], e);
                                    for (var p in s) {
                                        var m = e[p];
                                        if (!m) return new f("Invalid " + o + " `" + a + "` key `" + p + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                        var y = m(u, p, r, o, a + "." + p, c);
                                        if (y) return y
                                    }
                                    return null
                                }))
                            }
                        };
                    return f.prototype = Error.prototype, E.checkPropTypes = u, E.resetWarningCache = u.resetWarningCache, E.PropTypes = E, E
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                var o = Object.getOwnPropertySymbols,
                    a = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            r[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (o) {
                        return !1
                    }
                }() ? Object.assign : function(e, t) {
                    for (var n, c, u = r(e), l = 1; l < arguments.length; l++) {
                        for (var f in n = Object(arguments[l])) a.call(n, f) && (u[f] = n[f]);
                        if (o) {
                            c = o(n);
                            for (var s = 0; s < c.length; s++) i.call(n, c[s]) && (u[c[s]] = n[c[s]])
                        }
                    }
                    return u
                }
            }, function(e, t, n) {
                "use strict";

                function r(e, t, n, r, u) {
                    for (var l in e)
                        if (c(e, l)) {
                            var f;
                            try {
                                if ("function" != typeof e[l]) {
                                    var s = Error((r || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.");
                                    throw s.name = "Invariant Violation", s
                                }
                                f = e[l](t, l, r, n, null, a)
                            } catch (m) {
                                f = m
                            }
                            if (!f || f instanceof Error || o((r || "React class") + ": type specification of " + n + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), f instanceof Error && !(f.message in i)) {
                                i[f.message] = !0;
                                var p = u ? u() : "";
                                o("Failed " + n + " type: " + f.message + (null != p ? p : ""))
                            }
                        }
                }
                var o = function() {},
                    a = n(5),
                    i = {},
                    c = Function.call.bind(Object.prototype.hasOwnProperty);
                o = function(e) {
                    var t = "Warning: " + e;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }, r.resetWarningCache = function() {
                    i = {}
                }, e.exports = r
            }, function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }
                t.a = function(e) {
                    var t = e.children,
                        n = e.device,
                        a = e.onChange,
                        i = r(e, ["children", "device", "onChange"]),
                        c = Object(o.a)(i, n, a);
                    return "function" == typeof t ? t(c) : c ? t : null
                };
                var o = n(0)
            }]))
        },
        vbKG: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

                function r(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var o = function(e) {
                        return e && e.Math == Math && e
                    },
                    a = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n && n) || Function("return this")(),
                    i = function(e) {
                        try {
                            return !!e()
                        } catch (t) {
                            return !0
                        }
                    },
                    c = !i((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    })),
                    u = {}.propertyIsEnumerable,
                    l = Object.getOwnPropertyDescriptor,
                    f = {
                        f: l && !u.call({
                            1: 2
                        }, 1) ? function(e) {
                            var t = l(this, e);
                            return !!t && t.enumerable
                        } : u
                    },
                    s = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    },
                    p = {}.toString,
                    m = "".split,
                    d = i((function() {
                        return !Object("z").propertyIsEnumerable(0)
                    })) ? function(e) {
                        return "String" == function(e) {
                            return p.call(e).slice(8, -1)
                        }(e) ? m.call(e, "") : Object(e)
                    } : Object,
                    y = function(e) {
                        return d(function(e) {
                            if (null == e) throw TypeError("Can't call method on " + e);
                            return e
                        }(e))
                    },
                    h = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    },
                    b = function(e, t) {
                        if (!h(e)) return e;
                        var n, r;
                        if (t && "function" == typeof(n = e.toString) && !h(r = n.call(e))) return r;
                        if ("function" == typeof(n = e.valueOf) && !h(r = n.call(e))) return r;
                        if (!t && "function" == typeof(n = e.toString) && !h(r = n.call(e))) return r;
                        throw TypeError("Can't convert object to primitive value")
                    },
                    v = {}.hasOwnProperty,
                    g = function(e, t) {
                        return v.call(e, t)
                    },
                    E = a.document,
                    O = h(E) && h(E.createElement),
                    w = function(e) {
                        return O ? E.createElement(e) : {}
                    },
                    S = !c && !i((function() {
                        return 7 != Object.defineProperty(w("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })),
                    T = Object.getOwnPropertyDescriptor,
                    j = {
                        f: c ? T : function(e, t) {
                            if (e = y(e), t = b(t, !0), S) try {
                                return T(e, t)
                            } catch (n) {}
                            if (g(e, t)) return s(!f.f.call(e, t), e[t])
                        }
                    },
                    _ = function(e) {
                        if (!h(e)) throw TypeError(String(e) + " is not an object");
                        return e
                    },
                    I = Object.defineProperty,
                    A = {
                        f: c ? I : function(e, t, n) {
                            if (_(e), t = b(t, !0), _(n), S) try {
                                return I(e, t, n)
                            } catch (r) {}
                            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                            return "value" in n && (e[t] = n.value), e
                        }
                    },
                    N = c ? function(e, t, n) {
                        return A.f(e, t, s(1, n))
                    } : function(e, t, n) {
                        return e[t] = n, e
                    },
                    D = function(e, t) {
                        try {
                            N(a, e, t)
                        } catch (n) {
                            a[e] = t
                        }
                        return t
                    },
                    P = a["__core-js_shared__"] || D("__core-js_shared__", {}),
                    x = Function.toString;
                "function" != typeof P.inspectSource && (P.inspectSource = function(e) {
                    return x.call(e)
                });
                var L, k, R, M = P.inspectSource,
                    C = a.WeakMap,
                    H = "function" == typeof C && /native code/.test(M(C)),
                    B = r((function(e) {
                        (e.exports = function(e, t) {
                            return P[e] || (P[e] = void 0 !== t ? t : {})
                        })("versions", []).push({
                            version: "3.6.5",
                            mode: "global",
                            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                        })
                    })),
                    G = 0,
                    K = Math.random(),
                    Y = function(e) {
                        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++G + K).toString(36)
                    },
                    U = B("keys"),
                    W = function(e) {
                        return U[e] || (U[e] = Y(e))
                    },
                    F = {},
                    $ = a.WeakMap;
                if (H) {
                    var z = new $,
                        q = z.get,
                        V = z.has,
                        Q = z.set;
                    L = function(e, t) {
                        return Q.call(z, e, t), t
                    }, k = function(e) {
                        return q.call(z, e) || {}
                    }, R = function(e) {
                        return V.call(z, e)
                    }
                } else {
                    var J = W("state");
                    F[J] = !0, L = function(e, t) {
                        return N(e, J, t), t
                    }, k = function(e) {
                        return g(e, J) ? e[J] : {}
                    }, R = function(e) {
                        return g(e, J)
                    }
                }
                var X = {
                        set: L,
                        get: k,
                        has: R,
                        enforce: function(e) {
                            return R(e) ? k(e) : L(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var n;
                                if (!h(t) || (n = k(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                return n
                            }
                        }
                    },
                    Z = r((function(e) {
                        var t = X.get,
                            n = X.enforce,
                            r = String(String).split("String");
                        (e.exports = function(e, t, o, i) {
                            var c = !!i && !!i.unsafe,
                                u = !!i && !!i.enumerable,
                                l = !!i && !!i.noTargetGet;
                            "function" == typeof o && ("string" != typeof t || g(o, "name") || N(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== a ? (c ? !l && e[t] && (u = !0) : delete e[t], u ? e[t] = o : N(e, t, o)) : u ? e[t] = o : D(t, o)
                        })(Function.prototype, "toString", (function() {
                            return "function" == typeof this && t(this).source || M(this)
                        }))
                    })),
                    ee = a,
                    te = function(e) {
                        return "function" == typeof e ? e : void 0
                    },
                    ne = function(e, t) {
                        return arguments.length < 2 ? te(ee[e]) || te(a[e]) : ee[e] && ee[e][t] || a[e] && a[e][t]
                    },
                    re = Math.ceil,
                    oe = Math.floor,
                    ae = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? oe : re)(e)
                    },
                    ie = Math.min,
                    ce = Math.max,
                    ue = Math.min,
                    le = function(e) {
                        return function(t, n, r) {
                            var o, a, i = y(t),
                                c = (o = i.length) > 0 ? ie(ae(o), 9007199254740991) : 0,
                                u = function(e, t) {
                                    var n = ae(e);
                                    return n < 0 ? ce(n + t, 0) : ue(n, t)
                                }(r, c);
                            if (e && n != n) {
                                for (; c > u;)
                                    if ((a = i[u++]) != a) return !0
                            } else
                                for (; c > u; u++)
                                    if ((e || u in i) && i[u] === n) return e || u || 0;
                            return !e && -1
                        }
                    },
                    fe = {
                        includes: le(!0),
                        indexOf: le(!1)
                    },
                    se = fe.indexOf,
                    pe = function(e, t) {
                        var n, r = y(e),
                            o = 0,
                            a = [];
                        for (n in r) !g(F, n) && g(r, n) && a.push(n);
                        for (; t.length > o;) g(r, n = t[o++]) && (~se(a, n) || a.push(n));
                        return a
                    },
                    me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    de = me.concat("length", "prototype"),
                    ye = {
                        f: Object.getOwnPropertyNames || function(e) {
                            return pe(e, de)
                        }
                    },
                    he = {
                        f: Object.getOwnPropertySymbols
                    },
                    be = ne("Reflect", "ownKeys") || function(e) {
                        var t = ye.f(_(e)),
                            n = he.f;
                        return n ? t.concat(n(e)) : t
                    },
                    ve = function(e, t) {
                        for (var n = be(t), r = A.f, o = j.f, a = 0; a < n.length; a++) {
                            var i = n[a];
                            g(e, i) || r(e, i, o(t, i))
                        }
                    },
                    ge = /#|\.prototype\./,
                    Ee = function(e, t) {
                        var n = we[Oe(e)];
                        return n == Te || n != Se && ("function" == typeof t ? i(t) : !!t)
                    },
                    Oe = Ee.normalize = function(e) {
                        return String(e).replace(ge, ".").toLowerCase()
                    },
                    we = Ee.data = {},
                    Se = Ee.NATIVE = "N",
                    Te = Ee.POLYFILL = "P",
                    je = Ee,
                    _e = j.f,
                    Ie = function(e, t) {
                        var n, r, o, i, c, u = e.target,
                            l = e.global,
                            f = e.stat;
                        if (n = l ? a : f ? a[u] || D(u, {}) : (a[u] || {}).prototype)
                            for (r in t) {
                                if (i = t[r], o = e.noTargetGet ? (c = _e(n, r)) && c.value : n[r], !je(l ? r : u + (f ? "." : "#") + r, e.forced) && void 0 !== o) {
                                    if (typeof i == typeof o) continue;
                                    ve(i, o)
                                }(e.sham || o && o.sham) && N(i, "sham", !0), Z(n, r, i, e)
                            }
                    },
                    Ae = Object.keys || function(e) {
                        return pe(e, me)
                    },
                    Ne = f.f,
                    De = function(e) {
                        return function(t) {
                            for (var n, r = y(t), o = Ae(r), a = o.length, i = 0, u = []; a > i;) n = o[i++], c && !Ne.call(r, n) || u.push(e ? [n, r[n]] : r[n]);
                            return u
                        }
                    },
                    Pe = {
                        entries: De(!0),
                        values: De(!1)
                    }.values;
                Ie({
                    target: "Object",
                    stat: !0
                }, {
                    values: function(e) {
                        return Pe(e)
                    }
                });
                ee.Object.values;
                var xe, Le = !!Object.getOwnPropertySymbols && !i((function() {
                        return !String(Symbol())
                    })),
                    ke = Le && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                    Re = B("wks"),
                    Me = a.Symbol,
                    Ce = ke ? Me : Me && Me.withoutSetter || Y,
                    He = c ? Object.defineProperties : function(e, t) {
                        _(e);
                        for (var n, r = Ae(t), o = r.length, a = 0; o > a;) A.f(e, n = r[a++], t[n]);
                        return e
                    },
                    Be = ne("document", "documentElement"),
                    Ge = W("IE_PROTO"),
                    Ke = function() {},
                    Ye = function(e) {
                        return "<script>" + e + "<\/script>"
                    },
                    Ue = function() {
                        try {
                            xe = document.domain && new ActiveXObject("htmlfile")
                        } catch (r) {}
                        var e, t;
                        Ue = xe ? function(e) {
                            e.write(Ye("")), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t
                        }(xe) : ((t = w("iframe")).style.display = "none", Be.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Ye("document.F=Object")), e.close(), e.F);
                        for (var n = me.length; n--;) delete Ue.prototype[me[n]];
                        return Ue()
                    };
                F[Ge] = !0;
                var We, Fe = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (Ke.prototype = _(e), n = new Ke, Ke.prototype = null, n[Ge] = e) : n = Ue(), void 0 === t ? n : He(n, t)
                    },
                    $e = (g(Re, We = "unscopables") || (Le && g(Me, We) ? Re[We] = Me[We] : Re[We] = Ce("Symbol." + We)), Re[We]),
                    ze = Array.prototype;
                null == ze[$e] && A.f(ze, $e, {
                    configurable: !0,
                    value: Fe(null)
                });
                var qe, Ve = Object.defineProperty,
                    Qe = {},
                    Je = function(e) {
                        throw e
                    },
                    Xe = fe.includes;
                Ie({
                    target: "Array",
                    proto: !0,
                    forced: ! function(e, t) {
                        if (g(Qe, e)) return Qe[e];
                        t || (t = {});
                        var n = [][e],
                            r = !!g(t, "ACCESSORS") && t.ACCESSORS,
                            o = g(t, 0) ? t[0] : Je,
                            a = g(t, 1) ? t[1] : void 0;
                        return Qe[e] = !!n && !i((function() {
                            if (r && !c) return !0;
                            var e = {
                                length: -1
                            };
                            r ? Ve(e, 1, {
                                enumerable: !0,
                                get: Je
                            }) : e[1] = 1, n.call(e, o, a)
                        }))
                    }("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    })
                }, {
                    includes: function(e) {
                        return Xe(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), qe = "includes", ze[$e][qe] = !0;
                var Ze, et, tt, nt = function(e, t, n) {
                        if (function(e) {
                                if ("function" != typeof e) throw TypeError(String(e) + " is not a function")
                            }(e), void 0 === t) return e;
                        switch (n) {
                            case 0:
                                return function() {
                                    return e.call(t)
                                };
                            case 1:
                                return function(n) {
                                    return e.call(t, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return e.call(t, n, r)
                                };
                            case 3:
                                return function(n, r, o) {
                                    return e.call(t, n, r, o)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    },
                    rt = Function.call;
                Ze = "includes", nt(rt, a["Array"].prototype[Ze], et);
                ! function(e) {
                    e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block"
                }(tt || (tt = {}));
                var ot, at = tt;
                ! function(e) {
                    e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                }(ot || (ot = {}));
                var it, ct = ot,
                    ut = [at.PARAGRAPH, at.HEADING_1, at.HEADING_2, at.HEADING_3, at.HEADING_4, at.HEADING_5, at.HEADING_6, at.OL_LIST, at.UL_LIST, at.HR, at.QUOTE, at.EMBEDDED_ENTRY, at.EMBEDDED_ASSET],
                    lt = [at.HR, at.EMBEDDED_ENTRY, at.EMBEDDED_ASSET],
                    ft = ((it = {})[at.OL_LIST] = [at.LIST_ITEM], it[at.UL_LIST] = [at.LIST_ITEM], it[at.LIST_ITEM] = ut.slice(), it[at.QUOTE] = [at.PARAGRAPH], it),
                    st = {
                        nodeType: at.DOCUMENT,
                        data: {},
                        content: [{
                            nodeType: at.PARAGRAPH,
                            data: {},
                            content: [{
                                nodeType: "text",
                                value: "",
                                marks: [],
                                data: {}
                            }]
                        }]
                    };
                var pt = Object.freeze({
                    isInline: function(e) {
                        return Object.values(ct).includes(e.nodeType)
                    },
                    isBlock: function(e) {
                        return Object.values(at).includes(e.nodeType)
                    },
                    isText: function(e) {
                        return "text" === e.nodeType
                    }
                });
                t.BLOCKS = at, t.CONTAINERS = ft, t.EMPTY_DOCUMENT = st, t.INLINES = ct, t.MARKS = {
                    BOLD: "bold",
                    ITALIC: "italic",
                    UNDERLINE: "underline",
                    CODE: "code"
                }, t.TOP_LEVEL_BLOCKS = ut, t.VOID_BLOCKS = lt, t.helpers = pt
            }).call(this, n("yLpj"))
        },
        xCRD: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, o, a = n("q1tI"),
                i = n.n(a),
                c = n("Wbzz"),
                u = n("9eSz"),
                l = n.n(u),
                f = n("89ui"),
                s = n("vbKG"),
                p = n("F+iK"),
                m = n("RVJn"),
                d = n("s/Ur"),
                y = n("qhky"),
                h = (n("sykF"), n("Ny4R")),
                b = {
                    renderNode: (r = {}, r[s.BLOCKS.EMBEDDED_ASSET] = function(e) {
                        return i.a.createElement(l.a, Object.assign({
                            className: h.img,
                            alt: e.data.target.title
                        }, e.data.target))
                    }, r[s.BLOCKS.PARAGRAPH] = function(e, t) {
                        return i.a.createElement("p", {
                            className: h.p
                        }, t)
                    }, r[s.BLOCKS.HEADING_1] = function(e, t) {
                        return i.a.createElement("h1", {
                            className: h.heading1
                        }, t)
                    }, r[s.BLOCKS.HEADING_2] = function(e, t) {
                        return i.a.createElement("h2", {
                            className: h.heading2
                        }, t)
                    }, r[s.BLOCKS.HEADING_3] = function(e, t) {
                        return i.a.createElement("h3", {
                            className: h.heading3
                        }, t)
                    }, r[s.INLINES.HYPERLINK] = function(e, t) {
                        return i.a.createElement("a", {
                            href: e.data.uri,
                            target: "_blank",
                            rel: "noreferrer",
                            className: h.url
                        }, t)
                    }, r),
                    renderMark: (o = {}, o[s.MARKS.CODE] = function(e) {
                        return i.a.createElement("code", {
                            className: h.code
                        }, e.trim())
                    }, o)
                };
            t.default = function(e) {
                var t = e.data,
                    n = Object(d.useMediaQuery)({
                        query: "(min-width: 1024px)"
                    }),
                    r = t.blog,
                    o = r.title,
                    a = r.subtitle,
                    u = r.published,
                    s = r.category,
                    v = r.brief.brief,
                    g = r.updatedAt,
                    E = r.createdAt,
                    O = r.keywords,
                    w = r.slug,
                    S = r.tags,
                    T = r.hero,
                    j = r.body,
                    _ = t.allContentfulBlogs.nodes,
                    I = t.back;
                return i.a.createElement("div", {
                    className: h.post
                }, i.a.createElement(y.a, {
                    htmlAttributes: {
                        lang: "id"
                    }
                }, i.a.createElement("meta", {
                    name: "generator",
                    content: "Gatsby"
                }), i.a.createElement("title", null, o, " | Dimas Miftah"), i.a.createElement("meta", {
                    charset: "utf-8"
                }), i.a.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1,viewport-fit=cover"
                }), i.a.createElement("meta", {
                    "http-equiv": "x-ua-compatible",
                    content: "ie=edge"
                }), i.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google.com ",
                    crossOrigin: !0
                }), i.a.createElement("link", {
                    rel: "dns-prefetch",
                    href: "https://www.google.com"
                }), i.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google-analytics.com",
                    crossOrigin: !0
                }), i.a.createElement("link", {
                    rel: "dns-prefetch",
                    href: "https://www.google-analytics.com"
                }), i.a.createElement("meta", {
                    itemprop: "name",
                    content: "Dimas Miftah"
                }), i.a.createElement("meta", {
                    itemprop: "description",
                    content: v
                }), i.a.createElement("meta", {
                    itemprop: "datePublished",
                    content: E
                }), i.a.createElement("meta", {
                    itemprop: "dateModified",
                    content: g
                }), i.a.createElement("meta", {
                    itemprop: "image",
                    content: T.file.url
                }), i.a.createElement("meta", {
                    itemprop: "keywords",
                    content: O
                }), i.a.createElement("meta", {
                    property: "og:site_name",
                    content: "Dimas Miftah"
                }), i.a.createElement("meta", {
                    property: "fb:admins",
                    content: "dimas.m.huda.9"
                }), i.a.createElement("meta", {
                    property: "og:locale",
                    content: "id_ID"
                }), i.a.createElement("meta", {
                    property: "og:locale:alternate",
                    content: "ms_MY"
                }), i.a.createElement("meta", {
                    property: "og:title",
                    content: o
                }), i.a.createElement("meta", {
                    property: "og:description",
                    content: a
                }), i.a.createElement("meta", {
                    property: "og:type",
                    content: "article"
                }), i.a.createElement("meta", {
                    property: "og:url",
                    content: "https://www.dimasmiftah.me/" + w
                }), i.a.createElement("meta", {
                    property: "og:image",
                    content: T.file.url
                }), i.a.createElement("meta", {
                    property: "og:image:secure_url",
                    content: "https:" + T.file.url
                }), i.a.createElement("meta", {
                    property: "og:image:width",
                    content: T.fixed.width
                }), i.a.createElement("meta", {
                    property: "og:image:height",
                    content: T.fixed.height
                }), i.a.createElement("meta", {
                    property: "og:image:alt",
                    content: T.title
                }), i.a.createElement("meta", {
                    property: "article:author",
                    content: "Dimas Miftahul Huda"
                }), i.a.createElement("meta", {
                    property: "article:publisher",
                    content: "Dimas Miftah "
                }), i.a.createElement("meta", {
                    property: "article:published_time",
                    content: E
                }), i.a.createElement("meta", {
                    property: "article:modified_time",
                    content: g
                }), i.a.createElement("meta", {
                    property: "article:section",
                    content: "post"
                }), S.map((function(e, t) {
                    return i.a.createElement("meta", {
                        key: t,
                        property: "article:tag",
                        content: e
                    })
                })), i.a.createElement("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), i.a.createElement("meta", {
                    name: "twitter:site",
                    content: "@dimasmfth"
                }), i.a.createElement("meta", {
                    name: "twitter:creator",
                    content: "@dimasmfth"
                }), i.a.createElement("meta", {
                    name: "twitter:title",
                    content: o
                }), i.a.createElement("meta", {
                    name: "twitter:description",
                    content: a
                }), i.a.createElement("meta", {
                    name: "twitter:image",
                    content: "https:" + T.file.url
                }), i.a.createElement("meta", {
                    name: "twitter:image:alt",
                    content: T.title
                }), i.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.dimasmiftah.me"
                }), i.a.createElement("link", {
                    rel: "canonical",
                    href: "https://www.dimasmiftah.me/" + w
                }), i.a.createElement("meta", {
                    name: "description",
                    content: v
                }), i.a.createElement("meta", {
                    content: "index,follow",
                    name: "robots"
                }), i.a.createElement("meta", {
                    content: !0,
                    name: "copyright"
                }), i.a.createElement("meta", {
                    content: "Indonesian",
                    name: "language"
                }), i.a.createElement("meta", {
                    content: "index,follow",
                    name: "googlebot"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "Googlebot-Image"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "Scooter"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "msnbot"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "alexabot"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "Slurp"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "ZyBorg"
                }), i.a.createElement("meta", {
                    content: "follow, all",
                    name: "Scooter"
                }), i.a.createElement("meta", {
                    content: "true",
                    name: "MSSmartTagsPreventParsing"
                }), i.a.createElement("meta", {
                    content: "ALL",
                    name: "SPIDERS"
                }), i.a.createElement("meta", {
                    content: "ALL",
                    name: "WEBCRAWLERS"
                }), i.a.createElement("meta", {
                    content: "aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot",
                    name: "search engines"
                })), !n && i.a.createElement(c.Link, {
                    to: "/",
                    className: h.nav
                }, i.a.createElement("div", {
                    className: h.back
                }, i.a.createElement(l.a, {
                    fluid: I.childImageSharp.fluid
                })), i.a.createElement("p", {
                    className: h.navTitle
                }, o)), i.a.createElement("div", {
                    className: h.blogPost
                }, i.a.createElement("div", {
                    className: h.titles
                }, i.a.createElement("h1", {
                    className: h.title
                }, o), i.a.createElement("h2", {
                    className: h.subtitle
                }, a)), i.a.createElement("p", {
                    className: h.meta
                }, i.a.createElement(c.Link, {
                    to: "/" + s.slug,
                    className: h.category
                }, s.name), " ", "• Dipublikasikan pada ", u), i.a.createElement("div", {
                    className: h.figure
                }, i.a.createElement("div", {
                    className: h.hero
                }, i.a.createElement(l.a, {
                    fluid: T.fluid
                })), i.a.createElement("span", {
                    className: h.caption
                }, T.title)), i.a.createElement("div", {
                    className: h.body
                }, Object(f.renderRichText)(j, b)), _.length > 0 && i.a.createElement("div", {
                    className: h.recommendation
                }, i.a.createElement("h3", {
                    className: h.readmore
                }, "Baca lainnya"), i.a.createElement("div", {
                    className: h.cards
                }, _.map((function(e) {
                    return i.a.createElement(m.a, {
                        key: e.id,
                        slug: e.slug,
                        hero: e.hero.fluid,
                        category: e.category,
                        createdAt: e.createdAt,
                        title: e.title,
                        subtitle: e.subtitle
                    })
                }))))), n ? i.a.createElement(p.a, {
                    header: !0
                }) : i.a.createElement(p.a, null))
            }
        },
        xsX3: function(e, t, n) {
            e.exports = {
                card: "card-module--card--21p37",
                line: "card-module--line--2Y4St",
                blogpost: "card-module--blogpost--1N5zi",
                caption: "card-module--caption--9OHWj",
                header: "card-module--header--39ZDa",
                category: "card-module--category--WSzKE",
                titles: "card-module--titles--3OTcZ",
                title: "card-module--title--1WJC9",
                subtitle: "card-module--subtitle--3cDsm",
                hero: "card-module--hero--19mwt"
            }
        }
    }
]);
//# sourceMappingURL=component---src-templates-blog-template-js-ca2476916a3046845bb5.js.map