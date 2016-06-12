/**
 * Tweene - JavaScript Animation Proxy. It can work with GSAP, Velocity.js, Transit or jQuery.
 * @version 0.5.7
 * @link http://tweene.com
 * Copyright (c) 2014, Federico Orru' <federico@buzzler.com>
 * 
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 * 
 */
! function(a) {
    "use strict";
    var b = function(a) {
        function b(a) {
            return "function" == typeof a
        }

        function c(a) {
            return "number" == typeof a || a && "object" == typeof a && "[object Number]" == Object.prototype.toString.call(a) || !1
        }

        function d(a) {
            return "string" == typeof a || a && "object" == typeof a && "[object String]" == Object.prototype.toString.call(a) || !1
        }

        function e(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        }

        function f(a) {
            return !K(a) && a - parseFloat(a) + 1 >= 0
        }

        function g(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
            return !0
        }

        function h(a) {
            return e(a) && !(a instanceof Function) && a.constructor == Object
        }

        function i(a) {
            if (!e(a)) return a;
            var b, c, d, f;
            for (d = 1, f = arguments.length; f > d; d++) {
                b = arguments[d];
                for (c in b) a[c] = b[c]
            }
            return a
        }

        function j(a, c) {
            if (b(a) || !e(a)) return a;
            if (K(a)) {
                if (a = a.slice(), c)
                    for (var d = 0, f = a.length; f > d; d++) a[d] = j(a[d], c)
            } else if (a = i({}, a), c)
                for (var g in a) a.hasOwnProperty(g) && (a[g] = j(a[g], c));
            return a
        }

        function k(a) {
            if (Object.keys) return Object.keys(a);
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b
        }

        function l(a, b) {
            if (!K(a)) throw "expected an array as first param";
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }

        function m(a, b) {
            return void 0 === b && (b = 0), Array.prototype.slice.call(a, b)
        }

        function n(a, b, c) {
            return b != c && 0 !== a ? a * ("s" == c ? .001 : 1e3) : a
        }

        function o(a, b, c, d) {
            var e = [a, b],
                f = [c, d],
                g = [null, null],
                h = [null, null],
                i = [null, null],
                j = function(a, b) {
                    return i[b] = 3 * e[b], h[b] = 3 * (f[b] - e[b]) - i[b], g[b] = 1 - i[b] - h[b], a * (i[b] + a * (h[b] + a * g[b]))
                },
                k = function(a) {
                    return i[0] + a * (2 * h[0] + 3 * g[0] * a)
                },
                l = function(a) {
                    for (var b, c = a, d = 0; ++d < 14 && (b = j(c, 0) - a, !(Math.abs(b) < .001));) c -= b / k(c);
                    return c
                };
            return function(a) {
                return j(l(a), 1)
            }
        }

        function p(a, b) {
            var c, d, e, f, g, h, i, j = {};
            switch (K(b) ? (b = b[0], h = b[1]) : h = null, c = String(b).split(/\s+/), c.length) {
                case 1:
                    c = [c[0], c[0], c[0], c[0]];
                    break;
                case 2:
                    c = [c[0], c[1], c[0], c[1]];
                    break;
                case 3:
                    c = [c[0], c[1], c[2], c[1]]
            }
            for (d = t(a).split("-"), e = d[0], f = d.length > 1 ? d[1].substr(0, 1).toUpperCase() + d[1].substr(1) : "", g = "borderRadius" == a ? D : C, i = 0; 4 > i; i++) j[e + g[i] + f] = h ? [c[i], h] : c[i];
            return j
        }

        function q(a, b) {
            var c, d, e, f = ["X", "Y", "Z"],
                g = {};
            if (K(b) ? (b = b[0], c = b[1]) : c = null, d = String(b).split(/\s*,\s*/), e = -1 !== a.indexOf("3") ? a.substr(0, a.length - 2) : a, "rotate3d" == a) {
                if (4 != d.length) throw "invalid rotate 3d value";
                f = ["1" == d[0] ? "X" : "1" == d[1] ? "Y" : "Z"], d[0] = d[3]
            } else switch (d.length) {
                case 1:
                    d = "rotate" == e || "rotation" == e ? [null, null, d[0]] : [d[0], d[0], null];
                    break;
                case 2:
                    d = [d[0], d[1], null]
            }
            for (var h = 0; h < f.length; h++) null !== d[h] && (g[e + f[h]] = c ? [d[h], c] : d[h]);
            return g
        }

        function r(a) {
            return -1 != l(z, a)
        }

        function s(a) {
            return a.replace(/(\-[a-z])/g, function(a) {
                return a.substr(1).toUpperCase()
            })
        }

        function t(a) {
            return a.replace(/([A-Z])/g, "-$1").toLowerCase()
        }

        function u(a) {
            return a in J && (a = J[a]), a = parseFloat(a), (isNaN(a) || !a || 0 >= a) && (a = 1), a
        }

        function v(a, b) {
            if (void 0 !== a[b]) return [b, a[b]];
            if (b in U) return [U[b], a[U[b]]];
            b = b.substr(0, 1).toUpperCase() + b.substr(1);
            for (var c, d = ["webkit", "moz", "ms", "o"], e = 0, f = d.length; f > e; e++)
                if (c = d[e] + b, void 0 !== a[c]) return U[b] = c, [c, a[c]];
            return [b, void 0]
        }

        function w(a) {
            return [1 - a[2], 1 - a[3], 1 - a[0], 1 - a[1]]
        }

        function x(a, b) {
            if (0 === b || 1 === b) return a;
            var c = a.join("_").replace(/\./g, "p") + "_" + b.toFixed(3);
            if (c in V) return V[c];
            var d = o.apply(null, a),
                e = 1 - b,
                f = d(b),
                g = f > 1 ? -1 : 1,
                h = (1 - f) * g,
                i = .33,
                j = .67,
                k = i * e + b,
                l = j * e + b,
                m = 0,
                n = 0,
                p = i,
                q = (d(k) - f) * g / h,
                r = j,
                s = (d(l) - f) * g / h,
                t = 1,
                u = 1,
                v = 1 - i,
                w = 1 - j,
                x = i * i,
                y = i * i * i,
                z = j * j,
                A = j * j * j,
                B = 3 * v * v * i,
                C = 3 * v * x,
                D = 3 * w * w * j,
                E = 3 * w * z,
                F = B * E - C * D;
            if (0 === F) return console.log("New Bezier FAIL: Det == 0"), a;
            var G = v * v * v,
                H = w * w * w,
                I = p - (G * m + y * t),
                J = q - (G * n + y * u),
                K = r - (H * m + A * t),
                L = s - (H * n + A * u),
                M = [(E * I - C * K) / F, (E * J - C * L) / F, (-D * I + B * K) / F, (-D * J + B * L) / F];
            return V[c] = M, M
        }
        if (jQuery && a) var y = jQuery;
        var z = "scale|scale3d|translate|translate3d|rotate|rotate3d|rotation|skew|scaleX|scaleY|scaleZ|translateX|translateY|translateZ|x|y|z|rotateX|rotateY|rotateZ|skewX|skewY".split("|"),
            A = z.slice(0, 8),
            B = "margin|padding|borderColor|borderWidth|borderRadius".split("|"),
            C = ["Top", "Right", "Bottom", "Left"],
            D = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
            E = {
                begin: "",
                end: "",
                progress: "",
                loop: "",
                reverse: "",
                onBegin: "begin",
                start: "begin",
                onStart: "begin",
                onEnd: "end",
                complete: "end",
                onComplete: "end",
                finish: "end",
                onFinish: "end",
                done: "end",
                onProgress: "progress",
                update: "progress",
                onUpdate: "progress",
                onLoop: "loop",
                onRepeat: "loop",
                onReverse: "reverse",
                onReverseComplete: "reverse"
            },
            F = {
                delay: "",
                loops: "",
                loopsDelay: "",
                yoyo: "",
                target: "",
                speed: "",
                sleep: "delay",
                repeat: "loops",
                repeatDelay: "loopsDelay",
                timeScale: "speed"
            },
            G = {
                easing: "",
                duration: "",
                paused: "",
                to: "",
                from: "",
                then: "",
                ease: "easing"
            },
            H = {
                linear: [.25, .25, .75, .75],
                ease: [.25, .1, .25, 1],
                "ease-in": [.42, 0, 1, 1],
                "ease-out": [0, 0, .58, 1],
                "ease-in-out": [.42, 0, .58, 1],
                "in": [.42, 0, 1, 1],
                out: [0, 0, .58, 1],
                "in-out": [.42, 0, .58, 1],
                snap: [0, 1, .5, 1],
                easeInCubic: [.55, .055, .675, .19],
                easeOutCubic: [.215, .61, .355, 1],
                easeInOutCubic: [.645, .045, .355, 1],
                easeInCirc: [.6, .04, .98, .335],
                easeOutCirc: [.075, .82, .165, 1],
                easeInOutCirc: [.785, .135, .15, .86],
                easeInExpo: [.95, .05, .795, .035],
                easeOutExpo: [.19, 1, .22, 1],
                easeInOutExpo: [1, 0, 0, 1],
                easeInQuad: [.55, .085, .68, .53],
                easeOutQuad: [.25, .46, .45, .94],
                easeInOutQuad: [.455, .03, .515, .955],
                easeInQuart: [.895, .03, .685, .22],
                easeOutQuart: [.165, .84, .44, 1],
                easeInOutQuart: [.77, 0, .175, 1],
                easeInQuint: [.755, .05, .855, .06],
                easeOutQuint: [.23, 1, .32, 1],
                easeInOutQuint: [.86, 0, .07, 1],
                easeInSine: [.47, 0, .745, .715],
                easeOutSine: [.39, .575, .565, 1],
                easeInOutSine: [.445, .05, .55, .95],
                easeInBack: [.6, -.28, .735, .045],
                easeOutBack: [.175, .885, .32, 1.275],
                easeInOutBack: [.68, -.55, .265, 1.55]
            },
            I = {
                fast: "200ms",
                slow: "600ms"
            },
            J = {
                half: .5,
                "double": 2
            },
            K = Array.isArray || function(a) {
                return a && "object" == typeof a && "number" == typeof a.length && "[object Array]" == Object.prototype.toString.call(a)
            },
            L = function() {
                var a = this;
                this._idCounter = 0, this._coreTimeUnit = "ms", this.defaultTimeUnit = "ms", this._macros = {}, this.easings = H, this.durations = I, this.speeds = J, this.defaultDriver = "jquery", this.defaultEasing = "easeOutQuad", this.defaultDuration = "400ms";
                var b = {
                        tween: {},
                        timeline: {}
                    },
                    c = function(c, d) {
                        var e, f;
                        if (d = (d ? d : a.defaultDriver).toLowerCase(), d in b[c]) return e = b[c][d], f = new e, f.driverName = d, f;
                        throw "Driver " + name + " not found"
                    },
                    f = function(a, b) {
                        var d = c("tween");
                        return a.length && (a = m(a, 0), d.target(a.shift())[b].apply(d, a)), d._immediateStart ? d.play() : d
                    };
                this.registerDriver = function(a, c, d) {
                    return c = c.toLowerCase(), "tween" != c && (c = "timeline"), b[c][a.toLowerCase()] = d, this
                }, this.registerMacro = function(a, b) {
                    return this._macros[a] = b, this
                }, this.get = function(a, b) {
                    var d = c("tween", b);
                    return a ? d.target(a) : d
                }, this.set = function(a, b) {
                    return c("tween").target(a).set(b)
                }, this.to = function() {
                    return f(arguments, "to")
                }, this.from = function() {
                    return f(arguments, "from")
                }, this.fromTo = function() {
                    return f(arguments, "fromTo")
                }, this.line = function(a, b, f) {
                    var g = e(a) && !h(a) || d(a) ? a : null;
                    return g || (b = arguments[0], f = arguments[1]), b = h(b) ? b : {}, f = void 0 !== f ? f : "driver" in b ? b.driver : null, c("timeline", f).options(b).target(g)
                }
            },
            M = new L;
        a && (a.Tweene = M);
        var N = function() {
                this._id = ++M._idCounter, this._coreTimeUnit = M._coreTimeUnit, this._timeUnit = M.defaultTimeUnit, this._parent = null, this._target = null, this._duration = 0, this._speed = 1, this._delay = 0, this._loops = 0, this._loopsDelay = 0, this._loopsCount = 0, this._yoyo = !1, this._fwd = !0, this._localFwd = !0, this._ready = !1, this._running = !1, this._handlers = {
                    begin: null,
                    end: null,
                    reverse: null,
                    progress: null,
                    loop: null
                }, this._coreHandlers = {
                    _begin: [],
                    _end: [],
                    begin: [],
                    end: [],
                    reverse: [],
                    progress: [],
                    loop: []
                }, this.play = function() {
                    return this._fwd = !0, this._playTween(), this
                }, this.reverse = function() {
                    return this._fwd = !1, this._reverseTween(), this
                }, this.pause = function() {
                    return this._ready && this._pauseTween(), this
                }, this.resume = function() {
                    return this._resumeTween(), this
                }, this.restart = function() {
                    return this._restartTween(), this
                }, this.back = function() {
                    return this._backTween(this._localFwd ? "begin" : "end"), this
                }, this.speed = function(a) {
                    return void 0 === a ? this._speed : (a = u(a), a != this._speed && (this._speed = a, this._speedTween()), this)
                }, this.timeScale = function() {
                    return this.speed.apply(this, arguments)
                }, this.time = function() {
                    return Math.round(1e3 * n(this._getPosition(), this._coreTimeUnit, this._timeUnit)) / 1e3
                }, this.progress = function() {
                    return Math.round(1e3 * this._getProgress()) / 1e3
                }, this.paused = function() {
                    return this._getPaused()
                }, this.reversed = function() {
                    return !this._fwd
                }, this.duration = function(a) {
                    return void 0 !== a ? ("timeline" != this._type && (this._duration = this._parseTime(a), this.invalidate()), this) : ("timeline" == this.type && this.prepare(), Math.round(1e3 * n(this._duration, this._coreTimeUnit, this._timeUnit)) / 1e3)
                }, this.totalDuration = function() {
                    return "timeline" == this.type && this.prepare(), Math.round(1e3 * n(this._getTotalDuration() * this._speed, this._coreTimeUnit, this._timeUnit)) / 1e3
                }, this.target = function(a) {
                    return void 0 === a ? this._target : (this._setTarget(a), this)
                }, this.delay = function(a) {
                    return void 0 === a ? n(this._delay, this._coreTimeUnit, this._timeUnit) : (this._delay = this._parseTime(a), this.invalidate(), this)
                }, this.loops = function(a) {
                    return void 0 === a ? this._loops : (a = parseInt(a), isNaN(a) ? a = 0 : isFinite(a) || (a = -1), this._loops = a, this.invalidate(), this)
                }, this.yoyo = function(a) {
                    return void 0 === a ? this._yoyo : (this._yoyo = !!a, this)
                }, this.loopsDelay = function(a) {
                    return void 0 === a ? n(this._loopsDelay, this._coreTimeUnit, this._timeUnit) : (this._loopsDelay = this._parseTime(a), this.invalidate(), this)
                }, this.on = function(a, b) {
                    return a in E && (a = E[a].length ? E[a] : a, this._handlers[a] = null === b ? null : {
                        callback: b,
                        params: arguments.length > 2 ? K(arguments[2]) ? arguments[2] : [arguments[2]] : [],
                        scope: arguments.length > 3 && null !== arguments[3] ? arguments[3] : this
                    }), this
                }, this.setCoreHandler = function(a, b, c, d, e, f) {
                    this.unsetCoreHandler(a, b);
                    var g = {
                        id: b,
                        callback: c,
                        scope: d || this,
                        params: e || []
                    };
                    return f ? this._coreHandlers[a].unshift(g) : this._coreHandlers[a].push(g), this
                }, this.unsetCoreHandler = function(a, b) {
                    for (var c = 0, d = this._coreHandlers[a].length; d > c; c++)
                        if (this._coreHandlers[a][c].id == b) {
                            this._coreHandlers[a].splice(c, 1);
                            break
                        }
                    return this
                }, this.invalidate = function() {
                    return this._running || (this._parent && this._parent.invalidate(), this._ready = !1), this
                }, this.parent = function(a) {
                    return void 0 === a ? this._parent : (this._parent = a, this.invalidate(), this)
                }, this.id = function() {
                    return this._id
                }, this.options = function(a) {
                    a = j(a, !0);
                    var b = this._parseOptions(a);
                    return b.events = this._parseEvents(a), this._applyArguments(b), this
                }, this.getRealSpeed = function() {
                    return this._parent ? this._parent.getRealSpeed() * this._speed : this._speed
                }, this._getTotalDuration = function() {
                    return -1 == this._loops && (this._duration || this._loopsDelay) ? 1 / 0 : (this._duration + (this._loopsDelay + this._duration) * this._loops) / this._speed
                }, this._applyArguments = function(a) {
                    var b;
                    for (b in a.events) this.on.apply(this, a.events[b]);
                    delete a.events;
                    for (b in a) "timeline" != this.type && -1 != l(["from", "to", "then", "immediateStart"], b) ? this["_" + b] = a[b] : b in this && this[b] instanceof Function && this[b](a[b])
                }, this._hasHandlers = function(a) {
                    return a in this._handlers && null !== this._handlers[a] || this._coreHandlers[a].length
                }, this._runHandlers = function(a) {
                    var b, c, d;
                    if (this._coreHandlers[a].length)
                        for (b = 0, c = this._coreHandlers[a].length; c > b; b++) d = this._coreHandlers[a][b], d.callback.apply(d.scope, d.params);
                    a in this._handlers && null !== this._handlers[a] && (d = this._handlers[a], d.callback.apply(d.scope, d.params))
                }, this._parseOptions = function(a, b) {
                    var c, d, e, f = "tween" == this.type ? i({}, F, G) : F,
                        g = {};
                    for (c in a)
                        if (a.hasOwnProperty(c) && c in f) {
                            if (e = a[c], "paused" == c) {
                                this._immediateStart = !e, delete a[c];
                                continue
                            }
                            d = f[c].length ? f[c] : c, g[d] = e, b && delete a[c]
                        }
                    return g
                }, this._parseEvents = function(a, b) {
                    var c, d, e, f, g, h = {};
                    for (e in a) a.hasOwnProperty(e) && e in E && (c = a[e], f = E[e].length ? E[e] : e, d = [f, c], b && delete a[e], e + "Params" in a && (g = a[e + "Params"], d.push(K(g) ? g : [g]), b && delete a[e + "Params"]), e + "Scope" in a ? (d.push(a[e + "Scope"]), b && delete a[e + "Scope"]) : d.push(this), h[f] = d);
                    return h
                }, this._parseTime = function(a) {
                    if (!a) return 0;
                    var b, c = this._timeUnit;
                    if (d(a)) {
                        if (a in I && (a = I[a]), b = a.match(/^[\+\-]?\s*([0-9\.]+)\s*(m?s)?$/i), null === b || void 0 === b[1]) return 0;
                        void 0 !== b[2] && (c = b[2].toLowerCase()), a = b[1]
                    }
                    return a = Number(a), isNaN(a) && (a = 0), a = n(a, c, this._coreTimeUnit), Math.max(0, a)
                }, this._setTarget = function(b) {
                    return d(b) && "$" in a && (b = y(b)), this._target = b, this
                }
            },
            O = function(a) {
                this.type = "label", this._id = ++M._idCounter, this._name = a, this._position = null, this.id = function() {
                    return this._id
                }, this.position = function(a) {
                    return void 0 === a ? this._position : (this._position = a, this)
                }
            },
            P = function(a, b, c, d) {
                this.type = "callback", this._id = ++M._idCounter, d = 1 === d ? !0 : -1 === d ? !1 : null;
                var e = null;
                this.parent = function(a) {
                    return a ? (e = a, this) : e
                }, this.id = function() {
                    return this._id
                }, this.totalDuration = function() {
                    return 0
                }, this.resume = function() {
                    return (null === d || d != e.reversed()) && a.apply(b || e, c), this
                }
            },
            Q = function() {
                this.type = "tween", this._from = null, this._to = null, this._then = null, this._easing = M.defaultEasing, this._duration = this._parseTime(M.defaultDuration), this._propertyMap = {}, this._hasMultipleEasing = !1, this._allowMultipleEasing = !1, this._allowTransform = !1, this._immediateStart = !0, this._data = null, this._offset = 0, this.offset = function(a) {
                    return this._offset = a, this
                }, this.line = function(a) {
                    return M.line(this._target, a, this.driverName)
                }, this.exec = function(a) {
                    var b = m(arguments, 1);
                    return a && a in M._macros && M._macros[a].apply(this, b), this
                }, this.easing = function(a) {
                    return void 0 === a ? this._easing : (this._easing = a, this)
                }, this.from = function() {
                    return this.parseArguments(arguments, !0, !1), this.invalidate(), this
                }, this.fromTo = function() {
                    return this.parseArguments(arguments, !0, !0), this.invalidate(), this
                }, this.to = function() {
                    return this.parseArguments(arguments, !1, !0), this.invalidate(), this
                }, this.then = function(a) {
                    return this._then = a, this.invalidate(), this
                }, this.set = function(a) {
                    return a && (this._to = a), this.duration(0).play(), this
                }, this.prepare = function() {
                    return this._prepare(), this._getTotalDuration()
                }, this.parseArguments = function(a, e, f, g) {
                    K(a) || (a = m(a));
                    var h = {
                            events: {}
                        },
                        i = null;
                    if (a.length && ((d(a[0]) || c(a[0])) && (h.duration = a.shift()), a.length && (e && (h = this._parseDataArg(a.shift(), "from", h)), a.length && (f && (h = this._parseDataArg(a.shift(), "to", h)), a.length && ("duration" in h || !d(a[0]) && !c(a[0]) || (h.duration = a.shift()), a.length && (g && (d(a[0]) || c(a[0])) && (i = a.shift()), a.length && (d(a[0]) || K(a[0]) ? h.easing = a.shift() : b(a[0]) || (h = this._parseDataArg(a.shift(), "then", h)))), a.length && b(a[0])))))) {
                        var j = ["end", a.shift()];
                        a.length && (j.push(K(a[0]) ? a[0] : [a[0]]), a.length && j.push(a.shift())), h.events.end = j
                    }
                    return this._applyArguments(h), g ? i : this
                }, this._reset = function() {
                    this._data = null
                }, this._prepare = function() {
                    return this._ready || (this._reset(), this._emulatedProgress && this.setCoreHandler("end", "_progress", this._stopProgress, this, []).setCoreHandler("reverse", "_progress", this._stopProgress, this, []), this._data = {
                        delay: n(this._delay, this._coreTimeUnit, this._driverTimeUnit),
                        loopsDelay: n(this._loopsDelay, this._coreTimeUnit, this._driverTimeUnit),
                        duration: n(this._duration, this._coreTimeUnit, this._driverTimeUnit),
                        speed: this._speed,
                        easing: this._easing
                    }, this._data.realDuration = this._data.duration / this.getRealSpeed(), this._hasBegin = !1, this._hasEnd = !1, this._hasThen = !1, this._hasTween = !1, this._hasPre = !1, this._hasMultipleEasing = !1, this._hasStaticProps = !1, this._staticProps = [], this._display = {
                        pre: null,
                        begin: null,
                        end: null,
                        then: null,
                        mask: 0
                    }, this._visibility = {
                        pre: null,
                        begin: null,
                        end: null,
                        then: null,
                        mask: 0
                    }, this._data.tween = this._prepareProperties(this._from, this._to, this._then), this._ready = !0), this
                }, this._getTargetLength = function() {
                    return this._target.length
                }, this._prepareProperties = function(a, b, c) {
                    var d = {};
                    if (this._prepareSingle(d, b, "end"), this._prepareSingle(d, a, "begin"), this._prepareSingle(d, c, "then"), this._emulatedPlayhead) {
                        var e, f, g, h = {},
                            k = [],
                            l = ["x", "translateX", "y", "translateY", "z", "translateZ", "rotateZ", "rotate", "rotation", "rotationZ", "rotateX", "rotationX", "rotateY", "rotationY", "scale", "scaleX", "scaleY", "scaleZ"];
                        for (e = 0, f = l.length; f > e; e++) g = l[e], g in d && (h[g] = d[g], delete d[g]);
                        for (d = i(h, d), e = 0, f = this._getTargetLength(); f > e; e++) k[e] = j(d, !0);
                        return k
                    }
                    return d
                }, this._prepareSingle = function(a, b, c) {
                    if (b) {
                        b = this._parsePropertiesNames(b);
                        var d, e = "then" == c ? 1 : "end" == c ? 3 : 4,
                            f = "_has" + c.substr(0, 1).toUpperCase() + c.substr(1);
                        for (var g in b)
                            if (b.hasOwnProperty(g)) {
                                var h, i = null,
                                    j = b[g];
                                if (K(j) && (i = this._allowMultipleEasing ? j[1] : null, j = j[0], this._hasMultipleEasing = i && "then" != c), "display" == g || "visibility" == g) {
                                    this["_" + g][c] = j, this._hasStaticProps = !0, this["_" + g].mask |= e, "end" == c && (this["_" + g].then = j);
                                    continue
                                }
                                this[f] = !0, "then" != c && (this._hasTween = !0), "end" != c && g in a ? (h = !0, d = a[g]) : (h = !1, d = {
                                    pre: null,
                                    begin: null,
                                    end: null,
                                    then: null,
                                    easing: null,
                                    isTransform: !1
                                }), d[c] = j, "then" != c && (h || (d.easing = i)), d.isTransform || (d.isTransform = r(g)), a[g] = d
                            }
                    }
                }, this._splitEasing = function(a) {
                    var b, c, e, f, g = {},
                        h = [];
                    for (b in a) f = a[b], c = f.easing ? f.easing : this._easing, e = d(c) ? c : c.join("_").replace(/\./g, "p"), e in g || (g[e] = h.length, h.push({
                        tween: {},
                        easing: c
                    })), h[g[e]].tween[b] = f;
                    return h
                }, this._parsePropertiesNames = function(a) {
                    var b, c, d = {};
                    for (var e in a)
                        if (a.hasOwnProperty(e)) {
                            b = s(e), -1 !== l(B, b) ? c = p(b, a[e]) : this._allowTransform && -1 !== l(A, b) ? c = q(b, a[e]) : (c = {}, c[b] = a[e]);
                            for (e in c) b = e in this._propertyMap ? this._propertyMap[e] : e, (this._allowTransform || !r(b)) && (d[b] = c[e])
                        }
                    return d
                }, this._getRealEasing = function(a) {
                    return d(a) && a in H && (a = H[a]), K(a) && 4 == a.length && (a = this._getBezierEasing(a)), a
                }, this._parseDataArg = function(a, b, c) {
                    if (!h(a)) throw "Expected plain object as argument";
                    a = j(a, !0);
                    var d = this._parseOptions(a, !0),
                        e = this._parseEvents(a, !0);
                    return k(a).length && (c[b] = a), c = i(c, d), c.events = i(c.events, e), c
                }
            },
            R = function() {
                this.type = "timeline", this._offset = 0, this._children = [], this._cursor = null, this._labels = {}, this.add = function(a, e) {
                    if (d(a)) {
                        if (-1 == a.search(/^[a-z][^\+\-=]*$/)) throw 'The label "' + a + '" contains invalid symbols';
                        a = new O(a), this._labels[a.id()] = a
                    } else {
                        if (b(a) || c(a) && b(e)) {
                            var f = 0,
                                g = 0;
                            c(a) && (f = a, a = e, e = arguments[2] || null, g = 1), g += 2;
                            var h = arguments.length > g ? K(arguments[g]) ? arguments[g] : [arguments[g]] : [];
                            g++;
                            var i = arguments.length > g ? arguments[g] : null;
                            a = new P(a, i, h, f)
                        }
                        a.parent(this)
                    }
                    return void 0 === e && (e = null), this._children.push({
                        id: a.id(),
                        child: a,
                        start: e
                    }), this.invalidate(), this
                }, this.exec = function() {
                    var a = m(arguments);
                    if (a.length) {
                        var b = this._target ? this._target : a.shift(),
                            c = M.get(b, this.driverName),
                            d = a.length > 1 ? a.splice(1, 1)[0] : null;
                        this.add(c, d), c.exec.apply(c, a)
                    }
                    return this
                }, this.set = function() {
                    var a = m(arguments);
                    if (a.length) {
                        var b = this._target ? this._target : a.shift(),
                            c = M.get(b, this.driverName);
                        if (a.length) {
                            var d = a.shift(),
                                e = a.length ? a.shift() : null;
                            c._to = d, c.duration(0), this.add(c, e)
                        }
                    }
                    return this
                }, this.to = function() {
                    return this._tweenMethod(arguments, !1, !0)
                }, this.fromTo = function() {
                    return this._tweenMethod(arguments, !0, !0)
                }, this.from = function() {
                    return this._tweenMethod(arguments, !0, !1)
                }, this.offset = function(a) {
                    return this._offset = a, this
                }, this.prepare = function() {
                    return this._ready ? this : (this._reset(), this._mergeChildren(), this.ready = !0, this)
                }, this._tweenMethod = function(a, b, c) {
                    if (a = m(a), a.length) {
                        var d = this._target ? this._target : a.shift(),
                            e = M.get(d, this.driverName),
                            f = e.parseArguments(a, b, c, !0);
                        this.add(e, f)
                    }
                    return this
                }, this._mergeChildren = function() {
                    if (this._ready) return this;
                    this._cursor = this._duration = 0;
                    for (var a, b, c, d, e, f, g = 0, h = this._children.length; h > g; g++) a = this._children[g].child, d = this._children[g].start, f = "timeline" == a.type || "tween" == a.type, f && (e = this._parseTime(a.delay()), e && (this._cursor += e, this._duration += e, a.delay(0))), b = this._getStartPosition(this._duration, this._cursor, d), "label" != a.type ? (f ? ("timeline" == a.type && a.offset(this._offset + b), c = b + a.prepare(), this._mergeTweenable(a, b, c)) : (c = b, this._mergeCallback(a, b, c)), 1 / 0 != c ? (this._cursor = c, this._cursor > this._duration && (this._duration = this._cursor)) : this._cursor = this._duration = 1 / 0) : (a.position(b), this._mergeLabel(a, b));
                    return this
                }, this._getStartPosition = function(a, b, c) {
                    if (null === c) return a;
                    var e, f = a,
                        g = 0,
                        h = !1;
                    if (d(c)) {
                        var i = c.match(/^([a-z][^\+\-=]*)?(?:(\+{1,2}|\-{1,2})=)?([^\+\-=]+)?$/i);
                        if (null === i) return a;
                        e = void 0 !== i[3] ? this._parseTime(i[3]) : 0, void 0 !== i[2] && (h = 2 == i[2].length, g = "-" == i[2].substr(0, 1) ? -1 : 1), void 0 !== i[1] && i[1] in this._labels ? (f = this._labels[i[1]].position(), g || (e = 0, g = 1)) : g ? f = h ? b : a : (f = 0, g = 1)
                    } else f = 0, g = 1, e = this._parseTime(c);
                    return 1 / 0 == f ? 1 / 0 : Math.max(0, f + e * g)
                }
            },
            S = function() {
                var b = 0,
                    c = [];
                this.now = Date.now || function() {
                    return (new Date).getTime()
                };
                var d = this.now,
                    e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.msRequestAnimationFrame || a.oRequestAnimationFrame || function(c) {
                        var e = d(),
                            f = Math.max(0, 16 - (e - b)),
                            g = a.setTimeout(function() {
                                c(e + f)
                            }, f);
                        return b = e + f, g
                    },
                    f = function() {
                        for (var a = d(), b = 0; b < c.length;) {
                            var g = c[b],
                                h = !g.time || a - g.now - g.time >= 0;
                            h && g.time ? c.splice(b, 1) : b++, h && g.callback.apply(g.scope, g.params)
                        }
                        c.length && e(f)
                    };
                this.addCallback = function(a, b, g, h, i) {
                    return this.removeCallback(b), c.push({
                        now: d(),
                        time: a,
                        id: b,
                        callback: g,
                        scope: h || this,
                        params: i || []
                    }), 1 == c.length && e(f), this
                }, this.removeCallback = function(a) {
                    for (var b = 0, d = c.length; d > b; b++)
                        if (c[b].id == a) {
                            c.splice(b, 1);
                            break
                        }
                    return this
                }
            };
        M.ticker = new S;
        var T = function() {
                this._time = null, this._startTime = 0, this._pauseTime = 0, this._position = 0, this._paused = !0, this._running = !1, this._delayDummy = null, this._emulatedProgress = !1, this._emulatedBegin = !1, this._playAllowed = !0, this._reverseAllowed = !1, this.setDir = function(a) {
                    return this._fwd = a, this.setLocalDir(a), this
                }, this.setLocalDir = function(a) {
                    return this._localFwd = a, this._delayDummy && this._delayDummy.setDir(a), "tween" != this.type && this._propagateToAll("setDir", a), this
                }, this.swapDir = function() {
                    return this._fwd = !this._fwd, this.swapLocalDir(), this
                }, this.swapLocalDir = function() {
                    return this._localFwd = !this._localFwd, this._delayDummy && this._delayDummy.swapDir(), "tween" != this.type && this._propagateToAll("swapDir"), this
                }, this.play = function() {
                    return this._playAllowed && (this._reverseAllowed = !0, this._fwd || (this.pause(), this.swapDir()), this.resume()), this
                }, this.reverse = function() {
                    return this._reverseAllowed && (this._playAllowed = !0, this._fwd && (this.pause(), this.swapDir()), this.resume()), this
                }, this.pause = function() {
                    if (this._ready) {
                        if (this._stopProgress(), this._delayDummy) return this._delayDummy.pause(), this._paused = !0, this;
                        this._paused || (this._paused = !0, this._pauseTime = M.ticker.now(), this._position += (this._pauseTime - this._startTime) * this.getRealSpeed() * (this._localFwd ? 1 : -1), this._pauseTween())
                    }
                    return this
                }, this.resume = function() {
                    if (this._paused && (this._fwd && this._playAllowed || !this._fwd && this._reverseAllowed)) {
                        if (this._paused = !1, this.prepare(), this._delayDummy) return this._delayDummy.resume(), this;
                        if ("timeline" != this.type) {
                            var a = this._localFwd ? this._duration - this._position : this._position;
                            this._data.duration = n(a, this._coreTimeUnit, this._driverTimeUnit), this._data.realDuration = this._data.duration / this.getRealSpeed()
                        }
                        this._startTime = M.ticker.now(), this._duration && (this._playAllowed = !0, this._reverseAllowed = !0), this._running ? (this._duration && this._startProgress(), this._emulatedBegin && this._hasHandlers("_begin") && this._runHandlers("_begin"), "timeline" != this.type && (0 === this._position && this._localFwd || this._position == this._duration && !this._localFwd) && this._preTween(this._localFwd), this._resumeTween()) : (this._loopsCount = 0, this._delay ? this._emulateDelay(this._delay, this._run) : this._run())
                    }
                    return this
                }, this.restart = function() {
                    return this.pause(), this.setDir(!0), this.back(), this.resume(), this
                }, this.back = function() {
                    return this._loops && (this._fwd ? this._loopsCount = 0 : -1 != this._loops && (this._loopsCount = this._loops + 1)), this._running && this._back(), this._playAllowed = this._fwd, this._reverseAllowed = !this._playAllowed, this
                }, this.speed = function(a) {
                    if (void 0 === a) return this._speed;
                    if (this._running || this.invalidate(), a = u(a), a != this._speed) {
                        var b = !this._paused;
                        b && this.pause(), this._speed = a, b && this.resume()
                    }
                    return this
                }, this._getPosition = function() {
                    if (null !== this._time) return this._time;
                    if (this._paused) return this._position;
                    var a = M.ticker.now();
                    return Math.max(0, this._position + (a - this._startTime) * this.getRealSpeed() * (this._localFwd ? 1 : -1))
                }, this._getProgress = function() {
                    return Math.max(0, Math.min(1, this._getPosition() / this._duration))
                }, this._getPaused = function() {
                    return this._paused
                }, this._resetPosition = function() {
                    this._paused = !0, this._position = this._localFwd ? this._duration : 0, this._startTime = this._pauseTime = 0
                }, this._startProgress = function() {
                    this._emulatedProgress && this._hasHandlers("progress") && M.ticker.addCallback(0, this._id + "_progress", this._runHandlers, this, ["progress"])
                }, this._stopProgress = function() {
                    this._emulatedProgress && this._hasHandlers("progress") && M.ticker.removeCallback(this._id + "_progress")
                }, this._restart = function() {
                    this._delayDummy = null, this.pause(), this._back(), this.resume()
                }, this._back = function() {
                    if (this._position = this._localFwd ? 0 : this._duration, this._running) {
                        this._delayDummy = null;
                        var a = this._localFwd ? this._hasPre && 0 !== this._offset ? "pre" : "begin" : "end";
                        this._backTween(a)
                    }
                    return this
                }, this._loopRev = function() {
                    this._loopsCount--, this._restart()
                }, this._loopFwd = function() {
                    this._runHandlers("loop"), this._yoyo && this.swapLocalDir(), this._restart()
                }, this._loopCheck = function() {
                    this._delayDummy = null, this._fwd ? this._loopsCount++ : (this._yoyo && this.swapLocalDir(), this._runHandlers("loop")), this._loopsDelay ? (this._fwd || this._yoyo || this._back(), this._emulateDelay(this._loopsDelay, this._loopFwd, this._loopRev)) : this._fwd ? this._loopFwd() : this._loopRev()
                }, this._emulateDelay = function(a, b, c) {
                    var d = this._delayDummy = this._getDummy().duration(a).setCoreHandler("end", name, b, this);
                    c && (d.position(this._fwd ? 0 : a), this._emulatedPlayhead && this._hasHandlers("progress") && d.setCoreHandler("progress", "_progress", this._runHandlers, this, ["progress"]), d.setCoreHandler("reverse", name, c, this)), d[this._fwd ? "play" : "reverse"]()
                }, this._onTweenBegin = function() {
                    0 === this._position && this._localFwd && 0 === this._loopsCount && this._runHandlers("begin")
                }, this._onTweenEnd = function() {
                    this._resetPosition(), this._localFwd ? this._loopsCount == this._loops ? ("timeline" != this.type && this._postTween("end"), this._playAllowed = !1, this._time = this._duration, this._runHandlers("end"), this._time = null) : 0 !== this._loops && this._loopCheck() : 0 === this._loopsCount ? ("timeline" != this.type && this._postTween("begin"), this._reverseAllowed = !1, this._time = 0, this._runHandlers("reverse"), this._time = null) : 0 !== this._loops && this._loopCheck()
                }, this._getDummy = function() {
                    return M.get(null, "Dummy")
                }, this.setCoreHandler("_begin", "_begin", this._onTweenBegin, this), this.setCoreHandler("_end", "_end", this._onTweenEnd, this)
            },
            U = {},
            V = {},
            W = function() {
                this._beginReady = this._endReady = this._thenReady = !1, this._run = function() {
                    return this._duration && this._startProgress(), this._hasStaticProps && (this._fetchStaticProps(), this._setStaticProps("tween")), this._running = !0, this._delayDummy = null, this._emulatedBegin && this._hasHandlers("_begin") && this._runHandlers("_begin"), this._emulatedFrom && this._from && this._setTween("begin"), this._startTime = M.ticker.now(), this._playTween(), this
                }, this._backTween = function(a) {
                    this._resetTween(a)
                }, this._resetTween = function(a) {
                    this._setTween(a), this._postTween(a)
                }, this._preTween = function(a) {
                    var b = a ? "begin" : "end";
                    this._hasStaticProps && this._duration && this._setStaticProps(b, "tween"), this._setTween(b)
                }, this._postTween = function(a) {
                    "end" == a ? (this._hasThen && this._setTween("then"), this._hasStaticProps && this._setStaticProps(a, "then")) : (this._hasPre && 0 !== this._offset && this._setTween("pre"), this._setStaticProps(a))
                }, this._getTweenValues = function(a, b, c) {
                    var d, e, g, h, i = {},
                        j = 0;
                    for (g in a) d = a[g], e = null, h = d.easing, null !== d[b] && (j++, e = f(d[b]) ? Number(d[b]) : d[b], e = !c && this._allowMultipleEasing && h ? [e, this._getRealEasing(h)] : e, i[g] = e);
                    return j || (i.opacity = "+=0"), i
                }, this._getCurrentValue = function(b, c, d) {
                    var e = d ? b.style : a.getComputedStyle(b);
                    return e[c]
                }, this._fetchStaticProps = function() {
                    this._staticProps = [];
                    var a, b, c, d, e, f, g, h, i, k, l;
                    for (b = 0, c = this._getTargetLength(); c > b; b++) {
                        a = this._target.get(b), d = {
                            display: !1,
                            visibility: !1
                        }, this._staticProps[b] = {
                            begin: {},
                            end: {},
                            then: {},
                            tween: {}
                        };
                        for (e in d) g = "_" + e, h = j(this[g]), h.mask > 0 && (h.mask < 7 && (f = this._getCurrentValue(a, e, !1), null === h.begin && (h.begin = f), null === h.end && (h.end = f, null === h.then && (h.then = f))), l = this._staticProps[b], l.begin[e] = h.begin, l.end[e] = h.end, l.then[e] = h.then, i = "display" == e ? "none" : "hidden", k = h.begin != i ? h.begin : h.end != i ? h.end : !1, k !== !1 && (l.tween[e] = k))
                    }
                }, this._setStaticProps = function(a, b) {
                    if (this._staticProps.length) {
                        var c, d, e;
                        for (c = 0, d = this._getTargetLength(); d > c; c++) e = this._staticProps[c][a], b && (e = i(e, this._staticProps[c][b])), g(e) || this._target.eq(c).css(e)
                    }
                }, this._getRealEasing = function(a) {
                    if (d(a) && a in H && (a = H[a]), K(a)) {
                        var b = this._position;
                        this._localFwd || (a = w(a), b = this._duration - b);
                        var c = b / this._duration;
                        a = this._getBezierEasing(x(a, c))
                    }
                    return a
                }
            },
            X = function() {
                this._emulatedPlayhead = !0, this._emulatedBegin = !0, this._emulatedProgress = !0, this._runningList = {}, this._runningCount = 0, this._keyframes = {}, this._index = [], this._childrenList = [], this._backKeyframes = {}, this._backIndex = [], this._backEnabled = !0, this._propagate = function(a) {
                    var b = m(arguments, 1);
                    for (var c in this._runningList) this._runningList[c][a].apply(this._runningList[c], b);
                    return this
                }, this._propagateToAll = function(a) {
                    for (var b = m(arguments, 1), c = 0, d = this._childrenList.length; d > c; c++) this._childrenList[c][a].apply(this._childrenList[c], b);
                    return this
                }, this.prepare = function() {
                    if (this._ready) return this;
                    var a = function(a, b) {
                        return a - b
                    };
                    if (this._reset(), this._emulatedProgress && this.setCoreHandler("end", "_progress", this._stopProgress, this, []).setCoreHandler("reverse", "_progress", this._stopProgress, this, []), this._mergeChildren(), this._index.sort(a), !this._index.length) return this._ready = !0, this;
                    var b = 1,
                        c = this._index[0];
                    0 !== c && (this._keyframes[0] = {
                        f: [],
                        b: [],
                        fTrigger: null,
                        bTrigger: null
                    }, this._addDummy(0, c), this._keyframes[0].bTrigger = null, this._index.unshift(0), b++);
                    for (var d, e, f, g = this._index.length - 1; g > b; b++) {
                        if (d = this._index[b], e = this._keyframes[d], !e.bTrigger) {
                            for (f = b - 1; f > 0 && !this._keyframes[this._index[f]].bTrigger;) f--;
                            this._addDummy(this._index[f], d)
                        }
                        if (!e.fTrigger) {
                            for (f = b + 1; f < this._index.length - 2 && !this._keyframes[this._index[f]].fTrigger;) f++;
                            this._addDummy(d, this._index[f])
                        }
                    }
                    return this._backIndex.sort(a), this._ready = !0, this._getTotalDuration()
                }, this.pushUp = function(a, b, c, d) {
                    return this._parent ? this._parent.pushUp(a, b + d, c + d, 0) : "tween" == a.type && a.offset(b + d), this._addToIndex(a, b, c, !1, !1, !0), this
                }, this._reset = function() {
                    this._offset = 0, this._cursor = null, this._keyframes = {}, this._index = [], this._backKeyframes = {}, this._backIndex = []
                }, this._addDummy = function(a, b) {
                    var c = this._getDummy(),
                        d = this._addToIndex(c, a, b, !0, !0, !1);
                    this.pushUp(c, a, b), c.parent(this).duration(b - a).setCoreHandler("reverse", "timeline", this._childCallback, this, ["b", a, c.id(), d[0]]).setCoreHandler("end", "timeline", this._childCallback, this, ["f", b, c.id(), d[1]]), this._childrenList.push(c)
                }, this._addToIndex = function(a, b, c, d, e, f) {
                    var g, h, i, j;
                    return f ? (g = this._backKeyframes, h = this._backIndex) : (g = this._keyframes, h = this._index), b in g || (g[b] = {
                        f: [],
                        b: [],
                        fTrigger: null,
                        bTrigger: null
                    }, h.push(b)), g[b].f.push(a), i = d && !this._keyframes[b].fTrigger, i && (g[b].fTrigger = a), 1 / 0 != c && (c in g || (g[c] = {
                        f: [],
                        b: [],
                        fTrigger: null,
                        bTrigger: null
                    }, h.push(c)), g[c].b.push(a), j = e && !this._keyframes[c].bTrigger, j && (g[c].bTrigger = a)), [i, j]
                }, this._mergeLabel = function() {}, this._mergeTweenable = function(a, b, c) {
                    this._childrenList.push(a), this._mergeElement(a, b, c, !0)
                }, this._mergeCallback = function(a, b, c) {
                    this._mergeElement(a, b, c, !1)
                }, this._mergeElement = function(a, b, c, d) {
                    var e = c > b,
                        f = this._addToIndex(a, b, c, e, e, !1);
                    d && (this.pushUp(a, b, c, this._offset), a.setCoreHandler("reverse", "timeline", this._childCallback, this, ["b", b, a.id(), f[0]]), 1 / 0 != c && a.setCoreHandler("end", "timeline", this._childCallback, this, ["f", c, a.id(), f[1]]))
                }, this._childCallback = function(a, b, c, d) {
                    if (c in this._runningList && (delete this._runningList[c], this._runningCount--), d) {
                        if (b in this._keyframes)
                            for (var e = this._keyframes[b][a], f = 0, g = e.length; g > f; f++) "callback" != e[f].type && this._addToRun(e[f]), e[f].resume();
                        ("b" == a && 0 === b || "f" == a && b == this._index[this._index.length - 1]) && this._runHandlers("_end")
                    }
                }, this._run = function() {
                    return this._running = !0, this._delayDummy = null, this._emulatedBegin && this._hasHandlers("_begin") && this._runHandlers("_begin"), this._startTime = M.ticker.now(), this._playTween(), this
                }, this._playTween = function() {
                    this._childCallback("f", 0, -1, !0)
                }, this._pauseTween = function() {
                    this._propagate("pause")
                }, this._resumeTween = function() {
                    if (this._startProgress(), this._runningCount) this._propagate("resume");
                    else {
                        var a = !1,
                            b = this._localFwd;
                        b && 0 === this._position ? a = ["f", 0, -1, !0] : b || this._position != this._duration || (a = ["b", this._index.length ? this._index[this._index.length - 1] : 0, -1, !0]), a && this._childCallback.apply(this, a)
                    }
                }, this._backTween = function() {
                    if (this._runningList = {}, this._runningCount = 0, this._backEnabled) {
                        var a, b, c, d, e, f;
                        for (this._localFwd ? (a = this._backIndex.length - 1, b = -1, c = -1, d = "f") : (a = 0, b = this._backIndex.length, c = 1, d = "b"); a != b; a += c) {
                            f = this._backIndex[a], e = this._backKeyframes[f][d];
                            for (var g = e.length - 1; g >= 0; g--) {
                                var h = e[g];
                                h._backEnabled = !1, h.pause().back(), h._backEnabled = !0
                            }
                        }
                    }
                }, this._addToRun = function(a) {
                    if (a.totalDuration()) {
                        var b = a.id();
                        b in this._runningList || (this._runningCount++, this._runningList[b] = a)
                    }
                    return this
                }, this._removeFromRun = function(a) {
                    var b = a.id();
                    return b in this._runningList && (this._runningCount--, delete this._runningList[b]), this
                }
            };
        return M.registerDriver("Dummy", "tween", function() {
            N.call(this), Q.call(this), T.call(this), W.call(this), this._driverTimeUnit = "ms", this._emulatedPlayhead = !0, this._emulatedProgress = !0, this.setCoreHandler("end", "resetPos", this._resetPosition, this).setCoreHandler("reverse", "resetPos", this._resetPosition, this).setCoreHandler("end", "_progress", this._stopProgress, this).setCoreHandler("reverse", "_progress", this._stopProgress, this), this.invalidate = function() {
                return this
            }, this.pause = function() {
                return this._paused || (this._stopProgress(), M.ticker.removeCallback(this._id), this._paused = !0, this._pauseTime = M.ticker.now(), this._position += (this._pauseTime - this._startTime) * this.getRealSpeed() * (this._localFwd ? 1 : -1)), this
            }, this.position = function(a) {
                return this._position = a, 0 === a ? this._playAllowed = !0 : a == this._duration && (this._reverseAllowed = !0), this
            }, this.duration = function(a) {
                return this._duration = a, this
            }, this.resume = function() {
                if (this._paused) {
                    this._running = !0, this._paused = !1;
                    var a = this._localFwd ? "end" : "reverse";
                    this._localFwd && 0 === this._position && this._runHandlers("begin");
                    var b = (this._localFwd ? this._duration - this._position : this._position) / this.getRealSpeed();
                    if (b) {
                        var c = [b, this._id, this._runHandlers, this, [a]];
                        this._startTime = M.ticker.now(), M.ticker.addCallback.apply(M.ticker, c), this._startProgress()
                    } else this._runHandlers(a)
                }
                return this
            }, this._backTween = function() {}
        }), M.registerDriver("transit", "tween", function() {
            N.call(this), Q.call(this), T.call(this), W.call(this), this._driverTimeUnit = "ms", this._emulatedPlayhead = !0, this._emulatedFrom = !0, this._emulatedDelay = !0, this._emulatedLoop = !0, this._emulatedBegin = !0, this._emulatedProgress = !0, this._allowTransform = !0, this._allowMultipleEasing = !1, this._propertyMap = {
                translateX: "x",
                translateY: "y",
                translateZ: "z",
                rotateZ: "rotate",
                rotation: "rotate",
                rotationX: "rotateX",
                rotationY: "rotateY",
                rotationZ: "rotate",
                scaleZ: "scale"
            }, y.transit.useTransitionEnd = !0, this._emulatingComplete = !1, this._currentEasing = null, this._styles = [], this._firstRun = !0, this._rotationFixed = !1, this._getTargetStyle = function(b, c) {
                if (b >= this._styles.length) {
                    var d = this._target.get(b);
                    this._styles[b] = [a.getComputedStyle(d), d.style]
                }
                return this._styles[b][c ? 1 : 0]
            }, this._getBezierEasing = function(a) {
                return null === this._currentEasing && (this._currentEasing = a), "cubic-bezier(" + a.join(", ") + ")"
            }, this._getTransformValue = function(a, b, c) {
                var d = a.data("transform");
                if (!(d && b in d)) {
                    if (c) return null;
                    0 === b.indexOf("scale") ? b = "scale" : 0 === b.indexOf("rotate") && (b = "rotate")
                }
                return a.css(b)
            }, this._getCurrentValues = function(b, c, d, e) {
                var f, g, h, i = b.get(0),
                    j = d ? i.style : a.getComputedStyle(i);
                for (f in c) c[f].isTransform ? g = this._getTransformValue(b, f) : (h = v(j, f), h[0] != f && (c[h[0]] = c[f], delete c[f], f = h[0]), g = h[1]), void 0 !== g && e.call(this, c, f, g)
            }, this._fetchBeginPre = function(a, b, c) {
                var d = a[b];
                d.pre = c, this._hasEnd || (d.end = c, this._hasThen && null === d.then && (d.then = c)), this._hasPre = !0
            }, this._fetchBeginPost = function(a, b, c) {
                var d = a[b];
                d.begin = c, null === d.end && (d.end = c, this._hasThen && null === d.then && (d.then = c))
            }, this._fetchThen = function(a, b, c) {
                a[b].then = c
            }, this._fetchPlayPre = function(a, b, c) {
                var d = a[b];
                d.begin = c, null === d.end && (d.end = c), this._hasThen && null === d.then && (d.then = c)
            }, this._fetchPlayPost = function(a, b, c) {
                var d = a[b];
                d.end = c, this._hasThen && null === d.then && (d.then = c)
            }, this._setTween = function(a) {
                var b, c, d, e;
                for (d = 0, e = this._target.length; e > d; d++) {
                    b = this._data.tween[d], c = this._target.eq(d), "begin" == a && this._hasBegin && !this._beginReady && this._getCurrentValues(c, b, !1, this._fetchBeginPre);
                    var f = this._getTweenValues(b, a, !0);
                    this._target.eq(d).css(f), "begin" == a && this._hasBegin && !this._beginReady ? this._getCurrentValues(c, b, !1, this._fetchBeginPost) : "then" == a && this._hasThen && !this._thenReady && this._getCurrentValues(c, b, !1, this._fetchThen)
                }
                return "begin" == a ? this._beginReady = !0 : "then" == a && (this._thenReady = !0), this
            }, this._playTween = function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, m = this._data,
                    n = this,
                    o = m.duration > 0,
                    p = o ? "transition" : "css",
                    q = this._localFwd ? "end" : "begin",
                    r = ["left", "top", "right", "bottom"],
                    s = function() {
                        return n._target.css("transition", "none"), n._runHandlers("_end"), !1
                    };
                for (g = 0, h = this._target.length; h > g; g++) {
                    var t = m.tween[g],
                        u = this._target.eq(g);
                    if (this._beginReady || this._getCurrentValues(u, t, !1, this._fetchPlayPre), k = this._getTweenValues(t, q, !1), o && (k.duration = m.realDuration, k.queue = !1, m.duration && (k.easing = this._getRealEasing(m.easing)), this._firstRun)) {
                        for (a = !1, c = null, d = null, b = u.get(0), i = 0, j = r.length; j > i; i++) f = r[i], f in k && (c || (c = this._getTargetStyle(g, !0), d = this._getTargetStyle(g, !1)), e = c[f], ("" === e || "auto" === e) && (c[f] = "auto" == d[f] ? u.position()[f] : d[f], a = !0));
                        a && (l = b.offsetWidth)
                    }
                    o && g == h - 1 ? (this._emulatingComplete = !0, M.ticker.addCallback(m.realDuration, "-emulate" + this._id, s), u.transition(k), u.unbind("transitionend")) : u[p](k), this._endReady || this._getCurrentValues(u, t, !0, this._fetchPlayPost)
                }
                return this._firstRun = !1, this._beginReady = !0, this._endReady = !0, o || this._runHandlers("_end"), this
            }, this._pauseTween = function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, m, n, p, q, r = null,
                    s = null;
                for (this._emulatingComplete && M.ticker.removeCallback("-emulate" + this._id), this._target.unbind(y.support.transitionEnd), i = 0, j = this._target.length; j > i; i++) {
                    k = {}, l = this._getTargetStyle(i, !1), m = this._data.tween[i], n = this._target.eq(i);
                    for (p in m) q = m[p], q.isTransform ? "x" == p || "y" == p || "z" == p ? (s || (a = v(l, "transform")[1], s = a.substring(a.indexOf("(") + 1, a.length - 1).split(/\s*,\s*/), b = 0 === a.indexOf("matrix3d") ? 12 : 4), c = b + ("z" == p ? 2 : "y" == p ? 1 : 0), k[p] = s[c]) : (r || (r = o.apply(null, this._currentEasing), d = this.progress(), e = r(d)), f = parseFloat(q.begin), g = parseFloat(q.end), h = (g - f) * e + f, k[p] = h) : k[p] = l[p];
                    k[v(l, "transition")[0]] = "none", n.css(k)
                }
                return this
            }, this._resumeTween = function() {
                return this._playTween()
            }
        }), M.registerDriver("transit", "timeline", function() {
            N.call(this), R.call(this), T.call(this), X.call(this), this._driverTimeUnit = "ms"
        }), M.defaultTimeUnit = "ms", M.defaultDriver = "transit", M
    };
    if ("function" == typeof define && define.amd) define(["jquery", "jquery.transit"], b);
    else if ("undefined" != typeof module && module.exports) {
        var c;
        c = require("jquery"), a && (a.jQuery = a.$ = c), c = require("jquery.transit"), module.exports = b(a)
    } else b(a)
}("undefined" != typeof global ? global : window);
