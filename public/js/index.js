(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        3336: function (e, t, r) {
            "use strict";
            var n = r(1664),
                a = r.n(n),
                o = r(1163),
                i = r(7294);
            t.Z = function (e) {
                var t, r = e.novel,
                    n = e.isCategory,
                    l = r.novel_cover,
                    c = r.novel_title,
                    s = r.view_count,
                    u = r.author,
                    m = r.novel_uri;
                r.categories,
                    (0,
                        o.useRouter)().asPath;
                var d = null == r ? void 0 : null === (t = r.main_category) || void 0 === t ? void 0 : t.slug;
                return i.createElement(a(), {
                    href: "".concat(d, "/").concat(m)
                }, i.createElement("div", {
                    className: "flex ".concat(!(void 0 !== n && n) && "w-[200px]", " flex-col")
                }, i.createElement("div", {
                    className: "relative"
                }, i.createElement("img", {
                    role: "img",
                    src: l,
                    alt: "novel",
                    className: "h-[279px] w-[200px] rounded-lg border border-black/5 object-cover md:h-[314px]"
                }), (null == r ? void 0 : r.label) !== null && i.createElement("div", {
                    className: "bg-[".concat(null == r ? void 0 : r.label_color, "] absolute right-0 top-0 flex min-w-[60px] justify-center rounded-bl-lg p-1 text-sm")
                }, null == r ? void 0 : r.label)), i.createElement("p", {
                    className: "mt-5 text-xl font-bold text-[#222]"
                }, c), i.createElement("p", {
                    className: "text-sm text-[#222]"
                }, "by", " ", i.createElement(a(), {
                    href: "/author/".concat(null == u ? void 0 : u.uri)
                }, i.createElement("span", {
                    className: "text-orange"
                }, (null == u ? void 0 : u.username) || "")), " ", "• ", s, "x Dibaca")))
            }
        },
        1286: function (e, t, r) {
            "use strict";
            r.d(t, {
                Z: function () {
                    return c
                }
            });
            var n = r(7294),
                a = r(1664),
                o = r.n(a),
                i = r(549),
                l = function (e) {
                    var t = e.title,
                        r = e.seeAll,
                        a = e.icon,
                        l = e.isLoading;
                    return n.createElement("div", {
                        className: "mb-10 flex w-full max-w-7xl flex-row items-center justify-between"
                    }, l ? n.createElement(i.Z, {
                        width: 300,
                        height: 30
                    }) : n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "flex flex-row justify-center"
                    }, n.createElement("h1", {
                        role: "title",
                        className: "mr-2 text-2xl font-bold capitalize"
                    }, t), a && n.createElement("div", {
                        className: "ml-1"
                    }, a)), r && n.createElement(o(), {
                        href: r
                    }, n.createElement("button", {
                        className: "text-lg text-purple"
                    }, n.createElement("span", null, "Lihat Semua ", ">")))))
                },
                c = function (e) {
                    var t = e.children,
                        r = e.title,
                        a = e.titleIcon,
                        o = e.seeAll,
                        i = e.hasFilter,
                        c = e.onChangeFilter,
                        s = e.filter,
                        u = e.isLoading;
                    return n.createElement("div", {
                        className: "flex w-full max-w-7xl flex-col items-center px-4 py-10 md:px-20"
                    }, n.createElement(l, {
                        isLoading: u,
                        title: r,
                        icon: a,
                        seeAll: o
                    }), i && n.createElement("div", {
                        className: "flex-end mb-10 flex w-full flex-col justify-between md:flex-row"
                    }, n.createElement("div", {
                        className: "mb-10 md:mb-0"
                    }, n.createElement("p", {
                        className: "font-bold"
                    }, "Urutkan berdasarkan"), n.createElement("select", {
                        onChange: c && function (e) {
                            return c(e)
                        },
                        className: "mt-2 w-1/2 rounded-lg border p-2 md:w-full",
                        value: s,
                        role: "filterOption"
                    }, n.createElement("option", {
                        role: "filterOptionItem",
                        value: "readers_count|desc"
                    }, "Popularitas"), n.createElement("option", {
                        role: "filterOptionItem",
                        value: "created_at|desc"
                    }, "Terbaru"), n.createElement("option", {
                        role: "filterOptionItem",
                        value: "created_at|asc"
                    }, "Terlama"), n.createElement("option", {
                        role: "filterOptionItem",
                        value: "novel_rating|desc"
                    }, "Rating tertinggi"), n.createElement("option", {
                        role: "filterOptionItem",
                        value: "novel_rating|asc"
                    }, "Rating terendah")))), t)
                }
        },
        5141: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    Home: function () {
                        return K
                    },
                    default: function () {
                        return X
                    }
                });
            var n = r(7294),
                a = r(3854),
                o = function (e) {
                    var t = e.swiperRef;
                    return n.createElement("div", {
                        className: "mt-5 flex flex-row justify-end"
                    }, n.createElement("button", {
                        onClick: function () {
                            var e;
                            return null === (e = t.current) || void 0 === e ? void 0 : e.slidePrev()
                        }
                    }, n.createElement(a.bvh, {
                        size: 40
                    })), n.createElement("button", {
                        onClick: function () {
                            var e;
                            return null === (e = t.current) || void 0 === e ? void 0 : e.slideNext()
                        },
                        className: "ml-3"
                    }, n.createElement(a.qmW, {
                        size: 40
                    })))
                },
                i = r(3336),
                l = r(719),
                c = r(549),
                s = function (e) {
                    var t = e.novels,
                        r = e.isLoading,
                        a = e.isUninitialized,
                        s = (0,
                            n.useRef)();
                    return n.createElement("div", {
                        className: "w-full"
                    }, n.createElement(l.tq, {
                        breakpoints: {
                            320: {
                                slidesPerView: 1.5
                            },
                            375: {
                                slidesPerView: 1.75
                            },
                            640: {
                                slidesPerView: 3
                            },
                            1023: {
                                slidesPerView: 4
                            },
                            1280: {
                                slidesPerView: 5
                            }
                        },
                        slidesPerView: 5,
                        grabCursor: !0,
                        spaceBetween: 32,
                        onBeforeInit: function (e) {
                            s.current = e
                        }
                    }, r ? n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "hidden justify-between md:hidden lg:flex"
                    }, Array.from({
                        length: 5
                    }).map(function (e, t) {
                        return n.createElement("div", {
                            key: t,
                            className: "flex w-[197px] flex-col"
                        }, n.createElement(c.Z, {
                            height: 314
                        }))
                    })), n.createElement("div", {
                        className: "hidden justify-between md:flex lg:hidden"
                    }, Array.from({
                        length: 3
                    }).map(function (e, t) {
                        return n.createElement("div", {
                            key: t,
                            className: "flex w-[197px] flex-col"
                        }, n.createElement(c.Z, {
                            height: 314
                        }))
                    })), n.createElement("div", {
                        className: "flex justify-between md:hidden lg:hidden"
                    }, Array.from({
                        length: 2
                    }).map(function (e, t) {
                        return n.createElement("div", {
                            key: t,
                            className: "flex w-[177px] flex-col"
                        }, n.createElement(c.Z, {
                            height: 300
                        }))
                    }))) : !((null == t ? void 0 : t.length) > 0) || r || a ? n.createElement("div", {
                        className: "my-4 flex justify-center"
                    }, "Novel tidak ditemukan") : t.map(function (e) {
                        return n.createElement(l.o5, {
                            key: e.id
                        }, n.createElement(i.Z, {
                            novel: e
                        }))
                    })), n.createElement(o, {
                        swiperRef: s
                    }))
                },
                u = r(7398),
                m = u.h.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            getContentList: e.query({
                                query: function () {
                                    return "content"
                                }
                            })
                        }
                    }
                }).useGetContentListQuery,
                d = r(8401),
                f = r(5434);
            /*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
            function h(e) {
                var t = e.toString(16);
                return 1 === t.length ? "0" + t : t
            }

            function v(e) {
                return "#" + e.map(h).join("")
            }

            function p(e, t, r) {
                for (var n = 0; n < r.length; n++)
                    if (function (e, t, r) {
                            switch (r.length) {
                                case 3:
                                    if (255 !== e[t + 3] || e[t] === r[0] && e[t + 1] === r[1] && e[t + 2] === r[2])
                                        return !0;
                                    break;
                                case 4:
                                    if (e[t + 3] && r[3] ? e[t] === r[0] && e[t + 1] === r[1] && e[t + 2] === r[2] && e[t + 3] === r[3] : e[t + 3] === r[3])
                                        return !0;
                                    break;
                                case 5:
                                    if (function (e, t, r) {
                                            var n = r[0],
                                                a = r[1],
                                                o = r[2],
                                                i = r[3],
                                                l = r[4],
                                                c = e[t + 3],
                                                s = g(c, i, l);
                                            return i ? !!(!c && s || g(e[t], n, l) && g(e[t + 1], a, l) && g(e[t + 2], o, l) && s) : s
                                        }(e, t, r))
                                        return !0;
                                    break;
                                default:
                                    return !1
                            }
                        }(e, t, r[n]))
                        return !0;
                return !1
            }

            function g(e, t, r) {
                return e >= t - r && e <= t + r
            }

            function y(e, t, r) {
                for (var n = {}, a = r.ignoredColor, o = r.step, i = [0, 0, 0, 0, 0], l = 0; l < t; l += o) {
                    var c = e[l],
                        s = e[l + 1],
                        u = e[l + 2],
                        m = e[l + 3];
                    if (!(a && p(e, l, a))) {
                        var d = Math.round(c / 24) + "," + Math.round(s / 24) + "," + Math.round(u / 24);
                        n[d] ? n[d] = [n[d][0] + c * m, n[d][1] + s * m, n[d][2] + u * m, n[d][3] + m, n[d][4] + 1] : n[d] = [c * m, s * m, u * m, m, 1],
                            i[4] < n[d][4] && (i = n[d])
                    }
                }
                var f = i[0],
                    h = i[1],
                    v = i[2],
                    g = i[3],
                    y = i[4];
                return g ? [Math.round(f / g), Math.round(h / g), Math.round(v / g), Math.round(g / y)] : r.defaultColor
            }

            function x(e, t, r) {
                for (var n = 0, a = 0, o = 0, i = 0, l = 0, c = r.ignoredColor, s = r.step, u = 0; u < t; u += s) {
                    var m = e[u + 3],
                        d = e[u] * m,
                        f = e[u + 1] * m,
                        h = e[u + 2] * m;
                    !(c && p(e, u, c)) && (n += d,
                        a += f,
                        o += h,
                        i += m,
                        l++)
                }
                return i ? [Math.round(n / i), Math.round(a / i), Math.round(o / i), Math.round(i / l)] : r.defaultColor
            }

            function E(e, t, r) {
                for (var n = 0, a = 0, o = 0, i = 0, l = 0, c = r.ignoredColor, s = r.step, u = 0; u < t; u += s) {
                    var m = e[u],
                        d = e[u + 1],
                        f = e[u + 2],
                        h = e[u + 3];
                    !(c && p(e, u, c)) && (n += m * m * h,
                        a += d * d * h,
                        o += f * f * h,
                        i += h,
                        l++)
                }
                return i ? [Math.round(Math.sqrt(n / i)), Math.round(Math.sqrt(a / i)), Math.round(Math.sqrt(o / i)), Math.round(i / l)] : r.defaultColor
            }

            function w(e) {
                return b(e, "defaultColor", [0, 0, 0, 0])
            }

            function b(e, t, r) {
                return void 0 === e[t] ? r : e[t]
            }

            function N(e) {
                return "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement ? "canvas" : "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? "offscreencanvas" : "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? "imagebitmap" : e.src
            }

            function k(e) {
                return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement
            }
            var L = "undefined" == typeof window,
                _ = "FastAverageColor: ";

            function j(e, t, r) {
                !t && (console.error(_ + e),
                    r && console.error(r))
            }

            function C(e) {
                return Error(_ + e)
            }
            var A = function () {
                    function e() {
                        this.canvas = null,
                            this.ctx = null
                    }
                    return e.prototype.getColorAsync = function (e, t) {
                            if (!e)
                                return Promise.reject(C("call .getColorAsync() without resource."));
                            if ("string" == typeof e) {
                                if ("undefined" == typeof Image)
                                    return Promise.reject(C("resource as string is not supported in this environment"));
                                var r = new Image;
                                return r.crossOrigin = t && t.crossOrigin || "",
                                    r.src = e,
                                    this.bindImageEvents(r, t)
                            }
                            if (k(e) && !e.complete)
                                return this.bindImageEvents(e, t);
                            var n = this.getColor(e, t);
                            return n.error ? Promise.reject(n.error) : Promise.resolve(n)
                        },
                        e.prototype.getColor = function (e, t) {
                            var r, n, a, o, i, l, c, s, u = w(t = t || {});
                            if (!e)
                                return j("call .getColor(null) without resource", t.silent),
                                    this.prepareResult(u);
                            var m = (r = function (e) {
                                    if (k(e)) {
                                        var t = e.naturalWidth,
                                            r = e.naturalHeight;
                                        return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (t = r = 100), {
                                            width: t,
                                            height: r
                                        }
                                    }
                                    return "undefined" != typeof HTMLVideoElement && e instanceof HTMLVideoElement ? {
                                        width: e.videoWidth,
                                        height: e.videoHeight
                                    } : {
                                        width: e.width,
                                        height: e.height
                                    }
                                }(e),
                                a = b(n = t, "left", 0),
                                o = b(n, "top", 0),
                                i = b(n, "width", r.width),
                                l = b(n, "height", r.height),
                                c = i,
                                s = l,
                                "precision" === n.mode || (i > l ? s = Math.round((c = 100) / (i / l)) : c = Math.round((s = 100) / (l / i)),
                                    (c > i || s > l || c < 10 || s < 10) && (c = i,
                                        s = l)), {
                                    srcLeft: a,
                                    srcTop: o,
                                    srcWidth: i,
                                    srcHeight: l,
                                    destWidth: c,
                                    destHeight: s
                                });
                            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight)
                                return j('incorrect sizes for resource "'.concat(N(e), '"'), t.silent),
                                    this.prepareResult(u);
                            if (this.canvas || (this.canvas = L ? new OffscreenCanvas(1, 1) : document.createElement("canvas")),
                                !this.ctx && (this.ctx = this.canvas.getContext && this.canvas.getContext("2d"),
                                    !this.ctx))
                                return j("Canvas Context 2D is not supported in this browser", t.silent),
                                    this.prepareResult(u);
                            this.canvas.width = m.destWidth,
                                this.canvas.height = m.destHeight;
                            var d = u;
                            try {
                                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight),
                                    this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                                var f = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                                d = this.getColorFromArray4(f, t)
                            } catch (h) {
                                j("security error (CORS) for resource ".concat(N(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"), t.silent, h)
                            }
                            return this.prepareResult(d)
                        },
                        e.prototype.getColorFromArray4 = function (e, t) {
                            t = t || {};
                            var r, n, a = e.length,
                                o = w(t);
                            if (a < 4)
                                return o;
                            var i = 4 * (t.step || 1);
                            switch (t.algorithm || "sqrt") {
                                case "simple":
                                    r = x;
                                    break;
                                case "sqrt":
                                    r = E;
                                    break;
                                case "dominant":
                                    r = y;
                                    break;
                                default:
                                    throw C("".concat(t.algorithm, " is unknown algorithm"))
                            }
                            return r(e, a - a % 4, {
                                defaultColor: o,
                                ignoredColor: (n = t.ignoredColor) ? Array.isArray(n[0]) ? n : [n] : [],
                                step: i
                            })
                        },
                        e.prototype.prepareResult = function (e) {
                            var t = e.slice(0, 3),
                                r = [e[0], e[1], e[2], e[3] / 255],
                                n = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
                            return {
                                value: [e[0], e[1], e[2], e[3]],
                                rgb: "rgb(" + t.join(",") + ")",
                                rgba: "rgba(" + r.join(",") + ")",
                                hex: v(t),
                                hexa: v(e),
                                isDark: n,
                                isLight: !n
                            }
                        },
                        e.prototype.destroy = function () {
                            this.canvas && (this.canvas.width = 1,
                                    this.canvas.height = 1,
                                    this.canvas = null),
                                this.ctx = null
                        },
                        e.prototype.bindImageEvents = function (e, t) {
                            var r = this;
                            return new Promise(function (n, a) {
                                var o = function () {
                                        c();
                                        var o = r.getColor(e, t);
                                        o.error ? a(o.error) : n(o)
                                    },
                                    i = function () {
                                        c(),
                                            a(C('Error loading image "'.concat(e.src, '".')))
                                    },
                                    l = function () {
                                        c(),
                                            a(C('Image "'.concat(e.src, '" loading aborted')))
                                    },
                                    c = function () {
                                        e.removeEventListener("load", o),
                                            e.removeEventListener("error", i),
                                            e.removeEventListener("abort", l)
                                    };
                                e.addEventListener("load", o),
                                    e.addEventListener("error", i),
                                    e.addEventListener("abort", l)
                            })
                        },
                        e
                }(),
                Z = r(1664),
                O = r.n(Z),
                I = new A,
                S = function (e) {
                    var t, r, a, o, i = e.data,
                        l = e.isHighlight,
                        c = l ? i.novel : i,
                        s = (0,
                            n.useMemo)(function () {
                            var e = new window.Image;
                            return (e.crossOrigin = "Anonymous",
                                e.src = null == c ? void 0 : c.novel_cover,
                                e.width = 1,
                                e.height = 1,
                                e) ? I.getColor(e, {
                                mode: "speed",
                                silent: !0
                            }) : {
                                hex: "#FFF",
                                isDark: !1
                            }
                        }, [null == c ? void 0 : c.novel_cover]);
                    s.hex;
                    var u = s.isDark;
                    return n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "relative flex flex-grow-0 flex-col md:flex-row ".concat(l ? "max-h-[800px] md:max-h-[600px]" : "max-h-[800px] md:max-h-[430px]", " w-full flex-grow-0 flex-row items-center justify-center py-20 transition-all duration-1000 ease-in-out"),
                        style: {
                            background: l ? "linear-gradient(180deg, #000000 0%, ".concat(null == i ? void 0 : i.bg_color, " 18.75%)") : "#FFF"
                        }
                    }, n.createElement("div", {
                        className: "".concat(l ? "flex h-[800px] w-[165px] items-center justify-center md:h-[100%] lg:h-[500px] lg:w-[330px]" : "h-[430px] w-[270px] lg:h-[430px] lg:w-[270px]")
                    }, n.createElement("div", {
                        className: "relative"
                    }, n.createElement("img", {
                        src: null == c ? void 0 : c.novel_cover,
                        alt: null == c ? void 0 : c.novel_title,
                        className: " rounded-lg border border-black/5 shadow-lg ".concat(u && l ? "shadow-white/5" : "shadow-primary/5", " ").concat(l ? "max-h-[333px] max-w-[236px] lg:max-h-[500px] lg:max-w-[330px]" : "max-h-[430px] max-w-[270px] lg:max-h-[430px] lg:max-w-[270px]")
                    }), (null == c ? void 0 : c.label) !== null && n.createElement("div", {
                        className: "bg-[".concat(null == c ? void 0 : c.label_color, "] absolute right-0 top-0 flex min-w-[60px] justify-center rounded-bl-lg p-1 text-sm")
                    }, null == c ? void 0 : c.label))), n.createElement("div", {
                        className: "ml-0 mt-2 flex flex-col items-center justify-center text-center md:ml-12 md:mt-0 md:items-start md:text-left ".concat(u && l ? "text-white" : "text-[#222]")
                    }, n.createElement("h5", {
                        className: "mb-2 w-auto text-2xl font-bold md:w-full"
                    }, null == c ? void 0 : c.novel_title), n.createElement("p", {
                        className: "mb-3 text-sm"
                    }, n.createElement("span", {
                        className: "".concat(u && l ? "text-white" : "text-black")
                    }, null == c ? void 0 : null === (t = c.author) || void 0 === t ? void 0 : t.username), " ", "• ", null == c ? void 0 : c.view_count, "x Dibaca"), n.createElement("div", {
                        className: "mb-3 flex w-fit flex-row items-center rounded-lg p-2 ".concat(u && l ? "bg-white" : "bg-[#222]")
                    }, n.createElement(f.$lZ, {
                        size: 20,
                        color: u && l ? "#222" : "#FFF"
                    }), n.createElement("span", {
                        className: "ml-2 text-xs font-bold tracking-wider ".concat(u && l ? "text-[#222]" : "text-white")
                    }, null == c ? void 0 : null === (r = c.language) || void 0 === r ? void 0 : r.language_name)), n.createElement("span", {
                        className: "mb-3 text-sm ".concat(u && l ? "text-white" : "text-black")
                    }, null == c ? void 0 : c.chapters_count, " Bab"), n.createElement("div", {
                        className: "block"
                    }, n.createElement("p", {
                        className: "mx-auto mb-3 w-[75%] text-center text-sm line-clamp-6 md:mx-0 md:w-[420px] md:text-left ".concat(u && l ? "text-white" : "text-black")
                    }, null == c ? void 0 : c.novel_sinopsis)), l ? n.createElement("div", {
                        className: "mt-8 flex flex-row"
                    }, n.createElement(O(), {
                        href: "/".concat(null == c ? void 0 : null === (a = c.main_category) || void 0 === a ? void 0 : a.slug, "/").concat(null == c ? void 0 : c.novel_uri)
                    }, n.createElement("button", {
                        className: "mr-0 rounded-md p-4 md:mr-3 ".concat(u && l ? "bg-[#F2994A] text-white" : "bg-black text-white")
                    }, "Baca Sekarang"))) : n.createElement(O(), {
                        href: "/".concat(null == c ? void 0 : null === (o = c.main_category) || void 0 === o ? void 0 : o.slug, "/").concat(null == c ? void 0 : c.novel_uri)
                    }, n.createElement("span", {
                        className: "mt-3 font-bold text-[#333]"
                    }, "Lihat Selanjutnya ", ">")))))
                },
                M = r(8116),
                F = function (e) {
                    var t = e.novels,
                        r = e.isHighlight,
                        a = e.isLoading,
                        i = (0,
                            n.useRef)();
                    return n.createElement("div", {
                        className: "w-full"
                    }, n.createElement(l.tq, {
                        slidesPerView: 1,
                        modules: [M.xW, M.pt, M.tl],
                        pagination: {
                            clickable: !0,
                            enabled: !!r
                        },
                        effect: "fade",
                        autoplay: !0,
                        loop: !0,
                        onBeforeInit: function (e) {
                            i.current = e
                        }
                    }, a ? n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "mx-18 my-16 hidden justify-center gap-6 md:mx-24 md:flex lg:mx-48"
                    }, n.createElement("div", {
                        className: "w-[30%]"
                    }, n.createElement(c.Z, {
                        height: 400
                    })), n.createElement("div", {
                        className: "w-[70%]"
                    }, n.createElement(c.Z, {
                        width: 200,
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        width: 140,
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        width: 200,
                        height: 40,
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        width: 80,
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2",
                        height: 40,
                        width: 200
                    }))), n.createElement("div", {
                        className: "mx-4 my-16 mx-24 flex justify-center gap-6 md:hidden"
                    }, n.createElement("div", {
                        className: "mx-auto "
                    }, n.createElement(c.Z, {
                        width: 250,
                        height: 300,
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2"
                    }), n.createElement(c.Z, {
                        className: "my-2",
                        height: 40,
                        width: 200
                    })))) : null == t ? void 0 : t.map(function (e) {
                        return n.createElement(l.o5, {
                            key: e.id + Math.random()
                        }, n.createElement(S, {
                            data: e,
                            isHighlight: r
                        }))
                    })), r ? n.createElement("div", {
                        className: "mx-auto max-w-7xl pr-4 md:pr-20"
                    }, n.createElement(o, {
                        swiperRef: i
                    })) : null)
                },
                P = r(1649),
                H = function (e) {
                    var t = e.categoryName,
                        r = e.novels,
                        a = e.backgroundColor,
                        o = e.isLoading;
                    return n.createElement("div", {
                        className: "md:overflow-x-none mb-12 flex w-full flex-row justify-start overflow-x-auto"
                    }, o ? n.createElement(n.Fragment, null, n.createElement(c.Z, {
                        height: 435,
                        width: 180
                    }), n.createElement("div", {
                        className: "ml-5 flex justify-between gap-7"
                    }, Array.from({
                        length: 5
                    }).map(function (e, t) {
                        return n.createElement("div", {
                            key: t,
                            className: "flex w-[197px] flex-col"
                        }, n.createElement(c.Z, {
                            height: 314
                        }))
                    }))) : n.createElement(n.Fragment, null, n.createElement("div", {
                        role: "catBox",
                        className: "h-[435px] min-w-[180px] rounded-tl-lg rounded-bl-lg py-8 px-4 ".concat(a)
                    }, n.createElement("div", {
                        className: "flex flex-row items-center justify-between"
                    }, n.createElement("h5", {
                        role: "catName",
                        className: "text-2xl font-bold text-white"
                    }, t), n.createElement(P.hjJ, {
                        color: "white",
                        size: 24
                    }))), n.createElement("div", {
                        className: "ml-5 flex justify-between gap-7"
                    }, null == r ? void 0 : r.map(function (e) {
                        return n.createElement(i.Z, {
                            key: e.id,
                            novel: e
                        })
                    }))))
                },
                T = r(1286),
                G = u.h.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            getHighlight: e.query({
                                query: function () {
                                    return "novel-highlight"
                                }
                            })
                        }
                    }
                }).useGetHighlightQuery,
                B = r(1121),
                R = r(9081),
                W = r(1188),
                q = r(9309),
                z = r(909);

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } :
                    function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                )(e)
            }

            function V() {
                V = function () {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function l(e, t, r) {
                    return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        e[t]
                }
                try {
                    l({}, "")
                } catch (c) {
                    l = function (e, t, r) {
                        return e[t] = r
                    }
                }

                function s(e, t, r, n) {
                    var a, o, i = Object.create((t && t.prototype instanceof d ? t : d).prototype),
                        l = new N(n || []);
                    return i._invoke = (a = l,
                            o = "suspendedStart",
                            function (t, n) {
                                if ("executing" === o)
                                    throw Error("Generator is already running");
                                if ("completed" === o) {
                                    if ("throw" === t)
                                        throw n;
                                    return L()
                                }
                                for (a.method = t,
                                    a.arg = n;;) {
                                    var i = a.delegate;
                                    if (i) {
                                        var l = function e(t, r) {
                                            var n = t.iterator[r.method];
                                            if (void 0 === n) {
                                                if (r.delegate = null,
                                                    "throw" === r.method) {
                                                    if (t.iterator.return && (r.method = "return",
                                                            r.arg = void 0,
                                                            e(t, r),
                                                            "throw" === r.method))
                                                        return m;
                                                    r.method = "throw",
                                                        r.arg = TypeError("The iterator does not provide a 'throw' method")
                                                }
                                                return m
                                            }
                                            var a = u(n, t.iterator, r.arg);
                                            if ("throw" === a.type)
                                                return r.method = "throw",
                                                    r.arg = a.arg,
                                                    r.delegate = null,
                                                    m;
                                            var o = a.arg;
                                            return o ? o.done ? (r[t.resultName] = o.value,
                                                r.next = t.nextLoc,
                                                "return" !== r.method && (r.method = "next",
                                                    r.arg = void 0),
                                                r.delegate = null,
                                                m) : o : (r.method = "throw",
                                                r.arg = TypeError("iterator result is not an object"),
                                                r.delegate = null,
                                                m)
                                        }(i, a);
                                        if (l) {
                                            if (l === m)
                                                continue;
                                            return l
                                        }
                                    }
                                    if ("next" === a.method)
                                        a.sent = a._sent = a.arg;
                                    else if ("throw" === a.method) {
                                        if ("suspendedStart" === o)
                                            throw o = "completed",
                                                a.arg;
                                        a.dispatchException(a.arg)
                                    } else
                                        "return" === a.method && a.abrupt("return", a.arg);
                                    o = "executing";
                                    var c = u(e, r, a);
                                    if ("normal" === c.type) {
                                        if (o = a.done ? "completed" : "suspendedYield",
                                            c.arg === m)
                                            continue;
                                        return {
                                            value: c.arg,
                                            done: a.done
                                        }
                                    }
                                    "throw" === c.type && (o = "completed",
                                        a.method = "throw",
                                        a.arg = c.arg)
                                }
                            }
                        ),
                        i
                }

                function u(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (n) {
                        return {
                            type: "throw",
                            arg: n
                        }
                    }
                }
                e.wrap = s;
                var m = {};

                function d() {}

                function f() {}

                function h() {}
                var v = {};
                l(v, a, function () {
                    return this
                });
                var p = Object.getPrototypeOf,
                    g = p && p(p(k([])));
                g && g !== t && r.call(g, a) && (v = g);
                var y = h.prototype = d.prototype = Object.create(v);

                function x(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        l(e, t, function (e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function E(e, t) {
                    var n;
                    this._invoke = function (a, o) {
                        function i() {
                            return new t(function (n, i) {
                                ! function n(a, o, i, l) {
                                    var c = u(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var s = c.arg,
                                            m = s.value;
                                        return m && "object" == D(m) && r.call(m, "__await") ? t.resolve(m.__await).then(function (e) {
                                            n("next", e, i, l)
                                        }, function (e) {
                                            n("throw", e, i, l)
                                        }) : t.resolve(m).then(function (e) {
                                            s.value = e,
                                                i(s)
                                        }, function (e) {
                                            return n("throw", e, i, l)
                                        })
                                    }
                                    l(c.arg)
                                }(a, o, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && (t.finallyLoc = e[2],
                            t.afterLoc = e[3]),
                        this.tryEntries.push(t)
                }

                function b(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                        delete t.arg,
                        e.completion = t
                }

                function N(e) {
                    this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        e.forEach(w, this),
                        this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[a];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n))
                                            return t.value = e[n],
                                                t.done = !1,
                                                t;
                                    return t.value = void 0,
                                        t.done = !0,
                                        t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: L
                    }
                }

                function L() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h,
                    l(y, "constructor", h),
                    l(h, "constructor", f),
                    f.displayName = l(h, i, "GeneratorFunction"),
                    e.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                    },
                    e.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h,
                                l(e, i, "GeneratorFunction")),
                            e.prototype = Object.create(y),
                            e
                    },
                    e.awrap = function (e) {
                        return {
                            __await: e
                        }
                    },
                    x(E.prototype),
                    l(E.prototype, o, function () {
                        return this
                    }),
                    e.AsyncIterator = E,
                    e.async = function (t, r, n, a, o) {
                        void 0 === o && (o = Promise);
                        var i = new E(s(t, r, n, a), o);
                        return e.isGeneratorFunction(r) ? i : i.next().then(function (e) {
                            return e.done ? e.value : i.next()
                        })
                    },
                    x(y),
                    l(y, i, "Generator"),
                    l(y, a, function () {
                        return this
                    }),
                    l(y, "toString", function () {
                        return "[object Generator]"
                    }),
                    e.keys = function (e) {
                        var t = [];
                        for (var r in e)
                            t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var n = t.pop();
                                    if (n in e)
                                        return r.value = n,
                                            r.done = !1,
                                            r
                                }
                                return r.done = !0,
                                    r
                            }
                    },
                    e.values = k,
                    N.prototype = {
                        constructor: N,
                        reset: function (e) {
                            if (this.prev = 0,
                                this.next = 0,
                                this.sent = this._sent = void 0,
                                this.done = !1,
                                this.delegate = null,
                                this.method = "next",
                                this.arg = void 0,
                                this.tryEntries.forEach(b),
                                !e)
                                for (var t in this)
                                    "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type)
                                throw e.arg;
                            return this.rval
                        },
                        dispatchException: function (e) {
                            if (this.done)
                                throw e;
                            var t = this;

                            function n(r, n) {
                                return i.type = "throw",
                                    i.arg = e,
                                    t.next = r,
                                    n && (t.method = "next",
                                        t.arg = void 0),
                                    !!n
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var o = this.tryEntries[a],
                                    i = o.completion;
                                if ("root" === o.tryLoc)
                                    return n("end");
                                if (o.tryLoc <= this.prev) {
                                    var l = r.call(o, "catchLoc"),
                                        c = r.call(o, "finallyLoc");
                                    if (l && c) {
                                        if (this.prev < o.catchLoc)
                                            return n(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc)
                                            return n(o.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < o.catchLoc)
                                            return n(o.catchLoc, !0)
                                    } else {
                                        if (!c)
                                            throw Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc)
                                            return n(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var a = this.tryEntries[n];
                                if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var o = a;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = e,
                                i.arg = t,
                                o ? (this.method = "next",
                                    this.next = o.finallyLoc,
                                    m) : this.complete(i)
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type)
                                throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                                m
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e)
                                    return this.complete(r.completion, r.afterLoc),
                                        b(r),
                                        m
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var a = n.arg;
                                        b(r)
                                    }
                                    return a
                                }
                            }
                            throw Error("illegal catch attempt")
                        },
                        delegateYield: function (e, t, r) {
                            return this.delegate = {
                                    iterator: k(e),
                                    resultName: t,
                                    nextLoc: r
                                },
                                "next" === this.method && (this.arg = void 0),
                                m
                        }
                    },
                    e
            }

            function Q(e, t, r, n, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (s) {
                    r(s);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function U(e, t) {
                return function (e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function (e, t) {
                    var r, n, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (a = a.call(e); !(i = (r = a.next()).done) && (o.push(r.value),
                                    !t || o.length !== t); i = !0)
                            ;
                        } catch (c) {
                            l = !0,
                                n = c
                        } finally {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (l)
                                    throw n
                            }
                        }
                        return o
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return $(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name),
                            "Map" === r || "Set" === r)
                            return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return $(e, t)
                    }
                }(e, t) || function () {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }

            function K() {
                var e = (0,
                        W.a)().isAuth,
                    t = U((0,
                        n.useState)(), 2),
                    r = t[0],
                    a = t[1],
                    o = G(),
                    l = o.data,
                    u = o.isLoading,
                    f = (0,
                        R.NL)(),
                    h = f.data,
                    v = f.isLoading,
                    p = f.isUninitialized,
                    g = (0,
                        R.NL)().data,
                    y = m(),
                    x = y.data,
                    E = y.isLoading,
                    w = (0,
                        d.in)().data,
                    b = null == x ? void 0 : x.data[0],
                    N = null == x ? void 0 : x.data.slice(1),
                    k = (null == r ? void 0 : r.novels) || [],
                    L = U(n.useState(), 2),
                    _ = (L[0],
                        L[1]),
                    j = U((0,
                        z.PO)(), 1)[0];
                return (0,
                        n.useEffect)(function () {
                        h && a(h[0])
                    }, [h]),
                    (0,
                        n.useEffect)(function () {
                        var t, r, n = (t = V().mark(function e() {
                                return V().wrap(function (e) {
                                    for (;;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    j().unwrap().then(function (e) {
                                                        var t;
                                                        _(null == e ? void 0 : e.data),
                                                            q.Z.add_unique_user_id(null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.id)
                                                    });
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }, e)
                            }),
                            r = function () {
                                var e = this,
                                    r = arguments;
                                return new Promise(function (n, a) {
                                    var o = t.apply(e, r);

                                    function i(e) {
                                        Q(o, n, a, i, l, "next", e)
                                    }

                                    function l(e) {
                                        Q(o, n, a, i, l, "throw", e)
                                    }
                                    i(void 0)
                                })
                            },
                            function () {
                                return r.apply(this, arguments)
                            }
                        );
                        e && n()
                    }, []),
                    n.createElement(n.Fragment, null, n.createElement(B.h_, {
                        title: "Web Baca Novel Online Terbaik & Gratis | GoodDreamer",
                        description: "Web novel bisa baca online semua kumpulan novel terbaik dan terpopuler secara gratis dari penulis Indonesia tanpa Aplikasi dari mana saja dan kapan saja.",
                        keyword: "Novel Gratis, Baca Novel Romantis Gratis, Baca Novel Gratis tanpa Aplikasi",
                        provider: {
                            title: "Web Baca Novel Online Terbaik & Gratis | GoodDreamer",
                            description: "Web novel bisa baca online semua kumpulan novel terbaik dan terpopuler secara gratis dari penulis Indonesia tanpa Aplikasi dari mana saja dan kapan saja."
                        },
                        canonical: "https://gooddreamer.id"
                    }), n.createElement("div", {
                        className: "flex flex-col items-center"
                    }, n.createElement("div", {
                        className: "flex w-full justify-center"
                    }, n.createElement(F, {
                        novels: (null == l ? void 0 : l.data) || [],
                        isHighlight: !0,
                        isLoading: u
                    })), n.createElement(T.Z, {
                        isLoading: v,
                        title: "Kumpulan Novel Terbaik, Baca Sekarang!",
                        categories: h,
                        selectedCategory: r,
                        onSelectCategory: a
                    }, n.createElement(s, {
                        isLoading: v,
                        isUninitialized: p,
                        novels: k
                    })), n.createElement("div", {
                        className: "flex w-full justify-center py-20"
                    }, n.createElement(F, {
                        novels: (null == w ? void 0 : w.data) || []
                    })), n.createElement("div", {
                        className: "flex w-screen justify-center bg-[#533984]/[6%]"
                    }, n.createElement(T.Z, {
                        title: (null == b ? void 0 : b.content_name) || ""
                    }, n.createElement(s, {
                        novels: (null == b ? void 0 : b.novels) || []
                    }))), n.createElement(T.Z, {
                        title: "Cari Berdasarkan Kategori"
                    }, null == g ? void 0 : g.slice(0, 2).map(function (e, t) {
                        return n.createElement(H, {
                            key: e.id,
                            categoryName: e.category_name,
                            novels: e.novels || [],
                            backgroundColor: 0 === t ? "bg-[#533984]" : "bg-[#FBC705]"
                        })
                    })), n.createElement(B.E$, null), null == N ? void 0 : N.map(function (e) {
                        var t = e.novels.slice(0, 10);
                        return n.createElement(T.Z, {
                            key: e.id,
                            title: e.content_name
                        }, E ? n.createElement(n.Fragment, null, n.createElement("div", {
                            className: "hidden w-full justify-between md:hidden lg:flex"
                        }, Array.from({
                            length: 5
                        }).map(function (e, t) {
                            return n.createElement("div", {
                                key: t,
                                className: "flex w-[197px] flex-col"
                            }, n.createElement(c.Z, {
                                height: 314
                            }))
                        })), n.createElement("div", {
                            className: "hidden w-full justify-between md:flex lg:hidden"
                        }, Array.from({
                            length: 3
                        }).map(function (e, t) {
                            return n.createElement("div", {
                                key: t,
                                className: "flex w-[197px] flex-col"
                            }, n.createElement(c.Z, {
                                height: 314
                            }))
                        })), n.createElement("div", {
                            className: "flex w-full justify-between md:hidden lg:hidden"
                        }, Array.from({
                            length: 2
                        }).map(function (e, t) {
                            return n.createElement("div", {
                                key: t,
                                className: "flex w-[177px] flex-col"
                            }, n.createElement(c.Z, {
                                height: 300
                            }))
                        }))) : n.createElement("div", {
                            className: "flex w-full justify-start gap-8 overflow-x-auto"
                        }, t.map(function (e) {
                            return n.createElement(i.Z, {
                                key: e.id,
                                novel: e
                            })
                        })))
                    })))
            }
            var X = K
        },
        9081: function (e, t, r) {
            "use strict";

            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            r.d(t, {
                NL: function () {
                    return o
                },
                fe: function () {
                    return i
                }
            });
            var a = r(7398).h.injectEndpoints({
                    endpoints: function (e) {
                        return {
                            getCategories: e.query({
                                query: function () {
                                    return "categories"
                                },
                                transformResponse: function (e) {
                                    return e.data
                                }
                            }),
                            getNovelByCategory: e.query({
                                query: function (e) {
                                    var t = e.id,
                                        r = e.filter,
                                        n = e.page,
                                        a = r.split("|")[0],
                                        o = r.split("|")[1];
                                    return "categories/".concat(t, "/novels?limit=20&page=").concat(n, "&order[0][column]=").concat(a, "&order[0][direction]=").concat(o)
                                },
                                serializeQueryArgs: function (e) {
                                    return e.endpointName
                                },
                                merge: function (e, t) {
                                    var r, a;
                                    null == e || (r = e.data).push.apply(r, function (e) {
                                        if (Array.isArray(e))
                                            return n(e)
                                    }(a = null == t ? void 0 : t.data) || function (e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                            return Array.from(e)
                                    }(a) || function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return n(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === r && e.constructor && (r = e.constructor.name),
                                                "Map" === r || "Set" === r)
                                                return Array.from(e);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                                return n(e, t)
                                        }
                                    }(a) || function () {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }())
                                },
                                forceRefetch: function (e) {
                                    return e.currentArg !== e.previousArg
                                }
                            })
                        }
                    }
                }),
                o = a.useGetCategoriesQuery,
                i = (a.useGetNovelByCategoryQuery,
                    a.useLazyGetCategoriesQuery,
                    a.useLazyGetNovelByCategoryQuery),
                l = a.endpoints;
            l.getNovelByCategory,
                l.getCategories
        },
        8312: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return r(5141)
            }])
        }
    },
    function (e) {
        e.O(0, [228, 866, 888, 774, 179], function () {
                return e(e.s = 8312)
            }),
            _N_E = e.O()
    }
]);