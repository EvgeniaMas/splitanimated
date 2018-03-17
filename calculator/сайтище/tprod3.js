var Indx = 0;
jQuery.cookie = function(d, e, b) {
    if (arguments.length > 1 && (e === null || typeof e !== "object")) {
        b = jQuery.extend({}, b);
        if (e === null) {
            b.expires = -1
        }
        if (typeof b.expires === "number") {
            var g = b.expires,
                c = b.expires = new Date();
            c.setDate(c.getDate() + g)
        }
        return (document.cookie = [encodeURIComponent(d), "=", b.raw ? String(e) : encodeURIComponent(String(e)), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "; path=/", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join(""))
    }
    b = e || {};
    var a, f = b.raw ? function(h) {
        return h
    } : decodeURIComponent;
    return (a = new RegExp("(?:^|; )" + encodeURIComponent(d) + "=([^;]*)").exec(document.cookie)) ? f(a[1]) : null
};
jQuery.fn.FixHeader = function(k) {
    var i = jQuery.extend({
        rowsize: 1,
        hlight: false
    }, k);
    var b = "th,td";
    var f = $(this);
    var a = f.find("thead:lt(" + i.rowsize + ")");
    var h = a.find(b);
    f.find("tbody").prepend('<tr><td class="L2" colspan="' + h.length + '"></td></tr>');
    var g = f.offset().left;
    var c = "";
    var j = f.find(".L3");
    if (j.length == 0) {
        var j = f.find(".L0");
        f.find("td:first").prepend('<a name="l3-0"></a>')
    }
    var e = false;
    j.each(function() {
        brand = $(this).hasClass("brand");
        if (brand) {
            if (e) {
                c += "</ul></li>"
            } else {
                e = true
            }
            c += ($(this).hasClass("no-child") ? '<li class="no-child">' : '<li class="parent"><span></span>') + '<a href="#l3-' + Indx + '">' + $(this).text() + "</a><ul>"
        } else {
            c += '<li><a href="#l3-' + Indx + '">' + $(this).text() + "</a></li>"
        }
        $(this).parent().prev().find("td:first").prepend('<a name="l3-' + Indx + '"></a>');
        Indx++
    });
    if (e) {
        c += "</ul></li>"
    }
    if (c != "") {
        $("#aMenu").append("<ul>" + c + "</ul>")
    }
    if (h.length > 0) {
        var d = f.clone().empty();
        h.each(function() {
            $(this).css("width", $(this).width())
        });
        d.attr("id", "FixHeader").css({
            position: "fixed",
            top: "0",
            left: g
        }).append(a.clone()).width(f.outerWidth()).hide().appendTo($("body"));
        if (i.hlight) {
            $("tr:gt(" + (i.rowsize - 1) + ")", f).hover(function() {
                $(this).addClass("hl")
            }, function() {
                $(this).removeClass("hl")
            })
        }
        $(window).scroll(function() {
            if (jQuery.browser.msie && jQuery.browser.version == "6.0") {
                d.css({
                    position: "absolute",
                    top: $(window).scrollTop(),
                    left: g
                })
            } else {
                d.css({
                    position: "fixed",
                    top: "0",
                    left: g - $(window).scrollLeft()
                })
            }
            var l = $(window).scrollTop();
            var m = a.offset().top;
            if (l > m && l <= (m + f.height() - a.height())) {
                d.show()
            } else {
                d.hide()
            }
        });
        $(window).resize(function() {
            if (d.outerWidth() != f.outerWidth()) {
                var l = d.find(b);
                h.each(function(n) {
                    var m = $(this).width();
                    $(this).css("width", m);
                    l.eq(n).css("width", m)
                });
                d.width(f.outerWidth())
            }
            d.css("left", g)
        })
    }
};
$(function() {
    var a = $(this).find(".tProd");
    a.each(function() {
        $(this).FixHeader({
            hlight: true,
            rowsize: 1
        })
    });
    var b = $(this).find(".wrapBlock");
    b.each(function() {
        var d = $(this);
        var c = $(this).attr("id");
        var e = $(this).prev("h3");
        if ($.cookie(c)) {
            $(this).addClass("wOpen");
            e.addClass("hOpen")
        }
        e.click(function() {
            d.toggleClass("wOpen");
            $(this).toggleClass("hOpen");
            if (d.hasClass("wOpen")) {
                $.cookie(c, "1", {
                    expires: 365
                })
            } else {
                $.cookie(c, null)
            }
        })
    });
    $("#aMenu li.parent").each(function() {
        $(this).find("span").click(function() {
            $(this).siblings("ul").toggleClass("wOpen");
            $(this).toggleClass("minus")
        })
    })
});