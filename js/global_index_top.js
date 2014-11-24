/* SVN.committedRevision=433900 */
(function(Y, ce) {
    function F() {
        if (!c.isReady) {
            try {
                ca.documentElement.doScroll("left")
            } catch(a) {
                setTimeout(F, 1);
                return
            }
            c.ready()
        }
    }
   
    function bQ(g, d, b, h, a, i) {
        var f = g.length;
        if (typeof d === "object") {
            for (var e in d) {
                bQ(g, e, d[e], h, a, b)
            }
            return g
        }
        if (b !== ce) {
            h = !i && h && c.isFunction(b);
            for (e = 0; e < f; e++) {
                a(g[e], d, h ? b.call(g[e], e, a(g[e], d)) : b, i)
            }
            return g
        }
        return f ? a(g[0], d) : ce
    }
    function P() {
        return (new Date).getTime()
    }
    function bR() {
        return false
    }
    function bU() {
        return true
    }
    function cb(b, d, a) {
        a[0].type = b;
        return c.event.handle.apply(d, a)
    }
    function b0(i) {
        var l, m = [],
        g = [],
        a = arguments,
        h,
        b,
        k,
        e,
        d,
        j;
        b = c.data(this, "events");
        if (! (i.liveFired === this || !b || !b.live || i.button && i.type === "click")) {
            i.liveFired = this;
            var f = b.live.slice(0);
            for (e = 0; e < f.length; e++) {
                b = f[e];
                b.origType.replace(bS, "") === i.type ? g.push(b.selector) : f.splice(e--, 1)
            }
            h = c(i.target).closest(g, i.currentTarget);
            d = 0;
            for (j = h.length; d < j; d++) {
                for (e = 0; e < f.length; e++) {
                    b = f[e];
                    if (h[d].selector === b.selector) {
                        k = h[d].elem;
                        g = null;
                        if (b.preType === "mouseenter" || b.preType === "mouseleave") {
                            g = c(i.relatedTarget).closest(b.selector)[0]
                        }
                        if (!g || g !== k) {
                            m.push({
                                elem: k,
                                handleObj: b
                            })
                        }
                    }
                }
            }
            d = 0;
            for (j = m.length; d < j; d++) {
                h = m[d];
                i.currentTarget = h.elem;
                i.data = h.handleObj.data;
                i.handleObj = h.handleObj;
                if (h.handleObj.origHandler.apply(h.elem, a) === false) {
                    l = false;
                    break
                }
            }
            return l
        }
    }
    function bE(a, b) {
        return "live." + (a && a !== "*" ? a + ".": "") + b.replace(/\./g, "`").replace(/ /g, "&")
    }
    function a0(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function bs(b, d) {
        var a = 0;
        d.each(function() {
            if (this.nodeName === (b[a] && b[a].nodeName)) {
                var f = c.data(b[a++]),
                e = c.data(this, f);
                if (f = f && f.events) {
                    delete e.handle;
                    e.events = {};
                    for (var h in f) {
                        for (var g in f[h]) {
                            c.event.add(this, h, f[h][g], f[h][g].data)
                        }
                    }
                }
            }
        })
    }
    function W(e, b, a) {
        var f, d, g;
        b = b && b[0] ? b[0].ownerDocument || b[0] : ca;
        if (e.length === 1 && typeof e[0] === "string" && e[0].length < 512 && b === ca && !bH.test(e[0]) && (c.support.checkClone || !bX.test(e[0]))) {
            d = true;
            if (g = c.fragments[e[0]]) {
                if (g !== 1) {
                    f = g
                }
            }
        }
        if (!f) {
            f = b.createDocumentFragment();
            c.clean(e, b, f, a)
        }
        if (d) {
            c.fragments[e[0]] = g ? f: 1
        }
        return {
            fragment: f,
            cacheable: d
        }
    }
    function cq(b, d) {
        var a = {};
        c.each(cu.concat.apply([], cu.slice(0, d)),
        function() {
            a[this] = b
        });
        return a
    }
    function bp(a) {
        return "scrollTo" in a && a.document ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: false
    }
    var c = function(a, b) {
        return new c.fn.init(a, b)
    },
    bF = Y.jQuery,
    bN = Y.$,
    ca = Y.document,
    N,
    b2 = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
    cc = /^.[^:#\[\.,]*$/,
    bT = /\S/,
    bV = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
    bD = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    bJ = navigator.userAgent,
    by = false,
    cs = [],
    cv,
    bz = Object.prototype.toString,
    b8 = Object.prototype.hasOwnProperty,
    bw = Array.prototype.push,
    ba = Array.prototype.slice,
    b3 = Array.prototype.indexOf;
    c.fn = c.prototype = {
        init: function(a, b) {
            var d, e;
            if (!a) {
                return this
            }
            if (a.nodeType) {
                this.context = this[0] = a;
                this.length = 1;
                return this
            }
            if (a === "body" && !b) {
                this.context = ca;
                this[0] = ca.body;
                this.selector = "body";
                this.length = 1;
                return this
            }
            if (typeof a === "string") {
                if ((d = b2.exec(a)) && (d[1] || !b)) {
                    if (d[1]) {
                        e = b ? b.ownerDocument || b: ca;
                        if (a = bD.exec(a)) {
                            if (c.isPlainObject(b)) {
                                a = [ca.createElement(a[1])];
                                c.fn.attr.call(a, b, true)
                            } else {
                                a = [e.createElement(a[1])]
                            }
                        } else {
                            a = W([d[1]], [e]);
                            a = (a.cacheable ? a.fragment.cloneNode(true) : a.fragment).childNodes
                        }
                        return c.merge(this, a)
                    } else {
                        if (b = ca.getElementById(d[2])) {
                            if (b.id !== d[2]) {
                                return N.find(a)
                            }
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = ca;
                        this.selector = a;
                        return this
                    }
                } else {
                    if (!b && /^\w+$/.test(a)) {
                        this.selector = a;
                        this.context = ca;
                        a = ca.getElementsByTagName(a);
                        return c.merge(this, a)
                    } else {
                        return ! b || b.jquery ? (b || N).find(a) : c(b).find(a)
                    }
                }
            } else {
                if (c.isFunction(a)) {
                    return N.ready(a)
                }
            }
            if (a.selector !== ce) {
                this.selector = a.selector;
                this.context = a.context
            }
            return c.makeArray(a, this)
        },
        selector: "",
        jquery: "1.4.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ba.call(this, 0)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
        },
        pushStack: function(a, b, d) {
            var e = c();
            c.isArray(a) ? bw.apply(e, a) : c.merge(e, a);
            e.prevObject = this;
            e.context = this.context;
            if (b === "find") {
                e.selector = this.selector + (this.selector ? " ": "") + d
            } else {
                if (b) {
                    e.selector = this.selector + "." + b + "(" + d + ")"
                }
            }
            return e
        },
        each: function(a, b) {
            return c.each(this, a, b)
        },
        ready: function(a) {
            c.bindReady();
            if (c.isReady) {
                a.call(ca, c)
            } else {
                cs && cs.push(a)
            }
            return this
        },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(ba.apply(this, arguments), "slice", ba.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(c.map(this,
            function(b, d) {
                return a.call(b, d, b)
            }))
        },
        end: function() {
            return this.prevObject || c(null)
        },
        push: bw,
        sort: [].sort,
        splice: [].splice
    };
    c.fn.init.prototype = c.fn;
    c.extend = c.fn.extend = function() {
        var g = arguments[0] || {},
        d = 1,
        b = arguments.length,
        h = false,
        a,
        i,
        f,
        e;
        if (typeof g === "boolean") {
            h = g;
            g = arguments[1] || {};
            d = 2
        }
        if (typeof g !== "object" && !c.isFunction(g)) {
            g = {}
        }
        if (b === d) {
            g = this; --d
        }
        for (; d < b; d++) {
            if ((a = arguments[d]) != null) {
                for (i in a) {
                    f = g[i];
                    e = a[i];
                    if (g !== e) {
                        if (h && e && (c.isPlainObject(e) || c.isArray(e))) {
                            f = f && (c.isPlainObject(f) || c.isArray(f)) ? f: c.isArray(e) ? [] : {};
                            g[i] = c.extend(h, f, e)
                        } else {
                            if (e !== ce) {
                                g[i] = e
                            }
                        }
                    }
                }
            }
        }
        return g
    };
    c.extend({
        noConflict: function(a) {
            Y.$ = bN;
            if (a) {
                Y.jQuery = bF
            }
            return c
        },
        isReady: false,
        ready: function() {
            if (!c.isReady) {
                if (!ca.body) {
                    return setTimeout(c.ready, 13)
                }
                c.isReady = true;
                if (cs) {
                    for (var a, b = 0; a = cs[b++];) {
                        a.call(ca, c)
                    }
                    cs = null
                }
                c.fn.triggerHandler && c(ca).triggerHandler("ready")
            }
        },
        bindReady: function() {
            if (!by) {
                by = true;
                if (ca.readyState === "complete") {
                    return c.ready()
                }
                if (ca.addEventListener) {
                    ca.addEventListener("DOMContentLoaded", cv, false);
                    Y.addEventListener("load", c.ready, false)
                } else {
                    if (ca.attachEvent) {
                        ca.attachEvent("onreadystatechange", cv);
                        Y.attachEvent("onload", c.ready);
                        var a = false;
                        try {
                            a = Y.frameElement == null
                        } catch(b) {}
                        ca.documentElement.doScroll && a && F()
                    }
                }
            }
        },
        isFunction: function(a) {
            return bz.call(a) === "[object Function]"
        },
        isArray: function(a) {
            return bz.call(a) === "[object Array]"
        },
        isPlainObject: function(a) {
            if (!a || bz.call(a) !== "[object Object]" || a.nodeType || a.setInterval) {
                return false
            }
            if (a.constructor && !b8.call(a, "constructor") && !b8.call(a.constructor.prototype, "isPrototypeOf")) {
                return false
            }
            var b;
            for (b in a) {}
            return b === ce || b8.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) {
                return false
            }
            return true
        },
        error: function(a) {
            throw a
        },
        parseJSON: function(a) {
            if (typeof a !== "string" || !a) {
                return null
            }
            a = c.trim(a);
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return Y.JSON && Y.JSON.parse ? Y.JSON.parse(a) : (new Function("return " + a))()
            } else {
                c.error("Invalid JSON: " + a)
            }
        },
        noop: function() {},
        globalEval: function(b) {
            if (b && bT.test(b)) {
                var d = ca.getElementsByTagName("head")[0] || ca.documentElement,
                a = ca.createElement("script");
                a.type = "text/javascript";
                if (c.support.scriptEval) {
                    a.appendChild(ca.createTextNode(b))
                } else {
                    a.text = b
                }
                d.insertBefore(a, d.firstChild);
                d.removeChild(a)
            }
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        each: function(f, b, d) {
            var g, a = 0,
            h = f.length,
            e = h === ce || c.isFunction(f);
            if (d) {
                if (e) {
                    for (g in f) {
                        if (b.apply(f[g], d) === false) {
                            break
                        }
                    }
                } else {
                    for (; a < h;) {
                        if (b.apply(f[a++], d) === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (g in f) {
                        if (b.call(f[g], g, f[g]) === false) {
                            break
                        }
                    }
                } else {
                    for (d = f[0]; a < h && b.call(d, a, d) !== false; d = f[++a]) {}
                }
            }
            return f
        },
        trim: function(a) {
            return (a || "").replace(bV, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            if (a != null) {
                a.length == null || typeof a === "string" || c.isFunction(a) || typeof a !== "function" && a.setInterval ? bw.call(b, a) : c.merge(b, a)
            }
            return b
        },
        inArray: function(a, b) {
            if (b.indexOf) {
                return b.indexOf(a)
            }
            for (var d = 0,
            e = b.length; d < e; d++) {
                if (b[d] === a) {
                    return d
                }
            }
            return - 1
        },
        merge: function(d, b) {
            var e = d.length,
            f = 0;
            if (typeof b.length === "number") {
                for (var a = b.length; f < a; f++) {
                    d[e++] = b[f]
                }
            } else {
                for (; b[f] !== ce;) {
                    d[e++] = b[f++]
                }
            }
            d.length = e;
            return d
        },
        grep: function(e, b, a) {
            for (var f = [], d = 0, g = e.length; d < g; d++) { ! a !== !b(e[d], d) && f.push(e[d])
            }
            return f
        },
        map: function(f, b, d) {
            for (var g = [], a, h = 0, e = f.length; h < e; h++) {
                a = b(f[h], h, d);
                if (a != null) {
                    g[g.length] = a
                }
            }
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(b, d, a) {
            if (arguments.length === 2) {
                if (typeof d === "string") {
                    a = b;
                    b = a[d];
                    d = ce
                } else {
                    if (d && !c.isFunction(d)) {
                        a = d;
                        d = ce
                    }
                }
            }
            if (!d && b) {
                d = function() {
                    return b.apply(a || this, arguments)
                }
            }
            if (b) {
                d.guid = b.guid = b.guid || d.guid || c.guid++
            }
            return d
        },
        uaMatch: function(a) {
            a = a.toLowerCase();
            a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        },
        browser: {}
    });
    bJ = c.uaMatch(bJ);
    if (bJ.browser) {
        c.browser[bJ.browser] = true;
        c.browser.version = bJ.version
    }
    if (c.browser.webkit) {
        c.browser.safari = true
    }
    if (b3) {
        c.inArray = function(a, b) {
            return b3.call(b, a)
        }
    }
    N = c(ca);
    if (ca.addEventListener) {
        cv = function() {
            ca.removeEventListener("DOMContentLoaded", cv, false);
            c.ready()
        }
    } else {
        if (ca.attachEvent) {
            cv = function() {
                if (ca.readyState === "complete") {
                    ca.detachEvent("onreadystatechange", cv);
                    c.ready()
                }
            }
        }
    } (function() {
        c.support = {};
        var j = ca.documentElement,
        a = ca.createElement("script"),
        b = ca.createElement("div"),
        e = "script" + P();
        b.style.display = "none";
        b.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var d = b.getElementsByTagName("*"),
        f = b.getElementsByTagName("a")[0];
        if (! (!d || !d.length || !f)) {
            c.support = {
                leadingWhitespace: b.firstChild.nodeType === 3,
                tbody: !b.getElementsByTagName("tbody").length,
                htmlSerialize: !!b.getElementsByTagName("link").length,
                style: /red/.test(f.getAttribute("style")),
                hrefNormalized: f.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(f.style.opacity),
                cssFloat: !!f.style.cssFloat,
                checkOn: b.getElementsByTagName("input")[0].value === "on",
                optSelected: ca.createElement("select").appendChild(ca.createElement("option")).selected,
                parentNode: b.removeChild(b.appendChild(ca.createElement("div"))).parentNode === null,
                deleteExpando: true,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null
            };
            a.type = "text/javascript";
            try {
                a.appendChild(ca.createTextNode("window." + e + "=1;"))
            } catch(i) {}
            j.insertBefore(a, j.firstChild);
            if (Y[e]) {
                c.support.scriptEval = true;
                delete Y[e]
            }
            try {
                delete a.test
            } catch(g) {
                c.support.deleteExpando = false
            }
            j.removeChild(a);
            if (b.attachEvent && b.fireEvent) {
                b.attachEvent("onclick",
                function h() {
                    c.support.noCloneEvent = false;
                    b.detachEvent("onclick", h)
                });
                b.cloneNode(true).fireEvent("onclick")
            }
            b = ca.createElement("div");
            b.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            j = ca.createDocumentFragment();
            j.appendChild(b.firstChild);
            c.support.checkClone = j.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function() {
                var k = ca.createElement("div");
                k.style.width = k.style.paddingLeft = "1px";
                ca.body.appendChild(k);
                c.boxModel = c.support.boxModel = k.offsetWidth === 2;
                ca.body.removeChild(k).style.display = "none"
            });
            j = function(m) {
                var k = ca.createElement("div");
                m = "on" + m;
                var l = m in k;
                if (!l) {
                    k.setAttribute(m, "return;");
                    l = typeof k[m] === "function"
                }
                return l
            };
            c.support.submitBubbles = j("submit");
            c.support.changeBubbles = j("change");
            j = a = b = d = f = null
        }
    })();
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var J = "jQuery" + P(),
    bL = 0,
    cd = {};
    c.extend({
        cache: {},
        expando: J,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function(d, b, e) {
            if (! (d.nodeName && c.noData[d.nodeName.toLowerCase()])) {
                d = d == Y ? cd: d;
                var f = d[J],
                a = c.cache;
                if (!f && typeof b === "string" && e === ce) {
                    return null
                }
                f || (f = ++bL);
                if (typeof b === "object") {
                    d[J] = f;
                    a[f] = c.extend(true, {},
                    b)
                } else {
                    if (!a[f]) {
                        d[J] = f;
                        a[f] = {}
                    }
                }
                d = a[f];
                if (e !== ce) {
                    d[b] = e
                }
                return typeof b === "string" ? d[b] : d
            }
        },
        removeData: function(d, b) {
            if (! (d.nodeName && c.noData[d.nodeName.toLowerCase()])) {
                d = d == Y ? cd: d;
                var e = d[J],
                f = c.cache,
                a = f[e];
                if (b) {
                    if (a) {
                        delete a[b];
                        c.isEmptyObject(a) && c.removeData(d)
                    }
                } else {
                    if (c.support.deleteExpando) {
                        delete d[c.expando]
                    } else {
                        d.removeAttribute && d.removeAttribute(c.expando)
                    }
                    delete f[e]
                }
            }
        }
    });
    c.fn.extend({
        data: function(a, b) {
            if (typeof a === "undefined" && this.length) {
                return c.data(this[0])
            } else {
                if (typeof a === "object") {
                    return this.each(function() {
                        c.data(this, a)
                    })
                }
            }
            var d = a.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            if (b === ce) {
                var e = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
                if (e === ce && this.length) {
                    e = c.data(this[0], a)
                }
                return e === ce && d[1] ? this.data(d[0]) : e
            } else {
                return this.trigger("setData" + d[1] + "!", [d[0], b]).each(function() {
                    c.data(this, a, b)
                })
            }
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = c.data(a, b);
                if (!d) {
                    return e || []
                }
                if (!e || c.isArray(d)) {
                    e = c.data(a, b, c.makeArray(d))
                } else {
                    e.push(d)
                }
                return e
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
            e = d.shift();
            if (e === "inprogress") {
                e = d.shift()
            }
            if (e) {
                b === "fx" && d.unshift("inprogress");
                e.call(a,
                function() {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === ce) {
                return c.queue(this[0], a)
            }
            return this.each(function() {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = c.fx ? c.fx.speeds[a] || a: a;
            b = b || "fx";
            return this.queue(b,
            function() {
                var d = this;
                setTimeout(function() {
                    c.dequeue(d, b)
                },
                a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var bI = /[\n\t]/g,
    bC = /\s+/,
    b1 = /\r/g,
    ck = /href|src|style/,
    b9 = /(button|input)/i,
    bK = /(button|input|object|select|textarea)/i,
    s = /^(a|area)$/i,
    cr = /radio|checkbox/;
    c.fn.extend({
        attr: function(a, b) {
            return bQ(this, a, b, true, c.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(j) {
            if (c.isFunction(j)) {
                return this.each(function(k) {
                    var l = c(this);
                    l.addClass(j.call(this, k, l.attr("class")))
                })
            }
            if (j && typeof j === "string") {
                for (var a = (j || "").split(bC), b = 0, e = this.length; b < e; b++) {
                    var d = this[b];
                    if (d.nodeType === 1) {
                        if (d.className) {
                            for (var f = " " + d.className + " ",
                            i = d.className,
                            g = 0,
                            h = a.length; g < h; g++) {
                                if (f.indexOf(" " + a[g] + " ") < 0) {
                                    i += " " + a[g]
                                }
                            }
                            d.className = c.trim(i)
                        } else {
                            d.className = j
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(g) {
            if (c.isFunction(g)) {
                return this.each(function(k) {
                    var j = c(this);
                    j.removeClass(g.call(this, k, j.attr("class")))
                })
            }
            if (g && typeof g === "string" || g === ce) {
                for (var d = (g || "").split(bC), b = 0, h = this.length; b < h; b++) {
                    var a = this[b];
                    if (a.nodeType === 1 && a.className) {
                        if (g) {
                            for (var i = (" " + a.className + " ").replace(bI, " "), f = 0, e = d.length; f < e; f++) {
                                i = i.replace(" " + d[f] + " ", " ")
                            }
                            a.className = c.trim(i)
                        } else {
                            a.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a,
            e = typeof b === "boolean";
            if (c.isFunction(a)) {
                return this.each(function(f) {
                    var g = c(this);
                    g.toggleClass(a.call(this, f, g.attr("class"), b), b)
                })
            }
            return this.each(function() {
                if (d === "string") {
                    for (var g, i = 0,
                    h = c(this), f = b, j = a.split(bC); g = j[i++];) {
                        f = e ? f: !h.hasClass(g);
                        h[f ? "addClass": "removeClass"](g)
                    }
                } else {
                    if (d === "undefined" || d === "boolean") {
                        this.className && c.data(this, "__className__", this.className);
                        this.className = this.className || a === false ? "": c.data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var d = 0,
            a = this.length; d < a; d++) {
                if ((" " + this[d].className + " ").replace(bI, " ").indexOf(b) > -1) {
                    return true
                }
            }
            return false
        },
        val: function(g) {
            if (g === ce) {
                var d = this[0];
                if (d) {
                    if (c.nodeName(d, "option")) {
                        return (d.attributes.value || {}).specified ? d.value: d.text
                    }
                    if (c.nodeName(d, "select")) {
                        var b = d.selectedIndex,
                        h = [],
                        a = d.options;
                        d = d.type === "select-one";
                        if (b < 0) {
                            return null
                        }
                        var i = d ? b: 0;
                        for (b = d ? b + 1 : a.length; i < b; i++) {
                            var f = a[i];
                            if (f.selected) {
                                g = c(f).val();
                                if (d) {
                                    return g
                                }
                                h.push(g)
                            }
                        }
                        return h
                    }
                    if (cr.test(d.type) && !c.support.checkOn) {
                        return d.getAttribute("value") === null ? "on": d.value
                    }
                    return (d.value || "").replace(b1, "")
                }
                return ce
            }
            var e = c.isFunction(g);
            return this.each(function(m) {
                var j = c(this),
                k = g;
                if (this.nodeType === 1) {
                    if (e) {
                        k = g.call(this, m, j.val())
                    }
                    if (typeof k === "number") {
                        k += ""
                    }
                    if (c.isArray(k) && cr.test(this.type)) {
                        this.checked = c.inArray(j.val(), k) >= 0
                    } else {
                        if (c.nodeName(this, "select")) {
                            var l = c.makeArray(k);
                            c("option", this).each(function() {
                                this.selected = c.inArray(c(this).val(), l) >= 0
                            });
                            if (!l.length) {
                                this.selectedIndex = -1
                            }
                        } else {
                            this.value = k
                        }
                    }
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(e, b, a, f) {
            if (!e || e.nodeType === 3 || e.nodeType === 8) {
                return ce
            }
            if (f && b in c.attrFn) {
                return c(e)[b](a)
            }
            f = e.nodeType !== 1 || !c.isXMLDoc(e);
            var d = a !== ce;
            b = f && c.props[b] || b;
            if (e.nodeType === 1) {
                var g = ck.test(b);
                if (b in e && f && !g) {
                    if (d) {
                        b === "type" && b9.test(e.nodeName) && e.parentNode && c.error("type property can't be changed");
                        e[b] = a
                    }
                    if (c.nodeName(e, "form") && e.getAttributeNode(b)) {
                        return e.getAttributeNode(b).nodeValue
                    }
                    if (b === "tabIndex") {
                        return (b = e.getAttributeNode("tabIndex")) && b.specified ? b.value: bK.test(e.nodeName) || s.test(e.nodeName) && e.href ? 0 : ce
                    }
                    return e[b]
                }
                if (!c.support.style && f && b === "style") {
                    if (d) {
                        e.style.cssText = "" + a
                    }
                    return e.style.cssText
                }
                d && e.setAttribute(b, "" + a);
                e = !c.support.hrefNormalized && f && g ? e.getAttribute(b, 2) : e.getAttribute(b);
                return e === null ? ce: e
            }
            return c.style(e, b, a)
        }
    });
    var bS = /\.(.*)$/,
    bA = function(a) {
        return a.replace(/[^\w\s\.\|`]/g,
        function(b) {
            return "\\" + b
        })
    };
    c.event = {
        add: function(h, j, n, g) {
            if (! (h.nodeType === 3 || h.nodeType === 8)) {
                if (h.setInterval && h !== Y && !h.frameElement) {
                    h = Y
                }
                var a, i;
                if (n.handler) {
                    a = n;
                    n = a.handler
                }
                if (!n.guid) {
                    n.guid = c.guid++
                }
                if (i = c.data(h)) {
                    var b = i.events = i.events || {},
                    m = i.handle;
                    if (!m) {
                        i.handle = m = function() {
                            return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(m.elem, arguments) : ce
                        }
                    }
                    m.elem = h;
                    j = j.split(" ");
                    for (var e, d = 0,
                    k; e = j[d++];) {
                        i = a ? c.extend({},
                        a) : {
                            handler: n,
                            data: g
                        };
                        if (e.indexOf(".") > -1) {
                            k = e.split(".");
                            e = k.shift();
                            i.namespace = k.slice(0).sort().join(".")
                        } else {
                            k = [];
                            i.namespace = ""
                        }
                        i.type = e;
                        i.guid = n.guid;
                        var f = b[e],
                        l = c.event.special[e] || {};
                        if (!f) {
                            f = b[e] = [];
                            if (!l.setup || l.setup.call(h, g, k, m) === false) {
                                if (h.addEventListener) {
                                    h.addEventListener(e, m, false)
                                } else {
                                    h.attachEvent && h.attachEvent("on" + e, m)
                                }
                            }
                        }
                        if (l.add) {
                            l.add.call(h, i);
                            if (!i.handler.guid) {
                                i.handler.guid = n.guid
                            }
                        }
                        f.push(i);
                        c.event.global[e] = true
                    }
                    h = null
                }
            }
        },
        global: {},
        remove: function(g, h, l, p) {
            if (! (g.nodeType === 3 || g.nodeType === 8)) {
                var o, j = 0,
                a, e, b, k, m, f, i = c.data(g),
                n = i && i.events;
                if (i && n) {
                    if (h && h.type) {
                        l = h.handler;
                        h = h.type
                    }
                    if (!h || typeof h === "string" && h.charAt(0) === ".") {
                        h = h || "";
                        for (o in n) {
                            c.event.remove(g, o + h)
                        }
                    } else {
                        for (h = h.split(" "); o = h[j++];) {
                            k = o;
                            a = o.indexOf(".") < 0;
                            e = [];
                            if (!a) {
                                e = o.split(".");
                                o = e.shift();
                                b = new RegExp("(^|\\.)" + c.map(e.slice(0).sort(), bA).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (m = n[o]) {
                                if (l) {
                                    k = c.event.special[o] || {};
                                    for (d = p || 0; d < m.length; d++) {
                                        f = m[d];
                                        if (l.guid === f.guid) {
                                            if (a || b.test(f.namespace)) {
                                                p == null && m.splice(d--, 1);
                                                k.remove && k.remove.call(g, f)
                                            }
                                            if (p != null) {
                                                break
                                            }
                                        }
                                    }
                                    if (m.length === 0 || p != null && m.length === 1) {
                                        if (!k.teardown || k.teardown.call(g, e) === false) {
                                            O(g, o, i.handle)
                                        }
                                        delete n[o]
                                    }
                                } else {
                                    for (var d = 0; d < m.length; d++) {
                                        f = m[d];
                                        if (a || b.test(f.namespace)) {
                                            c.event.remove(g, k, f.handler, d);
                                            m.splice(d--, 1)
                                        }
                                    }
                                }
                            }
                        }
                        if (c.isEmptyObject(n)) {
                            if (h = i.handle) {
                                h.elem = null
                            }
                            delete i.events;
                            delete i.handle;
                            c.isEmptyObject(i) && c.removeData(g)
                        }
                    }
                }
            }
        },
        trigger: function(j, k, a, b) {
            var e = j.type || j;
            if (!b) {
                j = typeof j === "object" ? j[J] ? j: c.extend(c.Event(e), j) : c.Event(e);
                if (e.indexOf("!") >= 0) {
                    j.type = e = e.slice(0, -1);
                    j.exclusive = true
                }
                if (!a) {
                    j.stopPropagation();
                    c.event.global[e] && c.each(c.cache,
                    function() {
                        this.events && this.events[e] && c.event.trigger(j, k, this.handle.elem)
                    })
                }
                if (!a || a.nodeType === 3 || a.nodeType === 8) {
                    return ce
                }
                j.result = ce;
                j.target = a;
                k = c.makeArray(k);
                k.unshift(j)
            }
            j.currentTarget = a; (b = c.data(a, "handle")) && b.apply(a, k);
            b = a.parentNode || a.ownerDocument;
            try {
                if (! (a && a.nodeName && c.noData[a.nodeName.toLowerCase()])) {
                    if (a["on" + e] && a["on" + e].apply(a, k) === false) {
                        j.result = false
                    }
                }
            } catch(g) {}
            if (!j.isPropagationStopped() && b) {
                c.event.trigger(j, k, b, true)
            } else {
                if (!j.isDefaultPrevented()) {
                    b = j.target;
                    var f, h = c.nodeName(b, "a") && e === "click",
                    d = c.event.special[e] || {};
                    if ((!d._default || d._default.call(a, j) === false) && !h && !(b && b.nodeName && c.noData[b.nodeName.toLowerCase()])) {
                        try {
                            if (b[e]) {
                                if (f = b["on" + e]) {
                                    b["on" + e] = null
                                }
                                c.event.triggered = true;
                                b[e]()
                            }
                        } catch(i) {}
                        if (f) {
                            b["on" + e] = f
                        }
                        c.event.triggered = false
                    }
                }
            }
        },
        handle: function(f) {
            var b, d, g, a;
            f = arguments[0] = c.event.fix(f || Y.event);
            f.currentTarget = this;
            b = f.type.indexOf(".") < 0 && !f.exclusive;
            if (!b) {
                d = f.type.split(".");
                f.type = d.shift();
                g = new RegExp("(^|\\.)" + d.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            a = c.data(this, "events");
            d = a[f.type];
            if (a && d) {
                d = d.slice(0);
                a = 0;
                for (var h = d.length; a < h; a++) {
                    var e = d[a];
                    if (b || g.test(e.namespace)) {
                        f.handler = e.handler;
                        f.data = e.data;
                        f.handleObj = e;
                        e = e.handler.apply(this, arguments);
                        if (e !== ce) {
                            f.result = e;
                            if (e === false) {
                                f.preventDefault();
                                f.stopPropagation()
                            }
                        }
                        if (f.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return f.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[J]) {
                return a
            }
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length,
            e; d;) {
                e = this.props[--d];
                a[e] = b[e]
            }
            if (!a.target) {
                a.target = a.srcElement || ca
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode
            }
            if (!a.relatedTarget && a.fromElement) {
                a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement
            }
            if (a.pageX == null && a.clientX != null) {
                b = ca.documentElement;
                d = ca.body;
                a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
            }
            if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode: a.keyCode)) {
                a.which = a.charCode || a.keyCode
            }
            if (!a.metaKey && a.ctrlKey) {
                a.metaKey = a.ctrlKey
            }
            if (!a.which && a.button !== ce) {
                a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
            }
            return a
        },
        guid: 100000000,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function(a) {
                    c.event.add(this, a.origType, c.extend({},
                    a, {
                        handler: b0
                    }))
                },
                remove: function(b) {
                    var d = true,
                    a = b.origType.replace(bS, "");
                    c.each(c.data(this, "events").live || [],
                    function() {
                        if (a === this.origType.replace(bS, "")) {
                            return d = false
                        }
                    });
                    d && c.event.remove(this, b.origType, b0)
                }
            },
            beforeunload: {
                setup: function(b, d, a) {
                    if (this.setInterval) {
                        this.onbeforeunload = a
                    }
                    return false
                },
                teardown: function(a, b) {
                    if (this.onbeforeunload === b) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    var O = ca.removeEventListener ?
    function(b, d, a) {
        b.removeEventListener(d, a, false)
    }: function(b, d, a) {
        b.detachEvent("on" + d, a)
    };
    c.Event = function(a) {
        if (!this.preventDefault) {
            return new c.Event(a)
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else {
            this.type = a
        }
        this.timeStamp = P();
        this[J] = true
    };
    c.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = bU;
            var a = this.originalEvent;
            if (a) {
                a.preventDefault && a.preventDefault();
                a.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = bU;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bU;
            this.stopPropagation()
        },
        isDefaultPrevented: bR,
        isPropagationStopped: bR,
        isImmediatePropagationStopped: bR
    };
    var K = function(b) {
        var d = b.relatedTarget;
        try {
            for (; d && d !== this;) {
                d = d.parentNode
            }
            if (d !== this) {
                b.type = b.data;
                c.event.handle.apply(this, arguments)
            }
        } catch(a) {}
    },
    cx = function(a) {
        a.type = a.data;
        c.event.handle.apply(this, arguments)
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        c.event.special[a] = {
            setup: function(d) {
                c.event.add(this, b, d && d.selector ? cx: K, a)
            },
            teardown: function(d) {
                c.event.remove(this, b, d && d.selector ? cx: K)
            }
        }
    });
    if (!c.support.submitBubbles) {
        c.event.special.submit = {
            setup: function() {
                if (this.nodeName.toLowerCase() !== "form") {
                    c.event.add(this, "click.specialSubmit",
                    function(b) {
                        var d = b.target,
                        a = d.type;
                        if ((a === "submit" || a === "image") && c(d).closest("form").length) {
                            return cb("submit", this, arguments)
                        }
                    });
                    c.event.add(this, "keypress.specialSubmit",
                    function(b) {
                        var d = b.target,
                        a = d.type;
                        if ((a === "text" || a === "password") && c(d).closest("form").length && b.keyCode === 13) {
                            return cb("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function() {
                c.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!c.support.changeBubbles) {
        var bx = /textarea|input|select/i,
        bo, bl = function(b) {
            var d = b.type,
            a = b.value;
            if (d === "radio" || d === "checkbox") {
                a = b.checked
            } else {
                if (d === "select-multiple") {
                    a = b.selectedIndex > -1 ? c.map(b.options,
                    function(e) {
                        return e.selected
                    }).join("-") : ""
                } else {
                    if (b.nodeName.toLowerCase() === "select") {
                        a = b.selectedIndex
                    }
                }
            }
            return a
        },
        w = function(d, b) {
            var e = d.target,
            f, a;
            if (! (!bx.test(e.nodeName) || e.readOnly)) {
                f = c.data(e, "_change_data");
                a = bl(e);
                if (d.type !== "focusout" || e.type !== "radio") {
                    c.data(e, "_change_data", a)
                }
                if (! (f === ce || a === f)) {
                    if (f != null || a) {
                        d.type = "change";
                        return c.event.trigger(d, b, e)
                    }
                }
            }
        };
        c.event.special.change = {
            filters: {
                focusout: w,
                click: function(b) {
                    var d = b.target,
                    a = d.type;
                    if (a === "radio" || a === "checkbox" || d.nodeName.toLowerCase() === "select") {
                        return w.call(this, b)
                    }
                },
                keydown: function(b) {
                    var d = b.target,
                    a = d.type;
                    if (b.keyCode === 13 && d.nodeName.toLowerCase() !== "textarea" || b.keyCode === 32 && (a === "checkbox" || a === "radio") || a === "select-multiple") {
                        return w.call(this, b)
                    }
                },
                beforeactivate: function(a) {
                    a = a.target;
                    c.data(a, "_change_data", bl(a))
                }
            },
            setup: function() {
                if (this.type === "file") {
                    return false
                }
                for (var a in bo) {
                    c.event.add(this, a + ".specialChange", bo[a])
                }
                return bx.test(this.nodeName)
            },
            teardown: function() {
                c.event.remove(this, ".specialChange");
                return bx.test(this.nodeName)
            }
        };
        bo = c.event.special.change.filters
    }
    ca.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(b, d) {
        function a(e) {
            e = c.event.fix(e);
            e.type = d;
            return c.event.handle.call(this, e)
        }
        c.event.special[d] = {
            setup: function() {
                this.addEventListener(b, a, true)
            },
            teardown: function() {
                this.removeEventListener(b, a, true)
            }
        }
    });
    c.each(["bind", "one"],
    function(a, b) {
        c.fn[b] = function(f, d, h) {
            if (typeof f === "object") {
                for (var e in f) {
                    this[b](e, d, f[e], h)
                }
                return this
            }
            if (c.isFunction(d)) {
                h = d;
                d = ce
            }
            var i = b === "one" ? c.proxy(h,
            function(j) {
                c(this).unbind(j, i);
                return h.apply(this, arguments)
            }) : h;
            if (f === "unload" && b !== "one") {
                this.one(f, d, h)
            } else {
                e = 0;
                for (var g = this.length; e < g; e++) {
                    c.event.add(this[e], f, i, d)
                }
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function(a, b) {
            if (typeof a === "object" && !a.preventDefault) {
                for (var d in a) {
                    this.unbind(d, a[d])
                }
            } else {
                d = 0;
                for (var e = this.length; d < e; d++) {
                    c.event.remove(this[d], a, b)
                }
            }
            return this
        },
        delegate: function(a, b, d, e) {
            return this.live(b, d, e, a)
        },
        undelegate: function(b, d, a) {
            return arguments.length === 0 ? this.unbind("live") : this.die(d, null, a, b)
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                a = c.Event(a);
                a.preventDefault();
                a.stopPropagation();
                c.event.trigger(a, b, this[0]);
                return a.result
            }
        },
        toggle: function(b) {
            for (var d = arguments,
            a = 1; a < d.length;) {
                c.proxy(b, d[a++])
            }
            return this.click(c.proxy(b,
            function(f) {
                var e = (c.data(this, "lastToggle" + b.guid) || 0) % a;
                c.data(this, "lastToggle" + b.guid, e + 1);
                f.preventDefault();
                return d[e].apply(this, arguments) || false
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var bu = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"],
    function(a, b) {
        c.fn[b] = function(i, l, j, e) {
            var d, g = 0,
            f, k, m = e || this.selector,
            h = e ? this: c(this.context);
            if (c.isFunction(l)) {
                j = l;
                l = ce
            }
            for (i = (i || "").split(" "); (d = i[g++]) != null;) {
                e = bS.exec(d);
                f = "";
                if (e) {
                    f = e[0];
                    d = d.replace(bS, "")
                }
                if (d === "hover") {
                    i.push("mouseenter" + f, "mouseleave" + f)
                } else {
                    k = d;
                    if (d === "focus" || d === "blur") {
                        i.push(bu[d] + f);
                        d += f
                    } else {
                        d = (bu[d] || d) + f
                    }
                    b === "live" ? h.each(function() {
                        c.event.add(this, bE(d, m), {
                            data: l,
                            selector: m,
                            handler: j,
                            origType: d,
                            origHandler: j,
                            preType: k
                        })
                    }) : h.unbind(bE(d, m), j)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
    function(a, b) {
        c.fn[b] = function(d) {
            return d ? this.bind(b, d) : this.trigger(b)
        };
        if (c.attrFn) {
            c.attrFn[b] = true
        }
    });
    Y.attachEvent && !Y.addEventListener && Y.attachEvent("onunload",
    function() {
        for (var a in c.cache) {
            if (c.cache[a].handle) {
                try {
                    c.event.remove(c.cache[a].handle.elem)
                } catch(b) {}
            }
        }
    }); (function() {
        function b(u) {
            for (var x = "",
            y, v = 0; u[v]; v++) {
                y = u[v];
                if (y.nodeType === 3 || y.nodeType === 4) {
                    x += y.nodeValue
                } else {
                    if (y.nodeType !== 8) {
                        x += b(y.childNodes)
                    }
                }
            }
            return x
        }
        function d(u, v, x, y, B, z) {
            B = 0;
            for (var D = y.length; B < D; B++) {
                var C = y[B];
                if (C) {
                    C = C[u];
                    for (var E = false; C;) {
                        if (C.sizcache === x) {
                            E = y[C.sizset];
                            break
                        }
                        if (C.nodeType === 1 && !z) {
                            C.sizcache = x;
                            C.sizset = B
                        }
                        if (C.nodeName.toLowerCase() === v) {
                            E = C;
                            break
                        }
                        C = C[u]
                    }
                    y[B] = E
                }
            }
        }
        function e(u, v, x, y, B, z) {
            B = 0;
            for (var D = y.length; B < D; B++) {
                var C = y[B];
                if (C) {
                    C = C[u];
                    for (var E = false; C;) {
                        if (C.sizcache === x) {
                            E = y[C.sizset];
                            break
                        }
                        if (C.nodeType === 1) {
                            if (!z) {
                                C.sizcache = x;
                                C.sizset = B
                            }
                            if (typeof v !== "string") {
                                if (C === v) {
                                    E = true;
                                    break
                                }
                            } else {
                                if (j.filter(v, [C]).length > 0) {
                                    E = C;
                                    break
                                }
                            }
                        }
                        C = C[u]
                    }
                    y[B] = E
                }
            }
        }
        var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        f = 0,
        i = Object.prototype.toString,
        h = false,
        l = true; [0, 0].sort(function() {
            l = false;
            return 0
        });
        var j = function(u, U, S, v) {
            S = S || [];
            var C = U = U || ca;
            if (U.nodeType !== 1 && U.nodeType !== 9) {
                return []
            }
            if (!u || typeof u !== "string") {
                return S
            }
            for (var H = [], y, x, B, z, M = true, E = p(U), I = u; (g.exec(""), y = g.exec(I)) !== null;) {
                I = y[3];
                H.push(y[1]);
                if (y[2]) {
                    z = y[3];
                    break
                }
            }
            if (H.length > 1 && q.exec(u)) {
                if (H.length === 2 && k.relative[H[0]]) {
                    x = a(H[0] + H[1], U)
                } else {
                    for (x = k.relative[H[0]] ? [U] : j(H.shift(), U); H.length;) {
                        u = H.shift();
                        if (k.relative[u]) {
                            u += H.shift()
                        }
                        x = a(u, x)
                    }
                }
            } else {
                if (!v && H.length > 1 && U.nodeType === 9 && !E && k.match.ID.test(H[0]) && !k.match.ID.test(H[H.length - 1])) {
                    y = j.find(H.shift(), U, E);
                    U = y.expr ? j.filter(y.expr, y.set)[0] : y.set[0]
                }
                if (U) {
                    y = v ? {
                        expr: H.pop(),
                        set: t(v)
                    }: j.find(H.pop(), H.length === 1 && (H[0] === "~" || H[0] === "+") && U.parentNode ? U.parentNode: U, E);
                    x = y.expr ? j.filter(y.expr, y.set) : y.set;
                    if (H.length > 0) {
                        B = t(x)
                    } else {
                        M = false
                    }
                    for (; H.length;) {
                        var D = H.pop();
                        y = D;
                        if (k.relative[D]) {
                            y = H.pop()
                        } else {
                            D = ""
                        }
                        if (y == null) {
                            y = U
                        }
                        k.relative[D](B, y, E)
                    }
                } else {
                    B = []
                }
            }
            B || (B = x);
            B || j.error(D || u);
            if (i.call(B) === "[object Array]") {
                if (M) {
                    if (U && U.nodeType === 1) {
                        for (u = 0; B[u] != null; u++) {
                            if (B[u] && (B[u] === true || B[u].nodeType === 1 && o(U, B[u]))) {
                                S.push(x[u])
                            }
                        }
                    } else {
                        for (u = 0; B[u] != null; u++) {
                            B[u] && B[u].nodeType === 1 && S.push(x[u])
                        }
                    }
                } else {
                    S.push.apply(S, B)
                }
            } else {
                t(B, S)
            }
            if (z) {
                j(z, C, S, v);
                j.uniqueSort(S)
            }
            return S
        };
        j.uniqueSort = function(u) {
            if (m) {
                h = l;
                u.sort(m);
                if (h) {
                    for (var v = 1; v < u.length; v++) {
                        u[v] === u[v - 1] && u.splice(v--, 1)
                    }
                }
            }
            return u
        };
        j.matches = function(u, v) {
            return j(u, null, null, v)
        };
        j.find = function(u, v, x) {
            var y, B;
            if (!u) {
                return []
            }
            for (var z = 0,
            D = k.order.length; z < D; z++) {
                var C = k.order[z];
                if (B = k.leftMatch[C].exec(u)) {
                    var E = B[1];
                    B.splice(1, 1);
                    if (E.substr(E.length - 1) !== "\\") {
                        B[1] = (B[1] || "").replace(/\\/g, "");
                        y = k.find[C](B, v, x);
                        if (y != null) {
                            u = u.replace(k.match[C], "");
                            break
                        }
                    }
                }
            }
            y || (y = v.getElementsByTagName("*"));
            return {
                set: y,
                expr: u
            }
        };
        j.filter = function(S, v, C, ad) {
            for (var B = S,
            H = [], y = v, x, I, u = v && v[0] && p(v[0]); S && v.length;) {
                for (var U in k.filter) {
                    if ((x = k.leftMatch[U].exec(S)) != null && x[2]) {
                        var z = k.filter[U],
                        E,
                        D;
                        D = x[1];
                        I = false;
                        x.splice(1, 1);
                        if (D.substr(D.length - 1) !== "\\") {
                            if (y === H) {
                                H = []
                            }
                            if (k.preFilter[U]) {
                                if (x = k.preFilter[U](x, y, C, H, ad, u)) {
                                    if (x === true) {
                                        continue
                                    }
                                } else {
                                    I = E = true
                                }
                            }
                            if (x) {
                                for (var ac = 0; (D = y[ac]) != null; ac++) {
                                    if (D) {
                                        E = z(D, x, ac, y);
                                        var M = ad ^ !!E;
                                        if (C && E != null) {
                                            if (M) {
                                                I = true
                                            } else {
                                                y[ac] = false
                                            }
                                        } else {
                                            if (M) {
                                                H.push(D);
                                                I = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (E !== ce) {
                                C || (y = H);
                                S = S.replace(k.match[U], "");
                                if (!I) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                }
                if (S === B) {
                    if (I == null) {
                        j.error(S)
                    } else {
                        break
                    }
                }
                B = S
            }
            return y
        };
        j.error = function(u) {
            throw "Syntax error, unrecognized expression: " + u
        };
        var k = j.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(u) {
                    return u.getAttribute("href")
                }
            },
            relative: {
                "+": function(u, x) {
                    var z = typeof x === "string",
                    v = z && !/\W/.test(x);
                    z = z && !v;
                    if (v) {
                        x = x.toLowerCase()
                    }
                    v = 0;
                    for (var y = u.length,
                    B; v < y; v++) {
                        if (B = u[v]) {
                            for (; (B = B.previousSibling) && B.nodeType !== 1;) {}
                            u[v] = z || B && B.nodeName.toLowerCase() === x ? B || false: B === x
                        }
                    }
                    z && j.filter(x, u, true)
                },
                ">": function(u, x) {
                    var z = typeof x === "string";
                    if (z && !/\W/.test(x)) {
                        x = x.toLowerCase();
                        for (var v = 0,
                        y = u.length; v < y; v++) {
                            var B = u[v];
                            if (B) {
                                z = B.parentNode;
                                u[v] = z.nodeName.toLowerCase() === x ? z: false
                            }
                        }
                    } else {
                        v = 0;
                        for (y = u.length; v < y; v++) {
                            if (B = u[v]) {
                                u[v] = z ? B.parentNode: B.parentNode === x
                            }
                        }
                        z && j.filter(x, u, true)
                    }
                },
                "": function(u, x, z) {
                    var v = f++,
                    y = e;
                    if (typeof x === "string" && !/\W/.test(x)) {
                        var B = x = x.toLowerCase();
                        y = d
                    }
                    y("parentNode", x, v, u, B, z)
                },
                "~": function(u, x, z) {
                    var v = f++,
                    y = e;
                    if (typeof x === "string" && !/\W/.test(x)) {
                        var B = x = x.toLowerCase();
                        y = d
                    }
                    y("previousSibling", x, v, u, B, z)
                }
            },
            find: {
                ID: function(v, u, x) {
                    if (typeof u.getElementById !== "undefined" && !x) {
                        return (v = u.getElementById(v[1])) ? [v] : []
                    }
                },
                NAME: function(z, u) {
                    if (typeof u.getElementsByName !== "undefined") {
                        var y = [];
                        u = u.getElementsByName(z[1]);
                        for (var x = 0,
                        v = u.length; x < v; x++) {
                            u[x].getAttribute("name") === z[1] && y.push(u[x])
                        }
                        return y.length === 0 ? null: y
                    }
                },
                TAG: function(u, v) {
                    return v.getElementsByTagName(u[1])
                }
            },
            preFilter: {
                CLASS: function(C, u, x, z, B, y) {
                    C = " " + C[1].replace(/\\/g, "") + " ";
                    if (y) {
                        return C
                    }
                    y = 0;
                    for (var v; (v = u[y]) != null; y++) {
                        if (v) {
                            if (B ^ (v.className && (" " + v.className + " ").replace(/[\t\n]/g, " ").indexOf(C) >= 0)) {
                                x || z.push(v)
                            } else {
                                if (x) {
                                    u[y] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function(u) {
                    return u[1].replace(/\\/g, "")
                },
                TAG: function(u) {
                    return u[1].toLowerCase()
                },
                CHILD: function(u) {
                    if (u[1] === "nth") {
                        var v = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(u[2] === "even" && "2n" || u[2] === "odd" && "2n+1" || !/\D/.test(u[2]) && "0n+" + u[2] || u[2]);
                        u[2] = v[1] + (v[2] || 1) - 0;
                        u[3] = v[3] - 0
                    }
                    u[0] = f++;
                    return u
                },
                ATTR: function(u, x, z, v, y, B) {
                    x = u[1].replace(/\\/g, "");
                    if (!B && k.attrMap[x]) {
                        u[1] = k.attrMap[x]
                    }
                    if (u[2] === "~=") {
                        u[4] = " " + u[4] + " "
                    }
                    return u
                },
                PSEUDO: function(z, u, y, x, v) {
                    if (z[1] === "not") {
                        if ((g.exec(z[3]) || "").length > 1 || /^\w/.test(z[3])) {
                            z[3] = j(z[3], null, null, u)
                        } else {
                            z = j.filter(z[3], u, y, true ^ v);
                            y || x.push.apply(x, z);
                            return false
                        }
                    } else {
                        if (k.match.POS.test(z[0]) || k.match.CHILD.test(z[0])) {
                            return true
                        }
                    }
                    return z
                },
                POS: function(u) {
                    u.unshift(true);
                    return u
                }
            },
            filters: {
                enabled: function(u) {
                    return u.disabled === false && u.type !== "hidden"
                },
                disabled: function(u) {
                    return u.disabled === true
                },
                checked: function(u) {
                    return u.checked === true
                },
                selected: function(u) {
                    return u.selected === true
                },
                parent: function(u) {
                    return !! u.firstChild
                },
                empty: function(u) {
                    return ! u.firstChild
                },
                has: function(v, u, x) {
                    return !! j(x[3], v).length
                },
                header: function(u) {
                    return /h\d/i.test(u.nodeName)
                },
                text: function(u) {
                    return "text" === u.type
                },
                radio: function(u) {
                    return "radio" === u.type
                },
                checkbox: function(u) {
                    return "checkbox" === u.type
                },
                file: function(u) {
                    return "file" === u.type
                },
                password: function(u) {
                    return "password" === u.type
                },
                submit: function(u) {
                    return "submit" === u.type
                },
                image: function(u) {
                    return "image" === u.type
                },
                reset: function(u) {
                    return "reset" === u.type
                },
                button: function(u) {
                    return "button" === u.type || u.nodeName.toLowerCase() === "button"
                },
                input: function(u) {
                    return /input|select|textarea|button/i.test(u.nodeName)
                }
            },
            setFilters: {
                first: function(u, v) {
                    return v === 0
                },
                last: function(u, x, y, v) {
                    return x === v.length - 1
                },
                even: function(u, v) {
                    return v % 2 === 0
                },
                odd: function(u, v) {
                    return v % 2 === 1
                },
                lt: function(v, u, x) {
                    return u < x[3] - 0
                },
                gt: function(v, u, x) {
                    return u > x[3] - 0
                },
                nth: function(v, u, x) {
                    return x[3] - 0 === u
                },
                eq: function(v, u, x) {
                    return x[3] - 0 === u
                }
            },
            filter: {
                PSEUDO: function(u, x, z, v) {
                    var y = x[1],
                    B = k.filters[y];
                    if (B) {
                        return B(u, z, x, v)
                    } else {
                        if (y === "contains") {
                            return (u.textContent || u.innerText || b([u]) || "").indexOf(x[3]) >= 0
                        } else {
                            if (y === "not") {
                                x = x[3];
                                z = 0;
                                for (v = x.length; z < v; z++) {
                                    if (x[z] === u) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                j.error("Syntax error, unrecognized expression: " + y)
                            }
                        }
                    }
                },
                CHILD: function(C, u) {
                    var x = u[1],
                    z = C;
                    switch (x) {
                    case "only":
                    case "first":
                        for (; z = z.previousSibling;) {
                            if (z.nodeType === 1) {
                                return false
                            }
                        }
                        if (x === "first") {
                            return true
                        }
                        z = C;
                    case "last":
                        for (; z = z.nextSibling;) {
                            if (z.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        x = u[2];
                        var B = u[3];
                        if (x === 1 && B === 0) {
                            return true
                        }
                        u = u[0];
                        var y = C.parentNode;
                        if (y && (y.sizcache !== u || !C.nodeIndex)) {
                            var v = 0;
                            for (z = y.firstChild; z; z = z.nextSibling) {
                                if (z.nodeType === 1) {
                                    z.nodeIndex = ++v
                                }
                            }
                            y.sizcache = u
                        }
                        C = C.nodeIndex - B;
                        return x === 0 ? C === 0 : C % x === 0 && C / x >= 0
                    }
                },
                ID: function(u, v) {
                    return u.nodeType === 1 && u.getAttribute("id") === v
                },
                TAG: function(u, v) {
                    return v === "*" && u.nodeType === 1 || u.nodeName.toLowerCase() === v
                },
                CLASS: function(u, v) {
                    return (" " + (u.className || u.getAttribute("class")) + " ").indexOf(v) > -1
                },
                ATTR: function(u, x) {
                    var y = x[1];
                    u = k.attrHandle[y] ? k.attrHandle[y](u) : u[y] != null ? u[y] : u.getAttribute(y);
                    y = u + "";
                    var v = x[2];
                    x = x[4];
                    return u == null ? v === "!=": v === "=" ? y === x: v === "*=" ? y.indexOf(x) >= 0 : v === "~=" ? (" " + y + " ").indexOf(x) >= 0 : !x ? y && u !== false: v === "!=" ? y !== x: v === "^=" ? y.indexOf(x) === 0 : v === "$=" ? y.substr(y.length - x.length) === x: v === "|=" ? y === x || y.substr(0, x.length + 1) === x + "-": false
                },
                POS: function(z, u, y, x) {
                    var v = k.setFilters[u[2]];
                    if (v) {
                        return v(z, y, u, x)
                    }
                }
            }
        },
        q = k.match.POS;
        for (var r in k.match) {
            k.match[r] = new RegExp(k.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            k.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[r].source.replace(/\\(\d+)/g,
            function(u, v) {
                return "\\" + (v - 0 + 1)
            }))
        }
        var t = function(u, v) {
            u = Array.prototype.slice.call(u, 0);
            if (v) {
                v.push.apply(v, u);
                return v
            }
            return u
        };
        try {
            Array.prototype.slice.call(ca.documentElement.childNodes, 0)
        } catch(n) {
            t = function(u, x) {
                x = x || [];
                if (i.call(u) === "[object Array]") {
                    Array.prototype.push.apply(x, u)
                } else {
                    if (typeof u.length === "number") {
                        for (var y = 0,
                        v = u.length; y < v; y++) {
                            x.push(u[y])
                        }
                    } else {
                        for (y = 0; u[y]; y++) {
                            x.push(u[y])
                        }
                    }
                }
                return x
            }
        }
        var m;
        if (ca.documentElement.compareDocumentPosition) {
            m = function(u, v) {
                if (!u.compareDocumentPosition || !v.compareDocumentPosition) {
                    if (u == v) {
                        h = true
                    }
                    return u.compareDocumentPosition ? -1 : 1
                }
                u = u.compareDocumentPosition(v) & 4 ? -1 : u === v ? 0 : 1;
                if (u === 0) {
                    h = true
                }
                return u
            }
        } else {
            if ("sourceIndex" in ca.documentElement) {
                m = function(u, v) {
                    if (!u.sourceIndex || !v.sourceIndex) {
                        if (u == v) {
                            h = true
                        }
                        return u.sourceIndex ? -1 : 1
                    }
                    u = u.sourceIndex - v.sourceIndex;
                    if (u === 0) {
                        h = true
                    }
                    return u
                }
            } else {
                if (ca.createRange) {
                    m = function(u, x) {
                        if (!u.ownerDocument || !x.ownerDocument) {
                            if (u == x) {
                                h = true
                            }
                            return u.ownerDocument ? -1 : 1
                        }
                        var y = u.ownerDocument.createRange(),
                        v = x.ownerDocument.createRange();
                        y.setStart(u, 0);
                        y.setEnd(u, 0);
                        v.setStart(x, 0);
                        v.setEnd(x, 0);
                        u = y.compareBoundaryPoints(Range.START_TO_END, v);
                        if (u === 0) {
                            h = true
                        }
                        return u
                    }
                }
            }
        } (function() {
            var v = ca.createElement("div"),
            u = "script" + (new Date).getTime();
            v.innerHTML = "<a name='" + u + "'/>";
            var x = ca.documentElement;
            x.insertBefore(v, x.firstChild);
            if (ca.getElementById(u)) {
                k.find.ID = function(z, y, B) {
                    if (typeof y.getElementById !== "undefined" && !B) {
                        return (y = y.getElementById(z[1])) ? y.id === z[1] || typeof y.getAttributeNode !== "undefined" && y.getAttributeNode("id").nodeValue === z[1] ? [y] : ce: []
                    }
                };
                k.filter.ID = function(z, y) {
                    var B = typeof z.getAttributeNode !== "undefined" && z.getAttributeNode("id");
                    return z.nodeType === 1 && B && B.nodeValue === y
                }
            }
            x.removeChild(v);
            x = v = null
        })(); (function() {
            var u = ca.createElement("div");
            u.appendChild(ca.createComment(""));
            if (u.getElementsByTagName("*").length > 0) {
                k.find.TAG = function(y, v) {
                    v = v.getElementsByTagName(y[1]);
                    if (y[1] === "*") {
                        y = [];
                        for (var x = 0; v[x]; x++) {
                            v[x].nodeType === 1 && y.push(v[x])
                        }
                        v = y
                    }
                    return v
                }
            }
            u.innerHTML = "<a href='#'></a>";
            if (u.firstChild && typeof u.firstChild.getAttribute !== "undefined" && u.firstChild.getAttribute("href") !== "#") {
                k.attrHandle.href = function(v) {
                    return v.getAttribute("href", 2)
                }
            }
            u = null
        })();
        ca.querySelectorAll &&
        function() {
            var v = j,
            u = ca.createElement("div");
            u.innerHTML = "<p class='TEST'></p>";
            if (! (u.querySelectorAll && u.querySelectorAll(".TEST").length === 0)) {
                j = function(B, y, D, z) {
                    y = y || ca;
                    if (!z && y.nodeType === 9 && !p(y)) {
                        try {
                            return t(y.querySelectorAll(B), D)
                        } catch(C) {}
                    }
                    return v(B, y, D, z)
                };
                for (var x in v) {
                    j[x] = v[x]
                }
                u = null
            }
        } (); (function() {
            var u = ca.createElement("div");
            u.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (! (!u.getElementsByClassName || u.getElementsByClassName("e").length === 0)) {
                u.lastChild.className = "e";
                if (u.getElementsByClassName("e").length !== 1) {
                    k.order.splice(1, 0, "CLASS");
                    k.find.CLASS = function(y, v, x) {
                        if (typeof v.getElementsByClassName !== "undefined" && !x) {
                            return v.getElementsByClassName(y[1])
                        }
                    };
                    u = null
                }
            }
        })();
        var o = ca.compareDocumentPosition ?
        function(u, v) {
            return !! (u.compareDocumentPosition(v) & 16)
        }: function(u, v) {
            return u !== v && (u.contains ? u.contains(v) : true)
        },
        p = function(u) {
            return (u = (u ? u.ownerDocument || u: 0).documentElement) ? u.nodeName !== "HTML": false
        },
        a = function(u, x) {
            var z = [],
            v = "",
            y;
            for (x = x.nodeType ? [x] : x; y = k.match.PSEUDO.exec(u);) {
                v += y[0];
                u = u.replace(k.match.PSEUDO, "")
            }
            u = k.relative[u] ? u + "*": u;
            y = 0;
            for (var B = x.length; y < B; y++) {
                j(u, x[y], z)
            }
            return j.filter(v, z)
        };
        c.find = j;
        c.expr = j.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = j.uniqueSort;
        c.text = b;
        c.isXMLDoc = p;
        c.contains = o
    })();
    var bq = /Until$/,
    bZ = /^(?:parents|prevUntil|prevAll)/,
    b7 = /,/;
    ba = Array.prototype.slice;
    var bb = function(a, b, d) {
        if (c.isFunction(b)) {
            return c.grep(a,
            function(f, g) {
                return !! b.call(f, g, f) === d
            })
        } else {
            if (b.nodeType) {
                return c.grep(a,
                function(f) {
                    return f === b === d
                })
            } else {
                if (typeof b === "string") {
                    var e = c.grep(a,
                    function(f) {
                        return f.nodeType === 1
                    });
                    if (cc.test(b)) {
                        return c.filter(b, e, !d)
                    } else {
                        b = c.filter(b, e)
                    }
                }
            }
        }
        return c.grep(a,
        function(f) {
            return c.inArray(f, b) >= 0 === d
        })
    };
    c.fn.extend({
        find: function(f) {
            for (var b = this.pushStack("", "find", f), d = 0, g = 0, a = this.length; g < a; g++) {
                d = b.length;
                c.find(f, this[g], b);
                if (g > 0) {
                    for (var h = d; h < b.length; h++) {
                        for (var e = 0; e < d; e++) {
                            if (b[e] === b[h]) {
                                b.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return b
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var d = 0,
                e = b.length; d < e; d++) {
                    if (c.contains(this, b[d])) {
                        return true
                    }
                }
            })
        },
        not: function(a) {
            return this.pushStack(bb(this, a, false), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bb(this, a, true), "filter", a)
        },
        is: function(a) {
            return !! a && c.filter(a, this).length > 0
        },
        closest: function(j, a) {
            if (c.isArray(j)) {
                var b = [],
                e = this[0],
                d,
                f = {},
                i;
                if (e && j.length) {
                    d = 0;
                    for (var g = j.length; d < g; d++) {
                        i = j[d];
                        f[i] || (f[i] = c.expr.match.POS.test(i) ? c(i, a || this.context) : i)
                    }
                    for (; e && e.ownerDocument && e !== a;) {
                        for (i in f) {
                            d = f[i];
                            if (d.jquery ? d.index(e) > -1 : c(e).is(d)) {
                                b.push({
                                    selector: i,
                                    elem: e
                                });
                                delete f[i]
                            }
                        }
                        e = e.parentNode
                    }
                }
                return b
            }
            var h = c.expr.match.POS.test(j) ? c(j, a || this.context) : null;
            return this.map(function(k, l) {
                for (; l && l.ownerDocument && l !== a;) {
                    if (h ? h.index(l) > -1 : c(l).is(j)) {
                        return l
                    }
                    l = l.parentNode
                }
                return null
            })
        },
        index: function(a) {
            if (!a || typeof a === "string") {
                return c.inArray(this[0], a ? c(a) : this.parent().children())
            }
            return c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            a = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a);
            b = c.merge(this.get(), a);
            return this.pushStack(a0(a[0]) || a0(b[0]) ? b: c.unique(b))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a: null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(b, d, a) {
            return c.dir(b, "parentNode", a)
        },
        next: function(a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(b, d, a) {
            return c.dir(b, "nextSibling", a)
        },
        prevUntil: function(b, d, a) {
            return c.dir(b, "previousSibling", a)
        },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        c.fn[a] = function(f, e) {
            var d = c.map(this, b, f);
            bq.test(a) || (e = f);
            if (e && typeof e === "string") {
                d = c.filter(e, d)
            }
            d = this.length > 1 ? c.unique(d) : d;
            if ((this.length > 1 || b7.test(e)) && bZ.test(a)) {
                d = d.reverse()
            }
            return this.pushStack(d, a, ba.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function(b, d, a) {
            if (a) {
                b = ":not(" + b + ")"
            }
            return c.find.matches(b, d)
        },
        dir: function(a, b, d) {
            var e = [];
            for (a = a[b]; a && a.nodeType !== 9 && (d === ce || a.nodeType !== 1 || !c(a).is(d));) {
                a.nodeType === 1 && e.push(a);
                a = a[b]
            }
            return e
        },
        nth: function(a, b, d) {
            b = b || 1;
            for (var e = 0; a; a = a[d]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function(b, d) {
            for (var a = []; b; b = b.nextSibling) {
                b.nodeType === 1 && b !== d && a.push(b)
            }
            return a
        }
    });
    var ct = / jQuery\d+="(?:\d+|null)"/g,
    bO = /^\s+/,
    bB = /(<([\w:]+)[^>]*?)\/>/g,
    bv = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
    aa = /<([\w:]+)/,
    cl = /<tbody/i,
    cm = /<|&#?\w+;/,
    bH = /<script|<object|<embed|<option|<style/i,
    bX = /checked\s*(?:[^=]|=\s*.checked.)/i,
    V = function(b, d, a) {
        return bv.test(a) ? b: d + "></" + a + ">"
    },
    cn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    cn.optgroup = cn.option;
    cn.tbody = cn.tfoot = cn.colgroup = cn.caption = cn.thead;
    cn.th = cn.td;
    if (!c.support.htmlSerialize) {
        cn._default = [1, "div<div>", "</div>"]
    }
    c.fn.extend({
        text: function(a) {
            if (c.isFunction(a)) {
                return this.each(function(b) {
                    var d = c(this);
                    d.text(a.call(this, b, d.text()))
                })
            }
            if (typeof a !== "object" && a !== ce) {
                return this.empty().append((this[0] && this[0].ownerDocument || ca).createTextNode(a))
            }
            return c.text(this)
        },
        wrapAll: function(a) {
            if (c.isFunction(a)) {
                return this.each(function(d) {
                    c(this).wrapAll(a.call(this, d))
                })
            }
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) {
                        d = d.firstChild
                    }
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (c.isFunction(a)) {
                return this.each(function(b) {
                    c(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function() {
                var b = c(this),
                d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                c(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false,
                function(b) {
                    this.parentNode.insertBefore(b, this)
                })
            } else {
                if (arguments.length) {
                    var a = c(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false,
                function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, c(arguments[0]).toArray());
                    return a
                }
            }
        },
        remove: function(a, b) {
            for (var d = 0,
            e; (e = this[d]) != null; d++) {
                if (!a || c.filter(a, [e]).length) {
                    if (!b && e.nodeType === 1) {
                        c.cleanData(e.getElementsByTagName("*"));
                        c.cleanData([e])
                    }
                    e.parentNode && e.parentNode.removeChild(e)
                }
            }
            return this
        },
        empty: function() {
            for (var a = 0,
            b; (b = this[a]) != null; a++) {
                for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function(a) {
            var b = this.map(function() {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var d = this.outerHTML,
                    e = this.ownerDocument;
                    if (!d) {
                        d = e.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d = d.innerHTML
                    }
                    return c.clean([d.replace(ct, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(bO, "")], e)[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (a === true) {
                bs(this, b);
                bs(this.find("*"), b.find("*"))
            }
            return b
        },
        html: function(a) {
            if (a === ce) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ct, "") : null
            } else {
                if (typeof a === "string" && !bH.test(a) && (c.support.leadingWhitespace || !bO.test(a)) && !cn[(aa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(bB, V);
                    try {
                        for (var b = 0,
                        d = this.length; b < d; b++) {
                            if (this[b].nodeType === 1) {
                                c.cleanData(this[b].getElementsByTagName("*"));
                                this[b].innerHTML = a
                            }
                        }
                    } catch(e) {
                        this.empty().append(a)
                    }
                } else {
                    c.isFunction(a) ? this.each(function(f) {
                        var h = c(this),
                        g = h.html();
                        h.empty().append(function() {
                            return a.call(this, f, g)
                        })
                    }) : this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) {
                    return this.each(function(e) {
                        var b = c(this),
                        d = b.html();
                        b.replaceWith(a.call(this, e, d))
                    })
                }
                if (typeof a !== "string") {
                    a = c(a).detach()
                }
                return this.each(function() {
                    var b = this.nextSibling,
                    d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            } else {
                return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
            }
        },
        detach: function(a) {
            return this.remove(a, true)
        },
        domManip: function(h, k, l) {
            function f(m) {
                return c.nodeName(m, "table") ? m.getElementsByTagName("tbody")[0] || m.appendChild(m.ownerDocument.createElement("tbody")) : m
            }
            var a, g, b = h[0],
            j = [],
            e;
            if (!c.support.checkClone && arguments.length === 3 && typeof b === "string" && bX.test(b)) {
                return this.each(function() {
                    c(this).domManip(h, k, l, true)
                })
            }
            if (c.isFunction(b)) {
                return this.each(function(m) {
                    var n = c(this);
                    h[0] = b.call(this, m, k ? n.html() : ce);
                    n.domManip(h, k, l)
                })
            }
            if (this[0]) {
                a = b && b.parentNode;
                a = c.support.parentNode && a && a.nodeType === 11 && a.childNodes.length === this.length ? {
                    fragment: a
                }: W(h, this, j);
                e = a.fragment;
                if (g = e.childNodes.length === 1 ? (e = e.firstChild) : e.firstChild) {
                    k = k && c.nodeName(g, "tr");
                    for (var d = 0,
                    i = this.length; d < i; d++) {
                        l.call(k ? f(this[d], g) : this[d], d > 0 || a.cacheable || this.length > 1 ? e.cloneNode(true) : e)
                    }
                }
                j.length && c.each(j, bM)
            }
            return this
        }
    });
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        c.fn[a] = function(g) {
            var d = [];
            g = c(g);
            var h = this.length === 1 && this[0].parentNode;
            if (h && h.nodeType === 11 && h.childNodes.length === 1 && g.length === 1) {
                g[b](this[0]);
                return this
            } else {
                h = 0;
                for (var f = g.length; h < f; h++) {
                    var e = (h > 0 ? this.clone(true) : this).get();
                    c.fn[b].apply(c(g[h]), e);
                    d = d.concat(e)
                }
                return this.pushStack(d, a, g.selector)
            }
        }
    });
    c.extend({
        clean: function(h, k, l, f) {
            k = k || ca;
            if (typeof k.createElement === "undefined") {
                k = k.ownerDocument || k[0] && k[0].ownerDocument || ca
            }
            for (var a = [], g = 0, b; (b = h[g]) != null; g++) {
                if (typeof b === "number") {
                    b += ""
                }
                if (b) {
                    if (typeof b === "string" && !cm.test(b)) {
                        b = k.createTextNode(b)
                    } else {
                        if (typeof b === "string") {
                            b = b.replace(bB, V);
                            var j = (aa.exec(b) || ["", ""])[1].toLowerCase(),
                            e = cn[j] || cn._default,
                            d = e[0],
                            i = k.createElement("div");
                            for (i.innerHTML = e[1] + b + e[2]; d--;) {
                                i = i.lastChild
                            }
                            if (!c.support.tbody) {
                                d = cl.test(b);
                                j = j === "table" && !d ? i.firstChild && i.firstChild.childNodes: e[1] === "<table>" && !d ? i.childNodes: [];
                                for (e = j.length - 1; e >= 0; --e) {
                                    c.nodeName(j[e], "tbody") && !j[e].childNodes.length && j[e].parentNode.removeChild(j[e])
                                }
                            } ! c.support.leadingWhitespace && bO.test(b) && i.insertBefore(k.createTextNode(bO.exec(b)[0]), i.firstChild);
                            b = i.childNodes
                        }
                    }
                    if (b.nodeType) {
                        a.push(b)
                    } else {
                        a = c.merge(a, b)
                    }
                }
            }
            if (l) {
                for (g = 0; a[g]; g++) {
                    if (f && c.nodeName(a[g], "script") && (!a[g].type || a[g].type.toLowerCase() === "text/javascript")) {
                        f.push(a[g].parentNode ? a[g].parentNode.removeChild(a[g]) : a[g])
                    } else {
                        a[g].nodeType === 1 && a.splice.apply(a, [g + 1, 0].concat(c.makeArray(a[g].getElementsByTagName("script"))));
                        l.appendChild(a[g])
                    }
                }
            }
            return a
        },
        cleanData: function(j) {
            for (var a, b, e = c.cache,
            d = c.event.special,
            f = c.support.deleteExpando,
            i = 0,
            g; (g = j[i]) != null; i++) {
                if (b = g[c.expando]) {
                    a = e[b];
                    if (a.events) {
                        for (var h in a.events) {
                            d[h] ? c.event.remove(g, h) : O(g, h, a.handle)
                        }
                    }
                    if (f) {
                        delete g[c.expando]
                    } else {
                        g.removeAttribute && g.removeAttribute(c.expando)
                    }
                    delete e[b]
                }
            }
        }
    });
    var bn = /z-?index|font-?weight|opacity|zoom|line-?height/i,
    b5 = /alpha\([^)]*\)/,
    cg = /opacity=([^)]*)/,
    R = /float/i,
    ch = /-([a-z])/ig,
    bG = /([A-Z])/g,
    co = /^-?\d+(?:px)?$/i,
    G = /^-?\d/,
    A = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Q = ["Left", "Right"],
    bY = ["Top", "Bottom"],
    bt = ca.defaultView && ca.defaultView.getComputedStyle,
    bW = c.support.cssFloat ? "cssFloat": "styleFloat",
    ci = function(a, b) {
        return b.toUpperCase()
    };
    c.fn.css = function(a, b) {
        return bQ(this, a, b, true,
        function(f, e, d) {
            if (d === ce) {
                return c.curCSS(f, e)
            }
            if (typeof d === "number" && !bn.test(e)) {
                d += "px"
            }
            c.style(f, e, d)
        })
    };
    c.extend({
        style: function(d, b, e) {
            if (!d || d.nodeType === 3 || d.nodeType === 8) {
                return ce
            }
            if ((b === "width" || b === "height") && parseFloat(e) < 0) {
                e = ce
            }
            var f = d.style || d,
            a = e !== ce;
            if (!c.support.opacity && b === "opacity") {
                if (a) {
                    f.zoom = 1;
                    b = parseInt(e, 10) + "" === "NaN" ? "": "alpha(opacity=" + e * 100 + ")";
                    d = f.filter || c.curCSS(d, "filter") || "";
                    f.filter = b5.test(d) ? d.replace(b5, b) : b
                }
                return f.filter && f.filter.indexOf("opacity=") >= 0 ? parseFloat(cg.exec(f.filter)[1]) / 100 + "": ""
            }
            if (R.test(b)) {
                b = bW
            }
            b = b.replace(ch, ci);
            if (a) {
                f[b] = e
            }
            return f[b]
        },
        css: function(f, b, d, g) {
            if (b === "width" || b === "height") {
                var a, h = b === "width" ? Q: bY;
                function e() {
                    a = b === "width" ? f.offsetWidth: f.offsetHeight;
                    g !== "border" && c.each(h,
                    function() {
                        g || (a -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0);
                        if (g === "margin") {
                            a += parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                        } else {
                            a -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                f.offsetWidth !== 0 ? e() : c.swap(f, A, e);
                return Math.max(0, Math.round(a))
            }
            return c.curCSS(f, b, d)
        },
        curCSS: function(e, b, a) {
            var f, d = e.style;
            if (!c.support.opacity && b === "opacity" && e.currentStyle) {
                f = cg.test(e.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "": "";
                return f === "" ? "1": f
            }
            if (R.test(b)) {
                b = bW
            }
            if (!a && d && d[b]) {
                f = d[b]
            } else {
                if (bt) {
                    if (R.test(b)) {
                        b = "float"
                    }
                    b = b.replace(bG, "-$1").toLowerCase();
                    d = e.ownerDocument.defaultView;
                    if (!d) {
                        return null
                    }
                    if (e = d.getComputedStyle(e, null)) {
                        f = e.getPropertyValue(b)
                    }
                    if (b === "opacity" && f === "") {
                        f = "1"
                    }
                } else {
                    if (e.currentStyle) {
                        a = b.replace(ch, ci);
                        f = e.currentStyle[b] || e.currentStyle[a];
                        if (!co.test(f) && G.test(f)) {
                            b = d.left;
                            var g = e.runtimeStyle.left;
                            e.runtimeStyle.left = e.currentStyle.left;
                            d.left = a === "fontSize" ? "1em": f || 0;
                            f = d.pixelLeft + "px";
                            d.left = b;
                            e.runtimeStyle.left = g
                        }
                    }
                }
            }
            return f
        },
        swap: function(d, b, e) {
            var f = {};
            for (var a in b) {
                f[a] = d.style[a];
                d.style[a] = b[a]
            }
            e.call(d);
            for (a in b) {
                d.style[a] = f[a]
            }
        }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
            d = a.offsetHeight,
            e = a.nodeName.toLowerCase() === "tr";
            return b === 0 && d === 0 && !e ? true: b > 0 && d > 0 && !e ? false: c.curCSS(a, "display") === "none"
        };
        c.expr.filters.visible = function(a) {
            return ! c.expr.filters.hidden(a)
        }
    }
    var Z = P(),
    ab = /<script(.|\s)*?\/script>/gi,
    T = /select|textarea/i,
    cj = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
    cw = /=\?(&|$)/,
    bm = /\?/,
    X = /(\?|&)_=.*?(&|$)/,
    br = /^(\w+:)?\/\/([^\/?#]+)/,
    b4 = /%20/g,
    cf = c.fn.load;
    c.fn.extend({
        load: function(e, b, a) {
            if (typeof e !== "string") {
                return cf.call(this, e)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var f = e.indexOf(" ");
            if (f >= 0) {
                var d = e.slice(f, e.length);
                e = e.slice(0, f)
            }
            f = "GET";
            if (b) {
                if (c.isFunction(b)) {
                    a = b;
                    b = null
                } else {
                    if (typeof b === "object") {
                        b = c.param(b, c.ajaxSettings.traditional);
                        f = "POST"
                    }
                }
            }
            var g = this;
            c.ajax({
                url: e,
                type: f,
                dataType: "html",
                data: b,
                complete: function(i, h) {
                    if (h === "success" || h === "notmodified") {
                        g.html(d ? c("<div />").append(i.responseText.replace(ab, "")).find(d) : i.responseText)
                    }
                    a && g.each(a, [i.responseText, h, i])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || T.test(this.nodeName) || cj.test(this.type))
            }).map(function(a, b) {
                a = c(this).val();
                return a == null ? null: c.isArray(a) ? c.map(a,
                function(d) {
                    return {
                        name: b.name,
                        value: d
                    }
                }) : {
                    name: b.name,
                    value: a
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        c.fn[b] = function(d) {
            return this.bind(b, d)
        }
    });
    c.extend({
        get: function(a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = null
            }
            return c.ajax({
                type: "GET",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        getScript: function(a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function(b, d, a) {
            return c.get(b, d, a, "json")
        },
        post: function(a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = {}
            }
            return c.ajax({
                type: "POST",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        ajaxSetup: function(a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: Y.XMLHttpRequest && (Y.location.protocol !== "file:" || !Y.ActiveXObject) ?
            function() {
                return new Y.XMLHttpRequest
            }: function() {
                try {
                    return new Y.ActiveXObject("Microsoft.XMLHTTP")
                } catch(a) {}
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function(n) {
            function r() {
                t.success && t.success.call(d, h, a, o);
                t.global && v("ajaxSuccess", [o, t])
            }
            function p() {
                t.complete && t.complete.call(d, o, a);
                t.global && v("ajaxComplete", [o, t]);
                t.global && !--c.active && c.event.trigger("ajaxStop")
            }
            function v(z, B) { (t.context ? c(t.context) : c.event).trigger(z, B)
            }
            var t = c.extend(true, {},
            c.ajaxSettings, n),
            b,
            a,
            h,
            d = n && n.context || t,
            g = t.type.toUpperCase();
            if (t.data && t.processData && typeof t.data !== "string") {
                t.data = c.param(t.data, t.traditional)
            }
            if (t.dataType === "jsonp") {
                if (g === "GET") {
                    cw.test(t.url) || (t.url += (bm.test(t.url) ? "&": "?") + (t.jsonp || "callback") + "=?")
                } else {
                    if (!t.data || !cw.test(t.data)) {
                        t.data = (t.data ? t.data + "&": "") + (t.jsonp || "callback") + "=?"
                    }
                }
                t.dataType = "json"
            }
            if (t.dataType === "json" && (t.data && cw.test(t.data) || cw.test(t.url))) {
                b = t.jsonpCallback || "jsonp" + Z++;
                if (t.data) {
                    t.data = (t.data + "").replace(cw, "=" + b + "$1")
                }
                t.url = t.url.replace(cw, "=" + b + "$1");
                t.dataType = "script";
                Y[b] = Y[b] ||
                function(z) {
                    h = z;
                    r();
                    p();
                    Y[b] = ce;
                    try {
                        delete Y[b]
                    } catch(B) {}
                    l && l.removeChild(m)
                }
            }
            if (t.dataType === "script" && t.cache === null) {
                t.cache = false
            }
            if (t.cache === false && g === "GET") {
                var k = P(),
                j = t.url.replace(X, "$1_=" + k + "$2");
                t.url = j + (j === t.url ? (bm.test(t.url) ? "&": "?") + "_=" + k: "")
            }
            if (t.data && g === "GET") {
                t.url += (bm.test(t.url) ? "&": "?") + t.data
            }
            t.global && !c.active++&&c.event.trigger("ajaxStart");
            k = (k = br.exec(t.url)) && (k[1] && k[1] !== location.protocol || k[2] !== location.host);
            if (t.dataType === "script" && g === "GET" && k) {
                var l = ca.getElementsByTagName("head")[0] || ca.documentElement,
                m = ca.createElement("script");
                m.src = t.url;
                if (t.scriptCharset) {
                    m.charset = t.scriptCharset
                }
                if (!b) {
                    var i = false;
                    m.onload = m.onreadystatechange = function() {
                        if (!i && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            i = true;
                            r();
                            p();
                            m.onload = m.onreadystatechange = null;
                            l && m.parentNode && l.removeChild(m)
                        }
                    }
                }
                l.insertBefore(m, l.firstChild);
                return ce
            }
            var u = false,
            o = t.xhr();
            if (o) {
                t.username ? o.open(g, t.url, t.async, t.username, t.password) : o.open(g, t.url, t.async);
                try {
                    if (t.data || n && n.contentType) {
                        o.setRequestHeader("Content-Type", t.contentType)
                    }
                    if (t.ifModified) {
                        c.lastModified[t.url] && o.setRequestHeader("If-Modified-Since", c.lastModified[t.url]);
                        c.etag[t.url] && o.setRequestHeader("If-None-Match", c.etag[t.url])
                    }
                    k || o.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    o.setRequestHeader("Accept", t.dataType && t.accepts[t.dataType] ? t.accepts[t.dataType] + ", */*": t.accepts._default)
                } catch(q) {}
                if (t.beforeSend && t.beforeSend.call(d, o, t) === false) {
                    t.global && !--c.active && c.event.trigger("ajaxStop");
                    o.abort();
                    return false
                }
                t.global && v("ajaxSend", [o, t]);
                var x = o.onreadystatechange = function(z) {
                    if (!o || o.readyState === 0 || z === "abort") {
                        u || p();
                        u = true;
                        if (o) {
                            o.onreadystatechange = c.noop
                        }
                    } else {
                        if (!u && o && (o.readyState === 4 || z === "timeout")) {
                            u = true;
                            o.onreadystatechange = c.noop;
                            a = z === "timeout" ? "timeout": !c.httpSuccess(o) ? "error": t.ifModified && c.httpNotModified(o, t.url) ? "notmodified": "success";
                            var C;
                            if (a === "success") {
                                try {
                                    h = c.httpData(o, t.dataType, t)
                                } catch(B) {
                                    a = "parsererror";
                                    C = B
                                }
                            }
                            if (a === "success" || a === "notmodified") {
                                b || r()
                            } else {
                                c.handleError(t, o, a, C)
                            }
                            p();
                            z === "timeout" && o.abort();
                            if (t.async) {
                                o = null
                            }
                        }
                    }
                };
                try {
                    var y = o.abort;
                    o.abort = function() {
                        o && y.call(o);
                        x("abort")
                    }
                } catch(e) {}
                t.async && t.timeout > 0 && setTimeout(function() {
                    o && !u && x("timeout")
                },
                t.timeout);
                try {
                    o.send(g === "POST" || g === "PUT" || g === "DELETE" ? t.data: null)
                } catch(f) {
                    c.handleError(t, o, null, f);
                    p()
                }
                t.async || x();
                return o
            }
        },
        handleError: function(a, b, d, e) {
            if (a.error) {
                a.error.call(a.context || a, b, d, e)
            }
            if (a.global) { (a.context ? c(a.context) : c.event).trigger("ajaxError", [b, a, e])
            }
        },
        active: 0,
        httpSuccess: function(a) {
            try {
                return ! a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223 || a.status === 0
            } catch(b) {}
            return false
        },
        httpNotModified: function(a, b) {
            var d = a.getResponseHeader("Last-Modified"),
            e = a.getResponseHeader("Etag");
            if (d) {
                c.lastModified[b] = d
            }
            if (e) {
                c.etag[b] = e
            }
            return a.status === 304 || a.status === 0
        },
        httpData: function(d, b, e) {
            var f = d.getResponseHeader("content-type") || "",
            a = b === "xml" || !b && f.indexOf("xml") >= 0;
            d = a ? d.responseXML: d.responseText;
            a && d.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (e && e.dataFilter) {
                d = e.dataFilter(d, b)
            }
            if (typeof d === "string") {
                if (b === "json" || !b && f.indexOf("json") >= 0) {
                    d = c.parseJSON(d)
                } else {
                    if (b === "script" || !b && f.indexOf("javascript") >= 0) {
                        c.globalEval(d)
                    }
                }
            }
            return d
        },
        param: function(e, b) {
            function a(i, h) {
                if (c.isArray(h)) {
                    c.each(h,
                    function(k, j) {
                        b || /\[\]$/.test(i) ? f(i, j) : a(i + "[" + (typeof j === "object" || c.isArray(j) ? k: "") + "]", j)
                    })
                } else { ! b && h != null && typeof h === "object" ? c.each(h,
                    function(k, j) {
                        a(i + "[" + k + "]", j)
                    }) : f(i, h)
                }
            }
            function f(i, h) {
                h = c.isFunction(h) ? h() : h;
                d[d.length] = encodeURIComponent(i) + "=" + encodeURIComponent(h)
            }
            var d = [];
            if (b === ce) {
                b = c.ajaxSettings.traditional
            }
            if (c.isArray(e) || e.jquery) {
                c.each(e,
                function() {
                    f(this.name, this.value)
                })
            } else {
                for (var g in e) {
                    a(g, e[g])
                }
            }
            return d.join("&").replace(b4, "+")
        }
    });
    var cp = {},
    L = /toggle|show|hide/,
    b6 = /^([+-]=)?([\d+-.]+)(.*)$/,
    bP, cu = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    c.fn.extend({
        show: function(d, b) {
            if (d || d === 0) {
                return this.animate(cq("show", 3), d, b)
            } else {
                d = 0;
                for (b = this.length; d < b; d++) {
                    var e = c.data(this[d], "olddisplay");
                    this[d].style.display = e || "";
                    if (c.css(this[d], "display") === "none") {
                        e = this[d].nodeName;
                        var f;
                        if (cp[e]) {
                            f = cp[e]
                        } else {
                            var a = c("<" + e + " />").appendTo("body");
                            f = a.css("display");
                            if (f === "none") {
                                f = "block"
                            }
                            a.remove();
                            cp[e] = f
                        }
                        c.data(this[d], "olddisplay", f)
                    }
                }
                d = 0;
                for (b = this.length; d < b; d++) {
                    this[d].style.display = c.data(this[d], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function(b, d) {
            if (b || b === 0) {
                return this.animate(cq("hide", 3), b, d)
            } else {
                b = 0;
                for (d = this.length; b < d; b++) {
                    var a = c.data(this[b], "olddisplay"); ! a && a !== "none" && c.data(this[b], "olddisplay", c.css(this[b], "display"))
                }
                b = 0;
                for (d = this.length; b < d; b++) {
                    this[b].style.display = "none"
                }
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function(b, d) {
            var a = typeof b === "boolean";
            if (c.isFunction(b) && c.isFunction(d)) {
                this._toggle.apply(this, arguments)
            } else {
                b == null || a ? this.each(function() {
                    var e = a ? b: c(this).is(":hidden");
                    c(this)[e ? "show": "hide"]()
                }) : this.animate(cq("toggle", 3), b, d)
            }
            return this
        },
        fadeTo: function(b, d, a) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: d
            },
            b, a)
        },
        animate: function(d, b, e, f) {
            var a = c.speed(b, e, f);
            if (c.isEmptyObject(d)) {
                return this.each(a.complete)
            }
            return this[a.queue === false ? "each": "queue"](function() {
                var k = c.extend({},
                a),
                j,
                i = this.nodeType === 1 && c(this).is(":hidden"),
                g = this;
                for (j in d) {
                    var h = j.replace(ch, ci);
                    if (j !== h) {
                        d[h] = d[j];
                        delete d[j];
                        j = h
                    }
                    if (d[j] === "hide" && i || d[j] === "show" && !i) {
                        return k.complete.call(this)
                    }
                    if ((j === "height" || j === "width") && this.style) {
                        k.display = c.css(this, "display");
                        k.overflow = this.style.overflow
                    }
                    if (c.isArray(d[j])) { (k.specialEasing = k.specialEasing || {})[j] = d[j][1];
                        d[j] = d[j][0]
                    }
                }
                if (k.overflow != null) {
                    this.style.overflow = "hidden"
                }
                k.curAnim = c.extend({},
                d);
                c.each(d,
                function(p, q) {
                    var m = new c.fx(g, k, p);
                    if (L.test(q)) {
                        m[q === "toggle" ? i ? "show": "hide": q](d)
                    } else {
                        var n = b6.exec(q),
                        l = m.cur(true) || 0;
                        if (n) {
                            q = parseFloat(n[2]);
                            var o = n[3] || "px";
                            if (o !== "px") {
                                g.style[p] = (q || 1) + o;
                                l = (q || 1) / m.cur(true) * l;
                                g.style[p] = l + o
                            }
                            if (n[1]) {
                                q = (n[1] === "-=" ? -1 : 1) * q + l
                            }
                            m.custom(l, q, o)
                        } else {
                            m.custom(l, q, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function(b, d) {
            var a = c.timers;
            b && this.queue([]);
            this.each(function() {
                for (var e = a.length - 1; e >= 0; e--) {
                    if (a[e].elem === this) {
                        d && a[e](true);
                        a.splice(e, 1)
                    }
                }
            });
            d || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: cq("show", 1),
        slideUp: cq("hide", 1),
        slideToggle: cq("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    },
    function(a, b) {
        c.fn[a] = function(d, e) {
            return this.animate(b, d, e)
        }
    });
    c.extend({
        speed: function(a, b, d) {
            var e = a && typeof a === "object" ? a: {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration: c.fx.speeds[e.duration] || c.fx.speeds._default;
            e.old = e.complete;
            e.complete = function() {
                e.queue !== false && c(this).dequeue();
                c.isFunction(e.old) && e.old.call(this)
            };
            return e
        },
        easing: {
            linear: function(a, b, d, e) {
                return d + e * a
            },
            swing: function(a, b, d, e) {
                return ( - Math.cos(a * Math.PI) / 2 + 0.5) * e + d
            }
        },
        timers: [],
        fx: function(b, d, a) {
            this.options = d;
            this.elem = b;
            this.prop = a;
            if (!d.orig) {
                d.orig = {}
            }
        }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (c.fx.step[this.prop] || c.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function(a) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            return (a = parseFloat(c.css(this.elem, this.prop, a))) && a > -10000 ? a: parseFloat(c.curCSS(this.elem, this.prop)) || 0
        },
        custom: function(d, b, e) {
            function f(g) {
                return a.step(g)
            }
            this.startTime = P();
            this.start = d;
            this.end = b;
            this.unit = e || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var a = this;
            f.elem = this.elem;
            if (f() && c.timers.push(f) && !bP) {
                bP = setInterval(c.fx.tick, 13)
            }
        },
        show: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(d) {
            var b = P(),
            e = true;
            if (d || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var f in this.options.curAnim) {
                    if (this.options.curAnim[f] !== true) {
                        e = false
                    }
                }
                if (e) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        d = c.data(this.elem, "olddisplay");
                        this.elem.style.display = d ? d: this.options.display;
                        if (c.css(this.elem, "display") === "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show) {
                        for (var a in this.options.curAnim) {
                            c.style(this.elem, a, this.options.orig[a])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                a = b - this.startTime;
                this.state = a / this.options.duration;
                d = this.options.easing || (c.easing.swing ? "swing": "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || d](this.state, a, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a = c.timers,
            b = 0; b < a.length; b++) {
                a[b]() || a.splice(b--, 1)
            }
            a.length || c.fx.stop()
        },
        stop: function() {
            clearInterval(bP);
            bP = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                if (a.elem.style && a.elem.style[a.prop] != null) {
                    a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit
                } else {
                    a.elem[a.prop] = a.now
                }
            }
        }
    });
    if (c.expr && c.expr.filters) {
        c.expr.filters.animated = function(a) {
            return c.grep(c.timers,
            function(b) {
                return a === b.elem
            }).length
        }
    }
    c.fn.offset = "getBoundingClientRect" in ca.documentElement ?
    function(a) {
        var b = this[0];
        if (a) {
            return this.each(function(f) {
                c.offset.setOffset(this, a, f)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return c.offset.bodyOffset(b)
        }
        var d = b.getBoundingClientRect(),
        e = b.ownerDocument;
        b = e.body;
        e = e.documentElement;
        return {
            top: d.top + (self.pageYOffset || c.support.boxModel && e.scrollTop || b.scrollTop) - (e.clientTop || b.clientTop || 0),
            left: d.left + (self.pageXOffset || c.support.boxModel && e.scrollLeft || b.scrollLeft) - (e.clientLeft || b.clientLeft || 0)
        }
    }: function(j) {
        var k = this[0];
        if (j) {
            return this.each(function(l) {
                c.offset.setOffset(this, j, l)
            })
        }
        if (!k || !k.ownerDocument) {
            return null
        }
        if (k === k.ownerDocument.body) {
            return c.offset.bodyOffset(k)
        }
        c.offset.initialize();
        var a = k.offsetParent,
        b = k,
        e = k.ownerDocument,
        g, f = e.documentElement,
        h = e.body;
        b = (e = e.defaultView) ? e.getComputedStyle(k, null) : k.currentStyle;
        for (var d = k.offsetTop,
        i = k.offsetLeft; (k = k.parentNode) && k !== h && k !== f;) {
            if (c.offset.supportsFixedPosition && b.position === "fixed") {
                break
            }
            g = e ? e.getComputedStyle(k, null) : k.currentStyle;
            d -= k.scrollTop;
            i -= k.scrollLeft;
            if (k === a) {
                d += k.offsetTop;
                i += k.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(k.nodeName))) {
                    d += parseFloat(g.borderTopWidth) || 0;
                    i += parseFloat(g.borderLeftWidth) || 0
                }
                b = a;
                a = k.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && g.overflow !== "visible") {
                d += parseFloat(g.borderTopWidth) || 0;
                i += parseFloat(g.borderLeftWidth) || 0
            }
            b = g
        }
        if (b.position === "relative" || b.position === "static") {
            d += h.offsetTop;
            i += h.offsetLeft
        }
        if (c.offset.supportsFixedPosition && b.position === "fixed") {
            d += Math.max(f.scrollTop, h.scrollTop);
            i += Math.max(f.scrollLeft, h.scrollLeft)
        }
        return {
            top: d,
            left: i
        }
    };
    c.offset = {
        initialize: function() {
            var e = ca.body,
            b = ca.createElement("div"),
            a,
            f,
            d,
            g = parseFloat(c.curCSS(e, "marginTop", true)) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            e.insertBefore(b, e.firstChild);
            a = b.firstChild;
            f = a.firstChild;
            d = a.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = f.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = d.offsetTop === 5;
            f.style.position = "fixed";
            f.style.top = "20px";
            this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
            f.style.position = f.style.top = "";
            a.style.overflow = "hidden";
            a.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== g;
            e.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function(b) {
            var d = b.offsetTop,
            a = b.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                d += parseFloat(c.curCSS(b, "marginTop", true)) || 0;
                a += parseFloat(c.curCSS(b, "marginLeft", true)) || 0
            }
            return {
                top: d,
                left: a
            }
        },
        setOffset: function(f, b, d) {
            if (/static/.test(c.curCSS(f, "position"))) {
                f.style.position = "relative"
            }
            var g = c(f),
            a = g.offset(),
            h = parseInt(c.curCSS(f, "top", true), 10) || 0,
            e = parseInt(c.curCSS(f, "left", true), 10) || 0;
            if (c.isFunction(b)) {
                b = b.call(f, d, a)
            }
            d = {
                top: b.top - a.top + h,
                left: b.left - a.left + e
            };
            "using" in b ? b.using.call(f, d) : g.css(d)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var a = this[0],
            b = this.offsetParent(),
            d = this.offset(),
            e = /^body|html$/i.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            d.top -= parseFloat(c.curCSS(a, "marginTop", true)) || 0;
            d.left -= parseFloat(c.curCSS(a, "marginLeft", true)) || 0;
            e.top += parseFloat(c.curCSS(b[0], "borderTopWidth", true)) || 0;
            e.left += parseFloat(c.curCSS(b[0], "borderLeftWidth", true)) || 0;
            return {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ca.body; a && !/^body|html$/i.test(a.nodeName) && c.css(a, "position") === "static";) {
                    a = a.offsetParent
                }
                return a
            })
        }
    });
    c.each(["Left", "Top"],
    function(b, d) {
        var a = "scroll" + d;
        c.fn[a] = function(g) {
            var f = this[0],
            e;
            if (!f) {
                return null
            }
            if (g !== ce) {
                return this.each(function() {
                    if (e = bp(this)) {
                        e.scrollTo(!b ? g: c(e).scrollLeft(), b ? g: c(e).scrollTop())
                    } else {
                        this[a] = g
                    }
                })
            } else {
                return (e = bp(f)) ? "pageXOffset" in e ? e[b ? "pageYOffset": "pageXOffset"] : c.support.boxModel && e.document.documentElement[a] || e.document.body[a] : f[a]
            }
        }
    });
    c.each(["Height", "Width"],
    function(b, d) {
        var a = d.toLowerCase();
        c.fn["inner" + d] = function() {
            return this[0] ? c.css(this[0], a, false, "padding") : null
        };
        c.fn["outer" + d] = function(e) {
            return this[0] ? c.css(this[0], a, false, e ? "margin": "border") : null
        };
        c.fn[a] = function(f) {
            var e = this[0];
            if (!e) {
                return f == null ? null: this
            }
            if (c.isFunction(f)) {
                return this.each(function(h) {
                    var g = c(this);
                    g[a](f.call(this, h, g[a]()))
                })
            }
            return "scrollTo" in e && e.document ? e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + d] || e.document.body["client" + d] : e.nodeType === 9 ? Math.max(e.documentElement["client" + d], e.body["scroll" + d], e.documentElement["scroll" + d], e.body["offset" + d], e.documentElement["offset" + d]) : f === ce ? c.css(e, a) : this.css(a, typeof f === "string" ? f: f + "px")
        }
    });
    Y.jQuery = Y.$ = c
})(window);
jQuery.cookie = function(q, v, s) {
    if (typeof v != "undefined") {
        s = s || {};
        if (v === null) {
            v = "";
            s.expires = -1
        }
        var n = "";
        if (s.expires && (typeof s.expires == "number" || s.expires.toUTCString)) {
            var i;
            if (typeof s.expires == "number") {
                i = new Date();
                i.setTime(i.getTime() + (s.expires * 24 * 60 * 60 * 1000))
            } else {
                i = s.expires
            }
            n = "; expires=" + i.toUTCString()
        }
        var t = s.path ? "; path=" + (s.path) : "";
        var x = s.domain ? "; domain=" + (s.domain) : "";
        var r = s.secure ? "; secure": "";
        document.cookie = [q, "=", encodeURIComponent(v), n, t, x, r].join("")
    } else {
        var o = null;
        if (document.cookie && document.cookie != "") {
            var u = document.cookie.split(";");
            for (var w = 0; w < u.length; w++) {
                var p = jQuery.trim(u[w]);
                if (p.substring(0, q.length + 1) == (q + "=")) {
                    o = decodeURIComponent(p.substring(q.length + 1));
                    break
                }
            }
        }
        return o
    }
}; (function() {
    jQuery.cookie("test_cookie", "1");
    if (jQuery.cookie("test_cookie")) {
        var b = new Date();
        b.setTime(b.getTime() - 10000);
        document.cookie = "test_cookie=;path=;domain=;expires=" + b.toGMTString()
    } else {
        alert("由于您使用的浏览器设置问题可能导致网页运行不正常。请修改浏览器cookie的限制或尝试其他浏览器。")
    }
})();
var YHDGLOBAL = YHDGLOBAL || {};
YHDGLOBAL.getCookie = function(c, e) {
    if (typeof oppositeDomain == "undefined") {
        return
    }
    var a = {};
    if (typeof c == "string") {
        c = [c]
    }
    if (typeof currSiteType != "undefined" && currSiteType != 1) {
        var d = oppositeDomain;
        if ("https" == document.location.protocol) {
            d = d.replace("http", "https")
        }
        var b = d + "/yhd-common/assign-login-api.do?";
        jQuery(c).each(function() {
            b += "cookieNames=" + this + "&"
        });
        b += "&timestamp=" + new Date() + "&callback=?";
        jQuery.getJSON(b,
        function(f) {
            if (f.ERROR) {
                return
            }
            jQuery(f.info).each(function() {
                a[this.name] = decodeURIComponent(this.value)
            });
            e.apply(a)
        })
    } else {
        jQuery(c).each(function() {
            a[this] = jQuery.cookie(this)
        });
        e.apply(a)
    }
};
YHDGLOBAL.sysCookie = function(g, a) {
    if (typeof oppositeDomain == "undefined") {
        return
    }
    var c = {
        unionKey: 1,
        adgroupKeywordID: 1,
        unionType: 1,
        uid: 1,
        websiteid: 1,
        linkPosition: 1,
        buttonPosition: 1,
        search_browse_history: 1,
        ut: 1,
        uname: 1,
        yihaodian_uid: 1,
        ac: 1,
        ucocode: 1,
        msessionid: 1
    };
    var e = {};
    var b = false;
    var d = jQuery("ut");
    jQuery.getJSON(URLPrefix.passport + "/legal/isAgreeAuth.do?ut=" + d + "&callback=?",
    function(i) {
        if (i && i.isAgreeAuth == 1) {
            var h = oppositeDomain;
            if ("https" == document.location.protocol) {
                h = h.replace("http", "https")
            }
            jQuery.getJSON(h + "/yhd-common/login-api.do?callback=?",
            function(j) {
                if (!j.ERROR) {
                    jQuery(j.info).each(function() {
                        if (this.name == "msessionid") {
                            b = true
                        }
                        if (e[this.name]) {
                            return
                        }
                        if (c[this.name] && jQuery.cookie(this.name)) {
                            return
                        }
                        jQuery.cookie(this.name, decodeURIComponent(this.value), {
                            domain: no3wUrl,
                            path: "/"
                        })
                    });
                    if (!b) {
                        YHDGLOBAL.sysCookie(g, a)
                    } else {
                        if (g && g.length) {
                            f(g, a, this)
                        }
                        jQuery.cookie("isCookieSynchronous", "1", {
                            domain: no3wUrl,
                            path: "/"
                        })
                    }
                }
            })
        } else {}
    });
    function f(j, k, l) {
        if (! (j && j.length)) {
            return
        }
        l = l || window;
        var i = j.shift();
        var h = k.shift() || [];
        for (;; i = j.pop(), h = k.pop()) {
            if (typeof i == "function") {
                try {
                    i.apply(l, h)
                } catch(m) {}
                f(k, j, l);
                return false
            }
        }
    }
}; (function(i) {
    i.fn.jqm = function(a) {
        var b = {
            overlay: 50,
            overlayClass: "jqmOverlay",
            closeClass: "jqmClose",
            trigger: ".jqModal",
            ajax: t,
            ajaxP: t,
            ajaxText: "",
            target: t,
            modal: t,
            toTop: t,
            onShow: t,
            onHide: t,
            onLoad: t
        };
        return this.each(function() {
            if (this._jqm) {
                return u[this._jqm].c = i.extend({},
                u[this._jqm].c, a)
            }
            s++;
            this._jqm = s;
            u[s] = {
                c: i.extend(b, i.jqm.params, a),
                a: t,
                w: i(this).addClass("jqmID" + s),
                s: s
            };
            if (b.trigger) {
                i(this).jqmAddTrigger(b.trigger)
            }
        })
    };
    i.fn.jqmAddClose = function(a) {
        return v(this, a, "jqmHide")
    };
    i.fn.jqmAddTrigger = function(a) {
        return v(this, a, "jqmShow")
    };
    i.fn.jqmShow = function(a) {
        return this.each(function() {
            a = a || window.event;
            i.jqm.open(this._jqm, a)
        })
    };
    i.fn.jqmHide = function(a) {
        return this.each(function() {
            a = a || window.event;
            i.jqm.close(this._jqm, a)
        })
    };
    i.jqm = {
        hash: {},
        open: function(n, a) {
            var b = u[n],
            l = b.c,
            c = "." + l.closeClass,
            k = (parseInt(b.w.css("z-index"))),
            k = (k > 0) ? k: 3000,
            d = i("<div></div>").css({
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                "z-index": k - 1,
                opacity: l.overlay / 100
            });
            if (b.a) {
                return t
            }
            b.t = a;
            b.a = true;
            b.w.css("z-index", k);
            if (l.modal) {

                if (!r[0]) {
                    w("bind")
                }
                r.push(n)
            } else {
                if (l.overlay > 0) {
                    b.w.jqmAddClose(d)
                } else {
                    d = t
                }
            }
            b.o = (d) ? d.addClass(l.overlayClass).prependTo("body") : t;
            if (m) {
                i("html,body").css({
                    height: "100%",
                    width: "100%"
                });
                if (d) {
                    d = d.css({
                        position: "absolute"
                    })[0];
                    for (var j in {
                        Top: 1,
                        Left: 1
                    }) {
                        d.style.setExpression(j.toLowerCase(), "(_=(document.documentElement.scroll" + j + " || document.body.scroll" + j + "))+'px'")
                    }
                }
            }
            if (l.ajax) {
                var g = l.target || b.w,
                h = l.ajax,
                g = (typeof g == "string") ? i(g, b.w) : i(g),
                h = (h.substr(0, 1) == "@") ? i(a).attr(h.substring(1)) : h;
                g.html(l.ajaxText).load(h, l.ajaxP,
                function() {
                    if (l.onLoad) {
                        l.onLoad.call(this, b)
                    }
                    if (c) {
                        b.w.jqmAddClose(i(c, b.w))
                    }
                    x(b)
                })
            } else {
                if (c) {
                    b.w.jqmAddClose(i(c, b.w))
                }
            }
            if (l.toTop && b.o) {
                b.w.before('<span id="jqmP' + b.w[0]._jqm + '"></span>').insertAfter(b.o)
            } (l.onShow) ? l.onShow(b) : b.w.show();
            x(b);
            return t
        },
        close: function(a) {
            var b = u[a];
            if (!b.a) {
                return t
            }
            b.a = t;
            if (r[0]) {
                r.pop();
                if (!r[0]) {
                    w("unbind")
                }
            }
            if (b.c.toTop && b.o) {
                i("#jqmP" + b.w[0]._jqm).after(b.w).remove()
            }
            if (b.c.onHide) {
                b.c.onHide(b)
            } else {
                b.w.hide();
                if (b.o) {
                    b.o.remove()
                }
            }
            return t
        },
        params: {}
    };
    var s = 0,
    u = i.jqm.hash,
    r = [],
    m = i.browser.msie && (i.browser.version == "6.0"),
    t = false,
    f = i('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({
        opacity: 0
    }),
    x = function(a) {
        if (m) {
            if (a.o) {
                a.o.html('<p style="width:100%;height:100%"/>').prepend(f)
            } else {
                if (!i("iframe.jqm", a.w)[0]) {
                    a.w.prepend(f)
                }
            }
        }
        e(a)
    },
    e = function(a) {
        try {
            i(":input:visible", a.w)[0].focus()
        } catch(b) {}
    },
    w = function(a) {
        i()[a]("keypress", q)[a]("keydown", q)[a]("mousedown", q)
    },
    q = function(a) {
        var c = u[r[r.length - 1]],
        b = (!i(a.target).parents(".jqmID" + c.s)[0]);
        if (b) {
            e(c)
        }
        return ! b
    },
    v = function(c, b, a) {
        return c.each(function() {
            var d = this._jqm;
            i(b).each(function() {
                if (!this[a]) {
                    this[a] = [];
                    i(this).click(function() {
                        for (var h in {
                            jqmShow: 1,
                            jqmHide: 1
                        }) {
                            for (var g in this[h]) {
                                if (u[this[h][g]]) {
                                    u[this[h][g]].w[h](this)
                                }
                            }
                        }
                        return t
                    })
                }
                this[a].push(d)
            })
        })
    }
})(jQuery);
jQuery(document).ready(function() {
    if (isIndex == null || isIndex != 1) {
        jQuery("#yhd_pop_win").bgiframe()
    }
});
var YHD = {
    init: function() {
        if (jQuery("#yhd_pop_win").size() > 0) {
            jQuery("#yhd_pop_win").jqm({
                overlay: 50,
                overlayClass: "jqmOverlay",
                closeClass: "jqmClose",
                trigger: ".jqModal",
                ajax: false,
                ajaxP: false,
                ajaxText: "",
                target: false,
                modal: false,
                toTop: false,
                onShow: false,
                onHide: false,
                onLoad: false
            })
        }
    },
    initPosition: function(o, l, n, m, p) {
        var r = (l == null ? o.width() : l);
        var k = (n == null ? o.height() : n);
        jQuery(o).width(r).height(k);
        if (m && p) {
            jQuery(o).css({
                top: m,
                left: p
            })
        } else {
            if (m != null) {
                jQuery(o).css({
                    top: m
                })
            } else {
                if (p != null) {
                    jQuery(o).css({
                        left: p
                    })
                } else {
                    var q = (jQuery(window).width() - o.width()) / 2 + jQuery(window).scrollLeft() + "px";
                    var h = (jQuery(window).height() - o.height()) / 2 + jQuery(window).scrollTop() + "px";
                    jQuery(o).css("left", q).css("top", h)
                }
            }
        }
        if (l != null && n != null) {
            jQuery(o).jqm({
                onHide: function(a) {
                    a.w.width(0).height(0).hide();
                    if (a.o) {
                        a.o.remove()
                    }
                }
            })
        }
    },
    popwin: function(j, i, h, l, m, n) {
        YHD.init();
        var k = jQuery("#yhd_pop_win");
        if (j != null) {
            jQuery(k).html(j)
        }
        YHD.initPosition(k, i, h, l, m);
        jQuery(k).jqm({
            overlay: 10,
            overlayClass: "pop_win_bg",
            modal: true,
            toTop: true
        }).jqmShow().jqmAddClose(".popwinClose");
        jQuery(".pop_win_bg").bgiframe()
    },
    popwinId: function(l, m, j, i, n, h) {
        var k = jQuery("#" + l);
        YHD.initPosition(k, j, i, n, h);
        k.css("height", "auto");
        k.css("z-index", "1000");
        k.show();
        if (!m) {
            m = "popwinClose"
        }
        jQuery("." + m, k).bind("click",
        function() {
            k.hide()
        })
    },
    popTitleWin: function(j, o, h, n, k, l, m) {
        var p = '<H3 class="pop_win_title" >' + j + '<img src="' + imagePath + '/icon_close.jpg" class="popwinClose"/></H3>';
        p += '<div class="pop_win_content" class="content">' + o + "</div>";
        p += '<div style="clear:both"></div>';
        YHD.popwin(p, h, n, k, l, m)
    },
    alert: function(i, j, h, l, k) {
        var g = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        g += '<div class="aptab_center" align="center"><p class="pt10">' + i + "</p>";
        g += '<p class="pt5"><input name="submit" class="pop_win_button popwinClose" id="pop_win_ok_btn" type="button"   value="确 定" /></p>';
        g += "</div>";
        g += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (h == null) {
            h = 300
        }
        YHD.popwin(g, h, l, null, null, k);
        if (j) {
            jQuery("#pop_win_ok_btn").click(function() {
                j()
            })
        }
    },
    alertPrescriotion: function(m, h, q, s, p) {
        var l = "";
        if (m == null) {
            l = ""
        } else {
            if (m == 14) {
                l = "本品为处方药，为了用药安全，已经将您的个人信息进行登记，谢谢配合！如需用药指导帮助请联系在线客服！"
            } else {
                if (m == 16 || m == 17 || m == 18) {
                    l = "本品为处方药，不能网络订购；如需购买，请到药店凭处方购买或咨询客服!"
                } else {
                    l = "本品为处方药,请在提交订单前上传处方,如需用药师指导帮助,请联系在线客服！"
                }
            }
        }
        var n = "确定";
        if (m != null && (m == 16 || m == 17 || m == 18)) {
            n = "关闭"
        }
        var r = '<input name="submit" class="pop_win_button popwinClose fl" id="pop_win_ok_btn" type="button"   value="' + n + '" />';
        var t = '<a href="http://vipwebchat.tq.cn/sendmain.jsp?admiuin=8987730&uin=8987730&tag=call&ltype=1&rand=15214019897292372&iscallback=0&agentid=0&comtimes=48&preuin=8987730&buttonsflag=1010011111111&is_appraise=1&color=6&style=1&isSendPreWords=1&welcome_msg=%C4%FA%BA%C3%A3%A1%CE%D2%CA%C7%C6%BD%B0%B2%D2%A9%CD%F8%B5%C4%D6%B4%D0%D0%D2%A9%CA%A6%A3%AC%C7%EB%CE%CA%C4%FA%D0%E8%D2%AA%CA%B2%C3%B4%B0%EF%D6%FA%A3%BF&tq_right_infocard_url=' + imagePath + "/images/yaowang/v2/tq01.jpg&cp_title=%BB%B6%D3%AD%CA%B9%D3%C3%C6%BD%B0%B2%D2%A9%CD%F8%D4%DA%CF%DF%BD%D3%B4%FD%CF%B5%CD%B3&page=" + imagePath + "/&localurl=" + imagePath + "/channel/15694&spage=" + imagePath + '/&nocache=0.6430502517039929" class="pop_win_button fl" style="display:block;">咨询</a>';
        var o = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        o += '<div class="aptab_center" align="center"><p class="pt10">' + l + "</p>";
        o += '<div class="pt5" style="width:160px;">';
        if (m != null && (m == 16 || m == 17 || m == 18)) {
            o += t;
            o += r
        } else {
            o += r;
            o += t
        }
        o += '<div class="clear"></div></div>';
        o += '<p class="pt10 mb10" style="color:#b00000;font-weight:bold;">免费客服热线:400-007-0958</p></div>';
        o += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (q == null) {
            q = 300
        }
        YHD.popwin(o, q, s, null, null, p);
        if (h) {
            if (m != null && m != 16 && m != 17 && m != 18) {
                jQuery("#pop_win_ok_btn").click(function() {
                    h()
                })
            }
        }
    },
    alertForLottery: function(i, j, h, l, k) {
        var g = '<div class="popbox"><div><h2><a href="#" class="popwinClose">关闭</a>温馨提示</h2><dl class="noaward">';
        g += "<dt>" + i + "</dt>";
        g += '</dl><p><button class="btn_go"  id="pop_win_ok_btn">确定</button></p></div></div>';
        if (h == null) {
            h = 300
        }
        YHD.popwin(g, h, l, null, null, k);
        if (j) {
            jQuery("#pop_win_ok_btn").click(function() {
                j()
            })
        }
    },
    confirm: function(l, i, j, k, n, m) {
        var h = '<div class="aptab" style="left: 0px; top: 0px;"><div class="aptab_header"><ul><li class="fl pl10">温馨提示</li><li class="popwinClose fr btn_close mr10"><img src="' + imagePath + '/popwin/icon_close.jpg"></li><li class="popwinClose fr mr5 color_white"><a href="###">关闭</a></li></ul> <div class="clear"></div></div>';
        h += '<div class="aptab_center" align="center"><p class="pt10">' + l + "</p>";
        h += '<div align="center"><input name="submit" class="pop_win_button popwinClose" id="pop_win_ok_btn" type="button"   value="确 定" /><input name="submit"   class="pop_win_button popwinClose" type="button" id="pop_win_cancel_btn" value="返回购物车" /></div>';
        h += "</div>";
        h += '<div class="aptab_footer"><img src="' + imagePath + '/popwin/aptab_footer.jpg"></div></div>';
        if (k == null) {
            k = 300
        }
        YHD.popwin(h, k, n, null, null, m);
        if (i) {
            jQuery("#pop_win_ok_btn").click(function() {
                i()
            })
        }
        if (j) {
            jQuery("#pop_win_cancel_btn").click(function() {
                j()
            })
        }
    },
    confirmToLottery: function(l, i, j, k, n, m) {
        var h = "" + l + "";
        if (k == null) {
            k = 300
        }
        YHD.popwin(h, k, n, null, null, m);
        if (i) {
            jQuery("#pop_win_ok_btn").click(function() {
                i()
            })
        }
        if (j) {
            jQuery("#pop_win_cancel_btn").click(function() {
                j()
            })
        }
    },
    processBar: function(d, c) {
        if (d) {
            YHD.popwin('<img src="' + imagePath + '/loading.gif" />', null, null, null, null, c)
        } else {
            jQuery("#yhd_pop_win").jqmHide()
        }
    },
    ajax: function(h, i, l, n) {
        var k = jQuery("#yhd_pop_win");
        k.jqm({
            ajax: h,
            ajaxP: i,
            ajaxText: '<img src="' + imagePath + '/loading.gif" />',
            onLoad: l,
            modal: true,
            toTop: true,
            closeClass: "popwinClose"
        }).jqmShow();
        var m = (jQuery(window).width() - k.width()) / 2 + jQuery(window).scrollLeft() + "px";
        var j = (jQuery(window).height() - k.height()) / 2 + jQuery(window).scrollTop() + "px";
        jQuery(k).css("left", m).css("top", j)
    },
    ajaxPointAlert: function(h, i, l, n) {
        var k = jQuery("#yhd_pop_win");
        k.jqm({
            ajax: h,
            ajaxP: i,
            ajaxText: '<img src="' + imagePath + '/loading.gif" />',
            onLoad: l,
            modal: true,
            toTop: true,
            closeClass: "popwinClose"
        }).jqmShow();
        var m = "436.5px";
        var j = (jQuery(window).height() - k.height()) / 2 + jQuery(window).scrollTop() + "px";
        jQuery(k).css("left", m).css("top", j)
    },
    pageX: function(b) {
        b = b || window.event;
        return b.pageX || b.clientX + document.body.scrollLeft
    },
    pageY: function(b) {
        b = b || window.event;
        return b.pageY || b.clientY + document.body.scrollTop
    }
};
Array.prototype.toTRACKERJSONString = function() {
    var d = "[";
    for (var c = 0; c < this.length; c++) {
        if (this[c] instanceof Parameter) {
            if (this[c].value instanceof Array) {
                d += "{" + this[c].key + "=" + this[c].value.toTRACKERJSONString() + "},"
            } else {
                d += this[c].toJSONString() + ","
            }
        }
    }
    if (d.indexOf(",") > 0) {
        d = d.substring(0, d.length - 1)
    }
    return d + "]"
};
var trackerUrl = "";
function Parameter(d, c) {
    this.key = d;
    if (this.key == "internalKeyword") {
        this.value = encodeURI(c)
    } else {
        this.value = c
    }
    this.toJSONString = function() {
        return "{" + this.key + "=" + this.value + "}"
    }
}
var linkPosition = "";
var buttonPosition = "";
function TrackerContainer(b) {
    this.url = b;
    this.parameterArray = new Array();
    this.stockArray = new Array();
    this.commonAttached = new Array();
    this.addParameter = function(a) {
        this.parameterArray.push(a)
    };
    this.addStock = function(d, a) {
        this.stockArray.push(new Parameter(d, a))
    };
    this.addCommonAttached = function(a, d) {
        this.commonAttached.push(new Parameter(a, d))
    };
    this.buildAttached = function() {
        if (this.stockArray.length > 0) {
            this.commonAttached.push(new Parameter("1", this.stockArray))
        }
        if (this.commonAttached.length > 0) {
            this.addParameter(new Parameter("attachedInfo", this.commonAttached.toTRACKERJSONString("attachedInfo")))
        }
    };
    this.toUrl = function() {
        this.buildAttached();
        for (var f = 0; f < this.parameterArray.length; f++) {
            var a = this.parameterArray[f].key;
            var e = this.parameterArray[f].value;
            this.url += "&" + a + "=" + e
        }
        trackerUrl = this.url;
        return this.url
    }
}
var trackerUrl = ("https:" == document.location.protocol ? "https://": "http://") + URLPrefix.tracker + "/tracker/info.do?1=1";
var trackerContainer = new TrackerContainer(trackerUrl);
trackerContainer.addParameter(new Parameter("ieVersion", navigator.userAgent));
trackerContainer.addParameter(new Parameter("platform", navigator.platform));
var page_refer = document.referrer ? document.referrer: "";
var page_location = window.location.href;
function addTrackPositionToCookie(c, d) {
    if (c == "1") {
        document.cookie = "linkPosition=" + encodeURIComponent(d) + ";path=/;domain=." + no3wUrl + ";"
    } else {
        if (c == "2") {
            document.cookie = "buttonPosition=" + decodeURIComponent(d) + ";path=/;domain=." + no3wUrl + ";"
        }
    }
}
function getCookie(g) {
    var j = document.cookie;
    var i = j.split("; ");
    for (var f = 0; f < i.length; f++) {
        var h = i[f].split("=");
        if (h[0] == g) {
            return h[1]
        }
    }
    return null
}
function gotracker(i, h, j) {
    var g = trackerUrl;
    var f = new RegExp("&linkPosition=\\w*", "g");
    g = g.replace(f, "");
    var f = new RegExp("&buttonPosition=\\w*", "g");
    g = g.replace(f, "");
    var f = new RegExp("&productId=\\w*", "g");
    g = g.replace(f, "");
    if (i != null) {
        if (i == 2) {
            g = g + "&buttonPosition=" + h
        } else {
            g = g + "&linkPosition=" + h
        }
    }
    if (j != null) {
        g = g + "&productId=" + j
    }
    jQuery.ajax({
        async: true,
        url: g,
        type: "GET",
        dataType: "jsonp",
        jsonp: "jsoncallback"
    })
}
function bindLinkClickTracker(e, f) {
    var d = jQuery("#" + e + " a");
    d.click(function() {
        var a = jQuery(this).text();
        a = f + "_" + encodeURIComponent(jQuery.trim(a));
        addTrackPositionToCookie("1", a)
    })
}
function callLoadCookie() {
    var b = "";
    if (page_location.indexOf("yihaodian.com") != -1 && page_refer.indexOf("1mall.com") != -1) {
        b = URLPrefix.mall
    } else {
        if (page_location.indexOf("1mall.com") != -1 && page_refer.indexOf("yihaodian.com") != -1) {
            b = URLPrefix.central
        }
    }
    if (b != "") {
        if ("https:" == document.location.protocol) {
            b = b.replace("http", "https")
        }
        jQuery.getJSON(b + "/yhd-common/assign-login-api.do?cookieNames=unionKey&cookieNames=adgroupKeywordID&cookieNames=unionType&cookieNames=uid&cookieNames=websiteid&callback=?",
        function(a) {
            if (!a.ERROR) {
                jQuery(a.info).each(function() {
                    if (this.value != "") {
                        jQuery.cookie(this.name, this.value, {
                            domain: no3wUrl,
                            path: "/"
                        })
                    }
                })
            }
        })
    }
}
function callLoadlinkCookie() {
    var d = "";
    if (page_location.indexOf("yihaodian.com") != -1) {
        d = URLPrefix.mall
    } else {
        if (page_location.indexOf("1mall.com") != -1) {
            d = URLPrefix.central
        }
    }
    if (d != "") {
        if ("https:" == document.location.protocol) {
            d = d.replace("http", "https")
        }
        var c = d + "/yhd-common/assign-login-api.do?cookieNames=linkPosition&cookieNames=buttonPosition&callback=?";
        jQuery.ajax({
            async: true,
            url: c,
            timeout: 1000,
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function(a) {
                if (!a.ERROR) {
                    jQuery(a.info).each(function() {
                        if (this.value != "") {
                            var b = "";
                            trackerContainer.addParameter(new Parameter(this.name, this.value));
                            b = "cookieDatas=" + this.name + ",," + this.value + ",,0";
                            callAddCookieApi(d, b)
                        }
                    })
                }
            },
            complete: function() {
                initHijack()
            },
            statusCode: {
                404 : function() {
                    initHijack()
                }
            }
        })
    } else {
        initHijack()
    }
}
function callAddCookieApi(d, c) {
    jQuery.ajax({
        async: true,
        url: d + "/yhd-common/cookie-set-api.do?" + c + "&callback=?",
        timeout: 1000,
        type: "GET",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        success: function(a) {}
    })
}
callLoadCookie();
function initLeftMenu(e) {
    if (!jQuery(".allsort_out_box").size()) {
        return
    }
    var c = false;
    b();
    setTimeout(f, 50);
    d(e || false);
    a();
    function f() {
        if (c) {
            return
        }
        var g = typeof(httpUrl) != "undefined" ? httpUrl: "http://www.yihaodian.com";
        var h = typeof(merchant) != "undefined" ? merchant: 1;
        jQuery.getScript(g + "/product/ajaxGetGlobalLeftFloatMenuDataV3.do?callback=ajaxLeftFloatMenuDataV3&merchant=" + h + "&isFixTopNav=" + isFixTopNav)
    }
    function b() {
        var g = jQuery(".allsort_out_box").height();
        jQuery(".index_side_l").css("paddingTop", g);
        jQuery(".show_sort").css("min-height", g - 2);
        jQuery(".show_sort").css("height", g - 1)
    }
    function d(g) {
        if (g) {
            jQuery(".allsort_out_box").show()
        } else {
            jQuery(".allsort_out_box").hide();
            jQuery("#allSortOuterbox").hover(function() {
                jQuery(this).children(".allsort_out_box").show();
                jQuery(this).addClass("hover")
            },
            function() {
                jQuery(this).children(".allsort_out_box").hide();
                jQuery(this).removeClass("hover")
            })
        }
    }
    function a() {
        jQuery(".allsort_out_box ul.allsort li a[tk]").click(function() {
            var h = jQuery(this),
            g = h.attr("tk");
            if (g) {
                addTrackPositionToCookie("1", g)
            }
        })
    }
}
function allsortLevel3() {
    if ($.browser.msie && ($.browser.version == "6.0")) {
        $(".show_sort_l").find("dl").each(function() {
            var a = $(this).height();
            if (a > 52) {
                $(this).height("52")
            }
        })
    }
}
function allsortIfm() {
    if ($.browser.msie && ($.browser.version == "6.0")) {
        var b = $(".show_sort").height();
        var a = $(".allsort_ifm").length;
        if (a == 0) {
            $("<iframe class=allsort_ifm></iframe>").insertBefore(".allsort_out_box .allsort_out");
            if (b > 481) {
                $(".allsort_ifm").height(b)
            } else {
                $(".allsort_ifm").height(481)
            }
        }
    }
}
function ajaxLeftFloatMenuDataV3(a) {
    submenuHtml = true;
    var c = {};
    var b = {};
    var d = {};
    jQuery(a.value).find("[category_id]").each(function() {
        c[jQuery(this).attr("category_id")] = jQuery(this).html()
    });
    jQuery(".allsort_out_box ul.allsort li").hover(function() {
        if (d) {
            clearTimeout(d)
        }
        var e = this;
        b = setTimeout(function() {
            if (!jQuery(e).data("loaded")) {
                if (typeof currSiteId != "undefined" && currSiteId == 1 && typeof isFixTopNav != "undefined" && isFixTopNav == true) {
                    allsortLevel3()
                }
                allsortIfm();
                var f = jQuery(e).children(".show_sort");
                var g = c[f.attr("categoryId")];
                if (g) {
                    f.html(g).find(".show_sort_l dl").hover(function() {
                        jQuery(e).addClass("dl_cur")
                    },
                    function() {
                        jQuery(e).removeClass("dl_cur")
                    }).end().find("a[tk]").each(function() {
                        var h = jQuery(this).attr("tk");
                        if (h) {
                            jQuery(this).click(function() {
                                addTrackPositionToCookie("1", h)
                            })
                        }
                    }).end().find(".close_sort").click(function() {
                        f.hide()
                    });
                    delete c[f.attr("categoryId")]
                }
                jQuery(e).data("loaded", true)
            }
            jQuery(e).siblings("li").removeClass("cur").children(".show_sort").hide();
            jQuery(e).addClass("cur").children(".show_sort").show()
        },
        200)
    },
    function() {
        clearTimeout(b);
        d = setTimeout(function() {
            jQuery(".allsort_out_box ul.allsort li").removeClass("cur").children(".show_sort").hide()
        },
        200)
    })
}
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initLeftMenu(false)
    }
});
var YHDPROVINCE = {};
YHDPROVINCE.getCurentDomain = function() {
    return typeof currSiteType != "undefined" && currSiteType == 1 ? URLPrefix.central: URLPrefix.mall
};
YHDPROVINCE.getOppositeDomain = function() {
    return typeof currSiteType != "undefined" && currSiteType == 1 ? URLPrefix.mall: URLPrefix.central
};
YHDPROVINCE.swithAddressCity = function(e, h) {
    if (typeof siteFlag != "undefined" && siteFlag == 1) {
        var f = jQuery.cookie("provinceId");
        var g = {};
        g.callback = h;
        g.isSetAddress = 0;
        jQuery.cookie("provinceId", e, {
            domain: no3wUrl,
            path: "/",
            expires: 800
        });
        if (typeof currSiteType != "undefined" && currSiteType != 1) {
            jQuery.ajax({
                url: oppositeDomain + "/header/addressChange.do?provinceId=" + e + "&timestamp=" + new Date() + "&callback=?",
                dataType: "jsonp",
                complete: function() {
                    provinceSwitchProvince(e, f, g)
                }
            })
        } else {
            provinceSwitchProvince(e, f, g)
        }
    }
};
function setAddressCity(f) {
    var i = jQuery.cookie("provinceId");
    jQuery.cookie("provinceId", f, {
        domain: no3wUrl,
        path: "/",
        expires: 800
    });
    var g;
    if (typeof siteFlag != "undefined" && siteFlag == 1) {
        var h = YHDPROVINCE.getOppositeDomain();
        var j = false;
        jQuery.ajax({
            url: h + "/header/addressChange.do?provinceId=" + f + "&timestamp=" + new Date() + "&callback=?",
            dataType: "jsonp",
            complete: function() {
                j = true;
                provinceSwitchProvince(f, i)
            }
        });
        if (g) {
            clearTimeout(g)
        }
        g = setTimeout(function() {
            if (!j) {
                provinceSwitchProvince(f, i)
            }
        },
        300)
    } else {
        provinceSwitchProvince(f, i)
    }
}
function provinceSwitchProvince(j, i, g) {
    var h = YHDPROVINCE.getCurentDomain();
    moveCartItem(j, i, g);
    var f = h + "/globalsupport/getOneGrouponAreaIdByProviceId.do?provinceId=" + j + "&timestamp=" + new Date().getTime() + "&callback=?";
    jQuery.getJSON(f,
    function(a) {})
}
function setAddressCityback() {
    var A = window.location.href;
    if (A.indexOf("merchantID=") != -1) {
        A = A.substring(0, A.indexOf("merchantID=") - 1);
        window.location.href = A;
        return
    }
    if (A.indexOf("merchant=") != -1) {
        A = A.substring(0, A.indexOf("merchant=") - 1);
        window.location.href = A;
        return
    }
    if (A.indexOf("/tuangou/") != -1) {
        if (A.indexOf("/tuangou/myGroupon.do") != -1) {
            window.location.href = A
        }
        return
    }
    if (A.indexOf("openProvincePage=") != -1) {
        A = A.substring(0, A.indexOf("openProvincePage=") - 1);
        window.location.href = A;
        return
    }
    if (A.indexOf("/cart/cart.do?action=view") != -1) {
        window.location.href = "/cart/cart.do?action=view";
        return
    }
    var x = /^\S*product\/\d+_?\d+/;
    if (A.match(x)) {
        if (A.indexOf("_") != -1) {
            A = A.substring(0, A.indexOf("_"))
        } else {
            if (A.indexOf("#") != -1) {
                var F = A.indexOf("#");
                A = A.substring(0, F)
            }
        }
        window.location.href = A;
        return
    }
    var t = /^(http:\/\/){0,1}([^\/]+\/)[0-9]+\/([^\/]*)$/;
    if (A.match(t)) {
        A = A.replace(t, "$1$2$3");
        window.location.href = A;
        return
    }
    var D = /^(http:\/\/){0,1}[^\/]+\/channel\/[0-9]+_[0-9]+\/$/;
    if (A.match(D)) {
        A = A.substring(0, A.lastIndexOf("_"));
        window.location.href = A;
        return
    }
    var C = /^(http:\/\/){0,1}[^\/]+\/cms\/view.do\?topicId=[0-9]+&merchant=[0-9]+$/;
    if (A.match(C)) {
        A = A.substring(0, A.lastIndexOf("&merchant"));
        window.location.href = A;
        return
    }
    var G = /^(http:\/\/){0,1}shop.yihaodian.com\/[^\/^_^\.]+\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (A.match(G)) {
        window.location.href = A;
        return
    }
    var v = /^(http:\/\/){0,1}www.yihaodian.com\/brand\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (A.match(v)) {
        window.location.href = A;
        return
    }
    var y = /^(http:\/\/){0,1}[^\/]+\/try\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (A.match(y)) {
        if (A.lastIndexOf("/") == A.length - 1) {
            A = A.substring(0, A.lastIndexOf("/"))
        }
        A = A.substring(0, A.lastIndexOf("/"));
        window.location.href = A;
        return
    }
    var H = /^(http:\/\/){0,1}[^\/]+\/try\/[0-9]+_[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (A.match(H)) {
        A = A.substring(0, A.lastIndexOf("_")) + "_0/";
        window.location.href = A;
        return
    }
    var z = /^(http:\/\/){0,1}www.yihaodian.com\/S-theme\/[0-9]+\/{0,1}(\?[^\/]+)*$/;
    if (A.match(z)) {
        window.location.href = A;
        return
    }
    var r = /^(http:\/\/){0,1}www.yihaodian.com\/ctg\/s2\/c([0-9]*)-([^?^\/]*)\/([0-9]*)\/$/;
    if (A.match(r)) {
        if (A.lastIndexOf("/") == A.length - 1) {
            A = A.substring(0, A.lastIndexOf("/"))
        }
        A = A.substring(0, A.lastIndexOf("/") + 1);
        window.location.href = A;
        return
    }
    var u = /^(http:\/\/){0,1}search.yihaodian.com\/s2\/c([0-9]*)-([^?^\/]*)\/k([^?^\/]*)\/([0-9]*)\/$/;
    if (A.match(u)) {
        if (A.lastIndexOf("/") == A.length - 1) {
            A = A.substring(0, A.lastIndexOf("/"))
        }
        A = A.substring(0, A.lastIndexOf("/") + 1);
        window.location.href = A;
        return
    }
    var s = /^(http:\/\/){0,1}channel\.[^\/]+\/[^\/^_^\.]+(\/[^\/^\.]+){0,1}\/[0-9]+\/{0,1}(\?[^\/]+){0,1}(#[^\/]+)*$/;
    if (A.match(s)) {
        if (A.indexOf("#") != -1) {
            A = A.substring(0, A.indexOf("#"))
        }
        if (A.indexOf("?") != -1) {
            var B = A.substring(A.indexOf("?"));
            var w = A.substring(0, A.indexOf("?"));
            if (A.lastIndexOf("/") == A.length - 1) {
                w = w.substring(0, w.lastIndexOf("/"));
                B = "/" + B
            }
            w = w.substring(0, w.lastIndexOf("/"));
            A = w + B
        } else {
            if (A.lastIndexOf("/") == A.length - 1) {
                A = A.substring(0, A.lastIndexOf("/"))
            }
            A = A.substring(0, A.lastIndexOf("/"))
        }
        window.location.href = A;
        return
    }
    if (A.indexOf("confirmOrder") != -1 && A.indexOf("saveOrder") != -1) {
        window.location.href = YHDPROVINCE.getCurentDomain();
        return
    }
    var E = URLPrefix.search + "/s/";
    if (A.substr(0, E.length) == E) {
        var x = /-p\d{0,3}/;
        if (A.match(x)) {
            A = A.replace(x, "-p1");
            window.location.href = A;
            return
        }
    }
    window.location.reload()
}
function moveCartItem(j, m, n) {
    var k = 1;
    var o = {};
    var l = {};
    var p = [];
    if (typeof n != "undefined" && n) {
        if (typeof n.isSetAddress != "undefined" && n.isSetAddress) {
            if (n.isSetAddress == 0) {
                k = n.isSetAddress
            }
        }
        if (typeof n.callback != "undefined" && n.callback) {
            o = n.callback;
            if (typeof o.func != "undefined" && o.func) {
                l = o.func
            }
            if (typeof o.agrs != "undefined" && o.func) {
                p = o.agrs
            }
        }
    }
    jQuery.getJSON(oppositeDomain + "/cart/globalMoveCartItem.do?provinceId=" + j + ((m) ? "&oldProvinceId=" + m: "") + "&timestamp=" + new Date().getTime() + "&callback=?",
    function(a) {});
    var i = YHDPROVINCE.getCurentDomain();
    jQuery.getJSON(i + "/cart/globalMoveCartItem.do?provinceId=" + j + ((m) ? "&oldProvinceId=" + m: "") + "&timestamp=" + new Date().getTime() + "&callback=?",
    function(a) {
        if (typeof k != "undefined" && k != 0) {
            setAddressCityback()
        }
        if (typeof l != "undefined" && typeof l == "function") {
            l.apply(this, p)
        }
    })
}
function initProvince() {
    var c = jQuery.cookie("provinceId");
    if (c && c > 0) {
        jQuery("#currProvince").text(jQuery("#p_" + c).text());
        var d = jQuery("#weibo");
        if (c == 2) {
            d.attr("href", "http://weibo.com/yihaodianbeijing")
        } else {
            if (c == 20) {
                d.attr("href", "http://weibo.com/yihaodianguangzhou")
            } else {
                d.attr("href", "http://weibo.com/yihaodian")
            }
        }
    } else {
        showProvinces()
    }
}
function closeProvinces(c) {
    if (c <= 0) {
        c = 1
    }
    var d = jQuery("#currProvince").text();
    if (d == "") {
        setAddressCity(c)
    } else {
        jQuery("#allProvinces").hide()
    }
}
function showProvinces() {
    var d = YHDPROVINCE.getCurentDomain();
    var c = d + "/header/selectProvincebox.do?timestamp=" + new Date().getTime() + "&callback=?";
    jQuery.getJSON(c,
    function(a) {
        if (!a.ERROR && a.value) {
            jQuery("#provinceboxDiv").html(a.value);
            jQuery("#allProvinces").jqm({
                overlay: 50,
                closeClass: "jqmClose",
                trigger: ".jqModal",
                overlayClass: "pop_win_bg",
                modal: true,
                toTop: true
            }).jqmShow().jqmAddClose(".popwinClose")
        }
        jQuery.getJSON(d + "/header/cartIsEmpty.do?callback=?",
        function(b) {
            if ("no" == b.value) {
                jQuery("#provincesPoptips").show()
            } else {
                jQuery("#provincesPoptips").hide()
            }
        })
    })
}
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initProvince()
    }
});
var loli = {
    _loli: loli
}; (function(c) {
    var d = window.loli || (window.loli = {});
    d.delay = function(b, n, p, t, m) {
        var r = "";
        var a = m || 200;
        var s = a - 50;
        var o;
        c(b)[n](function() {
            var f = c(this);
            var e = true;
            if (p) {
                var e = p.call(f)
            }
            if (! (e == false)) {
                o = setTimeout(function() {
                    q.call(f)
                },
                a);
                r = new Date().getTime()
            }
        });
        function q() {
            if ((new Date().getTime() - r) >= s) {
                if (t) {
                    t.call(this)
                }
                r = new Date().getTime()
            }
        }
    }
})(jQuery);
var YHDMINICART = YHDMINICART || {};
function addToCart(k, l, i, n, h, j) {
    var m = {};
    m.amount = n;
    m.isFloat = h;
    m.linkPosition = j;
    m.merchantId = i;
    addToCartNew(k, l, m)
}
function addToCartNew(o, p, i) {
    var j = i.amount;
    var l = i.isFloat;
    var n = i.linkPosition;
    var m = i.merchantId;
    var k = currDomain + "/cart/phone/isContractProduct.do?productId=" + p + "&merchantId=" + m + "&callback=?";
    jQuery.getJSON(k,
    function(b) {
        if (b.ERROR) {} else {
            if (b) {
                var a = parseInt(b.code);
                if (a == 1) {
                    addIphone4ToCart(o, p, m, j, l)
                } else {
                    if (jQuery("#validateProductId").length > 0) {
                        jQuery("#validateProductId").attr("value", p)
                    }
                    if (jQuery.cookie("prompt_flag") == null && jQuery("#buyPromptDiv").length > 0) {
                        YHD.popwinId("buyPromptDiv", "popwinClose");
                        jQuery("#validate").bind("click",
                        function() {
                            doAddToCart(o, p, m, j, l, n)
                        })
                    } else {
                        doAddToCart(o, p, m, j, l, n)
                    }
                }
            }
        }
    })
}
function addIphone4ToCart(h, i, g, j, f) {
    if (jQuery("#validateProductId").length > 0) {
        jQuery("#validateProductId").attr("value", i)
    }
    if (jQuery.cookie("prompt_flag") == null && jQuery("#buyPromptDiv").length > 0) {
        YHD.popwinId("buyPromptDiv");
        jQuery("#validate").bind("click",
        function() {
            doAddIphone4ToCart(h, i, g, j)
        })
    } else {
        doAddIphone4ToCart(h, i, g, j)
    }
}
function doAddIphone4ToCart(h, e, g, f) {
    window.location.href = currDomain + "/product/detail.do?productID=" + e + "&merchantID=" + g
}
function doAddToCart(l, m, i, n, h, k) {
    if (isPrescriotionForCheckAddToCart(m)) {
        var j = parseInt(jQuery("#buyButton_" + m).attr("specialType"));
        YHD.alertPrescriotion(j,
        function() {
            processDoAddToCart(l, m, i, n, h, k)
        })
    } else {
        processDoAddToCart(l, m, i, n, h, k)
    }
}
function isPrescriotionForCheckAddToCart(e) {
    var f = false;
    if (jQuery("#buyButton_" + e).size() > 0) {
        var d = jQuery("#buyButton_" + e).attr("specialType");
        if (d != null && (parseInt(d) >= 14 && parseInt(d) <= 18)) {
            f = true
        }
    }
    return f
}
function processDoAddToCart(m, k, p, t, l, s) {
    var q = encodeURIComponent(document.referrer);
    var r = s ? s: "";
    if (l) {
        var n = currDomain + "/cart/addGlobalProduct2.do?productID=" + k + "&merchantId=" + p + "&productNum=" + t + "&pageRef=" + q + "&linkPosition=" + r + "&callback=?";
        jQuery.getJSON(n,
        function(a) {
            if (a.ERROR) {} else {
                floatCartByScrollBar(a)
            }
        })
    } else {
        var o = document.createElement("div");
        o.style.position = "absolute";
        o.id = "newDiv";
        document.body.appendChild(o);
        jQuery("#newDiv").html("<p align='center'><img src=" + imagePath + "/loading.gif /></p>");
        var n = currDomain + "/cart/addGlobalProduct2.do?productID=" + k + "&merchantId=" + p + "&productNum=" + t + "&pageRef=" + q + "&linkPosition=" + r + "&callback=?";
        jQuery.getJSON(n,
        function(a) {
            if (a.ERROR) {} else {
                if (a.code && a.code != "undefined" && a.code != "") {
                    if (a.code.indexOf("buyEGiftCard.do") > -1) {
                        window.location.href = currDomain + a.code
                    }
                }
                afterAddToCart(a)
            }
        },
        m)
    }
}
var floatCartShowTime = 0;
function floatCartByScrollBar(o) {
    if (o.code && o.code != "undefined" && o.code != "") {
        if (o.code.indexOf("buyEGiftCard.do") > -1) {
            window.location.href = currDomain + o.code
        }
    }
    if (o.value.indexOf("addProductFailed") > -1) {
        var m = jQuery(window).width() / 2 + jQuery(window).scrollLeft() + "px";
        var i = jQuery(window).height() / 2 + jQuery(window).scrollTop() + "px";
        YHD.popwin(o.value, jQuery("#yhd_pop_win").width(), jQuery("#yhd_pop_win").height(), i, m)
    } else {
        var n = function() {
            if (floatCartShowTime) {
                clearTimeout(floatCartShowTime);
                floatCartShowTime = 0
            }
        };
        n();
        jQuery("#showMiniCart").show();
        floatCartShowTime = setTimeout(function() {
            jQuery("#showMiniCart").hide(1000);
            n()
        },
        2000);
        jQuery("#showMiniCart").mouseenter(n);
        reloadMiniCart(sliderMiniCart);
        var p = jQuery("#scrollCart");
        var j = jQuery("#headerNav").offset().top;
        var k = jQuery(window).scrollTop();
        if (p.length > 0 && k > j) {
            var l = function() {
                if (jQuery(window).scrollTop() <= j) {
                    jQuery(p).css({
                        position: "relative",
                        left: "auto",
                        right: "auto",
                        top: "auto"
                    })
                } else {
                    if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
                        var a = jQuery(window).scrollTop() - 100;
                        var b = jQuery(window).width() - 220 - ((jQuery(window).width() - 1000) > 0 ? (jQuery(window).width() - 1000) : 0) / 2;
                        jQuery(p).css("position", "absolute").css("left", b).css("top", a)
                    } else {
                        jQuery(p).css({
                            right: 0,
                            top: "10px",
                            position: "fixed"
                        })
                    }
                }
            };
            l();
            jQuery(window).unbind("scroll", l);
            jQuery(window).bind("scroll", l)
        }
    }
}
function afterAddToCart(b) {
    jQuery("#newDiv").html(b.value);
    YHD.popwinId("newDiv", "popwinClose");
    if (jQuery("#addProductResult", b.w).size() > 0) {
        if ("success" == jQuery("#addProductResult", b.w).val()) {
            reloadMiniCart()
        }
    }
}
function buildCartNumber() {
    var b = getCartProductNum();
    jQuery("#in_cart_num").html(b)
}
function getCartProductNum() {
    var c = jQuery.cookie("cart_cookie_uuid");
    var d = 0;
    if (c) {
        d = parseInt(jQuery.cookie("cart_num")) > 999 ? "999+": parseInt(jQuery.cookie("cart_num"))
    }
    return d ? d: 0
}
function loadMiniCart() {
    if (!jQuery("#in_cart_num").data("isLoaded")) {
        jQuery("#in_cart_num").data("isLoaded", true);
        reloadMiniCart(sliderMiniCart)
    } else {
        sliderMiniCart()
    }
}
function sliderMiniCart() {
    if (typeof currSiteId != "undefined" && currSiteId != 1) {
        if (parseInt(jQuery("#in_cart_num").text())) {
            if (jQuery("#showMiniCart").height() > 560) {
                jQuery("#showMiniCart").css("height", "560px")
            }
            if (isIndex && jQuery.browser.msie && jQuery.browser.version <= 6) {
                var b = jQuery("#showMiniCart").height();
                jQuery("#DivShim").css("height", (b >= 560 ? 560 : b) + "px").show()
            }
            jQuery("#showMiniCart").show()
        }
    }
}
function reloadMiniCart(d) {
    var e = this;
    var f = currDomain + "/cart/ajaxGetGlobalMiniCartInfo.do?callback=?";
    jQuery.getJSON(f,
    function(b) {
        if (b && b.message == "success") {
            jQuery("#showMiniCart").css("height", "auto");
            afterLoadMiniCart(b.data);
            if (d && (typeof d == "function")) {
                d.apply(e, [b.data])
            }
        } else {
            if (typeof currSiteId != "undefined" && currSiteId != 1) {
                var a = jQuery("#showMiniCart");
                jQuery("#in_cart_num").text("0");
                a.hide().html("");
                jQuery("#DivShim").css("height", "0px").hide();
                jQuery("#showMiniCart").hide();
                a.data("inani", false)
            } else {
                afterLoadMiniCart()
            }
        }
    })
}
function yhdSiteLoadMiniCart(q) {
    var o = jQuery("#showMiniCartDetail");
    var r = "";
    var n;
    if (q && q.totalNum && q.items) {
        var x = parseInt(q.totalNeedPoint);
        var p = parseInt(q.totalNeedZhongxinPoint);
        var t = parseFloat(q.totalNeedMoney);
        var w = parseFloat(q.totalAmount) + t;
        w = w.toFixed(2);
        var r = "<ul>";
        jQuery(q.items).each(function(l) {
            var g = this;
            var i = parseInt(g.itemType);
            var b = parseInt(g.warningType);
            var c = parseInt(g.pointBuyType);
            var e = g.hasPromoteLimitAttachedKey;
            var D = parseInt(g.promotionContentType);
            var C = g.promotionLevelId;
            var a = false;
            if (i == 0 && (D == 3 || D == 9 || D == 10)) {
                a = true
            }
            if (b > 0) {
                r += '<li id="mini_cart_li_' + l + '" class="miniSoldout">'
            } else {
                r += '<li id="mini_cart_li_' + l + '">'
            }
            var k = "YHD_TOP_minicart";
            if (a) {
                var d = currDomain + "/promotion/detail.do?promotionId=" + g.promotionId + "&promotionLevelId=" + C + "&merchantId=" + g.merchantId;
                r += '<a traget="_blank" class="pro_img" href="' + d + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + k + '\');"><img alt="' + g.cnName + '" src="' + URLPrefix.statics + '/global/images/promotion_mix.jpg"></a>';
                r += '<a traget="_blank" class="pro_name"  href="' + d + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + k + "');\">" + g.cnName + "</a>"
            } else {
                r += '<a traget="_blank" class="pro_img" href="' + currDomain + "/product/" + g.productId + "_" + g.merchantId + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + k + '\');"><img alt="' + g.cnName + '" src="' + g.picture4040URL + '"></a>';
                r += '<a traget="_blank" class="pro_name"  href="' + currDomain + "/product/" + g.productId + "_" + g.merchantId + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + k + "');\">" + g.cnName + "</a>"
            }
            if (b <= 0) {
                r += '<span class="pro_price">';
                var j = parseInt(g.num);
                var f = g.totalPrice;
                f = f.toFixed(2);
                if (a) {
                    r += "&yen;" + g.totalPrice
                } else {
                    if (c && c > 0) {
                        var B = parseFloat(g.needPoint / j);
                        B = B.toFixed(0);
                        if (c == 1) {
                            r += B + '积分<p class="cart_gray">(' + chineseUrl + ")</p>"
                        } else {
                            if (c == 2) {
                                var h = parseFloat(g.needMoney / j);
                                h = h.toFixed(0);
                                r += "(" + B + "积分)<p>&yen;" + h + "</p>"
                            } else {
                                if (c == 3) {
                                    r += B + '积分<p class="cart_gray">(中信)</p>'
                                } else {
                                    if (c == 4) {
                                        r += '0<p class="cart_gray">(积分抽奖)</p>'
                                    } else {
                                        r += "&yen;" + f
                                    }
                                }
                            }
                        }
                    } else {
                        if (g.activityId != null && g.activityId != "0") {
                            r += "&yen;" + g.totalPrice
                        } else {
                            r += "&yen;" + f
                        }
                    }
                }
            } else {
                r += "<span>已售完"
            }
            r += "</span>";
            r += '<div class="num_box">';
            if (currSiteId == 1) {
                if (b <= 0) {
                    r += yhdMiniCart.loadModifyNumInfo(g)
                }
            }
            if (!a) {
                if (c != 4 && (g.activityId == null || g.activityId == "0" || g.activityId == "-55")) {
                    if (b > 0) {
                        r += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + l + "','deleteWaringItem','" + g.productId + "','" + g.merchantId + "','" + g.promotionId + "','" + g.num + "');"
                    } else {
                        if (e && c == 0) {
                            r += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + l + "','deletePromote','" + g.productId + "','" + g.merchantId + "','" + g.promotionId + "','" + g.num + "');"
                        } else {
                            if (i == 3) {
                                r += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + l + "','deleteLandingpage','" + g.productId + "','" + g.merchantId + "','" + g.promotionId + "','" + g.num + "');"
                            } else {
                                r += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + l + "','deleteItem','" + g.productId + "','" + g.merchantId + "','" + g.promotionId + "','" + g.num + "');"
                            }
                        }
                    }
                    r += "return false;gotracker('2','YHD_TOP_delShop_" + l + "','" + g.productId + "')\">删除</a>"
                }
            }
            r += "</div>";
            r += "</li>"
        });
        r += "</ul>";
        var u = "合计";
        if (typeof currSiteType != "undefined" && currSiteType == 2) {
            u = "金额总计（预估）"
        }
        r += '<div class="checkout_box">';
        r += '<p><span class="fl">共<strong>' + q.totalNum + "</strong>件商品</span>" + u + "：<strong>&yen;" + w + "</strong></p>";
        r += '<a href="' + currDomain + '/cart/cart.do?action=view" class="checkout_btn">去结算</a>';
        r += "</div>";
        jQuery("#in_cart_num").text(parseInt(q.totalNum) > 999 ? "999+": q.totalNum)
    } else {
        r = '<div class="none_tips">';
        jQuery("#in_cart_num").text("0");
        r += "您的购物车里还没有" + chineseUrl + "的商品，欢迎选购！";
        r += "</div>"
    }
    var s = false;
    if (typeof siteFlag != "undefined" && siteFlag == 1) {
        var v = typeof currSiteType != "undefined" && currSiteType == 1 ? "1号商城": "1号店";
        jQuery.getJSON(oppositeDomain + "/cart/ajaxCountNum.do?callback=?",
        function(a) {
            if (a && a.code == 200) {
                s = true;
                if (parseInt(a.data) > 0) {
                    r += '<p class="mall_account"><a href=' + oppositeDomain + "/cart/cart.do?action=view&switchProviceId=" + jQuery.cookie("provinceId") + ">";
                    r += v + "还有<strong>" + a.data + "</strong>件商品待结算</a></p>"
                }
            }
            m(o, r)
        });
        n = setTimeout(function() {
            if (!s) {
                m(o, r)
            }
        },
        2000)
    }
    function m(b, a) {
        b.html(a);
        yhdMiniCart.bindMiniCartEvent();
        b.data("inani", false);
        if (typeof n != "undefined" && n) {
            clearTimeout(n)
        }
    }
}
function yaowangLoadMiniCart(k) {
    var n = jQuery("#showMiniCart");
    if (k.totalNum && k.items) {
        var i = parseInt(k.totalNeedPoint);
        var h = parseInt(k.totalNeedZhongxinPoint);
        var l = parseFloat(k.totalNeedMoney);
        var j = parseFloat(k.totalAmount) + l;
        j = j.toFixed(2);
        var m = '<ul><li class="pr_num">共<strong>' + k.totalNum + "</strong>件商品 金额总计(预估):<strong>";
        if (i && i > 0) {
            m += i + "积分（1号店）+"
        }
        if (h && h > 0) {
            m += h + "积分（中信）+"
        }
        m += j + "</strong>元</li>";
        jQuery(k.items).each(function(d) {
            var v = this;
            var c = parseInt(v.itemType);
            var t = parseInt(v.warningType);
            var g = parseInt(v.pointBuyType);
            var s = v.hasPromoteLimitAttachedKey;
            if (t > 0) {
                m += '<li id="mini_cart_li_' + d + '" style="border:1px solid #FF6666;background: none repeat scroll 0 0 #ffe1e1;">';
                m += " " + v.message
            } else {
                m += '<li id="mini_cart_li_' + d + '">'
            }
            var b = "minicart";
            m += '<a traget="_blank" href="' + URLPrefix.central + "/product/" + v.productId + "_" + v.merchantId + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + b + '\');"><img src="' + v.picture4040URL + '"></a><a class="t" "_blank" href="' + URLPrefix.central + "/product/" + v.productId + "_" + v.merchantId + '" onclick="addTrackPositionToCookie(\'' + 1 + "','" + b + "');\">" + v.cnName + "</a>";
            m += '<span class="fr">';
            var f = parseInt(v.num);
            var u = v.currentPrice;
            u = u.toFixed(2);
            if (g && g > 0) {
                var e = parseFloat(v.needPoint / f);
                e = e.toFixed(0);
                if (g == 1) {
                    m += "<strong>" + e + "积分(1号店)x" + f + "</strong>"
                } else {
                    if (g == 2) {
                        var a = parseFloat(v.needMoney / f);
                        a = a.toFixed(0);
                        m += "<strong>(" + e + "积分+￥" + a + ")x" + f + "</strong>"
                    } else {
                        if (g == 3) {
                            m += "<strong>" + e + "积分(中信)x" + f + "</strong>"
                        } else {
                            if (g == 4) {
                                m += "<strong> 0(积分抽奖)x" + f + "</strong>"
                            } else {
                                m += "<strong>￥" + u + "x" + f + "</strong>"
                            }
                        }
                    }
                }
            } else {
                if (v.activityId != null && v.activityId != "0") {
                    m += "<strong>￥" + v.totalPrice + "</strong>"
                } else {
                    m += "<strong>￥" + u + "x" + f + "</strong>"
                }
            }
            if (g != 4 && (v.activityId == null || v.activityId == "0" || v.activityId == "-55")) {
                if (t > 0) {
                    m += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + d + "','deleteWaringItem','" + v.productId + "','" + v.merchantId + "','" + v.promotionId + "','" + v.num + "');"
                } else {
                    if (s && g == 0) {
                        m += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + d + "','deletePromote','" + v.productId + "','" + v.merchantId + "','" + v.promotionId + "','" + v.num + "');"
                    } else {
                        if (c == 3) {
                            m += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + d + "','deleteLandingpage','" + v.productId + "','" + v.merchantId + "','" + v.promotionId + "','" + v.num + "');"
                        } else {
                            m += '<a href="javascript:void(0);" onclick="ajaxDeleteMiniCartItem(\'' + d + "','deleteItem','" + v.productId + "','" + v.merchantId + "','" + v.promotionId + "','" + v.num + "');"
                        }
                    }
                }
                m += "return false;gotracker('2','delShop_" + d + "','" + v.productId + "')\">删除</a> </span> </li>"
            }
        });
        m += '<li class="pr_num">共<strong id="totalInFloatCart">' + k.totalNum + "</strong>件商品 金额总计(预估):<strong>";
        if (i && i > 0) {
            m += i + "积分（1号店）+"
        }
        if (h && h > 0) {
            m += h + "积分（中信）+"
        }
        m += j + "</strong>元</li></ul>";
        jQuery("#in_cart_num").text(k.totalNum);
        n.html(m)
    } else {
        jQuery("#in_cart_num").text("0");
        n.hide().html("");
        jQuery("#DivShim").css("height", "0px").hide();
        jQuery("#showMiniCart").hide();
        n.data("inani", false)
    }
}
function afterLoadMiniCart(b) {
    if (currSiteId == 1) {
        yhdSiteLoadMiniCart(b)
    } else {
        yaowangLoadMiniCart(b)
    }
}
function ajaxDeleteMiniCartItem(i, o, p, m, l, j) {
    var k = currDomain;
    k = k + "/cart/ajax.do?action=delete&callback=?";
    var n;
    if (o == "deleteWaringItem") {
        n = {
            deleteWarningQueue: p,
            rd: Math.random()
        }
    } else {
        if (o == "deletePromote") {
            n = {
                deleteOverPromotionQueue: p,
                rd: Math.random()
            }
        } else {
            if (o == "deleteLandingpage") {
                n = {
                    deleteGiftQueue: "landingpage_" + l + "_0_" + m + "_" + p + "_" + j,
                    rd: Math.random()
                }
            } else {
                n = {
                    deleteQueue: p,
                    rd: Math.random()
                }
            }
        }
    }
    jQuery.getJSON(k, n,
    function(a) {
        reloadMiniCart()
    })
}
function initMiniCart() {
    buildCartNumber();
    if (!jQuery("#miniCart").size()) {
        return
    }
    jQuery("#miniCart").data("inani", false).hover(function(b) {
        if (jQuery(this).data("inani")) {
            return
        }
        jQuery(this).data("inani", true);
        loadMiniCart()
    },
    function(c) {
        var d = jQuery(this);
        jQuery("#DivShim").css("height", "0px").hide();
        jQuery("#showMiniCart").hide();
        d.data("inani", false)
    })
}
var yhdMiniCart = yhdMiniCart || {};
if (typeof currSiteId != "undefined" && currSiteId == 1) {
    yhdMiniCart.Map = function() {
        var b = 0;
        this.entry = {};
        this.put = function(a, d) {
            if (!this.containsKey(a)) {
                b++
            }
            this.entry[a] = d
        };
        this.get = function(a) {
            if (this.containsKey(a)) {
                return this.entry[a]
            } else {
                return null
            }
        };
        this.remove = function(a) {
            if (delete this.entry[a]) {
                b--
            }
        };
        this.containsKey = function(a) {
            return (a in this.entry)
        };
        this.containsValue = function(a) {
            for (var d in this.entry) {
                if (this.entry[d] == a) {
                    return true
                }
            }
            return false
        };
        this.values = function() {
            var a = [];
            for (var d in this.entry) {
                a.push(this.entry[d])
            }
            return a
        };
        this.keys = function() {
            var a = new Array(b);
            for (var d in this.entry) {
                a.push(d)
            }
            return a
        };
        this.size = function() {
            return b
        };
        this.clear = function() {
            this.entry = {};
            this.size = 0
        }
    };
    yhdMiniCart.urlMap = new yhdMiniCart.Map();
    yhdMiniCart.ajaxQueue = new Array();
    yhdMiniCart.loadModifyNumInfo = function(t) {
        var s = parseInt(t.landingNumLimit);
        var u = parseInt(t.currentStockNum);
        var o = parseInt(t.userLimitNum);
        var x = parseInt(t.totalLimitNum);
        var r = parseInt(t.promoteType);
        var y = parseInt(t.shoppingCountNum);
        var w = parseInt(t.promotionId);
        var B = 0;
        var z = parseInt(t.itemType);
        var p = parseInt(t.pointBuyType);
        if (z == 3) {
            B = 2
        } else {
            if (t.hasPromoteLimitAttachedKey) {
                B = 1
            } else {
                B = 0
            }
        }
        var q = u + "_" + o + "_" + x + "_" + y + "_" + s + "_" + r;
        var v = t.productId + "_" + t.merchantId + "_" + B + "_" + w;
        var A = "";
        if (p > 0 || (z == 4 || z == 0) || (z == 3 && s == 1)) {
            A += '<b class="minusDisable"></b>';
            A += '<input type="text"  oriNum=' + t.num + ' class="minicart_num"  value=' + t.num + ' disabled="disabled" class="disable" />';
            A += '<b class="plusDisable"></b>'
        } else {
            if (t.num == 1) {
                A += '<b class="minusDisable"></b>'
            } else {
                A += '<b class="minus" ></b>'
            }
            A += '<input type="text"  oriNum=' + t.num + ' class="minicart_num" limitNum=' + q + "  value=" + t.num + " paramValue= " + v + " />";
            A += '<b class="plus" ></b>'
        }
        return A
    };
    yhdMiniCart.clickPlusCalSubTotal = function() {
        loli.delay(".plus", "click",
        function() {
            var b = this.siblings("input");
            return yhdMiniCart.ajaxNum(b, "increment")
        },
        function() {
            yhdMiniCart.ajaxPost()
        },
        1000)
    };
    yhdMiniCart.clickMinusCalSubTotal = function() {
        loli.delay(".minus", "click",
        function() {
            var c = this.siblings("input");
            if (parseInt(c.val()) == 1) {
                var d = "输入的数量有误,应为[1-999]";
                yhdMiniCart.showWarningMsg(c, d);
                return false
            }
            return yhdMiniCart.ajaxNum(c, "decrement")
        },
        function() {
            yhdMiniCart.ajaxPost()
        },
        1000)
    };
    yhdMiniCart.handCalSubTotal = function() {
        loli.delay("#showMiniCartDetail ul li div input[type=text]", "keyup",
        function() {},
        function() {
            yhdMiniCart.ajaxNum(this);
            yhdMiniCart.ajaxPost()
        },
        2000)
    };
    yhdMiniCart.ajaxNum = function(m, l) {
        if (l == "increment") {
            m.val(parseInt(m.val()) + 1)
        } else {
            if (l == "decrement") {
                m.val(parseInt(m.val()) - 1)
            }
        }
        var k = /^[1-9]\d{0,2}$/g;
        if (!m.val().match(k)) {
            var n = "输入的数量有误,应为[1-999]";
            yhdMiniCart.showWarningMsg(m, n);
            m.val(m.attr("oriNum"));
            return false
        }
        if (parseInt(m.val()) == parseInt(m.attr("oriNum"))) {
            return
        }
        var h = m.attr("paramValue");
        var j = h.split("_");
        var i = j[2];
        if (i == 2) {
            return yhdMiniCart.calLandingTotal(m)
        } else {
            return yhdMiniCart.calSubTotal(m)
        }
    };
    yhdMiniCart.ajaxPost = function() {
        yhdMiniCart.ajaxQueue = yhdMiniCart.urlMap.values();
        yhdMiniCart.urlMap.clear();
        yhdMiniCart.sendAjaxReq(yhdMiniCart.ajaxQueue)
    };
    yhdMiniCart.sendAjaxReq = function(e) {
        if (e.length == 0) {
            reloadMiniCart(sliderMiniCart);
            return
        }
        var h = e.shift();
        var g = h.url;
        var f = h.obj;
        jQuery.getJSON(g + "&callback=?",
        function(a) {
            if (a.code == 200) {
                yhdMiniCart.sendAjaxReq(e)
            } else {
                if (a.code == 401) {
                    yhdPublicLogin.showLoginDiv(null, false);
                    return false
                } else {
                    yhdMiniCart.showWarningMsg(f, a.message);
                    yhdMiniCart.sendAjaxReq(e)
                }
            }
        })
    };
    yhdMiniCart.calSubTotal = function(p) {
        var A = p.val();
        var r = /^[1-9]\d{0,2}$/g;
        if (!A.match(r)) {
            var t = "输入的数量有误,应为[1-999]";
            yhdMiniCart.showWarningMsg(p, t);
            p.val(p.attr("oriNum"));
            return false
        }
        if (parseInt(A) > 1) {
            yhdMiniCart.setMinusOperate(p, true)
        } else {
            if (parseInt(A) == 1) {
                yhdMiniCart.setMinusOperate(p, false)
            }
        }
        var u = p.attr("paramValue");
        var s = u.split("_");
        var o = parseInt(isNaN(s[0]) ? 0 : s[0]);
        var y = parseInt(isNaN(s[1]) ? 0 : s[1]);
        var B = parseInt(isNaN(s[2]) ? 0 : s[2]);
        var w = parseInt(isNaN(s[3]) ? 0 : s[3]);
        if (!yhdMiniCart.checkOverLimit(p)) {
            A = parseInt(p.val());
            yhdMiniCart.showMinusTips(p, A, B, o, y, w);
            var q = yhdMiniCart.calItemNum(o, y, B, A, w);
            q = q > 999 ? 999 : q;
            var v = currDomain + "/cart/ajaxEditNum.do?productId=" + o + "&num=" + q + "&merchantId=" + y;
            var z = o + "_" + y;
            var x = {};
            x.url = v;
            x.obj = p;
            yhdMiniCart.urlMap.put(z, x);
            return true
        }
        return false
    };
    yhdMiniCart.calLandingTotal = function(u) {
        var s = u.val();
        var v = /^[1-9]\d{0,2}$/g;
        if (!s.match(v)) {
            var m = "输入的数量有误,应为[1-999]";
            yhdMiniCart.showWarningMsg(u, m);
            u.val(u.attr("oriNum"));
            return false
        }
        if (parseInt(s) > 1) {
            yhdMiniCart.setMinusOperate(u, true)
        } else {
            if (parseInt(s) == 1) {
                yhdMiniCart.setMinusOperate(u, false)
            }
        }
        var n = u.attr("paramValue");
        var w = n.split("_");
        var t = w[0];
        var p = w[1];
        var o = w[3];
        if (!yhdMiniCart.checkOverLimit(u)) {
            s = u.val();
            var x = currDomain + "/cart/ajaxEditLandingPageNum.do?productId=" + t + "&num=" + s + "&merchantId=" + p + "&promotionId=" + o;
            var r = t + "_" + p;
            var q = {};
            q.url = x;
            q.obj = u;
            yhdMiniCart.urlMap.put(r, q)
        }
    };
    yhdMiniCart.checkOverLimit = function(F) {
        var C = parseInt(isNaN(F.val()) ? 0 : F.val());
        var H = F.attr("oriNum");
        var t = F.attr("paramValue");
        var G = t.split("_");
        var D = G[2];
        var v = F.attr("limitNum");
        var u = v.split("_");
        var x = parseInt(u[0]);
        var r = parseInt(u[1]);
        var A = parseInt(u[2]);
        var z = parseInt(u[3]);
        var B = parseInt(u[4]);
        var w = parseInt(u[5]);
        var y = "";
        var E = C;
        var s = false;
        switch (parseInt(D)) {
        case 0:
            if (x > 0) {
                if (C > x) {
                    y = "该商品库存有限，您最多只能购买" + x + "件";
                    E = x;
                    s = E == H
                } else {
                    if (z > 1 && C < z) {
                        y = "该商品[" + z + "件起购]";
                        E = z;
                        s = E == H
                    } else {
                        if (C > r && r > 0) {
                            y = "该商品[每人限购" + r + "件],超过则以" + chineseUrl + "价购买"
                        } else {
                            if (A > 0 && C > A && w == 5) {
                                y = "该商品[限购" + A + "件]";
                                E = A;
                                s = E == H
                            } else {
                                if (A > 0 && C > A) {
                                    y = "该商品[限购" + A + "件],超过则以" + chineseUrl + "价购买"
                                } else {
                                    y = ""
                                }
                            }
                        }
                    }
                }
            } else {
                E = 0;
                y = "该商品已下架或无库存"
            }
            break;
        case 1:
            if (x > 0) {
                if (C > x) {
                    y = "该商品库存有限，您最多只能购买" + x + "件";
                    E = x;
                    s = E == H
                }
            } else {
                E = 0;
                y = "该商品已下架或无库存"
            }
            break;
        case 2:
            if (B > 0 && C > B) {
                y = "该商品为特价商品，您最多只能购买" + B + "件";
                E = B;
                s = E == H
            } else {
                if (z > 1 && C < z) {
                    y = "该商品[" + z + "件起购]";
                    E = z;
                    s = E == H
                }
            }
            break
        }
        if (y && y.length > 0 && E > 0) {
            F.val(E);
            yhdMiniCart.showWarningMsg(F, y)
        }
        return s
    };
    yhdMiniCart.showMinusTips = function(t, r, p, s, o, n) {
        if (p != 0) {
            return
        }
        var u = parseInt(t.attr("oriNum"));
        var q = jQuery("input[paramValue='" + s + "_" + o + "_" + (p == 0 ? 1 : 0) + "_" + n + "']");
        if (r < u && q.size() > 0) {
            var x = t.attr("limitNum");
            var w = x.split("_");
            var v = parseInt(w[1]);
            var m = "该商品【" + (u == v ? "每人": "") + "限购" + u + "件】，优先减去" + chineseUrl + "价商品";
            yhdMiniCart.showWarningMsg(t, m)
        }
    };
    yhdMiniCart.calItemNum = function(k, i, l, m, n) {
        var h = parseInt(m);
        var j = jQuery("input[paramValue='" + k + "_" + i + "_" + (l == 0 ? 1 : 0) + "_" + n + "']");
        if (j.size() > 0) {
            h += parseInt(j.val())
        }
        return h
    };
    yhdMiniCart.showWarningMsg = function(e, f) {
        var g = e.offset().top;
        var h = '<span class="tips_arrow1">&#9670;</span>';
        h += '<span class="tips_arrow1 tips_arrow2">&#9670;</span>';
        h += "<p>" + f + "</p>";
        jQuery(".ap_shopping_warning").html(h);
        jQuery(".ap_shopping_warning").css("top", g - $("#miniCart").offset().top - $(".ap_shopping_warning").outerHeight() - 4).fadeIn(500);
        clearTimeout();
        setTimeout(function() {
            jQuery(".ap_shopping_warning").fadeOut(500)
        },
        2000)
    };
    yhdMiniCart.bindMiniCartEvent = function() {
        if (currSiteId == 1) {
            yhdMiniCart.handCalSubTotal();
            yhdMiniCart.clickPlusCalSubTotal();
            yhdMiniCart.clickMinusCalSubTotal()
        }
    };
    yhdMiniCart.setMinusOperate = function(d, c) {
        if (c) {
            d.siblings("b:eq(1)").removeClass("minusDisable");
            d.siblings("b:eq(1)").addClass("minus")
        } else {
            if (!c) {
                d.siblings("b:eq(1)").removeClass("minus");
                d.siblings("b:eq(1)").addClass("minusDisable")
            }
        }

    };
    if (typeof currSiteType != "undefined" && currSiteType == 1) {
        var miniCartIfmByIE6 = function() {
            if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                var d = $(".minicart_ifm").length;
                if (d == 0) {
                    $("<iframe class=minicart_ifm></iframe>").insertBefore(".minicart_list .list_detail:first")
                }
                var c = $(".minicart_list").find(".list_detail").first().height() + 2;
                $(".minicart_ifm").height(c)
            }
        };
        var miniCart = function() {
            if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                var c = $(".ap_shopping_warning").find("p").width();
                if (c > 140) {
                    $(".ap_shopping_warning").find("p").width("140")
                }
            }
            var d = function() {
                if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    var a = $(".minicart_list").find(".list_detail").first().find("ul").height();
                    if (a > 345) {
                        $(".minicart_list").find(".list_detail").first().find("ul").height("345")
                    } else {
                        if (a < 148) {
                            $(".minicart_list").find(".list_detail").first().find("ul").height("148")
                        }
                    }
                    miniCartIfmByIE6()
                }
            };
            $(".minicart_box").hover(function() {
                $(this).find(".minicart_list").show();
                d()
            },
            function() {
                $(this).find(".minicart_list").hide()
            });
            $(".minicart_list > .list_detail:gt(0)").hide();
            $(".cart_tab").find("li").click(function() {
                $(".cart_tab li").removeClass("cur_tab");
                $(this).addClass("cur_tab");
                $(".minicart_list").find(".list_detail").hide();
                var a = $(".cart_tab li").index(this);
                $(".minicart_list").find(".list_detail").eq(a).show();
                if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    var b = $(".minicart_list").find(".list_detail").eq(a).find("ul").height();
                    if (b > 345) {
                        $(".minicart_list").find(".list_detail").eq(a).find("ul").height("345")
                    } else {
                        if (b < 148) {
                            $(".minicart_list").find(".list_detail").eq(a).find("ul").height("148")
                        }
                    }
                }
                return false
            })
        }
    } else {
        var ieMaxHeight = function() {
            if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                var c = $(".list_detail").find("ul"),
                d = c.height();
                if (d > 329) {
                    c.height("329")
                } else {
                    if (d < 148) {
                        c.height("148")
                    }
                }
                miniCartIfmByIE6()
            }
        };
        var miniCart = function() {
            $(".minicart_box").hover(function() {
                $(this).find(".minicart_list").show();
                ieMaxHeight()
            },
            function() {
                $(this).find(".minicart_list").hide()
            })
        }
    }
}
function initAllMiniCart() {
    if (typeof currSiteId != "undefined" && currSiteId == 2) {
        initMiniCart()
    } else {
        ymInitMiniCart()
    }
}
function ymInitMiniCart() {
    buildCartNumber();
    miniCart();
    if (!jQuery("#miniCart").size()) {
        return
    }
    jQuery("#miniCart").data("inani", false).mouseover(function(b) {
        if (jQuery(this).data("inani")) {
            return
        }
        jQuery(this).data("inani", true);
        loadMiniCart()
    })
}
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initAllMiniCart()
    }
});
var suggestLength = 0;
var curSuggestIndex = -1;
function findNames(j, h, i) {
    var l = "0";
    if (jQuery("#leaf").size() > 0) {
        l = jQuery("#leaf").val()
    }
    var g = h.keyCode;
    if (jQuery(j).val() != i && g != "38" && g != "40") {
        var k = URLPrefix.search + "/get_keywords.do?keyword=" + encodeURIComponent(encodeURIComponent(jQuery(j).val())) + "&leaf=" + l + "&callback=?";
        jQuery.getJSON(k,
        function(a) {
            if (a.ERROR) {} else {
                var b = false;
                jQuery("#searchSuggest").html(a.value).find("a").each(function() {
                    var c = jQuery(this).find("span").html();
                    if (c) {
                        jQuery(this).html(c);
                        jQuery(this).addClass(b ? "odd": "even");
                        b = !b;
                        if (jQuery("#searchSuggest ul li").size() > 0) {
                            jQuery("#searchSuggest ul li").hover(function() {
                                jQuery(this).addClass("select").siblings().removeClass("select");
                                curSuggestIndex = jQuery("#searchSuggest ul li").index(this)
                            },
                            function() {
                                jQuery(this).removeClass("select")
                            })
                        }
                    }
                });
                loadComplete_findNames()
            }
        })
    }
}
function loadComplete_findNames() {
    suggestLength = jQuery("#searchSuggest li").length;
    if (suggestLength <= 1) {
        jQuery("#searchSuggest").hide()
    } else {
        jQuery("#searchSuggest").show()
    }
}
function searchMe(r, t, k) {
    var p = null;
    var m = document.getElementById("recommendId");
    if (m) {
        p = m.value
    }
    var s = null;
    var o = document.getElementById("recommendName");
    if (o) {
        s = o.value
    }
    if (!r) {
        r = jQuery("#keyword").val()
    }
    if (r != null) {
        var l = jQuery("#keyword").attr("original");
        if (l != null && l != "" && l != "请输入关键词") {
            if (cutString(l, 10) == r) {
                var n = jQuery("#keyword").attr("url");
                if (n != null && n != "") {
                    window.location = n;
                    return
                }
            }
        }
    }
    if (r != null && jQuery.trim(r) != "" && jQuery.trim(r) != "请输入关键词") {
        addKeywordHistory(r)
    } else {
        searchFocus();
        hotKeywords_onDocumentReady();
        return
    }
    r = r.replace(/\//gi, " ");
    var q = "0";
    if (jQuery("#leaf").size() > 0) {
        q = jQuery("#leaf").val()
    }
    if (t != null && t != "0") {
        window.location = URLPrefix.search_keyword + "/s2/c" + t + "-" + k + "/k" + encodeURIComponent(encodeURIComponent(r)) + "/"
    } else {
        if (p != null && p != "") {
            window.location = URLPrefix.search_keyword + "/s2/c" + p + "-" + s + "/k" + encodeURIComponent(encodeURIComponent(r)) + "/"
        } else {
            window.location = URLPrefix.search_keyword + "/s2/c" + q + "-0/k" + encodeURIComponent(encodeURIComponent(r)) + "/"
        }
    }
}
function cutString(d, c) {
    if (d == null || d.length <= c) {
        return d
    }
    return d.substring(0, c)
}
function addKeywordHistory(b) {
    if (typeof(b) == "undefined") {
        return
    }
    b = jQuery.trim(b);
    b = b.replace(/[,]/g, " ");
    b = b.replace(/[，]/g, " ")
}
function roll(j) {
    j = j || window.event;
    var i = j.keyCode;
    suggestLength = jQuery("#searchSuggest li").length;
    var k = "";
    var g = "";
    if (jQuery("#searchSuggest ul li").size() > 0) {
        if (i == "38") {
            jQuery("#searchSuggest ul li").removeClass("select");
            if (curSuggestIndex <= 0) {
                curSuggestIndex = suggestLength - 1
            } else {
                if (curSuggestIndex == 1) {
                    curSuggestIndex = 0
                } else {
                    curSuggestIndex = curSuggestIndex - 1
                }
            }
            jQuery("#searchSuggest ul li").eq(curSuggestIndex).addClass("select")
        } else {
            if (i == "40") {
                jQuery("#searchSuggest ul li").removeClass("select");
                if (curSuggestIndex == 0) {
                    curSuggestIndex = 1
                } else {
                    if (curSuggestIndex >= (suggestLength - 1)) {
                        curSuggestIndex = 0
                    } else {
                        curSuggestIndex = curSuggestIndex + 1
                    }
                }
                jQuery("#searchSuggest ul li").eq(curSuggestIndex).addClass("select")
            }
        }
        if (i == "38" || i == "40") {
            var h = jQuery("#searchSuggest  ul li a").eq(curSuggestIndex).text();
            if (jQuery("#searchSuggest ul li").eq(curSuggestIndex).attr("id") != null && jQuery("#searchSuggest ul li").eq(curSuggestIndex).attr("id") != "") {
                var l = jQuery("#searchSuggest  ul li a").eq(0).text();
                jQuery("#keyword").val(l);
                if (jQuery("#searchSuggest ul li ").eq(curSuggestIndex).attr("id") == "recom1") {
                    k = document.getElementById("recom1Id").value;
                    g = document.getElementById("recom1Name").value
                }
                if (jQuery("#searchSuggest ul li").eq(curSuggestIndex).attr("id") == "recom2") {
                    k = document.getElementById("recom2Id").value;
                    g = document.getElementById("recom2Name").value
                }
            } else {
                jQuery("#keyword").val(h)
            }
            document.getElementById("recommendId").value = k;
            document.getElementById("recommendName").value = g
        }
    }
    if (i == "13") {
        if (k != "") {
            searchMe(jQuery("#keyword").val(), k, g)
        } else {
            searchMe(jQuery("#keyword").val(), "0", "0")
        }
    }
}
function selectSearchCategory(c, d) {
    jQuery("#searchCategory").html(d);
    jQuery("#leaf").val("0_" + c)
}
function emptySearchBar() {
    if (jQuery("#keyword").data("default") && !jQuery("#keyword").val().indexOf(jQuery("#keyword").data("default"))) {
        jQuery("#keyword").val(jQuery("#keyword").val().substring(jQuery("#keyword").data("default").length));
        jQuery("#keyword").trigger("blur")
    }
}
function hotKeywords_onDocumentReady() {
    if (currSiteType == 2) {
        var keywords = jQuery("#keyword").attr("original");
        if (keywords == null || keywords == "") {
            keywords = "请输入关键词"
        }
        var oldKeywords = jQuery("#keyword").val();
        keywords = cutString(keywords, 10);
        if (oldKeywords == keywords || oldKeywords == "" || oldKeywords == "请输入关键词") {
            jQuery("#keyword").css("color", "#999999");
            jQuery("#keyword").bind("focus",
            function() {
                if (this.value == keywords) {
                    this.value = "";
                    this.style.color = "#333333"
                }
            }).bind("blur",
            function() {
                if (this.value == "") {
                    this.value = keywords;
                    this.style.color = "#999999"
                }
            })
        }
        return
    }
    var divHotkeywordsList = jQuery("#hotKeywordsList")[0];
    if (!divHotkeywordsList) {
        return
    }
    var hotkeywordsList = jQuery(divHotkeywordsList).attr("data-grid");
    eval("var hots = " + hotkeywordsList);
    var hour = new Date().getHours();
    var def = new Array();
    if (hots[hour].length > 0) {
        def.push(hots[hour][0])
    }
    def.push(hots[24][0]);
    if (def.length > 0) {
        var keywords = def[0];
        var oldKeywords = jQuery("#keyword").val();
        if (oldKeywords == "" || oldKeywords == "请输入关键词") {
            jQuery("#keyword").attr("value", keywords);
            jQuery("#keyword").data("default", keywords)
        }
        if (oldKeywords == keywords || oldKeywords == "" || oldKeywords == "请输入关键词") {
            jQuery("#keyword").css("color", "#999999");
            jQuery("#keyword").bind("focus",
            function() {
                if (this.value == keywords) {
                    this.value = "";
                    this.style.color = "#333333"
                }
            }).bind("blur",
            function() {
                if (this.value == "") {
                    this.value = keywords;
                    this.style.color = "#999999"
                }
            })
        }
    }
    var curr = new Array();
    for (var i = 1; i < hots[hour].length; i++) {
        curr.push(hots[hour][i])
    }
    for (var t = 0; t < 100; t++) {
        var i = Math.floor(Math.random() * hots[24].length);
        var word = hots[24][i];
        var contains = false;
        for (var j = 0; j < curr.length; j++) {
            if (word == curr[j]) {
                contains = true;
                break
            }
        }
        if (!contains && word != keywords) {
            curr.push(word)
        }
    }
    if (curr.length > 0) {
        var buf = "";
        for (var i = 0; i < curr.length; i++) {
            var show = "";
            if (curr[i] && curr[i] != "undefined") {
                show = curr[i]
            }
            buf = buf + "<a href='" + URLPrefix.search_keyword + "/s2/c0-0/k" + encodeURIComponent(show) + "/' title='搜索:" + show + "'>" + show + "</a>"
        }
        jQuery("#hotKeywordsShow").append(buf);
        bindLinkClickTracker("hotKeywordsShow", "HotKeyword")
    }
}
function index_hotKeywords_onDocumentReady() {
    if (isIndex == 1) {
        var b = jQuery("#keyword").val();
        if (b != "" && b != "请输入关键词") {
            jQuery("#keyword").data("default", b);
            jQuery("#keyword").css("color", "#999999");
            jQuery("#keyword").bind("focus",
            function() {
                if (this.value == b) {
                    this.value = "";
                    this.style.color = "#333333"
                }
            }).bind("blur",
            function() {
                if (this.value == "") {
                    this.value = b;
                    this.style.color = "#999999"
                }
            });
            return
        }
    }
}
function searchFocus() {
    var b = $("#keyword").val();
    if (b == null || jQuery.trim(b) == "") {
        jQuery("#keyword").val("请输入关键词");
        b = "请输入关键词"
    }
    if (b == "请输入关键词") {
        jQuery("#keyword").css("color", "#999999")
    }
    $("#keyword").focus(function() {
        if ($(this).val() == "请输入关键词") {
            $(this).val("").css("color", "#333")
        }
    }).blur(function() {
        if (!$(this).val().replace(/\s/gi, "")) {}
    })
}
jQuery(document).ready(function() {
    if (isIndex != 1) {
        hotKeywords_onDocumentReady()
    }
    searchFocus()
}); (function(b) {
    b.fn.bgIframe = b.fn.bgiframe = function(f) {
        if (b.browser.msie && parseInt(b.browser.version) <= 6) {
            f = b.extend({
                top: "auto",
                left: "auto",
                width: "auto",
                height: "auto",
                opacity: true,
                src: "javascript:false;"
            },
            f || {});
            var e = function(c) {
                return c && c.constructor == Number ? c + "px": c
            },
            a = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + f.src + '"style="display:block;position:absolute;z-index:-1;' + (f.opacity !== false ? "filter:Alpha(Opacity='0');": "") + "top:" + (f.top == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')": e(f.top)) + ";left:" + (f.left == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')": e(f.left)) + ";width:" + (f.width == "auto" ? "expression(this.parentNode.offsetWidth+'px')": e(f.width)) + ";height:" + (f.height == "auto" ? "expression(this.parentNode.offsetHeight+'px')": e(f.height)) + ';"/>';
            return this.each(function() {
                if (b("> iframe.bgiframe", this).length == 0) {
                    this.insertBefore(document.createElement(a), this.firstChild)
                }
            })
        }
        return this
    };
    if (!b.browser.version) {
        b.browser.version = navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1]
    }
})(jQuery);
var Class = {
    create: function() {
        return function() {
            this.initialize.apply(this, arguments)
        }
    }
};
var Extend = function(c, b) {
    for (var a in b) {
        c[a] = b[a]
    }
};
function stopDefault(a) {
    if (a && a.preventDefault) {
        a.preventDefault()
    } else {
        window.event.returnValue = false
    }
    return false
}
var Stars = Class.create();
Stars.prototype = {
    initialize: function(o, k) {
        this.SetOptions(k);
        var d = 999;
        var m = (document.all) ? true: false;
        var f = document.getElementById(o).getElementsByTagName("a");
        var g = document.getElementById(this.options.Input) || document.getElementById(o + "-input");
        var b = document.getElementById(this.options.Tips) || document.getElementById(o + "-tips");
        var l = " " + this.options.nowClass;
        var j = this.options.tipsTxt;
        var a = f.length;
        for (n = 0; n < a; n++) {
            f[n].value = n;
            f[n].onclick = function(c) {
                stopDefault(c);
                this.className = this.className + l;
                d = this.value;
                g.value = this.getAttribute("star:value");
                b.innerHTML = j[this.value]
            };
            f[n].onmouseover = function() {
                if (d < 999) {
                    var c = RegExp(l, "g");
                    f[d].className = f[d].className.replace(c, "")
                }
            };
            f[n].onmouseout = function() {
                if (d < 999) {
                    f[d].className = f[d].className + l
                }
            }
        }
        if (m) {
            var h = document.getElementById(o).getElementsByTagName("li");
            for (var n = 0,
            a = h.length; n < a; n++) {
                var e = h[n];
                if (e) {
                    e.className = e.getElementsByTagName("a")[0].className
                }
            }
        }
    },
    SetOptions: function(a) {
        this.options = {
            Input: "",
            Tips: "",
            nowClass: "current-rating",
            tipsTxt: ["1分-很不满意", "2分-不满意", "3分-一般", "4分-满意", "5分-非常满意"]
        };
        Extend(this.options, a || {})
    }
};
function setHomepage() {
    if (document.all) {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(httpUrl)
    } else {
        if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch(c) {
                    alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                }
            }
            var d = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
            d.setCharPref("browser.startup.homepage", httpUrl)
        }
    }
}
function globalLogoff() {}
function bookmark() {
    if (document.all) {
        window.external.AddFavorite(httpUrl, favorite)
    } else {
        try {
            window.sidebar.addPanel(favorite, httpUrl, "")
        } catch(b) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}
var myCartTopHeaderTimer;
function clearMyCartTopHeaderTimer() {
    if (myCartTopHeaderTimer != null) {
        clearTimeout(myCartTopHeaderTimer)
    }
}
function buildMyYihaodian() {
    jQuery("#myYihaodian").mouseover(function(b) {
        clearMyCartTopHeaderTimer();
        jQuery("#myYihaodianFloatDiv").show();
        b.stopPropagation()
    });
    jQuery("#myYihaodianFloatDiv").mouseout(function(b) {
        clearMyCartTopHeaderTimer();
        myCartTopHeaderTimer = setTimeout(function() {
            jQuery("#myYihaodianFloatDiv").hide()
        },
        1000);
        b.stopPropagation()
    }).mouseover(function(b) {
        clearMyCartTopHeaderTimer();
        b.stopPropagation()
    });
    jQuery("body").click(function(b) {
        clearMyCartTopHeaderTimer();
        jQuery("#myYihaodianFloatDiv").hide();
        b.stopPropagation()
    })
}
var hasPingAnCookie = 0;
function writeHeaderContent() {
    var n = jQuery.cookie("ut");
    var j = jQuery.cookie("uname");
    var o = 0;
    if (n) {
        o = 1
    }
    if (document.domain.indexOf("111.com", 0) == -1) {
        if (j) {
            j = decodeURIComponent(j);
            j = cutUsername(j);
            if (j == null) {
                j = ""
            }
            if (currSiteType == 1) {
                var k = jQuery("#user_name_info");
                if (k.length == 0) {
                    jQuery("#user_name").text(j)
                } else {
                    jQuery("#user_name_info").text(j);
                    jQuery("#user_name_welcome").show()
                }
            } else {
                if (jQuery("#user_name_info").length == 0) {
                    if (o) {
                        jQuery("#user_name").html("<span>" + j + "</span>，欢迎您！")
                    } else {
                        jQuery("#user_name").html("<span>" + j + "</span>，欢迎您！请")
                    }
                } else {
                    if (o) {
                        jQuery("#user_name").text(j + "，欢迎您！")
                    } else {
                        jQuery("#user_name").text(j + "，欢迎您！请")
                    }
                }
            }
        }
    }
    if (o == 1) {
        if (document.domain.indexOf("111.com", 0) != -1) {
            if (j) {
                j = decodeURIComponent(j);
                if (j == null) {
                    j = ""
                }
                jQuery("#user_name").text(j)
            }
        }
        jQuery("#login").hide();
        jQuery("#logout").show()
    }
    var l = "";
    var i = jQuery.cookie("ucocode");
    var p = jQuery.cookie("externaluserlevel");
    if ((i && i == "pingan")) {
        hasPingAnCookie = 1;
        l = "尊敬的万里通会员";
        jQuery(".provincebox").addClass("provincebox2")
    } else {
        if (i && i == "tencent") {
            if (p && p > 0) {
                l = "尊敬的QQ会员"
            } else {
                if (p && p == 0) {
                    l = "尊敬的QQ用户"
                }
            }
        } else {
            if (i && i == "kaixin001" && jQuery("#KX_JS_URL").size() > 0) {
                if (jQuery("#kx001_btn_login").parent().size() > 0) {
                    jQuery("#logout").hide();
                    jQuery("#kx001_btn_login").parent().show()
                }
                var m = jQuery("#KX_JS_URL").val();
                jQuery.getScript(m,
                function() {
                    if (jQuery("#kx001_btn_login").size() > 0 && jQuery("#kx001_btn_login").html() == "") {
                        try {
                            KX001.init("974091834200c72a39a7bb394900fb0c", "/pages/kaixin/kx001_receiver.html")
                        } catch(a) {}
                    }
                })
            }
        }
    }
    if (l && l != "") {
        if (j == null) {
            j = ""
        }
        if (currSiteId == 1) {
            if (currSiteType == 1) {
                var k = $("#user_name").find("#user_name_info");
                if (k.length == 0) {
                    jQuery("#user_name").text(cutUsername(l + j))
                } else {
                    jQuery("#user_name_info").text(j);
                    jQuery("#user_name_welcome").show()
                }
            } else {
                if (jQuery("#user_name_info").length == 0) {
                    if (o) {
                        jQuery("#user_name").html("<span>" + cutUsername(l + j) + "</span>，欢迎您！")
                    } else {
                        jQuery("#user_name").html("<span>" + cutUsername(l + j) + "</span>，欢迎您！请")
                    }
                } else {
                    if (o) {
                        jQuery("#user_name").text(cutUsername(l + j) + "，欢迎您！")
                    } else {
                        jQuery("#user_name").text(cutUsername(l + j) + "，欢迎您！请")
                    }
                }
            }
        } else {
            jQuery("#user_name").text(l + j)
        }
    }
}
function cutUsername(b) {
    return b
}
function bothSiteLogoutJsonp() {
    var h = false;
    var e = false;
    var f = (typeof currSiteType != "undefined" && currSiteType == 1) ? URLPrefix.passport: URLPrefix.passportmall;
    var g = (typeof currSiteType != "undefined" && currSiteType == 1) ? URLPrefix.passportmall: URLPrefix.passport;
    jQuery.getJSON(f + "/passport/logoutJsonp.do?timestamp=" + new Date() + "&callback=?",
    function(a) {
        if (a && a.code == "0") {
            h = true
        }
        jQuery.getJSON(g + "/passport/logoutJsonp.do?timestamp=" + new Date() + "&callback=?",
        function(b) {
            if (b && b.code == "0") {
                e = true
            }
            window.location.href = currDomain
        })
    });
    if (myCartTopHeaderTimer) {
        clearMyCartTopHeaderTimer()
    }
    myCartTopHeaderTimer = setTimeout(function() {
        if (! (h && e)) {
            window.location.href = currDomain
        }
    },
    3000)
}
function pingan_quit() {
    var b = new Date((new Date()).getTime()).toGMTString();
    document.cookie = "ut=;expires=" + b + ";domain=." + no3wUrl + ";path=/";
    document.cookie = "ucocode=;expires=" + b + ";domain=." + no3wUrl + ";path=/";
    document.cookie = "cocode=;expires=" + b + ";domain=." + no3wUrl + ";path=/";
    location.href = "https://www.wanlitong.com/eloyalty_chs/start.swe?SWENeedContext=false&SWECmd=Logoff&SWEC=2&SWEBID=-1&SWETS="
}
function kx001_onlogout() {
    window.location.href = httpUrl + "/passport/logoff.do"
}
function hightLightMenu(f, g) {
    var e = jQuery(f);
    var h = location.href;
    e.each(function(c) {
        if (c == 0) {
            return true
        }
        var d = jQuery(this).find("a");
        var i = d.attr("href");
        var a = d.attr("hl");
        var b = false;
        b = (h.indexOf(i) > -1);
        if (!b) {
            if (a) {
                b = (h.indexOf(a) > -1)
            }
        }
        if (!b) {
            b = (h.indexOf("point2channel.do") > -1) && (i.indexOf("/point2/pointIndex.do") > -1)
        }
        if (b) {
            if (c) {
                e.eq(0).addClass("removehome");
                d.addClass("select")
            }
            return false
        }
    })
}
function initHeader() {
    jQuery(".top_bar_link > ul > li").hover(function() {
        jQuery(this).children("ul").show().end();
        jQuery(this).find(".qixia").addClass("qixia_hover")
    },
    function() {
        jQuery(this).children("ul").hide().end();
        jQuery(this).find(".qixia").removeClass("qixia_hover")
    });
    try {
        writeHeaderContent()
    } catch(b) {}
    hightLightMenu("#global_menu li", null)
}
function lazyLoadBottomBrandsData() {
    var b = function() {
        var d = jQuery("#bottomBrand");
        if (!d.size()) {
            return
        }
        var a = document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        if (d.offset().top > a + 100 || d.data("loaded")) {
            return
        } else {
            d.data("loaded", true)
        }
        d.html("<p align='center'><img src='" + imagePath + "/loade.gif'/>请您稍等,数据正在加载...</p>");
        jQuery.getJSON(URLPrefix.central + "/bottomBrand/ajaxGetBottomBrandsData.do?callback=?",
        function(c) {
            d.html("");
            if (c.value) {
                var g = jQuery(c.value).find("ul");
                var h = "";
                g.each(function() {
                    h += jQuery(this).html()
                });
                d.html(h)
            }
            jQuery(window).unbind("scroll", b)
        })
    };
    jQuery(window).bind("scroll", b);
    b()
}
function headNavFixed() {
    if (typeof currSiteType != "undefined" && typeof currSiteId != "undefined" && currSiteId == 1) {
        if (currSiteType == 1) {
            function d() {
                var a = 142;
                $(window).scroll(function() {
                    var b = $(this).scrollTop();
                    if (b > a) {
                        $(".headerNav").addClass("nav_fixed")
                    } else {
                        $(".headerNav").removeClass("nav_fixed")
                    }
                });
                if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    var a = 142;
                    $(window).scroll(function() {
                        var f = $(this).scrollTop();
                        if (f > a) {
                            $(".headerNav").addClass("fixed_ie6");
                            var b = $(".headerNav_ifm").length;
                            if (b == 0) {
                                $("<iframe class=headerNav_ifm></iframe>").insertBefore(".headerNav .wrap")
                            }
                            $(".headerNav").css("top", f)
                        } else {
                            $(".headerNav").removeClass("fixed_ie6");
                            $(".headerNav_ifm").remove();
                            $(".headerNav").css("top", "0px")
                        }
                    })
                }
            }
            d()
        } else {
            function c() {
                var b = $("#headerNav"),
                a = b.offset().top;
                if ($.browser.msie && $.browser.version == 6) {
                    loli.delay(window, "scroll", null,
                    function() {
                        var g = $(window).scrollTop(),
                        h = $("#headerNavEm");
                        if (g > a) {
                            h.show();
                            b.addClass("navFloat");
                            b.css("top", g)
                        } else {
                            h.hide();
                            b.removeClass("navFloat")
                        }
                    },
                    500)
                } else {
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > a) {
                            b.addClass("navFloat")
                        } else {
                            b.removeClass("navFloat")
                        }
                    })
                }
            }
            c()
        }
    }
}
jQuery(document).ready(function() {
    if (isIndex != 1) {
        initHeader()
    }
    lazyLoadBottomBrandsData();
    if (typeof isFixTopNav != "undefined" && isFixTopNav == true) {
        headNavFixed()
    }
});
jQuery(function() {
    if (jQuery.cookie("ut")) {
        var d = 0;
        var e = URLPrefix.my + "/top/myorder/ajaxInitShowMyOrderPageTotalData.do?timestame=" + new Date() + "&callback=?";
        jQuery.getJSON(e,
        function(j) {
            if (! (j && j.resultCode) || j.resultCode == 0) {
                jQuery("#odrNumId").hide();
                jQuery("#tagPageOdrNumId").hide();
                jQuery("#idxOdrTipConId").removeClass("idxOdrTipCon").hide();
                jQuery(".top_bar_link #myorderID").data("isLogin", false);
                return false
            } else {
                b(j)
            }
        });
        function b(j) {
            d = j.awaitCommentNum;
            var k = j.orderNum;
            var l = j.payReceiveNum;
            if (l == 0) {
                jQuery("#odrNumId").remove()
            }
            if (l + d > 0) {
                jQuery("#tagPageOdrNumId").html(l);
                jQuery("#odrNumId").addClass("odrNum").show();
                jQuery("#idxOdrTipConId").removeClass("idxOdrTipCon").hide();
                jQuery(".top_bar_link #myorderID").addClass("firstLi");
                jQuery(".top_bar_link #myorderID").hover(function() {
                    if (new Date().getTime() - jQuery(".top_bar_link #myorderID").data("reqedtime") <= 1 * 60 * 1000) {
                        return
                    }
                    if (jQuery(".top_bar_link #myorderID").data("inreq")) {
                        return
                    }
                    jQuery(".top_bar_link #myorderID").data("inreq", true);
                    jQuery(".loading").show().siblings().hide();
                    jQuery(".tabCon:gt(0)").children().not(".loading").hide();
                    jQuery("#idxOdrTipConId").removeClass("idxOdrTipCon").hide();
                    jQuery.getJSON(URLPrefix.my + "/top/myorder/ajaxShowMyOrderPageTagData.do?timestamp=" + new Date() + "&callback=?",
                    function(m) {
                        if (m.ERROR) {
                            jQuery(".top_bar_link #myorderID").data("inreq", false);
                            jQuery(".top_bar_link #myorderID").data("reqedtime", new Date().getTime());
                            return
                        }
                        jQuery(".top_bar_link #myorderID").data("inreq", false);
                        jQuery(".top_bar_link #myorderID").data("reqedtime", new Date().getTime());
                        jQuery("#idxOdrTipConId").html(m.value);
                        jQuery("#idxOdrTipConId").addClass("idxOdrTipCon").show();
                        jQuery("#idxOdrTipConId ul li:eq(2)").attr("id", "waitCommentId_" + d);
                        a();
                        c();
                        jQuery(".loading").hide().siblings().show()
                    })
                });
                jQuery("a[tk]").click(function() {
                    var m = $(this),
                    n = m.attr("tk");
                    if (n) {
                        addTrackPositionToCookie("1", n)
                    }
                })
            }
        }
        function g() {
            jQuery(".top_bar_link #myorderID,#idxOdrTipConId").hover(function() {
                jQuery(".top_bar_link #myorderID").addClass("myOdrHover");
                jQuery("#idxOdrTipConId").addClass("idxOdrTipCon").show();
                jQuery("#odrNumId").removeClass("odrNum").hide()
            },
            function() {
                jQuery(".top_bar_link #myorderID").removeClass("myOdrHover");
                jQuery("#idxOdrTipConId").removeClass("idxOdrTipCon").hide();
                jQuery("#odrNumId").addClass("odrNum").show()
            })
        }
        function i(k) {
            jQuery(k).addClass("cur").siblings().removeClass("cur");
            var j = jQuery(k).index();
            jQuery(".tabCon").eq(j).show().siblings(".tabCon").hide()
        }
        function c() {
            var l = jQuery("#idxOdrTipConId ul li:eq(0)").attr("id");
            var m = jQuery("#idxOdrTipConId ul li:eq(1)").attr("id");
            var j = jQuery("#idxOdrTipConId ul li:eq(2)").attr("id");
            var k = jQuery("#idxOdrTipConId ul li:eq(0)");
            if (l && l.split("_")[1] > 0) {
                h(k)
            } else {
                if (m && m.split("_")[1] > 0) {
                    k = jQuery("#idxOdrTipConId ul li:eq(1)");
                    h(k)
                } else {
                    if (j && j.split("_")[1] > 0) {
                        k = jQuery("#idxOdrTipConId ul li:eq(2)");
                        h(k)
                    } else {
                        jQuery(".top_bar_link #myorderID").removeClass("myOdrHover");
                        jQuery("#idxOdrTipConId").removeClass("idxOdrTipCon").hide();
                        jQuery("#odrNumId").remove();
                        return false
                    }
                }
            }
        }
        function h(j) {
            i(j);
            g();
            f()
        }
        function f() {
            jQuery(".idxOdrTipCon ul li").hover(function() {
                jQuery(this).addClass("cur").siblings().removeClass("cur");
                var j = jQuery(".idxOdrTipCon ul li").index(jQuery(".cur"));
                jQuery(".tabCon").eq(j).show().siblings(".tabCon").hide()
            })
        }
        function a() {
            if (d == 0) {
                jQuery("#idxOdrTipConId ul li:eq(2)").html("待评论(" + 0 + ")");
                jQuery("#pageTagUnCommentPId").html("您没有等待评论的订单")
            } else {
                jQuery("#idxOdrTipConId ul li:eq(2)").html("待评论(" + d + ")");
                jQuery("#pageTagUnCommentId").html(d)
            }
        }
    }
});
initLeftMenu(true);
runfunctions([], [initHeader, initProvince, initAllMiniCart, index_hotKeywords_onDocumentReady], this);
function runfunctions(d, c, e) {
    if (! (c && c.length)) {
        return
    }
    e = e || window;
    var b = c.shift();
    var a = d.shift() || [];
    for (;; b = c.pop(), a = d.pop()) {
        if (typeof b == "function") {
            setTimeout(function() {
                try {
                    b.apply(e, a)
                } catch(f) {}
                runfunctions(d, c, e)
            },
            100);
            return false
        }
    }
}; (function(a) {
    YHD.HomePage = new
    function() {
        this.init = function() {
            A("#topbanner");
            if (currSiteId == 2) {
                r("#topCurtain");
                u();
                y("lunbo");
                p("sales_promotion");
                g();
                z("new_pr_out");
                B();
                f()
            } else {
                k("#topCurtain");
                s("#index_menu_carousel");
                l("#index_recommend_list", ".pro_tab li", ".tab_content",
                function(E) {
                    var C = E.find(".time_buying"),
                    D = C.find("li");
                    C.delegate("li", "mouseover",
                    function() {
                        D.removeClass("on");
                        $(this).addClass("on")
                    });
                    C.delegate("li", "mouseout",
                    function() {
                        $(this).removeClass("on")
                    })
                },
                1);
                t("#limitBuy li");
                b("#sort_brand");
                w("#notice_news");
                h("#provinceOfUserLike");
                q("#provinceOfUserLikeContent");
                d("#guessYouLike")
            }
        };
        function s(F) {
            var T = a(F),
            N = T.find(".mini_promo"),
            G = N.find("a:last-child");
            m(F);
            G.css("background-image", "none");
            N.delegate("a", "mouseover",
            function() {
                $(this).addClass("bg_none")
            });
            N.delegate("a", "mouseout",
            function() {
                $(this).removeClass("bg_none")
            });
            var Q = {
                n: 0
            };
            var D = T.width(),
            E = T.find("ul"),
            L = E.find("li"),
            K = T.find(".promo_wrapper ol"),
            I = K.find("li img");
            E.delegate("li", "mouseover",
            function() {
                L.removeClass("cur");
                $(this).addClass("cur");
                var U = L.index(this);
                if (K.is(":animated")) {
                    K.stop()
                }
                if (!K.is(":animated")) {
                    K.animate({
                        left: "-" + D * U
                    },
                    "500");
                    Q.n = U
                }
            });
            var M = setInterval(function() {
                showAuto(L, Q)
            },
            5000);
            T.hover(function() {
                clearInterval(M)
            },
            function() {
                M = setInterval(function() {
                    showAuto(L, Q)
                },
                5000)
            });
            var J = T.find(".show_next"),
            C = T.find(".show_pre");
            T.hover(function() {
                J.show();
                C.show()
            },
            function() {
                J.hide();
                C.hide()
            });
            var H = L.length;
            var J = T.find(".show_next"),
            C = T.find(".show_pre");
            J.live("click",
            function() {
                var U = Q.n;
                Q.n = U = U >= (H - 1) ? 0 : ++U;
                L.eq(U).trigger("mouseover");
                return false
            });
            C.live("click",
            function() {
                var U = Q.n;
                U--;
                Q.n = U;
                L.eq(U).trigger("mouseover");
                return false
            });
            var P = "si";
            if (window.isWidescreen) {
                P = "wi"
            }
            var S = I.length,
            R = 0;
            var O = setInterval(function() {
                if (R >= S) {
                    clearInterval(O);
                    return
                }
                var U = I[R];
                var V = U.getAttribute(P);
                if (V) {
                    U.src = V
                }
                R++
            },
            200)
        }
        function m(C) {
            $(C + " a[tk]").each(function(D) {
                var E = this;
                $(E).click(function() {
                    addTrackPositionToCookie("1", $(E).attr("tk"))
                })
            })
        }
        function b(C) {
            l(C, "dt a", "dd",
            function(H) {
                var G = H.find(".scroll_btn");
                var F = G.find("a");
                var E = H.find(".scroll_wrapper").width();
                var D = H.find(".scroll_box");
                F.click(function() {
                    $(this).addClass("on").siblings().removeClass("on");
                    var I = F.index(this);
                    if (!D.is(":animated")) {
                        D.animate({
                            left: "-" + E * I
                        },
                        "500")
                    }
                })
            },
            1)
        }
        function w(C) {
            l(C, "dt a", "dd",
            function(I) {
                var E = I.find(".fr_tab_content"),
                H = I.find(".fr_tab"),
                D = H.find("li"),
                F = D.length,
                G = 0;
                E.hide();
                E.eq(0).show();
                D.hover(function() {
                    D.removeClass("cur");
                    $(this).addClass("cur");
                    var J = D.index(this);
                    E.hide();

                    E.eq(J).show();
                    G = J
                });
                I.find(".fr_next").click(function() {
                    G = G + 1;
                    if (G < F) {
                        D.eq(G).addClass("cur").siblings().removeClass("cur");
                        E.hide();
                        E.eq(G).show()
                    } else {
                        if (G = F) {
                            G = 0;
                            D.eq(G).addClass("cur").siblings().removeClass("cur");
                            E.hide();
                            E.eq(G).show()
                        }
                    }
                });
                I.find(".fr_pre").click(function() {
                    if (G > 0) {
                        G = G - 1;
                        D.eq(G).addClass("cur").siblings().removeClass("cur");
                        E.hide();
                        E.eq(G).show()
                    } else {
                        if (G == 0) {
                            G = F - 1;
                            D.eq(G).addClass("cur").siblings().removeClass("cur");
                            E.hide();
                            E.eq(G).show()
                        }
                    }
                })
            },
            1)
        }
        var l = function(D, G, F, J, I) {
            var H = $(D),
            C = H.find(G),
            E = H.find(F);
            E.hide().eq(0).show();
            C.eq(0).data("flag", 1);
            C.hover(function() {
                C.removeClass("cur");
                $(this).addClass("cur");
                var K = C.index(this);
                E.hide().eq(K).show();
                if (I == 1) {
                    var N = this;
                    var L = $(N).data("flag");
                    if (L != "1") {
                        var M = $(N).attr("tk");
                        gotracker("1", M);
                        $(N).data("flag", "1")
                    }
                }
            });
            if (J) {
                J(H)
            }
        };
		
        function t(D) {
            var C = currDomain + "/time/dynamictime";
            $.ajax({
                url: C,
                dataType: "script",
                complete: function(E, F) {
                    x(D);
                    e("#limitBuy li",
                    function(G) {
                        return "剩余<span>" + G + "</span>"
                    })
                }
            })
        }
        

        function k(C) {
            var F = a(C);
            var E = F.find(".index_topbanner_fold");
            var D = F.find("a");
            E.toggle(function() {
                $(this).removeClass("index_topbanner_unfold");
                $(this).html("展开<s></s>");
                D.eq(0).slideUp();
                D.eq(1).slideDown()
            },
            function() {
                $(this).addClass("index_topbanner_unfold");
                $(this).html("收起<s></s>");
                D.eq(0).slideDown();
                D.eq(1).slideUp()
            });
            var G = a(C).find("a>img");
            G.eq(0).load(function() {
                a(C).slideDown();
                v(E)
            });
            G.each(function() {
                a(this).attr("src", a(this).attr(isWidescreen ? "wideimg": "shortimg")).removeAttr("wideimg").removeAttr("shortimg")
            })
        }
        function v(D) {
            var C = function() {
                D.trigger("click")
            };
            var E = setTimeout(C, 5000);
            D.click(function() {
                clearInterval(E)
            })
        }
        function r(C, D) {
            if (currSiteId == 2) {
                var E = function(F, G) {
                    if (!a(F).size()) {
                        return
                    }
                    this.container = a(F);
                    this.bindClose(this.container.children(".index_topbanner_close"));
                    this.show(0)
                };
                E.config = {
                    cookiename: "TOPSLIDER_SHOWED",
                    closeCss: ".index_topbanner_close"
                };
                E.prototype.bindClose = function(F) {
                    var G = this;
                    this.container.hover(function() {
                        F.show(240)
                    },
                    function() {
                        F.hide(240)
                    });
                    F.click(function() {
                        G.container.slideUp()
                    })
                };
                E.prototype.show = function(F) {
                    this.container.children("a:lt(" + F + ")").remove();
                    var H = this.container.find("a>img");
                    this.container.children("a:gt(" + F + ")").find("img").hide();
                    var G = this;
                    H.eq(0).load(function() {
                        G.slide()
                    });
                    H.each(function() {
                        a(this).attr("src", a(this).attr(isWidescreen ? "wideimg": "shortimg")).removeAttr("wideimg").removeAttr("shortimg")
                    })
                };
                E.prototype.slide = function() {
                    var F = this.container.find("a>img");
                    if (F.size() > 1) {
                        this.container.slideDown();
                        setTimeout(function() {
                            F.eq(0).slideUp();
                            F.eq(1).slideDown()
                        },
                        3000)
                    } else {
                        this.container.show()
                    }
                };
                return new E(C, D || E.config)
            } else {}
        }
        function A(C, D) {
            if (currSiteId == 2) {
                var E = function(G, H) {
                    var F = a(G);
                    if (!F.size()) {
                        return
                    }
                    var J = F.width();
                    var I = F.offset().left;
                    a(G).children("." + H.closeCss).toggle(function() {
                        var K = a(this);
                        F.removeClass("wrap").animate({
                            left: (I + J - H.closewidth) + "px",
                            width: H.closewidth + "px",
                            marginBottom: "-" + F.height() + "px"
                        },
                        400,
                        function() {
                            K.addClass(H.openCss).removeClass(H.closeCss)
                        })
                    },
                    function() {
                        a(this).addClass(H.closeCss).removeClass(H.openCss);
                        F.animate({
                            left: "0px",
                            marginBottom: "0",
                            width: J
                        },
                        400,
                        function() {
                            a(this).addClass("wrap")
                        })
                    })
                };
                E.config = {
                    closewidth: 60,
                    closeCss: "closebanner",
                    openCss: "openbanner"
                };
                E(C, E.config || D)
            } else {
                a(".closebanner").click(function() {
                    a(".banner_unfold").show();
                    a(C).animate({
                        height: "25px"
                    },
                    "normal",
                    function() {
                        a(".banner_img").hide()
                    })
                });
                a(".banner_unfold span").click(function() {
                    a(".banner_img").show();
                    a(C).animate({
                        height: "90px"
                    },
                    "normal",
                    function() {
                        a(".banner_unfold").hide()
                    })
                })
            }
        }
       
        function B() {
            a(".announcement .tab li").hover(function() {
                a(this).addClass("cur").siblings().removeClass("cur");
                var C = a(".announcement .tab li").index(this);
                a(".announcement ul").eq(C + 1).show().siblings("ul[id]").hide().siblings(".tab").show()
            })
        }
        function f() {
            var C = a(".recommend > .tab  li");
            var E = C.index(a(".recommend > .tab  li.cur"));
            var D = a(".recommend > .tab  li").length;
            C.hover(function() {
                E = C.index(this);
                a(this).addClass("cur").siblings().removeClass("cur");
                a(".recommend_left a").eq(E).css("display", "block").siblings("a").hide()
            });
            a(".recommend .next2").click(function() {
                E = C.index(a(".recommend > .tab  li.cur")) + 1;
                if (E < D) {
                    a(".recommend > .tab  li").eq(E).addClass("cur").siblings().removeClass("cur");
                    a(".recommend_left a").eq(E).css("display", "block").siblings("a").hide()
                } else {
                    if (E = D) {
                        E = 0;
                        a(".recommend > .tab  li").eq(E).addClass("cur").siblings().removeClass("cur");
                        a(".recommend_left a").eq(E).css("display", "block").siblings("a").hide()
                    }
                }
            });
            a(".recommend .pre2").click(function() {
                E = C.index(a(".recommend > .tab  li.cur")) + 1;
                if (E > 0) {
                    E = C.index(a(".recommend > .tab  li.cur")) - 1;
                    a(".recommend > .tab  li").eq(E).addClass("cur").siblings().removeClass("cur");
                    a(".recommend_left a").eq(E).css("display", "block").siblings("a").hide()
                } else {
                    if (E == 0) {
                        E = D - 1;
                        a(".recommend > .tab  li").eq(E).addClass("cur").siblings().removeClass("cur");
                        a(".recommend_left a").eq(E).css("display", "block").siblings("a").hide()
                    }
                }
            })
        }
    }
})(jQuery);
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery(".fixedRight").addClass("toTop_show")
        } else {
            jQuery(".fixedRight").removeClass("toTop_show")
        }
    });
    jQuery(".fixedRight .toTop a").click(function() {
        jQuery("html,body").scrollTop(0);
        return false
    })
});
function fiexd_top_right(a, b) {
    jQuery(window).scroll(function() {
        jQuery("." + a).css("top", (b + jQuery(window).scrollTop()) + "px")
    })
}
if (jQuery.browser.msie && (jQuery.browser.version == "6.0") && !jQuery.support.style) {
    fiexd_top_right("fixedRight", 250)
}
jQuery(function() {
    YHD.HomePage.init()
});
function showAuto(c, b) {
    var a = c.length;
    b.n = b.n >= (a - 1) ? 0 : ++b.n;
    c.eq(b.n).trigger("mouseover").trigger("mouseout")
}
function flushGuessYouLikeContent(c) {
    if (!jQuery.cookie("provinceId")) {
        return
    }
    var g = jQuery.cookie("provinceId");
    var f = currSiteId || 1;
    var a = currSiteType || 1;
    var b = isWidescreen ? 1 : 0;
    var e = (new Date()).getTime();
    var d = URLPrefix.pms + "/pms/getGuessYourFavorateProducts.do?provinceId=" + g + "&currSiteId=" + f + "&currSiteType=" + a + "&widescreen=" + b + "&longTime=" + e;
    jQuery.ajax({
        url: d,
        dataType: "jsonp",
        success: function(h) {
            $(c).html(genHtmlWithPms("pms_guessyourfavor_", h, 1, c))
        }
    })
}
function genHtmlWithPms(c, e, k, a) {
    if (!jQuery.cookie("provinceId")) {
        return
    }
    var h = jQuery.cookie("provinceId");
    if (e == null || e == "" || e.value == null || e.value == "") {
        return '<li class="none_list"><span class="none_product">很抱歉，您查看的商品不存在或者已下架</span></li>'
    }
    var g = "";
    var m = e.value;
    for (var f = 0,
    d = m.length; f < d; f++) {
        if (f >= 5) {
            break
        }
        var l = m[f];
        g += "<li>";
        var b = c + h + "_" + l.productId + "_" + merchant;
        g += '<a href="' + l.linkUrl + '"  class="pro_img" onclick="javascript:addTrackPositionToCookie(\'1\',\'' + b + '\')" title="' + l.cnName + '" target="_blank">';
        g += '<img src="' + l.picUrl + '"/>';
        g += "</a>";
        g += '<a  class="pro_name" href="' + l.linkUrl + "\" onclick=\"javascript:addTrackPositionToCookie('1','" + b + '\')" title="' + l.cnName + '" target="_blank">' + l.cnName + "</a>";
        g += '<p class="tl"><strong productId="' + l.productId + '">¥' + l.salePrice + "</strong><del>¥" + l.marketPrice + "</del></p>";
        g += "</li>";
        if (m.length >= 5 && k == 1) {
            g += '<li class="change_list"><a href="javascript:void(0);" onclick="javascript:flushGuessYouLikeContent(\'' + a + '\');return false;" class="blue">换一批</a></li>'
        }
    }
    return g
}; (function(b) {
    var a = window.loli || (window.loli = {});
    a.scroll = function(g, e) {
        var h = "";
        var d = e || 200;
        var c = d - 20;
        b(window).scroll(function() {
            setTimeout(function() {
                f()
            },
            d);
            h = new Date().getTime()
        });
        function f() {
            if ((new Date().getTime() - h) >= c) {
                g();
                h = new Date().getTime()
            }
        }
    }
})(jQuery); (function(l) {
    var m = function(a) {
        var b = a,
        c = {
            lazyImg: {
                ltime: "2000",
                lnum: "5",
                load: true,
                attr: "original",
                hfix: 100
            }
        };
        l.extend(c, b);
        this.param = c
    };
    m.prototype = {
        constructor: m,
        isBusy: false,
        doc: document,
        lazyImg: function(f, a) {
            var g = this,
            e = g.param.lazyImg,
            c, d = f;
            if (a) {
                g.param.lazyImg = l.extend(e, a)
            }
            if (d instanceof l) {
                c = d
            } else {
                if (l.isArray(d)) {
                    d = l(d.join(","))
                } else {
                    d = l(d) || l("body")
                }
            }
            var b = d.find("img[" + e.attr + "]");
            g._lazyImg(b, e);
            g._iniLazy(function() {
                var p = d.find("img[" + e.attr + "]");
                if (p.length == 0) {
                    return c
                }
                g._lazyImg(p, e)
            });
            if (e.load) {
                g._loadImg(d)
            }
            return f
        },
        _loadImg: function(d) {
            var a = this,
            f = a.param.lazyImg,
            b = f.attr,
            c = f.ltime,
            e = f.lnum; (function(g, v, t, u, w) {
                var x = setInterval(function() {
                    if (g.isBusy) {
                        return false
                    }
                    var o = v.find("img[" + t + "]"),
                    p = o.length;
                    if (p > w) {
                        g._imgLoad(o, 0, w, t)
                    } else {
                        if (p > 0) {
                            g._imgLoad(o, 0, p, t)
                        } else {
                            clearInterval(x)
                        }
                    }
                },
                u)
            })(a, d, b, c, e)
        },
        _lazyImg: function(g, e) {
            var a = e.attr,
            b = g.length,
            p = this,
            d = 0,
            c = 1;
            p.isBusy = true;
            var f = p._pageTop() + e.hfix;
            p._imgLoad(g, d, b, a, f);
            p.isBusy = false
        },
        _imgLoad: function(b, c, e, g, a) {
            if (a) {
                for (var d = c; d < e; d++) {
                    var f = l(b[d]);
                    if (f.offset().top < a) {
                        f.attr("src", f.attr(g));
                        f.removeAttr(g)
                    }
                }
            } else {
                for (var d = c; d < e; d++) {
                    var f = l(b[d]);
                    f.attr("src", f.attr(g));
                    f.removeAttr(g)
                }
            }
        },
        _iniLazy: function(b) {
            var a = this;
            window.scrollTo(0, 0);
            l(window).bind("scroll",
            function() {
                if (!a.isBusy) {
                    b()
                } else {}
            })
        },
        _pageTop: function() {
            var a = this,
            b = a.doc,
            c = b.documentElement;
            return c.clientHeight + Math.max(c.scrollTop, b.body.scrollTop)
        }
    };
    var h = new m();
    l.fn.extend({
        lazyImg: function(a) {
            var b = new m();
            return b.lazyImg(this, a)
        }
    });
    var j = window,
    i = j.lazyLoadImageObjArry;
    if (!i) {
        j.lazyLoadImageObjArry = []
    }
    if (!j.initImageLoad) {
        j.initImageLoad = function() {
            var c = j.lazyLoadImageObjArry;
            for (var a = 0,
            b = c.length; a < b; a++) {
                c[a] = "#" + c[a]
            }
            h.lazyImg(c)
        }
    }
    var k = jQuery.YHD ? jQuery.YHD: jQuery.YHD = {},
    n = k.imgLoad ? k.imgLoad: k.imgLoad = {};
    n.load = function() {};
    window.loli = window.loli || {};
    window.loli.LazyManager = m
})(jQuery); (function($) {
    var DomLazyManager = function(param) {
        var _param = param,
        _setting = {
            activeLoadTime: 2000,
            load: true,
            activeLoadNum: 1,
            ele: "div",
            hfix: 100,
            attr: "lazyLoad_textarea",
            flushPrice: true,
            indexLoad: false,
            scrollLoad: true
        };
        $.extend(_setting, _param);
        this.param = _setting
    };
    DomLazyManager.prototype = {
        constructor: DomLazyManager,
        isBusy: false,
        doc: document,
        lazyDom: function(dom, param) {
            var _this = this,
            _param = _this.param,
            jqDom;
            if (param) {
                _this.param = $.extend(_param, param)
            }
            var _ele = _param.ele,
            _attr = _param.attr,
            _indexLoad = _param.indexLoad,
            _dom = dom;
            if (_dom instanceof $) {
                jqDom = _dom
            } else {
                _dom = $(_dom) || $("body")
            }
            if (_indexLoad) {
                var _jdom = _dom.find(_ele + "[" + _attr + "]").get();
                if (_jdom.length == 0) {
                    if (_dom.attr(_attr)) {
                        _jdom = _dom
                    } else {
                        return jqDom
                    }
                }
                _this._lazyDom(_jdom, _param)
            }
            var _scrollLoad = _param.scrollLoad;
            if (_scrollLoad) {
                _this._initLazy(function() {
                    var _jdom = _dom.find(_ele + "[" + _attr + "]").get();
                    if (_jdom.length == 0) {
                        if (_dom.attr(_attr)) {
                            _jdom = _dom
                        } else {
                            return jqDom
                        }
                    }
                    _this._lazyDom(_jdom, _param)
                })
            }
            if (_param.load) {
                _this._loadDom(_dom)
            }
        },
        _loadDom: function(_dom) {
            var _this = this,
            _param = _this.param,
            _ele = _param.ele,
            _attr = _param.attr,
            _time = _param.activeLoadTime,
            _num = _param.activeLoadNum; (function(_this, _dom, _param, _ele, _attr, _time, _num) {
                var intId = setInterval(function() {
                    if (_this.isBusy) {
                        return false
                    }
                    var _jdom = _dom.find(_ele + "[" + _attr + "]").get(),
                    length = _jdom.length;
                    if (length > _num) {
                        _this._domLoad(_jdom, _param, 0, _num, _attr)
                    } else {
                        if (length > 0) {
                            _this._domLoad(_jdom, _param, 0, length, _attr)
                        } else {
                            clearInterval(intId)
                        }
                    }
                },
                _time)
            })(_this, _dom, _param, _ele, _attr, _time, _num)
        },
        _lazyDom: function(jdom, param) {
            var _ele = param.ele,
            _attr = param.attr,
            jdomLen = jdom.length,
            _this = this,
            _min = 0,
            _i = 1;
            _this.isBusy = true;
            var pageTop = _this._pageTop() + param.hfix;
            _this._domLoad(jdom, param, _min, jdomLen, _attr, pageTop);
            _this.isBusy = false
        },
        _domLoad: function(_jdom, _param, _min, _max, _attr, _top) {
            var _flushPrice = _param.flushPrice;
            if (_top) {
                for (var i = _min; i < _max; i++) {
                    var _this = $(_jdom[i]);
                    if (_this.offset().top < _top) {
                        var textarea_id = _this.attr(_attr),
                        textarea = _this.find("#" + textarea_id);
                        _this.html(textarea.val());
                        _this.removeAttr(_attr);
                        if (_flushPrice) {
                            _this.flushPrice()
                        }
                        var _callback = _this.attr("callback");
                        if (_callback) {
                            eval("(" + _callback + "())")
                        }
                    }
                }
            } else {
                for (var i = _min; i < _max; i++) {
                    var _this = $(_jdom[i]);
                    var textarea_id = _this.attr(_attr),
                    textarea = _this.find("#" + textarea_id);
                    _this.html(textarea.val());
                    textarea.remove();
                    _this.removeAttr(_attr);
                    if (_flushPrice) {
                        _this.flushPrice()
                    }
                    var _callback = _this.attr("callback");
                    if (_callback) {
                        eval("(" + _callback + "())")
                    }
                }
            }
        },
        _initLazy: function(event) {
            var _this = this;
            window.scrollTo(0, 0);
            $(window).bind("scroll",
            function() {
                if (!_this.isBusy) {
                    event()
                } else {}
            })
        },
        _pageTop: function() {
            var _this = this,
            _doc = _this.doc,
            _ele = _doc.documentElement;
            return _ele.clientHeight + Math.max(_ele.scrollTop, _doc.body.scrollTop)
        }
    };
    var PriceFlushManager = function(param) {
        var _param = param,
        _setting = {
            attr: "productid",
            busystock: URLPrefix.busystock ? URLPrefix.busystock: "http://busystock.i.yihaodian.com",
            url: "/busystock/restful/truestock",
            maxNum: 200
        };
        $.extend(_setting, _param);
        this.param = _setting
    };
    PriceFlushManager.prototype = {
        constructor: PriceFlushManager,
        flushPrice: function(dom, param) {
            var _this = this,
            _param = _this.param,
            _dom = dom,
            _attr = _param.attr,
            _busystock = _param.busystock,
            _url = _param.url,
            _maxnum = _param.maxNum,
            arr;
            if (param) {
                _this.param = $.extend(_param, param)
            }
            if (_dom instanceof $) {
                arr = dom.find("[" + _attr + "]").get()
            } else {
                if ($.isArray(_dom)) {
                    arr = _dom
                } else {
                    arr = $(dom).find("[" + _attr + "]").get()
                }
            }
            _this._flushPrice(arr, _attr, _busystock + _url, _maxnum);
            return dom
        },
        _flushPrice: function(arr, attr, url, maxNum) {
            if (arr) {
                var _length = arr.length,
                _min = 0,
                _max, cirNum = 1;
                if (_length < maxNum) {
                    _max = _length
                } else {
                    cirNum = (_length - 1) / maxNum + 1
                }
                var param = "?mcsite=" + currBsSiteId + "&provinceId=" + jQuery.cookie("provinceId");
                var requestPrices = {};
                for (var j = 0; j < cirNum; j++) {
                    if (j > 0) {
                        _min = maxNum * j;
                        _max = _min + maxNum;
                        if (_max > _length) {
                            _max = _length
                        }
                    }
                    requestPrices = {};
                    for (var i = _min; i < _max; i++) {
                        var price = jQuery(arr[i]);
                        param += "&productIds=" + price.attr(attr);
                        requestPrices[price.attr(attr)] = price
                    }
                    try {
                        jQuery.getJSON(url + param + "&callback=?",
                        function(data) {
                            jQuery.each(data,
                            function(i, p) {
                                var jqObj = requestPrices[p.productId];
                                if (jqObj) {
                                    jqObj.text("¥" + p.productPrice).removeAttr(attr)
                                }
                            })
                        })
                    } catch(e) {}
                }
            }
        }
    };
    $.fn.extend({
        lazyDom: function(param) {
            var obj = new DomLazyManager();
            return obj.lazyDom(this, param)
        },
        flushPrice: function(param) {
            var obj = new PriceFlushManager();
            return obj.flushPrice(this, param)
        }
    })
})(jQuery);
var busystcok = URLPrefix.busystock ? URLPrefix.busystock: "http://busystock.i.yihaodian.com";
jQuery((function(b) {
    YHD = YHD || {};
    YHD.HomePagelazyLoade = new
    function() {
        var i = 500;
        var g = false;
        var a = 30;
        var j = this;
        this.lazyPrice;
        var h = function() {
            runfunctions([], [j.loadPrice], j);
            if (j.lazyPrice && !j.lazyPrice.length) {
                b(window).unbind("scroll", h)
            }
        };
        this.init = function() {
            h();
            b(window).bind("scroll", h)
        };
        this.pageTop = function() {
            return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        };
        this.loadPrice = function() {
            if (g) {
                return
            }
            g = true;
            var f = 0;
            try {
                if (!b.cookie("provinceId")) {
                    return
                }
                var p = this.pageTop();
                if (!this.lazyLoadPrice) {
                    this.lazyLoadPrice = b("[productid]").get()
                }
                var c = "?mcsite=" + currBsSiteId + "&provinceId=" + b.cookie("provinceId");
                var e = [];
                var o = {};
                b.each(this.lazyLoadPrice,
                function(l, k) {
                    if (b(k).attr("productid") && a > f && b(k).offset().top <= p + 100) {
                        c += "&productIds=" + b(k).attr("productid");
                        f++;
                        if (o[b(k).attr("productid")]) {
                            o[b(k).attr("productid")].add(k)
                        } else {
                            o[b(k).attr("productid")] = b(this)
                        }
                    } else {
                        e.push(k)
                    }
                });
                this.lazyLoadPrice = e;
                if (f > 0) {
                    try {
                        var n = busystcok + "/busystock/restful/truestock";
                        b.getJSON(n + c + "&callback=?",
                        function(k) {
                            b.each(k,
                            function(m, l) {
                                var s = o[l.productId];
                                if (s) {
                                    s.text("¥" + l.productPrice).removeAttr("productid")
                                }
                            })
                        })
                    } catch(d) {}
                }
            } catch(d) {
                setTimeout("YHD.HomePagelazyLoade.loadPrice()", i)
            }
            if (f >= a) {
                setTimeout("YHD.HomePagelazyLoade.loadPrice()", i)
            }
            g = false
        }
    }
})(jQuery));
jQuery(function() {
    $("body").lazyImg({
        attr: isWidescreen ? "wideimg": "shortimg"
    }).lazyImg();
    YHD.HomePagelazyLoade.init();
    jQuery("#needLazyLoad").lazyDom()
});






function shopList_loadCssAdnJs(c, a) {
    var b = "";
    if (a == "js") {
        b = document.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.setAttribute("src", c)
    } else {
        if (a == "css") {
            b = document.createElement("link");
            b.setAttribute("rel", "stylesheet");
            b.setAttribute("type", "text/css");
            b.setAttribute("href", c)
        }
    }
    if (typeof b != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(b)
    }
};