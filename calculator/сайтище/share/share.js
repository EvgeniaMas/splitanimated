! function(e, t) {
    function o(e) {
        return e in W || (W[e] = new RegExp("(^|\\s+)" + e + "(\\s+|$)", "")), W[e]
    }

    function r(e, t) {
        return o(t).test(e.className || "")
    }

    function a(e, t) {
        r(e, t) || (e.className += " " + t)
    }

    function n(e, t) {
        e && (e.className = e.className.replace(new RegExp("((?:^|\\s+)" + t + "|" + t + "(?:\\s+|$))", "g"), ""))
    }

    function i(e, t) {
        r(e, t) ? n(e, t) : a(e, t)
    }

    function p(e, t) {
        var o = e;
        do
            if (r(o, t)) return o; while (o = o.parentNode);
        return null
    }

    function s(e, t) {
        var o = e.relatedTarget;
        try {
            for (; o && o !== t;) o = o.parentNode;
            if (o !== t) return !0
        } catch (r) {}
    }

    function b(e) {
        try {
            e.preventDefault()
        } catch (t) {
            e.returnValue = !1
        }
    }

    function l(e) {
        try {
            e.stopPropagation()
        } catch (t) {
            e.cancelBubble = !0
        }
    }

    function h() {
        var e = function(e) {
                e = e.toLowerCase();
                var t = /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || !/compatible/.test(e) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }(navigator.userAgent),
            o = '.b-share-popup-wrap{z-index:1073741823;position:absolute;width:500px}.b-share-popup{position:absolute;z-index:1073741823;border:1px solid #888;background:#FFF;color:#000}.b-share-popup-wrap .b-share-popup_down{top:0}.b-share-popup-wrap .b-share-popup_up{bottom:0}.b-share-popup-wrap_state_hidden{position:absolute!important;top:-9999px!important;right:auto!important;bottom:auto!important;left:-9999px!important;visibility:hidden!important}.b-share-popup,x:nth-child(1){border:0;padding:1px!important}@media all and (resolution=0){.b-share-popup,x:nth-child(1),x:-o-prefocus{padding:0!important;border:1px solid #888}}.b-share-popup__i{display:-moz-inline-box;display:inline-block;padding:5px 0!important;overflow:hidden;vertical-align:top;white-space:nowrap;visibility:visible;background:#FFF;-webkit-box-shadow:0 2px 9px rgba(0,0,0,.6);-moz-box-shadow:0 2px 9px rgba(0,0,0,.6);box-shadow:0 2px 9px rgba(0,0,0,.6)}.b-share-popup__item{font:1em/1.25em Arial,sans-serif;display:block;padding:5px 15px!important;white-space:nowrap;background:#FFF}.b-share-popup__item,a.b-share-popup__item:link,a.b-share-popup__item:visited{text-decoration:none!important;border:0!important}a.b-share-popup__item{cursor:pointer}a.b-share-popup__item .b-share-popup__item__text{display:inline;text-decoration:underline;color:#1A3DC1}a.b-share-popup__item:hover{word-spacing:0}a.b-share-popup__item:hover .b-share-popup__item__text{color:red;cursor:pointer}.b-share-popup__icon{display:-moz-inline-box;display:inline-block;margin:-3px 0 0;padding:0 5px 0 0!important;vertical-align:middle}.b-share-popup__icon_input{width:21px;height:16px;margin-top:-6px;padding:0!important}.b-share-popup__icon__input{margin-right:0;margin-left:2px;vertical-align:top}.b-share-popup__spacer{display:block;padding-top:10px!important}.b-share-popup__header{font:86%/1em Verdana,sans-serif;display:block;padding:10px 15px 5px!important;color:#999}.b-share-popup__header_first{padding-top:5px!important}.b-share-popup__input{font:86%/1em Verdana,sans-serif;display:block;padding:5px 15px!important;color:#999;text-align:left}.b-share-popup__input__input{font:1em/1em Verdana,sans-serif;display:block;width:10px;margin:5px 0 0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;text-align:left;direction:ltr}.b-share-popup_down .b-share-popup_with-link .b-share-popup__input_link{position:absolute;top:5px;right:0;left:0}.b-share-popup_up .b-share-popup_with-link .b-share-popup__input_link{position:absolute;right:0;bottom:5px;left:0}.b-share-popup_down .b-share-popup_with-link{padding-top:55px!important}.b-share-popup_up .b-share-popup_with-link{padding-bottom:55px!important}.b-share-popup_down .b-share-popup_expandable .b-share-popup__main{padding-bottom:25px!important}.b-share-popup_up .b-share-popup_expandable .b-share-popup__main{padding-top:25px!important}.b-share-popup_down .b-share-popup_yandexed{padding-bottom:10px!important}.b-share-popup_up .b-share-popup_yandexed{padding-top:10px!important}.b-share-popup__yandex{position:absolute;right:4px;bottom:2px;font:78.125%/1em Verdana,sans-serif;padding:3px!important;background:0 0}a.b-share-popup__yandex:link,a.b-share-popup__yandex:visited{color:#C6C5C5;text-decoration:none}a.b-share-popup__yandex:link:hover,a.b-share-popup__yandex:visited:hover{color:red;text-decoration:underline}.b-share-popup_up .b-share-popup__yandex{top:2px;bottom:auto}.b-share-popup_expandable .b-share-popup__yandex{right:auto;left:4px}.b-share-popup_to-right .b-share-popup_expandable .b-share-popup__yandex{right:4px;left:auto}.b-share-popup__expander .b-share-popup__item{position:absolute;bottom:5px;font:86%/1em Verdana,sans-serif;margin:10px 0 0;padding:5px 10px!important;cursor:pointer;color:#999;background:0 0}.b-share-popup_to-right,.b-share-popup_to-right .b-share-popup__expander{direction:rtl}.b-share-popup_to-right .b-share-popup__expander .b-share-popup__icon{padding:0 0 0 5px!important}.b-share-popup_up .b-share-popup__expander .b-share-popup__item{top:-5px;bottom:auto}.b-share-popup__expander .b-share-popup__item:hover .b-share-popup__item__text{text-decoration:underline}.b-share-popup__expander .b-ico_action_rarr,.b-share-popup_to-right .b-share-popup__expander .b-ico_action_larr,.b-share-popup_full .b-share-popup__expander .b-ico_action_larr,.b-share-popup_to-right .b-share-popup_full .b-share-popup__expander .b-ico_action_rarr,.b-share-popup__expander .b-share-popup__item__text_collapse,.b-share-popup_full .b-share-popup__item__text_expand{display:none}.b-share-popup_to-right .b-share-popup__expander .b-ico_action_rarr,.b-share-popup_full .b-share-popup__item__text_collapse,.b-share-popup_full .b-share-popup__expander .b-ico_action_rarr,.b-share-popup_to-right .b-share-popup_full .b-share-popup__expander .b-ico_action_larr{display:inline}.b-ico_action_rarr,.b-ico_action_larr{width:8px;height:7px;border:0}.b-share-popup__main,.b-share-popup__extra{direction:ltr;vertical-align:bottom;text-align:left}.b-share-popup_down .b-share-popup__main,.b-share-popup_down .b-share-popup__extra{vertical-align:top}.b-share-popup__main{display:-moz-inline-stack;display:inline-block}.b-share-popup__extra{display:none;margin:0 -10px 0 0}.b-share-popup_full .b-share-popup__extra{display:-moz-inline-stack;display:inline-block}.b-share-popup_to-right .b-share-popup__extra{margin:0 0 0 -10px}.b-share-popup__tail{position:absolute;width:21px;height:10px;margin:0 0 0 -11px}.b-share-popup_down .b-share-popup__tail{top:-10px;background:url("//yastatic.net/share/static/b-share-popup_down__tail.gif") 0 0 no-repeat}.b-share-popup_up .b-share-popup__tail{bottom:-10px;background:url("//yastatic.net/share/static/b-share-popup_up__tail.gif") 0 0 no-repeat}.b-share-popup_down .b-share-popup__tail,x:nth-child(1){top:-9px;background-image:url("//yastatic.net/share/static/b-share-popup_down__tail.png")}.b-share-popup_up .b-share-popup__tail,x:nth-child(1){bottom:-9px;background-image:url("//yastatic.net/share/static/b-share-popup_up__tail.png")}@media all and (resolution=0){.b-share-popup_down .b-share-popup__tail,x:nth-child(1),x:-o-prefocus{top:-10px;background-image:url("//yastatic.net/share/static/b-share-popup_down__tail.gif")}.b-share-popup_up .b-share-popup__tail,x:nth-child(1),x:-o-prefocus{bottom:-10px;background-image:url("//yastatic.net/share/static/b-share-popup_up__tail.gif")}}.b-share-popup .b-share-popup_show_form_mail,.b-share-popup .b-share-popup_show_form_html{padding:0!important}.b-share-popup .b-share-popup_show_form_mail .b-share-popup__main,.b-share-popup .b-share-popup_show_form_html .b-share-popup__main,.b-share-popup .b-share-popup_show_form .b-share-popup__main,.b-share-popup .b-share-popup_show_form_mail .b-share-popup__extra,.b-share-popup .b-share-popup_show_form_html .b-share-popup__extra,.b-share-popup .b-share-popup_show_form .b-share-popup__extra{height:15px;padding:0!important;overflow:hidden;visibility:hidden}.b-share-popup_show_form_mail .b-share-popup__expander,.b-share-popup_show_form_html .b-share-popup__expander,.b-share-popup_show_form .b-share-popup__expander,.b-share-popup_show_form_mail .b-share-popup__input_link,.b-share-popup_show_form_html .b-share-popup__input_link,.b-share-popup_show_form .b-share-popup__input_link{display:none}.b-share-popup__form{position:relative;display:none;overflow:hidden;padding:5px 0 0!important;margin:0 0 -15px;white-space:normal}.b-share-popup_show_form_mail .b-share-popup__form_mail,.b-share-popup_show_form_html .b-share-popup__form_html,.b-share-popup_show_form .b-share-popup__form{display:block}.b-share-popup__form__link{padding:5px!important;margin:0 0 5px 10px;text-decoration:underline;cursor:pointer;color:#1A3DC1}.b-share-popup__form__link,.b-share-popup__form__button{font:86%/1.4545em Verdana,sans-serif;float:left;display:inline}.b-share-popup__form__button{margin:5px 0 0 15px}.b-share-popup__form__close{font:86%/1.4545em Verdana,sans-serif;float:right;display:inline;padding:5px!important;margin:0 10px 5px 0;cursor:pointer;color:#999}a.b-share-popup__form__link:hover,a.b-share-popup__form__close:hover{text-decoration:underline;color:red}.b-share-popup_font_fixed .b-share-popup__item{font-size:12.8px}.b-share-popup_font_fixed .b-share-popup__header,.b-share-popup_font_fixed .b-share-popup__input,.b-share-popup_font_fixed .b-share-popup__expander .b-share-popup__item,.b-share-popup_font_fixed .b-share-popup__form__link,.b-share-popup_font_fixed .b-share-popup__form__button,.b-share-popup_font_fixed .b-share-popup__form__close{font-size:11px}.b-share-popup_font_fixed .b-share-popup__yandex{font-size:10px}.b-share-form-button{font:86%/17px Verdana,Arial,sans-serif;display:-moz-inline-box;display:inline-block;position:relative;height:19px;margin:0 3px;padding:0 4px;cursor:default;white-space:nowrap;text-decoration:none!important;color:#000!important;border:none;outline:none;background:url("//yastatic.net/share/static/b-share-form-button.png") 0 -20px repeat-x}.b-share-form-button:link:hover,.b-share-form-button:visited:hover{color:#000!important}.b-share-form-button__before,.b-share-form-button__after{position:absolute;width:3px;height:19px;background:url("//yastatic.net/share/static/b-share-form-button.png")}.b-share-form-button__before{margin-left:-7px}.b-share-form-button__after{margin-left:4px;background-position:-3px 0}.b-share-form-button::-moz-focus-inner{border:none}button.b-share-form-button .b-share-form-button__before,button.b-share-form-button .b-share-form-button__after{margin-top:-1px}@-moz-document url-prefix(){button.b-share-form-button .b-share-form-button__after{margin-top:-2px;margin-left:6px}button.b-share-form-button .b-share-form-button__before{margin-top:-2px;margin-left:-9px}}SPAN.b-share-form-button:hover,.b-share-form-button_state_hover{background-position:0 -60px}SPAN.b-share-form-button:hover .b-share-form-button__before,.b-share-form-button_state_hover .b-share-form-button__before{background-position:0 -40px}SPAN.b-share-form-button:hover .b-share-form-button__after,.b-share-form-button_state_hover .b-share-form-button__after{background-position:-3px -40px}.b-share-form-button_state_pressed,.b-share-form-button_state_pressed .b-share-form-button_share{background-position:0 -100px!important}.b-share-form-button_state_pressed .b-share-form-button__before{background-position:0 -80px!important}.b-share-form-button_state_pressed .b-share-form-button__after{background-position:-3px -80px!important}button.b-share-form-button_state_pressed{overflow:visible}.b-share-form-button_icons{position:relative;padding:0;background-position:0 -20px!important}.b-share-form-button_icons .b-share-form-button__before{left:0;margin-left:-3px;background-position:0 0!important}.b-share-form-button_icons .b-share-form-button__after{z-index:-1;margin-left:0;background-position:-3px 0!important}.b-share-form-button_icons .b-share__handle{padding:2px!important}.b-share-form-button_icons .b-share__handle_more{position:relative;padding-right:6px!important;margin-right:-4px}.b-share-form-button_icons .b-share-icon{opacity:.5;background-image:url("//yastatic.net/share/static/b-share-icon_size_14.png")}.b-share-form-button_icons A.b-share__handle:hover .b-share-icon{opacity:1}.b-share{font:86%/1.4545em Arial,sans-serif;display:-moz-inline-box;display:inline-block;padding:1px 3px 1px 4px!important;vertical-align:middle}.b-share .b-share-form-button{font-size:1em}.b-share__text .b-share-icon{margin:0 5px 0 0;border:none}.b-share__text{margin-right:5px}.b-share__handle{float:left;height:16px;padding:5px 3px 5px 2px!important;cursor:pointer;text-align:left;text-decoration:none!important}.b-share__handle_cursor_default{cursor:default}.b-share__handle .b-share-form-button{margin-top:-2px}.b-share__hr{display:none;float:left;width:1px;height:26px;margin:0 3px 0 2px}a.b-share__handle:hover .b-share__text{text-decoration:underline;color:red}.b-share_bordered{padding:0 2px 0 3px!important;border:1px solid #E4E4E4;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.b-share_bordered .b-share__hr{display:inline;background:#E4E4E4}.b-share_link{margin:-8px 0}a.b-share_link{margin:0}.b-share_link .b-share__text{text-decoration:underline;color:#1A3DC1}.b-share-form-button_share{padding-left:26px!important;vertical-align:top}.b-share-form-button_share .b-share-form-button__before{margin-left:-29px}.b-share-form-button_share .b-share-form-button__icon{position:absolute;width:20px;height:17px;margin:1px 0 0 -23px;background:url("//yastatic.net/share/static/b-share-form-button_share__icon.png") 0 0 no-repeat}.b-share-pseudo-link{border-bottom:1px dotted;cursor:pointer;text-decoration:none!important}.b-share_font_fixed{font-size:11px}.b-share__handle_more{font-size:9px;margin-top:-1px;color:#7B7B7B}A.b-share__handle_more:hover{color:#000}.b-share__group{float:left}.b-share-icon{float:left;display:inline;overflow:hidden;width:16px;height:16px;padding:0!important;vertical-align:top;border:0;background:url("//yastatic.net/share/static/b-share-icon.png") 0 99px no-repeat}.b-share-icon_vkontakte,.b-share-icon_custom{background-position:0 0}.b-share-icon_yaru,.b-share-icon_yaru_photo,.b-share-icon_yaru_wishlist{background-position:0 -17px}.b-share-icon_lj{background-position:0 -34px}.b-share-icon_twitter{background-position:0 -51px}.b-share-icon_facebook{background-position:0 -68px}.b-share-icon_moimir{background-position:0 -85px}.b-share-icon_friendfeed{background-position:0 -102px}.b-share-icon_mail{background-position:0 -119px}.b-share-icon_html{background-position:0 -136px}.b-share-icon_postcard{background-position:0 -153px}.b-share-icon_odnoklassniki{background-position:0 -170px}.b-share-icon_blogger{background-position:0 -187px}.b-share-icon_delicious{background-position:0 -221px}.b-share-icon_gbuzz{background-position:0 -238px}.b-share-icon_linkedin{background-position:0 -255px}.b-share-icon_myspace{background-position:0 -272px}.b-share-icon_evernote{background-position:0 -289px}.b-share-icon_digg{background-position:0 -306px}.b-share-icon_juick{background-position:0 -324px}.b-share-icon_moikrug{background-position:0 -341px}.b-share-icon_yazakladki{background-position:0 -358px}.b-share-icon_liveinternet{background-position:0 -375px}.b-share-icon_tutby{background-position:0 -392px}.b-share-icon_diary{background-position:0 -409px}.b-share-icon_gplus{background-position:0 -426px}.b-share-icon_pocket{background-position:0 -443px}.b-share-icon_surfingbird{background-position:0 -460px}.b-share-icon_pinterest{background-position:0 -477px}.b-share-icon_renren{background-position:0 0}.b-share-icon_renren,.b-share-icon_sina_weibo{background:url("//yastatic.net/share/static/b-share-icon__china.png") no-repeat}.b-share-icon_sina_weibo{background-position:-18px 0}.b-share-icon_qzone{background-position:-36px 0}.b-share-icon_qzone,.b-share-icon_tencent_weibo{background:url("//yastatic.net/share/static/b-share-icon__china.png") no-repeat}.b-share-icon_tencent_weibo{background-position:-54px 0}.b-share_theme_dark .b-share-icon{background:url("//yastatic.net/share/static/b-share-icons__theme_dark.png") 99px 0 no-repeat}.b-share_theme_dark .b-share-icon_odnoklassniki{background-position:-4px -3px}.b-share_theme_dark .b-share-icon_vkontakte{background-position:-24px -3px}.b-share_theme_dark .b-share-icon_twitter{background-position:-44px -3px}.b-share_theme_dark .b-share-icon_facebook{background-position:-64px -3px}.b-share_theme_dark .b-share-icon_lj{background-position:-85px -3px}.b-share_theme_dark .b-share-icon_yaru{background-position:-105px -3px}.b-share_theme_dark .b-share-popup .b-share-icon_odnoklassniki,.b-share_theme_dark .b-share-icon_odnoklassniki:hover{background-position:-4px -28px}.b-share_theme_dark .b-share-popup .b-share-icon_vkontakte,.b-share_theme_dark .b-share-icon_vkontakte:hover{background-position:-24px -28px}.b-share_theme_dark .b-share-popup .b-share-icon_twitter,.b-share_theme_dark .b-share-icon_twitter:hover{background-position:-44px -28px}.b-share_theme_dark .b-share-popup .b-share-icon_facebook,.b-share_theme_dark .b-share-icon_facebook:hover{background-position:-64px -28px}.b-share_theme_dark .b-share-popup .b-share-icon_lj,.b-share_theme_dark .b-share-icon_lj:hover{background-position:-85px -28px}.b-share_theme_dark .b-share-popup .b-share-icon_yaru,.b-share_theme_dark .b-share-icon_yaru:hover{background-position:-105px -28px}.b-share_theme_dark .b-share-form-button_share .b-share-form-button__icon{background-image:url("//yastatic.net/share/static/b-share-form-button_share__icon_dark.png")}.b-share_theme_dark .b-share-form-button{color:#fff!important;opacity:.8}.b-share_theme_dark .b-share__handle:hover .b-share-form-button,.b-share_theme_dark .b-share-form-button:hover{opacity:1;cursor:pointer}.b-share_theme_dark .b-share-form-button,.b-share_theme_dark .b-share-form-button__before,.b-share_theme_dark .b-share-form-button__after{background:0 0}.b-share_theme_dark .b-share-popup__i{background-color:#333;border-radius:10px;-webkit-box-shadow:0 2px 9px rgba(255,255,255,.6);-moz-box-shadow:0 2px 9px rgba(255,255,255,.6);box-shadow:0 2px 9px rgba(255,255,255,.6)}.b-share_theme_dark .b-share__text{color:#AAA}.b-share_theme_dark .b-share-popup{color:#AAA;border-radius:10px;background-color:#333;background-color:rgba(50,50,50,.3)}.b-share_theme_dark .b-share-popup__item{background:0 0;color:#ccc}.b-share_theme_dark .b-share-popup .b-share-popup__item__text{color:#ccc}.b-share_theme_counter .b-share{display:inline-block;vertical-align:middle;white-space:nowrap}.b-share-counter{font:14px Arial,sans-serif;line-height:18px;display:none;float:left;margin:3px 6px 3px 3px;color:#fff}.b-share_theme_counter .b-share_type_small .b-share-counter{font-size:11px;line-height:14px;margin:2px 6px 2px 1px}.b-share_theme_counter .b-share-btn__counter .b-share-counter{display:block}.b-share-btn__counter{text-decoration:none}.b-share_theme_counter .b-share-btn__wrap{position:relative;float:left;margin-left:5px}.b-share_theme_counter .b-share_type_small .b-share-btn__wrap{margin-left:4px}.b-share_theme_counter .b-share-btn__wrap:first-child{margin-left:0}.b-share_theme_counter .b-share__link{display:inline-block;cursor:pointer;-webkit-border-radius:3px;border-radius:3px}.b-share_theme_counter .b-share_type_small .b-share__link{-webkit-border-radius:2px;border-radius:2px}.b-share_theme_counter .b-share-icon{display:block;float:left;width:24px;height:24px;background-image:url("//yastatic.net/share/static/b-share_counter_large.png");background-position:-20px 0}.b-share_theme_counter .b-share_type_small .b-share-icon{width:18px;height:18px;background-image:url("//yastatic.net/share/static/b-share_counter_small.png")}.b-share_theme_counter .b-share-icon_facebook{background-position:0 0}.b-share_theme_counter .b-share-btn__facebook{background-color:#3c5a98}.b-share_theme_counter .b-share-btn__facebook:hover{background-color:#30487a}.b-share_theme_counter .b-share-btn__facebook:active{border-top:2px solid #24365a;background-color:#334d81}.b-share_theme_counter .b-share-icon_moimir{background-position:0 -29px}.b-share_theme_counter .b-share-btn__moimir{background-color:#226eb7}.b-share_theme_counter .b-share-btn__moimir:hover{background-color:#1b5892}.b-share_theme_counter .b-share-btn__moimir:active{border-top:2px solid #14426d;background-color:#1d5e9c}.b-share_theme_counter .b-share-icon_vkontakte{background-position:0 -58px}.b-share_theme_counter .b-share-btn__vkontakte{background-color:#48729e}.b-share_theme_counter .b-share-btn__vkontakte:hover{background-color:#3a5b7e}.b-share_theme_counter .b-share-btn__vkontakte:active{border-top:2px solid #2b445e;background-color:#3d6186}.b-share_theme_counter .b-share-icon_twitter{background-position:0 -87px}.b-share_theme_counter .b-share-btn__twitter{background-color:#00aced}.b-share_theme_counter .b-share-btn__twitter:hover{background-color:#008abe}.b-share_theme_counter .b-share-btn__twitter:active{border-top:2px solid #00668d;background-color:#0092ca}.b-share_theme_counter .b-share-icon_odnoklassniki{background-position:0 -116px}.b-share_theme_counter .b-share-btn__odnoklassniki{background-color:#ff9f4d}.b-share_theme_counter .b-share-btn__odnoklassniki:hover{background-color:#cc7f3e}.b-share_theme_counter .b-share-btn__odnoklassniki:active{border-top:2px solid #975e2e;background-color:#d98742}.b-share_theme_counter .b-share-icon_gplus{background-position:0 -145px}.b-share_theme_counter .b-share-btn__gplus{background-color:#c25234}.b-share_theme_counter .b-share-btn__gplus:hover{background-color:#9b422a}.b-share_theme_counter .b-share-btn__gplus:active{border-top:2px solid #73311f;background-color:#a5462c}.b-share_theme_counter .b-share-icon_yaru{background-position:0 -174px}.b-share_theme_counter .b-share-btn__yaru{background-color:#d83933}.b-share_theme_counter .b-share-btn__yaru:hover{background-color:#ad2e29}.b-share_theme_counter .b-share-btn__yaru:active{border-top:2px solid #80221e;background-color:#b8312b}.b-share_theme_counter .b-share-icon_pinterest{background-position:0 -203px}.b-share_theme_counter .b-share-btn__pinterest{background-color:#cd1e27}.b-share_theme_counter .b-share-btn__pinterest:hover{background-color:#a4181f}.b-share_theme_counter .b-share-btn__pinterest:active{border-top:2px solid #7b1217;background-color:#ae1921}.b-share_theme_counter .b-share__link:active{height:22px}.b-share_theme_counter .b-share_type_small .b-share__link:active{height:16px}.b-share_theme_counter .b-share__link:active .b-share-icon,.b-share_theme_counter .b-share__link:active .b-share-counter{position:relative;top:-1px}.b-share_theme_counter .b-share__link::after{position:absolute;top:0;right:0;bottom:0;left:0;content:"";background-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)}.b-share_theme_counter .b-share__handle{height:auto;padding:0!important}',
            r = '.b-share-popup__i,.b-share-popup__icon,.b-share-popup__main,.b-share-popup_full .b-share-popup__extra{zoom:1;display:inline}.b-share-popup_to-left{left:0}.b-share-popup_to-right .b-share-popup__expander{direction:ltr}.b-share-popup_to-right .b-share-popup__expander .b-share-popup__item{direction:rtl}.b-share-popup__icon{margin-top:-1px}.b-share-popup__icon_input{margin-top:-4px}.b-share-popup__icon__input{width:14px}.b-share-popup__spacer{overflow:hidden;font:1px/1 Arial}.b-share-popup__input__input{width:100px;direction:ltr}.b-share-popup_full .b-share-popup__input_link .b-share-popup__input__input,.b-share-popup_full .b-share-popup__form .b-share-popup__input__input{width:200px}.b-share-popup-wrap{margin-bottom:25px}.b-share-popup__form{direction:ltr}.b-share-popup__form__button,.b-share-popup__form__close,.b-share-popup__form__link{float:none;display:inline-block}.b-share-popup_full .b-share-popup__form__close{margin-left:70px}* HTML .b-share-popup_up .b-share-popup__tail{overflow:hidden;bottom:-10px}* html .b-share-form-button{text-decoration:none!important}.b-share-form-button{position:relative;overflow:visible}.b-share-form-button__before,.b-share-form-button__after{top:0}button.b-share-form-button .b-share-form-button__before,button.b-share-form-button .b-share-form-button__after{margin-top:auto}.b-share-form-button__icon{top:0}.b-share{zoom:1;display:inline}* HTML .b-share-form-button_share .b-share-form-button__icon{margin-top:-1px;background-image:url("//yastatic.net/share/static/b-share-form-button_share__icon.gif")}',
            a = document.createElement("style");
        a.type = "text/css", a.id = "ya_share_style", a.styleSheet ? a.styleSheet.cssText = "msie" === e.browser && (e.version < 8 || t.documentMode < 8) ? o + r : o : a.appendChild(t.createTextNode(o)), o = r = "", X.appendChild(a), h = function() {}
    }

    function u(e) {
        var o = {
                counter: ["button", "small"],
                "default": ["button", "block", "link", "icon", "none"]
            },
            r = (e.theme && o[e.theme] || o["default"]).join(" ");
        if (!e || !e.element && !e.elementID) throw new Error("Invalid parameters");
        e.element = e.element || e.elementID, "string" == typeof e.element ? e.element = t.getElementById(e.element) : 1 === !e.element.nodeType && (e.element = null), e.elementStyle || (e.elementStyle = {}, e.style && (e.elementStyle.type = e.style.button === !1 ? "link" : "button", e.elementStyle.linkUnderline = e.style.link, e.elementStyle.border = e.style.border, e.elementStyle.linkIcon = e.style.icon)), e.elementStyle = e.elementStyle, e.elementStyle.type && -1 !== r.indexOf(e.elementStyle.type) || (e.elementStyle.type = "button")
    }

    function c() {
        var e = location.hostname.split(".").splice(-1, 1)[0];
        switch (e) {
            case "by":
                e = "be";
                break;
            case "kz":
                e = "kk";
                break;
            case "ua":
                e = "uk";
                break;
            default:
                e = "ru"
        }
        return e
    }

    function _(e) {
        var t, o;
        for (t in e)
            if (o = e[t], e.hasOwnProperty(t) && !(t in tt.custom || t in tt.ru)) {
                if (!(o && o.url && o.title && (o.icon_16 || o.icon_from))) throw new Error("Invalid new service declaration");
                tt.custom[t] = o
            }
    }

    function d(o, r) {
        if (h(), u(o), o.element && !o.element.yashareInited) {
            o.element.yashareInited = !0;
            var n, i, p = o.element,
                s = o.l10n,
                b = (o.link || e.location) + "",
                l = o.elementStyle,
                d = l.quickServices || o.services || ["|", "yaru", "vkontakte", "odnoklassniki", "twitter", "facebook", "moimir", "lj"],
                m = o.title || t.title,
                g = o.serviceSpecific || o.override || {},
                k = o.popupStyle || o.popup || {},
                x = k.codeForBlog,
                y = k.blocks || ["yaru", "vkontakte", "odnoklassniki", "twitter", "facebook", "moimir", "lj", "gplus"],
                T = k.copyPasteField || k.input,
                S = "ya-share-" + Math.random() + "-" + +new Date,
                A = !/(?:moikrug\.ru|ya\.ru|yandex\.by|yandex\.com|yandex\.com\.tr|yandex\.kz|yandex\.net|yandex\.ru|yandex\.ua|yandex-team\.ru)$/.test(location.hostname),
                E = o.servicesDeclaration;
            s && s in ot || (s = c()), i = ot[s], !A && E && _(E);
            var M = l.afterIconsText;
            if (M && (l.type = "text"), n = l.text || o.text || i.share + ("button" == l.type ? "…" : ""), n = B(n), "[object Array]" === Object.prototype.toString.call(y)) {
                var z = y;
                y = {}, y[i["share with friends"]] = z, z = null
            }
            switch (typeof x) {
                case "string":
                    var P = x;
                    x = {}, x[i["code blog"]] = P;
                    break;
                case "object":
                    for (var D in x) break;
                    D || (x = null);
                    break;
                default:
                    x = null
            }
            var j = ' id="' + S + '" data-hdirection="' + (k.hDirection || "") + '" data-vdirection="' + (k.vDirection || "") + '"';
            if ("counter" == o.theme) {
                var I, F, N, O = ['<span class="b-share' + ("small" == l.type ? " b-share_type_small" : "") + '">'];
                for (I = 0, F = d.length; F > I; I++) N = d[I], N = v({
                    serviceName: N,
                    serviceTitle: f(N, "serviceTitle", "", g),
                    link: f(N, "link", b, g),
                    title: f(N, "title", m, g),
                    description: f(N, "description", o.description || "", g),
                    image: f(N, "image", o.image || "", g),
                    lang: s,
                    theme: "counter"
                }), N && O.push('<span class="b-share-btn__wrap">' + N + "</span>");
                window.postMessage && O.push('<iframe style="display: none" src="' + Z + "/ya-share-cnt.html?url=" + encodeURIComponent(b) + "&services=" + d.join(",") + '"></iframe>'), R(e, "message", r.onMessage), p.setAttribute("data-yasharelink", p.getAttribute("data-yasharelink") || b)
            } else {
                var I, F, N, O = ['<span class="b-share' + ("block" == l.type ? " b-share-form-button b-share-form-button_icons" : "") + (l.border ? " b-share_bordered" : "") + (l.linkUnderline ? " b-share_link" : "") + '"' + (l.background ? ' style="background:' + l.background + '"' : "") + ">" + ("none" !== l.type && "text" !== l.type ? '<a class="b-share__handle"' + j + ">" : "")];
                for ("block" == l.type ? O = ['<div class="b-share"><span class="b-share-form-button b-share-form-button_icons"><i class="b-share-form-button__before"></i>'] : "button" == l.type ? O.push('<span class="b-share-form-button b-share-form-button_share"><i class="b-share-form-button__before"></i><i class="b-share-form-button__icon"></i>' + n + '<i class="b-share-form-button__after"></i></span>') : (("link" === l.type || "text" === l.type) && O.push('<span class="b-share__text' + ("text" === l.type ? " b-share__handle b-share__handle_cursor_default" : "") + ("dotted" === l.linkUnderline ? " b-share-pseudo-link" : "") + '">'), (("link" === l.type || "text" === l.type) && l.linkIcon || "icon" === l.type) && O.push('<img alt="" class="b-share-icon" src="' + Z + '/static/b-share.png"/>'), ("link" === l.type || "text" === l.type) && O.push(n + "</span>")), "none" !== l.type && "text" !== l.type && O.push("</a>"), l.group && O.push('<span class="b-share__group">'), I = 0, F = d.length; F > I; I++) N = d[I], O.push(v({
                    serviceName: N,
                    serviceTitle: f(N, "serviceTitle", "", g),
                    link: f(N, "link", b, g),
                    title: f(N, "title", m, g),
                    description: f(N, "description", o.description || "", g),
                    image: f(N, "image", o.image || "", g),
                    lang: s
                }));
                l.group && O.push("</span>"), "block" == l.type ? (M = "Ў", O.push('<a class="b-share__handle b-share__handle_more" title="Ещё" ' + j + '><span class="__b-share__handle_more">' + M + "</span></a>"), O.push('<i class="b-share-form-button__after"></i>')) : M && O.push('<a class="b-share__handle b-share_link"' + j + '><span class="b-share__text b-share-pseudo-link">' + M + "</span></a>"), O.push("</span>"), "block" == l.type && O.push("</div>")
            }
            if (p.innerHTML = O.join(""), o.theme && a(p, "b-share_theme_" + o.theme.replace(/\"/g, "")), C(p, r, M, "none" === l.type || "counter" === o.theme), "counter" != o.theme && "none" !== l.type) {
                var W = ['<div class="b-share-popup-wrap b-share-popup-wrap_state_hidden' + (o.theme ? " b-share_theme_" + o.theme.replace(/\"/g, "") : "") + '" id="' + S + '-popup"><div class="b-share-popup b-share-popup_down b-share-popup_to-right"><div class="b-share-popup__i' + (T ? " b-share-popup_with-link" : "") + '">'];
                if (x) {
                    W.push('<div class="b-share-popup__form b-share-popup__form_html">');
                    for (var q in x) x.hasOwnProperty(q) && W.push('<label class="b-share-popup__input">' + q + '<textarea class="b-share-popup__input__input" cols="10" rows="5">' + x[q] + "</textarea></label>");
                    W.push('<a class="b-share-popup__form__close">' + i.close + "</a></div>")
                }
                W.push('<div class="b-share-popup__main ' + (A ? " b-share-popup_yandexed" : "") + '">'), T && W.push('<label class="b-share-popup__input b-share-popup__input_link">' + i.link + '<input class="b-share-popup__input__input" readonly="readonly" type="text" value="' + B(b) + '" /></label>');
                for (var J in y)
                    if (y.hasOwnProperty(J)) {
                        var V = y[J];
                        if (F = V.length)
                            for (J && W.push('<div class="b-share-popup__header b-share-popup__header_first">' + J + "</div>"), I = 0; F > I; I++) N = V[I], W.push(w({
                                serviceName: N,
                                serviceTitle: f(N, "serviceTitle", "", g),
                                link: f(N, "link", b, g),
                                title: f(N, "title", m, g),
                                description: f(N, "description", o.description || "", g),
                                image: f(N, "image", o.image || "", g),
                                lang: s
                            }))
                    }
                x && W.push('<div class="b-share-popup__spacer"></div><a class="b-share-popup__item b-share-popup__item_type_code"><span class="b-share-popup__icon"><span class="b-share-icon b-share-icon_html"></span></span><span class="b-share-popup__item__text">' + i["code blog"] + "</span></a>"), A && W.push('<a href="http://api.yandex.ru/share/" class="b-share-popup__yandex">Яндекс</a>'), W.push("</div>"), W.push('</div><div class="b-share-popup__tail"></div></div></div>');
                var H, Y = t.createElement("div");
                Y.innerHTML = W.join(""), H = Y.firstChild, t.body.appendChild(H), Y = null, L(H, r)
            }
            return [p, H]
        }
    }

    function m(e) {
        var o = t.createElement("script");
        o.setAttribute("src", location.protocol + "//clck.yandex.ru/jclck/dtype=stred/pid=52/cid=70685/path=" + e + "/rnd=" + Math.round(1e5 * Math.random()) + "/*" + encodeURIComponent(location.href)), X.appendChild(o)
    }

    function f(e, t, o, r) {
        var a = o,
            n = r[e];
        return n && t in n && (a = n[t]), "description" == t || "image" == t || "serviceTitle" == t ? a : K(a)
    }

    function g(e) {
        return Boolean(tt.custom[e] && tt.custom[e].title)
    }

    function k(e, t) {
        var o = tt.custom[e] || x(e, t),
            r = "",
            a = "";
        return g(e) ? o.icon_from ? r += o.icon_from : (r += "custom", a = ' style="background-image:url(' + o.icon_16 + ");" + (o.icon_16_css ? o.icon_16_css : "") + '"') : r += e, '<span class="b-share-icon b-share-icon_' + r + '"' + a + "></span>"
    }

    function x(e, t) {
        return t = t || "ru", tt.custom[e] ? tt.custom[e].title : tt[t] && tt[t][e]
    }

    function y(e, t, o, r, a) {
        a = a ? K(a) : "", r = r ? K(r) : "";
        var n = et + "/go.xml?service=" + e;
        if (g(e)) {
            var i = tt.custom[e],
                p = i.url.replace("{link}", t).replace("{title}", o).replace("{description}", r).replace("{image}", a);
            return i.directLink ? p : n + "&amp;goto=" + K(p)
        }
        return n + "&amp;url=" + t + "&amp;title=" + o + (r ? "&amp;description=" + r : "") + (a ? "&amp;image=" + a : "")
    }

    function v(e, t, o, r, a) {
        var n, i, p;
        if (1 == arguments.length && "object" == typeof arguments[0]) {
            var s = arguments[0];
            i = s.lang, n = s.serviceTitle, e = s.serviceName, t = s.link, o = s.title, r = s.description, a = s.image, p = s.theme
        }
        return "pinterest" != e || a ? e in tt[i || "ru"] || e in tt.custom ? '<a rel="nofollow" target="_blank" title="' + (n || x(e, i)) + '" class="b-share__handle b-share__link b-share-btn__' + e + '" href="' + y(e, t, o, r, a) + '" data-service="' + e + '">' + k(e) + ("counter" == p ? '<span class="b-share-counter"></span>' : "") + "</a>" : "|" == e ? '<span class="b-share__hr"></span>' : void 0 : ""
    }

    function w(e, t, o, r, a) {
        var n, i;
        if (1 == arguments.length && "object" == typeof arguments[0]) {
            var p = arguments[0];
            i = p.lang, n = p.serviceTitle, e = p.serviceName, t = p.link, o = p.title, r = p.description, a = p.image
        }
        return "pinterest" != e || a ? e in tt[i || "ru"] || e in tt.custom ? '<a rel="nofollow" target="_blank" href="' + y(e, t, o, r, a) + '" class="b-share-popup__item" data-service="' + e + '"><span class="b-share-popup__icon">' + k(e) + '</span><span class="b-share-popup__item__text">' + (n || x(e, i)) + "</span></a>" : "|" == e ? '<div class="b-share-popup__spacer"></div>' : void 0 : ""
    }

    function T() {
        e.clearTimeout(rt)
    }

    function S(t) {
        rt = e.setTimeout(t.onDocumentClick, 2e3)
    }

    function L(e, t) {
        var o, r, i = F(e, "b-share-popup__expander")[0],
            p = F(e, "b-share-popup__item");
        for (i && R(i.firstChild, "click", z), o = 0, r = p.length; r > o; o++) R(p[o], "click", t.onshare);
        A(e[$]("input")), A(e[$]("textarea"));
        var s = F(e, "b-share-popup__item_type_code")[0];
        if (s) {
            var l = F(e, "b-share-popup__i")[0];
            R(s, "click", function(e) {
                a(l, "b-share-popup_show_form_html"), b(e)
            }), R(F(e, "b-share-popup__form__close")[0], "click", function(e) {
                n(l, "b-share-popup_show_form_html"), b(e)
            })
        }
        J(e, T), V(e, t.setPopupCloseTimeout)
    }

    function A(e) {
        for (var t, o = 0, r = e.length; r > o; o++) t = e[o], R(t, "click", function(e) {
            return function() {
                e.select()
            }
        }(t))
    }

    function C(e, t, o, r) {
        var a, n = 1,
            i = F(e, "b-share__handle"),
            p = i.length,
            s = p;
        if (r) n = 0;
        else {
            var b = i[0];
            o && (b = i[p - 1], s--), R(b, "click", t.toggleOpenMode), J(b, T), V(b, t.setPopupCloseTimeout)
        }
        for (a = s; a > n; n++) R(i[n], "click", t.onshare)
    }

    function E(e) {
        var t, o, r;
        if ((t = e.currentTarget) || (r = e.target || e.srcElement, (t = p(r, "b-share__handle")) || (t = p(r, "b-share-popup__item"))), t && (o = t.getAttribute("data-service"))) switch (m(o), o) {
            case "facebook":
                M(e, t, 800, 520);
                break;
            case "moimir":
                M(e, t, 560, 400);
                break;
            case "twitter":
                M(e, t, 650, 520);
                break;
            case "vkontakte":
                M(e, t, 550, 420);
                break;
            case "odnoklassniki":
                M(e, t, 560, 370);
                break;
            case "gplus":
                M(e, t, 560, 370);
                break;
            case "surfingbird":
                M(e, t, 500, 170)
        }
        return o
    }

    function M(e, t, o, r) {
        b(e), window.open(t.href, "yashare_popup" + Math.random(), "scrollbars=1,resizable=1,menubar=0,toolbar=0,status=0,left=" + (screen.width - o) / 2 + ",top=" + (screen.height - r) / 2 + ",width=" + o + ",height=" + r).focus()
    }

    function z() {
        var e = p(this, "b-share-popup__i");
        i(e, "b-share-popup_full")
    }

    function P(e, t) {
        if (e && "number" != typeof e) {
            var o = e.which ? e.which : 1;
            if (1 !== o || p(e.target || e.srcElement, "b-share-popup-wrap")) return
        }
        U && t.closePopup(U.id)
    }

    function D(e, o) {
        e = e.replace("-popup", "");
        var r = t.getElementById(e),
            i = t.getElementById(e + "-popup"),
            p = F(i, "b-share-popup__input__input");
        if (n(r, "b-share-popup_opened"), n(r, "b-share-form-button_state_pressed"), a(i, "b-share-popup-wrap_state_hidden"), n(i, "b-share-popup-wrap_state_visibale"), i.style.cssText = "", p)
            for (var s = 0, b = p.length; b > s; s++) p[s].style.cssText = "";
        i.firstChild.className = "b-share-popup", H(t, "click", o.onDocumentClick), U = null, o.onclose(o._this)
    }

    function j(o, r, i) {
        i = i || {};
        var p, s, b = i.hDirection || o.getAttribute("data-hdirection"),
            l = i.vDirection || o.getAttribute("data-vdirection"),
            h = t.getElementById(o.id + "-popup"),
            u = h.firstChild,
            c = F(h, "b-share-popup__input__input"),
            _ = N(),
            d = Y(o);
        p = "left" === b || "right" === b ? b : d.left - Math.max(O.scrollLeft, t.body.scrollLeft) >= _.width / 2 ? "left" : "right", s = "up" === l || "down" === l ? l : d.top - Math.max(O.scrollTop, t.body.scrollTop) >= _.height / 2 ? "up" : "down", r.onDocumentClick();
        var f = F(h, "b-share-popup__tail")[0],
            g = Math.round(o.offsetWidth / 2),
            k = i.width || u.offsetWidth,
            x = Math.round(k / 2);
        if (d.left - (x - g) > 5) {
            d.left -= Math.round(x - g);
            var y = Math.max(d.left + k - t.body.offsetWidth, 0);
            d.left -= y, g = x - 10 + y
        }
        if (d.top += "up" === s ? -9 : 9 + o.offsetHeight, h.style.cssText = "top:" + (i.top || d.top) + "px;left:" + (i.left || d.left) + "px;width:" + k + "px", f.style.cssText = "left: " + g + "px", c)
            for (var v = 0, w = c.length; w > v; v++) c[v].style.width = k - 30 + "px";
        u.className = "b-share-popup b-share-popup_" + s + " b-share-popup_to-" + p, a(h, "b-share-popup-wrap_state_visibale"), n(h, "b-share-popup-wrap_state_hidden"), a(o, "b-share-popup_opened"), a(o, "b-share-form-button_state_pressed"), u.firstChild.style.zoom = 1, e.setTimeout(function() {
            R(t, "click", r.onDocumentClick)
        }, 50), m("share"), U = h, r.onopen(r._this)
    }

    function I(e, t) {
        var o = e.currentTarget || p(e.target || e.srcElement, "b-share__handle");
        r(o, "b-share-popup_opened") ? t.closePopup(o.id, t) : t.onbeforeopen(t._this) !== !1 && t.openPopup(o, t), b(e), l(e)
    }

    function B(e) {
        return (e || "").replace(/</g, "&lt;").replace(/"/g, "&quot;")
    }
    var F, N, O = t.documentElement,
        W = {},
        q = F = function(e, o) {
            e = e || t;
            for (var a = e[$] && e[$]("*"), n = [], i = 0, p = a.length; p > i; i++) r(a[i], o) && n.push(a[i]);
            return n
        };
    t.querySelectorAll ? F = function(e, t) {
        return e.querySelectorAll("." + t)
    } : t.getElementsByClassName && (F = function(e, t) {
        return e.getElementsByClassName ? e.getElementsByClassName(t) : q(e, t)
    }), N = e.innerHeight ? function() {
        return {
            width: e.innerWidth,
            height: e.innerHeight
        }
    } : O && O.clientHeight ? function() {
        return {
            width: O.clientWidth,
            height: O.clientHeight
        }
    } : function() {
        var e = t.body;
        return {
            width: e.clientWidth,
            height: e.clientHeight
        }
    };
    var J, V, R = t.addEventListener ? function(e, t, o) {
            e.addEventListener(t, o, !1)
        } : function(e, t, o) {
            e.attachEvent("on" + t, o)
        },
        H = t.removeEventListener ? function(e, t, o) {
            e.removeEventListener(t, o, !1)
        } : function(e, t, o) {
            e.detachEvent("on" + t, o)
        };
    "onmouseenter" in O ? (J = function(e, t) {
        R(e, "mouseenter", t)
    }, V = function(e, t) {
        R(e, "mouseleave", t)
    }) : (J = function(e, t) {
        R(e, "mouseover", function(e) {
            s(e, this) && t(e)
        })
    }, V = function(e, t) {
        R(e, "mouseout", function(e) {
            s(e, this) && t(e)
        })
    });
    var Y = function(e, t) {
            function o(e, t, o) {
                var r, a = e.style;
                if (!o && a && a[t]) r = a[t];
                else if (i) {
                    t = t.replace(p, "-$1").toLowerCase();
                    var n = e.ownerDocument.defaultView;
                    if (!n) return null;
                    var u = n.getComputedStyle(e, null);
                    u && (r = u.getPropertyValue(t))
                } else if (e.currentStyle) {
                    var c = t.replace(s, b);
                    if (r = e.currentStyle[t] || e.currentStyle[c], !l.test(r) && h.test(r)) {
                        var _ = a.left,
                            d = e.runtimeStyle.left;
                        e.runtimeStyle.left = e.currentStyle.left, a.left = "fontSize" === c ? "1em" : r || 0, r = a.pixelLeft + "px", a.left = _, e.runtimeStyle.left = d
                    }
                }
                return r
            }

            function r() {
                var e = t.createElement("div");
                e.style.width = e.style.paddingLeft = "1px", t.body.appendChild(e), n.boxModel = 2 === e.offsetWidth, t.body.removeChild(e).style.display = "none", e = null, r = u
            }

            function a() {
                var e, i, p, s, b = t.body,
                    l = t.createElement("div"),
                    h = parseFloat(o(b, "marginTop", !0), 10) || 0,
                    c = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                l.style.cssText = "position:absolute;top:0;lefto:0;margin:0;border:0;width:1px;height:1px;visibility:hidden;", l.innerHTML = c, b.insertBefore(l, b.firstChild), e = l.firstChild, i = e.firstChild, s = e.nextSibling.firstChild.firstChild, n.doesNotAddBorder = 5 !== i.offsetTop, n.doesAddBorderForTableAndCells = 5 === s.offsetTop, i.style.position = "fixed", i.style.top = "20px", n.supportsFixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", n.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop, n.doesNotIncludeMarginInBodyOffset = b.offsetTop !== h, b.removeChild(l), b = l = e = i = p = s = null, r(), a = u
            }
            var n = {
                    boxModel: null
                },
                i = t.defaultView && t.defaultView.getComputedStyle,
                p = /([A-Z])/g,
                s = /-([a-z])/gi,
                b = function(e, t) {
                    return t.toUpperCase()
                },
                l = /^-?\d+(?:px)?$/i,
                h = /^-?\d/,
                u = function() {};
            return "getBoundingClientRect" in O ? function(t) {
                if (!t || !t.ownerDocument) return null;
                r();
                var o = t.getBoundingClientRect(),
                    a = t.ownerDocument,
                    i = a.body,
                    p = (O.clientTop || i.clientTop || 0) + (parseInt(i.style.marginTop, 10) || 0),
                    s = (O.clientLeft || i.clientLeft || 0) + (parseInt(i.style.marginLeft, 10) || 0),
                    b = o.top + (e.pageYOffset || n.boxModel && O.scrollTop || i.scrollTop) - p,
                    l = o.left + (e.pageXOffset || n.boxModel && O.scrollLeft || i.scrollLeft) - s;
                return {
                    top: b,
                    left: l
                }
            } : function(e) {
                if (!e || !e.ownerDocument) return null;
                a();
                for (var t, o = e.offsetParent, r = e, i = e.ownerDocument, p = i.body, s = i.defaultView, b = s ? s.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, h = e.offsetLeft;
                    (e = e.parentNode) && e !== p && e !== O && (!n.supportsFixedPosition || "fixed" !== b.position);) t = s ? s.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, h -= e.scrollLeft, e === o && (l += e.offsetTop, h += e.offsetLeft, !n.doesNotAddBorder || n.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(e.nodeName) || (l += parseFloat(t.borderTopWidth, 10) || 0, h += parseFloat(t.borderLeftWidth, 10) || 0), r = o, o = e.offsetParent), n.subtractsBorderForOverflowNotVisible && "visible" !== t.overflow && (l += parseFloat(t.borderTopWidth, 10) || 0, h += parseFloat(t.borderLeftWidth, 10) || 0), b = t;
                return ("relative" === b.position || "static" === b.position) && (l += p.offsetTop, h += p.offsetLeft), n.supportsFixedPosition && "fixed" === b.position && (l += Math.max(O.scrollTop, p.scrollTop), h += Math.max(O.scrollLeft, p.scrollLeft)), {
                    top: l,
                    left: h
                }
            }
        }(e, t),
        G = function(e, t) {
            function o() {
                if (!i) {
                    if (!t.body) return setTimeout(o, 13);
                    if (i = !0, s) {
                        for (var e, r = 0; e = s[r++];) e.call(null);
                        s = null
                    }
                }
            }

            function r() {
                if (!p) {
                    if (p = !0, "complete" === t.readyState) return o();
                    if (t.addEventListener) t.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", o, !1);
                    else if (t.attachEvent) {
                        t.attachEvent("onreadystatechange", n), e.attachEvent("onload", o);
                        var r = !1;
                        try {
                            r = null == e.frameElement
                        } catch (i) {}
                        O.doScroll && r && a()
                    }
                }
            }

            function a() {
                if (!i) {
                    try {
                        O.doScroll("left")
                    } catch (e) {
                        return void setTimeout(a, 1)
                    }
                    o()
                }
            }
            var n, i = !1,
                p = !1,
                s = [];
            return t.addEventListener ? n = function() {
                    t.removeEventListener("DOMContentLoaded", n, !1), o()
                } : t.attachEvent && (n = function() {
                    "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), o())
                }),
                function(e) {
                    r(), i ? e.call(null) : s.push(e)
                }
        }(e, t),
        Q = function() {},
        U = null,
        $ = "getElementsByTagName",
        K = encodeURIComponent,
        X = t[$]("head")[0] || t.body,
        Z = "//yastatic.net/share",
        et = "https://share.yandex.net",
        tt = {
            az: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Moy Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklassniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "YA TUT!",
                twitter: "Twitter",
                vkontakte: "ВКонтакте"
            },
            be: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Мой Мир",
                myspace: "MySpace",
                odnoklassniki: "Одноклассники",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Я ТУТ!",
                twitter: "Twitter",
                vkontakte: "ВКонтакте"
            },
            en: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Moi Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklassniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Tut.by",
                twitter: "Twitter",
                vkontakte: "VKontakte"
            },
            hy: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Moi Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklassniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "",
                renren: "",
                sina_weibo: "",
                surfingbird: "Surfingbird",
                tencent_weibo: "",
                tutby: "YA TUT",
                twitter: "Twitter",
                vkontakte: "VKontakte"
            },
            ka: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Moi Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklasniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "",
                renren: "",
                sina_weibo: "",
                surfingbird: "Surfingbird",
                tencent_weibo: "",
                tutby: "Ya Tut!",
                twitter: "Twitter",
                vkontakte: "VKontakte"
            },
            kk: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Мой Мир",
                myspace: "MySpace",
                odnoklassniki: "Одноклассники",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Я ТУТ!",
                twitter: "Twitter",
                vkontakte: "ВКонтакте"
            },
            ro: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Moi Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklassniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "",
                renren: "",
                sina_weibo: "",
                surfingbird: "Surfingbird",
                tencent_weibo: "",
                tutby: "YA TUT!",
                twitter: "Twitter",
                vkontakte: "VKontakte"
            },
            ru: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Мой Мир",
                myspace: "MySpace",
                odnoklassniki: "Одноклассники",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Я ТУТ!",
                twitter: "Twitter",
                vkontakte: "ВКонтакте"
            },
            tr: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook ",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal ",
                moimir: "Moi Mir",
                myspace: "MySpace",
                odnoklassniki: "Odnoklasniki",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "",
                renren: "",
                sina_weibo: "",
                surfingbird: "Surfingbird",
                tencent_weibo: "",
                tutby: "Tut.by!",
                twitter: "Twitter ",
                vkontakte: "VKontakte "
            },
            tt: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Мой Мир",
                myspace: "MySpace",
                odnoklassniki: "Одноклассники",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Я ТУТ!",
                twitter: "Twitter",
                vkontakte: "ВКонтакте"
            },
            uk: {
                blogger: "Blogger",
                delicious: "delicious",
                diary: "Diary",
                digg: "Digg",
                evernote: "Evernote",
                facebook: "Facebook",
                gplus: "Google Plus",
                juick: "Juick",
                linkedin: "LinkedIn",
                liveinternet: "LiveInternet",
                lj: "LiveJournal",
                moimir: "Мой Мир",
                myspace: "MySpace",
                odnoklassniki: "Однокласники",
                pinterest: "Pinterest",
                pocket: "Pocket",
                qzone: "Qzone",
                renren: "Renren",
                sina_weibo: "Sina Weibo",
                surfingbird: "Surfingbird",
                tencent_weibo: "Tencent Weibo",
                tutby: "Я ТУТ!",
                twitter: "Twitter",
                vkontakte: "ВКонтакті"
            }
        },
        ot = {
            az: {
                close: "bağla",
                "code blog": "Bloq üçün kod",
                link: "Əlaqə",
                share: "Paylaş",
                "share with friends": "Dostlarla paylaş"
            },
            be: {
                close: "закрыць",
                "code blog": "Код для блога",
                link: "Cпасылка",
                share: "Падзяліцца",
                "share with friends": "Падзяліцца з сябрамi"
            },
            en: {
                close: "close",
                "code blog": "Blog code",
                link: "Link",
                share: "Share",
                "share with friends": "Share with friends"
            },
            hy: {
                close: "Փակել",
                "code blog": "Օրագրի կոդ",
                link: "Հղում",
                share: "Կիսվել",
                "share with friends": "Կիսվեք ընկերների հետ"
            },
            ka: {
                close: "დახურვა",
                "code blog": "ბლოგის კოდი",
                link: "ბმული",
                share: "გაზიარება",
                "share with friends": "მეგობრებთან გაზიარება"
            },
            kk: {
                close: "жабу",
                "code blog": "Блог үшін код",
                link: "Сілтеме",
                share: "Бөлісу",
                "share with friends": "Достарыңызбен бөлісіңіз"
            },
            ro: {
                close: "închide",
                "code blog": "Cod pentru blog",
                link: "Link",
                share: "Distribuie",
                "share with friends": "Distribuie prietenilor"
            },
            ru: {
                close: "закрыть",
                "code blog": "Код для блога",
                link: "Ссылка",
                share: "Поделиться",
                "share with friends": "Поделитесь с друзьями"
            },
            tr: {
                close: "kapat",
                "code blog": "Blog için kod",
                link: "Bağlantı",
                share: "Paylaş",
                "share with friends": "Arkadaşlarla paylaş"
            },
            tt: {
                close: "ябу",
                "code blog": "Блог өчен код",
                link: "Сылтама",
                share: "Бүлешү",
                "share with friends": "Дусларгыз белән бүлешегез"
            },
            uk: {
                close: "закрити",
                "code blog": "Код для блогу",
                link: "Посилання",
                share: "Поділитися",
                "share with friends": "Поділіться з друзями"
            }
        };
    tt.custom = {};
    var rt;
    "Ya" in e || (e.Ya = {}), Ya.share = function(o) {
        function r(e) {
            return e = ("" + e).replace(/\s/g, "").match(/^\-?\d+\+?/), e && e[0]
        }

        function i(e) {
            var t = new RegExp("(\\d)(\\d{3})( |\\+|$)", "g");
            return t.test("" + e) ? i(("" + e).replace(t, function() {
                return arguments[1] + " " + arguments[2] + arguments[3]
            })) : e
        }
        if (!(this instanceof Ya.share)) return new Ya.share(o);
        o && (Z = o.STATIC_HOST || Z, et = o.SHARE_HOST || et), this._loaded = !1;
        var p = this,
            s = o.onshare || Q,
            b = o.onBeforeShare || null,
            l = {
                onready: o.onready || o.onload || Q,
                onbeforeclose: o.onbeforeclose || Q,
                onclose: o.onclose || Q,
                onbeforeopen: o.onbeforeopen || Q,
                onopen: o.onopen || Q,
                onshare: function(e) {
                    if (b) try {
                        if (b(p) === !1) return e.preventDefault(), !1
                    } catch (t) {
                        return e.preventDefault(), !1
                    }
                    var o = E(e);
                    o && (p.incrementCounter(o), s(o, p))
                },
                _this: p
            };
        l.onMessage = function(e) {
            p.onMessage(e)
        }, this.onMessage = function(e) {
            try {
                var t = Z.match(/\/\/([^\/]+)(\/|$)/);
                if (e && e.data && (e.origin.match(RegExp("//" + (t && t[1].replace(".", "\\.") + "$"))) || e.origin == window.location.origin)) {
                    var o = ("" + e.data).split("|"),
                        a = {};
                    if (3 != o.length) return;
                    a.service = o.shift(), a.counter = r(o.shift()), a.url = o.join("|"), a.url.length && a.service && p.showCounter(a)
                }
            } catch (e) {}
        }, this.incrementCounter = function(e) {
            if (!window.postMessage) return !1;
            var t = F(p._block, "b-share-btn__" + e)[0],
                o = t ? F(t, "b-share-counter")[0] : !1,
                n = o && r(o.innerHTML || "0");
            o && n && /^[\d ]+$/.test(n) && (n = parseInt(r(n) || 0, 10) + 1, o.innerHTML = i("" + n), a(t, "b-share-btn__counter"))
        }, this.showCounter = function(e) {
            var t = F(p._block, "b-share-btn__" + e.service)[0],
                o = t ? F(t, "b-share-counter")[0] : !1;
            o && p._block.getAttribute("data-yasharelink") == e.url && (o.innerHTML = i(e.counter) || "", e.counter < 0 ? o.parentNode.removeChild(o) : e.counter && "0" != e.counter ? a(t, "b-share-btn__counter") : n(t, "b-share-btn__counter"))
        }, l.toggleOpenMode = function(e) {
            I(e, l)
        }, l.closePopup = function(e) {
            T(), l.onbeforeclose(p) !== !1 && D(e, l)
        }, l.openPopup = function(e, t) {
            j(e, t)
        }, l.onDocumentClick = function(e) {
            P(e, l)
        }, l.setPopupCloseTimeout = function() {
            S(l)
        }, this.closePopup = function() {
            D(this._popup.id, l)
        }, this.openPopup = function(e) {
            j(F(this._block, "b-share__handle")[0], l, e)
        }, this.appendMetrika = function() {
            if (!e.Ya._globalShareLoaded) {
                var o = t.getElementsByTagName("script")[0],
                    r = t.createElement("script"),
                    a = function() {
                        o.parentNode.insertBefore(r, o)
                    };
                r.type = "text/javascript", r.async = !0, r.src = ("https:" == t.location.protocol ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js", "[object Opera]" == e.opera ? t.addEventListener("DOMContentLoaded", a, !1) : a(), (e.yandex_metrika_callbacks = e.yandex_metrika_callbacks || []).push(function() {
                    try {
                        e.yaCounter26812653 = new Ya.Metrika({
                            id: 26812653,
                            trackLinks: !0,
                            accurateTrackBounce: !0,
                            params: {
                                jquery: "function" == typeof e.jQuery,
                                version: "function" == typeof e.jQuery && e.jQuery().jquery
                            }
                        }), r.remove()
                    } catch (t) {}
                }), e.Ya._globalShareLoaded = !0
            }
        }, G(function() {
            var e = d(o, l);
            o = null, e && (p._block = e[0], p._popup = e[1], p._loaded = !0, l.onready(p), p.appendMetrika())
        })
    }, Ya.share.prototype = {
        updateShareLink: function(o, r, a) {
            if (!this._loaded) return this;
            var n, i, p, s, b = "",
                l = "";
            if (1 == arguments.length && "object" == typeof arguments[0]) {
                var h = arguments[0];
                o = h.link || e.location.toString(), r = h.title || t.title, b = h.description || "", l = h.image || "", a = h.serviceSpecific || {}
            } else o = o || e.location.toString(), r = r || t.title, a = a || {};
            for (p = F(this._block, "b-share__link"), n = 0, i = p.length; i > n; n++) s = p[n].getAttribute("data-service"), p[n].href = y(s, f(s, "link", o, a), f(s, "title", r, a), f(s, "description", b, a), f(s, "image", l, a));
            if (this._popup) {
                for (p = F(this._popup, "b-share-popup__item"), n = 0, i = p.length; i > n; n++) s = p[n].getAttribute("data-service"), s && (p[n].href = y(s, f(s, "link", o, a), f(s, "title", r, a), f(s, "description", b, a), f(s, "image", l, a)));
                p = F(this._popup, "b-share-popup__input__input");
                for (var n = p.length - 1; n >= 0; n--) p[n] && "textarea" !== p[n].tagName.toLowerCase() && (p[n].value = o)
            }
            return this
        },
        updateCustomService: function(e, t) {
            return tt.custom[e] && tt.custom[e].url ? (tt.custom[e].url = t, this.updateShareLink(), !0) : !1
        }
    }, G(function() {
        for (var e, o, r, a, n = F(t.body, "yashare-auto-init"), i = 0, p = n.length; p > i; i++) e = n[i], o = e.getAttribute("data-yashareQuickServices"), r = e.getAttribute("data-yasharePopupServices"), o = "string" == typeof o ? o.split(",") : null, a = {
            element: e,
            theme: e.getAttribute("data-yashareTheme"),
            l10n: e.getAttribute("data-yashareL10n"),
            image: e.getAttribute("data-yashareImage"),
            link: e.getAttribute("data-yashareLink"),
            title: e.getAttribute("data-yashareTitle"),
            description: e.getAttribute("data-yashareDescription"),
            elementStyle: {
                type: e.getAttribute("data-yashareType"),
                quickServices: o
            }
        }, r && "string" == typeof r && (r = r.split(","), a.popupStyle = {
            blocks: r
        }), new Ya.share(a)
    })
}(window, document);