!function (e) {
    function t(i) {
        if (n[i])return n[i].exports;
        var o = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    n(1), n(3), n(4), window.txv = {};
    var i = n(7), o = n(16);
    txv.lazyload = n(17), txv.lazyload.init(["img"]);
    var r = n(19), a = n(21);
    txv.nav = n(32);
    var s = n(48), c = n(61);
    txv.ua = n(14), txv.btnTj = r.btnTj, txv.cookie = n(6), txv.Message = n(33), txv.EventList = n(34), txv.vip = s, txv.util = n(15), txv.login = n(5), txv.log = n(40), txv.searchbox = n(63), txv.searchboxV2 = n(70), txv.report = n(12), txv.lazyreport = n(9), txv.Boss = {refresh: a.refresh}, txv.viptips = n(76), txv.tj2 = {
        pv: i.pv,
        btnTj: r.btnTj,
        virtualpv: o.pv,
        getPtag: r.getPtag,
        getQtag: r.getQtag
    };
    var l = !1;
    txv.common = {
        initPage: function (e) {
            l || (l = !0, txv.login.init(), txv.login.addReadyCallback(function () {
                txv.viptips.init()
            }), $("#searchForm").size() ? txv.searchboxV2.init() : txv.searchbox.initHeadSearch(), r.init(e), a.init(e), setTimeout(function () {
                function e() {
                    window.Webtips && window.Webtips({from: "core"})
                }

                window.Webtips ? e() : c("//vm.gtimg.cn/tencentvideo/script/webtips/comp/webtips.min.js", function (t) {
                    e()
                })
            }, 3e3))
        }
    }, i.keyPrefix = "txv.", o.virtualPath = "/txv/"
}, function (e, t, n) {
    var i, o;
    !function (r, a) {
        function s(e) {
            var t = e.length, n = de.type(e);
            return de.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function c(e) {
            var t = qe[e] = {};
            return de.each(e.match(he) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function l(e, t, n, i) {
            if (de.acceptData(e)) {
                var o, r, s = de.expando, c = "string" == typeof t, l = e.nodeType, u = l ? de.cache : e, p = l ? e[s] : e[s] && s;
                if (p && u[p] && (i || u[p].data) || !c || n !== a)return p || (l ? e[s] = p = oe.pop() || de.guid++ : p = s), u[p] || (u[p] = {}, l || (u[p].toJSON = de.noop)), ("object" == typeof t || "function" == typeof t) && (i ? u[p] = de.extend(u[p], t) : u[p].data = de.extend(u[p].data, t)), o = u[p], i || (o.data || (o.data = {}), o = o.data), n !== a && (o[de.camelCase(t)] = n), c ? (r = o[t], null == r && (r = o[de.camelCase(t)])) : r = o, r
            }
        }

        function u(e, t, n) {
            if (de.acceptData(e)) {
                var i, o, r, a = e.nodeType, s = a ? de.cache : e, c = a ? e[de.expando] : de.expando;
                if (s[c]) {
                    if (t && (r = n ? s[c] : s[c].data)) {
                        de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in r ? t = [t] : (t = de.camelCase(t), t = t in r ? [t] : t.split(" "));
                        for (i = 0, o = t.length; o > i; i++)delete r[t[i]];
                        if (!(n ? f : de.isEmptyObject)(r))return
                    }
                    (n || (delete s[c].data, f(s[c]))) && (a ? de.cleanData([e], !0) : de.support.deleteExpando || s != s.window ? delete s[c] : s[c] = null)
                }
            }
        }

        function p(e, t, n) {
            if (n === a && 1 === e.nodeType) {
                var i = "data-" + t.replace(Le, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : $e.test(n) ? de.parseJSON(n) : n
                    } catch (o) {
                    }
                    de.data(e, t, n)
                } else n = a
            }
            return n
        }

        function f(e) {
            var t;
            for (t in e)if (("data" !== t || !de.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function d() {
            return !0
        }

        function g() {
            return !1
        }

        function h(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function v(e, t, n) {
            if (t = t || 0, de.isFunction(t))return de.grep(e, function (e, i) {
                var o = !!t.call(e, i, e);
                return o === n
            });
            if (t.nodeType)return de.grep(e, function (e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var i = de.grep(e, function (e) {
                    return 1 === e.nodeType
                });
                if (Ge.test(t))return de.filter(t, i, !n);
                t = de.filter(t, i)
            }
            return de.grep(e, function (e) {
                return de.inArray(e, t) >= 0 === n
            })
        }

        function m(e) {
            var t = Ke.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function y(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function _(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function b(e) {
            var t = lt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)de._data(n, "globalEval", !t || de._data(t[i], "globalEval"))
        }

        function w(e, t) {
            if (1 === t.nodeType && de.hasData(e)) {
                var n, i, o, r = de._data(e), a = de._data(t, r), s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (i = 0, o = s[n].length; o > i; i++)de.event.add(t, n, s[n][i])
                }
                a.data && (a.data = de.extend({}, a.data))
            }
        }

        function k(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.support.noCloneEvent && t[de.expando]) {
                    o = de._data(t);
                    for (i in o.events)de.removeEvent(t, i, o.handle);
                    t.removeAttribute(de.expando)
                }
                "script" === n && t.text !== e.text ? (_(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.support.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && at.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(e, t) {
            var n, i, o = 0, r = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(t || "*") : a;
            if (!r)for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)!t || de.nodeName(i, t) ? r.push(i) : de.merge(r, C(i, t));
            return t === a || t && de.nodeName(e, t) ? de.merge([e], r) : r
        }

        function T(e) {
            at.test(e.type) && (e.defaultChecked = e.checked)
        }

        function j(e, t) {
            if (t in e)return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = $t.length; o--;)if (t = $t[o] + n, t in e)return t;
            return i
        }

        function S(e, t) {
            return e = t || e, "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e)
        }

        function q(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)i = e[a], i.style && (r[a] = de._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && S(i) && (r[a] = de._data(i, "olddisplay", N(i.nodeName)))) : r[a] || (o = S(i), (n && "none" !== n || !o) && de._data(i, "olddisplay", o ? n : de.css(i, "display"))));
            for (a = 0; s > a; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function $(e, t, n) {
            var i = wt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function L(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += de.css(e, n + qt[r], !0, o)), i ? ("content" === n && (a -= de.css(e, "padding" + qt[r], !0, o)), "margin" !== n && (a -= de.css(e, "border" + qt[r] + "Width", !0, o))) : (a += de.css(e, "padding" + qt[r], !0, o), "padding" !== n && (a += de.css(e, "border" + qt[r] + "Width", !0, o)));
            return a
        }

        function E(e, t, n) {
            var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = ht(e), a = de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = vt(e, t, r), (0 > o || null == o) && (o = e.style[t]), kt.test(o))return o;
                i = a && (de.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + L(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function N(e) {
            var t = Z, n = Tt[e];
            return n || (n = O(e, t), "none" !== n && n || (gt = (gt || de("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (gt[0].contentWindow || gt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = O(e, t), gt.detach()), Tt[e] = n), n
        }

        function O(e, t) {
            var n = de(t.createElement(e)).appendTo(t.body), i = de.css(n[0], "display");
            return n.remove(), i
        }

        function I(e, t, n, i) {
            var o;
            if (de.isArray(t))de.each(t, function (t, o) {
                n || Et.test(e) ? i(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            }); else if (n || "object" !== de.type(t))i(e, t); else for (o in t)I(e + "[" + o + "]", t[o], n, i)
        }

        function A(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(he) || [];
                if (de.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function B(e, t, n, i) {
            function o(c) {
                var l;
                return r[c] = !0, de.each(e[c] || [], function (e, c) {
                    var u = c(t, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : a : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }

            var r = {}, s = e === Gt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function D(e, t) {
            var n, i, o = de.ajaxSettings.flatOptions || {};
            for (i in t)t[i] !== a && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && de.extend(!0, e, n), e
        }

        function R(e, t, n) {
            var i, o, r, s, c = e.contents, l = e.dataTypes, u = e.responseFields;
            for (s in u)s in n && (t[u[s]] = n[s]);
            for (; "*" === l[0];)l.shift(), o === a && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)for (s in c)if (c[s] && c[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0]in n)r = l[0]; else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : a
        }

        function P(e, t) {
            var n, i, o, r, a = {}, s = 0, c = e.dataTypes.slice(), l = c[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1])for (o in e.converters)a[o.toLowerCase()] = e.converters[o];
            for (; i = c[++s];)if ("*" !== i) {
                if ("*" !== l && l !== i) {
                    if (o = a[l + " " + i] || a["* " + i], !o)for (n in a)if (r = n.split(" "), r[1] === i && (o = a[l + " " + r[0]] || a["* " + r[0]])) {
                        o === !0 ? o = a[n] : a[n] !== !0 && (i = r[0], c.splice(s--, 0, i));
                        break
                    }
                    if (o !== !0)if (o && e["throws"])t = o(t); else try {
                        t = o(t)
                    } catch (u) {
                        return {state: "parsererror", error: o ? u : "No conversion from " + l + " to " + i}
                    }
                }
                l = i
            }
            return {state: "success", data: t}
        }

        function H() {
            try {
                return new r.XMLHttpRequest
            } catch (e) {
            }
        }

        function M() {
            try {
                return new r.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function F() {
            return setTimeout(function () {
                on = a
            }), on = de.now()
        }

        function U(e, t) {
            de.each(t, function (t, n) {
                for (var i = (un[t] || []).concat(un["*"]), o = 0, r = i.length; r > o; o++)if (i[o].call(e, t, n))return
            })
        }

        function W(e, t, n) {
            var i, o, r = 0, a = ln.length, s = de.Deferred().always(function () {
                delete c.elem
            }), c = function () {
                if (o)return !1;
                for (var t = on || F(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, a = 0, c = l.tweens.length; c > a; a++)l.tweens[a].run(r);
                return s.notifyWith(e, [l, r, n]), 1 > r && c ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: on || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? l.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }), u = l.props;
            for (z(u, l.opts.specialEasing); a > r; r++)if (i = ln[r].call(l, e, u, l.opts))return i;
            return U(l, u), de.isFunction(l.opts.start) && l.opts.start.call(e, l), de.fx.timer(de.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function z(e, t) {
            var n, i, o, r, a;
            for (o in e)if (i = de.camelCase(o), r = t[i], n = e[o], de.isArray(n) && (r = n[1], n = e[o] = n[0]), o !== i && (e[i] = n, delete e[o]), a = de.cssHooks[i], a && "expand"in a) {
                n = a.expand(n), delete e[i];
                for (o in n)o in e || (e[o] = n[o], t[o] = r)
            } else t[i] = r
        }

        function V(e, t, n) {
            var i, o, r, a, s, c, l, u, p, f = this, d = e.style, g = {}, h = [], v = e.nodeType && S(e);
            n.queue || (u = de._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function () {
                u.unqueued || p()
            }), u.unqueued++, f.always(function () {
                f.always(function () {
                    u.unqueued--, de.queue(e, "fx").length || u.empty.fire()
                })
            })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === de.css(e, "display") && "none" === de.css(e, "float") && (de.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", de.support.shrinkWrapBlocks || f.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (o in t)if (a = t[o], an.exec(a)) {
                if (delete t[o], c = c || "toggle" === a, a === (v ? "hide" : "show"))continue;
                h.push(o)
            }
            if (r = h.length) {
                s = de._data(e, "fxshow") || de._data(e, "fxshow", {}), "hidden"in s && (v = s.hidden), c && (s.hidden = !v), v ? de(e).show() : f.done(function () {
                    de(e).hide()
                }), f.done(function () {
                    var t;
                    de._removeData(e, "fxshow");
                    for (t in g)de.style(e, t, g[t])
                });
                for (o = 0; r > o; o++)i = h[o], l = f.createTween(i, v ? s[i] : 0), g[i] = s[i] || de.style(e, i), i in s || (s[i] = l.start, v && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function Q(e, t, n, i, o) {
            return new Q.prototype.init(e, t, n, i, o)
        }

        function G(e, t) {
            var n, i = {height: e}, o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t)n = qt[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function X(e) {
            return de.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }

        var Y, K, J = typeof a, Z = r.document, ee = r.location, te = r.jQuery, ne = r.$, ie = {}, oe = [], re = "1.9.1", ae = oe.concat, se = oe.push, ce = oe.slice, le = oe.indexOf, ue = ie.toString, pe = ie.hasOwnProperty, fe = re.trim, de = function (e, t) {
            return new de.fn.init(e, t, K)
        }, ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, he = /\S+/g, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, _e = /^[\],:{}\s]*$/, be = /(?:^|:|,)(?:\s*\[)+/g, xe = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, we = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ke = /^-ms-/, Ce = /-([\da-z])/gi, Te = function (e, t) {
            return t.toUpperCase()
        }, je = function (e) {
            (Z.addEventListener || "load" === e.type || "complete" === Z.readyState) && (Se(), de.ready())
        }, Se = function () {
            Z.addEventListener ? (Z.removeEventListener("DOMContentLoaded", je, !1), r.removeEventListener("load", je, !1)) : (Z.detachEvent("onreadystatechange", je), r.detachEvent("onload", je))
        };
        de.fn = de.prototype = {
            jquery: re, constructor: de, init: function (e, t, n) {
                var i, o;
                if (!e)return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ye.test(i[1]) && de.isPlainObject(t))for (i in t)de.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if (o = Z.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2])return n.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = Z, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? n.ready(e) : (e.selector !== a && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this))
            }, selector: "", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return ce.call(this)
            }, get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            }, pushStack: function (e) {
                var t = de.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return de.each(this, e, t)
            }, ready: function (e) {
                return de.ready.promise().done(e), this
            }, slice: function () {
                return this.pushStack(ce.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, map: function (e) {
                return this.pushStack(de.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: se, sort: [].sort, splice: [].splice
        }, de.fn.init.prototype = de.fn, de.extend = de.fn.extend = function () {
            var e, t, n, i, o, r, s = arguments[0] || {}, c = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, c = 2), "object" == typeof s || de.isFunction(s) || (s = {}), l === c && (s = this, --c); l > c; c++)if (null != (o = arguments[c]))for (i in o)e = s[i], n = o[i], s !== n && (u && n && (de.isPlainObject(n) || (t = de.isArray(n))) ? (t ? (t = !1, r = e && de.isArray(e) ? e : []) : r = e && de.isPlainObject(e) ? e : {}, s[i] = de.extend(u, r, n)) : n !== a && (s[i] = n));
            return s
        }, de.extend({
            noConflict: function (e) {
                return r.$ === de && (r.$ = ne), e && r.jQuery === de && (r.jQuery = te), de
            }, isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? de.readyWait++ : de.ready(!0)
            }, ready: function (e) {
                if (e === !0 ? !--de.readyWait : !de.isReady) {
                    if (!Z.body)return setTimeout(de.ready);
                    de.isReady = !0, e !== !0 && --de.readyWait > 0 || (Y.resolveWith(Z, [de]), de.fn.trigger && de(Z).trigger("ready").off("ready"))
                }
            }, isFunction: function (e) {
                return "function" === de.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === de.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[ue.call(e)] || "object" : typeof e
            }, isPlainObject: function (e) {
                if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e))return !1;
                try {
                    if (e.constructor && !pe.call(e, "constructor") && !pe.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (t) {
                    return !1
                }
                var n;
                for (n in e);
                return n === a || pe.call(e, n)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, error: function (e) {
                throw Error(e)
            }, parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e)return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || Z;
                var i = ye.exec(e), o = !n && [];
                return i ? [t.createElement(i[1])] : (i = de.buildFragment([e], t, o), o && de(o).remove(), de.merge([], i.childNodes))
            }, parseJSON: function (e) {
                return r.JSON && r.JSON.parse ? r.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = de.trim(e), e && _e.test(e.replace(xe, "@").replace(we, "]").replace(be, ""))) ? Function("return " + e)() : (de.error("Invalid JSON: " + e), a)
            }, parseXML: function (e) {
                var t, n;
                if (!e || "string" != typeof e)return null;
                try {
                    r.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                } catch (i) {
                    t = a
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + e), t
            }, noop: function () {
            }, globalEval: function (e) {
                e && de.trim(e) && (r.execScript || function (e) {
                    r.eval.call(r, e)
                })(e)
            }, camelCase: function (e) {
                return e.replace(ke, "ms-").replace(Ce, Te)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, n) {
                var i, o = 0, r = e.length, a = s(e);
                if (n) {
                    if (a)for (; r > o && (i = t.apply(e[o], n), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], n), i === !1)break
                } else if (a)for (; r > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
                return e
            }, trim: fe && !fe.call("\ufeff聽") ? function (e) {
                return null == e ? "" : fe.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(ve, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (le)return le.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                var n = t.length, i = e.length, o = 0;
                if ("number" == typeof n)for (; n > o; o++)e[i++] = t[o]; else for (; t[o] !== a;)e[i++] = t[o++];
                return e.length = i, e
            }, grep: function (e, t, n) {
                var i, o = [], r = 0, a = e.length;
                for (n = !!n; a > r; r++)i = !!t(e[r], r), n !== i && o.push(e[r]);
                return o
            }, map: function (e, t, n) {
                var i, o = 0, r = e.length, a = s(e), c = [];
                if (a)for (; r > o; o++)i = t(e[o], o, n), null != i && (c[c.length] = i); else for (o in e)i = t(e[o], o, n), null != i && (c[c.length] = i);
                return ae.apply([], c)
            }, guid: 1, proxy: function (e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), de.isFunction(e) ? (n = ce.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(ce.call(arguments)))
                }, i.guid = e.guid = e.guid || de.guid++, i) : a
            }, access: function (e, t, n, i, o, r, s) {
                var c = 0, l = e.length, u = null == n;
                if ("object" === de.type(n)) {
                    o = !0;
                    for (c in n)de.access(e, t, c, n[c], !0, r, s)
                } else if (i !== a && (o = !0, de.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(de(e), n)
                    })), t))for (; l > c; c++)t(e[c], n, s ? i : i.call(e[c], c, t(e[c], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
            }, now: function () {
                return (new Date).getTime()
            }
        }), de.ready.promise = function (e) {
            if (!Y)if (Y = de.Deferred(), "complete" === Z.readyState)setTimeout(de.ready); else if (Z.addEventListener)Z.addEventListener("DOMContentLoaded", je, !1), r.addEventListener("load", je, !1); else {
                Z.attachEvent("onreadystatechange", je), r.attachEvent("onload", je);
                var t = !1;
                try {
                    t = null == r.frameElement && Z.documentElement
                } catch (n) {
                }
                t && t.doScroll && function i() {
                    if (!de.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        Se(), de.ready()
                    }
                }()
            }
            return Y.promise(e)
        }, de.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            ie["[object " + t + "]"] = t.toLowerCase()
        }), K = de(Z);
        var qe = {};
        de.Callbacks = function (e) {
            e = "string" == typeof e ? qe[e] || c(e) : de.extend({}, e);
            var t, n, i, o, r, s, l = [], u = !e.once && [], p = function (a) {
                for (n = e.memory && a, i = !0, r = s || 0, s = 0, o = l.length, t = !0; l && o > r; r++)if (l[r].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, l && (u ? u.length && p(u.shift()) : n ? l = [] : f.disable())
            }, f = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function r(t) {
                            de.each(t, function (t, n) {
                                var i = de.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = i, p(n))
                    }
                    return this
                }, remove: function () {
                    return l && de.each(arguments, function (e, n) {
                        for (var i; (i = de.inArray(n, l, i)) > -1;)l.splice(i, 1), t && (o >= i && o--, r >= i && r--)
                    }), this
                }, has: function (e) {
                    return e ? de.inArray(e, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], this
                }, disable: function () {
                    return l = u = n = a, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return u = a, n || f.disable(), this
                }, locked: function () {
                    return !u
                }, fireWith: function (e, n) {
                    return n = n || [], n = [e, n.slice ? n.slice() : n], !l || i && !u || (t ? u.push(n) : p(n)), this
                }, fire: function () {
                    return f.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return f
        }, de.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", de.Callbacks("once memory"), "resolved"], ["reject", "fail", de.Callbacks("once memory"), "rejected"], ["notify", "progress", de.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return de.Deferred(function (n) {
                            de.each(t, function (t, r) {
                                var a = r[0], s = de.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && de.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? de.extend(e, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, de.each(t, function (e, r) {
                    var a = r[2], s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t, n, i, o = 0, r = ce.call(arguments), a = r.length, s = 1 !== a || e && de.isFunction(e.promise) ? a : 0, c = 1 === s ? e : de.Deferred(), l = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? ce.call(arguments) : o, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
                if (a > 1)for (t = Array(a), n = Array(a), i = Array(a); a > o; o++)r[o] && de.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, t)) : --s;
                return s || c.resolveWith(i, r), c.promise()
            }
        }), de.support = function () {
            var e, t, n, i, o, a, s, c, l, u, p = Z.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = p.getElementsByTagName("*"), n = p.getElementsByTagName("a")[0], !t || !n || !t.length)return {};
            o = Z.createElement("select"), s = o.appendChild(Z.createElement("option")), i = p.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = {
                getSetAttribute: "t" !== p.className,
                leadingWhitespace: 3 === p.firstChild.nodeType,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(n.getAttribute("style")),
                hrefNormalized: "/a" === n.getAttribute("href"),
                opacity: /^0.5/.test(n.style.opacity),
                cssFloat: !!n.style.cssFloat,
                checkOn: !!i.value,
                optSelected: s.selected,
                enctype: !!Z.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== Z.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === Z.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, i.checked = !0, e.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled;
            try {
                delete p.test
            } catch (f) {
                e.deleteExpando = !1
            }
            i = Z.createElement("input"), i.setAttribute("value", ""), e.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), e.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Z.createDocumentFragment(), a.appendChild(i), e.appendChecked = i.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
                e.noCloneEvent = !1
            }), p.cloneNode(!0).click());
            for (u in{
                submit: !0,
                change: !0,
                focusin: !0
            })p.setAttribute(c = "on" + u, "t"), e[u + "Bubbles"] = c in r || p.attributes[c].expando === !1;
            return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === p.style.backgroundClip, de(function () {
                var t, n, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = Z.getElementsByTagName("body")[0];
                a && (t = Z.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(t).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", e.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === p.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, r.getComputedStyle && (e.pixelPosition = "1%" !== (r.getComputedStyle(p, null) || {}).top, e.boxSizingReliable = "4px" === (r.getComputedStyle(p, null) || {width: "4px"}).width, n = p.appendChild(Z.createElement("div")), n.style.cssText = p.style.cssText = o, n.style.marginRight = n.style.width = "0", p.style.width = "1px", e.reliableMarginRight = !parseFloat((r.getComputedStyle(n, null) || {}).marginRight)), typeof p.style.zoom !== J && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== p.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(t), t = p = i = n = null)
            }), t = o = a = s = n = i = null, e
        }();
        var $e = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Le = /([A-Z])/g;
        de.extend({
            cache: {},
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
            hasData: function (e) {
                return e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando], !!e && !f(e)
            },
            data: function (e, t, n) {
                return l(e, t, n)
            },
            removeData: function (e, t) {
                return u(e, t)
            },
            _data: function (e, t, n) {
                return l(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return u(e, t, !0)
            },
            acceptData: function (e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
                var t = e.nodeName && de.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), de.fn.extend({
            data: function (e, t) {
                var n, i, o = this[0], r = 0, s = null;
                if (e === a) {
                    if (this.length && (s = de.data(o), 1 === o.nodeType && !de._data(o, "parsedAttrs"))) {
                        for (n = o.attributes; n.length > r; r++)i = n[r].name, i.indexOf("data-") || (i = de.camelCase(i.slice(5)), p(o, i, s[i]));
                        de._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function () {
                    de.data(this, e)
                }) : de.access(this, function (t) {
                    return t === a ? o ? p(o, e, de.data(o, e)) : null : (this.each(function () {
                        de.data(this, e, t)
                    }), a)
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    de.removeData(this, e)
                })
            }
        }), de.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = de._data(e, t), n && (!i || de.isArray(n) ? i = de._data(e, t, de.makeArray(n)) : i.push(n)), i || []) : a
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = de.queue(e, t), i = n.length, o = n.shift(), r = de._queueHooks(e, t), a = function () {
                    de.dequeue(e, t)
                };
                "inprogress" === o && (o = n.shift(), i--), r.cur = o, o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return de._data(e, n) || de._data(e, n, {
                        empty: de.Callbacks("once memory").add(function () {
                            de._removeData(e, t + "queue"), de._removeData(e, n)
                        })
                    })
            }
        }), de.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? de.queue(this[0], e) : t === a ? this : this.each(function () {
                    var n = de.queue(this, e, t);
                    de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    de.dequeue(this, e)
                })
            }, delay: function (e, t) {
                return e = de.fx ? de.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = de.Deferred(), r = this, s = this.length, c = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = a), e = e || "fx"; s--;)n = de._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(c));
                return c(), o.promise(t)
            }
        });
        var Ee, Ne, Oe = /[\t\r\n]/g, Ie = /\r/g, Ae = /^(?:input|select|textarea|button|object)$/i, Be = /^(?:a|area)$/i, De = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Re = /^(?:checked|selected)$/i, Pe = de.support.getSetAttribute, He = de.support.input;
        de.fn.extend({
            attr: function (e, t) {
                return de.access(this, de.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    de.removeAttr(this, e)
                })
            }, prop: function (e, t) {
                return de.access(this, de.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = de.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = a, delete this[e]
                    } catch (t) {
                    }
                })
            }, addClass: function (e) {
                var t, n, i, o, r, a = 0, s = this.length, c = "string" == typeof e && e;
                if (de.isFunction(e))return this.each(function (t) {
                    de(this).addClass(e.call(this, t, this.className))
                });
                if (c)for (t = (e || "").match(he) || []; s > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : " ")) {
                    for (r = 0; o = t[r++];)0 > i.indexOf(" " + o + " ") && (i += o + " ");
                    n.className = de.trim(i)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, a = 0, s = this.length, c = 0 === arguments.length || "string" == typeof e && e;
                if (de.isFunction(e))return this.each(function (t) {
                    de(this).removeClass(e.call(this, t, this.className))
                });
                if (c)for (t = (e || "").match(he) || []; s > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : "")) {
                    for (r = 0; o = t[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    n.className = e ? de.trim(i) : ""
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = "boolean" == typeof t;
                return de.isFunction(e) ? this.each(function (n) {
                    de(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)for (var o, r = 0, a = de(this), s = t, c = e.match(he) || []; o = c[r++];)s = i ? s : !a.hasClass(o), a[s ? "addClass" : "removeClass"](o); else(n === J || "boolean" === n) && (this.className && de._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : de._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Oe, " ").indexOf(t) >= 0)return !0;
                return !1
            }, val: function (e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = de.isFunction(e), this.each(function (t) {
                    var o, r = de(this);
                    1 === this.nodeType && (o = i ? e.call(this, t, r.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : de.isArray(o) && (o = de.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), n = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], n && "set"in n && n.set(this, o, "value") !== a || (this.value = o))
                })) : o ? (n = de.valHooks[o.type] || de.valHooks[o.nodeName.toLowerCase()], n && "get"in n && (t = n.get(o, "value")) !== a ? t : (t = o.value, "string" == typeof t ? t.replace(Ie, "") : null == t ? "" : t)) : void 0
            }
        }), de.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, c = 0 > o ? s : r ? o : 0; s > c; c++)if (n = i[c], !(!n.selected && c !== o || (de.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && de.nodeName(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(), r)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        var n = de.makeArray(t);
                        return de(e).find("option").each(function () {
                            this.selected = de.inArray(de(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function (e, t, n) {
                var i, o, r, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === J ? de.prop(e, t, n) : (o = 1 !== s || !de.isXMLDoc(e), o && (t = t.toLowerCase(), i = de.attrHooks[t] || (De.test(t) ? Ne : Ee)), n === a ? i && o && "get"in i && null !== (r = i.get(e, t)) ? r : (typeof e.getAttribute !== J && (r = e.getAttribute(t)), null == r ? a : r) : null !== n ? i && o && "set"in i && (r = i.set(e, n, t)) !== a ? r : (e.setAttribute(t, n + ""), n) : (de.removeAttr(e, t), a)) : void 0
            },
            removeAttr: function (e, t) {
                var n, i, o = 0, r = t && t.match(he);
                if (r && 1 === e.nodeType)for (; n = r[o++];)i = de.propFix[n] || n,
                    De.test(n) ? !Pe && Re.test(n) ? e[de.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : de.attr(e, n, ""), e.removeAttribute(Pe ? n : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!de.support.radioValue && "radio" === t && de.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, t, n) {
                var i, o, r, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !de.isXMLDoc(e), r && (t = de.propFix[t] || t, o = de.propHooks[t]), n !== a ? o && "set"in o && (i = o.set(e, n, t)) !== a ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = e.getAttributeNode("tabindex");
                        return t && t.specified ? parseInt(t.value, 10) : Ae.test(e.nodeName) || Be.test(e.nodeName) && e.href ? 0 : a
                    }
                }
            }
        }), Ne = {
            get: function (e, t) {
                var n = de.prop(e, t), i = "boolean" == typeof n && e.getAttribute(t), o = "boolean" == typeof n ? He && Pe ? null != i : Re.test(t) ? e[de.camelCase("default-" + t)] : !!i : e.getAttributeNode(t);
                return o && o.value !== !1 ? t.toLowerCase() : a
            }, set: function (e, t, n) {
                return t === !1 ? de.removeAttr(e, n) : He && Pe || !Re.test(n) ? e.setAttribute(!Pe && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, He && Pe || (de.attrHooks.value = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return de.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : a
            }, set: function (e, t, n) {
                return de.nodeName(e, "input") ? (e.defaultValue = t, a) : Ee && Ee.set(e, t, n)
            }
        }), Pe || (Ee = de.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && ("id" === t || "name" === t || "coords" === t ? "" !== n.value : n.specified) ? n.value : a
            }, set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : a
            }
        }, de.attrHooks.contenteditable = {
            get: Ee.get, set: function (e, t, n) {
                Ee.set(e, "" === t ? !1 : t, n)
            }
        }, de.each(["width", "height"], function (e, t) {
            de.attrHooks[t] = de.extend(de.attrHooks[t], {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : a
                }
            })
        })), de.support.hrefNormalized || (de.each(["href", "src", "width", "height"], function (e, t) {
            de.attrHooks[t] = de.extend(de.attrHooks[t], {
                get: function (e) {
                    var n = e.getAttribute(t, 2);
                    return null == n ? a : n
                }
            })
        }), de.each(["href", "src"], function (e, t) {
            de.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), de.support.style || (de.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || a
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), de.support.optSelected || (de.propHooks.selected = de.extend(de.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), de.support.enctype || (de.propFix.enctype = "encoding"), de.support.checkOn || de.each(["radio", "checkbox"], function () {
            de.valHooks[this] = {
                get: function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), de.each(["radio", "checkbox"], function () {
            de.valHooks[this] = de.extend(de.valHooks[this], {
                set: function (e, t) {
                    return de.isArray(t) ? e.checked = de.inArray(de(e).val(), t) >= 0 : a
                }
            })
        });
        var Me = /^(?:input|select|textarea)$/i, Fe = /^key/, Ue = /^(?:mouse|contextmenu)|click/, We = /^(?:focusinfocus|focusoutblur)$/, ze = /^([^.]*)(?:\.(.+)|)$/;
        de.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, s, c, l, u, p, f, d, g, h, v, m = de._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = de.guid++), (s = m.events) || (s = m.events = {}), (p = m.handle) || (p = m.handle = function (e) {
                        return typeof de === J || e && de.event.triggered === e.type ? a : de.event.dispatch.apply(p.elem, arguments)
                    }, p.elem = e), t = (t || "").match(he) || [""], c = t.length; c--;)r = ze.exec(t[c]) || [], g = v = r[1], h = (r[2] || "").split(".").sort(), u = de.event.special[g] || {}, g = (o ? u.delegateType : u.bindType) || g, u = de.event.special[g] || {}, f = de.extend({
                        type: g,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && de.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (d = s[g]) || (d = s[g] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, h, p) !== !1 || (e.addEventListener ? e.addEventListener(g, p, !1) : e.attachEvent && e.attachEvent("on" + g, p))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), de.event.global[g] = !0;
                    e = null
                }
            },
            remove: function (e, t, n, i, o) {
                var r, a, s, c, l, u, p, f, d, g, h, v = de.hasData(e) && de._data(e);
                if (v && (u = v.events)) {
                    for (t = (t || "").match(he) || [""], l = t.length; l--;)if (s = ze.exec(t[l]) || [], d = h = s[1], g = (s[2] || "").split(".").sort(), d) {
                        for (p = de.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, f = u[d] || [], s = s[2] && RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = f.length; r--;)a = f[r], !o && h !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        c && !f.length && (p.teardown && p.teardown.call(e, g, v.handle) !== !1 || de.removeEvent(e, d, v.handle), delete u[d])
                    } else for (d in u)de.event.remove(e, d + t[l], n, i, !0);
                    de.isEmptyObject(u) && (delete v.handle, de._removeData(e, "events"))
                }
            },
            trigger: function (e, t, n, i) {
                var o, s, c, l, u, p, f, d = [n || Z], g = pe.call(e, "type") ? e.type : e, h = pe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (c = p = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !We.test(g + de.event.triggered) && (g.indexOf(".") >= 0 && (h = g.split("."), g = h.shift(), h.sort()), s = 0 > g.indexOf(":") && "on" + g, e = e[de.expando] ? e : new de.Event(g, "object" == typeof e && e), e.isTrigger = !0, e.namespace = h.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = a, e.target || (e.target = n), t = null == t ? [e] : de.makeArray(t, [e]), u = de.event.special[g] || {}, i || !u.trigger || u.trigger.apply(n, t) !== !1)) {
                    if (!i && !u.noBubble && !de.isWindow(n)) {
                        for (l = u.delegateType || g, We.test(l + g) || (c = c.parentNode); c; c = c.parentNode)d.push(c), p = c;
                        p === (n.ownerDocument || Z) && d.push(p.defaultView || p.parentWindow || r)
                    }
                    for (f = 0; (c = d[f++]) && !e.isPropagationStopped();)e.type = f > 1 ? l : u.bindType || g, o = (de._data(c, "events") || {})[e.type] && de._data(c, "handle"), o && o.apply(c, t), o = s && c[s], o && de.acceptData(c) && o.apply && o.apply(c, t) === !1 && e.preventDefault();
                    if (e.type = g, !(i || e.isDefaultPrevented() || u._default && u._default.apply(n.ownerDocument, t) !== !1 || "click" === g && de.nodeName(n, "a") || !de.acceptData(n) || !s || !n[g] || de.isWindow(n))) {
                        p = n[s], p && (n[s] = null), de.event.triggered = g;
                        try {
                            n[g]()
                        } catch (v) {
                        }
                        de.event.triggered = a, p && (n[s] = p)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = de.event.fix(e);
                var t, n, i, o, r, s = [], c = ce.call(arguments), l = (de._data(this, "events") || {})[e.type] || [], u = de.event.special[e.type] || {};
                if (c[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = de.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((de.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, c), n !== a && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, s = [], c = t.delegateCount, l = e.target;
                if (c && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], r = 0; c > r; r++)i = t[r], n = i.selector + " ", o[n] === a && (o[n] = i.needsContext ? de(n, this).index(l) >= 0 : de.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && s.push({elem: l, handlers: o})
                }
                return t.length > c && s.push({elem: this, handlers: t.slice(c)}), s
            },
            fix: function (e) {
                if (e[de.expando])return e;
                var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ue.test(o) ? this.mouseHooks : Fe.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new de.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, o, r = t.button, s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || Z, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || r === a || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, click: {
                    trigger: function () {
                        return de.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : a
                    }
                }, focus: {
                    trigger: function () {
                        if (this !== Z.activeElement && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === Z.activeElement && this.blur ? (this.blur(), !1) : a
                    }, delegateType: "focusout"
                }, beforeunload: {
                    postDispatch: function (e) {
                        e.result !== a && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var o = de.extend(new de.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                i ? de.event.trigger(o, null, t) : de.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, de.removeEvent = Z.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === J && (e[i] = null), e.detachEvent(i, n))
        }, de.Event = function (e, t) {
            return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? d : g) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), this[de.expando] = !0, a) : new de.Event(e, t)
        }, de.Event.prototype = {
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = d, this.stopPropagation()
            }
        }, de.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            de.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return (!o || o !== i && !de.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.support.submitBubbles || (de.event.special.submit = {
            setup: function () {
                return de.nodeName(this, "form") ? !1 : (de.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = de.nodeName(t, "input") || de.nodeName(t, "button") ? t.form : a;
                    n && !de._data(n, "submitBubbles") && (de.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), de._data(n, "submitBubbles", !0))
                }), a)
            }, postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function () {
                return de.nodeName(this, "form") ? !1 : (de.event.remove(this, "._submit"), a)
            }
        }), de.support.changeBubbles || (de.event.special.change = {
            setup: function () {
                return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (de.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), de.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), de.event.simulate("change", this, e, !0)
                })), !1) : (de.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Me.test(t.nodeName) && !de._data(t, "changeBubbles") && (de.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e, !0)
                    }), de._data(t, "changeBubbles", !0))
                }), a)
            }, handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : a
            }, teardown: function () {
                return de.event.remove(this, "._change"), !Me.test(this.nodeName)
            }
        }), de.support.focusinBubbles || de.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = 0, i = function (e) {
                de.event.simulate(t, e.target, de.event.fix(e), !0)
            };
            de.event.special[t] = {
                setup: function () {
                    0 === n++ && Z.addEventListener(e, i, !0)
                }, teardown: function () {
                    0 === --n && Z.removeEventListener(e, i, !0)
                }
            }
        }), de.fn.extend({
            on: function (e, t, n, i, o) {
                var r, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = a);
                    for (r in e)this.on(r, t, n, e[r], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = a) : null == i && ("string" == typeof t ? (i = n, n = a) : (i = n, n = t, t = a)), i === !1)i = g; else if (!i)return this;
                return 1 === o && (s = i, i = function (e) {
                    return de().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = de.guid++)), this.each(function () {
                    de.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e)this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = a), n === !1 && (n = g), this.each(function () {
                    de.event.remove(this, e, n, t)
                })
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }, trigger: function (e, t) {
                return this.each(function () {
                    de.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? de.event.trigger(e, t, n, !0) : a
            }
        }), function (e, t) {
            function n(e) {
                return ge.test(e + "")
            }

            function i() {
                var e, t = [];
                return e = function (n, i) {
                    return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
                }
            }

            function o(e) {
                return e[P] = !0, e
            }

            function r(e) {
                var t = E.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function a(e, t, n, i) {
                var o, r, a, s, c, l, u, d, g, h;
                if ((t ? t.ownerDocument || t : H) !== E && L(t), t = t || E, n = n || [], !e || "string" != typeof e)return n;
                if (1 !== (s = t.nodeType) && 9 !== s)return [];
                if (!O && !i) {
                    if (o = he.exec(e))if (a = o[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(a), !r || !r.parentNode)return n;
                            if (r.id === a)return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && D(t, r) && r.id === a)return n.push(r), n
                    } else {
                        if (o[2])return K.apply(n, J.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = o[3]) && M.getByClassName && t.getElementsByClassName)return K.apply(n, J.call(t.getElementsByClassName(a), 0)), n
                    }
                    if (M.qsa && !I.test(e)) {
                        if (u = !0, d = P, g = t, h = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = p(e), (u = t.getAttribute("id")) ? d = u.replace(ye, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;)l[c] = d + f(l[c]);
                            g = fe.test(e) && t.parentNode || t, h = l.join(",")
                        }
                        if (h)try {
                            return K.apply(n, J.call(g.querySelectorAll(h), 0)), n
                        } catch (v) {
                        } finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(ae, "$1"), t, n, i)
            }

            function s(e, t) {
                var n = t && e, i = n && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function c(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return o(function (t) {
                    return t = +t, o(function (n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;)n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function p(e, t) {
                var n, i, o, r, s, c, l, u = z[e + " "];
                if (u)return t ? 0 : u.slice(0);
                for (s = e, c = [], l = C.preFilter; s;) {
                    (!n || (i = se.exec(s))) && (i && (s = s.slice(i[0].length) || s), c.push(o = [])), n = !1, (i = ce.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(ae, " ")
                    }), s = s.slice(n.length));
                    for (r in C.filter)!(i = pe[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n)break
                }
                return t ? s.length : s ? a.error(e) : z(e, c).slice(0)
            }

            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                return i
            }

            function d(e, t, n) {
                var i = t.dir, o = n && "parentNode" === i, r = U++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
                } : function (t, n, a) {
                    var s, c, l, u = F + " " + r;
                    if (a) {
                        for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, a))return !0
                    } else for (; t = t[i];)if (1 === t.nodeType || o)if (l = t[P] || (t[P] = {}), (c = l[i]) && c[0] === u) {
                        if ((s = c[1]) === !0 || s === k)return s === !0
                    } else if (c = l[i] = [u], c[1] = e(t, n, a) || k, c[1] === !0)return !0
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                    return !0
                } : e[0]
            }

            function h(e, t, n, i, o) {
                for (var r, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), l && t.push(s));
                return a
            }

            function v(e, t, n, i, r, a) {
                return i && !i[P] && (i = v(i)), r && !r[P] && (r = v(r, a)), o(function (o, a, s, c) {
                    var l, u, p, f = [], d = [], g = a.length, v = o || _(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? v : h(v, f, e, s, c), y = n ? r || (o ? e : g || i) ? [] : a : m;
                    if (n && n(m, y, s, c), i)for (l = h(y, d), i(l, [], s, c), u = l.length; u--;)(p = l[u]) && (y[d[u]] = !(m[d[u]] = p));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (l = [], u = y.length; u--;)(p = y[u]) && l.push(m[u] = p);
                                r(null, y = [], l, c)
                            }
                            for (u = y.length; u--;)(p = y[u]) && (l = r ? Z.call(o, p) : f[u]) > -1 && (o[l] = !(a[l] = p))
                        }
                    } else y = h(y === a ? y.splice(g, y.length) : y), r ? r(null, a, y, c) : K.apply(a, y)
                })
            }

            function m(e) {
                for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, c = d(function (e) {
                    return e === t
                }, a, !0), l = d(function (e) {
                    return Z.call(t, e) > -1
                }, a, !0), u = [function (e, n, i) {
                    return !r && (i || n !== $) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i))
                }]; o > s; s++)if (n = C.relative[e[s].type])u = [d(g(u), n)]; else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (i = ++s; o > i && !C.relative[e[i].type]; i++);
                        return v(s > 1 && g(u), s > 1 && f(e.slice(0, s - 1)).replace(ae, "$1"), n, i > s && m(e.slice(s, i)), o > i && m(e = e.slice(i)), o > i && f(e))
                    }
                    u.push(n)
                }
                return g(u)
            }

            function y(e, t) {
                var n = 0, i = t.length > 0, r = e.length > 0, s = function (o, s, c, l, u) {
                    var p, f, d, g = [], v = 0, m = "0", y = o && [], _ = null != u, b = $, x = o || r && C.find.TAG("*", u && s.parentNode || s), w = F += null == b ? 1 : Math.random() || .1;
                    for (_ && ($ = s !== E && s, k = n); null != (p = x[m]); m++) {
                        if (r && p) {
                            for (f = 0; d = e[f++];)if (d(p, s, c)) {
                                l.push(p);
                                break
                            }
                            _ && (F = w, k = ++n)
                        }
                        i && ((p = !d && p) && v--, o && y.push(p))
                    }
                    if (v += m, i && m !== v) {
                        for (f = 0; d = t[f++];)d(y, g, s, c);
                        if (o) {
                            if (v > 0)for (; m--;)y[m] || g[m] || (g[m] = Y.call(l));
                            g = h(g)
                        }
                        K.apply(l, g), _ && !o && g.length > 0 && v + t.length > 1 && a.uniqueSort(l)
                    }
                    return _ && (F = w, $ = b), y
                };
                return i ? o(s) : s
            }

            function _(e, t, n) {
                for (var i = 0, o = t.length; o > i; i++)a(e, t[i], n);
                return n
            }

            function b(e, t, n, i) {
                var o, r, a, s, c, l = p(e);
                if (!i && 1 === l.length) {
                    if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && !O && C.relative[r[1].type]) {
                        if (t = C.find.ID(a.matches[0].replace(be, xe), t)[0], !t)return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)if ((c = C.find[s]) && (i = c(a.matches[0].replace(be, xe), fe.test(r[0].type) && t.parentNode || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e)return K.apply(n, J.call(i, 0)), n;
                        break
                    }
                }
                return S(e, l)(i, t, O, n, fe.test(e)), n
            }

            function x() {
            }

            var w, k, C, T, j, S, q, $, L, E, N, O, I, A, B, D, R, P = "sizzle" + -new Date, H = e.document, M = {}, F = 0, U = 0, W = i(), z = i(), V = i(), Q = typeof t, G = 1 << 31, X = [], Y = X.pop, K = X.push, J = X.slice, Z = X.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                    return -1
                }, ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), ie = "([*^$|!~]?=)", oe = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + ie + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]", re = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)", ae = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = RegExp("^" + ee + "*," + ee + "*"), ce = RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"), le = RegExp(re), ue = RegExp("^" + ne + "$"), pe = {
                ID: RegExp("^#(" + te + ")"),
                CLASS: RegExp("^\\.(" + te + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
                TAG: RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + oe),
                PSEUDO: RegExp("^" + re),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, fe = /[\x20\t\r\n\f]*[+~]/, ge = /^[^{]+\{\s*\[native code/, he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ye = /'|\\/g, _e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, be = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, xe = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                J.call(H.documentElement.childNodes, 0)[0].nodeType
            } catch (we) {
                J = function (e) {
                    for (var t, n = []; t = this[e++];)n.push(t);
                    return n
                }
            }
            j = a.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, L = a.setDocument = function (e) {
                var i = e ? e.ownerDocument || e : H;
                return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, N = i.documentElement, O = j(i), M.tagNameNoComments = r(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), M.attributes = r(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), M.getByClassName = r(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), M.getByName = r(function (e) {
                    e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", N.insertBefore(e, N.firstChild);
                    var t = i.getElementsByName && i.getElementsByName(P).length === 2 + i.getElementsByName(P + 0).length;
                    return M.getIdNotName = !i.getElementById(P), N.removeChild(e), t
                }), C.attrHandle = r(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Q && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function (e) {
                        return e.getAttribute("href", 2)
                    }, type: function (e) {
                        return e.getAttribute("type")
                    }
                }, M.getIdNotName ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== Q && !O) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (C.find.ID = function (e, n) {
                    if (typeof n.getElementById !== Q && !O) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== Q && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = M.tagNameNoComments ? function (e, n) {
                    return typeof n.getElementsByTagName !== Q ? n.getElementsByTagName(e) : t
                } : function (e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.NAME = M.getByName && function (e, n) {
                        return typeof n.getElementsByName !== Q ? n.getElementsByName(name) : t
                    }, C.find.CLASS = M.getByClassName && function (e, n) {
                        return typeof n.getElementsByClassName === Q || O ? t : n.getElementsByClassName(e)
                    }, A = [], I = [":focus"], (M.qsa = n(i.querySelectorAll)) && (r(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || I.push(":checked")
                }), r(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (M.matchesSelector = n(B = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (e) {
                    M.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), A.push("!=", re)
                }), I = RegExp(I.join("|")), A = RegExp(A.join("|")), D = n(N.contains) || N.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, R = N.compareDocumentPosition ? function (e, t) {
                    var n;
                    return e === t ? (q = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || D(H, e) ? -1 : t === i || D(H, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var n, o = 0, r = e.parentNode, a = t.parentNode, c = [e], l = [t];
                    if (e === t)return q = !0, 0;
                    if (!r || !a)return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : 0;
                    if (r === a)return s(e, t);
                    for (n = e; n = n.parentNode;)c.unshift(n);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (; c[o] === l[o];)o++;
                    return o ? s(c[o], l[o]) : c[o] === H ? -1 : l[o] === H ? 1 : 0
                }, q = !1, [0, 0].sort(R), M.detectDuplicates = q, E) : E
            }, a.matches = function (e, t) {
                return a(e, null, null, t)
            }, a.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== E && L(e), t = t.replace(_e, "='$1']"), !(!M.matchesSelector || O || A && A.test(t) || I.test(t)))try {
                    var n = B.call(e, t);
                    if (n || M.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
                } catch (i) {
                }
                return a(t, E, null, [e]).length > 0
            }, a.contains = function (e, t) {
                return (e.ownerDocument || e) !== E && L(e), D(e, t)
            }, a.attr = function (e, t) {
                var n;
                return (e.ownerDocument || e) !== E && L(e), O || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : O || M.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, a.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, a.uniqueSort = function (e) {
                var t, n = [], i = 1, o = 0;
                if (q = !M.detectDuplicates, e.sort(R), q) {
                    for (; t = e[i]; i++)t === e[i - 1] && (o = n.push(i));
                    for (; o--;)e.splice(n[o], 1)
                }
                return e
            }, T = a.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                    } else if (3 === o || 4 === o)return e.nodeValue
                } else for (; t = e[i]; i++)n += T(t);
                return n
            }, C = a.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: pe,
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && le.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        return "*" === e ? function () {
                            return !0
                        } : (e = e.replace(be, xe).toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                                return t.test(e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var o = a.attr(i, e);
                            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, c) {
                            var l, u, p, f, d, g, h = r !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !c && !s;
                            if (v) {
                                if (r) {
                                    for (; h;) {
                                        for (p = t; p = p[h];)if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)return !1;
                                        g = h = "only" === e && !g && "nextSibling"
                                    }
                                    return !0
                                }
                                if (g = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (u = v[P] || (v[P] = {}), l = u[e] || [], d = l[0] === F && l[1], f = l[0] === F && l[2], p = d && v.childNodes[d]; p = ++d && p && p[h] || (f = d = 0) || g.pop();)if (1 === p.nodeType && ++f && p === t) {
                                        u[e] = [F, d, f];
                                        break
                                    }
                                } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === F)f = l[1]; else for (; (p = ++d && p && p[h] || (f = d = 0) || g.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++f || (y && ((p[P] || (p[P] = {}))[e] = [F, f]), p !== t)););
                                return f -= o, f === i || 0 === f % i && f / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                        return i[P] ? i(t) : i.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
                            for (var o, r = i(e, t), a = r.length; a--;)o = Z.call(e, r[a]), e[o] = !(n[o] = r[a])
                        }) : function (e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function (e) {
                        var t = [], n = [], i = S(e.replace(ae, "$1"));
                        return i[P] ? o(function (e, t, n, o) {
                            for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), !n.pop()
                        }
                    }), has: o(function (e) {
                        return function (t) {
                            return a(e, t).length > 0
                        }
                    }), contains: o(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }), lang: o(function (e) {
                        return ue.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function (t) {
                            var n;
                            do if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === N
                    }, focus: function (e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                        return !0
                    }, parent: function (e) {
                        return !C.pseudos.empty(e)
                    }, header: function (e) {
                        return me.test(e.nodeName)
                    }, input: function (e) {
                        return ve.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    }, first: u(function () {
                        return [0]
                    }), last: u(function (e, t) {
                        return [t - 1]
                    }), eq: u(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: u(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: u(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                        return e
                    }), gt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; t > ++i;)e.push(i);
                        return e
                    })
                }
            };
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = c(w);
            for (w in{submit: !0, reset: !0})C.pseudos[w] = l(w);
            S = a.compile = function (e, t) {
                var n, i = [], o = [], r = V[e + " "];
                if (!r) {
                    for (t || (t = p(e)), n = t.length; n--;)r = m(t[n]), r[P] ? i.push(r) : o.push(r);
                    r = V(e, y(o, i))
                }
                return r
            }, C.pseudos.nth = C.pseudos.eq, C.filters = x.prototype = C.pseudos, C.setFilters = new x, L(), a.attr = de.attr, de.find = a, de.expr = a.selectors, de.expr[":"] = de.expr.pseudos, de.unique = a.uniqueSort, de.text = a.getText, de.isXMLDoc = a.isXML, de.contains = a.contains
        }(r);
        var Ve = /Until$/, Qe = /^(?:parents|prev(?:Until|All))/, Ge = /^.[^:#\[\.,]*$/, Xe = de.expr.match.needsContext, Ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        de.fn.extend({
            find: function (e) {
                var t, n, i, o = this.length;
                if ("string" != typeof e)return i = this, this.pushStack(de(e).filter(function () {
                    for (t = 0; o > t; t++)if (de.contains(i[t], this))return !0
                }));
                for (n = [], t = 0; o > t; t++)de.find(e, this[t], n);
                return n = this.pushStack(o > 1 ? de.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
            }, has: function (e) {
                var t, n = de(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)if (de.contains(this, n[t]))return !0
                })
            }, not: function (e) {
                return this.pushStack(v(this, e, !1))
            }, filter: function (e) {
                return this.pushStack(v(this, e, !0))
            }, is: function (e) {
                return !!e && ("string" == typeof e ? Xe.test(e) ? de(e, this.context).index(this[0]) >= 0 : de.filter(e, this).length > 0 : this.filter(e).length > 0);
            }, closest: function (e, t) {
                for (var n, i = 0, o = this.length, r = [], a = Xe.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : de.find.matchesSelector(n, e)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
                return this.pushStack(r.length > 1 ? de.unique(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                var n = "string" == typeof e ? de(e, t) : de.makeArray(e && e.nodeType ? [e] : e), i = de.merge(this.get(), n);
                return this.pushStack(de.unique(i))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), de.fn.andSelf = de.fn.addBack, de.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return de.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return de.dir(e, "parentNode", n)
            }, next: function (e) {
                return h(e, "nextSibling")
            }, prev: function (e) {
                return h(e, "previousSibling")
            }, nextAll: function (e) {
                return de.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return de.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return de.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return de.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return de.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return de.sibling(e.firstChild)
            }, contents: function (e) {
                return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : de.merge([], e.childNodes)
            }
        }, function (e, t) {
            de.fn[e] = function (n, i) {
                var o = de.map(this, t, n);
                return Ve.test(e) || (i = n), i && "string" == typeof i && (o = de.filter(i, o)), o = this.length > 1 && !Ye[e] ? de.unique(o) : o, this.length > 1 && Qe.test(e) && (o = o.reverse()), this.pushStack(o)
            }
        }), de.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? de.find.matchesSelector(t[0], e) ? [t[0]] : [] : de.find.matches(e, t)
            }, dir: function (e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (n === a || 1 !== o.nodeType || !de(o).is(n));)1 === o.nodeType && i.push(o), o = o[t];
                return i
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ke = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Je = / jQuery\d+="(?:null|\d+)"/g, Ze = RegExp("<(?:" + Ke + ")[\\s/>]", "i"), et = /^\s+/, tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, it = /<tbody/i, ot = /<|&#?\w+;/, rt = /<(?:script|style|link)/i, at = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, ct = /^$|\/(?:java|ecma)script/i, lt = /^true\/(.*)/, ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, pt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ft = m(Z), dt = ft.appendChild(Z.createElement("div"));
        pt.optgroup = pt.option, pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, de.fn.extend({
            text: function (e) {
                return de.access(this, function (e) {
                    return e === a ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Z).createTextNode(e))
                }, null, e, arguments.length)
            }, wrapAll: function (e) {
                if (de.isFunction(e))return this.each(function (t) {
                    de(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return de.isFunction(e) ? this.each(function (t) {
                    de(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = de(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = de.isFunction(e);
                return this.each(function (n) {
                    de(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    de.nodeName(this, "body") || de(this).replaceWith(this.childNodes)
                }).end()
            }, append: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            }, prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            }, before: function () {
                return this.domManip(arguments, !1, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, !1, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)(!e || de.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || de.cleanData(C(n)), n.parentNode && (t && de.contains(n.ownerDocument, n) && x(C(n, "script")), n.parentNode.removeChild(n)));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && de.cleanData(C(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && de.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return de.clone(this, e, t)
                })
            }, html: function (e) {
                return de.access(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (e === a)return 1 === t.nodeType ? t.innerHTML.replace(Je, "") : a;
                    if (!("string" != typeof e || rt.test(e) || !de.support.htmlSerialize && Ze.test(e) || !de.support.leadingWhitespace && et.test(e) || pt[(nt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(tt, "<$1></$2>");
                        try {
                            for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (de.cleanData(C(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function (e) {
                var t = de.isFunction(e);
                return t || "string" == typeof e || (e = de(e).not(this).detach()), this.domManip([e], !0, function (e) {
                    var t = this.nextSibling, n = this.parentNode;
                    n && (de(this).remove(), n.insertBefore(e, t))
                })
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t, n) {
                e = ae.apply([], e);
                var i, o, r, s, c, l, u = 0, p = this.length, f = this, d = p - 1, g = e[0], h = de.isFunction(g);
                if (h || !(1 >= p || "string" != typeof g || de.support.checkClone) && st.test(g))return this.each(function (i) {
                    var o = f.eq(i);
                    h && (e[0] = g.call(this, i, t ? o.html() : a)), o.domManip(e, t, n)
                });
                if (p && (l = de.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (t = t && de.nodeName(i, "tr"), s = de.map(C(l, "script"), _), r = s.length; p > u; u++)o = l, u !== d && (o = de.clone(o, !0, !0), r && de.merge(s, C(o, "script"))), n.call(t && de.nodeName(this[u], "table") ? y(this[u], "tbody") : this[u], o, u);
                    if (r)for (c = s[s.length - 1].ownerDocument, de.map(s, b), u = 0; r > u; u++)o = s[u], ct.test(o.type || "") && !de._data(o, "globalEval") && de.contains(c, o) && (o.src ? de.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : de.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ut, "")));
                    l = i = null
                }
                return this
            }
        }), de.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            de.fn[e] = function (e) {
                for (var n, i = 0, o = [], r = de(e), a = r.length - 1; a >= i; i++)n = i === a ? this : this.clone(!0), de(r[i])[t](n), se.apply(o, n.get());
                return this.pushStack(o)
            }
        }), de.extend({
            clone: function (e, t, n) {
                var i, o, r, a, s, c = de.contains(e.ownerDocument, e);
                if (de.support.html5Clone || de.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(r = dt.firstChild)), !(de.support.noCloneEvent && de.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))for (i = C(r), s = C(e), a = 0; null != (o = s[a]); ++a)i[a] && k(o, i[a]);
                if (t)if (n)for (s = s || C(e), i = i || C(r), a = 0; null != (o = s[a]); a++)w(o, i[a]); else w(e, r);
                return i = C(r, "script"), i.length > 0 && x(i, !c && C(e, "script")), i = s = o = null, r
            }, buildFragment: function (e, t, n, i) {
                for (var o, r, a, s, c, l, u, p = e.length, f = m(t), d = [], g = 0; p > g; g++)if (r = e[g], r || 0 === r)if ("object" === de.type(r))de.merge(d, r.nodeType ? [r] : r); else if (ot.test(r)) {
                    for (s = s || f.appendChild(t.createElement("div")), c = (nt.exec(r) || ["", ""])[1].toLowerCase(), u = pt[c] || pt._default, s.innerHTML = u[1] + r.replace(tt, "<$1></$2>") + u[2], o = u[0]; o--;)s = s.lastChild;
                    if (!de.support.leadingWhitespace && et.test(r) && d.push(t.createTextNode(et.exec(r)[0])), !de.support.tbody)for (r = "table" !== c || it.test(r) ? "<table>" !== u[1] || it.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;)de.nodeName(l = r.childNodes[o], "tbody") && !l.childNodes.length && r.removeChild(l);
                    for (de.merge(d, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = f.lastChild
                } else d.push(t.createTextNode(r));
                for (s && f.removeChild(s), de.support.appendChecked || de.grep(C(d, "input"), T), g = 0; r = d[g++];)if ((!i || -1 === de.inArray(r, i)) && (a = de.contains(r.ownerDocument, r), s = C(f.appendChild(r), "script"), a && x(s), n))for (o = 0; r = s[o++];)ct.test(r.type || "") && n.push(r);
                return s = null, f
            }, cleanData: function (e, t) {
                for (var n, i, o, r, a = 0, s = de.expando, c = de.cache, l = de.support.deleteExpando, u = de.event.special; null != (n = e[a]); a++)if ((t || de.acceptData(n)) && (o = n[s], r = o && c[o])) {
                    if (r.events)for (i in r.events)u[i] ? de.event.remove(n, i) : de.removeEvent(n, i, r.handle);
                    c[o] && (delete c[o], l ? delete n[s] : typeof n.removeAttribute !== J ? n.removeAttribute(s) : n[s] = null, oe.push(o))
                }
            }
        });
        var gt, ht, vt, mt = /alpha\([^)]*\)/i, yt = /opacity\s*=\s*([^)]*)/, _t = /^(top|right|bottom|left)$/, bt = /^(none|table(?!-c[ea]).+)/, xt = /^margin/, wt = RegExp("^(" + ge + ")(.*)$", "i"), kt = RegExp("^(" + ge + ")(?!px)[a-z%]+$", "i"), Ct = RegExp("^([+-])=(" + ge + ")", "i"), Tt = {BODY: "block"}, jt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, St = {
            letterSpacing: 0,
            fontWeight: 400
        }, qt = ["Top", "Right", "Bottom", "Left"], $t = ["Webkit", "O", "Moz", "ms"];
        de.fn.extend({
            css: function (e, t) {
                return de.access(this, function (e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (de.isArray(t)) {
                        for (o = ht(e), i = t.length; i > s; s++)r[t[s]] = de.css(e, t[s], !1, o);
                        return r
                    }
                    return n !== a ? de.style(e, t, n) : de.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return q(this, !0)
            }, hide: function () {
                return q(this)
            }, toggle: function (e) {
                var t = "boolean" == typeof e;
                return this.each(function () {
                    (t ? e : S(this)) ? de(this).show() : de(this).hide()
                })
            }
        }), de.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = vt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": de.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, c = de.camelCase(t), l = e.style;
                    if (t = de.cssProps[c] || (de.cssProps[c] = j(l, c)), s = de.cssHooks[t] || de.cssHooks[c], n === a)return s && "get"in s && (o = s.get(e, !1, i)) !== a ? o : l[t];
                    if (r = typeof n, "string" === r && (o = Ct.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(de.css(e, t)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || de.cssNumber[c] || (n += "px"), de.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set"in s && (n = s.set(e, n, i)) === a)))try {
                        l[t] = n
                    } catch (u) {
                    }
                }
            },
            css: function (e, t, n, i) {
                var o, r, s, c = de.camelCase(t);
                return t = de.cssProps[c] || (de.cssProps[c] = j(e.style, c)), s = de.cssHooks[t] || de.cssHooks[c], s && "get"in s && (r = s.get(e, !0, n)), r === a && (r = vt(e, t, i)), "normal" === r && t in St && (r = St[t]), "" === n || n ? (o = parseFloat(r), n === !0 || de.isNumeric(o) ? o || 0 : r) : r
            },
            swap: function (e, t, n, i) {
                var o, r, a = {};
                for (r in t)a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t)e.style[r] = a[r];
                return o
            }
        }), r.getComputedStyle ? (ht = function (e) {
            return r.getComputedStyle(e, null)
        }, vt = function (e, t, n) {
            var i, o, r, s = n || ht(e), c = s ? s.getPropertyValue(t) || s[t] : a, l = e.style;
            return s && ("" !== c || de.contains(e.ownerDocument, e) || (c = de.style(e, t)), kt.test(c) && xt.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = s.width, l.width = i, l.minWidth = o, l.maxWidth = r)), c
        }) : Z.documentElement.currentStyle && (ht = function (e) {
            return e.currentStyle
        }, vt = function (e, t, n) {
            var i, o, r, s = n || ht(e), c = s ? s[t] : a, l = e.style;
            return null == c && l && l[t] && (c = l[t]), kt.test(c) && !_t.test(t) && (i = l.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : c, c = l.pixelLeft + "px", l.left = i, r && (o.left = r)), "" === c ? "auto" : c
        }), de.each(["height", "width"], function (e, t) {
            de.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? 0 === e.offsetWidth && bt.test(de.css(e, "display")) ? de.swap(e, jt, function () {
                        return E(e, t, i)
                    }) : E(e, t, i) : a
                }, set: function (e, n, i) {
                    var o = i && ht(e);
                    return $(e, n, i ? L(e, t, i, de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), de.support.opacity || (de.cssHooks.opacity = {
            get: function (e, t) {
                return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, o = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === de.trim(r.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(r) ? r.replace(mt, o) : r + " " + o)
            }
        }), de(function () {
            de.support.reliableMarginRight || (de.cssHooks.marginRight = {
                get: function (e, t) {
                    return t ? de.swap(e, {display: "inline-block"}, vt, [e, "marginRight"]) : a
                }
            }), !de.support.pixelPosition && de.fn.position && de.each(["top", "left"], function (e, t) {
                de.cssHooks[t] = {
                    get: function (e, n) {
                        return n ? (n = vt(e, t), kt.test(n) ? de(e).position()[t] + "px" : n) : a
                    }
                }
            })
        }), de.expr && de.expr.filters && (de.expr.filters.hidden = function (e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !de.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || de.css(e, "display"))
        }, de.expr.filters.visible = function (e) {
            return !de.expr.filters.hidden(e)
        }), de.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            de.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + qt[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, xt.test(e) || (de.cssHooks[e + t].set = $)
        });
        var Lt = /%20/g, Et = /\[\]$/, Nt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
        de.fn.extend({
            serialize: function () {
                return de.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = de.prop(this, "elements");
                    return e ? de.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !de(this).is(":disabled") && It.test(this.nodeName) && !Ot.test(e) && (this.checked || !at.test(e))
                }).map(function (e, t) {
                    var n = de(this).val();
                    return null == n ? null : de.isArray(n) ? de.map(n, function (e) {
                        return {name: t.name, value: e.replace(Nt, "\r\n")}
                    }) : {name: t.name, value: n.replace(Nt, "\r\n")}
                }).get()
            }
        }), de.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                t = de.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === a && (t = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e))de.each(e, function () {
                o(this.name, this.value)
            }); else for (n in e)I(n, e[n], t, o);
            return i.join("&").replace(Lt, "+")
        }, de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            de.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), de.fn.hover = function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        };
        var At, Bt, Dt = de.now(), Rt = /\?/, Pt = /#.*$/, Ht = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ut = /^(?:GET|HEAD)$/, Wt = /^\/\//, zt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Vt = de.fn.load, Qt = {}, Gt = {}, Xt = "*/".concat("*");
        try {
            Bt = ee.href
        } catch (Yt) {
            Bt = Z.createElement("a"), Bt.href = "", Bt = Bt.href
        }
        At = zt.exec(Bt.toLowerCase()) || [], de.fn.load = function (e, t, n) {
            if ("string" != typeof e && Vt)return Vt.apply(this, arguments);
            var i, o, r, s = this, c = e.indexOf(" ");
            return c >= 0 && (i = e.slice(c, e.length), e = e.slice(0, c)), de.isFunction(t) ? (n = t, t = a) : t && "object" == typeof t && (r = "POST"), s.length > 0 && de.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, s.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e)
            }).complete(n && function (e, t) {
                    s.each(n, o || [e.responseText, t, e])
                }), this
        }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            de.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), de.each(["get", "post"], function (e, t) {
            de[t] = function (e, n, i, o) {
                return de.isFunction(n) && (o = o || i, i = n, n = a), de.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), de.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Bt,
                type: "GET",
                isLocal: Ft.test(At[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText"},
                converters: {"* text": r.String, "text html": !0, "text json": de.parseJSON, "text xml": de.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? D(D(e, de.ajaxSettings), t) : D(de.ajaxSettings, e)
            },
            ajaxPrefilter: A(Qt),
            ajaxTransport: A(Gt),
            ajax: function (e, t) {
                function n(e, t, n, i) {
                    var o, p, y, _, x, k = t;
                    2 !== b && (b = 2, c && clearTimeout(c), u = a, s = i || "", w.readyState = e > 0 ? 4 : 0, n && (_ = R(f, w, n)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (de.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (de.etag[r] = x)), 204 === e ? (o = !0, k = "nocontent") : 304 === e ? (o = !0, k = "notmodified") : (o = P(f, _), k = o.state, p = o.data, y = o.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || k) + "", o ? h.resolveWith(d, [p, k, w]) : h.rejectWith(d, [w, k, y]), w.statusCode(m), m = a, l && g.trigger(o ? "ajaxSuccess" : "ajaxError", [w, f, o ? p : y]), v.fireWith(d, [w, k]), l && (g.trigger("ajaxComplete", [w, f]), --de.active || de.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = a), t = t || {};
                var i, o, r, s, c, l, u, p, f = de.ajaxSetup({}, t), d = f.context || f, g = f.context && (d.nodeType || d.jquery) ? de(d) : de.event, h = de.Deferred(), v = de.Callbacks("once memory"), m = f.statusCode || {}, y = {}, _ = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!p)for (p = {}; t = Mt.exec(s);)p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = _[n] = _[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
                if (h.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Bt) + "").replace(Pt, "").replace(Wt, At[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = de.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (i = zt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (At[3] || ("http:" === At[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = de.param(f.data, f.traditional)), B(Qt, f, t, w), 2 === b)return w;
                l = f.global, l && 0 === de.active++ && de.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ut.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (Rt.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ht.test(r) ? r.replace(Ht, "$1_=" + Dt++) : r + (Rt.test(r) ? "&" : "?") + "_=" + Dt++)), f.ifModified && (de.lastModified[r] && w.setRequestHeader("If-Modified-Since", de.lastModified[r]), de.etag[r] && w.setRequestHeader("If-None-Match", de.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : f.accepts["*"]);
                for (o in f.headers)w.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b))return w.abort();
                x = "abort";
                for (o in{success: 1, error: 1, complete: 1})w[o](f[o]);
                if (u = B(Gt, f, t, w)) {
                    w.readyState = 1, l && g.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (c = setTimeout(function () {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        b = 1, u.send(y, n)
                    } catch (k) {
                        if (!(2 > b))throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getScript: function (e, t) {
                return de.get(e, a, t, "script")
            },
            getJSON: function (e, t, n) {
                return de.get(e, t, n, "json")
            }
        }), de.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return de.globalEval(e), e
                }
            }
        }), de.ajaxPrefilter("script", function (e) {
            e.cache === a && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), de.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = Z.head || de("head")[0] || Z.documentElement;
                return {
                    send: function (i, o) {
                        t = Z.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(a, !0)
                    }
                }
            }
        });
        var Kt = [], Jt = /(=)\?(?=&|$)|\?\?/;
        de.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Kt.pop() || de.expando + "_" + Dt++;
                return this[e] = !0, e
            }
        }), de.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i, o, s, c = e.jsonp !== !1 && (Jt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            return c || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = de.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, c ? e[c] = e[c].replace(Jt, "$1" + i) : e.jsonp !== !1 && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return s || de.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = r[i], r[i] = function () {
                s = arguments
            }, n.always(function () {
                r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), s && de.isFunction(o) && o(s[0]), s = o = a
            }), "script") : a
        });
        var Zt, en, tn = 0, nn = r.ActiveXObject && function () {
                var e;
                for (e in Zt)Zt[e](a, !0)
            };
        de.ajaxSettings.xhr = r.ActiveXObject ? function () {
            return !this.isLocal && H() || M()
        } : H, en = de.ajaxSettings.xhr(), de.support.cors = !!en && "withCredentials"in en, en = de.support.ajax = !!en, en && de.ajaxTransport(function (e) {
            if (!e.crossDomain || de.support.cors) {
                var t;
                return {
                    send: function (n, i) {
                        var o, s, c = e.xhr();
                        if (e.username ? c.open(e.type, e.url, e.async, e.username, e.password) : c.open(e.type, e.url, e.async), e.xhrFields)for (s in e.xhrFields)c[s] = e.xhrFields[s];
                        e.mimeType && c.overrideMimeType && c.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in n)c.setRequestHeader(s, n[s])
                        } catch (l) {
                        }
                        c.send(e.hasContent && e.data || null), t = function (n, r) {
                            var s, l, u, p;
                            try {
                                if (t && (r || 4 === c.readyState))if (t = a, o && (c.onreadystatechange = de.noop, nn && delete Zt[o]), r)4 !== c.readyState && c.abort(); else {
                                    p = {}, s = c.status, l = c.getAllResponseHeaders(), "string" == typeof c.responseText && (p.text = c.responseText);
                                    try {
                                        u = c.statusText
                                    } catch (f) {
                                        u = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            } catch (d) {
                                r || i(-1, d)
                            }
                            p && i(s, u, p, l)
                        }, e.async ? 4 === c.readyState ? setTimeout(t) : (o = ++tn, nn && (Zt || (Zt = {}, de(r).unload(nn)), Zt[o] = t), c.onreadystatechange = t) : t()
                    }, abort: function () {
                        t && t(a, !0)
                    }
                }
            }
        });
        var on, rn, an = /^(?:toggle|show|hide)$/, sn = RegExp("^(?:([+-])=|)(" + ge + ")([a-z%]*)$", "i"), cn = /queueHooks$/, ln = [V], un = {
            "*": [function (e, t) {
                var n, i, o = this.createTween(e, t), r = sn.exec(t), a = o.cur(), s = +a || 0, c = 1, l = 20;
                if (r) {
                    if (n = +r[2], i = r[3] || (de.cssNumber[e] ? "" : "px"), "px" !== i && s) {
                        s = de.css(o.elem, e, !0) || n || 1;
                        do c = c || ".5", s /= c, de.style(o.elem, e, s + i); while (c !== (c = o.cur() / a) && 1 !== c && --l)
                    }
                    o.unit = i, o.start = s, o.end = r[1] ? s + (r[1] + 1) * n : n
                }
                return o
            }]
        };
        de.Animation = de.extend(W, {
            tweener: function (e, t) {
                de.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++)n = e[i], un[n] = un[n] || [], un[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? ln.unshift(e) : ln.push(e)
            }
        }), de.Tween = Q, Q.prototype = {
            constructor: Q, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (de.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = Q.propHooks[this.prop];
                return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = Q.propHooks[this.prop];
                return this.pos = t = this.options.duration ? de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Q.propHooks._default.set(this), this
            }
        }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    de.fx.step[e.prop] ? de.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[de.cssProps[e.prop]] || de.cssHooks[e.prop]) ? de.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, de.each(["toggle", "show", "hide"], function (e, t) {
            var n = de.fn[t];
            de.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, i, o)
            }
        }), de.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(S).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = de.isEmptyObject(e), r = de.speed(t, n, i), a = function () {
                    var t = W(this, de.extend({}, e), r);
                    a.finish = function () {
                        t.stop(!0)
                    }, (o || de._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = a), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, o = null != e && e + "queueHooks", r = de.timers, a = de._data(this);
                    if (o)a[o] && a[o].stop && i(a[o]); else for (o in a)a[o] && a[o].stop && cn.test(o) && i(a[o]);
                    for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && de.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = de._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = de.timers, a = i ? i.length : 0;
                    for (n.finish = !0, de.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), de.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            de.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), de.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? de.extend({}, e) : {
                complete: n || !n && t || de.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !de.isFunction(t) && t
            };
            return i.duration = de.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in de.fx.speeds ? de.fx.speeds[i.duration] : de.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                de.isFunction(i.old) && i.old.call(this), i.queue && de.dequeue(this, i.queue)
            }, i
        }, de.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, de.timers = [], de.fx = Q.prototype.init, de.fx.tick = function () {
            var e, t = de.timers, n = 0;
            for (on = de.now(); t.length > n; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || de.fx.stop(), on = a
        }, de.fx.timer = function (e) {
            e() && de.timers.push(e) && de.fx.start()
        }, de.fx.interval = 13, de.fx.start = function () {
            rn || (rn = setInterval(de.fx.tick, de.fx.interval))
        }, de.fx.stop = function () {
            clearInterval(rn), rn = null
        }, de.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, de.fx.step = {}, de.expr && de.expr.filters && (de.expr.filters.animated = function (e) {
            return de.grep(de.timers, function (t) {
                return e === t.elem
            }).length
        }), de.fn.offset = function (e) {
            if (arguments.length)return e === a ? this : this.each(function (t) {
                de.offset.setOffset(this, e, t)
            });
            var t, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
            return r ? (t = r.documentElement, de.contains(t, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()), n = X(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        }, de.offset = {
            setOffset: function (e, t, n) {
                var i = de.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var o, r, a = de(e), s = a.offset(), c = de.css(e, "top"), l = de.css(e, "left"), u = ("absolute" === i || "fixed" === i) && de.inArray("auto", [c, l]) > -1, p = {}, f = {};
                u ? (f = a.position(), o = f.top, r = f.left) : (o = parseFloat(c) || 0, r = parseFloat(l) || 0), de.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using"in t ? t.using.call(e, p) : a.css(p)
            }
        }, de.fn.extend({
            position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === de.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()), n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - de.css(i, "marginTop", !0),
                        left: t.left - n.left - de.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Z.documentElement; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");)e = e.offsetParent;
                    return e || Z.documentElement
                })
            }
        }), de.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            de.fn[e] = function (i) {
                return de.access(this, function (e, i, o) {
                    var r = X(e);
                    return o === a ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : (r ? r.scrollTo(n ? de(r).scrollLeft() : o, n ? o : de(r).scrollTop()) : e[i] = o, a)
                }, e, i, arguments.length, null)
            }
        }), de.each({Height: "height", Width: "width"}, function (e, t) {
            de.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                de.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return de.access(this, function (t, n, i) {
                        var o;
                        return de.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === a ? de.css(t, n, s) : de.style(t, n, i, s)
                    }, t, r ? i : a, r, null)
                }
            })
        }), r.jQuery = r.$ = de, n(2) && n(2).jQuery && (i = [], o = function () {
            return de
        }.apply(t, i), !(void 0 !== o && (e.exports = o)))
    }(window)
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}, function (e, t) {
    "use strict";
    Array.prototype.map || (Array.prototype.map = function (e, t) {
        var n, i, o;
        if (null == this)throw new TypeError(" this is null or not defined");
        var r = Object(this), a = r.length >>> 0;
        if ("[object Function]" != Object.prototype.toString.call(e))throw new TypeError(e + " is not a function");
        for (t && (n = t), i = new Array(a), o = 0; a > o;) {
            var s, c;
            o in r && (s = r[o], c = e.call(n, s, o, r), i[o] = c), o++
        }
        return i
    })
}, function (e, t, n) {
    var i = n(5);
    $.extend({
        time33: function (e) {
            for (var t = 0, n = e.length, i = 5381; n > t; ++t)i += (i << 5) + e.charAt(t).charCodeAt();
            return 2147483647 & i
        }, getJsonp: function (e, t, n, i) {
            return $.isFunction(n) && (i = n), $.get(e, t, i, "jsonp")
        }, getJson: function (e, t, n, i) {
            return $.isFunction(n) && (i = n), $.get(e, t, i, "json")
        }, getToken: function () {
            var e = i.getSkey(), t = e ? $.time33(e) : "";
            return t
        }, ajaxQueue: function (e) {
            e = e || {};
            var t, n = e.urls, i = e.success || function () {
                }, o = e.error || function () {
                }, r = e.complete || function () {
                }, a = e.beforeSend || function () {
                }, s = [];
            return n = "array" == $.type(n) ? n : [n], a(), $.each(n, function (e, t) {
                s.push($.ajax(t))
            }), t = $.when.apply(null, s).always(r).done(i).fail(o).promise(), t.success = t.done, t.error = t.fail, t.complete = t.always, t
        }, ajaxSetup: function () {
            var e = $.ajaxSetup;
            return function (t, n) {
                return t = e(t, n), t.CSRF && (t.data = t.data || {}, t.data.g_tk = $.getToken()), t.charset && (t.scriptCharset = t.charset), t.low_login && (t.data = t.data || {}, t.data.low_login = 1), "script" == t.dataType && t.cache !== !1 && (t.cache = !0), t
            }
        }()
    }), $.ajaxSetup({timeout: 5e3, charset: "utf-8"})
}, function (e, t, n) {
    var i = n(6), o = n(7), r = n(14), a = n(15), s = n(10), c = n(9), l = n(12), u = function () {
    }, p = function (e) {
        var t = this, n = {};
        e = e || {}, this.getConfig = function (t) {
            return e[t]
        }, this.setConfig = function (t, n) {
            "string" == typeof t ? e[t] = n : $.extend(e, t)
        }, $.each(["ClearLoginStatus", "OpenLogin", "CloseLogin", "Login", "LoginCancel", "Logout", "UserInfoChanged"], function (e, i) {
            if (!n[i]) {
                var o = $.Callbacks("unique");
                n[i] = o, t["add" + i + "Callback"] = o.add, t["remove" + i + "Callback"] = o.remove, t["empty" + i + "Callback"] = o.empty, t["on" + i] = o.fireWith
            }
        }), $.each(["Ready"], function (e, i) {
            if (!n[i]) {
                var o = $.Callbacks("unique memory once");
                n[i] = o, t["add" + i + "Callback"] = o.add, t["remove" + i + "Callback"] = o.remove, t["empty" + i + "Callback"] = o.empty, t["on" + i] = o.fireWith
            }
        })
    };
    $.each(["getUin", "getNick", "getAvatar", "getSkey", "openLogin", "logout", "isLogin", "clearLoginCookie", "getEncUin", "setStatus"], function (e, t) {
        p.prototype[t] = function () {
        }
    });
    var f = function () {
        var e = null;
        return {
            init: function (t) {
                e instanceof p ? e.setConfig(t) : (e = new p(t), $.extend(f, e))
            }
        }
    }();
    $.extend(p.prototype, {
        isLogin: function () {
            return "wx" == this.getLoginType() ? !0 : this.getUinOnly() > 1e4
        }, isQQLogin: function () {
            return "wx" != this.getLoginType() ? this.getUinOnly() > 1e4 : !1
        }, isWxLogin: function () {
            return "wx" == this.getLoginType()
        }, isLowLogin: function () {
            if (d.isWxLogin())return !1;
            var e = $.trim(i.get("skey")), t = $.trim(i.get(d.getConfig("uinCookie")));
            return d.isQQLogin() && (!e || !t)
        }, isStrongLogin: function () {
            if (d.isWxLogin())return !0;
            var e = $.trim(i.get("skey")), t = $.trim(i.get(d.getConfig("uinCookie")));
            return d.isQQLogin() && !!e && !!t
        }, getWxAuthCookies: function () {
            return d.isWxLogin() ? {
                access_token: i.get("access_token"),
                appid: i.get("appid"),
                openid: i.get("openid"),
                vuserid: i.get("vuserid"),
                vusession: i.get("vusession")
            } : null
        }, getWxCookies: function (e) {
            $.ajax({
                url: d.config.wxGetCookie_cgi, type: "get", dataType: "jsonp", timeout: 1e4, success: function (t) {
                    e(t)
                }
            })
        }, getUnicode: function () {
            if ("wx" == this.getLoginType()) {
                var e = i.get("vuserid");
                return e && e.length > 0 ? parseInt(e, 10) : 0
            }
            if ("" == this.getSkey())return 0;
            var t = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10);
            return (!t || 1e4 >= t) && (t = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10), !t || 1e4 >= t) ? 0 : t
        }, getUin: function () {
            if ("wx" == this.getLoginType())return 0;
            if ("" == this.getSkey())return 0;
            var e = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10);
            return (!e || 1e4 >= e) && (e = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10), !e || 1e4 >= e) ? 0 : e
        }, getEncUin: function () {
            if ("wx" == this.getLoginType())return 0;
            if ("" == this.getSkey())return "";
            var e = i.get(this.getConfig("encuinCookie"));
            if ("" == e)return e;
            var t = e.split("|");
            return t[1] && t[1] == this.getUinOnly() ? decodeURIComponent(t[0]) : ""
        }, getNick: function () {
            if ("wx" == this.getLoginType())return d.getWxNick();
            if ("" == this.getSkey())return "";
            var e = i.get(this.getConfig("nickCookie"));
            if ("" == e)return e;
            var t = e.split("|");
            if (t[1] && t[1] == this.getUinOnly())try {
                return decodeURIComponent(t[0])
            } catch (n) {
                return t[0]
            }
            return ""
        }, getAvatar: function (e) {
            if ("wx" == this.getLoginType())return d.getWxHead();
            if ("" == this.getSkey())return "";
            var t = i.get(this.getConfig("nickCookie"));
            if ("" == t)return t;
            var n = t.split("|"), o = this.getUinOnly();
            return n[1] && n[1] == o && n[2] ? (e = d.getValidAvatarSize(e), decodeURIComponent(n[2]).replace(/([\?&]?s=)40([&$])/, "$1" + e + "$2").replace(/^http\:/, "")) : ""
        }, getValidAvatarSize: function (e) {
            var t = d.getConfig("avatarSize");
            return -1 == $.inArray(e, t) ? t[0] : e
        }, refreshWxLogin: function (e, t) {
            var n = d.config.wxRefresh_cgi;
            t && (n += "?write=1"), $.ajax({
                url: n, type: "get", dataType: "jsonp", timeout: 1e4, success: function (t) {
                    t && 0 == t.errcode ? (location.host.indexOf("qq.com") >= 0 && (i.set("access_token", t.access_token, location.host, "/", d.getConfig("cookieTime")), i.set("vusession", t.vusession, location.host, "/", d.getConfig("cookieTime"))), d.refreshTokenWxCgi(t.next_refresh_time)) : (d.reportToBoss({
                        oper: 11,
                        main_type: "wx",
                        msg: t
                    }), d.logout()), e && e()
                }
            })
        }, getLoginType: function () {
            return i.get(this.getConfig("typeCookie"))
        }, getUinOnly: function () {
            if ("" == this.getSkey())return 0;
            var e = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10);
            return (!e || 1e4 >= e) && (e = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10), !e || 1e4 >= e) ? 0 : e
        }, checkQQUin: function () {
            if (0 == d.getConfig("useStrictLogin")) {
                var e = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10), t = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10);
                e && t && e != t && (i.set(d.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24))
            }
        }, getSkey: function () {
            var e = $.trim(i.get("skey"));
            return this.getConfig("useStrictLogin") ? e : e || $.trim(i.get("lskey"))
        }, getWxHead: function () {
            var e = i.get(this.getConfig("wxHeadCookie"));
            return e && e.replace(/^http\:/, "")
        }, getWxNick: function () {
            return decodeURIComponent(i.get(this.getConfig("wxNickCookie")))
        }, reportToBoss: function (e, t) {
            var n = "//btrace.video.qq.com/kvcollect?BossId=3098&Pwd=390647416&";
            e = e || {};
            var o = d.getLoginType();
            e.main_type = e.main_type || o, "wx" == o ? e.uin = i.get("vuserid") : e.uin = d.getUinOnly(), e.host = location.host, e.url = location.href;
            var r = $.param(e), a = [n, r, "&_dc=", Math.random()].join("");
            t ? c.push(a) : l(a)
        }, refreshTokenWxCgi: function (e) {
            var t = 6e3;
            e && e > 0 && 6e3 > e && (t = e), t = 1e3 * t, d.refreshTokenWxTimer && clearTimeout(d.refreshTokenWxTimer), d.refreshTokenWxTimer = setTimeout(function () {
                d.refreshWxLogin()
            }, t)
        }, renew_skey: function () {
            var e, t = 0, n = "skey_renew_time", i = 18e5, r = 0, a = function () {
                return d.isQQLogin() && d.isStrongLogin() ? void $.ajax({
                    url: d.config.renew_skey + "&uin=" + d.getUin() + "&sessionkey=" + d.getSkey(),
                    type: "get",
                    dataType: "jsonp",
                    jsonpCallback: "renewskeyCallback"
                }).done(function (i) {
                    return i && -1 == i.code ? void clearInterval(e) : (r = 0, s.set(n, (new Date).valueOf()), void o.button("PTLOGIN.SKEY_INTER." + t++, "/virtualpage/skey.html"))
                }).fail(function () {
                    r >= 3 || (r += 1, setTimeout(a, 6e3))
                }) : void clearInterval(e)
            };
            s.get(n, function (e) {
                var t = e;
                (!t || parseInt(t) + i < (new Date).valueOf()) && a()
            }), e = setInterval(a, i), d.addLoginCallback(function () {
                d.isQQLogin() && d.isStrongLogin() && (e && clearInterval(e), e = setInterval(a, i))
            }), d.addLogoutCallback(function () {
                e && clearInterval(e)
            })
        }, setReady: function () {
            d.getConfig("hasReady") || (d.onReady(d, [d.isLogin()]), d.setConfig("hasReady", !0))
        }, getQQNick: function (e, t) {
            $.ajax({
                url: d.config.userInfo_cgi,
                data: {otype: "json", datakey: "basicinfo"},
                type: "get",
                dataType: "jsonp",
                timeout: 1e4,
                success: function (n) {
                    if (!n || 1 != n.is_token_valid)return d.clearLoginCookie(), d.setReady(), void(t && d.reportToBoss({
                        oper: 11,
                        main_type: "qq",
                        msg: n.msg
                    }));
                    if (n.user_basic && n.user_basic.user_id && n.user_basic.user_id.length > 0) {
                        var o = n.user_basic;
                        o.has100 = o.has_100 ? 1 : 0, o.head = o.head.replace(/^http\:/, ""), location.host.indexOf("qq.com") >= 0 && ("undefined" != typeof o.encuin && i.set(d.getConfig("encuinCookie"), o.encuin + "|" + d.getUinOnly(), location.host, "/", d.getConfig("cookieTime")), i.set(d.getConfig("nickCookie"), [encodeURIComponent(o.nick), d.getUinOnly(), o.head, o.has100].join("|"), location.host, "/", d.getConfig("cookieTime"))), d.showOnline(o.nick, o.head, o.has100)
                    } else d.showOnline();
                    d.setReady(), 1 == e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), !d.getConfig("disLogCallback") && t && d.onLogin(), d.setConfig("disLogCallback", !1), 1 == t && (d.reportToBoss({
                        oper: 10,
                        main_type: "qq"
                    }), d.setRememberType("qq"), l("//ncgi.video.qq.com/tvideo/fcgi-bin/loginstat"))
                }
            }).fail(function (n) {
                d.setReady(), d.showOnline(), 1 == e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), 1 == e && d.onLogin(), t && d.reportToBoss({
                    oper: 11,
                    main_type: "qq",
                    msg: n && n.statusText ? n.statusText : ""
                })
            })
        }, setStatus: function (e, t, n, o) {
            var n = n || d.getLoginType();
            if ("wx" != n && 0 == d.getUinOnly())return d.clearLoginCookie(), void d.setReady();
            if ("wx" == n)if ("string" == typeof o) {
                d.getWxCookies(function (t) {
                    t && location.host.indexOf("qq.com") >= 0 && (i.set("access_token", t.access_token, location.host, "/", d.getConfig("cookieTime")), i.set("openid", t.openid, location.host, "/", d.getConfig("cookieTime")), i.set("vuserid", t.vuserid, location.host, "/", d.getConfig("cookieTime")), i.set("vusession", t.vusession, location.host, "/", d.getConfig("cookieTime")), i.set("appid", t.appid, location.host, "/", d.getConfig("cookieTime"))), 0 != e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), 0 != e && d.onLogin(), d.refreshTokenWxCgi(t.next_refresh_time), d.reportToBoss({
                        oper: 10,
                        main_type: "wx"
                    })
                });
                var r = $.parseJSON(o);
                r.head = r.head || d.getConfig("defaultHead"), r.nick = decodeURIComponent(r.nick) || "", location.host.indexOf("qq.com") >= 0 && (i.set(d.getConfig("typeCookie"), "wx", location.host, "/", d.getConfig("cookieTime")), i.set(d.getConfig("wxNickCookie"), encodeURIComponent(r.nick), location.host, "/", d.getConfig("cookieTime")), i.set(d.getConfig("wxHeadCookie"), r.head, location.host, "/", d.getConfig("cookieTime"))), d.showOnline(r.nick, r.head, 0), d.setRememberType("wx")
            } else $.ajax({
                url: d.config.wxRefresh_cgi,
                type: "get",
                dataType: "jsonp",
                timeout: 1e4,
                success: function (t) {
                    if (!t || 0 != t.errcode) {
                        if (d.reportToBoss({
                                oper: 11,
                                main_type: "wx",
                                msg: t.msg
                            }), t && -1 != $.inArray(t.errcode, [1006, 1010]))d.clearLoginCookie(); else {
                            var n = {head: d.getWxHead() || d.getConfig("defaultHead"), nick: d.getWxNick() || ""};
                            d.showOnline(n.nick, n.head, 0), d.refreshWxLogin(!1, function () {
                                0 != e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), 0 != e && d.onLogin()
                            })
                        }
                        return void d.setReady()
                    }
                    location.host.indexOf("qq.com") >= 0 && (i.set("access_token", t.access_token, location.host, "/", d.getConfig("cookieTime")), i.set("vusession", t.vusession, location.host, "/", d.getConfig("cookieTime")));
                    var n = {head: t.head || d.getWxHead() || d.getConfig("defaultHead")};
                    t.nick ? n.nick = decodeURIComponent(t.nick) : n.nick = d.getWxNick() || "", location.host.indexOf("qq.com") >= 0 && (i.set(d.getConfig("wxNickCookie"), encodeURIComponent(n.nick), location.host, "/", d.getConfig("cookieTime")), i.set(d.getConfig("wxHeadCookie"), n.head, location.host, "/", d.getConfig("cookieTime"))), d.setReady(), d.showOnline(n.nick, n.head, 0), 0 != e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), 0 != e && d.onLogin(), d.refreshTokenWxCgi(t.next_refresh_time)
                }
            }).fail(function (t) {
                var n = {head: d.getWxHead() || d.getConfig("defaultHead"), nick: d.getWxNick() || ""};
                d.showOnline(n.nick, n.head, 0), d.refreshWxLogin(!1, function () {
                    0 != e && "function" == typeof d.getConfig("success") && (d.getConfig("success")(), d.setConfig("success", null)), 0 != e && d.onLogin()
                }), d.setReady(), d.reportToBoss({
                    oper: 11,
                    main_type: "wx",
                    msg: t && t.statusText ? t.statusText : ""
                })
            }); else 1 == t || "" == d.getLoginType() ? (location.host.indexOf("qq.com") >= 0 && i.set(d.getConfig("typeCookie"), "qq", location.host, "/", d.getConfig("cookieTime")), $.ajax({
                url: d.config.qqLogin_cgi,
                type: "get",
                dataType: "jsonp",
                success: function () {
                    d.getQQNick(e, t)
                }
            }).fail(function (e) {
                d.clearLoginCookie(), d.setReady(), t && d.reportToBoss({
                    oper: 11,
                    main_type: "qq",
                    msg: e && e.statusText ? e.statusText : ""
                })
            })) : d.getQQNick(e)
        }, showOnline: function (e, t, n) {
            var o = $("#login_nick,[data-type='nickname'],._nickname"), r = $("#login_action"), a = $("[data-type='avatar'],._avatar");
            try {
                "string" == typeof e && (e = decodeURIComponent(e))
            } catch (s) {
            }
            if (e = e || d.getNick(), o.text(e), r.text(d.getConfig("logout_btn_text")), r.unbind("click"), r.bind("click", d.logout), "undefined" == typeof n) {
                var c = i.get(this.getConfig("nickCookie")), l = c.split("|");
                "" == c || l.length < 4 ? n = 1 : l[1] && l[1] == this.getUinOnly() && (n = "undefined" != typeof l[3] ? l[3] : 1)
            }
            if (a.size() > 0) {
                var u = new Image, p = "string" == typeof t ? t : d.getAvatar();
                u.onload = function () {
                    a.each(function (e, t) {
                        var i = $(t), o = d.getValidAvatarSize(parseInt(i.attr("data-avatarsize"), 10)), r = p;
                        1 == n && (r = p.replace(/([\?&]?s=)40([&$])/, "$1" + o + "$2")), i.attr("src", r)
                    })
                }, u.src = p
            }
            var f = $("[data-type='account_type_logo']");
            if (f.size() > 0) {
                var g = $(".__account_type_qq"), h = $(".__account_type_wx");
                g.size() > 0 && h.size() > 0 && (d.isWxLogin() ? (g.addClass("none"), h.removeClass("none")) : (h.addClass("none"), g.removeClass("none"))), f.show()
            }
        }, showNotLogin: function () {
            var e = $("#login_nick,_nickname"), t = $("#login_action");
            e.html(d.getConfig("logout_nick_html")), t.text(d.getConfig("login_btn_text")), t.unbind("click"), t.bind("click", d.openLogin), $("[data-type='account_type_logo']").hide()
        }, showMask: function (e, t, n, i, o) {
            var a, s = $("#" + e);
            if (i = "undefined" == typeof i ? !0 : i, document.getElementById("mask_layer") ? $("#mask_layer").show() : ($("body").append('<div id="mask_layer" class="mask_layer"></div>'), 6 == r.ie && $("#mask_layer").css("height", document.documentElement.scrollHeight)), 0 != s.length) {
                if (i)if (d.showAtCenter(document.getElementById(e), t, n), 6 == r.ie || window != top) {
                    var c = window != top ? top : window, l = null;
                    $.isFunction(d.onHideMask) && d.onHideMask(), o = $.isFunction(o) ? o : u, a = function () {
                        clearTimeout(l), l = setTimeout(function () {
                            d.showAtCenter(document.getElementById(e), t, n), o()
                        }, 50)
                    }, d.onHideMask = function () {
                        $(c).unbind("scroll", a)
                    }, $(c).bind("scroll", a)
                } else s.css("position", "fixed");
                "function" == typeof d.onShowMask && d.onShowMask()
            }
        }, hideMask: function () {
            $("#mask_layer").hide(), $.isFunction(d.onHideMask) && d.onHideMask()
        }, innerLoginCss: function () {
            if (0 == $("link[href$='login_dialog.css']").size()) {
                var e = "//imgcache.gtimg.cn/tencentvideo_v1/vstyle/web/common/style/login_dialog.css?v=20160201&max_age=86400", t = document.createElement("link");
                t.setAttribute("type", "text/css"), t.setAttribute("rel", "stylesheet"), t.setAttribute("href", e), $("head")[0].appendChild(t)
            }
        }, getShiftCookies: function (e) {
            var t = null, n = null, o = [];
            if ("" != this.getSkey()) {
                var r = i.get(this.getConfig("nickCookie"));
                if ("" != r) {
                    var a = r.split("|");
                    if (t = {}, a[1] && (t.uin = a[1]), a[0])try {
                        t.nick = decodeURIComponent(a[0])
                    } catch (s) {
                        t.nick = a[0]
                    }
                    if (a[2]) {
                        var c = d.getValidAvatarSize(100);
                        t.head = decodeURIComponent(a[2]).replace(/([\?&]?s=)40([&$])/, "$1" + c + "$2")
                    }
                    t.type = "qq"
                }
            }
            t && o.push(t);
            var l = i.get(d.getConfig("wxNickCookie"));
            l && (n = {}, n.nick = decodeURIComponent(l), n.head = i.get(this.getConfig("wxHeadCookie")), n.type = "wx", n && o.push(n)), e(o)
        }, shiftLogin: function () {
            d.getShiftCookies(function (e) {
                d.innerLoginCss();
                for (var t = '<div class="popup_account" style="display:block;"><div id="login_shift" class="mod_pop mod_pop_account"><iframe src="about:blank" frameborder="0" class="iframe_mask_pop"></iframe><div class="mod_pop_hd"><a href="javascript:;" class="mod_pop_close">鍏抽棴</a></div><div class="mod_pop_bd"><h5 class="pop_bd_title">甯愬彿绠＄悊</h5><ul class="account_list">', n = 0; n < e.length; n++)e[n].head || (e[n].head = d.getConfig("defaultHead")), t += '<li class="item _login_shift_item" data-type=' + e[n].type + '><div class="item_avatar"><img src="' + e[n].head + '" alt="澶村儚" ><i class="icon_choice"></i><i class="icon_account_' + e[n].type + '"></i></div><div class="item_top"><h5 class="user_name">' + e[n].nick + "</h5></div>", e[n].uin && (t += '<div class="item_btm"><span class="account_id">' + e[n].uin + "</span></div>"), t += '<a href="javascript:;" class="btn_logout" data-type=' + e[n].type + ">鍒犻櫎璐﹀彿</a></li>";
                t += '</ul><a href="javascript:;" class="btn_login_toggle">鐧诲綍鍏朵粬甯愬彿</a></div></div></div>', $("body").append(t);
                var o = document.getElementById("login_shift"), r = 540, s = e.length > 1 ? 413 : 292;
                d.config.showMask && !a.useHtml5() ? d.showMask("login_shift", r, s) : d.showAtCenter(o, r, s), d.reportToBoss({oper: 30});
                var c = $("#login_shift");
                c.find(".mod_pop_close").unbind("click").bind("click", function (e) {
                    e.preventDefault(), c.remove(), d.hideMask(), d.reportToBoss({oper: 31})
                }), c.find(".btn_logout").unbind("click").bind("click", function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = $(this);
                    d.reportToBoss({oper: 33});
                    var n = t.attr("data-type");
                    n == d.getLoginType() ? d.logout() : (d.deleteLoginAccount(n), c.remove(), d.hideMask())
                }), c.find(".btn_login_toggle").unbind("click").bind("click", function (e) {
                    e.preventDefault(), c.remove(), d.reportToBoss({oper: 34}), d.openLogin()
                });
                var l = c.find("._login_shift_item");
                l.unbind("click").bind("click", function (e) {
                    e.preventDefault(), l.removeClass("item_selected");
                    var t = $(this);
                    t.addClass("item_selected");
                    var n = t.attr("data-type");
                    n != d.getLoginType() && (i.set(d.getConfig("typeCookie"), n, location.host, "/", d.getConfig("cookieTime")), "qq" == n ? $.ajax({
                        url: d.config.qqLogin_cgi,
                        type: "get",
                        dataType: "jsonp",
                        success: function () {
                            d.reportToBoss({oper: 13, main_type: n}, !0), window.location.reload()
                        }
                    }) : d.refreshWxLogin(function () {
                        d.reportToBoss({oper: 13, main_type: n}, !0), window.location.reload()
                    }, !0)), c.remove(), d.hideMask(), d.reportToBoss({oper: 32})
                })
            })
        }, innerOpenloginHtml: function (e, t) {
            var n = '<div id="login_win" class="login_dialog"><iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe><a href="javascript:void(0)" id="login_close" class="btn_close" title="鍏抽棴"><span class="btn_inner">鍏抽棴</span></a><div class="login_tab"><ul class="tab_list';
            t && (n += " tab_list_single"), n += '"><li class="list_item _list_item_qq" data-type="qq"><a href="javascript:void(0);" class="tab_item tab_item_qq"><span class="item_inner">QQ甯愬彿鐧诲綍</span></a></li><li class="list_item _list_item_wx" data-type="wx"><a href="javascript:void(0);" class="tab_item tab_item_wx"><span class="item_inner">寰俊甯愬彿鐧诲綍</span></a></li></ul></div><div class="login_cont"><div class="cont_inner cont_inner_qq"><div class="login_iframe login_iframe_qq"><iframe name="_login_frame_quick_" id="_login_frame_quick_" frameborder="no" scrolling="no" width="100%" height="100%" src="about:blank"></iframe></div>', t && (n += '<div class="login_iframe_change"><a class="change_link" href="javascript:;" data-type="wx">鍒囨崲<span class="name">寰俊甯愬彿</span>鐧诲綍 &gt;&gt;</a></div>'), n += '</div><div class="cont_inner cont_inner_wx"><div class="login_iframe login_iframe_wx"><label class="iframe_title">瀹夊叏鐧诲綍锛岄槻姝㈣鐩�</label><iframe name="_login_frame_wechat_" id="_login_frame_wechat_" frameborder="no" scrolling="no" width="100%" height="100%" src="about:blank"></iframe>', d.config.wxLoginTxt && (n += '<p class="iframe_tips">' + d.config.wxLoginTxt + "</p>"), n += "</div>", t && (n += '<div class="login_iframe_change"><a class="change_link" href="javascript:;" data-type="qq">鍒囨崲<span class="name">QQ甯愬彿</span>鐧诲綍 &gt;&gt;</a></div>'), n += "</div></div></div>", $("body").append(n);
            var i = $("#login_win");
            i.find("._list_item_" + e).addClass("current"), i.find(".cont_inner_" + e).addClass("cont_inner_in"), "wx" == e ? d.innerSetWxSrc() : d.innerSetQqSrc(), t ? i.find(".change_link").unbind("click").bind("click", function (e) {
                e.preventDefault();
                var t = $(this).attr("data-type");
                "wx" == t ? d.innerSetWxSrc() : d.innerSetQqSrc(), i.find(".current").removeClass("current"), i.find("._list_item_" + t).addClass("current"), i.find(".cont_inner_in").removeClass("cont_inner_in"), i.find(".cont_inner_" + t).addClass("cont_inner_in"), d.reportToBoss({
                    oper: 27,
                    main_type: t
                })
            }) : i.find(".list_item").unbind("click").bind("click", function (e) {
                e.preventDefault();
                var t = $(this), n = t.attr("data-type");
                "wx" == n ? d.innerSetWxSrc() : d.innerSetQqSrc(), i.find(".current").removeClass("current"), i.find("._list_item_" + n).addClass("current"), i.find(".cont_inner_in").removeClass("cont_inner_in"), i.find(".cont_inner_" + n).addClass("cont_inner_in"), d.reportToBoss({
                    oper: 22,
                    main_type: n
                })
            }), $("#login_close").unbind("click").bind("click", function (e) {
                e.preventDefault(), $("#login_win").remove(), d.isOpend = !1, d.hideMask(), d.reportToBoss({oper: 21}), d.onLoginCancel(), d.onCloseLogin();
                var t = d.getConfig("rejectLogin");
                "function" == typeof t && t()
            })
        }, getFullUrl: function (e) {
            return e && 0 != e.length ? 0 == e.indexOf("http") ? e : window.location.protocol + e : e
        }, innerSetQqSrc: function () {
            if (d.config.loadQqIframe) {
                var e = d.getFullUrl(d.config.jumpurl), t = d.getFullUrl(d.config.clientjumpurl), n = d.getFullUrl(d.getPtloginUrl()), i = (d.getFullUrl("//i.gtimg.cn/qqlive/images/20130521/i1369106644_1.jpg?max_age=6048000"), "");
                window.__j_url = t, n += "&style=20&hln_logo=" + encodeURIComponent(i);
                var o = [n, "&hide_close_icon=1&appid=", d.config.appid, "&f_url=loginerroralert&qlogin_auto_login=0", "&s_url=", escape(d.getFullUrl("//v.qq.com/toolpages/redirect.html?clientjumpurl=") + escape(t || window.location.href) + "&jumpurl=" + e)].join("");
                $("#_login_frame_quick_").attr("src", o), d.config.loadQqIframe = !1
            }
        }, innerSetWxSrc: function () {
            if (d.config.loadWxIframe) {
                var e = d.getFullUrl("//open.weixin.qq.com/connect/qrconnect?appid=") + d.config.wxAppid, t = [e, "&redirect_uri=", escape(d.getFullUrl(d.config.wxLogin_cgi)), "&response_type=code&scope=snsapi_login&state=111&href=", escape(d.getFullUrl("//imgcache.gtimg.cn/tencentvideo_v1/vstyle/web/common/style/iframe_login_wx.css"))].join("");
                $("#_login_frame_wechat_").attr("src", d.config.wxLoginUrl ? d.getFullUrl(d.config.wxLoginUrl) : t), d.config.loadWxIframe = !1
            }
        }, openTypeTipDlg: function (e) {
            var t = '<div id="login_win_type" class="login_dialog"><iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe><a href="javascript:;" class="btn_close" title="鍏抽棴"><span class="btn_inner">鍏抽棴</span></a><div class="login_tab"><div class="tab_title"><span class="title_inner">閫夋嫨鐧诲綍甯愬彿绫诲瀷</span></div></div><div class="login_cont"><div class="cont_inner cont_inner_in"><div class="login_choose"><div class="login_avatar"><i class="ico_avatar"></i></div><div class="login_btns"><a href="javascript:;" class="btn_qq _login_type_item" data-type="qq"><span class="btn_inner">QQ鐧诲綍</span></a><a href="javascript:;" class="btn_weixin _login_type_item" data-type="wx""><span class="btn_inner">寰俊鐧诲綍</span></a></div></div></div></div></div>';
            $("body").append(t);
            var n = document.getElementById("login_win_type"), i = 622, o = 418;
            d.config.showMask && !a.useHtml5() ? d.showMask("login_win_type", i, o) : d.showAtCenter(n, i, o);
            var r = $("#login_win_type");
            r.find(".btn_close").unbind("click").bind("click", function (e) {
                e.preventDefault(), r.remove(), d.hideMask(), d.onLoginCancel(), d.onCloseLogin(), d.reportToBoss({oper: 25})
            }), r.find("._login_type_item").unbind("click").bind("click", function (t) {
                t.preventDefault(), r.remove();
                var n = $(this).attr("data-type");
                d.reportToBoss({oper: 24, main_type: n}), d.innerOpenlogin(e, n), d.setRememberType(n)
            }), d.reportToBoss({oper: 23})
        }, openLoginSingle: function (e, t) {
            t || (t = d.getLoginType()), t = t || "qq", d.innerLoginCss(), d.innerOpenlogin(e, t, !0), d.reportToBoss({
                oper: 26,
                main_type: t
            })
        }, openLogin: function (e, t) {
            if (d.innerLoginCss(), "qq" == t || "wx" == t)d.innerOpenlogin(e, t); else {
                var n = i.get(d.getConfig("rememberTypeCookie"));
                n && n.length > 0 ? d.innerOpenlogin(e, n) : d.openTypeTipDlg(e)
            }
            d.reportToBoss({oper: 20, main_type: t})
        }, setRememberType: function (e) {
            i.set(d.getConfig("rememberTypeCookie"), e, location.host, "/", 175200)
        }, innerOpenlogin: function (e, t, n) {
            d.isOpend = !0, $.extend(d.config, e), d.setConfig(e), d.config.loadWxIframe = !0, d.config.loadQqIframe = !0;
            var i, r = 622, s = 418;
            if (null == document.getElementById("login_win") && d.innerOpenloginHtml(t, n), i = document.getElementById("login_win"), !i)return void setTimeout(function () {
                d.openLogin(e)
            }, 50);
            i.style.display = "none", d.config.showMask && !a.useHtml5() ? d.showMask("login_win", r, s) : d.showAtCenter(i, r, s);
            try {
                d.isLogin() && "" != d.getSkey() && o.button("LOGIN.UIN_OPEN")
            } catch (c) {
            }
            d.onOpenLogin()
        }, getPtloginUrl: function () {
            var e = "//xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&target=self";
            return this.getConfig("useStrictLogin") || (e += "&low_login=1"), e
        }, showAtCenter: function (e, t, n) {
            a.showAtCenter(e, t, n)
        }, deleteLoginAccount: function (e) {
            "wx" == e ? (i.set(d.getConfig("wxNickCookie"), "", location.host, "/", -24), i.set(d.getConfig("wxHeadCookie"), "", location.host, "/", -24)) : (e = "qq", i.set(d.getConfig("nickCookie"), "", location.host, "/", -24), i.set(d.getConfig("encuinCookie"), "", location.host, "/", -24), 0 == d.getConfig("useStrictLogin") && (i.set(d.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24)), i.set("skey", "", ".qq.com", "/", -24)), $.ajax({
                url: d.config.wxLogout_cgi + "?clear=0&type=" + e,
                type: "get",
                dataType: "jsonp",
                timeout: 1e4,
                success: function (e) {
                }
            })
        }, clearLoginCookie: function (e, t, n) {
            t = t || d.getLoginType(), "wx" == t ? (i.set(d.getConfig("wxNickCookie"), "", location.host, "/", -24), i.set(d.getConfig("wxHeadCookie"), "", location.host, "/", -24), i.set("access_token", "", location.host, "/", -24), i.set("openid", "", location.host, "/", -24), i.set("appid", "", location.host, "/", -24), i.set("vuserid", "", location.host, "/", -24), i.set("vusession", "", location.host, "/", -24)) : (t = "qq", i.set(d.getConfig("nickCookie"), "", location.host, "/", -24), i.set(d.getConfig("encuinCookie"), "", location.host, "/", -24), 0 == d.getConfig("useStrictLogin") && (i.set(d.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24), i.set("luin", "", ".qq.com", "/", -24)), i.set("skey", "", ".qq.com", "/", -24)), i.set(d.getConfig("typeCookie"), "", location.host, "/", -24), $.ajax({
                url: d.config.wxLogout_cgi + "?clear=1&type=" + t,
                type: "get",
                dataType: "jsonp",
                timeout: 1e4,
                success: function () {
                    d.showNotLogin(), ("boolean" != typeof e || e) && d.onClearLoginStatus(), n && n()
                }
            })
        }, logout: function (e) {
            d.reportToBoss({oper: 12}), d.clearLoginCookie(!0, null, function () {
                "function" == typeof d.getConfig("logout") && d.getConfig("logout")(e), d.onLogout(e)
            })
        }
    }), f.init();
    var d = f;
    $.extend(d, {
        config: {
            typeCookie: "main_login",
            cookieTime: 720,
            rememberTypeCookie: "login_remember",
            wxAppid: "wx5ed58254bc0d6b7f",
            wxNickCookie: "wx_nick",
            wxHeadCookie: "wx_head",
            wxLoginUrl: "",
            wxLoginTxt: "",
            wxCookieUrl: "//video.qq.com/getcookie/getcookie.html",
            wxGetCookie_cgi: "//video.qq.com/fcgi-bin/get_cookie",
            wxLogin_cgi: "//video.qq.com/fcgi-bin/wx_login?from=1",
            wxRefresh_cgi: "//video.qq.com/fcgi-bin/check_login",
            wxLogout_cgi: "//video.qq.com/fcgi-bin/logout",
            loadWxIframe: !0,
            loadQqIframe: !0,
            qqLogin_cgi: "//video.qq.com/fcgi-bin/qq_login",
            defaultHead: "//imgcache.gtimg.cn/tencentvideo_v1/vstyle/web/v3/style/images/default_avatar.png",
            userInfo_cgi: "//video.qq.com/fcgi-bin/get_user_profile",
            appid: "532001601",
            uinCookie: "uin",
            luinCookie: "luin",
            encuinCookie: "encuin",
            nickCookie: "lw_nick",
            quickLogin: !0,
            jumpurl: "",
            clientjumpurl: null,
            showMask: !0,
            success: null,
            logout: null,
            rejectLogin: null,
            login_cgi: "//c.video.qq.com/cgi-bin/login?otype=json&nes=1",
            renew_skey: "//uple.qq.com/?t=aio_page&op=renew",
            show_uniq: !1,
            show_content: "",
            login_btn_text: "鐧诲綍",
            logout_btn_text: "[閫€鍑篯",
            logout_nick_html: "",
            hasReady: !1,
            disLogCallback: !1,
            useStrictLogin: !1,
            avatarSize: [40, 100]
        }, init: function (e, t) {
            t = !!t, $.extend(this.config, e), this.setConfig(this.config), d.getWxCookies(function (e) {
                e && e.main_login && (i.set(d.getConfig("typeCookie"), e.main_login, location.host, "/", d.getConfig("cookieTime")), "wx" == e.main_login && (e.access_token ? (i.set("access_token", e.access_token, location.host, "/", d.getConfig("cookieTime")), i.set("openid", e.openid, location.host, "/", d.getConfig("cookieTime")), i.set("vuserid", e.vuserid, location.host, "/", d.getConfig("cookieTime")), i.set("vusession", e.vusession, location.host, "/", d.getConfig("cookieTime")), i.set("appid", e.appid, location.host, "/", d.getConfig("cookieTime"))) : (i.set(d.getConfig("wxNickCookie"), "", location.host, "/", -24), i.set(d.getConfig("wxHeadCookie"), "", location.host, "/", -24), i.set("access_token", "", location.host, "/", -24), i.set("openid", "", location.host, "/", -24), i.set("appid", "", location.host, "/", -24), i.set("vuserid", "", location.host, "/", -24), i.set("vusession", "", location.host, "/", -24)))), d.setStatus(t, !1)
            }), d.checkQQUin(), $(document).delegate("[data-type='logout']", "click", function (e) {
                e.preventDefault(), d.logout()
            }).delegate("[data-type='login']", "click", function (e) {
                e.preventDefault(), d.clearLoginCookie(), d.openLogin()
            }), d.renew_skey()
        }
    }), d.setConfig(d.config), function () {
        var e = $.isFunction(window.ptlogin2_onResize) ? window.ptlogin2_onResize : $.noop, t = $.isFunction(window.ptlogin2_onClose) ? window.ptlogin2_onClose : $.noop, n = $.isFunction(window.ptlogin2_onSuccess) ? window.ptlogin2_onSuccess : $.noop, i = $.isFunction(window.__rdt__) ? window.__rdt__ : $.noop;
        window.ptlogin2_onResize = function (t, n) {
            10 > t || 10 > n || (document.getElementById("_login_frame_quick_").style.height = n + "px", document.getElementById("_login_frame_quick_").style.width = t + "px", e(t, n))
        }, window.ptlogin2_onClose = function (e) {
            var n = d.getConfig("rejectLogin");
            $("#login_win").remove(), d.isOpend = !1, d.hideMask(), e ? ptlogin2_onSuccess() : ("function" == typeof n && n(), d.setConfig("success", null), d.onLoginCancel()), d.onCloseLogin(), t(e)
        }, window.ptlogin2_onSuccess = function () {
            d.checkQQUin(), d.setStatus(!0, !0, "qq"), n()
        }, window.__rdt__ = function () {
            if (__j_url)for (; -1 != __j_url.indexOf("%") && -1 == __j_url.indexOf("?");)__j_url = unescape(__j_url); else window.location.reload();
            window.location.href = __j_url, i()
        }, window.wxlogin_onSuccess = function (e) {
            $("#login_win").remove(), d.isOpend = !1, d.hideMask(), d.onCloseLogin(), d.setStatus(!0, !1, "wx", e)
        }
    }(), e.exports = d
}, function (e, t) {
    "use strict";
    e.exports = {
        set: function (e, t, n, i, o) {
            if (o) {
                var r = new Date, a = new Date;
                a.setTime(r.getTime() + 36e5 * o)
            }
            return document.cookie = e + "=" + t + "; " + (o ? "expires=" + a.toGMTString() + "; " : "") + (i ? "path=" + i + "; " : "path=/; ") + (n ? "domain=" + n + ";" : "domain=" + window.location.host + ";"), !0
        }, get: function (e, t) {
            var n = new RegExp("(?:^|;+|\\s+)" + e + "=([^;]*)"), i = (t || document.cookie).match(n);
            return i ? i[1] : ""
        }, del: function (e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() - 1), document.cookie = e + "=; expires=" + i.toGMTString() + ";" + (n ? "path=" + n + "; " : "path=/; ") + (t ? "domain=" + t + ";" : "domain=" + window.location.host + ";")
        }
    }
}, function (e, t, n) {
    var i = {
        jspath: "//pingjs.qq.com/ping_video.js",
        isBusy: !1,
        comscorePath: "//b.scorecardresearch.com/beacon.js",
        comscoreParam: {c1: 2, c2: 6036207},
        keyPrefix: "ISD.LIVEWEB.",
        initPGVGlobalParam: function () {
            pgvVirtualDomain = "", pvCurDomain = "", pvCurUrl = ""
        },
        hot: function (e) {
            function t() {
                i.isBusy = !1, i.initPGVGlobalParam(), pgvSendClick({hottag: i.keyPrefix + e})
            }

            "function" == typeof pgvSendClick ? t() : i.isBusy ? setTimeout(function () {
                i.hot(e)
            }, 20) : (i.isBusy = !0, $.ajax({url: i.jspath, success: t, error: i.errReport, dataType: "script"}))
        },
        button: function (e, t, n) {
            function o() {
                if (i.isBusy = !1, "undefined" == typeof t) {
                    var o = e, r = e.split(".");
                    r.length > 0 && (o = r[0]), o += ".html", t = "/virtualpage/" + o
                }
                i.initPGVGlobalParam(), "function" == typeof pgvSendClick && ("undefined" != typeof n ? pgvSendClick({
                    hottag: i.keyPrefix + e,
                    virtualURL: t,
                    virtualDomain: n
                }) : pgvSendClick({hottag: i.keyPrefix + e, virtualURL: t}))
            }

            "string" == typeof e && ("function" == typeof pgvSendClick ? o() : i.isBusy ? setTimeout(function () {
                i.button(e, t, n)
            }, 20) : (i.isBusy = !0, $.ajax({url: i.jspath, success: o, error: i.errReport, dataType: "script"})))
        },
        senseParam: null,
        pv: function (e) {
            var t = {};
            t["v.qq.com"] = !0, t["film.qq.com"] = !0, t["3g.v.qq.com"] = !0, t["m.v.qq.com"] = !0, t["videopage.qzone.qq.com"] = !0, t["cache.tv.qq.com"] = !0, t["imgcache.qq.com"] = !0, t["piao.v.qq.com"] = !0, t["ticket.v.qq.com"] = !0;
            var o = n(8);
            t[location.host] && "undefined" != typeof o && o.report();
            var r = {};
            r["v.qq.com"] = !0, r["boke.qq.com"] = !0, r["cache.tv.qq.com"] = !0, r["play.v.qq.com"] = !0, r["imgcache.qq.com"] = !0, r["sns.video.qq.com"] = !0, r["piao.v.qq.com"] = !0, r["ticket.v.qq.com"] = !0, r[location.host] && (i.pv_irt(), i.pv_comscore()), i.pv_pgv(e)
        },
        pv_pgv: function (e) {
            function t() {
                if (n.isBusy = !1, n.initPGVGlobalParam(), "undefined" != typeof pgvVirtualURL && (pgvVirtualURL = ""), "undefined" != typeof pvRepeatCount && (pvRepeatCount = 1), e || n.senseParam) {
                    var t = {};
                    n.senseParam && $.extend(t, {senseParam: n.senseParam}), e && ($.extend(t, e), e.virtualURL && (pvCurUrl = e.virtualURL)), "function" == typeof pgvMain && pgvMain("", t)
                } else"function" == typeof pgvMain && pgvMain()
            }

            e = e || {}, top != window && (e.statIframe = !0);
            var n = this;
            "function" == typeof pgvMain ? t() : n.isBusy ? setTimeout(function () {
                n.pv_pgv(e)
            }, 20) : (n.isBusy = !0, $.ajax({url: n.jspath, success: t, error: n.errReport, dataType: "script"}))
        },
        pv_irt: function () {
            var e = n(13);
            "undefined" != typeof e && e.init("")
        },
        pv_comscore: function () {
            var e = this, t = n(6);
            setTimeout(function () {
                $.getScript(e.comscorePath, function () {
                    "undefined" == typeof e.comscoreParam.c10 && (e.comscoreParam.c10 = t.get("pvid"));
                    try {
                        COMSCORE.beacon(e.comscoreParam)
                    } catch (n) {
                        e.button("comscore.error")
                    }
                })
            }, 2e3)
        },
        watch: function () {
            var e = this;
            $("body").on("click", function () {
                "function" == typeof pgvWatchClick && (e.initPGVGlobalParam(), pgvWatchClick())
            })
        },
        performance: function (e, t, n) {
            var i = window.performance || window.msPerformance || window.webkitPerformance;
            if (i) {
                i = i.timing;
                var o = [], r = i.domainLookupStart;
                o[0] = i.domainLookupEnd, o[1] = i.requestStart, o[2] = i.responseStart, o[3] = i.responseEnd, o[4] = i.domComplete, o[5] = i.loadEventEnd;
                for (var a = [["//isdspeed.qq.com/cgi-bin/r.cgi?flag1=", e, "&flag2=", t, "&flag3=", n].join("")], s = 0, c = o.length; c > s; s++)o[s] && a.push(s + 1 + "=" + (o[s] - r));
                window._speed_img = new Image, window._speed_img.src = a.join("&")
            }
        },
        errReport: function () {
            var e = this;
            setTimeout(function () {
                "undefined" == typeof window.pingjsReqImg && (window.pingjsReqImg = new Image), window.pingjsReqImg.src = ["http://rcgi.video.qq.com/web_report?cmd=2563", "&str1=", encodeURIComponent(e.jspath)].join(""), e.isBusy = !1
            }, 0)
        }
    };
    e.exports = i
}, function (e, t, n) {
    var i = (n(9), n(6)), o = n(11), r = n(12), a = {
        dm: location.hostname || location.host, idx: 1, hotKeyName: "_stat", report: function () {
            var e = this, t = e.dm, n = this.getPtag();
            "" != n && this.setCookiePtag("ptag", n, t);
            var r = 0, a = {
                "cache.tv.qq.com": 1,
                "imgcache.qq.com": 1,
                "film.qq.com": 2,
                "3g.v.qq.com": 3,
                "m.v.qq.com": 4
            };
            a[t] && (r = a[t]);
            var s = new Image;
            s.onerror = s.onload = s.onabort = function () {
            }, s.src = ["http://rcgi.video.qq.com/pv_report?", "refer=", encodeURIComponent(document.referrer), "&ptag=", i.get("ptag"), "&itype=", r, "&idx=", e.idx++, "&t=", (new Date).valueOf()].join(""), this.reportToBoss({
                BossId: 3487,
                Pwd: 745225177,
                itype: r,
                idx: e.idx,
                ptag: n,
                qtag: o.getQtag(),
                refer: document.referrer,
                url: document.URL || document.location.href
            }), e.idx++
        }, reportToBoss: function (e) {
            window.location.href.indexOf("/cover/") > 0 && window.COVER_INFO && window.COVER_INFO.typeid > 0 && (e.type = window.COVER_INFO.typeid);
            var t = "//btrace.video.qq.com/kvcollect?", n = "";
            n = $.param(e);
            var i = [t, n, "&_=", Math.ceil(1e3 * Math.random())].join("");
            r(i)
        }, getPtag: function () {
            for (var e = document.location.toString().toLowerCase(), t = this.dm, n = "", i = ["ptag", "adtag", "pgv_ref"], o = 0, r = i.length; r > o && !(n = a.getUrlParam(i[o], e)); o++);
            if (!n) {
                var s = this.getDomainOfURL(document.referrer);
                "" != s && t != s && (n = s.replace(/\./g, "_")), n || (n = this.getCookiePtag("ptag"))
            }
            return n
        }, getDomainOfURL: function (e) {
            var t = "";
            if ("undefined" == typeof e || null == e || "" == e)return t;
            var n = /.*\:\/\/([^\/]*).*/, i = e.match(n);
            return "undefined" != typeof i && null != i && (t = i[1]), t
        }, getCookiePtag: function (e) {
            e = e || "ptag";
            var t = i.get(e), n = t.split("|");
            return n[0]
        }, setCookiePtag: function (e, t, n) {
            for (var o = i.get(e), r = o.split("|"), a = [t], s = 1, c = r.length; c > s; s++)a.push("|" + r[s]);
            i.set(e, a.join(""), n)
        }, getUrlParam: function (e, t) {
            t = t || location.href;
            var n, i = new RegExp("[?&#]" + e + "=([^&#]+)", "gi"), o = t.match(i);
            return o && o.length > 0 ? (n = o[o.length - 1].split("="), n && n.length > 1 ? n[1] : "") : ""
        }, initPageHotKey: function () {
            if ("function" == typeof $ && $.fn && $.fn.jquery) {
                var e = function (e) {
                    return e && 1 == e.nodeType
                };
                $(document).off("click", "a").on("click", "a", function (t) {
                    if (e(this)) {
                        for (var n = null, i = t.target; this != i && e(i);) {
                            if (i.getAttribute(a.hotKeyName)) {
                                n = i;
                                break
                            }
                            i = i.parentNode
                        }
                        n || this.getAttribute(a.hotKeyName) && (n = this), n && o.checkQtag(n, t)
                    }
                })
            }
        }, getCurPageType: function (e) {
            if ("string" == typeof PAGEHOT)return PAGEHOT;
            var t = "others";
            return "undefined" == typeof txv ? t : (window.COVER_INFO && window.COVER_INFO.typeid > 0 && (t = window.COVER_INFO.typeid), t)
        }, bindBtnTj: function () {
            $("._hotkey").bind("click", function () {
                a.btnTj(this.getAttribute(a.hotKeyName))
            })
        }, btnTj: function (e) {
            "string" == typeof e && (e = e.replace("{pagetype}", a.getCurPageType())), n(7).button(e)
        }, initPtag: function () {
            var e = this.dm, t = this.getPtag();
            "" != t && this.setCookiePtag("ptag", t, e)
        }
    };
    a.initPtag(), e.exports = a
}, function (module, exports, __webpack_require__) {
    var lazyreport = function () {
        var reg = /^(?:(?:ht|f)tp(?:s)?\:)?\/\/(?:[\w\-\.]+)\.\w+/i, mydomain = location.hostname || location.host, k = "txv_lazyreport_list", d = "|", Cookie = __webpack_require__(6), cookieMode = {
            get: function (e) {
                return Cookie.get(e)
            }, set: function (e, t) {
                return Cookie.set(e, t, mydomain)
            }, clear: function (e) {
                return Cookie.set(e, "", mydomain)
            }
        }, sessionStorageMode = {
            isSupport: window.sessionStorage, get: function (e) {
                return sessionStorage.getItem(e)
            }, set: function (e, t) {
                return sessionStorage.setItem(e, t)
            }, clear: function (e) {
                return sessionStorage.removeItem(e)
            }
        }, qzstorage = __webpack_require__(10), qzflStorageMode = {
            isSupport: !!qzstorage, get: function (e, t) {
                qzstorage.get(e, t)
            }, set: function (e, t) {
                qzstorage.set(e, t)
            }, clear: function (e) {
                this.set(e, "")
            }
        }, mode = function () {
            if (qzflStorageMode.isSupport) {
                var e = qzflStorageMode;
                return {get: e.get, set: e.set, clear: e.clear}
            }
            if (sessionStorageMode.isSupport) {
                var t = sessionStorageMode;
                return {
                    get: function (e, n) {
                        var i = t.get(e);
                        return n(i), i
                    }, set: t.set, clear: t.clear
                }
            }
            var n = cookieMode;
            return {
                get: function (e, t) {
                    var i = n.get(e);
                    return t(i), i
                }, set: n.set, clear: n.clear
            }
        }(), _imgreport = function (e, t) {
            var n = new Image;
            n.onload = n.onerror = n.onabort = function () {
                delete n, t()
            }, n.src = e
        }, clear = function () {
            return mode.clear(k)
        }, val = function (e) {
            mode.get(k, function (t) {
                e(t)
            })
        }, push = function (e) {
            mode.get(k, function (t) {
                t && t.length > 0 ? t += d + encodeURIComponent(e) : t = encodeURIComponent(e), mode.set(k, t)
            })
        }, shift = function (e) {
            mode.get(k, function (t) {
                if (t) {
                    var n = t.split(d), i = n.shift();
                    mode.set(k, n.join(d)), e(decodeURIComponent(i))
                }
            })
        }, reportItem = function (item, cb) {
            reg.test(item) ? setTimeout(function () {
                _imgreport(item, cb)
            }, 0) : setTimeout(function () {
                try {
                    eval(item), cb()
                } catch (e) {
                }
            }, 0)
        }, report = function () {
            shift(function (e) {
                e && reportItem(e, function () {
                    report()
                })
            })
        };
        return {push: push, clear: clear, report: report}
    }();
    module.exports = lazyreport
}, function (e, t) {
    var n = "undefined" != typeof window.localStorage, i = {
        isSupport: n, get: function (e, t) {
            try {
                var n = localStorage.getItem(e);
                return "function" == typeof t && t(n), n
            } catch (i) {
                return "function" == typeof t && t(""), ""
            }
        }, set: function (e, t) {
            try {
                return localStorage.setItem(e, t), !0
            } catch (n) {
                return !1
            }
        }, remove: function (e) {
            try {
                localStorage.removeItem(e)
            } catch (t) {
            }
        }, clear: function () {
            localStorage.clear()
        }
    };
    e.exports = i
}, function (e, t, n) {
    QTAG_SET_FLAG = !1;
    var i = n(6), o = {
        dm: location.hostname || location.host,
        hotKeyName: "_stat",
        qtagName: "_qtag",
        init: function () {
            var e = this, t = n(8), i = t.getDomainOfURL(document.referrer);
            e.dm != i && e.clearCookieQtag(), $(document).undelegate("[" + this.qtagName + "]", "click").delegate("[" + this.qtagName + "]", "click", function (t) {
                var n = QTAG_SET_FLAG, i = $(this);
                if (!n) {
                    var o = i.attr(this.qtagName);
                    o && "" != o && (e.setCookieQtag(o), QTAG_SET_FLAG = !0)
                }
            }), $("body").on("click", function (t) {
                var n = QTAG_SET_FLAG;
                if (!n && e.checkLinkTag(t, this)) {
                    var i = e.getDefaultQtag();
                    e.setCookieQtag(i)
                }
                QTAG_SET_FLAG = !1
            })
        },
        getQtag: function (e, t) {
            for (var n = this, i = e, o = document, r = ""; o != i && i && 1 == i.nodeType;) {
                var a = $(i), s = a.attr(n.qtagName);
                if (s && "" != s || (s = a.attr(n.hotKeyName)), s && "" != s) {
                    r = s;
                    break
                }
                i = i.parentNode
            }
            return "" == r && (r = n.getDefaultQtag()), r
        },
        checkQtag: function (e, t) {
            if (!QTAG_SET_FLAG) {
                var n = $(e), i = n.attr(o.qtagName);
                if (i && "" != i)return o.setCookieQtag(i), void(QTAG_SET_FLAG = !0);
                var r = n.attr(o.hotKeyName);
                r && "" != r && (o.setCookieQtag(r), QTAG_SET_FLAG = !0)
            }
        },
        getCookieQtag: function () {
            var e = i.get("ptag"), t = e.split("|");
            return t.length < 2 ? "" : t[1]
        },
        setCookieQtag: function (e) {
            var t = "ptag", n = this, o = i.get(t), r = o.split("|"), a = [r[0], "|" + e];
            if (r.length > 2)for (var s = 2, c = r.length; c > s; s++)a.push("|" + r[s]);
            i.set(t, a.join(""), n.dm)
        },
        getDefaultQtag: function () {
            var e = location.pathname;
            if (e.length < 1 || "/" == e)return location.hostname.replace(/\./g, "_");
            var t = e.indexOf("/", 1);
            return -1 == t ? e.substring(1) : e.substring(1, t)
        },
        clearCookieQtag: function () {
            var e = "ptag", t = this, n = i.get(e), o = n.split("|");
            if (o.length > 1) {
                for (var r = [o[0]], a = 2, s = o.length; s > a; a++)r.push("|" + o[a]);
                i.set(e, r.join(""), t.dm)
            }
        },
        checkLinkTag: function (e, t) {
            var n = e.target;
            if ("A" == n.tagName || "A" == t.tagName)return !0;
            for (; t != n && n && 1 == n.nodeType;) {
                if ("A" == n.tagName)return !0;
                n = n.parentNode
            }
            return !1
        }
    };
    e.exports = o
}, function (e, t) {
    var n = function () {
        function e() {
            return 0 == r.length ? (i = !0, void(o = null)) : (a("error:" + r[0]), t(r.splice(0, 1)), void(i = !1))
        }

        function t(t) {
            o = document.createElement("img"), o.onerror = e, o.src = t
        }

        function n(e) {
            return e && /^(?:(?:ht|f)tp(?:s)?\:)?\/\/(?:[\w\-\.]+)\.\w+/i.test(e) ? null == o ? (a("first:" + e), t(e), void(i = !1)) : i ? (a("free:" + e), t(e), void(i = !1)) : (a("ready::" + e), void r.push(e)) : void a("error")
        }

        var i = !0, o = null, r = [], a = function () {
            var e = !!window.console && "function" == typeof window.console.log && -1 != location.href.indexOf("debug=true");
            return function (t) {
                e && window.console.log(t)
            }
        }();
        return function (e, t) {
            if ("string" == typeof e) {
                if ("object" == $.type(t)) {
                    var i = [];
                    for (var o in t)i.push(o + "=" + encodeURIComponent("" + t[o]));
                    e += e.indexOf("?") > -1 ? "&" + i.join("&") : "?" + i.join("&")
                }
                n(e)
            }
        }
    }();
    e.exports = n
}, function (e, t) {
    var n = {
        version: "0.0.7",
        dataHandler: "//tj.video.qq.com/fcgi-bin/set_cookie?otype=json&",
        dataHandler_video: "//tj.video.qq.com/fcgi-bin/set_cookie?otype=json&",
        _account: "",
        _u_eventid: "",
        _debug: !1,
        init: function (e) {
            this._account = e, this._track()
        },
        _trackStart: function (e) {
            return e.indexOf("-") < 0 ? "invalid user identify." : (this.init(e), this)
        },
        _track: function () {
            this._feedBack()
        },
        record_video_api: function (e, t, n, i) {
            return i + "" == "0" ? (this._u_eventid = Math.abs(parseInt((navigator.userAgent ^ (new Date).getTime()) * Math.random())) + e, void this._feedBack_video(e, t, n, i)) : void this._feedBack_video(e, t, n, i)
        },
        _feedBack: function () {
            var e = Array("id=" + this._account, "pt=" + encodeURIComponent(document.title), "dm=" + encodeURIComponent(window.location.host), "pa=" + encodeURIComponent(window.location.pathname), "sr=" + document.body.clientWidth + "x" + document.body.clientHeight, "ul=" + (navigator.language || "zh-CN"), "tv=" + this.version, "r=" + (new Date).getTime(), "url=" + encodeURIComponent(window.location.href), "ua=" + encodeURIComponent(navigator.userAgent.toString())).join("&"), t = this.dataHandler + e;
            this._img = new Image, this._img.src = t
        },
        _feedBack_video: function (e, t, n, i) {
            var o = Array("ta=" + i, "eid=" + this._u_eventid, "pt=" + encodeURIComponent(document.title), "vid=" + e, "du=" + t, "la=" + encodeURIComponent(n), "r=" + (new Date).getTime()).join("&"), r = this.dataHandler_video + o;
            this._img = new Image, this._img.src = r
        }
    };
    e.exports = n
}, function (e, t) {
    var n, i, o, r = {}, a = navigator.userAgent, s = (navigator.appVersion, {});
    if (r.adjustBehaviors = function () {
        }, window.ActiveXObject) {
        if (r.ie = 6, document.documentMode && (r.ie = document.documentMode), r.isBeta = navigator.appMinorVersion && navigator.appMinorVersion.toLowerCase().indexOf("beta") > -1, r.ie < 7)try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (c) {
        }
        s._doc = document, o = function (e) {
            return function (t, n) {
                var i;
                return "function" == typeof t ? (i = Array.prototype.slice.call(arguments, 2), e(function () {
                    t.apply(null, i)
                }, n)) : "string" == typeof t ? e(t, n) : void 0
            }
        }, window.setTimeout = s._setTimeout = o(s.nativeSetTimeout = window.setTimeout), window.setInterval = s._setInterval = o(s.nativeSetInterval = window.setInterval)
    } else document.getBoxObjectFor || "undefined" != typeof window.mozInnerScreenX ? (n = /(?:Firefox|GranParadiso|Iceweasel|Minefield).(\d+\.\d+)/i, r.firefox = parseFloat((n.exec(a) || n.exec("Firefox/3.3"))[1], 10)) : navigator.taintEnabled ? window.opera ? r.opera = parseFloat(window.opera.version(), 10) : /Trident\/\d+.+rv:(\d+\.\d+?)/i.test(a) ? r.ie = RegExp.$1 : r.ie = 6 : (i = /AppleWebKit.(\d+\.\d+)/i.exec(a), r.webkit = i ? parseFloat(i[1], 10) : document.evaluate ? document.querySelector ? 525 : 420 : 419, (i = /Chrome.(\d+\.\d+)/i.exec(a)) || window.chrome ? r.chrome = i ? parseFloat(i[1], 10) : "2.0" : ((i = /Version.(\d+\.\d+)/i.exec(a)) || window.safariHandler) && (r.safari = i ? parseFloat(i[1], 10) : "3.3"), r.air = a.indexOf("AdobeAIR") > -1 ? 1 : 0, r.isiPod = a.indexOf("iPod") > -1, r.isiPad = a.indexOf("iPad") > -1, r.isiPhone = a.indexOf("iPhone") > -1);
    (r.macs = a.indexOf("Mac OS X") > -1) || (r.windows = (i = /Windows.+?(\d+\.\d+)/i.exec(a), i && parseFloat(i[1], 10)), r.linux = a.indexOf("Linux") > -1, r.android = a.indexOf("Android") > -1), r.iOS = a.indexOf("iPhone OS") > -1, !r.iOS && (i = /OS (\d+(?:_\d+)*) like Mac OS X/i.exec(a), r.iOS = !(!i || !i[1])), e.exports = r
}, function (e, t) {
    var n = {
        getUrlParam: function (e, t) {
            t = t || location.href;
            var n, i = new RegExp("[?&#]" + e + "=([^&#]+)", "gi"), o = t.match(i);
            return o && o.length > 0 ? (n = o[o.length - 1].split("="), n && n.length > 1 ? n[1] : "") : ""
        }, addUrlParam: function (e, t) {
            t = t || document.URL || document.location.href;
            var n = t + "?";
            t.indexOf("?") > -1 && (n = t + "&");
            for (var i in e)if (this.getUrlParam(i, n)) {
                var o = new RegExp("([?&#]" + i + "=)([^&#]+)(.*?)", "i");
                n = n.replace(o, "$1" + e[i] + "$3")
            } else n = n + i + "=" + e[i] + "&";
            var r = n.length, a = n.charAt(r - 1);
            return "?" != a && "&" != a || (n = n.substring(0, r - 1)), n
        }, useHtml5: function () {
            var e = navigator.userAgent, t = !1;
            return $.each(["iPhone", "iPad", "iPod"], function (n, i) {
                t || -1 == e.indexOf(i) || (t = !0)
            }), this.getUrlParam("usehtml5") || t
        }, showAtCenter: function (e, t, n) {
            if (e) {
                var i = document.body.scrollTop;
                t = t || 373, n = n || 235, 0 == i && (i = document.documentElement.scrollTop);
                var o = document.documentElement.clientHeight;
                0 == o && (o = document.body.clientHeight), e.style.width = t + "px", e.style.height = n + "px", e.style.top = "50%", e.style.left = "50%", e.style.marginLeft = -t / 2 + "px", e.style.marginTop = -n / 2 + "px", e.style.position = "fixed", e.style.zIndex = "10001", e.style.display = "block", e.style.padding = "0px", e.style.backgroundColor = "#ffffff"
            }
        }, strToDate: function (e) {
            var t, n, i = /^(\d{4})-(\d{2})-(\d{2})(\s+?(\d{2}):(\d{2}):(\d{2}))?$/;
            return n = new Date(e), isNaN(n.getDate()) && $.isString(e) && (t = e.match(i)) && (n = t[4] && t[4].length > 0 ? new Date(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10), parseInt(t[6], 10), parseInt(t[7], 10)) : new Date(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10))), isNaN(n.getDate()) ? null : n
        }, getVideoSnap: function (e, t) {
            var n, i, o = 1e8;
            if (e.indexOf("_") > 0) {
                var r = e.split("_");
                e = r[0], t = parseInt(r[1])
            }
            for (var a = 4294967296, o = 1e8, s = 0, c = 0; c < e.length; c++) {
                var l = e.charCodeAt(c);
                s = 32 * s + s + l, s >= a && (s %= a)
            }
            return i = s % o, void 0 == t && (t = 0), n = 0 == t ? ["//vpic.video.qq.com/", i, "/", e, "_160_90_3.jpg"].join("") : ["//vpic.video.qq.com/", i, "/", e, "_", "160_90_", t, "_1.jpg"].join("")
        }, getFullUrlPath: function (e) {
            var t = window.location.host;
            return "sns.video.qq.com" != t && "play.v.qq.com" != t && "page.video.qq.com" != t || (t = "v.qq.com"), [window.location.protocol, "//", t, e].join("")
        }, getPrevUrl: function (e, t, n) {
            "undefined" != typeof n && n || (n = 0);
            var i = [2 >= n ? "/prev/" : "/cover/", e.charAt(0), "/", e].join("");
            return i += t ? 2 == n ? "/" + t + ".html" : ".html?vid=" + t : ".html"
        }, getPlayUrl: function (e, t) {
            if (e = e || t, !e)return "";
            if (e.length > 0 && e === t)return this.getPlayUrl(e);
            if (15 == e.length) {
                var n = ["/cover/", e.charAt(0), "/", e, ".html"].join("");
                return t && (n += "?vid=" + t), n
            }
            return this.getVideoPlayUrl(e)
        }, getVideoPlayUrl: function (e) {
            return "string" != typeof e || e.length < 11 ? "" : ["/page/", e.substr(0, 1), "/", e.substr(9, 1), "/", e.substr(10, 1), "/", e, ".html"].join("")
        }, getDetailUrl: function (e, t) {
            t = t || 0;
            var n = "";
            return n = 0 == t || $.inArray(t, [1, 2, 98]) >= 0 ? "/detail/" : "/cover/", [n, e.charAt(0), "/", e, ".html"].join("")
        }, getBokePlayUrl: function (e) {
            return "string" != typeof e || e.length < 11 ? "" : ["/boke/page/", e.substr(0, 1), "/", e.substr(9, 1), "/", e.substr(10, 1), "/", e, ".html"].join("")
        }, formatTimeBySec: function (e, t, n, i) {
            if (isNaN(e) || "string" != $.type(t))return "";
            var o = {};
            return n = "boolean" == typeof n ? n : !0, i = "boolean" == typeof i ? i : !0, o.h = Math.floor(e / 3600), o.hh = o.h < 10 ? "0" + o.h : o.h, o.m = Math.floor(e / 60) - 60 * o.h, /{h+}/.test(t) || (o.m += 60 * o.h), o.mm = o.m < 10 ? "0" + o.m : o.m, o.s = e % 60, /{m+}/.test(t) || (o.s += 60 * o.m), o.ss = o.s < 10 ? "0" + o.s : o.s, o.h < 1 && !n && (t = t.replace(/{h+}[^{]+/, ""), o.m < 1 && (t = t.replace(/{m+}[^{]+/, ""))), o.s < 1 && !i && (t = t.replace(/{s+}[^{]+/, "")), t.replace(/{([smh]+)}/g, function (e, t) {
                return "undefined" == typeof o[t] ? e : o[t]
            })
        }, getCoverImgtagHtml: function (e, t) {
            var i = "", o = '<sup class="{param}">{text}</sup>', r = '<span class="{param}"><em class="mark_inner">{text}</em></span>', a = '<span class="{param}"><em class="mask_txt">{text}</em></span>', s = '<sup class="{param}">{text}</sup>';
            return t = t || [1, 2, 3, 4], e && (e.tag_3 && e.tag_3.id > 0 && -1 != $.inArray(3, t) && (i += n.format(a, e.tag_3)), e.tag_4 && e.tag_4.id > 0 && -1 != $.inArray(4, t) && (i += n.format(s, e.tag_4)), e.tag_1 && e.tag_1.id > 0 && -1 != $.inArray(1, t) && (i += n.format(o, e.tag_1)), e.tag_2 && e.tag_2.id > 0 && -1 != $.inArray(2, t) && (i += n.format(r, e.tag_2))), i
        }, format: function (e) {
            var t, i = Array.prototype.slice.call(arguments);
            e = String(i.shift()), 1 == i.length && "object" == typeof i[0] && (i = i[0]);
            var o = /\{([\d\w\.]+)\}/g;
            return e.replace(o, function (e, o) {
                return t = n.route(i, o), void 0 === t ? e : t
            })
        }, route: function (e, t) {
            e = e || {}, t = String(t);
            for (var n, i = /([\d\w_]+)/g; null !== (n = i.exec(t)) && (e = e[n[0]], void 0 !== e && null !== e););
            return e
        }, getCoverPic: function (e, t, n) {
            var i = "//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/";
            return "string" == typeof e && (t = t || "", n = n || "", n.length > 0 && (n = "_" + n), i += [t, e.charAt(0), e + n + ".jpg"].join("/")), i
        }
    };
    e.exports = n
}, function (e, t, n) {
    var i = n(7), o = {
        virtualHost: "pgv.live.qq.com", virtualPath: "/liveweb/", pv: function (e) {
            i.initPGVGlobalParam(), i.pv_pgv({virtualDomain: o.virtualHost, virtualURL: [o.virtualPath, e].join("")})
        }
    };
    e.exports = o
}, function (e, t, n) {
    var i = n(18), o = function () {
        function e(e, t) {
            l = t ? t : "BackCompat" == document.compatMode ? document.body : document.documentElement, u = e || ["img", "iframe"]
        }

        function t() {
            for (var e = [], t = 0, n = u.length; n > t; t++)for (var o = $(u[t] + "[lz_src]"), r = 0, a = o.length; a > r; r++)e.push(o.get(r));
            for (var s = f.length, c = s, g = 0, n = e.length; n > g; g++)"object" == typeof e[g] && e[g].getAttribute("lz_src") && (f.push(e[g]), c++);
            for (var t = s; c > t; t++) {
                var h = f[t];
                h.style.visibility = "hidden";
                var v = Math.round(i.getXY(h)[1] - i.getXY(l)[1]);
                if (p[v])p[v].push(t); else {
                    var m = [];
                    m[0] = t, p[v] = m, d++
                }
            }
        }

        function n() {
            var e = window.pageYOffset || l.scrollTop;
            return l.clientHeight + e
        }

        function o() {
            if (v++, !d)return void(m = !0);
            var e = n();
            if (g >= e)return void setTimeout(o, 200);
            g = e;
            for (var t in p)if (e > t) {
                for (var i, r = p[t], a = r.length, s = 0; a > s; s++)i = f[r[s]].getAttribute("lz_src"), f[r[s]].src = i, f[r[s]].removeAttribute("lz_src"), f[r[s]].style.visibility = "visible";
                delete p[t], d--
            }
            for (var t in h)if (e > t) {
                for (var r = h[t], a = r.length, s = 0; a > s; s++)r[s]();
                delete h[t], d--
            }
            setTimeout(o, 200)
        }

        function r(n, i) {
            e(n, i), t(), m = !1, setTimeout(function () {
                o()
            }, 0)
        }

        function a(e, t, n) {
            n = n || 0;
            var r = i.getXY(e)[1] + n;
            if (h[r])h[r].push(t); else {
                var a = [];
                a[0] = t, h[r] = a, d++
            }
            g = 0, m && (m = !1, o())
        }

        function s(e) {
            g = e
        }

        function c() {
            p = {}, f = [], d = 0, g = -1, h = {}, v = 0, m = !0
        }

        var l, u, p = {}, f = [], d = 0, g = -1, h = {}, v = 0, m = !0;
        return {init: r, lazyFunc: a, getScreenShowHeight: n, reset: c, resetLastOffset: s}
    }();
    e.exports = o
}, function (e, t, n) {
    function i(e, t) {
        var n = 0, i = 0, s = t || document;
        if (e)if (s.documentElement.getBoundingClientRect && e.getBoundingClientRect) {
            var c = e.getBoundingClientRect(), l = e.ownerDocument, u = a.ie ? 2 : 0;
            n = c.top - u + o(l), i = c.left - u + r(l)
        } else for (; e.offsetParent;)n += e.offsetTop, i += e.offsetLeft, e = e.offsetParent;
        return [i, n]
    }

    function o(e) {
        var t = e || document;
        return Math.max(t.documentElement.scrollTop, t.body.scrollTop)
    }

    function r(e) {
        var t = e || document;
        return Math.max(t.documentElement.scrollLeft, t.body.scrollLeft)
    }

    var a = n(14);
    e.exports = {getXY: i, getScrollTop: o, getScrooLeft: r}
}, function (e, t, n) {
    var i = n(8), o = n(11), r = n(20), a = n(7), s = n(16);
    $.extend(i, {
        resetKey: function (e) {
            "object" == typeof e && (e.hotkey && (i.hotKeyName = o.hotKeyName = e.hotkey), e.qtag && (o.qtagName = e.qtag))
        }
    }), e.exports = {
        init: function (e) {
            if (i.initPageHotKey(), o.init(), r.init(), e && 1 == e.watch, e && e.tj2 && e.tj2.forbidden); else {
                var t = n(7);
                t.pv(e && e.tj2 ? e.tj2 : null)
            }
            var a = n(9);
            a && a.report()
        }, pv: a.pv, btnTj: i.btnTj, virtualpv: s.pv, getPtag: i.getCookiePtag, getQtag: o.getCookieQtag
    }
}, function (e, t, n) {
    var i = n(8), o = n(11), r = {
        conf: {selector: "a[data-openvip]", paramName: "aid"}, init: function (e) {
            $.extend(this.conf, e);
            var t = this.conf.paramName, n = new RegExp("([&|?]" + t + "=)(.+?)(&.+|$)");
            $(document).on("click", this.conf.selector, function (e) {
                var i = this.href, o = encodeURIComponent(r.getParam(this));
                n.test(i) ? i = i.replace(n, "$1" + o + "$3") : i += (-1 == i.indexOf("?") ? "?" : "&") + t + "=" + o, this.href = i
            }), window.__tencentplayer_getaidparam = function () {
                return r.getParam(document, "flash")
            }
        }, getParam: function (e, t) {
            return [i.getPtag(), o.getQtag(e) || t || "flash"].join("$$")
        }
    };
    e.exports = r
}, function (e, t, n) {
    var i = n(22), o = n(29), r = "_expose";
    e.exports = {
        init: function (e) {
            e && e.boss && e.boss.app && e.boss.page && (i.setApp(e.boss.app), i.setPage(e.boss.page), i.bind(document.body, e.boss.clickName || "_stat"), i.pv(e.boss.page), e.boss.exposeName && (r = e.boss.exposeName), this.refresh())
        }, refresh: function () {
            $("[" + r + "]").each(function () {
                var e = $(this), t = e.attr(r);
                e.attr("_" + r, t).removeAttr(r);
                var n = o(this, function () {
                    i.event(t), setTimeout(function () {
                        n && n()
                    })
                })
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    function i() {
        return p || window.jQuery || window.$
    }

    function o(e, t) {
        return f.hot([v, "event", e, t].join(".")), this
    }

    function r(e, t, n) {
        return f.hot([v, "click", e, t, n].join(".")), this
    }

    function a(e) {
        return f.hot([v, "pageview", e].join(".")), this
    }

    function s(e) {
        return "array" !== d.type(e) ? "" : d.map(e, function (e) {
            return d.map(e, function (e) {
                return encodeURIComponent(e)
            }).join(",")
        }).join("|")
    }

    function c(e) {
        return "string" != typeof e ? [] : d.map(e.split("|"), function (e) {
            return d.map(e.split(","), function (e) {
                return decodeURIComponent(e)
            })
        })
    }

    function l(e, t) {
        switch (e) {
            case"click":
                r.apply(this, t);
                break;
            case"pageview":
                r.apply(this, t);
                break;
            case"event":
                r.apply(this, t)
        }
    }

    function u(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (g)try {
            var n = localStorage.getItem(m);
            try {
                n = c(n)
            } catch (i) {
            }
            return "array" !== d.type(n) && (n = []), n.push([e].concat(t)), void localStorage.setItem(m, s(n))
        } catch (i) {
        }
        l(e, t)
    }

    var p, f = n(23), d = n(28), g = "localStorage"in window && null !== window.localStorage, h = "index", v = "boss_common", m = v + "_lazy_reports", y = {
        click: function (e) {
            return r(h, e, "")
        }, event: function (e) {
            return o(h, e)
        }, pv: a, stat: function () {
            var e = Array.prototype.slice.call(arguments);
            return e.unshift(v), f.hot(e.join(".")), this
        }, setApp: function (e) {
            return v = e, m = e + "_lazy_reports", setTimeout(function () {
                y.flush()
            }, 1e3), this
        }, setPage: function (e) {
            return h = e, this
        }, setJQ: function (e) {
            return p = e, this
        }, bind2d: function (e, t, n) {
            var o = i();
            return o(e).on("click", "[" + n + "]", function (e) {
                for (var i, a = e.currentTarget, s = o(a).attr(n), c = 10; c && a && !(i = o(a).attr(t));)c--, a = a.parentNode;
                i && r(h, i, s)
            }), this
        }, bind: function (e, t) {
            var n = i();
            return n(e).on("click", "[" + t + "]", function (e) {
                var i = e.currentTarget, o = n(i), a = o.attr(t);
                if ("A" == i.tagName) {
                    var s = o.attr("href"), c = o.attr("target");
                    if (!/^(javascript:|#)/.test(s) && !c)return void u("click", h, a, "")
                }
                r(h, a, "")
            }), this
        }, flush: function () {
            if (localStorage)try {
                var e = localStorage.getItem(m);
                localStorage.removeItem(m), e && (e = c(e), d.forEach(e, function (e) {
                    l(e[0], e.slice(1))
                }))
            } catch (t) {
            }
        }
    };
    e.exports = y
}, function (e, t, n) {
    "use strict";
    function i() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        return [e(), e(), e(), e()].join("")
    }

    function o() {
        var e = c.get("tvfe_boss_uuid");
        if (!e) {
            e = i();
            try {
                c.set("tvfe_boss_uuid", e, "qq.com", !1, 87600)
            } catch (t) {
                c.set("tvfe_boss_uuid", e, "", !1, 87600)
            }
        }
        return e
    }

    function r(e, t) {
        e = e.split("."), (e.length < 3 || e.length > 5) && console.warn("鎸夐挳鍚嶅垎娈垫暟涓嶅锛屽彲鑳戒細瀵艰嚧鏁版嵁涓㈠け");
        var n = h;
        n += "&s_ptag=" + d + "&s_app=" + (e[0] || "") + "&s_module=" + (e[1] || "") + "&s_behave=" + (e[2] || "") + "&s_sub=" + (e[3] || "") + "&s_fifth=" + (e[4] || ""), t && t.lazy ? u.push(n) : l(n)
    }

    var a, s = n(24), c = n(6), l = n(26), u = n(27);
    try {
        a = window.jQuery || window.Zepto || window.tvp && tvp.$
    } catch (p) {
    }
    a && a(document.body).on("click", "[_boss]", function (e) {
        var t = a(e.currentTarget);
        r(t.attr("_boss"))
    });
    var f = window.sessionStorage || {
            getItem: function () {
                return ""
            }
        }, d = s.get("ptag") || f.getItem("ptag") || c.get("ptag"), g = s.get("openid") || c.get("openid"), h = "//btrace.qq.com/kvcollect?BossId=3255&Pwd=2118551257&s_url=" + encodeURIComponent(location.href.split("?")[0]) + "&s_referrer=" + encodeURIComponent(document.referrer) + "&s_ua=" + navigator.userAgent + "&s_uuid=" + o() + "&s_uin=" + (c.get("o_cookie") || c.get("uin") || c.get("luin")) + "&s_openid=" + g + "&_dc=" + Math.random();
    e.exports = {
        ptag: function (e) {
            d = e
        }, hot: r
    }
}, function (e, t, n) {
    "use strict";
    var i = n(25);
    e.exports = {
        get: function (e, t) {
            var n = new RegExp("(\\?|#|&)" + e + "=([^&#]*)(&|#|$)");
            t = t || location.href;
            var o = t.match(n);
            return o ? i(o[2]) : ""
        }, del: function (e) {
            var t = new RegExp("(\\?|#|&)" + e + "=([^&#]*)(&|#|$)"), n = location.href.match(t);
            n = n ? n[2] : "";
            try {
                window.history && history.replaceState && history.replaceState(null, null, location.href.replace(e + "=" + n, ""))
            } catch (i) {
            }
        }
    }
}, function (e, t) {
    var n = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, i = function (e) {
        return n[e]
    };
    e.exports = function (e) {
        return ("" + e).replace(/&(?![\w#]+;)|[<>"']/g, i)
    }
}, function (e, t) {
    "use strict";
    function n() {
    }

    e.exports = function (e) {
        var t = document.createElement("img");
        t.onerror = n, t.onload = n, t.onabort = n, t.src = e
    }
}, function (module, exports, __webpack_require__) {
    var cookie = __webpack_require__(6), report = __webpack_require__(26), storage = function () {
        var e = !1;
        try {
            window.localStorage && (e = !0)
        } catch (t) {
        }
        var n = location.hostname || location.host;
        return e ? {
            get: function (e) {
                return localStorage.getItem(e)
            }, set: function (e, t) {
                return localStorage.setItem(e, t)
            }, clear: function (e) {
                return localStorage.removeItem(e)
            }
        } : {
            get: function (e) {
                return cookie.get(e)
            }, set: function (e, t) {
                return cookie.set(e, t, n)
            }, clear: function (e) {
                return cookie.set(e, "", n)
            }
        }
    }(), reg = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i, k = "txv_lazyreport_list", d = "|", clear = function () {
        return storage.clear(k)
    }, shift = function () {
        var e = storage.get(k);
        if (!e)return "";
        var t = e.split(d), n = t.shift();
        return storage.set(k, t.join(d)), n ? decodeURIComponent(n) : ""
    }, push = function (e) {
        if (e) {
            var t = storage.get(k), n = [];
            t && (n = t.split(d)), n.push(encodeURIComponent(e)), storage.set(k, n.join(d))
        }
    }, reportItem = function (item) {
        if (reg.test(item))try {
            !!report && report(item)
        } catch (e) {
        } else setTimeout(function () {
            try {
                eval(item)
            } catch (e) {
            }
        }, 0)
    }, _report = function () {
        for (var e = shift(); e;)reportItem(e), e = shift()
    };
    module.exports = {push: push, clear: clear, report: _report}
}, function (e, t) {
    "use strict";
    function n(e, t) {
        return e && e.hasOwnProperty && e.hasOwnProperty(t)
    }

    var i = void 0, o = {
        escape: function (e) {
            return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        }, type: function (e) {
            if (null === e)return "null";
            if (e === i)return "undefined";
            var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
            return t ? t[1].toLowerCase() : ""
        }, keys: function (e) {
            var t = [];
            return e ? Object.keys ? Object.keys(e) : (this.objEach(e, function (e) {
                t.push(e)
            }), t) : t
        }, bind: function (e, t) {
            return e.bind ? e.bind(t) : function () {
                return e.apply(t, arguments)
            }
        }, extend: function (e) {
            if ("object" != this.type(e) && "function" != this.type(e))return e;
            for (var t, i, o = 1, r = arguments.length; r > o; o++) {
                t = arguments[o];
                for (i in t)n(t, i) && (e[i] = t[i])
            }
            return e
        }, trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
        }, indexOf: function (e, t) {
            if (e.indexOf)return e.indexOf(t);
            var n = -1;
            return o.some(e, function (e, i) {
                return e === t ? (n = i, !0) : void 0
            }), n
        }, forEach: function (e, t) {
            if (e.forEach)return e.forEach(t);
            for (var n = e.length, i = 0; n > i; i++)t(e[i], i);
            return e
        }, some: function (e, t) {
            if (e.some)return e.some(t);
            for (var n = e.length, i = !1, o = 0; n > o; o++)if (t(e[o], o)) {
                i = !0;
                break
            }
            return i
        }, map: function (e, t) {
            if (e.map)return e.map(t);
            for (var n = e.length, i = [], o = 0; n > o; o++)i.push(t(e[o], o));
            return i
        }, objEach: function (e, t) {
            if (e)for (var i in e)if (n(e, i) && t(i, e[i]) === !1)break
        }, reduce: function (e, t) {
            if ("function" != o.type(t))throw new TypeError("Array.prototype.reduce callback must be a function");
            var n = e.length;
            if (0 === n && 2 === arguments.length)throw new TypeError("reduce of empty array with no initial value");
            var i, r = n - 1;
            if (arguments.length >= 3)i = arguments[2]; else for (; ;) {
                if (r in e) {
                    i = e[r--];
                    break
                }
                if (--r < 0)throw new TypeError("reduceRight of empty array with no initial value")
            }
            if (0 > r)return i;
            do r in e && (i = t(i, e[r], r, e)); while (r--);
            return i
        }, filter: function (e, t, n) {
            if (e.filter)return e.filter(t);
            for (var i = e.length, o = [], r = 0; i > r; r++) {
                var a = e[r];
                t.call(n, a, r, e) && o.push(a)
            }
            return o
        }, lock: function (e) {
            var t;
            return function () {
                if (!t) {
                    t = !0;
                    var n = [].slice.call(arguments, 0);
                    n.unshift(function () {
                        t = !1
                    }), e.apply(this, n)
                }
            }
        }, once: function (e) {
            var t, n = arguments;
            return function () {
                return !t && e ? (t = !0, e.apply(n.length >= 2 ? n[1] : null, arguments)) : void 0
            }
        }
    };
    e.exports = o
}, function (e, t, n) {
    "use strict";
    function i() {
        f.emit("scroll", o(), r())
    }

    function o() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }

    function r() {
        return "BackCompat" == document.compatMode ? document.body.clientHeight : document.documentElement.clientHeight
    }

    function a(e) {
        var t = e.getBoundingClientRect();
        return {top: t.top + o(), bottom: t.bottom + o()}
    }

    function s(e, t, n) {
        g ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
    }

    function c(e, t, n) {
        g ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n)
    }

    function l(e, t, n) {
        return e.hasOwnProperty(t) ? !!e[t] : n
    }

    var u = n(28), p = n(30), f = new p, d = n(31), g = !document.addEventListener;
    s(window, "scroll", i), s(window, "resize", i), e.exports = function (e, t) {
        function n(n) {
            var r, l = !n || n === document.body;
            l && (r = a(e));
            var u = !1, d = function (n, i) {
                var a;
                if (l) {
                    var s = r.top, c = r.bottom;
                    o.offset && (s -= o.offset, c += o.offset), a = p ? n + i > s && c > n : n + i > s
                } else if (!l) {
                    var f = e.getBoundingClientRect(), i = i, s = f.top;
                    o.offset && (s -= o.offset), a = p ? f.top > -f.height && f.top < i : f.top < i
                }
                var d = u;
                return a ? (u = !0, void((g && !d || !g) && t && t())) : void(u = !1)
            }, h = f.on("scroll", d);
            return l ? i() : (s(n, "scroll", d), d()), function () {
                h(), l || c(n, "scroll", d)
            }
        }

        var o = {}, r = arguments;
        "object" == u.type(t) && (o = t, t = r[2]);
        var p = l(o, "visible", !0), g = l(o, "enter", !1), h = d(e);
        if (u.some(h.parents, function (e) {
                return document.body === e
            }))return n(h.scrollParent);
        var v, m = setTimeout(function () {
            v = n(d(e).scrollParent)
        });
        return function () {
            clearTimeout(m), v && v()
        }
    }
}, function (e, t, n) {
    "use strict";
    function i() {
        this._evtObjs = {}
    }

    function o() {
    }

    var r = n(28), a = {};
    i.prototype.on = function (e, t, n) {
        this._evtObjs[e] || (this._evtObjs[e] = []), this._evtObjs[e].push({handler: t, once: n});
        var i = this;
        return function () {
            i.off(e, t)
        }
    }, i.prototype.wait = function (e, t) {
        return a[e] ? (t.apply(null, a[e]), o) : this.on(e, t, !0)
    }, i.prototype.off = function (e, t) {
        var n, i = this;
        return n = e ? [e] : r.keys(this._evtObjs), r.forEach(n, function (e) {
            if (t) {
                var n = i._evtObjs[e] || [], o = [];
                r.forEach(n, function (e) {
                    e.handler !== t && o.push(e)
                }), i._evtObjs[e] = o
            } else i._evtObjs[e] = []
        }), this
    }, i.prototype.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        a[e] = t;
        var n = this._evtObjs[e] || [];
        r.forEach(n, function (e) {
            e.once && e.called || (e.called = !0, e.handler && e.handler.apply(null, t))
        })
    }, i.prototype.emitAsync = function () {
        var e = arguments, t = this;
        setTimeout(function () {
            t.emit.apply(t, e)
        }, 0)
    };
    var s = new i;
    i.on = function () {
        return s.on.apply(s, arguments)
    }, i.off = function () {
        return s.off.apply(s, arguments)
    }, i.wait = function () {
        return s.wait.apply(s, arguments)
    }, i.emit = function () {
        return s.emit.apply(s, arguments)
    }, i.emitAsync = function () {
        return s.emitAsync.apply(s, arguments)
    }, e.exports = i
}, function (e, t) {
    "use strict";
    function n(e, t) {
        t = t || [];
        var i = e.parentNode;
        return i ? (t.push(i), i === document.body ? t : n(i, t)) : t
    }

    function i(e) {
        if (!e)return "";
        var t;
        if (window.getComputedStyle)try {
            t = window.getComputedStyle(e)
        } catch (n) {
        } else e.currentStyle && (t = e.currentStyle);
        return t ? t["overflow-y"] || t.overflow : ""
    }

    function o(e) {
        return /(auto|scroll)/.test(i(e))
    }

    e.exports = function (e) {
        for (var t = n(e), i = document.body, r = 0; r < t.length; r++) {
            var a = t[r];
            if (a === document.body || o(a)) {
                i = a;
                break
            }
        }
        return {parents: t, scrollParent: i}
    }
}, function (e, t, n) {
    var i = $(".navigation_more"), o = i.find(".pop_more"), r = o.find("iframe"), a = n(33), s = n(34);
    i.on("mouseenter", function () {
        r.css("height", o.outerHeight() + "px"), a.emit(s.navmore, !0)
    }).on("mouseleave", function () {
        a.emit(s.navmore, !1)
    }), n(35);
    var c = n(36);
    c.init();
    var l = n(14);
    l.macs && $("#pc_client").hide(), n(37), n(47), n(56), e.exports = {"float": c}
}, function (e, t) {
    "use strict";
    function n() {
        this._evtObjs = {}
    }

    n.prototype.on = function (e, t) {
        this._evtObjs[e] || (this._evtObjs[e] = []), this._evtObjs[e].push({handler: t})
    }, n.prototype.off = function (e, t) {
        var n;
        if (e)n = [e]; else for (var i in this._evtObjs)Object.prototype.hasOwnProperty.call(this._evtObjs, i) && n.push(this._evtObjs[i]);
        for (var e in n)if (Object.prototype.hasOwnProperty.call(n, e)) {
            var o = this._evtObjs[n[e]] || [], r = [];
            for (var a in o)Object.prototype.hasOwnProperty.call(o, a) && o[a].handler !== t && r.push(o[a]);
            this._evtObjs[e] = r
        }
        return this
    }, n.prototype.emit = function (e, t) {
        var n = this._evtObjs[e] || [];
        for (var i in n)Object.prototype.hasOwnProperty.call(n, i) && n[i].handler && n[i].handler(t)
    };
    var i = new n;
    n.on = function () {
        i.on.apply(i, arguments)
    }, n.off = function () {
        i.off.apply(i, arguments)
    }, n.emit = function () {
        i.emit.apply(i, arguments)
    }, window.Message = e.exports = n
}, function (e, t) {
    e.exports = {
        navmore: "nav_more",
        smartsearch: "smartsearch",
        navheadimg: "navheadimg",
        viperror: "viperror",
        vipnotlogin: "vipnotlogin",
        tipsshow: "tipsshow"
    }
}, function (e, t) {
    "use strict";
    var n = $("#new_vs_header"), i = n.find(".channel_title");
    window.CHANNEL_NAME && i.html(window.CHANNEL_NAME);
    var o = 0, r = n.find(".channel_more"), a = n.find(".nav_more_pop"), s = {
        init: function () {
            r.size() && (r.on("mouseenter", this.enter).on("mouseleave", this.leave), a.on("mouseenter", this.enter).on("mouseleave", this.leave))
        }, leave: function () {
            o = setTimeout(function () {
                a.removeClass("open")
            }, 200)
        }, enter: function () {
            clearTimeout(o), a.addClass("open")
        }
    };
    e.exports = s.init()
}, function (e, t) {
    "use strict";
    var n = $("#new_vs_header"), i = "FOCUS_SLIDE_CHANGE", o = !1;
    e.exports = {
        init: function () {
            n.size() && (this.register(), this.bindScroll())
        }, register: function () {
            window.txvHeaderNav = {};
            var e = window.txvHeaderNav;
            e.setRegisterCallback = function (t, n) {
                for (var i in n)({}).hasOwnProperty.call(n, i) && (e[t] || (e[t] = {}), e[t][i] = n[i])
            }
        }, bindScroll: function () {
            $(window).scroll(function () {
                var e = window.txvHeaderNav && window.txvHeaderNav[i];
                if ($(window).scrollTop() > 580) {
                    if (o)return;
                    o = !0, e && e.stop && e.stop(), n.addClass("site_head_sticky")
                } else {
                    if (!o)return;
                    o = !1, e && e.slide && e.slide(), n.removeClass("site_head_sticky")
                }
            })
        }, getIsFloat: function () {
            return o
        }
    }
}, function (e, t, n) {
    function i() {
        his.getMyView(c).done(function (e) {
            historyCache = e || [], u.html(render(historyCache));
        }).fail(o)
    }

    function o() {
        var e = his.getLocalView();
        e && e.length > c && (e = e.slice(0, c)), u.html(render(e))
    }

    function r(e, t) {
        if ("string" == typeof e && 0 != e.length) {
            if (!login.isLogin()) {
                l.find("dd[key=" + e + "]");
                return t = isNaN(t) ? 0 : t, historyLocal.rmRecordByKey(e, t), void o()
            }
            historyRequest.rmServer(e).done(function (n) {
                historyLocal.rmRecordByKey(e, t), i()
            }).fail(function () {
            })
        }
    }

    var a = $("#modHistory"), s = 300, c = 5, l = $("#history_pop"), u = $("#modHistoryContent");
    timer = null, his = n(38), login = n(5), historyCache = [], render = n(45), historyRequest = n(44), historyLocal = n(39), login.addLogoutCallback(function () {
        historyCache = [], u.empty()
    }), login.addClearLoginStatusCallback(function () {
        historyCache = [], u.empty()
    }), login.addUserInfoChangedCallback(function () {
        historyCache = [], u.empty()
    }), login.addReadyCallback(function () {
        a.on("mouseenter", function () {
            clearTimeout(timer), a.hasClass("open") || ("" == u.html() && u.html('<div class="mod_loading"></div>'), login.isLogin() ? 0 == historyCache.length && i() : o(), a.addClass("open"))
        }).on("mouseleave", function () {
            timer = setTimeout(function () {
                a.removeClass("open")
            }, s)
        }), l.on("click", "[data-type='del']", "click", function (e) {
            e.preventDefault(), r(this.getAttribute("_key"), this.getAttribute("_idx") || 0), txv.tj2.btnTj("history.delete")
        })
    })
}, function (e, t, n) {
    var i = n(39), o = n(44), r = (n(41), n(42)), a = {
        setInfo: r.setInfo, getHistoryByCid: function (e, t) {
            var n = $.Deferred();
            return $.when(a.getServerRecordByIds(e, t), a.getLocalRecordByIds(e, t)).then(function (e, t) {
                console.log(e), console.log(t), t && t.date > e.date && t.time > 0 ? n.resolve(t) : n.resolve(e)
            }), n.promise()
        }, getServerRecordByIds: function (e, t) {
            return o.getHistoryByCid(e, t)
        }, getLocalRecordByIds: function (e, t) {
            return i.getHistoryByCidVid(e, t)
        }, batchReport: function () {
        }, add: function (e, t, n) {
            i.add(e, t, n)
        }, getMyView: o.getMyView, getLocalView: i.getNotLoginView
    };
    e.exports = a
}, function (e, t, n) {
    function i(e, t, n) {
        var i, r = o();
        return r.length < 2 || -1 === r.indexOf("_") ? void h.trace("add history error: not enough options!") : (++v, s(t, n, e), S.isLogin() ? -3 == e && v != m ? void h.trace("娌¤揪鍒版鏁伴檺鍒讹紝涓嶄笂鎶ユ湇鍔″櫒:" + v) : e == b.begin || 0 == e ? void h.trace("涓嶄笂鎶ュ紑濮嬫挱鏀�:") : (v = 0, t = Math.ceil(t), i = {
            time: t,
            keyid: r,
            vtype: j.getinfo().typeid
        }, void q.reportOne(i)) : void h.trace("not login!!"))
    }

    function o() {
        var e = j.getinfo();
        return [e.coverid, e.vid].join("_")
    }

    function r() {
        return Math.ceil(+new Date / 1e3)
    }

    function a(e) {
        return e = e || T, S.isLogin() ? e + S.getUnicode() : e
    }

    function s(e, t, n) {
        if (!_) {
            var i = o(), s = r(), l = a(), d = j.getinfo().typeid, g = "";
            if (!j.getinfo().tit || !j.getinfo().lnk || i.length < 2 || _ || -1 === i.indexOf("_"))return void h.trace("add local history error: option error");
            if (w) {
                _ = !0;
                var v = u(l);
                v ? (g = j.getinfo().coverid || "_" + j.getinfo().vid, v = f(v, g)) : v = "";
                var m = p(i, s, e, t, d);
                v = v ? m + "|" + v : m, x.set(l, v), c(l, s, 1), _ = !1
            }
        }
    }

    function c(e, t, n) {
        if (!(arguments.length < 2 || isNaN(t))) {
            var i = x.get(k);
            if (!i)return void x.set(k, [e, t, t].join(","));
            var o = new RegExp("(" + e + ")(,\\d+)(,\\d+)", "g");
            if (o.test(i))i = 1 == n ? i.replace(o, "$1," + t + "$3") : i.replace(o, "$1$2," + t); else {
                var r, a = i.split("|"), s = t;
                if (a.length >= C) {
                    for (var c, r, s = t, l = 0, u = a.length; u > l; l++)if (a[l]) {
                        var p = a[l].split(",");
                        p[1] <= s && p[0] !== e && (s = p[1], c = p[0], r = l)
                    }
                    !isNaN(r) && u > r && a.splice(r, 1), x.remove(c), i = a.join("|")
                } else i += "|" + [e, t, t].join(",")
            }
            x.set(k, i)
        }
    }

    function l(e, t) {
        x.remove(e);
        var n = x.get(k);
        if (n) {
            for (var i = n.split("|"), o = [], r = e.replace(S.getUnicode(), ""), a = 0, s = i.length; s > a; a++) {
                var c = i[a], l = c.split(",");
                l[0] && l[0] != e && (l[0] == r ? o.push(c.replace(l[2], t)) : o.push(c))
            }
            x.set(k, o.join("|") || "")
        }
    }

    function u(e) {
        var t = x.get(e);
        if (!t)return "";
        for (var n, i, o = t.split("|"), r = [], a = o.length - 1, s = a; s >= 0; s--)n = o[s], i = n.substr(0, n.indexOf(",")), t.indexOf(i) == t.lastIndexOf(i) && r.unshift(n), t = o.slice(0, s).join("|");
        return r.join("|")
    }

    function p(e, t, n, i, o, r) {
        if (r = j.getinfo().tit || r, "string" == $.type(r)) {
            var a = j.getinfo().isPay ? 1 : 0;
            return r = r.replace(",", "&#44;"), isNaN(parseInt(o)) ? [e, r, t, n, i, a].join(",") : [e, r, t, n, i, a, o].join(",")
        }
        return ""
    }

    function f(e, t) {
        var n = e.split("|"), i = n.length;
        return i > y && (e = n.splice(0, y).join("|")), e = e.replace(new RegExp(t + "[^\\|]+\\|?", "gi"), ""), /(\|)$/.test(e) && (e = e.replace(RegExp.$1, "")), i >= y ? e.replace(/\|[^|]+$/g, "") : e
    }

    function d() {
        function e(e) {
            return e && 7 == e.length ? [e[0], e[3], e[2], 0, e[6]].join("+") : [e[0], e[3], e[2]].join("+")
        }

        var t = x.get(k);
        if (targetUins = g(t), reportList = [], 0 == targetUins.length)return reportList;
        for (var n = {}, i = {}, o = 0, r = targetUins.length; r > o; o++) {
            var a = targetUins[o][0], s = targetUins[o][2], c = u(a);
            if (c)for (var l, p = c.split("|"), f = 0, d = p.length; d > f; f++)if (l = p[f].split(","), l.length >= 4 && "string" == $.type(l[0]) && -1 !== l[0].indexOf("_") && l[2] >= s) {
                var h = l[0].split("_");
                "undefined" == typeof n[h[0]] ? (n[h[0]] = l[2], reportList.push(e(l)), i[h[0]] = reportList.length - 1) : n[h[0]] < h[2] && -1 != a.indexOf(txv.login.getUin()) && (n[h[0]] = l[2], reportList[i[h[0]]] = e(l))
            }
        }
        return reportList
    }

    function g(e) {
        var t = [];
        if ("string" == $.type(e))for (var n = e.split("|"), i = a(), o = 0, r = n.length; r > o; o++) {
            var s = n[o], c = s.split(",");
            c[0] == T ? c[1] >= c[2] && t.push(c) : c[0] == i && c[1] >= c[2] && t.push(c)
        }
        return t
    }

    var h = n(40), v = 0, m = 30, y = 10, _ = !1, b = {finish: -2, begin: -1, playing: -3}, x = n(10), w = !1;
    x.get("anything", function () {
        w = !0
    });
    var k = "ten_video_history_uin_storage_key", C = 5, T = "ten_video_history", j = (n(41), n(42)), S = n(5), q = n(43);
    e.exports = {
        add: i, isBatchReport: function () {
            q.batchReport(d().join("|"))
        }, afterReportSrv: function () {
            l(a())
        }, getHistoryByCidVid: function (e, t) {
            var n, i = $.Deferred(), o = a(), r = [], s = !1, c = {
                vid: "",
                title: "",
                coverid: "",
                playurl: "",
                date: 0,
                time: 0
            }, l = 0, p = u(o);
            if (p) {
                p = p.split("|"), n = e || t;
                for (var f = 0, d = p.length; d > f; f++)if (r = p[f].split(","), -1 != r[0].indexOf(n)) {
                    r[3] = parseInt(r[3]), l = isNaN(r[3]) || -1 != $.inArray(r[3], [-2, -1]) ? 0 : r[3], c = {
                        time: l,
                        title: r[1],
                        date: r[2] - 0,
                        vid: r[0].split("_")[1],
                        coverid: r[0].split("_")[0]
                    }, s = !0;
                    break
                }
            }
            return i.resolve(c), i.promise()
        }, getList: d, getNotLoginView: function () {
            var e, t = u(a()), n = t ? t.split("|") : [], i = [];
            if (n.length) {
                for (var o = 0, r = n.length; r > o; o++)e = n[o].split(","), i[o] = {
                    keyid: e[0],
                    title: e[1],
                    date: e[2],
                    time: e[3],
                    tl: e[4],
                    ispay: 1 * e[5] > 1 ? 4 : 8,
                    ctypeid: e[6]
                };
                return i
            }
            return n
        }, rmRecordByKey: function (e) {
            var t = a(), n = u(t);
            n = n ? f(n, e) : "", x.set(t, n)
        }
    }
}, function (e, t, n) {
    function i(e) {
        a.push(e), 2 == s && "object" == typeof console && console.log(e)
    }

    function o(e) {
        s >= 1 && "object" == typeof console && console.log(e)
    }

    function r(e) {
        s >= 1 && "object" == typeof console && console.dir(e)
    }

    var a = [], s = -1, c = n(15).getUrlParam("debug"), l = -1;
    switch (c) {
        case"true":
        case"2":
            l = 2;
            break;
        case"trace":
        case"1":
            l = 1
    }
    s = l, e.exports = {
        log: i, trace: o, dump: r, getAllLog: function () {
            return a
        }
    }
}, function (e, t) {
    e.exports = {
        api: {
            myview: "//ncgi.video.qq.com/tvideo/fcgi-bin/myview",
            myviewreport: "//rcgi.video.qq.com/report/myviewreport?otype=json"
        },
        rParamT: {ONEREPORT: 3, BATCHREPORT: 4, ONEINFO: 6},
        nParamT: {BATCHINFO: 8, ONEINFO: 7, LIST: 1, DELETEONE: 4}
    }
}, function (e, t) {
    var n = {coverid: "", tit: null, lnk: null, isPay: 0, vid: "", typeid: ""};
    e.exports = {
        getinfo: function () {
            return n
        }, setInfo: function (e) {
            $.extend(n, e)
        }
    }
}, function (e, t, n) {
    function i(e) {
        $.ajax({
            url: a.api.myviewreport,
            dataType: "jsonp",
            data: $.extend(e, {plat: 2, pver: 3, rf: "v", t: a.rParamT.ONEREPORT}, o()),
            CSRF: !0,
            success: function (e) {
                s.trace("set history record success!")
            },
            error: function () {
                s.trace("set history record error!")
            }
        })
    }

    function o() {
        var e = n(8), t = n(11);
        return {ptag: e.getCookiePtag(), qtag: t.getCookieQtag()}
    }

    function r(e) {
        $.ajax({
            url: a.api.myviewreport,
            dataType: "jsonp",
            data: $.extend({pn: 1, list: "", rf: "v"}, e, {
                t: a.rParamT.BATCHREPORT,
                cur: 1,
                simp: 1,
                plat: 2,
                pver: 3,
                otype: "json"
            }),
            CSRF: !0,
            success: function (e) {
                c.afterReportSrv()
            },
            error: function () {
                s.trace("set history record error!")
            }
        })
    }

    var a = n(41), s = n(40), c = n(39);
    e.exports = {reportOne: i, batchReport: r}
}, function (e, t, n) {
    function i(e, t) {
        var n = $.Deferred();
        return $.ajax({
            url: e, dataType: "jsonp", data: t, CSRF: !0, success: function (e) {
                return e && e.result && 0 == e.result.code ? void n.resolve(e) : void n.reject()
            }, error: function () {
                n.reject()
            }
        }), n.promise()
    }

    var o = n(41), r = n(42);
    e.exports = {
        getHistoryByCid: function (e, t) {
            var n, a, s, c = $.Deferred(), l = e + "_" + t, u = !0;
            return u && (n = {
                t: o.rParamT.ONEINFO,
                plat: 2,
                keyid: l,
                otype: "json",
                vtype: r.getinfo().typeid
            }, a = o.api.myviewreport), s = {vid: "", time: 0}, i(a, n).always(function (e) {
                $.extend(s, e), s.time = s.time - 0, -1 != $.inArray(s.time, [-1, -2]) && (s.time = 0), s.time < 0 && (s.time *= -1), c.resolve(s)
            }), c.promise()
        }, getMyView: function (e) {
            var t = $.Deferred();
            return i(o.api.myview, {
                cur: 1,
                pn: e,
                simp: 1,
                otype: "json",
                t: o.nParamT.LIST,
                plat: 2
            }).done(function (e) {
                t.resolve(e.list)
            }).fail(function () {
                t.reject()
            }), t.promise()
        }, rmServer: function (e) {
            var t = $.Deferred();
            return i(o.api.myview, {keyid: e, otype: "json", t: o.nParamT.DELETEONE, plat: 2}).done(function (e) {
                t.resolve(e)
            }).fail(function () {
                t.reject()
            }), t.promise()
        }
    }
}, function (e, t, n) {
    function i(e) {
        function t(e, t) {
            if (t.length > 0)switch (e) {
                case d.today:
                    C = a.replace(/\{text\}/, "浠婂ぉ").replace(/\{cls\}/, "date_green"), h += s.replace(/\{cls\}/, "history_today").replace(/\{day\}/, C).replace(/\{content\}/, t);
                    break;
                case d.yesterday:
                    C = a.replace(/\{text\}/, "鏄ㄥぉ").replace(/\{cls\}/, "date_blue"), h += s.replace(/\{cls\}/, "history_yesterday").replace(/\{day\}/, C).replace(/\{content\}/, t);
                    break;
                case d.earlier:
                    C = a.replace(/\{text\}/, "鏇存棭").replace(/\{cls\}/, "date_orange"), h += s.replace(/\{cls\}/, "history_earlier").replace(/\{day\}/, C).replace(/\{content\}/, t)
            }
        }

        var n, i, f, d = {
            today: 0,
            yesterday: -1,
            earlier: -999
        }, g = '<div class="pop_timeline_wrap"><div class="timeline_video_wrap">{content}</div></div>', h = "", v = 0, m = new Date, y = m.getDate(), _ = m.getTime(), b = 864e5, x = "", w = "", k = "", C = "";
        for (f = e.length; f > v; v++) {
            var T = e[v];
            $.extend(e[v], {
                key: T.keyid,
                lnk: p.getPlayUrl(T),
                tit: p.getTitle(T),
                hoverTit: p.getTitle(T),
                target: "",
                idx: v,
                timeTips: p.getTipsByTime(T.time, T.tl)
            });
            var j, S = txv.util.format(r, e[v]);
            i = 1e3 * e[v].date, _ - 2 * b > i ? k += S : (m.setTime(i), j = m.getDate(), y == j ? x += S : y - 1 == j ? w += S : k += S)
        }
        return t(d.today, x), t(d.yesterday, w), t(d.earlier, k), h.length > 0 ? (n = txv.util.format(c, login.isLogin() ? u.login : u.notLogin), g.replace(/{content}/, h + n)) : (n = txv.util.format(c, login.isLogin() ? l.login : l.notLogin), o + n)
    }

    var o = '<div class="quick_pop_empty"><i class="icon_xl icon_time_xl"><svg class="svg_icon svg_icon_time_xl" viewBox="0 0 70 70"><path d="M34.5 38a1.5 1.5 0 0 1-1.5-1.5v-24a1.5 1.5 0 1 1 3 0V35h12.5a1.5 1.5 0 0 1 0 3h-14zm27.093 18.172l-.008-.007c-.275.32-.669.533-1.124.533a1.5 1.5 0 0 1-1.5-1.5c0-.346.136-.65.333-.903l-.024-.021A30.856 30.856 0 0 0 66 34.999c0-17.121-13.879-31-31-31-17.121 0-31 13.879-31 31 0 17.121 13.879 31 31 31 6.991 0 13.44-2.316 18.625-6.22l.009.014c.249-.183.54-.312.872-.312a1.5 1.5 0 0 1 1.5 1.5c0 .527-.288.968-.699 1.236l.025.036A33.851 33.851 0 0 1 35 68.999c-18.778 0-34-15.222-34-34C1 16.222 16.222 1 35 1c18.777 0 34 15.222 34 34a33.844 33.844 0 0 1-7.407 21.172z"></path></svg></i><p class="empty_txt">浣犳殏鏃惰繕娌℃湁瑙傜湅璁板綍鍛</p></div>', r = '<dd key="{key}"><a href="{lnk}" _hot="mynav.historylist.{pageType}" _qtag="nav.history" title="{hoverTit}" target="{target}" class="video_name">{tit}</a><span class="video_timestamp">{timeTips}</span><a href="javascript:;" _hot="mynav.historydelete.{pageType}"  _key="{key}" data-type="del" title="鍒犻櫎" _idx={idx} class="btn_close">脳</a></dd>', a = '<dt><span class="dot_wrap"><i class="dot"></i></span><span class="timeline_date">{text}</span></dt>', s = '<dl class="timeline_video_list {cls}">{day}{content}</dl>', c = '<div class="quick_pop_btn"><a href="{btnHref}" data-type="{type}" target="{target}" class="btn_pop_link">{btnTxt}</a></div>', l = {
        login: {
            btnTxt: "寮€濮嬭拷涓墽鍚�",
            btnHref: "http://v.qq.com/zhuiju/",
            type: "link",
            target: ""
        }, notLogin: {btnTxt: "寮€濮嬭拷涓墽鍚�", btnHref: "http://v.qq.com/zhuiju/", type: "link", target: ""}
    }, u = {
        login: {btnTxt: "鏌ョ湅鏇村", btnHref: "http://v.qq.com/u/history/", type: "link", target: ""},
        notLogin: {btnTxt: "鐧诲綍鏌ョ湅鏇村", btnHref: "javascript:;", type: "login", target: "_self"}
    }, p = n(46);
    e.exports = i
}, function (e, t) {
    var n = {
        getTitle: function (e) {
            if (!e)return "";
            if (e.title = e.title || e.col_title || "", e.col_title)return e.col_title;
            if (e.vtit = e.vtit || "", !e.vtit)return e.title;
            if (2 == e.ctypeid || 3 == e.ctypeid) {
                var t = e.vtit.match(/^([^_]+)_(\d+(?:\-\d+)?)$/);
                return t && 3 == t.length ? -1 == e.vtit.indexOf("棰勫憡鐗�") ? [t[1], " 绗�", t[2], "闆�"].join("") : [e.title, " 绗�", t[2], "闆�", t[1]].join("") : -1 != e.vtit.indexOf(e.title) ? e.vtit : (t = e.vtit.match(/^([^_]+)_(\d+)_(\d+)$/), t && 4 == t.length ? [t[1], " 绗�", t[2], "闆�"].join("") : e.title + " " + e.vtit)
            }
            if (-1 != $.inArray(e.ctypeid, [1, 98])) {
                var i = new RegExp("^" + e.title + "_\\d+");
                return i.test(e.vtit) ? e.title || e.vtit : e.vtit
            }
            return 39 == e.ctypeid ? e.title || e.vtit : n.formatVideoTitle(e.vtit)
        }, formatVideoTitle: function (e) {
            return e
        }, getPlayUrl: function (e, t) {
            var n, i, o, r, a, s = "";
            return "string" == typeof e ? (n = e, i = n.split("_"), o = i[0], r = i[1], 2 == i.length ? (isNaN(i[2]) || (r += "_" + i[2]), "string" == typeof o && o.length > 0 ? s = txv.util.getPlayUrl(o, r) : "string" == typeof r && r.length > 0 && (s = txv.util.getVideoPlayUrl(r))) : 3 == i.length && (s = txv.util.getDetailUrl(o || r))) : "object" === $.type(e) && (i = e.keyid.split("_"), a = e.time < 0 ? -1 * e.time : e.time, 3 == i.length && (i[1] = i[1] + "_" + i[2]), s = 7 == e.ctypeid ? txv.util.getBokePlayUrl(i[1]) : i[0].length > 0 ? txv.util.getPlayUrl(i[0], i[1]) : txv.util.getVideoPlayUrl(i[1])), 1 == t && "string" == $.type(e) || -1 !== $.inArray(e.ispay, [4, 5, 6]) ? "http://film.qq.com" + s : "http://v.qq.com" + s
        }, getTipsByTime: function (e, t) {
            var i = "";
            if (e = parseInt(e, 10), t = parseInt(t, 10), e = n.timeAdaptor(e, t), 300 >= t || -2 == e)i = "宸茬湅瀹�"; else if (60 > e || isNaN(e))i = "鍓╀綑99%"; else {
                if (i = 100 * (t - e) / t, 0 == i)return "宸茬湅瀹�";
                1 > i && (i = 1), i = "鍓╀綑" + Math.floor(i) + "%"
            }
            return i
        }, timeAdaptor: function (e, t) {
            return 0 > e && (-2 == e ? e = t : e *= -1), e
        }
    };
    e.exports = n
}, function (e, t, n) {
    function i() {
        var e = localStorage.getItem("show_vcoin_login");
        d.isInToday(e) || (o(), localStorage.setItem("show_vcoin_login", (new Date).getTime()), clearTimeout(g), g = setTimeout(function () {
            s.removeClass("open")
        }, 5e3))
    }

    function o() {
        p.length && !p.hasClass("none") || (p.removeClass("none"), f.hide(), s.addClass("open"), d.reportBossVipSys(3))
    }

    var r = n(5), a = (n(48), n(50)), s = $("#mod_head_user"), c = $("#mod_head_notice_trigger"), l = s.find('[data-type="avatar"]'), u = l.attr("src"), p = $("#mod_notlogin_pop"), f = $("#mod_head_notice_pop"), d = n(51), g = null, h = !1, v = !1;
    s.on("mouseenter", function () {
        v ? (clearTimeout(g), h || (h = !0, $("#mod_head_moneybag").length ? $.getScript("//vm.gtimg.cn/tencentvideo_v1/script/module/txv.nav.wallet.js", function () {
            window.txv.nav_wallet()
        }) : n(52)()), p.addClass("none"), f.show(), s.addClass("open")) : p.length && (o(), clearTimeout(g))
    }).on("mouseleave", function () {
        g = setTimeout(function () {
            s.removeClass("open"), p.addClass("none"), f.hide()
        }, 300)
    }), r.addReadyCallback(function () {
        r.isLogin() || i(), p.on("click", "[data-boss]", function () {
            d.reportBossVipSys($(this).attr("data-boss"))
        })
    }), c.on("click", function (e) {
        r.isLogin() || (e.preventDefault(), r.openLogin())
    }), r.addLogoutCallback(function () {
        v = !1, s.removeClass("open"), f.hide(), l.attr("src", u), c.attr("title", "鏈櫥褰�")
    }), r.addLoginCallback(function () {
        v = !0, c.attr("title", ""), f.find(".vplus_link").attr("href", "http://v.qq.com/vplus/" + r.getUin())
    }), r.addReadyCallback(function () {
        r.isLogin() && (v = !0, f.find(".vplus_link").attr("href", "http://v.qq.com/vplus/" + r.getUin()))
    }), n(53), a()
}, function (e, t, n) {
    function i(e) {
        return e ? (u = $.Deferred(), o(), u) : u ? u : (u || (u = $.Deferred()), d && f && "undefined" != typeof f.adpass ? void u.resolve(f) : (o(), u))
    }

    function o(e) {
        u.done(function (e) {
            e && e.endTime && x(e.endTime)
        }).fail(b), h = !0;
        var t = e ? l.bkapi : l.api;
        $.ajax({
            url: t,
            data: {uin: r.getUin(), t: g ? 1 : 0, getadpass: d ? 1 : 0},
            dataType: "jsonp",
            CSRF: !0,
            timeout: e ? 4e3 : 2e3,
            success: function (e) {
                return e && e.result ? 0 == e.result.code ? (f = e, u.resolve(e), void v.fire(e)) : (u.reject(e), -11 == e.result.code ? (s.emit(c.vipnotlogin), void y({str1: "not login"})) : (s.emit(c.viperror, e.result.code), void y({str1: "cgi return error code:" + e.result.code}))) : (s.emit(c.viperror), u.reject(e), y({str1: "invalid json"}), void 0)
            },
            error: function (t) {
                e ? (t = t || "cgi error", s.emit(c.viperror, "500"), u.reject(), y({str1: t})) : o(!0)
            }
        }).always(function () {
            h = !1
        })
    }

    var r = n(5), a = n(10), s = n(33), c = n(34), l = n(49), u = (n(15), null), p = null, f = null, d = !1, g = !1, h = !1, v = $.Callbacks("unique memory"), m = function () {
        u && (u = null), p && (p = null), f = null
    }, y = function (e) {
        var t = "http://rcgi.video.qq.com/web_report?cmd=2562&ctype=1&", n = new Image, i = [];
        $.extend(e, {ua: navigator.userAgent});
        for (var o in e)i.push(o + "=" + encodeURIComponent(e[o]));
        t += i.join("&"), n.src = t
    }, _ = function () {
        return "fm_v_" + r.getUnicode()
    }, b = function () {
        a.remove(_())
    }, x = function (e) {
        r.isLogin() && "string" == $.type(e) && a.set(_(), [r.getUnicode(), e, (new Date).getTime()].join("|"))
    };
    r.addClearLoginStatusCallback(m), r.addLogoutCallback(m), r.addOpenLoginCallback(m);
    var w = {
        setIsNeedToGetAdPassInfo: function (e) {
            d = !!e
        }, setIsNeedEndTime: function (e) {
            g = !!e
        }, getVipInfo: function (e) {
            var t = $.Deferred();
            return r.isLogin() ? u && !e ? u : i(e) : (t.reject(), t)
        }, addGetVipCallback: function (e) {
            v.add(e)
        }
    };
    e.exports = w
}, function (e, t) {
    e.exports = {
        api: "//pay.video.qq.com/fcgi-bin/payvip?otype=json&getannual=1",
        bkapi: "//paybak.video.qq.com/fcgi-bin/payvip?otype=json&getannual=1"
    }
}, function (e, t, n) {
    "use strict";
    function i() {
        function e(e) {
            return t ? e(null, t) : void $.ajax({
                url: "//growth.video.qq.com/fcgi-bin/user_medal_info",
                dataType: "jsonp",
                success: function (n) {
                    n && 0 == n.ret ? e(null, t = "0124816".indexOf(n.curMedal)) : e("error")
                },
                error: function () {
                    e("error")
                }
            })
        }

        if (!o) {
            o = !0, $('<a href="javascript:;" class="icon_achievement" target=""><img id="_person_achieve_img" src="" alt="" style="display: none;"></a>').insertAfter($(".quick_pop_user_hd").find(".account_vip"));
            var t, n, i = $("#_person_achieve_img");
            $("#mod_head_notice_trigger").on("mouseenter", function () {
                e(function (e, t) {
                    return e ? i.hide() : void(~t && (n || (n = !0, i.attr("src", "//i.gtimg.cn/qqlive/images/20160725/curMedal_" + t + ".png")), i.show()))
                })
            })
        }
    }

    var o, r = n(5);
    e.exports = function () {
        r.isLogin() ? i() : r.addLoginCallback(i)
    }
}, function (e, t) {
    var n = {
        isInToday: function (e) {
            var t = new Date, n = new Date(t.getTime() + 864e5), i = n.getFullYear(), o = n.getMonth() + 1, r = n.getDate(), a = new Date([i, o, r].join("/"));
            return 1 * e + 864e5 > a.getTime()
        }, isTodayShowed: function () {
            var e = txv.login.getUnicode(), t = "", n = localStorage.getItem("show_vcoin_exchange"), i = !1;
            return n && (n = $.parseJSON(n), n[e] && (t = n[e], t && (i = !0))), i
        }, setVipSysShowTime: function () {
            if (txv.login.isLogin()) {
                var e = localStorage.getItem("show_vcoin_exchange");
                e = e ? $.parseJSON(e) : {}, e[txv.login.getUnicode()] = (new Date).getTime(), localStorage.setItem("show_vcoin_exchange", n.obj2str(e))
            }
        }, json2str: function (e) {
            try {
                return JSON.stringify(e)
            } catch (t) {
                var n = $.isArray(e), i = [];
                for (var o in e)i.push(o + ":" + e[o]);
                return i = i.join(","), n ? "[" + i + "]" : "{" + i + "}"
            }
        }, reportBossVipSys: function (e) {
            var t = {
                url: document.URL,
                uin: txv.login.getUin(),
                BossId: 3809,
                Pwd: 1896006998,
                target: e
            }, n = "//btrace.qq.com/kvcollect?" + $.param(t);
            txv.report(n)
        }
    };
    e.exports = n
}, function (e, t, n) {
    function i(e) {
        e = e || "vcoin";
        var t = "//video.qq.com/fcgi-bin/get_user_profile?otype=json", n = $.Deferred();
        return $.ajax({
            url: t, data: {datakey: e}, dataType: "jsonp", success: function (e) {
                return e && 0 == e.err_code ? void n.resolve(e.propertys) : void n.reject(e)
            }, error: function () {
                n.reject()
            }
        }), n
    }

    function o() {
        i().done(function (e) {
            if (e && e.length) {
                var t = e[0], n = e[1];
                1 == t.property_type ? (a.html(t.property_count), s.html(n.property_count)) : (a.html(n.property_count), s.html(t.property_count))
            }
        }).fail(function () {
        })
    }

    var r = $("#mod_avator_moneybag"), a = r.find("._diamond"), s = r.find("._vcoin"), c = n(5);
    e.exports = function () {
        c.isLogin() && o(), c.addLoginCallback(o)
    }
}, function (e, t, n) {
    function i(e) {
        var t = n(54);
        t.init(e);
        var i = e && e.vip, r = e && e.annualvip, s = e && e.level, c = [o.base];
        i ? (r && c.push(o.year), c.push(o.level + s)) : (e.annualendtime > 0 && c.push(o.year), c.push(o.notvip), s > 0 && c.push(o.level + s)), a.attr("class", c.join(" ")).removeClass("none")
    }

    var o = {
        base: "icon_vip",
        notvip: "icon_vip_grey",
        year: "icon_vipyear",
        level: "icon_vip_lv"
    }, r = n(5), a = $("[data-type='viplogo']"), s = n(48);
    r.addLogoutCallback(function () {
        a.addClass("none")
    }), r.addReadyCallback(function () {
        s.setIsNeedEndTime(!0), s.getVipInfo().done(function (e) {
            i(e)
        })
    }), r.addLoginCallback(function () {
        s.getVipInfo().done(function (e) {
            i(e)
        })
    }), $(document).on("click", '[data-type="switchlogin"]', function (e) {
        e.preventDefault();
        var t = txv.login.getLoginType(), n = "qq" == t ? "wx" : "qq";
        r.openLoginSingle(null, n), r.reportToBoss({oper: 41, main_type: n})
    })
}, function (e, t, n) {
    var i = $("#mod_head_vipInfo"), o = $("#mod_head_vipPay"), r = o.find("a"), a = $.Deferred(), s = "寮€閫歏IP浼氬憳", c = "缁垂VIP浼氬憳", l = {
        init: function (e) {
            0 != i.length && 0 != o.length && e && l.process(e)
        }, loadMiniPay: function () {
            window.define && n(55).cmd ? seajs.config({alias: {"film.pay.minipay": "//qzs.qq.com/tencentvideo_v1/js/txv.flashminipay.min.js"}}).use("film.pay.minipay", function (e) {
                a.resolve()
            }) : a.reject()
        }, process: function (e) {
            if (1 == e.vip) {
                var t = !1, n = '<span class="acc_txt">鎮ㄧ殑VIP鍒版湡鏃堕棿涓猴細';
                "HLWHF" == e.servicetype && e.endmsg ? (n += e.endmsg, t = !0) : e.endTime && e.endTime.length > 0 && (n += e.endTime.substr(0, 10)), n += "</span>", l.show(n, c, t)
            } else l.getRelateVip(function (e) {
                var t = '<span class="acc_txt">';
                e ? (t += "鎮ㄧ殑", t += "wx" == e.bind_type ? "寰俊" : "QQ", t += "璐﹀彿", e.account_id && e.account_id.length > 0 && (t += '<span class="name">' + e.account_id + "</span>"), t += '鏄疺IP</span><a href="javacript:;" class="acc_change" data-type="' + e.bind_type + '" id="mod_head_vip_shift">鍒囨崲</a>', txv.login.reportToBoss({
                    oper: 40,
                    main_type: e.bind_type
                })) : t += "鎮ㄨ繕涓嶆槸VIP浼氬憳锛�</span>", l.show(t, s)
            })
        }, events: function () {
            r.off("click"), r.on("click", function (e) {
                e.preventDefault(), l.openMiniPay()
            }), i.off("click", "#mod_head_vip_shift"), i.on("click", "#mod_head_vip_shift", function (e) {
                e.preventDefault();
                var t = $(this).attr("data-type");
                txv.login.openLoginSingle(null, t), txv.login.reportToBoss({oper: 41, main_type: t})
            })
        }, getRelateVip: function (e) {
            $.ajax({
                url: "//pay.video.qq.com/fcgi-bin/check_bindaccount",
                data: {otype: "json"},
                dataType: "jsonp",
                CSRF: !0,
                success: function (t) {
                    e(t && t.result && 0 == t.result.code && 1 == t.isVip ? t : null)
                },
                error: function (t) {
                    e(null)
                }
            })
        }, openMiniPay: function (e) {
            "function" == typeof $.pay ? $.pay({
                _source: 79,
                aid_version: "V0",
                _scene: "wx" == txv.login.getLoginType() ? 2 : 1
            }) : $.getScript("//qzs.qq.com/tencentvideo_v1/js/txv.flashminipay.min.js", function () {
                "function" == typeof $.pay && $.pay({
                    _source: 79,
                    aid_version: "V0",
                    _scene: "wx" == txv.login.getLoginType() ? 2 : 1
                })
            })
        }, show: function (e, t, n) {
            i.html(e), r.html(t), i.show(), n ? o.hide() : o.show()
        }
    };
    txv.login.addReadyCallback(function (e) {
        l.events()
    }), e.exports = {init: l.init}
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, function (e, t, n) {
    var i = n(57), o = n(58), r = n(59), a = n(60), s = $(".quick_vip"), c = $(".quick_vip .mod_quick_pop"), l = {
        notlogin: null,
        islogin: null
    }, u = !1, p = !1, f = function (e) {
        return null !== l.islogin ? void e() : void $.ajax({
            url: "//sns.video.qq.com/fcgi-bin/dlib/dataout_pc?auto_id=2433&otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function (t) {
                if (t && 0 == t.returncode)for (var n = 0; n < t.list.length; n++)1 === t.list[n].isvalid && (l[t.list[n].pos] = t.list[n]);
                e()
            },
            error: function () {
                e()
            }
        })
    }, d = function () {
        s.unbind();
        var e = 0;
        s.mouseover(function () {
            s.addClass("open"), e > 0 && (clearTimeout(e), e = 0)
        }).mouseout(function () {
            e = setTimeout(function () {
                s.removeClass("open")
            }, 300)
        })
    }, g = !1, h = function () {
        g || (txv.vip.addGetVipCallback(function (e) {
            S(0 === e.vip)
        }), txv.login.addLogoutCallback(function () {
            S()
        }), g = !0)
    }, v = function () {
        "function" == typeof $.pay ? $.pay({
            _source: 90,
            aid_version: "V0",
            _scene: "wx" == txv.login.getLoginType() ? 2 : 8
        }) : $.getScript("//vm.gtimg.cn/tencentvideo_v1/script/vip.minipay.js", function () {
            "function" == typeof $.pay && $.pay({
                _source: 90,
                aid_version: "V0",
                _scene: "wx" == txv.login.getLoginType() ? 2 : 8
            })
        })
    }, m = function () {
        $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/vip_info_all?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function (e) {
                e && e.user_ticket && e.user_ticket.result && 0 == e.user_ticket.result.code && c.find("li.gyq .keyword").html(e.user_ticket.vip_tt), e && e.vip_vouchers && e.vip_vouchers.result && 0 == e.vip_vouchers.result.code && c.find("li.yhq .keyword").html(e.vip_vouchers.total_effective_count), e && e.score_info && e.score_info.result && 0 == e.score_info.result.code && c.find("li.czz .keyword").html(e.score_info.score), e && e.give_movie && e.give_movie.result && 0 == e.give_movie.result.code && c.find("li.zpzg .keyword").html(e.give_movie.leftnum)
            }
        }), $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/order?otype=json&psize=10&pnum=1&t=1",
            dataType: "jsonp",
            CSRF: !0,
            success: function (e) {
                return e && 0 == e.ret && e.total > 0 ? void c.find("li.gmjl .keyword").html(e.total) : (c.find("li.gmjl").remove(), void b(0))
            },
            error: function () {
                c.find("li.gmjl").remove(), b(0)
            }
        }), u || $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/autopay?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function (e) {
                e && e.result && 0 == e.result.code && 0 == e.autopay && -1 == c.find(".quick_pop_vip_info_bd p.vip_txt").html().indexOf("寮€閫氳嚜鍔ㄧ画璐�") && c.find(".quick_pop_vip_info_bd p.vip_txt").append(' <a class="btn_vip_buy" target="" href="http://my.pay.qq.com/account/index.shtml#service">寮€閫氳嚜鍔ㄧ画璐�</a>')
            }
        })
    }, y = 0, _ = 4, b = function (e) {
        var t = c.find(".quick_pop_vip_info_list li").length;
        y + e >= 0 && t - _ >= y + e && (y += e), c.find(".quick_pop_vip_info_list li").hide().each(function (e, t) {
            e >= y && y + _ > e && $(t).show()
        }), c.find("a.quick_pop_vip_info_list_prev").show(), c.find("a.quick_pop_vip_info_list_next").show(), 0 == y && c.find("a.quick_pop_vip_info_list_prev").hide(), y + _ >= t && c.find("a.quick_pop_vip_info_list_next").hide()
    }, x = function () {
        c.html(i), c.find(".vip_layer_login").unbind("click").bind("click", function () {
            return txv.login.openLogin({
                success: function () {
                }
            }), p = !0, !1
        }), l.notlogin && c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return window.open(l.notlogin.url), !1
        }).html(l.notlogin.text)
    }, w = function (e) {
        c.html(o);
        var t = (txv.login.getLoginType(), e.endTime.split(" ")), n = t[0].split("-"), i = t[1].split(":"), r = new Date(n[0], n[1] - 1, n[2], i[0], i[1], i[2]), a = Math.ceil((r.getTime() - new Date) / 864e5);
        if ("HLWHF" === e.servicetype) {
            u = !0;
            var s = "鎸夋湀鏀粯涓�"
        } else if (a > 7)var s = "浼氬憳鏈夋晥鏈熻嚦 " + e.endTime.substr(0, 10); else var s = "浼氬憳杩樻湁 " + a + " 澶╁埌鏈�";
        c.find(".quick_pop_vip_info_bd p.vip_txt").html(s), c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return v(), !1
        }), b(0), c.find("a.quick_pop_vip_info_list_prev").click(function () {
            return b(-1), !1
        }), c.find("a.quick_pop_vip_info_list_next").click(function () {
            return b(1), !1
        }), l.islogin && c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return window.open(l.islogin.url), !1
        }).html(l.islogin.text), m()
    }, k = function (e) {
        if (c.html(a), "wx" === e.bind_type)var t = '鎮ㄧ殑寰俊甯愬彿 <span class="keyword">' + e.account_id + '</span> 鏄細鍛� <a href="javascript:;" class="btn_vip_change wx">鍒囨崲</a>'; else var t = '鎮ㄧ殑QQ甯愬彿 <span class="keyword">' + e.account_id + '</span> 鏄細鍛� <a href="javascript:;" class="btn_vip_change qq">鍒囨崲</a>';
        c.find(".vip_txt").html(t), c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return v(), !1
        }), c.find(".btn_vip_change").unbind("click").bind("click", function () {
            return txv.login.openLoginSingle({
                success: function () {
                }
            }, e.bind_type), !1
        })
    }, C = function () {
        c.html(r), txv.login.isLogin() && c.find("p.vip_txt").hide(), c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return v(), !1
        }), l.notlogin && c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return window.open(l.notlogin.url), !1
        }).html(l.notlogin.text)
    }, T = function () {
        c.html(a), c.find(".vip_txt").html("VIP宸茶繃鏈燂紝閲嶆柊寮€閫氭仮澶嶇壒鏉�"), c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return v(), !1
        }), l.islogin && c.find(".btn_pop_link").unbind("click").bind("click", function () {
            return window.open(l.islogin.url), !1
        }).html(l.islogin.text)
    }, j = function () {
        $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/payvip?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function (e) {
                if (e && e.result && 0 == e.result.code)if (1 == e.vip)w(e); else {
                    var t = e;
                    $.ajax({
                        url: "//pay.video.qq.com/fcgi-bin/check_bindaccount?otype=json",
                        dataType: "jsonp",
                        CSRF: !0,
                        success: function (e) {
                            e && e.result && 0 == e.result.code ? 1 == e.isVip ? k(e) : "" !== t.endTime ? T() : C() : C()
                        },
                        error: function (e) {
                            C()
                        }
                    })
                } else C()
            },
            error: function () {
                C()
            }
        })
    }, S = function (e) {
        return 0 == c.length ? !1 : void f(function () {
            txv.login.isLogin() ? j() : x(), d(), h(), e && p && (v(), p = !1), $.extend(txv.util, {
                showFixedWindow: function (e, t, n, i) {
                    if (e) {
                        var o, r = window == top, a = r ? document : top.document, s = a.body.scrollTop, c = a.documentElement.clientHeight, l = $(e);
                        t = t || l.width() || 373, n = n || l.height() || 235, i = i === !1, 0 == s && (s = a.documentElement.scrollTop), 0 == c && (c = a.body.clientHeight), o = parseInt(l.css("zIndex")), l.css({
                            width: t + "px",
                            height: n + "px",
                            top: "50%",
                            left: "50%",
                            marginLeft: -t / 2 + "px",
                            marginTop: -n / 2 + "px",
                            position: "fixed",
                            zIndex: o || "10001",
                            display: "block"
                        })
                    }
                }
            })
        })
    };
    S()
}, function (e, t) {
    var n = '<div class="quick_pop_inner">						<i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>						<div class="pop_info_content">							<div class="quick_pop_vip_login">								<div class="quick_pop_btn">									<a href="javascript:void(0);" class="btn_pop_link vip_layer_login">寮€閫歏IP 澶х墖鍏嶈垂鐪�</a>								</div>								<p class="vip_txt">宸叉槸VIP璇� <a href="javascript:;" class="keyword vip_layer_login">鐧诲綍</a></p>								<div class="vip_login_info cf">									<div class="item item_1">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">闄㈢嚎鏂扮墖</span></a>									</div>									<div class="item item_2">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">鍏嶅箍鍛�</span></a>									</div>									<div class="item item_3">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">钃濆厜楂樻竻</span></a>									</div>								</div>							</div>						</div>					</div>';
    e.exports = n
}, function (e, t) {
    var n = '';
    e.exports = n
}, function (e, t) {
    var n = '<div class="quick_pop_inner">	                <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>	                <div class="pop_info_content">	                    <div class="quick_pop_vip_login">	                        <div class="quick_pop_btn">	                            <a href="javascript:;" class="btn_pop_link">寮€閫歏IP 鍏嶈垂鐪嬪ぇ鐗�</a>	                        </div>	                        <p class="vip_txt">宸叉槸VIP璇� <a href="javascript:;" class="keyword">鐧诲綍</a></p>	                        <div class="vip_login_info cf">	                            <div class="item item_1">	                                <a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">闄㈢嚎鏂扮墖</span></a>	                            </div>	                            <div class="item item_2">	                                <a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">鍏嶅箍鍛�</span></a>	                            </div>	                            <div class="item item_3">	                                <a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">钃濆厜楂樻竻</span></a>	                            </div>	                        </div>	                    </div>	                </div>	            </div>';
    e.exports = n
}, function (e, t) {
    var n = '<div class="quick_pop_inner">	                    <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>	                    <div class="pop_info_content">	                        <div class="quick_pop_vip_buy">	                            <div class="quick_pop_btn">	                                <a href="javascript:;" class="btn_pop_link">寮€閫歏IP 鍏嶈垂鐪嬪ぇ鐗�</a>	                            </div>	                            <p class="vip_txt">浣犵殑寰俊甯愬彿 	                                <span class="keyword">宸笉澶氬厛鐢�</span> 鏄細鍛�	                                <a href="javascript:;" class="btn_vip_change">鍒囨崲</a>	                            </p>	                            <div class="vip_login_info cf">									<div class="item item_1">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">闄㈢嚎鏂扮墖</span></a>									</div>									<div class="item item_2">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">鍏嶅箍鍛�</span></a>									</div>									<div class="item item_3">										<a target="" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">钃濆厜楂樻竻</span></a>									</div>								</div>	                        </div>	                    </div>	                </div>';
    e.exports = n
}, function (e, t, n) {
    "use strict";
    function i(e) {
        return d.test(e)
    }

    function o(e) {
        if (1 == e.length)return e[0];
        var t = "";
        return "file:" == location.protocol && (t = "http:"), t + "//vm.gtimg.cn/c/=" + s.map(e, function (e) {
            return e.replace(d, "")
        }).join(",")
    }

    function r(e) {
        ~p.indexOf(e) || (p.push(e), f || (f = !0, setTimeout(function () {
            function e(e, t) {
                var n = u[e];
                !t && (l[e] = !0), u[e] = null, n.forEach(function (e) {
                    e && e(t)
                })
            }

            f = !1;
            var t = [];
            s.forEach(p, function (n) {
                i(n) ? t.push(n) : c(n, function (t) {
                    e(n, t)
                })
            }), p = [], t.length && c(o(t), function (n) {
                t.forEach(function (t) {
                    e(t, n)
                })
            })
        })))
    }

    function a(e, t) {
        return l[e] ? void(t && t()) : void(u[e] ? u[e].push(t) : (u[e] = [t], r(e)))
    }

    var s = n(28), c = n(62), l = {}, u = {}, p = [], f = !1, d = /^(\b|http:|https:)\/\/vm\.gtimg\.cn/;
    a.load = c, e.exports = a
}, function (e, t) {
    "use strict";
    function n() {
        var e = document.createElement("script");
        return e.type = "text/javascript", e.charset = "utf-8", e.async = !0, e
    }

    function i(e, t, i) {
        function l(e) {
            ("load" === e.type || s.test((e.currentTarget || e.srcElement).readyState)) && h(e)
        }

        function u(e) {
            clearTimeout(f), p || (p = 1, document.body.removeChild(g), t(e))
        }

        t = t || o, i = i || {};
        var p, f, d = i.timeout || a, g = n(), h = r(u, null), v = r(u, "load script error: " + e), m = r(u, "load script timeout: " + e);
        return !g.attachEvent || g.attachEvent.toString && g.attachEvent.toString().indexOf("[native code") < 0 || c ? (g.addEventListener("load", l, !1), g.addEventListener("error", v, !1)) : (g.attachEvent("onreadystatechange", l), g.attachEvent("onerror", v)), g.src = e, f = setTimeout(m, d), document.body.appendChild(g), g
    }

    function o() {
    }

    function r(e, t) {
        return function () {
            e(t)
        }
    }

    var a = 3e4, s = /^(complete|loaded)$/, c = "undefined" != typeof opera && "[object Opera]" === opera.toString();
    e.exports = i
}, function (e, t, n) {
    function i(e, t) {
        t = t || {}, e = parseInt(e, 10);
        var n, i = o.typeDef;
        switch (e) {
            case i.COMPLEX:
                n = new a;
                break;
            case i.SIMPLE:
                n = new s;
                break;
            case i.DEFAULT:
            default:
                n = new r
        }
        return n.init(t), n
    }

    var o = n(64), r = n(65), a = n(68), s = n(69);
    e.exports = {
        renderNameDef: o.renderNameDef, typeDef: o.typeDef, defaultInit: i, complex: function (e) {
            return i(o.typeDef.COMPLEX, e)
        }, simple: function (e) {
            return i(o.typeDef.SIMPLE, e)
        }, SearchBox: r, initHeadSearch: function () {
            var e, t = {};
            return document.getElementById("head_v3") && !document.getElementById("modSimpleNavMore") && (t.renderMethodName = o.renderNameDef.v2), e = txv.searchbox.complex(t), e.addOnShowSelectorCallBack(function () {
                $("#modHeadSearchSuggest").show()
            }), e.addOnHideSelectorCallBack(function () {
                $("#modHeadSearchSuggest").hide()
            }), e
        }
    }
}, function (e, t) {
    e.exports = {
        renderNameDef: {complex: "complex", simple: "simple", v2: "v2"},
        typeDef: {DEFAULT: 0, COMPLEX: 1, SIMPLE: 2}
    }
}, function (e, t, n) {
    function i(e) {
        e = e || {}, this.config = {
            defaultTxt: "",
            inputBox: $("#iWord"),
            sugSelector: $("#sgt_list"),
            searchBtn: $("#sbutton"),
            suggestCgi: i.search_suggest,
            searchCgi: i.search_cgi,
            searchForm: document.sform,
            sugCover: $("#mod_keywords_list"),
            elStag: $("#searchbox_hid_stag"),
            elTj2btn: $("#searchbox_hid_tj2btn"),
            defaultCls: "mod_search_txt",
            focusCls: "onfocus",
            currentCls: "current",
            expandCls: "expand",
            showSuggest: !0,
            showSmartHistory: !0,
            render: null,
            renderMethodName: "",
            callback: {onInputboxFocus: p, onInputboxBlur: p}
        }, $.extend(!0, this.config, e), this.selectedIndex = -1, this.smartWord = "", this.itemsCount = 0, this.timer = [], this.hadModify = !1, this.showSuggestCb = $.Callbacks("unique"), this.hideSuggestCb = $.Callbacks("unique")
    }

    function o(e) {
        s.get(v, function (t) {
            "function" == typeof e && e(t)
        })
    }

    function r(e) {
        s.get(v, function (t) {
            t = t || "";
            for (var n = t ? t.split("|") : [], i = -1, o = encodeURIComponent(e), r = 0, a = n.length; a > r; r++)if (n[r] == o) {
                i = r;
                break
            }
            -1 != i && n.splice(i, 1), n.length > 9 && n.pop(), n.unshift(o), s.set(v, n.join("|"))
        })
    }

    function a() {
        s.set(v, "")
    }

    var s = n(10), c = (n(7), n(64)), l = n(66), u = n(67), p = function () {
    }, f = "//v.qq.com/json/searchcfg/search_keyword.js?", d = (reg = /<em.*?>(.*?)<\/em>/gi, '<li act="history"><a href="javascript:void(0);" class="items"><span class="result_detail"><span class="result_title">{search_word}</span></span></a></li>'), g = {}, h = !1;
    i.search_cgi = "http://v.qq.com/search.html", i.search_suggest = "//s.video.qq.com/smartbox?plat=2&ver=0&num=10&otype=json&query=", i.showSuggestCb = $.Callbacks("unique"), i.hideSuggestCb = $.Callbacks("unique"), i.addOnShowSelectorCallBack = i.showSuggestCb.add, i.addOnHideSelectorCallBack = i.hideSuggestCb.add, $.extend(i.prototype, {
        init: function (e) {
            var t = this;
            e = e || {}, $.extend(!0, t.config, e), t.config.defaultTxt ? t.config.inputBox.val() ? t.hadModify = !0 : t.config.inputBox.val(t.config.defaultTxt) : t.getDefauKeyword(), t.initEvent(), t.config.searchForm && (t.config.searchForm.action = t.config.searchCgi, t.config.searchForm.onsubmit = function () {
                return t.onBeforeSubmit() ? t.validate() : !1
            }), t.config.renderMethodName == c.renderNameDef.v2 && 0 == t.config.sugCover.find("a.clear_history").size() && t.config.sugCover.append('<a href="javascript:;" style="" class="btn_grey_sim clear_history">娓呯┖鎼滅储璁板綍</a>'), t.config.sugCover.find("a.clear_histor").hide()
        }, initEvent: function () {
            var e = this, t = e.config.inputBox;
            t.bind("keyup", function (t) {
                e.onKeyup(t)
            }), t.bind("keydown", function (n) {
                e.onKeydown(n);
                var i = t.val();
                i ? e.hadModify = !0 : e.hadModify = !1
            }), t.bind("blur", function (n) {
                var i = t.val();
                t.removeClass(e.config.focusCls), e.hadModify && i || (i && i !== e.config.defaultTxt ? e.hadModify = !0 : t.val(e.config.defaultTxt)), h || e.hideSelector(), "function" == typeof e.config.callback.onInputboxBlur && e.config.callback.onInputboxBlur()
            }), t.bind("focus", function (n) {
                t.addClass(e.config.focusCls), e.onFocus(this, n)
            }), t.bind("paste", function (t) {
                setTimeout(function () {
                    e.hadModify = !0, e.getSuggest()
                }, 5)
            }), t.bind("webkitspeechchange", function (t) {
                t.stopPropagation(), t.results && t.results.length > 0 && (this.value = t.results[0].utterance, e.hadModify = !0, e.getSuggest())
            }), e.config.sugSelector.undelegate("li", "click").delegate("li", "click", function (t) {
                e.onListClick(this, t)
            }), e.config.sugCover.delegate("li", "mouseenter mouseleave", function (t) {
                "mouseenter" == t.type && e.choose($(this).index())
            }), e.config.sugCover.hover(function () {
                h = !0
            }, function () {
                h = !1
            }), e.config.sugCover.bind("blur", function (t) {
                e.hideSelector()
            }), e.config.sugCover.delegate("a.clear_history", "click", function (t) {
                e.hideSelector(), a()
            }), e.initExtEvent()
        }, initExtEvent: function () {
        }, onFocus: function (e, t) {
            var n = this, i = $.trim(e.value);
            n.hadModify && i ? n.getSuggest() : (e.value = "", n.getHistory()), "function" == typeof n.config.callback.onInputboxFocus && n.config.callback.onInputboxFocus()
        }, getHistory: function () {
            var e = this;
            e.config.showSmartHistory && o(function (t) {
                if (t) {
                    var n = t.split("|"), o = [];
                    e.itemsCount = n.length;
                    for (var r = 0, a = n.length; a > r; r++) {
                        var s = n[r];
                        s = decodeURIComponent(s), s = u.filterXSS(s), o.push(d.replace("{search_word}", s))
                    }
                    e.config.sugSelector.html(o.join("")), e.config.sugSelector.show(), e.config.sugCover.find("a.clear_history").show(), e.config.sugCover.show(), e.showSuggestCb.fire(), i.showSuggestCb.fire()
                }
            })
        }, submit: function () {
            this.validate() && this.config.searchForm.submit()
        }, validate: function () {
            var e = this, t = $.trim(e.config.inputBox.val());
            if (!t)return !1;
            if ("utf-8" != document.charset) {
                var n = document.charset;
                document.charset = "utf-8", setTimeout(function () {
                    document.charset = n
                }, 10)
            }
            return e.config.inputBox.val(t), r(t), !0
        }, onKeyup: function (e) {
            var t = this;
            if (38 != e.keyCode && 40 != e.keyCode) {
                var n = t.config.inputBox.val();
                return n ? void(t.timer[0] = setTimeout(function () {
                    clearTimeout(t.timer[0]), t.timer[0] = null, t.getSuggest()
                }, 300)) : (t.getHistory(), void(t.hadModify = !1))
            }
        }, onKeydown: function (e) {
            var t = this;
            t.timer[0] && (clearTimeout(t.timer[0]), t.timer[0] = null), 38 == e.keyCode ? (e.preventDefault(), t.choose("up", !0), t.hadModify = !0) : 40 == e.keyCode && (e.preventDefault(), t.choose("down", !0), t.hadModify = !0)
        }, choose: function (e, t) {
            var n = this;
            t |= !1, "string" == typeof e ? "up" == e ? (n.selectedIndex <= 0 && (n.selectedIndex = n.itemsCount), n.selectedIndex--) : "down" == e && (n.selectedIndex >= n.itemsCount - 1 && (n.selectedIndex = -1), n.selectedIndex++) : "number" == typeof e && (n.selectedIndex = e);
            var i = n.config.sugSelector.find("li:eq(" + n.selectedIndex + ")");
            n.setCurrentCls(i, n.selectedIndex), t && n.setVal(i)
        }, setCurrentCls: function (e, t) {
            var n = this, i = n.config.currentCls || "current";
            n.config.sugSelector.find("li." + i).removeClass(i), e.addClass(i)
        }, setVal: function (e) {
            this.config.inputBox.val(e.text())
        }, hideSelector: function () {
            h = !1, this.config.sugCover.hide(), this.config.sugSelector.hide(), this.config.sugSelector.html(""), this.hideSuggestCb.fire(), i.hideSuggestCb.fire()
        }, getSuggest: function () {
            var e = this, t = $.trim(this.config.inputBox.val());
            return t ? (e.selectedIndex = -1, e.smartWord = t, g[t] ? void e.afterSuggest(g[t]) : void e.getCgiSuggest(t)) : void e.hideSelector()
        }, getCgiSuggest: function (e) {
            var t = this;
            $.getJsonp(t.config.suggestCgi + encodeURIComponent(e), function (n) {
                if (!n || !n.head || !$.isArray(n.item))return void t.hideSelector();
                var i = n.item.length;
                return 0 == i ? void t.hideSelector() : (g[e] = n, void t.afterSuggest(g[e]))
            })
        }, afterSuggest: function (e) {
            var t = this;
            t.renderSuggest(e), t.config.sugSelector.show(), t.config.sugCover.find("a.clear_history").hide(), t.config.sugCover.show(), t.config.sugCover.css("display", "block"), t.showSuggestCb.fire(), i.showSuggestCb.fire()
        }, renderSuggest: function (e) {
            var t = this, n = [], i = t.config;
            t.itemsCount = e.item.length;
            for (var o = 0, r = e.item.length; r > o; o++)n.push(t.renderItem(e.item[o]));
            i.sugSelector.html(n.join(""))
        }, renderItem: function () {
            return "function" == typeof this.config.render ? this.config.render.apply(this, arguments) : this.render.apply(this, arguments)
        }, render: function () {
            var e = this.config.renderMethodName || c.renderNameDef.complex, t = l[e];
            return t ? t.apply(this, arguments) : void 0
        }, onListClick: function (e) {
            var t = this, n = t.config.inputBox.val(), i = $(e).index();
            this.choose(i, !0), this.hideSelector(), this.submit(), t.config.inputBox.val(n)
        }, onBeforeSubmit: function () {
            return !0
        }, getDefauKeyword: function () {
            function e() {
                s.get("txv_search_keyword", function (e) {
                    e = e || "", e = e.split("|");
                    var n = u.filterXSS(e[0]), i = t.config.inputBox.val();
                    i ? t.hadModify = !0 : t.config.inputBox.val(n), t.config.defaultTxt = n
                })
            }

            var t = this, n = Date.now();
            timestamp = Math.floor(n / 6e5), $.ajax({
                url: [f, "v=", timestamp].join(""),
                dataType: "jsonp",
                jsonpCallback: "SearchWordCallback20151104",
                cache: !0
            }).done(function (i) {
                if (i && i.search_word) {
                    var o = i.search_word, r = u.filterXSS(o), a = t.config.inputBox.val();
                    s.set("txv_search_keyword", [o, n].join("|")), a ? t.hadModify = !0 : t.config.inputBox.val(r), t.config.defaultTxt = r
                } else e()
            }).fail(function () {
                e()
            })
        }, addOnShowSelectorCallBack: function () {
            this.showSuggestCb.add(arguments)
        }, addOnHideSelectorCallBack: function () {
            this.hideSuggestCb.add(arguments)
        }
    });
    var v = "txv_search_history";
    e.exports = i
}, function (e, t, n) {
    function i(e, t, n, i) {
        var o = this, r = o.typemap, a = "http://v.qq.com", c = [], l = e.id;
        if ("楂樻竻" != e.sharp && "瓒呮竻" != e.sharp && (e.sharp = ""), "" == l)c.push(['<li act="search"><a href="javascript:;" target="_self"><span class="result_detail"><span class="result_title">', e.title, "</span></span></a></li>"].join("")); else switch (t) {
            case r.DY:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, '</span><span class="result_HD">', e.sharp, "</span></span></a> </li>"].join(""));
                break;
            case r.TV:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, '</span><span class="result_HD">', e.sharp, '</span><span class="result_new">', e.ex.title, "</span></span></a></li>"].join(""));
                break;
            case r.MV:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, '</span><span class="result_singer">姝屾墜锛�', e.ex.title, '</span><span class="result_HD">', e.sharp, "</span></span></a></li>"].join(""));
                break;
            case r.YC:
            case r.ZY:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, "</span></span></a></li>"].join("")), e.ex && e.ex.id && (tmpUrl = s.getDetailUrl(e.ex.id, t), -1 == tmpUrl.indexOf(a) && (tmpUrl = [a, tmpUrl].join("")), c.push(['<li act="click" playurl="', tmpUrl, '"><a href="javascript:;" target="_self"><span class="result_new_info"> - 鏈€鏂颁竴鏈� (绗�', e.ex.date.substring(0, 10), '鏈�)</span><span class="result_new_info_detail">', e.ex.byname, "</span></a></li>"].join("")), o.itemsCount++);
                break;
            case r.JLP:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, '</span><span class="result_HD">', e.sharp, "</span></span></a></li>"].join(""));
                break;
            default:
                c.push(['<li act="search" playurl="', e.url, '"><a href="javascript:;" target="_self"><span class="result_type">', e["class"], '</span><span class="result_detail"><span class="result_title">', e.title, "</span></span></a></li>"].join("")), e.ex && e.ex.id && (tmpUrl = s.getDetailUrl(e.ex.id, t), -1 == tmpUrl.indexOf(a) && (tmpUrl = [a, tmpUrl].join("")), c.push(['<li act="click" playurl="', tmpUrl, '"><a href="javascript:;" target="_self"><span class="result_new_info"> - 鏈€鏂颁竴鏈� (绗�', e.ex.date.substring(0, 10), '鏈�)</span><span class="result_new_info_detail">', e.ex.byname, "</span></a></li>"].join("")), o.itemsCount++)
        }
        return c.join("")
    }

    function o(e, t, n, o) {
        return i.apply(this, arguments)
    }

    function r(e, t, n, i) {
        var o = this, r = [], s = e.ps, c = e.ss, l = "", u = "", p = "", f = "", d = "ll_src", g = o.typemap, h = o.itemTypeMap, v = e.itemType;
        if (e.da && (l = "(" + e.da + ")&nbsp;"), 1 == t && e.pd && (u = '<p class="list">瀵兼紨锛�' + e.pd + "</p>"), 2 == t && e.ex && e.ex.title && (u = '<p class="list">' + e.ex.title + "</p>"), 3 != t && 9 != t || !e.ar || (u = '<p class="list">鍦板尯锛�' + e.ar + "</p>"), e.pa = e.pa || "", e.pa = e.pa.replace(/\+/g, " "), 1 != t && 2 != t || !e.pa || (p = '<p class="list">涓绘紨锛�' + e.pa + "</p>"), 3 != t && 9 != t || !e.sn || (p = '<p class="list">绫诲瀷锛�' + e.sn + "</p>"), 1 != s || 1 != c || n.hasExpand || (n.hasExpand = !0, d = "src", f = "expand"), r.push('<li ps="' + s + '" ss="' + c + '" class="' + f + '">'), r.push('<a href="javascript:void(0);" target="_self" class="items">'), 1 == s && 1 == c && r.push('<span class="item_posi"><i class="icon_arrow"></i></span>'), r.push('<span class="result_detail">'), r.push('<span class="result_title">' + e.title + "</span>"), r.push('<span class="title_desc">' + l + e["class"] + "</span>"), r.push("</span>"), r.push("</a>"), 1 == s && 1 == c) {
            if (r.push('<div class="wrap_content">'), r.push('<a href="javascript:;" class="figure"><img ' + d + '="' + e.dc + '" onerror="picerr(this, 2)""></a>'), v == h.ZB)r.push('<div class="wrap_right"><div class="detail_list">'), e.tt && r.push('<h3 class="list_subtitle">' + e.tt + "</h3>"), r.push('<p class="list">' + e.secondLine + "</p>"), r.push("</div>"), e.url && r.push('<a href="' + e.url + '" class="btn_play" target="" nopropagation="true">' + {
                    "-1": "绔嬪嵆鎾斁",
                    0: "瑙傜湅鐩存挱",
                    1: "鏌ョ湅璇︽儏"
                }[e.status] + "</a>"); else if (v == h.ZT)r.push('<div class="wrap_right"><div class="detail_list">'), r.push('<p class="list_subtitle" title="' + e.tt + '">' + a.cut(e.tt, 80, "...") + "</p>"), r.push("</div>"), e.url && r.push('<a href="' + e.url + '" class="btn_play" target="" nopropagation="true">鏌ョ湅璇︽儏</a>'); else switch (+t) {
                case g.ZY:
                    if (r.push('<div class="wrap_right wrap_layout_12">'), e.ex && $.isArray(e.ex.pl))for (var m = 0, y = e.ex.pl.length; y > m; m++) {
                        var _ = e.ex.pl[m];
                        r.push('<p class="list"><a href="' + _.u + '" class="btn_grey_sim" target="" nopropagation="true">' + _.en + "鏈� " + _.ti + "</a></p>")
                    }
                    e.live_url && r.push('<a href="' + e.live_url + '" class="btn_play" target="" nopropagation="true" data-reporttype="live">姝ｅ湪鐩存挱</a>'), r.push("</div>");
                    break;
                default:
                    var b = [];
                    if (e.tt && e.tt != e.word && b.push(e.tt), e.et && e.et != e.word && b.push(e.et), r.push('<div class="wrap_right"><div class="detail_list">'), b.length > 0 && r.push('<h3 class="list_subtitle">' + b.join("/") + "</h3>"), r.push(u), r.push(p), r.push("</div>"), r.push('<a href="' + e.url + '" class="btn_play" target="" nopropagation="true">绔嬪嵆鎾斁</a>'), e.ticket) {
                        var x = $.parseJSON(e.ticket);
                        r.push('<a href="' + x.ticket_url + '" target="" class="btn_ticket">涔扮數褰辩エ</a><a href="' + x.ticket_url + '" target="" class="btn_tips">' + x.ticket_city + "鏈€浣庝环锛氾骏" + x.ticket_price + "鍏�</a>")
                    }
                    r.push("</div>")
            }
            r.push("</div>")
        }
        return r.push("</li>"), r.join("")
    }

    var a = n(67), s = n(15);
    e.exports = {complex: i, simple: o, v2: r}
}, function (e, t) {
    e.exports = {
        extend: function (e, t) {
            var n = function () {
            };
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }, filterXSS: function (e) {
            var t = document.createElement("div"), n = $(t).text(e).html();
            return t = null, n
        }, cut: function (e, t, n) {
            if (e = String(e), t -= 0, n = n || "", isNaN(t))return e;
            for (var i = e.length, o = Math.min(Math.floor(t / 2), i), r = this.getRealLen(e.slice(0, o)); i > o && t > r; o++)r += 1 + (e.charCodeAt(o) > 255);
            return e.slice(0, r > t ? o - 1 : o) + (i > o ? n : "")
        }, getRealLen: function (e, t) {
            if ("string" != typeof e)return 0;
            if (t) {
                var n = e.replace(/[\x00-\xFF]/g, "");
                return e.length - n.length + encodeURI(n).length / 3
            }
            return e.replace(/[^\x00-\xFF]/g, "**").length
        }
    }
}, function (e, t, n) {
    function i(e) {
        r.call(this, e), this.typemap = {
            DY: 1,
            TV: 2,
            DM: 3,
            MV: 22,
            ZY: 10,
            YC: 103,
            JLP: 9
        }, this.itemTypeMap = {
            SP: 1,
            RM: 2,
            RC: 3,
            ZB: 5,
            ZT: 101
        }, this.flag = {isMix: !1}, this.hotkeyObj = {
            go: "search.search",
            smartBox: "search.smartbox",
            hotwordtj2: "search.hotword",
            smartBoxStag: "txt.smart_index",
            defaultStag: "txt.index",
            hotwordStag: "txt.index_hotword",
            historyStag: "txt.historyword"
        }
    }

    var o = n(67), r = n(65), a = n(7), s = "//ncgi.video.qq.com/report/search?", c = function () {
    };
    o.extend(r, i), $.extend(i.prototype, {
        onBeforeSubmit: function () {
            var e, t, n = !0, i = this.config.elStag, o = this.config.elTj2btn;
            if ("" != this.config.sugSelector.html() && -1 != this.selectedIndex) {
                if (e = this.config.sugSelector.find("li:eq(" + this.selectedIndex + ")"), t = e.attr("act"), "click" == t) {
                    a.button(this.hotkeyObj.smartBox);
                    var r = e.attr("playurl");
                    r && "" != r && window.open(r), this.hideSelector(), n = !1
                } else"history" == t ? (i.val(this.hotkeyObj.historyStag), o.val(this.hotkeyObj.smartBox)) : (i.val(this.hotkeyObj.smartBoxStag), o.val(this.hotkeyObj.smartBox));
                this.hideSelector()
            } else this.hadModify ? (i.val(this.hotkeyObj.defaultStag), o.val(this.hotkeyObj.go)) : (i.val(this.hotkeyObj.hotwordStag), o.val(this.hotkeyObj.hotwordtj2));
            return n
        }, onListClick: function (e, t) {
            var n = this, i = $(e), o = i.attr("act"), r = i.index(), s = this.config.elStag, c = this.config.elTj2btn;
            if ("click" == o) {
                a.button(this.hotkeyObj.smartBox);
                var l = i.attr("playurl");
                return l && "" != l && window.open(l), void this.hideSelector()
            }
            var u = n.config.inputBox.val();
            "history" == o ? (c.val(this.hotkeyObj.smartBox), s.val(this.hotkeyObj.historyStag)) : (c.val(this.hotkeyObj.smartBox), s.val(this.hotkeyObj.smartBoxStag)), this.choose(r, !0), this.hideSelector(), this.submit(), c.val(this.hotkeyObj.go), s.val(this.hotkeyObj.defaultStag), n.config.inputBox.val(u)
        }, renderSuggest: function (e) {
            var t, n, i = this, o = [];
            if (e && $.isArray(e.item)) {
                i.flag.isMix = e.head && 1 == e.head.mix, i.itemsCount = e.item.length, e.hasExpand = !1;
                for (var r = 0; r < e.item.length; r++)t = e.item[r], n = -1, t.ex && t.ex.typeid && (n = parseInt(t.ex.typeid, 10)), o.push(i.renderItem(t, n, e, r));
                i.config.sugSelector.html(o.join(""))
            }
        }, setCurrentCls: function (e, t) {
            var n = this, i = e.attr("ss"), o = n.config.currentCls || "current", r = n.config.expandCls || "expand";
            n.config.sugSelector.find("li." + o).removeClass(o), e.addClass(o), 1 == i && (n.config.sugSelector.find("li." + r).removeClass(r), e.addClass(r)), e.find("img").each(function (e, t) {
                var n = $(t);
                n.attr("src") || setTimeout(function () {
                    n.attr("src", n.attr("ll_src"))
                }, 0)
            })
        }, setVal: function (e) {
            e.attr("act");
            this.config.inputBox.val(e.find(".result_title").text())
        }, initExtEvent: function () {
            var e = this;
            this.config.sugSelector.delegate("li a[nopropagation]", "click", function (t) {
                t.stopPropagation();
                var n = $(this).attr("data-reporttype");
                e.dataReport(this, n), e.hideSelector()
            }), this.config.sugSelector.delegate("li a.btn_ticket", "click", function (t) {
                t.stopPropagation(), e.dataReport(this, "ticket"), e.hideSelector()
            }), this.config.sugSelector.delegate("li a.btn_tips", "click", function (t) {
                t.stopPropagation(), e.dataReport(this, "ticket"), e.hideSelector()
            })
        }, dataReport: function (e, t) {
            var n = this, i = $(e), o = n.config.sugSelector.find("li:eq(" + n.selectedIndex + ")"), t = t || "normal", r = {
                normal: 1,
                ticket: 101,
                live: 102
            }, a = {
                qid: "",
                action: 101,
                ival1: n.selectedIndex + 1,
                ival2: r[t],
                ival7: n.flag.isMix ? 11 : 10,
                sval: "self",
                sval1: encodeURIComponent(n.smartWord),
                sval2: encodeURIComponent(o.find(".result_title").text()),
                sval3: encodeURIComponent(i.attr("href")),
                platform: "10201",
                ctime: "",
                curl: encodeURIComponent(location.href)
            }, l = [];
            l.push(s);
            for (var u in a)l.push(u, "=", a[u], "&");
            l.push("_t=" + (new Date).valueOf());
            var p = new Image;
            p.onload = p.onerror = p.onabort = c, p.src = l.join("")
        }
    }), e.exports = i
}, function (e, t, n) {
    function i(e) {
        r.call(this, e), this.hotkeyObj = {
            go: "search.minisearch",
            smartBox: "search.minismartbox",
            hotwordtj2: "search.minihotword",
            smartBoxStag: "txt.smart_slide",
            defaultStag: "txt.slide",
            hotwordStag: "txt.slide_hotword"
        }
    }

    var o = n(67), r = n(68);
    o.extend(r, i), $.extend(i.prototype, {}), e.exports = i
}, function (e, t, n) {
    var i = n(71), o = n(72), r = n(73), a = n(74), s = "//ncgi.video.qq.com/report/search?", c = function () {
    }, l = {
        init: function () {
            window.console || (window.console = {
                log: function () {
                }
            });
            var e = this;
            l.initEvent(), $.ajax({
                url: ["//v.qq.com/json/searchcfg/search_keyword.js?v=", Math.floor((new Date).getTime() / 6e5)].join(""),
                dataType: "jsonp",
                jsonpCallback: "SearchWordCallback20151104",
                cache: !0
            }).done(function (t) {
                e.defaultWord = t.search_word, $("#keywords").attr({value: t.search_word, placeholder: t.search_word})
            })
        }, initEvent: function () {
            var e = this;
            $(document).on("keyup", "#keywords", function (t) {
                t.preventDefault(), e.getSmartList(t, $(this))
            }).on("focus", "#keywords", function (t) {
                t.preventDefault(), e.checkKeyword(t, $(this))
            }).on("blur", "#keywords", function (t) {
                t.preventDefault(), e.losesFocus()
            }), $("#smartbox").on("click", ".sb_item", function (t) {
                e.searchWord($(this), t)
            }).on("mouseover", ".sb_item", function (t) {
                t.preventDefault(), e.overThis($(this))
            }).on("mouseout", ".sb_item", function (t) {
                t.preventDefault(), e.outThis($(this))
            }).on("click", ".sb_del", function (t) {
                t.preventDefault(), e.clearHistory()
            }), $("#searchForm").on("click", "button", function (t) {
                t.preventDefault(), e.jumpToNewSearch()
            })
        }, getSearchHistory: function () {
            if (window.localStorage) {
                var e = localStorage.getItem("searchHistory");
                return e = e ? JSON.parse(e) : []
            }
            return []
        }, setSearchHistory: function (e, t) {
            if (window.localStorage) {
                if (e = $.trim(e), t.constructor != Array || !e)return;
                for (var n = 0; n < t.length; n++)e == t[n].word && t.splice(n, 1);
                t.unshift({word: e}), t.length > 10 && t.pop(), localStorage.setItem("searchHistory", JSON.stringify(t))
            }
        }, getAjaxData: function (e) {
            var t = $.Deferred();
            return $.ajax({
                url: "//s.video.qq.com/smartbox",
                dataType: "jsonp",
                data: {plat: 2, ver: 0, num: 10, otype: "json", query: e}
            }).done(function (e) {
                t.resolve(e)
            }).fail(function () {
            }), t.promise()
        }, getHotList: function () {
            var e = $.Deferred();
            return $.ajax({
                url: "//data.video.qq.com/fcgi-bin/dataout",
                dataType: "jsonp",
                data: {auto_id: 938, otype: "json"}
            }).done(function (t) {
                e.resolve(t)
            }).fail(function () {
            }), e.promise()
        }, getSmartList: function (e, t) {
            var n = this, i = t.val();
            if (38 == e.keyCode)n.tapUp(); else if (40 == e.keyCode)n.tapDown(); else if (13 != e.keyCode && n.setReportParams({
                    stag: 0,
                    smartbox_ab: ""
                }), $.trim(i))n.showHistory = !1, n.timer && clearTimeout(n.timer), n.timer = setTimeout(function () {
                $.trim(i) && n.compileSmartList(i)
            }, 300), 13 == e.keyCode && n.jumpToNewSearch(); else {
                if (n.showHistory)return;
                n.showHistory = !0, n.showLayer = !0, setTimeout(function () {
                    n.compileHistoryList()
                }, 50)
            }
        }, tapUp: function () {
            var e = this;
            if (e.showingBox) {
                if ("recommend" == e.showingBox) {
                    var t = $("#smartbox").find(".current"), n = $("#smartbox").find(".sb_item");
                    if (n.removeClass("expand"), t.size() > 0) {
                        var i = t.removeClass("current").prev();
                        i.size() > 0 ? i.addClass("current") : n.filter(":last").addClass("current")
                    } else n.filter(":last").addClass("current")
                } else if ("history" == e.showingBox) {
                    var t = $("#smartbox").find(".current"), o = $(".sb_history").find(".sb_item"), r = $(".sb_hot").find(".sb_item");
                    if (t.size() > 0) {
                        var i = t.removeClass("current").prev();
                        if (i.size() > 0)i.addClass("current"); else {
                            var a = t.parent().parent().attr("class");
                            "sb_history" == a ? r.size() > 0 ? r.filter(":last").addClass("current") : o.filter(":last").addClass("current") : "sb_hot" == a && (o.size() > 0 ? o.filter(":last").addClass("current") : r.filter(":last").addClass("current"))
                        }
                    } else r.size() > 0 ? r.filter(":last").addClass("current") : o.size() > 0 && o.filter(":last").addClass("current")
                }
                e.setReportParams({
                    stag: $("#smartbox").find(".current").data("stag"),
                    smartbox_ab: $("#smartbox").find(".current").data("abresult")
                }), $("#keywords").val($("#smartbox").find(".current").data("word"))
            }
        }, tapDown: function () {
            var e = this;
            if (e.showingBox) {
                if ("recommend" == e.showingBox) {
                    var t = $("#smartbox").find(".current"), n = $("#smartbox").find(".sb_item");
                    if (n.removeClass("expand"), t.size() > 0) {
                        var i = t.removeClass("current").next();
                        i.size() > 0 ? i.addClass("current") : n.filter(":first").addClass("current")
                    } else n.filter(":first").addClass("current")
                } else if ("history" == e.showingBox) {
                    var t = $("#smartbox").find(".current"), o = $(".sb_history").find(".sb_item"), r = $(".sb_hot").find(".sb_item");
                    if (t.size() > 0) {
                        var i = t.removeClass("current").next();
                        if (i.size() > 0)i.addClass("current"); else {
                            var a = t.parent().parent().attr("class");
                            "sb_history" == a ? r.size() > 0 ? r.filter(":first").addClass("current") : o.filter(":first").addClass("current") : "sb_hot" == a && (o.size() > 0 ? o.filter(":first").addClass("current") : r.filter(":first").addClass("current"))
                        }
                    } else o.size() > 0 ? o.filter(":first").addClass("current") : r.size() > 0 && r.filter(":first").addClass("current")
                }
                e.setReportParams({
                    stag: $("#smartbox").find(".current").data("stag"),
                    smartbox_ab: $("#smartbox").find(".current").data("abresult")
                }), $("#keywords").val($("#smartbox").find(".current").data("word"))
            }
        }, compileSmartList: function (e) {
            var t = this;
            t.cache = t.cache || {}, t.cache[e] ? t.buildSmartList(t.cache[e]) : $.when(t.getAjaxData(e)).then(function (n) {
                t.buildSmartList(n), t.cache[e] = n
            })
        }, buildSmartList: function (e) {
            var t = this;
            if (e.head && 0 == e.head.error && e.item && !t.showHistory && t.showLayer) {
                for (var n = 1, o = 0, r = e.item.length; r > o; o++)1 == e.item[o].ss && n ? (e.item[o].firstRich = 1, n = 0) : e.item[o].firstRich = 0, e.head.ab_result && (e.item[o].ab_result = e.head.ab_result);
                var a = i({list: e.item});
                $("#smartbox").html(a).removeClass("none"), t.showingBox = "recommend"
            }
        }, overThis: function (e) {
            var t = this;
            t.smartboxShowing = !0, e.addClass("current"), $("#smartbox").find(".sb_item_rich").removeClass("expand")
        }, outThis: function (e) {
            var t = this;
            t.smartboxShowing = !1, $("#smartbox").find(".sb_item").removeClass("current")
        }, searchWord: function (e, t) {
            var n = this, i = e.data("word");
            return n.losesFocus(!0), t.target && t.target.href && t.target.target && "" == t.target.target ? void n.dataReport($(t.target)) : ($("#keywords").val(i), n.setReportParams({
                stag: e.data("stag"),
                smartbox_ab: e.data("abresult")
            }), void n.jumpToUrl())
        }, setReportParams: function (e) {
            $('[name="stag"]').val(e.stag), $('[name="smartbox_ab"]').val(e.smartbox_ab)
        }, jumpToNewSearch: function () {
            var e = this, t = $("#keywords").val();
            e.jumpToUrl(t)
        }, jumpToUrl: function (e) {
            var t = this, n = t.getSearchHistory();
            !$("#keywords").val() && $("#keywords").val(t.defaultWord), t.setSearchHistory($("#keywords").val(), n), $("#keywords").val() == t.defaultWord && t.setReportParams({
                stag: 7,
                smartbox_ab: ""
            }), $("#searchForm").submit()
        }, compileHistoryList: function () {
            var e, t = this, n = t.getSearchHistory();
            t.showLayer && (n && n.length > 0 ? (e = a(o, {list: n}), $("#smartbox").html(e).removeClass("none")) : $("#smartbox").html(""), t.cache = t.cache || {}, t.cache.history ? t.buildHistoryList(t.cache.history, n) : $.when(t.getHotList()).then(function (e) {
                t.buildHistoryList(e, n), t.cache.history = e
            }), t.showingBox = "history")
        }, buildHistoryList: function (e, t) {
            if (0 == e.returncode) {
                var n = e.words.slice(0, 10 - Math.ceil(t.length / 2)), i = r({list: n});
                $("#smartbox").append(i).removeClass("none")
            }
        }, checkKeyword: function (e, t) {
            var n = this;
            t.val() == n.defaultWord && t.val(""), t.val() ? (n.showLayer = !0, n.getSmartList(e, t)) : (n.showLayer = !0, setTimeout(function () {
                n.compileHistoryList(e, t)
            }, 50))
        }, losesFocus: function (e) {
            var t = this;
            t.smartboxShowing && !e || (t.showLayer = !1, setTimeout(function () {
                $("#smartbox").addClass("none"), t.showHistory = !1, t.showingBox = ""
            }, 150))
        }, clearHistory: function () {
            var e = this;
            e.losesFocus(!0), localStorage.setItem("searchHistory", "")
        }, dataReport: function (e) {
            var t = {1: 1, 5: 102}, n = {
                qid: "",
                action: 101,
                ival1: Number(e.data("index")) + 1,
                ival2: t[e.data("itemtype")],
                ival7: 11,
                sval: "self",
                sval1: encodeURIComponent($("#keywords").val()),
                sval2: encodeURIComponent(e.data("word")),
                sval3: encodeURIComponent(e.attr("href")),
                platform: "10201",
                ctime: "",
                curl: encodeURIComponent(location.href)
            }, i = [];
            i.push(s);
            for (var o in n)i.push(o, "=", n[o], "&");
            i.push("_t=" + (new Date).valueOf());
            var r = new Image;
            r.onload = r.onerror = r.onabort = c, r.src = i.join("")
        }
    };
    e.exports = l
}, function (module, exports) {
    module.exports = function (d) {
        with (d)return '<div class="sb_suggest">\n    ' + (d.list || []).map(function (e, t) {
                return "\n        " + (function () {
                        return 1 == e.ss ? '\n            <div class="sb_item sb_item_rich' + (function () {
                            return e.firstRich ? " expand" : void 0
                        }() || "") + '" data-word="' + e.word + '" data-stag="2" data-abresult="' + (e.ab_result || "") + '">\n                <a href="javascript:;" class="sb_title"><span class="sb_hl">' + e.title + '</span><span class="sb_sub"> ' + e["class"] + '</span></a>\n                <span class="sb_fold_sign"><i class="iconfont arrow_down">顦€</i><i class="iconfont arrow_up">顦�</i></span>	\n                <div class="sb_richbox">\n                    <a href="javascript:;" class="sb_link">\n                        <img class="sb_pic" src="' + (function () {
                            return e.dc ? "" + e.dc : "http://i.gtimg.cn/qqlive/images/20150608/pic_h.png"
                        }() || "") + '">\n                    </a>\n                    ' + (function () {
                            return 3 != e.idType ? "\n                        " + (function () {
                                return e.ex && e.ex.title ? '\n                            <span class="sb_desc">' + e.ex.title + "</span>\n                        " : void 0
                            }() || "") + "\n                        " + (function () {
                                return e.pa ? '\n                            <span class="sb_desc">涓绘紨锛�' + e.pa + "</span>\n                        " : void 0
                            }() || "") + '\n                        <a href="' + e.url + '" target="" class="sb_btn" data-index="' + t + '" data-word="' + e.word + '" data-itemtype="' + e.itemType + '">绔嬪嵆鎾斁</a>\n                    ' : 3 == e.idType && e.ex && e.ex.pl && e.ex.pl.length > 0 ? "\n                        " + (e.ex.pl || []).map(function (t, n) {
                                return "\n                            " + (function () {
                                        return 2 > n ? '\n                                <a href="' + t.u + '" target="" class="sb_list" data-index="' + n + '" data-word="' + e.word + '" data-itemtype="' + e.itemType + '">' + t.en + " " + t.ti + "</a>\n                                " + (function () {
                                            return 0 == n ? "\n                                    <pangu> </pangu>\n                                " : void 0
                                        }() || "") + "\n                            " : void 0
                                    }() || "") + "\n                        "
                            }).join("") + "\n                    " : void 0
                        }() || "") + "\n                </div>\n            </div>\n        " : '\n            <div class="sb_item" data-word="' + e.word + '" data-stag="2" data-abresult="' + (e.ab_result || "") + '">\n                <a href="javascript:;" class="sb_title" data-word="' + e.word + '"><span class="sb_hl">' + e.title + "</span></a>\n            </div>\n        "
                    }() || "") + "\n    "
            }).join("") + "\n</div>\n"
    }
}, function (module, exports) {
    module.exports = function (d) {
        with (d)return '<div class="sb_history">\n    <div class="sb_head">\n        <div class="sb_title">鍘嗗彶绾綍</div>\n        <div class="sb_tools">\n            <a href="javascript:;" class="sb_del" title="娓呴櫎鎼滅储绾綍"><i class="iconfont icon_trash">醼�</i><span class="icon_text">娓呴櫎璁板綍</span></a>\n        </div>\n    </div>\n    <div class="sb_body">\n        ' + (d.list || []).map(function (e, t) {
                return '\n            <div class="sb_item" data-word="' + _(e.word) + '" data-stag="102" data-abresult=""><a href="javascript:;" title="' + _(e.word) + '" data-word="' + _(e.word) + '">' + _(e.word) + "</a></div>\n        "
            }).join("") + "\n    </div>\n</div>\n"
    }
}, function (module, exports) {
    module.exports = function (d) {
        with (d)return '<div class="sb_hot">\n    <div class="sb_head">\n        <div class="sb_title">鐑棬鎼滅储</div>\n    </div>\n    <div class="sb_body">\n        ' + (d.list || []).map(function (e, t) {
                return '\n            <div class="sb_item sb_item_' + e.c_pos + '" data-word="' + e.c_title + '" data-stag="101" data-abresult=""><a href="javascript:;" title="' + e.c_title + '" data-word="' + e.c_title + '" r-on="{click : searchWord}"><span class="sb_num">' + e.c_pos + '</span><span class="sb_name">' + e.c_title + "</span></a></div>\n        "
            }).join("") + "\n    </div>\n</div>"
    }
}, function (e, t, n) {
    var i = n(75), o = {}, r = function (e, t, n) {
        var r = $.extend(i.escape, o, n);
        return e($.extend({}, t, {_: r}))
    };
    r.helper = function (e, t) {
        return o[e] = t, this
    }, r.helpers = function (e) {
        return i.extend(o, e), this
    }, e.exports = r
}, function (e, t) {
    e.exports = {
        escape: function (e) {
            return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        }
    }
}, function (e, t, n) {
    !function (t, n) {
        e.exports = n()
    }(this, function () {
        return function (e) {
            function t(i) {
                if (n[i])return n[i].exports;
                var o = n[i] = {exports: {}, id: i, loaded: !1};
                return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";
            function i(e) {
                if (window.PLAYER)return e(window.PLAYER);
                if (a)return f.on("playerReady", e);
                a = !0;
                var t = setInterval(function () {
                    window.PLAYER && (clearInterval(t), e(window.PLAYER), f.emit("playerReady", window.PLAYER))
                }, 200)
            }

            var o, r, a, s = n(1), c = n(3), l = n(5), u = n(7), p = n(10), f = new p, d = n(8), g = n(11), h = new g({
                local: !0,
                namespace: "viptips"
            }), v = !1, m = 0;
            e.exports = {
                init: function () {
                    if (!v && (v = !0, "v.qq.com" == location.hostname && (/^\/x\/(cover|page)\//.test(location.pathname) || "/" == location.pathname || "/index.html" == location.pathname) && txv.login.isLogin())) {
                        var e = this, t = $("#mod_head_user");
                        $("body").append(s, c), t.append(l);
                        var n = t.find("._viptips_vTips");
                        $("#mod_head_notice_trigger").hover(function () {
                            "block" == n.css("display") && (n.hide(), f.emit("hideVtip"))
                        }), $("<link>").attr({
                            rel: "stylesheet",
                            type: "text/css",
                            href: "//vm.gtimg.cn/tencentvideo/vstyle/web/common/style/x_achievement_tips.css"
                        }).appendTo($("head"));
                        var o = $("._viptips_bTips"), r = $("._viptips_gift_coupon"), a = o.find("._bTips_closeBtn"), p = r.find("._coupons_closeBtn"), g = r.find("._viptips_gift_reload"), y = o.find("._viptips_bTips_exchange"), _ = n.find("._viptips_vTips_exGift");
                        n.hover(function (e) {
                            e.stopPropagation()
                        }), a.on("click", function () {
                            o.hide()
                        }), p.on("click", function () {
                            r.hide();
                            var e = setTimeout(function () {
                                o.hide()
                            }, 1e4);
                            f.on("couponShow", function () {
                                clearTimeout(e)
                            })
                        }), y.on("click", d.bind(this.showGift, this)), g.on("click", d.bind(this.reload, this)), _.on("click", function () {
                            e.boss(15)
                        });
                        var b;
                        b = txv.login.getUin() ? txv.login.getUin() : (txv.login.getWxAuthCookies() || {}).vuserid;
                        var x = "vflag_" + b, w = "flag_" + b, k = h.get(x) || 0, C = h.get(w) || 0, T = h.get("day");
                        (e.getDateString() > T || null === T) && (h.set(w, C = 0), h.set(x, k = 0)), h.set("day", e.getDateString()), C >= 1 && k >= 3 || u("//buy.video.qq.com/fcgi-bin/paycheck?otype=json&cmd=59853&pf=qq_m_qq-2001-html5-2011&coin_type=2&platform=2", function (t, r) {
                            var a = "";
                            if (r.myProperty && r.myProperty.length > 0 && (a = r.myProperty[0].propertyCount, i(function (t) {
                                    t.on("adStart", function () {
                                        txv.vip.getVipInfo().done(function (t) {
                                            t && 0 == t.vip && 0 == C && e.lookup(function (t) {
                                                var i = t.vcoin;
                                                a >= i && (o.find("._viptips_show_vcoins").html(i), o.find("._count").html(a), "block" == n.css("display") ? f.on("hideVtip", d.bind(e.showTips, e)) : e.showTips(), h.set(w, 1))
                                            })
                                        })
                                    })
                                }), 1 != m)) {
                                var s = h.get(b);
                                if (s && a > s && 3 > k) {
                                    var c = a - s;
                                    n.find("._vTips_gain").html(c), n.show(), h.set(x, ++k), e.boss(14), setTimeout(function () {
                                        n.hide(), f.emit("hideVtip")
                                    }, 5e3)
                                }
                                h.set(b, a)
                            }
                        })
                    }
                }, showTips: function () {
                    var e = $("._viptips_bTips"), t = $("._viptips_gift_coupon");
                    if (e.show(), m = 1, this.boss(11), "none" == t.css("display")) {
                        var n = setTimeout(function () {
                            e.hide()
                        }, 1e4);
                        f.on("couponShow", function () {
                            clearTimeout(n)
                        })
                    }
                }, getDateString: function () {
                    var e = +new Date / 864e5;
                    return Math.floor(e)
                }, getRefId: function (e) {
                    var t = {1009: "3", 1010: "4", 1008: "5", 1007: "6", 1012: "7", 1013: "8", 4001: "11", 4002: "12"};
                    return t[e]
                }, reload: function () {
                    this.boss(13);
                    var e = o + ":1", t = this.getRefId(o);
                    u("//buy.video.qq.com/fcgi-bin/unipay?cmd=59856&pf=qq_m_qq-2001-html5-2011", {
                        sc_type: 100001,
                        otype: "json",
                        subsc_type: 0,
                        ac_id: 110016,
                        pro_type: 0,
                        platform: 2,
                        pro_item: e,
                        ref_id: t
                    }, function (e, t) {
                        t && 0 == t.ret && location.reload()
                    })
                }, showGift: function () {
                    if (r) {
                        var e = $("._viptips_gift_coupon");
                        e.find(".viptips_gift_title").html(r.title), e.find(".viptips_gift_vcoin").html(r.vcoin), e.find(".viptips_gift_pic").attr("src", r.url_pic), e.show(), f.emit("couponShow"), this.boss(12)
                    } else this.lookup(this.showGift)
                }, lookup: d.lock(function (e, t) {
                    var n = this;
                    u("//sns.video.qq.com/fcgi-bin/dlib/dataout?auto_id=2301&pid=0&otype=json", function (i, a) {
                        if (a && a.root && a.root[0] && a.root[0].product_id) {
                            o = a.root[0].product_id;
                            var s = "//task.video.qq.com/fcgi-bin/gift_info?giftid=" + o + "&platform=10&otype=json";
                            u(s, function (i, o) {
                                o && "0" == o.ret && (r = o.gift[0], e(), t && t.call(n, o.gift[0]))
                            })
                        }
                    })
                }), boss: function (e) {
                    var t = "//btrace.qq.com/kvcollect?BossId=3809&Pwd=1896006998", n = {
                        url: location.href,
                        uin: txv.login.getUin() || "",
                        openid: txv.login.getWxAuthCookies() ? txv.login.getWxAuthCookies().openid : "",
                        target: e || ""
                    }, i = [];
                    for (var o in n)n.hasOwnProperty(o) && i.push(o + "=" + encodeURIComponent(n[o]));
                    var r = t + i.join("&"), a = new Image(1, 1);
                    a.src = r
                }
            }
        }, function (e, t, n) {
            e.exports = n(2)
        }, function (e, t) {
            e.exports = '<!-- tip -->\r\n<div class="x_achievement_tips x_achievement_tips_side _viptips_bTips" style="z-index:200;right:500px;top:100px;">\r\n	<iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe>\r\n	<div class="prop_main">\r\n		<i class="prop_arrow"></i>\r\n		<a href="javascript:;" class="btn_close _bTips_closeBtn" title="鍏抽棴"></a>\r\n		<div class="title"><span class="_viptips_show_vcoins">300</span> V甯佸彲浠ュ厬鎹� VIP浼氬憳<span class="keyword">鍏嶅箍鍛�</span>鍝</div>\r\n		<div class="txt cf">\r\n			<span class="desc">浣犳嫢鏈� <em class="_count"></em> V甯�</span>\r\n			<div class="x_achievement_btn_control">\r\n		        <a href="javascript:;" class="mod_btn _viptips_bTips_exchange">绔嬪嵆鍏戞崲</a>\r\n		    </div>\r\n		</div>\r\n	</div>\r\n	<div class="icon_videomm"></div>\r\n</div>\r\n\r\n<!--  -->'
        }, function (e, t, n) {
            e.exports = n(4)
        }, function (e, t) {
            e.exports = '<div class="x_achievement_tips x_achievement_tips_prop _viptips_gift_coupon">\r\n	<iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe>\r\n	<div class="prop_main">\r\n		<a href="javascript:;" class="btn_close _coupons_closeBtn" title="鍏抽棴"></a>\r\n		<h2 class="title viptips_gift_title">鑵捐瑙嗛VIP1澶╀綋楠屽埜</h2>\r\n		<div class="txt">\r\n			<p class="desc">\r\n				鑺辫垂 <span class="keyword viptips_gift_vcoin">300</span> <i class="icon_vcoin_m"></i>\r\n			</p>\r\n		</div>\r\n		<div class="prize_wrap">\r\n			<span class="helper"></span>\r\n			<img class="prize viptips_gift_pic" src="//i.gtimg.cn/qqlive/images/20160718/i1468924503_1.jpg" alt="">\r\n		</div>\r\n		<div class="user_control">\r\n			<div class="x_achievement_btn_control">\r\n		        <a href="javascript:;" class="mod_btn gift_status_name _viptips_gift_reload">绔嬪嵆鍏戞崲</a>\r\n		    </div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'
        }, function (e, t, n) {
            e.exports = n(6)
        }, function (e, t) {
            e.exports = '<!--鎴愰暱浣撶郴鑾峰緱V甯� 寮€濮�-->\r\n<div class="mod_quick_pop mod_pop_user_achievement _viptips_vTips" style="display:none;">\r\n    <div class="quick_pop_inner">\r\n        <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>\r\n        <iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe>\r\n        <div class="pop_info_content">\r\n            <div class="quick_pop_vbtips">\r\n                <p class="desc">\r\n                    宸插畬鎴愪换鍔�+<span class="_vTips_gain"></span>V甯侊紝蹇幓 \r\n                    <a href="//v.qq.com/u/wallet/" class="keyword _viptips_vTips_exGift" target="">鍏戞崲绀煎搧</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--鎴愰暱浣撶郴鑾峰緱V甯� 缁撴潫-->'
        }, function (e, t, n) {
            "use strict";
            function i() {
            }

            function o() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function r(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function a(e, t, n) {
                var a;
                if ("object" == typeof t && (a = t, t = n, n = arguments[3]), a = a || {}, "function" != typeof t)throw Error("illegal jsonp callback function:", t);
                n = n || {}, t = t || i;
                var g = document.getElementsByTagName("head") ? document.getElementsByTagName("head")[0] : document.body, h = document.createElement("script"), v = [n.ns || l, p++, o()].join("_"), m = !0, y = "_t", _ = n.time;
                n.callbackid && (v = n.callbackid), _ === !1 ? m = !1 : _ && (y = _), a[n.pn || n.callbackName || u] = v, m && (a[y] = +new Date);
                var b = function (e) {
                    r(h), t(null, e)
                }, x = function (e) {
                    r(h), t(e || "error"), window[v] = b = x = i
                };
                window[v] = function (e) {
                    b(e), window[v] = b = x = i
                }, h.onerror = h.onabort = function (e) {
                    x(e ? e.type : "error")
                }, s.forEach(d, function (t) {
                    "function" == s.type(t) && (e = t(e, a) || e)
                }), h.src = c.queryJoin(e, a), g.appendChild(h), setTimeout(function () {
                    x("timeout")
                }, n.timeout || f)
            }

            var s = n(8), c = n(9), l = "_jsonp", u = "callback", p = 0, f = 2e4, d = [];
            a.timeout = function (e) {
                f = e
            }, a.ns = function (e) {
                l = e
            }, a.pn = function (e) {
                u = e
            }, a.before = function (e) {
                d.push(e)
            }, e.exports = a
        }, function (e, t) {
            "use strict";
            function n(e, t) {
                return e && e.hasOwnProperty && e.hasOwnProperty(t)
            }

            var i = void 0, o = {
                escape: function (e) {
                    return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
                }, type: function (e) {
                    if (null === e)return "null";
                    if (e === i)return "undefined";
                    var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
                    return t ? t[1].toLowerCase() : ""
                }, keys: function (e) {
                    var t = [];
                    return e ? Object.keys ? Object.keys(e) : (this.objEach(e, function (e) {
                        t.push(e)
                    }), t) : t
                }, bind: function (e, t) {
                    return e.bind ? e.bind(t) : function () {
                        return e.apply(t, arguments)
                    }
                }, extend: function (e) {
                    if ("object" != this.type(e) && "function" != this.type(e))return e;
                    for (var t, i, o = 1, r = arguments.length; r > o; o++) {
                        t = arguments[o];
                        for (i in t)n(t, i) && (e[i] = t[i])
                    }
                    return e
                }, trim: function (e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
                }, indexOf: function (e, t) {
                    if (e.indexOf)return e.indexOf(t);
                    var n = -1;
                    return o.some(e, function (e, i) {
                        return e === t ? (n = i, !0) : void 0
                    }), n
                }, forEach: function (e, t) {
                    if (e.forEach)return e.forEach(t);
                    for (var n = e.length, i = 0; n > i; i++)t(e[i], i);
                    return e
                }, some: function (e, t) {
                    if (e.some)return e.some(t);
                    for (var n = e.length, i = !1, o = 0; n > o; o++)if (t(e[o], o)) {
                        i = !0;
                        break
                    }
                    return i
                }, map: function (e, t) {
                    if (e.map)return e.map(t);
                    for (var n = e.length, i = [], o = 0; n > o; o++)i.push(t(e[o], o));
                    return i
                }, objEach: function (e, t) {
                    if (e)for (var i in e)if (n(e, i) && t(i, e[i]) === !1)break
                }, reduce: function (e, t) {
                    if ("function" != o.type(t))throw new TypeError("Array.prototype.reduce callback must be a function");
                    var n = e.length;
                    if (0 === n && 2 === arguments.length)throw new TypeError("reduce of empty array with no initial value");
                    var i, r = n - 1;
                    if (arguments.length >= 3)i = arguments[2]; else for (; ;) {
                        if (r in e) {
                            i = e[r--];
                            break
                        }
                        if (--r < 0)throw new TypeError("reduceRight of empty array with no initial value")
                    }
                    if (0 > r)return i;
                    do r in e && (i = t(i, e[r], r, e)); while (r--);
                    return i
                }, filter: function (e, t, n) {
                    if (e.filter)return e.filter(t);
                    for (var i = e.length, o = [], r = 0; i > r; r++) {
                        var a = e[r];
                        t.call(n, a, r, e) && o.push(a)
                    }
                    return o
                }, lock: function (e) {
                    var t;
                    return function () {
                        if (!t) {
                            t = !0;
                            var n = [].slice.call(arguments, 0);
                            n.unshift(function () {
                                t = !1
                            }), e.apply(this, n)
                        }
                    }
                }, once: function (e) {
                    var t, n = arguments;
                    return function () {
                        return !t && e ? (t = !0, e.apply(n.length >= 2 ? n[1] : null, arguments)) : void 0
                    }
                }
            };
            e.exports = o
        }, function (e, t, n) {
            "use strict";
            var i = n(8), o = {
                queryParse: function (e, t) {
                    if (!e)return {};
                    t = t || "&";
                    var n = e.replace(/^\?/, ""), o = {}, r = n ? n.split(t) : null;
                    return r && r.length > 0 && i.forEach(r, function (e) {
                        e = e.split("=");
                        var t = e.splice(0, 1), n = e.join("=");
                        o[t] = n
                    }), o
                }, queryJoin: function (e, t) {
                    var n = o.queryStringify(t);
                    if (!n)return e;
                    var i;
                    return i = /[\?&]$/.test(e) ? "" : ~e.indexOf("?") ? "&" : "?", e + i + n
                }, queryStringify: function (e, t) {
                    return e ? i.map(i.keys(e), function (t) {
                        return t + "=" + encodeURIComponent(e[t])
                    }).join(t || "&") : ""
                }
            };
            e.exports = o
        }, function (e, t, n) {
            "use strict";
            function i() {
                this._evtObjs = {}
            }

            function o() {
            }

            var r = n(8), a = {};
            i.prototype.on = function (e, t, n) {
                this._evtObjs[e] || (this._evtObjs[e] = []), this._evtObjs[e].push({handler: t, once: n});
                var i = this;
                return function () {
                    i.off(e, t)
                }
            }, i.prototype.wait = function (e, t) {
                return a[e] ? (t.apply(null, a[e]), o) : this.on(e, t, !0)
            }, i.prototype.off = function (e, t) {
                var n, i = this;
                return n = e ? [e] : r.keys(this._evtObjs), r.forEach(n, function (e) {
                    if (t) {
                        var n = i._evtObjs[e] || [], o = [];
                        r.forEach(n, function (e) {
                            e.handler !== t && o.push(e)
                        }), i._evtObjs[e] = o
                    } else i._evtObjs[e] = []
                }), this
            }, i.prototype.emit = function (e) {
                var t = Array.prototype.slice.call(arguments, 1);
                a[e] = t;
                var n = this._evtObjs[e] || [];
                r.forEach(n, function (e) {
                    e.once && e.called || (e.called = !0, e.handler && e.handler.apply(null, t))
                })
            }, i.prototype.emitAsync = function () {
                var e = arguments, t = this;
                setTimeout(function () {
                    t.emit.apply(t, e)
                }, 0)
            };
            var s = new i;
            i.on = function () {
                return s.on.apply(s, arguments)
            }, i.off = function () {
                return s.off.apply(s, arguments)
            }, i.wait = function () {
                return s.wait.apply(s, arguments)
            }, i.emit = function () {
                return s.emit.apply(s, arguments)
            }, i.emitAsync = function () {
                return s.emitAsync.apply(s, arguments)
            }, e.exports = i
        }, function (e, t, n) {
            "use strict";
            function i() {
            }

            function o() {
            }

            function r() {
            }

            var a, s, c = n(8), l = {}, u = {}, p = Object.prototype.toString;
            a = "localStorage"in window && null !== window.localStorage, s = "sessionStorage"in window && null !== window.sessionStorage;
            try {
                a && window.localStorage.setItem("_store_detection_test_", "hasLocal")
            } catch (f) {
                a = !1
            }
            try {
                s && window.sessionStorage.setItem("_store_detection_test_", "hasLocal")
            } catch (f) {
                s = !1
            }
            i.prototype = {
                get: function (e) {
                    return localStorage.getItem(e)
                }, set: function (e, t) {
                    localStorage.setItem(e, t)
                }, remove: function (e) {
                    localStorage.removeItem(e)
                }, keys: function () {
                    return Object.keys(localStorage)
                }
            }, o.prototype = {
                get: function (e) {
                    return sessionStorage.getItem(e)
                }, set: function (e, t) {
                    sessionStorage.setItem(e, t)
                }, remove: function (e) {
                    sessionStorage.removeItem(e)
                }, keys: function () {
                    return Object.keys(sessionStorage)
                }
            }, r.prototype = {
                get: function (e) {
                    return l[e]
                }, set: function (e, t) {
                    l[e] = t
                }, remove: function (e) {
                    delete l[e]
                }, keys: function () {
                    return Object.keys(l)
                }
            };
            var d = function (e) {
                e = e || {}, e.local && a ? this.storage = new i : e.local && !a || e.session && s ? this.storage = new o : this.storage = new r, this.namespace = e.namespace ? e.namespace + "_" : "", this.expire = e.expire, this.removeExpired()
            };
            d.prototype = {
                get: function (e) {
                    e = this.namespace + (e || "");
                    var t, n = this.storage.get(e);
                    try {
                        t = JSON.parse(n)
                    } catch (i) {
                        t = n
                    }
                    if (t) {
                        if ("[object Object]" != p.call(t) || !("expire"in t) || t.expire > (new Date).getTime())return t.data;
                        this.remove(e)
                    }
                    return null
                }, set: function (e, t, n) {
                    e = this.namespace + (e || ""), n = this.expire || n;
                    var i = {data: t};
                    n > 0 && (i.expire = (new Date).getTime() + 1e3 * n), this.storage.set(e, JSON.stringify(i))
                }, remove: function (e) {
                    e = this.namespace + (e || ""), this.storage.remove(e)
                }, removeExpired: function () {
                    var e = this, t = "";
                    this.storage instanceof i ? t = "LS" : this.storage instanceof o ? t = "Session" : this.storage instanceof r && (t = "Memory"), t && !u[t] && (u[t] = !0, setTimeout(function () {
                        try {
                            c.forEach(e.storage.keys(), function (t) {
                                var n = e.storage.get(t);
                                try {
                                    n = JSON.parse(n)
                                } catch (i) {
                                    return
                                }
                                n && "[object Object]" == p.call(n) && "expire"in n && n.expire <= (new Date).getTime() && e.storage.remove(t)
                            }), u[t] = !1
                        } catch (n) {
                            console.log("[Store] removeExpired error:", n)
                        }
                    }, 6e4))
                }
            }, e.exports = d
        }])
    })
}]);