/*! This file is auto-generated */
!function(a){a.fn.hoverIntent=function(e,t,n){var o,r,v,i,u={interval:100,sensitivity:6,timeout:0};u="object"==typeof e?a.extend(u,e):a.isFunction(t)?a.extend(u,{over:e,out:t,selector:n}):a.extend(u,{over:e,out:e,selector:t});function s(e){o=e.pageX,r=e.pageY}function h(e){var t=a.extend({},e),n=this;n.hoverIntent_t&&(n.hoverIntent_t=clearTimeout(n.hoverIntent_t)),"mouseenter"===e.type?(v=t.pageX,i=t.pageY,a(n).on("mousemove.hoverIntent",s),n.hoverIntent_s||(n.hoverIntent_t=setTimeout(function(){I(t,n)},u.interval))):(a(n).off("mousemove.hoverIntent",s),n.hoverIntent_s&&(n.hoverIntent_t=setTimeout(function(){!function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,u.out.apply(t,[e])}(t,n)},u.timeout)))}var I=function(e,t){if(t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((v-o)*(v-o)+(i-r)*(i-r))<u.sensitivity)return a(t).off("mousemove.hoverIntent",s),t.hoverIntent_s=!0,u.over.apply(t,[e]);v=o,i=r,t.hoverIntent_t=setTimeout(function(){I(e,t)},u.interval)};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},u.selector)}}(jQuery);
/*! This file is auto-generated */
!function(V,q){var B=V(document),H=V(q),G=V(document.body);q.adminMenu={init:function(){},fold:function(){},restoreMenuState:function(){},toggle:function(){},favorites:function(){}},q.columns={init:function(){var n=this;V(".hide-column-tog","#adv-settings").click(function(){var e=V(this),t=e.val();e.prop("checked")?n.checked(t):n.unchecked(t),columns.saveManageColumnsState()})},saveManageColumnsState:function(){var e=this.hidden();V.post(ajaxurl,{action:"hidden-columns",hidden:e,screenoptionnonce:V("#screenoptionnonce").val(),page:pagenow})},checked:function(e){V(".column-"+e).removeClass("hidden"),this.colSpanChange(1)},unchecked:function(e){V(".column-"+e).addClass("hidden"),this.colSpanChange(-1)},hidden:function(){return V(".manage-column[id]").filter(".hidden").map(function(){return this.id}).get().join(",")},useCheckboxesForHidden:function(){this.hidden=function(){return V(".hide-column-tog").not(":checked").map(function(){var e=this.id;return e.substring(e,e.length-5)}).get().join(",")}},colSpanChange:function(e){var t,n=V("table").find(".colspanchange");n.length&&(t=parseInt(n.attr("colspan"),10)+e,n.attr("colspan",t.toString()))}},B.ready(function(){columns.init()}),q.validateForm=function(e){return!V(e).find(".form-required").filter(function(){return""===V(":input:visible",this).val()}).addClass("form-invalid").find(":input:visible").change(function(){V(this).closest(".form-invalid").removeClass("form-invalid")}).length},q.showNotice={warn:function(){var e=commonL10n.warnDelete||"";return!!confirm(e)},note:function(e){alert(e)}},q.screenMeta={element:null,toggles:null,page:null,init:function(){this.element=V("#screen-meta"),this.toggles=V("#screen-meta-links").find(".show-settings"),this.page=V("#wpcontent"),this.toggles.click(this.toggleEvent)},toggleEvent:function(){var e=V("#"+V(this).attr("aria-controls"));e.length&&(e.is(":visible")?screenMeta.close(e,V(this)):screenMeta.open(e,V(this)))},open:function(e,t){V("#screen-meta-links").find(".screen-meta-toggle").not(t.parent()).css("visibility","hidden"),e.parent().show(),e.slideDown("fast",function(){e.focus(),t.addClass("screen-meta-active").attr("aria-expanded",!0)}),B.trigger("screen:options:open")},close:function(e,t){e.slideUp("fast",function(){t.removeClass("screen-meta-active").attr("aria-expanded",!1),V(".screen-meta-toggle").css("visibility",""),e.parent().hide()}),B.trigger("screen:options:close")}},V(".contextual-help-tabs").delegate("a","click",function(e){var t,n=V(this);if(e.preventDefault(),n.is(".active a"))return!1;V(".contextual-help-tabs .active").removeClass("active"),n.parent("li").addClass("active"),t=V(n.attr("href")),V(".help-tab-content").not(t).removeClass("active").hide(),t.addClass("active").show()});var e,a=!1,r=V("#permalink_structure"),t=V(".permalink-structure input:radio"),l=V("#custom_selection"),n=V(".form-table.permalink-structure .available-structure-tags button");function c(e){-1!==r.val().indexOf(e.text().trim())?(e.attr("data-label",e.attr("aria-label")),e.attr("aria-label",e.attr("data-used")),e.attr("aria-pressed",!0),e.addClass("active")):e.attr("data-label")&&(e.attr("aria-label",e.attr("data-label")),e.attr("aria-pressed",!1),e.removeClass("active"))}function i(){B.trigger("wp-window-resized")}t.on("change",function(){"custom"!==this.value&&(r.val(this.value),n.each(function(){c(V(this))}))}),r.on("click input",function(){l.prop("checked",!0)}),r.on("focus",function(e){a=!0,V(this).off(e)}),n.each(function(){c(V(this))}),r.on("change",function(){n.each(function(){c(V(this))})}),n.on("click",function(){var e,t=r.val(),n=r[0].selectionStart,i=r[0].selectionEnd,o=V(this).text().trim(),s=V(this).attr("data-added");if(-1!==t.indexOf(o))return t=t.replace(o+"/",""),r.val("/"===t?"":t),V("#custom_selection_updated").text(s),void c(V(this));a||0!==n||0!==i||(n=i=t.length),l.prop("checked",!0),"/"!==t.substr(0,n).substr(-1)&&(o="/"+o),"/"!==t.substr(i,1)&&(o+="/"),r.val(t.substr(0,n)+o+t.substr(i)),V("#custom_selection_updated").text(s),c(V(this)),a&&r[0].setSelectionRange&&(e=(t.substr(0,n)+o).length,r[0].setSelectionRange(e,e),r.focus())}),B.ready(function(){var n,i,o,s,e,t,a,r,l,c,d,u=!1,p=V("input.current-page"),f=p.val(),h=/iPhone|iPad|iPod/.test(navigator.userAgent),m=-1!==navigator.userAgent.indexOf("Android"),v=V(document.documentElement).hasClass("ie8"),b=V("#adminmenuwrap"),g=V("#wpwrap"),w=V("#adminmenu"),k=V("#wp-responsive-overlay"),C=V("#wp-toolbar"),x=C.find('a[aria-haspopup="true"]'),y=V(".meta-box-sortables"),S=!1,D=V("#wpadminbar"),M=0,E=!1,T=!1,j=0,A=!1,_={window:H.height(),wpwrap:g.height(),adminbar:D.height(),menu:b.height()},I=V(".wp-header-end");function O(){var e=V("a.wp-has-current-submenu");"folded"===r?e.attr("aria-haspopup","true"):e.attr("aria-haspopup","false")}function U(e){var t,n,i,o,s,a,r=e.find(".wp-submenu");a=(o=e.offset().top)-(s=H.scrollTop())-30,n=60+(t=o+r.height()+1)-g.height(),(i=H.height()+s-50)<t-n&&(n=t-i),a<n&&(n=a),1<n?r.css("margin-top","-"+n+"px"):r.css("margin-top","")}function K(){V(".notice.is-dismissible").each(function(){var t=V(this),e=V('<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>'),n=commonL10n.dismiss||"";e.find(".screen-reader-text").text(n),e.on("click.wp-dismiss-notice",function(e){e.preventDefault(),t.fadeTo(100,0,function(){t.slideUp(100,function(){t.remove()})})}),t.append(e)})}function z(){l.prop("disabled",""===c.map(function(){return V(this).val()}).get().join(""))}function N(e){var t=H.scrollTop(),n=!e||"scroll"!==e.type;if(!(h||v||w.data("wp-responsive")))if(_.menu+_.adminbar<_.window||_.menu+_.adminbar+20>_.wpwrap)R();else{if(A=!0,_.menu+_.adminbar>_.window){if(t<0)return void(E||(T=!(E=!0),b.css({position:"fixed",top:"",bottom:""})));if(t+_.window>B.height()-1)return void(T||(E=!(T=!0),b.css({position:"fixed",top:"",bottom:0})));M<t?E?(E=!1,(j=b.offset().top-_.adminbar-(t-M))+_.menu+_.adminbar<t+_.window&&(j=t+_.window-_.menu-_.adminbar),b.css({position:"absolute",top:j,bottom:""})):!T&&b.offset().top+_.menu<t+_.window&&(T=!0,b.css({position:"fixed",top:"",bottom:0})):t<M?T?(T=!1,(j=b.offset().top-_.adminbar+(M-t))+_.menu>t+_.window&&(j=t),b.css({position:"absolute",top:j,bottom:""})):!E&&b.offset().top>=t+_.adminbar&&(E=!0,b.css({position:"fixed",top:"",bottom:""})):n&&(E=T=!1,0<(j=t+_.window-_.menu-_.adminbar-1)?b.css({position:"absolute",top:j,bottom:""}):R())}M=t}}function P(){_={window:H.height(),wpwrap:g.height(),adminbar:D.height(),menu:b.height()}}function R(){!h&&A&&(E=T=A=!1,b.css({position:"",top:"",bottom:""}))}function W(){P(),w.data("wp-responsive")?(G.removeClass("sticky-menu"),R()):_.menu+_.adminbar>_.window?(N(),G.removeClass("sticky-menu")):(G.addClass("sticky-menu"),R())}function L(){V(".aria-button-if-js").attr("role","button")}function F(){var e=!1;return q.innerWidth&&(e=Math.max(q.innerWidth,document.documentElement.clientWidth)),e}function Q(){var e=F()||961;r=e<=782?"responsive":G.hasClass("folded")||G.hasClass("auto-fold")&&e<=960&&782<e?"folded":"open",B.trigger("wp-menu-state-set",{state:r})}w.on("click.wp-submenu-head",".wp-submenu-head",function(e){V(e.target).parent().siblings("a").get(0).click()}),V("#collapse-button").on("click.collapse-menu",function(){var e=F()||961;V("#adminmenu div.wp-submenu").css("margin-top",""),r=e<960?G.hasClass("auto-fold")?(G.removeClass("auto-fold").removeClass("folded"),setUserSetting("unfold",1),setUserSetting("mfold","o"),"open"):(G.addClass("auto-fold"),setUserSetting("unfold",0),"folded"):G.hasClass("folded")?(G.removeClass("folded"),setUserSetting("mfold","o"),"open"):(G.addClass("folded"),setUserSetting("mfold","f"),"folded"),B.trigger("wp-collapse-menu",{state:r})}),B.on("wp-menu-state-set wp-collapse-menu wp-responsive-activate wp-responsive-deactivate",O),("ontouchstart"in q||/IEMobile\/[1-9]/.test(navigator.userAgent))&&(e=h?"touchstart":"click",G.on(e+".wp-mobile-hover",function(e){w.data("wp-responsive")||V(e.target).closest("#adminmenu").length||w.find("li.opensub").removeClass("opensub")}),w.find("a.wp-has-submenu").on(e+".wp-mobile-hover",function(e){var t=V(this).parent();w.data("wp-responsive")||t.hasClass("opensub")||t.hasClass("wp-menu-open")&&!(t.width()<40)||(e.preventDefault(),U(t),w.find("li.opensub").removeClass("opensub"),t.addClass("opensub"))})),h||m||(w.find("li.wp-has-submenu").hoverIntent({over:function(){var e=V(this),t=e.find(".wp-submenu"),n=parseInt(t.css("top"),10);isNaN(n)||-5<n||w.data("wp-responsive")||(U(e),w.find("li.opensub").removeClass("opensub"),e.addClass("opensub"))},out:function(){w.data("wp-responsive")||V(this).removeClass("opensub").find(".wp-submenu").css("margin-top","")},timeout:200,sensitivity:7,interval:90}),w.on("focus.adminmenu",".wp-submenu a",function(e){w.data("wp-responsive")||V(e.target).closest("li.menu-top").addClass("opensub")}).on("blur.adminmenu",".wp-submenu a",function(e){w.data("wp-responsive")||V(e.target).closest("li.menu-top").removeClass("opensub")}).find("li.wp-has-submenu.wp-not-current-submenu").on("focusin.adminmenu",function(){U(V(this))})),I.length||(I=V(".wrap h1, .wrap h2").first()),V("div.updated, div.error, div.notice").not(".inline, .below-h2").insertAfter(I),B.on("wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error",K),screenMeta.init(),G.on("click","tbody > tr > .check-column :checkbox",function(e){if("undefined"==e.shiftKey)return!0;if(e.shiftKey){if(!u)return!0;n=V(u).closest("form").find(":checkbox").filter(":visible:enabled"),i=n.index(u),o=n.index(this),s=V(this).prop("checked"),0<i&&0<o&&i!=o&&(i<o?n.slice(i,o):n.slice(o,i)).prop("checked",function(){return!!V(this).closest("tr").is(":visible")&&s})}var t=V(u=this).closest("tbody").find(":checkbox").filter(":visible:enabled").not(":checked");return V(this).closest("table").children("thead, tfoot").find(":checkbox").prop("checked",function(){return 0===t.length}),!0}),G.on("click.wp-toggle-checkboxes","thead .check-column :checkbox, tfoot .check-column :checkbox",function(e){var t=V(this),n=t.closest("table"),i=t.prop("checked"),o=e.shiftKey||t.data("wp-toggle");n.children("tbody").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!V(this).is(":hidden,:disabled")&&(o?!V(this).prop("checked"):!!i)}),n.children("thead,  tfoot").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!o&&!!i})}),V("#wpbody-content").on({focusin:function(){clearTimeout(t),a=V(this).find(".row-actions"),V(".row-actions").not(this).removeClass("visible"),a.addClass("visible")},focusout:function(){t=setTimeout(function(){a.removeClass("visible")},30)}},".has-row-actions"),V("tbody").on("click",".toggle-row",function(){V(this).closest("tr").toggleClass("is-expanded")}),V("#default-password-nag-no").click(function(){return setUserSetting("default_password_nag","hide"),V("div.default-password-nag").hide(),!1}),V("#newcontent").bind("keydown.wpevent_InsertTab",function(e){var t,n,i,o,s=e.target;if(27==e.keyCode)return e.preventDefault(),void V(s).data("tab-out",!0);9!=e.keyCode||e.ctrlKey||e.altKey||e.shiftKey||(V(s).data("tab-out")?V(s).data("tab-out",!1):(t=s.selectionStart,n=s.selectionEnd,i=s.value,document.selection?(s.focus(),document.selection.createRange().text="\t"):0<=t&&(o=this.scrollTop,s.value=i.substring(0,t).concat("\t",i.substring(n)),s.selectionStart=s.selectionEnd=t+1,this.scrollTop=o),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()))}),p.length&&p.closest("form").submit(function(){-1==V('select[name="action"]').val()&&-1==V('select[name="action2"]').val()&&p.val()==f&&p.val("1")}),V('.search-box input[type="search"], .search-box input[type="submit"]').mousedown(function(){V('select[name^="action"]').val("-1")}),V("#contextual-help-link, #show-settings-link").on("focus.scroll-into-view",function(e){e.target.scrollIntoView&&e.target.scrollIntoView(!1)}),(d=V("form.wp-upload-form")).length&&(l=d.find('input[type="submit"]'),c=d.find('input[type="file"]'),z(),c.on("change",z)),h||(H.on("scroll.pin-menu",N),B.on("tinymce-editor-init.pin-menu",function(e,t){t.on("wp-autoresize",P)})),q.wpResponsive={init:function(){var e=this;this.maybeDisableSortables=this.maybeDisableSortables.bind(this),B.on("wp-responsive-activate.wp-responsive",function(){e.activate()}).on("wp-responsive-deactivate.wp-responsive",function(){e.deactivate()}),V("#wp-admin-bar-menu-toggle a").attr("aria-expanded","false"),V("#wp-admin-bar-menu-toggle").on("click.wp-responsive",function(e){e.preventDefault(),D.find(".hover").removeClass("hover"),g.toggleClass("wp-responsive-open"),g.hasClass("wp-responsive-open")?(V(this).find("a").attr("aria-expanded","true"),V("#adminmenu a:first").focus()):V(this).find("a").attr("aria-expanded","false")}),w.on("click.wp-responsive","li.wp-has-submenu > a",function(e){w.data("wp-responsive")&&(V(this).parent("li").toggleClass("selected"),e.preventDefault())}),e.trigger(),B.on("wp-window-resized.wp-responsive",V.proxy(this.trigger,this)),H.on("load.wp-responsive",this.maybeDisableSortables),B.on("postbox-toggled",this.maybeDisableSortables),V("#screen-options-wrap input").on("click",this.maybeDisableSortables)},maybeDisableSortables:function(){(-1<navigator.userAgent.indexOf("AppleWebKit/")?H.width():q.innerWidth)<=782||y.find(".ui-sortable-handle:visible").length<=1&&jQuery(".columns-prefs-1 input").prop("checked")?this.disableSortables():this.enableSortables()},activate:function(){W(),G.hasClass("auto-fold")||G.addClass("auto-fold"),w.data("wp-responsive",1),this.disableSortables()},deactivate:function(){W(),w.removeData("wp-responsive"),this.maybeDisableSortables()},trigger:function(){var e=F();e&&(e<=782?S||(B.trigger("wp-responsive-activate"),S=!0):S&&(B.trigger("wp-responsive-deactivate"),S=!1),e<=480?this.enableOverlay():this.disableOverlay(),this.maybeDisableSortables())},enableOverlay:function(){0===k.length&&(k=V('<div id="wp-responsive-overlay"></div>').insertAfter("#wpcontent").hide().on("click.wp-responsive",function(){C.find(".menupop.hover").removeClass("hover"),V(this).hide()})),x.on("click.wp-responsive",function(){k.show()})},disableOverlay:function(){x.off("click.wp-responsive"),k.hide()},disableSortables:function(){if(y.length)try{y.sortable("disable"),y.find(".ui-sortable-handle").addClass("is-non-sortable")}catch(e){}},enableSortables:function(){if(y.length)try{y.sortable("enable"),y.find(".ui-sortable-handle").removeClass("is-non-sortable")}catch(e){}}},V(document).ajaxComplete(function(){L()}),B.on("wp-window-resized.set-menu-state",Q),B.on("wp-menu-state-set wp-collapse-menu",function(e,t){var n=V("#collapse-button"),i="true",o=commonL10n.collapseMenu;"folded"===t.state&&(i="false",o=commonL10n.expandMenu),n.attr({"aria-expanded":i,"aria-label":o})}),q.wpResponsive.init(),W(),Q(),O(),K(),L(),B.on("wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu",W),V(".wp-initial-focus").focus(),G.on("click",".js-update-details-toggle",function(){var e=V(this).closest(".js-update-details"),t=V("#"+e.data("update-details"));t.hasClass("update-details-moved")||t.insertAfter(e).addClass("update-details-moved"),t.toggle(),V(this).attr("aria-expanded",t.is(":visible"))})}),H.on("resize.wp-fire-once",function(){q.clearTimeout(e),e=q.setTimeout(i,200)}),function(){if("-ms-user-select"in document.documentElement.style&&navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(e)}}()}(jQuery,window);
/*! This file is auto-generated */
!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});

