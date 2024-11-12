! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fada1e17-ffa4-464c-95b6-589696097e30", e._sentryDebugIdIdentifier = "sentry-dbid-fada1e17-ffa4-464c-95b6-589696097e30")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7961], {
        4778: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(52322);
            n(2784);
            var l = n(71565),
                a = n(86658);
            let s = "".concat("/b1f689dc72e72a73e1474fb0a868248f10774289/assets", "/spot_illustrations");
            var o = {
                    small: {
                        analytics: "".concat(s, "/small/analytics.svg"),
                        animations: "".concat(s, "/small/animations.svg"),
                        audio: "".concat(s, "/small/audio.svg"),
                        avatarItem: "".concat(s, "/small/avatar_item.svg"),
                        beginSearch: "".concat(s, "/small/beginSearch.svg"),
                        creatorStore: "".concat(s, "/small/creator_store.svg"),
                        decals: "".concat(s, "/small/decals.svg"),
                        events: "".concat(s, "/small/events.svg"),
                        experiences: "".concat(s, "/small/experiences.svg"),
                        images: "".concat(s, "/small/images.svg"),
                        meshes: "".concat(s, "/small/meshes.svg"),
                        models: "".concat(s, "/small/models.svg"),
                        plugins: "".concat(s, "/small/plugins.svg"),
                        script: "".concat(s, "/small/script.svg"),
                        song: "".concat(s, "/small/song.svg"),
                        noUsers: "".concat(s, "/small/no_users.svg"),
                        user: "".concat(s, "/small/user.svg"),
                        users: "".concat(s, "/small/users.svg"),
                        videos: "".concat(s, "/small/videos.svg"),
                        chart: "".concat(s, "/small/chart.svg"),
                        search: "".concat(s, "/small/search.svg"),
                        oof: "".concat(s, "/small/oof.svg"),
                        download: "".concat(s, "/small/download.svg"),
                        tokens: "".concat(s, "/small/tokens.svg")
                    },
                    large: {
                        apiKeys: "".concat(s, "/large/api_keys.svg"),
                        localization: "".concat(s, "/large/localization.svg"),
                        noPermissions: "".concat(s, "/large/no_permissions.svg"),
                        oAuthApps: "".concat(s, "/large/oauth_apps.svg"),
                        rights: "".concat(s, "/large/rights.svg"),
                        homepageTour: "".concat(s, "/large/homepage_tour.svg"),
                        homepageTourLight: "".concat(s, "/large/homepage_tour_light.svg"),
                        secrets: "".concat(s, "/large/secrets.svg"),
                        shareLinks: "".concat(s, "/large/share_links.svg")
                    }
                },
                i = n(93704);
            let c = (0, l.Z)()(() => ({
                    smallContainer: {
                        margin: "48px 0",
                        padding: "0 24px",
                        width: "100%"
                    },
                    largeContainer: {
                        margin: "100px 0",
                        width: "100%"
                    },
                    smallText: {
                        gap: 6,
                        maxWidth: 510,
                        marginTop: 16,
                        marginBottom: 16
                    },
                    largeText: {
                        gap: 6,
                        maxWidth: 480,
                        marginTop: 24,
                        marginBottom: 24
                    }
                })),
                u = e => {
                    let {
                        children: t,
                        title: n,
                        description: l,
                        size: s,
                        illustration: u
                    } = e, {
                        classes: {
                            smallContainer: d,
                            largeContainer: g,
                            smallText: f,
                            largeText: v
                        },
                        cx: m
                    } = c(), p = u ? o[s][u] : null;
                    return (0, r.jsxs)(i.Z, {
                        classes: {
                            root: m({
                                [d]: "small" === s,
                                [g]: "large" === s
                            })
                        },
                        flexDirection: "column",
                        alignItems: "center",
                        children: [p && (0, r.jsx)("img", {
                            height: "large" === s ? 240 : 96,
                            width: "large" === s ? 320 : 96,
                            src: p,
                            alt: u
                        }), (0, r.jsxs)(i.Z, {
                            classes: {
                                root: m({
                                    [f]: "small" === s,
                                    [v]: "large" === s
                                })
                            },
                            flexDirection: "column",
                            alignItems: "center",
                            children: [(0, r.jsx)(a.Z, {
                                textAlign: "center",
                                variant: "h4",
                                color: "primary",
                                children: n
                            }), l && (0, r.jsx)(a.Z, {
                                textAlign: "center",
                                color: "secondary",
                                children: l
                            })]
                        }), t]
                    })
                };
            u.displayName = "EmptyState";
            var d = u
        },
        93704: function(e, t, n) {
            "use strict";
            var r = n(52322),
                l = n(2784),
                a = n(71565),
                s = n(41712);
            let o = (0, a.Z)()((e, t) => {
                    let {
                        gap: n
                    } = t;
                    return {
                        gap: {
                            gap: n
                        },
                        flex: {
                            display: "flex"
                        },
                        justifyContentCenter: {
                            justifyContent: "center"
                        },
                        justifyContentFlexStart: {
                            justifyContent: "flex-start"
                        },
                        justifyContentFlexEnd: {
                            justifyContent: "flex-end"
                        },
                        justifyContentSpaceBetween: {
                            justifyContent: "space-between"
                        },
                        justifyContentSpaceAround: {
                            justifyContent: "space-around"
                        },
                        justifyContentSpaceEvenly: {
                            justifyContent: "space-evenly"
                        },
                        alignItemsCenter: {
                            alignItems: "center"
                        },
                        alignItemsFlexStart: {
                            alignItems: "flex-start"
                        },
                        alignItemsFlexEnd: {
                            alignItems: "flex-end"
                        },
                        flexDirectionRow: {
                            flexDirection: "row"
                        },
                        flexDirectionRowReverse: {
                            flexDirection: "row-reverse"
                        },
                        flexDirectionColumn: {
                            flexDirection: "column"
                        },
                        flexDirectionColumnReverse: {
                            flexDirection: "column-reverse"
                        },
                        flexWrapWrap: {
                            flexWrap: "wrap"
                        },
                        flexWrapWrapReverse: {
                            flexWrap: "wrap-reverse"
                        },
                        flexWrapNoWrap: {
                            flexWrap: "nowrap"
                        }
                    }
                }),
                i = (0, l.forwardRef)((e, t) => {
                    let {
                        classes: n,
                        flexDirection: l,
                        flexWrap: a,
                        justifyContent: i,
                        alignItems: c,
                        gap: u = 0,
                        children: d
                    } = e, {
                        classes: {
                            flex: g,
                            ...f
                        },
                        cx: v
                    } = o({
                        gap: u
                    });
                    return (0, r.jsx)("div", {
                        ref: t,
                        className: v(g, f.gap, null == n ? void 0 : n.root, f["flexDirection".concat((0, s.lc)(null != l ? l : ""))], f["flexWrap".concat((0, s.lc)(null != a ? a : ""))], f["alignItems".concat((0, s.lc)(null != c ? c : ""))], f["justifyContent".concat((0, s.lc)(null != i ? i : ""))]),
                        children: d
                    })
                });
            i.displayName = "Flex", t.Z = i
        },
        63819: function(e, t, n) {
            "use strict";
            n.d(t, {
                Body: function() {
                    return u
                },
                Carousel: function() {
                    return b
                },
                EmptyState: function() {
                    return I.Z
                },
                Flex: function() {
                    return r.Z
                },
                Header: function() {
                    return i
                },
                LoadingCarousel: function() {
                    return C
                },
                SubHeader: function() {
                    return c
                }
            });
            var r = n(93704),
                l = n(52322),
                a = n(2784),
                s = n(99414),
                o = n(86658),
                i = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = (0, s.Z)(e => e.breakpoints.down("Large"));
                    return (0, l.jsx)(o.Z, { ...n,
                        variant: r ? "h3" : "h1",
                        children: t
                    })
                },
                c = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = (0, s.Z)(e => e.breakpoints.down("Large"));
                    return (0, l.jsx)(o.Z, { ...n,
                        variant: r ? "h5" : "h3",
                        children: t
                    })
                },
                u = e => {
                    let {
                        bold: t,
                        children: n,
                        ...r
                    } = e, a = (0, s.Z)(e => e.breakpoints.down("Large"));
                    return !0 === t ? (0, l.jsx)(o.Z, { ...r,
                        variant: a ? "captionHeader" : "largeLabel1",
                        children: n
                    }) : (0, l.jsx)(o.Z, { ...r,
                        variant: a ? "body2" : "body1",
                        children: n
                    })
                },
                d = n(71565),
                g = n(90472),
                f = n(35358),
                v = n(64037),
                m = n(55388),
                p = n(41712);
            let {
                getCurrentPlatform: h
            } = m.device, x = (0, d.Z)()((e, t) => {
                let {
                    isStartOfCarousel: n
                } = t;
                return {
                    wrapper: {
                        position: "relative"
                    },
                    carousel: {
                        overflowX: "scroll",
                        display: "flex",
                        flexDirection: "row",
                        gap: 16,
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        "-ms-overflow-style": "none",
                        scrollbarWidth: "none",
                        "& > *": {
                            flexShrink: 0,
                            flexGrow: 0
                        }
                    },
                    bumper: {
                        display: "flex",
                        alignItems: "center",
                        zIndex: e.zIndex.speedDial,
                        position: "absolute",
                        height: "100%"
                    },
                    leftBumper: {
                        top: 0,
                        left: -24,
                        pointerEvents: n ? "none" : "auto"
                    },
                    rightBumper: {
                        top: 0,
                        right: -24,
                        pointerEvents: "none"
                    },
                    hidden: {
                        opacity: 0,
                        pointerEvents: "none",
                        cursor: "default"
                    },
                    bumperWrapper: {
                        display: "flex",
                        height: "50%",
                        justifyContent: "center",
                        pointerEvents: "auto"
                    },
                    hiddenBumper: {
                        pointerEvents: "none"
                    },
                    iconButton: {
                        opacity: 1,
                        alignSelf: "center"
                    }
                }
            });

            function y(e, t) {
                let {
                    clientWidth: n,
                    scrollLeft: r,
                    children: l
                } = e;
                return function(e, t) {
                    let {
                        clientWidth: n,
                        scrollLeft: r,
                        childrenData: l
                    } = e, a = {
                        clientWidth: n,
                        scrollLeft: r,
                        scrollRight: r + n,
                        childrenData: l
                    };
                    return "prev" === t ? function(e) {
                        let {
                            clientWidth: t,
                            scrollLeft: n,
                            scrollRight: r,
                            childrenData: l
                        } = e, a = l.findIndex(e => {
                            let {
                                offsetLeft: t,
                                offsetWidth: r
                            } = e;
                            return t <= n && t + r >= n
                        });
                        if (a < 0 || a === l.length - 1) return -t;
                        let {
                            offsetLeft: s
                        } = l[a + 1];
                        return -(r - s)
                    }(a) || -n : function(e) {
                        let {
                            clientWidth: t,
                            scrollLeft: n,
                            scrollRight: r,
                            childrenData: l
                        } = e, a = l.findIndex(e => {
                            let {
                                offsetLeft: t,
                                offsetWidth: n
                            } = e;
                            return t <= r && t + n >= r
                        });
                        if (a <= 0) return t;
                        let {
                            offsetLeft: s,
                            offsetWidth: o
                        } = l[a - 1];
                        return s + o - n
                    }(a) || n
                }({
                    clientWidth: n,
                    scrollLeft: r,
                    childrenData: Array.from(l).map(e => {
                        let {
                            offsetLeft: t,
                            offsetWidth: n
                        } = e;
                        return {
                            offsetLeft: t,
                            offsetWidth: n
                        }
                    })
                }, t)
            }
            var b = e => {
                var t, n, r, s;
                let {
                    children: o,
                    onClickNext: i,
                    onClickPrevious: c
                } = e, u = h(), d = (0, a.useRef)(null), [b, w] = (0, a.useState)(!1), [j, C] = (0, a.useState)(window.innerWidth), [I, _] = (0, a.useState)(null !== (r = null === (t = d.current) || void 0 === t ? void 0 : t.scrollLeft) && void 0 !== r ? r : 0), [S, D] = (0, a.useState)(null !== (s = null === (n = d.current) || void 0 === n ? void 0 : n.scrollWidth) && void 0 !== s ? s : 0), N = (0, a.useMemo)(() => 0 === I, [I]), L = (0, a.useMemo)(() => I + j >= S, [I, S, j]), W = (0, a.useMemo)(() => u === m.t4.iOS || u === m.t4.Android, [u]), {
                    classes: {
                        wrapper: Z,
                        carousel: k,
                        bumper: E,
                        leftBumper: A,
                        rightBumper: T,
                        hidden: B,
                        bumperWrapper: R,
                        iconButton: F,
                        hiddenBumper: M
                    },
                    cx: z
                } = x({
                    isStartOfCarousel: N
                }), [G] = (0, p.Ds)(e => {
                    C(e[0].target.clientWidth)
                });
                return (0, a.useEffect)(() => {
                    let e = null == d ? void 0 : d.current;

                    function t() {
                        var t, n;
                        _(null !== (t = null == e ? void 0 : e.scrollLeft) && void 0 !== t ? t : 0), D(null !== (n = null == e ? void 0 : e.scrollWidth) && void 0 !== n ? n : 0)
                    }
                    return e && (t(), e.addEventListener("scroll", t)), () => {
                        e && e.removeEventListener("scroll", t)
                    }
                }, []), (0, a.useEffect)(() => {
                    let e = new ResizeObserver(G),
                        t = null == d ? void 0 : d.current;
                    return t && e.observe(t), () => {
                        t && e.unobserve(t)
                    }
                }, [G]), (0, l.jsxs)("div", {
                    className: Z,
                    onMouseEnter: () => {
                        w(!0)
                    },
                    onMouseLeave: () => {
                        w(!1)
                    },
                    children: [(0, l.jsx)("div", {
                        ref: d,
                        className: k,
                        children: o
                    }), !W && (0, l.jsx)("div", {
                        className: z(E, A, {
                            [B]: N
                        }),
                        children: (0, l.jsx)("div", {
                            className: z(R, {
                                [M]: N
                            }),
                            children: (0, l.jsx)(g.Z, {
                                classes: {
                                    root: z(F, {
                                        [B]: !1 === b
                                    })
                                },
                                onClick: e => {
                                    var t;
                                    c && c(e), null === (t = d.current) || void 0 === t || t.scrollBy({
                                        left: y(d.current, "prev"),
                                        behavior: "smooth"
                                    })
                                },
                                color: "onMediaLight",
                                variant: "contained",
                                "aria-label": "previous",
                                size: "medium",
                                children: (0, l.jsx)(f.W3K, {})
                            })
                        })
                    }), !W && (0, l.jsx)("div", {
                        className: z(E, T, {
                            [B]: L
                        }),
                        children: (0, l.jsx)("div", {
                            className: z(R, {
                                [M]: L
                            }),
                            children: (0, l.jsx)(g.Z, {
                                disabled: !0 === L,
                                classes: {
                                    root: z(F, {
                                        [B]: !1 === b
                                    })
                                },
                                onClick: e => {
                                    var t;
                                    i && i(e), null === (t = d.current) || void 0 === t || t.scrollBy({
                                        left: y(d.current, "next"),
                                        behavior: "smooth"
                                    })
                                },
                                color: "onMediaLight",
                                variant: "contained",
                                "aria-label": "next",
                                size: "medium",
                                children: (0, l.jsx)(v.N, {})
                            })
                        })
                    })]
                })
            };
            let {
                getCurrentPlatform: w
            } = m.device, j = (0, d.Z)()(e => ({
                wrapper: {
                    position: "relative"
                },
                carousel: {
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    "& > *": {
                        flexShrink: 0,
                        flexGrow: 0
                    }
                },
                rightBumper: {
                    zIndex: e.zIndex.speedDial,
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    right: -1,
                    backgroundImage: "linear-gradient(to left, ".concat((0, p.Fq)(e.palette.surface[0], 255), ", ").concat((0, p.Fq)(e.palette.surface[0], 0), ")")
                },
                bumperWrapper: {
                    display: "flex",
                    width: 100,
                    height: "100%",
                    justifyContent: "center"
                }
            }));
            var C = e => {
                    let {
                        children: t
                    } = e, {
                        classes: {
                            wrapper: n,
                            carousel: r,
                            rightBumper: s,
                            bumperWrapper: o
                        }
                    } = j(), i = w(), c = (0, a.useMemo)(() => i === m.t4.iOS || i === m.t4.Android, [i]);
                    return (0, l.jsxs)("div", {
                        className: n,
                        children: [(0, l.jsx)("div", {
                            className: r,
                            children: t
                        }), !c && (0, l.jsx)("div", {
                            className: s,
                            children: (0, l.jsx)("div", {
                                className: o
                            })
                        })]
                    })
                },
                I = n(4778)
        },
        41712: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ds: function() {
                    return u
                },
                Fq: function() {
                    return f
                },
                P2: function() {
                    return d
                },
                RB: function() {
                    return c
                },
                Se: function() {
                    return m
                },
                TV: function() {
                    return g
                },
                fm: function() {
                    return h
                },
                lc: function() {
                    return p
                },
                uf: function() {
                    return v
                }
            });
            var r, l, a = n(55388),
                s = n(1313),
                o = n.n(s),
                i = void 0;
            let c = e => 864e5 * e,
                u = function(e) {
                    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
                    return [function() {
                        for (var r = arguments.length, l = Array(r), a = 0; a < r; a++) l[a] = arguments[a];
                        clearTimeout(t), t = setTimeout(() => {
                            e.apply(i, l)
                        }, n)
                    }, () => {
                        clearTimeout(t)
                    }]
                };
            (r = l || (l = {})).LEADING = "leading", r.TRAILING = "trailing", r.LEADING_AND_TRAILING = "leading_and_trailing";
            let d = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "leading_and_trailing",
                        r = null,
                        l = null,
                        a = null,
                        s = () => !!l && (e.call(a, ...l), l = null, a = null, !0),
                        o = () => {
                            r = null, ("trailing" === n || "leading_and_trailing" === n) && s() && (r = setTimeout(o, t))
                        };
                    return [function() {
                        for (var e = arguments.length, i = Array(e), c = 0; c < e; c++) i[c] = arguments[c];
                        l = i, a = this, r || (("leading" === n || "leading_and_trailing" === n) && s(), r = setTimeout(o, t))
                    }, () => {
                        r && (clearTimeout(r), r = null)
                    }]
                },
                g = (e, t) => {
                    let n = o()(t),
                        r = [...e],
                        l = e.length;
                    for (; l;) {
                        let e = Math.floor(n() * l),
                            t = r[l -= 1];
                        r[l] = r[e], r[e] = t
                    }
                    return r
                },
                f = (e, t) => t < 16 ? "".concat(e, "0").concat(t.toString(16)) : "".concat(e).concat(t.toString(16)),
                v = e => e < 1 ? e.toFixed(1) : e < 1e3 ? Math.round(e).toString() : (0, a.YX)(e).toString(),
                m = (e, t) => {
                    let n = [];
                    for (let r = 0; r < e.length; r += t) {
                        let l = e.slice(r, r + t);
                        n.push(l)
                    }
                    return n
                },
                p = e => e.split("-").reduce((e, t) => {
                    var n;
                    return e + (null !== (n = t[0]) && void 0 !== n ? n : "").toUpperCase() + t.slice(1)
                }, ""),
                h = (e, t) => 0 === t.length ? t : t.charAt(0).toLocaleUpperCase(e || "en-US") + t.slice(1).toLocaleLowerCase(e || "en-US")
        },
        80660: function() {}
    }
]);
//# sourceMappingURL=7961-02dd58b84158fb5c.js.map