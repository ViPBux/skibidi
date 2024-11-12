! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fde0b8d3-9dd2-4c34-a7da-2aaa1581b4e5", e._sentryDebugIdIdentifier = "sentry-dbid-fde0b8d3-9dd2-4c34-a7da-2aaa1581b4e5")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6666], {
        66666: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return eL
                }
            });
            var o, r, i, a, s, f = n(43980),
                p = n(29249),
                c = n(2784),
                l = n(52322),
                d = n(29797),
                u = n(59866),
                m = n(1960),
                h = n(60445),
                v = n(91295),
                y = n(42929),
                b = n(74610),
                g = n(75143),
                w = n(10091),
                x = "bottom",
                O = "right",
                P = "left",
                E = "auto",
                j = ["top", x, O, P],
                D = "start",
                R = "viewport",
                A = "popper",
                k = j.reduce(function(e, t) {
                    return e.concat([t + "-" + D, t + "-end"])
                }, []),
                M = [].concat(j, [E]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + D, t + "-end"])
                }, []),
                L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function T(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function W(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function _(e) {
                return e instanceof W(e).Element || e instanceof Element
            }

            function B(e) {
                return e instanceof W(e).HTMLElement || e instanceof HTMLElement
            }

            function S(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof W(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function H(e) {
                return e.split("-")[0]
            }
            var C = Math.max,
                I = Math.min,
                V = Math.round;

            function q() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function N() {
                return !/^((?!chrome|android).)*safari/i.test(q())
            }

            function U(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var o = e.getBoundingClientRect(),
                    r = 1,
                    i = 1;
                t && B(e) && (r = e.offsetWidth > 0 && V(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && V(o.height) / e.offsetHeight || 1);
                var a = (_(e) ? W(e) : window).visualViewport,
                    s = !N() && n,
                    f = (o.left + (s && a ? a.offsetLeft : 0)) / r,
                    p = (o.top + (s && a ? a.offsetTop : 0)) / i,
                    c = o.width / r,
                    l = o.height / i;
                return {
                    width: c,
                    height: l,
                    top: p,
                    right: f + c,
                    bottom: p + l,
                    left: f,
                    x: f,
                    y: p
                }
            }

            function F(e) {
                var t = U(e),
                    n = e.offsetWidth,
                    o = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: o
                }
            }

            function z(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && S(n)) {
                    var o = t;
                    do {
                        if (o && e.isSameNode(o)) return !0;
                        o = o.parentNode || o.host
                    } while (o)
                }
                return !1
            }

            function X(e) {
                return W(e).getComputedStyle(e)
            }

            function Y(e) {
                return ((_(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function G(e) {
                return "html" === T(e) ? e : e.assignedSlot || e.parentNode || (S(e) ? e.host : null) || Y(e)
            }

            function J(e) {
                return B(e) && "fixed" !== X(e).position ? e.offsetParent : null
            }

            function K(e) {
                for (var t = W(e), n = J(e); n && ["table", "td", "th"].indexOf(T(n)) >= 0 && "static" === X(n).position;) n = J(n);
                return n && ("html" === T(n) || "body" === T(n) && "static" === X(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(q());
                    if (/Trident/i.test(q()) && B(e) && "fixed" === X(e).position) return null;
                    var n = G(e);
                    for (S(n) && (n = n.host); B(n) && 0 > ["html", "body"].indexOf(T(n));) {
                        var o = X(n);
                        if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || t && "filter" === o.willChange || t && o.filter && "none" !== o.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }

            function Q(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function Z(e, t, n) {
                return C(e, I(t, n))
            }

            function $(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ee(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function et(e) {
                return e.split("-")[1]
            }
            var en = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function eo(e) {
                var t, n = e.popper,
                    o = e.popperRect,
                    r = e.placement,
                    i = e.variation,
                    a = e.offsets,
                    s = e.position,
                    f = e.gpuAcceleration,
                    p = e.adaptive,
                    c = e.roundOffsets,
                    l = e.isFixed,
                    d = a.x,
                    u = void 0 === d ? 0 : d,
                    m = a.y,
                    h = void 0 === m ? 0 : m,
                    v = "function" == typeof c ? c({
                        x: u,
                        y: h
                    }) : {
                        x: u,
                        y: h
                    };
                u = v.x, h = v.y;
                var y = a.hasOwnProperty("x"),
                    b = a.hasOwnProperty("y"),
                    g = P,
                    w = "top",
                    E = window;
                if (p) {
                    var j = K(n),
                        D = "clientHeight",
                        R = "clientWidth";
                    j === W(n) && "static" !== X(j = Y(n)).position && "absolute" === s && (D = "scrollHeight", R = "scrollWidth"), ("top" === r || (r === P || r === O) && "end" === i) && (w = x, h -= (l && j === E && E.visualViewport ? E.visualViewport.height : j[D]) - o.height, h *= f ? 1 : -1), (r === P || ("top" === r || r === x) && "end" === i) && (g = O, u -= (l && j === E && E.visualViewport ? E.visualViewport.width : j[R]) - o.width, u *= f ? 1 : -1)
                }
                var A, k, M, L, T, _, B = Object.assign({
                        position: s
                    }, p && en),
                    S = !0 === c ? (A = {
                        x: u,
                        y: h
                    }, k = W(n), M = A.x, L = A.y, {
                        x: V(M * (T = k.devicePixelRatio || 1)) / T || 0,
                        y: V(L * T) / T || 0
                    }) : {
                        x: u,
                        y: h
                    };
                return u = S.x, h = S.y, f ? Object.assign({}, B, ((_ = {})[w] = b ? "0" : "", _[g] = y ? "0" : "", _.transform = 1 >= (E.devicePixelRatio || 1) ? "translate(" + u + "px, " + h + "px)" : "translate3d(" + u + "px, " + h + "px, 0)", _)) : Object.assign({}, B, ((t = {})[w] = b ? h + "px" : "", t[g] = y ? u + "px" : "", t.transform = "", t))
            }
            var er = {
                    passive: !0
                },
                ei = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function ea(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return ei[e]
                })
            }
            var es = {
                start: "end",
                end: "start"
            };

            function ef(e) {
                return e.replace(/start|end/g, function(e) {
                    return es[e]
                })
            }

            function ep(e) {
                var t = W(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function ec(e) {
                return U(Y(e)).left + ep(e).scrollLeft
            }

            function el(e) {
                var t = X(e),
                    n = t.overflow,
                    o = t.overflowX,
                    r = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + r + o)
            }

            function ed(e, t) {
                void 0 === t && (t = []);
                var n, o = function e(t) {
                        return ["html", "body", "#document"].indexOf(T(t)) >= 0 ? t.ownerDocument.body : B(t) && el(t) ? t : e(G(t))
                    }(e),
                    r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = W(o),
                    a = r ? [i].concat(i.visualViewport || [], el(o) ? o : []) : o,
                    s = t.concat(a);
                return r ? s : s.concat(ed(G(a)))
            }

            function eu(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function em(e, t, n) {
                var o, r, i, a, s, f, p, c, l, d;
                return t === R ? eu(function(e, t) {
                    var n = W(e),
                        o = Y(e),
                        r = n.visualViewport,
                        i = o.clientWidth,
                        a = o.clientHeight,
                        s = 0,
                        f = 0;
                    if (r) {
                        i = r.width, a = r.height;
                        var p = N();
                        (p || !p && "fixed" === t) && (s = r.offsetLeft, f = r.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: s + ec(e),
                        y: f
                    }
                }(e, n)) : _(t) ? ((o = U(t, !1, "fixed" === n)).top = o.top + t.clientTop, o.left = o.left + t.clientLeft, o.bottom = o.top + t.clientHeight, o.right = o.left + t.clientWidth, o.width = t.clientWidth, o.height = t.clientHeight, o.x = o.left, o.y = o.top, o) : eu((r = Y(e), a = Y(r), s = ep(r), f = null == (i = r.ownerDocument) ? void 0 : i.body, p = C(a.scrollWidth, a.clientWidth, f ? f.scrollWidth : 0, f ? f.clientWidth : 0), c = C(a.scrollHeight, a.clientHeight, f ? f.scrollHeight : 0, f ? f.clientHeight : 0), l = -s.scrollLeft + ec(r), d = -s.scrollTop, "rtl" === X(f || a).direction && (l += C(a.clientWidth, f ? f.clientWidth : 0) - p), {
                    width: p,
                    height: c,
                    x: l,
                    y: d
                }))
            }

            function eh(e) {
                var t, n = e.reference,
                    o = e.element,
                    r = e.placement,
                    i = r ? H(r) : null,
                    a = r ? et(r) : null,
                    s = n.x + n.width / 2 - o.width / 2,
                    f = n.y + n.height / 2 - o.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - o.height
                        };
                        break;
                    case x:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case O:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case P:
                        t = {
                            x: n.x - o.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var p = i ? Q(i) : null;
                if (null != p) {
                    var c = "y" === p ? "height" : "width";
                    switch (a) {
                        case D:
                            t[p] = t[p] - (n[c] / 2 - o[c] / 2);
                            break;
                        case "end":
                            t[p] = t[p] + (n[c] / 2 - o[c] / 2)
                    }
                }
                return t
            }

            function ev(e, t) {
                void 0 === t && (t = {});
                var n, o, r, i, a, s, f, p, c = t,
                    l = c.placement,
                    d = void 0 === l ? e.placement : l,
                    u = c.strategy,
                    m = void 0 === u ? e.strategy : u,
                    h = c.boundary,
                    v = c.rootBoundary,
                    y = c.elementContext,
                    b = void 0 === y ? A : y,
                    g = c.altBoundary,
                    w = c.padding,
                    P = void 0 === w ? 0 : w,
                    E = $("number" != typeof P ? P : ee(P, j)),
                    D = e.rects.popper,
                    k = e.elements[void 0 !== g && g ? b === A ? "reference" : A : b],
                    M = (n = _(k) ? k : k.contextElement || Y(e.elements.popper), o = void 0 === h ? "clippingParents" : h, r = void 0 === v ? R : v, f = (s = [].concat("clippingParents" === o ? (i = ed(G(n)), _(a = ["absolute", "fixed"].indexOf(X(n).position) >= 0 && B(n) ? K(n) : n) ? i.filter(function(e) {
                        return _(e) && z(e, a) && "body" !== T(e)
                    }) : []) : [].concat(o), [r]))[0], (p = s.reduce(function(e, t) {
                        var o = em(n, t, m);
                        return e.top = C(o.top, e.top), e.right = I(o.right, e.right), e.bottom = I(o.bottom, e.bottom), e.left = C(o.left, e.left), e
                    }, em(n, f, m))).width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p),
                    L = U(e.elements.reference),
                    W = eh({
                        reference: L,
                        element: D,
                        strategy: "absolute",
                        placement: d
                    }),
                    S = eu(Object.assign({}, D, W)),
                    H = b === A ? S : L,
                    V = {
                        top: M.top - H.top + E.top,
                        bottom: H.bottom - M.bottom + E.bottom,
                        left: M.left - H.left + E.left,
                        right: H.right - M.right + E.right
                    },
                    q = e.modifiersData.offset;
                if (b === A && q) {
                    var N = q[d];
                    Object.keys(V).forEach(function(e) {
                        var t = [O, x].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", x].indexOf(e) >= 0 ? "y" : "x";
                        V[e] += N[n] * t
                    })
                }
                return V
            }

            function ey(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function eb(e) {
                return ["top", O, x, P].some(function(t) {
                    return e[t] >= 0
                })
            }
            var eg = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function ew() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var ex = (i = void 0 === (r = (o = {
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            o = e.options,
                            r = o.scroll,
                            i = void 0 === r || r,
                            a = o.resize,
                            s = void 0 === a || a,
                            f = W(t.elements.popper),
                            p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return i && p.forEach(function(e) {
                                e.addEventListener("scroll", n.update, er)
                            }), s && f.addEventListener("resize", n.update, er),
                            function() {
                                i && p.forEach(function(e) {
                                    e.removeEventListener("scroll", n.update, er)
                                }), s && f.removeEventListener("resize", n.update, er)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = eh({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = n.gpuAcceleration,
                            r = n.adaptive,
                            i = n.roundOffsets,
                            a = void 0 === i || i,
                            s = {
                                placement: H(t.placement),
                                variation: et(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: void 0 === o || o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, eo(Object.assign({}, s, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === r || r,
                            roundOffsets: a
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, eo(Object.assign({}, s, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: a
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var n = t.styles[e] || {},
                                o = t.attributes[e] || {},
                                r = t.elements[e];
                            B(r) && T(r) && (Object.assign(r.style, n), Object.keys(o).forEach(function(e) {
                                var t = o[e];
                                !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var o = t.elements[e],
                                        r = t.attributes[e] || {},
                                        i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    B(o) && T(o) && (Object.assign(o.style, i), Object.keys(r).forEach(function(e) {
                                        o.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                }, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.offset,
                            i = void 0 === r ? [0, 0] : r,
                            a = M.reduce(function(e, n) {
                                var o, r, a, s, f, p;
                                return e[n] = (o = t.rects, a = [P, "top"].indexOf(r = H(n)) >= 0 ? -1 : 1, f = (s = "function" == typeof i ? i(Object.assign({}, o, {
                                    placement: n
                                })) : i)[0], p = s[1], f = f || 0, p = (p || 0) * a, [P, O].indexOf(r) >= 0 ? {
                                    x: p,
                                    y: f
                                } : {
                                    x: f,
                                    y: p
                                }), e
                            }, {}),
                            s = a[t.placement],
                            f = s.x,
                            p = s.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += p), t.modifiersData[o] = a
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name;
                        if (!t.modifiersData[o]._skip) {
                            for (var r = n.mainAxis, i = void 0 === r || r, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, p = n.padding, c = n.boundary, l = n.rootBoundary, d = n.altBoundary, u = n.flipVariations, m = void 0 === u || u, h = n.allowedAutoPlacements, v = t.options.placement, y = H(v), b = f || (y !== v && m ? function(e) {
                                    if (H(e) === E) return [];
                                    var t = ea(e);
                                    return [ef(e), t, ef(t)]
                                }(v) : [ea(v)]), g = [v].concat(b).reduce(function(e, n) {
                                    var o, r, i, a, s, f, d, u, v, y, b, g;
                                    return e.concat(H(n) === E ? (r = (o = {
                                        placement: n,
                                        boundary: c,
                                        rootBoundary: l,
                                        padding: p,
                                        flipVariations: m,
                                        allowedAutoPlacements: h
                                    }).placement, i = o.boundary, a = o.rootBoundary, s = o.padding, f = o.flipVariations, u = void 0 === (d = o.allowedAutoPlacements) ? M : d, 0 === (b = (y = (v = et(r)) ? f ? k : k.filter(function(e) {
                                        return et(e) === v
                                    }) : j).filter(function(e) {
                                        return u.indexOf(e) >= 0
                                    })).length && (b = y), Object.keys(g = b.reduce(function(e, n) {
                                        return e[n] = ev(t, {
                                            placement: n,
                                            boundary: i,
                                            rootBoundary: a,
                                            padding: s
                                        })[H(n)], e
                                    }, {})).sort(function(e, t) {
                                        return g[e] - g[t]
                                    })) : n)
                                }, []), w = t.rects.reference, R = t.rects.popper, A = new Map, L = !0, T = g[0], W = 0; W < g.length; W++) {
                                var _ = g[W],
                                    B = H(_),
                                    S = et(_) === D,
                                    C = ["top", x].indexOf(B) >= 0,
                                    I = C ? "width" : "height",
                                    V = ev(t, {
                                        placement: _,
                                        boundary: c,
                                        rootBoundary: l,
                                        altBoundary: d,
                                        padding: p
                                    }),
                                    q = C ? S ? O : P : S ? x : "top";
                                w[I] > R[I] && (q = ea(q));
                                var N = ea(q),
                                    U = [];
                                if (i && U.push(V[B] <= 0), s && U.push(V[q] <= 0, V[N] <= 0), U.every(function(e) {
                                        return e
                                    })) {
                                    T = _, L = !1;
                                    break
                                }
                                A.set(_, U)
                            }
                            if (L)
                                for (var F = function(e) {
                                        var t = g.find(function(t) {
                                            var n = A.get(t);
                                            if (n) return n.slice(0, e).every(function(e) {
                                                return e
                                            })
                                        });
                                        if (t) return T = t, "break"
                                    }, z = m ? 3 : 1; z > 0 && "break" !== F(z); z--);
                            t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.mainAxis,
                            i = n.altAxis,
                            a = n.boundary,
                            s = n.rootBoundary,
                            f = n.altBoundary,
                            p = n.padding,
                            c = n.tether,
                            l = void 0 === c || c,
                            d = n.tetherOffset,
                            u = void 0 === d ? 0 : d,
                            m = ev(t, {
                                boundary: a,
                                rootBoundary: s,
                                padding: p,
                                altBoundary: f
                            }),
                            h = H(t.placement),
                            v = et(t.placement),
                            y = !v,
                            b = Q(h),
                            g = "x" === b ? "y" : "x",
                            w = t.modifiersData.popperOffsets,
                            E = t.rects.reference,
                            j = t.rects.popper,
                            R = "function" == typeof u ? u(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : u,
                            A = "number" == typeof R ? {
                                mainAxis: R,
                                altAxis: R
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, R),
                            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            M = {
                                x: 0,
                                y: 0
                            };
                        if (w) {
                            if (void 0 === r || r) {
                                var L, T = "y" === b ? "top" : P,
                                    W = "y" === b ? x : O,
                                    _ = "y" === b ? "height" : "width",
                                    B = w[b],
                                    S = B + m[T],
                                    V = B - m[W],
                                    q = l ? -j[_] / 2 : 0,
                                    N = v === D ? E[_] : j[_],
                                    U = v === D ? -j[_] : -E[_],
                                    z = t.elements.arrow,
                                    X = l && z ? F(z) : {
                                        width: 0,
                                        height: 0
                                    },
                                    Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    G = Y[T],
                                    J = Y[W],
                                    $ = Z(0, E[_], X[_]),
                                    ee = y ? E[_] / 2 - q - $ - G - A.mainAxis : N - $ - G - A.mainAxis,
                                    en = y ? -E[_] / 2 + q + $ + J + A.mainAxis : U + $ + J + A.mainAxis,
                                    eo = t.elements.arrow && K(t.elements.arrow),
                                    er = eo ? "y" === b ? eo.clientTop || 0 : eo.clientLeft || 0 : 0,
                                    ei = null != (L = null == k ? void 0 : k[b]) ? L : 0,
                                    ea = Z(l ? I(S, B + ee - ei - er) : S, B, l ? C(V, B + en - ei) : V);
                                w[b] = ea, M[b] = ea - B
                            }
                            if (void 0 !== i && i) {
                                var es, ef, ep = "x" === b ? "top" : P,
                                    ec = "x" === b ? x : O,
                                    el = w[g],
                                    ed = "y" === g ? "height" : "width",
                                    eu = el + m[ep],
                                    em = el - m[ec],
                                    eh = -1 !== ["top", P].indexOf(h),
                                    ey = null != (ef = null == k ? void 0 : k[g]) ? ef : 0,
                                    eb = eh ? eu : el - E[ed] - j[ed] - ey + A.altAxis,
                                    eg = eh ? el + E[ed] + j[ed] - ey - A.altAxis : em,
                                    ew = l && eh ? (es = Z(eb, el, eg)) > eg ? eg : es : Z(l ? eb : eu, el, l ? eg : em);
                                w[g] = ew, M[g] = ew - el
                            }
                            t.modifiersData[o] = M
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t, n = e.state,
                            o = e.name,
                            r = e.options,
                            i = n.elements.arrow,
                            a = n.modifiersData.popperOffsets,
                            s = H(n.placement),
                            f = Q(s),
                            p = [P, O].indexOf(s) >= 0 ? "height" : "width";
                        if (i && a) {
                            var c, l = $("number" != typeof(c = "function" == typeof(c = r.padding) ? c(Object.assign({}, n.rects, {
                                    placement: n.placement
                                })) : c) ? c : ee(c, j)),
                                d = F(i),
                                u = "y" === f ? "top" : P,
                                m = "y" === f ? x : O,
                                h = n.rects.reference[p] + n.rects.reference[f] - a[f] - n.rects.popper[p],
                                v = a[f] - n.rects.reference[f],
                                y = K(i),
                                b = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                                g = l[u],
                                w = b - d[p] - l[m],
                                E = b / 2 - d[p] / 2 + (h / 2 - v / 2),
                                D = Z(g, E, w);
                            n.modifiersData[o] = ((t = {})[f] = D, t.centerOffset = D - E, t)
                        }
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = e.options.element,
                            o = void 0 === n ? "[data-popper-arrow]" : n;
                        null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && z(t.elements.popper, o) && (t.elements.arrow = o)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            o = t.rects.reference,
                            r = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = ev(t, {
                                elementContext: "reference"
                            }),
                            s = ev(t, {
                                altBoundary: !0
                            }),
                            f = ey(a, o),
                            p = ey(s, r, i),
                            c = eb(f),
                            l = eb(p);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: f,
                            popperEscapeOffsets: p,
                            isReferenceHidden: c,
                            hasPopperEscaped: l
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": l
                        })
                    }
                }]
            }).defaultModifiers) ? [] : r, s = void 0 === (a = o.defaultOptions) ? eg : a, function(e, t, n) {
                void 0 === n && (n = s);
                var o, r, a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, eg, s),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    f = [],
                    p = !1,
                    c = {
                        state: a,
                        setOptions: function(n) {
                            var o, r, p, d, u, m = "function" == typeof n ? n(a.options) : n;
                            l(), a.options = Object.assign({}, s, a.options, m), a.scrollParents = {
                                reference: _(e) ? ed(e) : e.contextElement ? ed(e.contextElement) : [],
                                popper: ed(t)
                            };
                            var h = (r = Object.keys(o = [].concat(i, a.options.modifiers).reduce(function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }, {})).map(function(e) {
                                return o[e]
                            }), p = new Map, d = new Set, u = [], r.forEach(function(e) {
                                p.set(e.name, e)
                            }), r.forEach(function(e) {
                                d.has(e.name) || function e(t) {
                                    d.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                        if (!d.has(t)) {
                                            var n = p.get(t);
                                            n && e(n)
                                        }
                                    }), u.push(t)
                                }(e)
                            }), L.reduce(function(e, t) {
                                return e.concat(u.filter(function(e) {
                                    return e.phase === t
                                }))
                            }, []));
                            return a.orderedModifiers = h.filter(function(e) {
                                return e.enabled
                            }), a.orderedModifiers.forEach(function(e) {
                                var t = e.name,
                                    n = e.options,
                                    o = e.effect;
                                if ("function" == typeof o) {
                                    var r = o({
                                        state: a,
                                        name: t,
                                        instance: c,
                                        options: void 0 === n ? {} : n
                                    });
                                    f.push(r || function() {})
                                }
                            }), c.update()
                        },
                        forceUpdate: function() {
                            if (!p) {
                                var e = a.elements,
                                    t = e.reference,
                                    n = e.popper;
                                if (ew(t, n)) {
                                    a.rects = {
                                        reference: (o = K(n), r = "fixed" === a.options.strategy, l = B(o), d = B(o) && (s = V((i = o.getBoundingClientRect()).width) / o.offsetWidth || 1, f = V(i.height) / o.offsetHeight || 1, 1 !== s || 1 !== f), u = Y(o), m = U(t, d, r), h = {
                                            scrollLeft: 0,
                                            scrollTop: 0
                                        }, v = {
                                            x: 0,
                                            y: 0
                                        }, (l || !l && !r) && (("body" !== T(o) || el(u)) && (h = o !== W(o) && B(o) ? {
                                            scrollLeft: o.scrollLeft,
                                            scrollTop: o.scrollTop
                                        } : ep(o)), B(o) ? ((v = U(o, !0)).x += o.clientLeft, v.y += o.clientTop) : u && (v.x = ec(u))), {
                                            x: m.left + h.scrollLeft - v.x,
                                            y: m.top + h.scrollTop - v.y,
                                            width: m.width,
                                            height: m.height
                                        }),
                                        popper: F(n)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(e) {
                                        return a.modifiersData[e.name] = Object.assign({}, e.data)
                                    });
                                    for (var o, r, i, s, f, l, d, u, m, h, v, y = 0; y < a.orderedModifiers.length; y++)
                                        if (!0 !== a.reset) {
                                            var b = a.orderedModifiers[y],
                                                g = b.fn,
                                                w = b.options,
                                                x = void 0 === w ? {} : w,
                                                O = b.name;
                                            "function" == typeof g && (a = g({
                                                state: a,
                                                options: x,
                                                name: O,
                                                instance: c
                                            }) || a)
                                        } else a.reset = !1, y = -1
                                }
                            }
                        },
                        update: (o = function() {
                            return new Promise(function(e) {
                                c.forceUpdate(), e(a)
                            })
                        }, function() {
                            return r || (r = new Promise(function(e) {
                                Promise.resolve().then(function() {
                                    r = void 0, e(o())
                                })
                            })), r
                        }),
                        destroy: function() {
                            l(), p = !0
                        }
                    };
                if (!ew(e, t)) return c;

                function l() {
                    f.forEach(function(e) {
                        return e()
                    }), f = []
                }
                return c.setOptions(n).then(function(e) {
                    !p && n.onFirstUpdate && n.onFirstUpdate(e)
                }), c
            });

            function eO(e) {
                return (0, p.g)("MuiPopper", e)
            }(0, u.g)("MuiPopper", ["root"]);
            let eP = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"],
                eE = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

            function ej(e) {
                return "function" == typeof e ? e() : e
            }
            let eD = {},
                eR = c.forwardRef(function(e, t) {
                    var n;
                    let {
                        anchorEl: o,
                        children: r,
                        component: i,
                        direction: a,
                        disablePortal: s,
                        modifiers: u,
                        open: h,
                        ownerState: g,
                        placement: w,
                        popperOptions: x,
                        popperRef: O,
                        slotProps: P = {},
                        slots: E = {},
                        TransitionProps: j
                    } = e, D = (0, p._)(e, eP), R = c.useRef(null), A = (0, v.u)(R, t), k = c.useRef(null), M = (0, v.u)(k, O), L = c.useRef(M);
                    (0, y.u)(() => {
                        L.current = M
                    }, [M]), c.useImperativeHandle(O, () => k.current, []);
                    let T = function(e, t) {
                            if ("ltr" === t) return e;
                            switch (e) {
                                case "bottom-end":
                                    return "bottom-start";
                                case "bottom-start":
                                    return "bottom-end";
                                case "top-end":
                                    return "top-start";
                                case "top-start":
                                    return "top-end";
                                default:
                                    return e
                            }
                        }(w, a),
                        [W, _] = c.useState(T),
                        [B, S] = c.useState(ej(o));
                    c.useEffect(() => {
                        k.current && k.current.forceUpdate()
                    }), c.useEffect(() => {
                        o && S(ej(o))
                    }, [o]), (0, y.u)(() => {
                        if (!B || !h) return;
                        let e = [{
                            name: "preventOverflow",
                            options: {
                                altBoundary: s
                            }
                        }, {
                            name: "flip",
                            options: {
                                altBoundary: s
                            }
                        }, {
                            name: "onUpdate",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: ({
                                state: e
                            }) => {
                                _(e.placement)
                            }
                        }];
                        null != u && (e = e.concat(u)), x && null != x.modifiers && (e = e.concat(x.modifiers));
                        let t = ex(B, R.current, (0, f._)({
                            placement: T
                        }, x, {
                            modifiers: e
                        }));
                        return L.current(t), () => {
                            t.destroy(), L.current(null)
                        }
                    }, [B, s, u, h, x, T]);
                    let H = {
                        placement: W
                    };
                    null !== j && (H.TransitionProps = j);
                    let C = (0, d.a)({
                            root: ["root"]
                        }, (0, m.u)(eO)),
                        I = null != (n = null != i ? i : E.root) ? n : "div",
                        V = (0, b.u)({
                            elementType: I,
                            externalSlotProps: P.root,
                            externalForwardedProps: D,
                            additionalProps: {
                                role: "tooltip",
                                ref: A
                            },
                            ownerState: (0, f._)({}, e, g),
                            className: C.root
                        });
                    return (0, l.jsx)(I, (0, f._)({}, V, {
                        children: "function" == typeof r ? r(H) : r
                    }))
                }),
                eA = c.forwardRef(function(e, t) {
                    let n;
                    let {
                        anchorEl: o,
                        children: r,
                        container: i,
                        direction: a = "ltr",
                        disablePortal: s = !1,
                        keepMounted: d = !1,
                        modifiers: u,
                        open: v,
                        placement: y = "bottom",
                        popperOptions: b = eD,
                        popperRef: g,
                        style: w,
                        transition: x = !1,
                        slotProps: O = {},
                        slots: P = {}
                    } = e, E = (0, p._)(e, eE), [j, D] = c.useState(!0);
                    if (!d && !v && (!x || j)) return null;
                    if (i) n = i;
                    else if (o) {
                        let e = ej(o);
                        n = e && void 0 !== e.nodeType ? (0, h.o)(e).body : (0, h.o)(null).body
                    }
                    let R = x ? { in: v,
                        onEnter: () => {
                            D(!1)
                        },
                        onExited: () => {
                            D(!0)
                        }
                    } : void 0;
                    return (0, l.jsx)(m.P, {
                        disablePortal: s,
                        container: n,
                        children: (0, l.jsx)(eR, (0, f._)({
                            anchorEl: o,
                            direction: a,
                            disablePortal: s,
                            modifiers: u,
                            ref: t,
                            open: x ? !j : v,
                            placement: y,
                            popperOptions: b,
                            popperRef: g,
                            slotProps: O,
                            slots: P
                        }, E, {
                            style: (0, f._)({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                display: v || !d || x && !j ? void 0 : "none"
                            }, w),
                            TransitionProps: R,
                            children: r
                        }))
                    })
                }),
                ek = ["components", "componentsProps", "slots", "slotProps"],
                eM = (0, d.s)(eA, {
                    name: "MuiPopper",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({});
            var eL = c.forwardRef(function(e, t) {
                var n;
                let o = (0, g.u)(),
                    r = (0, w.u)({
                        props: e,
                        name: "MuiPopper"
                    }),
                    {
                        components: i,
                        componentsProps: a,
                        slots: s,
                        slotProps: c
                    } = r,
                    d = (0, p._)(r, ek),
                    u = null != (n = null == s ? void 0 : s.root) ? n : null == i ? void 0 : i.Root;
                return (0, l.jsx)(eM, (0, f._)({
                    direction: null == o ? void 0 : o.direction,
                    slots: {
                        root: u
                    },
                    slotProps: null != c ? c : a
                }, d, {
                    ref: t
                }))
            })
        }
    }
]);
//# sourceMappingURL=6666-aae956902bf61c1e.js.map