/*! This file is auto-generated */
!function(d,f,m){function p(e){var t;27===e.which&&(t=A(e.target,".menupop"))&&(t.querySelector(".menupop > .ab-item").focus(),w(t,"hover"))}function h(e){var t;13===e.which&&(A(e.target,".ab-sub-wrapper")||(t=A(e.target,".menupop"))&&(e.preventDefault(),E(t,"hover")?w(t,"hover"):L(t,"hover")))}function v(e){var t;13===e.which&&(t=e.target.getAttribute("href"),-1<m.userAgent.toLowerCase().indexOf("applewebkit")&&t&&"#"===t.charAt(0)&&setTimeout(function(){var e=d.getElementById(t.replace("#",""));e&&(e.setAttribute("tabIndex","0"),e.focus())},100))}function g(e,t){var n;A(t.target,".ab-sub-wrapper")||(t.preventDefault(),(n=A(t.target,".menupop"))&&(E(n,"hover")?w(n,"hover"):(S(e),L(n,"hover"))))}function b(e){var t,n=e.target.parentNode;if(n&&(t=n.querySelector(".shortlink-input")),t)return e.preventDefault&&e.preventDefault(),e.returnValue=!1,L(n,"selected"),t.focus(),t.select(),!(t.onblur=function(){w(n,"selected")})}function y(){if("sessionStorage"in f)try{for(var e in sessionStorage)-1<e.indexOf("wp-autosave-")&&sessionStorage.removeItem(e)}catch(e){}}function E(e,t){return!!e&&(e.classList&&e.classList.contains?e.classList.contains(t):!!e.className&&-1<e.className.split(" ").indexOf(t))}function L(e,t){e&&(e.classList&&e.classList.add?e.classList.add(t):E(e,t)||(e.className&&(e.className+=" "),e.className+=t))}function w(e,t){var n,r;if(e&&E(e,t))if(e.classList&&e.classList.remove)e.classList.remove(t);else{for(n=" "+t+" ",r=" "+e.className+" ";-1<r.indexOf(n);)r=r.replace(n,"");e.className=r.replace(/^[\s]+|[\s]+$/g,"")}}function S(e){if(e&&e.length)for(var t=0;t<e.length;t++)w(e[t],"hover")}function k(e){if(!e.target||"wpadminbar"===e.target.id||"wp-admin-bar-top-secondary"===e.target.id)try{f.scrollTo({top:-32,left:0,behavior:"smooth"})}catch(e){f.scrollTo(0,-32)}}function A(e,t){for(f.Element.prototype.matches||(f.Element.prototype.matches=f.Element.prototype.matchesSelector||f.Element.prototype.mozMatchesSelector||f.Element.prototype.msMatchesSelector||f.Element.prototype.oMatchesSelector||f.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==d;e=e.parentNode)if(e.matches(t))return e;return null}d.addEventListener("DOMContentLoaded",function(){var n,e,t,r,o,a,s,i,c,l,u=d.getElementById("wpadminbar");if(u&&"querySelectorAll"in u){n=u.querySelectorAll("li.menupop"),e=u.querySelectorAll(".ab-item"),t=d.getElementById("wp-admin-bar-logout"),r=d.getElementById("adminbarsearch"),o=d.getElementById("wp-admin-bar-get-shortlink"),a=u.querySelector(".screen-reader-shortcut"),s=/Mobile\/.+Safari/.test(m.userAgent)?"touchstart":"click",i=/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/,w(u,"nojs"),"ontouchstart"in f&&(d.body.addEventListener(s,function(e){A(e.target,"li.menupop")||S(n)}),u.addEventListener("touchstart",function e(){for(var t=0;t<n.length;t++)n[t].addEventListener("click",g.bind(null,n));u.removeEventListener("touchstart",e)})),u.addEventListener("click",k);for(l=0;l<n.length;l++)f.hoverintent(n[l],L.bind(null,n[l],"hover"),w.bind(null,n[l],"hover")).options({timeout:180}),n[l].addEventListener("keydown",h);for(l=0;l<e.length;l++)e[l].addEventListener("keydown",p);r&&((c=d.getElementById("adminbar-search")).addEventListener("focus",function(){L(r,"adminbar-focused")}),c.addEventListener("blur",function(){w(r,"adminbar-focused")})),a&&a.addEventListener("keydown",v),o&&o.addEventListener("click",b),f.location.hash&&f.scrollBy(0,-32),m.userAgent&&i.test(m.userAgent)&&!E(d.body,"no-font-face")&&L(d.body,"no-font-face"),t&&t.addEventListener("click",y)}})}(document,window,navigator);
/**
 * Attempt to re-color SVG icons used in the admin menu or the toolbar
 *
 * @output wp-admin/js/svg-painter.js
 */

window.wp = window.wp || {};

wp.svgPainter = ( function( $, window, document, undefined ) {
	'use strict';
	var selector, base64, painter,
		colorscheme = {},
		elements = [];

	$(document).ready( function() {
		// Detection for browser SVG capability.
		if ( document.implementation.hasFeature( 'http://www.w3.org/TR/SVG11/feature#Image', '1.1' ) ) {
			$( document.body ).removeClass( 'no-svg' ).addClass( 'svg' );
			wp.svgPainter.init();
		}
	});

	/**
	 * Needed only for IE9
	 *
	 * Based on jquery.base64.js 0.0.3 - https://github.com/yckart/jquery.base64.js
	 *
	 * Based on: https://gist.github.com/Yaffle/1284012
	 *
	 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
	 * Licensed under the MIT license
	 * http://www.opensource.org/licenses/mit-license.php
	 */
	base64 = ( function() {
		var c,
			b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
			a256 = '',
			r64 = [256],
			r256 = [256],
			i = 0;

		function init() {
			while( i < 256 ) {
				c = String.fromCharCode(i);
				a256 += c;
				r256[i] = i;
				r64[i] = b64.indexOf(c);
				++i;
			}
		}

		function code( s, discard, alpha, beta, w1, w2 ) {
			var tmp, length,
				buffer = 0,
				i = 0,
				result = '',
				bitsInBuffer = 0;

			s = String(s);
			length = s.length;

			while( i < length ) {
				c = s.charCodeAt(i);
				c = c < 256 ? alpha[c] : -1;

				buffer = ( buffer << w1 ) + c;
				bitsInBuffer += w1;

				while( bitsInBuffer >= w2 ) {
					bitsInBuffer -= w2;
					tmp = buffer >> bitsInBuffer;
					result += beta.charAt(tmp);
					buffer ^= tmp << bitsInBuffer;
				}
				++i;
			}

			if ( ! discard && bitsInBuffer > 0 ) {
				result += beta.charAt( buffer << ( w2 - bitsInBuffer ) );
			}

			return result;
		}

		function btoa( plain ) {
			if ( ! c ) {
				init();
			}

			plain = code( plain, false, r256, b64, 8, 6 );
			return plain + '===='.slice( ( plain.length % 4 ) || 4 );
		}

		function atob( coded ) {
			var i;

			if ( ! c ) {
				init();
			}

			coded = coded.replace( /[^A-Za-z0-9\+\/\=]/g, '' );
			coded = String(coded).split('=');
			i = coded.length;

			do {
				--i;
				coded[i] = code( coded[i], true, r64, a256, 6, 8 );
			} while ( i > 0 );

			coded = coded.join('');
			return coded;
		}

		return {
			atob: atob,
			btoa: btoa
		};
	})();

	return {
		init: function() {
			painter = this;
			selector = $( '#adminmenu .wp-menu-image, #wpadminbar .ab-item' );

			this.setColors();
			this.findElements();
			this.paint();
		},

		setColors: function( colors ) {
			if ( typeof colors === 'undefined' && typeof window._wpColorScheme !== 'undefined' ) {
				colors = window._wpColorScheme;
			}

			if ( colors && colors.icons && colors.icons.base && colors.icons.current && colors.icons.focus ) {
				colorscheme = colors.icons;
			}
		},

		findElements: function() {
			selector.each( function() {
				var $this = $(this), bgImage = $this.css( 'background-image' );

				if ( bgImage && bgImage.indexOf( 'data:image/svg+xml;base64' ) != -1 ) {
					elements.push( $this );
				}
			});
		},

		paint: function() {
			// Loop through all elements.
			$.each( elements, function( index, $element ) {
				var $menuitem = $element.parent().parent();

				if ( $menuitem.hasClass( 'current' ) || $menuitem.hasClass( 'wp-has-current-submenu' ) ) {
					// Paint icon in 'current' color.
					painter.paintElement( $element, 'current' );
				} else {
					// Paint icon in base color.
					painter.paintElement( $element, 'base' );

					// Set hover callbacks.
					$menuitem.hover(
						function() {
							painter.paintElement( $element, 'focus' );
						},
						function() {
							// Match the delay from hoverIntent.
							window.setTimeout( function() {
								painter.paintElement( $element, 'base' );
							}, 100 );
						}
					);
				}
			});
		},

		paintElement: function( $element, colorType ) {
			var xml, encoded, color;

			if ( ! colorType || ! colorscheme.hasOwnProperty( colorType ) ) {
				return;
			}

			color = colorscheme[ colorType ];

			// Only accept hex colors: #101 or #101010.
			if ( ! color.match( /^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i ) ) {
				return;
			}

			xml = $element.data( 'wp-ui-svg-' + color );

			if ( xml === 'none' ) {
				return;
			}

			if ( ! xml ) {
				encoded = $element.css( 'background-image' ).match( /.+data:image\/svg\+xml;base64,([A-Za-z0-9\+\/\=]+)/ );

				if ( ! encoded || ! encoded[1] ) {
					$element.data( 'wp-ui-svg-' + color, 'none' );
					return;
				}

				try {
					if ( 'atob' in window ) {
						xml = window.atob( encoded[1] );
					} else {
						xml = base64.atob( encoded[1] );
					}
				} catch ( error ) {}

				if ( xml ) {
					// Replace `fill` attributes.
					xml = xml.replace( /fill="(.+?)"/g, 'fill="' + color + '"');

					// Replace `style` attributes.
					xml = xml.replace( /style="(.+?)"/g, 'style="fill:' + color + '"');

					// Replace `fill` properties in `<style>` tags.
					xml = xml.replace( /fill:.*?;/g, 'fill: ' + color + ';');

					if ( 'btoa' in window ) {
						xml = window.btoa( xml );
					} else {
						xml = base64.btoa( xml );
					}

					$element.data( 'wp-ui-svg-' + color, xml );
				} else {
					$element.data( 'wp-ui-svg-' + color, 'none' );
					return;
				}
			}

			$element.attr( 'style', 'background-image: url("data:image/svg+xml;base64,' + xml + '") !important;' );
		}
	};

})( jQuery, window, document );

/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.hooks=function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=433)}({18:function(n,r,e){"use strict";var t=e(25);var o=e(35),i=e(27);function u(n){return function(n){if(Array.isArray(n))return Object(t.a)(n)}(n)||Object(o.a)(n)||Object(i.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(r,"a",(function(){return u}))},25:function(n,r,e){"use strict";function t(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}e.d(r,"a",(function(){return t}))},27:function(n,r,e){"use strict";e.d(r,"a",(function(){return o}));var t=e(25);function o(n,r){if(n){if("string"==typeof n)return Object(t.a)(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(t.a)(n,r):void 0}}},35:function(n,r,e){"use strict";function t(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}e.d(r,"a",(function(){return t}))},433:function(n,r,e){"use strict";e.r(r);var t=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(n){return function(r,e,i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(o(r)&&t(e))if("function"==typeof i)if("number"==typeof u){var c={callback:i,priority:u,namespace:e};if(n[r]){var a,l=n[r].handlers;for(a=l.length;a>0&&!(u>=l[a-1].priority);a--);a===l.length?l[a]=c:l.splice(a,0,c),(n.__current||[]).forEach((function(n){n.name===r&&n.currentIndex>=a&&n.currentIndex++}))}else n[r]={handlers:[c],runs:0};"hookAdded"!==r&&F("hookAdded",r,e,i,u)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var u=function(n,r){return function(e,i){if(o(e)&&(r||t(i))){if(!n[e])return 0;var u=0;if(r)u=n[e].handlers.length,n[e]={runs:n[e].runs,handlers:[]};else for(var c=n[e].handlers,a=function(r){c[r].namespace===i&&(c.splice(r,1),u++,(n.__current||[]).forEach((function(n){n.name===e&&n.currentIndex>=r&&n.currentIndex--})))},l=c.length-1;l>=0;l--)a(l);return"hookRemoved"!==e&&F("hookRemoved",e,i),u}}};var c=function(n){return function(r,e){return void 0!==e?r in n&&n[r].handlers.some((function(n){return n.namespace===e})):r in n}};e(18);var a=function(n,r){return function(e){n[e]||(n[e]={handlers:[],runs:0}),n[e].runs++;var t=n[e].handlers;for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];if(!t||!t.length)return r?i[0]:void 0;var c={name:e,currentIndex:0};for(n.__current.push(c);c.currentIndex<t.length;){var a=t[c.currentIndex],l=a.callback.apply(null,i);r&&(i[0]=l),c.currentIndex++}return n.__current.pop(),r?i[0]:void 0}};var l=function(n){return function(){return n.__current&&n.__current.length?n.__current[n.__current.length-1].name:null}};var s=function(n){return function(r){return void 0===r?void 0!==n.__current[0]:!!n.__current[0]&&r===n.__current[0].name}};var d=function(n){return function(r){if(o(r))return n[r]&&n[r].runs?n[r].runs:0}};var f=function(){var n=Object.create(null),r=Object.create(null);return n.__current=[],r.__current=[],{addAction:i(n),addFilter:i(r),removeAction:u(n),removeFilter:u(r),hasAction:c(n),hasFilter:c(r),removeAllActions:u(n,!0),removeAllFilters:u(r,!0),doAction:a(n),applyFilters:a(r,!0),currentAction:l(n),currentFilter:l(r),doingAction:s(n),doingFilter:s(r),didAction:d(n),didFilter:d(r),actions:n,filters:r}};e.d(r,"addAction",(function(){return h})),e.d(r,"addFilter",(function(){return v})),e.d(r,"removeAction",(function(){return m})),e.d(r,"removeFilter",(function(){return A})),e.d(r,"hasAction",(function(){return b})),e.d(r,"hasFilter",(function(){return y})),e.d(r,"removeAllActions",(function(){return _})),e.d(r,"removeAllFilters",(function(){return g})),e.d(r,"doAction",(function(){return F})),e.d(r,"applyFilters",(function(){return j})),e.d(r,"currentAction",(function(){return O})),e.d(r,"currentFilter",(function(){return k})),e.d(r,"doingAction",(function(){return x})),e.d(r,"doingFilter",(function(){return I})),e.d(r,"didAction",(function(){return S})),e.d(r,"didFilter",(function(){return w})),e.d(r,"actions",(function(){return T})),e.d(r,"filters",(function(){return M})),e.d(r,"createHooks",(function(){return f}));var p=f(),h=p.addAction,v=p.addFilter,m=p.removeAction,A=p.removeFilter,b=p.hasAction,y=p.hasFilter,_=p.removeAllActions,g=p.removeAllFilters,F=p.doAction,j=p.applyFilters,O=p.currentAction,k=p.currentFilter,x=p.doingAction,I=p.doingFilter,S=p.didAction,w=p.didFilter,T=p.actions,M=p.filters}});
/*! This file is auto-generated */
!function(f,w){w.wp=w.wp||{},w.wp.heartbeat=new function(){var e,t,n,a,r=f(document),i={suspend:!1,suspendEnabled:!0,screenId:"",url:"",lastTick:0,queue:{},mainInterval:60,tempInterval:0,originalInterval:0,minimalInterval:0,countdown:0,connecting:!1,connectionError:!1,errorcount:0,hasConnected:!1,hasFocus:!0,userActivity:0,userActivityEvents:!1,checkFocusTimer:0,beatTimer:0};function o(){return(new Date).getTime()}function c(e){var t,n=e.src;if(n&&/^https?:\/\//.test(n)&&(t=w.location.origin?w.location.origin:w.location.protocol+"//"+w.location.host,0!==n.indexOf(t)))return!1;try{if(e.contentWindow.document)return!0}catch(e){}return!1}function s(){i.hasFocus&&!document.hasFocus()?m():!i.hasFocus&&document.hasFocus()&&v()}function u(e,t){var n;if(e){switch(e){case"abort":break;case"timeout":n=!0;break;case"error":if(503===t&&i.hasConnected){n=!0;break}case"parsererror":case"empty":case"unknown":i.errorcount++,2<i.errorcount&&i.hasConnected&&(n=!0)}n&&!b()&&(i.connectionError=!0,r.trigger("heartbeat-connection-lost",[e,t]),wp.hooks.doAction("heartbeat.connection-lost",e,t))}}function l(){var e,t;i.connecting||i.suspend||(i.lastTick=o(),t=f.extend({},i.queue),i.queue={},r.trigger("heartbeat-send",[t]),wp.hooks.doAction("heartbeat.send",t),e={data:t,interval:i.tempInterval?i.tempInterval/1e3:i.mainInterval/1e3,_nonce:"object"==typeof w.heartbeatSettings?w.heartbeatSettings.nonce:"",action:"heartbeat",screen_id:i.screenId,has_focus:i.hasFocus},"customize"===i.screenId&&(e.wp_customize="on"),i.connecting=!0,i.xhr=f.ajax({url:i.url,type:"post",timeout:3e4,data:e,dataType:"json"}).always(function(){i.connecting=!1,d()}).done(function(e,t,n){var a;e?(i.hasConnected=!0,b()&&(i.errorcount=0,i.connectionError=!1,r.trigger("heartbeat-connection-restored"),wp.hooks.doAction("heartbeat.connection-restored")),e.nonces_expired&&(r.trigger("heartbeat-nonces-expired"),wp.hooks.doAction("heartbeat.nonces-expired")),e.heartbeat_interval&&(a=e.heartbeat_interval,delete e.heartbeat_interval),e.heartbeat_nonce&&"object"==typeof w.heartbeatSettings&&(w.heartbeatSettings.nonce=e.heartbeat_nonce,delete e.heartbeat_nonce),e.rest_nonce&&"object"==typeof w.wpApiSettings&&(w.wpApiSettings.nonce=e.rest_nonce),r.trigger("heartbeat-tick",[e,t,n]),wp.hooks.doAction("heartbeat.tick",e,t,n),a&&I(a)):u("empty")}).fail(function(e,t,n){u(t||"unknown",e.status),r.trigger("heartbeat-error",[e,t,n]),wp.hooks.doAction("heartbeat.error",e,t,n)}))}function d(){var e=o()-i.lastTick,t=i.mainInterval;i.suspend||(i.hasFocus?0<i.countdown&&i.tempInterval&&(t=i.tempInterval,i.countdown--,i.countdown<1&&(i.tempInterval=0)):t=12e4,i.minimalInterval&&t<i.minimalInterval&&(t=i.minimalInterval),w.clearTimeout(i.beatTimer),e<t?i.beatTimer=w.setTimeout(function(){l()},t-e):l())}function m(){i.hasFocus=!1}function v(){i.userActivity=o(),i.suspend=!1,i.hasFocus||(i.hasFocus=!0,d())}function h(){i.userActivityEvents=!1,r.off(".wp-heartbeat-active"),f("iframe").each(function(e,t){c(t)&&f(t.contentWindow).off(".wp-heartbeat-active")}),v()}function p(){var e=i.userActivity?o()-i.userActivity:0;3e5<e&&i.hasFocus&&m(),(i.suspendEnabled&&6e5<e||36e5<e)&&(i.suspend=!0),i.userActivityEvents||(r.on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){h()}),f("iframe").each(function(e,t){c(t)&&f(t.contentWindow).on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){h()})}),i.userActivityEvents=!0)}function b(){return i.connectionError}function I(e,t){var n,a=i.tempInterval?i.tempInterval:i.mainInterval;if(e){switch(e){case"fast":case 5:n=5e3;break;case 15:n=15e3;break;case 30:n=3e4;break;case 60:n=6e4;break;case 120:n=12e4;break;case"long-polling":return i.mainInterval=0;default:n=i.originalInterval}i.minimalInterval&&n<i.minimalInterval&&(n=i.minimalInterval),5e3===n?(t=(t=parseInt(t,10)||30)<1||30<t?30:t,i.countdown=t,i.tempInterval=n):(i.countdown=0,i.tempInterval=0,i.mainInterval=n),n!==a&&d()}return i.tempInterval?i.tempInterval/1e3:i.mainInterval/1e3}return"string"==typeof w.pagenow&&(i.screenId=w.pagenow),"string"==typeof w.ajaxurl&&(i.url=w.ajaxurl),"object"==typeof w.heartbeatSettings&&(e=w.heartbeatSettings,!i.url&&e.ajaxurl&&(i.url=e.ajaxurl),e.interval&&(i.mainInterval=e.interval,i.mainInterval<15?i.mainInterval=15:120<i.mainInterval&&(i.mainInterval=120)),e.minimalInterval&&(e.minimalInterval=parseInt(e.minimalInterval,10),i.minimalInterval=0<e.minimalInterval&&e.minimalInterval<=600?1e3*e.minimalInterval:0),i.minimalInterval&&i.mainInterval<i.minimalInterval&&(i.mainInterval=i.minimalInterval),i.screenId||(i.screenId=e.screenId||"front"),"disable"===e.suspension&&(i.suspendEnabled=!1)),i.mainInterval=1e3*i.mainInterval,i.originalInterval=i.mainInterval,void 0!==document.hidden?(t="hidden",a="visibilitychange",n="visibilityState"):void 0!==document.msHidden?(t="msHidden",a="msvisibilitychange",n="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",a="webkitvisibilitychange",n="webkitVisibilityState"),t&&(document[t]&&(i.hasFocus=!1),r.on(a+".wp-heartbeat",function(){"hidden"===document[n]?(m(),w.clearInterval(i.checkFocusTimer)):(v(),document.hasFocus&&(i.checkFocusTimer=w.setInterval(s,1e4)))})),document.hasFocus&&(i.checkFocusTimer=w.setInterval(s,1e4)),f(w).on("unload.wp-heartbeat",function(){i.suspend=!0,i.xhr&&4!==i.xhr.readyState&&i.xhr.abort()}),w.setInterval(p,3e4),r.ready(function(){i.lastTick=o(),d()}),{hasFocus:function(){return i.hasFocus},connectNow:function(){i.lastTick=0,d()},disableSuspend:function(){i.suspendEnabled=!1},interval:I,hasConnectionError:b,enqueue:function(e,t,n){return!!e&&((!n||!this.isQueued(e))&&(i.queue[e]=t,!0))},dequeue:function(e){e&&delete i.queue[e]},isQueued:function(e){if(e)return i.queue.hasOwnProperty(e)},getQueuedItem:function(e){if(e)return this.isQueued(e)?i.queue[e]:void 0}}}}(jQuery,window);
/*! This file is auto-generated */
!function(h){var d,t;function i(){h(window).off("beforeunload.wp-auth-check"),"undefined"==typeof adminpage||"post-php"!==adminpage&&"post-new-php"!==adminpage||"undefined"==typeof wp||!wp.heartbeat||(h(document).off("heartbeat-tick.wp-auth-check"),wp.heartbeat.connectNow()),d.fadeOut(200,function(){d.addClass("hidden").css("display",""),h("#wp-auth-check-frame").remove(),h("body").removeClass("modal-open")})}function n(){var e=parseInt(window.authcheckL10n.interval,10)||180;t=(new Date).getTime()+1e3*e}h(document).on("heartbeat-tick.wp-auth-check",function(e,a){"wp-auth-check"in a&&(n(),!a["wp-auth-check"]&&d.hasClass("hidden")?function(){var e,t=h("#wp-auth-check"),n=h("#wp-auth-check-form"),c=d.find(".wp-auth-fallback-expired"),o=!1;n.length&&(h(window).on("beforeunload.wp-auth-check",function(e){e.originalEvent.returnValue=window.authcheckL10n.beforeunload}),(e=h('<iframe id="wp-auth-check-frame" frameborder="0">').attr("title",c.text())).on("load",function(){var e,a;o=!0,n.removeClass("loading");try{e=(a=h(this).contents().find("body")).height()}catch(e){return d.addClass("fallback"),t.css("max-height",""),n.remove(),void c.focus()}e?a&&a.hasClass("interim-login-success")?i():t.css("max-height",e+40+"px"):a&&a.length||(d.addClass("fallback"),t.css("max-height",""),n.remove(),c.focus())}).attr("src",n.data("src")),n.append(e)),h("body").addClass("modal-open"),d.removeClass("hidden"),e?(e.focus(),setTimeout(function(){o||(d.addClass("fallback"),n.remove(),c.focus())},1e4)):c.focus()}():a["wp-auth-check"]&&!d.hasClass("hidden")&&i())}).on("heartbeat-send.wp-auth-check",function(e,a){(new Date).getTime()>t&&(a["wp-auth-check"]=!0)}).ready(function(){n(),(d=h("#wp-auth-check-wrap")).find(".wp-auth-check-close").on("click",function(){i()})})}(jQuery);
