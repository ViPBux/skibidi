! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2f910330-dad5-4cff-8a0a-7fca11d00add", e._sentryDebugIdIdentifier = "sentry-dbid-2f910330-dad5-4cff-8a0a-7fca11d00add")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [549], {
        40210: function(e, t, r) {
            var n = r(52322),
                a = r(2784),
                i = r(71565),
                o = r(17301),
                l = r(5632),
                c = r.n(l),
                s = r(67319),
                d = r(43733);
            let {
                creatorHub: u
            } = r(66646), m = (0, i.Z)()(e => ({
                loading: {
                    width: "50%",
                    maxWidth: 250,
                    margin: "250px auto"
                },
                background: {
                    height: "100%",
                    width: "100%",
                    margin: "0"
                },
                content: {
                    maxWidth: 1500,
                    width: "100%",
                    margin: "auto",
                    padding: 32,
                    [e.breakpoints.down("XLarge")]: {
                        padding: 24
                    }
                }
            }));
            t.Z = e => {
                let {
                    children: t
                } = e, {
                    classes: {
                        loading: r,
                        content: i,
                        background: l
                    }
                } = m(), {
                    status: g,
                    login: h
                } = (0, s.je)();
                return ((0, a.useEffect)(() => {
                    "unauthenticated" === g && h(), "logged-out" === g && c().push(u.getUrl())
                }, [h, g]), "initial" === g || "loading" === g) ? (0, n.jsx)("div", {
                    className: l,
                    children: (0, n.jsx)("div", {
                        className: i,
                        children: (0, n.jsx)(o.Z, {
                            classes: {
                                root: r
                            },
                            title: "loading"
                        })
                    })
                }) : "error" === g ? (0, n.jsx)("div", {
                    className: l,
                    children: (0, n.jsx)("div", {
                        className: i,
                        children: (0, n.jsx)(d.AN, {
                            onReload: () => {
                                c().reload()
                            }
                        })
                    })
                }) : (0, n.jsx)(a.Fragment, {
                    children: t
                })
            }
        },
        28998: function(e, t, r) {
            var n = r(52322),
                a = r(2784),
                i = r(10881),
                o = r(50106),
                l = r(55041),
                c = r(55388);
            t.Z = e => {
                let {
                    onDebouncedChange: t,
                    debounceTime: r = 300,
                    value: s,
                    ...d
                } = e, [u, m] = (0, a.useState)(null), [g, h, f] = (0, o.Z)(t, r), p = (0, l.D9)(s);
                (0, a.useEffect)(() => {
                    p === s || s === u || f.current || m(null)
                }, [s, p, u, f]);
                let v = (0, a.useCallback)((e, r) => {
                        m(e), r || 0 === e.length ? (h(), t(e)) : g(e)
                    }, [h, g, t]),
                    b = (0, a.useCallback)(e => {
                        v(e.target.value, !1)
                    }, [v]),
                    x = (0, a.useCallback)(e => {
                        e.key === c.sr.Enter && v(e.target.value, !0)
                    }, [v]),
                    y = (0, a.useCallback)(e => {
                        v(e.target.value, !0)
                    }, [v]);
                return (0, n.jsx)(i.Z, { ...d,
                    value: u || s,
                    onChange: b,
                    onKeyDown: x,
                    onBlur: y
                })
            }
        },
        98740: function(e, t, r) {
            var n = r(52322),
                a = r(2784),
                i = r(71565),
                o = r(26321),
                l = r(12769),
                c = r(86658),
                s = r(22496),
                d = r(33308),
                u = r(57889),
                m = r(91424),
                g = r(66646),
                h = r(93909),
                f = r(84499);
            let {
                www: p
            } = g, v = (0, i.Z)()((e, t) => {
                let {
                    variant: r
                } = t;
                return {
                    container: {
                        minWidth: 0,
                        width: "fit-content"
                    },
                    avatarContainer: {
                        width: "compact" === r ? 32 : 48,
                        height: "compact" === r ? 32 : 48,
                        marginRight: "compact" === r ? 12 : 16
                    },
                    userBorderRadius: {
                        borderRadius: "compact" === r ? 32 : 48
                    },
                    groupBorderRadius: {
                        borderRadius: "compact" === r ? 4 : 6
                    },
                    thumbnailItemContainer: {
                        display: "flex",
                        alignItems: "center"
                    },
                    thumbnailBackground: {
                        background: e.palette.surface[200]
                    },
                    itemText: {
                        whiteSpace: "nowrap",
                        "& > *:not(:last-child)": {
                            paddingBottom: 4
                        }
                    },
                    mutedText: {
                        color: e.palette.content.muted
                    },
                    chipContainer: {
                        marginLeft: 8
                    },
                    disabledThumbnail: {
                        filter: "grayscale(100%)"
                    },
                    textContainer: {
                        display: "block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        "& > *:not(:first-child)": {
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    }
                }
            });
            t.Z = e => {
                let {
                    creator: t,
                    creatorType: r,
                    adornment: i,
                    label: g,
                    disabled: b,
                    variant: x = "medium",
                    disableLink: y = !1,
                    obfuscate: k = !1,
                    textVariant: j = "primary"
                } = e, {
                    classes: {
                        container: w,
                        avatarContainer: C,
                        thumbnailItemContainer: Z,
                        thumbnailBackground: O,
                        userBorderRadius: R,
                        groupBorderRadius: I,
                        itemText: N,
                        mutedText: U,
                        chipContainer: M,
                        disabledThumbnail: T,
                        textContainer: P
                    },
                    cx: D
                } = v({
                    variant: x
                }), {
                    translate: F
                } = (0, f.$G)(), L = (0, a.useMemo)(() => (0, n.jsxs)(o.Z, {
                    container: !0,
                    direction: "row",
                    alignItems: "center",
                    wrap: "wrap",
                    children: [r !== h.Z.User || t.displayName ? (0, n.jsxs)(o.Z, {
                        container: !0,
                        direction: "row",
                        alignItems: "center",
                        wrap: "wrap",
                        children: [(0, n.jsx)(c.Z, {
                            className: P,
                            variant: "secondary" === j ? "body1" : "compact" === x ? "captionHeader" : "h5",
                            color: b ? "disabled" : "inherit",
                            children: k ? F("Label.Other") : "".concat(r === h.Z.User ? t.displayName : t.name)
                        }), g && g.length > 0 && (0, n.jsx)(s.C, {
                            color: "secondary",
                            label: g,
                            size: "small",
                            variant: "filled",
                            className: M
                        })]
                    }) : (0, n.jsx)(l.S, {
                        animate: !0,
                        variant: "text",
                        width: 192,
                        height: 22
                    }), r === h.Z.User ? (0, n.jsx)(a.Fragment, {
                        children: t.name ? (0, n.jsx)(c.Z, {
                            variant: "secondary" === j ? "body2" : "captionBody",
                            className: D(P, {
                                [U]: "secondary" === j || "compact" === x
                            }),
                            color: b ? "disabled" : "inherit",
                            children: k ? F("Label.Other") : "@".concat(t.name)
                        }) : (0, n.jsx)(l.S, {
                            animate: !0,
                            variant: "text",
                            width: 192,
                            height: 20
                        })
                    }) : (0, n.jsx)(c.Z, {
                        variant: "captionBody",
                        className: D(P, {
                            [U]: "secondary" === j || "compact" === x
                        }),
                        color: b ? "disabled" : "inherit",
                        children: k ? F("Label.Other") : t.id
                    })]
                }), [M, t, r, D, b, g, U, k, P, F, x, j]);
                return (0, n.jsx)(o.Z, {
                    container: !0,
                    direction: "row",
                    alignItems: "center",
                    wrap: "nowrap",
                    justifyContent: "space-between",
                    className: w,
                    children: (null == t ? void 0 : t.id) === void 0 ? (0, n.jsx)(l.S, {
                        animate: !0,
                        variant: "rectangular",
                        width: "100%",
                        height: "compact" === x ? 32 : 48
                    }) : (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsxs)(o.Z, {
                            container: !0,
                            wrap: "nowrap",
                            children: [(0, n.jsx)(o.Z, {
                                item: !0,
                                className: Z,
                                children: (0, n.jsx)(d.Z, {
                                    variant: "rounded",
                                    alt: "avatar",
                                    className: D(C, {
                                        [R]: r === h.Z.User,
                                        [I]: r === h.Z.Group,
                                        [T]: b
                                    }),
                                    children: (0, n.jsx)(m.ef, {
                                        targetId: t.id,
                                        type: r === h.Z.User ? m.Ij.avatarHeadshot : m.Ij.groupIcon,
                                        imgClassName: O,
                                        alt: "thumbnail",
                                        returnPolicy: m.O7.PlaceHolder,
                                        includeBackground: !1
                                    })
                                })
                            }), (0, n.jsx)(o.Z, {
                                container: !0,
                                direction: "column",
                                className: w,
                                children: (0, n.jsx)(o.Z, {
                                    item: !0,
                                    children: y || k ? L : (0, n.jsx)(u.L, {
                                        href: r === h.Z.User ? p.getUserUrl(t.id) : p.getGroupUrl(t.id),
                                        className: N,
                                        color: "inherit",
                                        children: L
                                    })
                                })
                            })]
                        }), i]
                    })
                })
            }
        },
        98748: function(e, t, r) {
            var n = r(52322),
                a = r(2784),
                i = r(19615),
                o = r(26321),
                l = r(86357),
                c = r(84499),
                s = r(2012),
                d = r(48826),
                u = r(88502),
                m = r(70529),
                g = r(89481);
            t.Z = (0, c.Zh)(e => {
                let {
                    rolloutSetting: t,
                    ixpSetting: r,
                    children: c
                } = e, {
                    settings: s,
                    isFetched: h
                } = (0, d.rV)(), f = (0, m.ZP)(g.ky.CreatorSuccessOrganizations), [p, v] = (0, a.useState)();
                return (0, a.useEffect)(() => {
                    if (void 0 === t && void 0 === r) v(!0);
                    else if (h && f.isFetched) {
                        let e = void 0 !== r && !0 === f.params[r],
                            n = !0 === s[t];
                        v(e || n)
                    } else v(void 0)
                }, [s, f, h, t, r]), (0, n.jsxs)(a.Fragment, {
                    children: [void 0 === p && (0, n.jsx)(o.Z, {
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        container: !0,
                        children: (0, n.jsx)(l.C, {})
                    }), !1 === p && (0, n.jsx)(u.Z, {}), !0 === p && (0, n.jsx)(i.Z, {
                        children: c
                    })]
                })
            }, [s.Z.Organization])
        },
        48626: function(e, t, r) {
            var n, a;
            r.d(t, {
                U: function() {
                    return i
                },
                u: function() {
                    return n
                }
            }), (a = n || (n = {})).ClickOrgsInviteMember = "clickOrgsInviteMember", a.ClickOrgsUninviteMember = "clickOrgsUninviteMember", a.ClickOrgsRemoveMember = "clickOrgsRemoveMember", a.ClickOrgsAddRoleToMember = "clickOrgsAddRoleToMember", a.ClickOrgsRemoveRoleFromMember = "clickOrgsRemoveRoleFromMember", a.ClickOrgsCreateRole = "clickOrgsCreateRole", a.ClickOrgsDeleteRole = "clickOrgsDeleteRole", a.ClickOrgsUpdateRolePermissions = "clickOrgsUpdateRolePermissions", a.ClickOrgsUpdateRoleSettings = "clickOrgsUpdateRoleSettings", a.ClickOrgsAddMemberToRole = "clickOrgsAddMemberToRole", a.ClickOrgsRemoveMemberFromRole = "clickOrgsRemoveMemberFromRole", a.ClickOrgsUpdateGroupProfile = "clickOrgsUpdateGroupProfile", a.ClickOrgsConfirmOneTimePayout = "clickOrgsConfirmOneTimePayout", a.ClickOrgsConfirmRecurringPayout = "clickOrgsConfirmRecurringPayout";
            let i = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                e.logClickEvent({
                    eventName: t,
                    parameters: { ...r
                    }
                })
            }
        },
        34108: function(e, t, r) {
            r.d(t, {
                E$: function() {
                    return c
                },
                Ft: function() {
                    return h
                },
                UC: function() {
                    return u
                },
                VL: function() {
                    return m
                },
                ai: function() {
                    return d
                },
                k1: function() {
                    return f
                },
                mr: function() {
                    return l
                },
                pz: function() {
                    return s
                }
            });
            var n = r(23356),
                a = r(80460),
                i = r(80529),
                o = r(13551);
            let l = e => {
                    var t;
                    return void 0 !== e && null !== (t = o.uL.get(e)) && void 0 !== t ? t : e
                },
                c = e => {
                    var t, r;
                    if (!e.url || void 0 === e.type) return !0;
                    let n = l(e.type);
                    return null !== (r = null === (t = o.V9.get("".concat(n))) || void 0 === t ? void 0 : t.test(e.url)) && void 0 !== r && r
                },
                s = async e => {
                    if (0 === e.length) return [];
                    try {
                        var t;
                        let r = await n.Z.searchUsers(e);
                        return null !== (t = null == r ? void 0 : r.data) && void 0 !== t ? t : []
                    } catch (e) {
                        return []
                    }
                },
                d = async (e, t) => {
                    try {
                        var r;
                        let n = await a.Z.getUsersGroupRoles(t),
                            i = null === (r = n.data) || void 0 === r ? void 0 : r.filter(t => {
                                var r;
                                return (null === (r = t.group) || void 0 === r ? void 0 : r.id) === e
                            });
                        return (null == i ? void 0 : i.length) !== 0
                    } catch (e) {
                        return !1
                    }
                },
                u = async (e, t) => {
                    if (0 === t.length) return null;
                    try {
                        var r;
                        let n = await s(t),
                            a = n.length > 0 ? n[0] : void 0;
                        if ((null == a ? void 0 : a.id) && (null === (r = a.name) || void 0 === r ? void 0 : r.match(t))) return await d(e, a.id) ? a : null
                    } catch (e) {}
                    return null
                },
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fill",
                        r = o.IT.get(null != e ? e : i.jn.Invalid);
                    return {
                        [t]: "#".concat(r)
                    }
                },
                g = (e, t) => null === e.name || void 0 === e.name ? 1 : null === t.name || void 0 === t.name || e.name < t.name ? -1 : e.name > t.name ? 1 : 0,
                h = (e, t) => {
                    if (e.name === o.n9) return -1;
                    if (t.name === o.n9) return 1;
                    if (null === e.id || void 0 === e.id || null === t.id || void 0 === t.id) return g(e, t);
                    let r = parseInt(e.id, 10) - parseInt(t.id, 10);
                    return 0 === r ? g(e, t) : r
                },
                f = () => {
                    let e = Math.floor(Math.random() * o.CP.length),
                        t = o.CP[e];
                    return i.jn[t]
                }
        },
        88502: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return x
                }
            });
            var n = r(52322),
                a = r(2784),
                i = r(5632),
                o = r(55388),
                l = r(26321),
                c = r(86658),
                s = r(67357),
                d = r(84499),
                u = r(63819),
                m = r(66646),
                g = r(2012),
                h = r(92899),
                f = r(20725);
            let p = (0, r(71565).Z)()(() => ({
                    background: {
                        marginTop: 68,
                        marginBottom: 68
                    },
                    description: {
                        marginTop: 6
                    },
                    image: {
                        width: "100%",
                        height: "auto",
                        maxWidth: h.nA
                    },
                    button: {
                        marginTop: 24
                    }
                })),
                {
                    Flex: v
                } = u,
                {
                    creatorHub: {
                        creatorStore: b
                    }
                } = m;
            var x = (0, d.Zh)(() => {
                let {
                    translate: e,
                    translateHTML: t
                } = (0, d.$G)(), {
                    classes: {
                        description: r,
                        background: u,
                        image: m,
                        button: g
                    }
                } = p(), {
                    asPath: x
                } = (0, i.useRouter)(), {
                    headingKey: y,
                    descriptionKey: k
                } = f.r[o.WC.NOT_FOUND], [j, w] = (0, a.useMemo)(() => x.startsWith("/store") ? ["Label.CreatorStore", b.getUrl()] : x.startsWith("/talent") ? ["Label.TalentHub", "".concat("https://create.roblox.com", "/talent")] : x.startsWith("/docs") ? ["Label.Documentation", "".concat("https://create.roblox.com", "/docs")] : ["Label.CreatorHub", "/"], [x]);
                return (0, n.jsxs)(l.Z, {
                    container: !0,
                    classes: {
                        root: u
                    },
                    direction: "column",
                    alignItems: "center",
                    children: [(0, n.jsx)(l.Z, {
                        container: !0,
                        item: !0,
                        justifyContent: "center",
                        children: (0, n.jsx)("img", {
                            className: m,
                            src: h.ao,
                            alt: "Error Illustration"
                        })
                    }), (0, n.jsxs)(v, {
                        flexDirection: "column",
                        alignItems: "center",
                        children: [(0, n.jsx)(c.Z, {
                            variant: "h4",
                            align: "center",
                            children: t(k)
                        }), (0, n.jsx)(c.Z, {
                            classes: {
                                root: r
                            },
                            color: "secondary",
                            align: "center",
                            children: t(y)
                        }), (0, n.jsx)(s.Z, {
                            classes: {
                                root: g
                            },
                            color: "primary",
                            href: w,
                            variant: "contained",
                            children: e("Action.ReturnToProduct1", {
                                productLink: e(j)
                            })
                        })]
                    })]
                })
            }, [g.Z.Error])
        },
        92899: function(e, t, r) {
            r.d(t, {
                $G: function() {
                    return o
                },
                $K: function() {
                    return a
                },
                G_: function() {
                    return l
                },
                ao: function() {
                    return i
                },
                nA: function() {
                    return c
                }
            });
            let n = "".concat("/b1f689dc72e72a73e1474fb0a868248f10774289/assets", "/common"),
                a = "".concat(n, "/error.png"),
                i = "".concat(n, "/404.webp"),
                o = "".concat(n, "/maintenance_page.jpg"),
                l = "376",
                c = "750px"
        },
        20725: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return n
                }
            });
            let n = {
                400: {
                    headingKey: "Heading.BadRequest",
                    descriptionKey: "Description.BadRequest"
                },
                404: {
                    headingKey: "Heading.PageNotFound",
                    descriptionKey: "Description.PageNotFound"
                },
                403: {
                    headingKey: "Heading.AccessDenied",
                    descriptionKey: "Description.AccessDenied"
                }
            }
        },
        50106: function(e, t, r) {
            var n = r(2784);
            t.Z = (e, t) => {
                let r = (0, n.useRef)(null),
                    a = (0, n.useCallback)(() => {
                        null !== r.current && (clearTimeout(r.current), r.current = null)
                    }, [r]);
                return [(0, n.useCallback)(function() {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    a(), r.current = window.setTimeout(() => {
                        e(...i), r.current = null
                    }, t)
                }, [e, t, a]), a, r]
            }
        }
    }
]);
//# sourceMappingURL=549-cbd7441f38ef1bb0.js.map