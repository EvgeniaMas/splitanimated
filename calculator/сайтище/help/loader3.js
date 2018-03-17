var helpID = "";

function prm_init() {
    $("a.help").hover(function() {
        prm_show(this)
    }, function() {
        $("#prm").remove()
    }).click(function() {
        prm_click(this);
        return false
    });
    $("a.helptxt").hover(function() {
        prm_show(this)
    }, function() {
        $("#prm").remove()
    }).click(function() {
        prm_click(this);
        return false
    })
}

function prm_show(a) {
    var b = self.innerWidth || (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;
    pW = 350;
    if (b - getAbsoluteLeft(a.id) > ((pW * 1) + 75)) {
        $("body").append("<div id='prm' style='width:" + pW * 1 + "px'><div id='prm_left'></div><div id='prm_content'><div class='loader'><div></div></div>");
        var c = getAbsoluteLeft(a.id) + getElementWidth(a.id) + 20
    } else {
        $("body").append("<div id='prm' style='width:" + pW * 1 + "px'><div id='prm_right' style='left:" + ((pW * 1) + 1) + "px'></div><div id='prm_content'><div class='loader'><div></div></div>");
        var c = getAbsoluteLeft(a.id) - ((pW * 1) + 18)
    }
    $("#prm").css({
        left: c + "px",
        top: (getAbsoluteTop(a.id) + 2) + "px"
    });
    $.get("/help.html", function(d) {
        tag = "<h1>" + a.id + "</h1>";
        fpos = d.indexOf(tag);
        if (fpos >= 0) {
            lpos = d.indexOf("<h1>", fpos + tag.length);
            if (lpos >= 0) {
                $("#prm_content").html(d.substring(fpos + tag.length, lpos - 1))
            } else {
                $("#prm_content").html(d.substring(fpos + tag.length))
            }
        }
    });
    $("#prm").show()
}

function prm_click(a) {
    if (a.href) {
        window.location.href = a.href
    } else {
        var b = a.href;
        regp = /^.+\/([^\/]+)$/;
        b = b.replace(regp, "$1");
        return false
    }
}

function getElementWidth(a) {
    x = document.getElementById(a);
    return x.offsetWidth
}

function getAbsoluteLeft(a) {
    o = document.getElementById(a);
    oLeft = o.offsetLeft;
    while (o.offsetParent != null) {
        oParent = o.offsetParent;
        oLeft += oParent.offsetLeft;
        o = oParent
    }
    return oLeft
}

function getAbsoluteTop(a) {
    o = document.getElementById(a);
    oTop = o.offsetTop;
    while (o.offsetParent != null) {
        oParent = o.offsetParent;
        oTop += oParent.offsetTop;
        o = oParent
    }
    return oTop
};