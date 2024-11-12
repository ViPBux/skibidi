! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "33878921-8825-405e-a094-4275e1405f71", e._sentryDebugIdIdentifier = "sentry-dbid-33878921-8825-405e-a094-4275e1405f71")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9097], {
        19745: function(e, t) {
            "use strict";
            var n, r, o, u;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ACTION_FAST_REFRESH: function() {
                        return s
                    },
                    ACTION_NAVIGATE: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_REFRESH: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return a
                    },
                    ACTION_SERVER_ACTION: function() {
                        return d
                    },
                    ACTION_SERVER_PATCH: function() {
                        return i
                    },
                    PrefetchCacheEntryStatus: function() {
                        return r
                    },
                    PrefetchKind: function() {
                        return n
                    },
                    isThenable: function() {
                        return p
                    }
                });
            let l = "refresh",
                f = "navigate",
                a = "restore",
                i = "server-patch",
                c = "prefetch",
                s = "fast-refresh",
                d = "server-action";

            function p(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }(o = n || (n = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", (u = r || (r = {})).fresh = "fresh", u.reusable = "reusable", u.expired = "expired", u.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        12394: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(14079), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        14470: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            let r = n(43219),
                o = n(52322),
                u = r._(n(2784)),
                l = n(40706),
                f = n(90345),
                a = n(8985),
                i = n(70286),
                c = n(95549),
                s = n(24698),
                d = n(47640),
                p = n(34407),
                y = n(12394),
                b = n(70558),
                h = n(19745),
                _ = new Set;

            function v(e, t, n, r, o, u) {
                if (u || (0, f.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (_.has(o)) return;
                        _.add(o)
                    }(async () => u ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let C = u.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: _,
                    children: C,
                    prefetch: O = null,
                    passHref: E,
                    replace: j,
                    shallow: P,
                    scroll: T,
                    locale: I,
                    onClick: M,
                    onMouseEnter: R,
                    onTouchStart: m,
                    legacyBehavior: k = !1,
                    ...A
                } = e;
                n = C, k && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let x = u.default.useContext(s.RouterContext),
                    L = u.default.useContext(d.AppRouterContext),
                    S = null != x ? x : L,
                    w = !x,
                    N = !1 !== O,
                    U = null === O ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: D,
                        as: K
                    } = u.default.useMemo(() => {
                        if (!x) {
                            let e = g(a);
                            return {
                                href: e,
                                as: _ ? g(_) : e
                            }
                        }
                        let [e, t] = (0, l.resolveHref)(x, a, !0);
                        return {
                            href: e,
                            as: _ ? (0, l.resolveHref)(x, _) : t || e
                        }
                    }, [x, a, _]),
                    F = u.default.useRef(D),
                    H = u.default.useRef(K);
                k && (r = u.default.Children.only(n));
                let V = k ? r && "object" == typeof r && r.ref : t,
                    [q, z, B] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    G = u.default.useCallback(e => {
                        (H.current !== K || F.current !== D) && (B(), H.current = K, F.current = D), q(e), V && ("function" == typeof V ? V(e) : "object" == typeof V && (V.current = e))
                    }, [K, V, D, B, q]);
                u.default.useEffect(() => {
                    S && z && N && v(S, D, K, {
                        locale: I
                    }, {
                        kind: U
                    }, w)
                }, [K, D, z, I, N, null == x ? void 0 : x.locale, S, w, U]);
                let Y = {
                    ref: G,
                    onClick(e) {
                        k || "function" != typeof M || M(e), k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, l, a, i, c) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? u.default.startTransition(d) : d()
                        }(e, S, D, K, j, P, T, I, w)
                    },
                    onMouseEnter(e) {
                        k || "function" != typeof R || R(e), k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (N || !w) && v(S, D, K, {
                            locale: I,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: U
                        }, w)
                    },
                    onTouchStart: function(e) {
                        k || "function" != typeof m || m(e), k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (N || !w) && v(S, D, K, {
                            locale: I,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: U
                        }, w)
                    }
                };
                if ((0, i.isAbsoluteUrl)(K)) Y.href = K;
                else if (!k || E || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== I ? I : null == x ? void 0 : x.locale,
                        t = (null == x ? void 0 : x.isLocaleDomain) && (0, y.getDomainLocale)(K, e, null == x ? void 0 : x.locales, null == x ? void 0 : x.domainLocales);
                    Y.href = t || (0, b.addBasePath)((0, c.addLocale)(K, e, null == x ? void 0 : x.defaultLocale))
                }
                return k ? u.default.cloneElement(r, Y) : (0, o.jsx)("a", { ...A,
                    ...Y,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        34407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(2784),
                o = n(41346),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !u, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (u) {
                        if (i || c) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: u
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), l.set(n, t), t
                            }(n);
                            return u.set(e, t), o.observe(e),
                                function() {
                                    if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                        o.disconnect(), l.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, d.current]), [p, c, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        39097: function(e, t, n) {
            e.exports = n(14470)
        }
    }
]);
//# sourceMappingURL=9097-f409b8864f8defd7.js.map