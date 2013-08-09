var sliderOptions = {
    sliderId: "slider",
    effect: "13",
    effectRandom: false,
    pauseTime: 3750,
    transitionTime: 1750,
    slices: 12,
    boxes: 8,
    hoverPause: 1,
    autoAdvance: true,
    captionOpacity: 0.3,
    captionEffect: "slide",
    thumbnailsWrapperId: "thumbs",
    m: false,
    license: "b6t80"
};

var imageSlider = new mcImgSlider(sliderOptions);

function mcImgSlider(k) {
    var Q = function (a) {
            return document.getElementById(a)
        },
        d = "length",
        D = function (e) {
            var a = e.childNodes,
                c = [];
            if (a) for (var b = 0, f = a[d]; b < f; b++) a[b].nodeType == 1 && c.push(a[b]);
            return c
        }
        l = "className",
        m = "getAttribute",
        f = "opacity",
        db = function (a, b) {
            return a.getElementsByTagName(b)
        },
        wb = function (a) {
            for (var c, e, b = a[d]; b; c = parseInt(Math.random() * b), e = a[--b], a[b] = a[c], a[c] = e);
            return a
        },
        vb = function (a, c, b) {
            if (a.addEventListener) a.addEventListener(c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        yb = document,
        c = "style",
        N = "display",
        B = "visibility",
        h = "width",
        y = "height",
        X = "top",
        P = "background",
        r = "undefined",
        v = "marginLeft",
        F = "appendChild",
        u = "parentNode",
        w = "nodeName",
        U = "innerHTML",
        W = "offsetWidth",
        E = setTimeout,
        K = clearTimeout,
        I = "indexOf",
        Z = "setAttribute",
        T = "removeChild",
        A = function () {
            this.d = [];
            this.b = null;
            this.c()
        },
        jb = function () {
            var c = 50,
                a = navigator.userAgent,
                b;
            if ((b = a[I]("MSIE ")) != -1) c = parseInt(a.substring(b + 5, a[I](".", b)));
            if (a[I]("Safari") != -1 && a[I]("Chrome") == -1) c = 300;
            return c
        },
        ob = jb() < 9,
        L = function (a, b) {
            if (a) {
                a.o = b;
                if (ob) a[c].filter = "alpha(opacity=" + b * 100 + ")";
                else a[c][f] = b
            }
        };
    A.a = {
        f: function (a) {
            return -Math.cos(a * Math.PI) / 2 + .5
        },
        g: function (a) {
            return a
        },
        h: function (b, a) {
            return Math.pow(b, a * 2)
        },
        j: function (b, a) {
            return 1 - Math.pow(1 - b, a * 2)
        }
    };
    A.prototype = {
        k: {
            c: k.transitionTime,
            a: function () {},
            b: A.a.f,
            d: 1
        },
        c: function () {
            for (var b = ["webkit", "ms", "o"], a = 0; a < b[d] && !window.requestAnimationFrame; ++a) {
                window.requestAnimationFrame = window[b[a] + "RequestAnimationFrame"];
                window.cancelAnimationFrame = window[b[a] + "CancelAnimationFrame"] || window[b[a] + "CancelRequestAnimationFrame"]
            }
            this.e = !! window.requestAnimationFrame
        },
        m: function (i, d, h, c) {
            for (var b = [], j = h - d, k = h > d ? 1 : -1, g = Math.ceil(60 * c.c / 1e3), a, e = 1; e <= g; e++) {
                a = d + c.b(e / g, c.d) * j;
                if (i != f) a = Math.round(a);
                b.push(a)
            }
            b.index = 0;
            return b
        },
        n: function () {
            this.b == null && this.p()
        },
        p: function () {
            this.q();
            var a = this;
            this.b = this.e ? window.requestAnimationFrame(function () {
                a.p()
            }) : window.setInterval(function () {
                a.q()
            }, 15)
        },
        q: function () {
            var a = this.d[d];
            if (a) {
                for (var c = 0; c < a; c++) this.o(this.d[c]);
                while (a--) {
                    var b = this.d[a];
                    if (b.d.index == b.d[d]) {
                        b.c();
                        this.d.splice(a, 1)
                    }
                }
            } else {
                if (this.e && window.cancelAnimationFrame) window.cancelAnimationFrame(this.b);
                else window.clearInterval(this.b);
                this.b = null
            }
        },
        o: function (a) {
            if (a.d.index < a.d[d]) {
                var e = a.b,
                    b = a.d[a.d.index];
                if (a.b == f) {
                    if (ob) {
                        e = "filter";
                        b = "alpha(opacity=" + Math.round(b * 100) + ")"
                    }
                } else b += "px";
                a.a[c][e] = b;
                a.d.index++
            }
        },
        r: function (e, b, d, f, a) {
            a = this.s(this.k, a);
            var c = this.m(b, d, f, a);
            this.d.push({
                a: e,
                b: b,
                d: c,
                c: a.a
            });
            this.n()
        },
        s: function (c, b) {
            b = b || {};
            var a, d = {};
            for (a in c) d[a] = typeof b[a] !== r ? b[a] : c[a];
            return d
        }
    };
    var j = new A,
        ub = function (b) {
            var a = [],
                c = b[d];
            while (c--) a.push(String.fromCharCode(b[c]));
            return a.join("")
        },
        b = {
            a: 0,
            e: "",
            d: 0,
            c: 0,
            b: 0
        },
        a, e, t, z, R, M, S, o, p, Y, H, s, C, G, q, cb, O, V, g, n = null,
        sb = function () {
            this[Z]("data-loaded", "t");
            V[c][N] = "none"
        },
        hb = function (b) {
            if (b == "series1") a.a = [6, 8, 15, 2, 5, 14, 13, 3, 7, 4, 14, 1, 13, 15];
            else if (b == "series2") a.a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
            else a.a = b.split(/\W+/);
            a.a.p = k.effectRandom ? -1 : a.a[d] == 1 ? 0 : 1
        },
        ab = function () {
            a = {
                b: k.pauseTime,
                c: k.transitionTime,
                f: k.slices,
                g: k.boxes,
                d: k.license,
                h: k.hoverPause,
                i: k.autoAdvance,
                j: k.captionOpacity,
                k: k.captionEffect == "none" ? 0 : k.captionEffect == "fade" ? 1 : 2,
                l: k.thumbnailsWrapperId,
                Ob: function () {
                    typeof beforeSlideChange !== r && beforeSlideChange(arguments)
                },
                Oa: function () {
                    typeof afterSlideChange !== r && afterSlideChange(arguments)
                }
            };
            if (e) a.m = Math.ceil(e.offsetHeight * a.g / e[W]);
            hb(k.effect);
            a.n = function () {
                var b;
                if (a.a.p == -1) b = a.a[Math.floor(Math.random() * a.a[d])];
                else {
                    b = a.a[a.a.p];
                    a.a.p++;
                    if (a.a.p >= a.a[d]) a.a.p = 0
                }
                if (b < 1 || b > 17) b = 15;
                return b
            }
        },
        qb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        kb = function () {
            if (b.b != 2) {
                b.b = 1;
                K(q);
                q = null
            }
        },
        gb = function () {
            if (b.b != 2) {
                b.b = 0;
                if (q == null && !b.c && a.i) q = E(function () {
                    n.y(n.n(b.a + 1), 0, 1)
                }, a.b / 2)
            }
        },
        rb = function () {
            var a = 0,
                b = 0,
                c;
            while (a < g.length) {
                c = g[a].className == "lazyImage" || g[a].getAttribute("data-src") || g[a].className.indexOf(" video") > -1 && typeof McVideo != r;
                if (c) {
                    b = 1;
                    break
                }++a
            }
            return b
        },
        x = [],
        ib = function (b) {
            var a = x[d];
            if (a) while (a--) x[a][l] = a != b && x[a].on == 0 ? "thumb" : "thumb thumb-on"
        },
        tb = function () {
            var f;
            if (a.l) f = Q(a.l);
            if (f) for (var g = f.childNodes, e = 0; e < g[d]; e++) g[e][l] == "thumb" && x.push(g[e]);
            var c = x[d];
            if (c) {
                while (c--) {
                    x[c].on = 0;
                    x[c].i = c;
                    x[c].onclick = function () {
                        n.y(this.i)
                    };
                    x[c].onmouseover = function () {
                        this.on = 1;
                        this[l] = "thumb thumb-on";
                        a.h == 2 && kb()
                    };
                    x[c].onmouseout = function () {
                        this.on = 0;
                        this[l] = this.i == b.a ? "thumb thumb-on" : "thumb";
                        a.h == 2 && gb()
                    }
                }
                ib(0)
            }
            return c
        },
        eb = function (a, e, i, c, b, d, g) {
            E(function () {
                if (e && i == e - 1) {
                    var g = {};
                    g.a = function () {
                        n.o()
                    };
                    for (var k in a) g[k] = a[k]
                } else g = a;
                typeof b[h] !== r && j.r(c, "width", b[h], d[h], a);
                typeof b[y] !== r && j.r(c, "height", b[y], d[y], a);
                j.r(c, f, b[f], d[f], g)
            }, g)
        },
        lb = function (a) {
            e = a;
            this.c()
        },
        nb = function (e, c) {
            for (var b = [], a = 0; a < e[d]; a++) b[b[d]] = String.fromCharCode(e.charCodeAt(a) - (c ? c : 3));
            return b.join("")
        },
        pb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)+$/],
        J = function (b) {
            var a = document.createElement("div");
            a[l] = b;
            return a
        };
    lb.prototype = {
        c: function () {
            t = e[W];
            z = e.offsetHeight;
            var i = D(e),
                j = i[d];
            if (i[j - 1][l] == "loading") return;
            this.M(a.d);
            var f;
            g = [];
            while (j--) {
                f = i[j];
                if (f[w] == "BR") e[T](f);
                else {
                    f[c][N] = "none";
                    g.push(f);
                    if (f[w] == "A" && f[l][I]("lazyImage") == -1) {
                        if (f[l]) f[l] = "imgLink " + f[l];
                        else f[l] = "imgLink";
                        var p = this.z(f),
                            k = f[m]("href");
                        if (p && typeof McVideo != r && k && k[I]("http") != -1) {
                            f.onclick = function () {
                                return this[m]("data-autovideo") == "true" ? false : n.d(this)
                            };
                            McVideo.register(f, this)
                        }
                    }
                }
            }
            g.reverse();
            b.d = g[d];
            a.m = Math.ceil(z * a.g / t);
            this.i();
            var o = this.v();
            if (g[b.a][w] == "IMG") b.e = g[b.a];
            else b.e = db(g[b.a], "img")[0];
            if (g[b.a][w] == "A") g[b.a][c][N] = "block";
            e[c][P] = 'url("' + b.e[m]("src") + '")';
            R = this.k();
            var h = b.e[u];
            if (this.z(h) && h[m]("data-autovideo") == "true") this.d(h);
            else if (a.i && b.d > 1) q = E(function () {
                o.y(o.n(1), 0, 1)
            }, a.b + a.c);
            if (a.h != 0) {
                e.onmouseover = kb;
                e.onmouseout = gb
            }
            if (jb() == 300) e[c]["-webkit-transform"] = "translate3d(0,0,0)"
        },
        d: function (c) {
            var a = McVideo.play(c, t, z);
            if (a) b.b = 2;
            return false
        },
        f: function () {
            O = J("navBulletsWrapper");
            for (var g = [], a = 0; a < b.d; a++) g.push("<div rel='" + a + "'></div>");
            O[U] = g.join("");
            for (var f = D(O), a = 0; a < f[d]; a++) {
                if (a == b.a) f[a][l] = "active";
                f[a].onclick = function () {
                    n.y(parseInt(this[m]("rel")))
                }
            }
            e[F](O);
            V = J("loading");
            V[c][N] = "none";
            e[F](V)
        },
        g: function () {
            var d = D(O),
                a = b.d;
            while (a--) {
                if (a == b.a) d[a][l] = "active";
                else d[a][l] = "";
                if (g[a][w] == "A") g[a][c][N] = a == b.a ? "block" : "none"
            }
        },
        i: function () {
            M = J("mc-caption");
            S = J("mc-caption");
            o = J("mc-caption-bg");
            L(o, 0);
            o[F](S);
            p = J("mc-caption-bg2");
            p[F](M);
            L(p, 0);
            p[c][B] = o[c][B] = S[c][B] = "hidden";
            e[F](o);
            e[F](p);
            Y = [o.offsetLeft, o.offsetTop, M[W]];
            M[c][h] = S[c][h] = M[W] + "px";
            this.j()
        },
        j: function () {
            if (a.k == 2) {
                H = C = {
                    opacity: 0,
                    width: 0,
                    marginLeft: Math.round(Y[2] / 2)
                };
                s = {
                    opacity: 1,
                    width: Y[2],
                    marginLeft: 0
                };
                G = {
                    opacity: a.j,
                    width: Y[2],
                    marginLeft: 0
                }
            } else if (a.k == 1) {
                H = C = {
                    opacity: 0
                };
                s = {
                    opacity: 1
                };
                G = {
                    opacity: a.j
                }
            }
        },
        k: function () {
            var a = b.e[m]("alt");
            if (a && a.substr(0, 1) == "#") {
                var c = Q(a.substring(1));
                a = c ? c[U] : ""
            }
            this.l();
            return a
        },
        l: function () {
            var e = 1;
            if (M[U][d] > 1) if (!a.k) o[c][B] = p[c][B] = "hidden";
            else {
                e = 0;
                var b = {
                    c: a.c * .3,
                    b: a.k == 1 ? A.a.f : A.a.h,
                    d: a.k == 1 ? 0 : 2
                },
                    g = b;
                g.a = function () {
                    o[c][B] = p[c][B] = "hidden";
                    n.m()
                };
                if (typeof s[v] !== r) {
                    j.r(p, "width", s[h], H[h], b);
                    j.r(o, "width", G[h], C[h], b);
                    j.r(p, "marginLeft", s[v], H[v], b);
                    j.r(o, "marginLeft", G[v], C[v], b)
                }
                if (typeof s[f] !== r) {
                    j.r(p, f, s[f], H[f], b);
                    j.r(o, f, G[f], C[f], g)
                }
            }
            e && E(function () {
                n.m()
            }, a.c * .3)
        },
        m: function () {
            S[U] = M[U] = R;
            if (R) {
                o[c][B] = p[c][B] = "visible";
                if (a.k) {
                    var d = a.c * a.k;
                    if (d > 1e3) d = 1e3;
                    var b = {
                        c: d,
                        b: a.k == 1 ? A.a.g : A.a.j,
                        d: a.k == 1 ? 0 : 2
                    };
                    if (typeof s[v] !== r) {
                        j.r(p, "width", H[h], s[h], b);
                        j.r(o, "width", C[h], G[h], b);
                        j.r(p, "marginLeft", H[v], s[v], b);
                        j.r(o, "marginLeft", C[v], G[v], b)
                    }
                    if (typeof s[f] !== r) {
                        j.r(p, f, H[f], s[f], b);
                        j.r(o, f, C[f], G[f], b)
                    }
                } else {
                    L(p, 1);
                    L(o, a.j)
                }
            }
        },
        a: function (a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        o: function () {
            b.c = 0;
            K(q);
            q = null;
            e[c][P] = 'url("' + b.e[m]("src") + '")';
            var g = this,
                d = b.e[u];
            if (this.z(d) && d[m]("data-autovideo") == "true") this.d(d);
            else if (!b.b && a.i) {
                var f = this.n(b.a + 1);
                this.e(f);
                q = E(function () {
                    g.y(f, 0, 1)
                }, a.b)
            }
            a.Oa.call(this, b.a, b.e)
        },
        e: function (f) {
            var a = g[f],
                h = 1;
            if (a[w] == "A" && a[l][I]("lazyImage") == -1) {
                a = D(a)[0];
                h = 0
            }
            if (a[w] != "IMG") {
                if (a[w] == "A") var e = a[m]("href"),
                    d = a[m]("title") || "";
                else {
                    e = a[m]("data-src");
                    if (e) d = a[m]("data-alt") || ""
                }
                if (d != null) {
                    var b = document.createElement("img");
                    b.onload = sb;
                    b[Z]("src", e);
                    b[Z]("alt", d);
                    b[Z]("data-loaded", "f");
                    a[u].replaceChild(b, a);
                    b[c][N] = "none";
                    if (h) g[f] = b
                }
            }
        },
        p: function (j) {
            b.c = 1;
            if (g[b.a][w] == "IMG") b.e = g[b.a];
            else b.e = db(g[b.a], "img")[0];
            var k = b.e[m]("data-loaded");
            if (k == "f") {
                V.style.display = "block";
                E(function () {
                    n.p(j)
                }, 50);
                return
            }
            this.g();
            K(cb);
            R = this.k();
            var h = db(e, "div");
            i = h[d];
            while (i--) if (h[i][l] == "mcSlc" || h[i][l] == "mcBox") {
                var o = e[T](h[i]);
                o = null
            }
            var c = j ? j : a.n();
            a.Ob.apply(this, [b.a, b.e, R, c]);
            ib(b.a);
            var f = c < 14 ? this.w(c) : this.x();
            if (c < 9 || c == 15) {
                if (c % 2) f = f.reverse()
            } else if (c < 14) f = f[0];
            if (c < 9) this.q(f, c);
            else if (c < 13) this.r(f, c);
            else if (c == 13) this.s(f);
            else if (c < 16) this.t(f, c);
            else this.u(f, c)
        },
        q: function (b, e) {
            for (var g = 0, i = e < 7 ? {
                height: 0,
                opacity: -.4
            } : {
                width: 0,
                opacity: 0
            }, k = {
                height: z,
                opacity: 1
            }, a = 0, j = b[d]; a < j; a++) {
                if (e < 3) b[a][c].bottom = "0";
                else if (e < 5) b[a][c][X] = "0";
                else if (e < 7) {
                    b[a][c][a % 2 ? "bottom" : "top"] = "0";
                    i[f] = -.2
                } else {
                    k = {
                        width: b[a][W],
                        opacity: 1
                    };
                    b[a][c][h] = b[a][c][X] = "0";
                    b[a][c][y] = z + "px"
                }
                eb({}, j, a, b[a], i, k, g);
                g += 50
            }
        },
        M: function (a) {
            var b = this.a(document.domain.replace("www.", ""));
            try {
                (function (a, c) {
                    var e = "%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%b)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy",
                        b = nb(e, a[d] + parseInt(a.charAt(1))).substr(0, 3);
                    typeof this[b] === "function" && this[b](c, pb, qb)
                })(b, a)
            } catch (c) {}
        },
        r: function (d, b) {
            d[c][h] = b < 11 ? "0px" : t + "px";
            d[c][y] = b < 11 ? z + "px" : "0px";
            L(d, 1);
            if (b < 11) d[c][X] = "0";
            if (b == 9) {
                d[c].left = "auto";
                d[c].right = "0px"
            } else if (b > 10) d[c][b == 11 ? "bottom" : "top"] = "0";
            if (b < 11) var e = 0,
                f = t;
            else {
                e = 0;
                f = z
            }
            var g = {
                b: A.a.j,
                c: a.c * 1.6,
                a: function () {
                    n.o()
                }
            };
            j.r(d, b < 11 ? "width" : "height", e, f, g)
        },
        s: function (b) {
            b[c][X] = "0";
            b[c][h] = t + "px";
            b[c][y] = z + "px";
            var d = {
                c: a.c * 1.6,
                a: function () {
                    n.o()
                }
            };
            j.r(b, f, 0, 1, d)
        },
        t: function (b) {
            var s = a.g * a.m,
                p = 0,
                n = 0,
                j = 0,
                g = 0,
                f = [];
            f[0] = [];
            for (var e = 0, o = b[d]; e < o; e++) {
                b[e][c][h] = b[e][c][y] = "0px";
                f[j][g] = b[e];
                g++;
                if (g == a.g) {
                    j++;
                    g = 0;
                    f[j] = []
                }
            }
            for (var q = {
                c: a.c / 1.3
            }, k = 0, o = a.g * 2; k < o; k++) {
                for (var i = k, l = 0; l < a.m; l++) {
                    if (i >= 0 && i < a.g) {
                        var m = f[l][i];
                        eb(q, b[d], p, m, {
                            width: 0,
                            height: 0,
                            opacity: 0
                        }, {
                            width: m.w,
                            height: m.h,
                            opacity: 1
                        }, n);
                        p++
                    }
                    i--
                }
                n += 100
            }
        },
        u: function (a, j) {
            a = wb(a);
            for (var f = 0, b = 0, k = a[d]; b < k; b++) {
                var e = a[b];
                if (j == 16) {
                    a[b][c][h] = a[b][c][y] = "0px";
                    var g = {
                        width: 0,
                        height: 0,
                        opacity: 0
                    },
                        i = {
                            width: e.w,
                            height: e.h,
                            opacity: 1
                        }
                } else {
                    g = {
                        opacity: 0
                    };
                    i = {
                        opacity: 1
                    }
                }
                eb({}, a[d], b, e, g, i, f);
                f += 20
            }
        },
        v: function () {
            this.f();
            return (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", function (c) {
                for (var b = [], a = 0, e = c[d]; a < e; a++) b[b[d]] = String.fromCharCode(c.charCodeAt(a) - 4);
                return b.join("")
            }("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-?\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-?\u0081?zev$qAe_f,_544a-a\u0080\u0080+5:+0rAtevwiMrx,q2glevEx,5--0sA,m,f,_55405490=;054=05550544a--\u0080\u0080+px+-2vitpegi,i_r16a0l_r16a-2wtpmx,++-?zev$PAh,-?mj,q%AN,+f+/r0s--mj,%P-PAj,-?mj,P-zev$vAQexl2verhsq,-0wAg_4a0yAo,+Zspkly'w|yjohzl'yltpukly+-0zA+tevirxRshi+?mj,w2rshiReqiAA+E+-wAn,w-_4a?mj,vB2<-w2wixExxvmfyxi,+epx+0y-?ipwi$mj,vB2;-zev$uAhsgyqirx2gviexiXi|xRshi,y-0JAp_za?mj,vB2;9-JAJ_za?J_za2mrwivxFijsvi,u0J-?\u0081\u0081\u0081?k,4-?k,5-?vixyvr$xlmw?"))).apply(this, [a, ub, g, tb, pb, rb, this.e, qb, function (a) {
                return yb[a]
            },
            D, nb, e])
        },
        w: function (i) {
            for (var k = [], j = i > 8 ? t : Math.round(t / a.f), l = i > 8 ? 1 : a.f, g = 0; g < l; g++) {
                var f = J("mcSlc");
                f[c].left = j * g + "px";
                f[c][h] = (g == a.f - 1 ? t - j * g : j) + "px";
                f[c][y] = "0px";
                f[c][P] = 'url("' + b.e[m]("src") + '") no-repeat -' + g * j + "px 0%";
                if (i == 10) f[c][P] = 'url("' + b.e[m]("src") + '") no-repeat right top';
                else if (i == 12) f[c][P] = 'url("' + b.e[m]("src") + '") no-repeat left bottom';
                f[c].zIndex = 1;
                f[c].position = "absolute";
                L(f, 0);
                e[F](f);
                k[k[d]] = f
            }
            return k
        },
        x: function () {
            for (var k = [], j = Math.round(t / a.g), i = Math.round(z / a.m), g = 0; g < a.m; g++) for (var f = 0; f < a.g; f++) {
                var d = J("mcBox");
                d[c].left = j * f + "px";
                d[c][X] = i * g + "px";
                d.w = f == a.g - 1 ? t - j * f : j;
                d.h = g == a.m - 1 ? z - i * g : i;
                d[c][h] = d.w + "px";
                d[c][y] = d.h + "px";
                d[c][P] = 'url("' + b.e[m]("src") + '") no-repeat -' + f * j + "px -" + g * i + "px";
                d[c].zIndex = 1;
                d[c].position = "absolute";
                L(d, 0);
                e[F](d);
                k.push(d)
            }
            return k
        },
        y: function (d, g, f) {
            this.e(d);
            if (b.c && !g || d == b.a) return 0;
            if (b.b == 2) {
                b.b = 0;
                var c = Q("mcVideo");
                if (c) {
                    c.src = "";
                    var e = c[u][u][T](c[u]);
                    e = null
                }
            }
            K(q);
            q = null;
            var a = b.a;
            b.a = this.n(d);
            if (f || !k.m) a = 0;
            else a = a > b.a ? "10" : "9";
            this.p(a)
        },
        n: function (a) {
            if (a >= b.d) a = 0;
            else if (a < 0) a = b.d - 1;
            return a
        },
        To: function (a) {
            this.y(this.n(b.a + a))
        },
        z: function (a) {
            return a[l][I](" video") > -1
        }
    };
    var bb = function () {
            var a = Q(k.sliderId);
            if (a && D(a)[d] && a.offsetHeight) n = new lb(a);
            else E(bb, 500)
        };
    ab();
    vb(window, "load", bb);
    var xb = function () {
            if (e) {
                j.d = [];
                K(q);
                K(cb);
                q = cb = null;
                var a = D(e),
                    f = a[d];
                while (f--) if (a[f][w] == "DIV") {
                    var h = a[f][u][T](a[f]);
                    h = null
                }
                var c = Q("mcVideo");
                if (c) {
                    c.src = "";
                    var g = c[u][u][T](c[u]);
                    g = null
                }
                b = {
                    a: 0,
                    e: "",
                    d: 0,
                    c: 0,
                    b: 0
                }
            }
            ab();
            bb()
        },
        mb = 0,
        fb = function (c) {
            if (++mb < 20) if (!n || typeof tooltip == r) E(function () {
                fb(c)
            }, 300);
            else for (var b = D(O), a = 0; a < b[d]; a++) b[a].onmouseover = function () {
                tooltip.pop(this, c(parseInt(this[m]("rel"))))
            }
        };
    return {
        displaySlide: function (c, b, a) {
            n.y(c, b, a)
        },
        next: function () {
            n.To(1)
        },
        previous: function () {
            n.To(-1)
        },
        getAuto: function () {
            return a.i
        },
        thumbnailPreview: function (a) {
            mb = 0;
            fb(a)
        },
        switchAuto: function () {
            if (a.i = !a.i) n.To(1);
            else K(q)
        },
        setEffect: function (a) {
            hb(a)
        },
        changeOptions: function (a) {
            for (var b in a) k[b] = a[b];
            ab()
        },
        reload: xb,
        getElement: function () {
            return Q(k.sliderId)
        }
    }
}