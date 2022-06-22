
(() => {
    var e = {
            904: (e, t, a) => {
                "use strict";
                a.r(t)
            }
        },
        t = {};

    function a(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, a), r.exports
    }
    a.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a(904),
        function(e) {
            function t(t) {
                for (var n, c, i = t[0], l = t[1], s = t[2], u = 0, p = []; u < i.length; u++) c = i[u], Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]), o[c] = 0;
                for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                for (d && d(t); p.length;) p.shift()();
                return r.push.apply(r, s || []), a()
            }

            function a() {
                for (var e, t = 0; t < r.length; t++) {
                    for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
                        var l = a[i];
                        0 !== o[l] && (n = !1)
                    }
                    n && (r.splice(t--, 1), e = c(c.s = a[0]))
                }
                return e
            }
            var n = {},
                o = {
                    app: 0
                },
                r = [];

            function c(t) {
                if (n[t]) return n[t].exports;
                var a = n[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
            }
            c.m = e, c.c = n, c.d = function(e, t, a) {
                c.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                })
            }, c.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, c.t = function(e, t) {
                if (1 & t && (e = c(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var a = Object.create(null);
                if (c.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var n in e) c.d(a, n, function(t) {
                        return e[t]
                    }.bind(null, n));
                return a
            }, c.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return c.d(t, "a", t), t
            }, c.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, c.p = "/";
            var i = window.webpackJsonp = window.webpackJsonp || [],
                l = i.push.bind(i);
            i.push = t, i = i.slice();
            for (var s = 0; s < i.length; s++) t(i[s]);
            var d = l;
            r.push([0, "chunk-vendors"]), a()
        }({
            0: function(e, t, a) {
                e.exports = a("56d7")
            },
            "1f4e": function(e, t, a) {},
            "3f29": function(e, t, a) {},
            "46b2": function(e, t, a) {
                "use strict";
                a("6ee5")
            },
            "4c74": function(e, t, a) {
                "use strict";
                a("f98f")
            },
            "56d7": function(e, t, a) {
                "use strict";
                a.r(t), a("e260"), a("e6cf"), a("cca6"), a("a79d");
                var n = a("7a23"),
                    o = a("cf05"),
                    r = a.n(o),
                    c = {
                        id: "app"
                    },
                    i = Object(n.createElementVNode)("img", {
                        class: "title",
                        src: r.a,
                        alt: "LKCSS MEME"
                    }, null, -1),
                    l = a("1da1");

                function s(e) {
                    for (var t = e + "=", a = decodeURIComponent(document.cookie).split(";"), n = 0; n < a.length; n++) {
                        for (var o = a[n];
                            " " === o.charAt(0);) o = o.substring(1);
                        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                    }
                    return ""
                }

                function d(e, t, a) {
                    var n = new Date;
                    n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
                    var o = "expires=" + n.toUTCString();
                    document.cookie = e + "=" + t + ";" + o + ";path=/"
                }
                a("96cf"), a("38cf"), a("ac1f"), a("99af"), a("1276");
                var u = {
                    props: ["open", "counter", "bot"],
                    computed: {
                        displayCount: function() {
                            return this.counter > 0 ? this.counter : ""
                        }
                    },
                    data: function() {
                        return {
                            counterRotation: "c"
                        }
                    },
                    watch: {
                        counter: function() {
                            var e = ["l", "r", "c", "ll", "rr"];
                            this.counterRotation = e[Math.floor(Math.random() * e.length)]
                        }
                    },
                    mounted: function() {
                        (new Image).src = a("a7f9")
                    }
                };
                a("b92e"), u.render = function(e, t, a, o, r, c) {
                    return Object(n.openBlock)(), Object(n.createElementBlock)("div", {
                        class: Object(n.normalizeClass)(["cat-img", {
                            p: !a.open,
                            op: a.open,
                            bot: a.bot
                        }])
                    }, [Object(n.createVNode)(n.Transition, {
                        name: "pop-out",
                        mode: "out-in"
                    }, {
                        default: Object(n.withCtx)((function() {
                            return [(Object(n.openBlock)(), Object(n.createElementBlock)("div", {
                                key: c.displayCount,
                                class: Object(n.normalizeClass)("counter rot-".concat(r.counterRotation))
                            }, Object(n.toDisplayString)(c.displayCount.toLocaleString("en")), 3))]
                        })),
                        _: 1
                    })], 2)
                };
                var p = u;
                Object(n.pushScopeId)("data-v-7dfcdf8a");
                var b = Object(n.createElementVNode)("h1", null, "🏆", -1),
                    f = {
                        class: "preview"
                    },
                    h = {
                        key: 0,
                        class: "top-three"
                    },
                    m = {
                        class: "position"
                    },
                    v = {
                        class: "count"
                    },
                    O = {
                        key: 1,
                        class: "top-three"
                    },
                    g = {
                        class: "top-entry"
                    },
                    j = Object(n.createElementVNode)("span", {
                        class: "position"
                    }, "#1", -1),
                    C = {
                        class: "count"
                    },
                    w = Object(n.createElementVNode)("span", {
                        class: "ellipsis"
                    }, "...", -1),
                    S = {
                        class: "top-entry mine"
                    },
                    y = {
                        class: "count"
                    },
                    B = {
                        key: 2
                    },
                    N = Object(n.createElementVNode)("button", {
                        class: "show"
                    }, [Object(n.createElementVNode)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    }, [Object(n.createElementVNode)("path", {
                        "fill-rule": "evenodd",
                        d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    })])], -1),
                    k = {
                        class: "main-wrap"
                    },
                    M = {
                        key: 0,
                        class: "list"
                    },
                    E = Object(n.createElementVNode)("span", {
                        class: "position"
                    }, "🌍", -1),
                    P = Object(n.createElementVNode)("span", {
                        class: "country"
                    }, "Worldwide", -1),
                    T = {
                        class: "count",
                        translate: "no"
                    },
                    I = {
                        key: 0,
                        class: "delta notranslate",
                        translate: "no"
                    },
                    A = {
                        class: "position"
                    },
                    V = {
                        class: "count",
                        translate: "no"
                    },
                    G = {
                        key: 0,
                        class: "delta notranslate",
                        translate: "no"
                    },
                    L = {
                        key: 1
                    },
                    D = Object(n.createStaticVNode)('<div class="leaderboard-key" data-v-7dfcdf8a>PPS = Pops Per Second</div><div class="authors" data-v-7dfcdf8a>For feedback please contact <a href="https://google.com/error" data-v-7dfcdf8a target="_blank">anonymous</a>.</div><div class="recaptcha-notice" data-v-7dfcdf8a> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" data-v-7dfcdf8a>Privacy Policy</a> and <a href="https://policies.google.com/terms" data-v-7dfcdf8a>Terms of Service</a> apply. </div><div class="authors" data-v-7dfcdf8a>made by anonymous</div>', 3);
                Object(n.popScopeId)();
                var x = a("b85c");
                a("fb6a"), a("159b"), a("d3b7"), a("4e82"), a("4de4"), Object(n.pushScopeId)("data-v-8bb3fe7e");
                var _ = ["title", "aria-label"],
                    U = {
                        key: 1,
                        class: "flag flag:NP",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 16"
                    },
                    F = [Object(n.createStaticVNode)('<defs data-v-8bb3fe7e></defs><defs data-v-8bb3fe7e><filter id="a" width="173%" height="160%" x="-36.5%" y="-30%" filterUnits="objectBoundingBox" data-v-8bb3fe7e><feOffset in="SourceAlpha" result="shadowOffsetOuter1" data-v-8bb3fe7e></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.6" data-v-8bb3fe7e></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.423529412 0 0 0 0 0.458823529 0 0 0 0 0.490196078 0 0 0 0.5 0" data-v-8bb3fe7e></feColorMatrix></filter><path id="b" d="M0 16V0l13.14 8.19H4.11l8.6 7.81z" data-v-8bb3fe7e></path></defs><g fill="none" data-v-8bb3fe7e><path d="M0 0h24v16H0z" data-v-8bb3fe7e></path><use fill="#000" filter="url(#a)" href="#b" data-v-8bb3fe7e></use><use fill="#0052B4" href="#b" data-v-8bb3fe7e></use><path fill="#D80027" d="M11.47 7.71L.48.86v14.66h10.99l-8.6-7.81z" data-v-8bb3fe7e></path><g fill="#FFF" data-v-8bb3fe7e><path d="M4.6 11.2l-.69-.31.36-.67-.74.15-.1-.75-.51.55-.52-.55-.1.75-.73-.15.36.67-.68.32.68.32-.36.66.74-.14.1.75.51-.55.52.55.1-.75.73.14-.36-.66.68-.32zm-.46-6.22l-.5-.23.26-.48-.54.1-.06-.54-.38.4-.38-.4-.06.54-.55-.1.27.48-.5.23 1.22.25 1.22-.25zM4.38 4.98a1.46 1.46 0 11-2.92 0" data-v-8bb3fe7e></path></g></g>', 3)];
                Object(n.popScopeId)();
                var R = a("85fc"),
                    K = {
                        props: ["code"],
                        methods: {
                            getLabel: function(e) {
                                var t = R[e] || e;
                                return "Flag of ".concat(t)
                            }
                        }
                    };
                a("6ad7"), a("4c74"), K.render = function(e, t, a, o, r, c) {
                    return "NP" != a.code ? (Object(n.openBlock)(), Object(n.createElementBlock)("div", {
                        key: 0,
                        class: Object(n.normalizeClass)("flag flag:".concat(a.code)),
                        title: c.getLabel(a.code),
                        "aria-label": c.getLabel(a.code)
                    }, null, 10, _)) : (Object(n.openBlock)(), Object(n.createElementBlock)("svg", U, F))
                }, K.__scopeId = "data-v-8bb3fe7e";
                var H = K;
                Object(n.pushScopeId)("data-v-65cd9dae");
                var z = {
                        class: "animated-number"
                    },
                    Z = {
                        key: 1
                    };
                Object(n.popScopeId)(), a("a9e3");
                var J = {
                    props: {
                        value: {
                            type: Number,
                            required: !0
                        },
                        duration: {
                            type: Number,
                            required: !1,
                            default: 5e3
                        },
                        enabled: {
                            type: Boolean,
                            default: !0,
                            required: !1
                        },
                        pop: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            tweeningValue: this.value
                        }
                    },
                    watch: {
                        value: function(e, t) {
                            this.enabled && t < e && 0 !== t ? this.tween(t, e) : this.tweeningValue = e
                        }
                    },
                    methods: {
                        tween: function(e, t) {
                            var a = this,
                                n = Date.now();
                            ! function o() {
                                if (t === a.value) {
                                    var r = (Date.now() - n) / a.duration;
                                    if (r >= 1 || !a.enabled) a.tweeningValue = t;
                                    else {
                                        var c = Math.round(e + (t - e) * r);
                                        c !== a.tweeningValue && (a.tweeningValue = c), requestAnimationFrame(o)
                                    }
                                }
                            }()
                        }
                    }
                };
                a("64ba"), J.render = function(e, t, a, o, r, c) {
                    return Object(n.openBlock)(), Object(n.createElementBlock)("span", z, [a.pop ? (Object(n.openBlock)(), Object(n.createBlock)(n.Transition, {
                        key: 0,
                        name: "number-punch",
                        mode: "out-in"
                    }, {
                        default: Object(n.withCtx)((function() {
                            return [(Object(n.openBlock)(), Object(n.createElementBlock)("span", {
                                class: "anim",
                                key: r.tweeningValue.toLocaleString("en")
                            }, Object(n.toDisplayString)(r.tweeningValue.toLocaleString("en")), 1))]
                        })),
                        _: 1
                    })) : (Object(n.openBlock)(), Object(n.createElementBlock)("span", Z, Object(n.toDisplayString)(r.tweeningValue.toLocaleString("en")), 1))])
                }, J.__scopeId = "data-v-65cd9dae";
                var W = J,
                    q = a("cae7"),
                    Y = a.n(q),
                    Q = a("3835"),
                    X = (a("4fad"), a("bc3a")),
                    $ = a.n(X),
                    ee = {
                        load: function(e) {
                            return new Promise((function(t, a) {
                                $.a.get(e).then((function(e) {
                                    200 !== e.status && a(new Error(e.status));
                                    var n = e.data;
                                    if (n.Countries) t(n.Countries);
                                    else if (n.GB || n.IE || null != n.US || n.JP) {
                                        for (var o = [], r = 0, c = Object.entries(n); r < c.length; r++) {
                                            var i = Object(Q.a)(c[r], 2),
                                                l = i[0],
                                                s = i[1],
                                                d = R[l];
                                            d && s > 0 && "ZZ" != l && o.push({
                                                Name: d,
                                                Code: l,
                                                Pops: s
                                            })
                                        }
                                        t(o)
                                    } else a(new Error("Leaderboard API response does not match expected format."))
                                })).catch((function(e) {
                                    a(e)
                                }))
                            }))
                        }
                    },
                    te = {
                        components: {
                            Flag: H,
                            AnimatedNumber: W
                        },
                        props: ["accumulator", "location"],
                        data: function() {
                            return {
                                errored: !1,
                                leaderboard: null,
                                open: !1,
                                worldwide: {
                                    pops: 0,
                                    pps: 0
                                },
                                deltas: {},
                                mainHeight: 0,
                                updated: Date.now(),
                                smoothedInterval: 1e4,
                                currentCountry: {},
                                meow: null
                            }
                        },
                        watch: {
                            accumulator: function(e, t) {
                                e < t || (this.currentCountry.Pops = this.currentCountry.Pops - t + e)
                            },
                            leaderboard: function(e, t) {
                                var a = (Date.now() - this.updated) / 1e3,
                                    n = (Date.now() - this.updated + this.smoothedInterval) / 2;
                                this.smoothedInterval = Math.max(n + 30, 5e3);
                                var o = this.leaderboard.reduce((function(e, t) {
                                        return e + t.Pops
                                    }), 0),
                                    r = o - this.worldwide.pops;
                                if (this.worldwide.pops = o, this.updated = Date.now(), t) {
                                    this.worldwide.pps = Math.round(r / a * 10) / 10, this.deltas = {};
                                    var c, i = {},
                                        l = Object(x.a)(t);
                                    try {
                                        for (l.s(); !(c = l.n()).done;) {
                                            var s = c.value;
                                            i[s.Code] = s.Pops
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                    var d, u = Object(x.a)(e);
                                    try {
                                        for (u.s(); !(d = u.n()).done;) {
                                            var p = d.value;
                                            if (i[p.Code] && i[p.Code] < p.Pops) {
                                                var b = (p.Pops - i[p.Code]) / a;
                                                this.deltas[p.Code] = Math.round(10 * b) / 10
                                            }
                                        }
                                    } catch (e) {
                                        u.e(e)
                                    } finally {
                                        u.f()
                                    }
                                } else this.worldwide.pps = 0
                            },
                            location: function() {
                                this.updateCurrentCountry()
                            }
                        },
                        computed: {
                            topThree: function() {
                                return this.leaderboard.slice(0, 3)
                            },
                            amInTopThree: function() {
                                var e = this,
                                    t = !1;
                                return this.topThree.forEach((function(a) {
                                    a.Code === e.currentCountry.Code && (t = !0)
                                })), t
                            }
                        },
                        created: function() {
                            this.fetchLeaderboardData()
                        },
                        mounted: function() {
                            this.mainHeight = this.$refs.mainGrow.scrollHeight
                        },
                        methods: {
                            fetchLeaderboardData: function() {
                                var e = this;
                                ee.load("  ").then((function(t) {
                                    e.leaderboard = t, e.leaderboard.sort((function(e, t) {
                                        return t.Pops - e.Pops
                                    })), e.updateCurrentCountry(), e.$nextTick((function() {
                                        e.mainHeight = e.$refs.mainGrow.scrollHeight
                                    }))
                                })).catch((function(e) {
                                    console.log(e)
                                })).finally((function() {
                                    setTimeout(e.fetchLeaderboardData, 1e4)
                                }))
                            },
                            updateCurrentCountry: function() {
                                var e = this;
                                if ("" !== this.location && "?" !== this.location && this.leaderboard) {
                                    var t = this.leaderboard.filter((function(t) {
                                        return e.location === t.Code
                                    }))[0];
                                    t && (this.currentCountry = {
                                        Code: this.location,
                                        Pops: t.Pops
                                    })
                                }
                            },
                            getPlace: function(e) {
                                switch (e) {
                                    case 1:
                                        return "🥇";
                                    case 2:
                                        return "🥈";
                                    case 3:
                                        return "🥉";
                                    default:
                                        return e
                                }
                            },
                            shortNum: function(e) {
                                return Y()(e)
                            }
                        }
                    };
                a("6770"), te.render = function(e, t, a, o, r, c) {
                    var i = Object(n.resolveComponent)("flag"),
                        l = Object(n.resolveComponent)("AnimatedNumber");
                    return Object(n.openBlock)(), Object(n.createElementBlock)("section", {
                        class: Object(n.normalizeClass)("leaderboard ".concat(r.open ? "open" : "")),
                        onPointerdown: t[1] || (t[1] = Object(n.withModifiers)((function() {}), ["stop"]))
                    }, [Object(n.createElementVNode)("div", {
                        class: "bar",
                        onPointerdown: t[0] || (t[0] = Object(n.withModifiers)((function(e) {
                            return r.open = !r.open
                        }), ["stop"]))
                    }, [b, Object(n.createElementVNode)("div", f, [r.open || !r.leaderboard || !c.amInTopThree && a.location ? !r.open && r.leaderboard && !c.amInTopThree && a.location ? (Object(n.openBlock)(), Object(n.createElementBlock)("div", O, [Object(n.createElementVNode)("span", g, [j, Object(n.createVNode)(i, {
                        code: c.topThree[0].Code
                    }, null, 8, ["code"]), Object(n.createElementVNode)("span", C, Object(n.toDisplayString)(c.shortNum(c.topThree[0].Pops)), 1)]), w, Object(n.createElementVNode)("span", S, [Object(n.createVNode)(i, {
                        code: r.currentCountry.Code
                    }, null, 8, ["code"]), Object(n.createElementVNode)("span", y, [Object(n.createVNode)(l, {
                        duration: 20,
                        pop: !0,
                        value: r.currentCountry.Pops
                    }, null, 8, ["value"])])])])) : (Object(n.openBlock)(), Object(n.createElementBlock)("h2", B, "Leaderboard")) : (Object(n.openBlock)(), Object(n.createElementBlock)("div", h, [(Object(n.openBlock)(!0), Object(n.createElementBlock)(n.Fragment, null, Object(n.renderList)(c.topThree, (function(e, t) {
                        return Object(n.openBlock)(), Object(n.createElementBlock)("span", {
                            class: Object(n.normalizeClass)("top-entry ".concat(r.currentCountry.Code === e.Code ? "mine" : "")),
                            key: e.Code
                        }, [Object(n.createElementVNode)("span", m, "#" + Object(n.toDisplayString)(t + 1), 1), Object(n.createVNode)(i, {
                            code: e.Code
                        }, null, 8, ["code"]), Object(n.createElementVNode)("span", v, Object(n.toDisplayString)(c.shortNum(e.Code == r.currentCountry.Code ? r.currentCountry.Pops : e.Pops)), 1)], 2)
                    })), 128))]))]), N], 32), Object(n.createElementVNode)("main", {
                        ref: "mainGrow",
                        style: Object(n.normalizeStyle)("--max-height: ".concat(r.mainHeight, "px"))
                    }, [Object(n.createElementVNode)("div", k, [r.leaderboard ? (Object(n.openBlock)(), Object(n.createElementBlock)("ol", M, [Object(n.createElementVNode)("li", null, [E, P, Object(n.createElementVNode)("span", T, [Object(n.createVNode)(n.Transition, {
                        name: "pop-delta",
                        mode: "out-in"
                    }, {
                        default: Object(n.withCtx)((function() {
                            return [r.worldwide.pps > 0 ? (Object(n.openBlock)(), Object(n.createElementBlock)("span", I, Object(n.toDisplayString)(c.shortNum(r.worldwide.pps) + " PPS"), 1)) : Object(n.createCommentVNode)("", !0)]
                        })),
                        _: 1
                    }), Object(n.createVNode)(l, {
                        enabled: r.open,
                        transition: !1,
                        value: r.worldwide.pops,
                        duration: r.smoothedInterval
                    }, null, 8, ["enabled", "value", "duration"])])]), (Object(n.openBlock)(!0), Object(n.createElementBlock)(n.Fragment, null, Object(n.renderList)(r.leaderboard, (function(e, t) {
                        return Object(n.openBlock)(), Object(n.createElementBlock)("li", {
                            key: e.Code
                        }, [Object(n.createElementVNode)("span", A, Object(n.toDisplayString)(c.getPlace(t + 1)), 1), Object(n.createVNode)(i, {
                            code: e.Code
                        }, null, 8, ["code"]), Object(n.createElementVNode)("span", {
                            class: Object(n.normalizeClass)("country ".concat(r.currentCountry.Code === e.Code ? "mine" : ""))
                        }, Object(n.toDisplayString)(e.Name), 3), Object(n.createElementVNode)("span", V, [Object(n.createVNode)(n.Transition, {
                            name: "pop-delta",
                            mode: "out-in"
                        }, {
                            default: Object(n.withCtx)((function() {
                                return [r.deltas[e.Code] ? (Object(n.openBlock)(), Object(n.createElementBlock)("span", G, Object(n.toDisplayString)(c.shortNum(r.deltas[e.Code]) + " PPS"), 1)) : Object(n.createCommentVNode)("", !0)]
                            })),
                            _: 2
                        }, 1024), Object(n.createVNode)(l, {
                            enabled: r.open,
                            transition: !1,
                            value: e.Pops,
                            duration: r.smoothedInterval
                        }, null, 8, ["enabled", "value", "duration"])])])
                    })), 128))])) : (Object(n.openBlock)(), Object(n.createElementBlock)("p", L, "We are developing functions.")), D])], 4)], 34)
                }, te.__scopeId = "data-v-7dfcdf8a";
                var ae = te,
                    ne = a("1e5c"),
                    oe = a("bc3a").default,
                    re = {
                        name: "App",
                        components: {
                            Cat: p,
                            Leaderboard: ae,
                            TwitterButton: function() {
                                return Object(n.createElementBlock)("a", {
                                    "data-v-84111686": "",
                                    href: "https://google.com/404/",
                                    target: "_blank",
                                    onPointerdown: function(e) {
                                        e.stopPropagation()
                                    }
                                }, [Object(n.createElementBlock)("svg", {
                                    "data-v-84111686": "",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512"
                                }, [Object(n.createElementBlock)("path", {
                                    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                })])])
                            },
                            IgButton: function() {
                                return Object(n.createElementBlock)("a", {
                                    href: "http://www.lkcss.edu.hk/",
                                    class: "ig-button",
                                    target: "_blank",
                                    onPointerdown: function(e) {
                                        e.stopPropagation()
                                    }
                                }, [Object(n.createElementBlock)("img", {
                                    src: "img/icon.f8c1278f.png"
                                })])
                            }
                        },
                        data: function() {
                            return {
                                open: !1,
                                pop_sound_i: 0,
                                counter: 0,
                                accumulator: 0,
                                pop_sounds: ["pops/pop1", "pops/pop1"],
                                pop_howls: [],
                                sequential_max_pops: 0,
                                bot: !1,
                                location: null,
                                interval: !1,
                                token: "",
                                pop_sound_path: "pops/pop1",
                                pop_howl: null
                            }
                        },
                        created: function() {
                            window.onload = () => {
                                document.addEventListener("touchstart", (e => {
                                    e.touches.length > 1 && e.preventDefault()
                                }), {
                                    passive: !1
                                });
                                let e = 0;
                                document.addEventListener("touchend", (t => {
                                    const a = (new Date).getTime();
                                    a - e <= 300 && t.preventDefault(), e = a
                                }), !1)
                            }, document.addEventListener("pointerup", this.p), document.addEventListener("keyup", this.p), document.addEventListener("pointerdown", this.op), document.addEventListener("keydown", this.op), this.counter = parseInt(s("pop_count"), 10), isNaN(this.counter) && (this.counter = 0), this.bot = s("bot"), this.pop_howl = new ne.Howl({
                                src: ["".concat(this.pop_sound_path, ".ogg"), "".concat(this.pop_sound_path, ".mp3")],
                                html5: !0,
                                buffer: !0
                            });
                            var e = s("country");
                            e ? this.location = e : this.cloudflareGeo()
                        },
                        methods: {
                            isMobile: function() {
                                return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                            },
                            p: function() {
                                var e = this;
                                setTimeout((function() {
                                    e.open = !1
                                }), 25)
                            },
                            op: function(e) {
                                var t = this;
                                t.lastOp = t.lastOp || 0;
                                var a = (new Date).getTime() - t.lastOp < 70;
                                a || (t.lastOp = (new Date).getTime()), e.repeat || (this.open = !0, a || (this.pop_howl.stop(), this.pop_howl.play()), this.counter++, this.accumulator++, d("pop_count", this.counter, 365), this.interval || (this.interval = !0, this.sendStats(), setInterval(this.sendStats, 3e4)))
                            },
                            cloudflareGeo: function() {
                                var e = this;
                                oe.get("https://cloudflare.com/cdn-cgi/trace").then((function(t) {
                                    e.location = /^loc=(.*)$/gm.exec(t.data)[1]
                                }))
                            },
                            sendStats: function() {
                                var e = this;
                                return Object(l.a)(regeneratorRuntime.mark((function t() {
                                    var a, n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!e.bot) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                if (0 !== e.accumulator) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 4:
                                                return t.next = 6, e.$recaptchaLoaded();
                                            case 6:
                                                return t.next = 8, e.$recaptcha("pop");
                                            case 8:
                                                a = t.sent, n = "", e.token && (n = "&token=".concat(e.token)), oe.post("".concat("  ", "?count=").concat(e.accumulator > 5e3 ? 5e3 : e.accumulator, "&captcha_token=").concat(a).concat(n)).then((function(t) {
                                                    e.accumulator >= 1e3 ? (e.sequential_max_pops += 1, e.sequential_max_pops > 10 && (e.bot = !0, d("bot", !0, .5))) : (e.sequential_max_pops = 0, e.bot = !1), e.accumulator = 0, t.data && t.data.Location && t.data.Location.Code && (e.location = t.data.Location.Code, d("country", t.data.Location.Code, .5)), t.data.Token && (e.token = t.data.Token)
                                                })).catch((function(e) {
                                                    console.log(e)
                                                }));
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            }
                        }
                    };
                a("46b2"), re.render = function(e, t, a, o, r, l) {
                    var s = Object(n.resolveComponent)("cat"),
                        d = Object(n.resolveComponent)("leaderboard"),
                        u = Object(n.resolveComponent)("twitter-button"),
                        p = Object(n.resolveComponent)("ig-button");
                    return Object(n.openBlock)(), Object(n.createElementBlock)("div", c, [i, Object(n.createVNode)(s, {
                        open: e.open,
                        counter: e.counter,
                        bot: e.bot
                    }, null, 8, ["open", "counter", "bot"]), Object(n.createVNode)(d, {
                        accumulator: e.accumulator,
                        location: e.location
                    }, null, 8, ["accumulator", "location"]), Object(n.createVNode)(u, {}, null, -1), Object(n.createVNode)(p, {}, null, -1)])
                };
                var ce = re,
                    ie = a("760d"),
                    le = a("22b5"),
                    se = a("f7e2");
                Object(n.createApp)(ce).use(se.a, {
                    id: "G-JX2HBEQ78M"
                }).use(ie.VueReCaptcha, {
                    siteKey: "6LesGRAcAAAAAJmKu8qdDMuK4w6oj9zSN1uIQFfa"
                }).use(le.a).mount("#app")
            },
            "5b59": function(e, t, a) {},
            "64ba": function(e, t, a) {
                "use strict";
                a("3f29")
            },
            6770: function(e, t, a) {
                "use strict";
                a("5b59")
            },
            "6ee5": function(e, t, a) {},
            "85fc": function(e) {
                e.exports = JSON.parse('{"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"BES Islands","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Democratic Republic of the Congo","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d\\\\\'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Vatican","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestine","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russia","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","QM":"United States","QO":"Outlying Oceania","ZZ":"Unknown or Invalid Territory","QU":"European Union","XA":"Canary Islands","XI":"Northern Ireland","XK":"Kosovo","XX":"Unknown","XZ":"International Waters","AC":"Ascension Island","CP":"Clipperton Island","DG":"Diego Garcia","EA":"Ceuta and Melilla","EU":"European Union","EZ":"Eurozone","FX":"Metropolitan France","IC":"Canary Islands","SU":"USSR","TA":"Tristan da Cunha","UK":"United Kingdom","UN":"United Nations","AN":"Netherlands Antilles","BU":"Burma","CS":"Serbia and Montenegro","NT":"Neutral Zone","SF":"Finland","TP":"East Timor","YU":"Yugoslavia","ZR":"Zaire"}')
            },
            a7f9: function(e, t, a) {
                e.exports = a.p + "img/op.b87b22c0.png"
            },
            b92e: function(e, t, a) {
                "use strict";
                a("1f4e")
            },
            cf05: function(e, t, a) {
                e.exports = a.p + "img/logo.png"
            },
            f98f: function(e, t, a) {}
        })
})();
