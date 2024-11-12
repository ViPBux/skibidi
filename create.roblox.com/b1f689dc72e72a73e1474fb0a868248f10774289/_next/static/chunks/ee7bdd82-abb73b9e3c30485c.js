! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "343f39af-9b61-439b-a589-92f0ff4aa980", t._sentryDebugIdIdentifier = "sentry-dbid-343f39af-9b61-439b-a589-92f0ff4aa980")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5232], {
        61146: function(t, e, i) {
            var s, r, o;
            r = "undefined" != typeof window ? window : this, o = function(t) {
                "use strict";
                var e = {};

                function i(e, i, s, r) {
                    e.hasOwnProperty(i) || (e[i] = r.apply(null, s), "function" == typeof CustomEvent && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                        detail: {
                            path: i,
                            module: e[i]
                        }
                    })))
                }
                return i(e, "Core/Globals.js", [], function() {
                    var e, i;
                    return (i = e || (e = {})).SVG_NS = "http://www.w3.org/2000/svg", i.product = "Highcharts", i.version = "11.4.3", i.win = void 0 !== t ? t : {}, i.doc = i.win.document, i.svg = i.doc && i.doc.createElementNS && !!i.doc.createElementNS(i.SVG_NS, "svg").createSVGRect, i.userAgent = i.win.navigator && i.win.navigator.userAgent || "", i.isChrome = -1 !== i.userAgent.indexOf("Chrome"), i.isFirefox = -1 !== i.userAgent.indexOf("Firefox"), i.isMS = /(edge|msie|trident)/i.test(i.userAgent) && !i.win.opera, i.isSafari = !i.isChrome && -1 !== i.userAgent.indexOf("Safari"), i.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i.userAgent), i.isWebKit = -1 !== i.userAgent.indexOf("AppleWebKit"), i.deg2rad = 2 * Math.PI / 360, i.hasBidiBug = i.isFirefox && 4 > parseInt(i.userAgent.split("Firefox/")[1], 10), i.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], i.noop = function() {}, i.supportsPassiveEvents = function() {
                        let t = !1;
                        if (!i.isMS) {
                            let e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            i.win.addEventListener && i.win.removeEventListener && (i.win.addEventListener("testPassive", i.noop, e), i.win.removeEventListener("testPassive", i.noop, e))
                        }
                        return t
                    }(), i.charts = [], i.composed = [], i.dateFormats = {}, i.seriesTypes = {}, i.symbolSizes = {}, i.chartCount = 0, e
                }), i(e, "Core/Utilities.js", [e["Core/Globals.js"]], function(t) {
                    let e, i, s;
                    let {
                        charts: r,
                        doc: o,
                        win: n
                    } = t;

                    function a(e, i, s, r) {
                        let o = i ? "Highcharts error" : "Highcharts warning";
                        32 === e && (e = `${o}: Deprecated member`);
                        let l = g(e),
                            h = l ? `${o} #${e}: www.highcharts.com/errors/${e}/` : e.toString();
                        if (void 0 !== r) {
                            let t = "";
                            l && (h += "?"), M(r, function(e, i) {
                                t += `
 - ${i}: ${e}`, l && (h += encodeURI(i) + "=" + encodeURI(e))
                            }), h += t
                        }
                        A(t, "displayError", {
                            chart: s,
                            code: e,
                            message: h,
                            params: r
                        }, function() {
                            if (i) throw Error(h);
                            n.console && -1 === a.messages.indexOf(h) && console.warn(h)
                        }), a.messages.push(h)
                    }

                    function l(t, e) {
                        return parseInt(t, e || 10)
                    }

                    function h(t) {
                        return "string" == typeof t
                    }

                    function d(t) {
                        let e = Object.prototype.toString.call(t);
                        return "[object Array]" === e || "[object Array Iterator]" === e
                    }

                    function c(t, e) {
                        return !!t && "object" == typeof t && (!e || !d(t))
                    }

                    function p(t) {
                        return c(t) && "number" == typeof t.nodeType
                    }

                    function u(t) {
                        let e = t && t.constructor;
                        return !!(c(t, !0) && !p(t) && e && e.name && "Object" !== e.name)
                    }

                    function g(t) {
                        return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0
                    }

                    function f(t) {
                        return null != t
                    }

                    function m(t, e, i) {
                        let s;
                        let r = h(e) && !f(i),
                            o = (e, i) => {
                                f(e) ? t.setAttribute(i, e) : r ? (s = t.getAttribute(i)) || "class" !== i || (s = t.getAttribute(i + "Name")) : t.removeAttribute(i)
                            };
                        return h(e) ? o(i, e) : M(e, o), s
                    }

                    function x(t) {
                        return d(t) ? t : [t]
                    }

                    function y(t, e) {
                        let i;
                        for (i in t || (t = {}), e) t[i] = e[i];
                        return t
                    }

                    function b() {
                        let t = arguments,
                            e = t.length;
                        for (let i = 0; i < e; i++) {
                            let e = t[i];
                            if (null != e) return e
                        }
                    }

                    function v(t, e) {
                        y(t.style, e)
                    }

                    function k(t) {
                        return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                    }

                    function S(t, e) {
                        return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14))
                    }(a || (a = {})).messages = [], Math.easeInOutSine = function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    };
                    let C = Array.prototype.find ? function(t, e) {
                        return t.find(e)
                    } : function(t, e) {
                        let i;
                        let s = t.length;
                        for (i = 0; i < s; i++)
                            if (e(t[i], i)) return t[i]
                    };

                    function M(t, e, i) {
                        for (let s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t)
                    }

                    function w(t, e, i) {
                        function s(e, i) {
                            let s = t.removeEventListener;
                            s && s.call(t, e, i, !1)
                        }

                        function r(i) {
                            let r, o;
                            t.nodeName && (e ? (r = {})[e] = !0 : r = i, M(r, function(t, e) {
                                if (i[e])
                                    for (o = i[e].length; o--;) s(e, i[e][o].fn)
                            }))
                        }
                        let o = "function" == typeof t && t.prototype || t;
                        if (Object.hasOwnProperty.call(o, "hcEvents")) {
                            let t = o.hcEvents;
                            if (e) {
                                let o = t[e] || [];
                                i ? (t[e] = o.filter(function(t) {
                                    return i !== t.fn
                                }), s(e, i)) : (r(t), t[e] = [])
                            } else r(t), delete o.hcEvents
                        }
                    }

                    function A(e, i, s, r) {
                        if (s = s || {}, o.createEvent && (e.dispatchEvent || e.fireEvent && e !== t)) {
                            let t = o.createEvent("Events");
                            t.initEvent(i, !0, !0), s = y(t, s), e.dispatchEvent ? e.dispatchEvent(s) : e.fireEvent(i, s)
                        } else if (e.hcEvents) {
                            s.target || y(s, {
                                preventDefault: function() {
                                    s.defaultPrevented = !0
                                },
                                target: e,
                                type: i
                            });
                            let t = [],
                                r = e,
                                o = !1;
                            for (; r.hcEvents;) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[i] && (t.length && (o = !0), t.unshift.apply(t, r.hcEvents[i])), r = Object.getPrototypeOf(r);
                            o && t.sort((t, e) => t.order - e.order), t.forEach(t => {
                                !1 === t.fn.call(e, s) && s.preventDefault()
                            })
                        }
                        r && !s.defaultPrevented && r.call(e, s)
                    }
                    M({
                        map: "map",
                        each: "forEach",
                        grep: "filter",
                        reduce: "reduce",
                        some: "some"
                    }, function(e, i) {
                        t[i] = function(t) {
                            return a(32, !1, void 0, {
                                [`Highcharts.${i}`]: `use Array.${e}`
                            }), Array.prototype[e].apply(t, [].slice.call(arguments, 1))
                        }
                    });
                    let T = (i = Math.random().toString(36).substring(2, 9) + "-", s = 0, function() {
                        return "highcharts-" + (e ? "" : i) + s++
                    });
                    return n.jQuery && (n.jQuery.fn.highcharts = function() {
                        let e = [].slice.call(arguments);
                        if (this[0]) return e[0] ? (new t[h(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]), this) : r[m(this[0], "data-highcharts-chart")]
                    }), {
                        addEvent: function(e, i, s, r = {}) {
                            let o = "function" == typeof e && e.prototype || e;
                            Object.hasOwnProperty.call(o, "hcEvents") || (o.hcEvents = {});
                            let n = o.hcEvents;
                            t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
                            let a = e.addEventListener;
                            a && a.call(e, i, s, !!t.supportsPassiveEvents && {
                                passive: void 0 === r.passive ? -1 !== i.indexOf("touch") : r.passive,
                                capture: !1
                            }), n[i] || (n[i] = []);
                            let l = {
                                fn: s,
                                order: "number" == typeof r.order ? r.order : 1 / 0
                            };
                            return n[i].push(l), n[i].sort((t, e) => t.order - e.order),
                                function() {
                                    w(e, i, s)
                                }
                        },
                        arrayMax: function(t) {
                            let e = t.length,
                                i = t[0];
                            for (; e--;) t[e] > i && (i = t[e]);
                            return i
                        },
                        arrayMin: function(t) {
                            let e = t.length,
                                i = t[0];
                            for (; e--;) t[e] < i && (i = t[e]);
                            return i
                        },
                        attr: m,
                        clamp: function(t, e, i) {
                            return t > e ? t < i ? t : i : e
                        },
                        clearTimeout: function(t) {
                            f(t) && clearTimeout(t)
                        },
                        correctFloat: S,
                        createElement: function(t, e, i, s, r) {
                            let n = o.createElement(t);
                            return e && y(n, e), r && v(n, {
                                padding: "0",
                                border: "none",
                                margin: "0"
                            }), i && v(n, i), s && s.appendChild(n), n
                        },
                        crisp: (t, e = 0, i) => {
                            let s = e % 2 / 2,
                                r = i ? -1 : 1;
                            return (Math.round(t * r - s) + s) * r
                        },
                        css: v,
                        defined: f,
                        destroyObjectProperties: function(t, e, i) {
                            M(t, function(s, r) {
                                s !== e && s ? .destroy && s.destroy(), (s ? .destroy || !i) && delete t[r]
                            })
                        },
                        diffObjects: function(t, e, i, s) {
                            let r = {};
                            return function t(e, r, o, n) {
                                let a = i ? r : e;
                                M(e, function(i, l) {
                                    if (!n && s && s.indexOf(l) > -1 && r[l]) {
                                        i = x(i), o[l] = [];
                                        for (let e = 0; e < Math.max(i.length, r[l].length); e++) r[l][e] && (void 0 === i[e] ? o[l][e] = r[l][e] : (o[l][e] = {}, t(i[e], r[l][e], o[l][e], n + 1)))
                                    } else c(i, !0) && !i.nodeType ? (o[l] = d(i) ? [] : {}, t(i, r[l] || {}, o[l], n + 1), 0 !== Object.keys(o[l]).length || "colorAxis" === l && 0 === n || delete o[l]) : (e[l] !== r[l] || l in e && !(l in r)) && "__proto__" !== l && "constructor" !== l && (o[l] = a[l])
                                })
                            }(t, e, r, 0), r
                        },
                        discardElement: function(t) {
                            t && t.parentElement && t.parentElement.removeChild(t)
                        },
                        erase: function(t, e) {
                            let i = t.length;
                            for (; i--;)
                                if (t[i] === e) {
                                    t.splice(i, 1);
                                    break
                                }
                        },
                        error: a,
                        extend: y,
                        extendClass: function(t, e) {
                            let i = function() {};
                            return i.prototype = new t, y(i.prototype, e), i
                        },
                        find: C,
                        fireEvent: A,
                        getClosestDistance: function(t, e) {
                            let i, s, r, o;
                            let n = !e;
                            return t.forEach(t => {
                                if (t.length > 1)
                                    for (o = s = t.length - 1; o > 0; o--)(r = t[o] - t[o - 1]) < 0 && !n ? (e ? .(), e = void 0) : r && (void 0 === i || r < i) && (i = r)
                            }), i
                        },
                        getMagnitude: k,
                        getNestedProperty: function(t, e) {
                            let i = t.split(".");
                            for (; i.length && f(e);) {
                                let t = i.shift();
                                if (void 0 === t || "__proto__" === t) return;
                                if ("this" === t) {
                                    let t;
                                    return c(e) && (t = e["@this"]), t ? ? e
                                }
                                let s = e[t];
                                if (!f(s) || "function" == typeof s || "number" == typeof s.nodeType || s === n) return;
                                e = s
                            }
                            return e
                        },
                        getStyle: function t(e, i, s) {
                            let r;
                            if ("width" === i) {
                                let i = Math.min(e.offsetWidth, e.scrollWidth),
                                    s = e.getBoundingClientRect && e.getBoundingClientRect().width;
                                return s < i && s >= i - 1 && (i = Math.floor(s)), Math.max(0, i - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0))
                            }
                            if ("height" === i) return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (t(e, "padding-top", !0) || 0) - (t(e, "padding-bottom", !0) || 0));
                            let o = n.getComputedStyle(e, void 0);
                            return o && (r = o.getPropertyValue(i), b(s, "opacity" !== i) && (r = l(r))), r
                        },
                        inArray: function(t, e, i) {
                            return a(32, !1, void 0, {
                                "Highcharts.inArray": "use Array.indexOf"
                            }), e.indexOf(t, i)
                        },
                        insertItem: function(t, e) {
                            let i;
                            let s = t.options.index,
                                r = e.length;
                            for (i = t.options.isInternal ? r : 0; i < r + 1; i++)
                                if (!e[i] || g(s) && s < b(e[i].options.index, e[i]._i) || e[i].options.isInternal) {
                                    e.splice(i, 0, t);
                                    break
                                }
                            return i
                        },
                        isArray: d,
                        isClass: u,
                        isDOMElement: p,
                        isFunction: function(t) {
                            return "function" == typeof t
                        },
                        isNumber: g,
                        isObject: c,
                        isString: h,
                        keys: function(t) {
                            return a(32, !1, void 0, {
                                "Highcharts.keys": "use Object.keys"
                            }), Object.keys(t)
                        },
                        merge: function() {
                            let t, e = arguments,
                                i = {},
                                s = function(t, e) {
                                    return "object" != typeof t && (t = {}), M(e, function(i, r) {
                                        "__proto__" !== r && "constructor" !== r && (!c(i, !0) || u(i) || p(i) ? t[r] = e[r] : t[r] = s(t[r] || {}, i))
                                    }), t
                                };
                            !0 === e[0] && (i = e[1], e = Array.prototype.slice.call(e, 2));
                            let r = e.length;
                            for (t = 0; t < r; t++) i = s(i, e[t]);
                            return i
                        },
                        normalizeTickInterval: function(t, e, i, s, r) {
                            let o, n = t;
                            i = b(i, k(t));
                            let a = t / i;
                            for (!e && (e = r ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = e.filter(function(t) {
                                    return t % 1 == 0
                                }) : i <= .1 && (e = [1 / i]))), o = 0; o < e.length && (n = e[o], (!r || !(n * i >= t)) && (r || !(a <= (e[o] + (e[o + 1] || e[o])) / 2))); o++);
                            return S(n * i, -Math.round(Math.log(.001) / Math.LN10))
                        },
                        objectEach: M,
                        offset: function(t) {
                            let e = o.documentElement,
                                i = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                                    top: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            return {
                                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                                width: i.width,
                                height: i.height
                            }
                        },
                        pad: function(t, e, i) {
                            return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
                        },
                        pick: b,
                        pInt: l,
                        pushUnique: function(t, e) {
                            return 0 > t.indexOf(e) && !!t.push(e)
                        },
                        relativeLength: function(t, e, i) {
                            return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                        },
                        removeEvent: w,
                        replaceNested: function(t, ...e) {
                            let i, s;
                            do
                                for (s of (i = t, e)) t = t.replace(s[0], s[1]); while (t !== i);
                            return t
                        },
                        splat: x,
                        stableSort: function(t, e) {
                            let i, s;
                            let r = t.length;
                            for (s = 0; s < r; s++) t[s].safeI = s;
                            for (t.sort(function(t, s) {
                                    return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
                                }), s = 0; s < r; s++) delete t[s].safeI
                        },
                        syncTimeout: function(t, e, i) {
                            return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1)
                        },
                        timeUnits: {
                            millisecond: 1,
                            second: 1e3,
                            minute: 6e4,
                            hour: 36e5,
                            day: 864e5,
                            week: 6048e5,
                            month: 24192e5,
                            year: 314496e5
                        },
                        uniqueKey: T,
                        useSerialIds: function(t) {
                            return e = b(t, e)
                        },
                        wrap: function(t, e, i) {
                            let s = t[e];
                            t[e] = function() {
                                let t = arguments,
                                    e = this;
                                return i.apply(this, [function() {
                                    return s.apply(e, arguments.length ? arguments : t)
                                }].concat([].slice.call(arguments)))
                            }
                        }
                    }
                }), i(e, "Core/Chart/ChartDefaults.js", [], function() {
                    return {
                        alignThresholds: !1,
                        panning: {
                            enabled: !1,
                            type: "x"
                        },
                        styledMode: !1,
                        borderRadius: 0,
                        colorCount: 10,
                        allowMutatingData: !0,
                        ignoreHiddenSeries: !0,
                        spacing: [10, 10, 15, 10],
                        resetZoomButton: {
                            theme: {},
                            position: {}
                        },
                        reflow: !0,
                        type: "line",
                        zooming: {
                            singleTouch: !1,
                            resetButton: {
                                theme: {
                                    zIndex: 6
                                },
                                position: {
                                    align: "right",
                                    x: -10,
                                    y: 10
                                }
                            }
                        },
                        width: null,
                        height: null,
                        borderColor: "#334eff",
                        backgroundColor: "#ffffff",
                        plotBorderColor: "#cccccc"
                    }
                }), i(e, "Core/Color/Palettes.js", [], function() {
                    return {
                        colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"]
                    }
                }), i(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        win: i
                    } = t, {
                        defined: s,
                        error: r,
                        extend: o,
                        isNumber: n,
                        isObject: a,
                        merge: l,
                        objectEach: h,
                        pad: d,
                        pick: c,
                        splat: p,
                        timeUnits: u
                    } = e, g = t.isSafari && i.Intl && i.Intl.DateTimeFormat.prototype.formatRange, f = t.isSafari && i.Intl && !i.Intl.DateTimeFormat.prototype.formatRange;
                    class m {
                        constructor(t) {
                            this.options = {}, this.useUTC = !1, this.variableTimezone = !1, this.Date = i.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t)
                        }
                        get(t, e) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                let i = e.getTime(),
                                    s = i - this.getTimezoneOffset(e);
                                e.setTime(s);
                                let r = e["getUTC" + t]();
                                return e.setTime(i), r
                            }
                            return this.useUTC ? e["getUTC" + t]() : e["get" + t]()
                        }
                        set(t, e, i) {
                            if (this.variableTimezone || this.timezoneOffset) {
                                if ("Milliseconds" === t || "Seconds" === t || "Minutes" === t && this.getTimezoneOffset(e) % 36e5 == 0) return e["setUTC" + t](i);
                                let s = this.getTimezoneOffset(e),
                                    r = e.getTime() - s;
                                e.setTime(r), e["setUTC" + t](i);
                                let o = this.getTimezoneOffset(e);
                                return r = e.getTime() + o, e.setTime(r)
                            }
                            return this.useUTC || g && "FullYear" === t ? e["setUTC" + t](i) : e["set" + t](i)
                        }
                        update(t = {}) {
                            let e = c(t.useUTC, !0);
                            this.options = t = l(!0, this.options, t), this.Date = t.Date || i.Date || Date, this.useUTC = e, this.timezoneOffset = e && t.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e && !!(t.getTimezoneOffset || t.timezone)
                        }
                        makeTime(t, e, i, s, r, o) {
                            let n, a, l;
                            return this.useUTC ? (n = this.Date.UTC.apply(0, arguments), a = this.getTimezoneOffset(n), n += a, a !== (l = this.getTimezoneOffset(n)) ? n += l - a : a - 36e5 !== this.getTimezoneOffset(n - 36e5) || f || (n -= 36e5)) : n = new this.Date(t, e, c(i, 1), c(s, 0), c(r, 0), c(o, 0)).getTime(), n
                        }
                        timezoneOffsetFunction() {
                            let t = this,
                                e = this.options,
                                i = e.getTimezoneOffset;
                            return this.useUTC ? e.timezone ? t => {
                                try {
                                    let i = `shortOffset,${e.timezone||""}`,
                                        [s, r, o, a, l = 0] = (m.formatCache[i] = m.formatCache[i] || Intl.DateTimeFormat("en", {
                                            timeZone: e.timezone,
                                            timeZoneName: "shortOffset"
                                        })).format(t).split(/(GMT|:)/).map(Number),
                                        h = -(36e5 * (o + l / 60));
                                    if (n(h)) return h
                                } catch (t) {
                                    r(34)
                                }
                                return 0
                            } : this.useUTC && i ? t => 6e4 * i(t.valueOf()) : () => 6e4 * (t.timezoneOffset || 0) : t => 6e4 * new Date(t.toString()).getTimezoneOffset()
                        }
                        dateFormat(e, i, r) {
                            if (!s(i) || isNaN(i)) return t.defaultOptions.lang && t.defaultOptions.lang.invalidDate || "";
                            e = c(e, "%Y-%m-%d %H:%M:%S");
                            let n = this,
                                a = new this.Date(i),
                                l = this.get("Hours", a),
                                p = this.get("Day", a),
                                u = this.get("Date", a),
                                g = this.get("Month", a),
                                f = this.get("FullYear", a),
                                m = t.defaultOptions.lang,
                                x = m && m.weekdays,
                                y = m && m.shortWeekdays;
                            return h(o({
                                a: y ? y[p] : x[p].substr(0, 3),
                                A: x[p],
                                d: d(u),
                                e: d(u, 2, " "),
                                w: p,
                                b: m.shortMonths[g],
                                B: m.months[g],
                                m: d(g + 1),
                                o: g + 1,
                                y: f.toString().substr(2, 2),
                                Y: f,
                                H: d(l),
                                k: l,
                                I: d(l % 12 || 12),
                                l: l % 12 || 12,
                                M: d(this.get("Minutes", a)),
                                p: l < 12 ? "AM" : "PM",
                                P: l < 12 ? "am" : "pm",
                                S: d(this.get("Seconds", a)),
                                L: d(Math.floor(i % 1e3), 3)
                            }, t.dateFormats), function(t, s) {
                                for (; - 1 !== e.indexOf("%" + s);) e = e.replace("%" + s, "function" == typeof t ? t.call(n, i) : t)
                            }), r ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                        }
                        resolveDTLFormat(t) {
                            return a(t, !0) ? t : {
                                main: (t = p(t))[0],
                                from: t[1],
                                to: t[2]
                            }
                        }
                        getTimeTicks(t, e, i, r) {
                            let n, a, l, h;
                            let d = this,
                                p = d.Date,
                                g = [],
                                f = {},
                                m = new p(e),
                                x = t.unitRange,
                                y = t.count || 1;
                            if (r = c(r, 1), s(e)) {
                                d.set("Milliseconds", m, x >= u.second ? 0 : y * Math.floor(d.get("Milliseconds", m) / y)), x >= u.second && d.set("Seconds", m, x >= u.minute ? 0 : y * Math.floor(d.get("Seconds", m) / y)), x >= u.minute && d.set("Minutes", m, x >= u.hour ? 0 : y * Math.floor(d.get("Minutes", m) / y)), x >= u.hour && d.set("Hours", m, x >= u.day ? 0 : y * Math.floor(d.get("Hours", m) / y)), x >= u.day && d.set("Date", m, x >= u.month ? 1 : Math.max(1, y * Math.floor(d.get("Date", m) / y))), x >= u.month && (d.set("Month", m, x >= u.year ? 0 : y * Math.floor(d.get("Month", m) / y)), a = d.get("FullYear", m)), x >= u.year && (a -= a % y, d.set("FullYear", m, a)), x === u.week && (h = d.get("Day", m), d.set("Date", m, d.get("Date", m) - h + r + (h < r ? -7 : 0))), a = d.get("FullYear", m);
                                let t = d.get("Month", m),
                                    o = d.get("Date", m),
                                    c = d.get("Hours", m);
                                e = m.getTime(), (d.variableTimezone || !d.useUTC) && s(i) && (l = i - e > 4 * u.month || d.getTimezoneOffset(e) !== d.getTimezoneOffset(i));
                                let p = m.getTime();
                                for (n = 1; p < i;) g.push(p), x === u.year ? p = d.makeTime(a + n * y, 0) : x === u.month ? p = d.makeTime(a, t + n * y) : l && (x === u.day || x === u.week) ? p = d.makeTime(a, t, o + n * y * (x === u.day ? 1 : 7)) : l && x === u.hour && y > 1 ? p = d.makeTime(a, t, o, c + n * y) : p += x * y, n++;
                                g.push(p), x <= u.hour && g.length < 1e4 && g.forEach(function(t) {
                                    t % 18e5 == 0 && "000000000" === d.dateFormat("%H%M%S%L", t) && (f[t] = "day")
                                })
                            }
                            return g.info = o(t, {
                                higherRanks: f,
                                totalRange: x * y
                            }), g
                        }
                        getDateFormat(t, e, i, s) {
                            let r = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                                o = "01-01 00:00:00.000",
                                n = {
                                    millisecond: 15,
                                    second: 12,
                                    minute: 9,
                                    hour: 6,
                                    day: 3
                                },
                                a = "millisecond",
                                l = a;
                            for (a in u) {
                                if (t === u.week && +this.dateFormat("%w", e) === i && r.substr(6) === o.substr(6)) {
                                    a = "week";
                                    break
                                }
                                if (u[a] > t) {
                                    a = l;
                                    break
                                }
                                if (n[a] && r.substr(n[a]) !== o.substr(n[a])) break;
                                "week" !== a && (l = a)
                            }
                            return this.resolveDTLFormat(s[a]).main
                        }
                    }
                    return m.formatCache = {}, m
                }), i(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function(t, e, i, s, r) {
                    let {
                        isTouchDevice: o
                    } = e, {
                        fireEvent: n,
                        merge: a
                    } = r, l = {
                        colors: i.colors,
                        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                        lang: {
                            loading: "Loading...",
                            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            decimalPoint: ".",
                            numericSymbols: ["k", "M", "G", "T", "P", "E"],
                            resetZoom: "Reset zoom",
                            resetZoomTitle: "Reset zoom level 1:1",
                            thousandsSep: " "
                        },
                        global: {
                            buttonTheme: {
                                fill: "#f7f7f7",
                                padding: 8,
                                r: 2,
                                stroke: "#cccccc",
                                "stroke-width": 1,
                                style: {
                                    color: "#333333",
                                    cursor: "pointer",
                                    fontSize: "0.8em",
                                    fontWeight: "normal"
                                },
                                states: {
                                    hover: {
                                        fill: "#e6e6e6"
                                    },
                                    select: {
                                        fill: "#e6e9ff",
                                        style: {
                                            color: "#000000",
                                            fontWeight: "bold"
                                        }
                                    },
                                    disabled: {
                                        style: {
                                            color: "#cccccc"
                                        }
                                    }
                                }
                            }
                        },
                        time: {
                            Date: void 0,
                            getTimezoneOffset: void 0,
                            timezone: void 0,
                            timezoneOffset: 0,
                            useUTC: !0
                        },
                        chart: t,
                        title: {
                            style: {
                                color: "#333333",
                                fontWeight: "bold"
                            },
                            text: "Chart title",
                            align: "center",
                            margin: 15,
                            widthAdjust: -44
                        },
                        subtitle: {
                            style: {
                                color: "#666666",
                                fontSize: "0.8em"
                            },
                            text: "",
                            align: "center",
                            widthAdjust: -44
                        },
                        caption: {
                            margin: 15,
                            style: {
                                color: "#666666",
                                fontSize: "0.8em"
                            },
                            text: "",
                            align: "left",
                            verticalAlign: "bottom"
                        },
                        plotOptions: {},
                        legend: {
                            enabled: !0,
                            align: "center",
                            alignColumns: !0,
                            className: "highcharts-no-tooltip",
                            layout: "horizontal",
                            itemMarginBottom: 2,
                            itemMarginTop: 2,
                            labelFormatter: function() {
                                return this.name
                            },
                            borderColor: "#999999",
                            borderRadius: 0,
                            navigation: {
                                style: {
                                    fontSize: "0.8em"
                                },
                                activeColor: "#0022ff",
                                inactiveColor: "#cccccc"
                            },
                            itemStyle: {
                                color: "#333333",
                                cursor: "pointer",
                                fontSize: "0.8em",
                                textDecoration: "none",
                                textOverflow: "ellipsis"
                            },
                            itemHoverStyle: {
                                color: "#000000"
                            },
                            itemHiddenStyle: {
                                color: "#666666",
                                textDecoration: "line-through"
                            },
                            shadow: !1,
                            itemCheckboxStyle: {
                                position: "absolute",
                                width: "13px",
                                height: "13px"
                            },
                            squareSymbol: !0,
                            symbolPadding: 5,
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0,
                            title: {
                                style: {
                                    fontSize: "0.8em",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        loading: {
                            labelStyle: {
                                fontWeight: "bold",
                                position: "relative",
                                top: "45%"
                            },
                            style: {
                                position: "absolute",
                                backgroundColor: "#ffffff",
                                opacity: .5,
                                textAlign: "center"
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            animation: {
                                duration: 300,
                                easing: t => Math.sqrt(1 - Math.pow(t - 1, 2))
                            },
                            borderRadius: 3,
                            dateTimeLabelFormats: {
                                millisecond: "%A, %e %b, %H:%M:%S.%L",
                                second: "%A, %e %b, %H:%M:%S",
                                minute: "%A, %e %b, %H:%M",
                                hour: "%A, %e %b, %H:%M",
                                day: "%A, %e %b %Y",
                                week: "Week from %A, %e %b %Y",
                                month: "%B %Y",
                                year: "%Y"
                            },
                            footerFormat: "",
                            headerShape: "callout",
                            hideDelay: 500,
                            padding: 8,
                            shape: "callout",
                            shared: !1,
                            snap: o ? 25 : 10,
                            headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
                            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                            backgroundColor: "#ffffff",
                            borderWidth: void 0,
                            shadow: !0,
                            stickOnContact: !1,
                            style: {
                                color: "#333333",
                                cursor: "default",
                                fontSize: "0.8em"
                            },
                            useHTML: !1
                        },
                        credits: {
                            enabled: !0,
                            href: "https://www.highcharts.com?credits",
                            position: {
                                align: "right",
                                x: -10,
                                verticalAlign: "bottom",
                                y: -5
                            },
                            style: {
                                cursor: "pointer",
                                color: "#999999",
                                fontSize: "0.6em"
                            },
                            text: "Highcharts.com"
                        }
                    };
                    l.chart.styledMode = !1;
                    let h = new s(l.time);
                    return {
                        defaultOptions: l,
                        defaultTime: h,
                        getOptions: function() {
                            return l
                        },
                        setOptions: function(t) {
                            return n(e, "setOptions", {
                                options: t
                            }), a(!0, l, t), (t.time || t.global) && (e.time ? e.time.update(a(l.global, l.time, t.global, t.time)) : e.time = h), l
                        }
                    }
                }), i(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        isNumber: i,
                        merge: s,
                        pInt: r
                    } = e;
                    class o {
                        static parse(t) {
                            return t ? new o(t) : o.None
                        }
                        constructor(e) {
                            let i, s, r, n;
                            this.rgba = [NaN, NaN, NaN, NaN], this.input = e;
                            let a = t.Color;
                            if (a && a !== o) return new a(e);
                            if ("object" == typeof e && void 0 !== e.stops) this.stops = e.stops.map(t => new o(t[1]));
                            else if ("string" == typeof e) {
                                if (this.input = e = o.names[e.toLowerCase()] || e, "#" === e.charAt(0)) {
                                    let t = e.length,
                                        i = parseInt(e.substr(1), 16);
                                    7 === t ? s = [(16711680 & i) >> 16, (65280 & i) >> 8, 255 & i, 1] : 4 === t && (s = [(3840 & i) >> 4 | (3840 & i) >> 8, (240 & i) >> 4 | 240 & i, (15 & i) << 4 | 15 & i, 1])
                                }
                                if (!s)
                                    for (r = o.parsers.length; r-- && !s;)(i = (n = o.parsers[r]).regex.exec(e)) && (s = n.parse(i))
                            }
                            s && (this.rgba = s)
                        }
                        get(t) {
                            let e = this.input,
                                r = this.rgba;
                            if ("object" == typeof e && void 0 !== this.stops) {
                                let i = s(e);
                                return i.stops = [].slice.call(i.stops), this.stops.forEach((e, s) => {
                                    i.stops[s] = [i.stops[s][0], e.get(t)]
                                }), i
                            }
                            return r && i(r[0]) ? "rgb" !== t && (t || 1 !== r[3]) ? "a" === t ? `${r[3]}` : "rgba(" + r.join(",") + ")" : "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : e
                        }
                        brighten(t) {
                            let e = this.rgba;
                            if (this.stops) this.stops.forEach(function(e) {
                                e.brighten(t)
                            });
                            else if (i(t) && 0 !== t)
                                for (let i = 0; i < 3; i++) e[i] += r(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
                            return this
                        }
                        setOpacity(t) {
                            return this.rgba[3] = t, this
                        }
                        tweenTo(t, e) {
                            let s = this.rgba,
                                r = t.rgba;
                            if (!i(s[0]) || !i(r[0])) return t.input || "none";
                            let o = 1 !== r[3] || 1 !== s[3];
                            return (o ? "rgba(" : "rgb(") + Math.round(r[0] + (s[0] - r[0]) * (1 - e)) + "," + Math.round(r[1] + (s[1] - r[1]) * (1 - e)) + "," + Math.round(r[2] + (s[2] - r[2]) * (1 - e)) + (o ? "," + (r[3] + (s[3] - r[3]) * (1 - e)) : "") + ")"
                        }
                    }
                    return o.names = {
                        white: "#ffffff",
                        black: "#000000"
                    }, o.parsers = [{
                        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                        parse: function(t) {
                            return [r(t[1]), r(t[2]), r(t[3]), parseFloat(t[4], 10)]
                        }
                    }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                        parse: function(t) {
                            return [r(t[1]), r(t[2]), r(t[3]), 1]
                        }
                    }], o.None = new o(""), o
                }), i(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        parse: s
                    } = t, {
                        win: r
                    } = e, {
                        isNumber: o,
                        objectEach: n
                    } = i;
                    class a {
                        constructor(t, e, i) {
                            this.pos = NaN, this.options = e, this.elem = t, this.prop = i
                        }
                        dSetter() {
                            let t = this.paths,
                                e = t && t[0],
                                i = t && t[1],
                                s = this.now || 0,
                                r = [];
                            if (1 !== s && e && i) {
                                if (e.length === i.length && s < 1)
                                    for (let t = 0; t < i.length; t++) {
                                        let n = e[t],
                                            a = i[t],
                                            l = [];
                                        for (let t = 0; t < a.length; t++) {
                                            let e = n[t],
                                                i = a[t];
                                            o(e) && o(i) && !("A" === a[0] && (4 === t || 5 === t)) ? l[t] = e + s * (i - e) : l[t] = i
                                        }
                                        r.push(l)
                                    } else r = i
                            } else r = this.toD || [];
                            this.elem.attr("d", r, void 0, !0)
                        }
                        update() {
                            let t = this.elem,
                                e = this.prop,
                                i = this.now,
                                s = this.options.step;
                            this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
                        }
                        run(t, e, i) {
                            let s = this,
                                o = s.options,
                                n = function(t) {
                                    return !n.stopped && s.step(t)
                                },
                                l = r.requestAnimationFrame || function(t) {
                                    setTimeout(t, 13)
                                },
                                h = function() {
                                    for (let t = 0; t < a.timers.length; t++) a.timers[t]() || a.timers.splice(t--, 1);
                                    a.timers.length && l(h)
                                };
                            t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, n.elem = this.elem, n.prop = this.prop, n() && 1 === a.timers.push(n) && l(h)) : (delete o.curAnim[this.prop], o.complete && 0 === Object.keys(o.curAnim).length && o.complete.call(this.elem))
                        }
                        step(t) {
                            let e, i;
                            let s = +new Date,
                                r = this.options,
                                o = this.elem,
                                a = r.complete,
                                l = r.duration,
                                h = r.curAnim;
                            return o.attr && !o.element ? e = !1 : t || s >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = !0, i = !0, n(h, function(t) {
                                !0 !== t && (i = !1)
                            }), i && a && a.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
                        }
                        initPath(t, e, i) {
                            let s = t.startX,
                                r = t.endX,
                                n = i.slice(),
                                a = t.isArea,
                                l = a ? 2 : 1,
                                h, d, c, p, u = e && e.slice();
                            if (!u) return [n, n];

                            function g(t, e) {
                                for (; t.length < d;) {
                                    let i = t[0],
                                        s = e[d - t.length];
                                    if (s && "M" === i[0] && ("C" === s[0] ? t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : t[0] = ["L", i[1], i[2]]), t.unshift(i), a) {
                                        let e = t.pop();
                                        t.push(t[t.length - 1], e)
                                    }
                                }
                            }

                            function f(t) {
                                for (; t.length < d;) {
                                    let e = t[Math.floor(t.length / l) - 1].slice();
                                    if ("C" === e[0] && (e[1] = e[5], e[2] = e[6]), a) {
                                        let i = t[Math.floor(t.length / l)].slice();
                                        t.splice(t.length / 2, 0, e, i)
                                    } else t.push(e)
                                }
                            }
                            if (s && r && r.length) {
                                for (c = 0; c < s.length; c++) {
                                    if (s[c] === r[0]) {
                                        h = c;
                                        break
                                    }
                                    if (s[0] === r[r.length - s.length + c]) {
                                        h = c, p = !0;
                                        break
                                    }
                                    if (s[s.length - 1] === r[r.length - s.length + c]) {
                                        h = s.length - c;
                                        break
                                    }
                                }
                                void 0 === h && (u = [])
                            }
                            return u.length && o(h) && (d = n.length + h * l, p ? (g(u, n), f(n)) : (g(n, u), f(u))), [u, n]
                        }
                        fillSetter() {
                            a.prototype.strokeSetter.apply(this, arguments)
                        }
                        strokeSetter() {
                            this.elem.attr(this.prop, s(this.start).tweenTo(s(this.end), this.pos), void 0, !0)
                        }
                    }
                    return a.timers = [], a
                }), i(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        defined: i,
                        getStyle: s,
                        isArray: r,
                        isNumber: o,
                        isObject: n,
                        merge: a,
                        objectEach: l,
                        pick: h
                    } = e;

                    function d(t) {
                        return n(t) ? a({
                            duration: 500,
                            defer: 0
                        }, t) : {
                            duration: t ? 500 : 0,
                            defer: 0
                        }
                    }

                    function c(e, i) {
                        let s = t.timers.length;
                        for (; s--;) t.timers[s].elem !== e || i && i !== t.timers[s].prop || (t.timers[s].stopped = !0)
                    }
                    return {
                        animate: function(e, i, h) {
                            let d, p = "",
                                u, g, f;
                            n(h) || (f = arguments, h = {
                                duration: f[2],
                                easing: f[3],
                                complete: f[4]
                            }), o(h.duration) || (h.duration = 400), h.easing = "function" == typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine, h.curAnim = a(i), l(i, function(o, n) {
                                c(e, n), g = new t(e, h, n), u = void 0, "d" === n && r(i.d) ? (g.paths = g.initPath(e, e.pathArray, i.d), g.toD = i.d, d = 0, u = 1) : e.attr ? d = e.attr(n) : (d = parseFloat(s(e, n)) || 0, "opacity" !== n && (p = "px")), u || (u = o), "string" == typeof u && u.match("px") && (u = u.replace(/px/g, "")), g.run(d, u, p)
                            })
                        },
                        animObject: d,
                        getDeferredAnimation: function(t, e, s) {
                            let r = d(e),
                                o = s ? [s] : t.series,
                                a = 0,
                                l = 0;
                            return o.forEach(t => {
                                let s = d(t.options.animation);
                                a = n(e) && i(e.defer) ? r.defer : Math.max(a, s.duration + s.defer), l = Math.min(r.duration, s.duration)
                            }), t.renderer.forExport && (a = 0), {
                                defer: Math.max(0, a - l),
                                duration: Math.min(a, l)
                            }
                        },
                        setAnimation: function(t, e) {
                            e.renderer.globalAnimation = h(t, e.options.chart.animation, !0)
                        },
                        stop: c
                    }
                }), i(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        SVG_NS: i,
                        win: s
                    } = t, {
                        attr: r,
                        createElement: o,
                        css: n,
                        error: a,
                        isFunction: l,
                        isString: h,
                        objectEach: d,
                        splat: c
                    } = e, {
                        trustedTypes: p
                    } = s, u = p && l(p.createPolicy) && p.createPolicy("highcharts", {
                        createHTML: t => t
                    }), g = u ? u.createHTML("") : "", f = function() {
                        try {
                            return !!new DOMParser().parseFromString(g, "text/html")
                        } catch (t) {
                            return !1
                        }
                    }();
                    class m {
                        static filterUserAttributes(t) {
                            return d(t, (e, i) => {
                                let s = !0; - 1 === m.allowedAttributes.indexOf(i) && (s = !1), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) && (s = h(e) && m.allowedReferences.some(t => 0 === e.indexOf(t))), s || (a(33, !1, void 0, {
                                    "Invalid attribute in config": `${i}`
                                }), delete t[i]), h(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"))
                            }), t
                        }
                        static parseStyle(t) {
                            return t.split(";").reduce((t, e) => {
                                let i = e.split(":").map(t => t.trim()),
                                    s = i.shift();
                                return s && i.length && (t[s.replace(/-([a-z])/g, t => t[1].toUpperCase())] = i.join(":")), t
                            }, {})
                        }
                        static setElementHTML(t, e) {
                            t.innerHTML = m.emptyHTML, e && new m(e).addToDOM(t)
                        }
                        constructor(t) {
                            this.nodes = "string" == typeof t ? this.parseMarkup(t) : t
                        }
                        addToDOM(e) {
                            return function e(s, o) {
                                let l;
                                return c(s).forEach(function(s) {
                                    let h;
                                    let c = s.tagName,
                                        p = s.textContent ? t.doc.createTextNode(s.textContent) : void 0,
                                        u = m.bypassHTMLFiltering;
                                    if (c) {
                                        if ("#text" === c) h = p;
                                        else if (-1 !== m.allowedTags.indexOf(c) || u) {
                                            let a = "svg" === c ? i : o.namespaceURI || i,
                                                l = t.doc.createElementNS(a, c),
                                                g = s.attributes || {};
                                            d(s, function(t, e) {
                                                "tagName" !== e && "attributes" !== e && "children" !== e && "style" !== e && "textContent" !== e && (g[e] = t)
                                            }), r(l, u ? g : m.filterUserAttributes(g)), s.style && n(l, s.style), p && l.appendChild(p), e(s.children || [], l), h = l
                                        } else a(33, !1, void 0, {
                                            "Invalid tagName in config": c
                                        })
                                    }
                                    h && o.appendChild(h), l = h
                                }), l
                            }(this.nodes, e)
                        }
                        parseMarkup(t) {
                            let e;
                            let i = [];
                            if (t = t.trim().replace(/ style=(["'])/g, " data-style=$1"), f) e = new DOMParser().parseFromString(u ? u.createHTML(t) : t, "text/html");
                            else {
                                let i = o("div");
                                i.innerHTML = t, e = {
                                    body: i
                                }
                            }
                            let s = (t, e) => {
                                let i = t.nodeName.toLowerCase(),
                                    r = {
                                        tagName: i
                                    };
                                "#text" === i && (r.textContent = t.textContent || "");
                                let o = t.attributes;
                                if (o) {
                                    let t = {};
                                    [].forEach.call(o, e => {
                                        "data-style" === e.name ? r.style = m.parseStyle(e.value) : t[e.name] = e.value
                                    }), r.attributes = t
                                }
                                if (t.childNodes.length) {
                                    let e = [];
                                    [].forEach.call(t.childNodes, t => {
                                        s(t, e)
                                    }), e.length && (r.children = e)
                                }
                                e.push(r)
                            };
                            return [].forEach.call(e.body.childNodes, t => s(t, i)), i
                        }
                    }
                    return m.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "markerHeight", "markerWidth", "offset", "opacity", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], m.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], m.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feDropShadow", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], m.emptyHTML = g, m.bypassHTMLFiltering = !1, m
                }), i(e, "Core/Templating.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        defaultOptions: i,
                        defaultTime: s
                    } = t, {
                        extend: r,
                        getNestedProperty: o,
                        isArray: n,
                        isNumber: a,
                        isObject: l,
                        pick: h,
                        pInt: d
                    } = e, c = {
                        add: (t, e) => t + e,
                        divide: (t, e) => 0 !== e ? t / e : "",
                        eq: (t, e) => t == e,
                        each: function(t) {
                            let e = arguments[arguments.length - 1];
                            return !!n(t) && t.map((i, s) => p(e.body, r(l(i) ? i : {
                                "@this": i
                            }, {
                                "@index": s,
                                "@first": 0 === s,
                                "@last": s === t.length - 1
                            }))).join("")
                        },
                        ge: (t, e) => t >= e,
                        gt: (t, e) => t > e,
                        if: t => !!t,
                        le: (t, e) => t <= e,
                        lt: (t, e) => t < e,
                        multiply: (t, e) => t * e,
                        ne: (t, e) => t != e,
                        subtract: (t, e) => t - e,
                        unless: t => !t
                    };

                    function p(t = "", e, r) {
                        let n = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g,
                            a = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g,
                            l = [],
                            d = /f$/,
                            g = /\.([0-9])/,
                            f = i.lang,
                            m = r && r.time || s,
                            x = r && r.numberFormatter || u,
                            y = (t = "") => {
                                let i;
                                return "true" === t || "false" !== t && ((i = Number(t)).toString() === t ? i : o(t, e))
                            },
                            b, v, k = 0,
                            S;
                        for (; null !== (b = n.exec(t));) {
                            let i = a.exec(b[1]);
                            i && (b = i, S = !0), v && v.isBlock || (v = {
                                ctx: e,
                                expression: b[1],
                                find: b[0],
                                isBlock: "#" === b[1].charAt(0),
                                start: b.index,
                                startInner: b.index + b[0].length,
                                length: b[0].length
                            });
                            let s = b[1].split(" ")[0].replace("#", "");
                            c[s] && (v.isBlock && s === v.fn && k++, v.fn || (v.fn = s));
                            let r = "else" === b[1];
                            if (v.isBlock && v.fn && (b[1] === `/${v.fn}` || r)) {
                                if (k) !r && k--;
                                else {
                                    let e = v.startInner,
                                        i = t.substr(e, b.index - e);
                                    void 0 === v.body ? (v.body = i, v.startInner = b.index + b[0].length) : v.elseBody = i, v.find += i + b[0], r || (l.push(v), v = void 0)
                                }
                            } else v.isBlock || l.push(v);
                            if (i && !v ? .isBlock) break
                        }
                        return l.forEach(i => {
                            let s, o;
                            let {
                                body: n,
                                elseBody: a,
                                expression: l,
                                fn: u
                            } = i;
                            if (u) {
                                let t = [i],
                                    h = l.split(" ");
                                for (o = c[u].length; o--;) t.unshift(y(h[o + 1]));
                                s = c[u].apply(e, t), i.isBlock && "boolean" == typeof s && (s = p(s ? n : a, e, r))
                            } else {
                                let t = l.split(":");
                                if (s = y(t.shift() || ""), t.length && "number" == typeof s) {
                                    let e = t.join(":");
                                    if (d.test(e)) {
                                        let t = parseInt((e.match(g) || ["", "-1"])[1], 10);
                                        null !== s && (s = x(s, t, f.decimalPoint, e.indexOf(",") > -1 ? f.thousandsSep : ""))
                                    } else s = m.dateFormat(e, s)
                                }
                            }
                            t = t.replace(i.find, h(s, ""))
                        }), S ? p(t, e, r) : t
                    }

                    function u(t, e, s, r) {
                        let o, n;
                        t = +t || 0, e = +e;
                        let l = i.lang,
                            c = (t.toString().split(".")[1] || "").split("e")[0].length,
                            p = t.toString().split("e"),
                            u = e; - 1 === e ? e = Math.min(c, 20) : a(e) ? e && p[1] && p[1] < 0 && ((n = e + +p[1]) >= 0 ? (p[0] = (+p[0]).toExponential(n).split("e")[0], e = n) : (p[0] = p[0].split(".")[0] || 0, t = e < 20 ? (p[0] * Math.pow(10, p[1])).toFixed(e) : 0, p[1] = 0)) : e = 2;
                        let g = (Math.abs(p[1] ? p[0] : t) + Math.pow(10, -Math.max(e, c) - 1)).toFixed(e),
                            f = String(d(g)),
                            m = f.length > 3 ? f.length % 3 : 0;
                        return s = h(s, l.decimalPoint), r = h(r, l.thousandsSep), o = (t < 0 ? "-" : "") + (m ? f.substr(0, m) + r : ""), 0 > +p[1] && !u ? o = "0" : o += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + r), e ? o += s + g.slice(-e) : 0 == +o && (o = "0"), p[1] && 0 != +o && (o += "e" + p[1]), o
                    }
                    return {
                        dateFormat: function(t, e, i) {
                            return s.dateFormat(t, e, i)
                        },
                        format: p,
                        helpers: c,
                        numberFormat: u
                    }
                }), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function(t) {
                    var e, i;
                    let s;
                    return (i = e || (e = {})).rendererTypes = {}, i.getRendererType = function(t = s) {
                        return i.rendererTypes[t] || i.rendererTypes[s]
                    }, i.registerRendererType = function(e, r, o) {
                        i.rendererTypes[e] = r, (!s || o) && (s = e, t.Renderer = r)
                    }, e
                }), i(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        clamp: i,
                        pick: s,
                        pushUnique: r,
                        stableSort: o
                    } = t;
                    return (e || (e = {})).distribute = function t(e, n, a) {
                        let l = e,
                            h = l.reducedLen || n,
                            d = (t, e) => t.target - e.target,
                            c = [],
                            p = e.length,
                            u = [],
                            g = c.push,
                            f, m, x, y = !0,
                            b, v, k = 0,
                            S;
                        for (f = p; f--;) k += e[f].size;
                        if (k > h) {
                            for (o(e, (t, e) => (e.rank || 0) - (t.rank || 0)), x = (S = e[0].rank === e[e.length - 1].rank) ? p / 2 : -1, m = S ? x : p - 1; x && k > h;) b = e[f = Math.floor(m)], r(u, f) && (k -= b.size), m += x, S && m >= e.length && (x /= 2, m = x);
                            u.sort((t, e) => e - t).forEach(t => g.apply(c, e.splice(t, 1)))
                        }
                        for (o(e, d), e = e.map(t => ({
                                size: t.size,
                                targets: [t.target],
                                align: s(t.align, .5)
                            })); y;) {
                            for (f = e.length; f--;) b = e[f], v = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = i(v - b.size * b.align, 0, n - b.size);
                            for (f = e.length, y = !1; f--;) f > 0 && e[f - 1].pos + e[f - 1].size > e[f].pos && (e[f - 1].size += e[f].size, e[f - 1].targets = e[f - 1].targets.concat(e[f].targets), e[f - 1].align = .5, e[f - 1].pos + e[f - 1].size > n && (e[f - 1].pos = n - e[f - 1].size), e.splice(f, 1), y = !0)
                        }
                        return g.apply(l, c), f = 0, e.some(e => {
                            let i = 0;
                            return (e.targets || []).some(() => (l[f].pos = e.pos + i, void 0 !== a && Math.abs(l[f].pos - l[f].target) > a) ? (l.slice(0, f + 1).forEach(t => delete t.pos), l.reducedLen = (l.reducedLen || n) - .1 * n, l.reducedLen > .1 * n && t(l, n, a), !0) : (i += l[f].size, f++, !1))
                        }), o(l, d), l
                    }, e
                }), i(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
                    let {
                        animate: r,
                        animObject: o,
                        stop: n
                    } = t, {
                        deg2rad: a,
                        doc: l,
                        svg: h,
                        SVG_NS: d,
                        win: c
                    } = i, {
                        addEvent: p,
                        attr: u,
                        createElement: g,
                        crisp: f,
                        css: m,
                        defined: x,
                        erase: y,
                        extend: b,
                        fireEvent: v,
                        isArray: k,
                        isFunction: S,
                        isObject: C,
                        isString: M,
                        merge: w,
                        objectEach: A,
                        pick: T,
                        pInt: P,
                        pushUnique: L,
                        replaceNested: O,
                        syncTimeout: E,
                        uniqueKey: D
                    } = s;
                    class j {
                        _defaultGetter(t) {
                            let e = T(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
                            return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)), e
                        }
                        _defaultSetter(t, e, i) {
                            i.setAttribute(e, t)
                        }
                        add(t) {
                            let e;
                            let i = this.renderer,
                                s = this.element;
                            return t && (this.parentGroup = t), void 0 !== this.textStr && "text" === this.element.nodeName && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
                        }
                        addClass(t, e) {
                            let i = e ? "" : this.attr("class") || "";
                            return (t = (t || "").split(/ /g).reduce(function(t, e) {
                                return -1 === i.indexOf(e) && t.push(e), t
                            }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this
                        }
                        afterSetters() {
                            this.doTransform && (this.updateTransform(), this.doTransform = !1)
                        }
                        align(t, e, i, s = !0) {
                            let r, o, n, a;
                            let l = {},
                                h = this.renderer,
                                d = h.alignedObjects,
                                c = !!t;
                            t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
                            let p = !i || M(i) ? i || "renderer" : void 0;
                            p && (c && L(d, this), i = void 0);
                            let u = T(i, h[p], h),
                                g = t.align,
                                f = t.verticalAlign;
                            return r = (u.x || 0) + (t.x || 0), o = (u.y || 0) + (t.y || 0), "right" === g ? n = 1 : "center" === g && (n = 2), n && (r += ((u.width || 0) - (t.width || 0)) / n), l[e ? "translateX" : "x"] = Math.round(r), "bottom" === f ? a = 1 : "middle" === f && (a = 2), a && (o += ((u.height || 0) - (t.height || 0)) / a), l[e ? "translateY" : "y"] = Math.round(o), s && (this[this.placed ? "animate" : "attr"](l), this.placed = !0), this.alignAttr = l, this
                        }
                        alignSetter(t) {
                            let e = {
                                left: "start",
                                center: "middle",
                                right: "end"
                            };
                            e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
                        }
                        animate(t, e, i) {
                            let s = o(T(e, this.renderer.globalAnimation, !0)),
                                n = s.defer;
                            return l.hidden && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), E(() => {
                                this.element && r(this, t, s)
                            }, n)) : (this.attr(t, void 0, i || s.complete), A(t, function(t, e) {
                                s.step && s.step.call(this, t, {
                                    prop: e,
                                    pos: 1,
                                    elem: this
                                })
                            }, this)), this
                        }
                        applyTextOutline(t) {
                            let e = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
                            let s = t.split(" "),
                                r = s[s.length - 1],
                                o = s[0];
                            if (o && "none" !== o && i.svg) {
                                this.fakeTS = !0, o = o.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                                    return 2 * Number(e) + i
                                }), this.removeTextOutline();
                                let t = l.createElementNS(d, "tspan");
                                u(t, {
                                    class: "highcharts-text-outline",
                                    fill: r,
                                    stroke: r,
                                    "stroke-width": o,
                                    "stroke-linejoin": "round"
                                });
                                let i = e.querySelector("textPath") || e;
                                [].forEach.call(i.childNodes, e => {
                                    let i = e.cloneNode(!0);
                                    i.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(t => i.removeAttribute(t)), t.appendChild(i)
                                });
                                let s = 0;
                                [].forEach.call(i.querySelectorAll("text tspan"), t => {
                                    s += Number(t.getAttribute("dy"))
                                });
                                let n = l.createElementNS(d, "tspan");
                                n.textContent = "​", u(n, {
                                    x: Number(e.getAttribute("x")),
                                    dy: -s
                                }), t.appendChild(n), i.insertBefore(t, i.firstChild)
                            }
                        }
                        attr(t, e, i, s) {
                            let {
                                element: r
                            } = this, o = j.symbolCustomAttribs, a, l, h = this, d;
                            return "string" == typeof t && void 0 !== e && (a = t, (t = {})[a] = e), "string" == typeof t ? h = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (A(t, function(e, i) {
                                d = !1, s || n(this, i), this.symbolName && -1 !== o.indexOf(i) && (l || (this.symbolAttr(t), l = !0), d = !0), this.rotation && ("x" === i || "y" === i) && (this.doTransform = !0), d || (this[i + "Setter"] || this._defaultSetter).call(this, e, i, r)
                            }, this), this.afterSetters()), i && i.call(this), h
                        }
                        clip(t) {
                            if (t && !t.clipPath) {
                                let e = D() + "-",
                                    i = this.renderer.createElement("clipPath").attr({
                                        id: e
                                    }).add(this.renderer.defs);
                                b(t, {
                                    clipPath: i,
                                    id: e,
                                    count: 0
                                }), t.add(i)
                            }
                            return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none")
                        }
                        crisp(t, e) {
                            e = Math.round(e || t.strokeWidth || 0);
                            let i = t.x || this.x || 0,
                                s = t.y || this.y || 0,
                                r = (t.width || this.width || 0) + i,
                                o = (t.height || this.height || 0) + s,
                                n = f(i, e),
                                a = f(s, e);
                            return b(t, {
                                x: n,
                                y: a,
                                width: f(r, e) - n,
                                height: f(o, e) - a
                            }), x(t.strokeWidth) && (t.strokeWidth = e), t
                        }
                        complexColor(t, i, s) {
                            let r = this.renderer,
                                o, n, a, l, h, d, c, p, u, g, f = [],
                                m;
                            v(this.renderer, "complexColor", {
                                args: arguments
                            }, function() {
                                if (t.radialGradient ? n = "radialGradient" : t.linearGradient && (n = "linearGradient"), n) {
                                    if (a = t[n], h = r.gradients, d = t.stops, u = s.radialReference, k(a) && (t[n] = a = {
                                            x1: a[0],
                                            y1: a[1],
                                            x2: a[2],
                                            y2: a[3],
                                            gradientUnits: "userSpaceOnUse"
                                        }), "radialGradient" === n && u && !x(a.gradientUnits) && (l = a, a = w(a, r.getRadialAttr(u, l), {
                                            gradientUnits: "userSpaceOnUse"
                                        })), A(a, function(t, e) {
                                            "id" !== e && f.push(e, t)
                                        }), A(d, function(t) {
                                            f.push(t)
                                        }), h[f = f.join(",")]) g = h[f].attr("id");
                                    else {
                                        a.id = g = D();
                                        let t = h[f] = r.createElement(n).attr(a).add(r.defs);
                                        t.radAttr = l, t.stops = [], d.forEach(function(i) {
                                            0 === i[1].indexOf("rgba") ? (c = (o = e.parse(i[1])).get("rgb"), p = o.get("a")) : (c = i[1], p = 1);
                                            let s = r.createElement("stop").attr({
                                                offset: i[0],
                                                "stop-color": c,
                                                "stop-opacity": p
                                            }).add(t);
                                            t.stops.push(s)
                                        })
                                    }
                                    m = "url(" + r.url + "#" + g + ")", s.setAttribute(i, m), s.gradient = f, t.toString = function() {
                                        return m
                                    }
                                }
                            })
                        }
                        css(t) {
                            let e = this.styles,
                                i = {},
                                s = this.element,
                                r, o = !e;
                            if (e && A(t, function(t, s) {
                                    e && e[s] !== t && (i[s] = t, o = !0)
                                }), o) {
                                e && (t = b(e, i)), null === t.width || "auto" === t.width ? delete this.textWidth : "text" === s.nodeName.toLowerCase() && t.width && (r = this.textWidth = P(t.width)), b(this.styles, t), r && !h && this.renderer.forExport && delete t.width;
                                let o = w(t);
                                s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach(t => o && delete o[t]), o.color && (o.fill = o.color)), m(s, o)
                            }
                            return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this
                        }
                        dashstyleSetter(t) {
                            let e, i = this["stroke-width"];
                            if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                                let s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                for (e = s.length; e--;) s[e] = "" + P(s[e]) * T(i, NaN);
                                t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                            }
                        }
                        destroy() {
                            let t = this,
                                e = t.element || {},
                                i = t.renderer,
                                s = e.ownerSVGElement,
                                r = "SPAN" === e.nodeName && t.parentGroup || void 0,
                                o, a;
                            if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, n(t), t.clipPath && s) {
                                let e = t.clipPath;
                                [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
                                    t.getAttribute("clip-path").indexOf(e.element.id) > -1 && t.removeAttribute("clip-path")
                                }), t.clipPath = e.destroy()
                            }
                            if (t.connector = t.connector ? .destroy(), t.stops) {
                                for (a = 0; a < t.stops.length; a++) t.stops[a].destroy();
                                t.stops.length = 0, t.stops = void 0
                            }
                            for (t.safeRemoveChild(e); r && r.div && 0 === r.div.childNodes.length;) o = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = o;
                            t.alignOptions && y(i.alignedObjects, t), A(t, function(e, i) {
                                t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy(), delete t[i]
                            })
                        }
                        dSetter(t, e, i) {
                            k(t) && ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((t, e, i) => e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                        }
                        fillSetter(t, e, i) {
                            "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                        }
                        hrefSetter(t, e, i) {
                            i.setAttributeNS("http://www.w3.org/1999/xlink", e, t)
                        }
                        getBBox(t, e) {
                            let i, s, r, o;
                            let {
                                alignValue: n,
                                element: a,
                                renderer: l,
                                styles: h,
                                textStr: d
                            } = this, {
                                cache: c,
                                cacheKeys: p
                            } = l, u = a.namespaceURI === this.SVG_NS, g = T(e, this.rotation, 0), f = l.styledMode ? a && j.prototype.getStyle.call(a, "font-size") : h.fontSize;
                            if (x(d) && (-1 === (o = d.toString()).indexOf("<") && (o = o.replace(/[0-9]/g, "0")), o += ["", l.rootFontSize, f, g, this.textWidth, n, h.textOverflow, h.fontWeight].join(",")), o && !t && (i = c[o]), !i) {
                                if (u || l.forExport) {
                                    try {
                                        r = this.fakeTS && function(t) {
                                            let e = a.querySelector(".highcharts-text-outline");
                                            e && m(e, {
                                                display: t
                                            })
                                        }, S(r) && r("none"), i = a.getBBox ? b({}, a.getBBox()) : {
                                            width: a.offsetWidth,
                                            height: a.offsetHeight,
                                            x: 0,
                                            y: 0
                                        }, S(r) && r("")
                                    } catch (t) {}(!i || i.width < 0) && (i = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    })
                                } else i = this.htmlGetBBox();
                                s = i.height, u && (i.height = s = ({
                                    "11px,17": 14,
                                    "13px,20": 16
                                })[`${f||""},${Math.round(s)}`] || s), g && (i = this.getRotatedBox(i, g))
                            }
                            if (o && ("" === d || i.height > 0)) {
                                for (; p.length > 250;) delete c[p.shift()];
                                c[o] || p.push(o), c[o] = i
                            }
                            return i
                        }
                        getRotatedBox(t, e) {
                            let {
                                x: i,
                                y: s,
                                width: r,
                                height: o
                            } = t, {
                                alignValue: n,
                                translateY: l,
                                rotationOriginX: h = 0,
                                rotationOriginY: d = 0
                            } = this, c = {
                                right: 1,
                                center: .5
                            }[n || 0] || 0, p = Number(this.element.getAttribute("y") || 0) - (l ? 0 : s), u = e * a, g = (e - 90) * a, f = Math.cos(u), m = Math.sin(u), x = r * f, y = r * m, b = Math.cos(g), v = Math.sin(g), [
                                [k, S],
                                [C, M]
                            ] = [h, d].map(t => [t - t * f, t * m]), w = i + c * (r - x) + k + M + p * b, A = w + x, T = A - o * b, P = T - x, L = s + p - c * y - S + C + p * v, O = L + y, E = O - o * v, D = E - y, j = Math.min(w, A, T, P), I = Math.min(L, O, E, D), B = Math.max(w, A, T, P) - j, R = Math.max(L, O, E, D) - I;
                            return {
                                x: j,
                                y: I,
                                width: B,
                                height: R
                            }
                        }
                        getStyle(t) {
                            return c.getComputedStyle(this.element || this, "").getPropertyValue(t)
                        }
                        hasClass(t) {
                            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                        }
                        hide() {
                            return this.attr({
                                visibility: "hidden"
                            })
                        }
                        htmlGetBBox() {
                            return {
                                height: 0,
                                width: 0,
                                x: 0,
                                y: 0
                            }
                        }
                        constructor(t, e) {
                            this.onEvents = {}, this.opacity = 1, this.SVG_NS = d, this.element = "span" === e || "body" === e ? g(e) : l.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, v(this, "afterInit")
                        }
                        on(t, e) {
                            let {
                                onEvents: i
                            } = this;
                            return i[t] && i[t](), i[t] = p(this.element, t, e), this
                        }
                        opacitySetter(t, e, i) {
                            let s = Number(Number(t).toFixed(3));
                            this.opacity = s, i.setAttribute(e, s)
                        }
                        reAlign() {
                            this.alignOptions ? .width && "left" !== this.alignOptions.align && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align())
                        }
                        removeClass(t) {
                            return this.attr("class", ("" + this.attr("class")).replace(M(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim())
                        }
                        removeTextOutline() {
                            let t = this.element.querySelector("tspan.highcharts-text-outline");
                            t && this.safeRemoveChild(t)
                        }
                        safeRemoveChild(t) {
                            let e = t.parentNode;
                            e && e.removeChild(t)
                        }
                        setRadialReference(t) {
                            let e = this.element.gradient && this.renderer.gradients[this.element.gradient];
                            return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                        }
                        setTextPath(t, e) {
                            e = w(!0, {
                                enabled: !0,
                                attributes: {
                                    dy: -5,
                                    startOffset: "50%",
                                    textAnchor: "middle"
                                }
                            }, e);
                            let i = this.renderer.url,
                                s = this.text || this,
                                r = s.textPath,
                                {
                                    attributes: o,
                                    enabled: n
                                } = e;
                            if (t = t || r && r.path, r && r.undo(), t && n) {
                                let e = p(s, "afterModifyTree", e => {
                                    if (t && n) {
                                        let r = t.attr("id");
                                        r || t.attr("id", r = D());
                                        let n = {
                                            x: 0,
                                            y: 0
                                        };
                                        x(o.dx) && (n.dx = o.dx, delete o.dx), x(o.dy) && (n.dy = o.dy, delete o.dy), s.attr(n), this.attr({
                                            transform: ""
                                        }), this.box && (this.box = this.box.destroy());
                                        let a = e.nodes.slice(0);
                                        e.nodes.length = 0, e.nodes[0] = {
                                            tagName: "textPath",
                                            attributes: b(o, {
                                                "text-anchor": o.textAnchor,
                                                href: `${i}#${r}`
                                            }),
                                            children: a
                                        }
                                    }
                                });
                                s.textPath = {
                                    path: t,
                                    undo: e
                                }
                            } else s.attr({
                                dx: 0,
                                dy: 0
                            }), delete s.textPath;
                            return this.added && (s.textCache = "", this.renderer.buildText(s)), this
                        }
                        shadow(t) {
                            let {
                                renderer: e
                            } = this, i = w(this.parentGroup ? .rotation === 90 ? {
                                offsetX: -1,
                                offsetY: -1
                            } : {}, C(t) ? t : {}), s = e.shadowDefinition(i);
                            return this.attr({
                                filter: t ? `url(${e.url}#${s})` : "none"
                            })
                        }
                        show(t = !0) {
                            return this.attr({
                                visibility: t ? "inherit" : "visible"
                            })
                        }
                        "stroke-widthSetter" (t, e, i) {
                            this[e] = t, i.setAttribute(e, t)
                        }
                        strokeWidth() {
                            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                            let t = this.getStyle("stroke-width"),
                                e = 0,
                                i;
                            return /px$/.test(t) ? e = P(t) : "" !== t && (u(i = l.createElementNS(d, "rect"), {
                                width: t,
                                "stroke-width": 0
                            }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e
                        }
                        symbolAttr(t) {
                            let e = this;
                            j.symbolCustomAttribs.forEach(function(i) {
                                e[i] = T(t[i], e[i])
                            }), e.attr({
                                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                            })
                        }
                        textSetter(t) {
                            t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign())
                        }
                        titleSetter(t) {
                            let e = this.element,
                                i = e.getElementsByTagName("title")[0] || l.createElementNS(this.SVG_NS, "title");
                            e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = O(T(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                        }
                        toFront() {
                            let t = this.element;
                            return t.parentNode.appendChild(t), this
                        }
                        translate(t, e) {
                            return this.attr({
                                translateX: t,
                                translateY: e
                            })
                        }
                        updateTransform(t = "transform") {
                            let {
                                element: e,
                                matrix: i,
                                rotation: s = 0,
                                rotationOriginX: r,
                                rotationOriginY: o,
                                scaleX: n,
                                scaleY: a,
                                translateX: l = 0,
                                translateY: h = 0
                            } = this, d = ["translate(" + l + "," + h + ")"];
                            x(i) && d.push("matrix(" + i.join(",") + ")"), s && (d.push("rotate(" + s + " " + T(r, e.getAttribute("x"), 0) + " " + T(o, e.getAttribute("y") || 0) + ")"), this.text ? .element.tagName === "SPAN" && this.text.attr({
                                rotation: s,
                                rotationOriginX: (r || 0) - this.padding,
                                rotationOriginY: (o || 0) - this.padding
                            })), (x(n) || x(a)) && d.push("scale(" + T(n, 1) + " " + T(a, 1) + ")"), d.length && !(this.text || this).textPath && e.setAttribute(t, d.join(" "))
                        }
                        visibilitySetter(t, e, i) {
                            "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                        }
                        xGetter(t) {
                            return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                        }
                        zIndexSetter(t, e) {
                            let i = this.renderer,
                                s = this.parentGroup,
                                r = (s || i).element || i.box,
                                o = this.element,
                                n = r === i.box,
                                a, l, h, d = !1,
                                c, p = this.added,
                                u;
                            if (x(t) ? (o.setAttribute("data-z-index", t), t = +t, this[e] === t && (p = !1)) : x(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, p) {
                                for ((t = this.zIndex) && s && (s.handleZ = !0), u = (a = r.childNodes).length - 1; u >= 0 && !d; u--) c = !x(h = (l = a[u]).getAttribute("data-z-index")), l !== o && (t < 0 && c && !n && !u ? (r.insertBefore(o, a[u]), d = !0) : (P(h) <= t || c && (!x(t) || t >= 0)) && (r.insertBefore(o, a[u + 1]), d = !0));
                                d || (r.insertBefore(o, a[n ? 3 : 0]), d = !0)
                            }
                            return d
                        }
                    }
                    return j.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], j.prototype.strokeSetter = j.prototype.fillSetter, j.prototype.yGetter = j.prototype.xGetter, j.prototype.matrixSetter = j.prototype.rotationOriginXSetter = j.prototype.rotationOriginYSetter = j.prototype.rotationSetter = j.prototype.scaleXSetter = j.prototype.scaleYSetter = j.prototype.translateXSetter = j.prototype.translateYSetter = j.prototype.verticalAlignSetter = function(t, e) {
                        this[e] = t, this.doTransform = !0
                    }, j
                }), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        defined: i,
                        extend: s,
                        isNumber: r,
                        merge: o,
                        pick: n,
                        removeEvent: a
                    } = e;
                    class l extends t {
                        constructor(t, e, i, s, r, o, n, a, h, d) {
                            let c;
                            super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = n, this.baseline = h, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t.text(void 0, 0, 0, a).attr({
                                zIndex: 1
                            }), "string" == typeof r && ((c = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = l.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0
                        }
                        alignSetter(t) {
                            let e = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[t];
                            e !== this.alignFactor && (this.alignFactor = e, this.bBox && r(this.xSetting) && this.attr({
                                x: this.xSetting
                            }))
                        }
                        anchorXSetter(t, e) {
                            this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
                        }
                        anchorYSetter(t, e) {
                            this.anchorY = t, this.boxAttr(e, t - this.ySetting)
                        }
                        boxAttr(t, e) {
                            this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
                        }
                        css(e) {
                            if (e) {
                                let t = {};
                                e = o(e), l.textProps.forEach(i => {
                                    void 0 !== e[i] && (t[i] = e[i], delete e[i])
                                }), this.text.css(t), "fontSize" in t || "fontWeight" in t ? this.updateTextPadding() : ("width" in t || "textOverflow" in t) && this.updateBoxSize()
                            }
                            return t.prototype.css.call(this, e)
                        }
                        destroy() {
                            a(this.element, "mouseenter"), a(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t.prototype.destroy.call(this)
                        }
                        fillSetter(t, e) {
                            t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
                        }
                        getBBox(t, e) {
                            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                            let {
                                padding: i,
                                height: s = 0,
                                translateX: r = 0,
                                translateY: o = 0,
                                width: a = 0
                            } = this, l = n(this.paddingLeft, i), h = e ? ? (this.rotation || 0), d = {
                                width: a,
                                height: s,
                                x: r + this.bBox.x - l,
                                y: o + this.bBox.y - i + this.baselineOffset
                            };
                            return h && (d = this.getRotatedBox(d, h)), d
                        }
                        getCrispAdjust() {
                            return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                        }
                        heightSetter(t) {
                            this.heightSetting = t
                        }
                        onAdd() {
                            this.text.add(this), this.attr({
                                text: n(this.textStr, ""),
                                x: this.x || 0,
                                y: this.y || 0
                            }), this.box && i(this.anchorX) && this.attr({
                                anchorX: this.anchorX,
                                anchorY: this.anchorY
                            })
                        }
                        paddingSetter(t, e) {
                            r(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
                        }
                        rSetter(t, e) {
                            this.boxAttr(e, t)
                        }
                        strokeSetter(t, e) {
                            this.stroke = t, this.boxAttr(e, t)
                        }
                        "stroke-widthSetter" (t, e) {
                            t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
                        }
                        "text-alignSetter" (t) {
                            this.textAlign = t
                        }
                        textSetter(t) {
                            void 0 !== t && this.text.attr({
                                text: t
                            }), this.updateTextPadding(), this.reAlign()
                        }
                        updateBoxSize() {
                            let t;
                            let e = this.text,
                                o = {},
                                n = this.padding,
                                a = this.bBox = (!r(this.widthSetting) || !r(this.heightSetting) || this.textAlign) && i(e.textStr) ? e.getBBox(void 0, 0) : l.emptyBBox;
                            this.width = this.getPaddedWidth(), this.height = (this.heightSetting || a.height || 0) + 2 * n;
                            let h = this.renderer.fontMetrics(e);
                            if (this.baselineOffset = n + Math.min((this.text.firstLineMetrics || h).b, a.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - h.h) / 2), this.needsBox && !e.textPath) {
                                if (!this.box) {
                                    let t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                                    t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this)
                                }
                                t = this.getCrispAdjust(), o.x = t, o.y = (this.baseline ? -this.baselineOffset : 0) + t, o.width = Math.round(this.width), o.height = Math.round(this.height), this.box.attr(s(o, this.deferredAttr)), this.deferredAttr = {}
                            }
                        }
                        updateTextPadding() {
                            let t = this.text;
                            if (!t.textPath) {
                                this.updateBoxSize();
                                let e = this.baseline ? 0 : this.baselineOffset,
                                    s = n(this.paddingLeft, this.padding);
                                i(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s += ({
                                    center: .5,
                                    right: 1
                                })[this.textAlign] * (this.widthSetting - this.bBox.width)), (s !== t.x || e !== t.y) && (t.attr("x", s), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), void 0 !== e && t.attr("y", e)), t.x = s, t.y = e
                            }
                        }
                        widthSetter(t) {
                            this.widthSetting = r(t) ? t : void 0
                        }
                        getPaddedWidth() {
                            let t = this.padding,
                                e = n(this.paddingLeft, t),
                                i = n(this.paddingRight, t);
                            return (this.widthSetting || this.bBox.width || 0) + e + i
                        }
                        xSetter(t) {
                            this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
                        }
                        ySetter(t) {
                            this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
                        }
                    }
                    return l.emptyBBox = {
                        width: 0,
                        height: 0,
                        x: 0,
                        y: 0
                    }, l.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], l
                }), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function(t) {
                    let {
                        defined: e,
                        isNumber: i,
                        pick: s
                    } = t;

                    function r(t, i, r, o, n) {
                        let a = [];
                        if (n) {
                            let l = n.start || 0,
                                h = s(n.r, r),
                                d = s(n.r, o || r),
                                c = 2e-4 / Math.max(h, 1),
                                p = Math.abs((n.end || 0) - l - 2 * Math.PI) < c,
                                u = (n.end || 0) - c,
                                g = n.innerR,
                                f = s(n.open, p),
                                m = Math.cos(l),
                                x = Math.sin(l),
                                y = Math.cos(u),
                                b = Math.sin(u),
                                v = s(n.longArc, u - l - Math.PI < c ? 0 : 1),
                                k = ["A", h, d, 0, v, s(n.clockwise, 1), t + h * y, i + d * b];
                            k.params = {
                                start: l,
                                end: u,
                                cx: t,
                                cy: i
                            }, a.push(["M", t + h * m, i + d * x], k), e(g) && ((k = ["A", g, g, 0, v, e(n.clockwise) ? 1 - n.clockwise : 0, t + g * m, i + g * x]).params = {
                                start: u,
                                end: l,
                                cx: t,
                                cy: i
                            }, a.push(f ? ["M", t + g * y, i + g * b] : ["L", t + g * y, i + g * b], k)), f || a.push(["Z"])
                        }
                        return a
                    }

                    function o(t, e, i, s, r) {
                        return r && r.r ? n(t, e, i, s, r) : [
                            ["M", t, e],
                            ["L", t + i, e],
                            ["L", t + i, e + s],
                            ["L", t, e + s],
                            ["Z"]
                        ]
                    }

                    function n(t, e, i, s, r) {
                        let o = r ? .r || 0;
                        return [
                            ["M", t + o, e],
                            ["L", t + i - o, e],
                            ["A", o, o, 0, 0, 1, t + i, e + o],
                            ["L", t + i, e + s - o],
                            ["A", o, o, 0, 0, 1, t + i - o, e + s],
                            ["L", t + o, e + s],
                            ["A", o, o, 0, 0, 1, t, e + s - o],
                            ["L", t, e + o],
                            ["A", o, o, 0, 0, 1, t + o, e],
                            ["Z"]
                        ]
                    }
                    return {
                        arc: r,
                        callout: function(t, e, s, r, o) {
                            let a = Math.min(o && o.r || 0, s, r),
                                l = a + 6,
                                h = o && o.anchorX,
                                d = o && o.anchorY || 0,
                                c = n(t, e, s, r, {
                                    r: a
                                });
                            if (!i(h) || h < s && h > 0 && d < r && d > 0) return c;
                            if (t + h > s - l) {
                                if (d > e + l && d < e + r - l) c.splice(3, 1, ["L", t + s, d - 6], ["L", t + s + 6, d], ["L", t + s, d + 6], ["L", t + s, e + r - a]);
                                else if (h < s) {
                                    let i = d < e + l,
                                        o = i ? e : e + r;
                                    c.splice(i ? 2 : 5, 0, ["L", h, d], ["L", t + s - a, o])
                                } else c.splice(3, 1, ["L", t + s, r / 2], ["L", h, d], ["L", t + s, r / 2], ["L", t + s, e + r - a])
                            } else if (t + h < l) {
                                if (d > e + l && d < e + r - l) c.splice(7, 1, ["L", t, d + 6], ["L", t - 6, d], ["L", t, d - 6], ["L", t, e + a]);
                                else if (h > 0) {
                                    let i = d < e + l,
                                        s = i ? e : e + r;
                                    c.splice(i ? 1 : 6, 0, ["L", h, d], ["L", t + a, s])
                                } else c.splice(7, 1, ["L", t, r / 2], ["L", h, d], ["L", t, r / 2], ["L", t, e + a])
                            } else d > r && h < s - l ? c.splice(5, 1, ["L", h + 6, e + r], ["L", h, e + r + 6], ["L", h - 6, e + r], ["L", t + a, e + r]) : d < 0 && h > l && c.splice(1, 1, ["L", h - 6, e], ["L", h, e - 6], ["L", h + 6, e], ["L", s - a, e]);
                            return c
                        },
                        circle: function(t, e, i, s) {
                            return r(t + i / 2, e + s / 2, i / 2, s / 2, {
                                start: .5 * Math.PI,
                                end: 2.5 * Math.PI,
                                open: !1
                            })
                        },
                        diamond: function(t, e, i, s) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + s / 2],
                                ["L", t + i / 2, e + s],
                                ["L", t, e + s / 2],
                                ["Z"]
                            ]
                        },
                        rect: o,
                        roundedRect: n,
                        square: o,
                        triangle: function(t, e, i, s) {
                            return [
                                ["M", t + i / 2, e],
                                ["L", t + i, e + s],
                                ["L", t, e + s],
                                ["Z"]
                            ]
                        },
                        "triangle-down": function(t, e, i, s) {
                            return [
                                ["M", t, e],
                                ["L", t + i, e],
                                ["L", t + i / 2, e + s],
                                ["Z"]
                            ]
                        }
                    }
                }), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        doc: s,
                        SVG_NS: r,
                        win: o
                    } = e, {
                        attr: n,
                        extend: a,
                        fireEvent: l,
                        isString: h,
                        objectEach: d,
                        pick: c
                    } = i;
                    return class {
                        constructor(t) {
                            let e = t.styles;
                            this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e && e.lineHeight, this.textOutline = e && e.textOutline, this.ellipsis = !!(e && "ellipsis" === e.textOverflow), this.noWrap = !!(e && "nowrap" === e.whiteSpace)
                        }
                        buildSVG() {
                            let e = this.svgElement,
                                i = e.element,
                                r = e.renderer,
                                o = c(e.textStr, "").toString(),
                                n = -1 !== o.indexOf("<"),
                                a = i.childNodes,
                                l = !e.added && r.box,
                                d = [o, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e.getStyle("font-size"), this.width].join(",");
                            if (d !== e.textCache) {
                                e.textCache = d, delete e.actualWidth;
                                for (let t = a.length; t--;) i.removeChild(a[t]);
                                if (n || this.ellipsis || this.width || e.textPath || -1 !== o.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(o))) {
                                    if ("" !== o) {
                                        l && l.appendChild(i);
                                        let s = new t(o);
                                        this.modifyTree(s.nodes), s.addToDOM(i), this.modifyDOM(), this.ellipsis && -1 !== (i.textContent || "").indexOf("…") && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), l && l.removeChild(i)
                                    }
                                } else i.appendChild(s.createTextNode(this.unescapeEntities(o)));
                                h(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline)
                            }
                        }
                        modifyDOM() {
                            let t;
                            let e = this.svgElement,
                                i = n(e.element, "x");
                            for (e.firstLineMetrics = void 0; t = e.element.firstChild;)
                                if (/^[\s\u200B]*$/.test(t.textContent || " ")) e.element.removeChild(t);
                                else break;
                            [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (t, s) => {
                                t.nextSibling && t.previousSibling && (0 === s && 1 === t.previousSibling.nodeType && (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)), n(t, {
                                    dy: this.getLineHeight(t.nextSibling),
                                    x: i
                                }))
                            });
                            let a = this.width || 0;
                            if (!a) return;
                            let l = (t, o) => {
                                    let l = t.textContent || "",
                                        h = l.replace(/([^\^])-/g, "$1- ").split(" "),
                                        d = !this.noWrap && (h.length > 1 || e.element.childNodes.length > 1),
                                        c = this.getLineHeight(o),
                                        p = 0,
                                        u = e.actualWidth;
                                    if (this.ellipsis) l && this.truncate(t, l, void 0, 0, Math.max(0, a - .8 * c), (t, e) => t.substring(0, e) + "…");
                                    else if (d) {
                                        let l = [],
                                            d = [];
                                        for (; o.firstChild && o.firstChild !== t;) d.push(o.firstChild), o.removeChild(o.firstChild);
                                        for (; h.length;) h.length && !this.noWrap && p > 0 && (l.push(t.textContent || ""), t.textContent = h.join(" ").replace(/- /g, "-")), this.truncate(t, void 0, h, 0 === p && u || 0, a, (t, e) => h.slice(0, e).join(" ").replace(/- /g, "-")), u = e.actualWidth, p++;
                                        d.forEach(e => {
                                            o.insertBefore(e, t)
                                        }), l.forEach(e => {
                                            o.insertBefore(s.createTextNode(e), t);
                                            let a = s.createElementNS(r, "tspan");
                                            a.textContent = "​", n(a, {
                                                dy: c,
                                                x: i
                                            }), o.insertBefore(a, t)
                                        })
                                    }
                                },
                                h = t => {
                                    [].slice.call(t.childNodes).forEach(i => {
                                        i.nodeType === o.Node.TEXT_NODE ? l(i, t) : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), h(i))
                                    })
                                };
                            h(e.element)
                        }
                        getLineHeight(t) {
                            let e = t.nodeType === o.Node.TEXT_NODE ? t.parentElement : t;
                            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h
                        }
                        modifyTree(t) {
                            let e = (i, s) => {
                                let {
                                    attributes: r = {},
                                    children: o,
                                    style: n = {},
                                    tagName: l
                                } = i, h = this.renderer.styledMode;
                                if ("b" === l || "strong" === l ? h ? r.class = "highcharts-strong" : n.fontWeight = "bold" : ("i" === l || "em" === l) && (h ? r.class = "highcharts-emphasized" : n.fontStyle = "italic"), n && n.color && (n.fill = n.color), "br" === l) {
                                    r.class = "highcharts-br", i.textContent = "​";
                                    let e = t[s + 1];
                                    e && e.textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))
                                } else "a" === l && o && o.some(t => "#text" === t.tagName) && (i.children = [{
                                    children: o,
                                    tagName: "tspan"
                                }]);
                                "#text" !== l && "a" !== l && (i.tagName = "tspan"), a(i, {
                                    attributes: r,
                                    style: n
                                }), o && o.filter(t => "#text" !== t.tagName).forEach(e)
                            };
                            t.forEach(e), l(this.svgElement, "afterModifyTree", {
                                nodes: t
                            })
                        }
                        truncate(t, e, i, s, r, o) {
                            let n, a;
                            let l = this.svgElement,
                                {
                                    rotation: h
                                } = l,
                                d = [],
                                c = i ? 1 : 0,
                                p = (e || i || "").length,
                                u = p,
                                g = function(e, r) {
                                    let o = r || e,
                                        n = t.parentNode;
                                    if (n && void 0 === d[o] && n.getSubStringLength) try {
                                        d[o] = s + n.getSubStringLength(0, i ? o + 1 : o)
                                    } catch (t) {}
                                    return d[o]
                                };
                            if (l.rotation = 0, s + (a = g(t.textContent.length)) > r) {
                                for (; c <= p;) u = Math.ceil((c + p) / 2), i && (n = o(i, u)), a = g(u, n && n.length - 1), c === p ? c = p + 1 : a > r ? p = u - 1 : c = u;
                                0 === p ? t.textContent = "" : e && p === e.length - 1 || (t.textContent = n || o(e || i, u))
                            }
                            i && i.splice(0, u), l.actualWidth = a, l.rotation = h
                        }
                        unescapeEntities(t, e) {
                            return d(this.renderer.escapes, function(i, s) {
                                e && -1 !== e.indexOf(i) || (t = t.toString().replace(RegExp(i, "g"), s))
                            }), t
                        }
                    }
                }), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Defaults.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, n, a, l, h) {
                    let d;
                    let {
                        defaultOptions: c
                    } = e, {
                        charts: p,
                        deg2rad: u,
                        doc: g,
                        isFirefox: f,
                        isMS: m,
                        isWebKit: x,
                        noop: y,
                        SVG_NS: b,
                        symbolSizes: v,
                        win: k
                    } = s, {
                        addEvent: S,
                        attr: C,
                        createElement: M,
                        crisp: w,
                        css: A,
                        defined: T,
                        destroyObjectProperties: P,
                        extend: L,
                        isArray: O,
                        isNumber: E,
                        isObject: D,
                        isString: j,
                        merge: I,
                        pick: B,
                        pInt: R,
                        replaceNested: z,
                        uniqueKey: N
                    } = h;
                    class W {
                        constructor(t, e, i, s, r, o, n) {
                            let a, l;
                            let h = this.createElement("svg").attr({
                                    version: "1.1",
                                    class: "highcharts-root"
                                }),
                                d = h.element;
                            n || h.css(this.getStyle(s || {})), t.appendChild(d), C(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && C(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = h, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highcharts 11.4.3")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = h.getStyle("font-size"), this.setSize(e, i, !1), f && t.getBoundingClientRect && ((a = function() {
                                A(t, {
                                    left: 0,
                                    top: 0
                                }), l = t.getBoundingClientRect(), A(t, {
                                    left: Math.ceil(l.left) - l.left + "px",
                                    top: Math.ceil(l.top) - l.top + "px"
                                })
                            })(), this.unSubPixelFix = S(k, "resize", a))
                        }
                        definition(e) {
                            return new t([e]).addToDOM(this.defs.element)
                        }
                        getReferenceURL() {
                            if ((f || x) && g.getElementsByTagName("base").length) {
                                if (!T(d)) {
                                    let e = N(),
                                        i = new t([{
                                            tagName: "svg",
                                            attributes: {
                                                width: 8,
                                                height: 8
                                            },
                                            children: [{
                                                tagName: "defs",
                                                children: [{
                                                    tagName: "clipPath",
                                                    attributes: {
                                                        id: e
                                                    },
                                                    children: [{
                                                        tagName: "rect",
                                                        attributes: {
                                                            width: 4,
                                                            height: 4
                                                        }
                                                    }]
                                                }]
                                            }, {
                                                tagName: "rect",
                                                attributes: {
                                                    id: "hitme",
                                                    width: 8,
                                                    height: 8,
                                                    "clip-path": `url(#${e})`,
                                                    fill: "rgba(0,0,0,0.001)"
                                                }
                                            }]
                                        }]).addToDOM(g.body);
                                    A(i, {
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        zIndex: 9e5
                                    });
                                    let s = g.elementFromPoint(6, 6);
                                    d = "hitme" === (s && s.id), g.body.removeChild(i)
                                }
                                if (d) return z(k.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"])
                            }
                            return ""
                        }
                        getStyle(t) {
                            return this.style = L({
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "1rem"
                            }, t), this.style
                        }
                        setStyle(t) {
                            this.boxWrapper.css(this.getStyle(t))
                        }
                        isHidden() {
                            return !this.boxWrapper.getBBox().width
                        }
                        destroy() {
                            let t = this.defs;
                            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), P(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
                        }
                        createElement(t) {
                            return new this.Element(this, t)
                        }
                        getRadialAttr(t, e) {
                            return {
                                cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                                cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                                r: (e.r || 0) * t[2]
                            }
                        }
                        shadowDefinition(t) {
                            let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map(e => `${e}-${t[e]}`)].join("-").toLowerCase().replace(/[^a-z0-9\-]/g, ""),
                                i = I({
                                    color: "#000000",
                                    offsetX: 1,
                                    offsetY: 1,
                                    opacity: .15,
                                    width: 5
                                }, t);
                            return this.defs.element.querySelector(`#${e}`) || this.definition({
                                tagName: "filter",
                                attributes: {
                                    id: e,
                                    filterUnits: i.filterUnits
                                },
                                children: [{
                                    tagName: "feDropShadow",
                                    attributes: {
                                        dx: i.offsetX,
                                        dy: i.offsetY,
                                        "flood-color": i.color,
                                        "flood-opacity": Math.min(5 * i.opacity, 1),
                                        stdDeviation: i.width / 2
                                    }
                                }]
                            }), e
                        }
                        buildText(t) {
                            new l(t).buildSVG()
                        }
                        getContrast(t) {
                            let e = i.parse(t).rgba.map(t => {
                                    let e = t / 255;
                                    return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                                }),
                                s = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
                            return 1.05 / (s + .05) > (s + .05) / .05 ? "#FFFFFF" : "#000000"
                        }
                        button(e, i, s, r, o = {}, n, a, l, h, d) {
                            let p = this.label(e, i, s, h, void 0, void 0, d, void 0, "button"),
                                u = this.styledMode,
                                g = arguments,
                                f = 0;
                            o = I(c.global.buttonTheme, o), u && (delete o.fill, delete o.stroke, delete o["stroke-width"]);
                            let x = o.states || {},
                                y = o.style || {};
                            delete o.states, delete o.style;
                            let b = [t.filterUserAttributes(o)],
                                v = [y];
                            return u || ["hover", "select", "disabled"].forEach((e, i) => {
                                b.push(I(b[0], t.filterUserAttributes(g[i + 5] || x[e] || {}))), v.push(b[i + 1].style), delete b[i + 1].style
                            }), S(p.element, m ? "mouseover" : "mouseenter", function() {
                                3 !== f && p.setState(1)
                            }), S(p.element, m ? "mouseout" : "mouseleave", function() {
                                3 !== f && p.setState(f)
                            }), p.setState = (t = 0) => {
                                if (1 !== t && (p.state = f = t), p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t]), !u) {
                                    p.attr(b[t]);
                                    let e = v[t];
                                    D(e) && p.css(e)
                                }
                            }, p.attr(b[0]), !u && (p.css(L({
                                cursor: "default"
                            }, y)), d && p.text.css({
                                pointerEvents: "none"
                            })), p.on("touchstart", t => t.stopPropagation()).on("click", function(t) {
                                3 !== f && r.call(p, t)
                            })
                        }
                        crispLine(t, e) {
                            let [i, s] = t;
                            return T(i[1]) && i[1] === s[1] && (i[1] = s[1] = w(i[1], e)), T(i[2]) && i[2] === s[2] && (i[2] = s[2] = w(i[2], e)), t
                        }
                        path(t) {
                            let e = this.styledMode ? {} : {
                                fill: "none"
                            };
                            return O(t) ? e.d = t : D(t) && L(e, t), this.createElement("path").attr(e)
                        }
                        circle(t, e, i) {
                            let s = D(t) ? t : void 0 === t ? {} : {
                                    x: t,
                                    y: e,
                                    r: i
                                },
                                r = this.createElement("circle");
                            return r.xSetter = r.ySetter = function(t, e, i) {
                                i.setAttribute("c" + e, t)
                            }, r.attr(s)
                        }
                        arc(t, e, i, s, r, o) {
                            let n;
                            D(t) ? (e = (n = t).y, i = n.r, s = n.innerR, r = n.start, o = n.end, t = n.x) : n = {
                                innerR: s,
                                start: r,
                                end: o
                            };
                            let a = this.symbol("arc", t, e, i, i, n);
                            return a.r = i, a
                        }
                        rect(t, e, i, s, r, o) {
                            let n = D(t) ? t : void 0 === t ? {} : {
                                    x: t,
                                    y: e,
                                    r,
                                    width: Math.max(i || 0, 0),
                                    height: Math.max(s || 0, 0)
                                },
                                a = this.createElement("rect");
                            return this.styledMode || (void 0 !== o && (n["stroke-width"] = o, L(n, a.crisp(n))), n.fill = "none"), a.rSetter = function(t, e, i) {
                                a.r = t, C(i, {
                                    rx: t,
                                    ry: t
                                })
                            }, a.rGetter = function() {
                                return a.r || 0
                            }, a.attr(n)
                        }
                        roundedRect(t) {
                            return this.symbol("roundedRect").attr(t)
                        }
                        setSize(t, e, i) {
                            this.width = t, this.height = e, this.boxWrapper.animate({
                                width: t,
                                height: e
                            }, {
                                step: function() {
                                    this.attr({
                                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                    })
                                },
                                duration: B(i, !0) ? void 0 : 0
                            }), this.alignElements()
                        }
                        g(t) {
                            let e = this.createElement("g");
                            return t ? e.attr({
                                class: "highcharts-" + t
                            }) : e
                        }
                        image(t, e, i, s, r, o) {
                            let n = {
                                preserveAspectRatio: "none"
                            };
                            E(e) && (n.x = e), E(i) && (n.y = i), E(s) && (n.width = s), E(r) && (n.height = r);
                            let a = this.createElement("image").attr(n),
                                l = function(e) {
                                    a.attr({
                                        href: t
                                    }), o.call(a, e)
                                };
                            if (o) {
                                a.attr({
                                    href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                });
                                let e = new k.Image;
                                S(e, "load", l), e.src = t, e.complete && l({})
                            } else a.attr({
                                href: t
                            });
                            return a
                        }
                        symbol(t, e, i, s, r, o) {
                            let n, a, l, h;
                            let d = this,
                                c = /^url\((.*?)\)$/,
                                u = c.test(t),
                                f = !u && (this.symbols[t] ? t : "circle"),
                                m = f && this.symbols[f];
                            if (m) "number" == typeof e && (a = m.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), n = this.path(a), d.styledMode || n.attr("fill", "none"), L(n, {
                                symbolName: f || void 0,
                                x: e,
                                y: i,
                                width: s,
                                height: r
                            }), o && L(n, o);
                            else if (u) {
                                l = t.match(c)[1];
                                let s = n = this.image(l);
                                s.imgwidth = B(o && o.width, v[l] && v[l].width), s.imgheight = B(o && o.height, v[l] && v[l].height), h = t => t.attr({
                                    width: t.width,
                                    height: t.height
                                }), ["width", "height"].forEach(t => {
                                    s[`${t}Setter`] = function(t, e) {
                                        this[e] = t;
                                        let {
                                            alignByTranslate: i,
                                            element: s,
                                            width: r,
                                            height: n,
                                            imgwidth: a,
                                            imgheight: l
                                        } = this, h = "width" === e ? a : l, d = 1;
                                        o && "within" === o.backgroundSize && r && n && a && l ? (d = Math.min(r / a, n / l), C(s, {
                                            width: Math.round(a * d),
                                            height: Math.round(l * d)
                                        })) : s && h && s.setAttribute(e, h), !i && a && l && this.translate(((r || 0) - a * d) / 2, ((n || 0) - l * d) / 2)
                                    }
                                }), T(e) && s.attr({
                                    x: e,
                                    y: i
                                }), s.isImg = !0, T(s.imgwidth) && T(s.imgheight) ? h(s) : (s.attr({
                                    width: 0,
                                    height: 0
                                }), M("img", {
                                    onload: function() {
                                        let t = p[d.chartIndex];
                                        0 === this.width && (A(this, {
                                            position: "absolute",
                                            top: "-999em"
                                        }), g.body.appendChild(this)), v[l] = {
                                            width: this.width,
                                            height: this.height
                                        }, s.imgwidth = this.width, s.imgheight = this.height, s.element && h(s), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !t || t.hasLoaded || t.onload()
                                    },
                                    src: l
                                }), this.imgCount++)
                            }
                            return n
                        }
                        clipRect(t, e, i, s) {
                            return this.rect(t, e, i, s, 0)
                        }
                        text(t, e, i, s) {
                            let r = {};
                            if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
                            r.x = Math.round(e || 0), i && (r.y = Math.round(i)), T(t) && (r.text = t);
                            let o = this.createElement("text").attr(r);
                            return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(t, e, i) {
                                let s = i.getElementsByTagName("tspan"),
                                    r = i.getAttribute(e);
                                for (let i = 0, o; i < s.length; i++)(o = s[i]).getAttribute(e) === r && o.setAttribute(e, t);
                                i.setAttribute(e, t)
                            }), o
                        }
                        fontMetrics(t) {
                            let e = R(o.prototype.getStyle.call(t, "font-size") || 0),
                                i = e < 24 ? e + 3 : Math.round(1.2 * e),
                                s = Math.round(.8 * i);
                            return {
                                h: i,
                                b: s,
                                f: e
                            }
                        }
                        rotCorr(t, e, i) {
                            let s = t;
                            return e && i && (s = Math.max(s * Math.cos(e * u), 4)), {
                                x: -t / 3 * Math.sin(e * u),
                                y: s
                            }
                        }
                        pathToSegments(t) {
                            let e = [],
                                i = [],
                                s = {
                                    A: 8,
                                    C: 7,
                                    H: 2,
                                    L: 3,
                                    M: 3,
                                    Q: 5,
                                    S: 5,
                                    T: 3,
                                    V: 2
                                };
                            for (let r = 0; r < t.length; r++) j(i[0]) && E(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), "string" == typeof t[r] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
                            return e.push(i.slice(0)), e
                        }
                        label(t, e, i, s, r, o, a, l, h) {
                            return new n(this, t, e, i, s, r, o, a, l, h)
                        }
                        alignElements() {
                            this.alignedObjects.forEach(t => t.align())
                        }
                    }
                    return L(W.prototype, {
                        Element: o,
                        SVG_NS: b,
                        escapes: {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        },
                        symbols: a,
                        draw: y
                    }), r.registerRendererType("svg", W, !0), W
                }), i(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
                    let {
                        composed: r
                    } = e, {
                        attr: o,
                        css: n,
                        createElement: a,
                        defined: l,
                        extend: h,
                        pInt: d,
                        pushUnique: c
                    } = s;

                    function p(t, e, s) {
                        let r = this.div ? .style || s.style;
                        i.prototype[`${e}Setter`].call(this, t, e, s), r && (r[e] = t)
                    }
                    let u = (t, e) => {
                        if (!t.div) {
                            let s = o(t.element, "class"),
                                r = t.css,
                                n = a("div", s ? {
                                    className: s
                                } : void 0, {
                                    position: "absolute",
                                    left: `${t.translateX||0}px`,
                                    top: `${t.translateY||0}px`,
                                    ...t.styles,
                                    display: t.display,
                                    opacity: t.opacity,
                                    visibility: t.visibility
                                }, t.parentGroup ? .div || e);
                            t.classSetter = (t, e, i) => {
                                i.setAttribute("class", t), n.className = t
                            }, t.translateXSetter = t.translateYSetter = (e, i) => {
                                t[i] = e, n.style["translateX" === i ? "left" : "top"] = `${e}px`, t.doTransform = !0
                            }, t.opacitySetter = t.visibilitySetter = p, t.css = e => (r.call(t, e), e.cursor && (n.style.cursor = e.cursor), e.pointerEvents && (n.style.pointerEvents = e.pointerEvents), t), t.on = function() {
                                return i.prototype.on.apply({
                                    element: n,
                                    onEvents: t.onEvents
                                }, arguments), t
                            }, t.div = n
                        }
                        return t.div
                    };
                    class g extends i {
                        static compose(t) {
                            c(r, this.compose) && (t.prototype.html = function(t, e, i) {
                                return new g(this, "span").attr({
                                    text: t,
                                    x: Math.round(e),
                                    y: Math.round(i)
                                })
                            })
                        }
                        constructor(t, e) {
                            super(t, e), this.css({
                                position: "absolute",
                                ...t.styledMode ? {} : {
                                    fontFamily: t.style.fontFamily,
                                    fontSize: t.style.fontSize
                                }
                            }), this.element.style.whiteSpace = "nowrap"
                        }
                        getSpanCorrection(t, e, i) {
                            this.xCorr = -t * i, this.yCorr = -e
                        }
                        css(t) {
                            let e;
                            let {
                                element: i
                            } = this, s = "SPAN" === i.tagName && t && "width" in t, r = s && t.width;
                            return s && (delete t.width, this.textWidth = d(r) || void 0, e = !0), t ? .textOverflow === "ellipsis" && (t.whiteSpace = "nowrap", t.overflow = "hidden"), h(this.styles, t), n(i, t), e && this.updateTransform(), this
                        }
                        htmlGetBBox() {
                            let {
                                element: t
                            } = this;
                            return {
                                x: t.offsetLeft,
                                y: t.offsetTop,
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            }
                        }
                        updateTransform() {
                            if (!this.added) {
                                this.alignOnAdd = !0;
                                return
                            }
                            let {
                                element: t,
                                renderer: e,
                                rotation: i,
                                rotationOriginX: s,
                                rotationOriginY: r,
                                styles: o,
                                textAlign: a = "left",
                                textWidth: h,
                                translateX: d = 0,
                                translateY: c = 0,
                                x: p = 0,
                                y: u = 0
                            } = this, g = o.whiteSpace;
                            if (n(t, {
                                    marginLeft: `${d}px`,
                                    marginTop: `${c}px`
                                }), "SPAN" === t.tagName) {
                                let o = [i, a, t.innerHTML, h, this.textAlign].join(","),
                                    d = -(this.parentGroup ? .padding * 1) || 0,
                                    c, f = !1;
                                if (h !== this.oldTextWidth) {
                                    let e = this.textPxLength ? this.textPxLength : (n(t, {
                                            width: "",
                                            whiteSpace: g || "nowrap"
                                        }), t.offsetWidth),
                                        s = h || 0;
                                    (s > this.oldTextWidth || e > s) && (/[ \-]/.test(t.textContent || t.innerText) || "ellipsis" === t.style.textOverflow) && (n(t, {
                                        width: e > s || i ? h + "px" : "auto",
                                        display: "block",
                                        whiteSpace: g || "normal"
                                    }), this.oldTextWidth = h, f = !0)
                                }
                                this.hasBoxWidthChanged = f, o !== this.cTT && (c = e.fontMetrics(t).b, l(i) && (i !== (this.oldRotation || 0) || a !== this.oldAlign) && this.setSpanRotation(i, d, d), this.getSpanCorrection(!l(i) && this.textPxLength || t.offsetWidth, c, {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                }[a]));
                                let {
                                    xCorr: m = 0,
                                    yCorr: x = 0
                                } = this, y = (s ? ? p) - m - p - d, b = (r ? ? u) - x - u - d;
                                n(t, {
                                    left: `${p+m}px`,
                                    top: `${u+x}px`,
                                    transformOrigin: `${y}px ${b}px`
                                }), this.cTT = o, this.oldRotation = i, this.oldAlign = a
                            }
                        }
                        setSpanRotation(t, e, i) {
                            n(this.element, {
                                transform: `rotate(${t}deg)`,
                                transformOrigin: `${e}% ${i}px`
                            })
                        }
                        add(t) {
                            let e;
                            let i = this.renderer.box.parentNode,
                                s = [];
                            if (this.parentGroup = t, t && !(e = t.div)) {
                                let r = t;
                                for (; r;) s.push(r), r = r.parentGroup;
                                for (let t of s.reverse()) e = u(t, i)
                            }
                            return (e || i).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this
                        }
                        textSetter(e) {
                            e !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t.setElementHTML(this.element, e ? ? ""), this.textStr = e, this.doTransform = !0)
                        }
                        alignSetter(t) {
                            this.alignValue = this.textAlign = t, this.doTransform = !0
                        }
                        xSetter(t, e) {
                            this[e] = t, this.doTransform = !0
                        }
                    }
                    let f = g.prototype;
                    return f.visibilitySetter = f.opacitySetter = p, f.ySetter = f.rotationSetter = f.rotationOriginXSetter = f.rotationOriginYSetter = f.xSetter, g
                }), i(e, "Core/Axis/AxisDefaults.js", [], function() {
                    var t, e;
                    return (e = t || (t = {})).xAxis = {
                        alignTicks: !0,
                        allowDecimals: void 0,
                        panningEnabled: !0,
                        zIndex: 2,
                        zoomEnabled: !0,
                        dateTimeLabelFormats: {
                            millisecond: {
                                main: "%H:%M:%S.%L",
                                range: !1
                            },
                            second: {
                                main: "%H:%M:%S",
                                range: !1
                            },
                            minute: {
                                main: "%H:%M",
                                range: !1
                            },
                            hour: {
                                main: "%H:%M",
                                range: !1
                            },
                            day: {
                                main: "%e %b"
                            },
                            week: {
                                main: "%e %b"
                            },
                            month: {
                                main: "%b '%y"
                            },
                            year: {
                                main: "%Y"
                            }
                        },
                        endOnTick: !1,
                        gridLineDashStyle: "Solid",
                        gridZIndex: 1,
                        labels: {
                            autoRotationLimit: 80,
                            distance: 15,
                            enabled: !0,
                            indentation: 10,
                            overflow: "justify",
                            reserveSpace: void 0,
                            rotation: void 0,
                            staggerLines: 0,
                            step: 0,
                            useHTML: !1,
                            zIndex: 7,
                            style: {
                                color: "#333333",
                                cursor: "default",
                                fontSize: "0.8em"
                            }
                        },
                        maxPadding: .01,
                        minorGridLineDashStyle: "Solid",
                        minorTickLength: 2,
                        minorTickPosition: "outside",
                        minorTicksPerMajor: 5,
                        minPadding: .01,
                        offset: void 0,
                        reversed: void 0,
                        reversedStacks: !1,
                        showEmpty: !0,
                        showFirstLabel: !0,
                        showLastLabel: !0,
                        startOfWeek: 1,
                        startOnTick: !1,
                        tickLength: 10,
                        tickPixelInterval: 100,
                        tickmarkPlacement: "between",
                        tickPosition: "outside",
                        title: {
                            align: "middle",
                            useHTML: !1,
                            x: 0,
                            y: 0,
                            style: {
                                color: "#666666",
                                fontSize: "0.8em"
                            }
                        },
                        type: "linear",
                        uniqueNames: !0,
                        visible: !0,
                        minorGridLineColor: "#f2f2f2",
                        minorGridLineWidth: 1,
                        minorTickColor: "#999999",
                        lineColor: "#333333",
                        lineWidth: 1,
                        gridLineColor: "#e6e6e6",
                        gridLineWidth: void 0,
                        tickColor: "#333333"
                    }, e.yAxis = {
                        reversedStacks: !0,
                        endOnTick: !0,
                        maxPadding: .05,
                        minPadding: .05,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: {
                            x: void 0
                        },
                        startOnTick: !0,
                        title: {
                            text: "Values"
                        },
                        stackLabels: {
                            animation: {},
                            allowOverlap: !1,
                            enabled: !1,
                            crop: !0,
                            overflow: "justify",
                            formatter: function() {
                                let {
                                    numberFormatter: t
                                } = this.axis.chart;
                                return t(this.total || 0, -1)
                            },
                            style: {
                                color: "#000000",
                                fontSize: "0.7em",
                                fontWeight: "bold",
                                textOutline: "1px contrast"
                            }
                        },
                        gridLineWidth: 1,
                        lineWidth: 0
                    }, t
                }), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        addEvent: i,
                        isFunction: s,
                        objectEach: r,
                        removeEvent: o
                    } = t;
                    return (e || (e = {})).registerEventOptions = function(t, e) {
                        t.eventOptions = t.eventOptions || {}, r(e.events, function(e, r) {
                            t.eventOptions[r] !== e && (t.eventOptions[r] && (o(t, r, t.eventOptions[r]), delete t.eventOptions[r]), s(e) && (t.eventOptions[r] = e, i(t, r, e, {
                                order: 0
                            })))
                        })
                    }, e
                }), i(e, "Core/Axis/Tick.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        deg2rad: s
                    } = e, {
                        clamp: r,
                        correctFloat: o,
                        defined: n,
                        destroyObjectProperties: a,
                        extend: l,
                        fireEvent: h,
                        isNumber: d,
                        merge: c,
                        objectEach: p,
                        pick: u
                    } = i;
                    return class {
                        constructor(t, e, i, s, r) {
                            this.isNew = !0, this.isNewLabel = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, h(this, "init"), i || s || this.addLabel()
                        }
                        addLabel() {
                            let e = this,
                                i = e.axis,
                                s = i.options,
                                r = i.chart,
                                a = i.categories,
                                c = i.logarithmic,
                                p = i.names,
                                g = e.pos,
                                f = u(e.options && e.options.labels, s.labels),
                                m = i.tickPositions,
                                x = g === m[0],
                                y = g === m[m.length - 1],
                                b = (!f.step || 1 === f.step) && 1 === i.tickInterval,
                                v = m.info,
                                k = e.label,
                                S, C, M, w = this.parameters.category || (a ? u(a[g], p[g], g) : g);
                            c && d(w) && (w = o(c.lin2log(w))), i.dateTime && (v ? S = (C = r.time.resolveDTLFormat(s.dateTimeLabelFormats[!s.grid && v.higherRanks[g] || v.unitName])).main : d(w) && (S = i.dateTime.getXDateFormat(w, s.dateTimeLabelFormats || {}))), e.isFirst = x, e.isLast = y;
                            let A = {
                                axis: i,
                                chart: r,
                                dateTimeLabelFormat: S,
                                isFirst: x,
                                isLast: y,
                                pos: g,
                                tick: e,
                                tickPositionInfo: v,
                                value: w
                            };
                            h(this, "labelFormat", A);
                            let T = e => f.formatter ? f.formatter.call(e, e) : f.format ? (e.text = i.defaultLabelFormatter.call(e), t.format(f.format, e, r)) : i.defaultLabelFormatter.call(e),
                                P = T.call(A, A),
                                L = C && C.list;
                            L ? e.shortenLabel = function() {
                                for (M = 0; M < L.length; M++)
                                    if (l(A, {
                                            dateTimeLabelFormat: L[M]
                                        }), k.attr({
                                            text: T.call(A, A)
                                        }), k.getBBox().width < i.getSlotWidth(e) - 2 * (f.padding || 0)) return;
                                k.attr({
                                    text: ""
                                })
                            } : e.shortenLabel = void 0, b && i._addedPlotLB && e.moveLabel(P, f), n(k) || e.movedLabel ? k && k.textStr !== P && !b && (!k.textWidth || f.style.width || k.styles.width || k.css({
                                width: null
                            }), k.attr({
                                text: P
                            }), k.textPxLength = k.getBBox().width) : (e.label = k = e.createLabel(P, f), e.rotation = 0)
                        }
                        createLabel(t, e, i) {
                            let s = this.axis,
                                r = s.chart,
                                o = n(t) && e.enabled ? r.renderer.text(t, i ? .x, i ? .y, e.useHTML).add(s.labelGroup) : void 0;
                            return o && (r.styledMode || o.css(c(e.style)), o.textPxLength = o.getBBox().width), o
                        }
                        destroy() {
                            a(this, this.axis)
                        }
                        getPosition(t, e, i, s) {
                            let n = this.axis,
                                a = n.chart,
                                l = s && a.oldChartHeight || a.chartHeight,
                                d = {
                                    x: t ? o(n.translate(e + i, void 0, void 0, s) + n.transB) : n.left + n.offset + (n.opposite ? (s && a.oldChartWidth || a.chartWidth) - n.right - n.left : 0),
                                    y: t ? l - n.bottom + n.offset - (n.opposite ? n.height : 0) : o(l - n.translate(e + i, void 0, void 0, s) - n.transB)
                                };
                            return d.y = r(d.y, -1e5, 1e5), h(this, "afterGetPosition", {
                                pos: d
                            }), d
                        }
                        getLabelPosition(t, e, i, r, o, a, l, d) {
                            let c, p;
                            let g = this.axis,
                                f = g.transA,
                                m = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed,
                                x = g.staggerLines,
                                y = g.tickRotCorr || {
                                    x: 0,
                                    y: 0
                                },
                                b = r || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? .5 : 1),
                                v = o.distance,
                                k = {};
                            return c = 0 === g.side ? i.rotation ? -v : -i.getBBox().height : 2 === g.side ? y.y + v : Math.cos(i.rotation * s) * (y.y - i.getBBox(!1, 0).height / 2), n(o.y) && (c = 0 === g.side && g.horiz ? o.y + c : o.y), t = t + u(o.x, [0, 1, 0, -1][g.side] * v) + b + y.x - (a && r ? a * f * (m ? -1 : 1) : 0), e = e + c - (a && !r ? a * f * (m ? 1 : -1) : 0), x && (p = l / (d || 1) % x, g.opposite && (p = x - p - 1), e += g.labelOffset / x * p), k.x = t, k.y = Math.round(e), h(this, "afterGetLabelPosition", {
                                pos: k,
                                tickmarkOffset: a,
                                index: l
                            }), k
                        }
                        getLabelSize() {
                            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                        }
                        getMarkPath(t, e, i, s, r = !1, o) {
                            return o.crispLine([
                                ["M", t, e],
                                ["L", t + (r ? 0 : -i), e + (r ? i : 0)]
                            ], s)
                        }
                        handleOverflow(t) {
                            let e = this.axis,
                                i = e.options.labels,
                                r = t.x,
                                o = e.chart.chartWidth,
                                n = e.chart.spacing,
                                a = u(e.labelLeft, Math.min(e.pos, n[3])),
                                l = u(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, o - n[1])),
                                h = this.label,
                                d = this.rotation,
                                c = {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                }[e.labelAlign || h.attr("align")],
                                p = h.getBBox().width,
                                g = e.getSlotWidth(this),
                                f = {},
                                m = g,
                                x = 1,
                                y, b, v;
                            d || "justify" !== i.overflow ? d < 0 && r - c * p < a ? v = Math.round(r / Math.cos(d * s) - a) : d > 0 && r + c * p > l && (v = Math.round((o - r) / Math.cos(d * s))) : (y = r - c * p, b = r + (1 - c) * p, y < a ? m = t.x + m * (1 - c) - a : b > l && (m = l - t.x + m * c, x = -1), (m = Math.min(g, m)) < g && "center" === e.labelAlign && (t.x += x * (g - m - c * (g - Math.min(p, m)))), (p > m || e.autoRotation && (h.styles || {}).width) && (v = m)), v && (this.shortenLabel ? this.shortenLabel() : (f.width = Math.floor(v) + "px", (i.style || {}).textOverflow || (f.textOverflow = "ellipsis"), h.css(f)))
                        }
                        moveLabel(t, e) {
                            let i = this,
                                s = i.label,
                                r = i.axis,
                                o = !1,
                                n;
                            s && s.textStr === t ? (i.movedLabel = s, o = !0, delete i.label) : p(r.ticks, function(e) {
                                o || e.isNew || e === i || !e.label || e.label.textStr !== t || (i.movedLabel = e.label, o = !0, e.labelPos = i.movedLabel.xy, delete e.label)
                            }), !o && (i.labelPos || s) && (n = i.labelPos || s.xy, i.movedLabel = i.createLabel(t, e, n), i.movedLabel && i.movedLabel.attr({
                                opacity: 0
                            }))
                        }
                        render(t, e, i) {
                            let s = this.axis,
                                r = s.horiz,
                                n = this.pos,
                                a = u(this.tickmarkOffset, s.tickmarkOffset),
                                l = this.getPosition(r, n, a, e),
                                d = l.x,
                                c = l.y,
                                p = s.pos,
                                g = p + s.len,
                                f = r ? d : c;
                            !s.chart.polar && this.isNew && (o(f) < p || f > g) && (i = 0);
                            let m = u(i, this.label && this.label.newOpacity, 1);
                            i = u(i, 1), this.isActive = !0, this.renderGridLine(e, i), this.renderMark(l, i), this.renderLabel(l, e, m, t), this.isNew = !1, h(this, "afterRender")
                        }
                        renderGridLine(t, e) {
                            let i = this.axis,
                                s = i.options,
                                r = {},
                                o = this.pos,
                                n = this.type,
                                a = u(this.tickmarkOffset, i.tickmarkOffset),
                                l = i.chart.renderer,
                                h = this.gridLine,
                                d, c = s.gridLineWidth,
                                p = s.gridLineColor,
                                g = s.gridLineDashStyle;
                            "minor" === this.type && (c = s.minorGridLineWidth, p = s.minorGridLineColor, g = s.minorGridLineDashStyle), h || (i.chart.styledMode || (r.stroke = p, r["stroke-width"] = c || 0, r.dashstyle = g), n || (r.zIndex = 1), t && (e = 0), this.gridLine = h = l.path().attr(r).addClass("highcharts-" + (n ? n + "-" : "") + "grid-line").add(i.gridGroup)), h && (d = i.getPlotLinePath({
                                value: o + a,
                                lineWidth: h.strokeWidth(),
                                force: "pass",
                                old: t,
                                acrossPanes: !1
                            })) && h[t || this.isNew ? "attr" : "animate"]({
                                d: d,
                                opacity: e
                            })
                        }
                        renderMark(t, e) {
                            let i = this.axis,
                                s = i.options,
                                r = i.chart.renderer,
                                o = this.type,
                                n = i.tickSize(o ? o + "Tick" : "tick"),
                                a = t.x,
                                l = t.y,
                                h = u(s["minor" !== o ? "tickWidth" : "minorTickWidth"], !o && i.isXAxis ? 1 : 0),
                                d = s["minor" !== o ? "tickColor" : "minorTickColor"],
                                c = this.mark,
                                p = !c;
                            n && (i.opposite && (n[0] = -n[0]), c || (this.mark = c = r.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(i.axisGroup), i.chart.styledMode || c.attr({
                                stroke: d,
                                "stroke-width": h
                            })), c[p ? "attr" : "animate"]({
                                d: this.getMarkPath(a, l, n[0], c.strokeWidth(), i.horiz, r),
                                opacity: e
                            }))
                        }
                        renderLabel(t, e, i, s) {
                            let r = this.axis,
                                o = r.horiz,
                                n = r.options,
                                a = this.label,
                                l = n.labels,
                                h = l.step,
                                c = u(this.tickmarkOffset, r.tickmarkOffset),
                                p = t.x,
                                g = t.y,
                                f = !0;
                            a && d(p) && (a.xy = t = this.getLabelPosition(p, g, a, o, l, c, s, h), (!this.isFirst || this.isLast || n.showFirstLabel) && (!this.isLast || this.isFirst || n.showLastLabel) ? !o || l.step || l.rotation || e || 0 === i || this.handleOverflow(t) : f = !1, h && s % h && (f = !1), f && d(t.y) ? (t.opacity = i, a[this.isNewLabel ? "attr" : "animate"](t).show(!0), this.isNewLabel = !1) : (a.hide(), this.isNewLabel = !0))
                        }
                        replaceMovedLabel() {
                            let t = this.label,
                                e = this.axis;
                            t && !this.isNew && (t.animate({
                                opacity: 0
                            }, void 0, t.destroy), delete this.label), e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                        }
                    }
                }), i(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, n, a) {
                    let {
                        animObject: l
                    } = t, {
                        xAxis: h,
                        yAxis: d
                    } = e, {
                        defaultOptions: c
                    } = s, {
                        registerEventOptions: p
                    } = r, {
                        deg2rad: u
                    } = o, {
                        arrayMax: g,
                        arrayMin: f,
                        clamp: m,
                        correctFloat: x,
                        defined: y,
                        destroyObjectProperties: b,
                        erase: v,
                        error: k,
                        extend: S,
                        fireEvent: C,
                        getClosestDistance: M,
                        insertItem: w,
                        isArray: A,
                        isNumber: T,
                        isString: P,
                        merge: L,
                        normalizeTickInterval: O,
                        objectEach: E,
                        pick: D,
                        relativeLength: j,
                        removeEvent: I,
                        splat: B,
                        syncTimeout: R
                    } = a, z = (t, e) => O(e, void 0, void 0, D(t.options.allowDecimals, e < .5 || void 0 !== t.tickAmount), !!t.tickAmount);
                    S(c, {
                        xAxis: h,
                        yAxis: L(h, d)
                    });
                    class N {
                        constructor(t, e, i) {
                            this.init(t, e, i)
                        }
                        init(t, e, i = this.coll) {
                            let s = "xAxis" === i,
                                r = this.isZAxis || (t.inverted ? !s : s);
                            this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, C(this, "init", {
                                userOptions: e
                            }), this.opposite = D(e.opposite, this.opposite), this.side = D(e.side, this.side, r ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
                            let o = this.options,
                                n = o.labels,
                                a = o.type;
                            this.userOptions = e, this.minPixelPadding = 0, this.reversed = D(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = "category" === a || !0 === o.categories, this.categories = A(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = y(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ? ? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
                            let l = D(o.crosshair, B(t.options.tooltip.crosshairs)[s ? 0 : 1]);
                            this.crosshair = !0 === l ? {} : l, -1 === t.axes.indexOf(this) && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), w(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !y(this.reversed) && (this.reversed = !0), this.labelRotation = T(n.rotation) ? n.rotation : void 0, p(this, o), C(this, "afterInit")
                        }
                        setOptions(t) {
                            let e = this.horiz ? {
                                labels: {
                                    autoRotation: [-45],
                                    padding: 4
                                },
                                margin: 15
                            } : {
                                labels: {
                                    padding: 1
                                },
                                title: {
                                    rotation: 90 * this.side
                                }
                            };
                            this.options = L(e, c[this.coll], t), C(this, "afterSetOptions", {
                                userOptions: t
                            })
                        }
                        defaultLabelFormatter() {
                            let t = this.axis,
                                {
                                    numberFormatter: e
                                } = this.chart,
                                i = T(this.value) ? this.value : NaN,
                                s = t.chart.time,
                                r = t.categories,
                                o = this.dateTimeLabelFormat,
                                n = c.lang,
                                a = n.numericSymbols,
                                l = n.numericSymbolMagnitude || 1e3,
                                h = t.logarithmic ? Math.abs(i) : t.tickInterval,
                                d = a && a.length,
                                p, u;
                            if (r) u = `${this.value}`;
                            else if (o) u = s.dateFormat(o, i);
                            else if (d && a && h >= 1e3)
                                for (; d-- && void 0 === u;) h >= (p = Math.pow(l, d + 1)) && 10 * i % p == 0 && null !== a[d] && 0 !== i && (u = e(i / p, -1) + a[d]);
                            return void 0 === u && (u = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), u
                        }
                        getSeriesExtremes() {
                            let t;
                            let e = this;
                            C(this, "getSeriesExtremes", null, function() {
                                e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach(i => {
                                    if (i.reserveSpace()) {
                                        let s = i.options,
                                            r, o = s.threshold,
                                            n, a;
                                        if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis)(r = i.xData) && r.length && (r = e.logarithmic ? r.filter(t => t > 0) : r, n = (t = i.getXExtremes(r)).min, a = t.max, T(n) || n instanceof Date || (r = r.filter(T), n = (t = i.getXExtremes(r)).min, a = t.max), r.length && (e.dataMin = Math.min(D(e.dataMin, n), n), e.dataMax = Math.max(D(e.dataMax, a), a)));
                                        else {
                                            let t = i.applyExtremes();
                                            T(t.dataMin) && (n = t.dataMin, e.dataMin = Math.min(D(e.dataMin, n), n)), T(t.dataMax) && (a = t.dataMax, e.dataMax = Math.max(D(e.dataMax, a), a)), y(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
                                        }
                                    }
                                })
                            }), C(this, "afterGetSeriesExtremes")
                        }
                        translate(t, e, i, s, r, o) {
                            let n = this.linkedParent || this,
                                a = s && n.old ? n.old.min : n.min;
                            if (!T(a)) return NaN;
                            let l = n.minPixelPadding,
                                h = (n.isOrdinal || n.brokenAxis ? .hasBreaks || n.logarithmic && r) && n.lin2val,
                                d = 1,
                                c = 0,
                                p = s && n.old ? n.old.transA : n.transA,
                                u = 0;
                            return p || (p = n.transA), i && (d *= -1, c = n.len), n.reversed && (d *= -1, c -= d * (n.sector || n.len)), e ? (u = (t = t * d + c - l) / p + a, h && (u = n.lin2val(u))) : (h && (t = n.val2lin(t)), u = d * (t - a) * p + c + d * l + (T(o) ? p * o : 0), n.isRadial || (u = x(u))), u
                        }
                        toPixels(t, e) {
                            return this.translate(t, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos)
                        }
                        toValue(t, e) {
                            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0)
                        }
                        getPlotLinePath(t) {
                            let e = this,
                                i = e.chart,
                                s = e.left,
                                r = e.top,
                                o = t.old,
                                n = t.value,
                                a = t.lineWidth,
                                l = o && i.oldChartHeight || i.chartHeight,
                                h = o && i.oldChartWidth || i.chartWidth,
                                d = e.transB,
                                c = t.translatedValue,
                                p = t.force,
                                u, g, f, x, y;

                            function b(t, e, i) {
                                return "pass" !== p && (t < e || t > i) && (p ? t = m(t, e, i) : y = !0), t
                            }
                            let v = {
                                value: n,
                                lineWidth: a,
                                old: o,
                                force: p,
                                acrossPanes: t.acrossPanes,
                                translatedValue: c
                            };
                            return C(this, "getPlotLinePath", v, function(t) {
                                u = f = (c = m(c = D(c, e.translate(n, void 0, void 0, o)), -1e5, 1e5)) + d, g = x = l - c - d, T(c) ? e.horiz ? (g = r, x = l - e.bottom + (i.scrollablePixelsY || 0), u = f = b(u, s, s + e.width)) : (u = s, f = h - e.right + (i.scrollablePixelsX || 0), g = x = b(g, r, r + e.height)) : (y = !0, p = !1), t.path = y && !p ? void 0 : i.renderer.crispLine([
                                    ["M", u, g],
                                    ["L", f, x]
                                ], a || 1)
                            }), v.path
                        }
                        getLinearTickPositions(t, e, i) {
                            let s, r, o;
                            let n = x(Math.floor(e / t) * t),
                                a = x(Math.ceil(i / t) * t),
                                l = [];
                            if (x(n + t) === n && (o = 20), this.single) return [e];
                            for (s = n; s <= a && (l.push(s), (s = x(s + t, o)) !== r);) r = s;
                            return l
                        }
                        getMinorTickInterval() {
                            let {
                                minorTicks: t,
                                minorTickInterval: e
                            } = this.options;
                            return !0 === t ? D(e, "auto") : !1 !== t ? e : void 0
                        }
                        getMinorTickPositions() {
                            let t = this.options,
                                e = this.tickPositions,
                                i = this.minorTickInterval,
                                s = this.pointRangePadding || 0,
                                r = (this.min || 0) - s,
                                o = (this.max || 0) + s,
                                n = o - r,
                                a = [],
                                l;
                            if (n && n / i < this.len / 3) {
                                let s = this.logarithmic;
                                if (s) this.paddedTicks.forEach(function(t, e, r) {
                                    e && a.push.apply(a, s.getLogTickPositions(i, r[e - 1], r[e], !0))
                                });
                                else if (this.dateTime && "auto" === this.getMinorTickInterval()) a = a.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
                                else
                                    for (l = r + (e[0] - r) % i; l <= o && l !== a[0]; l += i) a.push(l)
                            }
                            return 0 !== a.length && this.trimTicks(a), a
                        }
                        adjustForMinRange() {
                            let t = this.options,
                                e = this.logarithmic,
                                {
                                    max: i,
                                    min: s,
                                    minRange: r
                                } = this,
                                o, n, a, l;
                            this.isXAxis && void 0 === r && !e && (r = y(t.min) || y(t.max) || y(t.floor) || y(t.ceiling) ? null : Math.min(5 * (M(this.series.map(t => (t.xIncrement ? t.xData ? .slice(0, 2) : t.xData) || [])) || 0), this.dataMax - this.dataMin)), T(i) && T(s) && T(r) && i - s < r && (n = this.dataMax - this.dataMin >= r, o = (r - i + s) / 2, a = [s - o, D(t.min, s - o)], n && (a[2] = e ? e.log2lin(this.dataMin) : this.dataMin), l = [(s = g(a)) + r, D(t.max, s + r)], n && (l[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (i = f(l)) - s < r && (a[0] = i - r, a[1] = D(t.min, i - r), s = g(a))), this.minRange = r, this.min = s, this.max = i
                        }
                        getClosest() {
                            let t, e;
                            if (this.categories) e = 1;
                            else {
                                let i = [];
                                this.series.forEach(function(t) {
                                    let s = t.closestPointRange;
                                    t.xData ? .length === 1 ? i.push(t.xData[0]) : !t.noSharedTooltip && y(s) && t.reserveSpace() && (e = y(e) ? Math.min(e, s) : s)
                                }), i.length && (i.sort((t, e) => t - e), t = M([i]))
                            }
                            return t && e ? Math.min(t, e) : t || e
                        }
                        nameToX(t) {
                            let e = A(this.options.categories),
                                i = e ? this.categories : this.names,
                                s = t.options.x,
                                r;
                            return t.series.requireSorting = !1, y(s) || (s = this.options.uniqueNames && i ? e ? i.indexOf(t.name) : D(i.keys[t.name], -1) : t.series.autoIncrement()), -1 === s ? !e && i && (r = i.length) : r = s, void 0 !== r ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r
                        }
                        updateNames() {
                            let t = this,
                                e = this.names;
                            e.length > 0 && (Object.keys(e.keys).forEach(function(t) {
                                delete e.keys[t]
                            }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(e => {
                                e.xIncrement = null, (!e.points || e.isDirtyData) && (t.max = Math.max(t.max, e.xData.length - 1), e.processData(), e.generatePoints()), e.data.forEach(function(i, s) {
                                    let r;
                                    i ? .options && void 0 !== i.name && void 0 !== (r = t.nameToX(i)) && r !== i.x && (i.x = r, e.xData[s] = r)
                                })
                            }))
                        }
                        setAxisTranslation() {
                            let t = this,
                                e = t.max - t.min,
                                i = t.linkedParent,
                                s = !!t.categories,
                                r = t.isXAxis,
                                o = t.axisPointRange || 0,
                                n, a = 0,
                                l = 0,
                                h, d = t.transA;
                            (r || s || o) && (n = t.getClosest(), i ? (a = i.minPointOffset, l = i.pointRangePadding) : t.series.forEach(function(e) {
                                let i = s ? 1 : r ? D(e.options.pointRange, n, 0) : t.axisPointRange || 0,
                                    h = e.options.pointPlacement;
                                if (o = Math.max(o, i), !t.single || s) {
                                    let t = e.is("xrange") ? !r : r;
                                    a = Math.max(a, t && P(h) ? 0 : i / 2), l = Math.max(l, t && "on" === h ? 0 : i)
                                }
                            }), h = t.ordinal && t.ordinal.slope && n ? t.ordinal.slope / n : 1, t.minPointOffset = a *= h, t.pointRangePadding = l *= h, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && n && (t.closestPointRange = n)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + l || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * a, C(this, "afterSetAxisTranslation")
                        }
                        minFromRange() {
                            let {
                                max: t,
                                min: e
                            } = this;
                            return T(t) && T(e) && t - e || void 0
                        }
                        setTickInterval(t) {
                            let {
                                categories: e,
                                chart: i,
                                dataMax: s,
                                dataMin: r,
                                dateTime: o,
                                isXAxis: n,
                                logarithmic: a,
                                options: l,
                                softThreshold: h
                            } = this, d = T(this.threshold) ? this.threshold : void 0, c = this.minRange || 0, {
                                ceiling: p,
                                floor: u,
                                linkedTo: g,
                                softMax: f,
                                softMin: m
                            } = l, b = T(g) && i[this.coll] ? .[g], v = l.tickPixelInterval, S = l.maxPadding, M = l.minPadding, w = 0, A, P = T(l.tickInterval) && l.tickInterval >= 0 ? l.tickInterval : void 0, L, O, E, j;
                            if (o || e || b || this.getTickAmount(), E = D(this.userMin, l.min), j = D(this.userMax, l.max), b ? (this.linkedParent = b, A = b.getExtremes(), this.min = D(A.min, A.dataMin), this.max = D(A.max, A.dataMax), l.type !== b.options.type && k(11, !0, i)) : (h && y(d) && T(s) && T(r) && (r >= d ? (L = d, M = 0) : s <= d && (O = d, S = 0)), this.min = D(E, L, r), this.max = D(j, O, s)), T(this.max) && T(this.min) && (a && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, D(r, this.min)) && k(10, !0, i), this.min = x(a.log2lin(this.min), 16), this.max = x(a.log2lin(this.max), 16)), this.range && T(r) && (this.userMin = this.min = E = Math.max(r, this.minFromRange() || 0), this.userMax = j = this.max, this.range = void 0)), C(this, "foundExtremes"), this.adjustForMinRange(), T(this.min) && T(this.max)) {
                                if (!T(this.userMin) && T(m) && m < this.min && (this.min = E = m), !T(this.userMax) && T(f) && f > this.max && (this.max = j = f), e || this.axisPointRange || this.stacking ? .usePercentage || b || !(w = this.max - this.min) || (!y(E) && M && (this.min -= w * M), y(j) || !S || (this.max += w * S)), !T(this.userMin) && T(u) && (this.min = Math.max(this.min, u)), !T(this.userMax) && T(p) && (this.max = Math.min(this.max, p)), h && T(r) && T(s)) {
                                    let t = d || 0;
                                    !y(E) && this.min < t && r >= t ? this.min = l.minRange ? Math.min(t, this.max - c) : t : !y(j) && this.max > t && s <= t && (this.max = l.minRange ? Math.max(t, this.min + c) : t)
                                }!i.polar && this.min > this.max && (y(l.min) ? this.max = this.min : y(l.max) && (this.min = this.max)), w = this.max - this.min
                            }
                            if (this.min !== this.max && T(this.min) && T(this.max) ? b && !P && v === b.options.tickPixelInterval ? this.tickInterval = P = b.tickInterval : this.tickInterval = D(P, this.tickAmount ? w / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : w * v / Math.max(this.len, v)) : this.tickInterval = 1, n && !t) {
                                let t = this.min !== this.old ? .min || this.max !== this.old ? .max;
                                this.series.forEach(function(e) {
                                    e.forceCrop = e.forceCropping ? .(), e.processData(t)
                                }), C(this, "postProcessData", {
                                    hasExtremesChanged: t
                                })
                            }
                            this.setAxisTranslation(), C(this, "initialAxisTranslation"), this.pointRange && !P && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
                            let I = D(l.minTickInterval, o && !this.series.some(t => t.noSharedTooltip) ? this.closestPointRange : 0);
                            !P && this.tickInterval < I && (this.tickInterval = I), o || a || P || (this.tickInterval = z(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions()
                        }
                        setTickPositions() {
                            let t = this.options,
                                e = t.tickPositions,
                                i = t.tickPositioner,
                                s = this.getMinorTickInterval(),
                                r = !this.isPanning,
                                o = r && t.startOnTick,
                                n = r && t.endOnTick,
                                a = [],
                                l;
                            if (this.tickmarkOffset = this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === s && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.single = this.min === this.max && y(this.min) && !this.tickAmount && (this.min % 1 == 0 || !1 !== t.allowDecimals), e) a = e.slice();
                            else if (T(this.min) && T(this.max)) {
                                if (!this.ordinal ? .positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) a = [this.min, this.max], k(19, !1, this.chart);
                                else if (this.dateTime) a = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal ? .positions, this.closestPointRange, !0);
                                else if (this.logarithmic) a = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                                else {
                                    let t = this.tickInterval,
                                        e = t;
                                    for (; e <= 2 * t;)
                                        if (a = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && a.length > this.tickAmount) this.tickInterval = z(this, e *= 1.1);
                                        else break
                                }
                                a.length > this.len && (a = [a[0], a[a.length - 1]])[0] === a[1] && (a.length = 1), i && (this.tickPositions = a, (l = i.apply(this, [this.min, this.max])) && (a = l))
                            }
                            this.tickPositions = a, this.paddedTicks = a.slice(0), this.trimTicks(a, o, n), !this.isLinked && T(this.min) && T(this.max) && (this.single && a.length < 2 && !this.categories && !this.series.some(t => t.is("heatmap") && "between" === t.options.pointPlacement) && (this.min -= .5, this.max += .5), e || l || this.adjustTickAmount()), C(this, "afterSetTickPositions")
                        }
                        trimTicks(t, e, i) {
                            let s = t[0],
                                r = t[t.length - 1],
                                o = !this.isOrdinal && this.minPointOffset || 0;
                            if (C(this, "trimTicks"), !this.isLinked) {
                                if (e && s !== -1 / 0) this.min = s;
                                else
                                    for (; this.min - o > t[0];) t.shift();
                                if (i) this.max = r;
                                else
                                    for (; this.max + o < t[t.length - 1];) t.pop();
                                0 === t.length && y(s) && !this.options.tickPositions && t.push((r + s) / 2)
                            }
                        }
                        alignToOthers() {
                            let t;
                            let e = this,
                                i = e.chart,
                                s = [this],
                                r = e.options,
                                o = i.options.chart,
                                n = "yAxis" === this.coll && o.alignThresholds,
                                a = [];
                            if (e.thresholdAlignment = void 0, (!1 !== o.alignTicks && r.alignTicks || n) && !1 !== r.startOnTick && !1 !== r.endOnTick && !e.logarithmic) {
                                let r = t => {
                                        let {
                                            horiz: e,
                                            options: i
                                        } = t;
                                        return [e ? i.left : i.top, i.width, i.height, i.pane].join(",")
                                    },
                                    o = r(this);
                                i[this.coll].forEach(function(i) {
                                    let {
                                        series: n
                                    } = i;
                                    n.length && n.some(t => t.visible) && i !== e && r(i) === o && (t = !0, s.push(i))
                                })
                            }
                            if (t && n) {
                                s.forEach(t => {
                                    let i = t.getThresholdAlignment(e);
                                    T(i) && a.push(i)
                                });
                                let t = a.length > 1 ? a.reduce((t, e) => t += e, 0) / a.length : void 0;
                                s.forEach(e => {
                                    e.thresholdAlignment = t
                                })
                            }
                            return t
                        }
                        getThresholdAlignment(t) {
                            if ((!T(this.dataMin) || this !== t && this.series.some(t => t.isDirty || t.isDirtyData)) && this.getSeriesExtremes(), T(this.threshold)) {
                                let t = m((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
                                return this.options.reversed && (t = 1 - t), t
                            }
                        }
                        getTickAmount() {
                            let t = this.options,
                                e = t.tickPixelInterval,
                                i = t.tickAmount;
                            y(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i
                        }
                        adjustTickAmount() {
                            let t = this,
                                {
                                    finalTickAmt: e,
                                    max: i,
                                    min: s,
                                    options: r,
                                    tickPositions: o,
                                    tickAmount: n,
                                    thresholdAlignment: a
                                } = t,
                                l = o ? .length,
                                h = D(t.threshold, t.softThreshold ? 0 : null),
                                d, c, p = t.tickInterval,
                                u, g = () => o.push(x(o[o.length - 1] + p)),
                                f = () => o.unshift(x(o[0] - p));
                            if (T(a) && (u = a < .5 ? Math.ceil(a * (n - 1)) : Math.floor(a * (n - 1)), r.reversed && (u = n - 1 - u)), t.hasData() && T(s) && T(i)) {
                                let a = () => {
                                    t.transA *= (l - 1) / (n - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1])
                                };
                                if (T(u) && T(t.threshold)) {
                                    for (; o[u] !== h || o.length !== n || o[0] > s || o[o.length - 1] < i;) {
                                        for (o.length = 0, o.push(t.threshold); o.length < n;) void 0 === o[u] || o[u] > t.threshold ? f() : g();
                                        if (p > 8 * t.tickInterval) break;
                                        p *= 2
                                    }
                                    a()
                                } else if (l < n) {
                                    for (; o.length < n;) o.length % 2 || s === h ? g() : f();
                                    a()
                                }
                                if (y(e)) {
                                    for (c = d = o.length; c--;)(3 === e && c % 2 == 1 || e <= 2 && c > 0 && c < d - 1) && o.splice(c, 1);
                                    t.finalTickAmt = void 0
                                }
                            }
                        }
                        setScale() {
                            let {
                                coll: t,
                                stacking: e
                            } = this, i = !1, s = !1;
                            this.series.forEach(t => {
                                i = i || t.isDirtyData || t.isDirty, s = s || t.xAxis && t.xAxis.isDirty || !1
                            }), this.setAxisSize();
                            let r = this.len !== (this.old && this.old.len);
                            r || i || s || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e && "yAxis" === t && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && "xAxis" === t && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== this.old ? .min || this.max !== this.old ? .max)) : e && e.cleanStacks(), i && delete this.allExtremes, C(this, "afterSetScale")
                        }
                        setExtremes(t, e, i = !0, s, r) {
                            this.series.forEach(t => {
                                delete t.kdTree
                            }), C(this, "setExtremes", r = S(r, {
                                min: t,
                                max: e
                            }), t => {
                                this.userMin = t.min, this.userMax = t.max, this.eventArgs = t, i && this.chart.redraw(s)
                            })
                        }
                        setAxisSize() {
                            let t = this.chart,
                                e = this.options,
                                i = e.offsets || [0, 0, 0, 0],
                                s = this.horiz,
                                r = this.width = Math.round(j(D(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
                                o = this.height = Math.round(j(D(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
                                n = this.top = Math.round(j(D(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)),
                                a = this.left = Math.round(j(D(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
                            this.bottom = t.chartHeight - o - n, this.right = t.chartWidth - r - a, this.len = Math.max(s ? r : o, 0), this.pos = s ? a : n
                        }
                        getExtremes() {
                            let t = this.logarithmic;
                            return {
                                min: t ? x(t.lin2log(this.min)) : this.min,
                                max: t ? x(t.lin2log(this.max)) : this.max,
                                dataMin: this.dataMin,
                                dataMax: this.dataMax,
                                userMin: this.userMin,
                                userMax: this.userMax
                            }
                        }
                        getThreshold(t) {
                            let e = this.logarithmic,
                                i = e ? e.lin2log(this.min) : this.min,
                                s = e ? e.lin2log(this.max) : this.max;
                            return null === t || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1)
                        }
                        autoLabelAlign(t) {
                            let e = (D(t, 0) - 90 * this.side + 720) % 360,
                                i = {
                                    align: "center"
                                };
                            return C(this, "autoLabelAlign", i, function(t) {
                                e > 15 && e < 165 ? t.align = "right" : e > 195 && e < 345 && (t.align = "left")
                            }), i.align
                        }
                        tickSize(t) {
                            let e = this.options,
                                i = D(e["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0),
                                s = e["tick" === t ? "tickLength" : "minorTickLength"],
                                r;
                            i && s && ("inside" === e[t + "Position"] && (s = -s), r = [s, i]);
                            let o = {
                                tickSize: r
                            };
                            return C(this, "afterTickSize", o), o.tickSize
                        }
                        labelMetrics() {
                            let t = this.chart.renderer,
                                e = this.ticks,
                                i = e[Object.keys(e)[0]] || {};
                            return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box)
                        }
                        unsquish() {
                            let t = this.options.labels,
                                e = t.padding || 0,
                                i = this.horiz,
                                s = this.tickInterval,
                                r = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s),
                                o = t.rotation,
                                n = x(.8 * this.labelMetrics().h),
                                a = Math.max(this.max - this.min, 0),
                                l = function(t) {
                                    let i = (t + 2 * e) / (r || 1);
                                    return (i = i > 1 ? Math.ceil(i) : 1) * s > a && t !== 1 / 0 && r !== 1 / 0 && a && (i = Math.ceil(a / s)), x(i * s)
                                },
                                h = s,
                                d, c = Number.MAX_VALUE,
                                p;
                            if (i) {
                                if (!t.staggerLines && (T(o) ? p = [o] : r < t.autoRotationLimit && (p = t.autoRotation)), p) {
                                    let t, e;
                                    for (let i of p)(i === o || i && i >= -90 && i <= 90) && (e = (t = l(Math.abs(n / Math.sin(u * i)))) + Math.abs(i / 360)) < c && (c = e, d = i, h = t)
                                }
                            } else h = l(.75 * n);
                            return this.autoRotation = p, this.labelRotation = D(d, T(o) ? o : 0), t.step ? s : h
                        }
                        getSlotWidth(t) {
                            let e = this.chart,
                                i = this.horiz,
                                s = this.options.labels,
                                r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                                o = e.margin[3];
                            if (t && T(t.slotWidth)) return t.slotWidth;
                            if (i && s.step < 2) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
                            if (!i) {
                                let t = s.style.width;
                                if (void 0 !== t) return parseInt(String(t), 10);
                                if (o) return o - e.spacing[3]
                            }
                            return .33 * e.chartWidth
                        }
                        renderUnsquish() {
                            let t = this.chart,
                                e = t.renderer,
                                i = this.tickPositions,
                                s = this.ticks,
                                r = this.options.labels,
                                o = r.style,
                                n = this.horiz,
                                a = this.getSlotWidth(),
                                l = Math.max(1, Math.round(a - (n ? 2 * (r.padding || 0) : r.distance || 0))),
                                h = {},
                                d = this.labelMetrics(),
                                c = o.textOverflow,
                                p, u, g = 0,
                                f, m;
                            if (P(r.rotation) || (h.rotation = r.rotation || 0), i.forEach(function(t) {
                                    let e = s[t];
                                    e.movedLabel && e.replaceMovedLabel(), e && e.label && e.label.textPxLength > g && (g = e.label.textPxLength)
                                }), this.maxLabelLength = g, this.autoRotation) g > l && g > d.h ? h.rotation = this.labelRotation : this.labelRotation = 0;
                            else if (a && (p = l, !c))
                                for (u = "clip", m = i.length; !n && m--;)(f = s[i[m]].label) && ("ellipsis" === f.styles.textOverflow ? f.css({
                                    textOverflow: "clip"
                                }) : f.textPxLength > a && f.css({
                                    width: a + "px"
                                }), f.getBBox().height > this.len / i.length - (d.h - d.f) && (f.specificTextOverflow = "ellipsis"));
                            h.rotation && (p = g > .5 * t.chartHeight ? .33 * t.chartHeight : g, c || (u = "ellipsis")), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (h.align = this.labelAlign), i.forEach(function(t) {
                                let e = s[t],
                                    i = e && e.label,
                                    r = o.width,
                                    n = {};
                                i && (i.attr(h), e.shortenLabel ? e.shortenLabel() : p && !r && "nowrap" !== o.whiteSpace && (p < i.textPxLength || "SPAN" === i.element.tagName) ? (n.width = p + "px", c || (n.textOverflow = i.specificTextOverflow || u), i.css(n)) : !i.styles.width || n.width || r || i.css({
                                    width: null
                                }), delete i.specificTextOverflow, e.rotation = h.rotation)
                            }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, 0 !== this.side)
                        }
                        hasData() {
                            return this.series.some(function(t) {
                                return t.hasData()
                            }) || this.options.showEmpty && y(this.min) && y(this.max)
                        }
                        addTitle(t) {
                            let e;
                            let i = this.chart.renderer,
                                s = this.horiz,
                                r = this.opposite,
                                o = this.options.title,
                                n = this.chart.styledMode;
                            this.axisTitle || ((e = o.textAlign) || (e = (s ? {
                                low: "left",
                                middle: "center",
                                high: "right"
                            } : {
                                low: r ? "right" : "left",
                                middle: "center",
                                high: r ? "left" : "right"
                            })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({
                                zIndex: 7,
                                rotation: o.rotation || 0,
                                align: e
                            }).addClass("highcharts-axis-title"), n || this.axisTitle.css(L(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), n || o.style.width || this.isRadial || this.axisTitle.css({
                                width: this.len + "px"
                            }), this.axisTitle[t ? "show" : "hide"](t)
                        }
                        generateTick(t) {
                            let e = this.ticks;
                            e[t] ? e[t].addLabel() : e[t] = new n(this, t)
                        }
                        createGroups() {
                            let {
                                axisParent: t,
                                chart: e,
                                coll: i,
                                options: s
                            } = this, r = e.renderer, o = (e, o, n) => r.g(e).attr({
                                zIndex: n
                            }).addClass(`highcharts-${i.toLowerCase()}${o} ` + (this.isRadial ? `highcharts-radial-axis${o} ` : "") + (s.className || "")).add(t);
                            this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex))
                        }
                        getOffset() {
                            let t = this,
                                {
                                    chart: e,
                                    horiz: i,
                                    options: s,
                                    side: r,
                                    ticks: o,
                                    tickPositions: n,
                                    coll: a
                                } = t,
                                l = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r,
                                h = t.hasData(),
                                d = s.title,
                                c = s.labels,
                                p = T(s.crossing),
                                u = e.axisOffset,
                                g = e.clipOffset,
                                f = [-1, 1, 1, -1][r],
                                m, x = 0,
                                b, v = 0,
                                k = 0,
                                S, M;
                            if (t.showAxis = m = h || s.showEmpty, t.staggerLines = t.horiz && c.staggerLines || void 0, t.createGroups(), h || t.isLinked ? (n.forEach(function(e) {
                                    t.generateTick(e)
                                }), t.renderUnsquish(), t.reserveSpaceDefault = 0 === r || 2 === r || ({
                                    1: "left",
                                    3: "right"
                                })[r] === t.labelAlign, D(c.reserveSpace, !p && null, "center" === t.labelAlign || null, t.reserveSpaceDefault) && n.forEach(function(t) {
                                    k = Math.max(o[t].getLabelSize(), k)
                                }), t.staggerLines && (k *= t.staggerLines), t.labelOffset = k * (t.opposite ? -1 : 1)) : E(o, function(t, e) {
                                    t.destroy(), delete o[e]
                                }), d ? .text && !1 !== d.enabled && (t.addTitle(m), m && !p && !1 !== d.reserveSpace && (t.titleOffset = x = t.axisTitle.getBBox()[i ? "height" : "width"], v = y(b = d.offset) ? 0 : D(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = f * D(s.offset, u[r] ? u[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || {
                                    x: 0,
                                    y: 0
                                }, M = 0 === r ? -t.labelMetrics().h : 2 === r ? t.tickRotCorr.y : 0, S = Math.abs(k) + v, k && (S -= M, S += f * (i ? D(c.y, t.tickRotCorr.y + f * c.distance) : D(c.x, f * c.distance))), t.axisTitleMargin = D(b, S), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, n)), "colorAxis" !== a && g) {
                                let e = this.tickSize("tick");
                                u[r] = Math.max(u[r], (t.axisTitleMargin || 0) + x + f * t.offset, S, n && n.length && e ? e[0] + f * t.offset : 0);
                                let i = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
                                g[l] = Math.max(g[l], i)
                            }
                            C(this, "afterGetOffset")
                        }
                        getLinePath(t) {
                            let e = this.chart,
                                i = this.opposite,
                                s = this.offset,
                                r = this.horiz,
                                o = this.left + (i ? this.width : 0) + s,
                                n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
                            return i && (t *= -1), e.renderer.crispLine([
                                ["M", r ? this.left : o, r ? n : this.top],
                                ["L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom]
                            ], t)
                        }
                        renderLine() {
                            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                                stroke: this.options.lineColor,
                                "stroke-width": this.options.lineWidth,
                                zIndex: 7
                            }))
                        }
                        getTitlePosition(t) {
                            let e = this.horiz,
                                i = this.left,
                                s = this.top,
                                r = this.len,
                                o = this.options.title,
                                n = e ? i : s,
                                a = this.opposite,
                                l = this.offset,
                                h = o.x,
                                d = o.y,
                                c = this.chart.renderer.fontMetrics(t),
                                p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
                                u = {
                                    low: n + (e ? 0 : r),
                                    middle: n + r / 2,
                                    high: n + (e ? r : 0)
                                }[o.align],
                                g = (e ? s + this.height : i) + (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) + [-p, p, c.f, -p][this.side],
                                f = {
                                    x: e ? u + h : g + (a ? this.width : 0) + l + h,
                                    y: e ? g + d - (a ? this.height : 0) + l : u + d
                                };
                            return C(this, "afterGetTitlePosition", {
                                titlePosition: f
                            }), f
                        }
                        renderMinorTick(t, e) {
                            let i = this.minorTicks;
                            i[t] || (i[t] = new n(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                        }
                        renderTick(t, e, i) {
                            let s = this.isLinked,
                                r = this.ticks;
                            (!s || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (r[t] || (r[t] = new n(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e))
                        }
                        render() {
                            let t, e;
                            let i = this,
                                s = i.chart,
                                r = i.logarithmic,
                                a = s.renderer,
                                h = i.options,
                                d = i.isLinked,
                                c = i.tickPositions,
                                p = i.axisTitle,
                                u = i.ticks,
                                g = i.minorTicks,
                                f = i.alternateBands,
                                m = h.stackLabels,
                                x = h.alternateGridColor,
                                y = h.crossing,
                                b = i.tickmarkOffset,
                                v = i.axisLine,
                                k = i.showAxis,
                                S = l(a.globalAnimation);
                            if (i.labelEdge.length = 0, i.overlap = !1, [u, g, f].forEach(function(t) {
                                    E(t, function(t) {
                                        t.isActive = !1
                                    })
                                }), T(y)) {
                                let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
                                    e = [1, -1, -1, 1][this.side];
                                if (t) {
                                    let s = t.toPixels(y, !0);
                                    i.horiz && (s = t.len - s), i.offset = e * s
                                }
                            }
                            if (i.hasData() || d) {
                                let a = i.chart.hasRendered && i.old && T(i.old.min);
                                i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(t) {
                                    i.renderMinorTick(t, a)
                                }), c.length && (c.forEach(function(t, e) {
                                    i.renderTick(t, e, a)
                                }), b && (0 === i.min || i.single) && (u[-1] || (u[-1] = new n(i, -1, null, !0)), u[-1].render(-1))), x && c.forEach(function(n, a) {
                                    e = void 0 !== c[a + 1] ? c[a + 1] + b : i.max - b, a % 2 == 0 && n < i.max && e <= i.max + (s.polar ? -b : b) && (f[n] || (f[n] = new o.PlotLineOrBand(i, {})), t = n + b, f[n].options = {
                                        from: r ? r.lin2log(t) : t,
                                        to: r ? r.lin2log(e) : e,
                                        color: x,
                                        className: "highcharts-alternate-grid"
                                    }, f[n].render(), f[n].isActive = !0)
                                }), i._addedPlotLB || (i._addedPlotLB = !0, (h.plotLines || []).concat(h.plotBands || []).forEach(function(t) {
                                    i.addPlotBandOrLine(t)
                                }))
                            }[u, g, f].forEach(function(t) {
                                let e = [],
                                    i = S.duration;
                                E(t, function(t, i) {
                                    t.isActive || (t.render(i, !1, 0), t.isActive = !1, e.push(i))
                                }), R(function() {
                                    let i = e.length;
                                    for (; i--;) t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]])
                                }, t !== f && s.hasRendered && i ? i : 0)
                            }), v && (v[v.isPlaced ? "animate" : "attr"]({
                                d: this.getLinePath(v.strokeWidth())
                            }), v.isPlaced = !0, v[k ? "show" : "hide"](k)), p && k && (p[p.isNew ? "attr" : "animate"](i.getTitlePosition(p)), p.isNew = !1), m && m.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = {
                                len: i.len,
                                max: i.max,
                                min: i.min,
                                transA: i.transA,
                                userMax: i.userMax,
                                userMin: i.userMin
                            }, i.isDirty = !1, C(this, "afterRender")
                        }
                        redraw() {
                            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
                                t.render()
                            })), this.series.forEach(function(t) {
                                t.isDirty = !0
                            })
                        }
                        getKeepProps() {
                            return this.keepProps || N.keepProps
                        }
                        destroy(t) {
                            let e = this,
                                i = e.plotLinesAndBands,
                                s = this.eventOptions;
                            if (C(this, "destroy", {
                                    keepEvents: t
                                }), t || I(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(t) {
                                    b(t)
                                }), i) {
                                let t = i.length;
                                for (; t--;) i[t].destroy()
                            }
                            for (let t in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(t) {
                                    e[t] && (e[t] = e[t].destroy())
                                }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[t] = e.plotLinesAndBandsGroups[t].destroy();
                            E(e, function(t, i) {
                                -1 === e.getKeepProps().indexOf(i) && delete e[i]
                            }), this.eventOptions = s
                        }
                        drawCrosshair(t, e) {
                            let s = this.crosshair,
                                r = D(s && s.snap, !0),
                                o = this.chart,
                                n, a, l, h = this.cross,
                                d;
                            if (C(this, "drawCrosshair", {
                                    e: t,
                                    point: e
                                }), t || (t = this.cross && this.cross.e), s && !1 !== (y(e) || !r)) {
                                if (r ? y(e) && (a = D("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : a = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), y(a) && (d = {
                                        value: e && (this.isXAxis ? e.x : D(e.stackY, e.y)),
                                        translatedValue: a
                                    }, o.polar && S(d, {
                                        isCrosshair: !0,
                                        chartX: t && t.chartX,
                                        chartY: t && t.chartY,
                                        point: e
                                    }), n = this.getPlotLinePath(d) || null), !y(n)) {
                                    this.hideCrosshair();
                                    return
                                }
                                l = this.categories && !this.isRadial, h || (this.cross = h = o.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (s.className || "")).attr({
                                    zIndex: D(s.zIndex, 2)
                                }).add(), !o.styledMode && (h.attr({
                                    stroke: s.color || (l ? i.parse("#ccd3ff").setOpacity(.25).get() : "#cccccc"),
                                    "stroke-width": D(s.width, 1)
                                }).css({
                                    "pointer-events": "none"
                                }), s.dashStyle && h.attr({
                                    dashstyle: s.dashStyle
                                }))), h.show().attr({
                                    d: n
                                }), l && !s.width && h.attr({
                                    "stroke-width": this.transA
                                }), this.cross.e = t
                            } else this.hideCrosshair();
                            C(this, "afterDrawCrosshair", {
                                e: t,
                                point: e
                            })
                        }
                        hideCrosshair() {
                            this.cross && this.cross.hide(), C(this, "afterHideCrosshair")
                        }
                        update(t, e) {
                            let i = this.chart;
                            t = L(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, D(e, !0) && i.redraw()
                        }
                        remove(t) {
                            let e = this.chart,
                                i = this.coll,
                                s = this.series,
                                r = s.length;
                            for (; r--;) s[r] && s[r].remove(!1);
                            v(e.axes, this), v(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, D(t, !0) && e.redraw()
                        }
                        setTitle(t, e) {
                            this.update({
                                title: t
                            }, e)
                        }
                        setCategories(t, e) {
                            this.update({
                                categories: t
                            }, e)
                        }
                    }
                    return N.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"], N
                }), i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        addEvent: i,
                        getMagnitude: s,
                        normalizeTickInterval: r,
                        timeUnits: o
                    } = t;
                    return function(t) {
                        function e() {
                            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                        }

                        function n() {
                            if ("datetime" !== this.options.type) {
                                this.dateTime = void 0;
                                return
                            }
                            this.dateTime || (this.dateTime = new a(this))
                        }
                        t.compose = function(t) {
                            return t.keepProps.includes("dateTime") || (t.keepProps.push("dateTime"), t.prototype.getTimeTicks = e, i(t, "afterSetOptions", n)), t
                        };
                        class a {
                            constructor(t) {
                                this.axis = t
                            }
                            normalizeTimeTickInterval(t, e) {
                                let i = e || [
                                        ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                        ["second", [1, 2, 5, 10, 15, 30]],
                                        ["minute", [1, 2, 5, 10, 15, 30]],
                                        ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                        ["day", [1, 2]],
                                        ["week", [1, 2]],
                                        ["month", [1, 2, 3, 4, 6]],
                                        ["year", null]
                                    ],
                                    n = i[i.length - 1],
                                    a = o[n[0]],
                                    l = n[1],
                                    h;
                                for (h = 0; h < i.length && (a = o[(n = i[h])[0]], l = n[1], !i[h + 1] || !(t <= (a * l[l.length - 1] + o[i[h + 1][0]]) / 2)); h++);
                                a === o.year && t < 5 * a && (l = [1, 2, 5]);
                                let d = r(t / a, l, "year" === n[0] ? Math.max(s(t / a), 1) : 1);
                                return {
                                    unitRange: a,
                                    count: d,
                                    unitName: n[0]
                                }
                            }
                            getXDateFormat(t, e) {
                                let {
                                    axis: i
                                } = this, s = i.chart.time;
                                return i.closestPointRange ? s.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) || s.resolveDTLFormat(e.year).main : s.resolveDTLFormat(e.day).main
                            }
                        }
                        t.Additions = a
                    }(e || (e = {})), e
                }), i(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        addEvent: i,
                        normalizeTickInterval: s,
                        pick: r
                    } = t;
                    return function(t) {
                        function e(t) {
                            let e = t.userOptions,
                                i = this.logarithmic;
                            "logarithmic" !== e.type ? this.logarithmic = void 0 : i || (i = this.logarithmic = new n(this))
                        }

                        function o() {
                            let t = this.logarithmic;
                            t && (this.lin2val = function(e) {
                                return t.lin2log(e)
                            }, this.val2lin = function(e) {
                                return t.log2lin(e)
                            })
                        }
                        t.compose = function(t) {
                            return t.keepProps.includes("logarithmic") || (t.keepProps.push("logarithmic"), i(t, "init", e), i(t, "afterInit", o)), t
                        };
                        class n {
                            constructor(t) {
                                this.axis = t
                            }
                            getLogTickPositions(t, e, i, o) {
                                let n = this.axis,
                                    a = n.len,
                                    l = n.options,
                                    h = [];
                                if (o || (this.minorAutoInterval = void 0), t >= .5) t = Math.round(t), h = n.getLinearTickPositions(t, e, i);
                                else if (t >= .08) {
                                    let s, r, n, a, l, d, c;
                                    let p = Math.floor(e);
                                    for (s = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], r = p; r < i + 1 && !c; r++)
                                        for (n = 0, a = s.length; n < a && !c; n++)(l = this.log2lin(this.lin2log(r) * s[n])) > e && (!o || d <= i) && void 0 !== d && h.push(d), d > i && (c = !0), d = l
                                } else {
                                    let d = this.lin2log(e),
                                        c = this.lin2log(i),
                                        p = o ? n.getMinorTickInterval() : l.tickInterval,
                                        u = l.tickPixelInterval / (o ? 5 : 1),
                                        g = o ? a / n.tickPositions.length : a;
                                    t = s(t = r("auto" === p ? null : p, this.minorAutoInterval, (c - d) * u / (g || 1))), h = n.getLinearTickPositions(t, d, c).map(this.log2lin), o || (this.minorAutoInterval = t / 5)
                                }
                                return o || (n.tickInterval = t), h
                            }
                            lin2log(t) {
                                return Math.pow(10, t)
                            }
                            log2lin(t) {
                                return Math.log(t) / Math.LN10
                            }
                        }
                        t.Additions = n
                    }(e || (e = {})), e
                }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        erase: i,
                        extend: s,
                        isNumber: r
                    } = t;
                    return function(t) {
                        let e;

                        function o(t) {
                            return this.addPlotBandOrLine(t, "plotBands")
                        }

                        function n(t, i) {
                            let s = this.userOptions,
                                r = new e(this, t);
                            if (this.visible && (r = r.render()), r) {
                                if (this._addedPlotLB || (this._addedPlotLB = !0, (s.plotLines || []).concat(s.plotBands || []).forEach(t => {
                                        this.addPlotBandOrLine(t)
                                    })), i) {
                                    let e = s[i] || [];
                                    e.push(t), s[i] = e
                                }
                                this.plotLinesAndBands.push(r)
                            }
                            return r
                        }

                        function a(t) {
                            return this.addPlotBandOrLine(t, "plotLines")
                        }

                        function l(t, e, i) {
                            i = i || this.options;
                            let s = this.getPlotLinePath({
                                    value: e,
                                    force: !0,
                                    acrossPanes: i.acrossPanes
                                }),
                                o = [],
                                n = this.horiz,
                                a = !r(this.min) || !r(this.max) || t < this.min && e < this.min || t > this.max && e > this.max,
                                l = this.getPlotLinePath({
                                    value: t,
                                    force: !0,
                                    acrossPanes: i.acrossPanes
                                }),
                                h, d = 1,
                                c;
                            if (l && s)
                                for (a && (c = l.toString() === s.toString(), d = 0), h = 0; h < l.length; h += 2) {
                                    let t = l[h],
                                        e = l[h + 1],
                                        i = s[h],
                                        r = s[h + 1];
                                    ("M" === t[0] || "L" === t[0]) && ("M" === e[0] || "L" === e[0]) && ("M" === i[0] || "L" === i[0]) && ("M" === r[0] || "L" === r[0]) && (n && i[1] === t[1] ? (i[1] += d, r[1] += d) : n || i[2] !== t[2] || (i[2] += d, r[2] += d), o.push(["M", t[1], t[2]], ["L", e[1], e[2]], ["L", r[1], r[2]], ["L", i[1], i[2]], ["Z"])), o.isFlat = c
                                }
                            return o
                        }

                        function h(t) {
                            this.removePlotBandOrLine(t)
                        }

                        function d(t) {
                            let e = this.plotLinesAndBands,
                                s = this.options,
                                r = this.userOptions;
                            if (e) {
                                let o = e.length;
                                for (; o--;) e[o].id === t && e[o].destroy();
                                [s.plotLines || [], r.plotLines || [], s.plotBands || [], r.plotBands || []].forEach(function(e) {
                                    for (o = e.length; o--;)(e[o] || {}).id === t && i(e, e[o])
                                })
                            }
                        }

                        function c(t) {
                            this.removePlotBandOrLine(t)
                        }
                        t.compose = function(t, i) {
                            let r = i.prototype;
                            return r.addPlotBand || (e = t, s(r, {
                                addPlotBand: o,
                                addPlotLine: a,
                                addPlotBandOrLine: n,
                                getPlotBandPath: l,
                                removePlotBand: h,
                                removePlotLine: c,
                                removePlotBandOrLine: d
                            })), i
                        }
                    }(e || (e = {})), e
                }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        arrayMax: i,
                        arrayMin: s,
                        defined: r,
                        destroyObjectProperties: o,
                        erase: n,
                        fireEvent: a,
                        merge: l,
                        objectEach: h,
                        pick: d
                    } = e;
                    class c {
                        static compose(e) {
                            return t.compose(c, e)
                        }
                        constructor(t, e) {
                            this.axis = t, this.options = e, this.id = e.id
                        }
                        render() {
                            a(this, "render");
                            let {
                                axis: t,
                                options: e
                            } = this, {
                                horiz: i,
                                logarithmic: s
                            } = t, {
                                color: o,
                                events: n,
                                zIndex: c = 0
                            } = e, p = {}, u = t.chart.renderer, g = e.to, f = e.from, m = e.value, x = e.borderWidth, y = e.label, {
                                label: b,
                                svgElem: v
                            } = this, k = [], S, C = r(f) && r(g), M = r(m), w = !v, A = {
                                class: "highcharts-plot-" + (C ? "band " : "line ") + (e.className || "")
                            }, T = C ? "bands" : "lines";
                            if (!t.chart.styledMode && (M ? (A.stroke = o || "#999999", A["stroke-width"] = d(e.width, 1), e.dashStyle && (A.dashstyle = e.dashStyle)) : C && (A.fill = o || "#e6e9ff", x && (A.stroke = e.borderColor, A["stroke-width"] = x))), p.zIndex = c, T += "-" + c, (S = t.plotLinesAndBandsGroups[T]) || (t.plotLinesAndBandsGroups[T] = S = u.g("plot-" + T).attr(p).add()), v || (this.svgElem = v = u.path().attr(A).add(S)), r(m)) k = t.getPlotLinePath({
                                value: s ? .log2lin(m) ? ? m,
                                lineWidth: v.strokeWidth(),
                                acrossPanes: e.acrossPanes
                            });
                            else {
                                if (!(r(f) && r(g))) return;
                                k = t.getPlotBandPath(s ? .log2lin(f) ? ? f, s ? .log2lin(g) ? ? g, e)
                            }
                            return !this.eventsAdded && n && (h(n, (t, e) => {
                                v ? .on(e, t => {
                                    n[e].apply(this, [t])
                                })
                            }), this.eventsAdded = !0), (w || !v.d) && k ? .length ? v.attr({
                                d: k
                            }) : v && (k ? (v.show(), v.animate({
                                d: k
                            })) : v.d && (v.hide(), b && (this.label = b = b.destroy()))), y && (r(y.text) || r(y.formatter)) && k ? .length && t.width > 0 && t.height > 0 && !k.isFlat ? (y = l({
                                align: i && C ? "center" : void 0,
                                x: i ? !C && 4 : 10,
                                verticalAlign: !i && C ? "middle" : void 0,
                                y: i ? C ? 16 : 10 : C ? 6 : -4,
                                rotation: i && !C ? 90 : 0
                            }, y), this.renderLabel(y, k, C, c)) : b && b.hide(), this
                        }
                        renderLabel(t, e, r, o) {
                            let n = this.axis,
                                a = n.chart.renderer,
                                h = this.label;
                            h || (this.label = h = a.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                                align: t.textAlign || t.align,
                                rotation: t.rotation,
                                class: "highcharts-plot-" + (r ? "band" : "line") + "-label " + (t.className || ""),
                                zIndex: o
                            }), n.chart.styledMode || h.css(l({
                                fontSize: "0.8em",
                                textOverflow: "ellipsis"
                            }, t.style)), h.add());
                            let d = e.xBounds || [e[0][1], e[1][1], r ? e[2][1] : e[0][1]],
                                c = e.yBounds || [e[0][2], e[1][2], r ? e[2][2] : e[0][2]],
                                p = s(d),
                                u = s(c);
                            if (h.align(t, !1, {
                                    x: p,
                                    y: u,
                                    width: i(d) - p,
                                    height: i(c) - u
                                }), !h.alignValue || "left" === h.alignValue) {
                                let e = t.clip ? n.width : n.chart.chartWidth;
                                h.css({
                                    width: (90 === h.rotation ? n.height - (h.alignAttr.y - n.top) : e - (h.alignAttr.x - n.left)) + "px"
                                })
                            }
                            h.show(!0)
                        }
                        getLabelText(t) {
                            return r(t.formatter) ? t.formatter.call(this) : t.text
                        }
                        destroy() {
                            n(this.axis.plotLinesAndBands, this), delete this.axis, o(this)
                        }
                    }
                    return c
                }), i(e, "Core/Tooltip.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o) {
                    var n;
                    let {
                        animObject: a
                    } = t, {
                        format: l
                    } = e, {
                        composed: h,
                        doc: d,
                        isSafari: c
                    } = i, {
                        distribute: p
                    } = s, {
                        addEvent: u,
                        clamp: g,
                        css: f,
                        discardElement: m,
                        extend: x,
                        fireEvent: y,
                        isArray: b,
                        isNumber: v,
                        isString: k,
                        merge: S,
                        pick: C,
                        pushUnique: M,
                        splat: w,
                        syncTimeout: A
                    } = o;
                    class T {
                        constructor(t, e, i) {
                            this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i
                        }
                        bodyFormatter(t) {
                            return t.map(function(t) {
                                let e = t.series.tooltipOptions;
                                return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "")
                            })
                        }
                        cleanSplit(t) {
                            this.chart.series.forEach(function(e) {
                                let i = e && e.tt;
                                i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                            })
                        }
                        defaultFormatter(t) {
                            let e;
                            let i = this.points || w(this);
                            return (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                        }
                        destroy() {
                            this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), m(this.container)), o.clearTimeout(this.hideTimer)
                        }
                        getAnchor(t, e) {
                            let i;
                            let {
                                chart: s,
                                pointer: r
                            } = this, o = s.inverted, n = s.plotTop, a = s.plotLeft;
                            if ((t = w(t))[0].series && t[0].series.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) void 0 === e.chartX && (e = r.normalize(e)), i = [e.chartX - a, e.chartY - n];
                            else if (t[0].tooltipPos) i = t[0].tooltipPos;
                            else {
                                let s = 0,
                                    r = 0;
                                t.forEach(function(t) {
                                    let e = t.pos(!0);
                                    e && (s += e[0], r += e[1])
                                }), s /= t.length, r /= t.length, this.shared && t.length > 1 && e && (o ? s = e.chartX : r = e.chartY), i = [s - a, r - n]
                            }
                            return i.map(Math.round)
                        }
                        getClassName(t, e, i) {
                            let s = this.options,
                                r = t.series,
                                o = r.options;
                            return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + C(t.colorIndex, r.colorIndex), o && o.className].filter(k).join(" ")
                        }
                        getLabel() {
                            let t = this,
                                e = this.chart.styledMode,
                                s = this.options,
                                o = this.split && this.allowShared,
                                n = this.container,
                                a = this.chart.renderer;
                            if (this.label) {
                                let t = !this.label.hasClass("highcharts-label");
                                (!o && t || o && !t) && this.destroy()
                            }
                            if (!this.label) {
                                if (this.outside) {
                                    let t = this.chart.options.chart.style,
                                        e = r.getRendererType();
                                    this.container = n = i.doc.createElement("div"), n.className = "highcharts-tooltip-container", f(n, {
                                        position: "absolute",
                                        top: "1px",
                                        pointerEvents: "none",
                                        zIndex: Math.max(this.options.style.zIndex || 0, (t && t.zIndex || 0) + 3)
                                    }), this.renderer = a = new e(n, 0, 0, t, void 0, void 0, a.styledMode)
                                }
                                if (o ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, s.shape, void 0, void 0, s.useHTML, void 0, "tooltip").attr({
                                        padding: s.padding,
                                        r: s.borderRadius
                                    }), e || this.label.attr({
                                        fill: s.backgroundColor,
                                        "stroke-width": s.borderWidth || 0
                                    }).css(s.style).css({
                                        pointerEvents: s.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
                                    })), t.outside) {
                                    let e = this.label;
                                    [e.xSetter, e.ySetter].forEach((i, s) => {
                                        e[s ? "ySetter" : "xSetter"] = r => {
                                            i.call(e, t.distance), e[s ? "y" : "x"] = r, n && (n.style[s ? "top" : "left"] = `${r}px`)
                                        }
                                    })
                                }
                                this.label.attr({
                                    zIndex: 8
                                }).shadow(s.shadow).add()
                            }
                            return n && !n.parentElement && i.doc.body.appendChild(n), this.label
                        }
                        getPlayingField() {
                            let {
                                body: t,
                                documentElement: e
                            } = d, {
                                chart: i,
                                distance: s,
                                outside: r
                            } = this;
                            return {
                                width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s : i.chartWidth,
                                height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight
                            }
                        }
                        getPosition(t, e, i) {
                            let {
                                distance: s,
                                chart: r,
                                outside: o,
                                pointer: n
                            } = this, {
                                inverted: a,
                                plotLeft: l,
                                plotTop: h,
                                polar: d
                            } = r, {
                                plotX: c = 0,
                                plotY: p = 0
                            } = i, u = {}, g = a && i.h || 0, {
                                height: f,
                                width: m
                            } = this.getPlayingField(), x = n.getChartPosition(), y = t => t * x.scaleX, b = t => t * x.scaleY, v = i => {
                                let n = "x" === i;
                                return [i, n ? m : f, n ? t : e].concat(o ? [n ? y(t) : b(e), n ? x.left - s + y(c + l) : x.top - s + b(p + h), 0, n ? m : f] : [n ? t : e, n ? c + l : p + h, n ? l : h, n ? l + r.plotWidth : h + r.plotHeight])
                            }, k = v("y"), S = v("x"), M, w = !!i.negative;
                            !d && r.hoverSeries ? .yAxis ? .reversed && (w = !w);
                            let A = !this.followPointer && C(i.ttBelow, !d && !a === w),
                                T = function(t, e, i, r, n, a, l) {
                                    let h = o ? "y" === t ? b(s) : y(s) : s,
                                        d = (i - r) / 2,
                                        c = r < n - s,
                                        p = n + s + r < e,
                                        f = n - h - i + d,
                                        m = n + h - d;
                                    if (A && p) u[t] = m;
                                    else if (!A && c) u[t] = f;
                                    else if (c) u[t] = Math.min(l - r, f - g < 0 ? f : f - g);
                                    else {
                                        if (!p) return !1;
                                        u[t] = Math.max(a, m + g + i > e ? m : m + g)
                                    }
                                },
                                P = function(t, e, i, r, o) {
                                    if (o < s || o > e - s) return !1;
                                    o < i / 2 ? u[t] = 1 : o > e - r / 2 ? u[t] = e - r - 2 : u[t] = o - i / 2
                                },
                                L = function(t) {
                                    [k, S] = [S, k], M = t
                                },
                                O = () => {
                                    !1 !== T.apply(0, k) ? !1 !== P.apply(0, S) || M || (L(!0), O()) : M ? u.x = u.y = 0 : (L(!0), O())
                                };
                            return (a && !d || this.len > 1) && L(), O(), u
                        }
                        hide(t) {
                            let e = this;
                            o.clearTimeout(this.hideTimer), t = C(t, this.options.hideDelay), this.isHidden || (this.hideTimer = A(function() {
                                let i = e.getLabel();
                                e.getLabel().animate({
                                    opacity: 0
                                }, {
                                    duration: t ? 150 : t,
                                    complete: () => {
                                        i.hide(), e.container && e.container.remove()
                                    }
                                }), e.isHidden = !0
                            }, t))
                        }
                        init(t, e) {
                            this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = C(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY))
                        }
                        shouldStickOnContact(t) {
                            return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")))
                        }
                        move(t, e, i, s) {
                            let r = this,
                                o = a(!r.isHidden && r.options.animation),
                                n = r.followPointer || (r.len || 0) > 1,
                                l = {
                                    x: t,
                                    y: e
                                };
                            n || (l.anchorX = i, l.anchorY = s), o.step = () => r.drawTracker(), r.getLabel().animate(l, o)
                        }
                        refresh(t, e) {
                            let {
                                chart: i,
                                options: s,
                                pointer: r,
                                shared: n
                            } = this, a = w(t), h = a[0], d = [], c = s.format, p = s.formatter || this.defaultFormatter, u = i.styledMode, g = {};
                            if (!s.enabled || !h.series) return;
                            o.clearTimeout(this.hideTimer), this.allowShared = !(!b(t) && t.series && t.series.noSharedTooltip), this.followPointer = !this.split && h.series.tooltipOptions.followPointer;
                            let f = this.getAnchor(t, e),
                                m = f[0],
                                x = f[1];
                            n && this.allowShared ? (r.applyInactiveState(a), a.forEach(function(t) {
                                t.setState("hover"), d.push(t.getLabelConfig())
                            }), (g = h.getLabelConfig()).points = d) : g = h.getLabelConfig(), this.len = d.length;
                            let v = k(c) ? l(c, g, i) : p.call(g, this),
                                S = h.series;
                            if (this.distance = C(S.tooltipOptions.distance, 16), !1 === v) this.hide();
                            else {
                                if (this.split && this.allowShared) this.renderSplit(v, a);
                                else {
                                    let t = m,
                                        o = x;
                                    if (e && r.isDirectTouch && (t = e.chartX - i.plotLeft, o = e.chartY - i.plotTop), i.polar || !1 === S.options.clip || a.some(e => r.isDirectTouch || e.series.shouldShowTooltip(t, o))) {
                                        let t = this.getLabel();
                                        (!s.style.width || u) && t.css({
                                            width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px"
                                        }), t.attr({
                                            text: v && v.join ? v.join("") : v
                                        }), t.addClass(this.getClassName(h), !0), u || t.attr({
                                            stroke: s.borderColor || h.color || S.color || "#666666"
                                        }), this.updatePosition({
                                            plotX: m,
                                            plotY: x,
                                            negative: h.negative,
                                            ttBelow: h.ttBelow,
                                            h: f[2] || 0
                                        })
                                    } else {
                                        this.hide();
                                        return
                                    }
                                }
                                this.isHidden && this.label && this.label.attr({
                                    opacity: 1
                                }).show(), this.isHidden = !1
                            }
                            y(this, "refresh")
                        }
                        renderSplit(t, e) {
                            let i = this,
                                {
                                    chart: s,
                                    chart: {
                                        chartWidth: r,
                                        chartHeight: o,
                                        plotHeight: n,
                                        plotLeft: a,
                                        plotTop: l,
                                        scrollablePixelsY: h = 0,
                                        scrollablePixelsX: u,
                                        styledMode: f
                                    },
                                    distance: m,
                                    options: y,
                                    options: {
                                        positioner: b
                                    },
                                    pointer: v
                                } = i,
                                {
                                    scrollLeft: S = 0,
                                    scrollTop: M = 0
                                } = s.scrollablePlotArea ? .scrollingContainer || {},
                                w = i.outside && "number" != typeof u ? d.documentElement.getBoundingClientRect() : {
                                    left: S,
                                    right: S + r,
                                    top: M,
                                    bottom: M + o
                                },
                                A = i.getLabel(),
                                T = this.renderer || s.renderer,
                                P = !!(s.xAxis[0] && s.xAxis[0].opposite),
                                {
                                    left: L,
                                    top: O
                                } = v.getChartPosition(),
                                E = l + M,
                                D = 0,
                                j = n - h;

                            function I(t, e, s, r, o = !0) {
                                let n, a;
                                return s ? (n = P ? 0 : j, a = g(t - r / 2, w.left, w.right - r - (i.outside ? L : 0))) : (n = e - E, a = g(a = o ? t - r - m : t + m, o ? a : w.left, w.right)), {
                                    x: a,
                                    y: n
                                }
                            }
                            k(t) && (t = [!1, t]);
                            let B = t.slice(0, e.length + 1).reduce(function(t, s, r) {
                                if (!1 !== s && "" !== s) {
                                    let o = e[r - 1] || {
                                            isHeader: !0,
                                            plotX: e[0].plotX,
                                            plotY: n,
                                            series: {}
                                        },
                                        h = o.isHeader,
                                        d = h ? i : o.series,
                                        c = d.tt = function(t, e, s) {
                                            let r = t,
                                                {
                                                    isHeader: o,
                                                    series: n
                                                } = e;
                                            if (!r) {
                                                let t = {
                                                    padding: y.padding,
                                                    r: y.borderRadius
                                                };
                                                f || (t.fill = y.backgroundColor, t["stroke-width"] = y.borderWidth ? ? 1), r = T.label("", 0, 0, y[o ? "headerShape" : "shape"], void 0, void 0, y.useHTML).addClass(i.getClassName(e, !0, o)).attr(t).add(A)
                                            }
                                            return r.isActive = !0, r.attr({
                                                text: s
                                            }), f || r.css(y.style).attr({
                                                stroke: y.borderColor || e.color || n.color || "#333333"
                                            }), r
                                        }(d.tt, o, s.toString()),
                                        p = c.getBBox(),
                                        u = p.width + c.strokeWidth();
                                    h && (D = p.height, j += D, P && (E -= D));
                                    let {
                                        anchorX: x,
                                        anchorY: v
                                    } = function(t) {
                                        let e, i;
                                        let {
                                            isHeader: s,
                                            plotX: r = 0,
                                            plotY: o = 0,
                                            series: h
                                        } = t;
                                        if (s) e = Math.max(a + r, a), i = l + n / 2;
                                        else {
                                            let {
                                                xAxis: t,
                                                yAxis: s
                                            } = h;
                                            e = t.pos + g(r, -m, t.len + m), h.shouldShowTooltip(0, s.pos - l + o, {
                                                ignoreX: !0
                                            }) && (i = s.pos + o)
                                        }
                                        return {
                                            anchorX: e = g(e, w.left - m, w.right + m),
                                            anchorY: i
                                        }
                                    }(o);
                                    if ("number" == typeof v) {
                                        let e = p.height + 1,
                                            s = b ? b.call(i, u, e, o) : I(x, v, h, u);
                                        t.push({
                                            align: b ? 0 : void 0,
                                            anchorX: x,
                                            anchorY: v,
                                            boxWidth: u,
                                            point: o,
                                            rank: C(s.rank, h ? 1 : 0),
                                            size: e,
                                            target: s.y,
                                            tt: c,
                                            x: s.x
                                        })
                                    } else c.isActive = !1
                                }
                                return t
                            }, []);
                            !b && B.some(t => {
                                let {
                                    outside: e
                                } = i, s = (e ? L : 0) + t.anchorX;
                                return s < w.left && s + t.boxWidth < w.right || s < L - w.left + t.boxWidth && w.right - s > s
                            }) && (B = B.map(t => {
                                let {
                                    x: e,
                                    y: i
                                } = I(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
                                return x(t, {
                                    target: i,
                                    x: e
                                })
                            })), i.cleanSplit(), p(B, j);
                            let R = {
                                left: L,
                                right: L
                            };
                            B.forEach(function(t) {
                                let {
                                    x: e,
                                    boxWidth: s,
                                    isHeader: r
                                } = t;
                                !r && (i.outside && L + e < R.left && (R.left = L + e), !r && i.outside && R.left + s > R.right && (R.right = L + e))
                            }), B.forEach(function(t) {
                                let {
                                    x: e,
                                    anchorX: s,
                                    anchorY: r,
                                    pos: o,
                                    point: {
                                        isHeader: n
                                    }
                                } = t, a = {
                                    visibility: void 0 === o ? "hidden" : "inherit",
                                    x: e,
                                    y: (o || 0) + E,
                                    anchorX: s,
                                    anchorY: r
                                };
                                if (i.outside && e < s) {
                                    let t = L - R.left;
                                    t > 0 && (n || (a.x = e + t, a.anchorX = s + t), n && (a.x = (R.right - R.left) / 2, a.anchorX = s + t))
                                }
                                t.tt.attr(a)
                            });
                            let {
                                container: z,
                                outside: N,
                                renderer: W
                            } = i;
                            if (N && z && W) {
                                let {
                                    width: t,
                                    height: e,
                                    x: i,
                                    y: s
                                } = A.getBBox();
                                W.setSize(t + i, e + s, !1), z.style.left = R.left + "px", z.style.top = O + "px"
                            }
                            c && A.attr({
                                opacity: 1 === A.opacity ? .999 : 1
                            })
                        }
                        drawTracker() {
                            if (!this.shouldStickOnContact()) {
                                this.tracker && (this.tracker = this.tracker.destroy());
                                return
                            }
                            let t = this.chart,
                                e = this.label,
                                i = this.shared ? t.hoverPoints : t.hoverPoint;
                            if (!e || !i) return;
                            let s = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                },
                                r = this.getAnchor(i),
                                o = e.getBBox();
                            r[0] += t.plotLeft - (e.translateX || 0), r[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, r[0]), s.y = Math.min(0, r[1]), s.width = r[0] < 0 ? Math.max(Math.abs(r[0]), o.width - r[0]) : Math.max(Math.abs(r[0]), o.width), s.height = r[1] < 0 ? Math.max(Math.abs(r[1]), o.height - Math.abs(r[1])) : Math.max(Math.abs(r[1]), o.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({
                                fill: "rgba(0,0,0,0)"
                            }))
                        }
                        styledModeFormat(t) {
                            return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')
                        }
                        tooltipFooterHeaderFormatter(t, e) {
                            let i = t.series,
                                s = i.tooltipOptions,
                                r = i.xAxis,
                                o = r && r.dateTime,
                                n = {
                                    isFooter: e,
                                    labelConfig: t
                                },
                                a = s.xDateFormat,
                                h = s[e ? "footerFormat" : "headerFormat"];
                            return y(this, "headerFormatter", n, function(e) {
                                o && !a && v(t.key) && (a = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && a && (t.point && t.point.tooltipDateKeys || ["key"]).forEach(function(t) {
                                    h = h.replace("{point." + t + "}", "{point." + t + ":" + a + "}")
                                }), i.chart.styledMode && (h = this.styledModeFormat(h)), e.text = l(h, {
                                    point: t,
                                    series: i
                                }, this.chart)
                            }), n.text
                        }
                        update(t) {
                            this.destroy(), this.init(this.chart, S(!0, this.options, t))
                        }
                        updatePosition(t) {
                            let {
                                chart: e,
                                container: i,
                                distance: s,
                                options: r,
                                pointer: o,
                                renderer: n
                            } = this, {
                                height: a = 0,
                                width: l = 0
                            } = this.getLabel(), {
                                left: h,
                                top: d,
                                scaleX: c,
                                scaleY: p
                            } = o.getChartPosition(), u = (r.positioner || this.getPosition).call(this, l, a, t), g = (t.plotX || 0) + e.plotLeft, m = (t.plotY || 0) + e.plotTop, x;
                            n && i && (r.positioner && (u.x += h - s, u.y += d - s), x = (r.borderWidth || 0) + 2 * s + 2, n.setSize(l + x, a + x, !1), (1 !== c || 1 !== p) && (f(i, {
                                transform: `scale(${c}, ${p})`
                            }), g *= c, m *= p), g += h - u.x, m += d - u.y), this.move(Math.round(u.x), Math.round(u.y || 0), g, m)
                        }
                    }
                    return (n = T || (T = {})).compose = function(t) {
                        M(h, "Core.Tooltip") && u(t, "afterInit", function() {
                            let t = this.chart;
                            t.options.tooltip && (t.tooltip = new n(t, t.options.tooltip, this))
                        })
                    }, T
                }), i(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t, e, i, s, r) {
                    let {
                        animObject: o
                    } = e, {
                        defaultOptions: n
                    } = i, {
                        format: a
                    } = s, {
                        addEvent: l,
                        crisp: h,
                        erase: d,
                        extend: c,
                        fireEvent: p,
                        getNestedProperty: u,
                        isArray: g,
                        isFunction: f,
                        isNumber: m,
                        isObject: x,
                        merge: y,
                        pick: b,
                        syncTimeout: v,
                        removeEvent: k,
                        uniqueKey: S
                    } = r;
                    class C {
                        animateBeforeDestroy() {
                            let t = this,
                                e = {
                                    x: t.startXPos,
                                    opacity: 0
                                },
                                i = t.getGraphicalProps();
                            i.singular.forEach(function(i) {
                                t[i] = t[i].animate("dataLabel" === i ? {
                                    x: t[i].startXPos,
                                    y: t[i].startYPos,
                                    opacity: 0
                                } : e)
                            }), i.plural.forEach(function(e) {
                                t[e].forEach(function(e) {
                                    e.element && e.animate(c({
                                        x: t.startXPos
                                    }, e.startYPos ? {
                                        x: e.startXPos,
                                        y: e.startYPos
                                    } : {}))
                                })
                            })
                        }
                        applyOptions(t, e) {
                            let i = this.series,
                                s = i.options.pointValKey || i.pointValKey;
                            return c(this, t = C.prototype.optionsToObject.call(this, t)), this.options = this.options ? c(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = C.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i ? void 0 === e ? this.x = i.autoIncrement() : this.x = e : m(t.x) && i.options.relativeXValue && (this.x = i.autoIncrement(t.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this
                        }
                        destroy() {
                            if (!this.destroyed) {
                                let t = this,
                                    e = t.series,
                                    i = e.chart,
                                    s = e.options.dataSorting,
                                    r = i.hoverPoints,
                                    n = o(t.series.chart.renderer.globalAnimation),
                                    a = () => {
                                        for (let e in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (k(t), t.destroyElements()), t) delete t[e]
                                    };
                                t.legendItem && i.legend.destroyItem(t), r && (t.setState(), d(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), v(a, n.duration)) : a(), i.pointCount--
                            }
                            this.destroyed = !0
                        }
                        destroyElements(t) {
                            let e = this,
                                i = e.getGraphicalProps(t);
                            i.singular.forEach(function(t) {
                                e[t] = e[t].destroy()
                            }), i.plural.forEach(function(t) {
                                e[t].forEach(function(t) {
                                    t && t.element && t.destroy()
                                }), delete e[t]
                            })
                        }
                        firePointEvent(t, e, i) {
                            let s = this,
                                r = this.series.options;
                            s.manageEvent(t), "click" === t && r.allowPointSelect && (i = function(t) {
                                !s.destroyed && s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                            }), p(s, t, e, i)
                        }
                        getClassName() {
                            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                        }
                        getGraphicalProps(t) {
                            let e, i;
                            let s = this,
                                r = [],
                                o = {
                                    singular: [],
                                    plural: []
                                };
                            for ((t = t || {
                                    graphic: 1,
                                    dataLabel: 1
                                }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--;) s[e = r[i]] && o.singular.push(e);
                            return ["graphic", "dataLabel"].forEach(function(e) {
                                let i = e + "s";
                                t[e] && s[i] && o.plural.push(i)
                            }), o
                        }
                        getLabelConfig() {
                            return {
                                x: this.category,
                                y: this.y,
                                color: this.color,
                                colorIndex: this.colorIndex,
                                key: this.name || this.category,
                                series: this.series,
                                point: this,
                                percentage: this.percentage,
                                total: this.total || this.stackTotal
                            }
                        }
                        getNestedProperty(t) {
                            return t ? 0 === t.indexOf("custom.") ? u(t, this.options) : this[t] : void 0
                        }
                        getZone() {
                            let t = this.series,
                                e = t.zones,
                                i = t.zoneAxis || "y",
                                s, r = 0;
                            for (s = e[0]; this[i] >= s.value;) s = e[++r];
                            return this.nonZonedColor || (this.nonZonedColor = this.color), s && s.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s
                        }
                        hasNewShapeType() {
                            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                        }
                        constructor(t, e, i) {
                            this.formatPrefix = "point", this.visible = !0, this.series = t, this.applyOptions(e, i), this.id ? ? (this.id = S()), this.resolveColor(), t.chart.pointCount++, p(this, "afterInit")
                        }
                        isValid() {
                            return (m(this.x) || this.x instanceof Date) && m(this.y)
                        }
                        optionsToObject(t) {
                            let e = this.series,
                                i = e.options.keys,
                                s = i || e.pointArrayMap || ["y"],
                                r = s.length,
                                o = {},
                                n, a = 0,
                                l = 0;
                            if (m(t) || null === t) o[s[0]] = t;
                            else if (g(t))
                                for (!i && t.length > r && ("string" == (n = typeof t[0]) ? o.name = t[0] : "number" === n && (o.x = t[0]), a++); l < r;) i && void 0 === t[a] || (s[l].indexOf(".") > 0 ? C.prototype.setNestedProperty(o, t[a], s[l]) : o[s[l]] = t[a]), a++, l++;
                            else "object" == typeof t && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
                            return o
                        }
                        pos(t, e = this.plotY) {
                            if (!this.destroyed) {
                                let {
                                    plotX: i,
                                    series: s
                                } = this, {
                                    chart: r,
                                    xAxis: o,
                                    yAxis: n
                                } = s, a = 0, l = 0;
                                if (m(i) && m(e)) return t && (a = o ? o.pos : r.plotLeft, l = n ? n.pos : r.plotTop), r.inverted && o && n ? [n.len - e + l, o.len - i + a] : [i + a, e + l]
                            }
                        }
                        resolveColor() {
                            let t = this.series,
                                e = t.chart.options.chart,
                                i = t.chart.styledMode,
                                s, r, o = e.colorCount,
                                n;
                            delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), n = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), n = t.colorIndex), this.colorIndex = b(this.options.colorIndex, n), this.color = b(this.options.color, s)
                        }
                        setNestedProperty(t, e, i) {
                            return i.split(".").reduce(function(t, i, s, r) {
                                let o = r.length - 1 === s;
                                return t[i] = o ? e : x(t[i], !0) ? t[i] : {}, t[i]
                            }, t), t
                        }
                        shouldDraw() {
                            return !this.isNull
                        }
                        tooltipFormatter(t) {
                            let e = this.series,
                                i = e.tooltipOptions,
                                s = b(i.valueDecimals, ""),
                                r = i.valuePrefix || "",
                                o = i.valueSuffix || "";
                            return e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)), (e.pointArrayMap || ["y"]).forEach(function(e) {
                                e = "{point." + e, (r || o) && (t = t.replace(RegExp(e + "}", "g"), r + e + "}" + o)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + s + "f}")
                            }), a(t, {
                                point: this,
                                series: this.series
                            }, e.chart)
                        }
                        update(t, e, i, s) {
                            let r;
                            let o = this,
                                n = o.series,
                                a = o.graphic,
                                l = n.chart,
                                h = n.options;

                            function d() {
                                o.applyOptions(t);
                                let s = a && o.hasMockGraphic,
                                    d = null === o.y ? !s : s;
                                a && d && (o.graphic = a.destroy(), delete o.hasMockGraphic), x(t, !0) && (a && a.element && t && t.marker && void 0 !== t.marker.symbol && (o.graphic = a.destroy()), t ? .dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index, n.updateParallelArrays(o, r), h.data[r] = x(h.data[r], !0) || x(t, !0) ? o.options : b(t, h.data[r]), n.isDirty = n.isDirtyData = !0, !n.fixedBox && n.hasCartesianSeries && (l.isDirtyBox = !0), "point" === h.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                            }
                            e = b(e, !0), !1 === s ? d() : o.firePointEvent("update", {
                                options: t
                            }, d)
                        }
                        remove(t, e) {
                            this.series.removePoint(this.series.data.indexOf(this), t, e)
                        }
                        select(t, e) {
                            let i = this,
                                s = i.series,
                                r = s.chart;
                            t = b(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", {
                                accumulate: e
                            }, function() {
                                i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(t) {
                                    let e = t.series;
                                    t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(r.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                                })
                            }), delete this.selectedStaging
                        }
                        onMouseOver(t) {
                            let {
                                inverted: e,
                                pointer: i
                            } = this.series.chart;
                            i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this))
                        }
                        onMouseOut() {
                            let t = this.series.chart;
                            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(t) {
                                t.setState()
                            }), t.hoverPoints = t.hoverPoint = null
                        }
                        manageEvent(t) {
                            let e = y(this.series.options.point, this.options),
                                i = e.events ? .[t];
                            f(i) && (!this.hcEvents ? .[t] || this.hcEvents ? .[t] ? .map(t => t.fn).indexOf(i) === -1) ? (l(this, t, i), this.hasImportedEvents = !0) : this.hasImportedEvents && !i && this.hcEvents ? .[t] && (k(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || (this.hasImportedEvents = !1))
                        }
                        setState(e, i) {
                            let s = this.series,
                                r = this.state,
                                o = s.options.states[e || "normal"] || {},
                                a = n.plotOptions[s.type].marker && s.options.marker,
                                l = a && !1 === a.enabled,
                                h = a && a.states && a.states[e || "normal"] || {},
                                d = !1 === h.enabled,
                                u = this.marker || {},
                                g = s.chart,
                                f = a && s.markerAttribs,
                                x = s.halo,
                                y, v, k, S = s.stateMarkerGraphic,
                                C;
                            if ((e = e || "") === this.state && !i || this.selected && "select" !== e || !1 === o.enabled || e && (d || l && !1 === h.enabled) || e && u.states && u.states[e] && !1 === u.states[e].enabled) return;
                            if (this.state = e, f && (y = s.markerAttribs(this, e)), this.graphic && !this.hasMockGraphic) {
                                if (r && this.graphic.removeClass("highcharts-point-" + r), e && this.graphic.addClass("highcharts-point-" + e), !g.styledMode) {
                                    v = s.pointAttribs(this, e), k = b(g.options.chart.animation, o.animation);
                                    let t = v.opacity;
                                    s.options.inactiveOtherPoints && m(t) && (this.dataLabels || []).forEach(function(e) {
                                        e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({
                                            opacity: t
                                        }, k), e.connector && e.connector.animate({
                                            opacity: t
                                        }, k))
                                    }), this.graphic.animate(v, k)
                                }
                                y && this.graphic.animate(y, b(g.options.chart.animation, h.animation, a.animation)), S && S.hide()
                            } else e && h && (C = u.symbol || s.symbol, S && S.currentSymbol !== C && (S = S.destroy()), y && (S ? S[i ? "animate" : "attr"]({
                                x: y.x,
                                y: y.y
                            }) : C && (s.stateMarkerGraphic = S = g.renderer.symbol(C, y.x, y.y, y.width, y.height).add(s.markerGroup), S.currentSymbol = C)), !g.styledMode && S && "inactive" !== this.state && S.attr(s.pointAttribs(this, e))), S && (S[e && this.isInside ? "show" : "hide"](), S.element.point = this, S.addClass(this.getClassName(), !0));
                            let M = o.halo,
                                w = this.graphic || S,
                                A = w && w.visibility || "inherit";
                            M && M.size && w && "hidden" !== A && !this.isCluster ? (x || (s.halo = x = g.renderer.path().add(w.parentGroup)), x.show()[i ? "animate" : "attr"]({
                                d: this.haloPath(M.size)
                            }), x.attr({
                                class: "highcharts-halo highcharts-color-" + b(this.colorIndex, s.colorIndex) + (this.className ? " " + this.className : ""),
                                visibility: A,
                                zIndex: -1
                            }), x.point = this, g.styledMode || x.attr(c({
                                fill: this.color || s.color,
                                "fill-opacity": M.opacity
                            }, t.filterUserAttributes(M.attributes || {})))) : x ? .point ? .haloPath && !x.point.destroyed && x.animate({
                                d: x.point.haloPath(0)
                            }, null, x.hide), p(this, "afterSetState", {
                                state: e
                            })
                        }
                        haloPath(t) {
                            let e = this.pos();
                            return e ? this.series.chart.renderer.symbols.circle(h(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : []
                        }
                    }
                    return C
                }), i(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    var s;
                    let {
                        parse: r
                    } = t, {
                        charts: o,
                        composed: n,
                        isTouchDevice: a
                    } = e, {
                        addEvent: l,
                        attr: h,
                        css: d,
                        extend: c,
                        find: p,
                        fireEvent: u,
                        isNumber: g,
                        isObject: f,
                        objectEach: m,
                        offset: x,
                        pick: y,
                        pushUnique: b,
                        splat: v
                    } = i;
                    class k {
                        applyInactiveState(t) {
                            let e = [],
                                i;
                            (t || []).forEach(function(t) {
                                i = t.series, e.push(i), i.linkedParent && e.push(i.linkedParent), i.linkedSeries && (e = e.concat(i.linkedSeries)), i.navigatorSeries && e.push(i.navigatorSeries)
                            }), this.chart.series.forEach(function(t) {
                                -1 === e.indexOf(t) ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
                            })
                        }
                        destroy() {
                            let t = this;
                            this.eventsToUnbind.forEach(t => t()), this.eventsToUnbind = [], !e.chartCount && (k.unbindDocumentMouseUp && (k.unbindDocumentMouseUp = k.unbindDocumentMouseUp()), k.unbindDocumentTouchEnd && (k.unbindDocumentTouchEnd = k.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), m(t, function(e, i) {
                                t[i] = void 0
                            })
                        }
                        getSelectionMarkerAttrs(t, e) {
                            let i = {
                                args: {
                                    chartX: t,
                                    chartY: e
                                },
                                attrs: {},
                                shapeType: "rect"
                            };
                            return u(this, "getSelectionMarkerAttrs", i, i => {
                                let s;
                                let {
                                    chart: r,
                                    zoomHor: o,
                                    zoomVert: n
                                } = this, {
                                    mouseDownX: a = 0,
                                    mouseDownY: l = 0
                                } = r, h = i.attrs;
                                h.x = r.plotLeft, h.y = r.plotTop, h.width = o ? 1 : r.plotWidth, h.height = n ? 1 : r.plotHeight, o && (s = t - a, h.width = Math.max(1, Math.abs(s)), h.x = (s > 0 ? 0 : s) + a), n && (s = e - l, h.height = Math.max(1, Math.abs(s)), h.y = (s > 0 ? 0 : s) + l)
                            }), i
                        }
                        drag(t) {
                            let {
                                chart: e
                            } = this, {
                                mouseDownX: i = 0,
                                mouseDownY: s = 0
                            } = e, {
                                panning: o,
                                panKey: n,
                                selectionMarkerFill: a
                            } = e.options.chart, l = e.plotLeft, h = e.plotTop, d = e.plotWidth, c = e.plotHeight, p = f(o) ? o.enabled : o, u = n && t[`${n}Key`], g = t.chartX, m = t.chartY, x, y = this.selectionMarker;
                            if ((!y || !y.touch) && (g < l ? g = l : g > l + d && (g = l + d), m < h ? m = h : m > h + c && (m = h + c), this.hasDragged = Math.sqrt(Math.pow(i - g, 2) + Math.pow(s - m, 2)), this.hasDragged > 10)) {
                                x = e.isInsidePlot(i - l, s - h, {
                                    visiblePlotOnly: !0
                                });
                                let {
                                    shapeType: n,
                                    attrs: d
                                } = this.getSelectionMarkerAttrs(g, m);
                                (e.hasCartesianSeries || e.mapView) && this.hasZoom && x && !u && !y && (this.selectionMarker = y = e.renderer[n](), y.attr({
                                    class: "highcharts-selection-marker",
                                    zIndex: 7
                                }).add(), e.styledMode || y.attr({
                                    fill: a || r("#334eff").setOpacity(.25).get()
                                })), y && y.attr(d), x && !y && p && e.pan(t, o)
                            }
                        }
                        dragStart(t) {
                            let e = this.chart;
                            e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY
                        }
                        getSelectionBox(t) {
                            let e = {
                                args: {
                                    marker: t
                                },
                                result: t.getBBox()
                            };
                            return u(this, "getSelectionBox", e), e.result
                        }
                        drop(t) {
                            let e;
                            let {
                                chart: i,
                                selectionMarker: s
                            } = this;
                            for (let t of i.axes) t.isPanning && (t.isPanning = !1, (t.options.startOnTick || t.options.endOnTick || t.series.some(t => t.boosted)) && (t.forceRedraw = !0, t.setExtremes(t.userMin, t.userMax, !1), e = !0));
                            if (e && i.redraw(), s && t) {
                                if (this.hasDragged) {
                                    let e = this.getSelectionBox(s);
                                    i.transform({
                                        axes: i.axes.filter(t => t.zoomEnabled && ("xAxis" === t.coll && this.zoomX || "yAxis" === t.coll && this.zoomY)),
                                        selection: {
                                            originalEvent: t,
                                            xAxis: [],
                                            yAxis: [],
                                            ...e
                                        },
                                        from: e
                                    })
                                }
                                g(i.index) && (this.selectionMarker = s.destroy())
                            }
                            i && g(i.index) && (d(i.container, {
                                cursor: i._cursor
                            }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [])
                        }
                        findNearestKDPoint(t, e, i) {
                            let s;
                            return t.forEach(function(t) {
                                var r;
                                let o, n, a, l = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y"),
                                    h = t.searchPoint(i, l);
                                f(h, !0) && h.series && (!f(s, !0) || (o = (r = s).distX - h.distX, n = r.dist - h.dist, a = h.series.group ? .zIndex - r.series.group ? .zIndex, (0 !== o && e ? o : 0 !== n ? n : 0 !== a ? a : r.series.index > h.series.index ? -1 : 1) > 0)) && (s = h)
                            }), s
                        }
                        getChartCoordinatesFromPoint(t, e) {
                            let {
                                xAxis: i,
                                yAxis: s
                            } = t.series, r = t.shapeArgs;
                            if (i && s) {
                                let o = t.clientX ? ? t.plotX ? ? 0,
                                    n = t.plotY || 0;
                                return t.isNode && r && g(r.x) && g(r.y) && (o = r.x, n = r.y), e ? {
                                    chartX: s.len + s.pos - n,
                                    chartY: i.len + i.pos - o
                                } : {
                                    chartX: o + i.pos,
                                    chartY: n + s.pos
                                }
                            }
                            if (r && r.x && r.y) return {
                                chartX: r.x,
                                chartY: r.y
                            }
                        }
                        getChartPosition() {
                            if (this.chartPosition) return this.chartPosition;
                            let {
                                container: t
                            } = this.chart, e = x(t);
                            this.chartPosition = {
                                left: e.left,
                                top: e.top,
                                scaleX: 1,
                                scaleY: 1
                            };
                            let {
                                offsetHeight: i,
                                offsetWidth: s
                            } = t;
                            return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition
                        }
                        getCoordinates(t) {
                            let e = {
                                xAxis: [],
                                yAxis: []
                            };
                            for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                axis: i,
                                value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                            });
                            return e
                        }
                        getHoverData(t, e, i, s, r, o) {
                            let n = [],
                                a = function(t) {
                                    return t.visible && !(!r && t.directTouch) && y(t.options.enableMouseTracking, !0)
                                },
                                l = e,
                                h, d = {
                                    chartX: o ? o.chartX : void 0,
                                    chartY: o ? o.chartY : void 0,
                                    shared: r
                                };
                            u(this, "beforeGetHoverData", d), h = l && !l.stickyTracking ? [l] : i.filter(t => t.stickyTracking && (d.filter || a)(t));
                            let c = s && t || !o ? t : this.findNearestKDPoint(h, r, o);
                            return l = c && c.series, c && (r && !l.noSharedTooltip ? (h = i.filter(function(t) {
                                return d.filter ? d.filter(t) : a(t) && !t.noSharedTooltip
                            })).forEach(function(t) {
                                let e = p(t.points, function(t) {
                                    return t.x === c.x && !t.isNull
                                });
                                f(e) && (t.boosted && t.boost && (e = t.boost.getPoint(e)), n.push(e))
                            }) : n.push(c)), u(this, "afterGetHoverData", d = {
                                hoverPoint: c
                            }), {
                                hoverPoint: d.hoverPoint,
                                hoverSeries: l,
                                hoverPoints: n
                            }
                        }
                        getPointFromEvent(t) {
                            let e = t.target,
                                i;
                            for (; e && !i;) i = e.point, e = e.parentNode;
                            return i
                        }
                        onTrackerMouseOut(t) {
                            let e = this.chart,
                                i = t.relatedTarget,
                                s = e.hoverSeries;
                            this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut()
                        }
                        inClass(t, e) {
                            let i = t,
                                s;
                            for (; i;) {
                                if (s = h(i, "class")) {
                                    if (-1 !== s.indexOf(e)) return !0;
                                    if (-1 !== s.indexOf("highcharts-container")) return !1
                                }
                                i = i.parentElement
                            }
                        }
                        constructor(t, e) {
                            this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events ? .click, this.pinchDown = [], this.setDOMEvents(), u(this, "afterInit")
                        }
                        normalize(t, e) {
                            let i = t.touches,
                                s = i ? i.length ? i.item(0) : y(i.changedTouches, t.changedTouches)[0] : t;
                            e || (e = this.getChartPosition());
                            let r = s.pageX - e.left,
                                o = s.pageY - e.top;
                            return c(t, {
                                chartX: Math.round(r /= e.scaleX),
                                chartY: Math.round(o /= e.scaleY)
                            })
                        }
                        onContainerClick(t) {
                            let e = this.chart,
                                i = e.hoverPoint,
                                s = this.normalize(t),
                                r = e.plotLeft,
                                o = e.plotTop;
                            !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (u(i.series, "click", c(s, {
                                point: i
                            })), e.hoverPoint && i.firePointEvent("click", s)) : (c(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, {
                                visiblePlotOnly: !0
                            }) && u(e, "click", s)))
                        }
                        onContainerMouseDown(t) {
                            let i = (1 & (t.buttons || t.button)) == 1;
                            t = this.normalize(t), e.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), (void 0 === t.button || i) && (this.zoomOption(t), i && t.preventDefault ? .(), this.dragStart(t))
                        }
                        onContainerMouseLeave(t) {
                            let {
                                pointer: e
                            } = o[y(k.hoverChartIndex, -1)] || {};
                            t = this.normalize(t), this.onContainerMouseMove(t), e && t.relatedTarget && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0)
                        }
                        onContainerMouseEnter() {
                            delete this.chartPosition
                        }
                        onContainerMouseMove(t) {
                            let e = this.chart,
                                i = e.tooltip,
                                s = this.normalize(t);
                            this.setHoverChartIndex(t), ("mousedown" === e.mouseIsDown || this.touchSelect(s)) && this.drag(s), !e.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
                                visiblePlotOnly: !0
                            })) && !(i && i.shouldStickOnContact(s)) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s))
                        }
                        onDocumentTouchEnd(t) {
                            this.onDocumentMouseUp(t)
                        }
                        onContainerTouchMove(t) {
                            this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t)
                        }
                        onContainerTouchStart(t) {
                            this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0))
                        }
                        onDocumentMouseMove(t) {
                            let e = this.chart,
                                i = e.tooltip,
                                s = this.chartPosition,
                                r = this.normalize(t, s);
                            !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, {
                                visiblePlotOnly: !0
                            }) || i && i.shouldStickOnContact(r) || this.inClass(r.target, "highcharts-tracker") || this.reset()
                        }
                        onDocumentMouseUp(t) {
                            o[y(k.hoverChartIndex, -1)] ? .pointer ? .drop(t)
                        }
                        pinch(t) {
                            let e = this,
                                {
                                    chart: i,
                                    hasZoom: s,
                                    lastTouches: r
                                } = e,
                                o = [].map.call(t.touches || [], t => e.normalize(t)),
                                n = o.length,
                                a = 1 === n && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                                l = i.tooltip,
                                h = 1 === n && y(l ? .options.followTouchMove, !0);
                            n > 1 ? e.initiated = !0 : h && (e.initiated = !1), s && e.initiated && !a && !1 !== t.cancelable && t.preventDefault(), "touchstart" === t.type ? (e.pinchDown = o, e.res = !0) : h ? this.runPointActions(e.normalize(t)) : r && (u(i, "touchpan", {
                                originalEvent: t,
                                touches: o
                            }, () => {
                                let e = t => {
                                    let e = t[0],
                                        i = t[1] || e;
                                    return {
                                        x: e.chartX,
                                        y: e.chartY,
                                        width: i.chartX - e.chartX,
                                        height: i.chartY - e.chartY
                                    }
                                };
                                i.transform({
                                    axes: i.axes.filter(t => t.zoomEnabled && (this.zoomHor && t.horiz || this.zoomVert && !t.horiz)),
                                    to: e(o),
                                    from: e(r),
                                    trigger: t.type
                                })
                            }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o
                        }
                        reset(t, e) {
                            let i = this.chart,
                                s = i.hoverSeries,
                                r = i.hoverPoint,
                                o = i.hoverPoints,
                                n = i.tooltip,
                                a = n && n.shared ? o : r;
                            t && a && v(a).forEach(function(e) {
                                e.series.isCartesian && void 0 === e.plotX && (t = !1)
                            }), t ? n && a && v(a).length && (n.refresh(a), n.shared && o ? o.forEach(function(t) {
                                t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                            }) : r && (r.setState(r.state, !0), i.axes.forEach(function(t) {
                                t.crosshair && r.series[t.coll] === t && t.drawCrosshair(null, r)
                            }))) : (r && r.onMouseOut(), o && o.forEach(function(t) {
                                t.setState()
                            }), s && s.onMouseOut(), n && n.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(t) {
                                t.hideCrosshair()
                            }), i.hoverPoints = i.hoverPoint = void 0)
                        }
                        runPointActions(t, e, i) {
                            let s = this.chart,
                                r = s.series,
                                n = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
                                a = !!n && n.shared,
                                h = e || s.hoverPoint,
                                d = h && h.series || s.hoverSeries,
                                c = (!t || "touchmove" !== t.type) && (!!e || d && d.directTouch && this.isDirectTouch),
                                u = this.getHoverData(h, d, r, c, a, t);
                            h = u.hoverPoint, d = u.hoverSeries;
                            let g = u.hoverPoints,
                                f = d && d.tooltipOptions.followPointer && !d.tooltipOptions.split,
                                m = a && d && !d.noSharedTooltip;
                            if (h && (i || h !== s.hoverPoint || n && n.isHidden)) {
                                if ((s.hoverPoints || []).forEach(function(t) {
                                        -1 === g.indexOf(t) && t.setState()
                                    }), s.hoverSeries !== d && d.onMouseOver(), this.applyInactiveState(g), (g || []).forEach(function(t) {
                                        t.setState("hover")
                                    }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !h.series) return;
                                s.hoverPoints = g, s.hoverPoint = h, h.firePointEvent("mouseOver", void 0, () => {
                                    n && h && n.refresh(m ? g : h, t)
                                })
                            } else if (f && n && !n.isHidden) {
                                let e = n.getAnchor([{}], t);
                                s.isInsidePlot(e[0], e[1], {
                                    visiblePlotOnly: !0
                                }) && n.updatePosition({
                                    plotX: e[0],
                                    plotY: e[1]
                                })
                            }
                            this.unDocMouseMove || (this.unDocMouseMove = l(s.container.ownerDocument, "mousemove", t => o[k.hoverChartIndex ? ? -1] ? .pointer ? .onDocumentMouseMove(t)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(e) {
                                let i;
                                let r = y((e.crosshair || {}).snap, !0);
                                !r || (i = s.hoverPoint) && i.series[e.coll] === e || (i = p(g, t => t.series && t.series[e.coll] === e)), i || !r ? e.drawCrosshair(t, i) : e.hideCrosshair()
                            })
                        }
                        setDOMEvents() {
                            let t = this.chart.container,
                                e = t.ownerDocument;
                            t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(l(t, "mouseenter", this.onContainerMouseEnter.bind(this)), l(t, "mouseleave", this.onContainerMouseLeave.bind(this))), k.unbindDocumentMouseUp || (k.unbindDocumentMouseUp = l(e, "mouseup", this.onDocumentMouseUp.bind(this)));
                            let i = this.chart.renderTo.parentElement;
                            for (; i && "BODY" !== i.tagName;) this.eventsToUnbind.push(l(i, "scroll", () => {
                                delete this.chartPosition
                            })), i = i.parentElement;
                            this.eventsToUnbind.push(l(t, "touchstart", this.onContainerTouchStart.bind(this), {
                                passive: !1
                            }), l(t, "touchmove", this.onContainerTouchMove.bind(this), {
                                passive: !1
                            })), k.unbindDocumentTouchEnd || (k.unbindDocumentTouchEnd = l(e, "touchend", this.onDocumentTouchEnd.bind(this), {
                                passive: !1
                            })), this.setPointerCapture(), l(this.chart, "redraw", this.setPointerCapture.bind(this))
                        }
                        setPointerCapture() {
                            if (!a) return;
                            let t = this.pointerCaptureEventsToUnbind,
                                e = this.chart,
                                i = e.container,
                                s = y(e.options.tooltip ? .followTouchMove, !0) && e.series.some(t => t.options.findNearestPointBy.indexOf("y") > -1);
                            !this.hasPointerCapture && s ? (t.push(l(i, "pointerdown", t => {
                                t.target ? .hasPointerCapture(t.pointerId) && t.target ? .releasePointerCapture(t.pointerId)
                            }), l(i, "pointermove", t => {
                                e.pointer ? .getPointFromEvent(t) ? .onMouseOver(t)
                            })), e.styledMode || d(i, {
                                "touch-action": "none"
                            }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach(t => t()), t.length = 0, e.styledMode || d(i, {
                                "touch-action": y(e.options.chart.style ? .["touch-action"], "manipulation")
                            }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1)
                        }
                        setHoverChartIndex(t) {
                            let i = this.chart,
                                s = e.charts[y(k.hoverChartIndex, -1)];
                            s && s !== i && s.pointer ? .onContainerMouseLeave(t || {
                                relatedTarget: i.container
                            }), s && s.mouseIsDown || (k.hoverChartIndex = i.index)
                        }
                        touch(t, e) {
                            let i;
                            let {
                                chart: s,
                                pinchDown: r = []
                            } = this;
                            this.setHoverChartIndex(), 1 === t.touches.length ? (t = this.normalize(t), s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                                visiblePlotOnly: !0
                            }) && !s.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), y(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
                        }
                        touchSelect(t) {
                            return !!(this.chart.zooming.singleTouch && t.touches && 1 === t.touches.length)
                        }
                        zoomOption(t) {
                            let e = this.chart,
                                i = e.inverted,
                                s = e.zooming.type || "",
                                r, o;
                            /touch/.test(t.type) && (s = y(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o
                        }
                    }
                    return (s = k || (k = {})).compose = function(t) {
                        b(n, "Core.Pointer") && l(t, "beforeRender", function() {
                            this.pointer = new s(this, this.options)
                        })
                    }, k
                }), i(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o) {
                    var n;
                    let {
                        animObject: a,
                        setAnimation: l
                    } = t, {
                        format: h
                    } = e, {
                        composed: d,
                        marginNames: c
                    } = i, {
                        distribute: p
                    } = r, {
                        addEvent: u,
                        createElement: g,
                        css: f,
                        defined: m,
                        discardElement: x,
                        find: y,
                        fireEvent: b,
                        isNumber: v,
                        merge: k,
                        pick: S,
                        pushUnique: C,
                        relativeLength: M,
                        stableSort: w,
                        syncTimeout: A
                    } = o;
                    class T {
                        constructor(t, e) {
                            this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), u(this.chart, "endResize", function() {
                                this.legend.positionCheckboxes()
                            })), u(this.chart, "render", () => {
                                this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems())
                            })
                        }
                        setOptions(t) {
                            let e = S(t.padding, 8);
                            this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = k(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = S(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
                        }
                        update(t, e) {
                            let i = this.chart;
                            this.setOptions(k(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, S(e, !0) && i.redraw(), b(this, "afterUpdate", {
                                redraw: e
                            })
                        }
                        colorizeItem(t, e) {
                            let {
                                area: i,
                                group: s,
                                label: r,
                                line: o,
                                symbol: n
                            } = t.legendItem || {};
                            if (s ? .[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                                let {
                                    itemHiddenStyle: s = {}
                                } = this, a = s.color, {
                                    fillColor: l,
                                    fillOpacity: h,
                                    lineColor: d,
                                    marker: c
                                } = t.options, p = t => (!e && (t.fill && (t.fill = a), t.stroke && (t.stroke = a)), t);
                                r ? .css(k(e ? this.itemStyle : s)), o ? .attr(p({
                                    stroke: d || t.color
                                })), n && n.attr(p(c && n.isMarker ? t.pointAttribs() : {
                                    fill: t.color
                                })), i ? .attr(p({
                                    fill: l || t.color,
                                    "fill-opacity": l ? 1 : h ? ? .75
                                }))
                            }
                            b(this, "afterColorizeItem", {
                                item: t,
                                visible: e
                            })
                        }
                        positionItems() {
                            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                        }
                        positionItem(t) {
                            let {
                                group: e,
                                x: i = 0,
                                y: s = 0
                            } = t.legendItem || {}, r = this.options, o = r.symbolPadding, n = !r.rtl, a = t.checkbox;
                            if (e && e.element) {
                                let r = {
                                    translateX: n ? i : this.legendWidth - i - 2 * o - 4,
                                    translateY: s
                                };
                                e[m(e.translateY) ? "animate" : "attr"](r, void 0, () => {
                                    b(this, "afterPositionItem", {
                                        item: t
                                    })
                                })
                            }
                            a && (a.x = i, a.y = s)
                        }
                        destroyItem(t) {
                            let e = t.checkbox,
                                i = t.legendItem || {};
                            for (let t of ["group", "label", "line", "symbol"]) i[t] && (i[t] = i[t].destroy());
                            e && x(e), t.legendItem = void 0
                        }
                        destroy() {
                            for (let t of this.getAllItems()) this.destroyItem(t);
                            for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
                            this.display = null
                        }
                        positionCheckboxes() {
                            let t;
                            let e = this.group && this.group.alignAttr,
                                i = this.clipHeight || this.legendHeight,
                                s = this.titleHeight;
                            e && (t = e.translateY, this.allItems.forEach(function(r) {
                                let o;
                                let n = r.checkbox;
                                n && (o = t + s + n.y + (this.scrollOffset || 0) + 3, f(n, {
                                    left: e.translateX + r.checkboxOffset + n.x - 20 + "px",
                                    top: o + "px",
                                    display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none"
                                }))
                            }, this))
                        }
                        renderTitle() {
                            let t = this.options,
                                e = this.padding,
                                i = t.title,
                                s, r = 0;
                            i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({
                                zIndex: 1
                            }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({
                                width: this.maxLegendWidth + "px"
                            }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({
                                translateY: r
                            })), this.titleHeight = r
                        }
                        setText(t) {
                            let e = this.options;
                            t.legendItem.label.attr({
                                text: e.labelFormat ? h(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                            })
                        }
                        renderItem(t) {
                            let e = t.legendItem = t.legendItem || {},
                                i = this.chart,
                                s = i.renderer,
                                r = this.options,
                                o = "horizontal" === r.layout,
                                n = this.symbolWidth,
                                a = r.symbolPadding || 0,
                                l = this.itemStyle,
                                h = this.itemHiddenStyle,
                                d = o ? S(r.itemDistance, 20) : 0,
                                c = !r.rtl,
                                p = !t.series,
                                u = !p && t.series.drawLegendSymbol ? t.series : t,
                                g = u.options,
                                f = !!this.createCheckboxForItem && g && g.showCheckbox,
                                m = r.useHTML,
                                x = t.options.className,
                                y = e.label,
                                b = n + a + d + (f ? 20 : 0);
                            !y && (e.group = s.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + t.colorIndex + (x ? " " + x : "") + (p ? " highcharts-series-" + t.index : "")).attr({
                                zIndex: 1
                            }).add(this.scrollGroup), e.label = y = s.text("", c ? n + a : -a, this.baseline || 0, m), i.styledMode || y.css(k(t.visible ? l : h)), y.attr({
                                align: c ? "left" : "right",
                                zIndex: 2
                            }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(y), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y.attr("y", this.baseline), this.symbolHeight = S(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = S(r.symbolWidth, Math.max(this.symbolHeight, 16)), b = this.symbolWidth + a + d + (f ? 20 : 0), c && y.attr("x", this.symbolWidth + a))), u.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, y, m)), f && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !l.width) && y.css({
                                width: (r.itemWidth || this.widthOption || i.spacingBox.width) - b + "px"
                            }), this.setText(t);
                            let v = y.getBBox(),
                                C = this.fontMetrics && this.fontMetrics.h || 0;
                            t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || v.width + b, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (v.height > 1.5 * C ? v.height : C))
                        }
                        layoutItem(t) {
                            let e = this.options,
                                i = this.padding,
                                s = "horizontal" === e.layout,
                                r = t.itemHeight,
                                o = this.itemMarginBottom,
                                n = this.itemMarginTop,
                                a = s ? S(e.itemDistance, 20) : 0,
                                l = this.maxLegendWidth,
                                h = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth,
                                d = t.legendItem || {};
                            s && this.itemX - i + h > l && (this.itemX = i, this.lastLineHeight && (this.itemY += n + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = n + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += h : (this.itemY += n + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : h) + i, this.offsetWidth)
                        }
                        getAllItems() {
                            let t = [];
                            return this.chart.series.forEach(function(e) {
                                let i = e && e.options;
                                e && S(i.showInLegend, !m(i.linkedTo) && void 0, !0) && (t = t.concat((e.legendItem || {}).labels || ("point" === i.legendType ? e.data : e)))
                            }), b(this, "afterGetAllItems", {
                                allItems: t
                            }), t
                        }
                        getAlignment() {
                            let t = this.options;
                            return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                        }
                        adjustMargins(t, e) {
                            let i = this.chart,
                                s = this.options,
                                r = this.getAlignment();
                            r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(o, n) {
                                o.test(r) && !m(t[n]) && (i[c[n]] = Math.max(i[c[n]], i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] + S(s.margin, 12) + e[n] + (i.titleOffset[n] || 0)))
                            })
                        }
                        proximatePositions() {
                            let t;
                            let e = this.chart,
                                i = [],
                                s = "left" === this.options.align;
                            for (let r of (this.allItems.forEach(function(t) {
                                    let r, o, n = s,
                                        a, l;
                                    t.yAxis && (t.xAxis.options.reversed && (n = !n), t.points && (r = y(n ? t.points : t.points.slice(0).reverse(), function(t) {
                                        return v(t.plotY)
                                    })), o = this.itemMarginTop + t.legendItem.label.getBBox().height + this.itemMarginBottom, l = t.yAxis.top - e.plotTop, a = t.visible ? (r ? r.plotY : t.yAxis.height) + (l - .3 * o) : l + t.yAxis.height, i.push({
                                        target: a,
                                        size: o,
                                        item: t
                                    }))
                                }, this), p(i, e.plotHeight))) t = r.item.legendItem || {}, v(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos)
                        }
                        render() {
                            let t = this.chart,
                                e = t.renderer,
                                i = this.options,
                                s = this.padding,
                                r = this.getAllItems(),
                                o, n, a, l = this.group,
                                h, d = this.box;
                            this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = M(i.width, t.spacingBox.width - s), h = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (h /= 2), this.maxLegendWidth = this.widthOption || h, l || (this.group = l = e.g("legend").addClass(i.className || "").attr({
                                zIndex: 7
                            }).add(), this.contentGroup = e.g().attr({
                                zIndex: 1
                            }).add(l), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), w(r, (t, e) => (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = o = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), n = (this.widthOption || this.offsetWidth) + s, a = this.lastItemY + this.lastLineHeight + this.titleHeight, a = this.handleOverflow(a) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({
                                r: i.borderRadius
                            }).add(l)), t.styledMode || d.attr({
                                stroke: i.borderColor,
                                "stroke-width": i.borderWidth || 0,
                                fill: i.backgroundColor || "none"
                            }).shadow(i.shadow), n > 0 && a > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, {
                                x: 0,
                                y: 0,
                                width: n,
                                height: a
                            }, d.strokeWidth())), l[o ? "show" : "hide"](), t.styledMode && "none" === l.getStyle("display") && (n = a = 0), this.legendWidth = n, this.legendHeight = a, o && this.align(), this.proximate || this.positionItems(), b(this, "afterRender")
                        }
                        align(t = this.chart.spacingBox) {
                            let e = this.chart,
                                i = this.options,
                                s = t.y;
                            /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = k(t, {
                                y: s
                            })), e.hasRendered || (this.group.placed = !1), this.group.align(k(i, {
                                width: this.legendWidth,
                                height: this.legendHeight,
                                verticalAlign: this.proximate ? "top" : i.verticalAlign
                            }), !0, t)
                        }
                        handleOverflow(t) {
                            let e = this,
                                i = this.chart,
                                s = i.renderer,
                                r = this.options,
                                o = r.y,
                                n = "top" === r.verticalAlign,
                                a = this.padding,
                                l = r.maxHeight,
                                h = r.navigation,
                                d = S(h.animation, !0),
                                c = h.arrowSize || 12,
                                p = this.pages,
                                u = this.allItems,
                                g = function(t) {
                                    "number" == typeof t ? k.attr({
                                        height: t
                                    }) : k && (e.clipRect = k.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = t ? "rect(" + a + "px,9999px," + (a + t) + "px,0)" : "auto")
                                },
                                f = function(t) {
                                    return e[t] = s.circle(0, 0, 1.3 * c).translate(c / 2, c / 2).add(v), i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"), e[t]
                                },
                                m, x, y, b = i.spacingBox.height + (n ? -o : o) - a,
                                v = this.nav,
                                k = this.clipRect;
                            return "horizontal" !== r.layout || "middle" === r.verticalAlign || r.floating || (b /= 2), l && (b = Math.min(b, l)), p.length = 0, t && b > 0 && t > b && !1 !== h.enabled ? (this.clipHeight = m = Math.max(b - 20 - this.titleHeight - a, 0), this.currentPage = S(this.currentPage, 1), this.fullHeight = t, u.forEach((t, e) => {
                                let i = (y = t.legendItem || {}).y || 0,
                                    s = Math.round(y.label.getBBox().height),
                                    r = p.length;
                                (!r || i - p[r - 1] > m && (x || i) !== p[r - 1]) && (p.push(x || i), r++), y.pageIx = r - 1, x && ((u[e - 1].legendItem || {}).pageIx = r - 1), e === u.length - 1 && i + s - p[r - 1] > m && i > p[r - 1] && (p.push(i), y.pageIx = r), i !== x && (x = i)
                            }), k || (k = e.clipRect = s.clipRect(0, a - 2, 9999, 0), e.contentGroup.clip(k)), g(m), v || (this.nav = v = s.g().attr({
                                zIndex: 1
                            }).add(this.group), this.up = s.symbol("triangle", 0, 0, c, c).add(v), f("upTracker").on("click", function() {
                                e.scroll(-1, d)
                            }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && h.style && this.pager.css(h.style), this.pager.add(v), this.down = s.symbol("triangle-down", 0, 0, c, c).add(v), f("downTracker").on("click", function() {
                                e.scroll(1, d)
                            })), e.scroll(0), t = b) : v && (g(), this.nav = v.destroy(), this.scrollGroup.attr({
                                translateY: 1
                            }), this.clipHeight = 0), t
                        }
                        scroll(t, e) {
                            let i = this.chart,
                                s = this.pages,
                                r = s.length,
                                o = this.clipHeight,
                                n = this.options.navigation,
                                h = this.pager,
                                d = this.padding,
                                c = this.currentPage + t;
                            c > r && (c = r), c > 0 && (void 0 !== e && l(e, i), this.nav.attr({
                                translateX: d,
                                translateY: o + this.padding + 7 + this.titleHeight,
                                visibility: "inherit"
                            }), [this.up, this.upTracker].forEach(function(t) {
                                t.attr({
                                    class: 1 === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                })
                            }), h.attr({
                                text: c + "/" + r
                            }), [this.down, this.downTracker].forEach(function(t) {
                                t.attr({
                                    x: 18 + this.pager.getBBox().width,
                                    class: c === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                                })
                            }, this), i.styledMode || (this.up.attr({
                                fill: 1 === c ? n.inactiveColor : n.activeColor
                            }), this.upTracker.css({
                                cursor: 1 === c ? "default" : "pointer"
                            }), this.down.attr({
                                fill: c === r ? n.inactiveColor : n.activeColor
                            }), this.downTracker.css({
                                cursor: c === r ? "default" : "pointer"
                            })), this.scrollOffset = -s[c - 1] + this.initialItemY, this.scrollGroup.animate({
                                translateY: this.scrollOffset
                            }), this.currentPage = c, this.positionCheckboxes(), A(() => {
                                b(this, "afterScroll", {
                                    currentPage: c
                                })
                            }, a(S(e, i.renderer.globalAnimation, !0)).duration))
                        }
                        setItemEvents(t, e, i) {
                            let r = this,
                                o = t.legendItem || {},
                                n = r.chart.renderer.boxWrapper,
                                a = t instanceof s,
                                l = "highcharts-legend-" + (a ? "point" : "series") + "-active",
                                h = r.chart.styledMode,
                                d = i ? [e, o.symbol] : [o.group],
                                c = e => {
                                    r.allItems.forEach(i => {
                                        t !== i && [i].concat(i.linkedSeries || []).forEach(t => {
                                            t.setState(e, !a)
                                        })
                                    })
                                };
                            for (let i of d) i && i.on("mouseover", function() {
                                t.visible && c("inactive"), t.setState("hover"), t.visible && n.addClass(l), h || e.css(r.options.itemHoverStyle)
                            }).on("mouseout", function() {
                                r.chart.styledMode || e.css(k(t.visible ? r.itemStyle : r.itemHiddenStyle)), c(""), n.removeClass(l), t.setState()
                            }).on("click", function(e) {
                                let i = "legendItemClick",
                                    s = function() {
                                        t.setVisible && t.setVisible(), c(t.visible ? "inactive" : "")
                                    };
                                n.removeClass(l), e = {
                                    browserEvent: e
                                }, t.firePointEvent ? t.firePointEvent(i, e, s) : b(t, i, e, s)
                            })
                        }
                        createCheckboxForItem(t) {
                            t.checkbox = g("input", {
                                type: "checkbox",
                                className: "highcharts-legend-checkbox",
                                checked: t.selected,
                                defaultChecked: t.selected
                            }, this.options.itemCheckboxStyle, this.chart.container), u(t.checkbox, "click", function(e) {
                                let i = e.target;
                                b(t.series || t, "checkboxClick", {
                                    checked: i.checked,
                                    item: t
                                }, function() {
                                    t.select()
                                })
                            })
                        }
                    }
                    return (n = T || (T = {})).compose = function(t) {
                        C(d, "Core.Legend") && u(t, "beforeMargins", function() {
                            this.legend = new n(this, this.options.legend)
                        })
                    }, T
                }), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        extend: i,
                        merge: s,
                        pick: r
                    } = t;
                    return function(t) {
                        function e(t, e, o) {
                            let n = this.legendItem = this.legendItem || {},
                                {
                                    chart: a,
                                    options: l
                                } = this,
                                {
                                    baseline: h = 0,
                                    symbolWidth: d,
                                    symbolHeight: c
                                } = t,
                                p = this.symbol || "circle",
                                u = c / 2,
                                g = a.renderer,
                                f = n.group,
                                m = h - Math.round(c * (o ? .4 : .3)),
                                x = {},
                                y, b = l.marker,
                                v = 0;
                            if (a.styledMode || (x["stroke-width"] = Math.min(l.lineWidth || 0, 24), l.dashStyle ? x.dashstyle = l.dashStyle : "square" === l.linecap || (x["stroke-linecap"] = "round")), n.line = g.path().addClass("highcharts-graph").attr(x).add(f), o && (n.area = g.path().addClass("highcharts-area").add(f)), x["stroke-linecap"] && (v = Math.min(n.line.strokeWidth(), d) / 2), d) {
                                let t = [
                                    ["M", v, m],
                                    ["L", d - v, m]
                                ];
                                n.line.attr({
                                    d: t
                                }), n.area ? .attr({
                                    d: [...t, ["L", d - v, h],
                                        ["L", v, h]
                                    ]
                                })
                            }
                            if (b && !1 !== b.enabled && d) {
                                let t = Math.min(r(b.radius, u), u);
                                0 === p.indexOf("url") && (b = s(b, {
                                    width: c,
                                    height: c
                                }), t = 0), n.symbol = y = g.symbol(p, d / 2 - t, m - t, 2 * t, 2 * t, i({
                                    context: "legend"
                                }, b)).addClass("highcharts-point").add(f), y.isMarker = !0
                            }
                        }
                        t.areaMarker = function(t, i) {
                            e.call(this, t, i, !0)
                        }, t.lineMarker = e, t.rectangle = function(t, e) {
                            let i = e.legendItem || {},
                                s = t.options,
                                o = t.symbolHeight,
                                n = s.squareSymbol,
                                a = n ? o : t.symbolWidth;
                            i.symbol = this.chart.renderer.rect(n ? (t.symbolWidth - o) / 2 : 0, t.baseline - o + 1, a, o, r(t.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({
                                zIndex: 3
                            }).add(i.group)
                        }
                    }(e || (e = {})), e
                }), i(e, "Core/Series/SeriesDefaults.js", [], function() {
                    return {
                        lineWidth: 2,
                        allowPointSelect: !1,
                        crisp: !0,
                        showCheckbox: !1,
                        animation: {
                            duration: 1e3
                        },
                        enableMouseTracking: !0,
                        events: {},
                        marker: {
                            enabledThreshold: 2,
                            lineColor: "#ffffff",
                            lineWidth: 0,
                            radius: 4,
                            states: {
                                normal: {
                                    animation: !0
                                },
                                hover: {
                                    animation: {
                                        duration: 150
                                    },
                                    enabled: !0,
                                    radiusPlus: 2,
                                    lineWidthPlus: 1
                                },
                                select: {
                                    fillColor: "#cccccc",
                                    lineColor: "#000000",
                                    lineWidth: 2
                                }
                            }
                        },
                        point: {
                            events: {}
                        },
                        dataLabels: {
                            animation: {},
                            align: "center",
                            borderWidth: 0,
                            defer: !0,
                            formatter: function() {
                                let {
                                    numberFormatter: t
                                } = this.series.chart;
                                return "number" != typeof this.y ? "" : t(this.y, -1)
                            },
                            padding: 5,
                            style: {
                                fontSize: "0.7em",
                                fontWeight: "bold",
                                color: "contrast",
                                textOutline: "1px contrast"
                            },
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0
                        },
                        cropThreshold: 300,
                        opacity: 1,
                        pointRange: 0,
                        softThreshold: !0,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 150
                                },
                                lineWidthPlus: 1,
                                marker: {},
                                halo: {
                                    size: 10,
                                    opacity: .25
                                }
                            },
                            select: {
                                animation: {
                                    duration: 0
                                }
                            },
                            inactive: {
                                animation: {
                                    duration: 150
                                },
                                opacity: .2
                            }
                        },
                        stickyTracking: !0,
                        turboThreshold: 1e3,
                        findNearestPointBy: "x"
                    }
                }), i(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
                    var r;
                    let {
                        defaultOptions: o
                    } = e, {
                        extend: n,
                        extendClass: a,
                        merge: l
                    } = s;
                    return function(e) {
                        function s(t, s) {
                            let r = o.plotOptions || {},
                                n = s.defaultOptions,
                                a = s.prototype;
                            return a.type = t, a.pointClass || (a.pointClass = i), !e.seriesTypes[t] && (n && (r[t] = n), e.seriesTypes[t] = s, !0)
                        }
                        e.seriesTypes = t.seriesTypes, e.registerSeriesType = s, e.seriesType = function(t, r, h, d, c) {
                            let p = o.plotOptions || {};
                            if (r = r || "", p[t] = l(p[r], h), delete e.seriesTypes[t], s(t, a(e.seriesTypes[r] || function() {}, d)), e.seriesTypes[t].prototype.type = t, c) {
                                class s extends i {}
                                n(s.prototype, c), e.seriesTypes[t].prototype.pointClass = s
                            }
                            return e.seriesTypes[t]
                        }
                    }(r || (r = {})), r
                }), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, n, a, l, h) {
                    let {
                        animObject: d,
                        setAnimation: c
                    } = t, {
                        defaultOptions: p
                    } = e, {
                        registerEventOptions: u
                    } = i, {
                        svg: g,
                        win: f
                    } = s, {
                        seriesTypes: m
                    } = a, {
                        arrayMax: x,
                        arrayMin: y,
                        clamp: b,
                        correctFloat: v,
                        crisp: k,
                        defined: S,
                        destroyObjectProperties: C,
                        diffObjects: M,
                        erase: w,
                        error: A,
                        extend: T,
                        find: P,
                        fireEvent: L,
                        getClosestDistance: O,
                        getNestedProperty: E,
                        insertItem: D,
                        isArray: j,
                        isNumber: I,
                        isString: B,
                        merge: R,
                        objectEach: z,
                        pick: N,
                        removeEvent: W,
                        splat: G,
                        syncTimeout: H
                    } = h;
                    class X {
                        constructor() {
                            this.zoneAxis = "y"
                        }
                        init(t, e) {
                            let i;
                            L(this, "init", {
                                options: e
                            });
                            let s = this,
                                r = t.series;
                            this.eventsToUnbind = [], s.chart = t, s.options = s.setOptions(e);
                            let o = s.options,
                                n = !1 !== o.visible;
                            s.linkedSeries = [], s.bindAxes(), T(s, {
                                name: o.name,
                                state: "",
                                visible: n,
                                selected: !0 === o.selected
                            }), u(this, o);
                            let a = o.events;
                            (a && a.click || o.point && o.point.events && o.point.events.click || o.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), s.parallelArrays.forEach(function(t) {
                                s[t + "Data"] || (s[t + "Data"] = [])
                            }), s.isCartesian && (t.hasCartesianSeries = !0), r.length && (i = r[r.length - 1]), s._i = N(i && i._i, -1) + 1, s.opacity = s.options.opacity, t.orderItems("series", D(this, r)), o.dataSorting && o.dataSorting.enabled ? s.setDataSortingOptions() : s.points || s.data || s.setData(o.data, !1), L(this, "afterInit")
                        }
                        is(t) {
                            return m[t] && this instanceof m[t]
                        }
                        bindAxes() {
                            let t;
                            let e = this,
                                i = e.options,
                                s = e.chart;
                            L(this, "bindAxes", null, function() {
                                (e.axisTypes || []).forEach(function(r) {
                                    (s[r] || []).forEach(function(s) {
                                        t = s.options, (N(i[r], 0) === s.index || void 0 !== i[r] && i[r] === t.id) && (D(e, s.series), e[r] = s, s.isDirty = !0)
                                    }), e[r] || e.optionalAxis === r || A(18, !0, s)
                                })
                            }), L(this, "afterBindAxes")
                        }
                        updateParallelArrays(t, e, i) {
                            let s = t.series,
                                r = I(e) ? function(i) {
                                    let r = "y" === i && s.toYData ? s.toYData(t) : t[i];
                                    s[i + "Data"][e] = r
                                } : function(t) {
                                    Array.prototype[e].apply(s[t + "Data"], i)
                                };
                            s.parallelArrays.forEach(r)
                        }
                        hasData() {
                            return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0
                        }
                        hasMarkerChanged(t, e) {
                            let i = t.marker,
                                s = e.marker || {};
                            return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width)
                        }
                        autoIncrement(t) {
                            let e = this.options,
                                i = e.pointIntervalUnit,
                                s = e.relativeXValue,
                                r = this.chart.time,
                                o = this.xIncrement,
                                n, a;
                            return (o = N(o, e.pointStart, 0), this.pointInterval = a = N(this.pointInterval, e.pointInterval, 1), s && I(t) && (a *= t), i && (n = new r.Date(o), "day" === i ? r.set("Date", n, r.get("Date", n) + a) : "month" === i ? r.set("Month", n, r.get("Month", n) + a) : "year" === i && r.set("FullYear", n, r.get("FullYear", n) + a), a = n.getTime() - o), s && I(t)) ? o + a : (this.xIncrement = o + a, o)
                        }
                        setDataSortingOptions() {
                            let t = this.options;
                            T(this, {
                                requireSorting: !1,
                                sorted: !1,
                                enabledDataSorting: !0,
                                allowDG: !1
                            }), S(t.pointRange) || (t.pointRange = 1)
                        }
                        setOptions(t) {
                            let e;
                            let i = this.chart,
                                s = i.options.plotOptions,
                                r = i.userOptions || {},
                                o = R(t),
                                n = i.styledMode,
                                a = {
                                    plotOptions: s,
                                    userOptions: o
                                };
                            L(this, "setOptions", a);
                            let l = a.plotOptions[this.type],
                                h = r.plotOptions || {},
                                d = h.series || {},
                                c = p.plotOptions[this.type] || {},
                                u = h[this.type] || {};
                            this.userOptions = a.userOptions;
                            let g = R(l, s.series, u, o);
                            this.tooltipOptions = R(p.tooltip, p.plotOptions.series ? .tooltip, c ? .tooltip, i.userOptions.tooltip, h.series ? .tooltip, u.tooltip, o.tooltip), this.stickyTracking = N(o.stickyTracking, u.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || g.stickyTracking), null === l.marker && delete g.marker, this.zoneAxis = g.zoneAxis || "y";
                            let f = this.zones = (g.zones || []).map(t => ({ ...t
                            }));
                            return (g.negativeColor || g.negativeFillColor) && !g.zones && (e = {
                                value: g[this.zoneAxis + "Threshold"] || g.threshold || 0,
                                className: "highcharts-negative"
                            }, n || (e.color = g.negativeColor, e.fillColor = g.negativeFillColor), f.push(e)), f.length && S(f[f.length - 1].value) && f.push(n ? {} : {
                                color: this.color,
                                fillColor: this.fillColor
                            }), L(this, "afterSetOptions", {
                                options: g
                            }), g
                        }
                        getName() {
                            return N(this.options.name, "Series " + (this.index + 1))
                        }
                        getCyclic(t, e, i) {
                            let s, r;
                            let o = this.chart,
                                n = `${t}Index`,
                                a = `${t}Counter`,
                                l = i ? .length || o.options.chart.colorCount;
                            !e && (S(r = N("color" === t ? this.options.colorIndex : void 0, this[n])) ? s = r : (o.series.length || (o[a] = 0), s = o[a] % l, o[a] += 1), i && (e = i[s])), void 0 !== s && (this[n] = s), this[t] = e
                        }
                        getColor() {
                            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || p.plotOptions[this.type].color, this.chart.options.colors)
                        }
                        getPointsCollection() {
                            return (this.hasGroupedData ? this.points : this.data) || []
                        }
                        getSymbol() {
                            let t = this.options.marker;
                            this.getCyclic("symbol", t.symbol, this.chart.options.symbols)
                        }
                        findPointIndex(t, e) {
                            let i, s, r;
                            let n = t.id,
                                a = t.x,
                                l = this.points,
                                h = this.options.dataSorting;
                            if (n) {
                                let t = this.chart.get(n);
                                t instanceof o && (i = t)
                            } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                                let e = e => !e.touched && e.index === t.index;
                                if (h && h.matchByName ? e = e => !e.touched && e.name === t.name : this.options.relativeXValue && (e = e => !e.touched && e.options.x === t.x), !(i = P(l, e))) return
                            }
                            return i && void 0 !== (r = i && i.index) && (s = !0), void 0 === r && I(a) && (r = this.xData.indexOf(a, e)), -1 !== r && void 0 !== r && this.cropped && (r = r >= this.cropStart ? r - this.cropStart : r), !s && I(r) && l[r] && l[r].touched && (r = void 0), r
                        }
                        updateData(t, e) {
                            let i = this.options,
                                s = i.dataSorting,
                                r = this.points,
                                o = [],
                                n = this.requireSorting,
                                a = t.length === r.length,
                                l, h, d, c, p = !0;
                            if (this.xIncrement = null, t.forEach(function(t, e) {
                                    let h;
                                    let d = S(t) && this.pointClass.prototype.optionsToObject.call({
                                            series: this
                                        }, t) || {},
                                        p = d.x;
                                    d.id || I(p) ? (-1 === (h = this.findPointIndex(d, c)) || void 0 === h ? o.push(t) : r[h] && t !== i.data[h] ? (r[h].update(t, !1, null, !1), r[h].touched = !0, n && (c = h + 1)) : r[h] && (r[h].touched = !0), (!a || e !== h || s && s.enabled || this.hasDerivedData) && (l = !0)) : o.push(t)
                                }, this), l)
                                for (h = r.length; h--;)(d = r[h]) && !d.touched && d.remove && d.remove(!1, e);
                            else !a || s && s.enabled ? p = !1 : (t.forEach(function(t, e) {
                                t === r[e].y || r[e].destroyed || r[e].update(t, !1, null, !1)
                            }), o.length = 0);
                            return r.forEach(function(t) {
                                t && (t.touched = !1)
                            }), !!p && (o.forEach(function(t) {
                                this.addPoint(t, !1, null, null, !1)
                            }, this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement()), !0)
                        }
                        setData(t, e = !0, i, s) {
                            let r = this,
                                o = r.points,
                                n = o && o.length || 0,
                                a = r.options,
                                l = r.chart,
                                h = a.dataSorting,
                                d = r.xAxis,
                                c = a.turboThreshold,
                                p = this.xData,
                                u = this.yData,
                                g = r.pointArrayMap,
                                f = g && g.length,
                                m = a.keys,
                                x, y, b, v = 0,
                                k = 1,
                                S = null,
                                C;
                            l.options.chart.allowMutatingData || (a.data && delete r.options.data, r.userOptions.data && delete r.userOptions.data, C = R(!0, t));
                            let M = (t = C || t || []).length;
                            if (h && h.enabled && (t = this.sortData(t)), l.options.chart.allowMutatingData && !1 !== s && M && n && !r.cropped && !r.hasGroupedData && r.visible && !r.boosted && (b = this.updateData(t, i)), !b) {
                                if (r.xIncrement = null, r.colorCounter = 0, this.parallelArrays.forEach(function(t) {
                                        r[t + "Data"].length = 0
                                    }), c && M > c) {
                                    if (I(S = r.getFirstValidPoint(t)))
                                        for (x = 0; x < M; x++) p[x] = this.autoIncrement(), u[x] = t[x];
                                    else if (j(S)) {
                                        if (f) {
                                            if (S.length === f)
                                                for (x = 0; x < M; x++) p[x] = this.autoIncrement(), u[x] = t[x];
                                            else
                                                for (x = 0; x < M; x++) y = t[x], p[x] = y[0], u[x] = y.slice(1, f + 1)
                                        } else if (m && (v = m.indexOf("x"), k = m.indexOf("y"), v = v >= 0 ? v : 0, k = k >= 0 ? k : 1), 1 === S.length && (k = 0), v === k)
                                            for (x = 0; x < M; x++) p[x] = this.autoIncrement(), u[x] = t[x][k];
                                        else
                                            for (x = 0; x < M; x++) y = t[x], p[x] = y[v], u[x] = y[k]
                                    } else A(12, !1, l)
                                } else
                                    for (x = 0; x < M; x++) y = {
                                        series: r
                                    }, r.pointClass.prototype.applyOptions.apply(y, [t[x]]), r.updateParallelArrays(y, x);
                                for (u && B(u[0]) && A(14, !0, l), r.data = [], r.options.data = r.userOptions.data = t, x = n; x--;) o[x] ? .destroy();
                                d && (d.minRange = d.userMinRange), r.isDirty = l.isDirtyBox = !0, r.isDirtyData = !!o, i = !1
                            }
                            "point" === a.legendType && (this.processData(), this.generatePoints()), e && l.redraw(i)
                        }
                        sortData(t) {
                            let e = this,
                                i = e.options.dataSorting.sortKey || "y",
                                s = function(t, e) {
                                    return S(e) && t.pointClass.prototype.optionsToObject.call({
                                        series: t
                                    }, e) || {}
                                };
                            return t.forEach(function(i, r) {
                                t[r] = s(e, i), t[r].index = r
                            }, this), t.concat().sort((t, e) => {
                                let s = E(i, t),
                                    r = E(i, e);
                                return r < s ? -1 : r > s ? 1 : 0
                            }).forEach(function(t, e) {
                                t.x = e
                            }, this), e.linkedSeries && e.linkedSeries.forEach(function(e) {
                                let i = e.options,
                                    r = i.data;
                                i.dataSorting && i.dataSorting.enabled || !r || (r.forEach(function(i, o) {
                                    r[o] = s(e, i), t[o] && (r[o].x = t[o].x, r[o].index = o)
                                }), e.setData(r, !1))
                            }), t
                        }
                        getProcessedData(t) {
                            let e = this,
                                i = e.xAxis,
                                s = e.options.cropThreshold,
                                r = i ? .logarithmic,
                                o = e.isCartesian,
                                n, a, l = 0,
                                h, d, c, p = e.xData,
                                u = e.yData,
                                g = !1,
                                f = p.length;
                            i && (d = (h = i.getExtremes()).min, c = h.max, g = !!(i.categories && !i.names.length)), o && e.sorted && !t && (!s || f > s || e.forceCrop) && (p[f - 1] < d || p[0] > c ? (p = [], u = []) : e.yData && (p[0] < d || p[f - 1] > c) && (p = (n = this.cropData(e.xData, e.yData, d, c)).xData, u = n.yData, l = n.start, a = !0));
                            let m = O([r ? p.map(r.log2lin) : p], () => e.requireSorting && !g && A(15, !1, e.chart));
                            return {
                                xData: p,
                                yData: u,
                                cropped: a,
                                cropStart: l,
                                closestPointRange: m
                            }
                        }
                        processData(t) {
                            let e = this.xAxis;
                            if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                            let i = this.getProcessedData();
                            this.cropped = i.cropped, this.cropStart = i.cropStart, this.processedXData = i.xData, this.processedYData = i.yData, this.closestPointRange = this.basePointRange = i.closestPointRange, L(this, "afterProcessData")
                        }
                        cropData(t, e, i, s) {
                            let r = t.length,
                                o, n, a = 0,
                                l = r;
                            for (o = 0; o < r; o++)
                                if (t[o] >= i) {
                                    a = Math.max(0, o - 1);
                                    break
                                }
                            for (n = o; n < r; n++)
                                if (t[n] > s) {
                                    l = n + 1;
                                    break
                                }
                            return {
                                xData: t.slice(a, l),
                                yData: e.slice(a, l),
                                start: a,
                                end: l
                            }
                        }
                        generatePoints() {
                            let t = this.options,
                                e = this.processedData || t.data,
                                i = this.processedXData,
                                s = this.processedYData,
                                r = this.pointClass,
                                o = i.length,
                                n = this.cropStart || 0,
                                a = this.hasGroupedData,
                                l = t.keys,
                                h = [],
                                d = t.dataGrouping && t.dataGrouping.groupAll ? n : 0,
                                c, p, u, g, f = this.data;
                            if (!f && !a) {
                                let t = [];
                                t.length = e.length, f = this.data = t
                            }
                            for (l && a && (this.options.keys = !1), g = 0; g < o; g++) p = n + g, a ? ((u = new r(this, [i[g]].concat(G(s[g])))).dataGroup = this.groupMap[d + g], u.dataGroup.options && (u.options = u.dataGroup.options, T(u, u.dataGroup.options), delete u.dataLabels)) : (u = f[p]) || void 0 === e[p] || (f[p] = u = new r(this, e[p], i[g])), u && (u.index = a ? d + g : p, h[g] = u);
                            if (this.options.keys = l, f && (o !== (c = f.length) || a))
                                for (g = 0; g < c; g++) g !== n || a || (g += o), f[g] && (f[g].destroyElements(), f[g].plotX = void 0);
                            this.data = f, this.points = h, L(this, "afterGeneratePoints")
                        }
                        getXExtremes(t) {
                            return {
                                min: y(t),
                                max: x(t)
                            }
                        }
                        getExtremes(t, e) {
                            let i = this.xAxis,
                                s = this.yAxis,
                                r = [],
                                o = this.requireSorting && !this.is("column") ? 1 : 0,
                                n = !!s && s.positiveValuesOnly,
                                a = e || this.getExtremesFromAll || this.options.getExtremesFromAll,
                                {
                                    processedXData: l,
                                    processedYData: h
                                } = this,
                                d, c, p, u, g, f, m, b = 0,
                                v = 0,
                                k = 0;
                            if (this.cropped && a) {
                                let t = this.getProcessedData(!0);
                                l = t.xData, h = t.yData
                            }
                            let S = (t = t || this.stackedYData || h || []).length,
                                C = l || this.xData;
                            for (i && (b = (d = i.getExtremes()).min, v = d.max), f = 0; f < S; f++)
                                if (u = C[f], c = (I(g = t[f]) || j(g)) && ((I(g) ? g > 0 : g.length) || !n), p = e || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i || (C[f + o] || u) >= b && (C[f - o] || u) <= v, c && p) {
                                    if (m = g.length)
                                        for (; m--;) I(g[m]) && (r[k++] = g[m]);
                                    else r[k++] = g
                                }
                            let M = {
                                activeYData: r,
                                dataMin: y(r),
                                dataMax: x(r)
                            };
                            return L(this, "afterGetExtremes", {
                                dataExtremes: M
                            }), M
                        }
                        applyExtremes() {
                            let t = this.getExtremes();
                            return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
                        }
                        getFirstValidPoint(t) {
                            let e = t.length,
                                i = 0,
                                s = null;
                            for (; null === s && i < e;) s = t[i], i++;
                            return s
                        }
                        translate() {
                            this.processedXData || this.processData(), this.generatePoints();
                            let t = this.options,
                                e = t.stacking,
                                i = this.xAxis,
                                s = i.categories,
                                r = this.enabledDataSorting,
                                o = this.yAxis,
                                n = this.points,
                                a = n.length,
                                l = this.pointPlacementToXValue(),
                                h = !!l,
                                d = t.threshold,
                                c = t.startFromThreshold ? d : 0,
                                p, u, g, f, m = Number.MAX_VALUE;

                            function x(t) {
                                return b(t, -1e5, 1e5)
                            }
                            for (p = 0; p < a; p++) {
                                let t;
                                let a = n[p],
                                    y = a.x,
                                    b, k, C = a.y,
                                    M = a.low,
                                    w = e && o.stacking ? .stacks[(this.negStacks && C < (c ? 0 : d) ? "-" : "") + this.stackKey];
                                u = i.translate(y, !1, !1, !1, !0, l), a.plotX = I(u) ? v(x(u)) : void 0, e && this.visible && w && w[y] && (f = this.getStackIndicator(f, y, this.index), !a.isNull && f.key && (k = (b = w[y]).points[f.key]), b && j(k) && (M = k[0], C = k[1], M === c && f.key === w[y].base && (M = N(I(d) ? d : o.min)), o.positiveValuesOnly && S(M) && M <= 0 && (M = void 0), a.total = a.stackTotal = N(b.total), a.percentage = S(a.y) && b.total ? a.y / b.total * 100 : void 0, a.stackY = C, this.irregularWidths || b.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), a.yBottom = S(M) ? x(o.translate(M, !1, !0, !1, !0)) : void 0, this.dataModify && (C = this.dataModify.modifyValue(C, p)), I(C) && void 0 !== a.plotX && (t = I(t = o.translate(C, !1, !0, !1, !0)) ? x(t) : void 0), a.plotY = t, a.isInside = this.isPointInside(a), a.clientX = h ? v(i.translate(y, !1, !1, !1, !0, l)) : u, a.negative = (a.y || 0) < (d || 0), a.category = N(s && s[a.x], a.x), a.isNull || !1 === a.visible || (void 0 !== g && (m = Math.min(m, Math.abs(u - g))), g = u), a.zone = this.zones.length ? a.getZone() : void 0, !a.graphic && this.group && r && (a.isNew = !0)
                            }
                            this.closestPointRangePx = m, L(this, "afterTranslate")
                        }
                        getValidPoints(t, e, i) {
                            let s = this.chart;
                            return (t || this.points || []).filter(function(t) {
                                let {
                                    plotX: r,
                                    plotY: o
                                } = t;
                                return !!((i || !t.isNull && I(o)) && (!e || s.isInsidePlot(r, o, {
                                    inverted: s.inverted
                                }))) && !1 !== t.visible
                            })
                        }
                        getClipBox() {
                            let {
                                chart: t,
                                xAxis: e,
                                yAxis: i
                            } = this, {
                                x: s,
                                y: r,
                                width: o,
                                height: n
                            } = R(t.clipBox);
                            return e && e.len !== t.plotSizeX && (o = e.len), i && i.len !== t.plotSizeY && (n = i.len), t.inverted && !this.invertible && ([o, n] = [n, o]), {
                                x: s,
                                y: r,
                                width: o,
                                height: n
                            }
                        }
                        getSharedClipKey() {
                            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
                        }
                        setClip() {
                            let {
                                chart: t,
                                group: e,
                                markerGroup: i
                            } = this, s = t.sharedClips, r = t.renderer, o = this.getClipBox(), n = this.getSharedClipKey(), a = s[n];
                            a ? a.animate(o) : s[n] = a = r.clipRect(o), e && e.clip(!1 === this.options.clip ? void 0 : a), i && i.clip()
                        }
                        animate(t) {
                            let {
                                chart: e,
                                group: i,
                                markerGroup: s
                            } = this, r = e.inverted, o = d(this.options.animation), n = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), a = e.sharedClips[n], l = e.sharedClips[n + "m"];
                            if (t && i) {
                                let t = this.getClipBox();
                                if (a) a.attr("height", t.height);
                                else {
                                    t.width = 0, r && (t.x = e.plotHeight), a = e.renderer.clipRect(t), e.sharedClips[n] = a;
                                    let i = {
                                        x: -99,
                                        y: -99,
                                        width: r ? e.plotWidth + 199 : 99,
                                        height: r ? 99 : e.plotHeight + 199
                                    };
                                    l = e.renderer.clipRect(i), e.sharedClips[n + "m"] = l
                                }
                                i.clip(a), s ? .clip(l)
                            } else if (a && !a.hasClass("highcharts-animating")) {
                                let t = this.getClipBox(),
                                    i = o.step;
                                (s ? .element.childNodes.length || e.series.length > 1) && (o.step = function(t, e) {
                                    i && i.apply(e, arguments), "width" === e.prop && l ? .element && l.attr(r ? "height" : "width", t + 99)
                                }), a.addClass("highcharts-animating").animate(t, o)
                            }
                        }
                        afterAnimate() {
                            this.setClip(), z(this.chart.sharedClips, (t, e, i) => {
                                t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e])
                            }), this.finishedAnimating = !0, L(this, "afterAnimate")
                        }
                        drawPoints(t = this.points) {
                            let e, i, s, r, o, n, a;
                            let l = this.chart,
                                h = l.styledMode,
                                {
                                    colorAxis: d,
                                    options: c
                                } = this,
                                p = c.marker,
                                u = this[this.specialGroup || "markerGroup"],
                                g = this.xAxis,
                                f = N(p.enabled, !g || !!g.isRadial || null, this.closestPointRangePx >= p.enabledThreshold * p.radius);
                            if (!1 !== p.enabled || this._hasPointMarkers)
                                for (e = 0; e < t.length; e++)
                                    if (r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, n = !!i.marker, (f && void 0 === o.enabled || o.enabled) && !i.isNull && !1 !== i.visible) {
                                        let t = N(o.symbol, this.symbol, "rect");
                                        a = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = g.reversed ? -(a.width || 0) : g.width);
                                        let e = !1 !== i.isInside;
                                        if (!s && e && ((a.width || 0) > 0 || i.hasImage) && (i.graphic = s = l.renderer.symbol(t, a.x, a.y, a.width, a.height, n ? o : p).add(u), this.enabledDataSorting && l.hasRendered && (s.attr({
                                                x: i.startXPos
                                            }), r = "animate")), s && "animate" === r && s[e ? "show" : "hide"](e).animate(a), s) {
                                            let t = this.pointAttribs(i, h || !i.selected ? void 0 : "select");
                                            h ? d && s.css({
                                                fill: t.fill
                                            }) : s[r](t)
                                        }
                                        s && s.addClass(i.getClassName(), !0)
                                    } else s && (i.graphic = s.destroy())
                        }
                        markerAttribs(t, e) {
                            let i = this.options,
                                s = i.marker,
                                r = t.marker || {},
                                o = r.symbol || s.symbol,
                                n = {},
                                a, l, h = N(r.radius, s && s.radius);
                            e && (a = s.states[e], h = N((l = r.states && r.states[e]) && l.radius, a && a.radius, h && h + (a && a.radiusPlus || 0))), t.hasImage = o && 0 === o.indexOf("url"), t.hasImage && (h = 0);
                            let d = t.pos();
                            return I(h) && d && (i.crisp && (d[0] = k(d[0], t.hasImage ? 0 : "rect" === o ? s ? .lineWidth || 0 : 1)), n.x = d[0] - h, n.y = d[1] - h), h && (n.width = n.height = 2 * h), n
                        }
                        pointAttribs(t, e) {
                            let i = this.options.marker,
                                s = t && t.options,
                                r = s && s.marker || {},
                                o = s && s.color,
                                n = t && t.color,
                                a = t && t.zone && t.zone.color,
                                l, h, d = this.color,
                                c, p, u = N(r.lineWidth, i.lineWidth),
                                g = 1;
                            return d = o || a || n || d, c = r.fillColor || i.fillColor || d, p = r.lineColor || i.lineColor || d, e = e || "normal", l = i.states[e] || {}, u = N((h = r.states && r.states[e] || {}).lineWidth, l.lineWidth, u + N(h.lineWidthPlus, l.lineWidthPlus, 0)), c = h.fillColor || l.fillColor || c, {
                                stroke: p = h.lineColor || l.lineColor || p,
                                "stroke-width": u,
                                fill: c,
                                opacity: g = N(h.opacity, l.opacity, g)
                            }
                        }
                        destroy(t) {
                            let e, i, s;
                            let r = this,
                                o = r.chart,
                                n = /AppleWebKit\/533/.test(f.navigator.userAgent),
                                a = r.data || [];
                            for (L(r, "destroy", {
                                    keepEventsForUpdate: t
                                }), this.removeEvents(t), (r.axisTypes || []).forEach(function(t) {
                                    (s = r[t]) && s.series && (w(s.series, r), s.isDirty = s.forceRedraw = !0)
                                }), r.legendItem && r.chart.legend.destroyItem(r), e = a.length; e--;)(i = a[e]) && i.destroy && i.destroy();
                            for (let t of r.zones) C(t, void 0, !0);
                            h.clearTimeout(r.animationTimeout), z(r, function(t, e) {
                                t instanceof l && !t.survive && t[n && "group" === e ? "hide" : "destroy"]()
                            }), o.hoverSeries === r && (o.hoverSeries = void 0), w(o.series, r), o.orderItems("series"), z(r, function(e, i) {
                                t && "hcEvents" === i || delete r[i]
                            })
                        }
                        applyZones() {
                            let {
                                area: t,
                                chart: e,
                                graph: i,
                                zones: s,
                                points: r,
                                xAxis: o,
                                yAxis: n,
                                zoneAxis: a
                            } = this, {
                                inverted: l,
                                renderer: h
                            } = e, d = this[`${a}Axis`], {
                                isXAxis: c,
                                len: p = 0
                            } = d || {}, u = (i ? .strokeWidth() || 0) / 2 + 1, g = (t, e = 0, i = 0) => {
                                l && (i = p - i);
                                let {
                                    translated: s = 0,
                                    lineClip: r
                                } = t, o = i - s;
                                r ? .push(["L", e, Math.abs(o) < u ? i - u * (o <= 0 ? -1 : 1) : s])
                            };
                            if (s.length && (i || t) && d && I(d.min)) {
                                let e = d.getExtremes().max,
                                    u = t => {
                                        t.forEach((e, i) => {
                                            ("M" === e[0] || "L" === e[0]) && (t[i] = [e[0], c ? p - e[1] : e[1], c ? e[2] : p - e[2]])
                                        })
                                    };
                                if (s.forEach(t => {
                                        t.lineClip = [], t.translated = b(d.toPixels(N(t.value, e), !0) || 0, 0, p)
                                    }), i && !this.showLine && i.hide(), t && t.hide(), "y" === a && r.length < o.len)
                                    for (let t of r) {
                                        let {
                                            plotX: e,
                                            plotY: i,
                                            zone: r
                                        } = t, o = r && s[s.indexOf(r) - 1];
                                        r && g(r, e, i), o && g(o, e, i)
                                    }
                                let f = [],
                                    m = d.toPixels(d.getExtremes().min, !0);
                                s.forEach(e => {
                                    let s = e.lineClip || [],
                                        r = Math.round(e.translated || 0);
                                    o.reversed && s.reverse();
                                    let {
                                        clip: a,
                                        simpleClip: d
                                    } = e, p = 0, g = 0, x = o.len, y = n.len;
                                    c ? (p = r, x = m) : (g = r, y = m);
                                    let b = [
                                            ["M", p, g],
                                            ["L", x, g],
                                            ["L", x, y],
                                            ["L", p, y],
                                            ["Z"]
                                        ],
                                        v = [b[0], ...s, b[1], b[2], ...f, b[3], b[4]];
                                    f = s.reverse(), m = r, l && (u(v), t && u(b)), a ? (a.animate({
                                        d: v
                                    }), d ? .animate({
                                        d: b
                                    })) : (a = e.clip = h.path(v), t && (d = e.simpleClip = h.path(b))), i && e.graph ? .clip(a), t && e.area ? .clip(d)
                                })
                            } else this.visible && (i && i.show(), t && t.show())
                        }
                        plotGroup(t, e, i, s, r) {
                            let o = this[t],
                                n = !o,
                                a = {
                                    visibility: i,
                                    zIndex: s || .1
                                };
                            return S(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (a.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (S(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(a)[n ? "attr" : "animate"](this.getPlotBox(e)), o
                        }
                        getPlotBox(t) {
                            let e = this.xAxis,
                                i = this.yAxis,
                                s = this.chart,
                                r = s.inverted && !s.polar && e && this.invertible && "series" === t;
                            return s.inverted && (e = i, i = this.xAxis), {
                                translateX: e ? e.left : s.plotLeft,
                                translateY: i ? i.top : s.plotTop,
                                rotation: r ? 90 : 0,
                                rotationOriginX: r ? (e.len - i.len) / 2 : 0,
                                rotationOriginY: r ? (e.len + i.len) / 2 : 0,
                                scaleX: r ? -1 : 1,
                                scaleY: 1
                            }
                        }
                        removeEvents(t) {
                            let {
                                eventsToUnbind: e
                            } = this;
                            t || W(this), e.length && (e.forEach(t => {
                                t()
                            }), e.length = 0)
                        }
                        render() {
                            let t = this,
                                {
                                    chart: e,
                                    options: i,
                                    hasRendered: s
                                } = t,
                                r = d(i.animation),
                                o = t.visible ? "inherit" : "hidden",
                                n = i.zIndex,
                                a = e.seriesGroup,
                                l = t.finishedAnimating ? 0 : r.duration;
                            L(this, "render"), t.plotGroup("group", "series", o, n, a), t.markerGroup = t.plotGroup("markerGroup", "markers", o, n, a), !1 !== i.clip && t.setClip(), l && t.animate ? .(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels ? .(), t.redrawPoints ? .(), i.enableMouseTracking && t.drawTracker ? .(), l && t.animate ? .(), s || (l && r.defer && (l += r.defer), t.animationTimeout = H(() => {
                                t.afterAnimate()
                            }, l || 0)), t.isDirty = !1, t.hasRendered = !0, L(t, "afterRender")
                        }
                        redraw() {
                            let t = this.isDirty || this.isDirtyData;
                            this.translate(), this.render(), t && delete this.kdTree
                        }
                        reserveSpace() {
                            return this.visible || !this.chart.options.chart.ignoreHiddenSeries
                        }
                        searchPoint(t, e) {
                            let {
                                xAxis: i,
                                yAxis: s
                            } = this, r = this.chart.inverted;
                            return this.searchKDTree({
                                clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                                plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos
                            }, e, t)
                        }
                        buildKDTree(t) {
                            this.buildingKdTree = !0;
                            let e = this,
                                i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
                            delete e.kdTree, H(function() {
                                e.kdTree = function t(i, s, r) {
                                    let o, n;
                                    let a = i ? .length;
                                    if (a) return o = e.kdAxisArray[s % r], i.sort((t, e) => (t[o] || 0) - (e[o] || 0)), {
                                        point: i[n = Math.floor(a / 2)],
                                        left: t(i.slice(0, n), s + 1, r),
                                        right: t(i.slice(n + 1), s + 1, r)
                                    }
                                }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1
                            }, e.options.kdNow || t ? .type === "touchstart" ? 0 : 1)
                        }
                        searchKDTree(t, e, i) {
                            let s = this,
                                [r, o] = this.kdAxisArray,
                                n = e ? "distX" : "dist",
                                a = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
                                l = !!s.isBubble;
                            if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, a, h) {
                                let d, c, p, u, g, f, m, x = i.point,
                                    y = s.kdAxisArray[a % h],
                                    b, v, k = x;
                                d = e[r], c = x[r], p = S(d) && S(c) ? d - c : null, u = e[o], g = x[o], f = S(u) && S(g) ? u - g : 0, m = l && x.marker ? .radius || 0, x.dist = Math.sqrt((p && p * p || 0) + f * f) - m, x.distX = S(p) ? Math.abs(p) - m : Number.MAX_VALUE;
                                let C = (e[y] || 0) - (x[y] || 0) + (l && x.marker ? .radius || 0),
                                    M = C < 0 ? "left" : "right",
                                    w = C < 0 ? "right" : "left";
                                return i[M] && (k = (b = t(e, i[M], a + 1, h))[n] < k[n] ? b : x), i[w] && Math.sqrt(C * C) < k[n] && (k = (v = t(e, i[w], a + 1, h))[n] < k[n] ? v : k), k
                            }(t, this.kdTree, a, a)
                        }
                        pointPlacementToXValue() {
                            let {
                                options: t,
                                xAxis: e
                            } = this, i = t.pointPlacement;
                            return "between" === i && (i = e.reversed ? -.5 : .5), I(i) ? i * (t.pointRange || e.pointRange) : 0
                        }
                        isPointInside(t) {
                            let {
                                chart: e,
                                xAxis: i,
                                yAxis: s
                            } = this, {
                                plotX: r = -1,
                                plotY: o = -1
                            } = t;
                            return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth)
                        }
                        drawTracker() {
                            let t = this,
                                e = t.options,
                                i = e.trackByArea,
                                s = [].concat((i ? t.areaPath : t.graphPath) || []),
                                r = t.chart,
                                o = r.pointer,
                                n = r.renderer,
                                a = r.options.tooltip ? .snap || 0,
                                l = () => {
                                    e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver()
                                },
                                h = "rgba(192,192,192," + (g ? 1e-4 : .002) + ")",
                                d = t.tracker;
                            d ? d.attr({
                                d: s
                            }) : t.graph && (t.tracker = d = n.path(s).attr({
                                visibility: t.visible ? "inherit" : "hidden",
                                zIndex: 2
                            }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                stroke: h,
                                fill: i ? h : "none",
                                "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
                            }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(t => {
                                t && (t.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", t => {
                                    o ? .onTrackerMouseOut(t)
                                }), e.cursor && !r.styledMode && t.css({
                                    cursor: e.cursor
                                }), t.on("touchstart", l))
                            })), L(this, "afterDrawTracker")
                        }
                        addPoint(t, e, i, s, r) {
                            let o, n;
                            let a = this.options,
                                l = this.data,
                                h = this.chart,
                                d = this.xAxis,
                                c = d && d.hasNames && d.names,
                                p = a.data,
                                u = this.xData;
                            e = N(e, !0);
                            let g = {
                                series: this
                            };
                            this.pointClass.prototype.applyOptions.apply(g, [t]);
                            let f = g.x;
                            if (n = u.length, this.requireSorting && f < u[n - 1])
                                for (o = !0; n && u[n - 1] > f;) n--;
                            this.updateParallelArrays(g, "splice", [n, 0, 0]), this.updateParallelArrays(g, n), c && g.name && (c[f] = g.name), p.splice(n, 0, t), (o || this.processedData) && (this.data.splice(n, 0, null), this.processData()), "point" === a.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(g, "shift"), p.shift())), !1 !== r && L(this, "addPoint", {
                                point: g
                            }), this.isDirty = !0, this.isDirtyData = !0, e && h.redraw(s)
                        }
                        removePoint(t, e, i) {
                            let s = this,
                                r = s.data,
                                o = r[t],
                                n = s.points,
                                a = s.chart,
                                l = function() {
                                    n && n.length === r.length && n.splice(t, 1), r.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(o || {
                                        series: s
                                    }, "splice", [t, 1]), o && o.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && a.redraw()
                                };
                            c(i, a), e = N(e, !0), o ? o.firePointEvent("remove", null, l) : l()
                        }
                        remove(t, e, i, s) {
                            let r = this,
                                o = r.chart;

                            function n() {
                                r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), N(t, !0) && o.redraw(e)
                            }!1 !== i ? L(r, "remove", null, n) : n()
                        }
                        update(t, e) {
                            L(this, "update", {
                                options: t = M(t, this.userOptions)
                            });
                            let i = this,
                                s = i.chart,
                                r = i.userOptions,
                                o = i.initialType || i.type,
                                n = s.options.plotOptions,
                                a = m[o].prototype,
                                l = i.finishedAnimating && {
                                    animation: !1
                                },
                                h = {},
                                d, c, p = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"],
                                u = t.type || r.type || s.options.chart.type,
                                g = !(this.hasDerivedData || u && u !== this.type || void 0 !== t.pointStart || void 0 !== t.pointInterval || void 0 !== t.relativeXValue || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(t => i.hasOptionChanged(t)));
                            u = u || o, g && (p.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), !1 !== t.visible && p.push("area", "graph"), i.parallelArrays.forEach(function(t) {
                                p.push(t + "Data")
                            }), t.data && (t.dataSorting && T(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))), t = R(r, {
                                index: void 0 === r.index ? i.index : r.index,
                                pointStart: n ? .series ? .pointStart ? ? r.pointStart ? ? i.xData ? .[0]
                            }, !g && {
                                data: i.options.data
                            }, t, l), g && t.data && (t.data = i.options.data), (p = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p)).forEach(function(t) {
                                p[t] = i[t], delete i[t]
                            });
                            let f = !1;
                            if (m[u]) {
                                if (f = u !== i.type, i.remove(!1, !1, !1, !0), f) {
                                    if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, m[u].prototype);
                                    else {
                                        let t = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                                        for (c in a) i[c] = void 0;
                                        T(i, m[u].prototype), t ? i.hcEvents = t : delete i.hcEvents
                                    }
                                }
                            } else A(17, !0, s, {
                                missingModuleFor: u
                            });
                            if (p.forEach(function(t) {
                                    i[t] = p[t]
                                }), i.init(s, t), g && this.points)
                                for (let t of (!1 === (d = i.options).visible ? (h.graphic = 1, h.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (h.graphic = 1), i.hasDataLabels ? .() || (h.dataLabel = 1)), this.points)) t && t.series && (t.resolveColor(), Object.keys(h).length && t.destroyElements(h), !1 === d.showInLegend && t.legendItem && s.legend.destroyItem(t));
                            i.initialType = o, s.linkSeries(), s.setSortedData(), f && i.linkedSeries.length && (i.isDirtyData = !0), L(this, "afterUpdate"), N(e, !0) && s.redraw(!!g && void 0)
                        }
                        setName(t) {
                            this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                        }
                        hasOptionChanged(t) {
                            let e = this.chart,
                                i = this.options[t],
                                s = e.options.plotOptions,
                                r = this.userOptions[t],
                                o = N(s ? .[this.type] ? .[t], s ? .series ? .[t]);
                            return r && !S(o) ? i !== r : i !== N(o, i)
                        }
                        onMouseOver() {
                            let t = this.chart,
                                e = t.hoverSeries,
                                i = t.pointer;
                            i ? .setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && L(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                        }
                        onMouseOut() {
                            let t = this.options,
                                e = this.chart,
                                i = e.tooltip,
                                s = e.hoverPoint;
                            e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && L(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(t) {
                                t.setState("", !0)
                            })
                        }
                        setState(t, e) {
                            let i = this,
                                s = i.options,
                                r = i.graph,
                                o = s.inactiveOtherPoints,
                                n = s.states,
                                a = N(n[t || "normal"] && n[t || "normal"].animation, i.chart.options.chart.animation),
                                l = s.lineWidth,
                                h = s.opacity;
                            if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(e) {
                                    e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                                }), i.state = t, !i.chart.styledMode)) {
                                if (n[t] && !1 === n[t].enabled) return;
                                if (t && (l = n[t].lineWidth || l + (n[t].lineWidthPlus || 0), h = N(n[t].opacity, h)), r && !r.dashstyle && I(l))
                                    for (let t of [r, ...this.zones.map(t => t.graph)]) t ? .animate({
                                        "stroke-width": l
                                    }, a);
                                o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(t) {
                                    t && t.animate({
                                        opacity: h
                                    }, a)
                                })
                            }
                            e && o && i.points && i.setAllPointsToState(t || void 0)
                        }
                        setAllPointsToState(t) {
                            this.points.forEach(function(e) {
                                e.setState && e.setState(t)
                            })
                        }
                        setVisible(t, e) {
                            let i = this,
                                s = i.chart,
                                r = s.options.chart.ignoreHiddenSeries,
                                o = i.visible;
                            i.visible = t = i.options.visible = i.userOptions.visible = void 0 === t ? !o : t;
                            let n = t ? "show" : "hide";
                            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(t => {
                                i[t] ? .[n]()
                            }), (s.hoverSeries === i || s.hoverPoint ? .series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach(t => {
                                t.options.stacking && t.visible && (t.isDirty = !0)
                            }), i.linkedSeries.forEach(e => {
                                e.setVisible(t, !1)
                            }), r && (s.isDirtyBox = !0), L(i, n), !1 !== e && s.redraw()
                        }
                        show() {
                            this.setVisible(!0)
                        }
                        hide() {
                            this.setVisible(!1)
                        }
                        select(t) {
                            this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), L(this, t ? "select" : "unselect")
                        }
                        shouldShowTooltip(t, e, i = {}) {
                            return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
                        }
                        drawLegendSymbol(t, e) {
                            r[this.options.legendSymbol || "rectangle"] ? .call(this, t, e)
                        }
                    }
                    return X.defaultOptions = n, X.types = a.seriesTypes, X.registerType = a.registerSeriesType, T(X.prototype, {
                        axisTypes: ["xAxis", "yAxis"],
                        coll: "series",
                        colorCounter: 0,
                        directTouch: !1,
                        invertible: !0,
                        isCartesian: !0,
                        kdAxisArray: ["clientX", "plotY"],
                        parallelArrays: ["x", "y"],
                        pointClass: o,
                        requireSorting: !0,
                        sorted: !0
                    }), a.series = X, X
                }), i(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Axis/Tick.js"]], function(t, e, i, s, r, o, n, a, l, h, d, c, p, u) {
                    let {
                        animate: g,
                        animObject: f,
                        setAnimation: m
                    } = t, {
                        defaultOptions: x,
                        defaultTime: y
                    } = i, {
                        numberFormat: b
                    } = s, {
                        registerEventOptions: v
                    } = r, {
                        charts: k,
                        doc: S,
                        marginNames: C,
                        svg: M,
                        win: w
                    } = o, {
                        seriesTypes: A
                    } = l, {
                        addEvent: T,
                        attr: P,
                        createElement: L,
                        css: O,
                        defined: E,
                        diffObjects: D,
                        discardElement: j,
                        erase: I,
                        error: B,
                        extend: R,
                        find: z,
                        fireEvent: N,
                        getStyle: W,
                        isArray: G,
                        isNumber: H,
                        isObject: X,
                        isString: F,
                        merge: Y,
                        objectEach: U,
                        pick: V,
                        pInt: $,
                        relativeLength: _,
                        removeEvent: q,
                        splat: Z,
                        syncTimeout: K,
                        uniqueKey: J
                    } = c;
                    class Q {
                        static chart(t, e, i) {
                            return new Q(t, e, i)
                        }
                        constructor(t, e, i) {
                            this.sharedClips = {};
                            let s = [...arguments];
                            (F(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1])
                        }
                        setZoomOptions() {
                            let t = this.options.chart,
                                e = t.zooming;
                            this.zooming = { ...e,
                                type: V(t.zoomType, e.type),
                                key: V(t.zoomKey, e.key),
                                pinchType: V(t.pinchType, e.pinchType),
                                singleTouch: V(t.zoomBySingleTouch, e.singleTouch, !1),
                                resetButton: Y(e.resetButton, t.resetZoomButton)
                            }
                        }
                        init(t, e) {
                            N(this, "init", {
                                args: arguments
                            }, function() {
                                let i = Y(x, t),
                                    s = i.chart;
                                this.userOptions = R({}, t), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.time = t.time && Object.keys(t.time).length ? new d(t.time) : o.time, this.numberFormatter = s.numberFormatter || b, this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = k.length, k.push(this), o.chartCount++, v(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), N(this, "afterInit"), this.firstRender()
                            })
                        }
                        initSeries(t) {
                            let e = this.options.chart,
                                i = t.type || e.type,
                                s = A[i];
                            s || B(17, !0, this, {
                                missingModuleFor: i
                            });
                            let r = new s;
                            return "function" == typeof r.init && r.init(this, t), r
                        }
                        setSortedData() {
                            this.getSeriesOrderByLinks().forEach(function(t) {
                                t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
                            })
                        }
                        getSeriesOrderByLinks() {
                            return this.series.concat().sort(function(t, e) {
                                return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
                            })
                        }
                        orderItems(t, e = 0) {
                            let i = this[t],
                                s = this.options[t] = Z(this.options[t]).slice(),
                                r = this.userOptions[t] = this.userOptions[t] ? Z(this.userOptions[t]).slice() : [];
                            if (this.hasRendered && (s.splice(e), r.splice(e)), i)
                                for (let t = e, o = i.length; t < o; ++t) {
                                    let e = i[t];
                                    e && (e.index = t, e instanceof a && (e.name = e.getName()), e.options.isInternal || (s[t] = e.options, r[t] = e.userOptions))
                                }
                        }
                        isInsidePlot(t, e, i = {}) {
                            let {
                                inverted: s,
                                plotBox: r,
                                plotLeft: o,
                                plotTop: n,
                                scrollablePlotBox: a
                            } = this, {
                                scrollLeft: l = 0,
                                scrollTop: h = 0
                            } = i.visiblePlotOnly && this.scrollablePlotArea ? .scrollingContainer || {}, d = i.series, c = i.visiblePlotOnly && a || r, p = i.inverted ? e : t, u = i.inverted ? t : e, g = {
                                x: p,
                                y: u,
                                isInsidePlot: !0,
                                options: i
                            };
                            if (!i.ignoreX) {
                                let t = d && (s && !this.polar ? d.yAxis : d.xAxis) || {
                                        pos: o,
                                        len: 1 / 0
                                    },
                                    e = i.paneCoordinates ? t.pos + p : o + p;
                                e >= Math.max(l + o, t.pos) && e <= Math.min(l + o + c.width, t.pos + t.len) || (g.isInsidePlot = !1)
                            }
                            if (!i.ignoreY && g.isInsidePlot) {
                                let t = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || {
                                        pos: n,
                                        len: 1 / 0
                                    },
                                    e = i.paneCoordinates ? t.pos + u : n + u;
                                e >= Math.max(h + n, t.pos) && e <= Math.min(h + n + c.height, t.pos + t.len) || (g.isInsidePlot = !1)
                            }
                            return N(this, "afterIsInsidePlot", g), g.isInsidePlot
                        }
                        redraw(t) {
                            N(this, "beforeRedraw");
                            let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                                i = this.series,
                                s = this.pointer,
                                r = this.legend,
                                o = this.userOptions.legend,
                                n = this.renderer,
                                a = n.isHidden(),
                                l = [],
                                h, d, c, p = this.isDirtyBox,
                                u = this.isDirtyLegend,
                                g;
                            for (n.rootFontSize = n.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), m(!!this.hasRendered && t, this), a && this.temporaryDisplay(), this.layOutTitles(!1), c = i.length; c--;)
                                if (((g = i[c]).options.stacking || g.options.centerInCategory) && (d = !0, g.isDirty)) {
                                    h = !0;
                                    break
                                }
                            if (h)
                                for (c = i.length; c--;)(g = i[c]).options.stacking && (g.isDirty = !0);
                            i.forEach(function(t) {
                                t.isDirty && ("point" === t.options.legendType ? ("function" == typeof t.updateTotals && t.updateTotals(), u = !0) : o && (o.labelFormatter || o.labelFormat) && (u = !0)), t.isDirtyData && N(t, "updatedData")
                            }), u && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function(t) {
                                t.updateNames(), t.setScale()
                            }), this.getMargins(), e.forEach(function(t) {
                                t.isDirty && (p = !0)
                            }), e.forEach(function(t) {
                                let e = t.min + "," + t.max;
                                t.extKey !== e && (t.extKey = e, l.push(function() {
                                    N(t, "afterSetExtremes", R(t.eventArgs, t.getExtremes())), delete t.eventArgs
                                })), (p || d) && t.redraw()
                            }), p && this.drawChartBox(), N(this, "predraw"), i.forEach(function(t) {
                                (p || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                            }), s && s.reset(!0), n.draw(), N(this, "redraw"), N(this, "render"), a && this.temporaryDisplay(!0), l.forEach(function(t) {
                                t.call()
                            })
                        }
                        get(t) {
                            let e = this.series;

                            function i(e) {
                                return e.id === t || e.options && e.options.id === t
                            }
                            let s = z(this.axes, i) || z(this.series, i);
                            for (let t = 0; !s && t < e.length; t++) s = z(e[t].points || [], i);
                            return s
                        }
                        getAxes() {
                            let t = this.userOptions;
                            for (let i of (N(this, "getAxes"), ["xAxis", "yAxis"]))
                                for (let s of t[i] = Z(t[i] || {})) new e(this, s, i);
                            N(this, "afterGetAxes")
                        }
                        getSelectedPoints() {
                            return this.series.reduce((t, e) => (e.getPointsCollection().forEach(e => {
                                V(e.selectedStaging, e.selected) && t.push(e)
                            }), t), [])
                        }
                        getSelectedSeries() {
                            return this.series.filter(function(t) {
                                return t.selected
                            })
                        }
                        setTitle(t, e, i) {
                            this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
                        }
                        applyDescription(t, e) {
                            let i = this,
                                s = this.options[t] = Y(this.options[t], e),
                                r = this[t];
                            r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
                                align: s.align,
                                class: "highcharts-" + t,
                                zIndex: s.zIndex || 4
                            }).add()).update = function(e, s) {
                                i.applyDescription(t, e), i.layOutTitles(s)
                            }, this.styledMode || r.css(R("title" === t ? {
                                fontSize: this.options.isStock ? "1em" : "1.2em"
                            } : {}, s.style)), this[t] = r)
                        }
                        layOutTitles(t = !0) {
                            let e = [0, 0, 0],
                                i = this.renderer,
                                s = this.spacingBox;
                            ["title", "subtitle", "caption"].forEach(function(t) {
                                let r = this[t],
                                    o = this.options[t],
                                    n = o.verticalAlign || "top",
                                    a = "title" === t ? "top" === n ? -3 : 0 : "top" === n ? e[0] + 2 : 0;
                                if (r) {
                                    r.css({
                                        width: (o.width || s.width + (o.widthAdjust || 0)) + "px"
                                    });
                                    let t = i.fontMetrics(r).b,
                                        l = Math.round(r.getBBox(o.useHTML).height);
                                    r.align(R({
                                        y: "bottom" === n ? t : a + t,
                                        height: l
                                    }, o), !1, "spacingBox"), o.floating || ("top" === n ? e[0] = Math.ceil(e[0] + l) : "bottom" === n && (e[2] = Math.ceil(e[2] + l)))
                                }
                            }, this), e[0] && "top" === (this.options.title.verticalAlign || "top") && (e[0] += this.options.title.margin), e[2] && "bottom" === this.options.caption.verticalAlign && (e[2] += this.options.caption.margin);
                            let r = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                            this.titleOffset = e, N(this, "afterLayOutTitles"), !this.isDirtyBox && r && (this.isDirtyBox = this.isDirtyLegend = r, this.hasRendered && t && this.isDirtyBox && this.redraw())
                        }
                        getContainerBox() {
                            return {
                                width: W(this.renderTo, "width", !0) || 0,
                                height: W(this.renderTo, "height", !0) || 0
                            }
                        }
                        getChartSize() {
                            let t = this.options.chart,
                                e = t.width,
                                i = t.height,
                                s = this.getContainerBox();
                            this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, _(i, this.chartWidth) || (s.height > 1 ? s.height : 400)), this.containerBox = s
                        }
                        temporaryDisplay(t) {
                            let e = this.renderTo,
                                i;
                            if (t)
                                for (; e && e.style;) e.hcOrigStyle && (O(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (S.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
                            else
                                for (; e && e.style && (S.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, S.body.appendChild(e)), ("none" === W(e, "display", !1) || e.hcOricDetached) && (e.hcOrigStyle = {
                                        display: e.style.display,
                                        height: e.style.height,
                                        overflow: e.style.overflow
                                    }, i = {
                                        display: "block",
                                        overflow: "hidden"
                                    }, e !== this.renderTo && (i.height = 0), O(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== S.body););
                        }
                        setClassName(t) {
                            this.container.className = "highcharts-container " + (t || "")
                        }
                        getContainer() {
                            let t = this.options,
                                e = t.chart,
                                i = "data-highcharts-chart",
                                s = J(),
                                r, o = this.renderTo;
                            o || (this.renderTo = o = e.renderTo), F(o) && (this.renderTo = o = S.getElementById(o)), o || B(13, !0, this);
                            let a = $(P(o, i));
                            H(a) && k[a] && k[a].hasRendered && k[a].destroy(), P(o, i, this.index), o.innerHTML = p.emptyHTML, e.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
                            let l = this.chartHeight,
                                d = this.chartWidth;
                            O(o, {
                                overflow: "hidden"
                            }), this.styledMode || (r = R({
                                position: "relative",
                                overflow: "hidden",
                                width: d + "px",
                                height: l + "px",
                                textAlign: "left",
                                lineHeight: "normal",
                                zIndex: 0,
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                userSelect: "none",
                                "touch-action": "manipulation",
                                outline: "none"
                            }, e.style || {}));
                            let c = L("div", {
                                id: s
                            }, r, o);
                            this.container = c, this.getChartSize(), d === this.chartWidth || (d = this.chartWidth, this.styledMode || O(c, {
                                width: V(e.style ? .width, d + "px")
                            })), this.containerBox = this.getContainerBox(), this._cursor = c.style.cursor;
                            let u = e.renderer || !M ? n.getRendererType(e.renderer) : h;
                            if (this.renderer = new u(c, d, l, void 0, e.forExport, t.exporting && t.exporting.allowHTML, this.styledMode), m(void 0, this), this.setClassName(e.className), this.styledMode)
                                for (let e in t.defs) this.renderer.definition(t.defs[e]);
                            else this.renderer.setStyle(e.style);
                            this.renderer.chartIndex = this.index, N(this, "afterGetContainer")
                        }
                        getMargins(t) {
                            let {
                                spacing: e,
                                margin: i,
                                titleOffset: s
                            } = this;
                            this.resetMargins(), s[0] && !E(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !E(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), N(this, "getMargins"), t || this.getAxisMargins()
                        }
                        getAxisMargins() {
                            let t = this,
                                e = t.axisOffset = [0, 0, 0, 0],
                                i = t.colorAxis,
                                s = t.margin,
                                r = function(t) {
                                    t.forEach(function(t) {
                                        t.visible && t.getOffset()
                                    })
                                };
                            t.hasCartesianSeries ? r(t.axes) : i && i.length && r(i), C.forEach(function(i, r) {
                                E(s[r]) || (t[i] += e[r])
                            }), t.setChartSize()
                        }
                        getOptions() {
                            return D(this.userOptions, x)
                        }
                        reflow(t) {
                            let e = this,
                                i = e.containerBox,
                                s = e.getContainerBox();
                            delete e.pointer ? .chartPosition, !e.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (c.clearTimeout(e.reflowTimeout), e.reflowTimeout = K(function() {
                                e.container && e.setSize(void 0, void 0, !1)
                            }, t ? 100 : 0)), e.containerBox = s)
                        }
                        setReflow() {
                            let t = this,
                                e = e => {
                                    t.options ? .chart.reflow && t.hasLoaded && t.reflow(e)
                                };
                            if ("function" == typeof ResizeObserver) new ResizeObserver(e).observe(t.renderTo);
                            else {
                                let t = T(w, "resize", e);
                                T(this, "destroy", t)
                            }
                        }
                        setSize(t, e, i) {
                            let s = this,
                                r = s.renderer;
                            s.isResizing += 1, m(i, s);
                            let o = r.globalAnimation;
                            s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize();
                            let {
                                chartWidth: n,
                                chartHeight: a,
                                scrollablePixelsX: l = 0,
                                scrollablePixelsY: h = 0
                            } = s;
                            (s.isDirtyBox || n !== s.oldChartWidth || a !== s.oldChartHeight) && (s.styledMode || (o ? g : O)(s.container, {
                                width: `${n+l}px`,
                                height: `${a+h}px`
                            }, o), s.setChartSize(!0), r.setSize(n, a, o), s.axes.forEach(function(t) {
                                t.isDirty = !0, t.setScale()
                            }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, N(s, "resize"), setTimeout(() => {
                                s && N(s, "endResize")
                            }, f(o).duration)), s.isResizing -= 1
                        }
                        setChartSize(t) {
                            let e, i, s, r;
                            let {
                                chartHeight: o,
                                chartWidth: n,
                                inverted: a,
                                spacing: l,
                                renderer: h
                            } = this, d = this.clipOffset, c = Math[a ? "floor" : "round"];
                            this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(n - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(o - i - this.marginBottom)), this.plotSizeX = a ? r : s, this.plotSizeY = a ? s : r, this.spacingBox = h.spacingBox = {
                                x: l[3],
                                y: l[0],
                                width: n - l[3] - l[1],
                                height: o - l[0] - l[2]
                            }, this.plotBox = h.plotBox = {
                                x: e,
                                y: i,
                                width: s,
                                height: r
                            }, d && (this.clipBox = {
                                x: c(d[3]),
                                y: c(d[0]),
                                width: c(this.plotSizeX - d[1] - d[3]),
                                height: c(this.plotSizeY - d[0] - d[2])
                            }), t || (this.axes.forEach(function(t) {
                                t.setAxisSize(), t.setAxisTranslation()
                            }), h.alignElements()), N(this, "afterSetChartSize", {
                                skipAxes: t
                            })
                        }
                        resetMargins() {
                            N(this, "resetMargins");
                            let t = this,
                                e = t.options.chart,
                                i = e.plotBorderWidth || 0,
                                s = i / 2;
                            ["margin", "spacing"].forEach(function(i) {
                                let s = e[i],
                                    r = X(s) ? s : [s, s, s, s];
                                ["Top", "Right", "Bottom", "Left"].forEach(function(s, o) {
                                    t[i][o] = V(e[i + s], r[o])
                                })
                            }), C.forEach(function(e, i) {
                                t[e] = V(t.margin[i], t.spacing[i])
                            }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i
                        }
                        drawChartBox() {
                            let t = this.options.chart,
                                e = this.renderer,
                                i = this.chartWidth,
                                s = this.chartHeight,
                                r = this.styledMode,
                                o = this.plotBGImage,
                                n = t.backgroundColor,
                                a = t.plotBackgroundColor,
                                l = t.plotBackgroundImage,
                                h = this.plotLeft,
                                d = this.plotTop,
                                c = this.plotWidth,
                                p = this.plotHeight,
                                u = this.plotBox,
                                g = this.clipRect,
                                f = this.clipBox,
                                m = this.chartBackground,
                                x = this.plotBackground,
                                y = this.plotBorder,
                                b, v, k, S = "animate";
                            m || (this.chartBackground = m = e.rect().addClass("highcharts-background").add(), S = "attr"), r ? b = v = m.strokeWidth() : (v = (b = t.borderWidth || 0) + (t.shadow ? 8 : 0), k = {
                                fill: n || "none"
                            }, (b || m["stroke-width"]) && (k.stroke = t.borderColor, k["stroke-width"] = b), m.attr(k).shadow(t.shadow)), m[S]({
                                x: v / 2,
                                y: v / 2,
                                width: i - v - b % 2,
                                height: s - v - b % 2,
                                r: t.borderRadius
                            }), S = "animate", x || (S = "attr", this.plotBackground = x = e.rect().addClass("highcharts-plot-background").add()), x[S](u), !r && (x.attr({
                                fill: a || "none"
                            }).shadow(t.plotShadow), l && (o ? (l !== o.attr("href") && o.attr("href", l), o.animate(u)) : this.plotBGImage = e.image(l, h, d, c, p).add())), g ? g.animate({
                                width: f.width,
                                height: f.height
                            }) : this.clipRect = e.clipRect(f), S = "animate", y || (S = "attr", this.plotBorder = y = e.rect().addClass("highcharts-plot-border").attr({
                                zIndex: 1
                            }).add()), r || y.attr({
                                stroke: t.plotBorderColor,
                                "stroke-width": t.plotBorderWidth || 0,
                                fill: "none"
                            }), y[S](y.crisp({
                                x: h,
                                y: d,
                                width: c,
                                height: p
                            }, -y.strokeWidth())), this.isDirtyBox = !1, N(this, "afterDrawChartBox")
                        }
                        propFromSeries() {
                            let t, e, i;
                            let s = this,
                                r = s.options.chart,
                                o = s.options.series;
                            ["inverted", "angular", "polar"].forEach(function(n) {
                                for (e = A[r.type], i = r[n] || e && e.prototype[n], t = o && o.length; !i && t--;)(e = A[o[t].type]) && e.prototype[n] && (i = !0);
                                s[n] = i
                            })
                        }
                        linkSeries(t) {
                            let e = this,
                                i = e.series;
                            i.forEach(function(t) {
                                t.linkedSeries.length = 0
                            }), i.forEach(function(t) {
                                let {
                                    linkedTo: i
                                } = t.options;
                                if (F(i)) {
                                    let s;
                                    (s = ":previous" === i ? e.series[t.index - 1] : e.get(i)) && s.linkedParent !== t && (s.linkedSeries.push(t), t.linkedParent = s, s.enabledDataSorting && t.setDataSortingOptions(), t.visible = V(t.options.visible, s.options.visible, t.visible))
                                }
                            }), N(this, "afterLinkSeries", {
                                isUpdating: t
                            })
                        }
                        renderSeries() {
                            this.series.forEach(function(t) {
                                t.translate(), t.render()
                            })
                        }
                        render() {
                            let t = this.axes,
                                e = this.colorAxis,
                                i = this.renderer,
                                s = this.options.chart.axisLayoutRuns || 2,
                                r = t => {
                                    t.forEach(t => {
                                        t.visible && t.render()
                                    })
                                },
                                o = 0,
                                n = !0,
                                a, l = 0;
                            for (let e of (this.setTitle(), N(this, "beforeMargins"), this.getStacks ? .(), this.getMargins(!0), this.setChartSize(), t)) {
                                let {
                                    options: t
                                } = e, {
                                    labels: i
                                } = t;
                                if (this.hasCartesianSeries && e.horiz && e.visible && i.enabled && e.series.length && "colorAxis" !== e.coll && !this.polar) {
                                    o = t.tickLength, e.createGroups();
                                    let s = new u(e, 0, "", !0),
                                        r = s.createLabel("x", i);
                                    if (s.destroy(), r && V(i.reserveSpace, !H(t.crossing)) && (o = r.getBBox().height + i.distance + Math.max(t.offset || 0, 0)), o) {
                                        r ? .destroy();
                                        break
                                    }
                                }
                            }
                            for (this.plotHeight = Math.max(this.plotHeight - o, 0);
                                (n || a || s > 1) && l < s;) {
                                let e = this.plotWidth,
                                    i = this.plotHeight;
                                for (let e of t) 0 === l ? e.setScale() : (e.horiz && n || !e.horiz && a) && e.setTickInterval(!0);
                                0 === l ? this.getAxisMargins() : this.getMargins(), n = e / this.plotWidth > (l ? 1 : 1.1), a = i / this.plotHeight > (l ? 1 : 1.05), l++
                            }
                            this.drawChartBox(), this.hasCartesianSeries ? r(t) : e && e.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({
                                zIndex: 3
                            }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                        }
                        addCredits(t) {
                            let e = this,
                                i = Y(!0, this.options.credits, t);
                            i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                                i.href && (w.location.href = i.href)
                            }).attr({
                                align: i.position.align,
                                zIndex: 8
                            }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(t) {
                                e.credits = e.credits.destroy(), e.addCredits(t)
                            })
                        }
                        destroy() {
                            let t;
                            let e = this,
                                i = e.axes,
                                s = e.series,
                                r = e.container,
                                n = r && r.parentNode;
                            for (N(e, "destroy"), e.renderer.forExport ? I(k, e) : k[e.index] = void 0, o.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), q(e), t = i.length; t--;) i[t] = i[t].destroy();
                            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--;) s[t] = s[t].destroy();
                            ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(t) {
                                let i = e[t];
                                i && i.destroy && (e[t] = i.destroy())
                            }), r && (r.innerHTML = p.emptyHTML, q(r), n && j(r)), U(e, function(t, i) {
                                delete e[i]
                            })
                        }
                        firstRender() {
                            let t = this,
                                e = t.options;
                            t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes();
                            let i = G(e.series) ? e.series : [];
                            e.series = [], i.forEach(function(e) {
                                t.initSeries(e)
                            }), t.linkSeries(), t.setSortedData(), N(t, "beforeRender"), t.render(), t.pointer ? .getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0)
                        }
                        onload() {
                            this.callbacks.concat([this.callback]).forEach(function(t) {
                                t && void 0 !== this.index && t.apply(this, [this])
                            }, this), N(this, "load"), N(this, "render"), E(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0
                        }
                        warnIfA11yModuleNotLoaded() {
                            let {
                                options: t,
                                title: e
                            } = this;
                            !t || this.accessibility || (this.renderer.boxWrapper.attr({
                                role: "img",
                                "aria-label": (e && e.element.textContent || "").replace(/</g, "&lt;")
                            }), t.accessibility && !1 === t.accessibility.enabled || B('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this))
                        }
                        addSeries(t, e, i) {
                            let s;
                            let r = this;
                            return t && (e = V(e, !0), N(r, "addSeries", {
                                options: t
                            }, function() {
                                s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), N(r, "afterAddSeries", {
                                    series: s
                                }), e && r.redraw(i)
                            })), s
                        }
                        addAxis(t, e, i, s) {
                            return this.createAxis(e ? "xAxis" : "yAxis", {
                                axis: t,
                                redraw: i,
                                animation: s
                            })
                        }
                        addColorAxis(t, e, i) {
                            return this.createAxis("colorAxis", {
                                axis: t,
                                redraw: e,
                                animation: i
                            })
                        }
                        createAxis(t, i) {
                            let s = new e(this, i.axis, t);
                            return V(i.redraw, !0) && this.redraw(i.animation), s
                        }
                        showLoading(t) {
                            let e = this,
                                i = e.options,
                                s = i.loading,
                                r = function() {
                                    o && O(o, {
                                        left: e.plotLeft + "px",
                                        top: e.plotTop + "px",
                                        width: e.plotWidth + "px",
                                        height: e.plotHeight + "px"
                                    })
                                },
                                o = e.loadingDiv,
                                n = e.loadingSpan;
                            o || (e.loadingDiv = o = L("div", {
                                className: "highcharts-loading highcharts-loading-hidden"
                            }, null, e.container)), n || (e.loadingSpan = n = L("span", {
                                className: "highcharts-loading-inner"
                            }, null, o), T(e, "redraw", r)), o.className = "highcharts-loading", p.setElementHTML(n, V(t, i.lang.loading, "")), e.styledMode || (O(o, R(s.style, {
                                zIndex: 10
                            })), O(n, s.labelStyle), e.loadingShown || (O(o, {
                                opacity: 0,
                                display: ""
                            }), g(o, {
                                opacity: s.style.opacity || .5
                            }, {
                                duration: s.showDuration || 0
                            }))), e.loadingShown = !0, r()
                        }
                        hideLoading() {
                            let t = this.options,
                                e = this.loadingDiv;
                            e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(e, {
                                opacity: 0
                            }, {
                                duration: t.loading.hideDuration || 100,
                                complete: function() {
                                    O(e, {
                                        display: "none"
                                    })
                                }
                            })), this.loadingShown = !1
                        }
                        update(t, e, i, s) {
                            let r, o, n;
                            let a = this,
                                l = {
                                    credits: "addCredits",
                                    title: "setTitle",
                                    subtitle: "setSubtitle",
                                    caption: "setCaption"
                                },
                                h = t.isResponsiveOptions,
                                c = [];
                            N(a, "update", {
                                options: t
                            }), h || a.setResponsive(!1, !0), t = D(t, a.options), a.userOptions = Y(a.userOptions, t);
                            let p = t.chart;
                            p && (Y(!0, a.options.chart, p), this.setZoomOptions(), "className" in p && a.setClassName(p.className), ("inverted" in p || "polar" in p || "type" in p) && (a.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), "events" in p && v(this, p), U(p, function(t, e) {
                                -1 !== a.propsRequireUpdateSeries.indexOf("chart." + e) && (o = !0), -1 !== a.propsRequireDirtyBox.indexOf(e) && (a.isDirtyBox = !0), -1 === a.propsRequireReflow.indexOf(e) || (a.isDirtyBox = !0, h || (n = !0))
                            }), !a.styledMode && p.style && a.renderer.setStyle(a.options.chart.style || {})), !a.styledMode && t.colors && (this.options.colors = t.colors), t.time && (this.time === y && (this.time = new d(t.time)), Y(!0, a.options.time, t.time)), U(t, function(e, i) {
                                a[i] && "function" == typeof a[i].update ? a[i].update(e, !1) : "function" == typeof a[l[i]] ? a[l[i]](e) : "colors" !== i && -1 === a.collectionsWithUpdate.indexOf(i) && Y(!0, a.options[i], t[i]), "chart" !== i && -1 !== a.propsRequireUpdateSeries.indexOf(i) && (o = !0)
                            }), this.collectionsWithUpdate.forEach(function(e) {
                                t[e] && (Z(t[e]).forEach(function(t, s) {
                                    let r;
                                    let o = E(t.id);
                                    o && (r = a.get(t.id)), !r && a[e] && (r = a[e][V(t.index, s)]) && (o && E(r.options.id) || r.options.isInternal) && (r = void 0), r && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && a.collectionsWithInit[e] && (a.collectionsWithInit[e][0].apply(a, [t].concat(a.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
                                }), i && a[e].forEach(function(t) {
                                    t.touched || t.options.isInternal ? delete t.touched : c.push(t)
                                }))
                            }), c.forEach(function(t) {
                                t.chart && t.remove && t.remove(!1)
                            }), r && a.axes.forEach(function(t) {
                                t.update({}, !1)
                            }), o && a.getSeriesOrderByLinks().forEach(function(t) {
                                t.chart && t.update({}, !1)
                            }, this);
                            let u = p && p.width,
                                g = p && (F(p.height) ? _(p.height, u || a.chartWidth) : p.height);
                            n || H(u) && u !== a.chartWidth || H(g) && g !== a.chartHeight ? a.setSize(u, g, s) : V(e, !0) && a.redraw(s), N(a, "afterUpdate", {
                                options: t,
                                redraw: e,
                                animation: s
                            })
                        }
                        setSubtitle(t, e) {
                            this.applyDescription("subtitle", t), this.layOutTitles(e)
                        }
                        setCaption(t, e) {
                            this.applyDescription("caption", t), this.layOutTitles(e)
                        }
                        showResetZoom() {
                            let t = this,
                                e = x.lang,
                                i = t.zooming.resetButton,
                                s = i.theme,
                                r = "chart" === i.relativeTo || "spacingBox" === i.relativeTo ? null : "plotBox";

                            function o() {
                                t.zoomOut()
                            }
                            N(this, "beforeShowResetZoom", null, function() {
                                t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({
                                    align: i.position.align,
                                    title: e.resetZoomTitle
                                }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r)
                            }), N(this, "afterShowResetZoom")
                        }
                        zoomOut() {
                            N(this, "selection", {
                                resetSelection: !0
                            }, () => this.transform({
                                reset: !0,
                                trigger: "zoom"
                            }))
                        }
                        pan(t, e) {
                            let i = this,
                                s = "object" == typeof e ? e : {
                                    enabled: e,
                                    type: "x"
                                },
                                r = s.type,
                                o = r && i[({
                                    x: "xAxis",
                                    xy: "axes",
                                    y: "yAxis"
                                })[r]].filter(t => t.options.panningEnabled && !t.options.isInternal),
                                n = i.options.chart;
                            n ? .panning && (n.panning = s), N(this, "pan", {
                                originalEvent: t
                            }, () => {
                                i.transform({
                                    axes: o,
                                    event: t,
                                    to: {
                                        x: t.chartX - (i.mouseDownX || 0),
                                        y: t.chartY - (i.mouseDownY || 0)
                                    },
                                    trigger: "pan"
                                }), O(i.container, {
                                    cursor: "move"
                                })
                            })
                        }
                        transform(t) {
                            let {
                                axes: e = this.axes,
                                event: i,
                                from: s = {},
                                reset: r,
                                selection: o,
                                to: n = {},
                                trigger: a
                            } = t, {
                                inverted: l
                            } = this, h = !1, d;
                            for (let t of (this.hoverPoints ? .forEach(t => t.setState()), e)) {
                                let {
                                    horiz: e,
                                    len: c,
                                    minPointOffset: p = 0,
                                    options: u,
                                    reversed: g
                                } = t, f = e ? "width" : "height", m = e ? "x" : "y", x = V(n[f], t.len), y = V(s[f], t.len), b = 10 > Math.abs(x) ? 1 : x / y, v = (s[m] || 0) + y / 2 - t.pos, k = v - ((n[m] ? ? t.pos) + x / 2 - t.pos) / b, S = g && !l || !g && l ? -1 : 1;
                                if (!r && (v < 0 || v > t.len)) continue;
                                let C = t.toValue(k, !0) + (o ? 0 : p * S),
                                    M = t.toValue(k + c / b, !0) - (o ? 0 : p * S || 0),
                                    w = t.allExtremes;
                                if (C > M && ([C, M] = [M, C]), 1 === b && !r && "yAxis" === t.coll && !w) {
                                    for (let e of t.series) {
                                        let t = e.getExtremes(e.getProcessedData(!0).yData, !0);
                                        w ? ? (w = {
                                            dataMin: Number.MAX_VALUE,
                                            dataMax: -Number.MAX_VALUE
                                        }), H(t.dataMin) && H(t.dataMax) && (w.dataMin = Math.min(t.dataMin, w.dataMin), w.dataMax = Math.max(t.dataMax, w.dataMax))
                                    }
                                    t.allExtremes = w
                                }
                                let {
                                    dataMin: A,
                                    dataMax: T,
                                    min: P,
                                    max: L
                                } = R(t.getExtremes(), w || {}), O = A ? ? u.min, D = T ? ? u.max, j = M - C, I = t.categories ? 0 : Math.min(j, D - O), B = O - I * (E(u.min) ? 0 : u.minPadding), z = D + I * (E(u.max) ? 0 : u.maxPadding), N = t.allowZoomOutside || 1 === b || "zoom" !== a && b > 1, W = Math.min(u.min ? ? B, B, N ? P : B), G = Math.max(u.max ? ? z, z, N ? L : z);
                                (!t.isOrdinal || 1 !== b || r) && (C < W && (C = W, b >= 1 && (M = C + j)), M > G && (M = G, b >= 1 && (C = M - j)), (r || t.series.length && (C !== P || M !== L) && C >= W && M <= G) && (o ? o[t.coll].push({
                                    axis: t,
                                    min: C,
                                    max: M
                                }) : (t.isPanning = "zoom" !== a, t.setExtremes(r ? void 0 : C, r ? void 0 : M, !1, !1, {
                                    move: k,
                                    trigger: a,
                                    scale: b
                                }), !r && (C > W || M < G) && "mousewheel" !== a && (d = !0)), h = !0), i && (this[e ? "mouseDownX" : "mouseDownY"] = i[e ? "chartX" : "chartY"]))
                            }
                            return h && (o ? N(this, "selection", o, () => {
                                delete t.selection, t.trigger = "zoom", this.transform(t)
                            }) : (d && !this.resetZoomButton ? this.showResetZoom() : !d && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw("zoom" === a && (this.options.chart.animation ? ? this.pointCount < 100)))), h
                        }
                    }
                    return R(Q.prototype, {
                        callbacks: [],
                        collectionsWithInit: {
                            xAxis: [Q.prototype.addAxis, [!0]],
                            yAxis: [Q.prototype.addAxis, [!1]],
                            series: [Q.prototype.addSeries]
                        },
                        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                        propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
                        propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
                        propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
                    }), Q
                }), i(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
                    let {
                        stop: r
                    } = t, {
                        composed: o
                    } = e, {
                        addEvent: n,
                        createElement: a,
                        css: l,
                        defined: h,
                        merge: d,
                        pushUnique: c
                    } = s;

                    function p() {
                        let t = this.scrollablePlotArea;
                        (this.scrollablePixelsX || this.scrollablePixelsY) && !t && (this.scrollablePlotArea = t = new g(this)), t ? .applyFixed()
                    }

                    function u() {
                        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0)
                    }
                    class g {
                        static compose(t, e, i) {
                            c(o, this.compose) && (n(t, "afterInit", u), n(e, "afterSetChartSize", t => this.afterSetSize(t.target, t)), n(e, "render", p), n(i, "show", u))
                        }
                        static afterSetSize(t, e) {
                            let i, s, r;
                            let {
                                minWidth: o,
                                minHeight: n
                            } = t.options.chart.scrollablePlotArea || {}, {
                                clipBox: a,
                                plotBox: l,
                                inverted: c,
                                renderer: p
                            } = t;
                            if (!p.forExport && (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = d(t.plotBox), l.width = t.plotWidth += i, a[c ? "height" : "width"] += i, r = !0)) : n && (t.scrollablePixelsY = s = Math.max(0, n - t.chartHeight), h(s) && (t.scrollablePlotBox = d(t.plotBox), l.height = t.plotHeight += s, a[c ? "width" : "height"] += s, r = !1)), h(r) && !e.skipAxes))
                                for (let e of t.axes) e.horiz === r && (e.setAxisSize(), e.setAxisTranslation())
                        }
                        constructor(t) {
                            let e;
                            let s = t.options.chart,
                                r = i.getRendererType(),
                                o = s.scrollablePlotArea || {},
                                h = this.moveFixedElements.bind(this),
                                d = {
                                    WebkitOverflowScrolling: "touch",
                                    overflowX: "hidden",
                                    overflowY: "hidden"
                                };
                            t.scrollablePixelsX && (d.overflowX = "auto"), t.scrollablePixelsY && (d.overflowY = "auto"), this.chart = t;
                            let c = this.parentDiv = a("div", {
                                    className: "highcharts-scrolling-parent"
                                }, {
                                    position: "relative"
                                }, t.renderTo),
                                p = this.scrollingContainer = a("div", {
                                    className: "highcharts-scrolling"
                                }, d, c),
                                u = this.innerContainer = a("div", {
                                    className: "highcharts-inner-container"
                                }, void 0, p),
                                g = this.fixedDiv = a("div", {
                                    className: "highcharts-fixed"
                                }, {
                                    position: "absolute",
                                    overflow: "hidden",
                                    pointerEvents: "none",
                                    zIndex: (s.style ? .zIndex || 0) + 2,
                                    top: 0
                                }, void 0, !0),
                                f = this.fixedRenderer = new r(g, t.chartWidth, t.chartHeight, s.style);
                            this.mask = f.path().attr({
                                fill: s.backgroundColor || "#fff",
                                "fill-opacity": o.opacity ? ? .85,
                                zIndex: -1
                            }).addClass("highcharts-scrollable-mask").add(), p.parentNode.insertBefore(g, p), l(t.renderTo, {
                                overflow: "visible"
                            }), n(t, "afterShowResetZoom", h), n(t, "afterApplyDrilldown", h), n(t, "afterLayOutTitles", h), n(p, "scroll", () => {
                                let {
                                    pointer: i,
                                    hoverPoint: s
                                } = t;
                                i && (delete i.chartPosition, s && (e = s), i.runPointActions(void 0, e, !0))
                            }), u.appendChild(t.container)
                        }
                        applyFixed() {
                            let {
                                chart: t,
                                fixedRenderer: e,
                                isDirty: i,
                                scrollingContainer: s
                            } = this, {
                                axisOffset: o,
                                chartWidth: n,
                                chartHeight: a,
                                container: d,
                                plotHeight: c,
                                plotLeft: p,
                                plotTop: u,
                                plotWidth: g,
                                scrollablePixelsX: f = 0,
                                scrollablePixelsY: m = 0
                            } = t, {
                                scrollPositionX: x = 0,
                                scrollPositionY: y = 0
                            } = t.options.chart.scrollablePlotArea || {}, b = n + f, v = a + m;
                            e.setSize(n, a), (i ? ? !0) && (this.isDirty = !1, this.moveFixedElements()), r(t.container), l(d, {
                                width: `${b}px`,
                                height: `${v}px`
                            }), t.renderer.boxWrapper.attr({
                                width: b,
                                height: v,
                                viewBox: [0, 0, b, v].join(" ")
                            }), t.chartBackground ? .attr({
                                width: b,
                                height: v
                            }), l(s, {
                                width: `${n}px`,
                                height: `${a}px`
                            }), h(i) || (s.scrollLeft = f * x, s.scrollTop = m * y);
                            let k = u - o[0] - 1,
                                S = p - o[3] - 1,
                                C = u + c + o[2] + 1,
                                M = p + g + o[1] + 1,
                                w = p + g - f,
                                A = u + c - m,
                                T = [
                                    ["M", 0, 0]
                                ];
                            f ? T = [
                                ["M", 0, k],
                                ["L", p - 1, k],
                                ["L", p - 1, C],
                                ["L", 0, C],
                                ["Z"],
                                ["M", w, k],
                                ["L", n, k],
                                ["L", n, C],
                                ["L", w, C],
                                ["Z"]
                            ] : m && (T = [
                                ["M", S, 0],
                                ["L", S, u - 1],
                                ["L", M, u - 1],
                                ["L", M, 0],
                                ["Z"],
                                ["M", S, A],
                                ["L", S, a],
                                ["L", M, a],
                                ["L", M, A],
                                ["Z"]
                            ]), "adjustHeight" !== t.redrawTrigger && this.mask.attr({
                                d: T
                            })
                        }
                        moveFixedElements() {
                            let t;
                            let {
                                container: e,
                                inverted: i,
                                scrollablePixelsX: s,
                                scrollablePixelsY: r
                            } = this.chart, o = this.fixedRenderer, n = g.fixedSelectors;
                            for (let a of (s && !i ? t = ".highcharts-yaxis" : s && i ? t = ".highcharts-xaxis" : r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && n.push(`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`), n))[].forEach.call(e.querySelectorAll(a), t => {
                                (t.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                            })
                        }
                    }
                    return g.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"], g
                }), i(e, "Core/Axis/Stacking/StackItem.js", [e["Core/Templating.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        format: s
                    } = t, {
                        series: r
                    } = e, {
                        destroyObjectProperties: o,
                        fireEvent: n,
                        isNumber: a,
                        pick: l
                    } = i;
                    return class {
                        constructor(t, e, i, s, r) {
                            let o = t.chart.inverted,
                                n = t.reversed;
                            this.axis = t;
                            let a = this.isNegative = !!i != !!n;
                            this.options = e = e || {}, this.x = s, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = r, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
                                align: e.align || (o ? a ? "left" : "right" : "center"),
                                verticalAlign: e.verticalAlign || (o ? "middle" : a ? "bottom" : "top"),
                                y: e.y,
                                x: e.x
                            }, this.textAlign = e.textAlign || (o ? a ? "right" : "left" : "center")
                        }
                        destroy() {
                            o(this, this.axis)
                        }
                        render(t) {
                            let e = this.axis.chart,
                                i = this.options,
                                r = i.format,
                                o = r ? s(r, this, e) : i.formatter.call(this);
                            if (this.label) this.label.attr({
                                text: o,
                                visibility: "hidden"
                            });
                            else {
                                this.label = e.renderer.label(o, null, void 0, i.shape, void 0, void 0, i.useHTML, !1, "stack-labels");
                                let s = {
                                    r: i.borderRadius || 0,
                                    text: o,
                                    padding: l(i.padding, 5),
                                    visibility: "hidden"
                                };
                                e.styledMode || (s.fill = i.backgroundColor, s.stroke = i.borderColor, s["stroke-width"] = i.borderWidth, this.label.css(i.style || {})), this.label.attr(s), this.label.added || this.label.add(t)
                            }
                            this.label.labelrank = e.plotSizeY, n(this, "afterRender")
                        }
                        setOffset(t, e, i, s, o, h) {
                            let {
                                alignOptions: d,
                                axis: c,
                                label: p,
                                options: u,
                                textAlign: g
                            } = this, f = c.chart, m = this.getStackBox({
                                xOffset: t,
                                width: e,
                                boxBottom: i,
                                boxTop: s,
                                defaultX: o,
                                xAxis: h
                            }), {
                                verticalAlign: x
                            } = d;
                            if (p && m) {
                                let t = p.getBBox(void 0, 0),
                                    e = p.padding,
                                    i = "justify" === l(u.overflow, "justify"),
                                    s;
                                d.x = u.x || 0, d.y = u.y || 0;
                                let {
                                    x: o,
                                    y: n
                                } = this.adjustStackPosition({
                                    labelBox: t,
                                    verticalAlign: x,
                                    textAlign: g
                                });
                                m.x -= o, m.y -= n, p.align(d, !1, m), (s = f.isInsidePlot(p.alignAttr.x + d.x + o, p.alignAttr.y + d.y + n)) || (i = !1), i && r.prototype.justifyDataLabel.call(c, p, d, p.alignAttr, t, m), p.attr({
                                    x: p.alignAttr.x,
                                    y: p.alignAttr.y,
                                    rotation: u.rotation,
                                    rotationOriginX: t.width * ({
                                        left: 0,
                                        center: .5,
                                        right: 1
                                    })[u.textAlign || "center"],
                                    rotationOriginY: t.height / 2
                                }), l(!i && u.crop, !0) && (s = a(p.x) && a(p.y) && f.isInsidePlot(p.x - e + (p.width || 0), p.y) && f.isInsidePlot(p.x + e, p.y)), p[s ? "show" : "hide"]()
                            }
                            n(this, "afterSetOffset", {
                                xOffset: t,
                                width: e
                            })
                        }
                        adjustStackPosition({
                            labelBox: t,
                            verticalAlign: e,
                            textAlign: i
                        }) {
                            let s = {
                                    bottom: 0,
                                    middle: 1,
                                    top: 2,
                                    right: 1,
                                    center: 0,
                                    left: -1
                                },
                                r = s[e],
                                o = s[i];
                            return {
                                x: t.width / 2 + t.width / 2 * o,
                                y: t.height / 2 * r
                            }
                        }
                        getStackBox(t) {
                            let e = this.axis,
                                i = e.chart,
                                {
                                    boxTop: s,
                                    defaultX: r,
                                    xOffset: o,
                                    width: n,
                                    boxBottom: h
                                } = t,
                                d = e.stacking.usePercentage ? 100 : l(s, this.total, 0),
                                c = e.toPixels(d),
                                p = t.xAxis || i.xAxis[0],
                                u = l(r, p.translate(this.x)) + o,
                                g = Math.abs(c - e.toPixels(h || a(e.min) && e.logarithmic && e.logarithmic.lin2log(e.min) || 0)),
                                f = i.inverted,
                                m = this.isNegative;
                            return f ? {
                                x: (m ? c : c - g) - i.plotLeft,
                                y: p.height - u - n,
                                width: g,
                                height: n
                            } : {
                                x: u + p.transB - i.plotLeft,
                                y: (m ? c - g : c) - i.plotTop,
                                width: n,
                                height: g
                            }
                        }
                    }
                }), i(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t, e, i, s, r) {
                    var o;
                    let {
                        getDeferredAnimation: n
                    } = t, {
                        series: {
                            prototype: a
                        }
                    } = i, {
                        addEvent: l,
                        correctFloat: h,
                        defined: d,
                        destroyObjectProperties: c,
                        fireEvent: p,
                        isArray: u,
                        isNumber: g,
                        objectEach: f,
                        pick: m
                    } = r;

                    function x() {
                        let t = this.inverted;
                        this.axes.forEach(t => {
                            t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
                        }), this.series.forEach(e => {
                            let i = e.xAxis && e.xAxis.options || {};
                            e.options.stacking && e.reserveSpace() && (e.stackKey = [e.type, m(e.options.stack, ""), t ? i.top : i.left, t ? i.height : i.width].join(","))
                        })
                    }

                    function y() {
                        let t = this.stacking;
                        if (t) {
                            let e = t.stacks;
                            f(e, (t, i) => {
                                c(t), delete e[i]
                            }), t.stackTotalGroup ? .destroy()
                        }
                    }

                    function b() {
                        this.stacking || (this.stacking = new w(this))
                    }

                    function v(t, e, i, s) {
                        return !d(t) || t.x !== e || s && t.stackKey !== s ? t = {
                            x: e,
                            index: 0,
                            key: s,
                            stackKey: s
                        } : t.index++, t.key = [i, e, t.index].join(","), t
                    }

                    function k() {
                        let t;
                        let e = this,
                            i = e.yAxis,
                            s = e.stackKey || "",
                            r = i.stacking.stacks,
                            o = e.processedXData,
                            n = e.options.stacking,
                            a = e[n + "Stacker"];
                        a && [s, "-" + s].forEach(i => {
                            let s = o.length,
                                n, l, h;
                            for (; s--;) n = o[s], t = e.getStackIndicator(t, n, e.index, i), l = r[i] ? .[n], (h = l ? .points[t.key || ""]) && a.call(e, h, l, s)
                        })
                    }

                    function S(t, e, i) {
                        let s = e.total ? 100 / e.total : 0;
                        t[0] = h(t[0] * s), t[1] = h(t[1] * s), this.stackedYData[i] = t[1]
                    }

                    function C(t) {
                        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? a.setStackedPoints.call(this, t, "group") : t.stacking.resetStacks())
                    }

                    function M(t, e) {
                        let i, r, o, n, a, l, c, p, g;
                        let f = e || this.options.stacking;
                        if (!f || !this.reserveSpace() || (({
                                group: "xAxis"
                            })[f] || "yAxis") !== t.coll) return;
                        let x = this.processedXData,
                            y = this.processedYData,
                            b = [],
                            v = y.length,
                            k = this.options,
                            S = k.threshold || 0,
                            C = k.startFromThreshold ? S : 0,
                            M = k.stack,
                            w = e ? `${this.type},${f}` : this.stackKey || "",
                            A = "-" + w,
                            T = this.negStacks,
                            P = t.stacking,
                            L = P.stacks,
                            O = P.oldStacks;
                        for (P.stacksTouched += 1, c = 0; c < v; c++) {
                            p = x[c], g = y[c], l = (i = this.getStackIndicator(i, p, this.index)).key || "", L[a = (r = T && g < (C ? 0 : S)) ? A : w] || (L[a] = {}), L[a][p] || (O[a] ? .[p] ? (L[a][p] = O[a][p], L[a][p].total = null) : L[a][p] = new s(t, t.options.stackLabels, !!r, p, M)), o = L[a][p], null !== g ? (o.points[l] = o.points[this.index] = [m(o.cumulative, C)], d(o.cumulative) || (o.base = l), o.touched = P.stacksTouched, i.index > 0 && !1 === this.singleStacks && (o.points[l][0] = o.points[this.index + "," + p + ",0"][0])) : (delete o.points[l], delete o.points[this.index]);
                            let e = o.total || 0;
                            "percent" === f ? (n = r ? w : A, e = T && L[n] ? .[p] ? (n = L[n][p]).total = Math.max(n.total || 0, e) + Math.abs(g) || 0 : h(e + (Math.abs(g) || 0))) : "group" === f ? (u(g) && (g = g[0]), null !== g && e++) : e = h(e + (g || 0)), "group" === f ? o.cumulative = (e || 1) - 1 : o.cumulative = h(m(o.cumulative, C) + (g || 0)), o.total = e, null !== g && (o.points[l].push(o.cumulative), b[c] = o.cumulative, o.hasValidPoints = !0)
                        }
                        "percent" === f && (P.usePercentage = !0), "group" !== f && (this.stackedYData = b), P.oldStacks = {}
                    }
                    class w {
                        constructor(t) {
                            this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
                        }
                        buildStacks() {
                            let t, e;
                            let i = this.axis,
                                s = i.series,
                                r = "xAxis" === i.coll,
                                o = i.options.reversedStacks,
                                n = s.length;
                            for (this.resetStacks(), this.usePercentage = !1, e = n; e--;) t = s[o ? e : n - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
                            if (!r)
                                for (e = 0; e < n; e++) s[e].modifyStacks();
                            p(i, "afterBuildStacks")
                        }
                        cleanStacks() {
                            this.oldStacks && (this.stacks = this.oldStacks, f(this.stacks, t => {
                                f(t, t => {
                                    t.cumulative = t.total
                                })
                            }))
                        }
                        resetStacks() {
                            f(this.stacks, t => {
                                f(t, (e, i) => {
                                    g(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null)
                                })
                            })
                        }
                        renderStackTotals() {
                            let t = this.axis,
                                e = t.chart,
                                i = e.renderer,
                                s = this.stacks,
                                r = n(e, t.options.stackLabels ? .animation || !1),
                                o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({
                                    zIndex: 6,
                                    opacity: 0
                                }).add();
                            o.translate(e.plotLeft, e.plotTop), f(s, t => {
                                f(t, t => {
                                    t.render(o)
                                })
                            }), o.animate({
                                opacity: 1
                            }, r)
                        }
                    }
                    return (o || (o = {})).compose = function(t, e, i) {
                        let s = e.prototype,
                            r = i.prototype;
                        s.getStacks || (l(t, "init", b), l(t, "destroy", y), s.getStacks = x, r.getStackIndicator = v, r.modifyStacks = k, r.percentStacker = S, r.setGroupedPoints = C, r.setStackedPoints = M)
                    }, o
                }), i(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        defined: s,
                        merge: r,
                        isObject: o
                    } = i;
                    class n extends t {
                        drawGraph() {
                            let t = this.options,
                                e = (this.gappedPath || this.getGraphPath).call(this),
                                i = this.chart.styledMode;
                            [this, ...this.zones].forEach((s, n) => {
                                let a, l = s.graph,
                                    h = l ? "animate" : "attr",
                                    d = s.dashStyle || t.dashStyle;
                                l ? (l.endX = this.preventGraphAnimation ? null : e.xMap, l.animate({
                                    d: e
                                })) : e.length && (s.graph = l = this.chart.renderer.path(e).addClass("highcharts-graph" + (n ? ` highcharts-zone-graph-${n-1} ` : " ") + (n && s.className || "")).attr({
                                    zIndex: 1
                                }).add(this.group)), l && !i && (a = {
                                    stroke: !n && t.lineColor || s.color || this.color || "#cccccc",
                                    "stroke-width": t.lineWidth || 0,
                                    fill: this.fillGraph && this.color || "none"
                                }, d ? a.dashstyle = d : "square" !== t.linecap && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), l[h](a).shadow(n < 2 && t.shadow && r({
                                    filterUnits: "userSpaceOnUse"
                                }, o(t.shadow) ? t.shadow : {}))), l && (l.startX = e.xMap, l.isArea = e.isArea)
                            })
                        }
                        getGraphPath(t, e, i) {
                            let r = this,
                                o = r.options,
                                n = [],
                                a = [],
                                l, h = o.step,
                                d = (t = t || r.points).reversed;
                            return d && t.reverse(), (h = ({
                                right: 1,
                                center: 2
                            })[h] || h && 3) && d && (h = 4 - h), (t = this.getValidPoints(t, !1, !(o.connectNulls && !e && !i))).forEach(function(d, c) {
                                let p;
                                let u = d.plotX,
                                    g = d.plotY,
                                    f = t[c - 1],
                                    m = d.isNull || "number" != typeof g;
                                (d.leftCliff || f && f.rightCliff) && !i && (l = !0), m && !s(e) && c > 0 ? l = !o.connectNulls : m && !e ? l = !0 : (0 === c || l ? p = [
                                    ["M", d.plotX, d.plotY]
                                ] : r.getPointSpline ? p = [r.getPointSpline(t, d, c)] : h ? (p = 1 === h ? [
                                    ["L", f.plotX, g]
                                ] : 2 === h ? [
                                    ["L", (f.plotX + u) / 2, f.plotY],
                                    ["L", (f.plotX + u) / 2, g]
                                ] : [
                                    ["L", u, f.plotY]
                                ]).push(["L", u, g]) : p = [
                                    ["L", u, g]
                                ], a.push(d.x), h && (a.push(d.x), 2 === h && a.push(d.x)), n.push.apply(n, p), l = !1)
                            }), n.xMap = a, r.graphPath = n, n
                        }
                    }
                    return n.defaultOptions = r(t.defaultOptions, {
                        legendSymbol: "lineMarker"
                    }), e.registerSeriesType("line", n), n
                }), i(e, "Series/Area/AreaSeriesDefaults.js", [], function() {
                    return {
                        threshold: 0,
                        legendSymbol: "areaMarker"
                    }
                }), i(e, "Series/Area/AreaSeries.js", [e["Series/Area/AreaSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        seriesTypes: {
                            line: s
                        }
                    } = e, {
                        extend: r,
                        merge: o,
                        objectEach: n,
                        pick: a
                    } = i;
                    class l extends s {
                        drawGraph() {
                            this.areaPath = [], super.drawGraph.apply(this);
                            let {
                                areaPath: t,
                                options: e
                            } = this;
                            [this, ...this.zones].forEach((i, s) => {
                                let r = {},
                                    o = i.fillColor || e.fillColor,
                                    n = i.area,
                                    a = n ? "animate" : "attr";
                                n ? (n.endX = this.preventGraphAnimation ? null : t.xMap, n.animate({
                                    d: t
                                })) : (r.zIndex = 0, (n = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s-1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ? ? .75, n.css({
                                    pointerEvents: this.stickyTracking ? "none" : "auto"
                                })), n[a](r), n.startX = t.xMap, n.shiftUnit = e.step ? 2 : 1
                            })
                        }
                        getGraphPath(t) {
                            let e, i, r;
                            let o = s.prototype.getGraphPath,
                                n = this.options,
                                l = n.stacking,
                                h = this.yAxis,
                                d = [],
                                c = [],
                                p = this.index,
                                u = h.stacking.stacks[this.stackKey],
                                g = n.threshold,
                                f = Math.round(h.getThreshold(n.threshold)),
                                m = a(n.connectNulls, "percent" === l),
                                x = function(i, s, r) {
                                    let o = t[i],
                                        n = l && u[o.x].points[p],
                                        a = o[r + "Null"] || 0,
                                        m = o[r + "Cliff"] || 0,
                                        x, y, b = !0;
                                    m || a ? (x = (a ? n[0] : n[1]) + m, y = n[0] + m, b = !!a) : !l && t[s] && t[s].isNull && (x = y = g), void 0 !== x && (c.push({
                                        plotX: e,
                                        plotY: null === x ? f : h.getThreshold(x),
                                        isNull: b,
                                        isCliff: !0
                                    }), d.push({
                                        plotX: e,
                                        plotY: null === y ? f : h.getThreshold(y),
                                        doCurve: !1
                                    }))
                                };
                            t = t || this.points, l && (t = this.getStackPoints(t));
                            for (let s = 0, o = t.length; s < o; ++s) l || (t[s].leftCliff = t[s].rightCliff = t[s].leftNull = t[s].rightNull = void 0), i = t[s].isNull, e = a(t[s].rectPlotX, t[s].plotX), r = l ? a(t[s].yBottom, f) : f, i && !m || (m || x(s, s - 1, "left"), i && !l && m || (c.push(t[s]), d.push({
                                x: s,
                                plotX: e,
                                plotY: r
                            })), m || x(s, s + 1, "right"));
                            let y = o.call(this, c, !0, !0);
                            d.reversed = !0;
                            let b = o.call(this, d, !0, !0),
                                v = b[0];
                            v && "M" === v[0] && (b[0] = ["L", v[1], v[2]]);
                            let k = y.concat(b);
                            k.length && k.push(["Z"]);
                            let S = o.call(this, c, !1, m);
                            return k.xMap = y.xMap, this.areaPath = k, S
                        }
                        getStackPoints(t) {
                            let e = this,
                                i = [],
                                s = [],
                                r = this.xAxis,
                                o = this.yAxis,
                                l = o.stacking.stacks[this.stackKey],
                                h = {},
                                d = o.series,
                                c = d.length,
                                p = o.options.reversedStacks ? 1 : -1,
                                u = d.indexOf(e);
                            if (t = t || this.points, this.options.stacking) {
                                for (let e = 0; e < t.length; e++) t[e].leftNull = t[e].rightNull = void 0, h[t[e].x] = t[e];
                                n(l, function(t, e) {
                                    null !== t.total && s.push(e)
                                }), s.sort(function(t, e) {
                                    return t - e
                                });
                                let g = d.map(t => t.visible);
                                s.forEach(function(t, n) {
                                    let f = 0,
                                        m, x;
                                    if (h[t] && !h[t].isNull) i.push(h[t]), [-1, 1].forEach(function(i) {
                                        let r = 1 === i ? "rightNull" : "leftNull",
                                            o = l[s[n + i]],
                                            a = 0;
                                        if (o) {
                                            let i = u;
                                            for (; i >= 0 && i < c;) {
                                                let s = d[i].index;
                                                !(m = o.points[s]) && (s === e.index ? h[t][r] = !0 : g[i] && (x = l[t].points[s]) && (a -= x[1] - x[0])), i += p
                                            }
                                        }
                                        h[t][1 === i ? "rightCliff" : "leftCliff"] = a
                                    });
                                    else {
                                        let e = u;
                                        for (; e >= 0 && e < c;) {
                                            let i = d[e].index;
                                            if (m = l[t].points[i]) {
                                                f = m[1];
                                                break
                                            }
                                            e += p
                                        }
                                        f = a(f, 0), f = o.translate(f, 0, 1, 0, 1), i.push({
                                            isNull: !0,
                                            plotX: r.translate(t, 0, 0, 0, 1),
                                            x: t,
                                            plotY: f,
                                            yBottom: f
                                        })
                                    }
                                })
                            }
                            return i
                        }
                    }
                    return l.defaultOptions = o(s.defaultOptions, t), r(l.prototype, {
                        singleStacks: !1
                    }), e.registerSeriesType("area", l), l
                }), i(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e) {
                    let {
                        line: i
                    } = t.seriesTypes, {
                        merge: s,
                        pick: r
                    } = e;
                    class o extends i {
                        getPointSpline(t, e, i) {
                            let s, o, n, a;
                            let l = e.plotX || 0,
                                h = e.plotY || 0,
                                d = t[i - 1],
                                c = t[i + 1];

                            function p(t) {
                                return t && !t.isNull && !1 !== t.doCurve && !e.isCliff
                            }
                            if (p(d) && p(c)) {
                                let t = d.plotX || 0,
                                    i = d.plotY || 0,
                                    r = c.plotX || 0,
                                    p = c.plotY || 0,
                                    u = 0;
                                s = (1.5 * l + t) / 2.5, o = (1.5 * h + i) / 2.5, n = (1.5 * l + r) / 2.5, a = (1.5 * h + p) / 2.5, n !== s && (u = (a - o) * (n - l) / (n - s) + h - a), o += u, a += u, o > i && o > h ? (o = Math.max(i, h), a = 2 * h - o) : o < i && o < h && (o = Math.min(i, h), a = 2 * h - o), a > p && a > h ? (a = Math.max(p, h), o = 2 * h - a) : a < p && a < h && (a = Math.min(p, h), o = 2 * h - a), e.rightContX = n, e.rightContY = a, e.controlPoints = {
                                    low: [s, o],
                                    high: [n, a]
                                }
                            }
                            let u = ["C", r(d.rightContX, d.plotX, 0), r(d.rightContY, d.plotY, 0), r(s, l, 0), r(o, h, 0), l, h];
                            return d.rightContX = d.rightContY = void 0, u
                        }
                    }
                    return o.defaultOptions = s(i.defaultOptions), t.registerSeriesType("spline", o), o
                }), i(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        area: s,
                        area: {
                            prototype: r
                        }
                    } = e.seriesTypes, {
                        extend: o,
                        merge: n
                    } = i;
                    class a extends t {}
                    return a.defaultOptions = n(t.defaultOptions, s.defaultOptions), o(a.prototype, {
                        getGraphPath: r.getGraphPath,
                        getStackPoints: r.getStackPoints,
                        drawGraph: r.drawGraph
                    }), e.registerSeriesType("areaspline", a), a
                }), i(e, "Series/Column/ColumnSeriesDefaults.js", [], function() {
                    return {
                        borderRadius: 3,
                        centerInCategory: !1,
                        groupPadding: .2,
                        marker: null,
                        pointPadding: .1,
                        minPointLength: 0,
                        cropThreshold: 50,
                        pointRange: null,
                        states: {
                            hover: {
                                halo: !1,
                                brightness: .1
                            },
                            select: {
                                color: "#cccccc",
                                borderColor: "#000000"
                            }
                        },
                        dataLabels: {
                            align: void 0,
                            verticalAlign: void 0,
                            y: void 0
                        },
                        startFromThreshold: !0,
                        stickyTracking: !1,
                        tooltip: {
                            distance: 6
                        },
                        threshold: 0,
                        borderColor: "#ffffff"
                    }
                }), i(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, n) {
                    let {
                        animObject: a
                    } = t, {
                        parse: l
                    } = e, {
                        noop: h
                    } = s, {
                        clamp: d,
                        crisp: c,
                        defined: p,
                        extend: u,
                        fireEvent: g,
                        isArray: f,
                        isNumber: m,
                        merge: x,
                        pick: y,
                        objectEach: b
                    } = n;
                    class v extends r {
                        animate(t) {
                            let e, i;
                            let s = this,
                                r = this.yAxis,
                                o = r.pos,
                                n = r.reversed,
                                l = s.options,
                                {
                                    clipOffset: h,
                                    inverted: c
                                } = this.chart,
                                p = {},
                                g = c ? "translateX" : "translateY";
                            t && h ? (p.scaleY = .001, i = d(r.toPixels(l.threshold), o, o + r.len), c ? (i += n ? -Math.floor(h[0]) : Math.ceil(h[2]), p.translateX = i - r.len) : (i += n ? Math.ceil(h[0]) : -Math.floor(h[2]), p.translateY = i), s.clipBox && s.setClip(), s.group.attr(p)) : (e = Number(s.group.attr(g)), s.group.animate({
                                scaleY: 1
                            }, u(a(s.options.animation), {
                                step: function(t, i) {
                                    s.group && (p[g] = e + i.pos * (o - e), s.group.attr(p))
                                }
                            })))
                        }
                        init(t, e) {
                            super.init.apply(this, arguments);
                            let i = this;
                            (t = i.chart).hasRendered && t.series.forEach(function(t) {
                                t.type === i.type && (t.isDirty = !0)
                            })
                        }
                        getColumnMetrics() {
                            let t = this,
                                e = t.options,
                                i = t.xAxis,
                                s = t.yAxis,
                                r = i.options.reversedStacks,
                                o = i.reversed && !r || !i.reversed && r,
                                n = {},
                                a, l = 0;
                            !1 === e.grouping ? l = 1 : t.chart.series.forEach(function(e) {
                                let i;
                                let r = e.yAxis,
                                    o = e.options;
                                e.type === t.type && e.reserveSpace() && s.len === r.len && s.pos === r.pos && (o.stacking && "group" !== o.stacking ? (void 0 === n[a = e.stackKey] && (n[a] = l++), i = n[a]) : !1 !== o.grouping && (i = l++), e.columnIndex = i)
                            });
                            let h = Math.min(Math.abs(i.transA) * (!i.brokenAxis ? .hasBreaks && i.ordinal ? .slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len),
                                d = h * e.groupPadding,
                                c = (h - 2 * d) / (l || 1),
                                p = Math.min(e.maxPointWidth || i.len, y(e.pointWidth, c * (1 - 2 * e.pointPadding))),
                                u = (t.columnIndex || 0) + (o ? 1 : 0);
                            return t.columnMetrics = {
                                width: p,
                                offset: (c - p) / 2 + (d + u * c - h / 2) * (o ? -1 : 1),
                                paddedWidth: c,
                                columnCount: l
                            }, t.columnMetrics
                        }
                        crispCol(t, e, i, s) {
                            let r = this.borderWidth,
                                o = this.chart.inverted;
                            return s = c(e + s, r, o) - (e = c(e, r, o)), this.options.crisp && (i = c(t + i, r) - (t = c(t, r))), {
                                x: t,
                                y: e,
                                width: i,
                                height: s
                            }
                        }
                        adjustForMissingColumns(t, e, i, s) {
                            if (!i.isNull && s.columnCount > 1) {
                                let r = this.xAxis.series.filter(t => t.visible).map(t => t.index),
                                    o = 0,
                                    n = 0;
                                b(this.xAxis.stacking ? .stacks, t => {
                                    if ("number" == typeof i.x) {
                                        let e = t[i.x.toString()];
                                        if (e && f(e.points[this.index])) {
                                            let t = Object.keys(e.points).filter(t => !t.match(",") && e.points[t] && e.points[t].length > 1).map(parseFloat).filter(t => -1 !== r.indexOf(t)).sort((t, e) => e - t);
                                            o = t.indexOf(this.index), n = t.length
                                        }
                                    }
                                }), o = this.xAxis.reversed ? n - 1 - o : o;
                                let a = (n - 1) * s.paddedWidth + e;
                                t = (i.plotX || 0) + a / 2 - e - o * s.paddedWidth
                            }
                            return t
                        }
                        translate() {
                            let t = this,
                                e = t.chart,
                                i = t.options,
                                s = t.dense = t.closestPointRange * t.xAxis.transA < 2,
                                o = t.borderWidth = y(i.borderWidth, s ? 0 : 1),
                                n = t.xAxis,
                                a = t.yAxis,
                                l = i.threshold,
                                h = y(i.minPointLength, 5),
                                c = t.getColumnMetrics(),
                                u = c.width,
                                f = t.pointXOffset = c.offset,
                                x = t.dataMin,
                                b = t.dataMax,
                                v = t.translatedThreshold = a.getThreshold(l),
                                k = t.barW = Math.max(u, 1 + 2 * o);
                            i.pointPadding && (k = Math.ceil(k)), r.prototype.translate.apply(t), t.points.forEach(function(s) {
                                let r = y(s.yBottom, v),
                                    o = 999 + Math.abs(r),
                                    g = s.plotX || 0,
                                    S = d(s.plotY, -o, a.len + o),
                                    C, M = Math.min(S, r),
                                    w = Math.max(S, r) - M,
                                    A = u,
                                    T = g + f,
                                    P = k;
                                h && Math.abs(w) < h && (w = h, C = !a.reversed && !s.negative || a.reversed && s.negative, m(l) && m(b) && s.y === l && b <= l && (a.min || 0) < l && (x !== b || (a.max || 0) <= l) && (C = !C, s.negative = !s.negative), M = Math.abs(M - v) > h ? r - h : v - (C ? h : 0)), p(s.options.pointWidth) && (T -= Math.round(((A = P = Math.ceil(s.options.pointWidth)) - u) / 2)), i.centerInCategory && !i.stacking && (T = t.adjustForMissingColumns(T, A, s, c)), s.barX = T, s.pointWidth = A, s.tooltipPos = e.inverted ? [d(a.len + a.pos - e.plotLeft - S, a.pos - e.plotLeft, a.len + a.pos - e.plotLeft), n.len + n.pos - e.plotTop - T - P / 2, w] : [n.left - e.plotLeft + T + P / 2, d(S + a.pos - e.plotTop, a.pos - e.plotTop, a.len + a.pos - e.plotTop), w], s.shapeType = t.pointClass.prototype.shapeType || "roundedRect", s.shapeArgs = t.crispCol(T, s.isNull ? v : M, P, s.isNull ? 0 : w)
                            }), g(this, "afterColumnTranslate")
                        }
                        drawGraph() {
                            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                        }
                        pointAttribs(t, e) {
                            let i = this.options,
                                s = this.pointAttrToOptions || {},
                                r = s.stroke || "borderColor",
                                o = s["stroke-width"] || "borderWidth",
                                n, a, h, d = t && t.color || this.color,
                                c = t && t[r] || i[r] || d,
                                p = t && t.options.dashStyle || i.dashStyle,
                                u = t && t[o] || i[o] || this[o] || 0,
                                g = y(t && t.opacity, i.opacity, 1);
                            t && this.zones.length && (a = t.getZone(), d = t.options.color || a && (a.color || t.nonZonedColor) || this.color, a && (c = a.borderColor || c, p = a.dashStyle || p, u = a.borderWidth || u)), e && t && (h = (n = x(i.states[e], t.options.states && t.options.states[e] || {})).brightness, d = n.color || void 0 !== h && l(d).brighten(n.brightness).get() || d, c = n[r] || c, u = n[o] || u, p = n.dashStyle || p, g = y(n.opacity, g));
                            let f = {
                                fill: d,
                                stroke: c,
                                "stroke-width": u,
                                opacity: g
                            };
                            return p && (f.dashstyle = p), f
                        }
                        drawPoints(t = this.points) {
                            let e;
                            let i = this,
                                s = this.chart,
                                r = i.options,
                                o = s.renderer,
                                n = r.animationLimit || 250;
                            t.forEach(function(t) {
                                let a = t.plotY,
                                    l = t.graphic,
                                    h = !!l,
                                    d = l && s.pointCount < n ? "animate" : "attr";
                                m(a) && null !== t.y ? (e = t.shapeArgs, l && t.hasNewShapeType() && (l = l.destroy()), i.enabledDataSorting && (t.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !l && (t.graphic = l = o[t.shapeType](e).add(t.group || i.group), l && i.enabledDataSorting && s.hasRendered && s.pointCount < n && (l.attr({
                                    x: t.startXPos
                                }), h = !0, d = "animate")), l && h && l[d](x(e)), s.styledMode || l[d](i.pointAttribs(t, t.selected && "select")).shadow(!1 !== t.allowShadow && r.shadow), l && (l.addClass(t.getClassName(), !0), l.attr({
                                    visibility: t.visible ? "inherit" : "hidden"
                                }))) : l && (t.graphic = l.destroy())
                            })
                        }
                        drawTracker(t = this.points) {
                            let e;
                            let i = this,
                                s = i.chart,
                                r = s.pointer,
                                o = function(t) {
                                    let e = r ? .getPointFromEvent(t);
                                    r && e && i.options.enableMouseTracking && (r.isDirectTouch = !0, e.onMouseOver(t))
                                };
                            t.forEach(function(t) {
                                e = f(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : [], t.graphic && (t.graphic.element.point = t), e.forEach(function(e) {
                                    (e.div || e.element).point = t
                                })
                            }), i._hasTracking || (i.trackerGroups.forEach(function(t) {
                                i[t] && (i[t].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(t) {
                                    r ? .onTrackerMouseOut(t)
                                }).on("touchstart", o), !s.styledMode && i.options.cursor && i[t].css({
                                    cursor: i.options.cursor
                                }))
                            }), i._hasTracking = !0), g(this, "afterDrawTracker")
                        }
                        remove() {
                            let t = this,
                                e = t.chart;
                            e.hasRendered && e.series.forEach(function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            }), r.prototype.remove.apply(t, arguments)
                        }
                    }
                    return v.defaultOptions = x(r.defaultOptions, i), u(v.prototype, {
                        directTouch: !0,
                        getSymbol: h,
                        negStacks: !0,
                        trackerGroups: ["group", "dataLabelsGroup"]
                    }), o.registerSeriesType("column", v), v
                }), i(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    var s;
                    let {
                        getDeferredAnimation: r
                    } = t, {
                        format: o
                    } = e, {
                        defined: n,
                        extend: a,
                        fireEvent: l,
                        isArray: h,
                        isString: d,
                        merge: c,
                        objectEach: p,
                        pick: u,
                        pInt: g,
                        splat: f
                    } = i;
                    return function(t) {
                        function e() {
                            return v(this).some(t => t ? .enabled)
                        }

                        function i(t, e, i, s, r) {
                            let {
                                chart: o,
                                enabledDataSorting: l
                            } = this, h = this.isCartesian && o.inverted, d = t.plotX, p = t.plotY, g = i.rotation || 0, f = n(d) && n(p) && o.isInsidePlot(d, Math.round(p), {
                                inverted: h,
                                paneCoordinates: !0,
                                series: this
                            }), m = 0 === g && "justify" === u(i.overflow, l ? "none" : "justify"), x = this.visible && !1 !== t.visible && n(d) && (t.series.forceDL || l && !m || f || u(i.inside, !!this.options.stacking) && s && o.isInsidePlot(d, h ? s.x + 1 : s.y + s.height - 1, {
                                inverted: h,
                                paneCoordinates: !0,
                                series: this
                            })), y = t.pos();
                            if (x && y) {
                                var b;
                                let n = e.getBBox(),
                                    d = e.getBBox(void 0, 0),
                                    p = {
                                        right: 1,
                                        center: .5
                                    }[i.align || 0] || 0,
                                    v = {
                                        bottom: 1,
                                        middle: .5
                                    }[i.verticalAlign || 0] || 0;
                                if (s = a({
                                        x: y[0],
                                        y: Math.round(y[1]),
                                        width: 0,
                                        height: 0
                                    }, s || {}), "plotEdges" === i.alignTo && this.isCartesian && (s[h ? "x" : "y"] = 0, s[h ? "width" : "height"] = this.yAxis ? .len || 0), a(i, {
                                        width: n.width,
                                        height: n.height
                                    }), b = s, l && this.xAxis && !m && this.setDataLabelStartPos(t, e, r, f, b), e.align(c(i, {
                                        width: d.width,
                                        height: d.height
                                    }), !1, s, !1), e.alignAttr.x += p * (d.width - n.width), e.alignAttr.y += v * (d.height - n.height), e[e.placed ? "animate" : "attr"]({
                                        x: e.alignAttr.x + (n.width - d.width) / 2,
                                        y: e.alignAttr.y + (n.height - d.height) / 2,
                                        rotationOriginX: (e.width || 0) / 2,
                                        rotationOriginY: (e.height || 0) / 2
                                    }), m && s.height >= 0) this.justifyDataLabel(e, i, e.alignAttr, n, s, r);
                                else if (u(i.crop, !0)) {
                                    let {
                                        x: t,
                                        y: i
                                    } = e.alignAttr;
                                    x = o.isInsidePlot(t, i, {
                                        paneCoordinates: !0,
                                        series: this
                                    }) && o.isInsidePlot(t + n.width - 1, i + n.height - 1, {
                                        paneCoordinates: !0,
                                        series: this
                                    })
                                }
                                i.shape && !g && e[r ? "attr" : "animate"]({
                                    anchorX: y[0],
                                    anchorY: y[1]
                                })
                            }
                            r && l && (e.placed = !1), x || l && !m ? (e.show(), e.placed = !0) : (e.hide(), e.placed = !1)
                        }

                        function s() {
                            return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6)
                        }

                        function m(t) {
                            let e = this.hasRendered || 0,
                                i = this.initDataLabelsGroup().attr({
                                    opacity: +e
                                });
                            return !e && i && (this.visible && i.show(), this.options.animation ? i.animate({
                                opacity: 1
                            }, t) : i.attr({
                                opacity: 1
                            })), i
                        }

                        function x(t) {
                            let e;
                            t = t || this.points;
                            let i = this,
                                s = i.chart,
                                a = i.options,
                                h = s.renderer,
                                {
                                    backgroundColor: c,
                                    plotBackgroundColor: m
                                } = s.options.chart,
                                x = h.getContrast(d(m) && m || d(c) && c || "#000000"),
                                y = v(i),
                                {
                                    animation: k,
                                    defer: S
                                } = y[0],
                                C = S ? r(s, k, i) : {
                                    defer: 0,
                                    duration: 0
                                };
                            l(this, "drawDataLabels"), i.hasDataLabels ? .() && (e = this.initDataLabels(C), t.forEach(t => {
                                let r = t.dataLabels || [];
                                f(b(y, t.dlOptions || t.options ? .dataLabels)).forEach((l, c) => {
                                    let f = l.enabled && (t.visible || t.dataLabelOnHidden) && (!t.isNull || t.dataLabelOnNull) && function(t, e) {
                                            let i = e.filter;
                                            if (i) {
                                                let e = i.operator,
                                                    s = t[i.property],
                                                    r = i.value;
                                                return ">" === e && s > r || "<" === e && s < r || ">=" === e && s >= r || "<=" === e && s <= r || "==" === e && s == r || "===" === e && s === r || "!=" === e && s != r || "!==" === e && s !== r
                                            }
                                            return !0
                                        }(t, l),
                                        {
                                            backgroundColor: m,
                                            borderColor: y,
                                            distance: b,
                                            style: v = {}
                                        } = l,
                                        k, S, C, M, w = {},
                                        A = r[c],
                                        T = !A,
                                        P;
                                    if (f && (S = u(l[t.formatPrefix + "Format"], l.format), k = t.getLabelConfig(), C = n(S) ? o(S, k, s) : (l[t.formatPrefix + "Formatter"] || l.formatter).call(k, l), M = l.rotation, !s.styledMode && (v.color = u(l.color, v.color, d(i.color) ? i.color : void 0, "#000000"), "contrast" === v.color ? ("none" !== m && (P = m), t.contrastColor = h.getContrast("auto" !== P && P || t.color || i.color), v.color = P || !n(b) && l.inside || 0 > g(b || 0) || a.stacking ? t.contrastColor : x) : delete t.contrastColor, a.cursor && (v.cursor = a.cursor)), w = {
                                            r: l.borderRadius || 0,
                                            rotation: M,
                                            padding: l.padding,
                                            zIndex: 1
                                        }, s.styledMode || (w.fill = "auto" === m ? t.color : m, w.stroke = "auto" === y ? t.color : y, w["stroke-width"] = l.borderWidth), p(w, (t, e) => {
                                            void 0 === t && delete w[e]
                                        })), !A || f && n(C) && !!A.div == !!l.useHTML && (A.rotation && l.rotation || A.rotation === l.rotation) || (A = void 0, T = !0), f && n(C) && (A ? w.text = C : (A = h.label(C, 0, 0, l.shape, void 0, void 0, l.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t.colorIndex + " " + (l.className || "") + (l.useHTML ? " highcharts-tracker" : "")), A)) {
                                        A.options = l, A.attr(w), s.styledMode || A.css(v).shadow(l.shadow);
                                        let o = l[t.formatPrefix + "TextPath"] || l.textPath;
                                        o && !l.useHTML && (A.setTextPath(t.getDataLabelPath ? .(A) || t.graphic, o), t.dataLabelPath && !o.enabled && (t.dataLabelPath = t.dataLabelPath.destroy())), A.added || A.add(e), i.alignDataLabel(t, A, l, void 0, T), A.isActive = !0, r[c] && r[c] !== A && r[c].destroy(), r[c] = A
                                    }
                                });
                                let l = r.length;
                                for (; l--;) r[l] && r[l].isActive ? r[l].isActive = !1 : (r[l] ? .destroy(), r.splice(l, 1));
                                t.dataLabel = r[0], t.dataLabels = r
                            })), l(this, "afterDrawDataLabels")
                        }

                        function y(t, e, i, s, r, o) {
                            let n = this.chart,
                                a = e.align,
                                l = e.verticalAlign,
                                h = t.box ? 0 : t.padding || 0,
                                d = n.inverted ? this.yAxis : this.xAxis,
                                c = d ? d.left - n.plotLeft : 0,
                                p = n.inverted ? this.xAxis : this.yAxis,
                                u = p ? p.top - n.plotTop : 0,
                                {
                                    x: g = 0,
                                    y: f = 0
                                } = e,
                                m, x;
                            return (m = (i.x || 0) + h + c) < 0 && ("right" === a && g >= 0 ? (e.align = "left", e.inside = !0) : g -= m, x = !0), (m = (i.x || 0) + s.width - h + c) > n.plotWidth && ("left" === a && g <= 0 ? (e.align = "right", e.inside = !0) : g += n.plotWidth - m, x = !0), (m = i.y + h + u) < 0 && ("bottom" === l && f >= 0 ? (e.verticalAlign = "top", e.inside = !0) : f -= m, x = !0), (m = (i.y || 0) + s.height - h + u) > n.plotHeight && ("top" === l && f <= 0 ? (e.verticalAlign = "bottom", e.inside = !0) : f += n.plotHeight - m, x = !0), x && (e.x = g, e.y = f, t.placed = !o, t.align(e, void 0, r)), x
                        }

                        function b(t, e) {
                            let i = [],
                                s;
                            if (h(t) && !h(e)) i = t.map(function(t) {
                                return c(t, e)
                            });
                            else if (h(e) && !h(t)) i = e.map(function(e) {
                                return c(t, e)
                            });
                            else if (h(t) || h(e)) {
                                if (h(t) && h(e))
                                    for (s = Math.max(t.length, e.length); s--;) i[s] = c(t[s], e[s])
                            } else i = c(t, e);
                            return i
                        }

                        function v(t) {
                            let e = t.chart.options.plotOptions;
                            return f(b(b(e ? .series ? .dataLabels, e ? .[t.type] ? .dataLabels), t.options.dataLabels))
                        }

                        function k(t, e, i, s, r) {
                            let o = this.chart,
                                n = o.inverted,
                                a = this.xAxis,
                                l = a.reversed,
                                h = ((n ? e.height : e.width) || 0) / 2,
                                d = t.pointWidth,
                                c = d ? d / 2 : 0;
                            e.startXPos = n ? r.x : l ? -h - c : a.width - h + c, e.startYPos = n ? l ? this.yAxis.height - h + c : -h - c : r.y, s ? "hidden" === e.visibility && (e.show(), e.attr({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            })) : e.attr({
                                opacity: 1
                            }).animate({
                                opacity: 0
                            }, void 0, e.hide), o.hasRendered && (i && e.attr({
                                x: e.startXPos,
                                y: e.startYPos
                            }), e.placed = !0)
                        }
                        t.compose = function(t) {
                            let r = t.prototype;
                            r.initDataLabels || (r.initDataLabels = m, r.initDataLabelsGroup = s, r.alignDataLabel = i, r.drawDataLabels = x, r.justifyDataLabel = y, r.setDataLabelStartPos = k, r.hasDataLabels = e)
                        }
                    }(s || (s = {})), s
                }), i(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, s) {
                    var r;
                    let {
                        composed: o
                    } = e, {
                        series: n
                    } = i, {
                        merge: a,
                        pick: l,
                        pushUnique: h
                    } = s;
                    return function(e) {
                        function i(t, e, i, s, r) {
                            let o = this.chart.inverted,
                                h = t.series,
                                d = (h.xAxis ? h.xAxis.len : this.chart.plotSizeX) || 0,
                                c = (h.yAxis ? h.yAxis.len : this.chart.plotSizeY) || 0,
                                p = t.dlBox || t.shapeArgs,
                                u = l(t.below, t.plotY > l(this.translatedThreshold, c)),
                                g = l(i.inside, !!this.options.stacking);
                            if (p) {
                                if (s = a(p), !("allow" === i.overflow && !1 === i.crop)) {
                                    s.y < 0 && (s.height += s.y, s.y = 0);
                                    let t = s.y + s.height - c;
                                    t > 0 && t < s.height - 1 && (s.height -= t)
                                }
                                o && (s = {
                                    x: c - s.y - s.height,
                                    y: d - s.x - s.width,
                                    width: s.height,
                                    height: s.width
                                }), g || (o ? (s.x += u ? 0 : s.width, s.width = 0) : (s.y += u ? s.height : 0, s.height = 0))
                            }
                            i.align = l(i.align, !o || g ? "center" : u ? "right" : "left"), i.verticalAlign = l(i.verticalAlign, o || g ? "middle" : u ? "top" : "bottom"), n.prototype.alignDataLabel.call(this, t, e, i, s, r), i.inside && t.contrastColor && e.css({
                                color: t.contrastColor
                            })
                        }
                        e.compose = function(e) {
                            t.compose(n), h(o, "ColumnDataLabel") && (e.prototype.alignDataLabel = i)
                        }
                    }(r || (r = {})), r
                }), i(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        extend: s,
                        merge: r
                    } = i;
                    class o extends t {}
                    return o.defaultOptions = r(t.defaultOptions, {}), s(o.prototype, {
                        inverted: !0
                    }), e.registerSeriesType("bar", o), o
                }), i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
                    return {
                        lineWidth: 0,
                        findNearestPointBy: "xy",
                        jitter: {
                            x: 0,
                            y: 0
                        },
                        marker: {
                            enabled: !0
                        },
                        tooltip: {
                            headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }
                }), i(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        column: s,
                        line: r
                    } = e.seriesTypes, {
                        addEvent: o,
                        extend: n,
                        merge: a
                    } = i;
                    class l extends r {
                        applyJitter() {
                            let t = this,
                                e = this.options.jitter,
                                i = this.points.length;
                            e && this.points.forEach(function(s, r) {
                                ["x", "y"].forEach(function(o, n) {
                                    if (e[o] && !s.isNull) {
                                        let a = `plot${o.toUpperCase()}`,
                                            l = t[`${o}Axis`],
                                            h = e[o] * l.transA;
                                        if (l && !l.logarithmic) {
                                            let t, e = Math.max(0, (s[a] || 0) - h),
                                                d = Math.min(l.len, (s[a] || 0) + h);
                                            s[a] = e + (d - e) * ((t = 1e4 * Math.sin(r + n * i)) - Math.floor(t)), "x" === o && (s.clientX = s.plotX)
                                        }
                                    }
                                })
                            })
                        }
                        drawGraph() {
                            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy())
                        }
                    }
                    return l.defaultOptions = a(r.defaultOptions, t), n(l.prototype, {
                        drawTracker: s.prototype.drawTracker,
                        sorted: !1,
                        requireSorting: !1,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
                    }), o(l, "afterTranslate", function() {
                        this.applyJitter()
                    }), e.registerSeriesType("scatter", l), l
                }), i(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    var s, r;
                    let {
                        deg2rad: o
                    } = t, {
                        fireEvent: n,
                        isNumber: a,
                        pick: l,
                        relativeLength: h
                    } = i;
                    return (r = s || (s = {})).getCenter = function() {
                        let t = this.options,
                            i = this.chart,
                            s = 2 * (t.slicedOffset || 0),
                            r = i.plotWidth - 2 * s,
                            o = i.plotHeight - 2 * s,
                            d = t.center,
                            c = Math.min(r, o),
                            p = t.thickness,
                            u, g = t.size,
                            f = t.innerSize || 0,
                            m, x;
                        "string" == typeof g && (g = parseFloat(g)), "string" == typeof f && (f = parseFloat(f));
                        let y = [l(d[0], "50%"), l(d[1], "50%"), l(g && g < 0 ? void 0 : t.size, "100%"), l(f && f < 0 ? void 0 : t.innerSize || 0, "0%")];
                        for (!i.angular || this instanceof e || (y[3] = 0), m = 0; m < 4; ++m) x = y[m], u = m < 2 || 2 === m && /%$/.test(x), y[m] = h(x, [r, o, c, y[2]][m]) + (u ? s : 0);
                        return y[3] > y[2] && (y[3] = y[2]), a(p) && 2 * p < y[2] && p > 0 && (y[3] = y[2] - 2 * p), n(this, "afterGetCenter", {
                            positions: y
                        }), y
                    }, r.getStartAndEndRadians = function(t, e) {
                        let i = a(t) ? t : 0,
                            s = a(e) && e > i && e - i < 360 ? e : i + 360;
                        return {
                            start: o * (i + -90),
                            end: o * (s + -90)
                        }
                    }, s
                }), i(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        setAnimation: s
                    } = t, {
                        addEvent: r,
                        defined: o,
                        extend: n,
                        isNumber: a,
                        pick: l,
                        relativeLength: h
                    } = i;
                    class d extends e {
                        getConnectorPath(t) {
                            let e = t.dataLabelPosition,
                                i = t.options || {},
                                s = i.connectorShape,
                                r = this.connectorShapes[s] || s;
                            return e && r.call(this, { ...e.computed,
                                alignment: e.alignment
                            }, e.connectorPosition, i) || []
                        }
                        getTranslate() {
                            return this.sliced && this.slicedTranslation || {
                                translateX: 0,
                                translateY: 0
                            }
                        }
                        haloPath(t) {
                            let e = this.shapeArgs;
                            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                                innerR: e.r - 1,
                                start: e.start,
                                end: e.end,
                                borderRadius: e.borderRadius
                            })
                        }
                        constructor(t, e, i) {
                            super(t, e, i), this.half = 0, this.name ? ? (this.name = "Slice");
                            let s = t => {
                                this.slice("select" === t.type)
                            };
                            r(this, "select", s), r(this, "unselect", s)
                        }
                        isValid() {
                            return a(this.y) && this.y >= 0
                        }
                        setVisible(t, e = !0) {
                            t !== this.visible && this.update({
                                visible: t ? ? !this.visible
                            }, e, void 0, !1)
                        }
                        slice(t, e, i) {
                            let r = this.series;
                            s(i, r.chart), e = l(e, !0), this.sliced = this.options.sliced = t = o(t) ? t : !this.sliced, r.options.data[r.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate())
                        }
                    }
                    return n(d.prototype, {
                        connectorShapes: {
                            fixedOffset: function(t, e, i) {
                                let s = e.breakAt,
                                    r = e.touchingSliceAt,
                                    o = i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - r.x, 2 * s.y - r.y, s.x, s.y] : ["L", s.x, s.y];
                                return [
                                    ["M", t.x, t.y], o, ["L", r.x, r.y]
                                ]
                            },
                            straight: function(t, e) {
                                let i = e.touchingSliceAt;
                                return [
                                    ["M", t.x, t.y],
                                    ["L", i.x, i.y]
                                ]
                            },
                            crookedLine: function(t, e, i) {
                                let {
                                    breakAt: s,
                                    touchingSliceAt: r
                                } = e, {
                                    series: o
                                } = this, [n, a, l] = o.center, d = l / 2, {
                                    plotLeft: c,
                                    plotWidth: p
                                } = o.chart, u = "left" === t.alignment, {
                                    x: g,
                                    y: f
                                } = t, m = s.x;
                                if (i.crookDistance) {
                                    let t = h(i.crookDistance, 1);
                                    m = u ? n + d + (p + c - n - d) * (1 - t) : c + (n - d) * t
                                } else m = n + (a - f) * Math.tan((this.angle || 0) - Math.PI / 2);
                                let x = [
                                    ["M", g, f]
                                ];
                                return (u ? m <= g && m >= s.x : m >= g && m <= s.x) && x.push(["L", m, f]), x.push(["L", s.x, s.y], ["L", r.x, r.y]), x
                            }
                        }
                    }), d
                }), i(e, "Series/Pie/PieSeriesDefaults.js", [], function() {
                    return {
                        borderRadius: 3,
                        center: [null, null],
                        clip: !1,
                        colorByPoint: !0,
                        dataLabels: {
                            connectorPadding: 5,
                            connectorShape: "crookedLine",
                            crookDistance: void 0,
                            distance: 30,
                            enabled: !0,
                            formatter: function() {
                                return this.point.isNull ? void 0 : this.point.name
                            },
                            softConnector: !0,
                            x: 0
                        },
                        fillColor: void 0,
                        ignoreHiddenPoint: !0,
                        inactiveOtherPoints: !0,
                        legendType: "point",
                        marker: null,
                        size: null,
                        showInLegend: !1,
                        slicedOffset: 10,
                        stickyTracking: !1,
                        tooltip: {
                            followPointer: !0
                        },
                        borderColor: "#ffffff",
                        borderWidth: 1,
                        lineWidth: void 0,
                        states: {
                            hover: {
                                brightness: .1
                            }
                        }
                    }
                }), i(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t, e, i, s, r, o, n, a, l) {
                    let {
                        getStartAndEndRadians: h
                    } = t, {
                        noop: d
                    } = i, {
                        clamp: c,
                        extend: p,
                        fireEvent: u,
                        merge: g,
                        pick: f
                    } = l;
                    class m extends o {
                        animate(t) {
                            let e = this,
                                i = e.points,
                                s = e.startAngleRad;
                            t || i.forEach(function(t) {
                                let i = t.graphic,
                                    r = t.shapeArgs;
                                i && r && (i.attr({
                                    r: f(t.startR, e.center && e.center[3] / 2),
                                    start: s,
                                    end: s
                                }), i.animate({
                                    r: r.r,
                                    start: r.start,
                                    end: r.end
                                }, e.options.animation))
                            })
                        }
                        drawEmpty() {
                            let t, e;
                            let i = this.startAngleRad,
                                s = this.endAngleRad,
                                r = this.options;
                            0 === this.total && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                                d: a.arc(t, e, this.center[2] / 2, 0, {
                                    start: i,
                                    end: s,
                                    innerR: this.center[3] / 2
                                })
                            }), this.chart.styledMode || this.graph.attr({
                                "stroke-width": r.borderWidth,
                                fill: r.fillColor || "none",
                                stroke: r.color || "#cccccc"
                            })) : this.graph && (this.graph = this.graph.destroy())
                        }
                        drawPoints() {
                            let t = this.chart.renderer;
                            this.points.forEach(function(e) {
                                e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                            })
                        }
                        generatePoints() {
                            super.generatePoints(), this.updateTotals()
                        }
                        getX(t, e, i, s) {
                            let r = this.center,
                                o = this.radii ? this.radii[i.index] || 0 : r[2] / 2,
                                n = s.dataLabelPosition,
                                a = n ? .distance || 0,
                                l = Math.asin(c((t - r[1]) / (o + a), -1, 1));
                            return r[0] + Math.cos(l) * (o + a) * (e ? -1 : 1) + (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
                        }
                        hasData() {
                            return !!this.processedXData.length
                        }
                        redrawPoints() {
                            let t, e, i, s;
                            let r = this,
                                o = r.chart;
                            this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(n) {
                                let a = {};
                                e = n.graphic, !n.isNull && e ? (s = n.shapeArgs, t = n.getTranslate(), o.styledMode || (i = r.pointAttribs(n, n.selected && "select")), n.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({
                                    "stroke-linejoin": "round"
                                }), n.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || g(!0, a, i), g(!0, a, s, t), e.animate(a)), e.attr({
                                    visibility: n.visible ? "inherit" : "hidden"
                                }), e.addClass(n.getClassName(), !0)) : e && (n.graphic = e.destroy())
                            })
                        }
                        sortByAngle(t, e) {
                            t.sort(function(t, i) {
                                return void 0 !== t.angle && (i.angle - t.angle) * e
                            })
                        }
                        translate(t) {
                            u(this, "translate"), this.generatePoints();
                            let e = this.options,
                                i = e.slicedOffset,
                                s = h(e.startAngle, e.endAngle),
                                r = this.startAngleRad = s.start,
                                o = (this.endAngleRad = s.end) - r,
                                n = this.points,
                                a = e.ignoreHiddenPoint,
                                l = n.length,
                                d, c, p, g, f, m, x, y = 0;
                            for (t || (this.center = t = this.getCenter()), m = 0; m < l; m++) {
                                x = n[m], d = r + y * o, x.isValid() && (!a || x.visible) && (y += x.percentage / 100), c = r + y * o;
                                let e = {
                                    x: t[0],
                                    y: t[1],
                                    r: t[2] / 2,
                                    innerR: t[3] / 2,
                                    start: Math.round(1e3 * d) / 1e3,
                                    end: Math.round(1e3 * c) / 1e3
                                };
                                x.shapeType = "arc", x.shapeArgs = e, (p = (c + d) / 2) > 1.5 * Math.PI ? p -= 2 * Math.PI : p < -Math.PI / 2 && (p += 2 * Math.PI), x.slicedTranslation = {
                                    translateX: Math.round(Math.cos(p) * i),
                                    translateY: Math.round(Math.sin(p) * i)
                                }, g = Math.cos(p) * t[2] / 2, f = Math.sin(p) * t[2] / 2, x.tooltipPos = [t[0] + .7 * g, t[1] + .7 * f], x.half = p < -Math.PI / 2 || p > Math.PI / 2 ? 1 : 0, x.angle = p
                            }
                            u(this, "afterTranslate")
                        }
                        updateTotals() {
                            let t = this.points,
                                e = t.length,
                                i = this.options.ignoreHiddenPoint,
                                s, r, o = 0;
                            for (s = 0; s < e; s++)(r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
                            for (s = 0, this.total = o; s < e; s++)(r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o
                        }
                    }
                    return m.defaultOptions = g(o.defaultOptions, r), p(m.prototype, {
                        axisTypes: [],
                        directTouch: !0,
                        drawGraph: void 0,
                        drawTracker: e.prototype.drawTracker,
                        getCenter: t.getCenter,
                        getSymbol: d,
                        invertible: !1,
                        isCartesian: !1,
                        noSharedTooltip: !0,
                        pointAttribs: e.prototype.pointAttribs,
                        pointClass: s,
                        requireSorting: !1,
                        searchPoint: d,
                        trackerGroups: ["group", "dataLabelsGroup"]
                    }), n.registerSeriesType("pie", m), m
                }), i(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t, e, i, s, r) {
                    var o;
                    let {
                        composed: n,
                        noop: a
                    } = e, {
                        distribute: l
                    } = i, {
                        series: h
                    } = s, {
                        arrayMax: d,
                        clamp: c,
                        defined: p,
                        pick: u,
                        pushUnique: g,
                        relativeLength: f
                    } = r;
                    return function(e) {
                        let i = {
                            radialDistributionY: function(t, e) {
                                return (e.dataLabelPosition ? .top || 0) + t.distributeBox.pos
                            },
                            radialDistributionX: function(t, e, i, s, r) {
                                let o = r.dataLabelPosition;
                                return t.getX(i < (o ? .top || 0) + 2 || i > (o ? .bottom || 0) - 2 ? s : i, e.half, e, r)
                            },
                            justify: function(t, e, i, s) {
                                return s[0] + (t.half ? -1 : 1) * (i + (e.dataLabelPosition ? .distance || 0))
                            },
                            alignToPlotEdges: function(t, e, i, s) {
                                let r = t.getBBox().width;
                                return e ? r + s : i - r - s
                            },
                            alignToConnectors: function(t, e, i, s) {
                                let r = 0,
                                    o;
                                return t.forEach(function(t) {
                                    (o = t.dataLabel.getBBox().width) > r && (r = o)
                                }), e ? r + s : i - r - s
                            }
                        };

                        function s(t, e) {
                            let {
                                center: i,
                                options: s
                            } = this, r = i[2] / 2, o = t.angle || 0, n = Math.cos(o), a = Math.sin(o), l = i[0] + n * r, h = i[1] + a * r, d = Math.min((s.slicedOffset || 0) + (s.borderWidth || 0), e / 5);
                            return {
                                natural: {
                                    x: l + n * e,
                                    y: h + a * e
                                },
                                computed: {},
                                alignment: e < 0 ? "center" : t.half ? "right" : "left",
                                connectorPosition: {
                                    breakAt: {
                                        x: l + n * d,
                                        y: h + a * d
                                    },
                                    touchingSliceAt: {
                                        x: l,
                                        y: h
                                    }
                                },
                                distance: e
                            }
                        }

                        function r() {
                            let t = this,
                                e = t.points,
                                i = t.chart,
                                s = i.plotWidth,
                                r = i.plotHeight,
                                o = i.plotLeft,
                                n = Math.round(i.chartWidth / 3),
                                a = t.center,
                                c = a[2] / 2,
                                g = a[1],
                                m = [
                                    [],
                                    []
                                ],
                                x = [0, 0, 0, 0],
                                y = t.dataLabelPositioners,
                                b, v, k, S = 0;
                            t.visible && t.hasDataLabels ? .() && (e.forEach(t => {
                                (t.dataLabels || []).forEach(t => {
                                    t.shortened && (t.attr({
                                        width: "auto"
                                    }).css({
                                        width: "auto",
                                        textOverflow: "clip"
                                    }), t.shortened = !1)
                                })
                            }), h.prototype.drawDataLabels.apply(t), e.forEach(t => {
                                (t.dataLabels || []).forEach((e, i) => {
                                    let s = a[2] / 2,
                                        r = e.options,
                                        o = f(r ? .distance || 0, s);
                                    0 === i && m[t.half].push(t), !p(r ? .style ? .width) && e.getBBox().width > n && (e.css({
                                        width: Math.round(.7 * n) + "px"
                                    }), e.shortened = !0), e.dataLabelPosition = this.getDataLabelPosition(t, o), S = Math.max(S, o)
                                })
                            }), m.forEach((e, n) => {
                                let h = e.length,
                                    d = [],
                                    f, m, b = 0,
                                    C;
                                h && (t.sortByAngle(e, n - .5), S > 0 && (f = Math.max(0, g - c - S), m = Math.min(g + c + S, i.plotHeight), e.forEach(t => {
                                    (t.dataLabels || []).forEach(e => {
                                        let s = e.dataLabelPosition;
                                        s && s.distance > 0 && (s.top = Math.max(0, g - c - s.distance), s.bottom = Math.min(g + c + s.distance, i.plotHeight), b = e.getBBox().height || 21, t.distributeBox = {
                                            target: (e.dataLabelPosition ? .natural.y || 0) - s.top + b / 2,
                                            size: b,
                                            rank: t.y
                                        }, d.push(t.distributeBox))
                                    })
                                }), l(d, C = m + b - f, C / 5)), e.forEach(i => {
                                    (i.dataLabels || []).forEach(l => {
                                        let h = l.options || {},
                                            g = i.distributeBox,
                                            f = l.dataLabelPosition,
                                            m = f ? .natural.y || 0,
                                            b = h.connectorPadding || 0,
                                            S = 0,
                                            C = m,
                                            M = "inherit";
                                        if (f) {
                                            if (d && p(g) && f.distance > 0 && (void 0 === g.pos ? M = "hidden" : (k = g.size, C = y.radialDistributionY(i, l))), h.justify) S = y.justify(i, l, c, a);
                                            else switch (h.alignTo) {
                                                case "connectors":
                                                    S = y.alignToConnectors(e, n, s, o);
                                                    break;
                                                case "plotEdges":
                                                    S = y.alignToPlotEdges(l, n, s, o);
                                                    break;
                                                default:
                                                    S = y.radialDistributionX(t, i, C, m, l)
                                            }
                                            if (f.attribs = {
                                                    visibility: M,
                                                    align: f.alignment
                                                }, f.posAttribs = {
                                                    x: S + (h.x || 0) + (({
                                                        left: b,
                                                        right: -b
                                                    })[f.alignment] || 0),
                                                    y: C + (h.y || 0) - l.getBBox().height / 2
                                                }, f.computed.x = S, f.computed.y = C, u(h.crop, !0)) {
                                                let t;
                                                S - (v = l.getBBox().width) < b && 1 === n ? (t = Math.round(v - S + b), x[3] = Math.max(t, x[3])) : S + v > s - b && 0 === n && (t = Math.round(S + v - s + b), x[1] = Math.max(t, x[1])), C - k / 2 < 0 ? x[0] = Math.max(Math.round(-C + k / 2), x[0]) : C + k / 2 > r && (x[2] = Math.max(Math.round(C + k / 2 - r), x[2])), f.sideOverflow = t
                                            }
                                        }
                                    })
                                }))
                            }), (0 === d(x) || this.verifyDataLabelOverflow(x)) && (this.placeDataLabels(), this.points.forEach(e => {
                                (e.dataLabels || []).forEach(s => {
                                    let {
                                        connectorColor: r,
                                        connectorWidth: o = 1
                                    } = s.options || {}, n = s.dataLabelPosition;
                                    if (o) {
                                        let a;
                                        b = s.connector, n && n.distance > 0 ? (a = !b, b || (s.connector = b = i.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e.colorIndex + (e.className ? " " + e.className : "")).add(t.dataLabelsGroup)), i.styledMode || b.attr({
                                            "stroke-width": o,
                                            stroke: r || e.color || "#666666"
                                        }), b[a ? "attr" : "animate"]({
                                            d: e.getConnectorPath(s)
                                        }), b.attr({
                                            visibility: n.attribs ? .visibility
                                        })) : b && (s.connector = b.destroy())
                                    }
                                })
                            })))
                        }

                        function o() {
                            this.points.forEach(t => {
                                (t.dataLabels || []).forEach(t => {
                                    let e = t.dataLabelPosition;
                                    e ? (e.sideOverflow && (t.css({
                                        width: Math.max(t.getBBox().width - e.sideOverflow, 0) + "px",
                                        textOverflow: (t.options ? .style || {}).textOverflow || "ellipsis"
                                    }), t.shortened = !0), t.attr(e.attribs), t[t.moved ? "animate" : "attr"](e.posAttribs), t.moved = !0) : t && t.attr({
                                        y: -9999
                                    })
                                }), delete t.distributeBox
                            }, this)
                        }

                        function m(t) {
                            let e = this.center,
                                i = this.options,
                                s = i.center,
                                r = i.minSize || 80,
                                o = r,
                                n = null !== i.size;
                            return !n && (null !== s[0] ? o = Math.max(e[2] - Math.max(t[1], t[3]), r) : (o = Math.max(e[2] - t[1] - t[3], r), e[0] += (t[3] - t[1]) / 2), null !== s[1] ? o = c(o, r, e[2] - Math.max(t[0], t[2])) : (o = c(o, r, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), o < e[2] ? (e[2] = o, e[3] = Math.min(i.thickness ? Math.max(0, o - 2 * i.thickness) : Math.max(0, f(i.innerSize || 0, o)), o), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : n = !0), n
                        }
                        e.compose = function(e) {
                            if (t.compose(h), g(n, "PieDataLabel")) {
                                let t = e.prototype;
                                t.dataLabelPositioners = i, t.alignDataLabel = a, t.drawDataLabels = r, t.getDataLabelPosition = s, t.placeDataLabels = o, t.verifyDataLabelOverflow = m
                            }
                        }
                    }(o || (o = {})), o
                }), i(e, "Extensions/OverlappingDataLabels.js", [e["Core/Utilities.js"]], function(t) {
                    let {
                        addEvent: e,
                        fireEvent: i,
                        objectEach: s,
                        pick: r
                    } = t;

                    function o(t) {
                        let e = t.length,
                            s = (t, e) => !(e.x >= t.x + t.width || e.x + e.width <= t.x || e.y >= t.y + t.height || e.y + e.height <= t.y),
                            r, o, a, l, h, d = !1;
                        for (let i = 0; i < e; i++)(r = t[i]) && (r.oldOpacity = r.opacity, r.newOpacity = 1, r.absoluteBox = function(t) {
                            if (t && (!t.alignAttr || t.placed)) {
                                let e = t.box ? 0 : t.padding || 0,
                                    i = t.alignAttr || {
                                        x: t.attr("x"),
                                        y: t.attr("y")
                                    },
                                    s = t.getBBox();
                                return t.width = s.width, t.height = s.height, {
                                    x: i.x + (t.parentGroup ? .translateX || 0) + e,
                                    y: i.y + (t.parentGroup ? .translateY || 0) + e,
                                    width: (t.width || 0) - 2 * e,
                                    height: (t.height || 0) - 2 * e
                                }
                            }
                        }(r));
                        t.sort((t, e) => (e.labelrank || 0) - (t.labelrank || 0));
                        for (let i = 0; i < e; ++i) {
                            l = (o = t[i]) && o.absoluteBox;
                            for (let r = i + 1; r < e; ++r) h = (a = t[r]) && a.absoluteBox, l && h && o !== a && 0 !== o.newOpacity && 0 !== a.newOpacity && "hidden" !== o.visibility && "hidden" !== a.visibility && s(l, h) && ((o.labelrank < a.labelrank ? o : a).newOpacity = 0)
                        }
                        for (let e of t) n(e, this) && (d = !0);
                        d && i(this, "afterHideAllOverlappingLabels")
                    }

                    function n(t, e) {
                        let s, r, o = !1;
                        return t && (r = t.newOpacity, t.oldOpacity !== r && (t.hasClass("highcharts-data-label") ? (t[r ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), s = function() {
                            e.styledMode || t.css({
                                pointerEvents: r ? "auto" : "none"
                            })
                        }, o = !0, t[t.isOld ? "animate" : "attr"]({
                            opacity: r
                        }, void 0, s), i(e, "afterHideOverlappingLabel")) : t.attr({
                            opacity: r
                        })), t.isOld = !0), o
                    }

                    function a() {
                        let t = this,
                            e = [];
                        for (let i of t.labelCollectors || []) e = e.concat(i());
                        for (let i of t.yAxis || []) i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && s(i.stacking.stacks, t => {
                            s(t, t => {
                                t.label && e.push(t.label)
                            })
                        });
                        for (let i of t.series || [])
                            if (i.visible && i.hasDataLabels ? .()) {
                                let s = i => {
                                    for (let s of i) s.visible && (s.dataLabels || []).forEach(i => {
                                        let o = i.options || {};
                                        i.labelrank = r(o.labelrank, s.labelrank, s.shapeArgs ? .height), o.allowOverlap ? ? Number(o.distance) > 0 ? (i.oldOpacity = i.opacity, i.newOpacity = 1, n(i, t)) : e.push(i)
                                    })
                                };
                                s(i.nodes || []), s(i.points)
                            }
                        this.hideOverlappingLabels(e)
                    }
                    return {
                        compose: function(t) {
                            let i = t.prototype;
                            i.hideOverlappingLabels || (i.hideOverlappingLabels = o, e(t, "render", a))
                        }
                    }
                }), i(e, "Extensions/BorderRadius.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t, e, i) {
                    let {
                        defaultOptions: s
                    } = t, {
                        noop: r
                    } = e, {
                        addEvent: o,
                        extend: n,
                        isObject: a,
                        merge: l,
                        relativeLength: h
                    } = i, d = {
                        radius: 0,
                        scope: "stack",
                        where: void 0
                    }, c = r, p = r;

                    function u(t, e, i, s, r = {}) {
                        let o = c(t, e, i, s, r),
                            {
                                innerR: n = 0,
                                r: a = i,
                                start: l = 0,
                                end: d = 0
                            } = r;
                        if (r.open || !r.borderRadius) return o;
                        let p = d - l,
                            u = Math.sin(p / 2),
                            g = Math.max(Math.min(h(r.borderRadius || 0, a - n), (a - n) / 2, a * u / (1 + u)), 0),
                            f = Math.min(g, p / Math.PI * 2 * n),
                            m = o.length - 1;
                        for (; m--;) ! function(t, e, i) {
                            let s, r, o;
                            let n = t[e],
                                a = t[e + 1];
                            if ("Z" === a[0] && (a = t[0]), ("M" === n[0] || "L" === n[0]) && "A" === a[0] ? (s = n, r = a, o = !0) : "A" === n[0] && ("M" === a[0] || "L" === a[0]) && (s = a, r = n), s && r && r.params) {
                                let n = r[1],
                                    a = r[5],
                                    l = r.params,
                                    {
                                        start: h,
                                        end: d,
                                        cx: c,
                                        cy: p
                                    } = l,
                                    u = a ? n - i : n + i,
                                    g = u ? Math.asin(i / u) : 0,
                                    f = a ? g : -g,
                                    m = Math.cos(g) * u;
                                o ? (l.start = h + f, s[1] = c + m * Math.cos(h), s[2] = p + m * Math.sin(h), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + n * Math.cos(l.start), p + n * Math.sin(l.start)])) : (l.end = d - f, r[6] = c + n * Math.cos(l.end), r[7] = p + n * Math.sin(l.end), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + m * Math.cos(d), p + m * Math.sin(d)])), r[4] = Math.abs(l.end - l.start) < Math.PI ? 0 : 1
                            }
                        }(o, m, m > 1 ? f : g);
                        return o
                    }

                    function g() {
                        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
                            let {
                                options: t,
                                yAxis: e
                            } = this, i = "percent" === t.stacking, r = s.plotOptions ? .[this.type] ? .borderRadius, o = f(t.borderRadius, a(r) ? r : {}), l = e.options.reversed;
                            for (let s of this.points) {
                                let {
                                    shapeArgs: r
                                } = s;
                                if ("roundedRect" === s.shapeType && r) {
                                    let {
                                        width: a = 0,
                                        height: d = 0,
                                        y: c = 0
                                    } = r, p = c, u = d;
                                    if ("stack" === o.scope && s.stackTotal) {
                                        let r = e.translate(i ? 100 : s.stackTotal, !1, !0, !1, !0),
                                            o = e.translate(t.threshold || 0, !1, !0, !1, !0),
                                            n = this.crispCol(0, Math.min(r, o), 0, Math.abs(r - o));
                                        p = n.y, u = n.height
                                    }
                                    let g = (s.negative ? -1 : 1) * (l ? -1 : 1) == -1,
                                        f = o.where;
                                    !f && this.is("waterfall") && Math.abs((s.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (f = "all"), f || (f = "end");
                                    let m = Math.min(h(o.radius, a), a / 2, "all" === f ? d / 2 : 1 / 0) || 0;
                                    "end" === f && (g && (p -= m), u += m), n(r, {
                                        brBoxHeight: u,
                                        brBoxY: p,
                                        r: m
                                    })
                                }
                            }
                        }
                    }

                    function f(t, e) {
                        return a(t) || (t = {
                            radius: t || 0
                        }), l(d, e, t)
                    }

                    function m() {
                        let t = f(this.options.borderRadius);
                        for (let e of this.points) {
                            let i = e.shapeArgs;
                            i && (i.borderRadius = h(t.radius, (i.r || 0) - (i.innerR || 0)))
                        }
                    }

                    function x(t, e, i, s, r = {}) {
                        let o = p(t, e, i, s, r),
                            {
                                r: n = 0,
                                brBoxHeight: a = s,
                                brBoxY: l = e
                            } = r,
                            h = e - l,
                            d = l + a - (e + s),
                            c = h - n > -.1 ? 0 : n,
                            u = d - n > -.1 ? 0 : n,
                            g = Math.max(c && h, 0),
                            f = Math.max(u && d, 0),
                            m = [t + c, e],
                            x = [t + i - c, e],
                            y = [t + i, e + c],
                            b = [t + i, e + s - u],
                            v = [t + i - u, e + s],
                            k = [t + u, e + s],
                            S = [t, e + s - u],
                            C = [t, e + c],
                            M = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
                        if (g) {
                            let t = M(c, c - g);
                            m[0] -= t, x[0] += t, y[1] = C[1] = e + c - g
                        }
                        if (s < c - g) {
                            let r = M(c, c - g - s);
                            y[0] = b[0] = t + i - c + r, v[0] = Math.min(y[0], v[0]), k[0] = Math.max(b[0], k[0]), S[0] = C[0] = t + c - r, y[1] = C[1] = e + s
                        }
                        if (f) {
                            let t = M(u, u - f);
                            v[0] += t, k[0] -= t, b[1] = S[1] = e + s - u + f
                        }
                        if (s < u - f) {
                            let r = M(u, u - f - s);
                            y[0] = b[0] = t + i - u + r, x[0] = Math.min(y[0], x[0]), m[0] = Math.max(b[0], m[0]), S[0] = C[0] = t + u - r, b[1] = S[1] = e
                        }
                        return o.length = 0, o.push(["M", ...m], ["L", ...x], ["A", c, c, 0, 0, 1, ...y], ["L", ...b], ["A", u, u, 0, 0, 1, ...v], ["L", ...k], ["A", u, u, 0, 0, 1, ...S], ["L", ...C], ["A", c, c, 0, 0, 1, ...m], ["Z"]), o
                    }
                    return {
                        compose: function(t, e, i) {
                            let s = t.types.pie;
                            if (!e.symbolCustomAttribs.includes("borderRadius")) {
                                let r = i.prototype.symbols;
                                o(t, "afterColumnTranslate", g, {
                                    order: 9
                                }), o(s, "afterTranslate", m), e.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), c = r.arc, p = r.roundedRect, r.arc = u, r.roundedRect = x
                            }
                        },
                        optionsToObject: f
                    }
                }), i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function(t) {
                    var e;
                    let {
                        diffObjects: i,
                        extend: s,
                        find: r,
                        merge: o,
                        pick: n,
                        uniqueKey: a
                    } = t;
                    return function(t) {
                        function e(t, e) {
                            let i = t.condition;
                            (i.callback || function() {
                                return this.chartWidth <= n(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= n(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= n(i.minWidth, 0) && this.chartHeight >= n(i.minHeight, 0)
                            }).call(this) && e.push(t._id)
                        }

                        function l(t, e) {
                            let s = this.options.responsive,
                                n = this.currentResponsive,
                                l = [],
                                h;
                            !e && s && s.rules && s.rules.forEach(t => {
                                void 0 === t._id && (t._id = a()), this.matchResponsiveRule(t, l)
                            }, this);
                            let d = o(...l.map(t => r((s || {}).rules || [], e => e._id === t)).map(t => t && t.chartOptions));
                            d.isResponsiveOptions = !0, l = l.toString() || void 0;
                            let c = n && n.ruleIds;
                            l !== c && (n && this.update(n.undoOptions, t, !0), l ? ((h = i(d, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
                                ruleIds: l,
                                mergedOptions: d,
                                undoOptions: h
                            }, this.update(d, t, !0)) : this.currentResponsive = void 0)
                        }
                        t.compose = function(t) {
                            let i = t.prototype;
                            return i.matchResponsiveRule || s(i, {
                                matchResponsiveRule: e,
                                setResponsive: l
                            }), t
                        }
                    }(e || (e = {})), e
                }), i(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Templating.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/Legend/Legend.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/Chart.js"], e["Extensions/ScrollablePlotArea.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Extensions/OverlappingDataLabels.js"], e["Extensions/BorderRadius.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function(t, e, i, s, r, o, n, a, l, h, d, c, p, u, g, f, m, x, y, b, v, k, S, C, M, w, A, T, P, L, O, E, D, j, I, B) {
                    return t.AST = o, t.Axis = p, t.Chart = S, t.Color = I, t.DataLabel = O, t.Fx = s, t.HTMLElement = c, t.Legend = v, t.LegendSymbol = k, t.OverlappingDataLabels = t.OverlappingDataLabels || E, t.PlotLineOrBand = f, t.Point = y, t.Pointer = b, t.RendererRegistry = a, t.Series = A, t.SeriesRegistry = T, t.StackItem = w, t.SVGElement = h, t.SVGRenderer = d, t.Templating = n, t.Tick = m, t.Time = B, t.Tooltip = x, t.animate = r.animate, t.animObject = r.animObject, t.chart = S.chart, t.color = I.parse, t.dateFormat = n.dateFormat, t.defaultOptions = i.defaultOptions, t.distribute = l.distribute, t.format = n.format, t.getDeferredAnimation = r.getDeferredAnimation, t.getOptions = i.getOptions, t.numberFormat = n.numberFormat, t.seriesType = T.seriesType, t.setAnimation = r.setAnimation, t.setOptions = i.setOptions, t.stop = r.stop, t.time = i.defaultTime, t.timers = s.timers, D.compose(t.Series, t.SVGElement, t.SVGRenderer), P.compose(t.Series.types.column), O.compose(t.Series), u.compose(t.Axis), c.compose(t.SVGRenderer), v.compose(t.Chart), g.compose(t.Axis), E.compose(t.Chart), L.compose(t.Series.types.pie), f.compose(t.Axis), b.compose(t.Chart), j.compose(t.Chart), C.compose(t.Axis, t.Chart, t.Series), M.compose(t.Axis, t.Chart, t.Series), x.compose(t.Pointer), e.extend(t, e), t
                }), e["masters/highcharts.src.js"]._modules = e, e["masters/highcharts.src.js"]
            }, t.exports ? (o.default = o, t.exports = r && r.document ? o(r) : o) : void 0 !== (s = (function() {
                return o(r)
            }).call(e, i, e, t)) && (t.exports = s)
        }
    }
]);
//# sourceMappingURL=ee7bdd82-abb73b9e3c30485c.js.map