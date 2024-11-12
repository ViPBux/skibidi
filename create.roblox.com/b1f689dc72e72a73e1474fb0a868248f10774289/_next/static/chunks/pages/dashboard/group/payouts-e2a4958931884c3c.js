! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "439e4797-3516-463b-80ba-ef77da3bac9e", e._sentryDebugIdIdentifier = "sentry-dbid-439e4797-3516-463b-80ba-ef77da3bac9e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3349], {
        85908: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(18645),
                a = r(2784),
                i = r(42156);
            r(52322);
            var l = function(e) {
                var t = e.ref,
                    r = (0, n.a)(e, ["ref"]);
                return a.createElement(i.M, (0, n._)({}, r, {
                    ref: t,
                    viewBox: "0 0 28 28"
                }), a.createElement("path", {
                    d: "M23.402,5.573C25.009,6.501 26,8.217 26,10.073L26,17.929C26,19.786 25.009,21.501 23.402,22.429L16.597,26.358C14.99,27.286 13.009,27.286 11.402,26.358L4.597,22.429C2.99,21.501 2,19.786 2,17.929L2,10.073C2,8.217 2.99,6.501 4.597,5.573L11.402,1.645C13.009,0.717 14.99,0.717 16.597,1.645L23.402,5.573ZM12.313,3.428L5.686,7.254C4.642,7.857 4,8.97 4,10.176L4,17.827C4,19.032 4.642,20.146 5.686,20.749L12.313,24.574C13.357,25.177 14.642,25.177 15.686,24.574L22.313,20.749C23.357,20.146 24,19.032 24,17.827L24,10.176C24,8.97 23.357,7.857 22.313,7.254L15.686,3.428C14.642,2.825 13.357,2.825 12.313,3.428ZM15.385,5.566L20.614,8.584C21.471,9.079 22,9.994 22,10.985L22,17.022C22,18.012 21.471,18.927 20.614,19.422L15.385,22.441C14.528,22.936 13.471,22.936 12.614,22.441L7.385,19.422C6.528,18.927 6,18.012 6,17.022L6,10.985C6,9.994 6.528,9.079 7.385,8.584L12.614,5.566C13.471,5.071 14.528,5.071 15.385,5.566ZM11,17.003L17,17.003L17,11.003L11,11.003L11,17.003Z"
                }))
            }
        },
        64402: function(e, t, r) {
            var n;
            "undefined" != typeof self && self, n = function(e) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var a = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 0)
                }([function(e, t, r) {
                    "use strict";

                    function n() {
                        return (n = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function i(e) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), r.d(t, "HighchartsReact", function() {
                        return c
                    });
                    var l = r(1),
                        o = r.n(l),
                        s = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                        c = Object(l.memo)(Object(l.forwardRef)(function(e, t) {
                            var r = Object(l.useRef)(),
                                c = Object(l.useRef)(),
                                d = Object(l.useRef)(e.constructorType),
                                u = Object(l.useRef)(e.highcharts);
                            return s(function() {
                                function t() {
                                    var t = e.highcharts || "object" === ("undefined" == typeof window ? "undefined" : i(window)) && window.Highcharts,
                                        n = e.constructorType || "chart";
                                    t ? t[n] ? e.options ? c.current = t[n](r.current, e.options, e.callback) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                                }
                                if (c.current) {
                                    if (!1 !== e.allowChartUpdate) {
                                        if (e.constructorType !== d.current || e.highcharts !== u.current) d.current = e.constructorType, u.current = e.highcharts, t();
                                        else if (!e.immutable && c.current) {
                                            var n, l;
                                            (n = c.current).update.apply(n, [e.options].concat(function(e) {
                                                if (Array.isArray(e)) return a(e)
                                            }(l = e.updateArgs || [!0, !0]) || function(e) {
                                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                            }(l) || function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return a(e, void 0);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, void 0) : void 0
                                                }
                                            }(l) || function() {
                                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }()))
                                        } else t()
                                    }
                                } else t()
                            }, [e.options, e.allowChartUpdate, e.updateArgs, e.containerProps, e.highcharts, e.constructorType]), s(function() {
                                return function() {
                                    c.current && (c.current.destroy(), c.current = null)
                                }
                            }, []), Object(l.useImperativeHandle)(t, function() {
                                return {
                                    get chart() {
                                        return c.current
                                    },
                                    container: r
                                }
                            }, []), o.a.createElement("div", n({}, e.containerProps, {
                                ref: r
                            }))
                        }));
                    t.default = c
                }, function(t, r) {
                    t.exports = e
                }])
            }, e.exports = n(r(2784))
        },
        99627: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/dashboard/group/payouts", function() {
                return r(69653)
            }])
        },
        92258: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {})).MinTime = "minTime", n.MaxTime = "maxTime", n.RangeType = "rangeType", n.ShowAlerts = "showAlerts", n.Granularity = "granularity", n.SingleDateType = "singleDateType", n.SingleDateTime = "singleDateTime", n.OverrideOwnerType = "override_ownerType", n.OverrideOwnerId = "override_ownerId", n.Tab = "tab", n.Annotation = "annotation", n.FilterAnnotation = "filter_Annotation", n.Metric = "metric", n.Preset = "preset", n.Referrer = "aref", n.LegacyBreakdownType = "breakdownType", n.Breakdown = "breakdown", n.FilterPlace = "filter_Place", n.OperatingSystem = "filter_OperatingSystem", n.MemoryGroup = "filter_MemoryGroup", t.Z = r
        },
        29139: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                },
                a: function() {
                    return d
                }
            });
            var n = r(52322),
                a = r(2784),
                i = r(91204),
                l = r(84499),
                o = r(2012);
            let s = (0, r(71565).Z)()(() => ({
                footerBottomBorder: {
                    borderBottom: "none"
                }
            }));
            var c = r(69710);
            let d = -1;
            var u = (0, l.Zh)(e => {
                let {
                    page: t,
                    total: r,
                    pageSize: u,
                    pageSizeOptions: p,
                    setPageSize: h,
                    onNextPage: g,
                    onPreviousPage: m,
                    hasNext: f,
                    hasPrevious: v
                } = e, x = (0, c.hO)((0, l.$G)()), {
                    classes: {
                        footerBottomBorder: y
                    }
                } = s(), b = (0, a.useCallback)((e, r) => {
                    r > t ? g() : r < t && m()
                }, [t, g, m]), j = (0, a.useCallback)(e => {
                    let t = Number(e.target.value);
                    p.includes(t) && h(t)
                }, [p, h]), Z = (0, a.useCallback)(e => {
                    let {
                        from: t,
                        to: r,
                        count: n
                    } = e;
                    return n === d ? "".concat(t, "-").concat(r) : x((0, c.Bv)("Label.PageRange", o.Z.Table), {
                        pageRange: "".concat(t, "-").concat(r),
                        totalPageCount: "".concat(n)
                    })
                }, [x]);
                return (0, a.useMemo)(() => (0, n.jsx)(i.e, {
                    className: y,
                    "data-testid": "tablePagination",
                    count: r,
                    page: t,
                    rowsPerPage: u,
                    onPageChange: b,
                    rowsPerPageOptions: p,
                    onRowsPerPageChange: j,
                    labelRowsPerPage: x((0, c.Bv)("Label.RowsPerPage", o.Z.Table)),
                    nextIconButtonProps: {
                        disabled: !f
                    },
                    backIconButtonProps: {
                        disabled: !v
                    },
                    labelDisplayedRows: Z
                }), [y, r, t, u, b, p, j, x, f, v, Z])
            }, [o.Z.Table])
        },
        64076: function(e, t, r) {
            "use strict";
            var n = r(86239);
            t.Z = e => {
                -1 !== window.location.hostname.indexOf("localhost") ? console.error(e) : (0, n.uT)("[Analytics] ".concat(e))
            }
        },
        55167: function(e, t, r) {
            "use strict";
            var n = r(41057),
                a = r(77592),
                i = r(47810),
                l = r(33484),
                o = r(34395),
                s = r(65887),
                c = r(80689);
            class d {
                async addPlaceToUniverse(e, t) {
                    try {
                        await this.placesApi.placesAddPlaceToUniverse(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async removePlaceFromUniverse(e, t) {
                    try {
                        await this.placesApi.placesRemovePlaceFromUniverse(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async getOwnedPlacesByContext(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        return this.placesApi.placesGetOwnedPlacesByCreationContext(t, e)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async getOwnedPlacesByContextV2(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        return this.placesApi.placesGetOwnedPlacesByCreationContext(t, e)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async getJoinRestrictions(e, t) {
                    try {
                        return this.placesApi.placesGetJoinRestrictions(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async updateJoinRestrictions(e, t) {
                    try {
                        await this.placesApi.placesUpdateJoinRestrictions(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async searchUniverses(e) {
                    return this.searchApi.searchSearchUniverses(e)
                }
                async migrateUniverse(e, t) {
                    try {
                        await this.placesApi.placesMigrateUniverse(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async getUniverseContainingPlace(e) {
                    try {
                        return this.placesApi.placesGetUniverseContainingPlace({
                            placeId: e
                        })
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async getPlaceJoinRestrictions(e, t) {
                    try {
                        return this.placesApi.placesGetPlaceJoinRestrictions(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async updatePlaceJoinRestrictions(e, t) {
                    try {
                        await this.placesApi.placesUpdatePlaceJoinRestrictions(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                async clearJoinRestrictionsOverrides(e, t) {
                    try {
                        await this.placesApi.placesClearJoinRestrictionsOverrides(e, t)
                    } catch (t) {
                        let e = await (0, c.Z)(t);
                        if (e) throw new o.Z(e.code, e.message);
                        throw t
                    }
                }
                constructor(e = (0, s.N)("universes")) {
                    let t = new n.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: a.Z
                    });
                    this.placesApi = new i._(t), this.searchApi = new l.W(t)
                }
            }
            let u = new d;
            t.Z = u
        },
        77969: function(e, t, r) {
            "use strict";
            r.d(t, {
                P: function() {
                    return c
                }
            });
            var n = r(52322),
                a = r(2784),
                i = r(55946),
                l = r(11160),
                o = r(92258);
            let s = (0, a.createContext)({});
            s.displayName = "OwnerOverrideContext";
            let c = () => (0, a.useContext)(s);
            t.Z = e => {
                let {
                    children: t
                } = e, [{
                    [o.Z.OverrideOwnerType]: r,
                    [o.Z.OverrideOwnerId]: c
                }] = (0, l.Z)([o.Z.OverrideOwnerType, o.Z.OverrideOwnerId]), d = (0, a.useMemo)(() => {
                    if (!r) return;
                    let e = Array.isArray(r) ? r[0] : r;
                    return i.jc[e]
                }, [r]), u = (0, a.useMemo)(() => {
                    if (!c) return;
                    let e = Number(Array.isArray(c) ? c[0] : c);
                    if (!Number.isNaN(e)) return e
                }, [c]), p = (0, a.useMemo)(() => ({
                    ownerType: d,
                    ownerId: u
                }), [d, u]);
                return (0, n.jsx)(s.Provider, {
                    value: p,
                    children: t
                })
            }
        },
        55977: function(e, t, r) {
            "use strict";
            var n = r(67319),
                a = r(55946),
                i = r(24428),
                l = r(2784),
                o = r(77969);
            t.Z = () => {
                let e = (0, o.P)(),
                    {
                        user: t,
                        isFetched: r
                    } = (0, n.je)(),
                    s = (0, i.Z)(),
                    c = null != s,
                    d = c ? a.jc.Group : a.jc.User,
                    u = c ? s.id : null == t ? void 0 : t.id,
                    p = c ? s.name : null == t ? void 0 : t.name;
                return (0, l.useMemo)(() => {
                    var t, n, i, l;
                    return !0 !== r || void 0 === s ? {
                        isFetched: !1
                    } : {
                        isFetched: !0,
                        ownerType: null !== (n = null !== (t = null == e ? void 0 : e.ownerType) && void 0 !== t ? t : d) && void 0 !== n ? n : a.jc.User,
                        ownerId: null !== (l = null !== (i = null == e ? void 0 : e.ownerId) && void 0 !== i ? i : u) && void 0 !== l ? l : 0,
                        ownerName: null != p ? p : ""
                    }
                }, [s, r, null == e ? void 0 : e.ownerId, null == e ? void 0 : e.ownerType, u, p, d])
            }
        },
        5094: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n, a, i = r(64076);
            class l extends Error {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, l.prototype)
                }
            }
            var o = r(79166),
                s = r(74239),
                c = r(2784),
                d = r(86197);
            (n = a || (a = {})).NewRequestMade = "NewRequestMade", n.ComponentUnmounted = "ComponentUnmounted";
            var u = (e, t) => {
                let [r, n] = (0, c.useState)(!0), [a, u] = (0, c.useState)(!1), [p, h] = (0, c.useState)(!1), [g, m] = (0, c.useState)(!1), [f, v] = (0, c.useState)(null), x = (0, c.useRef)(new AbortController), {
                    refetchShouldSetLoading: y = !1,
                    invalidateCache: b
                } = null != t ? t : {}, j = (0, c.useCallback)(async () => {
                    x.current.abort("NewRequestMade");
                    let t = new AbortController;
                    x.current = t;
                    try {
                        y && n(!0);
                        let r = await e();
                        if (t.signal.aborted) return;
                        v(r), u(!1), h(!1), m(!1), n(!1)
                    } catch (a) {
                        if (t.signal.aborted || (0, d.ki)(a)) return;
                        u(!0), n(!1);
                        let e = (0, o.Z)(a);
                        if (e) {
                            var r;
                            h((null !== (r = null == e ? void 0 : e.status) && void 0 !== r ? r : 500) === s.Z.FORBIDDEN)
                        } else a instanceof l ? m(!0) : (0, i.Z)("".concat(a))
                    }
                }, [e, y]);
                return (0, c.useEffect)(() => {
                    j()
                }, [j]), (0, c.useEffect)(() => () => {
                    let e = x.current;
                    e.signal.aborted || e.abort("ComponentUnmounted")
                }, []), {
                    isDataLoading: r,
                    isResponseFailed: a,
                    isUserForbidden: p,
                    isNoDataAvailable: g,
                    data: f,
                    refresh: (0, c.useCallback)(() => {
                        b && b(), j()
                    }, [j, b])
                }
            }
        },
        69938: function(e, t, r) {
            "use strict";
            var n = r(55946),
                a = r(55167),
                i = r(68819),
                l = r(21820),
                o = r(65942),
                s = r(2784),
                c = r(5094);
            let d = {
                [n.jc.Group]: i.vb.Group,
                [n.jc.User]: i.vb.User
            };
            t.Z = e => {
                var t;
                let {
                    owner: r,
                    pageSizeOptions: n,
                    defaultPageSize: i
                } = e, [u, p] = (0, s.useState)(0), [h, g] = (0, s.useState)(i), m = (0, s.useCallback)(e => {
                    p(Math.floor(u * h / e)), g(e)
                }, [u, h]), f = (0, s.useMemo)(() => r.isFetched ? {
                    search: void 0,
                    creatorType: d[r.ownerType],
                    creatorTargetId: r.ownerId,
                    isArchived: !1,
                    isPublic: void 0,
                    sortOrder: l.As.Desc,
                    sortParam: o.AY.LastUpdated,
                    pageSize: h,
                    pageIndex: u
                } : void 0, [r, u, h]), v = (0, s.useCallback)(async () => f ? a.Z.searchUniverses(f) : null, [f]), {
                    data: x,
                    isDataLoading: y,
                    isResponseFailed: b,
                    isUserForbidden: j
                } = (0, c.Z)(v), Z = (0, s.useMemo)(() => !!(null == x ? void 0 : x.nextResultIndex), [x]), w = (0, s.useMemo)(() => u > 0, [u]);
                return {
                    data: x,
                    isDataLoading: y,
                    isResponseFailed: b,
                    isUserForbidden: j,
                    pagination: {
                        page: u,
                        pageSize: h,
                        total: null !== (t = null == x ? void 0 : x.totalResults) && void 0 !== t ? t : 0,
                        pageSizeOptions: n,
                        setPageSize: m,
                        onNextPage: () => p(e => e + 1),
                        onPreviousPage: () => p(e => e - 1),
                        hasNext: Z,
                        hasPrevious: w
                    }
                }
            }
        },
        86197: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, {
                HR: function() {
                    return a
                },
                R8: function() {
                    return i
                },
                ki: function() {
                    return l
                }
            }), (n || (n = {})).ResourceLoading = "Resource not loaded yet";
            let a = (e, t) => {
                    if (e.isLoading) throw Error("Resource not loaded yet in ".concat(t))
                },
                i = e => !!e.isLoading,
                l = e => "".concat(e).includes("Resource not loaded yet")
        },
        9104: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {})).OnChange = "onChange", n.OnBlur = "onBlur", n.OnSubmit = "onSubmit", n.OnTouched = "onTouched", n.All = "all", t.Z = r
        },
        74239: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {}))[n.BAD_REQUEST = 400] = "BAD_REQUEST", n[n.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", n[n.DUPLICATE_ENTRY = 409] = "DUPLICATE_ENTRY", n[n.FORBIDDEN = 403] = "FORBIDDEN", n[n.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", n[n.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", t.Z = r
        },
        20896: function(e, t, r) {
            "use strict";
            var n = r(71565);
            let a = {
                    width: "100%",
                    height: "100%"
                },
                i = "376px",
                l = "240px",
                o = (0, n.Z)()(e => ({
                    root: { ...a
                    },
                    background: {
                        maxWidth: 1024
                    },
                    guestErrorArea: {
                        padding: e.spacing(5, 5, 4)
                    },
                    loggedinErrorArea: {
                        padding: e.spacing(2, 2, 4)
                    },
                    errorImage: { ...a,
                        maxWidth: i,
                        maxHeight: i,
                        [e.breakpoints.down("Medium")]: {
                            width: l,
                            height: l
                        }
                    },
                    textHeader: {
                        paddingBottom: e.spacing(1)
                    },
                    guestImageArea: {
                        padding: e.spacing(5, 5)
                    },
                    loggedinImageArea: {
                        padding: e.spacing(2, 2)
                    }
                }));
            t.Z = o
        },
        78465: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = r(52322);
            r(2784);
            var a = r(99414),
                i = r(26321),
                l = r(86658),
                o = r(84499),
                s = r(67319),
                c = r(2012),
                d = r(92899),
                u = r(20725),
                p = r(20896),
                h = r(4778),
                g = () => {
                    let {
                        translate: e
                    } = (0, o.$G)();
                    return (0, n.jsx)(h.Z, {
                        size: "large",
                        illustration: "noPermissions",
                        title: e("Description.AccessDenied"),
                        description: e("Label.AccessDenied")
                    })
                };

            function m() {
                let {
                    translate: e
                } = (0, o.$G)();
                return (0, n.jsx)(h.Z, {
                    size: "large",
                    illustration: "noPermissions",
                    title: e("Description.AccessDeniedAgeOrRegion"),
                    description: e("Label.AccessDeniedAgeOrRegion")
                })
            }
            var f = (0, o.Zh)(e => {
                let {
                    errorCode: t,
                    isAgeOrRegionRestricted: r = !1
                } = e, {
                    user: c
                } = (0, s.je)(), {
                    translate: h
                } = (0, o.$G)(), f = (0, a.Z)(e => e.breakpoints.down("Medium")), {
                    classes: {
                        root: v,
                        background: x,
                        loggedinErrorArea: y,
                        guestErrorArea: b,
                        errorImage: j,
                        textHeader: Z,
                        loggedinImageArea: w,
                        guestImageArea: C
                    }
                } = (0, p.Z)(), {
                    headingKey: I,
                    descriptionKey: N
                } = u.r[t], S = null !== c;
                return 403 === t ? r ? (0, n.jsx)(m, {}) : (0, n.jsx)(g, {}) : (0, n.jsx)(i.Z, {
                    className: v,
                    alignItems: "center",
                    justifyContent: "center",
                    container: !0,
                    children: (0, n.jsxs)(i.Z, {
                        container: !0,
                        item: !0,
                        className: x,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        children: [(0, n.jsxs)(i.Z, {
                            item: !0,
                            className: S ? y : b,
                            Medium: 6,
                            children: [(0, n.jsx)(l.Z, {
                                color: "primary",
                                variant: "h1",
                                className: Z,
                                align: f ? "center" : "left",
                                children: h(I)
                            }), (0, n.jsx)("br", {}), (0, n.jsx)(l.Z, {
                                color: "secondary",
                                align: f ? "center" : "left",
                                children: h(N)
                            })]
                        }), (0, n.jsx)(i.Z, {
                            item: !0,
                            className: S ? w : C,
                            Medium: 6,
                            children: (0, n.jsx)("img", {
                                className: j,
                                src: d.$K,
                                alt: "error",
                                width: d.G_,
                                height: d.G_
                            })
                        })]
                    })
                })
            }, [c.Z.Error])
        },
        11160: function(e, t, r) {
            "use strict";
            var n = r(2784),
                a = r(5632);
            t.Z = (e, t) => {
                let r = (0, a.useRouter)();
                return [(0, n.useMemo)(() => e.reduce((e, t) => ({ ...e,
                    [t]: r.query[t]
                }), {}), [e, r.query]), (0, n.useCallback)(function(n) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            skipHistory: !1
                        },
                        i = { ...r.query
                        };
                    e.forEach(e => {
                        if (!Object.prototype.hasOwnProperty.call(n, e)) return;
                        let t = n[e];
                        null == t ? delete i[e] : Array.isArray(t) ? i[e] = t.map(e => e.toString()) : i[e] = t.toString()
                    }), a.skipHistory ? r.replace({
                        pathname: r.pathname,
                        query: i
                    }) : r.push({
                        pathname: r.pathname,
                        query: i
                    }, void 0, t)
                }, [r, e, t])]
            }
        },
        62921: function(e, t, r) {
            "use strict";
            var n = r(52322),
                a = r(2784),
                i = r(71565),
                l = r(26321),
                o = r(79399),
                s = r(35358),
                c = r(86357),
                d = r(76159),
                u = r(33045),
                p = r(86658),
                h = r(84499),
                g = r(34108),
                m = r(93909),
                f = r(98740),
                v = r(28998),
                x = r(68976);
            let y = (0, i.Z)()((e, t) => {
                let {
                    width: r
                } = t;
                return {
                    pointerIcon: {
                        cursor: "pointer",
                        color: e.palette.content.muted
                    },
                    searchResultList: {
                        width: r,
                        "& ul": {
                            paddingTop: 0,
                            paddingBottom: 0
                        }
                    },
                    menuList: r ? {
                        width: r,
                        maxWidth: "100%"
                    } : {},
                    extendedLabelWidth: {
                        width: "330px"
                    },
                    searchResultItem: {
                        textOverflow: "ellipsis",
                        marginLeft: 0,
                        marginRight: 0
                    },
                    searchItemsContainer: {
                        width: "100%",
                        maxHeight: "260px",
                        overflowY: "auto"
                    },
                    divider: {
                        borderBottom: "1px solid ".concat(e.palette.components.divider)
                    },
                    inputAdornments: {
                        "&:first-child": {
                            marginLeft: 8
                        },
                        "& > *:not(:first-child)": {
                            marginLeft: 10
                        }
                    },
                    searchResultLabel: {
                        marginLeft: 44
                    },
                    searchInput: {
                        "& > div": {
                            overflow: "scroll"
                        },
                        "& .MuiOutlinedInput-root.Mui-disabled": {
                            "&:hover fieldset": {
                                borderColor: "inherit"
                            }
                        }
                    }
                }
            });
            t.Z = e => {
                var t, r, i, b, j, Z, w;
                let {
                    value: C,
                    onSelect: I,
                    onFilter: N,
                    textFieldLabel: S,
                    isDisabled: P = !1,
                    textPlaceholder: L,
                    debounceTimeValue: T = x.Ak
                } = e, R = (0, a.useRef)(null), {
                    classes: {
                        pointerIcon: k,
                        searchResultList: E,
                        searchResultItem: O,
                        searchItemsContainer: A,
                        menuList: D,
                        extendedLabelWidth: M,
                        inputAdornments: G,
                        searchResultLabel: U,
                        searchInput: B
                    },
                    cx: F
                } = y({
                    width: null !== (b = null == R ? void 0 : null === (t = R.current) || void 0 === t ? void 0 : t.offsetWidth) && void 0 !== b ? b : 0
                }), {
                    translate: z
                } = (0, h.$G)(), [_, W] = (0, a.useState)(!1), [H, V] = (0, a.useState)(""), [$, Y] = (0, a.useState)(), [J, X] = (0, a.useState)(null), [Q, q] = (0, a.useState)(!1), K = (0, a.useMemo)(() => H.length > 0 && !!$ && (null == $ ? void 0 : $.length) > 0, [$, H.length]), ee = (0, a.useCallback)(async () => {
                    if ("" === H) {
                        Y(void 0);
                        return
                    }
                    W(!0);
                    try {
                        let e = await (0, g.pz)(H);
                        if (N) {
                            let t = await N(e);
                            Y(t)
                        } else Y(e.map(e => ({
                            user: e
                        })));
                        X(null)
                    } catch (e) {
                        Y(void 0), X(z("Error.SearchingCreators"))
                    }
                    W(!1)
                }, [H, N, z]), et = (0, a.useCallback)(e => {
                    V(e), void 0 !== C && e.length > 0 && I()
                }, [I, C]), er = (0, a.useCallback)(() => {
                    q(!1)
                }, []), en = (0, a.useCallback)(() => {
                    q(!0)
                }, []);
                (0, a.useEffect)(() => {
                    ee()
                }, [ee]);
                let ea = (0, a.useMemo)(() => null == $ ? void 0 : $.some(e => e.label && e.label.length > 0), [$]);
                return (0, n.jsxs)(l.Z, {
                    container: !0,
                    wrap: "wrap",
                    children: [(0, n.jsx)(v.Z, {
                        fullWidth: !0,
                        value: C ? null !== (j = null == C ? void 0 : C.displayName) && void 0 !== j ? j : C.name : H,
                        variant: "outlined",
                        size: "small",
                        onDebouncedChange: et,
                        onFocus: en,
                        onBlur: er,
                        debounceTime: T,
                        error: null !== J,
                        label: S,
                        placeholder: L,
                        helperText: J,
                        id: "users-search",
                        disabled: !!C || P,
                        InputProps: {
                            startAdornment: (0, n.jsx)(o.I, {
                                position: "start",
                                className: G,
                                children: (0, n.jsx)(s.olm, {})
                            }),
                            endAdornment: (0, n.jsxs)(o.I, {
                                position: "start",
                                children: [_ ? (0, n.jsx)(c.C, {
                                    color: "secondary",
                                    size: 20
                                }) : null, (!_ && H.length > 0 || !!C) && (0, n.jsx)(s.$jj, {
                                    fontSize: "small",
                                    onClick: () => {
                                        C && I(), V("")
                                    },
                                    className: k
                                })]
                            }),
                            ref: R
                        },
                        className: B
                    }), (0, n.jsx)(d.Z, {
                        className: F(E, {
                            [M]: ea && (null !== (Z = null == R ? void 0 : null === (r = R.current) || void 0 === r ? void 0 : r.offsetWidth) && void 0 !== Z ? Z : 0) < 330
                        }),
                        anchorEl: R.current,
                        open: K && Q && !C,
                        onClose: () => {
                            var e;
                            et(""), null === (e = R.current) || void 0 === e || e.blur()
                        },
                        MenuListProps: {
                            classes: {
                                root: F(D, {
                                    [M]: ea && (null !== (w = null == R ? void 0 : null === (i = R.current) || void 0 === i ? void 0 : i.offsetWidth) && void 0 !== w ? w : 0) < 330
                                })
                            }
                        },
                        children: (0, n.jsx)("div", {
                            className: A,
                            children: null == $ ? void 0 : $.map(e => {
                                let {
                                    user: t,
                                    disabled: r,
                                    label: a
                                } = e;
                                return (0, n.jsx)(u.Z, {
                                    disabled: r,
                                    onClick: () => {
                                        I(t), et("")
                                    },
                                    className: O,
                                    children: (0, n.jsxs)(l.Z, {
                                        container: !0,
                                        wrap: "wrap",
                                        children: [(0, n.jsx)(f.Z, {
                                            creator: t,
                                            creatorType: m.Z.User,
                                            variant: "compact",
                                            disableLink: !0,
                                            disabled: r
                                        }), a && (0, n.jsx)(p.Z, {
                                            className: U,
                                            variant: "captionBody",
                                            align: "left",
                                            color: "error",
                                            children: a
                                        })]
                                    }, t.id)
                                }, "searchResult-".concat(t.id))
                            })
                        })
                    })]
                })
            }
        },
        69733: function(e, t, r) {
            "use strict";
            var n = r(52322),
                a = r(2784),
                i = r(71565),
                l = r(79399),
                o = r(35358),
                s = r(86357),
                c = r(26321),
                d = r(22496),
                u = r(33308),
                p = r(86658),
                h = r(61283),
                g = r(84499),
                m = r(34108),
                f = r(93909),
                v = r(98740),
                x = r(28998),
                y = r(91424),
                b = r(68976);
            let j = (0, i.Z)()(e => ({
                pointerIcon: {
                    cursor: "pointer",
                    color: e.palette.content.muted
                },
                inputAdornments: {
                    "&:first-child": {
                        marginLeft: 8
                    },
                    "& > *:not(:first-child)": {
                        marginLeft: 10
                    }
                },
                listContainer: {
                    "& > *:not(:last-child)": {
                        paddingBottom: 8
                    },
                    maxHeight: 480,
                    overflowY: "scroll",
                    scrollbarColor: "grey transparent",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                        width: 6
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "grey",
                        borderRadius: "10rem"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "transparent"
                    }
                },
                thumbnailContainer: {
                    margin: "8px 0px 8px 0px"
                },
                checkboxContainer: {
                    marginRight: 16,
                    flexBasis: 0
                },
                chipContainer: {
                    margin: "24px 4px 4px 0px",
                    maxWidth: 160
                },
                resultsLabel: {
                    marginTop: 24
                }
            }));
            t.Z = e => {
                let {
                    value: t,
                    onChange: r,
                    onFilter: i,
                    multiselect: Z,
                    renderEndAdornment: w
                } = e, C = (0, a.useRef)(null), {
                    classes: {
                        pointerIcon: I,
                        inputAdornments: N,
                        listContainer: S,
                        thumbnailContainer: P,
                        checkboxContainer: L,
                        chipContainer: T,
                        resultsLabel: R
                    }
                } = j(), {
                    translate: k
                } = (0, g.$G)(), [E, O] = (0, a.useState)(!1), [A, D] = (0, a.useState)(""), [M, G] = (0, a.useState)(), [U, B] = (0, a.useState)(null), F = (0, a.useCallback)(async () => {
                    if ("" === A) {
                        G(void 0);
                        return
                    }
                    O(!0);
                    try {
                        let e = await (0, m.pz)(A);
                        if (i) {
                            let t = await i(e);
                            G(t)
                        } else G(e.map(e => ({
                            user: e
                        })));
                        B(null)
                    } catch (e) {
                        G(void 0), B(k("Error.SearchingCreators"))
                    }
                    O(!1)
                }, [A, i, k]), z = (0, a.useCallback)(e => {
                    D(e)
                }, []);
                return (0, a.useEffect)(() => {
                    F()
                }, [F]), (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(x.Z, {
                        fullWidth: !0,
                        value: A,
                        size: "small",
                        onDebouncedChange: z,
                        debounceTime: b.Ak,
                        error: null !== U,
                        label: k("Label.Search"),
                        helperText: U,
                        id: "users-selector",
                        InputProps: {
                            startAdornment: (0, n.jsx)(l.I, {
                                position: "start",
                                className: N,
                                children: (0, n.jsx)(o.olm, {})
                            }),
                            endAdornment: (0, n.jsxs)(l.I, {
                                position: "start",
                                children: [E ? (0, n.jsx)(s.C, {
                                    color: "secondary",
                                    size: 20
                                }) : null, !E && A.length > 0 && (0, n.jsx)(o.$jj, {
                                    fontSize: "small",
                                    onClick: () => D(""),
                                    className: I
                                })]
                            }),
                            ref: C
                        }
                    }), (0, n.jsxs)(c.Z, {
                        container: !0,
                        className: S,
                        children: [Z && (0, n.jsx)(c.Z, {
                            container: !0,
                            children: null == t ? void 0 : t.map(e => (0, n.jsx)(d.C, {
                                label: e.name,
                                color: "secondary",
                                size: "medium",
                                variant: "outlined",
                                onDelete: () => {
                                    r && r(t.filter(t => t.id !== e.id))
                                },
                                className: T,
                                avatar: (null == e ? void 0 : e.id) ? (0, n.jsx)(u.Z, {
                                    variant: "rounded",
                                    alt: "avatar",
                                    children: (0, n.jsx)(y.ef, {
                                        targetId: e.id,
                                        type: y.Ij.avatarHeadshot,
                                        alt: "thumbnail",
                                        returnPolicy: y.O7.PlaceHolder,
                                        includeBackground: !1
                                    })
                                }) : void 0
                            }, e.id))
                        }), void 0 === M || 0 === M.length ? (0, n.jsx)(c.Z, {
                            container: !0,
                            justifyContent: "center",
                            className: R,
                            children: !E && (0, n.jsx)(p.Z, {
                                variant: "caption",
                                color: "disabled",
                                children: 0 === A.length ? k("Label.EnterSearch") : k("Label.NoResults")
                            })
                        }) : (0, n.jsx)(c.Z, {
                            container: !0,
                            children: null == M ? void 0 : M.map(e => {
                                let {
                                    user: a,
                                    disabled: i,
                                    label: l
                                } = e;
                                return (0, n.jsxs)(c.Z, {
                                    container: !0,
                                    wrap: "nowrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0, n.jsxs)(c.Z, {
                                        container: !0,
                                        justifyContent: "flex-start",
                                        className: P,
                                        wrap: "nowrap",
                                        children: [Z && (0, n.jsx)(c.Z, {
                                            container: !0,
                                            alignItems: "center",
                                            className: L,
                                            children: (0, n.jsx)(h.Z, {
                                                color: "secondary",
                                                size: "medium",
                                                disabled: i,
                                                checked: void 0 !== a.id && (null == t ? void 0 : t.find(e => e.id === a.id)) !== void 0,
                                                onClick: () => {
                                                    r && r([...null != t ? t : [], a])
                                                }
                                            })
                                        }), (0, n.jsxs)(c.Z, {
                                            container: !0,
                                            wrap: "wrap",
                                            children: [(0, n.jsx)(v.Z, {
                                                creator: a,
                                                creatorType: f.Z.User,
                                                disabled: i,
                                                disableLink: !0
                                            }), l && (0, n.jsx)(c.Z, {
                                                container: !0,
                                                children: (0, n.jsx)(p.Z, {
                                                    variant: "captionBody",
                                                    align: "left",
                                                    color: "error",
                                                    children: l
                                                })
                                            })]
                                        })]
                                    }), w && (0, n.jsx)(c.Z, {
                                        item: !0,
                                        justifyContent: "flex-end",
                                        children: w(a)
                                    })]
                                }, a.id)
                            })
                        })]
                    })]
                })
            }
        },
        68976: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ak: function() {
                    return l
                },
                QH: function() {
                    return u
                },
                Sc: function() {
                    return s
                },
                TV: function() {
                    return i
                },
                cU: function() {
                    return d
                },
                do: function() {
                    return o
                },
                iQ: function() {
                    return c
                }
            });
            var n = r(22297),
                a = r(97695);
            let i = [a.Z.Group, a.Z.Experiences],
                l = 500,
                o = 5,
                s = new Map([
                    [n.Z.Invalid, "A1A2A5"],
                    [n.Z.Blue, "00A2FF"],
                    [n.Z.LightBlue, "55C1FF"],
                    [n.Z.Green, "00B864"],
                    [n.Z.LightGreen, "26FF9C"],
                    [n.Z.Purple, "9E78EC"],
                    [n.Z.LightPurple, "B69AF1"],
                    [n.Z.Yellow, "D8A009"],
                    [n.Z.LightYellow, "F7C744"],
                    [n.Z.Orange, "EF7A36"],
                    [n.Z.LightOrange, "F29057"],
                    [n.Z.Red, "F2453D"],
                    [n.Z.LightRed, "F4645D"],
                    [n.Z.Pink, "E245CD"],
                    [n.Z.LightPink, "EC83DE"],
                    [n.Z.Teal, "00D0D0"],
                    [n.Z.LightTeal, "36FFFF"]
                ]),
                c = [n.Z.LightBlue, n.Z.Green, n.Z.LightGreen, n.Z.Purple, n.Z.LightPurple, n.Z.Yellow, n.Z.LightYellow, n.Z.Orange, n.Z.LightOrange, n.Z.Red, n.Z.LightRed, n.Z.Pink, n.Z.LightPink, n.Z.Teal, n.Z.LightTeal],
                d = n.Z.Blue,
                u = 10
        },
        22297: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {})).Invalid = "Invalid", n.Blue = "Blue", n.LightBlue = "LightBlue", n.Green = "Green", n.LightGreen = "LightGreen", n.Purple = "Purple", n.LightPurple = "LightPurple", n.Yellow = "Yellow", n.LightYellow = "LightYellow", n.Orange = "Orange", n.LightOrange = "LightOrange", n.Red = "Red", n.LightRed = "LightRed", n.Pink = "Pink", n.LightPink = "LightPink", n.Teal = "Teal", n.LightTeal = "LightTeal", t.Z = r
        },
        97695: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {})).Group = "Group", n.Experiences = "Experiences", t.Z = r
        },
        69653: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return e8
                }
            });
            var n, a, i = r(52322),
                l = r(2784),
                o = r(40210),
                s = r(2012),
                c = r(84499),
                d = r(26321),
                u = r(86357),
                p = r(81828),
                h = r(80460),
                g = r(71565),
                m = r(86658),
                f = r(4013),
                v = r(19742),
                x = r(85908),
                y = r(12769),
                b = r(22496),
                j = r(19976);
            let Z = (0, g.Z)()(e => ({
                cardContainer: {
                    minWidth: 300,
                    padding: 16,
                    backgroundColor: e.palette.surface[100]
                },
                caption: {
                    marginTop: 4
                },
                contents: {
                    marginTop: 8
                }
            }));
            var w = e => {
                    let {
                        title: t,
                        description: r,
                        children: n
                    } = e, {
                        classes: {
                            cardContainer: a,
                            caption: l,
                            contents: o
                        }
                    } = Z();
                    return (0, i.jsx)(j.C, {
                        className: a,
                        children: (0, i.jsxs)(d.Z, {
                            container: !0,
                            direction: "column",
                            wrap: "nowrap",
                            children: [(0, i.jsx)(d.Z, {
                                item: !0,
                                children: (0, i.jsx)(m.Z, {
                                    variant: "h5",
                                    children: t
                                })
                            }), (0, i.jsx)(d.Z, {
                                item: !0,
                                className: l,
                                children: (0, i.jsx)(m.Z, {
                                    color: "secondary",
                                    variant: "body2",
                                    children: r
                                })
                            }), (0, i.jsx)(d.Z, {
                                container: !0,
                                className: o,
                                children: n
                            })]
                        })
                    })
                },
                C = r(2024),
                I = r(24428),
                N = r(97695),
                S = r(68976),
                P = r(5274),
                L = r(78481),
                T = r(83502),
                R = r(48626),
                k = r(74239),
                E = r(78465),
                O = r(55388),
                A = r(67319),
                D = r(63955),
                M = r(1868),
                G = r(80183),
                U = r(99414),
                B = r(10881),
                F = r(79399),
                z = r(66114),
                _ = r(90472),
                W = r(35358),
                H = r(33782),
                V = r(67357),
                $ = r(31330),
                Y = r(9104),
                J = r(3074),
                X = r(93909),
                Q = r(98740),
                q = r(96374),
                K = (0, q.Z)((0, i.jsx)("path", {
                    d: "M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"
                }), "Percent"),
                ee = r(23356),
                et = (0, q.Z)((0, i.jsx)("path", {
                    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
                }), "AddCircleOutlineOutlined"),
                er = r(34108),
                en = r(62921);
            let ea = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fill",
                        r = S.Sc.get(e);
                    return {
                        [t]: "#".concat(r)
                    }
                },
                ei = () => {
                    let e = Math.floor(Math.random() * S.iQ.length);
                    return S.iQ[e]
                },
                el = e => {
                    if (e.length >= S.iQ.length) return ei();
                    let t = S.iQ.filter(t => !e.includes(t)),
                        r = Math.floor(Math.random() * t.length);
                    return t[r]
                },
                eo = e => {
                    if ("" === e) return !0;
                    if (Number.isNaN(e)) return !1;
                    let t = Number(e);
                    return Number.isInteger(t) && t >= 0 && t <= 100
                },
                es = e => (0 === e.length ? 0 : e.reduce((e, t) => e + t)) <= 100,
                ec = e => {
                    let t = Number(e);
                    return "" === e || Number.isInteger(t) && t >= 0
                },
                ed = (e, t) => null == t || !(e.reduce((e, t) => e + Number.parseInt(t.amount, 10), 0) > t),
                eu = e => e.every(e => Number.parseInt(e.amount, 10) > 0),
                ep = e => ({
                    background: e.palette.surface[0],
                    accordionBackground: e.palette.surface[300],
                    tooltipText: e.palette.content.standard
                }),
                eh = e => e.length > S.QH ? "".concat(e.substring(0, S.QH).trim(), "...") : e,
                eg = (0, g.Z)()(() => ({
                    container: {
                        "& > *:not(:last-child)": {
                            marginRight: 16
                        }
                    },
                    percentageInput: {
                        width: 120
                    }
                }));
            var em = e => {
                    let {
                        organization: t,
                        payouts: r,
                        onSubmit: n,
                        disabled: a = !1
                    } = e, {
                        classes: {
                            container: o,
                            percentageInput: s
                        }
                    } = eg(), {
                        translate: u
                    } = (0, c.$G)(), [p, h] = (0, l.useState)(), [g, m] = (0, l.useState)(""), f = (0, l.useCallback)(e => {
                        h(e)
                    }, [h]), v = (0, l.useCallback)(e => {
                        let t = r.map(e => "" === e.percentage ? 0 : Number.parseInt(e.percentage, 10));
                        t.push(Number(e.target.value)), eo(e.target.value) && es(t) && m(e.target.value)
                    }, [r]), x = (0, l.useCallback)(() => {
                        (null == p ? void 0 : p.id) && (n({
                            creatorId: p.id.toString(),
                            percentage: "" === g ? "0" : g
                        }, p), h(void 0), m(""))
                    }, [n, g, p]), y = (0, l.useCallback)(async e => {
                        if (0 === e.length) return [];
                        let n = Number.parseInt(t.groupId, 10),
                            a = new Map(r.map(e => [Number.parseInt(e.creatorId, 10), !0])),
                            i = e.filter(e => e.id && !a.get(e.id)),
                            l = i.map(e => e.id && (0, er.ai)(n, e.id)),
                            o = await Promise.all(l),
                            s = i.filter((e, t) => o[t]),
                            c = s.map(e => e.id).filter(e => void 0 !== e),
                            d = Math.ceil(c.length / S.do),
                            p = [];
                        for (let e = 0; e < d; e += 1) {
                            let t = e * S.do,
                                r = t + S.do,
                                a = c.slice(t, r),
                                i = C.Z.getGroupUserPayoutEligibility(n, a);
                            p.push(i)
                        }
                        let h = await Promise.all(p),
                            g = new Map;
                        return h.forEach(e => {
                            var t;
                            Object.entries(null !== (t = e.usersGroupPayoutEligibility) && void 0 !== t ? t : []).forEach(e => {
                                let [t, r] = e;
                                g.set(Number.parseInt(t, 10), r)
                            })
                        }), s.map(e => {
                            let t = !(null == e ? void 0 : e.id) || "Eligible" === g.get(e.id);
                            return {
                                user: e,
                                label: t ? void 0 : u("Label.UserNotEligible"),
                                disabled: !t
                            }
                        })
                    }, [t.groupId, r, u]);
                    return (0, i.jsxs)(d.Z, {
                        container: !0,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        wrap: "nowrap",
                        className: o,
                        children: [(0, i.jsx)(d.Z, {
                            item: !0,
                            XSmall: !0,
                            children: (0, i.jsx)(en.Z, {
                                value: p,
                                onSelect: f,
                                onFilter: y,
                                textFieldLabel: u("Label.Member")
                            })
                        }), (0, i.jsx)(d.Z, {
                            item: !0,
                            children: (0, i.jsxs)(d.Z, {
                                container: !0,
                                alignItems: "center",
                                justifyContent: "flex-start",
                                wrap: "nowrap",
                                children: [(0, i.jsx)(B.Z, {
                                    size: "small",
                                    label: u("Label.Earnings"),
                                    id: "earnings",
                                    value: g,
                                    onChange: v,
                                    className: s,
                                    InputProps: {
                                        endAdornment: (0, i.jsx)(F.I, {
                                            position: "start",
                                            children: (0, i.jsx)(K, {
                                                fontSize: "small"
                                            })
                                        })
                                    }
                                }), (0, i.jsx)(_.Z, {
                                    "aria-label": "add-creator",
                                    color: "secondary",
                                    disabled: a || !p || "" === g,
                                    onClick: x,
                                    style: {
                                        marginRight: 8
                                    },
                                    children: (0, i.jsx)(et, {})
                                })]
                            })
                        })]
                    })
                },
                ef = r(61146),
                ev = r.n(ef),
                ex = r(64402),
                ey = r.n(ex),
                eb = r(22297);
            let ej = (0, g.Z)()((e, t) => {
                let {
                    overlayPositionString: r
                } = t, n = r ? JSON.parse(r) : void 0;
                return {
                    container: {
                        position: "relative",
                        margin: 24
                    },
                    overlay: {
                        position: "absolute",
                        height: "100%",
                        width: "100%"
                    },
                    overlayText: {
                        position: "absolute",
                        height: n ? n.height : "100%",
                        width: n ? n.width : "100%",
                        top: n ? n.y : 0,
                        left: n ? n.x : 0
                    },
                    overlayLabel: {
                        textAlign: "center"
                    },
                    overlayTitle: {
                        color: e.palette.content.muted
                    },
                    highchartContainer: {
                        width: "100%"
                    }
                }
            });
            var eZ = l.memo(e => {
                let {
                    payouts: t,
                    group: r,
                    groupPayoutPercentage: n,
                    getUserInfo: a,
                    getColor: o,
                    showLabels: s = !1,
                    borderColor: u,
                    useOtherLabel: h
                } = e, [g, f] = (0, l.useState)(), {
                    classes: {
                        container: v,
                        overlay: x,
                        overlayText: y,
                        overlayLabel: b,
                        overlayTitle: j,
                        highchartContainer: Z
                    },
                    cx: w
                } = ej({
                    overlayPositionString: g
                }), {
                    translate: C
                } = (0, c.$G)(), {
                    permissions: I
                } = (0, p.Z)(), {
                    user: N
                } = (0, A.je)(), {
                    tooltipText: P,
                    background: L
                } = ep((0, G.Fg)()), T = (0, l.useRef)(null), R = (0, l.useRef)(null), k = (0, l.useMemo)(() => {
                    let e = [...t.filter(e => !Number.isNaN(e.percentage) && Number.parseInt(e.percentage, 10) > 0).map(e => {
                        var t, r, n;
                        let i = a(e.creatorId),
                            l = null !== (t = o(e.creatorId)) && void 0 !== t ? t : eb.Z.LightBlue,
                            s = !h || e.creatorId === (null == N ? void 0 : N.id.toString()),
                            c = null !== (n = null !== (r = null == i ? void 0 : i.displayName) && void 0 !== r ? r : null == i ? void 0 : i.name) && void 0 !== n ? n : "",
                            d = s ? c : C("Label.Other");
                        return {
                            name: d,
                            label: eh(d),
                            y: Number.parseInt(e.percentage, 10),
                            color: "#".concat(S.Sc.get(l))
                        }
                    })];
                    return n > 0 && e.unshift({
                        name: r.name,
                        label: h ? C("Label.Other") : eh(r.name),
                        y: n,
                        color: "#".concat(S.Sc.get(S.cU))
                    }), e
                }, [r.name, n, t, a, o, null == N ? void 0 : N.id, C, h]), E = (0, l.useMemo)(() => (0, i.jsxs)(d.Z, {
                    container: !0,
                    className: y,
                    justifyContent: "center",
                    "align-items": "center",
                    direction: "column",
                    wrap: "wrap",
                    children: [(0, i.jsx)(m.Z, {
                        variant: "h6",
                        className: w(b, j),
                        children: C("Title.TotalSplits")
                    }), (0, i.jsx)(m.Z, {
                        variant: "h1",
                        className: b,
                        children: t.length + (n > 0 ? 1 : 0)
                    })]
                }), [y, w, b, j, C, t.length, n]), O = (0, l.useMemo)(() => ({
                    chart: {
                        type: "pie",
                        backgroundColor: void 0
                    },
                    title: {
                        style: {
                            display: "none"
                        }
                    },
                    credits: {
                        enabled: !1
                    },
                    tooltip: {
                        headerFormat: "{point.key}<br>",
                        pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b>"
                    },
                    accessibility: {
                        point: {
                            valueSuffix: "%"
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: !0,
                            borderWidth: 2.5,
                            borderColor: null != u ? u : L,
                            cursor: "pointer",
                            dataLabels: {
                                enabled: s,
                                format: "<b>{point.label}</b><br>{point.percentage:.0f}%",
                                style: {
                                    color: P,
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    textOverflow: "ellipsis",
                                    overflow: "allow"
                                },
                                useHTML: !0
                            }
                        },
                        series: {
                            innerSize: "70%",
                            borderRadius: 5,
                            borderWidth: 1
                        }
                    },
                    series: [{
                        type: "pie",
                        name: C("Label.Split"),
                        data: k
                    }]
                }), [u, L, s, P, C, k]), D = (0, l.useCallback)(e => {
                    if (!R.current || 0 === e.children.length) return;
                    let t = document.getElementsByClassName("highcharts-series-group");
                    if (0 === t.length) return;
                    let r = t[0],
                        {
                            parentElement: n
                        } = r;
                    if (!n) return;
                    let a = r.getBoundingClientRect(),
                        i = n.getBoundingClientRect(),
                        l = e.getBoundingClientRect(),
                        o = R.current.getBoundingClientRect(),
                        s = o.width - l.width,
                        c = o.height - l.height,
                        d = a.x - i.x,
                        u = a.y - i.y,
                        {
                            width: p,
                            height: h
                        } = a;
                    if (!(p < 1) && !(h < 1)) {
                        if (p < 175) {
                            f(void 0);
                            return
                        }
                        f(JSON.stringify({
                            x: d + s / 2,
                            y: u + c / 2,
                            height: h,
                            width: p
                        }))
                    }
                }, []);
                return (0, l.useEffect)(() => {
                    var e;
                    if (!(null === (e = T.current) || void 0 === e ? void 0 : e.chart) || !T.current.container.current) return () => {};
                    let {
                        chart: t
                    } = T.current, {
                        current: r
                    } = T.current.container, n = () => D(r);
                    return ev().addEvent(t, "render", n), ev().addEvent(ev().Series, "afterAnimate", n), window.addEventListener("resize", n), () => {
                        ev().removeEvent(t, "render", n), ev().removeEvent(ev().Series, "afterAnimate", n), window.removeEventListener("resize", n)
                    }
                }, [D]), (0, l.useEffect)(() => {
                    let e = setTimeout(() => {
                        var e;
                        (null === (e = T.current) || void 0 === e ? void 0 : e.container.current) && D(T.current.container.current)
                    }, 1400);
                    return () => {
                        clearTimeout(e)
                    }
                }, []), (0, i.jsxs)(d.Z, {
                    container: !0,
                    className: v,
                    justifyContent: "center",
                    children: [(0, i.jsx)(d.Z, {
                        container: !0,
                        className: x,
                        ref: R,
                        children: void 0 !== g && E
                    }), (0, i.jsx)(ey(), {
                        ref: T,
                        highcharts: ev(),
                        options: O,
                        allowChartUpdate: !0,
                        containerProps: {
                            id: "highcharts",
                            className: Z
                        }
                    })]
                })
            });
            let ew = (0, g.Z)()(e => ({
                root: {
                    width: "100%",
                    height: "100%",
                    "& > *:not(:last-child)": {
                        marginBottom: 24
                    },
                    [e.breakpoints.down("Large")]: {
                        marginLeft: 12,
                        marginRight: 12
                    },
                    [e.breakpoints.down("Medium")]: {
                        marginLeft: 0,
                        marginRight: 0
                    }
                },
                container: {
                    minWidth: 0,
                    width: "fit-content"
                },
                formContainer: {
                    marginTop: 8,
                    marginBottom: 8
                },
                bottomContainer: {
                    height: "100%"
                },
                title: {
                    flexBasis: "100%",
                    margin: "4px 0px"
                },
                buttonContainer: {
                    padding: "16px 0",
                    flexDirection: "row",
                    [e.breakpoints.down("Large")]: {
                        flexDirection: "column"
                    },
                    "& > *:not(:first-child)": {
                        margin: "0 12px"
                    },
                    "&:last-child": {
                        marginLeft: 0
                    }
                },
                errorMessageStyles: {
                    width: "100%",
                    paddingTop: 8,
                    color: e.palette.actionV2.important.fill,
                    fontWeight: "bold",
                    fontSize: 12
                },
                colorBar: {
                    width: 4,
                    minWidth: 4,
                    height: "100%",
                    marginRight: 12
                },
                rowInner: {
                    padding: "8px 0px",
                    "& > *:not(:first-child)": {
                        marginRight: 8,
                        minWidth: 0,
                        width: "fit-content"
                    }
                },
                thumbnailContainer: {
                    marginRight: 36
                },
                percentageInput: {
                    width: 100,
                    minWidth: 100
                },
                leftColumn: {
                    minWidth: 0,
                    maxWidth: 512
                }
            }));
            var eC = e => {
                let {
                    organization: t,
                    initialPayouts: r,
                    onSave: n,
                    payoutType: a,
                    disabled: o = !1
                } = e, {
                    classes: {
                        root: s,
                        container: h,
                        formContainer: g,
                        bottomContainer: f,
                        title: v,
                        buttonContainer: x,
                        errorMessageStyles: y,
                        colorBar: b,
                        rowInner: j,
                        thumbnailContainer: Z,
                        percentageInput: w,
                        leftColumn: C
                    },
                    cx: P
                } = ew(), {
                    translate: L
                } = (0, c.$G)(), {
                    enqueue: T,
                    close: R
                } = (0, M.D)(), k = (0, I.Z)(), {
                    permissions: E
                } = (0, p.Z)(), {
                    user: O
                } = (0, A.je)(), q = (0, G.Fg)(), {
                    background: et,
                    accordionBackground: er
                } = ep(q), en = (0, U.Z)(q.breakpoints.up("XLarge")), ec = (0, U.Z)(q.breakpoints.down("Large")), [ed, eu] = (0, l.useState)(!1), [eh, eg] = (0, l.useState)(null), [ef, ev] = (0, l.useState)(new Map), [ex, ey] = (0, l.useState)(new Date), [eb, ej] = (0, l.useState)(new Date), [eC, eI] = (0, l.useState)(new Map), eN = (0, l.useMemo)(() => ({
                    payouts: r
                }), [r]), {
                    handleSubmit: eS,
                    control: eP,
                    setValue: eL,
                    formState: eT,
                    reset: eR
                } = (0, D.cI)({
                    mode: Y.Z.OnChange,
                    reValidateMode: Y.Z.OnChange,
                    defaultValues: eN,
                    shouldUnregister: !0
                }), {
                    isSubmitting: ek,
                    errors: eE,
                    isValid: eO,
                    isValidating: eA,
                    isDirty: eD
                } = eT, eM = (0, l.useCallback)(() => {
                    eR && eR(eN), eg(null), eu(!1)
                }, [eN, eR]), eG = (0, l.useCallback)(e => {
                    T({
                        message: e,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        autoHideDuration: J.JH,
                        autoHide: !0,
                        onClose: R
                    })
                }, [T, R]), eU = (0, l.useCallback)(async e => {
                    eg(null);
                    try {
                        let {
                            updateSucceeded: t,
                            translatedErrorMessage: r
                        } = await n(e.payouts);
                        if (!t) {
                            r ? eg(r) : eg(L("Error.SavingPayouts")), eR(void 0, {
                                keepValues: !0,
                                keepDirty: !0
                            });
                            return
                        }
                        eG(L("Message.ChangeSaved"))
                    } catch (e) {
                        eg(L("Error.SavingPayouts")), eR(void 0, {
                            keepValues: !0,
                            keepDirty: !0
                        })
                    }
                }, [n, eG, L, eR]);
                (0, l.useEffect)(() => {
                    eR && eR(eN)
                }, [eN, eR]);
                let eB = (0, l.useCallback)(e => {
                        let t = e.map(e => "" === e.percentage ? 0 : Number.parseInt(e.percentage, 10));
                        return 100 - (0 === t.length ? 0 : t.reduce((e, t) => e + t))
                    }, []),
                    eF = (0, l.useCallback)(e => {
                        if (ex || 0 !== ef.size) return ef.get(e)
                    }, [ef, ex]),
                    ez = (0, l.useCallback)(e => {
                        if (eb || 0 !== eC.size) return eC.get(e)
                    }, [eC, eb]),
                    e_ = (0, l.useCallback)(async e => {
                        if (0 !== e.length) try {
                            let t = await ee.Z.getUsersByIds(e);
                            ev(e => {
                                var r;
                                return null === (r = t.data) || void 0 === r || r.forEach(t => {
                                    var r;
                                    return e.set("".concat(null !== (r = t.id) && void 0 !== r ? r : 0), t)
                                }), e
                            })
                        } catch (t) {
                            ev(t => (e.forEach(e => t.set("".concat(e), null)), t))
                        } finally {
                            ey(new Date)
                        }
                    }, [ev]),
                    eW = (0, l.useCallback)(e => {
                        eI(t => (e.forEach(e => {
                            let r = t.get("".concat(e));
                            t.set("".concat(e), r || el(Array.from(t.values())))
                        }), t)), ej(new Date)
                    }, []);
                (0, l.useEffect)(() => {
                    let e = r.map(e => Number.parseInt(e.creatorId, 10));
                    e_(e), eW(e)
                }, [eW, e_, r]);
                let eH = (0, l.useCallback)(() => (null == E ? void 0 : E.isOwner) === !0 || (null == E ? void 0 : E.canConfigureRevenueDetails) === !0 || (null == E ? void 0 : E.canViewRevenueDetails) === !0, [E]),
                    eV = (0, l.useCallback)((e, t, r, n, a, s) => {
                        var c;
                        if (!e.id) return null;
                        let u = t === X.Z.User ? null == r ? void 0 : r.percentage : eB(n),
                            p = eH() || t === X.Z.User && null !== O && e.id === O.id;
                        return (0, i.jsxs)(d.Z, {
                            container: !0,
                            wrap: "nowrap",
                            alignItems: "center",
                            children: [t === X.Z.User ? (0, i.jsx)(d.Z, {
                                item: !0,
                                className: b,
                                style: ea(null !== (c = eC.get("".concat(e.id))) && void 0 !== c ? c : ei(), "background")
                            }) : (0, i.jsx)(d.Z, {
                                item: !0,
                                className: b,
                                style: ea(S.cU, "background")
                            }), (0, i.jsxs)(d.Z, {
                                container: !0,
                                wrap: "nowrap",
                                justifyContent: "space-between",
                                className: j,
                                children: [(0, i.jsx)(d.Z, {
                                    container: !0,
                                    className: P(Z, h),
                                    children: (0, i.jsx)(Q.Z, {
                                        creator: e,
                                        creatorType: t,
                                        obfuscate: !p,
                                        textVariant: "secondary"
                                    })
                                }), (0, i.jsxs)(d.Z, {
                                    container: !0,
                                    wrap: "nowrap",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    className: h,
                                    children: [t === X.Z.User && ed ? (0, i.jsx)(B.Z, {
                                        size: "small",
                                        label: L("Label.Earnings"),
                                        id: "earnings",
                                        value: u,
                                        className: w,
                                        onChange: e => {
                                            if (!s) return;
                                            let t = n.map(e => "" === e.percentage ? 0 : Number.parseInt(e.percentage, 10));
                                            t.push(-r.percentage, Number(e.target.value)), eo(e.target.value) && es(t) && s({ ...r,
                                                percentage: e.target.value
                                            })
                                        },
                                        InputProps: {
                                            endAdornment: (0, i.jsx)(F.I, {
                                                position: "start",
                                                children: (0, i.jsx)(K, {
                                                    fontSize: "small"
                                                })
                                            })
                                        }
                                    }) : (0, i.jsxs)(l.Fragment, {
                                        children: [(0, i.jsxs)(m.Z, {
                                            variant: "h6",
                                            children: [(0, i.jsx)("span", {
                                                children: u
                                            }), "\xa0"]
                                        }), (0, i.jsx)(K, {})]
                                    }), t === X.Z.Group && !o && ed && (0, i.jsx)(z.T, {
                                        arrow: !0,
                                        title: L("Message.GroupEarnings"),
                                        placement: "right",
                                        enterTouchDelay: 0,
                                        leaveTouchDelay: 3e3,
                                        color: "disabled",
                                        children: (0, i.jsx)(_.Z, {
                                            "aria-label": "tooltip",
                                            color: "secondary",
                                            children: (0, i.jsx)(W.NRt, {
                                                color: "disabled"
                                            })
                                        })
                                    }), t === X.Z.User && ed && (0, i.jsx)(_.Z, {
                                        "aria-label": "delete-payout",
                                        color: "secondary",
                                        onClick: () => {
                                            a && a(r)
                                        },
                                        children: (0, i.jsx)(W.HG3, {
                                            color: "error"
                                        })
                                    })]
                                })]
                            })]
                        })
                    }, [eB, O, b, eC, j, P, Z, h, ed, L, o, w, eH]),
                    e$ = (0, l.useCallback)(() => (0, i.jsx)(d.Z, {
                        className: P(v, C),
                        item: !0,
                        Large: 6,
                        XSmall: 12,
                        children: (0, i.jsxs)(d.Z, {
                            container: !0,
                            justifyContent: "space-between",
                            wrap: "nowrap",
                            alignItems: "center",
                            children: [(0, i.jsx)(m.Z, {
                                variant: "h6",
                                children: L("Title.Splits")
                            }), !ed && !o && (null == E ? void 0 : E.canConfigureRevenueDetails) && (0, i.jsx)(d.Z, {
                                container: !0,
                                alignItems: "center",
                                justifyContent: "flex-end",
                                children: (0, i.jsx)(_.Z, {
                                    "aria-label": "edit",
                                    color: "secondary",
                                    onClick: () => eu(!0),
                                    disabled: o,
                                    children: (0, i.jsx)(W.I8b, {})
                                })
                            })]
                        })
                    }), [P, v, C, L, ed, o, null == E ? void 0 : E.canConfigureRevenueDetails]);
                return (0, i.jsxs)(d.Z, {
                    container: !0,
                    className: s,
                    wrap: "wrap",
                    children: [!ec && e$(), (0, i.jsx)(d.Z, {
                        container: !0,
                        flexDirection: "row-reverse",
                        justifyContent: "start",
                        children: (0, i.jsx)(D.Qr, {
                            name: "payouts",
                            control: eP,
                            render: e => {
                                let {
                                    field: {
                                        value: r,
                                        onChange: n
                                    }
                                } = e;
                                return (0, i.jsxs)(l.Fragment, {
                                    children: [(0, i.jsx)(d.Z, {
                                        item: !0,
                                        Large: 6,
                                        XSmall: 12,
                                        children: (0, i.jsx)(d.Z, {
                                            container: !0,
                                            justifyContent: "center",
                                            children: k ? (0, i.jsx)(eZ, {
                                                payouts: r,
                                                group: k,
                                                groupPayoutPercentage: eB(r),
                                                getUserInfo: eF,
                                                getColor: ez,
                                                showLabels: en,
                                                borderColor: a === N.Z.Group ? et : er,
                                                useOtherLabel: !eH()
                                            }) : (0, i.jsx)(u.C, {
                                                color: "secondary"
                                            })
                                        })
                                    }), (0, i.jsx)(d.Z, {
                                        item: !0,
                                        Large: 6,
                                        XSmall: 12,
                                        className: C,
                                        children: (0, i.jsxs)(d.Z, {
                                            container: !0,
                                            className: s,
                                            children: [ec && e$(), ed && (0, i.jsx)(em, {
                                                organization: t,
                                                payouts: r,
                                                onSubmit: (e, t) => {
                                                    r.push(e), eL("payouts", r), n(r), ev(e => (e.set("".concat(t.id), t), e)), ey(new Date), eI(e => {
                                                        let r = e.get("".concat(t.id));
                                                        return e.set("".concat(t.id), r || el(Array.from(e.values()))), e
                                                    }), ej(new Date)
                                                },
                                                disabled: o
                                            }), (0, i.jsxs)(d.Z, {
                                                item: !0,
                                                XSmall: 12,
                                                className: f,
                                                children: [(0, i.jsx)(d.Z, {
                                                    item: !0,
                                                    children: (0, i.jsx)(H.Z, {})
                                                }), (0, i.jsxs)(d.Z, {
                                                    container: !0,
                                                    className: g,
                                                    children: [k && (0, i.jsx)(l.Fragment, {
                                                        children: eV(k, X.Z.Group, {
                                                            creatorId: k.id.toString(),
                                                            percentage: eB(r).toString()
                                                        }, r)
                                                    }), r.map(e => {
                                                        let t = eF(e.creatorId);
                                                        return (0, i.jsx)(l.Fragment, {
                                                            children: eV({
                                                                id: Number.parseInt(e.creatorId, 10),
                                                                displayName: null == t ? void 0 : t.displayName,
                                                                name: null == t ? void 0 : t.name
                                                            }, X.Z.User, e, r, e => {
                                                                let t = r.filter(t => t.creatorId !== e.creatorId);
                                                                eL("payouts", t), n(t), eI(t => (t.delete("".concat(e.creatorId)), t)), ej(new Date)
                                                            }, e => {
                                                                let t = r.map(t => t.creatorId === e.creatorId ? e : t);
                                                                eL("payouts", t), n(t)
                                                            })
                                                        }, e.creatorId)
                                                    })]
                                                }), ed && (0, i.jsxs)(l.Fragment, {
                                                    children: [(0, i.jsx)(d.Z, {
                                                        item: !0,
                                                        children: (0, i.jsx)(H.Z, {})
                                                    }), (0, i.jsxs)(d.Z, {
                                                        item: !0,
                                                        className: x,
                                                        children: [(0, i.jsx)(V.Z, {
                                                            variant: "outlined",
                                                            color: "primary",
                                                            size: "large",
                                                            onClick: eM,
                                                            children: L("Action.Cancel")
                                                        }), (0, i.jsx)(V.Z, {
                                                            "data-testid": "save-payouts-button",
                                                            variant: "contained",
                                                            size: "large",
                                                            disabled: !eD || !eA && !eO || o || !!eE.payouts,
                                                            onClick: eS(eU),
                                                            loading: ek,
                                                            children: L("Action.Save")
                                                        }), eh && (0, i.jsx)($.a, {
                                                            className: y,
                                                            children: eh
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }
                        })
                    })]
                })
            };
            let eI = (0, g.Z)()(() => ({
                container: {
                    padding: 12
                }
            }));
            var eN = e => {
                    let {
                        organization: t,
                        payouts: r,
                        onSave: n,
                        payoutType: a,
                        disabled: l = !1
                    } = e, {
                        classes: {
                            container: o
                        }
                    } = eI();
                    return (0, i.jsx)(d.Z, {
                        container: !0,
                        className: o,
                        wrap: "nowrap",
                        children: (0, i.jsx)(eC, {
                            organization: t,
                            initialPayouts: r,
                            onSave: n,
                            payoutType: a,
                            disabled: l
                        })
                    })
                },
                eS = e => {
                    let {
                        organization: t,
                        disabled: r = !1
                    } = e, {
                        translate: n
                    } = (0, c.$G)(), {
                        unifiedLogger: a
                    } = (0, T.xL)(), {
                        permissions: o
                    } = (0, p.Z)(), {
                        user: s
                    } = (0, A.je)(), [g, f] = (0, l.useState)(null), [v, x] = (0, l.useState)(null), [y, b] = (0, l.useState)(!1), j = (0, l.useCallback)(async () => {
                        var e, r, a, i, l, c, d;
                        try {
                            let n = Number.parseInt(t.groupId, 10),
                                d = await h.Z.getGroupPayouts(n),
                                u = [];
                            u = (null == o ? void 0 : o.isOwner) || (null == o ? void 0 : o.canViewRevenueDetails) || (null == o ? void 0 : o.canConfigureRevenueDetails) ? null !== (a = null === (r = d.data) || void 0 === r ? void 0 : null === (e = r.filter(e => {
                                var t;
                                return (null === (t = e.user) || void 0 === t ? void 0 : t.userId) !== void 0 && void 0 !== e.percentage
                            })) || void 0 === e ? void 0 : e.map(e => {
                                var t, r;
                                return {
                                    creatorId: (null === (t = e.user) || void 0 === t ? void 0 : t.userId).toString(),
                                    percentage: null === (r = e.percentage) || void 0 === r ? void 0 : r.toString()
                                }
                            })) && void 0 !== a ? a : [] : null !== (c = null === (l = d.data) || void 0 === l ? void 0 : null === (i = l.filter(e => {
                                var t;
                                return (null === (t = e.user) || void 0 === t ? void 0 : t.userId) === (null == s ? void 0 : s.id) && void 0 !== e.percentage
                            })) || void 0 === i ? void 0 : i.map(e => {
                                var t, r;
                                return {
                                    creatorId: (null === (t = e.user) || void 0 === t ? void 0 : t.userId).toString(),
                                    percentage: null === (r = e.percentage) || void 0 === r ? void 0 : r.toString()
                                }
                            })) && void 0 !== c ? c : [], f(u)
                        } catch (e) {
                            (null == e ? void 0 : null === (d = e.response) || void 0 === d ? void 0 : d.status) === k.Z.FORBIDDEN ? b(!0) : x(n("Error.FailedToLoadGroupPayouts")), f(null)
                        }
                    }, [t.groupId, n, o]);
                    (0, l.useEffect)(() => {
                        j()
                    }, [j]);
                    let Z = (0, l.useCallback)(async e => {
                        var r, n, i;
                        try {
                            let n = e.filter(e => Number.isInteger(Number.parseInt(e.percentage, 10))),
                                i = n.map(e => ({
                                    recipientId: Number.parseInt(e.creatorId, 10),
                                    recipientType: P.du.User,
                                    amount: Number.parseInt(e.percentage, 10)
                                })),
                                l = Number.parseInt(t.groupId, 10);
                            return await h.Z.updateGroupRecurringPayouts(l, {
                                payoutType: L.vj.Percentage,
                                recipients: i
                            }), f(n), (0, R.U)(a, R.u.ClickOrgsConfirmRecurringPayout, {
                                group_id: null !== (r = null == t ? void 0 : t.groupId) && void 0 !== r ? r : "",
                                type: N.Z.Group,
                                payouts: JSON.stringify(e)
                            }), {
                                updateSucceeded: !0,
                                translatedErrorMessage: null
                            }
                        } catch (t) {
                            let e = await t.response.json();
                            return {
                                updateSucceeded: !1,
                                translatedErrorMessage: null == e ? void 0 : null === (i = e.errors) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.userFacingMessage
                            }
                        }
                    }, [t.groupId, a]);
                    return (0, i.jsxs)(d.Z, {
                        container: !0,
                        children: [y && (0, i.jsx)(d.Z, {
                            container: !0,
                            item: !0,
                            XSmall: 12,
                            wrap: "wrap",
                            children: (0, i.jsx)(E.Z, {
                                errorCode: O.WC.FORBIDDEN
                            })
                        }), null !== v && (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(m.Z, {
                                color: "error",
                                children: v
                            })
                        }), g ? (0, i.jsx)(eN, {
                            organization: t,
                            payouts: g,
                            onSave: Z,
                            payoutType: N.Z.Group,
                            disabled: r
                        }) : null === v && !y && (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(u.C, {
                                color: "secondary"
                            })
                        })]
                    })
                },
                eP = r(29139),
                eL = r(55977),
                eT = r(69938),
                eR = r(6916),
                ek = r(14880),
                eE = r(57889),
                eO = r(80478),
                eA = r(91424),
                eD = r(43548),
                eM = r(70651);
            let eG = (0, g.Z)()(e => ({
                accordion: {
                    width: "100%"
                },
                accordionSummary: {
                    "& > div:first-child": {
                        width: "100%"
                    }
                },
                accordionSummaryInner: {
                    "& > *:not(:last-child)": {
                        marginRight: 12
                    }
                },
                accordionDetails: {
                    padding: "8px 40px 32px 40px",
                    [e.breakpoints.down("Medium")]: {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                },
                accordionTitle: {
                    whiteSpace: "nowrap",
                    "& > *:not(:last-child)": {
                        paddingBottom: 4
                    }
                },
                universeThumbnail: {
                    width: 32,
                    minWidth: 32,
                    height: 32,
                    marginRight: 8
                },
                universeThumbnailImg: {
                    borderRadius: 4
                },
                mutedText: {
                    color: e.palette.content.muted
                },
                payoutOverview: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    "& > div": {
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        textWrap: "nowrap"
                    },
                    "& > *:not(:last-child)": {
                        marginRight: 24
                    }
                }
            }));
            var eU = e => {
                var t;
                let {
                    organization: r,
                    universe: n,
                    disabled: a = !1
                } = e, {
                    classes: {
                        accordion: o,
                        accordionSummary: s,
                        accordionSummaryInner: p,
                        accordionDetails: h,
                        accordionTitle: g,
                        universeThumbnail: f,
                        universeThumbnailImg: v,
                        mutedText: x,
                        payoutOverview: b
                    }
                } = eG(), {
                    translate: j
                } = (0, c.$G)(), Z = (0, U.Z)(e => e.breakpoints.down("Medium")), {
                    unifiedLogger: w
                } = (0, T.xL)(), [C, I] = (0, l.useState)(), [S, P] = (0, l.useState)(), L = (0, l.useCallback)(e => {
                    let t = e.map(e => Number.parseInt(e.percentage, 10));
                    P(100 - (0 === t.length ? 0 : t.reduce((e, t) => e + t)))
                }, []), k = (0, l.useCallback)(async () => {
                    if (!n.id) return;
                    let e = (await eM.ZP.groupUniversePayoutClient.getUniversePayouts({
                        organizationId: r.id,
                        universeId: n.id.toString()
                    })).payouts.map(e => ({
                        creatorId: e.userId,
                        percentage: e.percentage
                    }));
                    I(e), L(e)
                }, [L, r.id, n.id]);
                (0, l.useEffect)(() => {
                    k()
                }, [k]);
                let E = (0, l.useCallback)(async e => {
                    if (!n.id) return {
                        updateSucceeded: !1
                    };
                    try {
                        var t;
                        let a = e.filter(e => Number.isInteger(Number.parseInt(e.percentage, 10))).map(e => ({
                                userId: e.creatorId,
                                percentage: e.percentage
                            })),
                            i = {
                                organizationId: r.id,
                                universeId: n.id.toString(),
                                updateUniverseRecurringPayoutsRequestModel: {
                                    payouts: a
                                }
                            },
                            l = (await eM.ZP.groupUniversePayoutClient.updateUniversePayouts(i)).payouts.map(e => ({
                                creatorId: e.userId,
                                percentage: e.percentage
                            })).filter(e => Number.parseInt(e.percentage, 10) > 0);
                        return I(l), L(e), (0, R.U)(w, R.u.ClickOrgsConfirmRecurringPayout, {
                            group_id: null !== (t = null == r ? void 0 : r.groupId) && void 0 !== t ? t : "",
                            type: N.Z.Experiences,
                            experience_id: n.id.toString(),
                            payouts: JSON.stringify(e)
                        }), {
                            updateSucceeded: !0
                        }
                    } catch (e) {
                        return {
                            updateSucceeded: !1
                        }
                    }
                }, [n.id, r.id, L, null == r ? void 0 : r.groupId, w]);
                return (0, i.jsxs)(eR.A, {
                    variant: "filled",
                    className: o,
                    children: [(0, i.jsx)(ek.A, {
                        className: s,
                        children: (0, i.jsxs)(d.Z, {
                            container: !0,
                            direction: "row",
                            flexWrap: "nowrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            className: p,
                            children: [(0, i.jsxs)(d.Z, {
                                container: !0,
                                alignItems: "center",
                                wrap: "nowrap",
                                children: [(0, i.jsx)(d.Z, {
                                    container: !0,
                                    className: f,
                                    "data-testid": "thumbnail",
                                    children: (0, i.jsx)(eA.ef, {
                                        targetId: null !== (t = n.id) && void 0 !== t ? t : 0,
                                        type: eA.Ij.gameIcon,
                                        imgClassName: v,
                                        alt: "thumbnail",
                                        returnPolicy: eA.O7.PlaceHolder,
                                        includeBackground: !1
                                    })
                                }), (0, i.jsxs)(d.Z, {
                                    container: !0,
                                    direction: "column",
                                    children: [(0, i.jsx)(m.Z, {
                                        variant: "body1",
                                        color: "inherit",
                                        children: n.name
                                    }), (0, i.jsx)(d.Z, {
                                        item: !0,
                                        children: (0, i.jsx)(eE.L, {
                                            href: n.rootPlaceId ? eD.getGameDetailsUrl(n.rootPlaceId) : "",
                                            className: g,
                                            color: "inherit",
                                            children: (0, i.jsx)(m.Z, {
                                                variant: "body2",
                                                className: x,
                                                children: n.id
                                            })
                                        })
                                    })]
                                })]
                            }), !Z && (0, i.jsxs)(d.Z, {
                                item: !0,
                                className: b,
                                children: [(0, i.jsxs)(d.Z, {
                                    item: !0,
                                    children: [(0, i.jsx)(m.Z, {
                                        variant: "captionHeader",
                                        className: x,
                                        children: j("Title.GroupEarnings")
                                    }), void 0 !== S ? (0, i.jsx)(m.Z, {
                                        variant: "captionBody",
                                        className: x,
                                        children: "".concat(S, "%")
                                    }) : (0, i.jsx)(y.S, {
                                        animate: !0,
                                        variant: "text",
                                        width: 100,
                                        height: 20
                                    })]
                                }), (0, i.jsxs)(d.Z, {
                                    item: !0,
                                    className: b,
                                    children: [(0, i.jsx)(m.Z, {
                                        variant: "captionHeader",
                                        className: x,
                                        children: j("Title.Splits")
                                    }), C ? (0, i.jsx)(m.Z, {
                                        variant: "captionBody",
                                        className: x,
                                        "data-testid": "splits-".concat(C.length),
                                        children: C.length + (S && S > 0 ? 1 : 0)
                                    }) : (0, i.jsx)(y.S, {
                                        animate: !0,
                                        variant: "text",
                                        width: 100,
                                        height: 20
                                    })]
                                })]
                            })]
                        })
                    }), (0, i.jsx)(eO.A, {
                        className: h,
                        children: C ? (0, i.jsx)(eN, {
                            organization: r,
                            payouts: C,
                            onSave: E,
                            payoutType: N.Z.Experiences,
                            disabled: a
                        }) : (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(u.C, {
                                color: "secondary"
                            })
                        })
                    })]
                })
            };
            let eB = (0, g.Z)()(() => ({
                accordionContainer: {
                    "& > *:not(:first-child)": {
                        marginTop: 8
                    }
                },
                paginationContainer: {
                    width: "100%",
                    marginTop: 16
                }
            }));
            var eF = e => {
                    var t, r;
                    let {
                        organization: n,
                        disabled: a = !1
                    } = e, {
                        classes: {
                            accordionContainer: o,
                            paginationContainer: s
                        }
                    } = eB(), {
                        translate: p
                    } = (0, c.$G)(), h = (0, eL.Z)(), {
                        data: g,
                        isDataLoading: f,
                        isUserForbidden: v,
                        isResponseFailed: x,
                        pagination: y
                    } = (0, eT.Z)({
                        owner: h,
                        pageSizeOptions: [10, 20, 50, 100],
                        defaultPageSize: 10
                    });
                    return (0, i.jsxs)(d.Z, {
                        container: !0,
                        className: o,
                        children: [v && (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(m.Z, {
                                children: p("Message.UserHasNoPermission")
                            })
                        }), x && (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(m.Z, {
                                children: p("Message.UnableToLoadExperiences")
                            })
                        }), !v && !x && (0, i.jsx)(l.Fragment, {
                            children: (null == g ? void 0 : null === (t = g.data) || void 0 === t ? void 0 : t.length) !== 0 ? (0, i.jsxs)(l.Fragment, {
                                children: [null == g ? void 0 : null === (r = g.data) || void 0 === r ? void 0 : r.filter(e => !!e.id).map(e => (0, i.jsx)(eU, {
                                    organization: n,
                                    universe: e,
                                    disabled: a
                                }, e.id)), null !== g && (0, i.jsx)(d.Z, {
                                    container: !0,
                                    className: s,
                                    justifyContent: "center",
                                    children: (0, i.jsx)(eP.Z, { ...y
                                    })
                                })]
                            }) : (0, i.jsx)(l.Fragment, {
                                children: !f && (0, i.jsx)(d.Z, {
                                    container: !0,
                                    justifyContent: "center",
                                    children: (0, i.jsx)(m.Z, {
                                        children: p("Message.NoExperiences")
                                    })
                                })
                            })
                        }), (f || null === g) && !a && (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(u.C, {
                                color: "secondary"
                            })
                        })]
                    })
                },
                ez = r(83310),
                e_ = r(89611),
                eW = r(55223),
                eH = r(69733);
            let eV = (0, g.Z)()(e => ({
                dialogTitle: {
                    marginBottom: 12
                },
                dialogContent: {
                    paddingBottom: 0,
                    minHeight: 32,
                    [e.breakpoints.down("Large")]: {
                        minWidth: 200
                    }
                },
                dialogActions: {
                    marginTop: 32,
                    "& > *:not(:last-child)": {
                        marginRight: 8
                    }
                },
                errorMessageStyles: {
                    width: "100%",
                    marginTop: 4,
                    paddingLeft: 14,
                    paddingRight: 14,
                    color: e.palette.actionV2.important.fill,
                    fontWeight: "bold",
                    fontSize: 12
                },
                rowContainer: {
                    "& > *": {
                        padding: "12px 0px"
                    },
                    "&:first-child": {
                        paddingTop: 0
                    },
                    "&:last-child": {
                        paddingBottom: 0
                    }
                },
                rowInner: {
                    "& > *:not(:first-child)": {
                        marginLeft: 8
                    }
                },
                buttons: {
                    "& > *:not(:first-child)": {
                        marginLeft: 10
                    }
                },
                divider: {
                    paddingBottom: 16
                },
                mutedText: {
                    color: e.palette.content.muted
                },
                robuxIcon: {
                    width: 24,
                    height: 24,
                    verticalAlign: "sub",
                    fontSize: "1rem",
                    marginRight: 4
                },
                paddedContainer: {
                    "& > *:not(:last-child)": {
                        margin: "16px 0px"
                    }
                },
                marginBottom: {
                    marginBottom: 16
                },
                topSnackbarRoot: {
                    padding: 0
                },
                topSnackbarMessage: {
                    padding: 0
                },
                fromToLabel: {
                    marginBottom: 8
                },
                dialogContainer: {
                    "& .MuiDialog-container": {
                        "& .MuiDialog-paper": {
                            minWidth: 600,
                            maxHeight: "652px",
                            [e.breakpoints.down("Large")]: {
                                width: 390,
                                minWidth: 390
                            },
                            [e.breakpoints.down("Medium")]: {
                                width: 360,
                                minWidth: 360
                            }
                        }
                    }
                },
                robuxInput: {
                    minWidth: 100,
                    maxWidth: 120
                }
            }));
            (n = a || (a = {})).Search = "Search", n.Input = "Input", n.Confirm = "Confirm";
            var e$ = e => {
                    let {
                        organization: t,
                        onClose: r,
                        open: n,
                        groupFunds: a,
                        fetchGroupFunds: o
                    } = e, {
                        classes: {
                            dialogTitle: s,
                            dialogContent: u,
                            dialogActions: p,
                            errorMessageStyles: g,
                            rowContainer: v,
                            rowInner: b,
                            buttons: j,
                            divider: Z,
                            mutedText: w,
                            paddedContainer: N,
                            robuxIcon: k,
                            marginBottom: E,
                            topSnackbarRoot: O,
                            topSnackbarMessage: A,
                            fromToLabel: G,
                            dialogContainer: U,
                            robuxInput: z
                        },
                        cx: _
                    } = eV(), {
                        translate: W
                    } = (0, c.$G)(), {
                        enqueue: q,
                        close: K
                    } = (0, M.D)(), ee = (0, I.Z)(), {
                        unifiedLogger: et
                    } = (0, T.xL)(), [en, ea] = (0, l.useState)("Search"), [ei, el] = (0, l.useState)([]), [eo, es] = (0, l.useState)(!1), [ep, eh] = (0, l.useState)(null), {
                        control: eg,
                        setValue: em,
                        formState: ef,
                        getValues: ev,
                        reset: ex
                    } = (0, D.cI)({
                        mode: Y.Z.OnChange,
                        reValidateMode: Y.Z.OnChange,
                        defaultValues: {
                            payouts: []
                        },
                        shouldUnregister: !1
                    }), {
                        isSubmitting: ey,
                        isValid: eb,
                        isValidating: ej,
                        isDirty: eZ
                    } = ef, ew = (0, l.useCallback)(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        q({
                            ContentProps: {
                                classes: {
                                    root: O,
                                    message: A
                                }
                            },
                            message: (0, i.jsx)(f.A, {
                                "data-testid": "".concat(t ? "error" : "success", "-message"),
                                variant: "filled",
                                severity: t ? "error" : "success",
                                children: e
                            }),
                            anchorOrigin: {
                                vertical: "top",
                                horizontal: "center"
                            },
                            autoHideDuration: J.JH,
                            autoHide: !0,
                            onClose: K
                        })
                    }, [q, O, A, K]), eC = (0, l.useCallback)(async e => {
                        if (0 === e.length) return [];
                        let r = Number.parseInt(t.groupId, 10),
                            n = e.map(e => e.id && (0, er.ai)(r, e.id)),
                            a = await Promise.all(n),
                            i = e.filter((e, t) => a[t]),
                            l = i.map(e => e.id).filter(e => void 0 !== e),
                            o = Math.ceil(l.length / S.do),
                            s = [];
                        for (let e = 0; e < o; e += 1) {
                            let t = e * S.do,
                                n = t + S.do,
                                a = l.slice(t, n),
                                i = C.Z.getGroupUserPayoutEligibility(r, a);
                            s.push(i)
                        }
                        let c = await Promise.all(s),
                            d = new Map;
                        return c.forEach(e => {
                            var t;
                            Object.entries(null !== (t = e.usersGroupPayoutEligibility) && void 0 !== t ? t : []).forEach(e => {
                                let [t, r] = e;
                                d.set(Number.parseInt(t, 10), r)
                            })
                        }), i.map(e => {
                            let t = !(null == e ? void 0 : e.id) || "Eligible" === d.get(e.id);
                            return {
                                user: e,
                                label: t ? void 0 : W("Label.UserNotEligible"),
                                disabled: !t
                            }
                        })
                    }, [t.groupId, W]), eI = (0, l.useCallback)(() => (0, i.jsxs)(ez.Z, {
                        className: u,
                        children: [(0, i.jsx)(d.Z, {
                            container: !0,
                            className: s,
                            children: (0, i.jsx)(m.Z, {
                                variant: "h3",
                                align: "left",
                                children: W("Title.SendToCreators")
                            })
                        }), (0, i.jsx)(eH.Z, {
                            value: ei,
                            onChange: el,
                            onFilter: eC,
                            multiselect: !0
                        })]
                    }), [u, s, W, ei, eC]), eN = e => {
                        if (!e) return 0;
                        let t = e.map(e => 0 === e.amount.length ? 0 : Number.parseInt(e.amount, 10));
                        return 0 === t.length ? 0 : t.reduce((e, t) => e + t)
                    }, eS = (0, l.useCallback)(e => (0, i.jsxs)(d.Z, {
                        container: !0,
                        justifyItems: "space-between",
                        wrap: "nowrap",
                        children: [(0, i.jsx)(d.Z, {
                            container: !0,
                            children: (0, i.jsx)(m.Z, {
                                variant: "h5",
                                align: "left",
                                children: W("Label.Total")
                            })
                        }), (0, i.jsxs)(d.Z, {
                            container: !0,
                            alignItems: "center",
                            justifyContent: "end",
                            children: [(0, i.jsx)(x.Z, {
                                className: k
                            }), (0, i.jsx)(m.Z, {
                                variant: "h6",
                                children: eN(e).toLocaleString()
                            })]
                        })]
                    }), [k, W]), eP = (0, l.useCallback)(() => (0, i.jsxs)(ez.Z, {
                        className: u,
                        children: [(0, i.jsx)(d.Z, {
                            container: !0,
                            className: _(E, s),
                            children: (0, i.jsx)(m.Z, {
                                variant: "h3",
                                align: "left",
                                children: W("Title.SendToCreators")
                            })
                        }), (0, i.jsx)(D.Qr, {
                            name: "payouts",
                            control: eg,
                            rules: {
                                validate: e => ed(e, a) && eu(e) && e.length === ei.length
                            },
                            render: e => {
                                let {
                                    field: {
                                        value: t,
                                        onChange: r
                                    }
                                } = e;
                                return (0, i.jsxs)(d.Z, {
                                    container: !0,
                                    className: N,
                                    children: [(0, i.jsx)(d.Z, {
                                        item: !0,
                                        XSmall: !0,
                                        children: !ed(t, a) && (0, i.jsx)(f.A, {
                                            severity: "error",
                                            variant: "filled",
                                            children: W("Error.PayoutSumExceedsFunds")
                                        })
                                    }), (0, i.jsx)(l.Fragment, {
                                        children: eS(t)
                                    }), (0, i.jsx)(d.Z, {
                                        container: !0,
                                        className: v,
                                        children: ei.map(e => {
                                            var n, l;
                                            let o = null !== (l = null == t ? void 0 : t.find(t => {
                                                var r;
                                                return t.userId === (null === (r = e.id) || void 0 === r ? void 0 : r.toString())
                                            })) && void 0 !== l ? l : {
                                                userId: null === (n = e.id) || void 0 === n ? void 0 : n.toString(),
                                                amount: "0"
                                            };
                                            return (0, i.jsxs)(d.Z, {
                                                container: !0,
                                                wrap: "nowrap",
                                                alignItems: "center",
                                                className: b,
                                                children: [(0, i.jsx)(Q.Z, {
                                                    creator: e,
                                                    creatorType: X.Z.User,
                                                    textVariant: "secondary"
                                                }), (0, i.jsx)(d.Z, {
                                                    container: !0,
                                                    wrap: "nowrap",
                                                    alignItems: "center",
                                                    justifyContent: "flex-end",
                                                    children: (0, i.jsx)(B.Z, {
                                                        className: z,
                                                        variant: "outlined",
                                                        size: "small",
                                                        label: "Amount",
                                                        id: "payout-amount",
                                                        error: !ed(t, a),
                                                        value: null == o ? void 0 : o.amount,
                                                        onChange: n => {
                                                            let a = n.target.value,
                                                                i = [...t.filter(t => {
                                                                    var r;
                                                                    return t.userId !== (null === (r = e.id) || void 0 === r ? void 0 : r.toString())
                                                                }), {
                                                                    userId: e.id.toString(),
                                                                    amount: a
                                                                }];
                                                            (0 === a.length || ec(a)) && (em("payouts", i), r(i))
                                                        },
                                                        InputProps: {
                                                            startAdornment: (0, i.jsx)(F.I, {
                                                                position: "end",
                                                                children: (0, i.jsx)(x.Z, {
                                                                    fontSize: "large"
                                                                })
                                                            })
                                                        }
                                                    })
                                                })]
                                            }, e.id)
                                        })
                                    }), ep && !eZ && (0, i.jsx)($.a, {
                                        className: g,
                                        children: ep
                                    })]
                                })
                            }
                        })]
                    }), [eg, _, u, s, g, ep, eS, a, eZ, E, N, v, b, ei, em, W, z]), eL = (0, l.useCallback)((e, t) => {
                        var r, n;
                        if ((null == e ? void 0 : e.length) === 0) return 0;
                        let a = null !== (n = null == e ? void 0 : null === (r = e.find(e => {
                            var r;
                            return e.userId === (null === (r = t.id) || void 0 === r ? void 0 : r.toString())
                        })) || void 0 === r ? void 0 : r.amount) && void 0 !== n ? n : "0";
                        return a ? Number.parseInt(a, 10).toLocaleString() : 0
                    }, []), eT = (0, l.useCallback)(() => {
                        let {
                            payouts: e
                        } = ev();
                        return (0, i.jsxs)(ez.Z, {
                            className: u,
                            children: [(0, i.jsx)(d.Z, {
                                container: !0,
                                className: _(s, E),
                                children: (0, i.jsx)(m.Z, {
                                    variant: "h3",
                                    align: "left",
                                    children: W("Title.ConfirmPayment")
                                })
                            }), (0, i.jsxs)(d.Z, {
                                container: !0,
                                className: N,
                                children: [(0, i.jsxs)(d.Z, {
                                    container: !0,
                                    wrap: "wrap",
                                    direction: "column",
                                    children: [(0, i.jsx)(m.Z, {
                                        variant: "h6",
                                        align: "left",
                                        className: _(w, G),
                                        children: W("Label.From")
                                    }), ee ? (0, i.jsx)(Q.Z, {
                                        creator: ee,
                                        creatorType: X.Z.Group,
                                        textVariant: "secondary"
                                    }) : (0, i.jsx)(y.S, {
                                        variant: "square",
                                        width: 400,
                                        height: 48,
                                        animate: !0
                                    })]
                                }), (0, i.jsxs)(d.Z, {
                                    container: !0,
                                    wrap: "wrap",
                                    direction: "column",
                                    children: [(0, i.jsx)(m.Z, {
                                        variant: "h6",
                                        align: "left",
                                        className: _(w, G),
                                        children: W("Label.To")
                                    }), (0, i.jsx)(d.Z, {
                                        container: !0,
                                        className: v,
                                        children: ei.map(t => (0, i.jsxs)(d.Z, {
                                            container: !0,
                                            wrap: "nowrap",
                                            alignItems: "center",
                                            className: b,
                                            children: [(0, i.jsx)(Q.Z, {
                                                creator: t,
                                                creatorType: X.Z.User,
                                                textVariant: "secondary"
                                            }), (0, i.jsxs)(d.Z, {
                                                container: !0,
                                                wrap: "nowrap",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                children: [(0, i.jsx)(x.Z, {
                                                    fontSize: "large"
                                                }), (0, i.jsx)(m.Z, {
                                                    variant: "h6",
                                                    style: {
                                                        marginLeft: "6px"
                                                    },
                                                    children: eL(e, t)
                                                })]
                                            })]
                                        }, t.id))
                                    })]
                                }), (0, i.jsx)(d.Z, {
                                    item: !0,
                                    XSmall: 12,
                                    className: Z,
                                    children: (0, i.jsx)(H.Z, {})
                                }), (0, i.jsx)(l.Fragment, {
                                    children: eS(e)
                                })]
                            })]
                        })
                    }, [ee, _, u, s, Z, G, eS, eL, ev, E, w, N, v, b, ei, W]), eR = (0, l.useCallback)(async e => {
                        eh(null), es(!0);
                        try {
                            var n;
                            let {
                                payouts: a
                            } = e, i = a.map(e => ({
                                recipientId: Number.parseInt(e.userId, 10),
                                recipientType: P.du.User,
                                amount: 0 === e.amount.length ? 0 : Number.parseInt(e.amount, 10)
                            })), l = Number.parseInt(t.groupId, 10);
                            await h.Z.updateGroupPayouts(l, {
                                payoutType: L.vj.FixedAmount,
                                recipients: i
                            }), ew(W("Message.PaymentSent")), (0, R.U)(et, R.u.ClickOrgsConfirmOneTimePayout, {
                                group_id: null !== (n = null == t ? void 0 : t.groupId) && void 0 !== n ? n : "",
                                payouts: JSON.stringify(a)
                            }), r()
                        } catch (e) {
                            eh(W("Error.SendingPayments"))
                        } finally {
                            es(!1), ex(), ea("Search"), await o()
                        }
                    }, [r, t.groupId, ew, W, ex, o, et]), ek = (0, l.useCallback)(() => {
                        "Search" === en && ea("Input"), "Input" === en && ea("Confirm"), "Confirm" === en && eR(ev())
                    }, [en, eR, ev]), eE = (0, l.useCallback)(() => {
                        if ("Search" === en) return !(ei.length > 0);
                        if ("Input" === en) {
                            if (ej || !eb) return !0;
                            let {
                                payouts: e
                            } = ev();
                            return !e || 0 === e.filter(e => e.amount.length > 0 && Number.parseInt(e.amount, 10) > 0).length
                        }
                        return "Confirm" !== en || eo || ey
                    }, [en, ei.length, ej, eb, ev, eo, ey]);
                    return (0, i.jsxs)(e_.Z, {
                        open: n,
                        onClose: r,
                        className: U,
                        children: ["Search" === en && eI(), "Input" === en && eP(), "Confirm" === en && eT(), (0, i.jsx)(eW.Z, {
                            className: p,
                            children: (0, i.jsxs)(d.Z, {
                                container: !0,
                                justifyContent: "space-between",
                                className: j,
                                children: [(0, i.jsx)(V.Z, {
                                    onClick: () => {
                                        r(), ea("Search"), el([]), ex()
                                    },
                                    variant: "outlined",
                                    color: "primary",
                                    children: W("Action.Cancel")
                                }), (0, i.jsxs)(d.Z, {
                                    item: !0,
                                    className: j,
                                    children: [("Input" === en || "Confirm" === en) && (0, i.jsx)(V.Z, {
                                        onClick: () => {
                                            "Confirm" === en ? ea("Input") : (ea("Search"), ex())
                                        },
                                        variant: "outlined",
                                        color: "primary",
                                        disabled: ey,
                                        children: W("Action.Back")
                                    }), (0, i.jsx)(V.Z, {
                                        onClick: ek,
                                        color: "primary",
                                        variant: "contained",
                                        disabled: eE(),
                                        loading: ey || eo,
                                        children: "Confirm" === en ? W("Action.Confirm") : W("Action.Next")
                                    })]
                                })]
                            })
                        })]
                    })
                },
                eY = e => {
                    let {
                        organization: t,
                        disabled: r,
                        loading: n,
                        groupFunds: a,
                        fetchGroupFunds: o
                    } = e, {
                        translate: s
                    } = (0, c.$G)(), [d, u] = (0, l.useState)(!1);
                    return (0, i.jsxs)(l.Fragment, {
                        children: [(0, i.jsx)(V.Z, {
                            variant: "contained",
                            color: "primaryBrand",
                            size: "medium",
                            disabled: r,
                            loading: n,
                            onClick: () => u(!0),
                            children: s("Action.SendRobux")
                        }), (0, i.jsx)(e$, {
                            organization: t,
                            open: d,
                            onClose: () => u(!1),
                            groupFunds: a,
                            fetchGroupFunds: o
                        })]
                    })
                };
            let eJ = (0, g.Z)()(e => ({
                container: {
                    width: "100%",
                    height: "100%",
                    "& > *:not(:last-child)": {
                        marginBottom: 24
                    }
                },
                title: {
                    flexBasis: "100%",
                    margin: "4px 0px"
                },
                cardsContainer: {
                    display: "flex",
                    overflowX: "auto",
                    flexWrap: "nowrap",
                    "& > *:not(:first-child)": {
                        marginLeft: 24
                    },
                    [e.breakpoints.down("Medium")]: {
                        flexWrap: "wrap",
                        "& > *:not(:first-child)": {
                            marginLeft: 0,
                            paddingTop: 24
                        }
                    }
                },
                chipsContainer: {
                    "& > *:not(:first-child)": {
                        marginLeft: 12
                    }
                },
                robuxIcon: {
                    width: 24,
                    height: 24,
                    verticalAlign: "sub",
                    fontSize: "1rem",
                    marginRight: 4
                },
                alertContainer: {
                    width: "100%",
                    "& > *:not(:last-child)": {
                        paddingBottom: 24
                    },
                    [e.breakpoints.down("Large")]: {
                        paddingLeft: 12,
                        paddingRight: 12
                    }
                },
                alertTitle: {
                    marginBottom: 4
                }
            }));
            var eX = e => {
                    var t, r, n;
                    let {
                        organization: a,
                        permissions: o,
                        canUseOneTimePayout: s,
                        canUseRecurringPayout: u,
                        disabled: p = !1
                    } = e, {
                        classes: {
                            container: h,
                            title: g,
                            cardsContainer: j,
                            chipsContainer: Z,
                            robuxIcon: P,
                            alertContainer: L,
                            alertTitle: T
                        }
                    } = eJ(), {
                        translate: R
                    } = (0, c.$G)(), k = (0, I.Z)(), [E, O] = (0, l.useState)(null), [A, D] = (0, l.useState)(N.Z.Group), M = (0, l.useCallback)(async () => {
                        (null == a ? void 0 : a.groupId) && O((await C.Z.getGroupCurrency(Number(a.groupId))).robux)
                    }, [a]);
                    return (0, l.useEffect)(() => {
                        M()
                    }, [M]), (0, i.jsxs)(d.Z, {
                        container: !0,
                        className: h,
                        wrap: "wrap",
                        alignContent: "flex-start",
                        children: [(0, i.jsx)(d.Z, {
                            className: g,
                            item: !0,
                            XSmall: 12,
                            children: (0, i.jsx)(d.Z, {
                                container: !0,
                                children: (0, i.jsx)(m.Z, {
                                    variant: "h1",
                                    children: R("Heading.Payouts")
                                })
                            })
                        }), (!s || !u) && (0, i.jsx)(d.Z, {
                            container: !0,
                            item: !0,
                            XSmall: 12,
                            wrap: "wrap",
                            children: (0, i.jsxs)(f.A, {
                                severity: "error",
                                variant: "standard",
                                className: L,
                                children: [(0, i.jsx)(v.A, {
                                    className: T,
                                    children: R("Title.GroupPayoutsRestricted")
                                }), s || u ? (0, i.jsxs)(l.Fragment, {
                                    children: [!s && R("Message.OneTimePayoutRestriction", {
                                        groupName: null !== (r = null == k ? void 0 : k.name) && void 0 !== r ? r : R("Label.TheGroup")
                                    }), !u && R("Message.RecurringPayoutRestriction", {
                                        groupName: null !== (n = null == k ? void 0 : k.name) && void 0 !== n ? n : R("Label.TheGroup")
                                    })]
                                }) : R("Message.AllPayoutRestrictions", {
                                    groupName: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : R("Label.TheGroup")
                                })]
                            })
                        }), (0, i.jsxs)(d.Z, {
                            className: j,
                            item: !0,
                            XSmall: 12,
                            children: [(0, i.jsx)(d.Z, {
                                item: !0,
                                children: (0, i.jsx)(w, {
                                    title: R("Title.GroupFunds"),
                                    description: R("Label.GroupFundsDescription"),
                                    children: (0, i.jsxs)(d.Z, {
                                        container: !0,
                                        alignItems: "center",
                                        children: [(0, i.jsx)(x.Z, {
                                            className: P
                                        }), Number.isInteger(E) ? (0, i.jsx)(m.Z, {
                                            variant: "h2",
                                            children: (null != E ? E : 0).toLocaleString()
                                        }) : (0, i.jsx)(y.S, {
                                            animate: !0,
                                            variant: "text",
                                            width: 24,
                                            height: 24
                                        })]
                                    })
                                })
                            }), (0, i.jsx)(d.Z, {
                                item: !0,
                                children: (0, i.jsx)(w, {
                                    title: R("Title.SendOneTimePayment"),
                                    description: R("Label.PayRobuxToCollaborators"),
                                    children: (0, i.jsx)(eY, {
                                        organization: a,
                                        disabled: p || 0 === E || !s || !o.canConfigureRevenueDetails,
                                        loading: !Number.isInteger(E),
                                        groupFunds: E,
                                        fetchGroupFunds: M
                                    })
                                })
                            })]
                        }), (0, i.jsx)(d.Z, {
                            container: !0,
                            className: Z,
                            children: S.TV.map(e => (0, i.jsx)(b.C, {
                                clickable: !0,
                                variant: "filled",
                                label: R("Title.".concat(e)),
                                color: e === A ? "primary" : "secondary",
                                onClick: () => D(e)
                            }, e))
                        }), (0, i.jsxs)(d.Z, {
                            container: !0,
                            children: [A === N.Z.Group && (0, i.jsx)(eS, {
                                organization: a,
                                disabled: p || !u
                            }), A === N.Z.Experiences && (0, i.jsx)(eF, {
                                organization: a,
                                disabled: p || !u
                            })]
                        })]
                    })
                },
                eQ = r(55302),
                eq = r(45258);
            let eK = (0, g.Z)()(() => ({
                accordionContainer: {
                    "& > *:not(:first-child)": {
                        marginTop: 8
                    }
                },
                paginationContainer: {
                    width: "100%",
                    marginTop: 16
                }
            }));
            var e0 = e => {
                let {
                    organization: t,
                    disabled: r = !1
                } = e, {
                    classes: {
                        accordionContainer: n,
                        paginationContainer: a
                    }
                } = eK(), [o, s] = (0, l.useState)(!0), [c, p] = (0, l.useState)([]), [h, g] = (0, l.useState)(-1), [m, f] = (0, l.useState)(void 0), [v, x] = (0, l.useState)(""), [y, b] = (0, l.useState)(void 0), j = (0, l.useCallback)(async (e, r) => {
                    g(e => e + 1);
                    let n = await eM.ZP.groupUniversePayoutClient.findUniversePayouts({
                        organizationId: t.id,
                        limit: 10,
                        cursor: e
                    });
                    if (n && n.data && n.data.records) {
                        var a;
                        let e = n.data.records.map(e => Number(e.universeId));
                        if (0 === e.length) {
                            b([]), s(!1);
                            return
                        }
                        let t = null !== (a = (await eq.ZP.getDetails(e)).data) && void 0 !== a ? a : [];
                        b(e => void 0 !== e ? [...e, ...t] : t), x(n.data.nextCursor), n.data.hasMore || f(r + 1), p(t), s(!1)
                    }
                }, [t.id]);
                (0, l.useEffect)(() => {
                    j("", -1)
                }, [j]);
                let Z = (0, l.useCallback)(() => {
                        void 0 !== y && (p(y.slice((h - 1) * 10, 10 * h)), g(e => e - 1))
                    }, [h, y]),
                    w = (0, l.useCallback)(() => {
                        void 0 !== y && ((h + 1) * 10 >= y.length ? (s(!0), j(v, h)) : (p(y.slice((h + 1) * 10, (h + 2) * 10)), g(e => e + 1)))
                    }, [j, v, h, y]);
                return (0, i.jsx)(d.Z, {
                    container: !0,
                    className: n,
                    children: 0 !== c.length ? (0, i.jsxs)(l.Fragment, {
                        children: [o ? (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(u.C, {
                                color: "secondary"
                            })
                        }) : null == c ? void 0 : c.filter(e => !!e.id).map(e => (0, i.jsx)(eU, {
                            organization: t,
                            universe: e,
                            disabled: r
                        }, e.id)), (0, i.jsx)(d.Z, {
                            container: !0,
                            className: a,
                            justifyContent: "center",
                            children: (0, i.jsx)(eQ.P, {
                                nextProps: {
                                    disabled: h === m || o,
                                    onClick: w
                                },
                                page: h + 1,
                                previousProps: {
                                    disabled: 0 === h,
                                    onClick: Z
                                },
                                shape: "rounded",
                                size: "medium",
                                variant: "reduced"
                            })
                        })]
                    }) : (0, i.jsxs)(d.Z, {
                        container: !0,
                        justifyContent: "center",
                        children: [(o || void 0 === y) && (0, i.jsx)(u.C, {
                            color: "secondary"
                        }), (null == y ? void 0 : y.length) === 0 && (0, i.jsx)(E.Z, {
                            errorCode: O.WC.FORBIDDEN
                        })]
                    })
                })
            };
            let e1 = (0, g.Z)()(() => ({
                container: {
                    width: "100%",
                    height: "100%",
                    "& > *:not(:last-child)": {
                        marginBottom: 24
                    }
                },
                title: {
                    flexBasis: "100%",
                    margin: "4px 0px"
                },
                chipsContainer: {
                    "& > *:not(:first-child)": {
                        marginLeft: 12
                    }
                }
            }));
            var e2 = e => {
                    let {
                        organization: t,
                        canUseRecurringPayout: r,
                        disabled: n = !1
                    } = e, {
                        classes: {
                            container: a,
                            title: o,
                            chipsContainer: s
                        }
                    } = e1(), {
                        translate: u
                    } = (0, c.$G)(), [p, h] = (0, l.useState)(N.Z.Group);
                    return (0, i.jsxs)(d.Z, {
                        container: !0,
                        className: a,
                        wrap: "wrap",
                        alignContent: "flex-start",
                        children: [(0, i.jsx)(d.Z, {
                            className: o,
                            item: !0,
                            XSmall: 12,
                            children: (0, i.jsx)(d.Z, {
                                container: !0,
                                children: (0, i.jsx)(m.Z, {
                                    variant: "h1",
                                    children: u("Heading.Payouts")
                                })
                            })
                        }), r ? (0, i.jsxs)(l.Fragment, {
                            children: [(0, i.jsx)(d.Z, {
                                container: !0,
                                className: s,
                                children: S.TV.map(e => (0, i.jsx)(b.C, {
                                    clickable: !0,
                                    variant: "filled",
                                    label: u("Title.".concat(e)),
                                    color: e === p ? "primary" : "secondary",
                                    onClick: () => h(e)
                                }, e))
                            }), (0, i.jsxs)(d.Z, {
                                container: !0,
                                children: [p === N.Z.Group && (0, i.jsx)(eS, {
                                    organization: t,
                                    disabled: n || !r
                                }), p === N.Z.Experiences && (0, i.jsx)(e0, {
                                    organization: t,
                                    disabled: n || !r
                                })]
                            })]
                        }) : (0, i.jsx)(d.Z, {
                            container: !0,
                            item: !0,
                            XSmall: 12,
                            wrap: "wrap",
                            children: (0, i.jsx)(E.Z, {
                                errorCode: O.WC.FORBIDDEN
                            })
                        })]
                    })
                },
                e4 = (0, c.Zh)(() => {
                    let {
                        organization: e,
                        permissions: t
                    } = (0, p.Z)(), [r, n] = (0, l.useState)(null), [a, o] = (0, l.useState)(null), s = (0, l.useCallback)(async () => {
                        if (null == e ? void 0 : e.groupId) {
                            if ((null == t ? void 0 : t.isOwner) || (null == t ? void 0 : t.canConfigureRevenueDetails) || (null == t ? void 0 : t.canViewRevenueDetails)) {
                                var r, a;
                                let t = await h.Z.getGroupPayoutRestriction(Number(e.groupId));
                                n(null !== (r = t.canUseOneTimePayout) && void 0 !== r && r), o(null !== (a = t.canUseRecurringPayout) && void 0 !== a && a)
                            } else n(!0), o(!0)
                        }
                    }, [e, t]);
                    return (0, l.useEffect)(() => {
                        s()
                    }, [s]), (0, i.jsx)(l.Fragment, {
                        children: e && t && null !== r && null !== a ? (0, i.jsx)(l.Fragment, {
                            children: t.isOwner || t.canConfigureRevenueDetails || t.canViewRevenueDetails ? (0, i.jsx)(eX, {
                                organization: e,
                                permissions: t,
                                canUseOneTimePayout: r,
                                canUseRecurringPayout: a
                            }) : (0, i.jsx)(e2, {
                                organization: e,
                                canUseRecurringPayout: a
                            })
                        }) : (0, i.jsx)(d.Z, {
                            container: !0,
                            justifyContent: "center",
                            children: (0, i.jsx)(u.C, {})
                        })
                    })
                }, [s.Z.Payouts]),
                e5 = r(98748),
                e6 = r(89481);
            let e9 = () => (0, i.jsx)(o.Z, {
                children: (0, i.jsx)(e4, {})
            });
            e9.getPageLayout = e => (0, i.jsx)(e5.Z, {
                rolloutSetting: "enableOrganizationPayouts",
                ixpSetting: e6.Q7.IsOrganizationsPayoutsEnabled,
                children: e
            });
            var e8 = e9
        },
        55946: function(e, t, r) {
            "use strict";
            r.d(t, {
                jc: function() {
                    return n
                }
            });
            var n = {
                User: "User",
                Group: "Group"
            }
        },
        68819: function(e, t, r) {
            "use strict";
            r.d(t, {
                vb: function() {
                    return n
                }
            });
            var n = {
                User: "User",
                Group: "Group",
                Team: "Team"
            }
        },
        65942: function(e, t, r) {
            "use strict";
            r.d(t, {
                AY: function() {
                    return n
                }
            });
            var n = {
                GameCreated: "GameCreated",
                GameName: "GameName",
                LastUpdated: "LastUpdated"
            }
        },
        21820: function(e, t, r) {
            "use strict";
            r.d(t, {
                As: function() {
                    return n
                }
            });
            var n = {
                Asc: "Asc",
                Desc: "Desc"
            }
        }
    },
    function(e) {
        e.O(0, [5232, 4407, 9097, 3086, 1313, 6666, 4389, 6374, 7629, 9615, 7961, 549, 2888, 9774, 179], function() {
            return e(e.s = 99627)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=payouts-e2a4958931884c3c.js.map