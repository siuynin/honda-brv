!function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {i: i, l: !1, exports: {}};
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }

    var n = {};
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: i})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 48)
}([function (t, e, n) {
    var i, r;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
    !function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";

        function s(t, e, n) {
            n = n || ft;
            var i, r, o = n.createElement("script");
            if (o.text = t, e) for (i in Tt) (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function a(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? yt[wt.call(t)] || "object" : typeof t
        }

        function l(t) {
            var e = !!t && "length" in t && t.length, n = a(t);
            return !Ct(t) && !kt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function c(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function u(t, e, n) {
            return Ct(e) ? Et.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? Et.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? Et.grep(t, function (t) {
                return mt.call(e, t) > -1 !== n
            }) : Et.filter(e, t, n)
        }

        function d(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        function f(t) {
            var e = {};
            return Et.each(t.match(Nt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function h(t) {
            return t
        }

        function p(t) {
            throw t
        }

        function g(t, e, n, i) {
            var r;
            try {
                t && Ct(r = t.promise) ? r.call(t).done(e).fail(n) : t && Ct(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function v() {
            ft.removeEventListener("DOMContentLoaded", v), n.removeEventListener("load", v), Et.ready()
        }

        function m(t, e) {
            return e.toUpperCase()
        }

        function y(t) {
            return t.replace(Ht, "ms-").replace(Wt, m)
        }

        function w() {
            this.expando = Et.expando + w.uid++
        }

        function b(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ut.test(t) ? JSON.parse(t) : t)
        }

        function x(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Vt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = b(n)
                } catch (t) {
                }
                Yt.set(t, e, n)
            } else n = void 0;
            return n
        }

        function S(t, e, n, i) {
            var r, o, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return Et.css(t, e, "")
                }, l = a(), c = n && n[3] || (Et.cssNumber[e] ? "" : "px"),
                u = t.nodeType && (Et.cssNumber[e] || "px" !== c && +l) && Qt.exec(Et.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) Et.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                u *= 2, Et.style(t, e, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function _(t) {
            var e, n = t.ownerDocument, i = t.nodeName, r = ie[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = Et.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ie[i] = r, r)
        }

        function C(t, e) {
            for (var n, i, r = [], o = 0, s = t.length; o < s; o++) i = t[o], i.style && (n = i.style.display, e ? ("none" === n && (r[o] = Xt.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ee(i) && (r[o] = _(i))) : "none" !== n && (r[o] = "none", Xt.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }

        function k(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && c(t, e) ? Et.merge([t], n) : n
        }

        function T(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Xt.set(t[n], "globalEval", !e || Xt.get(e[n], "globalEval"))
        }

        function E(t, e, n, i, r) {
            for (var o, s, l, c, u, d, f = e.createDocumentFragment(), h = [], p = 0, g = t.length; p < g; p++) if ((o = t[p]) || 0 === o) if ("object" === a(o)) Et.merge(h, o.nodeType ? [o] : o); else if (le.test(o)) {
                for (s = s || f.appendChild(e.createElement("div")), l = (oe.exec(o) || ["", ""])[1].toLowerCase(), c = ae[l] || ae._default, s.innerHTML = c[1] + Et.htmlPrefilter(o) + c[2], d = c[0]; d--;) s = s.lastChild;
                Et.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(o));
            for (f.textContent = "", p = 0; o = h[p++];) if (i && Et.inArray(o, i) > -1) r && r.push(o); else if (u = Kt(o), s = k(f.appendChild(o), "script"), u && T(s), n) for (d = 0; o = s[d++];) se.test(o.type || "") && n.push(o);
            return f
        }

        function A() {
            return !0
        }

        function P() {
            return !1
        }

        function D(t, e) {
            return t === M() == ("focus" === e)
        }

        function M() {
            try {
                return ft.activeElement
            } catch (t) {
            }
        }

        function O(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) O(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = P; else if (!r) return t;
            return 1 === o && (s = r, r = function (t) {
                return Et().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = Et.guid++)), t.each(function () {
                Et.event.add(this, e, r, i, n)
            })
        }

        function L(t, e, n) {
            if (!n) return void (void 0 === Xt.get(t, e) && Et.event.add(t, e, A));
            Xt.set(t, e, !1), Et.event.add(t, e, {
                namespace: !1, handler: function (t) {
                    var i, r, o = Xt.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length) (Et.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = pt.call(arguments), Xt.set(this, e, o), i = n(this, e), this[e](), r = Xt.get(this, e), o !== r || i ? Xt.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else o.length && (Xt.set(this, e, {value: Et.event.trigger(Et.extend(o[0], Et.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
                }
            })
        }

        function I(t, e) {
            return c(t, "table") && c(11 !== e.nodeType ? e : e.firstChild, "tr") ? Et(t).children("tbody")[0] || t : t
        }

        function j(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function z(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function R(t, e) {
            var n, i, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (Xt.hasData(t) && (o = Xt.access(t), s = Xt.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c) for (n = 0, i = c[r].length; n < i; n++) Et.event.add(e, r, c[r][n])
                }
                Yt.hasData(t) && (a = Yt.access(t), l = Et.extend({}, a), Yt.set(e, l))
            }
        }

        function N(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && re.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function B(t, e, n, i) {
            e = gt.apply([], e);
            var r, o, a, l, c, u, d = 0, f = t.length, h = f - 1, p = e[0], g = Ct(p);
            if (g || f > 1 && "string" == typeof p && !_t.checkClone && pe.test(p)) return t.each(function (r) {
                var o = t.eq(r);
                g && (e[0] = p.call(this, r, o.html())), B(o, e, n, i)
            });
            if (f && (r = E(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = Et.map(k(r, "script"), j), l = a.length; d < f; d++) c = r, d !== h && (c = Et.clone(c, !0, !0), l && Et.merge(a, k(c, "script"))), n.call(t[d], c, d);
                if (l) for (u = a[a.length - 1].ownerDocument, Et.map(a, z), d = 0; d < l; d++) c = a[d], se.test(c.type || "") && !Xt.access(c, "globalEval") && Et.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Et._evalUrl && !c.noModule && Et._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}) : s(c.textContent.replace(ge, ""), c, u))
            }
            return t
        }

        function $(t, e, n) {
            for (var i, r = e ? Et.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Et.cleanData(k(i)), i.parentNode && (n && Kt(i) && T(k(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function F(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || me(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || Kt(t) || (s = Et.style(t, e)), !_t.pixelBoxStyles() && ve.test(s) && ye.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function H(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function W(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = we.length; n--;) if ((t = we[n] + e) in be) return t
        }

        function q(t) {
            var e = Et.cssProps[t] || xe[t];
            return e || (t in be ? t : xe[t] = W(t) || t)
        }

        function X(t, e, n) {
            var i = Qt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function Y(t, e, n, i, r, o) {
            var s = "width" === e ? 1 : 0, a = 0, l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += Et.css(t, n + Zt[s], !0, r)), i ? ("content" === n && (l -= Et.css(t, "padding" + Zt[s], !0, r)), "margin" !== n && (l -= Et.css(t, "border" + Zt[s] + "Width", !0, r))) : (l += Et.css(t, "padding" + Zt[s], !0, r), "padding" !== n ? l += Et.css(t, "border" + Zt[s] + "Width", !0, r) : a += Et.css(t, "border" + Zt[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
        }

        function U(t, e, n) {
            var i = me(t), r = !_t.boxSizingReliable() || n, o = r && "border-box" === Et.css(t, "boxSizing", !1, i),
                s = o, a = F(t, e, i), l = "offset" + e[0].toUpperCase() + e.slice(1);
            if (ve.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!_t.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === Et.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === Et.css(t, "boxSizing", !1, i), (s = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + Y(t, e, n || (o ? "border" : "content"), s, i, a) + "px"
        }

        function V(t, e, n, i, r) {
            return new V.prototype.init(t, e, n, i, r)
        }

        function G() {
            Ee && (!1 === ft.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(G) : n.setTimeout(G, Et.fx.interval), Et.fx.tick())
        }

        function Q() {
            return n.setTimeout(function () {
                Te = void 0
            }), Te = Date.now()
        }

        function Z(t, e) {
            var n, i = 0, r = {height: t};
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Zt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function J(t, e, n) {
            for (var i, r = (et.tweeners[e] || []).concat(et.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, e, t)) return i
        }

        function K(t, e, n) {
            var i, r, o, s, a, l, c, u, d = "width" in e || "height" in e, f = this, h = {}, p = t.style,
                g = t.nodeType && ee(t), v = Xt.get(t, "fxshow");
            n.queue || (s = Et._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, Et.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (i in e) if (r = e[i], Ae.test(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0
                }
                h[i] = v && v[i] || Et.style(t, i)
            }
            if ((l = !Et.isEmptyObject(e)) || !Et.isEmptyObject(h)) {
                d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = v && v.display, null == c && (c = Xt.get(t, "display")), u = Et.css(t, "display"), "none" === u && (c ? u = c : (C([t], !0), c = t.style.display || c, u = Et.css(t, "display"), C([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === Et.css(t, "float") && (l || (f.done(function () {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in h) l || (v ? "hidden" in v && (g = v.hidden) : v = Xt.access(t, "fxshow", {display: c}), o && (v.hidden = !g), g && C([t], !0), f.done(function () {
                    g || C([t]), Xt.remove(t, "fxshow");
                    for (i in h) Et.style(t, i, h[i])
                })), l = J(g ? v[i] : 0, i, f), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function tt(t, e) {
            var n, i, r, o, s;
            for (n in t) if (i = y(n), r = e[i], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = Et.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
        }

        function et(t, e, n) {
            var i, r, o = 0, s = et.prefilters.length, a = Et.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r) return !1;
                for (var e = Te || Q(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), o < 1 && l ? n : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: Et.extend({}, e),
                opts: Et.extend(!0, {specialEasing: {}, easing: Et.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Te || Q(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = Et.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (tt(u, c.opts.specialEasing); o < s; o++) if (i = et.prefilters[o].call(c, t, u, c.opts)) return Ct(i.stop) && (Et._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return Et.map(u, J, c), Ct(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), Et.fx.timer(Et.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function nt(t) {
            return (t.match(Nt) || []).join(" ")
        }

        function it(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function rt(t) {
            return Array.isArray(t) ? t : "string" == typeof t ? t.match(Nt) || [] : []
        }

        function ot(t, e, n, i) {
            var r;
            if (Array.isArray(e)) Et.each(e, function (e, r) {
                n || $e.test(t) ? i(t, r) : ot(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            }); else if (n || "object" !== a(e)) i(t, e); else for (r in e) ot(t + "[" + r + "]", e[r], n, i)
        }

        function st(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0, o = e.toLowerCase().match(Nt) || [];
                if (Ct(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function at(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, Et.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, s = t === Je;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function lt(t, e) {
            var n, i, r = Et.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && Et.extend(!0, t, i), t
        }

        function ct(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i) for (r in a) if (a[r] && a[r].test(i)) {
                l.unshift(r);
                break
            }
            if (l[0] in n) o = l[0]; else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
        }

        function ut(t, e, n, i) {
            var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                    break
                }
                if (!0 !== s) if (s && t.throws) e = s(e); else try {
                    e = s(e)
                } catch (t) {
                    return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        var dt = [], ft = n.document, ht = Object.getPrototypeOf, pt = dt.slice, gt = dt.concat, vt = dt.push,
            mt = dt.indexOf, yt = {}, wt = yt.toString, bt = yt.hasOwnProperty, xt = bt.toString, St = xt.call(Object),
            _t = {}, Ct = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, kt = function (t) {
                return null != t && t === t.window
            }, Tt = {type: !0, src: !0, nonce: !0, noModule: !0}, Et = function (t, e) {
                return new Et.fn.init(t, e)
            }, At = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Et.fn = Et.prototype = {
            jquery: "3.4.1", constructor: Et, length: 0, toArray: function () {
                return pt.call(this)
            }, get: function (t) {
                return null == t ? pt.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = Et.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return Et.each(this, t)
            }, map: function (t) {
                return this.pushStack(Et.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(pt.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: vt, sort: dt.sort, splice: dt.splice
        }, Et.extend = Et.fn.extend = function () {
            var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Ct(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (Et.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || Et.isPlainObject(n) ? n : {}, r = !1, s[e] = Et.extend(c, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, Et.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== wt.call(t)) && (!(e = ht(t)) || "function" == typeof (n = bt.call(e, "constructor") && e.constructor) && xt.call(n) === St)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, globalEval: function (t, e) {
                s(t, {nonce: e && e.nonce})
            }, each: function (t, e) {
                var n, i = 0;
                if (l(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(At, "")
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (l(Object(t)) ? Et.merge(n, "string" == typeof t ? [t] : t) : vt.call(n, t)), n
            }, inArray: function (t, e, n) {
                return null == e ? -1 : mt.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            }, grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            }, map: function (t, e, n) {
                var i, r, o = 0, s = [];
                if (l(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r); else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                return gt.apply([], s)
            }, guid: 1, support: _t
        }), "function" == typeof Symbol && (Et.fn[Symbol.iterator] = dt[Symbol.iterator]), Et.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            yt["[object " + e + "]"] = e.toLowerCase()
        });
        var Pt =/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
            function (t) {
                function e(t, e, n, i) {
                    var r, o, s, a, l, u, f, h = e && e.ownerDocument, p = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                    if (!i && ((e ? e.ownerDocument || e : B) !== M && D(e), e = e || M, L)) {
                        if (11 !== p && (l = mt.exec(t))) if (r = l[1]) {
                            if (9 === p) {
                                if (!(s = e.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (h && (s = h.getElementById(r)) && R(e, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(r)), n
                        }
                        if (b.qsa && !X[t + " "] && (!I || !I.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                            if (f = t, h = e, 1 === p && ct.test(t)) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(xt, St) : e.setAttribute("id", a = N), u = C(t), o = u.length; o--;) u[o] = "#" + a + " " + d(u[o]);
                                f = u.join(","), h = yt.test(t) && c(e.parentNode) || e
                            }
                            try {
                                return Z.apply(n, h.querySelectorAll(f)), n
                            } catch (e) {
                                X(t, !0)
                            } finally {
                                a === N && e.removeAttribute("id")
                            }
                        }
                    }
                    return T(t.replace(st, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }

                    var e = [];
                    return t
                }

                function i(t) {
                    return t[N] = !0, t
                }

                function r(t) {
                    var e = M.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
                }

                function s(t, e) {
                    var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function l(t) {
                    return i(function (e) {
                        return e = +e, i(function (n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                function u() {
                }

                function d(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir, r = e.next, o = r || i, s = n && "parentNode" === o, a = F++;
                    return e.first ? function (e, n, r) {
                        for (; e = e[i];) if (1 === e.nodeType || s) return t(e, n, r);
                        return !1
                    } : function (e, n, l) {
                        var c, u, d, f = [$, a];
                        if (l) {
                            for (; e = e[i];) if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                        } else for (; e = e[i];) if (1 === e.nodeType || s) if (d = e[N] || (e[N] = {}), u = d[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e; else {
                            if ((c = u[o]) && c[0] === $ && c[1] === a) return f[2] = c[2];
                            if (u[o] = f, f[2] = t(e, n, l)) return !0
                        }
                        return !1
                    }
                }

                function h(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function p(t, n, i) {
                    for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
                    return i
                }

                function g(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
                    return s
                }

                function v(t, e, n, r, o, s) {
                    return r && !r[N] && (r = v(r)), o && !o[N] && (o = v(o, s)), i(function (i, s, a, l) {
                        var c, u, d, f = [], h = [], v = s.length, m = i || p(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !i && e ? m : g(m, f, t, a, l), w = n ? o || (i ? t : v || r) ? [] : s : y;
                        if (n && n(y, w, a, l), r) for (c = g(w, h), r(c, [], a, l), u = c.length; u--;) (d = c[u]) && (w[h[u]] = !(y[h[u]] = d));
                        if (i) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], u = w.length; u--;) (d = w[u]) && c.push(y[u] = d);
                                    o(null, w = [], c, l)
                                }
                                for (u = w.length; u--;) (d = w[u]) && (c = o ? K(i, d) : f[u]) > -1 && (i[c] = !(s[c] = d))
                            }
                        } else w = g(w === s ? w.splice(v, w.length) : w), o ? o(null, s, w, l) : Z.apply(s, w)
                    })
                }

                function m(t) {
                    for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                        return t === e
                    }, s, !0), c = f(function (t) {
                        return K(e, t) > -1
                    }, s, !0), u = [function (t, n, i) {
                        var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, r
                    }]; a < r; a++) if (n = x.relative[t[a].type]) u = [f(h(u), n)]; else {
                        if (n = x.filter[t[a].type].apply(null, t[a].matches), n[N]) {
                            for (i = ++a; i < r && !x.relative[t[i].type]; i++) ;
                            return v(a > 1 && h(u), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(st, "$1"), n, a < i && m(t.slice(a, i)), i < r && m(t = t.slice(i)), i < r && d(t))
                        }
                        u.push(n)
                    }
                    return h(u)
                }

                function y(t, n) {
                    var r = n.length > 0, o = t.length > 0, s = function (i, s, a, l, c) {
                        var u, d, f, h = 0, p = "0", v = i && [], m = [], y = E, w = i || o && x.find.TAG("*", c),
                            b = $ += null == y ? 1 : Math.random() || .1, S = w.length;
                        for (c && (E = s === M || s || c); p !== S && null != (u = w[p]); p++) {
                            if (o && u) {
                                for (d = 0, s || u.ownerDocument === M || (D(u), a = !L); f = t[d++];) if (f(u, s || M, a)) {
                                    l.push(u);
                                    break
                                }
                                c && ($ = b)
                            }
                            r && ((u = !f && u) && h--, i && v.push(u))
                        }
                        if (h += p, r && p !== h) {
                            for (d = 0; f = n[d++];) f(v, m, s, a);
                            if (i) {
                                if (h > 0) for (; p--;) v[p] || m[p] || (m[p] = G.call(l));
                                m = g(m)
                            }
                            Z.apply(l, m), c && !i && m.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && ($ = b, E = y), v
                    };
                    return r ? i(s) : s
                }

                var w, b, x, S, _, C, k, T, E, A, P, D, M, O, L, I, j, z, R, N = "sizzle" + 1 * new Date,
                    B = t.document, $ = 0, F = 0, H = n(), W = n(), q = n(), X = n(), Y = function (t, e) {
                        return t === e && (P = !0), 0
                    }, U = {}.hasOwnProperty, V = [], G = V.pop, Q = V.push, Z = V.push, J = V.slice, K = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                        return -1
                    },
                    tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    et = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    it = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
                    rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                    ot = new RegExp(et + "+", "g"),
                    st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                    at = new RegExp("^" + et + "*," + et + "*"),
                    lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"), ct = new RegExp(et + "|>"),
                    ut = new RegExp(rt), dt = new RegExp("^" + nt + "$"), ft = {
                        ID: new RegExp("^#(" + nt + ")"),
                        CLASS: new RegExp("^\\.(" + nt + ")"),
                        TAG: new RegExp("^(" + nt + "|[*])"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + rt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + tt + ")$", "i"),
                        needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                    }, ht = /HTML$/i, pt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i,
                    vt = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"), bt = function (t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, St = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, _t = function () {
                        D()
                    }, Ct = f(function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }, {dir: "parentNode", next: "legend"});
                try {
                    Z.apply(V = J.call(B.childNodes), B.childNodes), V[B.childNodes.length].nodeType
                } catch (t) {
                    Z = {
                        apply: V.length ? function (t, e) {
                            Q.apply(t, J.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                            t.length = n - 1
                        }
                    }
                }
                b = e.support = {}, _ = e.isXML = function (t) {
                    var e = t.namespaceURI, n = (t.ownerDocument || t).documentElement;
                    return !ht.test(e || n && n.nodeName || "HTML")
                }, D = e.setDocument = function (t) {
                    var e, n, i = t ? t.ownerDocument || t : B;
                    return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, O = M.documentElement, L = !_(M), B !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), b.attributes = r(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), b.getElementsByTagName = r(function (t) {
                        return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                    }), b.getElementsByClassName = vt.test(M.getElementsByClassName), b.getById = r(function (t) {
                        return O.appendChild(t).id = N, !M.getElementsByName || !M.getElementsByName(N).length
                    }), b.getById ? (x.filter.ID = function (t) {
                        var e = t.replace(wt, bt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && L) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function (t) {
                        var e = t.replace(wt, bt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && L) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
                    }, j = [], I = [], (b.qsa = vt.test(M.querySelectorAll)) && (r(function (t) {
                        O.appendChild(t).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll("[id~=" + N + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + N + "+*").length || I.push(".#.+[+~]")
                    }), r(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = M.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + et + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (b.matchesSelector = vt.test(z = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                        b.disconnectedMatch = z.call(t, "*"), z.call(t, "[s!='']:x"), j.push("!=", rt)
                    }), I = I.length && new RegExp(I.join("|")), j = j.length && new RegExp(j.join("|")), e = vt.test(O.compareDocumentPosition), R = e || vt.test(O.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, Y = e ? function (t, e) {
                        if (t === e) return P = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === M || t.ownerDocument === B && R(B, t) ? -1 : e === M || e.ownerDocument === B && R(B, e) ? 1 : A ? K(A, t) - K(A, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return P = !0, 0;
                        var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                        if (!r || !o) return t === M ? -1 : e === M ? 1 : r ? -1 : o ? 1 : A ? K(A, t) - K(A, e) : 0;
                        if (r === o) return s(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
                    }, M) : M
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== M && D(t), b.matchesSelector && L && !X[n + " "] && (!j || !j.test(n)) && (!I || !I.test(n))) try {
                        var i = z.call(t, n);
                        if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        X(n, !0)
                    }
                    return e(n, M, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== M && D(t), R(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== M && D(t);
                    var n = x.attrHandle[e.toLowerCase()],
                        i = n && U.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                    return void 0 !== i ? i : b.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.escape = function (t) {
                    return (t + "").replace(xt, St)
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], i = 0, r = 0;
                    if (P = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(Y), P) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return A = null, t
                }, S = e.getText = function (t) {
                    var e, n = "", i = 0, r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else for (; e = t[i++];) n += S(e);
                    return n
                }, x = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(wt, bt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = H[t + " "];
                            return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && H(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, n, i) {
                            return function (r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var c, u, d, f, h, p, g = o !== s ? "nextSibling" : "previousSibling", v = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(), y = !l && !a, w = !1;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];) if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (f = v, d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[t] || [], h = c[0] === $ && c[1], w = h && c[2], f = h && v.childNodes[h]; f = ++h && f && f[g] || (w = h = 0) || p.pop();) if (1 === f.nodeType && ++w && f === e) {
                                            u[t] = [$, h, w];
                                            break
                                        }
                                    } else if (y && (f = e, d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[t] || [], h = c[0] === $ && c[1], w = h), !1 === w) for (; (f = ++h && f && f[g] || (w = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++w || (y && (d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[t] = [$, w]), f !== e));) ;
                                    return (w -= r) === i || w % i == 0 && w / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var r,
                                o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[N] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, r = o(t, n), s = r.length; s--;) i = K(t, r[s]), t[i] = !(e[i] = r[s])
                            }) : function (t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [], n = [], r = k(t.replace(st, "$1"));
                            return r[N] ? i(function (t, e, n, i) {
                                for (var o, s = r(t, null, i, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function (t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: i(function (t) {
                            return t = t.replace(wt, bt), function (e) {
                                return (e.textContent || S(e)).indexOf(t) > -1
                            }
                        }), lang: i(function (t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === O
                        }, focus: function (t) {
                            return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: a(!1), disabled: a(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !x.pseudos.empty(t)
                        }, header: function (t) {
                            return gt.test(t.nodeName)
                        }, input: function (t) {
                            return pt.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (t, e) {
                            return [e - 1]
                        }), eq: l(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: l(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }), odd: l(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }), lt: l(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                            return t
                        }), gt: l(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[w] = function (t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(w);
                for (w in {submit: !0, reset: !0}) x.pseudos[w] = function (t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }(w);
                return u.prototype = x.filters = x.pseudos, x.setFilters = new u, C = e.tokenize = function (t, n) {
                    var i, r, o, s, a, l, c, u = W[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], c = x.preFilter; a;) {
                        i && !(r = at.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = lt.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(st, " ")
                        }), a = a.slice(i.length));
                        for (s in x.filter) !(r = ft[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
                }, k = e.compile = function (t, e) {
                    var n, i = [], r = [], o = q[t + " "];
                    if (!o) {
                        for (e || (e = C(t)), n = e.length; n--;) o = m(e[n]), o[N] ? i.push(o) : r.push(o);
                        o = q(t, y(r, i)), o.selector = t
                    }
                    return o
                }, T = e.select = function (t, e, n, i) {
                    var r, o, s, a, l, u = "function" == typeof t && t, f = !i && C(t = u.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && L && x.relative[o[1].type]) {
                            if (!(e = (x.find.ID(s.matches[0].replace(wt, bt), e) || [])[0])) return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);) if ((l = x.find[a]) && (i = l(s.matches[0].replace(wt, bt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), !(t = i.length && d(o))) return Z.apply(n, i), n;
                            break
                        }
                    }
                    return (u || k(t, f))(i, e, !L, n, !e || yt.test(t) && c(e.parentNode) || e), n
                }, b.sortStable = N.split("").sort(Y).join("") === N, b.detectDuplicates = !!P, D(), b.sortDetached = r(function (t) {
                    return 1 & t.compareDocumentPosition(M.createElement("fieldset"))
                }), r(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && r(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), r(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(tt, function (t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(n);
        Et.find = Pt, Et.expr = Pt.selectors, Et.expr[":"] = Et.expr.pseudos, Et.uniqueSort = Et.unique = Pt.uniqueSort, Et.text = Pt.getText, Et.isXMLDoc = Pt.isXML, Et.contains = Pt.contains, Et.escapeSelector = Pt.escape;
        var Dt = function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && Et(t).is(n)) break;
                i.push(t)
            }
            return i
        }, Mt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, Ot = Et.expr.match.needsContext, Lt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Et.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Et.find.matchesSelector(i, t) ? [i] : [] : Et.find.matches(t, Et.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, Et.fn.extend({
            find: function (t) {
                var e, n, i = this.length, r = this;
                if ("string" != typeof t) return this.pushStack(Et(t).filter(function () {
                    for (e = 0; e < i; e++) if (Et.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) Et.find(t, r[e], n);
                return i > 1 ? Et.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(u(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(u(this, t || [], !0))
            }, is: function (t) {
                return !!u(this, "string" == typeof t && Ot.test(t) ? Et(t) : t || [], !1).length
            }
        });
        var It, jt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Et.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || It, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : jt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof Et ? e[0] : e, Et.merge(this, Et.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), Lt.test(i[1]) && Et.isPlainObject(e)) for (i in e) Ct(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = ft.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : Ct(t) ? void 0 !== n.ready ? n.ready(t) : t(Et) : Et.makeArray(t, this)
        }).prototype = Et.fn, It = Et(ft);
        var zt = /^(?:parents|prev(?:Until|All))/, Rt = {children: !0, contents: !0, next: !0, prev: !0};
        Et.fn.extend({
            has: function (t) {
                var e = Et(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++) if (Et.contains(this, e[t])) return !0
                })
            }, closest: function (t, e) {
                var n, i = 0, r = this.length, o = [], s = "string" != typeof t && Et(t);
                if (!Ot.test(t)) for (; i < r; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Et.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? Et.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? mt.call(Et(t), this[0]) : mt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(Et.uniqueSort(Et.merge(this.get(), Et(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Et.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return Dt(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return Dt(t, "parentNode", n)
            }, next: function (t) {
                return d(t, "nextSibling")
            }, prev: function (t) {
                return d(t, "previousSibling")
            }, nextAll: function (t) {
                return Dt(t, "nextSibling")
            }, prevAll: function (t) {
                return Dt(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return Dt(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return Dt(t, "previousSibling", n)
            }, siblings: function (t) {
                return Mt((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return Mt(t.firstChild)
            }, contents: function (t) {
                return void 0 !== t.contentDocument ? t.contentDocument : (c(t, "template") && (t = t.content || t), Et.merge([], t.childNodes))
            }
        }, function (t, e) {
            Et.fn[t] = function (n, i) {
                var r = Et.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = Et.filter(i, r)), this.length > 1 && (Rt[t] || Et.uniqueSort(r), zt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var Nt = /[^\x20\t\r\n\f]+/g;
        Et.Callbacks = function (t) {
            t = "string" == typeof t ? f(t) : Et.extend({}, t);
            var e, n, i, r, o = [], s = [], l = -1, c = function () {
                for (r = r || t.once, i = e = !0; s.length; l = -1) for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && t.stopOnFalse && (l = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
            }, u = {
                add: function () {
                    return o && (n && !e && (l = o.length - 1, s.push(n)), function e(n) {
                        Et.each(n, function (n, i) {
                            Ct(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== a(i) && e(i)
                        })
                    }(arguments), n && !e && c()), this
                }, remove: function () {
                    return Et.each(arguments, function (t, e) {
                        for (var n; (n = Et.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (t) {
                    return t ? Et.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return r = s = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return r = s = [], n || e || (o = n = ""), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || c()), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return u
        }, Et.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", Et.Callbacks("memory"), Et.Callbacks("memory"), 2], ["resolve", "done", Et.Callbacks("once memory"), Et.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Et.Callbacks("once memory"), Et.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", r = {
                        state: function () {
                            return i
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return r.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return Et.Deferred(function (n) {
                                Et.each(e, function (e, i) {
                                    var r = Ct(t[i[4]]) && t[i[4]];
                                    o[i[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && Ct(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, then: function (t, i, r) {
                            function o(t, e, i, r) {
                                return function () {
                                    var a = this, l = arguments, c = function () {
                                        var n, c;
                                        if (!(t < s)) {
                                            if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, Ct(c) ? r ? c.call(n, o(s, e, h, r), o(s, e, p, r)) : (s++, c.call(n, o(s, e, h, r), o(s, e, p, r), o(s, e, h, e.notifyWith))) : (i !== h && (a = void 0, l = [n]), (r || e.resolveWith)(a, l))
                                        }
                                    }, u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            Et.Deferred.exceptionHook && Et.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= s && (i !== p && (a = void 0, l = [n]), e.rejectWith(a, l))
                                        }
                                    };
                                    t ? u() : (Et.Deferred.getStackHook && (u.stackTrace = Et.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }

                            var s = 0;
                            return Et.Deferred(function (n) {
                                e[0][3].add(o(0, n, Ct(r) ? r : h, n.notifyWith)), e[1][3].add(o(0, n, Ct(t) ? t : h)), e[2][3].add(o(0, n, Ct(i) ? i : p))
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? Et.extend(t, r) : r
                        }
                    }, o = {};
                return Et.each(e, function (t, n) {
                    var s = n[2], a = n[5];
                    r[n[1]] = s.add, a && s.add(function () {
                        i = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                }), r.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e = arguments.length, n = e, i = Array(n), r = pt.call(arguments), o = Et.Deferred(),
                    s = function (t) {
                        return function (n) {
                            i[t] = this, r[t] = arguments.length > 1 ? pt.call(arguments) : n, --e || o.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (g(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || Ct(r[n] && r[n].then))) return o.then();
                for (; n--;) g(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var Bt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Et.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && Bt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, Et.readyException = function (t) {
            n.setTimeout(function () {
                throw t
            })
        };
        var $t = Et.Deferred();
        Et.fn.ready = function (t) {
            return $t.then(t).catch(function (t) {
                Et.readyException(t)
            }), this
        }, Et.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --Et.readyWait : Et.isReady) || (Et.isReady = !0, !0 !== t && --Et.readyWait > 0 || $t.resolveWith(ft, [Et]))
            }
        }), Et.ready.then = $t.then, "complete" === ft.readyState || "loading" !== ft.readyState && !ft.documentElement.doScroll ? n.setTimeout(Et.ready) : (ft.addEventListener("DOMContentLoaded", v), n.addEventListener("load", v));
        var Ft = function (t, e, n, i, r, o, s) {
            var l = 0, c = t.length, u = null == n;
            if ("object" === a(n)) {
                r = !0;
                for (l in n) Ft(t, e, l, n[l], !0, o, s)
            } else if (void 0 !== i && (r = !0, Ct(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                return u.call(Et(t), n)
            })), e)) for (; l < c; l++) e(t[l], n, s ? i : i.call(t[l], l, e(t[l], n)));
            return r ? t : u ? e.call(t) : c ? e(t[0], n) : o
        }, Ht = /^-ms-/, Wt = /-([a-z])/g, qt = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        w.uid = 1, w.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, qt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[y(e)] = n; else for (i in e) r[y(i)] = e[i];
                return r
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][y(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(y) : (e = y(e), e = e in i ? [e] : e.match(Nt) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }
                    (void 0 === e || Et.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !Et.isEmptyObject(e)
            }
        };
        var Xt = new w, Yt = new w, Ut = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Vt = /[A-Z]/g;
        Et.extend({
            hasData: function (t) {
                return Yt.hasData(t) || Xt.hasData(t)
            }, data: function (t, e, n) {
                return Yt.access(t, e, n)
            }, removeData: function (t, e) {
                Yt.remove(t, e)
            }, _data: function (t, e, n) {
                return Xt.access(t, e, n)
            }, _removeData: function (t, e) {
                Xt.remove(t, e)
            }
        }), Et.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Yt.get(o), 1 === o.nodeType && !Xt.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = y(i.slice(5)), x(o, i, r[i])));
                        Xt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    Yt.set(this, t)
                }) : Ft(this, function (e) {
                    var n;
                    if (o && void 0 === e) {
                        if (void 0 !== (n = Yt.get(o, t))) return n;
                        if (void 0 !== (n = x(o, t))) return n
                    } else this.each(function () {
                        Yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    Yt.remove(this, t)
                })
            }
        }), Et.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Xt.get(t, e), n && (!i || Array.isArray(n) ? i = Xt.access(t, e, Et.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = Et.queue(t, e), i = n.length, r = n.shift(), o = Et._queueHooks(t, e), s = function () {
                    Et.dequeue(t, e)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Xt.get(t, n) || Xt.access(t, n, {
                    empty: Et.Callbacks("once memory").add(function () {
                        Xt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), Et.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Et.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = Et.queue(this, t, e);
                    Et._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Et.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    Et.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, r = Et.Deferred(), o = this, s = this.length, a = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (n = Xt.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Gt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Qt = new RegExp("^(?:([+-])=|)(" + Gt + ")([a-z%]*)$", "i"), Zt = ["Top", "Right", "Bottom", "Left"],
            Jt = ft.documentElement, Kt = function (t) {
                return Et.contains(t.ownerDocument, t)
            }, te = {composed: !0};
        Jt.getRootNode && (Kt = function (t) {
            return Et.contains(t.ownerDocument, t) || t.getRootNode(te) === t.ownerDocument
        });
        var ee = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && Kt(t) && "none" === Et.css(t, "display")
        }, ne = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        }, ie = {};
        Et.fn.extend({
            show: function () {
                return C(this, !0)
            }, hide: function () {
                return C(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    ee(this) ? Et(this).show() : Et(this).hide()
                })
            }
        });
        var re = /^(?:checkbox|radio)$/i, oe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            se = /^$|^module$|\/(?:java|ecma)script/i, ae = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ae.optgroup = ae.option, ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead, ae.th = ae.td;
        var le = /<|&#?\w+;/;
        !function () {
            var t = ft.createDocumentFragment(), e = t.appendChild(ft.createElement("div")),
                n = ft.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), _t.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", _t.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var ce = /^key/, ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, de = /^([^.]*)(?:\.(.+)|)/;
        Et.event = {
            global: {}, add: function (t, e, n, i, r) {
                var o, s, a, l, c, u, d, f, h, p, g, v = Xt.get(t);
                if (v) for (n.handler && (o = n, n = o.handler, r = o.selector), r && Et.find.matchesSelector(Jt, r), n.guid || (n.guid = Et.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                    return void 0 !== Et && Et.event.triggered !== e.type ? Et.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(Nt) || [""], c = e.length; c--;) a = de.exec(e[c]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h && (d = Et.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = Et.event.special[h] || {}, u = Et.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Et.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), Et.event.global[h] = !0)
            }, remove: function (t, e, n, i, r) {
                var o, s, a, l, c, u, d, f, h, p, g, v = Xt.hasData(t) && Xt.get(t);
                if (v && (l = v.events)) {
                    for (e = (e || "").match(Nt) || [""], c = e.length; c--;) if (a = de.exec(e[c]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
                        for (d = Et.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(t, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(t, p, v.handle) || Et.removeEvent(t, h, v.handle), delete l[h])
                    } else for (h in l) Et.event.remove(t, h + e[c], n, i, !0);
                    Et.isEmptyObject(l) && Xt.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, i, r, o, s, a = Et.event.fix(t), l = new Array(arguments.length),
                    c = (Xt.get(this, "events") || {})[a.type] || [], u = Et.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = Et.event.handlers.call(this, a, c), e = 0; (r = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((Et.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            }, handlers: function (t, e) {
                var n, i, r, o, s, a = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                    for (o = [], s = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? Et(r, this).index(c) > -1 : Et.find(r, this, null, [c]).length), s[r] && o.push(i);
                    o.length && a.push({elem: c, handlers: o})
                }
                return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
            }, addProp: function (t, e) {
                Object.defineProperty(Et.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: Ct(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[Et.expando] ? t : new Et.Event(t)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (t) {
                        var e = this || t;
                        return re.test(e.type) && e.click && c(e, "input") && L(e, "click", A), !1
                    }, trigger: function (t) {
                        var e = this || t;
                        return re.test(e.type) && e.click && c(e, "input") && L(e, "click"), !0
                    }, _default: function (t) {
                        var e = t.target;
                        return re.test(e.type) && e.click && c(e, "input") && Xt.get(e, "click") || c(e, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, Et.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, Et.Event = function (t, e) {
            if (!(this instanceof Et.Event)) return new Et.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? A : P, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && Et.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[Et.expando] = !0
        }, Et.Event.prototype = {
            constructor: Et.Event,
            isDefaultPrevented: P,
            isPropagationStopped: P,
            isImmediatePropagationStopped: P,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = A, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = A, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = A, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Et.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && ce.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ue.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, Et.event.addProp), Et.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            Et.event.special[t] = {
                setup: function () {
                    return L(this, t, D), !1
                }, trigger: function () {
                    return L(this, t), !0
                }, delegateType: e
            }
        }), Et.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            Et.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, r = t.relatedTarget, o = t.handleObj;
                    return r && (r === i || Et.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), Et.fn.extend({
            on: function (t, e, n, i) {
                return O(this, t, e, n, i)
            }, one: function (t, e, n, i) {
                return O(this, t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Et(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = P), this.each(function () {
                    Et.event.remove(this, t, n, e)
                })
            }
        });
        var fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            he = /<script|<style|<link/i, pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Et.extend({
            htmlPrefilter: function (t) {
                return t.replace(fe, "<$1></$2>")
            }, clone: function (t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0), l = Kt(t);
                if (!(_t.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Et.isXMLDoc(t))) for (s = k(a), o = k(t), i = 0, r = o.length; i < r; i++) N(o[i], s[i]);
                if (e) if (n) for (o = o || k(t), s = s || k(a), i = 0, r = o.length; i < r; i++) R(o[i], s[i]); else R(t, a);
                return s = k(a, "script"), s.length > 0 && T(s, !l && k(t, "script")), a
            }, cleanData: function (t) {
                for (var e, n, i, r = Et.event.special, o = 0; void 0 !== (n = t[o]); o++) if (qt(n)) {
                    if (e = n[Xt.expando]) {
                        if (e.events) for (i in e.events) r[i] ? Et.event.remove(n, i) : Et.removeEvent(n, i, e.handle);
                        n[Xt.expando] = void 0
                    }
                    n[Yt.expando] && (n[Yt.expando] = void 0)
                }
            }
        }), Et.fn.extend({
            detach: function (t) {
                return $(this, t, !0)
            }, remove: function (t) {
                return $(this, t)
            }, text: function (t) {
                return Ft(this, function (t) {
                    return void 0 === t ? Et.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return B(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        I(this, t).appendChild(t)
                    }
                })
            }, prepend: function () {
                return B(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = I(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return B(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return B(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Et.cleanData(k(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return Et.clone(this, t, e)
                })
            }, html: function (t) {
                return Ft(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !he.test(t) && !ae[(oe.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = Et.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (Et.cleanData(k(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return B(this, arguments, function (e) {
                    var n = this.parentNode;
                    Et.inArray(this, t) < 0 && (Et.cleanData(k(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), Et.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            Et.fn[t] = function (t) {
                for (var n, i = [], r = Et(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Et(r[s])[e](n), vt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ve = new RegExp("^(" + Gt + ")(?!px)[a-z%]+$", "i"), me = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n), e.getComputedStyle(t)
        }, ye = new RegExp(Zt.join("|"), "i");
        !function () {
            function t() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(l).appendChild(c);
                    var t = n.getComputedStyle(c);
                    i = "1%" !== t.top, a = 12 === e(t.marginLeft), c.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), Jt.removeChild(l), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var i, r, o, s, a, l = ft.createElement("div"), c = ft.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", _t.clearCloneStyle = "content-box" === c.style.backgroundClip, Et.extend(_t, {
                boxSizingReliable: function () {
                    return t(), r
                }, pixelBoxStyles: function () {
                    return t(), s
                }, pixelPosition: function () {
                    return t(), i
                }, reliableMarginLeft: function () {
                    return t(), a
                }, scrollboxSize: function () {
                    return t(), o
                }
            }))
        }();
        var we = ["Webkit", "Moz", "ms"], be = ft.createElement("div").style, xe = {}, Se = /^(none|table(?!-c[ea]).+)/,
            _e = /^--/, Ce = {position: "absolute", visibility: "hidden", display: "block"},
            ke = {letterSpacing: "0", fontWeight: "400"};
        Et.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = F(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = y(e), l = _e.test(e), c = t.style;
                    if (l || (e = q(a)), s = Et.cssHooks[e] || Et.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                    o = typeof n, "string" === o && (r = Qt.exec(n)) && r[1] && (n = S(t, e, r), o = "number"), null != n && n === n && ("number" !== o || l || (n += r && r[3] || (Et.cssNumber[a] ? "" : "px")), _t.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                }
            },
            css: function (t, e, n, i) {
                var r, o, s, a = y(e);
                return _e.test(e) || (e = q(a)), s = Et.cssHooks[e] || Et.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = F(t, e, i)), "normal" === r && e in ke && (r = ke[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), Et.each(["height", "width"], function (t, e) {
            Et.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return !Se.test(Et.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? U(t, e, i) : ne(t, Ce, function () {
                        return U(t, e, i)
                    })
                }, set: function (t, n, i) {
                    var r, o = me(t), s = !_t.scrollboxSize() && "absolute" === o.position, a = s || i,
                        l = a && "border-box" === Et.css(t, "boxSizing", !1, o), c = i ? Y(t, e, i, l, o) : 0;
                    return l && s && (c -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Y(t, e, "border", !1, o) - .5)), c && (r = Qt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = Et.css(t, e)), X(t, n, c)
                }
            }
        }), Et.cssHooks.marginLeft = H(_t.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(F(t, "marginLeft")) || t.getBoundingClientRect().left - ne(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), Et.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            Et.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Zt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, "margin" !== t && (Et.cssHooks[t + e].set = X)
        }), Et.fn.extend({
            css: function (t, e) {
                return Ft(this, function (t, e, n) {
                    var i, r, o = {}, s = 0;
                    if (Array.isArray(e)) {
                        for (i = me(t), r = e.length; s < r; s++) o[e[s]] = Et.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? Et.style(t, e, n) : Et.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), Et.Tween = V, V.prototype = {
            constructor: V, init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || Et.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Et.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = V.propHooks[this.prop];
                return t && t.get ? t.get(this) : V.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = V.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Et.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : V.propHooks._default.set(this), this
            }
        }, V.prototype.init.prototype = V.prototype, V.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = Et.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                }, set: function (t) {
                    Et.fx.step[t.prop] ? Et.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !Et.cssHooks[t.prop] && null == t.elem.style[q(t.prop)] ? t.elem[t.prop] = t.now : Et.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, V.propHooks.scrollTop = V.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Et.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, Et.fx = V.prototype.init, Et.fx.step = {};
        var Te, Ee, Ae = /^(?:toggle|show|hide)$/, Pe = /queueHooks$/;
        Et.Animation = Et.extend(et, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return S(n.elem, t, Qt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                Ct(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], et.tweeners[n] = et.tweeners[n] || [], et.tweeners[n].unshift(e)
            }, prefilters: [K], prefilter: function (t, e) {
                e ? et.prefilters.unshift(t) : et.prefilters.push(t)
            }
        }), Et.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? Et.extend({}, t) : {
                complete: n || !n && e || Ct(t) && t,
                duration: t,
                easing: n && e || e && !Ct(e) && e
            };
            return Et.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Et.fx.speeds ? i.duration = Et.fx.speeds[i.duration] : i.duration = Et.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                Ct(i.old) && i.old.call(this), i.queue && Et.dequeue(this, i.queue)
            }, i
        }, Et.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(ee).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var r = Et.isEmptyObject(t), o = Et.speed(e, n, i), s = function () {
                    var e = et(this, Et.extend({}, t), o);
                    (r || Xt.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", o = Et.timers, s = Xt.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && Pe.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || Et.dequeue(this, t)
                })
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = Xt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = Et.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Et.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), Et.each(["toggle", "show", "hide"], function (t, e) {
            var n = Et.fn[e];
            Et.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Z(e, !0), t, i, r)
            }
        }), Et.each({
            slideDown: Z("show"),
            slideUp: Z("hide"),
            slideToggle: Z("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            Et.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), Et.timers = [], Et.fx.tick = function () {
            var t, e = 0, n = Et.timers;
            for (Te = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || Et.fx.stop(), Te = void 0
        }, Et.fx.timer = function (t) {
            Et.timers.push(t), Et.fx.start()
        }, Et.fx.interval = 13, Et.fx.start = function () {
            Ee || (Ee = !0, G())
        }, Et.fx.stop = function () {
            Ee = null
        }, Et.fx.speeds = {slow: 600, fast: 200, _default: 400}, Et.fn.delay = function (t, e) {
            return t = Et.fx ? Et.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                var r = n.setTimeout(e, t);
                i.stop = function () {
                    n.clearTimeout(r)
                }
            })
        }, function () {
            var t = ft.createElement("input"), e = ft.createElement("select"),
                n = e.appendChild(ft.createElement("option"));
            t.type = "checkbox", _t.checkOn = "" !== t.value, _t.optSelected = n.selected, t = ft.createElement("input"), t.value = "t", t.type = "radio", _t.radioValue = "t" === t.value
        }();
        var De, Me = Et.expr.attrHandle;
        Et.fn.extend({
            attr: function (t, e) {
                return Ft(this, Et.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    Et.removeAttr(this, t)
                })
            }
        }), Et.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? Et.prop(t, e, n) : (1 === o && Et.isXMLDoc(t) || (r = Et.attrHooks[e.toLowerCase()] || (Et.expr.match.bool.test(e) ? De : void 0)), void 0 !== n ? null === n ? void Et.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = Et.find.attr(t, e), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!_t.radioValue && "radio" === e && c(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, i = 0, r = e && e.match(Nt);
                if (r && 1 === t.nodeType) for (; n = r[i++];) t.removeAttribute(n)
            }
        }), De = {
            set: function (t, e, n) {
                return !1 === e ? Et.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Et.each(Et.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Me[e] || Et.find.attr;
            Me[e] = function (t, e, i) {
                var r, o, s = e.toLowerCase();
                return i || (o = Me[s], Me[s] = r, r = null != n(t, e, i) ? s : null, Me[s] = o), r
            }
        });
        var Oe = /^(?:input|select|textarea|button)$/i, Le = /^(?:a|area)$/i;
        Et.fn.extend({
            prop: function (t, e) {
                return Ft(this, Et.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[Et.propFix[t] || t]
                })
            }
        }), Et.extend({
            prop: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Et.isXMLDoc(t) || (e = Et.propFix[e] || e, r = Et.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = Et.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Oe.test(t.nodeName) || Le.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), _t.optSelected || (Et.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), Et.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            Et.propFix[this.toLowerCase()] = this
        }), Et.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (Ct(t)) return this.each(function (e) {
                    Et(this).addClass(t.call(this, e, it(this)))
                });
                if (e = rt(t), e.length) for (; n = this[l++];) if (r = it(n), i = 1 === n.nodeType && " " + nt(r) + " ") {
                    for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = nt(i), r !== a && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (Ct(t)) return this.each(function (e) {
                    Et(this).removeClass(t.call(this, e, it(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (e = rt(t), e.length) for (; n = this[l++];) if (r = it(n), i = 1 === n.nodeType && " " + nt(r) + " ") {
                    for (s = 0; o = e[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                    a = nt(i), r !== a && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t, i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : Ct(t) ? this.each(function (n) {
                    Et(this).toggleClass(t.call(this, n, it(this), e), e)
                }) : this.each(function () {
                    var e, r, o, s;
                    if (i) for (r = 0, o = Et(this), s = rt(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || (e = it(this), e && Xt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Xt.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + nt(it(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Ie = /\r/g;
        Et.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                {
                    if (arguments.length) return i = Ct(t), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, Et(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Et.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = Et.valHooks[this.type] || Et.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (e = Et.valHooks[r.type] || Et.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ie, "") : null == n ? "" : n)
                }
            }
        }), Et.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = Et.find.attr(t, "value");
                        return null != e ? e : nt(Et.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                            if (e = Et(n).val(), s) return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var n, i, r = t.options, o = Et.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = Et.inArray(Et.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), Et.each(["radio", "checkbox"], function () {
            Et.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = Et.inArray(Et(t).val(), e) > -1
                }
            }, _t.checkOn || (Et.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), _t.focusin = "onfocusin" in n;
        var je = /^(?:focusinfocus|focusoutblur)$/, ze = function (t) {
            t.stopPropagation()
        };
        Et.extend(Et.event, {
            trigger: function (t, e, i, r) {
                var o, s, a, l, c, u, d, f, h = [i || ft], p = bt.call(t, "type") ? t.type : t,
                    g = bt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = f = a = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType && !je.test(p + Et.event.triggered) && (p.indexOf(".") > -1 && (g = p.split("."), p = g.shift(), g.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Et.expando] ? t : new Et.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : Et.makeArray(e, [t]), d = Et.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                    if (!r && !d.noBubble && !kt(i)) {
                        for (l = d.delegateType || p, je.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || ft) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0; (s = h[o++]) && !t.isPropagationStopped();) f = s, t.type = o > 1 ? l : d.bindType || p, u = (Xt.get(s, "events") || {})[t.type] && Xt.get(s, "handle"), u && u.apply(s, e), (u = c && s[c]) && u.apply && qt(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = p, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), e) || !qt(i) || c && Ct(i[p]) && !kt(i) && (a = i[c], a && (i[c] = null), Et.event.triggered = p, t.isPropagationStopped() && f.addEventListener(p, ze), i[p](), t.isPropagationStopped() && f.removeEventListener(p, ze), Et.event.triggered = void 0, a && (i[c] = a)), t.result
                }
            }, simulate: function (t, e, n) {
                var i = Et.extend(new Et.Event, n, {type: t, isSimulated: !0});
                Et.event.trigger(i, null, e)
            }
        }), Et.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    Et.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return Et.event.trigger(t, e, n, !0)
            }
        }), _t.focusin || Et.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                Et.event.simulate(e, t.target, Et.event.fix(t))
            };
            Et.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = Xt.access(i, e);
                    r || i.addEventListener(t, n, !0), Xt.access(i, e, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = Xt.access(i, e) - 1;
                    r ? Xt.access(i, e, r) : (i.removeEventListener(t, n, !0), Xt.remove(i, e))
                }
            }
        });
        var Re = n.location, Ne = Date.now(), Be = /\?/;
        Et.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || Et.error("Invalid XML: " + t), e
        };
        var $e = /\[\]$/, Fe = /\r?\n/g, He = /^(?:submit|button|image|reset|file)$/i,
            We = /^(?:input|select|textarea|keygen)/i;
        Et.param = function (t, e) {
            var n, i = [], r = function (t, e) {
                var n = Ct(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !Et.isPlainObject(t)) Et.each(t, function () {
                r(this.name, this.value)
            }); else for (n in t) ot(n, t[n], e, r);
            return i.join("&")
        }, Et.fn.extend({
            serialize: function () {
                return Et.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = Et.prop(this, "elements");
                    return t ? Et.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !Et(this).is(":disabled") && We.test(this.nodeName) && !He.test(t) && (this.checked || !re.test(t))
                }).map(function (t, e) {
                    var n = Et(this).val();
                    return null == n ? null : Array.isArray(n) ? Et.map(n, function (t) {
                        return {name: e.name, value: t.replace(Fe, "\r\n")}
                    }) : {name: e.name, value: n.replace(Fe, "\r\n")}
                }).get()
            }
        });
        var qe = /%20/g, Xe = /#.*$/, Ye = /([?&])_=[^&]*/, Ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ge = /^(?:GET|HEAD)$/, Qe = /^\/\//,
            Ze = {}, Je = {}, Ke = "*/".concat("*"), tn = ft.createElement("a");
        tn.href = Re.href, Et.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Re.href,
                type: "GET",
                isLocal: Ve.test(Re.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ke,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": Et.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? lt(lt(t, Et.ajaxSettings), e) : lt(Et.ajaxSettings, t)
            },
            ajaxPrefilter: st(Ze),
            ajaxTransport: st(Je),
            ajax: function (t, e) {
                function i(t, e, i, a) {
                    var c, f, h, b, x, S = e;
                    u || (u = !0, l && n.clearTimeout(l), r = void 0, s = a || "", _.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = ct(p, _, i)), b = ut(p, b, _, c), c ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (Et.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (Et.etag[o] = x)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, f = b.data, h = b.error, c = !h)) : (h = S, !t && S || (S = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || S) + "", c ? m.resolveWith(g, [f, S, _]) : m.rejectWith(g, [_, S, h]), _.statusCode(w), w = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [_, p, c ? f : h]), y.fireWith(g, [_, S]), d && (v.trigger("ajaxComplete", [_, p]), --Et.active || Et.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, o, s, a, l, c, u, d, f, h, p = Et.ajaxSetup({}, e), g = p.context || p,
                    v = p.context && (g.nodeType || g.jquery) ? Et(g) : Et.event, m = Et.Deferred(),
                    y = Et.Callbacks("once memory"), w = p.statusCode || {}, b = {}, x = {}, S = "canceled", _ = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a) for (a = {}; e = Ue.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        }, getAllResponseHeaders: function () {
                            return u ? s : null
                        }, setRequestHeader: function (t, e) {
                            return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == u && (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (u) _.always(t[_.status]); else for (e in t) w[e] = [w[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || S;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(_), p.url = ((t || p.url || Re.href) + "").replace(Qe, Re.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Nt) || [""], null == p.crossDomain) {
                    c = ft.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = tn.protocol + "//" + tn.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = Et.param(p.data, p.traditional)), at(Ze, p, e, _), u) return _;
                d = Et.event && p.global, d && 0 == Et.active++ && Et.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ge.test(p.type), o = p.url.replace(Xe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(qe, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Be.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ye, "$1"), h = (Be.test(o) ? "&" : "?") + "_=" + Ne++ + h), p.url = o + h), p.ifModified && (Et.lastModified[o] && _.setRequestHeader("If-Modified-Since", Et.lastModified[o]), Et.etag[o] && _.setRequestHeader("If-None-Match", Et.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) _.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || u)) return _.abort();
                if (S = "abort", y.add(p.complete), _.done(p.success), _.fail(p.error), r = at(Je, p, e, _)) {
                    if (_.readyState = 1, d && v.trigger("ajaxSend", [_, p]), u) return _;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function () {
                        _.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, r.send(b, i)
                    } catch (t) {
                        if (u) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function (t, e, n) {
                return Et.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return Et.get(t, void 0, e, "script")
            }
        }), Et.each(["get", "post"], function (t, e) {
            Et[e] = function (t, n, i, r) {
                return Ct(n) && (r = r || i, i = n, n = void 0), Et.ajax(Et.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, Et.isPlainObject(t) && t))
            }
        }), Et._evalUrl = function (t, e) {
            return Et.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (t) {
                    Et.globalEval(t, e)
                }
            })
        }, Et.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (Ct(t) && (t = t.call(this[0])), e = Et(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return Ct(t) ? this.each(function (e) {
                    Et(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = Et(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = Ct(t);
                return this.each(function (n) {
                    Et(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    Et(this).replaceWith(this.childNodes)
                }), this
            }
        }), Et.expr.pseudos.hidden = function (t) {
            return !Et.expr.pseudos.visible(t)
        }, Et.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, Et.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        };
        var en = {0: 200, 1223: 204}, nn = Et.ajaxSettings.xhr();
        _t.cors = !!nn && "withCredentials" in nn, _t.ajax = nn = !!nn, Et.ajaxTransport(function (t) {
            var e, i;
            if (_t.cors || nn && !t.crossDomain) return {
                send: function (r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    e = function (t) {
                        return function () {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(en[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout(function () {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), Et.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), Et.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return Et.globalEval(t), t
                }
            }
        }), Et.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Et.ajaxTransport("script", function (t) {
            if (t.crossDomain || t.scriptAttrs) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = Et("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), ft.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var rn = [], on = /(=)\?(?=&|$)|\?\?/;
        Et.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = rn.pop() || Et.expando + "_" + Ne++;
                return this[t] = !0, t
            }
        }), Et.ajaxPrefilter("json jsonp", function (t, e, i) {
            var r, o, s,
                a = !1 !== t.jsonp && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = Ct(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(on, "$1" + r) : !1 !== t.jsonp && (t.url += (Be.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return s || Et.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = n[r], n[r] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === o ? Et(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, rn.push(r)), s && Ct(o) && o(s[0]), s = o = void 0
            }), "script"
        }), _t.createHTMLDocument = function () {
            var t = ft.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), Et.parseHTML = function (t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, r, o;
            return e || (_t.createHTMLDocument ? (e = ft.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = ft.location.href, e.head.appendChild(i)) : e = ft), r = Lt.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = E([t], e, o), o && o.length && Et(o).remove(), Et.merge([], r.childNodes))
        }, Et.fn.load = function (t, e, n) {
            var i, r, o, s = this, a = t.indexOf(" ");
            return a > -1 && (i = nt(t.slice(a)), t = t.slice(0, a)), Ct(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && Et.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(i ? Et("<div>").append(Et.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, Et.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            Et.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), Et.expr.pseudos.animated = function (t) {
            return Et.grep(Et.timers, function (e) {
                return t === e.elem
            }).length
        }, Et.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, s, a, l, c, u = Et.css(t, "position"), d = Et(t), f = {};
                "static" === u && (t.style.position = "relative"), a = d.offset(), o = Et.css(t, "top"), l = Et.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), Ct(e) && (e = e.call(t, n, Et.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, Et.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    Et.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                if (i) return i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var t, e, n, i = this[0], r = {top: 0, left: 0};
                    if ("fixed" === Et.css(i, "position")) e = i.getBoundingClientRect(); else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === Et.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (r = Et(t).offset(), r.top += Et.css(t, "borderTopWidth", !0), r.left += Et.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - Et.css(i, "marginTop", !0),
                        left: e.left - r.left - Et.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === Et.css(t, "position");) t = t.offsetParent;
                    return t || Jt
                })
            }
        }), Et.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            Et.fn[t] = function (i) {
                return Ft(this, function (t, i, r) {
                    var o;
                    if (kt(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }), Et.each(["top", "left"], function (t, e) {
            Et.cssHooks[e] = H(_t.pixelPosition, function (t, n) {
                if (n) return n = F(t, e), ve.test(n) ? Et(t).position()[e] + "px" : n
            })
        }), Et.each({Height: "height", Width: "width"}, function (t, e) {
            Et.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                Et.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return Ft(this, function (e, n, r) {
                        var o;
                        return kt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? Et.css(e, n, a) : Et.style(e, n, r, a)
                    }, e, s ? r : void 0, s)
                }
            })
        }), Et.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            Et.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), Et.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), Et.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), Et.proxy = function (t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), Ct(t)) return i = pt.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(pt.call(arguments)))
            }, r.guid = t.guid = t.guid || Et.guid++, r
        }, Et.holdReady = function (t) {
            t ? Et.readyWait++ : Et.ready(!0)
        }, Et.isArray = Array.isArray, Et.parseJSON = JSON.parse, Et.nodeName = c, Et.isFunction = Ct, Et.isWindow = kt, Et.camelCase = y, Et.type = a, Et.now = Date.now, Et.isNumeric = function (t) {
            var e = Et.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, i = [], void 0 !== (r = function () {
            return Et
        }.apply(e, i)) && (t.exports = r);
        var sn = n.jQuery, an = n.$;
        return Et.noConflict = function (t) {
            return n.$ === Et && (n.$ = an), t && n.jQuery === Et && (n.jQuery = sn), Et
        }, o || (n.jQuery = n.$ = Et), Et
    })
}, function (t, e, n) {
    "use strict";
    var i = n(19);
    n.d(e, "a", function () {
        return i.a
    }), n.d(e, "n", function () {
        return i.b
    });
    var r = n(20);
    n.d(e, "c", function () {
        return r.a
    }), n.d(e, "f", function () {
        return r.b
    }), n.d(e, "h", function () {
        return r.c
    }), n.d(e, "i", function () {
        return r.d
    }), n.d(e, "k", function () {
        return r.e
    }), n.d(e, "u", function () {
        return r.f
    });
    var o = n(6);
    n.d(e, "g", function () {
        return o.a
    }), n.d(e, "j", function () {
        return o.b
    }), n.d(e, "l", function () {
        return o.c
    }), n.d(e, "m", function () {
        return o.d
    }), n.d(e, "w", function () {
        return o.e
    });
    var s = n(70);
    n.d(e, "p", function () {
        return s.a
    }), n.d(e, "z", function () {
        return s.b
    }), n.d(e, "D", function () {
        return s.c
    });
    var a = n(23);
    n.d(e, "d", function () {
        return a.a
    });
    var l = n(24);
    n.d(e, "b", function () {
        return l.a
    }), n.d(e, "q", function () {
        return l.b
    }), n.d(e, "A", function () {
        return l.c
    }), n.d(e, "B", function () {
        return l.d
    }), n.d(e, "C", function () {
        return l.e
    });
    var c = n(25);
    n.d(e, "e", function () {
        return c.a
    }), n.d(e, "r", function () {
        return c.b
    }), n.d(e, "x", function () {
        return c.c
    }), n.d(e, "y", function () {
        return c.d
    });
    var u = n(11);
    n.d(e, "o", function () {
        return u.a
    }), n.d(e, "s", function () {
        return u.b
    }), n.d(e, "t", function () {
        return u.c
    }), n.d(e, "v", function () {
        return u.d
    });
    n(71)
}, function (t, e, n) {
    "use strict";
    var i = n(63);
    n.d(e, "a", function () {
        return i.a
    });
    var r = n(64);
    n.d(e, "h", function () {
        return r.a
    });
    var o = n(21);
    n.d(e, "d", function () {
        return o.a
    });
    var s = n(65);
    n.d(e, "g", function () {
        return s.a
    }), n.d(e, "i", function () {
        return s.b
    }), n.d(e, "j", function () {
        return s.c
    }), n.d(e, "k", function () {
        return s.d
    });
    var a = n(66);
    n.d(e, "f", function () {
        return a.a
    }), n.d(e, "n", function () {
        return a.b
    });
    var l = n(22);
    n.d(e, "o", function () {
        return l.a
    });
    var c = n(67);
    n.d(e, "r", function () {
        return c.a
    });
    var u = n(68);
    n.d(e, "t", function () {
        return u.a
    });
    var d = n(69);
    n.d(e, "b", function () {
        return d.a
    }), n.d(e, "c", function () {
        return d.b
    }), n.d(e, "e", function () {
        return d.c
    }), n.d(e, "l", function () {
        return d.d
    }), n.d(e, "m", function () {
        return d.e
    }), n.d(e, "p", function () {
        return d.f
    }), n.d(e, "q", function () {
        return d.g
    }), n.d(e, "s", function () {
        return d.h
    }), n.d(e, "u", function () {
        return d.i
    }), n.d(e, "v", function () {
        return d.j
    }), n.d(e, "w", function () {
        return d.k
    }), n.d(e, "x", function () {
        return d.l
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(50)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";
        var n = {};
        n.extend = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function (t, e) {
            return (t % e + e) % e
        };
        var i = Array.prototype.slice;
        n.makeArray = function (t) {
            return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t]
        }, n.removeFrom = function (t, e) {
            var n = t.indexOf(e);
            -1 != n && t.splice(n, 1)
        }, n.getParent = function (t, n) {
            for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function (t, e, n) {
            n = n || 100;
            var i = t.prototype[e], r = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[r];
                clearTimeout(t);
                var e = arguments, o = this;
                this[r] = setTimeout(function () {
                    i.apply(o, e), delete o[r]
                }, n)
            }
        }, n.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function (e, i) {
            n.docReady(function () {
                var o = n.toDashed(i), s = "data-" + o, a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o), c = n.makeArray(a).concat(n.makeArray(l)),
                    u = s + "-options", d = t.jQuery;
                c.forEach(function (t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(u);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void (r && r.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, i, a)
                })
            })
        }, n
    })
}, function (t, e, n) {
    var i, r, o;/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
    !function (s, a) {
        r = [n(5), n(54), n(56), n(57), n(58), n(59), n(60)], i = a, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(window, function (t) {
        return t
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(7), n(17), n(3), n(51), n(52), n(53)], void 0 !== (r = function (t, e, n, i, r, a) {
            return s(o, t, e, n, i, r, a)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n, i, r, o, s) {
        "use strict";

        function a(t, e) {
            for (t = i.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function l(t, e) {
            var n = i.getQueryElement(t);
            if (!n) return void (d && d.error("Bad element for Flickity: " + (n || t)));
            if (this.element = n, this.element.flickityGUID) {
                var r = h[this.element.flickityGUID];
                return r.option(e), r
            }
            c && (this.$element = c(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e), this._create()
        }

        var c = t.jQuery, u = t.getComputedStyle, d = t.console, f = 0, h = {};
        l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, l.createMethods = [];
        var p = l.prototype;
        i.extend(p, e.prototype), p._create = function () {
            var e = this.guid = ++f;
            this.element.flickityGUID = e, h[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this);
            for (var n in this.options.on) {
                var i = this.options.on[n];
                this.on(n, i)
            }
            l.createMethods.forEach(function (t) {
                this[t]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, p.option = function (t) {
            i.extend(this.options, t)
        }, p.activate = function () {
            if (!this.isActive) {
                this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                a(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready")
            }
        }, p._createSlider = function () {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, p._filterFindCellElements = function (t) {
            return i.filterFindElements(t, this.options.cellSelector)
        }, p.reloadCells = function () {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, p._makeCells = function (t) {
            return this._filterFindCellElements(t).map(function (t) {
                return new r(t, this)
            }, this)
        }, p.getLastCell = function () {
            return this.cells[this.cells.length - 1]
        }, p.getLastSlide = function () {
            return this.slides[this.slides.length - 1]
        }, p.positionCells = function () {
            this._sizeCells(this.cells), this._positionCells(0)
        }, p._positionCells = function (t) {
            t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
            var e = 0;
            if (t > 0) {
                var n = this.cells[t - 1];
                e = n.x + n.size.outerWidth
            }
            for (var i = this.cells.length, r = t; r < i; r++) {
                var o = this.cells[r];
                o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
        }, p._sizeCells = function (t) {
            t.forEach(function (t) {
                t.getSize()
            })
        }, p.updateSlides = function () {
            if (this.slides = [], this.cells.length) {
                var t = new o(this);
                this.slides.push(t);
                var e = "left" == this.originSide, n = e ? "marginRight" : "marginLeft", i = this._getCanCellFit();
                this.cells.forEach(function (e, r) {
                    if (!t.cells.length) return void t.addCell(e);
                    var s = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[n]);
                    i.call(this, r, s) ? t.addCell(e) : (t.updateTarget(), t = new o(this), this.slides.push(t), t.addCell(e))
                }, this), t.updateTarget(), this.updateSelectedSlide()
            }
        }, p._getCanCellFit = function () {
            var t = this.options.groupCells;
            if (!t) return function () {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function (t) {
                    return t % e != 0
                }
            }
            var n = "string" == typeof t && t.match(/^(\d+)%$/), i = n ? parseInt(n[1], 10) / 100 : 1;
            return function (t, e) {
                return e <= (this.size.innerWidth + 1) * i
            }
        }, p._init = p.reposition = function () {
            this.positionCells(), this.positionSliderAtSelected()
        }, p.getSize = function () {
            this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var g = {center: {left: .5, right: .5}, left: {left: 0, right: 1}, right: {right: 0, left: 1}};
        return p.setCellAlign = function () {
            var t = g[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, p.setGallerySize = function () {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, p._getWrapShiftCells = function () {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition, e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, p._getGapCells = function (t, e, n) {
            for (var i = []; t > 0;) {
                var r = this.cells[e];
                if (!r) break;
                i.push(r), e += n, t -= r.size.outerWidth
            }
            return i
        }, p._containSlides = function () {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft",
                    n = t ? "marginLeft" : "marginRight", i = this.slideableWidth - this.getLastCell().size[n],
                    r = i < this.size.innerWidth, o = this.cursorPosition + this.cells[0].size[e],
                    s = i - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function (t) {
                    r ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, s))
                }, this)
            }
        }, p.dispatchEvent = function (t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), c && this.$element) {
                t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                var r = t;
                if (e) {
                    var o = c.Event(e);
                    o.type = t, r = o
                }
                this.$element.trigger(r, n)
            }
        }, p.select = function (t, e, n) {
            if(this.$element.hasClass('s-libary-photo-slider')){
                let num_slide = t+1;
                if (t == -1){
                    num_slide = this.slides.length
                }
                if (t == this.slides.length){
                    num_slide = 1
                }
                $('.s-library-number-slide').find('.num_slide').text(t<10?'0'+num_slide:num_slide);
                $('.s-library-number-slide').find('.sum_slide').text(this.slides.length<10?'/0'+this.slides.length:'/'+this.slides.length);
            }
            if(this.$element.hasClass('s-libary-video-slider')){
                let num_slide = t+1;
                if (t == -1){
                    num_slide = this.slides.length
                }
                if (t == this.slides.length){
                    num_slide = 1
                }
                $('#num_slide_video').text(t<10?'0'+num_slide:num_slide);
                $('#sum_slide_video').text(this.slides.length<10?'/0'+this.slides.length:'/'+this.slides.length);
            }
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = i.modulo(t, this.slides.length)), this.slides[t])) {
                var r = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != r && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
            }
        }, p._wrapSelect = function (t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1)) return t;
            var n = i.modulo(t, e), r = Math.abs(n - this.selectedIndex), o = Math.abs(n + e - this.selectedIndex),
                s = Math.abs(n - e - this.selectedIndex);
            !this.isDragSelect && o < r ? t += e : !this.isDragSelect && s < r && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
        }, p.previous = function (t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, p.next = function (t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, p.updateSelectedSlide = function () {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, p.unselectSelectedSlide = function () {
            this.selectedSlide && this.selectedSlide.unselect()
        }, p.selectInitialIndex = function () {
            var t = this.options.initialIndex;
            if (this.isInitActivated) return void this.select(this.selectedIndex, !1, !0);
            if (t && "string" == typeof t) {
                if (this.queryCell(t)) return void this.selectCell(t, !1, !0)
            }
            var e = 0;
            t && this.slides[t] && (e = t), this.select(e, !1, !0)
        }, p.selectCell = function (t, e, n) {
            var i = this.queryCell(t);
            if (i) {
                var r = this.getCellSlideIndex(i);
                this.select(r, e, n)
            }
        }, p.getCellSlideIndex = function (t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
            }
        }, p.getCell = function (t) {
            for (var e = 0; e < this.cells.length; e++) {
                var n = this.cells[e];
                if (n.element == t) return n
            }
        }, p.getCells = function (t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var n = this.getCell(t);
                n && e.push(n)
            }, this), e
        }, p.getCellElements = function () {
            return this.cells.map(function (t) {
                return t.element
            })
        }, p.getParentCell = function (t) {
            var e = this.getCell(t);
            return e || (t = i.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, p.getAdjacentCellElements = function (t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var n = this.slides.length;
            if (1 + 2 * t >= n) return this.getCellElements();
            for (var r = [], o = e - t; o <= e + t; o++) {
                var s = this.options.wrapAround ? i.modulo(o, n) : o, a = this.slides[s];
                a && (r = r.concat(a.getCellElements()))
            }
            return r
        }, p.queryCell = function (t) {
            if ("number" == typeof t) return this.cells[t];
            if ("string" == typeof t) {
                if (t.match(/^[#\.]?[\d\/]/)) return;
                t = this.element.querySelector(t)
            }
            return this.getCell(t)
        }, p.uiChange = function () {
            this.emitEvent("uiChange")
        }, p.childUIPointerDown = function (t) {
            "touchstart" != t.type && t.preventDefault(), this.focus()
        }, p.onresize = function () {
            this.watchCSS(), this.resize()
        }, i.debounceMethod(l, "onresize", 150), p.resize = function () {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, p.watchCSS = function () {
            this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }, p.onkeydown = function (t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var n = l.keyboardHandlers[t.keyCode];
                n && n.call(this)
            }
        }, l.keyboardHandlers = {
            37: function () {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            }, 39: function () {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
            }
        }, p.focus = function () {
            var e = t.pageYOffset;
            this.element.focus({preventScroll: !0}), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
        }, p.deactivate = function () {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
                t.destroy()
            }), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, p.destroy = function () {
            this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid]
        }, i.extend(p, s), l.data = function (t) {
            t = i.getQueryElement(t);
            var e = t && t.flickityGUID;
            return e && h[e]
        }, i.htmlInit(l, "flickity"), c && c.bridget && c.bridget("flickity", l), l.setJQuery = function (t) {
            c = t
        }, l.Cell = r, l.Slide = o, l
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "e", function () {
        return i
    }), n.d(e, "c", function () {
        return r
    }), n.d(e, "a", function () {
        return o
    }), n.d(e, "d", function () {
        return s
    }), n.d(e, "b", function () {
        return a
    });
    var i = "spritespin",
        r = ["mousedown", "mousemove", "mouseup", "mouseenter", "mouseover", "mouseleave", "mousewheel", "wheel", "click", "dblclick", "touchstart", "touchmove", "touchend", "touchcancel", "selectstart", "gesturestart", "gesturechange", "gestureend"],
        o = ["onInit", "onProgress", "onLoad", "onFrameChanged", "onFrame", "onDraw", "onComplete", "onDestroy"],
        s = ["dragstart"], a = {
            source: void 0,
            width: void 0,
            height: void 0,
            frames: void 0,
            framesX: void 0,
            lanes: 1,
            sizeMode: void 0,
            renderer: "canvas",
            lane: 0,
            frame: 0,
            frameTime: 40,
            animate: !0,
            retainAnimate: !1,
            reverse: !1,
            loop: !0,
            stopFrame: 0,
            wrap: !0,
            wrapLane: !1,
            sense: 1,
            senseLane: void 0,
            orientation: "horizontal",
            detectSubsampling: !0,
            preloadCount: void 0,
            touchScrollTimer: [200, 1500],
            responsive: void 0,
            plugins: void 0
        }
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = s, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r)
    }("undefined" != typeof window && window, function () {
        "use strict";

        function t() {
        }

        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {}, i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r];
                    i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(0)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";

        function n(n, o, a) {
            function l(t, e, i) {
                var r, o = "$()." + n + '("' + e + '")';
                return t.each(function (t, l) {
                    var c = a.data(l, n);
                    if (!c) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                    var u = c[e];
                    if (!u || "_" == e.charAt(0)) return void s(o + " is not a valid method");
                    var d = u.apply(c, i);
                    r = void 0 === r ? d : r
                }), void 0 !== r ? r : t
            }

            function c(t, e) {
                t.each(function (t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
                })
            }

            (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
                if ("string" == typeof t) {
                    return l(this, t, r.call(arguments, 1))
                }
                return c(this, t), this
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }

        var r = Array.prototype.slice, o = t.console, s = void 0 === o ? function () {
        } : function (t) {
            o.error(t)
        };
        return i(e || t.jQuery), n
    })
}, function (t, e, n) {
    var i, r;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
    !function (o, s) {
        i = [n(7)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";

        function n() {
        }

        function i() {
        }

        var r = i.prototype = Object.create(e.prototype);
        r.bindStartEvent = function (t) {
            this._bindStartEvent(t, !0)
        }, r.unbindStartEvent = function (t) {
            this._bindStartEvent(t, !1)
        }, r._bindStartEvent = function (e, n) {
            n = void 0 === n || n;
            var i = n ? "addEventListener" : "removeEventListener", r = "mousedown";
            t.PointerEvent ? r = "pointerdown" : "ontouchstart" in t && (r = "touchstart"), e[i](r, this)
        }, r.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.getTouch = function (t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, r.onmousedown = function (t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, r.ontouchstart = function (t) {
            this._pointerDown(t, t.changedTouches[0])
        }, r.onpointerdown = function (t) {
            this._pointerDown(t, t)
        }, r._pointerDown = function (t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, r.pointerDown = function (t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return r._bindPostStartEvents = function (e) {
            if (e) {
                var n = o[e.type];
                n.forEach(function (e) {
                    t.addEventListener(e, this)
                }, this), this._boundPointerEvents = n
            }
        }, r._unbindPostStartEvents = function () {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function (e) {
                t.removeEventListener(e, this)
            }, this), delete this._boundPointerEvents)
        }, r.onmousemove = function (t) {
            this._pointerMove(t, t)
        }, r.onpointermove = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, r.ontouchmove = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, r._pointerMove = function (t, e) {
            this.pointerMove(t, e)
        }, r.pointerMove = function (t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, r.onmouseup = function (t) {
            this._pointerUp(t, t)
        }, r.onpointerup = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, r.ontouchend = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, r._pointerUp = function (t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, r.pointerUp = function (t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, r._pointerDone = function () {
            this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
        }, r._pointerReset = function () {
            this.isPointerDown = !1, delete this.pointerIdentifier
        }, r.pointerDone = n, r.onpointercancel = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, r.ontouchcancel = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, r._pointerCancel = function (t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, r.pointerCancel = function (t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, i.getPointerPoint = function (t) {
            return {x: t.pageX, y: t.pageY}
        }, i
    })
}, function (t, e, n) {
    var i, r;/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
    !function (o, s) {
        i = [n(4), n(61)], void 0 !== (r = function (t, e) {
            return s(o, t, e)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var i = e.prototype;
        return i._createImagesLoaded = function () {
            this.on("activate", this.imagesLoaded)
        }, i.imagesLoaded = function () {
            function t(t, n) {
                var i = e.getParentCell(n.img);
                e.cellSizeChange(i && i.element), e.options.freeScroll || e.positionSliderAtSelected()
            }

            if (this.options.imagesLoaded) {
                var e = this;
                n(this.slider).on("progress", t)
            }
        }, e
    })
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        return t.state = t.state || {}, t.state[e] = t.state[e] || {}, t.state[e]
    }

    function r(t, e) {
        var n = i(t, "plugin");
        return n[e] = n[e] || {}, n[e]
    }

    function o(t, e) {
        return !!i(t, "flags")[e]
    }

    function s(t, e, n) {
        i(t, "flags")[e] = !!n
    }

    e.c = i, e.b = r, e.d = o, e.a = s
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        breakpoints: {
            xs: 640,
            small: 768,
            medium: 1024,
            large: 1280
        }, columns: {xs: 2, small: 3, medium: 4, large: 5}
    }
}, function (t, e, n) {
    "use strict";
    var i, r, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    !function (n, a) {
        "object" == s(e) && void 0 !== t ? a(e) : (r = [e], i = a, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o))
    }(0, function (t) {
        function e(t, e) {
            t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
        }

        function n(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }/*!
      * GSAP 3.0.1
      * https://greensock.com
      *
      * @license Copyright 2008-2019, GreenSock. All rights reserved.
      * Subject to the terms at https://greensock.com/standard-license or for
      * Club GreenSock members, the agreement issued with that membership.
      * @author: Jack Doyle, jack@greensock.com
     */
        function i(t) {
            return "string" == typeof t
        }

        function r(t) {
            return "function" == typeof t
        }

        function o(t) {
            return "number" == typeof t
        }

        function a(t) {
            return void 0 === t
        }

        function l(t) {
            return "object" == (void 0 === t ? "undefined" : s(t))
        }

        function c(t) {
            return !1 !== t
        }

        function u() {
            return "undefined" != typeof window
        }

        function d(t) {
            return r(t) || i(t)
        }

        function f(t) {
            return (Zt = Fe(t, Oe)) && Pn
        }

        function h(t, e) {
            return !e && console.warn(t)
        }

        function p(t, e) {
            return t && (Oe[t] = e) && Zt && (Zt[t] = e) || Oe
        }

        function g() {
            return 0
        }

        function v(t) {
            var e, n, i = t[0];
            if (!l(i) && !r(i)) return ke(t) ? t : [t];
            if (!(e = (i._gsap || {}).harness)) {
                for (n = Be.length; n-- && !Be[n].targetTest(i);) ;
                e = Be[n]
            }
            for (n = t.length; n--;) t[n]._gsap || (t[n]._gsap = new an(t[n], e));
            return t
        }

        function m(t) {
            return t._gsap || v(Xe(t))[0]._gsap
        }

        function y(t, e) {
            var n = t[e];
            return r(n) ? t[e]() : a(n) && t.getAttribute(e) || n
        }

        function w(t, e) {
            return (t = t.split(",")).forEach(e) || t
        }

        function b(t) {
            return Math.round(1e4 * t) / 1e4
        }

        function x(t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;) ;
            return i < n
        }

        function S(t, e, n) {
            var i, r = o(t[1]), s = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[s];
            return r && (a.duration = t[1]), 1 === e ? (a.runBackwards = 1, a.immediateRender = c(a.immediateRender)) : 2 === e && (i = t[s - 1], a.startAt = i, a.immediateRender = c(a.immediateRender)), a.parent = n, a
        }

        function _() {
            var t, e, n = Ie.length, i = Ie.slice(0);
            for (je = {}, t = Ie.length = 0; t < n; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }

        function C(t, e, n, i) {
            Ie.length && _(), t.render(e, n, i), Ie.length && _()
        }

        function k(t) {
            var e = parseFloat(t);
            return e || 0 === e ? e : t
        }

        function T(t) {
            return t
        }

        function E(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        }

        function A(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        }

        function P(t, e) {
            for (var n in e) t[n] = l(e[n]) ? P(t[n] || (t[n] = {}), e[n]) : e[n];
            return t
        }

        function D(t, e) {
            var n, i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i
        }

        function M(t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev, o = e._next;
            r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._dp = t, e._next = e._prev = e.parent = null
        }

        function O(t, e) {
            !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
        }

        function L(t) {
            for (var e = t; e;) e._dirty = 1, e = e.parent;
            return t
        }

        function I(t) {
            var e;
            return t._repeat ? (e = t.duration() + t._rDelay) * ~~(t._tTime / e) : 0
        }

        function j(t, e) {
            return 0 < e._ts ? (t - e._start) * e._ts : (e._dirty ? e.totalDuration() : e._tDur) + (t - e._start) * e._ts
        }

        function z(t, e, n) {
            if (e.parent && O(e), e._start = n + e._delay, e._end = e._start + (e.totalDuration() / e._ts || 0), function (t, e, n, i, r) {
                void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                var o, s = t[i];
                if (r) for (o = e[r]; s && s[r] > o;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), (t._recent = e)._time || !e._dur && e._initted) {
                var i = (t.rawTime() - e._start) * e._ts;
                (!e._dur || We(0, e.totalDuration(), i) - e._tTime > ye) && e.render(i, !0)
            }
            if (L(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration()) for (var r = t; r._dp;) r.totalTime(r._tTime, !0), r = r._dp;
            return t
        }

        function R(t, e, n, i) {
            return fn(t, e), t._initted ? !n && t._pt && t.vars.lazy ? (Ie.push(t), t._lazy = [e, i], 1) : void 0 : 1
        }

        function N(t) {
            if (t instanceof cn) return L(t);
            var e = t._repeat;
            return t._tDur = e ? e < 0 ? 1e20 : b(t._dur * (e + 1) + t._rDelay * e) : t._dur, L(t.parent), t
        }

        function B(t, e) {
            var n, r, o = t.labels, s = t._recent || He, a = t.duration() >= me ? s.endTime(!1) : t._dur;
            return i(e) && (isNaN(e) || e in o) ? "<" === (n = e.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (n = e.indexOf("=")) < 0 ? (e in o || (o[e] = a), o[e]) : (r = +(e.charAt(n - 1) + e.substr(n + 1)), 1 < n ? B(t, e.substr(0, n - 1)) + r : a + r) : null == e ? a : +e
        }

        function $(t, e) {
            return t || 0 === t ? e(t) : e
        }

        function F(t) {
            return (t + "").substr((parseFloat(t) + "").length)
        }

        function H(t) {
            return l(t) && "length" in t && t.length - 1 in t && l(t[0]) && t !== Vt
        }

        function W(t) {
            if (r(t)) return t;
            var e = l(t) ? t : {each: t}, n = on(e.ease), o = e.from || 0, s = parseFloat(e.base) || 0, a = {},
                c = 0 < o && o < 1, u = isNaN(o) || c, d = e.axis, f = o, h = o;
            return i(o) ? f = h = {
                center: .5,
                edges: .5,
                end: 1
            }[o] || 0 : !c && u && (f = o[0], h = o[1]), function (t, i, r) {
                var l, c, p, g, v, m, y, w, x, S = (r || e).length, _ = a[S];
                if (!_) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, me])[1])) {
                        for (y = -me; y < (y = r[x++].getBoundingClientRect().left) && x < S;) ;
                        x--
                    }
                    for (_ = a[S] = [], l = u ? Math.min(x, S) * f - .5 : o % x, c = u ? S * h / x - .5 : o / x | 0, w = me, m = y = 0; m < S; m++) p = m % x - l, g = c - (m / x | 0), _[m] = v = d ? Math.abs("y" === d ? g : p) : Se(p * p + g * g), y < v && (y = v), v < w && (w = v);
                    _.max = y - w, _.min = w, _.v = S = (parseFloat(e.amount) || parseFloat(e.each) * (S < x ? S - 1 : d ? "y" === d ? S / x : x : Math.max(x, S / x)) || 0) * ("edges" === o ? -1 : 1), _.b = S < 0 ? s - S : s, _.u = F(e.amount || e.each) || 0, n = n && S < 0 ? rn(n) : n
                }
                return S = (_[t] - _.min) / _.max || 0, b(_.b + (n ? n(S) : S) * _.v) + _.u
            }
        }

        function q(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (n) {
                return ~~(Math.round(parseFloat(n) / t) * t * e) / e + (o(n) ? 0 : F(n))
            }
        }

        function X(t, e) {
            var n, i, r = ke(t);
            return !r && l(t) && (n = r = t.radius || me, t = Xe(t.values), (i = !o(t[0])) && (n *= n)), $(e, r ? function (e) {
                for (var r, s, a = parseFloat(i ? e.x : e), l = parseFloat(i ? e.y : 0), c = me, u = 0, d = t.length; d--;) (r = i ? (r = t[d].x - a) * r + (s = t[d].y - l) * s : Math.abs(t[d] - a)) < c && (c = r, u = d);
                return u = !n || c <= n ? t[u] : e, i || u === e || o(e) ? u : u + F(e)
            } : q(t))
        }

        function Y(t, e, n, i) {
            return $(ke(t) ? !e : !i, function () {
                return ke(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i
            })
        }

        function U(t, e, n) {
            return $(n, function (n) {
                return t[~~e(n)]
            })
        }

        function V(t) {
            for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? Me : Te), s += t.substr(o, e - o) + Y(r ? n : +n[0], +n[1], +n[2] || 1e-5), o = i + 1;
            return s + t.substr(o, t.length - o)
        }

        function G(t, e, n) {
            var i, r, o, s = t.labels, a = me;
            for (i in s) (r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
            return o
        }

        function Q(t) {
            return O(t), t.progress() < 1 && Ue(t, "onInterrupt"), t
        }

        function Z(t, e, n) {
            return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Ve + .5 | 0
        }

        function J(t, e) {
            var n, i, r, s, a, l, c, u, d, f, h = t ? o(t) ? [t >> 16, t >> 8 & Ve, t & Ve] : 0 : Ge.black;
            if (!h) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ge[t]) h = Ge[t]; else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (i = t.charAt(2)) + i + (r = t.charAt(3)) + r), h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ve, t & Ve]; else if ("hsl" === t.substr(0, 3)) if (h = f = t.match(Te), e) {
                    if (~t.indexOf("=")) return t.match(Ee)
                } else s = +h[0] % 360 / 360, a = +h[1] / 100, n = 2 * (l = +h[2] / 100) - (i = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < h.length && (h[3] *= 1), h[0] = Z(s + 1 / 3, n, i), h[1] = Z(s, n, i), h[2] = Z(s - 1 / 3, n, i); else h = t.match(Te) || Ge.transparent;
                h = h.map(Number)
            }
            return e && !f && (n = h[0] / Ve, i = h[1] / Ve, r = h[2] / Ve, l = ((c = Math.max(n, i, r)) + (u = Math.min(n, i, r))) / 2, c === u ? s = a = 0 : (d = c - u, a = .5 < l ? d / (2 - c - u) : d / (c + u), s = c === n ? (i - r) / d + (i < r ? 6 : 0) : c === i ? (r - n) / d + 2 : (n - i) / d + 4, s *= 60), h[0] = s + .5 | 0, h[1] = 100 * a + .5 | 0, h[2] = 100 * l + .5 | 0), h
        }

        function K(t, e) {
            var n, i, r, o = (t + "").match(Qe), s = 0, a = "";
            if (!o) return t;
            for (n = 0; n < o.length; n++) i = o[n], s += (r = t.substr(s, t.indexOf(i, s) - s)).length + i.length, 3 === (i = J(i, e)).length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
            return a + t.substr(s)
        }

        function tt(t) {
            var e, n = t.join(" ");
            Qe.lastIndex = 0, Qe.test(n) && (e = Ze.test(n), t[0] = K(t[0], e), t[1] = K(t[1], e))
        }

        function et(t) {
            var e = (t + "").split("("), n = tn[e[0]];
            return n && 1 < e.length && n.config ? n.config.apply(null, ~t.indexOf("{") ? [function (t) {
                for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(nn, "").trim() : +i, s = n.substr(e + 1).trim();
                return r
            }(e[1])] : Pe.exec(t)[1].split(",").map(k)) : tn._CE && en.test(t) ? tn._CE("", t) : n
        }

        function nt(t, e, n, i) {
            void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, o = {easeIn: e, easeOut: n, easeInOut: i};
            return w(t, function (t) {
                for (var e in tn[t] = Oe[t] = o, tn[r = t.toLowerCase()] = n, o) tn[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = tn[t + "." + e] = o[e]
            }), o
        }

        function it(t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }

        function rt(t, e, n) {
            function i(t) {
                return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Ce((t - s) * o) + 1
            }

            var r = 1 <= e ? e : 1, o = (n || (t ? .3 : .45)) / (e < 1 ? e : 1), s = o / we * (Math.asin(1 / r) || 0),
                a = "out" === t ? i : "in" === t ? function (t) {
                    return 1 - i(1 - t)
                } : it(i);
            return o = we / o, a.config = function (e, n) {
                return rt(t, e, n)
            }, a
        }

        function ot(t, e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }

            void 0 === e && (e = 1.70158);
            var i = "out" === t ? n : "in" === t ? function (t) {
                return 1 - n(1 - t)
            } : it(n);
            return i.config = function (e) {
                return ot(t, e)
            }, i
        }

        function st(t) {
            var e, n, i = oe() - ce, r = !0 === t;
            se < i && (le += i - ae), ce += i, re.time = (ce - le) / 1e3, (0 < (e = re.time - de) || r) && (re.frame++, de += e + (ue <= e ? .004 : ue - e), n = 1), r || (ee = ne(st)), n && fe.forEach(function (e) {
                return e(re.time, i, re.frame, t)
            })
        }

        function at(t) {
            return t < pe ? he * t * t : t < .7272727272727273 ? he * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? he * (t -= 2.25 / 2.75) * t + .9375 : he * Math.pow(t - 2.625 / 2.75, 2) + .984375
        }

        function lt(t, e) {
            var n = t.parent || Ut;
            this.vars = t, this._dur = this._tDur = +t.duration || 0, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase, N(this)), this._ts = 1, this.data = t.data, te || Je.wake(), n && z(n, this, e || 0 === e ? e : n._time), t.reversed && this.reversed(!0), t.paused && this.paused(!0)
        }

        function ct(t, e, n, o, s, a) {
            var c, u, d, f;
            if (ze[t] && !1 !== (c = new ze[t]).init(s, c.rawVars ? e[t] : function (t, e, n, o, s) {
                if (r(t) && (t = hn(t, s, e, n, o)), !l(t) || t.style && t.nodeType || ke(t)) return i(t) ? hn(t, s, e, n, o) : t;
                var a, c = {};
                for (a in t) c[a] = hn(t[a], s, e, n, o);
                return c
            }(e[t], o, s, a, n), n, o, a) && (n._pt = u = new An(n._pt, s, t, 0, 1, c.render, c, 0, c.priority), n !== Kt)) for (d = n._ptLookup[n._targets.indexOf(s)], f = c._props.length; f--;) d[c._props[f]] = u;
            return c
        }

        function ut(t, e, n) {
            return t.setAttribute(e, n)
        }

        function dt(t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
        }

        function ft(t, e, n, i, r, o, s, a, l) {
            this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || xn, this.d = s || this, this.set = a || mn, this.pr = l || 0, (this._next = t) && (t._prev = this)
        }

        function ht(t, e) {
            return {
                name: t, rawVars: 1, init: function (t, n, r) {
                    r._onInit = function (t) {
                        var r, o;
                        if (i(n) && (r = {}, w(n, function (t) {
                            return r[t] = 1
                        }), n = r), e) {
                            for (o in r = {}, n) r[o] = e(n[o]);
                            n = r
                        }
                        !function (t, e) {
                            var n, i, r, o = t._targets;
                            for (n in e) for (i = o.length; i--;) (r = t._ptLookup[i][n]) && r.d.modifier && r.d.modifier(e[n], t, o[i], n)
                        }(t, n)
                    }
                }
            }
        }

        function pt(t, e) {
            return e.set(e.t, e.p, ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }

        function gt(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }

        function vt(t, e) {
            return e.set(e.t, e.p, t ? ~~(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        }

        function mt(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        }

        function yt(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }

        function wt(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }

        function bt(t, e, n) {
            return t.style[e] = n
        }

        function xt(t, e, n) {
            return t.style.setProperty(e, n)
        }

        function St(t, e, n) {
            return t._gsap[e] = n
        }

        function _t(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        }

        function Ct(t, e, n, i, r) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(r, o)
        }

        function kt(t, e, n, i, r) {
            var o = t._gsap;
            o[e] = n, o.renderTransform(r, o)
        }

        function Tt(t, e) {
            var n = Mn.createElementNS ? Mn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Mn.createElement(t);
            return n.style ? n : Mn.createElement(t)
        }

        function Et(t, e) {
            var n = getComputedStyle(t);
            return n[e] || n.getPropertyValue(e.replace(ci, "-$1").toLowerCase()) || n.getPropertyValue(e)
        }

        function At(t, e) {
            var n = (e || In).style, i = 5, r = "O,Moz,ms,Ms,Webkit".split(",");
            if (t in n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(r[i] + t in n);) ;
            return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? r[i] : "") + t
        }

        function Pt() {
            !function () {
                return "undefined" != typeof window
            }() || (Dn = window, Mn = Dn.document, On = Mn.documentElement, In = Tt("div") || {style: {}}, jn = Tt("div"), pi = At(pi), gi = At(gi), In.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Rn = !!At("perspective"), Ln = 1)
        }

        function Dt(t, e) {
            for (var n = e.length; n--;) if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        }

        function Mt(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = function t(e) {
                    var n,
                        i = Tt("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode, o = this.nextSibling, s = this.style.cssText;
                    if (On.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                        n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (e) {
                    } else this._gsapBBox && (n = this._gsapBBox());
                    return o ? r.insertBefore(this, o) : r.appendChild(this), On.removeChild(i), this.style.cssText = s, n
                }.call(t, !0)
            }
            return !e || e.width || e.x || e.y ? e : {
                x: +Dt(t, ["x", "cx", "x1"]),
                y: +Dt(t, ["y", "cy", "y1"]),
                width: 0,
                height: 0
            }
        }

        function Ot(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Mt(t))
        }

        function Lt(t, e) {
            if (e) {
                var n = t.style;
                e in oi && (e = pi), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(ci, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        }

        function It(t, e, n, i, r, o) {
            var s = new An(t._pt, e, n, 0, 1, o ? wt : yt);
            return (t._pt = s).b = i, s.e = r, t._props.push(n), s
        }

        function jt(t, e, n, i) {
            var r, o, s, a, l = parseFloat(n), c = (n + "").substr((l + "").length) || "px", u = In.style,
                d = di.test(e), f = "svg" === t.tagName.toLowerCase(),
                h = (f ? "client" : "offset") + (d ? "Width" : "Height"), p = "px" === i;
            return i === c || vi[i] || vi[c] ? l : (a = t.getCTM && Ot(t), "%" === i && oi[e] ? b(l / (a ? t.getBBox()[d ? "width" : "height"] : t[h]) * 100) : (u[d ? "width" : "height"] = 100 + (p ? c : i), o = "em" === i && t.appendChild && !f ? t : t.parentNode, a && (o = (t.ownerSVGElement || {}).parentNode), o && o !== Mn && o.appendChild || (o = Mn.body), (s = o._gsap) && "%" === i && s.width && d && s.time === Je.time ? r = s.width * l / 100 : (o.appendChild(In), r = In[h], o.removeChild(In), d && "%" === i && ((s = m(o)).time = Je.time, s.width = r / l * 100)), b(p ? r * l / 100 : 100 / r * l)))
        }

        function zt(t, e, n, i) {
            var r;
            return Ln || Pt(), e in hi && ~(e = hi[e]).indexOf(",") && (e = e.split(",")[0]), oi[e] ? (r = xi(t, i), r = "transformOrigin" !== e ? r[e] : Si(Et(t, gi)) + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !i || (r = Et(t, e) || y(t, e)), n ? jt(t, e, r, n) + n : r
        }

        function Rt(t, e, n, i) {
            var r, o, s, a, l, c, u, d, f, h, p, g, v = new An(this._pt, t.style, e, 0, 1, _n), m = 0, y = 0;
            if (v.b = n, v.e = i, n += "", "auto" == (i += "") && (t.style[e] = i, i = Et(t, e) || i, t.style[e] = n), tt(r = [n, i]), i = r[1], s = (n = r[0]).match(ui) || [], (i.match(ui) || []).length) {
                for (; o = ui.exec(i);) u = o[0], f = i.substring(m, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), u !== (c = s[y++] || "") && (a = parseFloat(c) || 0, p = c.substr((a + "").length), (g = "=" === u.charAt(1) ? +(u.charAt(0) + "1") : 0) && (u = u.substr(2)), d = parseFloat(u), h = u.substr((d + "").length), m = ui.lastIndex - h.length, h || (h = h || ge.units[e] || p, m === i.length && (i += h, v.e += h)), p !== h && (a = jt(t, e, c, h)), v._pt = {
                    _next: v._pt,
                    p: f || 1 === y ? f : ",",
                    s: a,
                    c: g ? g * d : d - a,
                    m: l && l < 4 ? Math.round : 0
                });
                v.c = m < i.length ? i.substring(m, i.length) : ""
            } else v.r = "display" === e ? wt : yt;
            return De.test(i) && (v.e = 0), this._pt = v
        }

        function Nt(t) {
            var e = t.split(" "), n = e[0], i = e[1] || "50%";
            return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (e = n, n = i, i = e), e[0] = mi[n] || n, e[1] = mi[i] || i, e.join(" ")
        }

        function Bt(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, i, r, o = e.t, s = o.style, a = e.u;
                if ("all" === a || !0 === a) s.cssText = "", i = 1; else for (r = (a = a.split(",")).length; -1 < --r;) n = a[r], oi[n] && (i = 1, n = "transformOrigin" === n ? gi : pi), Lt(o, n);
                i && (Lt(o, pi), (i = o._gsap) && (i.svg && o.removeAttribute("transform"), delete i.x))
            }
        }

        function $t(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }

        function Ft(t) {
            var e = Et(t, pi);
            return $t(e) ? wi : e.substr(7).match(Ee).map(b)
        }

        function Ht(t, e) {
            var n, i, r, o, s = t._gsap, a = t.style, l = Ft(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? wi : l : (l !== wi || t.offsetParent || t === On || s.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, On.appendChild(t)), l = Ft(t), r ? a.display = r : Lt(t, "display"), o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : On.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        }

        function Wt(t, e, n, i, r, o) {
            var s, a, l, c = t._gsap, u = r || Ht(t, !0), d = c.xOrigin || 0, f = c.yOrigin || 0, h = c.xOffset || 0,
                p = c.yOffset || 0, g = u[0], v = u[1], m = u[2], y = u[3], w = u[4], b = u[5], x = e.split(" "),
                S = parseFloat(x[0]) || 0, _ = parseFloat(x[1]) || 0;
            n ? u !== wi && (a = g * y - v * m) && (l = S * (-v / a) + _ * (g / a) - (g * b - v * w) / a, S = S * (y / a) + _ * (-m / a) + (m * b - y * w) / a, _ = l) : (S = (s = Mt(t)).x + (~x[0].indexOf("%") ? S / 100 * s.width : S), _ = s.y + (~(x[1] || x[0]).indexOf("%") ? _ / 100 * s.height : _)), i || !1 !== i && c.smooth ? (w = S - d, b = _ - f, c.xOffset += w * g + b * m - w, c.yOffset += w * v + b * y - b) : c.xOffset = c.yOffset = 0, c.xOrigin = S, c.yOrigin = _, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!n, o && (It(o, c, "xOrigin", d, S), It(o, c, "yOrigin", f, _), It(o, c, "xOffset", h, c.xOffset), It(o, c, "yOffset", p, c.yOffset))
        }

        function qt(t, e, n) {
            var i = F(e);
            return b(parseFloat(e) + parseFloat(jt(t, "x", n + "px", i))) + i
        }

        function Xt(t, e, n, r, o, s) {
            var a, l, c = 360, u = i(o), d = parseFloat(o) * (u && ~o.indexOf("rad") ? si : 1), f = s ? d * s : d - r,
                h = r + f + "deg";
            return u && ("short" === (a = o.split("_")[1]) && (f %= c) != f % 180 && (f += f < 0 ? c : -c), "cw" === a && f < 0 ? f = (f + 36e9) % c - ~~(f / c) * c : "ccw" === a && 0 < f && (f = (f - 36e9) % c - ~~(f / c) * c)), t._pt = l = new An(t._pt, e, n, r, f, gt), l.e = h, l.u = "deg", t._props.push(n), l
        }

        function Yt(t, e, n) {
            var i, r, o, s, a, l, c, u = jn.style, d = n._gsap;
            for (r in u.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", u[pi] = e, Mn.body.appendChild(jn), i = xi(jn, 1), oi) (o = d[r]) !== (s = i[r]) && "perspective" !== r && (a = F(o) !== (c = F(s)) ? jt(n, r, o, c) : parseFloat(o), l = parseFloat(s), t._pt = new An(t._pt, d, r, a, l - a, pt), t._pt.u = c, t._props.push(r));
            Mn.body.removeChild(jn)
        }

        var Ut, Vt, Gt, Qt, Zt, Jt, Kt, te, ee, ne, ie, re, oe, se, ae, le, ce, ue, de, fe, he, pe,
            ge = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
            ve = {duration: .5, overwrite: !1, delay: 0}, me = 1e8, ye = 1 / me, we = 2 * Math.PI, be = we / 4, xe = 0,
            Se = Math.sqrt, _e = Math.cos, Ce = Math.sin, ke = Array.isArray, Te = /(?:-?\.?\d|\.)+/gi,
            Ee = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, Ae = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi, Pe = /\(([^()]+)\)/i,
            De = /[\+-]=-?[\.\d]+/, Me = /[#\-+\.]*\b[a-z\d-=+%.]+/gi, Oe = {}, Le = {}, Ie = [], je = {}, ze = {},
            Re = {}, Ne = 30, Be = [], $e = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            Fe = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }, He = {_start: 0, endTime: g}, We = function (t, e, n) {
                return n < t ? t : e < n ? e : n
            }, qe = [].slice, Xe = function (t, e) {
                return !i(t) || e || !Gt && Ke() ? ke(t) ? function (t, e, n) {
                    return void 0 === n && (n = []), t.forEach(function (t) {
                        var r;
                        return i(t) && !e || H(t) ? (r = n).push.apply(r, Xe(t)) : n.push(t)
                    }) || n
                }(t, e) : H(t) ? qe.call(t, 0) : t ? [t] : [] : qe.call(Qt.querySelectorAll(t), 0)
            }, Ye = function (t, e, n, i, r) {
                var o = e - t, s = i - n;
                return $(r, function (e) {
                    return n + (e - t) / o * s
                })
            }, Ue = function (t, e, n) {
                var i, r, o = t.vars, s = o[e];
                if (s) return i = o[e + "Params"], r = o.callbackScope || t, n && Ie.length && _(), i ? s.apply(r, i) : s.call(r, t)
            }, Ve = 255, Ge = {
                aqua: [0, Ve, Ve],
                lime: [0, Ve, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, Ve],
                navy: [0, 0, 128],
                white: [Ve, Ve, Ve],
                olive: [128, 128, 0],
                yellow: [Ve, Ve, 0],
                orange: [Ve, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [Ve, 0, 0],
                pink: [Ve, 192, 203],
                cyan: [0, Ve, Ve],
                transparent: [Ve, Ve, Ve, 0]
            }, Qe = function () {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in Ge) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(), Ze = /hsl[a]?\(/, Je = (oe = Date.now, se = 500, ae = 33, le = oe(), ce = le, de = ue = 1 / 60, re = {
                time: 0,
                frame: 0,
                tick: function () {
                    st(!0)
                },
                wake: function () {
                    Jt && (!Gt && u() && (Vt = Gt = window, Qt = Vt.document || {}, Oe.gsap = Pn, (Vt.gsapVersions || (Vt.gsapVersions = [])).push(Pn.version), f(Zt || Vt.GreenSockGlobals || !Vt.gsap && Vt || {}), ie = Vt.requestAnimationFrame), ee && re.sleep(), ne = ie || function (t) {
                        return setTimeout(t, 1e3 * (de - re.time) + 1 | 0)
                    }, te = 1, st(2))
                },
                sleep: function () {
                    (ie ? Vt.cancelAnimationFrame : clearTimeout)(ee), te = 0, ne = g
                },
                lagSmoothing: function (t, e) {
                    se = t || 1e8, ae = Math.min(e, se, 0)
                },
                fps: function (t) {
                    ue = 1 / (t || 60), de = re.time + ue
                },
                add: function (t) {
                    fe.indexOf(t) < 0 && fe.push(t), Ke()
                },
                remove: function (t) {
                    var e;
                    ~(e = fe.indexOf(t)) && fe.splice(e, 1)
                },
                _listeners: fe = []
            }), Ke = function () {
                return !te && Je.wake()
            }, tn = {}, en = /^[\d.\-M][\d.\-,\s]/, nn = /["']/g, rn = function (t) {
                return function (e) {
                    return 1 - t(1 - e)
                }
            }, on = function (t, e) {
                return t && (r(t) ? t : tn[t] || et(t)) || e
            };
        w("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var n = e < 5 ? e + 1 : e;
            nt(t + ",Power" + (n - 1), e ? function (t) {
                return Math.pow(t, n)
            } : function (t) {
                return t
            }, function (t) {
                return 1 - Math.pow(1 - t, n)
            }, function (t) {
                return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
            })
        }), tn.Linear.easeNone = tn.none = tn.Linear.easeIn, nt("Elastic", rt("in"), rt("out"), rt()), he = 7.5625, pe = 1 / 2.75, nt("Bounce", function (t) {
            return 1 - at(1 - t)
        }, at), nt("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        }), nt("Circ", function (t) {
            return -(Se(1 - t * t) - 1)
        }), nt("Sine", function (t) {
            return 1 - _e(t * be)
        }), nt("Back", ot("in"), ot("out"), ot()), tn.SteppedEase = tn.steps = Oe.SteppedEase = {
            config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t, i = t + (e ? 0 : 1), r = e ? 1 : 0;
                return function (t) {
                    return ((i * We(0, .99999999, t) | 0) + r) * n
                }
            }
        }, ve.ease = tn["quad.out"];
        var sn, an = function (t, e) {
            this.id = xe++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : y, this.set = e ? e.getSetter : bn
        }, ln = ((sn = lt.prototype).delay = function (t) {
            return t || 0 === t ? (this._delay = t, this) : this._delay
        }, sn.duration = function (t) {
            var e = arguments.length, n = this._repeat, i = 0 < n ? n * ((e ? t : this._dur) + this._rDelay) : 0;
            return e ? this.totalDuration(n < 0 ? t : t + i) : this.totalDuration() && this._dur
        }, sn.totalDuration = function (t) {
            if (!arguments.length) return this._tDur;
            var e = this._repeat, n = (t || this._rDelay) && e < 0;
            return this._tDur = n ? 1e20 : t, this._dur = n ? t : (t - e * this._rDelay) / (e + 1), this._dirty = 0, L(this.parent), this
        }, sn.totalTime = function (t, e) {
            if (Ke(), !arguments.length) return this._tTime;
            var n, i = this.parent || this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (n = this._start, this._start = i._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts), this._end += this._start - n, i._dirty || L(i); i.parent;) i.parent._time !== i._start + (0 < i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                this.parent || z(this._dp, this, this._start - this._delay)
            }
            return this._tTime === t && this._dur || C(this, t, e), this
        }, sn.time = function (t, e) {
            return arguments.length ? this.totalTime(t + I(this), e) : this._time
        }, sn.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._tTime / this.totalDuration()
        }, sn.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t + I(this), e) : this.duration() ? this._time / this._dur : this.ratio
        }, sn.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? 1 + ~~(this._tTime / n) : 1
        }, sn.timeScale = function (t) {
            var e = this._ts;
            return arguments.length ? e ? (this._end = this._start + this._tDur / (this._ts = t || ye), function (t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            }(this).totalTime(this._tTime, !0)) : (this._pauseTS = t, this) : e || this._pauseTS
        }, sn.paused = function (t) {
            var e = !this._ts;
            return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (this._ts = this._pauseTS, t = this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= ye), this.totalTime(t, !0))), this) : e
        }, sn.startTime = function (t) {
            return arguments.length ? (this.parent && this.parent._sort && z(this.parent, this, t - this._delay), this) : this._start
        }, sn.endTime = function (t) {
            return this._start + (c(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, sn.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? j(e.rawTime(t), this) : this._tTime : this._tTime
        }, sn.repeat = function (t) {
            return arguments.length ? (this._repeat = t, N(this)) : this._repeat
        }, sn.repeatDelay = function (t) {
            return arguments.length ? (this._rDelay = t, N(this)) : this._rDelay
        }, sn.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, sn.seek = function (t, e) {
            return this.totalTime(B(this, t), c(e))
        }, sn.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, c(e))
        }, sn.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, sn.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, sn.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, sn.resume = function () {
            return this.paused(!1)
        }, sn.reversed = function (t) {
            var e = this._ts || this._pauseTS;
            return arguments.length ? (t !== this.reversed() && (this[this._ts ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0
        }, sn.invalidate = function () {
            return this._initted = 0, this
        }, sn.isActive = function () {
            var t, e = this.parent || this._dp, n = this._start;
            return !e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - ye
        }, sn.eventCallback = function (t, e, n) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, sn.then = function (t) {
            var e = this;
            return void 0 === t && (t = g), new Promise(function (n) {
                e._prom = function () {
                    t(e), n()
                }
            })
        }, sn.kill = function () {
            Q(this)
        }, lt);
        E(ln.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: 0,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -ye,
            _prom: 0
        });
        var cn = function (t) {
            function n(e, n) {
                var i;
                return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = c(e.smoothChildTiming), i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = c(e.sortChildren), i
            }

            e(n, t);
            var s = n.prototype;
            return s.to = function (t, e, n, i) {
                return new vn(t, S(arguments, 0, this), B(this, o(e) ? i : n)), this
            }, s.from = function (t, e, n, i) {
                return new vn(t, S(arguments, 1, this), B(this, o(e) ? i : n)), this
            }, s.fromTo = function (t, e, n, i, r) {
                return new vn(t, S(arguments, 2, this), B(this, o(e) ? r : i)), this
            }, s.set = function (t, e, n) {
                return e.duration = 0, e.parent = this, e.repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new vn(t, e, B(this, n)), this
            }, s.call = function (t, e, n) {
                return z(this, vn.delayedCall(0, t, e), B(this, n))
            }, s.staggerTo = function (t, e, n, i, r, o, s) {
                return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new vn(t, n, B(this, r)), this
            }, s.staggerFrom = function (t, e, n, i, r, o, s) {
                return n.runBackwards = 1, n.immediateRender = c(n.immediateRender), this.staggerTo(t, e, n, i, r, o, s)
            }, s.staggerFromTo = function (t, e, n, i, r, o, s, a) {
                return i.startAt = n, i.immediateRender = c(i.immediateRender), this.staggerTo(t, e, i, r, o, s, a)
            }, s.render = function (t, e, n) {
                var i, r, o, s, a, l, c, u, d, f, h, p = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur,
                    m = g - ye < t && 0 <= t && this !== Ut ? g : t < ye ? 0 : t,
                    y = this._zTime < 0 != t < 0 && this._initted;
                if (m !== this._tTime || n || y) {
                    if (y && (v || (p = this._zTime), !t && e || (this._zTime = t)), i = m, d = this._start, l = 0 === (u = this._ts), p !== this._time && v && (i += this._time - p), this._repeat && (h = this._yoyo, a = v + this._rDelay, (v < (i = b(m % a)) || g === m) && (i = v), (s = ~~(m / a)) && s === m / a && (i = v, s--), (f = ~~(this._tTime / a)) && f === this._tTime / a && f--, h && 1 & s && (i = v - i), s !== f && !this._lock)) {
                        var w = h && 1 & f, x = w === (h && 1 & s);
                        if (s < f && (w = !w), p = w ? 0 : v, this._lock = 1, this.render(p, e, !v)._lock = 0, !e && this.parent && Ue(this, "onRepeat"), p !== this._time || l != !this._ts) return this;
                        if (x && (this._lock = 2, p = w ? v + 1e-4 : -1e-4, this.render(p, !0)), this._lock = 0, !this._ts && !l) return this
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, n) {
                        var i;
                        if (e < n) for (i = t._first; i && i._start <= n;) {
                            if (!i._dur && "isPause" === i.data && i._start > e) return i;
                            i = i._next
                        } else for (i = t._last; i && i._start >= n;) {
                            if (!i._dur && "isPause" === i.data && i._start < e) return i;
                            i = i._prev
                        }
                    }(this, b(p), b(i))) && (m -= i - (i = c._start)), this._tTime = m, this._time = i, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1), p || !i || e || Ue(this, "onStart"), p <= i && 0 <= t) for (r = this._first; r;) {
                        if (o = r._next, (r._act || i >= r._start) && r._ts && c !== r) {
                            if (r.parent !== this) return this.render(t, e, n);
                            if (r.render(0 < r._ts ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
                                c = 0;
                                break
                            }
                        }
                        r = o
                    } else {
                        r = this._last;
                        for (var S = t < 0 ? t : i; r;) {
                            if (o = r._prev, (r._act || S <= r._end) && r._ts && c !== r) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if (r.render(0 < r._ts ? (S - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (S - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
                                    c = 0;
                                    break
                                }
                            }
                            r = o
                        }
                    }
                    if (c && !e && (this.pause(), c.render(p <= i ? 0 : -ye)._zTime = p <= i ? 1 : -1, this._ts)) return this._start = d, this.render(t, e, n);
                    this._onUpdate && !e && Ue(this, "onUpdate", !0), (m === g || !m && this._ts < 0) && (d !== this._start && Math.abs(u) === Math.abs(this._ts) || (!i || g >= this.totalDuration()) && (!t && v || O(this, 1), e || t < 0 && !p || (Ue(this, m === g ? "onComplete" : "onReverseComplete", !0), this._prom && m === g && this._prom())))
                }
                return this
            }, s.add = function (t, e) {
                var n = this;
                if (o(e) || (e = B(this, e)), !(t instanceof ln)) {
                    if (ke(t)) return t.forEach(function (t) {
                        return n.add(t, e)
                    }), L(this);
                    if (i(t)) return this.addLabel(t, e);
                    if (!r(t)) return this;
                    t = vn.delayedCall(0, t)
                }
                return this !== t ? z(this, t, e) : this
            }, s.getChildren = function (t, e, n, i) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -me);
                for (var r = [], o = this._first; o;) o._start >= i && (o instanceof vn ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
                return r
            }, s.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), n = e.length; n--;) if (e[n].vars.id === t) return e[n]
            }, s.remove = function (t) {
                return i(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (M(this, t), t === this._recent && (this._recent = this._last), L(this))
            }, s.totalTime = function (e, n) {
                return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = Je.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts)), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
            }, s.addLabel = function (t, e) {
                return this.labels[t] = B(this, e), this
            }, s.removeLabel = function (t) {
                return delete this.labels[t], this
            }, s.addPause = function (t, e, n) {
                var i = vn.delayedCall(0, e || g, n);
                return i.data = "isPause", this._hasPause = 1, z(this, i, B(this, t))
            }, s.removePause = function (t) {
                var e = this._first;
                for (t = B(this, t); e;) e._start === t && "isPause" === e.data && O(e), e = e._next
            }, s.killTweensOf = function (t, e, n) {
                for (var i = this.getTweensOf(t, n), r = i.length; r--;) i[r].kill(t, e);
                return this
            }, s.getTweensOf = function (t, e) {
                for (var n, i = [], r = Xe(t), o = this._first; o;) o instanceof vn ? !x(o._targets, r) || e && !o.isActive() || i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n), o = o._next;
                return i
            }, s.tweenTo = function (t, e) {
                var n = this, i = B(n, t), r = e && e.startAt, o = vn.to(n, E({
                    ease: "none",
                    lazy: !1,
                    time: i,
                    duration: Math.abs(i - (r && "time" in r ? r.time : n._time)) / n.timeScale() || ye,
                    onStart: function () {
                        n.pause();
                        var t = Math.abs(i - n._time) / n.timeScale();
                        o._dur !== t && (o._dur = t, o.render(o._time, !0, !0)), e && e.onStart && e.onStart.apply(o, e.onStartParams || [])
                    }
                }, e));
                return o
            }, s.tweenFromTo = function (t, e, n) {
                return this.tweenTo(e, E({startAt: {time: B(this, t)}}, n))
            }, s.recent = function () {
                return this._recent
            }, s.nextLabel = function (t) {
                return void 0 === t && (t = this._time), G(this, B(this, t))
            }, s.previousLabel = function (t) {
                return void 0 === t && (t = this._time), G(this, B(this, t), 1)
            }, s.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + ye)
            }, s.shiftChildren = function (t, e, n) {
                void 0 === n && (n = 0);
                for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t), r = r._next;
                if (e) for (i in o) o[i] >= n && (o[i] += t);
                return L(this)
            }, s.invalidate = function () {
                var e = this._first;
                for (this._lock = 0; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, s.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
                return this._time = this._tTime = 0, t && (this.labels = {}), L(this)
            }, s.totalDuration = function (t) {
                var e, n, i = 0, r = this, o = r._last, s = me, a = r._repeat, l = a * r._rDelay || 0, c = a < 0;
                if (arguments.length) return c ? r : r.timeScale(r.totalDuration() / t);
                if (r._dirty) {
                    for (; o;) e = o._prev, o._dirty && o.totalDuration(), o._start > s && r._sort && o._ts && !r._lock ? (r._lock = 1, z(r, o, o._start - o._delay), r._lock = 0) : s = o._start, o._start < 0 && o._ts && (i -= o._start, (!r.parent && !r._dp || r.parent && r.parent.smoothChildTiming) && (r._start += o._start / r._ts, r._time -= o._start, r._tTime -= o._start), r.shiftChildren(-o._start, !1, -me), s = 0), i < (n = o._end = o._start + o._tDur / Math.abs(o._ts || o._pauseTS)) && o._ts && (i = b(n)), o = e;
                    r._dur = r === Ut && r._time > i ? r._time : Math.min(me, i), r._tDur = c && (r._dur || l) ? 1e20 : Math.min(me, i * (a + 1) + l), r._end = r._start + (r._tDur / Math.abs(r._ts || r._pauseTS) || 0), r._dirty = 0
                }
                return r._tDur
            }, n.updateRoot = function (t) {
                if (Ut._ts && C(Ut, j(t, Ut)), Je.frame >= Ne) {
                    Ne += ge.autoSleep || 120;
                    var e = Ut._first;
                    if ((!e || !e._ts) && ge.autoSleep && Je._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || Je.sleep()
                    }
                }
            }, n
        }(ln);
        E(cn.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
        var un, dn = function (t, e, n, o, s, a, l, c, u) {
                r(o) && (o = o(s || 0, t, a));
                var d, f = t[e],
                    h = "get" !== n ? n : r(f) ? u ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                    p = r(f) ? u ? wn : yn : mn;
                if (i(o) && (~o.indexOf("random(") && (o = V(o)), "=" === o.charAt(1) && (o = parseFloat(h) + parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) + F(h))), h !== o) return isNaN(h + o) ? function (t, e, n, i, r, o, s) {
                    var a, l, c, u, d, f, h, p, g = new An(this._pt, t, e, 0, 1, _n, null, r), v = 0, m = 0;
                    for (g.b = n, g.e = i, n += "", (h = ~(i += "").indexOf("random(")) && (i = V(i)), o && (o(p = [n, i], t, e), n = p[0], i = p[1]), l = n.match(Ae) || []; a = Ae.exec(i);) u = a[0], d = i.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[m++] && (f = parseFloat(l[m - 1]), g._pt = {
                        _next: g._pt,
                        p: d || 1 === m ? d : ",",
                        s: f,
                        c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - f,
                        m: c && c < 4 ? Math.round : 0
                    }, v = Ae.lastIndex);
                    return g.c = v < i.length ? i.substring(v, i.length) : "", g.fp = s, (De.test(i) || h) && (g.e = 0), this._pt = g
                }.call(this, t, e, h, o, p, c || ge.stringFilter, u) : (d = new An(this._pt, t, e, +h || 0, o - (h || 0), "boolean" == typeof f ? Sn : xn, 0, p), u && (d.fp = u), l && d.modifier(l, this, t), this._pt = d)
            }, fn = function t(e, n) {
                var i, r, o, s, a, l, u, d, f, h, p, g, y = e.vars, w = y.ease, b = y.startAt, x = y.immediateRender,
                    S = y.lazy, C = y.onUpdate, k = y.onUpdateParams, T = y.callbackScope, A = y.runBackwards,
                    P = y.yoyoEase, M = y.keyframes, L = y.autoRevert, I = e._dur, j = e._startAt, z = e._targets,
                    R = e.parent, N = R && "nested" === R.data ? R.parent._targets : z, B = "auto" === e._overwrite,
                    $ = e.timeline;
                if (!$ || M && w || (w = "none"), e._ease = on(w, ve.ease), e._yEase = P ? rn(on(!0 === P ? w : P, ve.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), !$) {
                    if (j && j.render(-1, !0).kill(), b) {
                        if (O(e._startAt = vn.set(z, E({
                            data: "isStart",
                            overwrite: !1,
                            parent: R,
                            immediateRender: !0,
                            lazy: c(S),
                            startAt: null,
                            delay: 0,
                            onUpdate: C,
                            onUpdateParams: k,
                            callbackScope: T,
                            stagger: 0
                        }, b))), x) if (0 < n) L || (e._startAt = 0); else if (I) return
                    } else if (A && I) if (j) L || (e._startAt = 0); else if (n && (x = !1), O(e._startAt = vn.set(z, Fe(D(y, Le), {
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && c(S),
                        immediateRender: x,
                        stagger: 0,
                        parent: R
                    }))), x) {
                        if (!n) return
                    } else t(e._startAt, n), x && (L || (e._startAt = 0));
                    for (i = D(y, Le), g = (d = z[e._pt = 0] ? m(z[0]).harness : 0) && y[d.prop], r = 0; r < z.length; r++) {
                        if (u = (a = z[r])._gsap || v(z)[r]._gsap, e._ptLookup[r] = h = {}, je[u.id] && _(), p = N === z ? r : N.indexOf(a), d && !1 !== (f = new d).init(a, g || i, e, p, N) && (e._pt = s = new An(e._pt, a, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
                            h[t] = s
                        }), f.priority && (l = 1)), !d || g) for (o in i) ze[o] && (f = ct(o, i, e, p, a, N)) ? f.priority && (l = 1) : h[o] = s = dn.call(e, a, o, "get", i[o], p, N, 0, y.stringFilter);
                        e._op && e._op[r] && e.kill(a, e._op[r]), B && (un = e, Ut.killTweensOf(a, h, !0), un = 0), e._pt && (c(S) && I || S && !I) && (je[u.id] = 1)
                    }
                    l && En(e), e._onInit && e._onInit(e)
                }
                e._from = !$ && !!y.runBackwards, e._onUpdate = C, e._initted = 1
            }, hn = function (t, e, n, o, s) {
                return r(t) ? t.call(e, n, o, s) : i(t) && ~t.indexOf("random(") ? V(t) : t
            }, pn = $e + ",repeat,repeatDelay,yoyo,yoyoEase", gn = (pn + ",id,stagger,delay,duration").split(","),
            vn = function (t) {
                function r(e, i, r) {
                    var o;
                    "number" == typeof i && (r.duration = i, i = r, r = null);
                    var s, a, u, f, p, m, y, w, b = (o = t.call(this, function (t) {
                            var e = t.parent || Ut, n = t.keyframes ? A : E;
                            if (c(t.inherit)) for (; e;) n(t, e.vars.defaults), e = e.parent;
                            return t
                        }(i), r) || this).vars, x = b.duration, S = b.delay, _ = b.immediateRender, C = b.stagger,
                        k = b.overwrite, T = b.keyframes, P = b.defaults, D = Xe(e);
                    if (o._targets = D.length ? v(D) : h("GSAP target " + e + " not found. https://greensock.com", !ge.nullTargetWarn) || [{}], o._ptLookup = [], o._overwrite = k, T || C || d(x) || d(S)) {
                        if (i = o.vars, (s = o.timeline = new cn({
                            data: "nested",
                            defaults: P || {}
                        })).kill(), s.parent = n(o), T) E(s.vars.defaults, {ease: "none"}), T.forEach(function (t) {
                            return s.to(D, t, ">")
                        }); else {
                            if (f = D.length, y = C ? W(C) : g, l(C)) for (p in C) ~pn.indexOf(p) && ((w = w || {})[p] = C[p]);
                            for (a = 0; a < f; a++) {
                                for (p in u = {}, i) gn.indexOf(p) < 0 && (u[p] = i[p]);
                                u.stagger = 0, w && Fe(u, w), i.yoyoEase && !i.repeat && (u.yoyoEase = i.yoyoEase), m = D[a], u.duration = +hn(x, n(o), a, m, D), u.delay = (+hn(S, n(o), a, m, D) || 0) - o._delay, !C && 1 === f && u.delay && (o._delay = S = u.delay, o._start += S, u.delay = 0), s.to(m, u, y(a, m, D))
                            }
                            x = S = 0
                        }
                        x || o.duration(x = s.duration())
                    } else o.timeline = 0;
                    return !0 === k && (un = n(o), Ut.killTweensOf(D), un = 0), (_ || !x && !T && o._start === o.parent._time && c(_) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(n(o)) && "nested" !== o.parent.data) && (o._tTime = -ye, o.render(Math.max(0, -S))), o
                }

                e(r, t);
                var o = r.prototype;
                return o.render = function (t, e, n) {
                    var i, r, o, s, a, l, c, u, d, f = this._time, h = this._tDur, p = this._dur,
                        g = h - ye < t && 0 <= t ? h : t < ye ? 0 : t;
                    if (p) {
                        if (g !== this._tTime || n || this._startAt && this._zTime < 0 != t < 0) {
                            if (i = g, u = this.timeline, this._repeat) {
                                if (s = p + this._rDelay, p < (i = b(g % s)) && (i = p), (o = ~~(g / s)) && o === g / s && (i = p, o--), (l = this._yoyo && 1 & o) && (d = this._yEase, i = p - i), (a = ~~(this._tTime / s)) && a === this._tTime / s && a--, i === f && !n) return this;
                                o !== a && this.vars.repeatRefresh && !this._lock && (this._lock = 1, this.render(s * o, !0).invalidate()._lock = 0)
                            }
                            if (!this._initted && R(this, i, n, e)) return this;
                            for (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(i / p), this._from && (this.ratio = c = 1 - c), f || !i || e || Ue(this, "onStart"), r = this._pt; r;) r.r(c, r.d), r = r._next;
                            u && u.render(t < 0 ? t : !i && l ? -ye : u._dur * c, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Ue(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Ue(this, "onRepeat"), g !== h && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, n), !t && p || !(g || this._ts < 0) || O(this, 1), e || t < 0 && !f || (Ue(this, g === h ? "onComplete" : "onReverseComplete", !0), this._prom && g === h && this._prom()))
                        }
                    } else !function (t, e, n, i) {
                        var r, o, s, a = t._zTime < 0 ? 0 : 1, l = e < 0 ? 0 : 1, c = t._rDelay, u = 0;
                        if (c && t._repeat && ((o = ~~((u = We(0, t._tDur, e)) / c)) && o === u / c && o--, (s = ~~(t._tTime / c)) && s === t._tTime / c && s--, o !== s && (a = 1 - l, t.vars.repeatRefresh && t.invalidate())), (t._initted || !R(t, e, i, n)) && (l !== a || i)) {
                            for (n && !e || (t._zTime = e), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, n || Ue(t, "onStart"), r = t._pt; r;) r.r(l, r.d), r = r._next;
                            !l && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i), t._onUpdate && !n && Ue(t, "onUpdate"), u && t._repeat && !n && t.parent && Ue(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (t.ratio && O(t, 1), n || (Ue(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t.ratio && t._prom()))
                        }
                    }(this, t, e, n);
                    return this
                }, o.targets = function () {
                    return this._targets
                }, o.invalidate = function () {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                }, o.kill = function (t, e) {
                    if (void 0 === e && (e = "all"), un === this) return un;
                    if (!(t || e && "all" !== e) && this.parent) return this._lazy = 0, Q(this);
                    if (this.timeline) return this.timeline.killTweensOf(t, e), this;
                    var n, r, o, s, a, l, c, u = this._targets, d = t ? Xe(t) : u, f = this._ptLookup, h = this._pt;
                    if ((!e || "all" === e) && function (t, e) {
                        for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];) ;
                        return n < 0
                    }(u, d)) return Q(this);
                    for ((n = this._op = this._op || [], "all" !== e && (i(e) && (a = {}, w(e, function (t) {
                        return a[t] = 1
                    }), e = a), e = function (t, e) {
                        var n, i, r, o, s = t[0] ? m(t[0]).harness : 0, a = s && s.aliases;
                        if (!a) return e;
                        for (i in n = Fe({}, e), a) if (i in n) for (r = (o = a[i].split(",")).length; r--;) n[o[r]] = n[i];
                        return n
                    }(u, e)), c = u.length); c--;) if (~d.indexOf(u[c])) for (a in r = f[c], "all" === e ? (n[c] = e, s = r, o = {}) : (o = n[c] = n[c] || {}, s = e), s) (l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || (M(this, l, "_pt"), delete r[a])), "all" !== o && (o[a] = 1);
                    return this._initted && !this._pt && h && Q(this), this
                }, r.to = function (t, e, n) {
                    return new r(t, e, n)
                }, r.from = function (t, e) {
                    return new r(t, S(arguments, 1))
                }, r.delayedCall = function (t, e, n, i) {
                    return new r(e, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: e,
                        onReverseComplete: e,
                        onCompleteParams: n,
                        onReverseCompleteParams: n,
                        callbackScope: i
                    })
                }, r.fromTo = function (t, e, n) {
                    return new r(t, S(arguments, 2))
                }, r.set = function (t, e) {
                    return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e)
                }, r.killTweensOf = function (t, e, n) {
                    return Ut.killTweensOf(t, e, n)
                }, r
            }(ln);
        E(vn.prototype, {
            _targets: [],
            _initted: 0,
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), w("staggerTo,staggerFrom,staggerFromTo", function (t) {
            vn[t] = function () {
                var e = new cn, n = Xe(arguments);
                return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            }
        });
        var mn = function (t, e, n) {
            return t[e] = n
        }, yn = function (t, e, n) {
            return t[e](n)
        }, wn = function (t, e, n, i) {
            return t[e](i.fp, n)
        }, bn = function (t, e) {
            return r(t[e]) ? yn : a(t[e]) && t.setAttribute ? ut : mn
        }, xn = function (t, e) {
            return e.set(e.t, e.p, ~~(1e4 * (e.s + e.c * t)) / 1e4, e)
        }, Sn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }, _n = function (t, e) {
            var n = e._pt, i = "";
            if (!t && e.b) i = e.b; else if (1 === t && e.e) i = e.e; else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : ~~(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        }, Cn = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        }, kn = function (t, e, n, i) {
            for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
        }, Tn = function (t) {
            for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? M(this, i, "_pt") : i.dep || (e = 1), i = n;
            return !e
        }, En = function (t) {
            for (var e, n, i, r, o = t._pt; o;) {
                for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : r) ? o._prev._next = o : i = o, (o._next = n) ? n._prev = o : r = o, o = e
            }
            t._pt = i
        }, An = (ft.prototype.modifier = function (t, e, n) {
            this.mSet = this.mSet || this.set, this.set = dt, this.m = t, this.mt = n, this.tween = e
        }, ft);
        w($e + ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (t) {
            Le[t] = 1, "on" === t.substr(0, 2) && (Le[t + "Params"] = 1)
        }), Oe.TweenMax = Oe.TweenLite = vn, Oe.TimelineLite = Oe.TimelineMax = cn, Ut = new cn({
            sortChildren: !1,
            defaults: ve,
            autoRemoveChildren: !0,
            id: "root"
        }), ge.stringFilter = tt;
        var Pn = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                e.forEach(function (t) {
                    return function (t) {
                        var e = (t = !t.name && t.default || t).name, n = r(t), i = e && !n && t.init ? function () {
                                this._props = []
                            } : t, o = {init: g, render: Cn, add: dn, kill: Tn, modifier: kn, rawVars: 0},
                            s = {targetTest: 0, get: 0, getSetter: bn, aliases: {}, register: 0};
                        if (Ke(), t !== i) {
                            if (ze[e]) return;
                            E(i, E(D(t, o), s)), Fe(i.prototype, Fe(o, D(t, s))), ze[i.prop = e] = i, t.targetTest && (Be.push(i), Le[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                        }
                        p(e, i), t.register && t.register(Pn, i, An)
                    }(t)
                })
            },
            timeline: function (t) {
                return new cn(t)
            },
            getTweensOf: function (t, e) {
                return Ut.getTweensOf(t, e)
            },
            getProperty: function (t, e, n, r) {
                i(t) && (t = Xe(t)[0]);
                var o = m(t || {}).get, s = n ? T : k;
                return "native" === n && (n = ""), t ? e ? s((ze[e] && ze[e].get || o)(t, e, n, r)) : function (e, n, i) {
                    return s((ze[e] && ze[e].get || o)(t, e, n, i))
                } : t
            },
            quickSetter: function (t, e, n) {
                if (1 < (t = Xe(t)).length) {
                    var i = t.map(function (t) {
                        return Pn.quickSetter(t, e, n)
                    }), r = i.length;
                    return function (t) {
                        for (var e = r; e--;) i[e](t)
                    }
                }
                t = t[0] || {};
                var o = ze[e], s = m(t), a = o ? function (e) {
                    var i = new o;
                    Kt._pt = 0, i.init(t, n ? e + n : e, Kt, 0, [t]), i.render(1, i), Kt._pt && Cn(1, Kt)
                } : s.set(t, e);
                return o ? a : function (i) {
                    return a(t, e, n ? i + n : i, s, 1)
                }
            },
            isTweening: function (t) {
                return 0 < Ut.getTweensOf(t, !0).length
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = on(t.ease, ve.ease)), P(ve, t || {})
            },
            config: function (t) {
                return P(ge, t || {})
            },
            registerEffect: function (t) {
                var e = t.name, n = t.effect, i = t.plugins, r = t.defaults, o = t.extendTimeline;
                (i || "").split(",").forEach(function (t) {
                    return t && !ze[t] && !Oe[t] && h(e + " effect requires " + t + " plugin.")
                }), Re[e] = function (t, e) {
                    return n(Xe(t), E(e || {}, r))
                }, o && (cn.prototype[e] = function (t, n, i) {
                    return this.add(Re[e](t, l(n) ? n : (i = n) && {}), i)
                })
            },
            registerEase: function (t, e) {
                tn[t] = on(e)
            },
            parseEase: function (t, e) {
                return arguments.length ? on(t, e) : tn
            },
            getById: function (t) {
                return Ut.getById(t)
            },
            exportRoot: function (t, e) {
                void 0 === t && (t = {});
                var n, i, r = new cn(t);
                for (r.smoothChildTiming = c(t.smoothChildTiming), Ut.remove(r), r._dp = 0, r._time = r._tTime = Ut._time, n = Ut._first; n;) i = n._next, !e && !n._dur && n instanceof vn && n.vars.onComplete === n._targets[0] || z(r, n, n._start - n._delay), n = i;
                return z(Ut, r, 0), r
            },
            utils: {
                wrap: function t(e, n, i) {
                    var r = n - e;
                    return ke(e) ? U(e, t(0, e.length), n) : $(i, function (t) {
                        return (r + (t - e) % r) % r + e
                    })
                }, wrapYoyo: function t(e, n, i) {
                    var r = n - e, o = 2 * r;
                    return ke(e) ? U(e, t(0, e.length - 1), n) : $(i, function (t) {
                        return e + (r < (t = (o + (t - e) % o) % o) ? o - t : t)
                    })
                }, distribute: W, random: Y, snap: X, normalize: function (t, e, n) {
                    return Ye(t, e, 0, 1, n)
                }, getUnit: F, clamp: function (t, e, n) {
                    return $(n, function (n) {
                        return We(t, e, n)
                    })
                }, splitColor: J, toArray: Xe, mapRange: Ye, pipe: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function (t) {
                        return e.reduce(function (t, e) {
                            return e(t)
                        }, t)
                    }
                }, unitize: function (t, e) {
                    return function (n) {
                        return t(parseFloat(n)) + (e || F(n))
                    }
                }, interpolate: function t(e, n, r, o) {
                    var s = isNaN(e + n) ? 0 : function (t) {
                        return (1 - t) * e + t * n
                    };
                    if (!s) {
                        var a, l, c, u, d, f = i(e), h = {};
                        if (!0 === r && (o = 1) && (r = null), f) e = {p: e}, n = {p: n}; else if (ke(e) && !ke(n)) {
                            for (c = [], u = e.length, d = u - 2, l = 1; l < u; l++) c.push(t(e[l - 1], e[l]));
                            u--, s = function (t) {
                                t *= u;
                                var e = Math.min(d, ~~t);
                                return c[e](t - e)
                            }, r = n
                        } else o || (e = Fe(ke(e) ? [] : {}, e));
                        if (!c) {
                            for (a in n) dn.call(h, e, a, "get", n[a]);
                            s = function (t) {
                                return Cn(t, h) || (f ? e.p : e)
                            }
                        }
                    }
                    return $(r, s)
                }
            },
            install: f,
            effects: Re,
            ticker: Je,
            updateRoot: cn.updateRoot,
            plugins: ze,
            globalTimeline: Ut,
            core: {PropTween: An, globals: p, Tween: vn, Timeline: cn, Animation: ln, getCache: m}
        };
        w("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
            return Pn[t] = vn[t]
        }), Je.add(cn.updateRoot), Kt = Pn.to({}, {duration: 0}), Pn.registerPlugin({
            name: "attr",
            init: function (t, e, n, i, r) {
                for (var o in e) this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o), this._props.push(o)
            }
        }, {
            name: "endArray", init: function (t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n], e[n])
            }
        }, ht("roundProps", q), ht("modifiers"), ht("snap", X)), vn.version = cn.version = Pn.version = "3.0.1", Jt = 1, u() && Ke();
        var Dn, Mn, On, Ln, In, jn, zn, Rn, Nn, Bn, $n, Fn = tn.Power0, Hn = tn.Power1, Wn = tn.Power2, qn = tn.Power3,
            Xn = tn.Power4, Yn = tn.Linear, Un = tn.Quad, Vn = tn.Cubic, Gn = tn.Quart, Qn = tn.Quint, Zn = tn.Strong,
            Jn = tn.Elastic, Kn = tn.Back, ti = tn.SteppedEase, ei = tn.Bounce, ni = tn.Sine, ii = tn.Expo,
            ri = tn.Circ, oi = {}, si = 180 / Math.PI, ai = Math.PI / 180, li = Math.atan2, ci = /([A-Z])/g,
            ui = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g, di = /(?:left|right|width|margin|padding|x)/i, fi = /[\s,\(]\S/,
            hi = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, pi = "transform",
            gi = pi + "Origin", vi = {deg: 1, rad: 1, turn: 1},
            mi = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, yi = {
                clearProps: function (t, e, n, i, r) {
                    var o = t._pt = new An(t._pt, e, n, 0, 0, Bt);
                    return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
                }
            }, wi = [1, 0, 0, 1, 0, 0], bi = {}, xi = function (t, e) {
                var n = t._gsap || new an(t);
                if ("x" in n && !e) return n;
                var i, r, o, s, a, l, c, u, d, f, h, p, g, v, m, y, w, x, S, _, C, k, T, E, A, P, D, M, O, L, I = t.style,
                    j = n.scaleX < 0, z = n.xOrigin || 0, R = n.yOrigin || 0, N = "deg", B = Et(t, gi) || "0";
                return i = r = o = l = c = u = d = f = h = 0, s = a = 1, n.svg = !(!t.getCTM || !Ot(t)), p = Ht(t, n.svg), n.svg && Wt(t, B, n.originIsAbsolute, !1 !== n.smooth, p), p !== wi && (y = p[0], w = p[1], x = p[2], S = p[3], i = _ = p[4], r = C = p[5], 6 === p.length ? (s = Math.sqrt(y * y + w * w), a = Math.sqrt(S * S + x * x), l = y || w ? li(w, y) * si : n.rotation || 0, d = x || S ? li(x, S) * si + l : n.skewX || 0, n.svg && (i -= z - (z * y + R * x), r -= R - (z * w + R * S))) : (L = p[6], M = p[7], A = p[8], P = p[9], D = p[10], O = p[11], i = p[12], r = p[13], o = p[14], c = (g = li(L, D)) * si, g && (k = _ * (v = Math.cos(-g)) + A * (m = Math.sin(-g)), T = C * v + P * m, E = L * v + D * m, A = _ * -m + A * v, P = C * -m + P * v, D = L * -m + D * v, O = M * -m + O * v, _ = k, C = T, L = E), u = (g = li(-x, D)) * si, g && (v = Math.cos(-g), O = S * (m = Math.sin(-g)) + O * v, y = k = y * v - A * m, w = T = w * v - P * m, x = E = x * v - D * m), l = (g = li(w, y)) * si, g && (k = y * (v = Math.cos(g)) + w * (m = Math.sin(g)), T = _ * v + C * m, w = w * v - y * m, C = C * v - _ * m, y = k, _ = T), c && 359.9 < Math.abs(c) + Math.abs(l) && (c = l = 0, u = 180 - u), s = b(Math.sqrt(y * y + w * w + x * x)), a = b(Math.sqrt(C * C + L * L)), g = li(_, C), d = 2e-4 < Math.abs(g) ? g * si : 0, h = O ? 1 / (O < 0 ? -O : O) : 0), n.svg && (p = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !$t(Et(t, pi)), p && t.setAttribute("transform", p))), 90 < Math.abs(d) && Math.abs(d) < 270 && (j ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.z = o + "px", n.scaleX = b(s), n.scaleY = b(a), n.rotation = b(l) + N, n.rotationX = b(c) + N, n.rotationY = b(u) + N, n.skewX = d + N, n.skewY = f + N, n.transformPerspective = h + "px", (n.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (I[gi] = Si(B)), n.xOffset = n.yOffset = 0, n.force3D = ge.force3D, n.renderTransform = n.svg ? Ai : Rn ? Ei : _i, n
            }, Si = function (t) {
                return (t = t.split(" "))[0] + " " + t[1]
            }, _i = function (t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ei(t, e)
            }, Ci = "0deg", ki = "0px", Ti = ") ", Ei = function (t, e) {
                var n = e || this, i = n.xPercent, r = n.yPercent, o = n.x, s = n.y, a = n.z, l = n.rotation,
                    c = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, h = n.scaleX, p = n.scaleY,
                    g = n.transformPerspective, v = n.force3D, m = n.target, y = n.zOrigin, w = "",
                    b = "auto" === v && t && 1 !== t || !0 === v;
                if (y && (u !== Ci || c !== Ci)) {
                    var x, S = parseFloat(c) * ai, _ = Math.sin(S), C = Math.cos(S);
                    S = parseFloat(u) * ai, x = Math.cos(S), o = qt(m, o, _ * x * -y), s = qt(m, s, -Math.sin(S) * -y), a = qt(m, a, C * x * -y + y)
                }
                (i || r) && (w = "translate(" + i + "%, " + r + "%) "), !b && o === ki && s === ki && a === ki || (w += a !== ki || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Ti), g !== ki && (w += "perspective(" + g + Ti), l !== Ci && (w += "rotate(" + l + Ti), c !== Ci && (w += "rotateY(" + c + Ti), u !== Ci && (w += "rotateX(" + u + Ti), d === Ci && f === Ci || (w += "skew(" + d + ", " + f + Ti), 1 === h && 1 === p || (w += "scale(" + h + ", " + p + Ti), m.style[pi] = w || "translate(0, 0)"
            }, Ai = function (t, e) {
                var n, i, r, o, s, a = e || this, l = a.xPercent, c = a.yPercent, u = a.x, d = a.y, f = a.rotation,
                    h = a.skewX, p = a.skewY, g = a.scaleX, v = a.scaleY, m = a.target, y = a.xOrigin, w = a.yOrigin,
                    x = a.xOffset, S = a.yOffset, _ = a.forceCSS, C = parseFloat(u), k = parseFloat(d);
                f = parseFloat(f), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), f += p), f || h ? (f *= ai, h *= ai, n = Math.cos(f) * g, i = Math.sin(f) * g, r = Math.sin(f - h) * -v, o = Math.cos(f - h) * v, h && (p *= ai, s = Math.tan(h - p), r *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), n *= s = Math.sqrt(1 + s * s), i *= s)), n = b(n), i = b(i), r = b(r), o = b(o)) : (n = g, o = v, i = r = 0), (C && !~(u + "").indexOf("px") || k && !~(d + "").indexOf("px")) && (C = jt(m, "x", u, "px"), k = jt(m, "y", d, "px")), (y || w || x || S) && (C = b(C + y - (y * n + w * r) + x), k = b(k + w - (y * i + w * o) + S)), (l || c) && (s = m.getBBox(), C = b(C + l / 100 * s.width), k = b(k + c / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + o + "," + C + "," + k + ")", m.setAttribute("transform", s), _ && (m.style[pi] = s)
            }, Pi = {
                name: "css", register: Pt, targetTest: function (t) {
                    return t.style && t.nodeType
                }, init: function (t, e, n, i, r) {
                    var o, a, l, c, u, d, f, h, p, g, v, m, y, w, b, x = this._props, S = t.style;
                    for (f in Ln || Pt(), e) if ("autoRound" !== f && (a = e[f], !ze[f] || !ct(f, e, n, i, t, r))) if (d = yi[f], "function" === (u = void 0 === a ? "undefined" : s(a)) && (u = s(a = a.call(n, i, t, r))), "string" === u && ~a.indexOf("random(") && (a = V(a)), d) d(this, t, f, a, n) && (b = 1); else if ("--" === f.substr(0, 2)) this.add(S, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", a + "", i, r, 0, 0, f); else {
                        if (o = zt(t, f), c = parseFloat(o), (g = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), l = parseFloat(a), f in hi && ("autoAlpha" === f && (1 === c && "hidden" === zt(t, "visibility") && l && (c = 0), It(this, S, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== f && ~(f = hi[f]).indexOf(",") && (f = f.split(",")[0])), v = f in oi) {
                            if (m || (y = t._gsap, w = !1 !== e.smoothOrigin && y.smooth, (m = this._pt = new An(this._pt, S, pi, 0, 1, y.renderTransform, y)).dep = 1), "scale" === f) {
                                this._pt = new An(this._pt, t, "scale", c, g ? g * l : l - c, 0, 0, _t), x.push("scale");
                                continue
                            }
                            if ("transformOrigin" === f) {
                                a = Nt(a), y.svg ? Wt(t, a, 0, w, 0, this) : ((p = parseFloat(a.split(" ")[2])) !== y.zOrigin && It(this, y, "zOrigin", y.zOrigin, p), It(this, S, f, Si(o), Si(a)));
                                continue
                            }
                            if ("svgOrigin" === f) {
                                Wt(t, a, 1, w, 0, this);
                                continue
                            }
                            if (f in bi) {
                                Xt(this, y, f, c, a, g);
                                continue
                            }
                            if ("smoothOrigin" === f) {
                                It(this, y, "smooth", y.smooth, a);
                                continue
                            }
                            if ("force3D" === f) {
                                y[f] = a;
                                continue
                            }
                            if ("transform" === f) {
                                Yt(this, a, t);
                                continue
                            }
                        }
                        if (v || (l || 0 === l) && (c || 0 === c) && !fi.test(a) && f in S) (h = (o + "").substr((c + "").length)) !== (p = (a + "").substr((l + "").length) || (f in ge.units ? ge.units[f] : h)) && (c = jt(t, f, o, p)), this._pt = new An(this._pt, v ? y : S, f, c, g ? g * l : l - c, "px" !== p || !1 === e.autoRound || v ? pt : mt), this._pt.u = p || 0, h !== p && (this._pt.b = o, this._pt.r = vt); else if (f in S) Rt.call(this, t, f, o, a); else {
                            if (!(f in t)) continue;
                            this.add(t, f, t[f], a, i, r)
                        }
                        x.push(f)
                    }
                    b && En(this)
                }, get: zt, aliases: hi, getSetter: function (t, e, n) {
                    return e in oi && e !== gi && (t._gsap.x || zt(t, "x")) ? n && zn === n ? "scale" === e ? _t : St : (zn = n || {}) && ("scale" === e ? Ct : kt) : t.style && !a(t.style[e]) ? bt : ~e.indexOf("-") ? xt : bn(t, e)
                }
            };
        Pn.utils.checkPrefix = At, $n = w((Nn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Bn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
            oi[t] = 1
        }), w(Bn, function (t) {
            ge.units[t] = "deg", bi[t] = 1
        }), hi[$n[13]] = Nn + "," + Bn, w("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY", function (t) {
            var e = t.split(":");
            hi[e[1]] = $n[e[0]]
        }), w("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
            ge.units[t] = "px"
        }), Pn.registerPlugin(Pi);
        var Di = Pn.registerPlugin(Pi) || Pn;
        t.Back = Kn, t.Bounce = ei, t.CSSPlugin = Pi, t.Circ = ri, t.Cubic = Vn, t.Elastic = Jn, t.Expo = ii, t.Linear = Yn, t.Power0 = Fn, t.Power1 = Hn, t.Power2 = Wn, t.Power3 = qn, t.Power4 = Xn, t.Quad = Un, t.Quart = Gn, t.Quint = Qn, t.Sine = ni, t.SteppedEase = ti, t.Strong = Zn, t.TimelineLite = cn, t.TimelineMax = cn, t.TweenLite = vn, t.TweenMax = vn, t.default = Di, t.gsap = Di, Object.defineProperty(t, "__esModule", {value: !0})
    })
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(15), s = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(o), a = function () {
            function e() {
                i(this, e), this.scrollMagic()
            }

            return r(e, [{
                key: "scrollMagic", value: function () {
                    var e = new s.default.Controller;
                    new s.default.Scene({
                        triggerElement: ".s-message",
                        triggerHook: .7,
                        reverse: !1,
                        offset: 300,
                        duration: "50%"
                    }).on("enter", function (e) {
                        var n = t(".s-message .section-block__title"), i = t(".s-message .section-block__desc");
                        TweenMax.staggerFromTo(n, .75, {y: -200, opacity: 0}, {
                            y: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        }, .2), TweenMax.staggerFromTo(i, .75, {y: 200, opacity: 0}, {
                            y: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        }, .3)
                    }).addTo(e), new s.default.Scene({
                        triggerElement: ".header",
                        triggerHook: .7,
                        reverse: !1,
                        duration: "50%"
                    }).on("enter", function (e) {
                        t(".header .main-menu li").each(function (t) {
                        })
                    }).addTo(e), t(".tab-pane").each(function (n, i) {
                        new s.default.Scene({
                            triggerElement: i,
                            triggerHook: .7,
                            reverse: !1,
                            duration: "50%"
                        }).on("enter", function (e) {
                            var n = t(i).find(".list-tabs li");
                            t(i).find(".tab-pane__content__title"), t(i).find(".tab-pane__content__desc");
                            t(i).find(".tab-pane__content .tab-pane__item").eq(0).addClass("animation-text"), TweenMax.staggerFromTo(n, .75, {
                                x: 200,
                                opacity: 0
                            }, {x: 0, opacity: 1, ease: Power2.easeOut}, .1)
                        }).addTo(e),
                        new s.default.Scene({
                            triggerElement: ".s-honda-connect",
                            triggerHook: .7,
                            reverse: !1,
                            offset: 300,
                            duration: "50%"
                        }).on("enter", function (e) {
                            //xử lý animation cho màn hình
                        }).addTo(e)
                    })
                }
            }]), e
        }();
        e.default = a
    }).call(e, n(0))
}, function (t, e, n) {
    var i, r;/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 *
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
    !function (o, s) {
        i = s, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r)
    }(0, function () {
        "use strict";
        var t = function () {
            i.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        t.version = "2.0.7", window.addEventListener("mousewheel", function () {
        });
        t.Controller = function (n) {
            var r, o, s = "ScrollMagic.Controller", a = e.defaults, l = this, c = i.extend({}, a, n), u = [], d = !1,
                f = 0, h = "PAUSED", p = !0, g = 0, v = !0, m = function () {
                    c.refreshInterval > 0 && (o = window.setTimeout(C, c.refreshInterval))
                }, y = function () {
                    return c.vertical ? i.get.scrollTop(c.container) : i.get.scrollLeft(c.container)
                }, w = function () {
                    return c.vertical ? i.get.height(c.container) : i.get.width(c.container)
                }, b = this._setScrollPos = function (t) {
                    c.vertical ? p ? window.scrollTo(i.get.scrollLeft(), t) : c.container.scrollTop = t : p ? window.scrollTo(t, i.get.scrollTop()) : c.container.scrollLeft = t
                }, x = function () {
                    if (v && d) {
                        var t = i.type.Array(d) ? d : u.slice(0);
                        d = !1;
                        var e = f;
                        f = l.scrollPos();
                        var n = f - e;
                        0 !== n && (h = n > 0 ? "FORWARD" : "REVERSE"), "REVERSE" === h && t.reverse(), t.forEach(function (e, n) {
                            k(3, "updating Scene " + (n + 1) + "/" + t.length + " (" + u.length + " total)"), e.update(!0)
                        }), 0 === t.length && c.loglevel >= 3 && k(3, "updating 0 Scenes (nothing added to controller)")
                    }
                }, S = function () {
                    r = i.rAF(x)
                }, _ = function (t) {
                    k(3, "event fired causing an update:", t.type), "resize" == t.type && (g = w(), h = "PAUSED"), !0 !== d && (d = !0, S())
                }, C = function () {
                    if (!p && g != w()) {
                        var t;
                        try {
                            t = new Event("resize", {bubbles: !1, cancelable: !1})
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        c.container.dispatchEvent(t)
                    }
                    u.forEach(function (t, e) {
                        t.refresh()
                    }), m()
                }, k = this._log = function (t, e) {
                    c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), i.log.apply(window, arguments))
                };
            this._options = c;
            var T = function (t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function (t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function (e) {
                if (i.type.Array(e)) e.forEach(function (t, e) {
                    l.addScene(t)
                }); else if (e instanceof t.Scene) {
                    if (e.controller() !== l) e.addTo(l); else if (u.indexOf(e) < 0) {
                        u.push(e), u = T(u), e.on("shift.controller_sort", function () {
                            u = T(u)
                        });
                        for (var n in c.globalSceneOptions) e[n] && e[n].call(e, c.globalSceneOptions[n]);
                        k(3, "adding Scene (now " + u.length + " total)")
                    }
                } else k(1, "ERROR: invalid argument supplied for '.addScene()'");
                return l
            }, this.removeScene = function (t) {
                if (i.type.Array(t)) t.forEach(function (t, e) {
                    l.removeScene(t)
                }); else {
                    var e = u.indexOf(t);
                    e > -1 && (t.off("shift.controller_sort"), u.splice(e, 1), k(3, "removing Scene (now " + u.length + " left)"), t.remove())
                }
                return l
            }, this.updateScene = function (e, n) {
                return i.type.Array(e) ? e.forEach(function (t, e) {
                    l.updateScene(t, n)
                }) : n ? e.update(!0) : !0 !== d && e instanceof t.Scene && (d = d || [], -1 == d.indexOf(e) && d.push(e), d = T(d), S()), l
            }, this.update = function (t) {
                return _({type: "resize"}), t && x(), l
            }, this.scrollTo = function (e, n) {
                if (i.type.Number(e)) b.call(c.container, e, n); else if (e instanceof t.Scene) e.controller() === l ? l.scrollTo(e.scrollOffset(), n) : k(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e); else if (i.type.Function(e)) b = e; else {
                    var r = i.get.elements(e)[0];
                    if (r) {
                        for (; r.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) r = r.parentNode;
                        var o = c.vertical ? "top" : "left", s = i.get.offset(c.container), a = i.get.offset(r);
                        p || (s[o] -= l.scrollPos()), l.scrollTo(a[o] - s[o], n)
                    } else k(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                }
                return l
            }, this.scrollPos = function (t) {
                return arguments.length ? (i.type.Function(t) ? y = t : k(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), l) : y.call(l)
            }, this.info = function (t) {
                var e = {
                    size: g,
                    vertical: c.vertical,
                    scrollPos: f,
                    scrollDirection: h,
                    container: c.container,
                    isDocument: p
                };
                return arguments.length ? void 0 !== e[t] ? e[t] : void k(1, 'ERROR: option "' + t + '" is not available') : e
            }, this.loglevel = function (t) {
                return arguments.length ? (c.loglevel != t && (c.loglevel = t), l) : c.loglevel
            }, this.enabled = function (t) {
                return arguments.length ? (v != t && (v = !!t, l.updateScene(u, !0)), l) : v
            }, this.destroy = function (t) {
                window.clearTimeout(o);
                for (var e = u.length; e--;) u[e].destroy(t);
                return c.container.removeEventListener("resize", _), c.container.removeEventListener("scroll", _), i.cAF(r), k(3, "destroyed " + s + " (reset: " + (t ? "true" : "false") + ")"), null
            }, function () {
                for (var e in c) a.hasOwnProperty(e) || (k(2, 'WARNING: Unknown option "' + e + '"'), delete c[e]);
                if (c.container = i.get.elements(c.container)[0], !c.container) throw k(1, "ERROR creating object " + s + ": No valid scroll container supplied"), s + " init failed.";
                p = c.container === window || c.container === document.body || !document.body.contains(c.container), p && (c.container = window), g = w(), c.container.addEventListener("resize", _), c.container.addEventListener("scroll", _);
                var n = parseInt(c.refreshInterval, 10);
                c.refreshInterval = i.type.Number(n) ? n : a.refreshInterval, m(), k(3, "added new " + s + " controller (v" + t.version + ")")
            }(), l
        };
        var e = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function (t, n) {
            e.defaults[t] = n
        }, t.Controller.extend = function (e) {
            var n = this;
            t.Controller = function () {
                return n.apply(this, arguments), this.$super = i.extend({}, this), e.apply(this, arguments) || this
            }, i.extend(t.Controller, n), t.Controller.prototype = n.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function (e) {
            var r, o, s = "ScrollMagic.Scene", a = n.defaults, l = this, c = i.extend({}, a, e), u = "BEFORE", d = 0,
                f = {start: 0, end: 0}, h = 0, p = !0, g = {};
            this.on = function (t, e) {
                return i.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function (t) {
                    var n = t.split("."), i = n[0], r = n[1];
                    "*" != i && (g[i] || (g[i] = []), g[i].push({namespace: r || "", callback: e}))
                })) : v(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), l
            }, this.off = function (t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function (t, n) {
                    var i = t.split("."), r = i[0], o = i[1] || "";
                    ("*" === r ? Object.keys(g) : [r]).forEach(function (t) {
                        for (var n = g[t] || [], i = n.length; i--;) {
                            var r = n[i];
                            !r || o !== r.namespace && "*" !== o || e && e != r.callback || n.splice(i, 1)
                        }
                        n.length || delete g[t]
                    })
                }), l) : (v(1, "ERROR: Invalid event name supplied."), l)
            }, this.trigger = function (e, n) {
                if (e) {
                    var i = e.trim().split("."), r = i[0], o = i[1], s = g[r];
                    v(3, "event fired:", r, n ? "->" : "", n || ""), s && s.forEach(function (e, i) {
                        o && o !== e.namespace || e.callback.call(l, new t.Event(r, e.namespace, l, n))
                    })
                } else v(1, "ERROR: Invalid event name supplied.");
                return l
            }, l.on("change.internal", function (t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? w() : "reverse" === t.what && l.update())
            }).on("shift.internal", function (t) {
                m(), l.update()
            });
            var v = this._log = function (t, e) {
                c.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), i.log.apply(window, arguments))
            };
            this.addTo = function (e) {
                return e instanceof t.Controller ? o != e && (o && o.removeScene(l), o = e, S(), y(!0), w(!0), m(), o.info("container").addEventListener("resize", b), e.addScene(l), l.trigger("add", {controller: o}), v(3, "added " + s + " to controller"), l.update()) : v(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), l
            }, this.enabled = function (t) {
                return arguments.length ? (p != t && (p = !!t, l.update(!0)), l) : p
            }, this.remove = function () {
                if (o) {
                    o.info("container").removeEventListener("resize", b);
                    var t = o;
                    o = void 0, t.removeScene(l), l.trigger("remove"), v(3, "removed " + s + " from controller")
                }
                return l
            }, this.destroy = function (t) {
                return l.trigger("destroy", {reset: t}), l.remove(), l.off("*.*"), v(3, "destroyed " + s + " (reset: " + (t ? "true" : "false") + ")"), null
            }, this.update = function (t) {
                if (o) if (t) if (o.enabled() && p) {
                    var e, n = o.info("scrollPos");
                    e = c.duration > 0 ? (n - f.start) / (f.end - f.start) : n >= f.start ? 1 : 0, l.trigger("update", {
                        startPos: f.start,
                        endPos: f.end,
                        scrollPos: n
                    }), l.progress(e)
                } else k && "DURING" === u && E(!0); else o.updateScene(l, !1);
                return l
            }, this.refresh = function () {
                return y(), w(), l
            }, this.progress = function (t) {
                if (arguments.length) {
                    var e = !1, n = u, i = o ? o.info("scrollDirection") : "PAUSED", r = c.reverse || t >= d;
                    if (0 === c.duration ? (e = d != t, d = t < 1 && r ? 0 : 1, u = 0 === d ? "BEFORE" : "DURING") : t < 0 && "BEFORE" !== u && r ? (d = 0, u = "BEFORE", e = !0) : t >= 0 && t < 1 && r ? (d = t, u = "DURING", e = !0) : t >= 1 && "AFTER" !== u ? (d = 1, u = "AFTER", e = !0) : "DURING" !== u || r || E(), e) {
                        var s = {progress: d, state: u, scrollDirection: i}, a = u != n, f = function (t) {
                            l.trigger(t, s)
                        };
                        a && "DURING" !== n && (f("enter"), f("BEFORE" === n ? "start" : "end")), f("progress"), a && "DURING" !== u && (f("BEFORE" === u ? "start" : "end"), f("leave"))
                    }
                    return l
                }
                return d
            };
            var m = function () {
                f = {start: h + c.offset}, o && c.triggerElement && (f.start -= o.info("size") * c.triggerHook), f.end = f.start + c.duration
            }, y = function (t) {
                if (r) {
                    _("duration", r.call(l)) && !t && (l.trigger("change", {
                        what: "duration",
                        newval: c.duration
                    }), l.trigger("shift", {reason: "duration"}))
                }
            }, w = function (t) {
                var e = 0, n = c.triggerElement;
                if (o && (n || h > 0)) {
                    if (n) if (n.parentNode) {
                        for (var r = o.info(), s = i.get.offset(r.container), a = r.vertical ? "top" : "left"; n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) n = n.parentNode;
                        var u = i.get.offset(n);
                        r.isDocument || (s[a] -= o.scrollPos()), e = u[a] - s[a]
                    } else v(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0), l.triggerElement(void 0);
                    var d = e != h;
                    h = e, d && !t && l.trigger("shift", {reason: "triggerElementPosition"})
                }
            }, b = function (t) {
                c.triggerHook > 0 && l.trigger("shift", {reason: "containerResize"})
            }, x = i.extend(n.validate, {
                duration: function (t) {
                    if (i.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                        var e = parseFloat(t) / 100;
                        t = function () {
                            return o ? o.info("size") * e : 0
                        }
                    }
                    if (i.type.Function(t)) {
                        r = t;
                        try {
                            t = parseFloat(r.call(l))
                        } catch (e) {
                            t = -1
                        }
                    }
                    if (t = parseFloat(t), !i.type.Number(t) || t < 0) throw r ? (r = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                    return t
                }
            }), S = function (t) {
                t = arguments.length ? [t] : Object.keys(x), t.forEach(function (t, e) {
                    var n;
                    if (x[t]) try {
                        n = x[t](c[t])
                    } catch (e) {
                        n = a[t];
                        var r = i.type.String(e) ? [e] : e;
                        i.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), v.apply(this, r)) : v(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message)
                    } finally {
                        c[t] = n
                    }
                })
            }, _ = function (t, e) {
                var n = !1, i = c[t];
                return c[t] != e && (c[t] = e, S(t), n = i != c[t]), n
            }, C = function (t) {
                l[t] || (l[t] = function (e) {
                    return arguments.length ? ("duration" === t && (r = void 0), _(t, e) && (l.trigger("change", {
                        what: t,
                        newval: c[t]
                    }), n.shifts.indexOf(t) > -1 && l.trigger("shift", {reason: t})), l) : c[t]
                })
            };
            this.controller = function () {
                return o
            }, this.state = function () {
                return u
            }, this.scrollOffset = function () {
                return f.start
            }, this.triggerPosition = function () {
                var t = c.offset;
                return o && (c.triggerElement ? t += h : t += o.info("size") * l.triggerHook()), t
            };
            var k, T;
            l.on("shift.internal", function (t) {
                var e = "duration" === t.reason;
                ("AFTER" === u && e || "DURING" === u && 0 === c.duration) && E(), e && A()
            }).on("progress.internal", function (t) {
                E()
            }).on("add.internal", function (t) {
                A()
            }).on("destroy.internal", function (t) {
                l.removePin(t.reset)
            });
            var E = function (t) {
                if (k && o) {
                    var e = o.info(), n = T.spacer.firstChild;
                    if (t || "DURING" !== u) {
                        var r = {position: T.inFlow ? "relative" : "absolute", top: 0, left: 0},
                            s = i.css(n, "position") != r.position;
                        T.pushFollowers ? c.duration > 0 && ("AFTER" === u && 0 === parseFloat(i.css(T.spacer, "padding-top")) ? s = !0 : "BEFORE" === u && 0 === parseFloat(i.css(T.spacer, "padding-bottom")) && (s = !0)) : r[e.vertical ? "top" : "left"] = c.duration * d, i.css(n, r), s && A()
                    } else {
                        "fixed" != i.css(n, "position") && (i.css(n, {position: "fixed"}), A());
                        var a = i.get.offset(T.spacer, !0),
                            l = c.reverse || 0 === c.duration ? e.scrollPos - f.start : Math.round(d * c.duration * 10) / 10;
                        a[e.vertical ? "top" : "left"] += l, i.css(T.spacer.firstChild, {top: a.top, left: a.left})
                    }
                }
            }, A = function () {
                if (k && o && T.inFlow) {
                    var t = "DURING" === u, e = o.info("vertical"), n = T.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(T.spacer, "display")), s = {};
                    T.relSize.width || T.relSize.autoFullWidth ? t ? i.css(k, {width: i.get.width(T.spacer)}) : i.css(k, {width: "100%"}) : (s["min-width"] = i.get.width(e ? k : n, !0, !0), s.width = t ? s["min-width"] : "auto"), T.relSize.height ? t ? i.css(k, {height: i.get.height(T.spacer) - (T.pushFollowers ? c.duration : 0)}) : i.css(k, {height: "100%"}) : (s["min-height"] = i.get.height(e ? n : k, !0, !r), s.height = t ? s["min-height"] : "auto"), T.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = c.duration * d, s["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - d)), i.css(T.spacer, s)
                }
            }, P = function () {
                o && k && "DURING" === u && !o.info("isDocument") && E()
            }, D = function () {
                o && k && "DURING" === u && ((T.relSize.width || T.relSize.autoFullWidth) && i.get.width(window) != i.get.width(T.spacer.parentNode) || T.relSize.height && i.get.height(window) != i.get.height(T.spacer.parentNode)) && A()
            }, M = function (t) {
                o && k && "DURING" === u && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
            };
            this.setPin = function (t, e) {
                var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"},
                    r = e && e.hasOwnProperty("pushFollowers");
                if (e = i.extend({}, n, e), !(t = i.get.elements(t)[0])) return v(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), l;
                if ("fixed" === i.css(t, "position")) return v(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), l;
                if (k) {
                    if (k === t) return l;
                    l.removePin()
                }
                k = t;
                var o = k.parentNode.style.display,
                    s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                k.parentNode.style.display = "none";
                var a = "absolute" != i.css(k, "position"), u = i.css(k, s.concat(["display"])),
                    d = i.css(k, ["width", "height"]);
                k.parentNode.style.display = o, !a && e.pushFollowers && (v(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), e.pushFollowers = !1), window.setTimeout(function () {
                    k && 0 === c.duration && r && e.pushFollowers && v(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var f = k.parentNode.insertBefore(document.createElement("div"), k), h = i.extend(u, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
                if (a || i.extend(h, i.css(k, ["width", "height"])), i.css(f, h), f.setAttribute("data-scrollmagic-pin-spacer", ""), i.addClass(f, e.spacerClass), T = {
                    spacer: f,
                    relSize: {
                        width: "%" === d.width.slice(-1),
                        height: "%" === d.height.slice(-1),
                        autoFullWidth: "auto" === d.width && a && i.isMarginCollapseType(u.display)
                    },
                    pushFollowers: e.pushFollowers,
                    inFlow: a
                }, !k.___origStyle) {
                    k.___origStyle = {};
                    var p = k.style;
                    s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (t) {
                        k.___origStyle[t] = p[t] || ""
                    })
                }
                return T.relSize.width && i.css(f, {width: d.width}), T.relSize.height && i.css(f, {height: d.height}), f.appendChild(k), i.css(k, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (T.relSize.width || T.relSize.autoFullWidth) && i.css(k, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", P), window.addEventListener("resize", P), window.addEventListener("resize", D), k.addEventListener("mousewheel", M), k.addEventListener("DOMMouseScroll", M), v(3, "added pin"), E(), l
            }, this.removePin = function (t) {
                if (k) {
                    if ("DURING" === u && E(!0), t || !o) {
                        var e = T.spacer.firstChild;
                        if (e.hasAttribute("data-scrollmagic-pin-spacer")) {
                            var n = T.spacer.style,
                                r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"], s = {};
                            r.forEach(function (t) {
                                s[t] = n[t] || ""
                            }), i.css(e, s)
                        }
                        T.spacer.parentNode.insertBefore(e, T.spacer), T.spacer.parentNode.removeChild(T.spacer), k.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (i.css(k, k.___origStyle), delete k.___origStyle)
                    }
                    window.removeEventListener("scroll", P), window.removeEventListener("resize", P), window.removeEventListener("resize", D), k.removeEventListener("mousewheel", M), k.removeEventListener("DOMMouseScroll", M), k = void 0, v(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                }
                return l
            };
            var O, L = [];
            return l.on("destroy.internal", function (t) {
                l.removeClassToggle(t.reset)
            }), this.setClassToggle = function (t, e) {
                var n = i.get.elements(t);
                return 0 !== n.length && i.type.String(e) ? (L.length > 0 && l.removeClassToggle(), O = e, L = n, l.on("enter.internal_class leave.internal_class", function (t) {
                    var e = "enter" === t.type ? i.addClass : i.removeClass;
                    L.forEach(function (t, n) {
                        e(t, O)
                    })
                }), l) : (v(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), l)
            }, this.removeClassToggle = function (t) {
                return t && L.forEach(function (t, e) {
                    i.removeClass(t, O)
                }), l.off("start.internal_class end.internal_class"), O = void 0, L = [], l
            }, function () {
                for (var t in c) a.hasOwnProperty(t) || (v(2, 'WARNING: Unknown option "' + t + '"'), delete c[t]);
                for (var e in a) C(e);
                S()
            }(), l
        };
        var n = {
            defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
            validate: {
                offset: function (t) {
                    if (t = parseFloat(t), !i.type.Number(t)) throw ['Invalid value for option "offset":', t];
                    return t
                }, triggerElement: function (t) {
                    if (t = t || void 0) {
                        var e = i.get.elements(t)[0];
                        if (!e || !e.parentNode) throw ['Element defined in option "triggerElement" was not found:', t];
                        t = e
                    }
                    return t
                }, triggerHook: function (t) {
                    var e = {onCenter: .5, onEnter: 1, onLeave: 0};
                    if (i.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1)); else {
                        if (!(t in e)) throw ['Invalid value for option "triggerHook": ', t];
                        t = e[t]
                    }
                    return t
                }, reverse: function (t) {
                    return !!t
                }, loglevel: function (t) {
                    if (t = parseInt(t), !i.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t];
                    return t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function (e, i, r, o) {
            e in n.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (n.defaults[e] = i, n.validate[e] = r, o && n.shifts.push(e))
        }, t.Scene.extend = function (e) {
            var n = this;
            t.Scene = function () {
                return n.apply(this, arguments), this.$super = i.extend({}, this), e.apply(this, arguments) || this
            }, i.extend(t.Scene, n), t.Scene.prototype = n.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function (t, e, n, i) {
            i = i || {};
            for (var r in i) this[r] = i[r];
            return this.type = t, this.target = this.currentTarget = n, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var i = t._util = function (t) {
            var e, n = {}, i = function (t) {
                return parseFloat(t) || 0
            }, r = function (e) {
                return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
            }, o = function (e, n, o, s) {
                if ((n = n === document ? t : n) === t) s = !1; else if (!p.DomElement(n)) return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                var a = (o ? n["offset" + e] || n["outer" + e] : n["client" + e] || n["inner" + e]) || 0;
                if (o && s) {
                    var l = r(n);
                    a += "Height" === e ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight)
                }
                return a
            }, s = function (t) {
                return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                    return t[1].toUpperCase()
                })
            };
            n.extend = function (t) {
                for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
                return t
            }, n.isMarginCollapseType = function (t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0, l = ["ms", "moz", "webkit", "o"], c = t.requestAnimationFrame, u = t.cancelAnimationFrame;
            for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            c || (c = function (e) {
                var n = (new Date).getTime(), i = Math.max(0, 16 - (n - a)), r = t.setTimeout(function () {
                    e(n + i)
                }, i);
                return a = n + i, r
            }), u || (u = function (e) {
                t.clearTimeout(e)
            }), n.rAF = c.bind(t), n.cAF = u.bind(t);
            var d = ["error", "warn", "log"], f = t.console || {};
            for (f.log = f.log || function () {
            }, e = 0; e < d.length; e++) {
                var h = d[e];
                f[h] || (f[h] = f.log)
            }
            n.log = function (t) {
                (t > d.length || t <= 0) && (t = d.length);
                var e = new Date,
                    n = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                    i = d[t - 1], r = Array.prototype.splice.call(arguments, 1),
                    o = Function.prototype.bind.call(f[i], f);
                r.unshift(n), o.apply(f, r)
            };
            var p = n.type = function (t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            p.String = function (t) {
                return "string" === p(t)
            }, p.Function = function (t) {
                return "function" === p(t)
            }, p.Array = function (t) {
                return Array.isArray(t)
            }, p.Number = function (t) {
                return !p.Array(t) && t - parseFloat(t) + 1 >= 0
            }, p.DomElement = function (t) {
                return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var g = n.get = {};
            return g.elements = function (e) {
                var n = [];
                if (p.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (t) {
                    return n
                }
                if ("nodelist" === p(e) || p.Array(e) || e instanceof NodeList) for (var i = 0, r = n.length = e.length; i < r; i++) {
                    var o = e[i];
                    n[i] = p.DomElement(o) ? o : g.elements(o)
                } else (p.DomElement(e) || e === document || e === t) && (n = [e]);
                return n
            }, g.scrollTop = function (e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, g.scrollLeft = function (e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, g.width = function (t, e, n) {
                return o("width", t, e, n)
            }, g.height = function (t, e, n) {
                return o("height", t, e, n)
            }, g.offset = function (t, e) {
                var n = {top: 0, left: 0};
                if (t && t.getBoundingClientRect) {
                    var i = t.getBoundingClientRect();
                    n.top = i.top, n.left = i.left, e || (n.top += g.scrollTop(), n.left += g.scrollLeft())
                }
                return n
            }, n.addClass = function (t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, n.removeClass = function (t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, n.css = function (t, e) {
                if (p.String(e)) return r(t)[s(e)];
                if (p.Array(e)) {
                    var n = {}, i = r(t);
                    return e.forEach(function (t, e) {
                        n[t] = i[s(t)]
                    }), n
                }
                for (var o in e) {
                    var a = e[o];
                    a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
                }
            }, n
        }(window || {});
        return t.Scene.prototype.addIndicators = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.removeIndicators = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.setTween = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.removeTween = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.setVelocity = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t.Scene.prototype.removeVelocity = function () {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t
    })
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), o = n(0), s = n(8), a = n(4);
    n(10), a.setJQuery(o), s("flickity", a, o);
    var l = function () {
        function t() {
            i(this, t), this.carousel = ".js-color-slider", this.selector = ".js-color-select", this.init(), this.selectColor()
        }

        return r(t, [{
            key: "init", value: function () {
                this.slider()
            }
        }, {
            key: "slider", value: function () {
                var t = o(this.carousel), e = o(this.selector), n = 0;
                t.on("ready.flickity", function (t) {
                    o(t.currentTarget).find(".flickity-prev-next-button.previous").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(0 0)"><path d="M-187.66,181.732H-232.2l-1.821,1.719,13.164,12.426,2.389-2.391-8.89-8.316h39.7Z" transform="translate(234.021 -171.026)" fill="#fff"/><path d="M-212.84,160.656l-2.389-2.391-8.442,7.969h4.868Z" transform="translate(228.393 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(49.939 10.674)" fill="#fff"/></svg>'), o(t.currentTarget).find(".flickity-prev-next-button.next").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(6.984 0)"><path d="M-234.02,181.732h44.539l1.821,1.719-13.164,12.426-2.389-2.391,8.89-8.316h-39.7Z" transform="translate(234.02 -171.026)" fill="#fff"/><path d="M-223.672,160.656l2.389-2.391,8.442,7.969h-4.868Z" transform="translate(254.48 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(0 10.674)" fill="#fff"/></svg>')
                }), t.on("change.flickity", function (t, i) {
                    o(".s-color__item").eq(n).addClass("last-selected").siblings().removeClass("last-selected"), e.eq(i).parent().addClass("active").siblings().removeClass("active"), n = i
                }), t.flickity({
                    freeScroll: !1,
                    contain: !0,
                    prevNextButtons: !0,
                    pageDots: !1,
                    groupCells: !0,
                    imagesLoaded: !0                
                })
            }
        }, {
            key: "selectColor", value: function () {
                var t = this;
                o(this.selector).on("click", function (e) {
                    var n = o(e.currentTarget), i = n.attr("data-index");
                    o(t.carousel).flickity("select", i)
                })
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    var i, r;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
    !function (o, s) {
        i = s, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r)
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e() {
        }

        function n() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < c; e++) {
                t[l[e]] = 0
            }
            return t
        }

        function i(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function r() {
            if (!u) {
                u = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = i(e);
                s = 200 == Math.round(t(r.width)), o.isBoxSizeOuter = s, n.removeChild(e)
            }
        }

        function o(e) {
            if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = i(e);
                if ("none" == o.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var u = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < c; d++) {
                    var f = l[d], h = o[f], p = parseFloat(h);
                    a[f] = isNaN(p) ? 0 : p
                }
                var g = a.paddingLeft + a.paddingRight, v = a.paddingTop + a.paddingBottom,
                    m = a.marginLeft + a.marginRight, y = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth, b = a.borderTopWidth + a.borderBottomWidth, x = u && s,
                    S = t(o.width);
                !1 !== S && (a.width = S + (x ? 0 : g + w));
                var _ = t(o.height);
                return !1 !== _ && (a.height = _ + (x ? 0 : v + b)), a.innerWidth = a.width - (g + w), a.innerHeight = a.height - (v + b), a.outerWidth = a.width + m, a.outerHeight = a.height + y, a
            }
        }

        var s, a = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length, u = !1;
        return o
    })
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(4), s = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(o), a = n(62), l = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(a);
        n(26);
        var c = function () {
            function e() {
                i(this, e), this.init()
            }

            return r(e, [{
                key: "init", value: function () {
                    function e(t) {
                        var e = i[t].data.frame;
                        e && Object.keys(i).map(function (n) {
                            Number(n) !== Number(t) && i[n].updateFrame(e)
                        })
                    }

                    var n = document.querySelector(".color-carousel"), i = {}, r = 2, o = new s.default(n, {
                        wrapAround: !0,
                        draggable: !1,
                        fade: !0,
                        initialIndex: 0,
                        prevNextButtons: false,
                        on: {
                            ready: function () {
                                setTimeout(function () {
                                    o.resize()
                                }, 500)
                            }
                        }
                    });
                    o.on("change", function (t) {
                        e(r), r = t
                    }), t(".spritespin-canvas").each(function (e, n) {
                        var r = t(this).attr("data-name"), o = t("#mySpriteSpin" + (e + 1));
                        o.spritespin({
                            source: l.sourceArray(assets_url + "/images/s-color/" + r + "/F{frame}.png", {
                                frame: [1, 36],
                                digits: 1
                            }), animate: !1, sense: -1, frame: 1,
                            sizeMode: 'fit',
                            responsive: true,
                            onFrameChanged:function(){         
                                $('.spritespin-canvas').css('--display-none','none')
                            }
                        })
                        i[e] = o.spritespin("api")
                    });
                }
            }]), e
        }();
        e.default = c
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e = r.prototype;
        for (var n in t) if (t.hasOwnProperty(n)) {
            if (e[n]) throw new Error("API method is already defined: " + n);
            e[n] = t[n]
        }
        return e
    }

    n.d(e, "a", function () {
        return r
    }), e.b = i;
    var r = function () {
        function t(t) {
            this.data = t
        }

        return t
    }()
}, function (t, e, n) {
    "use strict";

    function i(t) {
        y += 1, t.id = String(y), w[t.id] = t
    }

    function r(t) {
        delete w[t.id]
    }

    function o(t) {
        for (var e in w) w.hasOwnProperty(e) && t(w[e])
    }

    function s(t) {
        var e = t.target;
        f.v(e);
        for (var n = 0, i = h.d; n < i.length; n++) {
            var r = i[n];
            f.b(e, r, f.s)
        }
        for (var o = 0, s = t.plugins; o < s.length; o++) {
            for (var a = s[o], l = 0, c = h.c; l < c.length; l++) {
                var r = c[l];
                f.b(e, r, a[r])
            }
            for (var u = 0, d = h.a; u < d.length; u++) {
                var r = d[u];
                f.b(e, r, a[r])
            }
        }
        f.b(e, "onLoad", function (t, e) {
            Object(g.a)(e)
        });
        for (var p = 0, v = h.a; p < v.length; p++) {
            var r = v[p];
            f.b(e, r, t[r])
        }
    }

    function a(t) {
        t.images || (t.metrics = []), t.metrics = f.n(t.images, t);
        var e = f.f(t.metrics, t.frames, 0, 0);
        e.sprite && (t.frameWidth = e.sprite.width, t.frameHeight = e.sprite.height)
    }

    function l(t) {
        Object(v.a)(t), s(t), Object(p.a)(t), t.source = f.u(t.source), t.loading = !0, t.target.addClass("loading").trigger("onInit." + h.e, t), f.r({
            source: t.source,
            crossOrigin: t.crossOrigin,
            preloadCount: t.preloadCount,
            progress: function (e) {
                t.progress = e, t.target.trigger("onProgress." + h.e, t)
            },
            complete: function (e) {
                t.images = e, t.loading = !1, t.frames = t.frames || e.length, a(t), Object(p.a)(t), t.stage.show(), t.target.removeClass("loading").trigger("onLoad." + h.e, t).trigger("onFrame." + h.e, t).trigger("onDraw." + h.e, t).trigger("onComplete." + h.e, t)
            }
        })
    }

    function c(t) {
        var e = this, n = t.target, r = m.extend(!0, {}, h.b, t);
        if (r.source = r.source || [], r.plugins = r.plugins || ["360", "drag"], n.find("img").each(function () {
            Array.isArray(r.source) || (r.source = []), r.source.push(m(e).attr("src"))
        }), n.empty().addClass("spritespin-instance").append("<div class='spritespin-stage'></div>"), "canvas" === r.renderer) {
            var o = document.createElement("canvas");
            o.getContext && o.getContext("2d") ? (r.canvas = m(o).addClass("spritespin-canvas"), r.context = o.getContext("2d"), n.append(r.canvas), n.addClass("with-canvas")) : r.renderer = "image"
        }
        return r.target = n, r.stage = n.find(".spritespin-stage"), n.data(h.e, r), i(r), r
    }

    function u(t) {
        b();
        var e = t.target.data(h.e);
        return e ? m.extend(e, t) : e = c(t), l(e), e
    }

    function d(t) {
        r(t), Object(g.d)(t), t.target.trigger("onDestroy", t).html(null).attr("style", null).attr("unselectable", null).removeClass(["spritespin-instance", "with-canvas"]), f.v(t.target), t.target.removeData(h.e)
    }

    n.d(e, "f", function () {
        return w
    }), e.a = s, e.b = l, e.c = c, e.d = u, e.e = d;
    var f = n(2), h = n(6), p = n(23), g = n(24), v = n(25), m = f.a, y = 0, w = {}, b = function () {
        function t(t, e) {
            o(function (n) {
                for (var i = 0, r = n.plugins; i < r.length; i++) {
                    var o = r[i];
                    "function" == typeof o[t] && o[t].apply(n.target, [e, n])
                }
            })
        }

        function e() {
            o(function (t) {
                t.responsive && l(t)
            })
        }

        b = function () {
        };
        for (var n = 0, i = h.c; n < i.length; n++) {
            var r = i[n];
            !function (e) {
                m(window.document).bind(e + "." + h.e, function (n) {
                    t("document" + e, n)
                })
            }(r)
        }
        var s = null;
        m(window).on("resize", function () {
            window.clearTimeout(s), s = window.setTimeout(e, 100)
        })
    }
}, function (t, e, n) {
    "use strict";

    function i() {
        return s || (o || (o = document.createElement("canvas")), o && o.getContext ? s = o.getContext("2d") : null)
    }

    function r(t, e, n) {
        if (!i()) return !1;
        if (e * n <= 1048576) return !1;
        o.width = o.height = 1, s.fillStyle = "#FF00FF", s.fillRect(0, 0, 1, 1), s.drawImage(t, 1 - e, 0);
        try {
            var r = s.getImageData(0, 0, 1, 1).data;
            return 255 === r[0] && 0 === r[1] && 255 === r[2]
        } catch (t) {
            return !1
        }
    }

    e.a = r;
    var o, s
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return t.naturalWidth ? {
            height: t.naturalHeight,
            width: t.naturalWidth
        } : (r = r || new Image, r.crossOrigin = t.crossOrigin, r.src = t.src, {height: r.height, width: r.width})
    }

    e.a = i;
    var r
}, function (t, e, n) {
    "use strict";

    function i(t) {
        t.target.attr("unselectable", "on").css({
            width: "",
            height: "",
            "-ms-user-select": "none",
            "-moz-user-select": "none",
            "-khtml-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none"
        });
        var e = t.responsive ? r.g(t) : r.k(t), n = r.i(t.sizeMode, r.j(t), e);
        t.target.css({
            width: e.width,
            height: e.height,
            position: "relative",
            overflow: "hidden"
        }), t.stage.css(n).hide(), t.canvas && (t.canvas.css(n).hide(), t.canvasRatio = t.canvasRatio || r.q(t.context), "number" == typeof n.width && "number" == typeof n.height ? (t.canvas[0].width = n.width * t.canvasRatio || e.width, t.canvas[0].height = n.height * t.canvasRatio || e.height) : (t.canvas[0].width = e.width * t.canvasRatio, t.canvas[0].height = e.height * t.canvasRatio), t.context.scale(t.canvasRatio, t.canvasRatio))
    }

    e.a = i;
    var r = n(2)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return Object(v.c)(t, "playback")
    }

    function r(t, e) {
        t.lane = t.wrapLane ? Object(p.x)(e, 0, t.lanes - 1, t.lanes) : Object(p.c)(e, 0, t.lanes - 1)
    }

    function o(t) {
        t.frame += t.reverse ? -1 : 1, t.frame = Object(p.x)(t.frame, 0, t.frames - 1, t.frames), t.loop || t.frame !== t.stopFrame || d(t)
    }

    function s(t, e) {
        t.frame = Number(e), t.frame = t.wrap ? Object(p.x)(t.frame, 0, t.frames - 1, t.frames) : Object(p.c)(t.frame, 0, t.frames - 1)
    }

    function a(t) {
        i(t).handler && (l(t), o(t), c(t))
    }

    function l(t) {
        var e = i(t);
        e.lastFrame = t.frame, e.lastLane = t.lane
    }

    function c(t) {
        var e = i(t);
        e.lastFrame === t.frame && e.lastLane === t.lane || t.target.trigger("onFrameChanged." + g.e, t), t.target.trigger("onFrame." + g.e, t), t.target.trigger("onDraw." + g.e, t)
    }

    function u(t, e, n) {
        l(t), null != e && s(t, e), null != n && r(t, n), c(t)
    }

    function d(t) {
        t.animate = !1;
        var e = i(t);
        null != e.handler && (window.clearInterval(e.handler), e.handler = null)
    }

    function f(t) {
        var e = i(t);
        !e.handler || t.animate && e.frameTime === t.frameTime || d(t), t.animate && !e.handler && (e.frameTime = t.frameTime, e.handler = window.setInterval(function () {
            return a(t)
        }, e.frameTime))
    }

    function h(t) {
        t.animate = !0, f(t)
    }

    e.b = i, e.e = u, e.d = d, e.a = f, e.c = h;
    var p = n(2), g = n(6), v = n(11)
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        return c[t] ? void Object(l.e)('Plugin name "' + t + '" is already taken') : (e = e || {}, c[t] = e, e)
    }

    function r(t, e) {
        Object(l.w)('"registerModule" is deprecated, use "registerPlugin" instead'), i(t, e)
    }

    function o(t) {
        return c[t]
    }

    function s(t) {
        a(t);
        for (var e = 0; e < t.plugins.length; e += 1) {
            var n = t.plugins[e];
            if ("string" == typeof n) {
                var i = o(n);
                i ? t.plugins[e] = i : Object(l.e)("No plugin found with name " + n)
            }
        }
    }

    function a(t) {
        t.mods && (Object(l.w)('"mods" option is deprecated, use "plugins" instead'), t.plugins = t.mods, delete t.mods), t.behavior && (Object(l.w)('"behavior" option is deprecated, use "plugins" instead'), t.plugins.push(t.behavior), delete t.behavior), t.module && (Object(l.w)('"module" option is deprecated, use "plugins" instead'), t.plugins.push(t.module), delete t.module)
    }

    e.d = i, e.c = r, e.b = o, e.a = s;
    var l = n(2), c = {}
}, function (t, e, n) {
    "use strict";
    var i, r, o;
    "function" == typeof Symbol && Symbol.iterator;
    !function (s, a) {
        r = [n(4), n(3)], i = a, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(0, function (t, e) {
        var n = t.Slide, i = n.prototype.updateTarget;
        n.prototype.updateTarget = function () {
            if (i.apply(this, arguments), this.parent.options.fade) {
                var t = this.target - this.x, e = this.cells[0].x;
                this.cells.forEach(function (n) {
                    var i = n.x - e - t;
                    n.renderPosition(i)
                })
            }
        }, n.prototype.setOpacity = function (t) {
            this.cells.forEach(function (e) {
                e.element.style.opacity = t
            })
        };
        var r = t.prototype;
        t.createMethods.push("_createFade"), r._createFade = function () {
            this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
        };
        var o = r.updateSlides;
        r.updateSlides = function () {
            o.apply(this, arguments), this.options.fade && this.slides.forEach(function (t, e) {
                var n = e == this.selectedIndex ? 1 : 0;
                t.setOpacity(n)
            }, this)
        }, r.onSelectFade = function () {
            this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
        }, r.onSettleFade = function () {
            if (delete this.didDragEnd, this.options.fade) {
                this.selectedSlide.setOpacity(1);
                this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0)
            }
        }, r.onDragEndFade = function () {
            this.didDragEnd = !0
        }, r.onActivateFade = function () {
            this.options.fade && this.element.classList.add("is-fade")
        }, r.onDeactivateFade = function () {
            this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function (t) {
                t.setOpacity("")
            }))
        };
        var s = r.positionSlider;
        r.positionSlider = function () {
            if (!this.options.fade) return void s.apply(this, arguments);
            this.fadeSlides(), this.dispatchScrollEvent()
        };
        var a = r.positionSliderAtSelected;
        r.positionSliderAtSelected = function () {
            this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
        }, r.fadeSlides = function () {
            if (!(this.slides.length < 2)) {
                var t = this.getFadeIndexes(), e = this.slides[t.a], n = this.slides[t.b],
                    i = this.wrapDifference(e.target, n.target), r = this.wrapDifference(e.target, -this.x);
                r /= i, e.setOpacity(1 - r), n.setOpacity(r);
                var o = t.a;
                this.isDragging && (o = r > .5 ? t.a : t.b);
                void 0 != this.fadeHideIndex && this.fadeHideIndex != o && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = o
            }
        }, r.getFadeIndexes = function () {
            return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
                a: this.fadeIndex,
                b: this.selectedIndex
            }
        }, r.getFadeDragWrapIndexes = function () {
            var t = this.slides.map(function (t, e) {
                return this.getSlideDistance(-this.x, e)
            }, this), n = t.map(function (t) {
                return Math.abs(t)
            }), i = Math.min.apply(Math, n), r = n.indexOf(i), o = t[r], s = this.slides.length, a = o >= 0 ? 1 : -1;
            return {a: r, b: e.modulo(r + a, s)}
        }, r.getFadeDragLimitIndexes = function () {
            for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
                var n = this.slides[e];
                if (-this.x < n.target) break;
                t = e
            }
            return {a: t, b: t + 1}
        }, r.wrapDifference = function (t, e) {
            var n = e - t;
            if (!this.options.wrapAround) return n;
            var i = n + this.slideableWidth, r = n - this.slideableWidth;
            return Math.abs(i) < Math.abs(n) && (n = i), Math.abs(r) < Math.abs(n) && (n = r), n
        };
        var l = r._getWrapShiftCells;
        r._getWrapShiftCells = function () {
            this.options.fade || l.apply(this, arguments)
        };
        var c = r.shiftWrapCells;
        return r.shiftWrapCells = function () {
            this.options.fade || c.apply(this, arguments)
        }, t
    })
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), s = n(28), a = (i(s), n(88)), l = (i(a), function () {
            function e() {
                r(this, e), this.target = ".js-custom-scroll", this.init()
            }

            return o(e, [{
                key: "init", value: function () {
                    t(this.target).mCustomScrollbar()
                }
            }, {
                key: "getData", value: function (t) {
                }
            }, {
                key: "initEvents", value: function () {
                }
            }]), e
        }());
        e.default = l
    }).call(e, n(0))
}, function (t, e, n) {
    var i, r, o;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
    !function (s) {
        r = [n(0)], i = s, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(function (t) {
        function e(e) {
            var s = e || window.event, a = l.call(arguments, 1), c = 0, d = 0, f = 0, h = 0, p = 0, g = 0;
            if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (f = -1 * s.detail), "wheelDelta" in s && (f = s.wheelDelta), "wheelDeltaY" in s && (f = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * f, f = 0), c = 0 === f ? d : f, "deltaY" in s && (f = -1 * s.deltaY, c = f), "deltaX" in s && (d = s.deltaX, 0 === f && (c = -1 * d)), 0 !== f || 0 !== d) {
                if (1 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-line-height");
                    c *= v, f *= v, d *= v
                } else if (2 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-page-height");
                    c *= m, f *= m, d *= m
                }
                if (h = Math.max(Math.abs(f), Math.abs(d)), (!o || h < o) && (o = h, i(s, h) && (o /= 40)), i(s, h) && (c /= 40, d /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = e.clientX - y.left, g = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = f, e.deltaFactor = o, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, d, f), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function n() {
            o = null
        }

        function i(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }

        var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks) for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var u = t.event.special.mousewheel = {
            version: "3.1.12", setup: function () {
                if (this.addEventListener) for (var n = a.length; n;) this.addEventListener(a[--n], e, !1); else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
            }, teardown: function () {
                if (this.removeEventListener) for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1); else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            }, getLineHeight: function (e) {
                var n = t(e), i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            }, getPageHeight: function (e) {
                return t(e).height()
            }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
        };
        t.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            }, unmousewheel: function (t) {
                return this.unbind("mousewheel", t)
            }
        })
    })
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), o = n(90), s = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(o), a = function () {
        function t() {
            i(this, t), this.init()
        }

        return r(t, [{
            key: "init", value: function () {
                var t = new s.default;
                t.init(), document.getElementById("input1").addInputChangedByJsListener(function () {
                    var e = [{value: "data 1", text: "data text 1"}, {
                        value: "data 2",
                        text: "data text 2"
                    }, {value: "data 3", text: "data text 3"}, {value: "data 4", text: "data text 4"}];
                    t.reinit("choiceToReInit", e), t.dogSay()
                })
            }
        }]), t
    }();
    e.default = a
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(4), s = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(o);
        n(26);
        var a = function () {
            function e() {
                i(this, e), this.init(), this.carouselPopup(), myApp.carouselPopup = this.carouselPopup.bind(this), myApp.carouselPopup = this.carouselPopup.bind(this)
            }

            return r(e, [{
                key: "onLoad", value: function () {
                }
            }, {
                key: "init", value: function () {
                    var t = document.querySelector(".main-carousel"), e = new s.default(t, {
                        wrapAround: !0, fade: !0, draggable: !1, on: {
                            ready: function () {
                                setTimeout(function () {
                                    e.resize()
                                }, 500)
                            }
                        }
                    });
                    e.resize(), e.reposition()
                }
            }, {
                key: "carouselPopup", value: function (e) {
                    var n, i = document.querySelector(e), r = t(window).innerWidth();
                    if (n = !(r > 767), i) {
                        var o = new s.default(i, {wrapAround: true, fade: n, draggable: !0});
                        o.resize(), o.reposition()
                    }
                }
            }]), e
        }();
        e.default = a
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.goToTop()
            }

            return i(e, [{
                key: "goToTop", value: function () {
                    t(".back-to-top").click(function () {
                        t(".wrapper").stop().animate({scrollTop: t(".wrapper").offset().top}, 2e3), myApp.changeSnapIndex("0")
                    })
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.scrollVertical()
            }

            return i(e, [{
                key: "scrollVertical", value: function () {
                    var e, n, i, r = 0, o = !1, s = function (i) {
                        (e = void 0 != i.deltaY) && (e = i.deltaY);
                        var s = e < 0 ? "to-top" : "to-bottom";
                        console.log(o), "to-bottom" == s ? !1 === o && (o = !0, r++, n = t(".js-snap-item").eq(r), t("html, body").animate({scrollTop: parseInt(t(n).offset().top)}, function () {
                            o = !1
                        })) : !1 === o && (o = !0, r--, n = t(".js-snap-item").eq(r), t("html,body").animate({scrollTop: parseInt(t(n).offset().top)}, function () {
                            o = !1
                        }))
                    };
                    t(window).on("resize", function () {
                        i = t(window).width(), i > 991 ? (window.scrollTo(t("#main").offset().top, 0), t("body").css("overflow", "hidden"), window.addEventListener("wheel", s, !1), window.addEventListener("DOMmousewheel", s, !1)) : (t("body").css("overflow", "auto"), t("#main").stop().removeClass("toBottom toTop"), window.removeEventListener("wheel", s, !1), window.removeEventListener("scroll", s, !1))
                    }), t(window).trigger("resize")
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.photoCarousel = ".js-gallery-photo-slider", this.videoCarousel = ".js-gallery-video-slider", this.init()
            }

            return i(e, [{
                key: "init", value: function () {
                    this.photoSlider(), this.videoSlider()
                }
            }, {
                key: "photoSlider", value: function () {
                    t(this.photoCarousel).each(function () {
                        t(this).on("ready.flickity", function (e) {
                            t(e.currentTarget).find(".flickity-prev-next-button.previous").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(0 0)"><path d="M-187.66,181.732H-232.2l-1.821,1.719,13.164,12.426,2.389-2.391-8.89-8.316h39.7Z" transform="translate(234.021 -171.026)" fill="#fff"/><path d="M-212.84,160.656l-2.389-2.391-8.442,7.969h4.868Z" transform="translate(228.393 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(49.939 10.674)" fill="#fff"/></svg>'), t(e.currentTarget).find(".flickity-prev-next-button.next").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(6.984 0)"><path d="M-234.02,181.732h44.539l1.821,1.719-13.164,12.426-2.389-2.391,8.89-8.316h-39.7Z" transform="translate(234.02 -171.026)" fill="#fff"/><path d="M-223.672,160.656l2.389-2.391,8.442,7.969h-4.868Z" transform="translate(254.48 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(0 10.674)" fill="#fff"/></svg>')
                        }), t(this).flickity({
                            freeScroll: !1,
                            contain: !0,
                            prevNextButtons: !0,
                            pageDots: !1,
                            groupCells: !0,
                            imagesLoaded: !0,
                            arrowShape: "M38,73.6c1,1,2.7,1,3.7,0c1-1,1-2.6,0-3.6L22.9,51.5h61.9c1.4,0,2.6-1.1,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6H22.9L41.7,28 c1-1,1-2.7,0-3.6c-1-1-2.7-1-3.7,0L14.8,47.1c-1,1-1,2.6,0,3.6L38,73.6z"
                        })
                    })
                }
            }, {
                key: "videoSlider", value: function () {
                    var e = t(this.videoCarousel);
                    e.each(function () {
                        t(this).flickity({
                            freeScroll: !1,
                            contain: !1,
                            prevNextButtons: !1,
                            pageDots: !0,
                            groupCells: !1,
                            imagesLoaded: !0,
                            initialIndex: 1,
                            arrowShape: "M38,73.6c1,1,2.7,1,3.7,0c1-1,1-2.6,0-3.6L22.9,51.5h61.9c1.4,0,2.6-1.1,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6H22.9L41.7,28 c1-1,1-2.7,0-3.6c-1-1-2.7-1-3.7,0L14.8,47.1c-1,1-1,2.6,0,3.6L38,73.6z"
                        })
                    });
                    var n = e.data("flickity"), i = 0, r = 0;
                    e.find(".s-gallery__video__item a").on("click", function (o) {
                        var s = t(o.currentTarget);
                        if (i = n.selectedIndex, r = s.closest(".s-gallery__video__slider__item").index(), !s.closest(".s-gallery__video__slider__item").hasClass("is-selected")) return r > i ? e.flickity("next") : e.flickity("previous"), !1
                    })
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.hbg = ".header__hbg-button", this.extraBtn = ".header__extra-button", this.menu = ".header__menu", this.extraContent = ".header__honda-tools", this.mobile()
            }

            return i(e, [{
                key: "mobile", value: function () {
                    var e = this, n = t(this.hbg), i = t(this.extraBtn);
                    n.on("click", function (n) {
                        t(n.currentTarget).hasClass("open") ? (e.closeMenu(e.hbg, e.menu), t(e.menu).find(".main-menu").removeClass("animation-li")) : (e.openMenu(e.hbg, e.menu), t(e.menu).find(".main-menu").addClass("animation-li"))
                    }), i.on("click", function (n) {
                        t(n.currentTarget).hasClass("open") ? e.closeMenu(e.extraBtn, e.extraContent) : e.openMenu(e.extraBtn, e.extraContent)
                    });
                    var r = t(window).innerWidth(), o = this;
                    t(window).on("load", function () {
                        r < 992 && setTimeout(function () {
                            t(".main-menu").removeClass("animation-li")
                        }, 300)
                    }), t(window).resize(function () {
                        (r = t(window).innerWidth()) < 992 && (setTimeout(function () {
                            t(".main-menu").removeClass("animation-li")
                        }, 300), t(".main-menu li a").on("click", function (t) {
                            o.closeMenu(o.hbg, o.menu)
                        }))
                    }), t(window).resize(function () {
                        (r = t(window).innerWidth()) > 992 && (setTimeout(function () {
                            t(".main-menu").addClass("animation-li")
                        }, 300))
                    }), t(window).trigger("resize")
                }
            }, {
                key: "openMenu", value: function (e, n) {
                    var i = t(n), r = t(e);
                    if (t(".popup").hide(), i.addClass("open"), r.addClass("open"), t("html, body").addClass("popup-active").css({overflow: "hidden"}), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
                        var o = t(window).scrollTop();
                        t("body").addClass("body-fixed").attr("last-posY", o), t("body").css("top", -o)
                    }
                }
            }, {
                key: "closeMenu", value: function (e, n) {
                    var i = t(n), r = t(e);
                    if (i.removeClass("open"), r.removeClass("open"), t("html, body").removeClass("popup-active").removeAttr("style"), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
                        var o = t("body").attr("last-posY");
                        t("body").removeClass("body-fixed").removeAttr("style"), t(window).scrollTop(o)
                    }
                }
            }, {
                key: "animationMenu", value: function () {
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(91), s = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(o), a = function () {
            function e() {
                i(this, e), this.init(), myApp.reInitLozad = this.init.bind(this)
            }

            return r(e, [{
                key: "init", value: function () {
                    (0, s.default)(".lozad", {
                        loaded: function (e) {
                            t(e).attr("data-background-image") && e.classList.add("loaded"), e.onload = function () {
                                e.classList.add("loaded")
                            }
                        }
                    }).observe()
                }
            }]), e
        }();
        e.default = a
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), s = n(12), a = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(s), l = function () {
        function t() {
            var e = this;
            r(this, t), this.totalColumn = a.default.columns[this.getViewportSize(window.innerWidth)], this.resizeCallback = 0, this.main = document.getElementById("main"), this.articles = [].concat(i(this.main.children)), this.initEvents(), window.addEventListener("mousewheel", function (t) {
                return e.onScroll(t)
            }, {passive: !0}), window.addEventListener("resize", function () {
                return e.onResize()
            }, {passive: !0})
        }

        return o(t, [{
            key: "initEvents", value: function () {
                this.articles.forEach(function (t) {
                })
            }
        }, {
            key: "onScroll", value: function (t) {
            }
        }, {
            key: "onResize", value: function () {
                var t = this;
                clearTimeout(this.resizeCallback), this.resizeCallback = setTimeout(function () {
                    t.totalColumn = a.default.columns[t.getViewportSize(window.innerWidth)]
                }, 300)
            }
        }, {
            key: "getViewportSize", value: function (t) {
                return t < a.default.breakpoints.xs ? "xs" : t < a.default.breakpoints.small ? "small" : t < a.default.breakpoints.medium ? "medium" : "large"
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(15), s = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(o), a = function () {
            function e() {
                i(this, e), this.init()
            }

            return r(e, [{
                key: "init", value: function () {
                    var e = new s.default.Controller;
                    new s.default.Scene({
                        triggerElement: ".car-holder",
                        offset: 30,
                        triggerHook: .7,
                        reverse: !0,
                        duration: "100%"
                    }).on("enter", function (e) {
                        t(".s-message").addClass("active")
                    }).on("leave", function (e) {
                        t(".s-message").removeClass("active")
                    }).addTo(e)
                }
            }]), e
        }();
        e.default = a
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
        n(13);
        var o = function () {
            function e() {
                i(this, e), this.scrolling = !1, this.wrapper = ".snap-scroll", this.item = ".js-navigator-item", this.line = ".header__menu__line", this.init(), this.hashURL(), this.controller(), this.scrollActive()
            }

            return r(e, [{
                key: "init", value: function () {
                    t(this.item).each(function (e, n) {
                        t(this).attr("data-nav-index", e)
                    })
                }
            }, {
                key: "controller", value: function () {
                    var e = this, n = t(".main-menu li a"), i = void 0, r = void 0;
                    n.click(function (n) {
                        i = t(n.currentTarget).attr("href"), e.activeMenu(i), e.scrolling = !0, clearTimeout(r), myApp.changeSnapIndex(t(i).attr("data-snap-index")), r = setTimeout(function (n) {
                            e.scrolling = !1, myApp.changeSnapIndex(t(i).attr("data-snap-index"))
                        }, 1e3), n.preventDefault()
                    })
                }
            }, {
                key: "activeMenu", value: function (n) {
                    if (t(".main-menu").find('a[href="' + n + '"]').parent().addClass("active").siblings().removeClass("active"), this.scrollToDiv(n), window.innerWidth < 992) {
                        var i = t(".header__menu"), r = t(".header__hbg-button");
                        if (i.removeClass("open"), r.removeClass("open"), t("html, body").removeClass("popup-active").removeAttr("style"), 1 == (!!e.platform && /iPad|iPhone|iPod/.test(e.platform))) {
                            var o = t("body").attr("last-posY");
                            t("body").removeClass("body-fixed").removeAttr("style"), t(window).scrollTop(o)
                        }
                    }
                }
            }, {
                key: "scrollActive", value: function () {
                    var e = this, n = t(this.item), i = window.innerHeight, r = "";
                    t.fn.textWidth = function () {
                        var e = t(this).html(), n = "<span>" + e + "</span>";
                        t(this).html(n);
                        var i = t(this).find("span:first").width();
                        return t(this).html(e), i
                    }, t(this.wrapper).scroll(function (o) {
                        if (!0 !== e.scrolling) {

                            var s, a = t(e.wrapper).scrollTop();
                            e.checkBackToTopButton();
                            n.each(function (n, r) {
                                t(e.wrapper).scrollTop() + t(r).offset().top - .3 * i < a && (s = t(r).attr("id") ? t(r).attr("id") : t(r).children("section").eq(0).attr("id"))
                            }), setTimeout(function (t) {
                                r != s && (window.history.pushState("", "", "#" + s), r = s)
                            }, 0);
                            var l = t('.main-menu a[href="#' + s + '"]');
                            if (l.length > 0) {
                                t('.main-menu a[href="#' + s + '"]').parent().addClass("active").siblings().removeClass("active");
                                var c = l.offset().left + (l.width() - l.textWidth()) / 2 - t(".header__menu").offset().left,
                                    u = l.textWidth();
                                e.menuLineMove(c, u, 1)
                            } else t(".main-menu li").removeClass("active"), e.menuLineMove(c, u, 0)
                        }
                    })
                }
            }, {
                key: "checkBackToTopButton", value: function (e = window.location.hash) {
                    if(e == '#intro'){
                        $('.back-to-top').addClass('hide')
                        $('.back-to-top-text').addClass('hide')
                    } else {
                        $('.back-to-top').removeClass('hide')
                        $('.back-to-top-text').removeClass('hide')
                    }
                }
            }, {
                key: "scrollToDiv", value: function (e) {
                    window.innerWidth >= 992 ? t(this.wrapper).stop().animate({scrollTop: t(this.wrapper).scrollTop() + t(e).offset().top}, 1e3) : t("html,body").stop().animate({scrollTop: t(e).offset().top - 0}, 1e3)
                }
            }, {
                key: "hashURL", value: function () {
                    var e = this;
                    if (window.location.hash && window.innerWidth < 992) {
                        var n = void 0;
                        this.scrolling = !0, clearTimeout(n), n = setTimeout(function (t) {
                            e.scrolling = !1
                        }, 600), window.addEventListener("load", function (n) {
                            var i = window.location.hash.substring(1);
                            setTimeout(function (n) {
                                e.scrollToDiv("#" + i), myApp.changeSnapIndex(t("#" + i).attr("data-snap-index"))
                            }, 2)
                        })
                    }
                }
            }, {
                key: "menuLineMove", value: function (e, n, i) {
                    var r = t(this.line);
                    gsap.to(r, {x: e, width: n, duration: .5, opacity: i, ease: "power2.out"})
                }
            }]), e
        }();
        e.default = o
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), o = n(0), s = n(8), a = n(4);
    n(10), a.setJQuery(o), s("flickity", a, o);
    var l = function () {
        function t() {
            i(this, t), this.parts = ".popup-parts", this.carousel = ".popup-parts__carousel", this.menu = ".popup-parts__menu", this.init()
        }

        return r(t, [{
            key: "init", value: function () {
                var t = this;
                o(this.parts).each(function (e, n) {
                    var i = o(n).find(".popup-parts__carousel"), r = o(n).find(".popup-parts__menu");
                    t.carouselInit(i), t.menuInit(r)
                })
            }
        }, {
            key: "carouselInit", value: function (t) {
                var e = this, n = o(t);
                n.on("ready.flickity", function (t) {
                    o(t.currentTarget).find(".flickity-prev-next-button.previous").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(0 0)"><path d="M-187.66,181.732H-232.2l-1.821,1.719,13.164,12.426,2.389-2.391-8.89-8.316h39.7Z" transform="translate(234.021 -171.026)" fill="#fff"/><path d="M-212.84,160.656l-2.389-2.391-8.442,7.969h4.868Z" transform="translate(228.393 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(49.939 10.674)" fill="#fff"/></svg>'), o(t.currentTarget).find(".flickity-prev-next-button.next").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(6.984 0)"><path d="M-234.02,181.732h44.539l1.821,1.719-13.164,12.426-2.389-2.391,8.89-8.316h-39.7Z" transform="translate(234.02 -171.026)" fill="#fff"/><path d="M-223.672,160.656l2.389-2.391,8.442,7.969h-4.868Z" transform="translate(254.48 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(0 10.674)" fill="#fff"/></svg>')
                }), n.on("select.flickity", function (t, n) {
                    o(t.currentTarget).closest(e.parts).find(e.menu).find("li").eq(n).addClass("active").siblings().removeClass("active")
                }), n.flickity({
                    freeScroll: !1,
                    contain: !1,
                    prevNextButtons: !0,
                    pageDots: !0,
                    groupCells: !0,
                    imagesLoaded: !0,
                    arrowShape: "M38,73.6c1,1,2.7,1,3.7,0c1-1,1-2.6,0-3.6L22.9,51.5h61.9c1.4,0,2.6-1.1,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6H22.9L41.7,28 c1-1,1-2.7,0-3.6c-1-1-2.7-1-3.7,0L14.8,47.1c-1,1-1,2.6,0,3.6L38,73.6z"
                })
            }
        }, {
            key: "menuInit", value: function (t) {
                var e = this, n = o(t), i = n.find("li a"), r = 0;
                i.on("click", function (t) {
                    var n = o(t.currentTarget);
                    return r = n.closest("li").index(), n.closest(e.parts).find(e.carousel).flickity("select", r), !1
                })
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), o = n(0), s = n(8), a = n(4);
    n(10), a.setJQuery(o), s("flickity", a, o);
    var l = function () {
        function t() {
            i(this, t), this.carousel = ".js-parts-carousel", this.init()
        }

        return r(t, [{
            key: "init", value: function () {
                o(this.carousel).each(function () {
                    o(this).on("ready.flickity", function (t) {
                        o(t.currentTarget).find(".flickity-prev-next-button.previous").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(0 0)"><path d="M-187.66,181.732H-232.2l-1.821,1.719,13.164,12.426,2.389-2.391-8.89-8.316h39.7Z" transform="translate(234.021 -171.026)" fill="#fff"/><path d="M-212.84,160.656l-2.389-2.391-8.442,7.969h4.868Z" transform="translate(228.393 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(49.939 10.674)" fill="#fff"/></svg>'), o(t.currentTarget).find(".flickity-prev-next-button.next").html('<svg xmlns="http://www.w3.org/2000/svg" width="53.345" height="24.852" viewBox="0 0 53.345 24.852"><g transform="translate(6.984 0)"><path d="M-234.02,181.732h44.539l1.821,1.719-13.164,12.426-2.389-2.391,8.89-8.316h-39.7Z" transform="translate(234.02 -171.026)" fill="#fff"/><path d="M-223.672,160.656l2.389-2.391,8.442,7.969h-4.868Z" transform="translate(254.48 -158.265)" fill="#fff"/></g><rect width="3.406" height="3.406" transform="translate(0 10.674)" fill="#fff"/></svg>')
                    }), o(this).flickity({
                        freeScroll: !1,
                        contain: !0,
                        prevNextButtons: !0,
                        pageDots: !1,
                        groupCells: !0,
                        imagesLoaded: !0,
                        arrowShape: "M38,73.6c1,1,2.7,1,3.7,0c1-1,1-2.6,0-3.6L22.9,51.5h61.9c1.4,0,2.6-1.1,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6H22.9L41.7,28 c1-1,1-2.7,0-3.6c-1-1-2.7-1-3.7,0L14.8,47.1c-1,1-1,2.6,0,3.6L38,73.6z"
                    })
                })
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
        n(42);
        var o = function () {
            function e() {
                i(this, e), this.action(), myApp.openPopup = this.openPopup.bind(this), myApp.closePopup = this.closePopup.bind(this)
            }

            return r(e, [{
                key: "openPopup", value: function (e) {
                    t(e).find(".popup__content"), t(e).find(".popup__close"), t(e).find(".popup__content > *"), t(".wrapper");
                    if (t(".popup").hide(), t(e).fadeIn(200).addClass("open"), t(e).find(".center-carousel").length > 0 && myApp.carouselPopup(e + " .center-carousel"), t(window).width() < window.innerWidth && (t("html").css({"padding-right": 17}), t(".header").css({width: "calc(100% - 17px)"}), t(".honda-tools").css({opacity: "0"})), t("html, body").addClass("popup-active").css({overflow: "hidden"}), t(e).attr("data-url")) {
                        var n = t(e).data("url");
                        window.history.pushState({urlPath: ""}, "", n)
                    }
                    if (1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
                        var i = t(window).scrollTop();
                        t("body").addClass("body-fixed").attr("last-posY", i), t("body").css("top", -i)
                    }
                    t(".popup .flickity-enabled").length > 1 && t(".popup .flickity-enabled").flickity("resize")
                }
            }, {
                key: "closePopup", value: function (e) {
                    t(e).find(".popup__content"), t(e).find(".popup__close"), t(".wrapper");
                    if (t(e).fadeOut(300).removeClass("open"), setTimeout(function () {
                        t("html, body").removeClass("popup-active").removeAttr("style"), t(".header").removeAttr("style"), t(".honda-tools").removeAttr("style")
                    }, 300), t(e).attr("data-url")) {
                        t(e).data("url");
                        window.history.pushState({urlPath: ""}, "", " ")
                    }
                    if (1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
                        var n = t("body").attr("last-posY");
                        t("body").removeClass("body-fixed").removeAttr("style"), t(window).scrollTop(n)
                    }
                }
            }, {
                key: "action", value: function () {
                    var e = this;
                    t(document).on("click", ".popup__close", function (n) {
                        var i = n.currentTarget, r = "#" + t(i).parents(".popup").attr("id");
                        e.closePopup(r), n.preventDefault()
                    }), t(document).on("click", ".js-popup-close", function (n) {
                        var i = n.currentTarget, r = "#" + t(i).parents(".popup").attr("id"), td = t(i).attr("href");
                        e.closePopup(r), myApp.changeSnapIndex(10), window.innerWidth >= 992 ? t(this.wrapper).stop().animate({scrollTop: t(this.wrapper).scrollTop() + t(e).offset().top}, 1e3) : t("html,body").stop().animate({scrollTop: t(td).offset().top - 48}, 1e3), t(".main-menu").find('a[href="' + td + '"]').parent().addClass("active").siblings().removeClass("active")
                    }), t(".popup").click(function (n) {
                        var i = n.currentTarget;
                        if (0 === t(n.target).closest(".popup__container").length) {
                            if (t(i).hasClass("disable-outside-close")) return !1;
                            var r = "#" + t(n.target).closest(".popup").attr("id");
                            e.closePopup(r), myApp.pauseAllVideo()
                        }
                    }), t(document).on("click", ".js-popup-open", function (n) {
                        var i = n.currentTarget, r = t(i).attr("href");
                        e.openPopup(r), t(i).hasClass("js-active-part") && e.activePart(r, t(i).closest(".parts-gallery__item ").index()), n.preventDefault()
                    })
                }
            }, {
                key: "activePart", value: function (e, n) {
                    t(e).find(".popup-parts__carousel").flickity("select", n, !1, !0)
                }
            }]), e
        }();
        e.default = o
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(13), function (t) {
            t.fn.rotateSlider = function (e) {
                function n(t, e) {
                    i.find(".now").removeClass("now"), i.find(".next").removeClass("next"), i.find(".prev").removeClass("prev"), t == l - 1 && s.eq(0).addClass("next"), 0 == t && s.eq(l - 1).addClass("prev"), s.each(function (n) {
                        if (n == t && (s.eq(n).addClass("now"), gsap.to(i.find(".now").find("h4"), .25, {
                            opacity: 1,
                            bottom: 10
                        })), n == t + 1 && s.eq(n).addClass("next"), n == t - 1 && s.eq(n).addClass("prev"), "next" == e) {
                            var r = i.find(".prev").find("h4");
                            gsap.to(r, .25, {
                                opacity: 0, bottom: 50, onComplete: function () {
                                    setTimeout(function () {
                                        gsap.to(r, 0, {bottom: -50})
                                    }, 250)
                                }
                            })
                        } else {
                            var o = i.find(".next").find("h4");
                            gsap.to(o, .25, {
                                opacity: 0, bottom: 50, onComplete: function () {
                                    setTimeout(function () {
                                        gsap.to(o, 0, {bottom: -50})
                                    }, 250)
                                }
                            })
                        }
                    }), c.find("li").removeClass("active"), c.find("li").eq(t).addClass("active")
                }

                var i = this, r = e.itemClass || "rotateslider-item", o = e.arrowClass || "js-rotateslider-arrow",
                    s = i.find("." + r), a = i.find("." + o), l = s.length, c = i.find(".js-rotateslider-paginator"),
                    u = !1;
                !function () {
                    for (var t = 0; t < l; t++) c.append('\n                    <li class="rotateslider-paginator__item" data-index="' + t + '"></li>\n                ')
                }(), n(0), a.on("click", function () {
                    if (0 == u) {
                        u = !0;
                        var e = t(this).data("action"), r = s.index(i.find(".now"));
                        "next" == e ? r == l - 1 ? n(0, "next") : n(r + 1, "next") : "prev" == e && (0 == r ? n(l - 1, "prev") : n(r - 1, "prev")), setTimeout(function () {
                            u = !1
                        }, 300)
                    }
                }), c.find("li").unbind("click").on("click", function () {
                    n(t(this).data("index"))
                })
            }
        }(t)
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
        n(42);
        var o = function () {
            function e() {
                i(this, e), this.init()
            }

            return r(e, [{
                key: "init", value: function () {
                    t(".slider__rotate").each(function () {
                        var e = t(this).find(".rotateslider-item");
                        e.length > 2 ? (t(this).rotateSlider({}), t(this).closest(".popup").css("overflow", "hidden")) : (e.addClass("rotateslider-item--inline"), t(this).find(".o-arrow").hide(), t(this).find(".rotateslider-container").css("min-height", "auto"))
                    })
                }
            }]), e
        }();
        e.default = o
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), o = n(92), s = (function (t) {
            t && t.__esModule
        }(o), function () {
            function e() {
                i(this, e), this.init(), myApp.slickSetPosition = this.slickSetPosition.bind(this)
            }

            return r(e, [{
                key: "init", value: function () {
                    t(".slick-container-center").slick({
                        centerMode: !0,
                        slidesToShow: 3,
                        responsive: [{
                            breakpoint: 768,
                            settings: {arrows: !1, centerMode: !0, slidesToShow: 3}
                        }, {breakpoint: 480, settings: {arrows: !1, centerMode: !0, slidesToShow: 1}}]
                    })
                }
            }, {
                key: "slickSetPosition", value: function () {
                    t(".slick-slider").slick("setPosition")
                }
            }]), e
        }());
        e.default = s
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
        n(13), n(93);
        var o = function () {
            function e() {
                i(this, e), this.snapOn = !0, this.currentIndex = 0, this.sections = [], this.lockScroll = !1, this.wrapper = ".snap-scroll", this.classSection = ".js-snap-item", this.destroyEle = t(".js-snap-scroll-destroy"), this.init(), myApp.changeSnapIndex = this.changeSnapIndex.bind(this), myApp.scrollTo = this.scrollTo.bind(this)
            }

            return r(e, [{
                key: "init", value: function () {
                    t(this.classSection).each(function (e, n) {
                        t(this).attr("data-snap-index", e)
                    }), window.innerWidth > 991 && (this.pushSections(), this.hashURL(), this.controller())
                }
            }, {
                key: "controller", value: function () {
                    var e = this, n = "down";
                    t(this.wrapper).on("wheel", function (t) {
                        t.originalEvent.deltaY < 0 ? (n = "up", !1 === e.lockScroll && (e.currentIndex--, e.checkIndex(), e.scrollTo(e.sections[e.currentIndex]), e.lockScroll = !0)) : !1 === e.lockScroll && (n = "down", e.currentIndex++, e.checkIndex(), e.scrollTo(e.sections[e.currentIndex]), e.lockScroll = !0), e.specialFrames(e.currentIndex)
                    })
                }
            }, {
                key: "scrollTo", value: function (t) {
                    var e = this;
                    gsap.killTweensOf(this.wrapper), gsap.to(this.wrapper, {
                        duration: 1,
                        scrollTo: t,
                        ease: "power2.inOut",
                        onComplete: function (t) {
                            e.lockScroll = !1
                        }
                    })
                }
            }, {
                key: "pushSections", value: function () {
                    var e = this;
                    t(this.classSection).each(function (t, n) {
                        e.sections.push("." + n.classList[0])
                    })
                }
            }, {
                key: "checkIndex", value: function () {
                    this.currentIndex < 0 ? this.currentIndex = 0 : this.currentIndex > this.sections.length - 1 && (this.currentIndex = this.sections.length - 1)
                }
            }, {
                key: "snapOffStage", value: function (e) {
                    var n = t(this.wrapper).scrollTop(), i = this.currentIndex, r = t(this.sections[i]),
                        o = t(this.wrapper).scrollTop() + r.offset().top, s = r.outerHeight(!0);
                    "down" == e ? n > o + s - 150 && (this.snapOn = !0, this.lockScroll) : n < o && (this.snapOn = !0, this.lockScroll)
                }
            }, {
                key: "hashURL", value: function () {
                    var t = this;
                    if (window.location.hash && window.innerWidth > 991) {
                        var e = window.location.hash.substring(1), n = document.getElementById(e);
                        if (n) {
                            n = n.classList[0];
                            for (var i = 0; i < this.sections.length; i++) if (this.sections[i] == "." + n) {
                                this.currentIndex = i;
                                break
                            }
                            window.addEventListener("load", function (n) {
                                setTimeout(function (n) {
                                    t.scrollTo("#" + e)
                                }, 2)
                            })
                        }
                    }
                }
            }, {
                key: "changeSnapIndex", value: function (t) {
                    this.currentIndex = t
                }
            }, {
                key: "specialFrames", value: function (e) {
                    10 == e || 11 == e ? t(".honda-tools").addClass("") : t(".honda-tools").removeClass("hidding")
                }
            }]), e
        }();
        e.default = o
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.init(), this.controller()
            }

            return i(e, [{
                key: "init", value: function () {
                    t(".tabs")
                }
            }, {
                key: "controller", value: function () {
                    t(".js-tab-list li").click(function (e) {
                        var n = t(this).attr("data-tab"), i = t(this).closest(".tab-pane");
                        i.find(".js-tab-list li").removeClass("active"), i.find(".js-tab-list li").eq(n - 1).addClass("active animation-text no-delay"), i.find(".js-tab-stage").removeClass("active animation-text no-delay"), i.find(".js-tab-stage" + n).addClass("active animation-text no-delay")
                    })
                }
            }, {
                key: "changeTab", value: function (t, e) {
                    var n = t.find('.tabs__nav a[href="' + e + '"]');
                    "LI" == n.parent().prop("tagName") ? n.parent().addClass("active").siblings().removeClass("active no-delay animation-text") : n.addClass("active").siblings().removeClass("active no-delay animation-text"), t.find(e).fadeIn().css("display", "block").siblings().hide()
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), r = function () {
            function e() {
                n(this, e), this.elm = ".js-youtube", this.btnPlay = ".js-play-youtube", this.btnToggleMute = ".js-toggle-mute", this.btnPause = ".js-pause-youtube", this.pauseAll = ".js-pause-all", this.player, this.playerElm = [], this.players = [], myApp.playerNow = this.playerNow, this.idVideoPlaying = "", this.idPlayerNow = "", this.IsAutoPlay = !1, this.wrapper = ".js-youtube-wrapper", myApp.endVideo = this.endPause.bind(this), myApp.getPlayerInArray = this.getPlayerInArray.bind(this), myApp.playVideo = this.playVid.bind(this), myApp.pauseAllVideo = this.pauseAllFn.bind(this), this.init()
            }

            return i(e, [{
                key: "init", value: function () {
                    this.insertScript(), this.playersInPage(), this.btn()
                }
            }, {
                key: "getPlayerInArray", value: function (t) {
                    for (var e = 0; e < this.players.length; e++) {
                        if (t === this.players[e].id) return this.players[e].player
                    }
                }
            }, {
                key: "playersInPage", value: function () {
                    var e = t(this.elm);
                    this.IsAutoPlay = !1;
                    for (var n = 0; n < e.length; n++) {
                        var i = t(e[n]), r = i.attr("id"), o = i.attr("id-video");
                        i.attr("auto-play") && 0 == this.IsAutoPlay && (this.IsAutoPlay = !0, this.idPlayerNow = r, this.idVideoPlaying = o), this.playerElm.push({
                            idVideo: o,
                            idPlayer: r
                        })
                    }
                    this.playerAPI()
                }
            }, {
                key: "insertScript", value: function () {
                    var t = document.createElement("script");
                    t.src = "https://www.youtube.com/iframe_api", document.body.appendChild(t)
                }
            }, {
                key: "playerAPI", value: function () {
                    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this)
                }
            }, {
                key: "onYouTubeIframeAPIReady", value: function () {
                    for (var e = 0; e < this.playerElm.length; e++) {
                        var n = this.playerElm[e], i = t("#" + n.idPlayer).attr("inline"),
                            r = this.createPlayer(n.idPlayer, n.idVideo, i);
                        this.players.push({player: r, id: n.idPlayer, idVideo: n.idVideo})
                    }
                }
            }, {
                key: "createPlayer", value: function (t, e, n) {
                    return new YT.Player(t, {
                        height: "100%",
                        width: "100%",
                        videoId: e,
                        playerVars: {controls: 0, rel: 0, fs: 0, playsinline: n ? 1 : 0},
                        events: {
                            onReady: this.onPlayerReady.bind(this),
                            onStateChange: this.onPlayerStateChange.bind(this)
                        }
                    })
                }
            }, {
                key: "onPlayerReady", value: function (e) {
                    var n = this.getElmPlayer(e.target), i = n.attr("id"), r = t(window).width();
                    if (n.attr("muted") && e.target.mute(), i !== this.idPlayerNow || r < 768) return !1;
                    this.playVid(n, e.target)
                }
            }, {
                key: "onPlayerStateChange", value: function (t) {
                    var e = YT.PlayerState;
                    switch (t.data) {
                        case e.ENDED:
                        case e.PAUSED:
                            this.endPause(t.target)
                    }
                }
            }, {
                key: "endPause", value: function (t) {
                    this.hideVid(t)
                }
            }, {
                key: "getElmPlayer", value: function (e) {
                    return t(e.a)
                }
            }, {
                key: "hideVid", value: function (e) {
                    var n = this.getElmPlayer(e);
                    if (n.attr("hide-stop")) {
                        t(n).parent(this.wrapper).removeClass("active")
                    }
                    e.isMuted() ? n.attr("muted", !0) : n.attr("muted", "")
                }
            }, {
                key: "playVid", value: function (e, n) {
                    t(e).parent(this.wrapper).addClass("active"), myApp.playerNow = this.playerNow = n;
                    var i = Number(t(e).attr("start-from"));
                    isNaN(i) || n.seekTo(i), n.playVideo(), e.attr("muted") ? n.mute() : n.unMute()
                }
            }, {
                key: "pauseVid", value: function (t) {
                    t.pauseVideo(), this.endPause(t)
                }
            }, {
                key: "pauseAllFn", value: function () {
                    for (var t = 0; t < this.players.length; t++) {
                        var e = this.players[t].player;
                        this.pauseVid(e), this.hideVid(e)
                    }
                }
            }, {
                key: "btn", value: function () {
                    var e = this;
                    t(this.btnPlay).unbind("click").click(function (n) {
                        var i = t(n.currentTarget), r = i.attr("id-player"), o = e.getPlayerInArray(r);
                        if (o) {
                            var s = t("#" + r);
                            e.playVid(s, o)
                        }
                    }), t(this.btnToggleMute).unbind("click").click(function (n) {
                        var i = t(n.currentTarget), r = i.attr("id-player"), o = e.getPlayerInArray(r);
                        o && (o.isMuted() ? i.addClass("unmute").removeClass("mute") : i.addClass("mute").removeClass("unmute"), e.toggleMute(o, o.isMuted()))
                    }), t(this.btnPause).unbind("click").click(function (n) {
                        var i = t(n.currentTarget), r = i.attr("id-player"), o = e.getPlayerInArray(r);
                        o && e.pauseVid(o)
                    }), t(this.pauseAll).unbind("click").click(function (t) {
                        e.pauseAllFn()
                    })
                }
            }, {
                key: "toggleMute", value: function (t, e) {
                    e ? t.unMute() : t.mute()
                }
            }]), e
        }();
        e.default = r
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";

    function i(t) {
        for (var e = 0; e < t.length; e++) new (n(49)("./" + t[e]).default)
    }

    function r(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            -1 === e.indexOf(i.toString()) && e.push(i)
        }
        return e
    }

    function o() {
        for (var t = document.querySelectorAll("[data-module]"), e = [], n = 0; n < t.length; n++) for (var i = t[n].getAttribute("data-module").split(" "), r = 0; r < i.length; r++) 0 != i[r].trim().length && e.push(i[r]);
        return e
    }

    window.$ = window.jQuery = n(0), document.addEventListener("DOMContentLoaded", function (t) {
        window.myApp = {}, i(r(o()))
    })
}, function (t, e, n) {
    function i(t) {
        return n(r(t))
    }

    function r(t) {
        var e = o[t];
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
        return e
    }

    var o = {
        "./animation": 14,
        "./animation.js": 14,
        "./color": 16,
        "./color-car": 18,
        "./color-car.js": 18,
        "./color.js": 16,
        "./conf": 12,
        "./conf.js": 12,
        "./custom-scroll": 27,
        "./custom-scroll.js": 27,
        "./dropdown": 29,
        "./dropdown.js": 29,
        "./flickity-slider": 30,
        "./flickity-slider.js": 30,
        "./footer": 31,
        "./footer.js": 31,
        "./full-vertical": 32,
        "./full-vertical.js": 32,
        "./gallery": 33,
        "./gallery.js": 33,
        "./header": 34,
        "./header.js": 34,
        "./lazyload": 35,
        "./lazyload.js": 35,
        "./main": 36,
        "./main.js": 36,
        "./message": 37,
        "./message.js": 37,
        "./navigator": 38,
        "./navigator.js": 38,
        "./parts-detail": 39,
        "./parts-detail.js": 39,
        "./partsGallery": 40,
        "./partsGallery.js": 40,
        "./popup": 41,
        "./popup-slider": 43,
        "./popup-slider.js": 43,
        "./popup.js": 41,
        "./slickSlider": 44,
        "./slickSlider.js": 44,
        "./snap-scroll": 45,
        "./snap-scroll.js": 45,
        "./tabs": 46,
        "./tabs.js": 46,
        "./youtubeAPI": 47,
        "./youtubeAPI.js": 47
    };
    i.keys = function () {
        return Object.keys(o)
    }, i.resolve = r, t.exports = i, i.id = 49
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        "use strict";
        i = s, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r)
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n], r = i + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(17)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";

        function n(t, e) {
            this.element = t, this.parent = e, this.create()
        }

        var i = n.prototype;
        return i.create = function () {
            this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
        }, i.destroy = function () {
            this.unselect(), this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, i.getSize = function () {
            this.size = e(this.element)
        }, i.setPosition = function (t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, i.updateTarget = i.setDefaultTarget = function () {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, i.renderPosition = function (t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, i.select = function () {
            this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
        }, i.unselect = function () {
            this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
        }, i.wrapShift = function (t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, i.remove = function () {
            this.element.parentNode.removeChild(this.element)
        }, n
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = s, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r)
    }(window, function () {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }

        var e = t.prototype;
        return e.addCell = function (t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function () {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), n = e ? e.size[t] : 0,
                i = this.outerWidth - (this.firstMargin + n);
            this.target = this.x + this.firstMargin + i * this.parent.cellAlign
        }, e.getLastCell = function () {
            return this.cells[this.cells.length - 1]
        }, e.select = function () {
            this.cells.forEach(function (t) {
                t.select()
            })
        }, e.unselect = function () {
            this.cells.forEach(function (t) {
                t.unselect()
            })
        }, e.getCellElements = function () {
            return this.cells.map(function (t) {
                return t.element
            })
        }, t
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(3)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";
        var n = {};
        return n.startAnimation = function () {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, n.animate = function () {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame(function () {
                    e.animate()
                })
            }
        }, n.positionSlider = function () {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
        }, n.setTranslateX = function (t, e) {
            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
            var n = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")"
        }, n.dispatchScrollEvent = function () {
            var t = this.slides[0];
            if (t) {
                var e = -this.x - t.target, n = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [n, e])
            }
        }, n.positionSliderAtSelected = function () {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        }, n.getPositionValue = function (t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, n.settle = function (t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        }, n.shiftWrapCells = function (t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, n, 1)
        }, n._shiftCells = function (t, e, n) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i], o = e > 0 ? n : 0;
                r.wrapShift(o), e -= r.size.outerWidth
            }
        }, n._unshiftCells = function (t) {
            if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        }, n.integratePhysics = function () {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        }, n.applyForce = function (t) {
            this.velocity += t
        }, n.getFrictionFactor = function () {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, n.getRestingPosition = function () {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, n.applyDragForce = function () {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x, e = t - this.velocity;
                this.applyForce(e)
            }
        }, n.applySelectedAttraction = function () {
            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = -1 * this.selectedSlide.target - this.x, e = t * this.options.selectedAttraction;
                this.applyForce(e)
            }
        }, n
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(55), n(3)], void 0 !== (r = function (t, e, n) {
            return s(o, t, e, n)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n, i) {
        "use strict";

        function r() {
            return {x: t.pageXOffset, y: t.pageYOffset}
        }

        i.extend(e.defaults, {draggable: ">1", dragThreshold: 3}), e.createMethods.push("_createDrag");
        var o = e.prototype;
        i.extend(o, n.prototype), o._touchActionValue = "pan-y";
        var s = "createTouch" in document, a = !1;
        o._createDrag = function () {
            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !a && (t.addEventListener("touchmove", function () {
            }), a = !0)
        }, o.onActivateDrag = function () {
            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
        }, o.onDeactivateDrag = function () {
            this.unbindHandles(), this.element.classList.remove("is-draggable")
        }, o.updateDraggable = function () {
            ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }, o.bindDrag = function () {
            this.options.draggable = !0, this.updateDraggable()
        }, o.unbindDrag = function () {
            this.options.draggable = !1, this.updateDraggable()
        }, o._uiChangeDrag = function () {
            delete this.isFreeScrolling
        }, o.pointerDown = function (e, n) {
            if (!this.isDraggable) return void this._pointerDownDefault(e, n);
            this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = r(), t.addEventListener("scroll", this), this._pointerDownDefault(e, n))
        }, o._pointerDownDefault = function (t, e) {
            this.pointerDownPointer = {
                pageX: e.pageX,
                pageY: e.pageY
            }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
        };
        var l = {INPUT: !0, TEXTAREA: !0, SELECT: !0};
        return o.pointerDownFocus = function (t) {
            l[t.target.nodeName] || this.focus()
        }, o._pointerDownPreventDefault = function (t) {
            var e = "touchstart" == t.type, n = "touch" == t.pointerType, i = l[t.target.nodeName];
            e || n || i || t.preventDefault()
        }, o.hasDragStarted = function (t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, o.pointerUp = function (t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, o.pointerDone = function () {
            t.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, o.dragStart = function (e, n) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]))
        }, o.pointerMove = function (t, e) {
            var n = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n)
        }, o.dragMove = function (t, e, n) {
            if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var i = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (n.x = n.x % this.slideableWidth);
                var r = this.dragStartPosition + n.x * i;
                if (!this.options.wrapAround && this.slides.length) {
                    var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                    r = r > o ? .5 * (r + o) : r;
                    var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    r = r < s ? .5 * (r + s) : r
                }
                this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, n])
            }
        }, o.dragEnd = function (t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var n = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var i = this.getRestingPosition();
                    this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target
                } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
            }
        }, o.dragEndRestingSelect = function () {
            var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                n = this._getClosestResting(t, e, 1), i = this._getClosestResting(t, e, -1);
            return n.distance < i.distance ? n.index : i.index
        }, o._getClosestResting = function (t, e, n) {
            for (var i = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (t, e) {
                return t <= e
            } : function (t, e) {
                return t < e
            }; o(e, r) && (i += n, r = e, null !== (e = this.getSlideDistance(-t, i)));) e = Math.abs(e);
            return {distance: r, index: i - n}
        }, o.getSlideDistance = function (t, e) {
            var n = this.slides.length, r = this.options.wrapAround && n > 1, o = r ? i.modulo(e, n) : e,
                s = this.slides[o];
            if (!s) return null;
            var a = r ? this.slideableWidth * Math.floor(e / n) : 0;
            return t - (s.target + a)
        }, o.dragEndBoostSelect = function () {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
        }, o.staticClick = function (t, e) {
            var n = this.getParentCell(t.target), i = n && n.element, r = n && this.cells.indexOf(n);
            this.dispatchEvent("staticClick", t, [e, i, r])
        }, o.onscroll = function () {
            var t = r(), e = this.pointerDownScroll.x - t.x, n = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone()
        }, e
    })
}, function (t, e, n) {
    var i, r;/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
    !function (o, s) {
        i = [n(9)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e) {
        "use strict";

        function n() {
        }

        var i = n.prototype = Object.create(e.prototype);
        i.bindHandles = function () {
            this._bindHandles(!0)
        }, i.unbindHandles = function () {
            this._bindHandles(!1)
        }, i._bindHandles = function (e) {
            e = void 0 === e || e;
            for (var n = e ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
                var o = this.handles[r];
                this._bindStartEvent(o, e), o[n]("click", this), t.PointerEvent && (o.style.touchAction = i)
            }
        }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
        };
        var r = {TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0},
            o = {radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0};
        return i.okayPointerDown = function (t) {
            var e = r[t.target.nodeName], n = o[t.target.type], i = !e || n;
            return i || this._pointerReset(), i
        }, i.pointerDownBlur = function () {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
        }, i.pointerMove = function (t, e) {
            var n = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n)
        }, i._dragPointerMove = function (t, e) {
            var n = {x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY};
            return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n
        }, i.hasDragStarted = function (t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, i.pointerUp = function (t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, i._dragPointerUp = function (t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, i._dragStart = function (t, e) {
            this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
        }, i.dragStart = function (t, e) {
            this.emitEvent("dragStart", [t, e])
        }, i._dragMove = function (t, e, n) {
            this.isDragging && this.dragMove(t, e, n)
        }, i.dragMove = function (t, e, n) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, n])
        }, i._dragEnd = function (t, e) {
            this.isDragging = !1, setTimeout(function () {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, i.dragEnd = function (t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, i.onclick = function (t) {
            this.isPreventingClicks && t.preventDefault()
        }, i._staticClick = function (t, e) {
            this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
                delete this.isIgnoringMouseUp
            }.bind(this), 400)))
        }, i.staticClick = function (t, e) {
            this.emitEvent("staticClick", [t, e])
        }, n.getPointerPoint = e.getPointerPoint, n
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(9), n(3)], void 0 !== (r = function (t, e, n) {
            return s(o, t, e, n)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n, i) {
        "use strict";

        function r(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function o(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }

        var s = "http://www.w3.org/2000/svg";
        r.prototype = Object.create(n.prototype), r.prototype._create = function () {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var n = this.createSVG();
            e.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function () {
            this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, r.prototype.deactivate = function () {
            this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
        }, r.prototype.createSVG = function () {
            var t = document.createElementNS(a, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(a, "path"), n = o(this.parent.options.arrowShape);
            return e.setAttribute("d", n), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function () {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, r.prototype.enable = function () {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, r.prototype.disable = function () {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, r.prototype.update = function () {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
            var e = t.length ? t.length - 1 : 0, n = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == n ? "disable" : "enable"]()
        }, r.prototype.destroy = function () {
            this.deactivate(), this.allOff()
        }, i.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30}
        }), e.createMethods.push("_createPrevNextButtons");
        var a = e.prototype;
        return a._createPrevNextButtons = function () {
            this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
        }, a.activatePrevNextButtons = function () {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, a.deactivatePrevNextButtons = function () {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = r, e
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(9), n(3)], void 0 !== (r = function (t, e, n) {
            return s(o, t, e, n)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n, i) {
        "use strict";

        function r(t) {
            this.parent = t, this._create()
        }

        r.prototype = Object.create(n.prototype), r.prototype._create = function () {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function () {
            this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
        }, r.prototype.deactivate = function () {
            this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
        }, r.prototype.setDots = function () {
            var t = this.parent.slides.length - this.dots.length;
            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, r.prototype.addDots = function (t) {
            for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, r = i + t, o = i; o < r; o++) {
                var s = document.createElement("li");
                s.className = "dot", s.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(s), n.push(s)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(n)
        }, r.prototype.removeDots = function (t) {
            this.dots.splice(this.dots.length - t, t).forEach(function (t) {
                this.holder.removeChild(t)
            }, this)
        }, r.prototype.updateSelected = function () {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
        }, r.prototype.onTap = r.prototype.onClick = function (t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var n = this.dots.indexOf(e);
                this.parent.select(n)
            }
        }, r.prototype.destroy = function () {
            this.deactivate(), this.allOff()
        }, e.PageDots = r, i.extend(e.defaults, {pageDots: !0}), e.createMethods.push("_createPageDots");
        var o = e.prototype;
        return o._createPageDots = function () {
            this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, o.activatePageDots = function () {
            this.pageDots.activate()
        }, o.updateSelectedPageDots = function () {
            this.pageDots.updateSelected()
        }, o.updatePageDots = function () {
            this.pageDots.setDots()
        }, o.deactivatePageDots = function () {
            this.pageDots.deactivate()
        }, e.PageDots = r, e
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(7), n(3), n(5)], void 0 !== (r = function (t, e, n) {
            return s(t, e, n)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n) {
        "use strict";

        function i(t) {
            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }

        i.prototype = Object.create(t.prototype), i.prototype.play = function () {
            if ("playing" != this.state) {
                if (document.hidden) return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
                this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()
            }
        }, i.prototype.tick = function () {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout(function () {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, i.prototype.stop = function () {
            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
        }, i.prototype.clear = function () {
            clearTimeout(this.timeout)
        }, i.prototype.pause = function () {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, i.prototype.unpause = function () {
            "paused" == this.state && this.play()
        }, i.prototype.visibilityChange = function () {
            this[document.hidden ? "pause" : "unpause"]()
        }, i.prototype.visibilityPlay = function () {
            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
        }, e.extend(n.defaults, {pauseAutoPlayOnHover: !0}), n.createMethods.push("_createPlayer");
        var r = n.prototype;
        return r._createPlayer = function () {
            this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, r.activatePlayer = function () {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, r.playPlayer = function () {
            this.player.play()
        }, r.stopPlayer = function () {
            this.player.stop()
        }, r.pausePlayer = function () {
            this.player.pause()
        }, r.unpausePlayer = function () {
            this.player.unpause()
        }, r.deactivatePlayer = function () {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, r.onmouseenter = function () {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, r.onmouseleave = function () {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, n.Player = i, n
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(3)], void 0 !== (r = function (t, e) {
            return s(o, t, e)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n) {
        "use strict";

        function i(t) {
            var e = document.createDocumentFragment();
            return t.forEach(function (t) {
                e.appendChild(t.element)
            }), e
        }

        var r = e.prototype;
        return r.insert = function (t, e) {
            var n = this._makeCells(t);
            if (n && n.length) {
                var r = this.cells.length;
                e = void 0 === e ? r : e;
                var o = i(n), s = e == r;
                if (s) this.slider.appendChild(o); else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(o, a)
                }
                if (0 === e) this.cells = n.concat(this.cells); else if (s) this.cells = this.cells.concat(n); else {
                    var l = this.cells.splice(e, r - e);
                    this.cells = this.cells.concat(n).concat(l)
                }
                this._sizeCells(n), this.cellChange(e, !0)
            }
        }, r.append = function (t) {
            this.insert(t, this.cells.length)
        }, r.prepend = function (t) {
            this.insert(t, 0)
        }, r.remove = function (t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var i = this.cells.length - 1;
                e.forEach(function (t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    i = Math.min(e, i), n.removeFrom(this.cells, t)
                }, this), this.cellChange(i, !0)
            }
        }, r.cellSizeChange = function (t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = this.cells.indexOf(e);
                this.cellChange(n)
            }
        }, r.cellChange = function (t, e) {
            var n = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var i = this.getCell(n);
            i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
        }, e
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(3)], void 0 !== (r = function (t, e) {
            return s(o, t, e)
        }.apply(e, i)) && (t.exports = r)
    }(window, function (t, e, n) {
        "use strict";

        function i(t) {
            if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"), i = t.getAttribute("data-flickity-lazyload-src"),
                    r = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || i || r) return [t]
            }
            var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
            return n.makeArray(o)
        }

        function r(t, e) {
            this.img = t, this.flickity = e, this.load()
        }

        e.createMethods.push("_createLazyload");
        var o = e.prototype;
        return o._createLazyload = function () {
            this.on("select", this.lazyLoad)
        }, o.lazyLoad = function () {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0, n = this.getAdjacentCellElements(e), o = [];
                n.forEach(function (t) {
                    var e = i(t);
                    o = o.concat(e)
                }), o.forEach(function (t) {
                    new r(t, this)
                }, this)
            }
        }, r.prototype.handleEvent = n.handleEvent, r.prototype.load = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
        }, r.prototype.onload = function (t) {
            this.complete(t, "flickity-lazyloaded")
        }, r.prototype.onerror = function (t) {
            this.complete(t, "flickity-lazyerror")
        }, r.prototype.complete = function (t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var n = this.flickity.getParentCell(this.img), i = n && n.element;
            this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i)
        }, e.LazyLoader = r, e
    })
}, function (t, e, n) {
    var i, r;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
    !function (o, s) {
        "use strict";
        i = [n(7)], void 0 !== (r = function (t) {
            return s(o, t)
        }.apply(e, i)) && (t.exports = r)
    }("undefined" != typeof window ? window : this, function (t, e) {
        "use strict";

        function n(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function i(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t]
        }

        function r(t, e, o) {
            if (!(this instanceof r)) return new r(t, e, o);
            var s = t;
            if ("string" == typeof t && (s = document.querySelectorAll(t)), !s) return void l.error("Bad element for imagesLoaded " + (s || t));
            this.elements = i(s), this.options = n({}, this.options), "function" == typeof e ? o = e : n(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), setTimeout(this.check.bind(this))
        }

        function o(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }

        var a = t.jQuery, l = t.console, c = Array.prototype.slice;
        r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, r.prototype.addElementImages = function (t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && u[e]) {
                for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (i = 0; i < o.length; i++) {
                        var s = o[i];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var u = {1: !0, 9: !0, 11: !0};
        return r.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                var r = i && i[2];
                r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
            }
        }, r.prototype.addImage = function (t) {
            var e = new o(t);
            this.images.push(e)
        }, r.prototype.addBackground = function (t, e) {
            var n = new s(t, e);
            this.images.push(n)
        }, r.prototype.check = function () {
            function t(t, n, i) {
                setTimeout(function () {
                    e.progress(t, n, i)
                })
            }

            var e = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            this.images.forEach(function (e) {
                e.once("progress", t), e.check()
            })
        }, r.prototype.progress = function (t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, t, e)
        }, r.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
            if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src
        }, o.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth
        }, o.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(o.prototype), s.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function (e) {
            (e = e || t.jQuery) && (a = e, a.fn.imagesLoaded = function (t, e) {
                return new r(this, t, e).jqDeferred.promise(a(this))
            })
        }, r.makeJQueryPlugin(), r
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), n.d(e, "Utils", function () {
        return o
    });
    var i = n(1);
    n.d(e, "Api", function () {
        return i.a
    }), n.d(e, "extendApi", function () {
        return i.n
    }), n.d(e, "instances", function () {
        return i.u
    }), n.d(e, "applyEvents", function () {
        return i.c
    }), n.d(e, "boot", function () {
        return i.f
    }), n.d(e, "create", function () {
        return i.h
    }), n.d(e, "createOrUpdate", function () {
        return i.i
    }), n.d(e, "destroy", function () {
        return i.k
    }), n.d(e, "namespace", function () {
        return i.w
    }), n.d(e, "eventNames", function () {
        return i.l
    }), n.d(e, "callbackNames", function () {
        return i.g
    }), n.d(e, "eventsToPrevent", function () {
        return i.m
    }), n.d(e, "defaults", function () {
        return i.j
    }), n.d(e, "getInputState", function () {
        return i.p
    }), n.d(e, "updateInput", function () {
        return i.D
    }), n.d(e, "resetInput", function () {
        return i.z
    }), n.d(e, "applyLayout", function () {
        return i.d
    }), n.d(e, "getPlaybackState", function () {
        return i.q
    }), n.d(e, "updateFrame", function () {
        return i.C
    }), n.d(e, "stopAnimation", function () {
        return i.B
    }), n.d(e, "applyAnimation", function () {
        return i.b
    }), n.d(e, "startAnimation", function () {
        return i.A
    }), n.d(e, "registerPlugin", function () {
        return i.y
    }), n.d(e, "registerModule", function () {
        return i.x
    }), n.d(e, "getPlugin", function () {
        return i.r
    }), n.d(e, "applyPlugins", function () {
        return i.e
    }), n.d(e, "getState", function () {
        return i.t
    }), n.d(e, "getPluginState", function () {
        return i.s
    }), n.d(e, "is", function () {
        return i.v
    }), n.d(e, "flag", function () {
        return i.o
    });
    var r = n(2);
    n.d(e, "sourceArray", function () {
        return r.t
    });
    var o = (n(72), n(75), {
        $: r.a,
        bind: r.b,
        clamp: r.c,
        detectSubsampling: r.d,
        error: r.e,
        findSpecs: r.f,
        getComputedSize: r.g,
        getCursorPosition: r.h,
        getInnerLayout: r.i,
        getInnerSize: r.j,
        getOuterSize: r.k,
        isFunction: r.l,
        log: r.m,
        measure: r.n,
        naturalSize: r.o,
        noop: r.p,
        pixelRatio: r.q,
        preload: r.r,
        prevent: r.s,
        sourceArray: r.t,
        toArray: r.u,
        unbind: r.v,
        warn: r.w,
        wrap: r.x
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return i
    });
    var i = window.jQuery || window.$
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e = t.touches, n = t;
        return void 0 === t.touches && void 0 !== t.originalEvent && (e = t.originalEvent.touches), void 0 !== e && e.length > 0 && (n = e[0]), {
            x: n.clientX || 0,
            y: n.clientY || 0
        }
    }

    e.a = i
}, function (t, e, n) {
    "use strict";

    function i(t) {
        var e = Math.floor(t.width || t.frameWidth || t.target.innerWidth()),
            n = Math.floor(t.height || t.frameHeight || t.target.innerHeight());
        return {aspect: e / n, height: n, width: e}
    }

    function r(t) {
        var e = i(t);
        if ("function" != typeof window.getComputedStyle) return e;
        var n = window.getComputedStyle(t.target[0]);
        return n.width ? (e.width = Math.floor(Number(n.width.replace("px", ""))), e.height = Math.floor(e.width / e.aspect), e) : e
    }

    function o(t) {
        var e = Math.floor(t.frameWidth || t.width || t.target.innerWidth()),
            n = Math.floor(t.frameHeight || t.height || t.target.innerHeight());
        return {aspect: e / n, height: n, width: e}
    }

    function s(t, e, n) {
        var i = "fit" === t, r = "fill" === t, o = "stretch" === t, s = {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            overflow: "hidden"
        };
        if (!t || o) return s;
        var a = e.aspect >= n.aspect, l = e.width, c = e.height;
        return (i && a || r && !a) && (l = n.width, c = n.width / e.aspect), (r && a || i && !a) && (c = n.height, l = n.height * e.aspect), l = Math.floor(l), c = Math.floor(c), s.width = l, s.height = c, s.top = Math.floor((n.height - c) / 2), s.left = Math.floor((n.width - l) / 2), s.right = s.left, s.bottom = s.top, s
    }

    e.d = i, e.a = r, e.c = o, e.b = s
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        return 1 === t.length ? [r(t[0], e)] : e.framesX && e.framesY ? s(t, e) : o(t, e)
    }

    function r(t, e) {
        var n = {id: 0, sprites: []};
        a(t, e, n);
        for (var i = e.frames, r = Number(e.framesX) || i, o = Math.ceil(i / r), s = Math.floor(n.width / r), l = Math.floor(n.height / o), c = n.isSubsampled ? 2 : 1, u = 0; u < i; u++) {
            var d = u % r * s, f = Math.floor(u / r) * l;
            n.sprites.push({
                id: u,
                x: d,
                y: f,
                width: s,
                height: l,
                sampledX: d / c,
                sampledY: f / c,
                sampledWidth: s / c,
                sampledHeight: l / c
            })
        }
        return n
    }

    function o(t, e) {
        for (var n = [], i = 0; i < t.length; i++) {
            var o = r(t[i], {frames: 1, framesX: 1, detectSubsampling: e.detectSubsampling});
            o.id = i, n.push(o)
        }
        return n
    }

    function s(t, e) {
        for (var n = [], i = 0; i < t.length; i++) {
            var o = r(t[i], {
                frames: void 0,
                framesX: e.framesX,
                framesY: e.framesY,
                detectSubsampling: e.detectSubsampling
            });
            o.id = i, n.push(o)
        }
        return n
    }

    function a(t, e, n) {
        var i = Object(u.a)(t);
        return n.isSubsampled = e.detectSubsampling && Object(c.a)(t, i.width, i.height), n.width = i.width, n.height = i.height, n.sampledWidth = i.width / (n.isSubsampled ? 2 : 1), n.sampledHeight = i.height / (n.isSubsampled ? 2 : 1), n
    }

    function l(t, e, n, i) {
        for (var r = i * e + n, o = 0, s = null, a = null; ;) {
            if (!(a = t[o])) break;
            if (!(r >= a.sprites.length)) {
                s = a.sprites[r];
                break
            }
            r -= a.sprites.length, o++
        }
        return {sprite: s, sheet: a}
    }

    e.b = i, e.a = l;
    var c = n(21), u = n(22)
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return n
    }

    function r() {
    }

    function o(t) {
        var e, n = t.source;
        e = "string" == typeof n ? [n] : n;
        for (var o = [], s = t.preloadCount || e.length, a = t.initiated || r, l = t.progress || r, c = t.complete || r, u = 0, d = !1, f = !1, h = function () {
            u += 1, l({
                index: i(this, o),
                loaded: u,
                total: e.length,
                percent: Math.round(u / e.length * 100)
            }), (f = f || this === o[0]) && !d && u >= s && (d = !0, c(o))
        }, p = 0, g = e; p < g.length; p++) {
            var v = g[p], m = new Image;
            o.push(m), m.crossOrigin = t.crossOrigin, m.onload = m.onabort = m.onerror = h, m.src = v
        }
        a(o)
    }

    e.a = o
}, function (t, e, n) {
    "use strict";

    function i(t, e, n) {
        for (var i = String(t); i.length < e;) i = String(n) + i;
        return i
    }

    function r(t, e) {
        var n = e.digits || 2, r = e.lanePlacer || "{lane}", o = e.framePlacer || "{frame}", s = 0, a = 0;
        e.frame && (s = e.frame[0], a = e.frame[1]);
        var l = 0, c = 0;
        e.lane && (l = e.lane[0], c = e.lane[1]);
        for (var u = [], d = l; d <= c; d += 1) for (var f = s; f <= a; f += 1) u.push(t.replace(r, i(d, n, "0")).replace(o, i(f, n, "0")));
        return u
    }

    e.a = r
}, function (t, e, n) {
    "use strict";

    function i() {
    }

    function r(t) {
        return console && console[t] ? function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return console.log.apply(console, t)
        } : i
    }

    function o(t) {
        return Array.isArray(t) ? t : [t]
    }

    function s(t, e, n) {
        return t > n ? n : t < e ? e : t
    }

    function a(t, e, n, i) {
        for (; t > n;) t -= i;
        for (; t < e;) t += i;
        return t
    }

    function l(t) {
        return t.preventDefault(), !1
    }

    function c(t, e, n) {
        n && t.bind(e + "." + h.e, function (e) {
            n.apply(t, [e, t.spritespin("data")])
        })
    }

    function u(t) {
        t.unbind("." + h.e)
    }

    function d(t) {
        return "function" == typeof t
    }

    function f(t) {
        return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
    }

    e.f = i, n.d(e, "e", function () {
        return p
    }), n.d(e, "k", function () {
        return g
    }), n.d(e, "c", function () {
        return v
    }), e.i = o, e.b = s, e.l = a, e.h = l, e.a = c, e.j = u, e.d = d, e.g = f;
    var h = n(6), p = r("log"), g = r("warn"), v = r("error")
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return Object(a.c)(t, "input")
    }

    function r(t, e) {
        var n = Object(s.h)(t), r = i(e);
        r.oldX = r.currentX, r.oldY = r.currentY, r.currentX = n.x, r.currentY = n.y, void 0 !== r.oldX && void 0 !== r.oldY || (r.oldX = r.currentX, r.oldY = r.currentY), void 0 !== r.startX && void 0 !== r.startY || (r.startX = r.currentX, r.startY = r.currentY, r.clickframe = e.frame, r.clicklane = e.lane), r.dX = r.currentX - r.startX, r.dY = r.currentY - r.startY, r.ddX = r.currentX - r.oldX, r.ddY = r.currentY - r.oldY, r.ndX = r.dX / e.target.innerWidth(), r.ndY = r.dY / e.target.innerHeight(), r.nddX = r.ddX / e.target.innerWidth(), r.nddY = r.ddY / e.target.innerHeight()
    }

    function o(t) {
        var e = i(t);
        e.startX = e.startY = void 0, e.currentX = e.currentY = void 0, e.oldX = e.oldY = void 0, e.dX = e.dY = 0, e.ddX = e.ddY = 0, e.ndX = e.ndY = 0, e.nddX = e.nddY = 0
    }

    e.a = i, e.c = r, e.b = o;
    var s = n(2), a = n(11)
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        var n = Object(r.a)(this);
        if ("data" === t) return n.data(a.e);
        if ("api" === t) {
            var i = n.data(a.e);
            return i.api = i.api || new o.a(i), i.api
        }
        if ("destroy" === t) return n.each(function () {
            var t = n.data(a.e);
            t && Object(s.e)(t)
        });
        if (2 === arguments.length && "string" == typeof t && (l = {}, l[t] = e, t = l), "object" == typeof t) return Object(s.d)(r.a.extend(!0, {target: n}, t)).target;
        throw new Error("Invalid call to spritespin");
        var l
    }

    var r = n(2), o = n(19), s = n(20), a = n(6);
    r.a.fn[a.e] = i
}, function (t, e, n) {
    "use strict";
    n(73), n(74)
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    i.n({
        isPlaying: function () {
            return null != i.q(this.data).handler
        }, isLooping: function () {
            return this.data.loop
        }, toggleAnimation: function () {
            this.isPlaying() ? this.stopAnimation() : this.startAnimation()
        }, stopAnimation: function () {
            this.data.animate = !1, i.B(this.data)
        }, startAnimation: function () {
            this.data.animate = !0, i.b(this.data)
        }, loop: function (t) {
            return this.data.loop = t, i.b(this.data), this
        }, currentFrame: function () {
            return this.data.frame
        }, updateFrame: function (t) {
            return i.C(this.data, t), this
        }, skipFrames: function (t) {
            var e = this.data;
            return i.C(e, e.frame + (e.reverse ? -t : +t)), this
        }, nextFrame: function () {
            return this.skipFrames(1)
        }, prevFrame: function () {
            return this.skipFrames(-1)
        }, playTo: function (t, e) {
            var n = this.data;
            if (e = e || {}, e.force || n.frame !== t) {
                if (e.nearest) {
                    var r = t - n.frame, o = t > n.frame ? r - n.frames : r + n.frames,
                        s = Math.abs(r) < Math.abs(o) ? r : o;
                    n.reverse = s < 0
                }
                return n.animate = !0, n.loop = !1, n.stopFrame = t, i.b(n), this
            }
        }
    })
}, function (t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0, i = e; n < i.length; n++) {
            var r = i[n];
            if (t[r] || r in t) return r
        }
        return e[0]
    }

    function r() {
        Object(v.a)(document).unbind(y)
    }

    function o(t) {
        r(), Object(v.a)(document).bind(y, t)
    }

    function s() {
        Object(v.a)(window).unbind(w)
    }

    function a(t) {
        s(), Object(v.a)(window).bind(w, t)
    }

    function l(t) {
        t = t || document.documentElement, t[m.requestFullscreen]()
    }

    function c() {
        return document[m.exitFullscreen]()
    }

    function u() {
        return document[m.fullscreenEnabled]
    }

    function d() {
        return document[m.fullscreenElement]
    }

    function f() {
        return !!d()
    }

    function h(t, e) {
        f() ? this.apiRequestFullscreen(e) : this.exitFullscreen()
    }

    function p(t, e) {
        e = e || {};
        var n = t.width, i = t.height, c = t.source, u = t.sizeMode, d = t.responsive, h = function () {
            t.width = window.screen.width, t.height = window.screen.height, t.source = e.source || c, t.sizeMode = e.sizeMode || "fit", t.responsive = !1, Object(g.f)(t)
        }, p = function () {
            t.width = n, t.height = i, t.source = c, t.sizeMode = u, t.responsive = d, Object(g.f)(t)
        };
        o(function () {
            f() ? (h(), a(h)) : (r(), s(), p())
        }), l(t.target[0])
    }

    var g = n(1), v = n(2), m = {
        requestFullscreen: i(document.documentElement, ["requestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"]),
        exitFullscreen: i(document, ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"]),
        fullscreenElement: i(document, ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"]),
        fullscreenEnabled: i(document, ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"]),
        fullscreenchange: i(document, ["onfullscreenchange", "onwebkitfullscreenchange", "onmozfullscreenchange", "onMSFullscreenChange"]).replace(/^on/, ""),
        fullscreenerror: i(document, ["onfullscreenerror", "onwebkitfullscreenerror", "onmozfullscreenerror", "onMSFullscreenError"]).replace(/^on/, "")
    }, y = m.fullscreenchange + "." + g.w + "-fullscreen", w = "orientationchange." + g.w + "-fullscreen";
    Object(g.n)({
        fullscreenEnabled: u, fullscreenElement: d, exitFullscreen: c, toggleFullscreen: function (t) {
            h(this.data, t)
        }, requestFullscreen: function (t) {
            p(this.data, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87)
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t, e) {
            if (!e.loading && e.stage.is(":visible")) {
                i.D(t, e);
                var n, r, o = i.p(e), s = e.target, a = s.offset();
                "horizontal" === e.orientation ? (n = s.innerWidth() / 2, r = o.currentX - a.left) : (n = s.innerHeight() / 2, r = o.currentY - a.top), i.C(e, e.frame + (r > n ? 1 : -1))
            }
        }

        i.y("click", {name: "click", mouseup: t, touchend: t})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t) {
            return i.s(t, l)
        }

        function e(t) {
            return "number" == typeof t.orientation ? t.orientation * Math.PI / 180 : "horizontal" === t.orientation ? 0 : Math.PI / 2
        }

        function n(e, n) {
            var i = t(n), r = [200, 1500], o = n.touchScrollTimer || r;
            i.minTime = o[0] || r[0], i.maxTime = o[1] || r[1]
        }

        function r(e, n) {
            var r = t(n);
            if (!(n.loading || i.v(n, "dragging") || n.zoomPinFrame && !n.stage.is(":visible"))) {
                var o = (new Date).getTime();
                r.endAt && o - r.endAt > r.maxTime && (r.startAt = null, r.endAt = null), r.startAt && o - r.startAt > r.minTime && e.preventDefault(), r.startAt = o, r.wasPlaying = !!i.q(n).handler, r.frame = n.frame || 0, r.lane = n.lane || 0, i.o(n, "dragging", !0), i.D(e, n)
            }
        }

        function o(e, n) {
            i.v(n, "dragging") && (t(n).endAt = (new Date).getTime(), i.o(n, "dragging", !1), i.z(n), n.retainAnimate && t(n).wasPlaying && i.A(n))
        }

        function s(n, r) {
            var o = t(r), s = i.p(r);
            if (i.v(r, "dragging")) {
                i.D(n, r);
                var a = e(r), l = Math.sin(a), c = Math.cos(a), u = (s.nddX * c - s.nddY * l) * r.sense || 0,
                    d = (s.nddX * l + s.nddY * c) * (r.senseLane || r.sense) || 0;
                o.frame += r.frames * u, o.lane += r.lanes * d;
                r.frame, r.lane;
                i.C(r, Math.floor(o.frame), Math.floor(o.lane)), i.B(r)
            }
        }

        function a(t, e) {
            r(t, e), s(t, e)
        }

        var l = "drag";
        i.y("drag", {
            name: "drag",
            onInit: n,
            mousedown: r,
            mousemove: s,
            mouseup: o,
            documentmousemove: s,
            documentmouseup: o,
            touchstart: r,
            touchmove: s,
            touchend: o,
            touchcancel: o
        }), i.y("move", {
            name: "move",
            onInit: n,
            mousemove: a,
            mouseleave: o,
            touchstart: r,
            touchmove: s,
            touchend: o,
            touchcancel: o
        })
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t) {
            return i.s(t, l)
        }

        function e(e) {
            var n = t(e);
            n.frameTime = e.frameTime, n.animate = e.animate, n.reverse = e.reverse
        }

        function n(e) {
            var n = t(e);
            e.frameTime = n.frameTime, e.animate = n.animate, e.reverse = n.reverse
        }

        function r(t, n) {
            i.v(n, "loading") || i.v(n, "dragging") || !n.stage.is(":visible") || (e(n), i.D(t, n), i.o(n, "dragging", !0), n.animate = !0, i.b(n))
        }

        function o(t, e) {
            i.o(e, "dragging", !1), i.z(e), i.B(e), n(e), i.b(e)
        }

        function s(t, e) {
            if (i.v(e, "dragging")) {
                i.D(t, e);
                var n, r, o = i.p(e), s = e.target, a = s.offset();
                "horizontal" === e.orientation ? (n = s.innerWidth() / 2, r = (o.currentX - a.left - n) / n) : (n = e.height / 2, r = (o.currentY - a.top - n) / n), e.reverse = r < 0, r = r < 0 ? -r : r, e.frameTime = 80 * (1 - r) + 20, ("horizontal" === e.orientation && o.dX < o.dY || "vertical" === e.orientation && o.dX < o.dY) && t.preventDefault()
            }
        }

        function a(t, e) {
            e.animate = !0, i.b(e)
        }

        var l = "hold";
        i.y(l, {
            name: l,
            mousedown: r,
            mousemove: s,
            mouseup: o,
            mouseleave: o,
            touchstart: r,
            touchmove: s,
            touchend: o,
            touchcancel: o,
            onFrame: a
        })
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t) {
            return i.s(t, a)
        }

        function e(t, e, n) {
            return t[e] || n
        }

        function n(n, i) {
            var r = t(i);
            r.fling = e(i, "swipeFling", 10), r.snap = e(i, "swipeSnap", .5)
        }

        function r(t, e) {
            e.loading || i.v(e, "dragging") || (i.D(t, e), i.o(e, "dragging", !0))
        }

        function o(t, e) {
            if (i.v(e, "dragging")) {
                i.D(t, e);
                var n = e.frame, r = e.lane;
                i.C(e, n, r)
            }
        }

        function s(e, n) {
            if (i.v(n, "dragging")) {
                i.o(n, "dragging", !1);
                var r, o, s = t(n), a = i.p(n), l = n.frame, c = n.lane, u = s.snap, d = s.fling;
                "horizontal" === n.orientation ? (r = a.ndX, o = a.ddX) : (r = a.ndY, o = a.ddY), r >= u || o >= d ? l = n.frame - 1 : (r <= -u || o <= -d) && (l = n.frame + 1), i.z(n), i.C(n, l, c), i.B(n)
            }
        }

        var a = "swipe";
        i.y(a, {
            name: a,
            onLoad: n,
            mousedown: r,
            mousemove: o,
            mouseup: s,
            mouseleave: s,
            touchstart: r,
            touchmove: o,
            touchend: s,
            touchcancel: s
        })
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t, e) {
            if (!e.loading && e.stage.is(":visible")) {
                t.preventDefault();
                var n = t.originalEvent, r = 0 === n.deltaX ? 0 : n.deltaX > 0 ? 1 : -1,
                    o = 0 === n.deltaY ? 0 : n.deltaY > 0 ? 1 : -1;
                i.C(e, e.frame + o, e.lane + r)
            }
        }

        i.y("wheel", {name: "wheel", wheel: t})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(2);
    !function () {
        function t(t) {
            return i.s(t, l)
        }

        function e(e, n) {
            var i = t(n);
            i.stage || (i.stage = r.a(a), i.stage.appendTo(n.target)), i.stage.find(".spritespin-progress-label").text("0%").css({"text-align": "center"}), i.stage.find(".spritespin-progress-bar").css({width: "0%"}), i.stage.hide().fadeIn()
        }

        function n(e, n) {
            var i = t(n);
            i.stage.find(".spritespin-progress-label").text(n.progress.percent + "%").css({"text-align": "center"}), i.stage.find(".spritespin-progress-bar").css({width: n.progress.percent + "%"})
        }

        function o(e, n) {
            r.a(t(n).stage).fadeOut()
        }

        function s(e, n) {
            r.a(t(n).stage).remove()
        }

        var a = "\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n",
            l = "progress";
        i.y(l, {name: l, onInit: e, onProgress: n, onLoad: o, onDestroy: s})
    }()
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var e = n(1), i = n(2);
        !function () {
            function n(e, n) {
                n.stage.find(".spritespin-frames").detach(), "image" === n.renderer && t(n.images).addClass("spritespin-frames").appendTo(n.stage)
            }

            function r(e, n) {
                var r = i.f(n.metrics, n.frames, n.frame, n.lane), o = r.sheet, s = r.sprite;
                if (o && s) {
                    var a = n.source[o.id], l = n.images[o.id];
                    if ("canvas" === n.renderer) {
                        n.canvas.show();
                        var c = n.canvas[0].width / n.canvasRatio, u = n.canvas[0].height / n.canvasRatio;
                        return n.context.clearRect(0, 0, c, u), void n.context.drawImage(l, s.sampledX, s.sampledY, s.sampledWidth, s.sampledHeight, 0, 0, c, u)
                    }
                    var d = n.stage.innerWidth() / s.sampledWidth, f = n.stage.innerHeight() / s.sampledHeight,
                        h = Math.floor(-s.sampledY * f), p = Math.floor(-s.sampledX * d),
                        g = Math.floor(o.sampledWidth * d), v = Math.floor(o.sampledHeight * f);
                    if ("background" === n.renderer) return void n.stage.css({
                        "background-image": "url('" + a + "')",
                        "background-position": p + "px " + h + "px",
                        "background-repeat": "no-repeat",
                        "-webkit-background-size": g + "px " + v + "px",
                        "-moz-background-size": g + "px " + v + "px",
                        "-o-background-size": g + "px " + v + "px",
                        "background-size": g + "px " + v + "px"
                    });
                    t(n.images).hide(), t(l).show().css({
                        position: "absolute",
                        top: h,
                        left: p,
                        "max-width": "initial",
                        width: g,
                        height: v
                    })
                }
            }

            Math.floor;
            e.y("360", {name: "360", onLoad: n, onDraw: r})
        }()
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(2);
    !function () {
        function t(t) {
            return i.s(t, p)
        }

        function e(t, e, n) {
            return t[e] || n
        }

        function n(n, i) {
            var o = t(i);
            o.canvas = o.canvas || r.a("<canvas class='blur-layer'></canvas>"), o.context = o.context || o.canvas[0].getContext("2d"), o.steps = o.steps || [], o.fadeTime = Math.max(e(i, "blurFadeTime", 200), 1), o.frameTime = Math.max(e(i, "blurFrameTime", i.frameTime), 16), o.trackTime = null, o.cssBlur = !!e(i, "blurCss", !1);
            var s = r.j(i), a = i.responsive ? r.g(i) : r.k(i), l = r.i(i.sizeMode, s, a);
            o.canvas[0].width = i.width * i.canvasRatio, o.canvas[0].height = i.height * i.canvasRatio, o.canvas.css(l).show(), o.context.scale(i.canvasRatio, i.canvasRatio), i.target.append(o.canvas)
        }

        function o(e, n) {
            var i = t(n);
            s(n), null == i.timeout && l(n)
        }

        function s(e) {
            var n = t(e), r = i.q(e), o = Math.abs(e.frame - r.lastFrame);
            o = o >= e.frames / 2 ? e.frames - o : o, n.steps.unshift({
                frame: e.frame,
                lane: e.lane,
                live: 1,
                step: n.frameTime / n.fadeTime,
                d: o,
                alpha: 0
            })
        }

        function a(t) {
            g.length = 0;
            for (var e = 0; e < t.length; e += 1) t[e].alpha <= 0 && g.push(e);
            for (var n = 0, i = g; n < i.length; n++) {
                var r = i[n];
                t.splice(r, 1)
            }
        }

        function l(e) {
            var n = t(e);
            n.timeout = window.setTimeout(function () {
                h(e)
            }, n.frameTime)
        }

        function c(e) {
            var n = t(e);
            window.clearTimeout(n.timeout), n.timeout = null
        }

        function u(t, e) {
            var n = Math.min(Math.max(e / 2 - 4, 0), 2.5), i = "blur(" + n + "px)";
            t.css({"-webkit-filter": i, filter: i})
        }

        function d(t, e) {
            e.canvas.show();
            e.canvas[0].width, t.canvasRatio, e.canvas[0].height, t.canvasRatio
        }

        function f(t, e, n) {
            if (!(n.alpha <= 0)) {
                var i = r.f(t.metrics, t.frames, n.frame, n.lane), o = i.sheet, s = i.sprite;
                if (o && s) {
                    var a = (t.source[o.id], t.images[o.id]);
                    if (!1 !== a.complete) {
                        e.canvas.show();
                        var l = e.canvas[0].width / t.canvasRatio, c = e.canvas[0].height / t.canvasRatio;
                        e.context.globalAlpha = n.alpha, e.context.drawImage(a, s.sampledX, s.sampledY, s.sampledWidth, s.sampledHeight, 0, 0, l, c)
                    }
                }
            }
        }

        function h(e) {
            var n = t(e);
            if (c(e), n.context) {
                var i = 0;
                d(e, n), n.context.clearRect(0, 0, e.width, e.height);
                for (var r = 0, o = n.steps; r < o.length; r++) {
                    var s = o[r];
                    s.live = Math.max(s.live - s.step, 0), s.alpha = Math.max(s.live - .25, 0), f(e, n, s), i += s.alpha + s.d
                }
                n.cssBlur && u(n.canvas, i), a(n.steps), n.steps.length && l(e)
            }
        }

        var p = "blur", g = [];
        i.y(p, {name: p, onLoad: n, onFrameChanged: o})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t) {
            return i.s(t, f)
        }

        function e(t, e, n) {
            return t[e] || n
        }

        function n(n, i) {
            var r = t(i);
            r.maxSamples = u(e(i, "easeMaxSamples", 5), 0), r.damping = u(d(e(i, "easeDamping", .9), .999), 0), r.abortTime = u(e(i, "easeAbortTime", 250), 16), r.updateTime = u(e(i, "easeUpdateTime", i.frameTime), 16), r.samples = [], r.steps = []
        }

        function r(t, e) {
            i.v(e, "dragging") && (a(e), s(e))
        }

        function o(e, n) {
            for (var i, r = t(n), o = r.samples, s = 0, c = 0, u = 0, d = 0, f = o; d < f.length; d++) {
                var h = f[d];
                if (i) {
                    var p = h.time - i.time;
                    if (p > r.abortTime) return s = c = u = 0, a(n);
                    c += h.frame - i.frame, s += h.lane - i.lane, u += p, i = h
                } else i = h
            }
            o.length = 0, u && (r.lane = n.lane, r.lanes = 0, r.laneStep = s / u * r.updateTime, r.frame = n.frame, r.frames = 0, r.frameStep = c / u * r.updateTime, l(n))
        }

        function s(e) {
            var n = t(e);
            for (n.samples.push({
                time: (new Date).getTime(),
                frame: e.frame,
                lane: e.lane
            }); n.samples.length > n.maxSamples;) n.samples.shift()
        }

        function a(e) {
            var n = t(e);
            null != n.handler && (window.clearTimeout(n.handler), n.handler = null)
        }

        function l(e) {
            var n = t(e);
            n.handler = window.setTimeout(function () {
                c(e)
            }, n.updateTime)
        }

        function c(e) {
            var n = t(e);
            n.lanes += n.laneStep, n.frames += n.frameStep, n.laneStep *= n.damping, n.frameStep *= n.damping;
            var r = Math.floor(n.frame + n.frames), o = Math.floor(n.lane + n.lanes);
            i.C(e, r, o), i.v(e, "dragging") ? a(e) : Math.abs(n.frameStep) > .005 || Math.abs(n.laneStep) > .005 ? l(e) : a(e)
        }

        var u = Math.max, d = Math.min, f = "ease";
        i.y(f, {name: f, onLoad: n, mousemove: r, mouseup: o, mouseleave: o, touchmove: r, touchend: o, touchcancel: o})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(2);
    !function () {
        function t(t) {
            return i.s(t, s)
        }

        function e(t, e, n) {
            return t[e] || n
        }

        function n(n, i) {
            var o = t(i);
            o.images = [], o.offsets = [], o.frame = i.frame, o.speed = e(i, "gallerySpeed", 500), o.opacity = e(i, "galleryOpacity", .25), o.stage = e(i, "galleryStage", r.a("<div></div>")), o.stage.empty().addClass("gallery-stage").prependTo(i.stage);
            for (var s = 0, a = 0, l = i.images; a < l.length; a++) {
                var c = l[a], u = r.o(c), d = i.height / u.height, f = r.a(c);
                o.stage.append(f), o.images.push(f), o.offsets.push(-s + (i.width - c.width * d) / 2), s += i.width, f.css({
                    "max-width": "initial",
                    opacity: o.opacity,
                    width: i.width,
                    height: i.height
                })
            }
            var h = r.j(i), p = i.responsive ? r.g(i) : r.k(i), g = r.i(i.sizeMode, h, p);
            o.stage.css(g).css({
                width: s,
                left: o.offsets[o.frame]
            }), o.images[o.frame].animate({opacity: 1}, {duration: o.speed})
        }

        function o(e, n) {
            var r = t(n), o = i.p(n), s = i.v(n, "dragging");
            r.frame === n.frame || s ? (s || r.dX !== o.dX) && (r.dX = o.dX, r.ddX = o.ddX, r.stage.stop(!0, !0).css({left: r.offsets[r.frame] + r.dX})) : (r.stage.stop(!0, !1).animate({left: r.offsets[n.frame]}, {duration: r.speed}), r.images[r.frame].animate({opacity: r.opacity}, {duration: r.speed}), r.frame = n.frame, r.images[r.frame].animate({opacity: 1}, {duration: r.speed}), r.stage.animate({left: r.offsets[r.frame]}))
        }

        var s = "gallery";
        i.y(s, {name: s, onLoad: n, onDraw: o})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    !function () {
        function t(t) {
            return i.s(t, r)
        }

        function e(e, n) {
            var i = t(n), r = n.metrics[0];
            if (r) {
                "horizontal" === n.orientation ? (i.scale = n.target.innerHeight() / r.sampledHeight, n.frames = r.sampledWidth) : (i.scale = n.target.innerWidth() / r.sampledWidth, n.frames = r.sampledHeight);
                var o = Math.floor(r.sampledWidth * i.scale), s = Math.floor(r.sampledHeight * i.scale);
                n.stage.css({
                    "background-image": "url(" + n.source[r.id] + ")",
                    "background-repeat": "repeat-both",
                    "-webkit-background-size": o + "px " + s + "px",
                    "-moz-background-size": o + "px " + s + "px",
                    "-o-background-size": o + "px " + s + "px",
                    "background-size": o + "px " + s + "px"
                })
            }
        }

        function n(e, n) {
            var i = t(n), r = "horizontal" === n.orientation ? 1 : 0, o = r ? 0 : 1, s = n.frame % n.frames,
                a = Math.round(r * s * i.scale), l = Math.round(o * s * i.scale);
            n.stage.css({"background-position": a + "px " + l + "px"})
        }

        var r = "panorama";
        i.y(r, {name: r, onLoad: e, onDraw: n})
    }()
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(2);
    !function () {
        function t(t) {
            return i.s(t, p)
        }

        function e(t, e, n) {
            return e in t ? t[e] : n
        }

        function n(n, i) {
            var o = t(i);
            o.source = e(i, "zoomSource", i.source), o.useWheel = e(i, "zoomUseWheel", !1), o.useClick = e(i, "zoomUseClick", !0), o.pinFrame = e(i, "zoomPinFrame", !0), o.doubleClickTime = e(i, "zoomDoubleClickTime", 500), o.stage = o.stage || r.a("<div class='zoom-stage'></div>"), o.stage.css({
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute"
            }).appendTo(i.target).hide()
        }

        function o(e, n) {
            var i = t(n);
            i.stage && (i.stage.remove(), delete i.stage)
        }

        function s(e, n) {
            var o = t(n);
            if (o.stage.is(":visible")) {
                e.preventDefault(), o.pinFrame && i.o(n, "dragging", !1);
                var s = r.h(e), a = s.x / n.width, l = s.y / n.height;
                null == o.oldX && (o.oldX = a, o.oldY = l), null == o.currentX && (o.currentX = a, o.currentY = l);
                var c = a - o.oldX, u = l - o.oldY;
                o.oldX = a, o.oldY = l, e.type.match(/touch/) && (c = -c, u = -u), o.currentX = r.c(o.currentX + c, 0, 1), o.currentY = r.c(o.currentY + u, 0, 1), i.C(n, n.frame, n.lane)
            }
        }

        function a(e, n) {
            var i = t(n);
            if (i.useClick) {
                e.preventDefault();
                var r = (new Date).getTime();
                if (!i.clickTime) return void (i.clickTime = r);
                if (r - i.clickTime > i.doubleClickTime) return void (i.clickTime = r);
                i.clickTime = void 0, u(n) && s(e, n)
            }
        }

        function l(e, n) {
            t(n).stage.is(":visible") && s(e, n)
        }

        function c(e, n) {
            var i = t(n), o = n.lane * n.frames + n.frame, s = i.source[o],
                a = r.f(n.metrics, n.frames, n.frame, n.lane), l = i.currentX, c = i.currentY;
            if (null == l && (l = i.currentX = .5, c = i.currentY = .5), s) l = Math.floor(100 * l), c = Math.floor(100 * c), i.stage.css({
                "background-repeat": "no-repeat",
                "background-image": "url('" + s + "')",
                "background-position": l + "% " + c + "%"
            }); else if (a.sheet && a.sprite) {
                var u = a.sprite, d = a.sheet, f = n.source[d.id],
                    h = -Math.floor(u.sampledX + l * (u.sampledWidth - n.width)),
                    p = -Math.floor(u.sampledY + c * (u.sampledHeight - n.height)), g = d.sampledWidth,
                    v = d.sampledHeight;
                i.stage.css({
                    "background-image": "url('" + f + "')",
                    "background-position": h + "px " + p + "px",
                    "background-repeat": "no-repeat",
                    "-webkit-background-size": g + "px " + v + "px",
                    "-moz-background-size": g + "px " + v + "px",
                    "-o-background-size": g + "px " + v + "px",
                    "background-size": g + "px " + v + "px"
                })
            }
        }

        function u(e) {
            var n = t(e);
            if (!n.stage) throw new Error("zoom module is not initialized or is not available.");
            return n.stage.is(":visible") ? (d(e), !1) : (f(e), !0)
        }

        function d(e) {
            t(e).stage.fadeOut(), e.stage.fadeIn()
        }

        function f(e) {
            t(e).stage.fadeIn(), e.stage.fadeOut()
        }

        function h(e, n) {
            var i = t(n);
            if (!n.loading && i.useWheel) {
                var r = e.originalEvent, o = 0 === r.deltaY ? 0 : r.deltaY > 0 ? 1 : -1;
                "number" == typeof i.useWheel && (o *= i.useWheel), i.stage.is(":visible") && o > 0 && (e.preventDefault(), d(n)), !i.stage.is(":visible") && o < 0 && (e.preventDefault(), f(n))
            }
        }

        var p = "zoom";
        i.y(p, {
            name: p,
            mousedown: a,
            touchstart: a,
            mousemove: l,
            touchmove: l,
            wheel: h,
            onInit: n,
            onDestroy: o,
            onDraw: c
        }), i.n({
            toggleZoom: function () {
                u(this.data)
            }
        })
    }()
}, function (t, e, n) {
    var i, r, o;
    !function (s) {
        r = [n(0)], i = s, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(function (e) {
        !function (i) {
            var r = n(89), o = void 0 !== t && t.exports,
                s = "https:" == document.location.protocol ? "https:" : "http:";
            r || (o ? n(28)(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + s + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), function () {
                var t, n = "mCustomScrollbar", i = {
                        setTop: 0,
                        setLeft: 0,
                        axis: "y",
                        scrollbarPosition: "inside",
                        scrollInertia: 950,
                        autoDraggerLength: !0,
                        alwaysShowScrollbar: 0,
                        snapOffset: 0,
                        mouseWheel: {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            deltaFactor: "auto",
                            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                        },
                        scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
                        keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
                        contentTouchScroll: 25,
                        documentTouchScroll: !0,
                        advanced: {
                            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                            updateOnContentResize: !0,
                            updateOnImageLoad: "auto",
                            autoUpdateTimeout: 60
                        },
                        theme: "light",
                        callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
                    }, r = 0, o = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, a = !1,
                    l = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                    c = {
                        init: function (t) {
                            var t = e.extend(!0, {}, i, t), n = u.call(this);
                            if (t.live) {
                                var s = t.liveSelector || this.selector || ".mCustomScrollbar", a = e(s);
                                if ("off" === t.live) return void f(s);
                                o[s] = setTimeout(function () {
                                    a.mCustomScrollbar(t), "once" === t.live && a.length && f(s)
                                }, 500)
                            } else f(s);
                            return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : h(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                preventDefault: !1,
                                deltaFactor: "auto",
                                normalizeDelta: !1,
                                invert: !1
                            }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = p(t.scrollButtons.scrollType), d(t), e(n).each(function () {
                                var n = e(this);
                                if (!n.data("mCS")) {
                                    n.data("mCS", {
                                        idx: ++r,
                                        opt: t,
                                        scrollRatio: {y: null, x: null},
                                        overflowed: null,
                                        contentReset: {y: null, x: null},
                                        bindEvents: !1,
                                        tweenRunning: !1,
                                        sequential: {},
                                        langDir: n.css("direction"),
                                        cbOffsets: null,
                                        trigger: null,
                                        poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
                                    });
                                    var i = n.data("mCS"), o = i.opt, s = n.data("mcs-axis"),
                                        a = n.data("mcs-scrollbar-position"), u = n.data("mcs-theme");
                                    s && (o.axis = s), a && (o.scrollbarPosition = a), u && (o.theme = u, d(o)), g.call(this), i && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), e("#mCSB_" + i.idx + "_container img:not(." + l[2] + ")").addClass(l[2]), c.update.call(null, n)
                                }
                            })
                        }, update: function (t, n) {
                            var i = t || u.call(this);
                            return e(i).each(function () {
                                var t = e(this);
                                if (t.data("mCS")) {
                                    var i = t.data("mCS"), r = i.opt, o = e("#mCSB_" + i.idx + "_container"),
                                        s = e("#mCSB_" + i.idx),
                                        a = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                                    if (!o.length) return;
                                    i.tweenRunning && Y(t), n && i && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(l[3]) && t.removeClass(l[3]), t.hasClass(l[4]) && t.removeClass(l[4]), s.css("max-height", "none"), s.height() !== t.height() && s.css("max-height", t.height()), m.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || o.css("width", v(o)), i.overflowed = S.call(this), T.call(this), r.autoDraggerLength && w.call(this), b.call(this), C.call(this);
                                    var c = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                                    "x" !== r.axis && (i.overflowed[0] ? a[0].height() > a[0].parent().height() ? _.call(this) : (U(t, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), i.contentReset.y = null) : (_.call(this), "y" === r.axis ? k.call(this) : "yx" === r.axis && i.overflowed[1] && U(t, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), "y" !== r.axis && (i.overflowed[1] ? a[1].width() > a[1].parent().width() ? _.call(this) : (U(t, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }), i.contentReset.x = null) : (_.call(this), "x" === r.axis ? k.call(this) : "yx" === r.axis && i.overflowed[0] && U(t, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), n && i && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), q.call(this)
                                }
                            })
                        }, scrollTo: function (t, n) {
                            if (void 0 !== t && null != t) {
                                var i = u.call(this);
                                return e(i).each(function () {
                                    var i = e(this);
                                    if (i.data("mCS")) {
                                        var r = i.data("mCS"), o = r.opt, s = {
                                                trigger: "external",
                                                scrollInertia: o.scrollInertia,
                                                scrollEasing: "mcsEaseInOut",
                                                moveDragger: !1,
                                                timeout: 60,
                                                callbacks: !0,
                                                onStart: !0,
                                                onUpdate: !0,
                                                onComplete: !0
                                            }, a = e.extend(!0, {}, s, n), l = H.call(this, t),
                                            c = a.scrollInertia > 0 && a.scrollInertia < 17 ? 17 : a.scrollInertia;
                                        l[0] = W.call(this, l[0], "y"), l[1] = W.call(this, l[1], "x"), a.moveDragger && (l[0] *= r.scrollRatio.y, l[1] *= r.scrollRatio.x), a.dur = nt() ? 0 : c, setTimeout(function () {
                                            null !== l[0] && void 0 !== l[0] && "x" !== o.axis && r.overflowed[0] && (a.dir = "y", a.overwrite = "all", U(i, l[0].toString(), a)), null !== l[1] && void 0 !== l[1] && "y" !== o.axis && r.overflowed[1] && (a.dir = "x", a.overwrite = "none", U(i, l[1].toString(), a))
                                        }, a.timeout)
                                    }
                                })
                            }
                        }, stop: function () {
                            var t = u.call(this);
                            return e(t).each(function () {
                                var t = e(this);
                                t.data("mCS") && Y(t)
                            })
                        }, disable: function (t) {
                            var n = u.call(this);
                            return e(n).each(function () {
                                var n = e(this);
                                if (n.data("mCS")) {
                                    n.data("mCS");
                                    q.call(this, "remove"), k.call(this), t && _.call(this), T.call(this, !0), n.addClass(l[3])
                                }
                            })
                        }, destroy: function () {
                            var t = u.call(this);
                            return e(t).each(function () {
                                var i = e(this);
                                if (i.data("mCS")) {
                                    var r = i.data("mCS"), o = r.opt, s = e("#mCSB_" + r.idx),
                                        a = e("#mCSB_" + r.idx + "_container"), c = e(".mCSB_" + r.idx + "_scrollbar");
                                    o.live && f(o.liveSelector || e(t).selector), q.call(this, "remove"), k.call(this), _.call(this), i.removeData("mCS"), Z(this, "mcs"), c.remove(), a.find("img." + l[2]).removeClass(l[2]), s.replaceWith(a.contents()), i.removeClass(n + " _mCS_" + r.idx + " " + l[6] + " " + l[7] + " " + l[5] + " " + l[3]).addClass(l[4])
                                }
                            })
                        }
                    }, u = function () {
                        return "object" != typeof e(this) || e(this).length < 1 ? ".mCustomScrollbar" : this
                    }, d = function (t) {
                        var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                            i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                            r = ["minimal", "minimal-dark"], o = ["minimal", "minimal-dark"],
                            s = ["minimal", "minimal-dark"];
                        t.autoDraggerLength = !(e.inArray(t.theme, n) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, i) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, r) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, o) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, s) > -1 ? "outside" : t.scrollbarPosition
                    }, f = function (t) {
                        o[t] && (clearTimeout(o[t]), Z(o, t))
                    }, h = function (t) {
                        return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                    }, p = function (t) {
                        return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                    }, g = function () {
                        var t = e(this), i = t.data("mCS"), r = i.opt,
                            o = r.autoExpandScrollbar ? " " + l[1] + "_expand" : "",
                            s = ["<div id='mCSB_" + i.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + o + "'><div class='" + l[12] + "'><div id='mCSB_" + i.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + i.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + o + "'><div class='" + l[12] + "'><div id='mCSB_" + i.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                            a = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                            c = "yx" === r.axis ? s[0] + s[1] : "x" === r.axis ? s[1] : s[0],
                            u = "yx" === r.axis ? "<div id='mCSB_" + i.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                            d = r.autoHideScrollbar ? " " + l[6] : "",
                            f = "x" !== r.axis && "rtl" === i.langDir ? " " + l[7] : "";
                        r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === i.langDir ? "989999px" : r.setLeft, t.addClass(n + " _mCS_" + i.idx + d + f).wrapInner("<div id='mCSB_" + i.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + a + "'><div id='mCSB_" + i.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + i.langDir + "' /></div>");
                        var h = e("#mCSB_" + i.idx), p = e("#mCSB_" + i.idx + "_container");
                        "y" === r.axis || r.advanced.autoExpandHorizontalScroll || p.css("width", v(p)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), h.addClass("mCSB_outside").after(c)) : (h.addClass("mCSB_inside").append(c), p.wrap(u)), y.call(this);
                        var g = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                    }, v = function (t) {
                        var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                            return e(this).outerWidth(!0)
                        }).get())], i = t.parent().width();
                        return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
                    }, m = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = e("#mCSB_" + n.idx + "_container");
                        if (i.advanced.autoExpandHorizontalScroll && "y" !== i.axis) {
                            r.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
                            var o = Math.ceil(r[0].scrollWidth);
                            3 === i.advanced.autoExpandHorizontalScroll || 2 !== i.advanced.autoExpandHorizontalScroll && o > r.parent().width() ? r.css({
                                width: o,
                                "min-width": "100%",
                                "overflow-x": "inherit"
                            }) : r.css({
                                "overflow-x": "inherit",
                                position: "absolute"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                                "min-width": "100%",
                                position: "relative"
                            }).unwrap()
                        }
                    }, y = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = e(".mCSB_" + n.idx + "_scrollbar:first"),
                            o = tt(i.scrollButtons.tabindex) ? "tabindex='" + i.scrollButtons.tabindex + "'" : "",
                            s = ["<a href='#' class='" + l[13] + "' " + o + " />", "<a href='#' class='" + l[14] + "' " + o + " />", "<a href='#' class='" + l[15] + "' " + o + " />", "<a href='#' class='" + l[16] + "' " + o + " />"],
                            a = ["x" === i.axis ? s[2] : s[0], "x" === i.axis ? s[3] : s[1], s[2], s[3]];
                        i.scrollButtons.enable && r.prepend(a[0]).append(a[1]).next(".mCSB_scrollTools").prepend(a[2]).append(a[3])
                    }, w = function () {
                        var t = e(this), n = t.data("mCS"), i = e("#mCSB_" + n.idx), r = e("#mCSB_" + n.idx + "_container"),
                            o = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                            a = [i.height() / r.outerHeight(!1), i.width() / r.outerWidth(!1)],
                            l = [parseInt(o[0].css("min-height")), Math.round(a[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(a[1] * o[1].parent().width())],
                            c = s && l[1] < l[0] ? l[0] : l[1], u = s && l[3] < l[2] ? l[2] : l[3];
                        o[0].css({
                            height: c,
                            "max-height": o[0].parent().height() - 10
                        }).find(".mCSB_dragger_bar").css({"line-height": l[0] + "px"}), o[1].css({
                            width: u,
                            "max-width": o[1].parent().width() - 10
                        })
                    }, b = function () {
                        var t = e(this), n = t.data("mCS"), i = e("#mCSB_" + n.idx), r = e("#mCSB_" + n.idx + "_container"),
                            o = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                            s = [r.outerHeight(!1) - i.height(), r.outerWidth(!1) - i.width()],
                            a = [s[0] / (o[0].parent().height() - o[0].height()), s[1] / (o[1].parent().width() - o[1].width())];
                        n.scrollRatio = {y: a[0], x: a[1]}
                    }, x = function (t, e, n) {
                        var i = n ? l[0] + "_expanded" : "", r = t.closest(".mCSB_scrollTools");
                        "active" === e ? (t.toggleClass(l[0] + " " + i), r.toggleClass(l[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(l[0]), r.removeClass(l[1])) : (t.addClass(l[0]), r.addClass(l[1])))
                    }, S = function () {
                        var t = e(this), n = t.data("mCS"), i = e("#mCSB_" + n.idx), r = e("#mCSB_" + n.idx + "_container"),
                            o = null == n.overflowed ? r.height() : r.outerHeight(!1),
                            s = null == n.overflowed ? r.width() : r.outerWidth(!1), a = r[0].scrollHeight,
                            l = r[0].scrollWidth;
                        return a > o && (o = a), l > s && (s = l), [o > i.height(), s > i.width()]
                    }, _ = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = e("#mCSB_" + n.idx),
                            o = e("#mCSB_" + n.idx + "_container"),
                            s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (Y(t), ("x" !== i.axis && !n.overflowed[0] || "y" === i.axis && n.overflowed[0]) && (s[0].add(o).css("top", 0), U(t, "_resetY")), "y" !== i.axis && !n.overflowed[1] || "x" === i.axis && n.overflowed[1]) {
                            var a = dx = 0;
                            "rtl" === n.langDir && (a = r.width() - o.outerWidth(!1), dx = Math.abs(a / n.scrollRatio.x)), o.css("left", a), s[1].css("left", dx), U(t, "_resetX")
                        }
                    }, C = function () {
                        function t() {
                            o = setTimeout(function () {
                                e.event.special.mousewheel ? (clearTimeout(o), M.call(n[0])) : t()
                            }, 100)
                        }

                        var n = e(this), i = n.data("mCS"), r = i.opt;
                        if (!i.bindEvents) {
                            if (A.call(this), r.contentTouchScroll && P.call(this), D.call(this), r.mouseWheel.enable) {
                                var o;
                                t()
                            }
                            z.call(this), N.call(this), r.advanced.autoScrollOnFocus && R.call(this), r.scrollButtons.enable && B.call(this), r.keyboard.enable && $.call(this), i.bindEvents = !0
                        }
                    }, k = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = "mCS_" + n.idx,
                            o = ".mCSB_" + n.idx + "_scrollbar",
                            s = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + o + " ." + l[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + o + ">a"),
                            a = e("#mCSB_" + n.idx + "_container");
                        i.advanced.releaseDraggableSelectors && s.add(e(i.advanced.releaseDraggableSelectors)), i.advanced.extraDraggableSelectors && s.add(e(i.advanced.extraDraggableSelectors)), n.bindEvents && (e(document).add(e(!L() || top.document)).unbind("." + r), s.each(function () {
                            e(this).unbind("." + r)
                        }), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(a[0].onCompleteTimeout), Z(a[0], "onCompleteTimeout"), n.bindEvents = !1)
                    }, T = function (t) {
                        var n = e(this), i = n.data("mCS"), r = i.opt, o = e("#mCSB_" + i.idx + "_container_wrapper"),
                            s = o.length ? o : e("#mCSB_" + i.idx + "_container"),
                            a = [e("#mCSB_" + i.idx + "_scrollbar_vertical"), e("#mCSB_" + i.idx + "_scrollbar_horizontal")],
                            c = [a[0].find(".mCSB_dragger"), a[1].find(".mCSB_dragger")];
                        "x" !== r.axis && (i.overflowed[0] && !t ? (a[0].add(c[0]).add(a[0].children("a")).css("display", "block"), s.removeClass(l[8] + " " + l[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(l[10])) : (a[0].css("display", "none"), s.addClass(l[10])), s.addClass(l[8]))), "y" !== r.axis && (i.overflowed[1] && !t ? (a[1].add(c[1]).add(a[1].children("a")).css("display", "block"), s.removeClass(l[9] + " " + l[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(l[11])) : (a[1].css("display", "none"), s.addClass(l[11])), s.addClass(l[9]))), i.overflowed[0] || i.overflowed[1] ? n.removeClass(l[5]) : n.addClass(l[5])
                    }, E = function (t) {
                        var n = t.type,
                            i = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                            r = L() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                        switch (n) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return i ? [t.originalEvent.pageY - i[0] + r[0], t.originalEvent.pageX - i[1] + r[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var o = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                                    s = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                                return t.target.ownerDocument !== document ? [o.screenY, o.screenX, s > 1] : [o.pageY, o.pageX, s > 1];
                            default:
                                return i ? [t.pageY - i[0] + r[0], t.pageX - i[1] + r[1], !1] : [t.pageY, t.pageX, !1]
                        }
                    }, A = function () {
                        function t(t, e, i, r) {
                            if (f[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, n.attr("id") === d[1]) var s = "x",
                                a = (n[0].offsetLeft - e + r) * l.scrollRatio.x; else var s = "y",
                                a = (n[0].offsetTop - t + i) * l.scrollRatio.y;
                            U(o, a.toString(), {dir: s, drag: !0})
                        }

                        var n, i, r, o = e(this), l = o.data("mCS"), c = l.opt, u = "mCS_" + l.idx,
                            d = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                            f = e("#mCSB_" + l.idx + "_container"), h = e("#" + d[0] + ",#" + d[1]),
                            p = c.advanced.releaseDraggableSelectors ? h.add(e(c.advanced.releaseDraggableSelectors)) : h,
                            g = c.advanced.extraDraggableSelectors ? e(!L() || top.document).add(e(c.advanced.extraDraggableSelectors)) : e(!L() || top.document);
                        h.bind("contextmenu." + u, function (t) {
                            t.preventDefault()
                        }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
                            if (t.stopImmediatePropagation(), t.preventDefault(), J(t)) {
                                a = !0, s && (document.onselectstart = function () {
                                    return !1
                                }), I.call(f, !1), Y(o), n = e(this);
                                var l = n.offset(), u = E(t)[0] - l.top, d = E(t)[1] - l.left, h = n.height() + l.top,
                                    p = n.width() + l.left;
                                u < h && u > 0 && d < p && d > 0 && (i = u, r = d), x(n, "active", c.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + u, function (e) {
                            e.stopImmediatePropagation(), e.preventDefault();
                            var o = n.offset(), s = E(e)[0] - o.top, a = E(e)[1] - o.left;
                            t(i, r, s, a)
                        }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
                            if (n) {
                                var o = n.offset(), s = E(e)[0] - o.top, a = E(e)[1] - o.left;
                                if (i === s && r === a) return;
                                t(i, r, s, a)
                            }
                        }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function (t) {
                            n && (x(n, "active", c.autoExpandScrollbar), n = null), a = !1, s && (document.onselectstart = null), I.call(f, !0)
                        })
                    }, P = function () {
                        function n(e) {
                            if (!K(e) || a || E(e)[2]) return void (t = 0);
                            t = 1, x = 0, S = 0, c = 1, _.removeClass("mCS_touch_action");
                            var n = P.offset();
                            u = E(e)[0] - n.top, d = E(e)[1] - n.left, z = [E(e)[0], E(e)[1]]
                        }

                        function i(t) {
                            if (K(t) && !a && !E(t)[2] && (k.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!S || x) && c)) {
                                g = G();
                                var e = A.offset(), n = E(t)[0] - e.top, i = E(t)[1] - e.left;
                                if (M.push(n), O.push(i), z[2] = Math.abs(E(t)[0] - z[0]), z[3] = Math.abs(E(t)[1] - z[1]), C.overflowed[0]) var r = D[0].parent().height() - D[0].height(),
                                    o = u - n > 0 && n - u > -r * C.scrollRatio.y && (2 * z[3] < z[2] || "yx" === k.axis);
                                if (C.overflowed[1]) var s = D[1].parent().width() - D[1].width(),
                                    f = d - i > 0 && i - d > -s * C.scrollRatio.x && (2 * z[2] < z[3] || "yx" === k.axis);
                                o || f ? (B || t.preventDefault(), x = 1) : (S = 1, _.addClass("mCS_touch_action")), B && t.preventDefault(), w = "yx" === k.axis ? [u - n, d - i] : "x" === k.axis ? [null, d - i] : [u - n, null], P[0].idleTimer = 250, C.overflowed[0] && l(w[0], I, "mcsLinearOut", "y", "all", !0), C.overflowed[1] && l(w[1], I, "mcsLinearOut", "x", j, !0)
                            }
                        }

                        function r(e) {
                            if (!K(e) || a || E(e)[2]) return void (t = 0);
                            t = 1, e.stopImmediatePropagation(), Y(_), p = G();
                            var n = A.offset();
                            f = E(e)[0] - n.top, h = E(e)[1] - n.left, M = [], O = []
                        }

                        function o(t) {
                            if (K(t) && !a && !E(t)[2]) {
                                c = 0, t.stopImmediatePropagation(), x = 0, S = 0, v = G();
                                var e = A.offset(), n = E(t)[0] - e.top, i = E(t)[1] - e.left;
                                if (!(v - g > 30)) {
                                    y = 1e3 / (v - p);
                                    var r = y < 2.5, o = r ? [M[M.length - 2], O[O.length - 2]] : [0, 0];
                                    m = r ? [n - o[0], i - o[1]] : [n - f, i - h];
                                    var u = [Math.abs(m[0]), Math.abs(m[1])];
                                    y = r ? [Math.abs(m[0] / 4), Math.abs(m[1] / 4)] : [y, y];
                                    var d = [Math.abs(P[0].offsetTop) - m[0] * s(u[0] / y[0], y[0]), Math.abs(P[0].offsetLeft) - m[1] * s(u[1] / y[1], y[1])];
                                    w = "yx" === k.axis ? [d[0], d[1]] : "x" === k.axis ? [null, d[1]] : [d[0], null], b = [4 * u[0] + k.scrollInertia, 4 * u[1] + k.scrollInertia];
                                    var _ = parseInt(k.contentTouchScroll) || 0;
                                    w[0] = u[0] > _ ? w[0] : 0, w[1] = u[1] > _ ? w[1] : 0, C.overflowed[0] && l(w[0], b[0], "mcsEaseOut", "y", j, !1), C.overflowed[1] && l(w[1], b[1], "mcsEaseOut", "x", j, !1)
                                }
                            }
                        }

                        function s(t, e) {
                            var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
                            return t > 90 ? e > 4 ? n[0] : n[3] : t > 60 ? e > 3 ? n[3] : n[2] : t > 30 ? e > 8 ? n[1] : e > 6 ? n[0] : e > 4 ? e : n[2] : e > 8 ? e : n[3]
                        }

                        function l(t, e, n, i, r, o) {
                            t && U(_, t.toString(), {dur: e, scrollEasing: n, dir: i, overwrite: r, drag: o})
                        }

                        var c, u, d, f, h, p, g, v, m, y, w, b, x, S, _ = e(this), C = _.data("mCS"), k = C.opt,
                            T = "mCS_" + C.idx, A = e("#mCSB_" + C.idx), P = e("#mCSB_" + C.idx + "_container"),
                            D = [e("#mCSB_" + C.idx + "_dragger_vertical"), e("#mCSB_" + C.idx + "_dragger_horizontal")],
                            M = [], O = [], I = 0, j = "yx" === k.axis ? "none" : "all", z = [], R = P.find("iframe"),
                            N = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T],
                            B = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                        P.bind(N[0], function (t) {
                            n(t)
                        }).bind(N[1], function (t) {
                            i(t)
                        }), A.bind(N[0], function (t) {
                            r(t)
                        }).bind(N[2], function (t) {
                            o(t)
                        }), R.length && R.each(function () {
                            e(this).bind("load", function () {
                                L(this) && e(this.contentDocument || this.contentWindow.document).bind(N[0], function (t) {
                                    n(t), r(t)
                                }).bind(N[1], function (t) {
                                    i(t)
                                }).bind(N[2], function (t) {
                                    o(t)
                                })
                            })
                        })
                    }, D = function () {
                        function n() {
                            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                        }

                        function i(t, e, n) {
                            c.type = n && r ? "stepped" : "stepless", c.scrollAmount = 10, F(o, t, e, "mcsLinearOut", n ? 60 : null)
                        }

                        var r, o = e(this), s = o.data("mCS"), l = s.opt, c = s.sequential, u = "mCS_" + s.idx,
                            d = e("#mCSB_" + s.idx + "_container"), f = d.parent();
                        d.bind("mousedown." + u, function (e) {
                            t || r || (r = 1, a = !0)
                        }).add(document).bind("mousemove." + u, function (e) {
                            if (!t && r && n()) {
                                var o = d.offset(), a = E(e)[0] - o.top + d[0].offsetTop,
                                    u = E(e)[1] - o.left + d[0].offsetLeft;
                                a > 0 && a < f.height() && u > 0 && u < f.width() ? c.step && i("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (a < 0 ? i("on", 38) : a > f.height() && i("on", 40)), "y" !== l.axis && s.overflowed[1] && (u < 0 ? i("on", 37) : u > f.width() && i("on", 39)))
                            }
                        }).bind("mouseup." + u + " dragend." + u, function (e) {
                            t || (r && (r = 0, i("off", null)), a = !1)
                        })
                    }, M = function () {
                        function t(t, o) {
                            if (Y(n), !j(n, t.target)) {
                                var c = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                                    u = r.scrollInertia;
                                if ("x" === r.axis || "x" === r.mouseWheel.axis) var d = "x",
                                    f = [Math.round(c * i.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                                    h = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= a.width() ? .9 * a.width() : f[0],
                                    p = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetLeft), g = l[1][0].offsetLeft,
                                    v = l[1].parent().width() - l[1].width(),
                                    m = "y" === r.mouseWheel.axis ? t.deltaY || o : t.deltaX; else var d = "y",
                                    f = [Math.round(c * i.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                                    h = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= a.height() ? .9 * a.height() : f[0],
                                    p = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetTop), g = l[0][0].offsetTop,
                                    v = l[0].parent().height() - l[0].height(), m = t.deltaY || o;
                                "y" === d && !i.overflowed[0] || "x" === d && !i.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (m = -m), r.mouseWheel.normalizeDelta && (m = m < 0 ? -1 : 1), (m > 0 && 0 !== g || m < 0 && g !== v || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (h = t.deltaFactor, u = 17), U(n, (p - m * h).toString(), {
                                    dir: d,
                                    dur: u
                                }))
                            }
                        }

                        if (e(this).data("mCS")) {
                            var n = e(this), i = n.data("mCS"), r = i.opt, o = "mCS_" + i.idx, a = e("#mCSB_" + i.idx),
                                l = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                                c = e("#mCSB_" + i.idx + "_container").find("iframe");
                            c.length && c.each(function () {
                                e(this).bind("load", function () {
                                    L(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + o, function (e, n) {
                                        t(e, n)
                                    })
                                })
                            }), a.bind("mousewheel." + o, function (e, n) {
                                t(e, n)
                            })
                        }
                    }, O = new Object, L = function (t) {
                        var n = !1, i = !1, r = null;
                        if (void 0 === t ? i = "#empty" : void 0 !== e(t).attr("id") && (i = e(t).attr("id")), !1 !== i && void 0 !== O[i]) return O[i];
                        if (t) {
                            try {
                                var o = t.contentDocument || t.contentWindow.document;
                                r = o.body.innerHTML
                            } catch (t) {
                            }
                            n = null !== r
                        } else {
                            try {
                                var o = top.document;
                                r = o.body.innerHTML
                            } catch (t) {
                            }
                            n = null !== r
                        }
                        return !1 !== i && (O[i] = n), n
                    }, I = function (t) {
                        var e = this.find("iframe");
                        if (e.length) {
                            var n = t ? "auto" : "none";
                            e.css("pointer-events", n)
                        }
                    }, j = function (t, n) {
                        var i = n.nodeName.toLowerCase(), r = t.data("mCS").opt.mouseWheel.disableOver,
                            o = ["select", "textarea"];
                        return e.inArray(i, r) > -1 && !(e.inArray(i, o) > -1 && !e(n).is(":focus"))
                    }, z = function () {
                        var t, n = e(this), i = n.data("mCS"), r = "mCS_" + i.idx, o = e("#mCSB_" + i.idx + "_container"),
                            s = o.parent(), c = e(".mCSB_" + i.idx + "_scrollbar ." + l[12]);
                        c.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function (n) {
                            a = !0, e(n.target).hasClass("mCSB_dragger") || (t = 1)
                        }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function (t) {
                            a = !1
                        }).bind("click." + r, function (r) {
                            if (t && (t = 0, e(r.target).hasClass(l[12]) || e(r.target).hasClass("mCSB_draggerRail"))) {
                                Y(n);
                                var a = e(this), c = a.find(".mCSB_dragger");
                                if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!i.overflowed[1]) return;
                                    var u = "x", d = r.pageX > c.offset().left ? -1 : 1,
                                        f = Math.abs(o[0].offsetLeft) - d * (.9 * s.width())
                                } else {
                                    if (!i.overflowed[0]) return;
                                    var u = "y", d = r.pageY > c.offset().top ? -1 : 1,
                                        f = Math.abs(o[0].offsetTop) - d * (.9 * s.height())
                                }
                                U(n, f.toString(), {dir: u, scrollEasing: "mcsEaseInOut"})
                            }
                        })
                    }, R = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = "mCS_" + n.idx,
                            o = e("#mCSB_" + n.idx + "_container"), s = o.parent();
                        o.bind("focusin." + r, function (n) {
                            var r = e(document.activeElement), a = o.find(".mCustomScrollBox").length;
                            r.is(i.advanced.autoScrollOnFocus) && (Y(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? 17 * a : 0, t[0]._focusTimeout = setTimeout(function () {
                                var e = [et(r)[0], et(r)[1]], n = [o[0].offsetTop, o[0].offsetLeft],
                                    a = [n[0] + e[0] >= 0 && n[0] + e[0] < s.height() - r.outerHeight(!1), n[1] + e[1] >= 0 && n[0] + e[1] < s.width() - r.outerWidth(!1)],
                                    l = "yx" !== i.axis || a[0] || a[1] ? "all" : "none";
                                "x" === i.axis || a[0] || U(t, e[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                }), "y" === i.axis || a[1] || U(t, e[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                })
                            }, t[0]._focusTimer))
                        })
                    }, N = function () {
                        var t = e(this), n = t.data("mCS"), i = "mCS_" + n.idx,
                            r = e("#mCSB_" + n.idx + "_container").parent();
                        r.bind("scroll." + i, function (t) {
                            0 === r.scrollTop() && 0 === r.scrollLeft() || e(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
                        })
                    }, B = function () {
                        var t = e(this), n = t.data("mCS"), i = n.opt, r = n.sequential, o = "mCS_" + n.idx,
                            s = ".mCSB_" + n.idx + "_scrollbar";
                        e(s + ">a").bind("contextmenu." + o, function (t) {
                            t.preventDefault()
                        }).bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o + " mouseup." + o + " touchend." + o + " pointerup." + o + " MSPointerUp." + o + " mouseout." + o + " pointerout." + o + " MSPointerOut." + o + " click." + o, function (o) {
                            function s(e, n) {
                                r.scrollAmount = i.scrollButtons.scrollAmount, F(t, e, n)
                            }

                            if (o.preventDefault(), J(o)) {
                                var l = e(this).attr("class");
                                switch (r.type = i.scrollButtons.scrollType, o.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === r.type) return;
                                        a = !0, n.tweenRunning = !1, s("on", l);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === r.type) return;
                                        a = !1, r.dir && s("off", l);
                                        break;
                                    case "click":
                                        if ("stepped" !== r.type || n.tweenRunning) return;
                                        s("on", l)
                                }
                            }
                        })
                    }, $ = function () {
                        function t(t) {
                            function s(t, e) {
                                o.type = r.keyboard.scrollType, o.scrollAmount = r.keyboard.scrollAmount, "stepped" === o.type && i.tweenRunning || F(n, t, e)
                            }

                            switch (t.type) {
                                case "blur":
                                    i.tweenRunning && o.dir && s("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var a = t.keyCode ? t.keyCode : t.which, d = "on";
                                    if ("x" !== r.axis && (38 === a || 40 === a) || "y" !== r.axis && (37 === a || 39 === a)) {
                                        if ((38 === a || 40 === a) && !i.overflowed[0] || (37 === a || 39 === a) && !i.overflowed[1]) return;
                                        "keyup" === t.type && (d = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), s(d, a))
                                    } else if (33 === a || 34 === a) {
                                        if ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                            Y(n);
                                            var f = 34 === a ? -1 : 1;
                                            if ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0]) var h = "x",
                                                p = Math.abs(l[0].offsetLeft) - f * (.9 * c.width()); else var h = "y",
                                                p = Math.abs(l[0].offsetTop) - f * (.9 * c.height());
                                            U(n, p.toString(), {dir: h, scrollEasing: "mcsEaseInOut"})
                                        }
                                    } else if ((35 === a || 36 === a) && !e(document.activeElement).is(u) && ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                        if ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0]) var h = "x",
                                            p = 35 === a ? Math.abs(c.width() - l.outerWidth(!1)) : 0; else var h = "y",
                                            p = 35 === a ? Math.abs(c.height() - l.outerHeight(!1)) : 0;
                                        U(n, p.toString(), {dir: h, scrollEasing: "mcsEaseInOut"})
                                    }
                            }
                        }

                        var n = e(this), i = n.data("mCS"), r = i.opt, o = i.sequential, s = "mCS_" + i.idx,
                            a = e("#mCSB_" + i.idx), l = e("#mCSB_" + i.idx + "_container"), c = l.parent(),
                            u = "input,textarea,select,datalist,keygen,[contenteditable='true']", d = l.find("iframe"),
                            f = ["blur." + s + " keydown." + s + " keyup." + s];
                        d.length && d.each(function () {
                            e(this).bind("load", function () {
                                L(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function (e) {
                                    t(e)
                                })
                            })
                        }), a.attr("tabindex", "0").bind(f[0], function (e) {
                            t(e)
                        })
                    }, F = function (t, n, i, r, o) {
                        function s(e) {
                            c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var n = "stepped" !== u.type, i = o || (e ? n ? h / 1.5 : p : 1e3 / 60),
                                l = e ? n ? 7.5 : 40 : 2.5, f = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
                                g = [a.scrollRatio.y > 10 ? 10 : a.scrollRatio.y, a.scrollRatio.x > 10 ? 10 : a.scrollRatio.x],
                                v = "x" === u.dir[0] ? f[1] + u.dir[1] * (g[1] * l) : f[0] + u.dir[1] * (g[0] * l),
                                m = "x" === u.dir[0] ? f[1] + u.dir[1] * parseInt(u.scrollAmount) : f[0] + u.dir[1] * parseInt(u.scrollAmount),
                                y = "auto" !== u.scrollAmount ? m : v,
                                w = r || (e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"), b = !!e;
                            if (e && i < 17 && (y = "x" === u.dir[0] ? f[1] : f[0]), U(t, y.toString(), {
                                dir: u.dir[0],
                                scrollEasing: w,
                                dur: i,
                                onComplete: b
                            }), e) return void (u.dir = !1);
                            clearTimeout(u.step), u.step = setTimeout(function () {
                                s()
                            }, i)
                        }

                        var a = t.data("mCS"), c = a.opt, u = a.sequential, d = e("#mCSB_" + a.idx + "_container"),
                            f = "stepped" === u.type, h = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                            p = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (n) {
                            case "on":
                                if (u.dir = [i === l[16] || i === l[15] || 39 === i || 37 === i ? "x" : "y", i === l[13] || i === l[15] || 38 === i || 37 === i ? -1 : 1], Y(t), tt(i) && "stepped" === u.type) return;
                                s(f);
                                break;
                            case "off":
                                !function () {
                                    clearTimeout(u.step), Z(u, "step"), Y(t)
                                }(), (f || a.tweenRunning && u.dir) && s(!0)
                        }
                    }, H = function (t) {
                        var n = e(this).data("mCS").opt, i = [];
                        return "function" == typeof t && (t = t()), t instanceof Array ? i = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (i[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, i[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof i[0] && (i[0] = i[0]()), "function" == typeof i[1] && (i[1] = i[1]()), i
                    }, W = function (t, n) {
                        if (null != t && void 0 !== t) {
                            var i = e(this), r = i.data("mCS"), o = r.opt, s = e("#mCSB_" + r.idx + "_container"),
                                a = s.parent(), l = typeof t;
                            n || (n = "x" === o.axis ? "x" : "y");
                            var u = "x" === n ? s.outerWidth(!1) - a.width() : s.outerHeight(!1) - a.height(),
                                d = "x" === n ? s[0].offsetLeft : s[0].offsetTop, f = "x" === n ? "left" : "top";
                            switch (l) {
                                case "function":
                                    return t();
                                case "object":
                                    var h = t.jquery ? t : e(t);
                                    if (!h.length) return;
                                    return "x" === n ? et(h)[1] : et(h)[0];
                                case "string":
                                case "number":
                                    if (tt(t)) return Math.abs(t);
                                    if (-1 !== t.indexOf("%")) return Math.abs(u * parseInt(t) / 100);
                                    if (-1 !== t.indexOf("-=")) return Math.abs(d - parseInt(t.split("-=")[1]));
                                    if (-1 !== t.indexOf("+=")) {
                                        var p = d + parseInt(t.split("+=")[1]);
                                        return p >= 0 ? 0 : Math.abs(p)
                                    }
                                    if (-1 !== t.indexOf("px") && tt(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                    if ("top" === t || "left" === t) return 0;
                                    if ("bottom" === t) return Math.abs(a.height() - s.outerHeight(!1));
                                    if ("right" === t) return Math.abs(a.width() - s.outerWidth(!1));
                                    if ("first" === t || "last" === t) {
                                        var h = s.find(":" + t);
                                        return "x" === n ? et(h)[1] : et(h)[0]
                                    }
                                    return e(t).length ? "x" === n ? et(e(t))[1] : et(e(t))[0] : (s.css(f, t), void c.update.call(null, i[0]))
                            }
                        }
                    }, q = function (t) {
                        function n() {
                            if (clearTimeout(d[0].autoUpdate), 0 === s.parents("html").length) return void (s = null);
                            d[0].autoUpdate = setTimeout(function () {
                                return u.advanced.updateOnSelectorChange && (a.poll.change.n = r(), a.poll.change.n !== a.poll.change.o) ? (a.poll.change.o = a.poll.change.n, void o(3)) : u.advanced.updateOnContentResize && (a.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + d[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, a.poll.size.n !== a.poll.size.o) ? (a.poll.size.o = a.poll.size.n, void o(1)) : !u.advanced.updateOnImageLoad || "auto" === u.advanced.updateOnImageLoad && "y" === u.axis || (a.poll.img.n = d.find("img").length, a.poll.img.n === a.poll.img.o) ? void ((u.advanced.updateOnSelectorChange || u.advanced.updateOnContentResize || u.advanced.updateOnImageLoad) && n()) : (a.poll.img.o = a.poll.img.n, void d.find("img").each(function () {
                                    i(this)
                                }))
                            }, u.advanced.autoUpdateTimeout)
                        }

                        function i(t) {
                            function n() {
                                this.onload = null, e(t).addClass(l[2]), o(2)
                            }

                            if (e(t).hasClass(l[2])) return void o();
                            var i = new Image;
                            i.onload = function (t, e) {
                                return function () {
                                    return e.apply(t, arguments)
                                }
                            }(i, n), i.src = t.src
                        }

                        function r() {
                            !0 === u.advanced.updateOnSelectorChange && (u.advanced.updateOnSelectorChange = "*");
                            var t = 0, e = d.find(u.advanced.updateOnSelectorChange);
                            return u.advanced.updateOnSelectorChange && e.length > 0 && e.each(function () {
                                t += this.offsetHeight + this.offsetWidth
                            }), t
                        }

                        function o(t) {
                            clearTimeout(d[0].autoUpdate), c.update.call(null, s[0], t)
                        }

                        var s = e(this), a = s.data("mCS"), u = a.opt, d = e("#mCSB_" + a.idx + "_container");
                        if (t) return clearTimeout(d[0].autoUpdate), void Z(d[0], "autoUpdate");
                        n()
                    }, X = function (t, e, n) {
                        return Math.round(t / e) * e - n
                    }, Y = function (t) {
                        var n = t.data("mCS");
                        e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal").each(function () {
                            Q.call(this)
                        })
                    }, U = function (t, n, i) {
                        function r(t) {
                            return a && l.callbacks[t] && "function" == typeof l.callbacks[t]
                        }

                        function o() {
                            return [l.callbacks.alwaysTriggerOffsets || w >= b[0] + _, l.callbacks.alwaysTriggerOffsets || w <= -C]
                        }

                        function s() {
                            var e = [f[0].offsetTop, f[0].offsetLeft], n = [m[0].offsetTop, m[0].offsetLeft],
                                r = [f.outerHeight(!1), f.outerWidth(!1)], o = [d.height(), d.width()];
                            t[0].mcs = {
                                content: f,
                                top: e[0],
                                left: e[1],
                                draggerTop: n[0],
                                draggerLeft: n[1],
                                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(r[0]) - o[0])),
                                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(r[1]) - o[1])),
                                direction: i.dir
                            }
                        }

                        var a = t.data("mCS"), l = a.opt, c = {
                                trigger: "internal",
                                dir: "y",
                                scrollEasing: "mcsEaseOut",
                                drag: !1,
                                dur: l.scrollInertia,
                                overwrite: "all",
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }, i = e.extend(c, i), u = [i.dur, i.drag ? 0 : i.dur], d = e("#mCSB_" + a.idx),
                            f = e("#mCSB_" + a.idx + "_container"), h = f.parent(),
                            p = l.callbacks.onTotalScrollOffset ? H.call(t, l.callbacks.onTotalScrollOffset) : [0, 0],
                            g = l.callbacks.onTotalScrollBackOffset ? H.call(t, l.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (a.trigger = i.trigger, 0 === h.scrollTop() && 0 === h.scrollLeft() || (e(".mCSB_" + a.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== n || a.contentReset.y || (r("onOverflowYNone") && l.callbacks.onOverflowYNone.call(t[0]), a.contentReset.y = 1), "_resetX" !== n || a.contentReset.x || (r("onOverflowXNone") && l.callbacks.onOverflowXNone.call(t[0]), a.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                            if (!a.contentReset.y && t[0].mcs || !a.overflowed[0] || (r("onOverflowY") && l.callbacks.onOverflowY.call(t[0]), a.contentReset.x = null), !a.contentReset.x && t[0].mcs || !a.overflowed[1] || (r("onOverflowX") && l.callbacks.onOverflowX.call(t[0]), a.contentReset.x = null), l.snapAmount) {
                                var v = l.snapAmount instanceof Array ? "x" === i.dir ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount;
                                n = X(n, v, l.snapOffset)
                            }
                            switch (i.dir) {
                                case "x":
                                    var m = e("#mCSB_" + a.idx + "_dragger_horizontal"), y = "left", w = f[0].offsetLeft,
                                        b = [d.width() - f.outerWidth(!1), m.parent().width() - m.width()],
                                        S = [n, 0 === n ? 0 : n / a.scrollRatio.x], _ = p[1], C = g[1],
                                        k = _ > 0 ? _ / a.scrollRatio.x : 0, T = C > 0 ? C / a.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var m = e("#mCSB_" + a.idx + "_dragger_vertical"), y = "top", w = f[0].offsetTop,
                                        b = [d.height() - f.outerHeight(!1), m.parent().height() - m.height()],
                                        S = [n, 0 === n ? 0 : n / a.scrollRatio.y], _ = p[0], C = g[0],
                                        k = _ > 0 ? _ / a.scrollRatio.y : 0, T = C > 0 ? C / a.scrollRatio.y : 0
                            }
                            S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= b[1] ? S = [b[0], b[1]] : S[0] = -S[0], t[0].mcs || (s(), r("onInit") && l.callbacks.onInit.call(t[0])), clearTimeout(f[0].onCompleteTimeout), V(m[0], y, Math.round(S[1]), u[1], i.scrollEasing), !a.tweenRunning && (0 === w && S[0] >= 0 || w === b[0] && S[0] <= b[0]) || V(f[0], y, Math.round(S[0]), u[0], i.scrollEasing, i.overwrite, {
                                onStart: function () {
                                    i.callbacks && i.onStart && !a.tweenRunning && (r("onScrollStart") && (s(), l.callbacks.onScrollStart.call(t[0])), a.tweenRunning = !0, x(m), a.cbOffsets = o())
                                }, onUpdate: function () {
                                    i.callbacks && i.onUpdate && r("whileScrolling") && (s(), l.callbacks.whileScrolling.call(t[0]))
                                }, onComplete: function () {
                                    if (i.callbacks && i.onComplete) {
                                        "yx" === l.axis && clearTimeout(f[0].onCompleteTimeout);
                                        var e = f[0].idleTimer || 0;
                                        f[0].onCompleteTimeout = setTimeout(function () {
                                            r("onScroll") && (s(), l.callbacks.onScroll.call(t[0])), r("onTotalScroll") && S[1] >= b[1] - k && a.cbOffsets[0] && (s(), l.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && S[1] <= T && a.cbOffsets[1] && (s(), l.callbacks.onTotalScrollBack.call(t[0])), a.tweenRunning = !1, f[0].idleTimer = 0, x(m, "hide")
                                        }, e)
                                    }
                                }
                            })
                        }
                    }, V = function (t, e, n, i, r, o, s) {
                        function a() {
                            w.stop || (v || f.call(), v = G() - g, l(), v >= w.time && (w.time = v > w.time ? v + u - (v - w.time) : v + u - 1, w.time < v + 1 && (w.time = v + 1)), w.time < i ? w.id = d(a) : p.call())
                        }

                        function l() {
                            i > 0 ? (w.currVal = c(w.time, m, b, i, r), y[e] = Math.round(w.currVal) + "px") : y[e] = n + "px", h.call()
                        }

                        function c(t, e, n, i, r) {
                            switch (r) {
                                case "linear":
                                case "mcsLinear":
                                    return n * t / i + e;
                                case "mcsLinearOut":
                                    return t /= i, t--, n * Math.sqrt(1 - t * t) + e;
                                case "easeInOutSmooth":
                                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e);
                                case "easeInOutStrong":
                                    return (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * (2 - Math.pow(2, -10 * t)) + e);
                                case "easeInOut":
                                case "mcsEaseInOut":
                                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : (t -= 2, n / 2 * (t * t * t + 2) + e);
                                case "easeOutSmooth":
                                    return t /= i, t--, -n * (t * t * t * t - 1) + e;
                                case "easeOutStrong":
                                    return n * (1 - Math.pow(2, -10 * t / i)) + e;
                                case "easeOut":
                                case "mcsEaseOut":
                                default:
                                    var o = (t /= i) * t, s = o * t;
                                    return e + n * (.499999999999997 * s * o + -2.5 * o * o + 5.5 * s + -6.5 * o + 4 * t)
                            }
                        }

                        t._mTween || (t._mTween = {top: {}, left: {}});
                        var u, d, s = s || {}, f = s.onStart || function () {
                        }, h = s.onUpdate || function () {
                        }, p = s.onComplete || function () {
                        }, g = G(), v = 0, m = t.offsetTop, y = t.style, w = t._mTween[e];
                        "left" === e && (m = t.offsetLeft);
                        var b = n - m;
                        w.stop = 0, "none" !== o && function () {
                            null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null)
                        }(), function () {
                            u = 1e3 / 60, w.time = v + u, d = window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {
                                return l(), setTimeout(t, .01)
                            }, w.id = d(a)
                        }()
                    }, G = function () {
                        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                    }, Q = function () {
                        var t = this;
                        t._mTween || (t._mTween = {top: {}, left: {}});
                        for (var e = ["top", "left"], n = 0; n < e.length; n++) {
                            var i = e[n];
                            t._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[i].id) : clearTimeout(t._mTween[i].id), t._mTween[i].id = null, t._mTween[i].stop = 1)
                        }
                    }, Z = function (t, e) {
                        try {
                            delete t[e]
                        } catch (n) {
                            t[e] = null
                        }
                    }, J = function (t) {
                        return !(t.which && 1 !== t.which)
                    }, K = function (t) {
                        var e = t.originalEvent.pointerType;
                        return !(e && "touch" !== e && 2 !== e)
                    }, tt = function (t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }, et = function (t) {
                        var e = t.parents(".mCSB_container");
                        return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                    }, nt = function () {
                        var t = function () {
                            var t = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                            return null
                        }();
                        return !!t && document[t]
                    };
                e.fn[n] = function (t) {
                    return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : c.init.apply(this, arguments)
                }, e[n] = function (t) {
                    return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : c.init.apply(this, arguments)
                }, e[n].defaults = i, window[n] = !0, e(window).bind("load", function () {
                    e(".mCustomScrollbar")[n](), e.extend(e.expr[":"], {
                        mcsInView: e.expr[":"].mcsInView || function (t) {
                            var n, i, r = e(t), o = r.parents(".mCSB_container");
                            if (o.length) return n = o.parent(), i = [o[0].offsetTop, o[0].offsetLeft], i[0] + et(r)[0] >= 0 && i[0] + et(r)[0] < n.height() - r.outerHeight(!1) && i[1] + et(r)[1] >= 0 && i[1] + et(r)[1] < n.width() - r.outerWidth(!1)
                        }, mcsInSight: e.expr[":"].mcsInSight || function (t, n, i) {
                            var r, o, s, a, l = e(t), c = l.parents(".mCSB_container"),
                                u = "exact" === i[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                            if (c.length) return r = [l.outerHeight(!1), l.outerWidth(!1)], s = [c[0].offsetTop + et(l)[0], c[0].offsetLeft + et(l)[1]], o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], a = [r[0] < o[0] ? u[0] : u[1], r[1] < o[1] ? u[0] : u[1]], s[0] - o[0] * a[0][0] < 0 && s[0] + r[0] - o[0] * a[0][1] >= 0 && s[1] - o[1] * a[1][0] < 0 && s[1] + r[1] - o[1] * a[1][1] >= 0
                        }, mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                            var n = e(t).data("mCS");
                            if (n) return n.overflowed[0] || n.overflowed[1]
                        }
                    })
                })
            }()
        }()
    })
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(e, {})
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        this.selectBox = "", this.option = {
            selector: "._js-dropdown",
            hiddenMb: !0,
            ar: "js-ar",
            arClassStyle: "",
            fnReturnResult: "resultDropDown"
        }, this.className = {
            hiddenMb: "hidden-xs",
            wrapper: "_js-dropdown__wrapper",
            result: "_js-dropdown__result",
            list: "_js-dropdown__list",
            text_result: "_text",
            li: "",
            ul: ""
        }, this.opt = function (t) {
            this.option = Object.assign(this.option, t)
        }, this.setClass = function (t) {
            this.className = Object.assign(this.className, t)
        }, this.init = function () {
            this.generatorLoop(), this.clickOutSideToClose()
        }, this.reinit = function (t, e) {
            var n = document.getElementById(t), i = n.querySelector("select"), r = i.getAttribute("class");
            this.removeAll(n), this.newSelectBox(e, r, n), this.generator(n)
        }, this.getSelector = function () {
            var t = this.option.selector;
            return document.querySelectorAll(t)
        }, this.generator = function (t) {
            var e = this.make_wrapper(t);
            this.make_result(e), this.make_option(e), this.setResult(t), this.setOptionSelect(t)
        }, this.generatorLoop = function () {
            for (var t = this.getSelector(), e = 0; e < t.length; e++) {
                var n = t[e];
                this.generator(n)
            }
        }, this.setResult = function (t) {
            var e = "." + this.className.text_result, n = t.querySelector(e), i = t.querySelector("select"),
                r = i.options[i.selectedIndex].value, o = i.options[i.selectedIndex].text;
            n.setAttribute("value", r), n.innerHTML = o
        }, this.setOptionSelect = function (t) {
            var e = t.querySelector("select"), n = e.querySelectorAll("option"), i = document.createElement("ul"),
                r = this.className.ul;
            this.attachOnChangeSelect(e, function (t) {
                var e = t.currentTarget, n = e.parentNode, i = e.options[e.selectedIndex].value,
                    r = e.options[e.selectedIndex].text, o = {value: i, text: r};
                this.getResult(o, n)
            }.bind(this)), "" !== r && (i.className = r);
            var o = "." + this.className.list;
            t.querySelector(o).appendChild(i);
            for (var s = 0; s < n.length; s++) {
                var a = n[s], l = a.value, c = a.innerHTML;
                "" !== l && this.make_li(i, l, c)
            }
        }, this.make_li = function (t, e, n) {
            var i = document.createElement("li");
            "" !== this.className.li && (i.classname = i), i.setAttribute("value", e), i.innerHTML = n, this.attachEventClick(i, this.eventClickOption.bind(this)), t.appendChild(i)
        }, this.eventClickOption = function (t) {
            var e = t.currentTarget, n = e.getAttribute("value"), i = e.innerHTML,
                r = e.parentNode.parentNode.parentNode, o = r.parentNode;
            this.updateResult(n, i, e);
            var s = {value: n, text: i};
            this.toggleDropdown(r), this.getResult(s, o)
        }, this.eventToggleDropDown = function (t) {
            for (var e = t.currentTarget, n = e.parentNode, i = this.hasClass(n, "active"), r = "." + this.className.wrapper, o = document.querySelectorAll(r), s = 0; s < o.length; s++) o[s].classList.remove("active");
            i || this.toggleDropdown(n)
        }, this.toggleDropdown = function (t) {
            this.hasClass(t, "active") ? t.classList.remove("active") : t.classList.add("active")
        }, this.updateResult = function (t, e, n) {
            var i = "." + this.className.text_result, r = "." + this.className.result,
                o = n.parentNode.parentNode.parentNode, s = o.querySelector(r), a = s.querySelector(i);
            a.innerHTML = e, a.setAttribute("value", t)
        }, this.make_wrapper = function (t) {
            var e = this.className.wrapper, n = document.createElement("div"), i = this.className.hiddenMb;
            return this.option.hiddenMb ? n.classList.add(e, i) : n.classList.add(e), t.appendChild(n), n
        }, this.make_result = function (t) {
            var e = this.className.result, n = this.className.text_result, i = document.createElement("div"),
                r = document.createElement("span");
            i.classList.add(e), r.classList.add(n), i.appendChild(r), i.appendChild(this.make_ar()), this.attachEventClick(i, this.eventToggleDropDown.bind(this)), t.appendChild(i)
        }, this.make_option = function (t) {
            var e = this.className.list, n = document.createElement("div");
            n.classList.add(e), t.appendChild(n)
        }, this.make_ar = function () {
            var t = this.option.arClassStyle, e = this.option.ar, n = e + " " + t, i = document.createElement("i");
            return i.className = n, i
        }, this.attachEventClick = function (t, e) {
            t.addEventListener("click", e)
        }, this.hasClass = function (t, e) {
            return (" " + t.className + " ").indexOf(" " + e + " ") > -1
        }, this.clickOutSideToClose = function () {
            var t = this;
            document.addEventListener("click", function (e) {
                for (var n = "." + t.className.wrapper, i = e.target, r = !1, o = document.querySelectorAll(n), s = 0; s < o.length; s++) if (o[s].contains(i)) {
                    r = !0;
                    break
                }
                if (!r) for (var a = 0; a < o.length; a++) o[a].classList.remove("active")
            })
        }, this.attachOnChangeSelect = function (t, e) {
            t.addEventListener("change", e)
        }, this.getResult = function (t, e) {
            var n = e.querySelector("input");
            n.value = t.value, n.setAttribute("text-value", t.text)
        }, this.newSelectBox = function (t, e, n) {
            var i = document.createElement("select");
            i.setAttribute("class", e);
            for (var r = 0; r < t.length; r++) {
                var o = document.createElement("option");
                o.value = t[r].value, o.innerHTML = t[r].text, i.appendChild(o)
            }
            n.appendChild(i)
        }, this.removeAll = function (t) {
            var e = this.className.wrapper;
            this.removeByTagName(t, "select"), this.removeByClassName(t, e)
        }, this.removeByTagName = function (t, e) {
            for (var n = t.getElementsByTagName(e); n[0];) n[0].parentNode.removeChild(n[0])
        }, this.removeByClassName = function (t, e) {
            for (var n = t.getElementsByClassName(e); n[0];) n[0].parentNode.removeChild(n[0])
        }
    };
    i.prototype.dogSay = function () {
        console.log("Woof Woof")
    };
    var r = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
    HTMLInputElement.prototype.addInputChangedByJsListener = function (t) {
        this.hasOwnProperty("_inputChangedByJSListeners") || (this._inputChangedByJSListeners = []), this._inputChangedByJSListeners.push(t)
    }, Object.defineProperty(HTMLInputElement.prototype, "value", {
        get: function () {
            return r.get.apply(this, arguments)
        }, set: function () {
            var t = this;
            r.set.apply(t, arguments), this.hasOwnProperty("_inputChangedByJSListeners") && this._inputChangedByJSListeners.forEach(function (e) {
                e.apply(t)
            })
        }
    }), e.default = i
}, function (t, e, n) {/*! lozad.js - v1.14.0 - 2019-10-19
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
    !function (e, n) {
        t.exports = n()
    }(0, function () {
        "use strict";

        function t(t) {
            t.setAttribute("data-loaded", !0)
        }

        var e = "undefined" != typeof document && document.documentMode, n = {
            rootMargin: "0px", threshold: 0, load: function (t) {
                if ("picture" === t.nodeName.toLowerCase()) {
                    var n = document.createElement("img");
                    e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")), t.append(n)
                }
                if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                    for (var i = t.children, r = void 0, o = 0; o <= i.length - 1; o++) (r = i[o].getAttribute("data-src")) && (i[o].src = r);
                    t.load()
                }
                if (t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(",").join("'),url('") + "')"; else if (t.getAttribute("data-background-image-set")) {
                    var s = t.getAttribute("data-background-image-set").split(","),
                        a = s[0].substr(0, s[0].indexOf(" ")) || s[0];
                    a = -1 === a.indexOf("url(") ? "url(" + a + ")" : a, 1 === s.length ? t.style.backgroundImage = a : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + a + "; background-image: -webkit-image-set(" + s + "); background-image: image-set(" + s + ")")
                }
                t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
            }, loaded: function () {
            }
        }, i = function (t) {
            return "true" === t.getAttribute("data-loaded")
        };
        return function () {
            var e, r, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
                s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = Object.assign({}, n, s),
                l = a.root, c = a.rootMargin, u = a.threshold, d = a.load, f = a.loaded, h = void 0;
            return "undefined" != typeof window && window.IntersectionObserver && (h = new IntersectionObserver((e = d, r = f, function (n, o) {
                n.forEach(function (n) {
                    (0 < n.intersectionRatio || n.isIntersecting) && (o.unobserve(n.target), i(n.target) || (e(n.target), t(n.target), r(n.target)))
                })
            }), {root: l, rootMargin: c, threshold: u})), {
                observe: function () {
                    for (var e = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                        return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t)
                    }(o, l), n = 0; n < e.length; n++) i(e[n]) || (h ? h.observe(e[n]) : (d(e[n]), t(e[n]), f(e[n])))
                }, triggerLoad: function (e) {
                    i(e) || (d(e), t(e), f(e))
                }, observer: h
            }
        }
    })
}, function (t, e, n) {
    var i, r, o;
    !function (s) {
        "use strict";
        r = [n(0)], i = s, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        e = function () {
            function e(e, i) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, n) {
                        return t('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, i, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }

            var n = 0;
            return e
        }(), e.prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, e.prototype.addSlide = e.prototype.slickAdd = function (e, n, i) {
            var r = this;
            if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= r.slideCount) return !1;
            r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : !0 === i ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({height: e}, t.options.speed)
            }
        }, e.prototype.animateSlide = function (e, n) {
            var i = {}, r = this;
            r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({left: e}, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({top: e}, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t({animStart: r.currentLeft}).animate({animStart: e}, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function (t) {
                    t = Math.ceil(t), !1 === r.options.vertical ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
                },
                complete: function () {
                    n && n.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function () {
                r.disableTransition(), n.call()
            }, r.options.speed))
        }, e.prototype.getNavTarget = function () {
            var e = this, n = e.options.asNavFor;
            return n && null !== n && (n = t(n).not(e.$slider)), n
        }, e.prototype.asNavFor = function (e) {
            var n = this, i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = this, n = {};
            !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this, e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, n, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, n, i, r, o, s, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 0) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = t * s + (e * a.options.slidesPerRow + n);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, n) {
            var i, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function (e, n) {
            var i, r, o, s = this, a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, n);
                    break;
                case "next":
                    r = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, n, i = this;
            if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var r in e) {
                if (t < e[r]) {
                    t = n;
                    break
                }
                n = e[r]
            }
            return t
        }, e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 0 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function (t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function (t) {
            var e = this, n = {};
            n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function (t, e) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(t).css({zIndex: n.options.zIndex}), n.$slides.eq(t).animate({opacity: 1}, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function () {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = this, e = 0, n = 0, i = 0;
            if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++i; else for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) i = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function (t) {
            var e, n, i, r, o = this, s = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), s = n * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = this, n = 0, i = 0, r = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (r, o) {
                if (o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * i.swipeLeft) return e = o, !1
            }), Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
        }, e.prototype.init = function (e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this, n = Math.ceil(e.slideCount / e.options.slidesToShow),
                i = e.getNavigableIndexes().filter(function (t) {
                    return t >= 0 && t < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (n) {
                var r = i.indexOf(n);
                if (t(this).attr({role: "tabpanel", id: "slick-slide" + e.instanceUid + n, tabindex: -1}), -1 !== r) {
                    var o = "slick-slide-control" + e.instanceUid + r;
                    t("#" + o).length && t(this).attr({"aria-describedby": o})
                }
            }), e.$dots.attr("role", "tablist").find("li").each(function (r) {
                var o = i[r];
                t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + r,
                    "aria-controls": "slick-slide" + e.instanceUid + o,
                    "aria-label": r + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
            for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++) e.options.focusOnChange ? e.$slides.eq(r).attr({tabindex: "0"}) : e.$slides.eq(r).removeAttr("tabindex");
            e.activateADA()
        }, e.prototype.initArrowEvents = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this), n = t(this).attr("data-lazy"), i = t(this).attr("data-srcset"),
                        r = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function () {
                        e.animate({opacity: 0}, 100, function () {
                            i && (e.attr("srcset", i), r && e.attr("sizes", r)), e.attr("src", n).animate({opacity: 1}, 200, function () {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, n])
                        })
                    }, o.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, n])
                    }, o.src = n
                })
            }

            var n, i, r, o, s = this;
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), !0 === s.options.fade && (r > 0 && r--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(r, o), "anticipated" === s.options.lazyLoad) for (var a = r - 1, l = o, c = s.$slider.find(".slick-slide"), u = 0; u < s.options.slidesToScroll; u++) a < 0 && (a = s.slideCount - 1), n = n.add(c.eq(a)), n = n.add(c.eq(l)), a--, l++;
            e(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            this.changeSlide({data: {message: "next"}})
        }, e.prototype.orientationChange = function () {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function (e) {
            var n = this;
            if (!n.unslicked && (n.$slider.trigger("afterChange", [n, e]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange))) {
                t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()
            }
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            this.changeSlide({data: {message: "previous"}})
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var n, i, r, o, s, a = this, l = t("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), r = n.attr("data-srcset"), o = n.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function () {
                r && (n.attr("srcset", r), o && n.attr("sizes", o)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function () {
                e < 3 ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function (e) {
            var n, i, r = this;
            i = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > i && (r.currentSlide = i), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), n = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {currentSlide: n}), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, n, i, r = this, o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o) if (i = r.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (n = o[e].breakpoint; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                    r.breakpoints.push(n), r.breakpointSettings[n] = o[e].settings
                }
                r.breakpoints.sort(function (t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, n) {
            var i = this;
            if ("boolean" == typeof t ? (e = t, t = !0 === e ? 0 : i.slideCount - 1) : t = !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, e.prototype.setCSS = function (t) {
            var e, n, i = this, r = {};
            !0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function () {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function () {
            var e, n = this;
            n.$slides.each(function (i, r) {
                e = n.slideWidth * i * -1, !0 === n.options.rtl ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({position: "relative", left: e, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
            }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
        }, e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, n, i, r, o, s = this, a = !1;
            if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = r; else if ("multiple" === o) t.each(i, function (t, e) {
                s.options[t] = e
            }); else if ("responsive" === o) for (n in r) if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[n]]; else {
                for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === r[n].breakpoint && s.options.responsive.splice(e, 1), e--;
                s.options.responsive.push(r[n])
            }
            a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function () {
            var t = this, e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function (t) {
            var e, n, i, r, o = this;
            if (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
                var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1 + s, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, n, i, r = this;
            if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
                for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i + r.slideCount; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function (t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function (e) {
            var n = this, i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(i.attr("data-slick-index"));
            if (r || (r = 0), n.slideCount <= n.options.slidesToShow) return void n.slideHandler(r, !1, !0);
            n.slideHandler(r)
        }, e.prototype.slideHandler = function (t, e, n) {
            var i, r, o, s, a, l = null, c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) {
                if (!1 === e && c.asNavFor(t), i = t, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) return void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                    c.postSlide(i)
                }) : c.postSlide(i)));
                if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) return void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
                    c.postSlide(i)
                }) : c.postSlide(i)));
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(o), c.fadeSlide(r, function () {
                    c.postSlide(r)
                })) : c.postSlide(r), void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function () {
                    c.postSlide(r)
                }) : c.postSlide(r)
            }
        }, e.prototype.startLoad = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, n, i, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === r.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, n, i, r, o, s, a = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * r : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, e.prototype.swipeStart = function (t) {
            var e, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function () {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function () {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function () {
            var t, n, i = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = i.length;
            for (t = 0; t < s; t++) if ("object" == typeof r || void 0 === r ? i[t].slick = new e(i[t], r) : n = i[t].slick[r].apply(i[t].slick, o), void 0 !== n) return n;
            return i
        }
    })
}, function (t, e, n) {
    "use strict";
    var i, r, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    !function (n, a) {
        "object" == s(e) && void 0 !== t ? a(e) : (r = [e], i = a, void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = o))
    }(0, function (t) {/*!
 	 * ScrollToPlugin 3.0.0
 	 * https://greensock.com
 	 *
 	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 	 * Subject to the terms at https://greensock.com/standard-license or for
 	 * Club GreenSock members, the agreement issued with that membership.
 	 * @author: Jack Doyle, jack@greensock.com
 	*/
        function e() {
            return "undefined" != typeof window
        }

        function n() {
            return u || e() && (u = window.gsap) && u.registerPlugin && u
        }

        function i(t) {
            return "string" == typeof t
        }

        function r(t, e) {
            var n = "x" === e ? "Width" : "Height", i = "scroll" + n, r = "client" + n;
            return t === f || t === h || t === p ? Math.max(h[i], p[i]) - (f["inner" + n] || h[r] || p[r]) : t[i] - t["offset" + n]
        }

        function o(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === f && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != h[n] ? h : p), function () {
                return t[n]
            }
        }

        function a(t, e) {
            var n = g(t)[0].getBoundingClientRect(), i = !e || e === f || e === p, r = i ? {
                top: h.clientTop - (f.pageYOffset || h.scrollTop || p.scrollTop || 0),
                left: h.clientLeft - (f.pageXOffset || h.scrollLeft || p.scrollLeft || 0)
            } : e.getBoundingClientRect(), s = {x: n.left - r.left, y: n.top - r.top};
            return !i && e && (s.x += o(e, "x")(), s.y += o(e, "y")()), s
        }

        function l(t, e, n, o) {
            return isNaN(t) ? i(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + o : "max" === t ? r(e, n) : Math.min(r(e, n), a(t, e)[n]) : parseFloat(t)
        }

        function c() {
            u = n(), e() && u && (f = window, p = document.body, h = document.documentElement, g = u.utils.toArray, u.config({autoKillThreshold: 7}), v = u.config(), d = 1)
        }

        var u, d, f, h, p, g, v, m = {
            version: "3.0.0", name: "scrollTo", register: function (t) {
                u = t, c()
            }, init: function (t, e, n, r, a) {
                d || c();
                var u = this;
                u.isWin = t === f, u.target = t, u.tween = n, "object" != (void 0 === e ? "undefined" : s(e)) ? i((e = {y: e}).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                    y: e,
                    x: e
                }), u.vars = e, u.autoKill = !!e.autoKill, u.getX = o(t, "x"), u.getY = o(t, "y"), u.x = u.xPrev = u.getX(), u.y = u.yPrev = u.getY(), null != e.x ? (u.add(u, "x", u.x, l(e.x, t, "x", u.x) - (e.offsetX || 0), r, a, Math.round), u._props.push("scrollTo_x")) : u.skipX = 1, null != e.y ? (u.add(u, "y", u.y, l(e.y, t, "y", u.y) - (e.offsetY || 0), r, a, Math.round), u._props.push("scrollTo_y")) : u.skipY = 1
            }, render: function (t, e) {
                for (var n, i, o, s, a, l = e._pt, c = e.target, u = e.tween, d = e.autoKill, h = e.xPrev, p = e.yPrev, g = e.isWin; l;) l.r(t, l.d), l = l._next;
                n = g || !e.skipX ? e.getX() : h, o = (i = g || !e.skipY ? e.getY() : p) - p, s = n - h, a = v.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), d && (!e.skipX && (a < s || s < -a) && n < r(c, "x") && (e.skipX = 1), !e.skipY && (a < o || o < -a) && i < r(c, "y") && (e.skipY = 1), e.skipX && e.skipY && (u.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(u, e.vars.onAutoKillParams || []))), g ? f.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y) : (e.skipY || (c.scrollTop = e.y), e.skipX || (c.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            }, kill: function (t) {
                var e = "scrollTo" === t;
                !e && "scrollTo_x" !== t || (this.skipX = 1), !e && "scrollTo_y" !== t || (this.skipY = 1)
            }
        };
        m.max = r, m.getOffset = a, m.buildGetter = o, n() && u.registerPlugin(m), t.ScrollToPlugin = m, t.default = m, Object.defineProperty(t, "__esModule", {value: !0})
    })
}]);

/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function (b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        }, rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0],
                k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
            }
        }
    });
    var b = function (a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (c) {
            return !b("" + a(c).val())
        }, filled: function (c) {
            var d = a(c).val();
            return null !== d && !!b("" + d)
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
                        var e = a.data(this.form, "validator"), f = "on" + b.type.replace(/^validate/, ""),
                            g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.currentForm, e = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        e[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            }, showErrors: function (b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
                        return {message: a, element: c.findByName(b)[0]}
                    }), this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            }, resetElements: function (a) {
                var b;
                if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var d = this.name || a(this).attr("name"),
                        e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0))
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c, d, e = a(b), f = b.type,
                    g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(), h = a.map(g, function (a, b) {
                    return b
                }).length, i = !1, j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) {
                    e = {method: d, parameters: g[d]};
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            }, customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
            }, defaultMessage: function (b, c) {
                "string" == typeof c && (c = {method: c});
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            }, formatAndAdd: function (a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            }, errorsFor: function (b) {
                var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            }, escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {method: c})
                })
            }, destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function (a, d) {
                b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var a;
                b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0
            }, email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            }, date: function () {
                var a = !1;
                return function (b, c) {
                    return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                }
            }(), dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, minlength: function (a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c
            }, maxlength: function (a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d <= c
            }, rangelength: function (a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c[0] && d <= c[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || a <= c
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, step: function (b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()),
                    k = function (a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    }, l = function (a) {
                        return Math.round(a * Math.pow(10, e))
                    }, m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }, remote: function (b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {url: d} || d, h = a.param(a.extend({data: b}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function (a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var c, d = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, c) {
        var e = a.port;
        "abort" === a.mode && (d[e] && d[e].abort(), d[e] = c)
    }) : (c = a.ajax, a.ajax = function (b) {
        var e = ("mode" in b ? b : a.ajaxSettings).mode, f = ("port" in b ? b : a.ajaxSettings).port;
        return "abort" === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments)
    }), a
});
 

window.onresize = function(event) {
    if(window.innerWidth <= 600){
        $('.s-spec-detail-item2').addClass('hide')
        $('.span-3').attr('colspan',2)
        $('.s-spec-detail-item0').attr('colspan',1)
    }else{
        $('.s-spec-detail-item2').removeClass('hide')
        $('.span-3').attr('colspan',3)
        $('.s-spec-detail-item0').attr('colspan',2)
    }
};
function reloadSpecTable(n){
    if (n == 1) {
        $('.s-spec-detail-item1').removeClass('hide')
        $('.s-spec-detail-item2').addClass('hide')
    } else if (n == 2) {
        $('.s-spec-detail-item1').addClass('hide')
        $('.s-spec-detail-item2').removeClass('hide')
    }
}
$(function() {
  var list = $('.s-spec-type-car');
  var link = $('.s-spec-chose-type-car');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    var text = $(this).html();
    link.html(text);
    list.slideToggle(200);
  });
});

if(window.innerWidth <= 991){
    $('.back-to-top').removeClass('hide')
    $('.back-to-top-text').removeClass('hide')
}

/** Custom show PopUp */
const body = document.querySelector(".snap-scroll");
body.addEventListener("wheel", changeOverflow);
function changeOverflow() {
    body.style.overflow = "hidden";
}
function allowDrag() {
    if (window.innerWidth <= 1366) { 
        body.style.overflow = "auto";
    }
}
allowDrag();
const kApp = {
    closePopup: function (targetPopup, autoSlide) {
        let ele = $(targetPopup);
        ele.css({
            'opacity': 0,
            'z-index': -2
        });
        
        if (window.innerWidth <= 1366) { 
            body.style.overflow = "auto";
        }
        else{
            body.style.overflow = "hidden";
        }
        if (autoSlide) {
            $(autoSlide).flickity('playPlayer');
        }
    },
    openPopup: function (targetPopup, autoSlide) {
        let ele = $(targetPopup);
        ele.css({
            'opacity': 1,
            'z-index': 10
        });
        body.removeAttribute("onscroll");
        setTimeout(
            function() {
                body.style.overflow = "unset";
            }, 200);
        if (autoSlide) {
            $(autoSlide).flickity('stopPlayer');
        }
    },
}

function showAdsOnMobile(){
    $('.add-ons-mobile-prev').addClass('off');
    $('.add-ons-mobile').addClass('active');
}
function hideAdsOnMobile(){
    $('.add-ons-mobile-prev').removeClass('off');
    $('.add-ons-mobile').removeClass('active');
}
function showBtnAdsOnMobile() {
    $('.add-ons-mobile-prev').toggleClass('hidden');
    $('.add-ons-mobile').removeClass('active');
    $('.add-ons-mobile-prev').removeClass('off');
}
let li_menus = $('.header__menu .main-menu li')
let btnMobile = $('.add-ons-mobile-prev');
li_menus.each(function (index, ele) {
    $(ele).click(function () {
        if (btnMobile.hasClass('hidden')) {
            btnMobile.removeClass('hidden')
        }
    })
})

// Xử lý show/hide btn backToTop
var backToTopEl = document.getElementById("back-to-top-text");
var viewHeight = $(window).height();

$(window).on('scroll resize', (function (){
    var backToTopElDistance = window.pageYOffset + backToTopEl.getBoundingClientRect().top
    if (backToTopElDistance <= viewHeight + 50) {
        $('.back-to-top').addClass('hide')
        $('.back-to-top-text').addClass('hide')
    }
    else {
        $('.back-to-top').removeClass('hide')
        $('.back-to-top-text').removeClass('hide')
    }
}))


setTimeout(function(){
    $('.scroll-down-btn').fadeOut()
}, 5000)