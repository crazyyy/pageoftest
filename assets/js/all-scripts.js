/*! UIkit 2.6.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */

!function(a){if("function"==typeof define&&define.amd&&define("uikit",function(){var b=a(window,window.jQuery,window.document);return b.load=function(a,c,d,e){var f,g=a.split(","),h=[],i=(e.config&&e.config.uikit&&e.config.uikit.base?e.config.uikit.base:"").replace(/\/+$/g,"");if(!i)throw new Error("Please define base path to uikit in the requirejs config.");for(f=0;f<g.length;f+=1){var j=g[f].replace(/\./g,"/");h.push(i+"/js/addons/"+j)}c(h,function(){d(b)})},b}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&a(window,window.jQuery,window.document)}(function(a,b,c){"use strict";var d=b.UIkit||{},e=b("html"),f=b(window);return d.fn?d:(d.version="2.6.0",d.fn=function(a,c){var e=arguments,f=a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),g=f[1],h=f[2];return d[g]?this.each(function(){var a=b(this),f=a.data(g);f||a.data(g,f=new d[g](this,h?void 0:c)),h&&f[h].apply(f,Array.prototype.slice.call(e,1))}):(b.error("UIkit component ["+g+"] does not exist."),this)},d.support={},d.support.transition=function(){var a=function(){var a,b=c.body||c.documentElement,d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(a in d)if(void 0!==b.style[a])return d[a]}();return a&&{end:a}}(),d.support.animation=function(){var a=function(){var a,b=c.body||c.documentElement,d={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(a in d)if(void 0!==b.style[a])return d[a]}();return a&&{end:a}}(),d.support.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.msRequestAnimationFrame||a.oRequestAnimationFrame||function(b){a.setTimeout(b,1e3/60)},d.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||a.DocumentTouch&&document instanceof a.DocumentTouch||a.navigator.msPointerEnabled&&a.navigator.msMaxTouchPoints>0||a.navigator.pointerEnabled&&a.navigator.maxTouchPoints>0||!1,d.support.mutationobserver=a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver||null,d.Utils={},d.Utils.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},d.Utils.removeCssRules=function(a){var b,c,d,e,f,g,h,i,j,k;a&&setTimeout(function(){try{for(k=document.styleSheets,e=0,h=k.length;h>e;e++){for(d=k[e],c=[],d.cssRules=d.cssRules,b=f=0,i=d.cssRules.length;i>f;b=++f)d.cssRules[b].type===CSSRule.STYLE_RULE&&a.test(d.cssRules[b].selectorText)&&c.unshift(b);for(g=0,j=c.length;j>g;g++)d.deleteRule(c[g])}}catch(l){}},0)},d.Utils.isInView=function(a,c){var d=b(a);if(!d.is(":visible"))return!1;var e=f.scrollLeft(),g=f.scrollTop(),h=d.offset(),i=h.left,j=h.top;return c=b.extend({topoffset:0,leftoffset:0},c),j+d.height()>=g&&j-c.topoffset<=g+f.height()&&i+d.width()>=e&&i-c.leftoffset<=e+f.width()?!0:!1},d.Utils.options=function(a){if(b.isPlainObject(a))return a;var c=a?a.indexOf("{"):-1,d={};if(-1!=c)try{d=new Function("","var json = "+a.substr(c)+"; return JSON.parse(JSON.stringify(json));")()}catch(e){}return d},d.Utils.template=function(a,b){for(var c,d,e,f,g=a.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),h=0,i=[],j=0;h<g.length;){if(c=g[h],c.match(/\{\{\s*(.+?)\s*\}\}/))switch(h+=1,c=g[h],d=c[0],e=c.substring(c.match(/^(\^|\#|\!|\~|\:)/)?1:0),d){case"~":i.push("for(var $i=0;$i<"+e+".length;$i++) { var $item = "+e+"[$i];"),j++;break;case":":i.push("for(var $key in "+e+") { var $val = "+e+"[$key];"),j++;break;case"#":i.push("if("+e+") {"),j++;break;case"^":i.push("if(!"+e+") {"),j++;break;case"/":i.push("}"),j--;break;case"!":i.push("__ret.push("+e+");");break;default:i.push("__ret.push(escape("+e+"));")}else i.push("__ret.push('"+c.replace(/\'/g,"\\'")+"');");h+=1}f=["var __ret = [];","try {","with($data){",j?'__ret = ["Not all blocks are closed correctly."]':i.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n");var k=new Function("$data",f);return b?k(b):k},d.Utils.events={},d.Utils.events.click=d.support.touch?"tap":"click",b.UIkit=d,b.fn.uk=d.fn,b.UIkit.langdirection="rtl"==e.attr("dir")?"right":"left",b(function(){if(b(document).trigger("uk-domready"),d.support.mutationobserver){try{var a=new d.support.mutationobserver(d.Utils.debounce(function(){b(document).trigger("uk-domready")},300));a.observe(document.body,{childList:!0,subtree:!0})}catch(c){}d.support.touch&&d.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/)}}),e.addClass(d.support.touch?"uk-touch":"uk-notouch"),d)}),function(a,b){"use strict";var c=a(window),d="resize orientationchange",e=[],f=function(g,h){var i=this,j=a(g);j.data("stackMargin")||(this.element=j,this.columns=this.element.children(),this.options=a.extend({},f.defaults,h),this.columns.length&&(c.on(d,function(){var d=function(){i.process()};return a(function(){d(),c.on("load",d)}),b.Utils.debounce(d,150)}()),a(document).on("uk-domready",function(){i.columns=i.element.children(),i.process()}),this.element.data("stackMargin",this),e.push(this)))};a.extend(f.prototype,{process:function(){var b=this;this.revert();var c=!1,d=this.columns.filter(":visible:first"),e=d.length?d.offset().top:!1;if(e!==!1)return this.columns.each(function(){var d=a(this);d.is(":visible")&&(c?d.addClass(b.options.cls):d.offset().top!=e&&(d.addClass(b.options.cls),c=!0))}),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),f.defaults={cls:"uk-margin-small-top"},b.stackMargin=f,a(document).on("uk-domready",function(){a("[data-uk-margin]").each(function(){var c,d=a(this);d.data("stackMargin")||(c=new f(d,b.Utils.options(d.attr("data-uk-margin"))))})}),a(document).on("uk-check-display",function(){e.forEach(function(a){a.element.is(":visible")&&a.process()})})}(jQuery,jQuery.UIkit),function(a){function b(a,b,c,d){return Math.abs(a-b)>=Math.abs(c-d)?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function c(){j=null,l.last&&(l.el.trigger("longTap"),l={})}function d(){j&&clearTimeout(j),j=null}function e(){g&&clearTimeout(g),h&&clearTimeout(h),i&&clearTimeout(i),j&&clearTimeout(j),g=h=i=j=null,l={}}function f(a){return a.pointerType==a.MSPOINTER_TYPE_TOUCH&&a.isPrimary}var g,h,i,j,k,l={},m=750;a(function(){var n,o,p,q=0,r=0;"MSGesture"in window&&(k=new MSGesture,k.target=document.body),a(document).bind("MSGestureEnd",function(a){var b=a.originalEvent.velocityX>1?"Right":a.originalEvent.velocityX<-1?"Left":a.originalEvent.velocityY>1?"Down":a.originalEvent.velocityY<-1?"Up":null;b&&(l.el.trigger("swipe"),l.el.trigger("swipe"+b))}).on("touchstart MSPointerDown",function(b){("MSPointerDown"!=b.type||f(b.originalEvent))&&(p="MSPointerDown"==b.type?b:b.originalEvent.touches[0],n=Date.now(),o=n-(l.last||n),l.el=a("tagName"in p.target?p.target:p.target.parentNode),g&&clearTimeout(g),l.x1=p.pageX,l.y1=p.pageY,o>0&&250>=o&&(l.isDoubleTap=!0),l.last=n,j=setTimeout(c,m),k&&"MSPointerDown"==b.type&&k.addPointer(b.originalEvent.pointerId))}).on("touchmove MSPointerMove",function(a){("MSPointerMove"!=a.type||f(a.originalEvent))&&(p="MSPointerMove"==a.type?a:a.originalEvent.touches[0],d(),l.x2=p.pageX,l.y2=p.pageY,q+=Math.abs(l.x1-l.x2),r+=Math.abs(l.y1-l.y2))}).on("touchend MSPointerUp",function(c){("MSPointerUp"!=c.type||f(c.originalEvent))&&(d(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?i=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+b(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(isNaN(q)||30>q&&30>r?h=setTimeout(function(){var b=a.Event("tap");b.cancelTouch=e,l.el.trigger(b),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):g=setTimeout(function(){g=null,l.el.trigger("singleTap"),l={}},250)},0):l={},q=r=0))}).on("touchcancel MSPointerCancel",e),a(window).on("scroll",e)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(c){return a(this).on(b,c)}})}(jQuery),function(a,b){"use strict";var c=function(b,d){var e=this;this.options=a.extend({},c.defaults,d),this.element=a(b),this.element.data("alert")||(this.element.on("click",this.options.trigger,function(a){a.preventDefault(),e.close()}),this.element.data("alert",this))};a.extend(c.prototype,{close:function(){function a(){b.trigger("closed").remove()}var b=this.element.trigger("close");this.options.fade?b.css("overflow","hidden").css("max-height",b.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,a):a()}}),c.defaults={fade:!0,duration:200,trigger:".uk-alert-close"},b.alert=c,a(document).on("click.alert.uikit","[data-uk-alert]",function(d){var e=a(this);if(!e.data("alert")){var f=new c(e,b.Utils.options(e.data("uk-alert")));a(d.target).is(e.data("alert").options.trigger)&&(d.preventDefault(),f.close())}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);f.data("buttonRadio")||(this.options=a.extend({},c.defaults,d),this.element=f.on("click",this.options.target,function(b){b.preventDefault(),f.find(e.options.target).not(this).removeClass("uk-active").blur(),f.trigger("change",[a(this).addClass("uk-active")])}),this.element.data("buttonRadio",this))};a.extend(c.prototype,{getSelected:function(){this.element.find(".uk-active")}}),c.defaults={target:".uk-button"};var d=function(b,c){var e=a(b);e.data("buttonCheckbox")||(this.options=a.extend({},d.defaults,c),this.element=e.on("click",this.options.target,function(b){b.preventDefault(),e.trigger("change",[a(this).toggleClass("uk-active").blur()])}),this.element.data("buttonCheckbox",this))};a.extend(d.prototype,{getSelected:function(){this.element.find(".uk-active")}}),d.defaults={target:".uk-button"};var e=function(b,c){var d=this,f=a(b);f.data("button")||(this.options=a.extend({},e.defaults,c),this.element=f.on("click",function(a){a.preventDefault(),d.toggle(),f.trigger("change",[f.blur().hasClass("uk-active")])}),this.element.data("button",this))};a.extend(e.prototype,{options:{},toggle:function(){this.element.toggleClass("uk-active")}}),e.defaults={},b.button=e,b.buttonCheckbox=d,b.buttonRadio=c,a(document).on("click.buttonradio.uikit","[data-uk-button-radio]",function(d){var e=a(this);if(!e.data("buttonRadio")){var f=new c(e,b.Utils.options(e.attr("data-uk-button-radio")));a(d.target).is(f.options.target)&&a(d.target).trigger("click")}}),a(document).on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(c){var e=a(this);if(!e.data("buttonCheckbox")){var f=new d(e,b.Utils.options(e.attr("data-uk-button-checkbox")));a(c.target).is(f.options.target)&&a(c.target).trigger("click")}}),a(document).on("click.button.uikit","[data-uk-button]",function(){var b=a(this);if(!b.data("button")){{new e(b,b.attr("data-uk-button"))}b.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=!1,d=function(e,f){var g=this,h=a(e);h.data("dropdown")||(this.options=a.extend({},d.defaults,f),this.element=h,this.dropdown=this.element.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?a(this.options.justify):!1,this.boundary=a(this.options.boundary),this.boundary.length||(this.boundary=a(window)),"click"==this.options.mode||b.support.touch?this.element.on("click",function(b){var d=a(b.target);d.parents(".uk-dropdown").length||((d.is("a[href='#']")||d.parent().is("a[href='#']"))&&b.preventDefault(),d.blur()),g.element.hasClass("uk-open")?(d.is("a")||!g.element.find(".uk-dropdown").find(b.target).length)&&(g.element.removeClass("uk-open"),c=!1):g.show()}):this.element.on("mouseenter",function(){g.remainIdle&&clearTimeout(g.remainIdle),g.show()}).on("mouseleave",function(){g.remainIdle=setTimeout(function(){g.element.removeClass("uk-open"),g.remainIdle=!1,c&&c[0]==g.element[0]&&(c=!1)},g.options.remaintime)}).on("click",function(b){var c=a(b.target);g.remainIdle&&clearTimeout(g.remainIdle),(c.is("a[href='#']")||c.parent().is("a[href='#']"))&&b.preventDefault(),g.show()}),this.element.data("dropdown",this))};a.extend(d.prototype,{remainIdle:!1,show:function(){c&&c[0]!=this.element[0]&&c.removeClass("uk-open"),this.checkDimensions(),this.element.addClass("uk-open"),c=this.element,this.registerOuterClick()},registerOuterClick:function(){var b=this;a(document).off("click.outer.dropdown"),setTimeout(function(){a(document).on("click.outer.dropdown",function(d){!c||c[0]!=b.element[0]||!a(d.target).is("a")&&b.element.find(".uk-dropdown").find(d.target).length||(c.removeClass("uk-open"),a(document).off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){var b=this.dropdown.css("margin-"+a.UIkit.langdirection,"").css("min-width",""),c=b.show().offset(),d=b.outerWidth(),e=this.boundary.width(),f=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(b.css("margin-"+a.UIkit.langdirection,-1*(parseFloat(d)/2-b.parent().width()/2)),c=b.offset(),(d+c.left>e||c.left<0)&&(b.css("margin-"+a.UIkit.langdirection,""),c=b.offset())),this.justified&&this.justified.length){var g=this.justified.outerWidth();if(b.css("min-width",g),"right"==a.UIkit.langdirection){var h=e-(this.justified.offset().left+g),i=e-(b.offset().left+b.outerWidth());b.css("margin-right",h-i)}else b.css("margin-left",this.justified.offset().left-c.left);c=b.offset()}d+(c.left-f)>e&&(b.addClass("uk-dropdown-flip"),c=b.offset()),c.left<0&&b.addClass("uk-dropdown-stack"),b.css("display","")}}}),d.defaults={mode:"hover",remaintime:800,justify:!1,boundary:a(window)},b.dropdown=d;var e=b.support.touch?"click":"mouseenter";a(document).on(e+".dropdown.uikit","[data-uk-dropdown]",function(c){var f=a(this);if(!f.data("dropdown")){var g=new d(f,b.Utils.options(f.data("uk-dropdown")));("click"==e||"mouseenter"==e&&"hover"==g.options.mode)&&g.show(),g.element.find(".uk-dropdown").length&&c.preventDefault()}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=a(window),d="resize orientationchange",e=[],f=function(g,h){var i=this,j=a(g);j.data("gridMatchHeight")||(this.options=a.extend({},f.defaults,h),this.element=j,this.columns=this.element.children(),this.elements=this.options.target?this.element.find(this.options.target):this.columns,this.columns.length&&(c.on(d,function(){var d=function(){i.match()};return a(function(){d(),c.on("load",d)}),b.Utils.debounce(d,150)}()),a(document).on("uk-domready",function(){i.columns=i.element.children(),i.elements=i.options.target?i.element.find(i.options.target):i.columns,i.match()}),this.element.data("gridMatchHeight",this),e.push(this)))};a.extend(f.prototype,{match:function(){this.revert();var b=this.columns.filter(":visible:first");if(b.length){var c=Math.ceil(100*parseFloat(b.css("width"))/parseFloat(b.parent().css("width")))>=100?!0:!1,d=this;if(!c)return this.options.row?(this.element.width(),setTimeout(function(){var b=!1,c=[];d.elements.each(function(){var e=a(this),f=e.offset().top;f!=b&&c.length&&(d.matchHeights(a(c)),c=[],f=e.offset().top),c.push(e),b=f}),c.length&&d.matchHeights(a(c))},0)):this.matchHeights(this.elements),this}},revert:function(){return this.elements.css("min-height",""),this},matchHeights:function(b){if(!(b.length<2)){var c=0;b.each(function(){c=Math.max(c,a(this).outerHeight())}).each(function(){var b=a(this),d=c-(b.outerHeight()-b.height());b.css("min-height",d+"px")})}}}),f.defaults={target:!1,row:!1};var g=function(c,d){var e=a(c);if(!e.data("gridMargin")){this.options=a.extend({},g.defaults,d);var f=new b.stackMargin(e,this.options);e.data("gridMargin",f)}};g.defaults={cls:"uk-grid-margin"},b.gridMatchHeight=f,b.gridMargin=g,a(document).on("uk-domready",function(){a("[data-uk-grid-match],[data-uk-grid-margin]").each(function(){var c,d=a(this);d.is("[data-uk-grid-match]")&&!d.data("gridMatchHeight")&&(c=new f(d,b.Utils.options(d.attr("data-uk-grid-match")))),d.is("[data-uk-grid-margin]")&&!d.data("gridMargin")&&(c=new g(d,b.Utils.options(d.attr("data-uk-grid-margin"))))})}),a(document).on("uk-check-display",function(){e.forEach(function(a){a.element.is(":visible")&&a.match()})})}(jQuery,jQuery.UIkit),function(a,b,c){"use strict";function d(b,c){return c?("object"==typeof b?(b=b instanceof jQuery?b:a(b),b.parent().length&&(c.persist=b,c.persist.data("modalPersistParent",b.parent()))):b=a("<div></div>").html("string"==typeof b||"number"==typeof b?b:"$.UIkitt.modal Error: Unsupported data type: "+typeof b),b.appendTo(c.element.find(".uk-modal-dialog")),c):void 0}var e=!1,f=a("html"),g=function(c,d){var e=this;this.element=a(c),this.options=a.extend({},g.defaults,d),this.transition=b.support.transition,this.dialog=this.element.find(".uk-modal-dialog"),this.scrollable=function(){var a=e.dialog.find(".uk-overflow-container:first");return a.length?a:!1}(),this.element.on("click",".uk-modal-close",function(a){a.preventDefault(),e.hide()}).on("click",function(b){var c=a(b.target);c[0]==e.element[0]&&e.options.bgclose&&e.hide()})};a.extend(g.prototype,{scrollable:!1,transition:!1,toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(!this.isActive())return e&&e.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),e=this,f.addClass("uk-modal-page").height(),this.element.addClass("uk-open").trigger("uk.modal.show"),this},hide:function(a){if(this.isActive()){if(!a&&b.support.transition){var c=this;this.element.one(b.support.transition.end,function(){c._hide()}).removeClass("uk-open")}else this._hide();return this}},resize:function(){var a="padding-"+("left"==b.langdirection?"right":"left");if(this.scrollbarwidth=window.innerWidth-f.width(),f.css(a,this.scrollbarwidth),this.element.css(a,""),this.dialog.offset().left>this.scrollbarwidth&&this.element.css(a,this.scrollbarwidth-(this.element[0].scrollHeight==window.innerHeight?0:this.scrollbarwidth)),this.scrollable){this.scrollable.css("height",0);var c=Math.abs(parseInt(this.dialog.css("margin-top"),10)),d=this.dialog.outerHeight(),e=window.innerHeight,g=e-2*(20>c?20:c)-d;this.scrollable.css("height",g<this.options.minScrollHeight?"":g)}},_hide:function(){this.element.hide().removeClass("uk-open"),f.removeClass("uk-modal-page").css("padding-"+("left"==b.langdirection?"right":"left"),""),e===this&&(e=!1),this.element.trigger("uk.modal.hide")},isActive:function(){return e==this}}),g.dialog={tpl:'<div class="uk-modal"><div class="uk-modal-dialog"></div></div>'},g.defaults={keyboard:!0,show:!1,bgclose:!0,minScrollHeight:150};var h=function(b,c){var d=this,e=a(b);e.data("modal")||(this.options=a.extend({target:e.is("a")?e.attr("href"):!1},c),this.element=e,this.modal=new g(this.options.target,c),e.on("click",function(a){a.preventDefault(),d.show()}),a.each(["show","hide","isActive"],function(a,b){d[b]=function(){return d.modal[b]()}}),this.element.data("modal",this))};h.dialog=function(b,c){var e=new g(a(g.dialog.tpl).appendTo("body"),c);return e.element.on("uk.modal.hide",function(){e.persist&&(e.persist.appendTo(e.persist.data("modalPersistParent")),e.persist=!1),e.element.remove()}),d(b,e),e},h.alert=function(b,c){h.dialog(['<div class="uk-margin uk-modal-content">'+String(b)+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""),a.extend({bgclose:!1,keyboard:!1},c)).show()},h.confirm=function(b,c,d){c=a.isFunction(c)?c:function(){};var e=h.dialog(['<div class="uk-margin uk-modal-content">'+String(b)+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""),a.extend({bgclose:!1,keyboard:!1},d));e.element.find(".js-modal-confirm").on("click",function(){c(),e.hide()}),e.show()},h.Modal=g,b.modal=h,a(document).on("click.modal.uikit","[data-uk-modal]",function(c){var d=a(this);if(d.is("a")&&c.preventDefault(),!d.data("modal")){var e=new h(d,b.Utils.options(d.attr("data-uk-modal")));e.show()}}),a(document).on("keydown.modal.uikit",function(a){e&&27===a.keyCode&&e.options.keyboard&&(a.preventDefault(),e.hide())}),c.on("resize orientationchange",b.Utils.debounce(function(){e&&e.resize()},150))}(jQuery,jQuery.UIkit,jQuery(window)),function(a,b){"use strict";var c,d=a(window),e=a(document),f={show:function(b){if(b=a(b),b.length){var g=a("html"),h=b.find(".uk-offcanvas-bar:first"),i="right"==a.UIkit.langdirection,j=(h.hasClass("uk-offcanvas-bar-flip")?-1:1)*(i?-1:1),k=-1==j&&d.width()<window.innerWidth?window.innerWidth-d.width():0;c={x:window.scrollX,y:window.scrollY},b.addClass("uk-active"),g.css({width:window.innerWidth,height:window.innerHeight}).addClass("uk-offcanvas-page"),g.css(i?"margin-right":"margin-left",(i?-1:1)*(h.outerWidth()-k)*j).width(),h.addClass("uk-offcanvas-bar-show").width(),b.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas",function(b){var c=a(b.target);if(!b.type.match(/swipe/)&&!c.hasClass("uk-offcanvas-close")){if(c.hasClass("uk-offcanvas-bar"))return;if(c.parents(".uk-offcanvas-bar:first").length)return}b.stopImmediatePropagation(),f.hide()}),e.on("keydown.ukoffcanvas",function(a){27===a.keyCode&&f.hide()})}},hide:function(b){var d=a("html"),f=a(".uk-offcanvas.uk-active"),g="right"==a.UIkit.langdirection,h=f.find(".uk-offcanvas-bar:first");f.length&&(a.UIkit.support.transition&&!b?(d.one(a.UIkit.support.transition.end,function(){d.removeClass("uk-offcanvas-page").attr("style",""),f.removeClass("uk-active"),window.scrollTo(c.x,c.y)}).css(g?"margin-right":"margin-left",""),setTimeout(function(){h.removeClass("uk-offcanvas-bar-show")},50)):(d.removeClass("uk-offcanvas-page").attr("style",""),f.removeClass("uk-active"),h.removeClass("uk-offcanvas-bar-show"),window.scrollTo(c.x,c.y)),f.off(".ukoffcanvas"),e.off(".ukoffcanvas"))}},g=function(b,c){var d=this,e=a(b);e.data("offcanvas")||(this.options=a.extend({target:e.is("a")?e.attr("href"):!1},c),this.element=e,e.on("click",function(a){a.preventDefault(),f.show(d.options.target)}),this.element.data("offcanvas",this))};g.offcanvas=f,b.offcanvas=g,e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(c){c.preventDefault();var d=a(this);if(!d.data("offcanvas")){{new g(d,b.Utils.options(d.attr("data-uk-offcanvas")))}d.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";function c(b){var c=a(b),d="auto";if(c.is(":visible"))d=c.outerHeight();else{var e={position:c.css("position"),visibility:c.css("visibility"),display:c.css("display")};d=c.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),c.css(e)}return d}var d=function(b,c){var e=this,f=a(b);f.data("nav")||(this.options=a.extend({},d.defaults,c),this.element=f.on("click",this.options.toggle,function(b){b.preventDefault();var c=a(this);e.open(c.parent()[0]==e.element[0]?c:c.parent("li"))}),this.element.find(this.options.lists).each(function(){var b=a(this),c=b.parent(),d=c.hasClass("uk-active");b.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),c.data("list-container",b.parent()),d&&e.open(c,!0)}),this.element.data("nav",this))};a.extend(d.prototype,{open:function(b,d){var e=this.element,f=a(b);this.options.multiple||e.children(".uk-open").not(b).each(function(){a(this).data("list-container")&&a(this).data("list-container").stop().animate({height:0},function(){a(this).parent().removeClass("uk-open")})}),f.toggleClass("uk-open"),f.data("list-container")&&(d?f.data("list-container").stop().height(f.hasClass("uk-open")?"auto":0):f.data("list-container").stop().animate({height:f.hasClass("uk-open")?c(f.data("list-container").find("ul:first")):0}))}}),d.defaults={toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},b.nav=d,a(document).on("uk-domready",function(){a("[data-uk-nav]").each(function(){var c=a(this);if(!c.data("nav")){new d(c,b.Utils.options(c.attr("data-uk-nav")))}})})}(jQuery,jQuery.UIkit),function(a,b,c){"use strict";var d,e,f=function(b,c){var d=this,e=a(b);e.data("tooltip")||(this.options=a.extend({},f.defaults,c),this.element=e.on({focus:function(){d.show()},blur:function(){d.hide()},mouseenter:function(){d.show()},mouseleave:function(){d.hide()}}),this.tip="function"==typeof this.options.src?this.options.src.call(this.element):this.options.src,this.element.attr("data-cached-title",this.element.attr("title")).attr("title",""),this.element.data("tooltip",this))};a.extend(f.prototype,{tip:"",show:function(){if(e&&clearTimeout(e),this.tip.length){d.stop().css({top:-2e3,visibility:"hidden"}).show(),d.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var b=this,c=a.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),f=d[0].offsetWidth,g=d[0].offsetHeight,h="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,i="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,j={display:"none",visibility:"visible",top:c.top+c.height+g,left:c.left},k=i.split("-");"left"!=k[0]&&"right"!=k[0]||"right"!=a.UIkit.langdirection||(k[0]="left"==k[0]?"right":"left");var l={bottom:{top:c.top+c.height+h,left:c.left+c.width/2-f/2},top:{top:c.top-g-h,left:c.left+c.width/2-f/2},left:{top:c.top+c.height/2-g/2,left:c.left-f-h},right:{top:c.top+c.height/2-g/2,left:c.left+c.width+h}};a.extend(j,l[k[0]]),2==k.length&&(j.left="left"==k[1]?c.left:c.left+c.width-f);var m=this.checkBoundary(j.left,j.top,f,g);if(m){switch(m){case"x":i=2==k.length?k[0]+"-"+(j.left<0?"left":"right"):j.left<0?"right":"left";break;case"y":i=2==k.length?(j.top<0?"bottom":"top")+"-"+k[1]:j.top<0?"bottom":"top";break;case"xy":i=2==k.length?(j.top<0?"bottom":"top")+"-"+(j.left<0?"left":"right"):j.left<0?"right":"left"}k=i.split("-"),a.extend(j,l[k[0]]),2==k.length&&(j.left="left"==k[1]?c.left:c.left+c.width-f)}j.left-=a("body").position().left,e=setTimeout(function(){d.css(j).attr("class","uk-tooltip uk-tooltip-"+i),b.options.animation?d.css({opacity:0,display:"block"}).animate({opacity:1},parseInt(b.options.animation,10)||400):d.show(),e=!1},parseInt(this.options.delay,10)||0)}},hide:function(){this.element.is("input")&&this.element[0]===document.activeElement||(e&&clearTimeout(e),d.stop(),this.options.animation?d.fadeOut(parseInt(this.options.animation,10)||400):d.hide())},content:function(){return this.tip},checkBoundary:function(a,b,d,e){var f="";return(0>a||a-c.scrollLeft()+d>window.innerWidth)&&(f+="x"),(0>b||b-c.scrollTop()+e>window.innerHeight)&&(f+="y"),f}}),f.defaults={offset:5,pos:"top",animation:!1,delay:0,src:function(){return this.attr("title")}},b.tooltip=f,a(function(){d=a('<div class="uk-tooltip"></div>').appendTo("body")}),a(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var c=a(this);if(!c.data("tooltip")){{new f(c,b.Utils.options(c.attr("data-uk-tooltip")))}c.trigger("mouseenter")}})}(jQuery,jQuery.UIkit,jQuery(window)),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);if(!f.data("switcher")){if(this.options=a.extend({},c.defaults,d),this.element=f.on("click",this.options.toggle,function(a){a.preventDefault(),e.show(this)}),this.options.connect){this.connect=a(this.options.connect).find(".uk-active").removeClass(".uk-active").end();var g=this.element.find(this.options.toggle),h=g.filter(".uk-active");h.length?this.show(h):(h=g.eq(this.options.active),this.show(h.length?h:g.eq(0)))}this.element.data("switcher",this)}};a.extend(c.prototype,{show:function(b){b=isNaN(b)?a(b):this.element.find(this.options.toggle).eq(b);var c=b;if(!c.hasClass("uk-disabled")){if(this.element.find(this.options.toggle).filter(".uk-active").removeClass("uk-active"),c.addClass("uk-active"),this.options.connect&&this.connect.length){var d=this.element.find(this.options.toggle).index(c);this.connect.children().removeClass("uk-active").eq(d).addClass("uk-active")}this.element.trigger("uk.switcher.show",[c]),a(document).trigger("uk-check-display")}}}),c.defaults={connect:!1,toggle:">*",active:0},b.switcher=c,a(document).on("uk-domready",function(){a("[data-uk-switcher]").each(function(){var d=a(this);if(!d.data("switcher")){new c(d,b.Utils.options(d.attr("data-uk-switcher")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);if(!f.data("tab")){if(this.element=f,this.options=a.extend({},c.defaults,d),this.options.connect&&(this.connect=a(this.options.connect)),window.location.hash){var g=this.element.children().filter(window.location.hash);g.length&&this.element.children().removeClass("uk-active").filter(g).addClass("uk-active")}var h=a('<li class="uk-tab-responsive uk-active"><a href="javascript:void(0);"></a></li>'),i=h.find("a:first"),j=a('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),k=j.find("ul");i.html(this.element.find("li.uk-active:first").find("a").text()),this.element.hasClass("uk-tab-bottom")&&j.addClass("uk-dropdown-up"),this.element.hasClass("uk-tab-flip")&&j.addClass("uk-dropdown-flip"),this.element.find("a").each(function(b){var c=a(this).parent(),d=a('<li><a href="javascript:void(0);">'+c.text()+"</a></li>").on("click",function(){e.element.data("switcher").show(b)});a(this).parents(".uk-disabled:first").length||k.append(d)}),this.element.uk("switcher",{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active}),h.append(j).uk("dropdown",{mode:"click"}),this.element.append(h).data({dropdown:h.data("dropdown"),mobilecaption:i}).on("uk.switcher.show",function(a,b){h.addClass("uk-active"),i.html(b.find("a").text())}),this.element.data("tab",this)}};c.defaults={connect:!1,active:0},b.tab=c,a(document).on("uk-domready",function(){a("[data-uk-tab]").each(function(){var d=a(this);if(!d.data("tab")){new c(d,b.Utils.options(d.attr("data-uk-tab")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=a(window),d=[],e=function(){for(var a=0;a<d.length;a++)b.support.requestAnimationFrame.apply(window,[d[a].check])},f=function(c,e){var g=a(c);if(!g.data("scrollspy")){this.options=a.extend({},f.defaults,e),this.element=a(c);var h,i,j,k=this,l=function(){var a=b.Utils.isInView(k.element,k.options);a&&!i&&(h&&clearTimeout(h),j||(k.element.addClass(k.options.initcls),k.offset=k.element.offset(),j=!0,k.element.trigger("uk-scrollspy-init")),h=setTimeout(function(){a&&k.element.addClass("uk-scrollspy-inview").addClass(k.options.cls).width()},k.options.delay),i=!0,k.element.trigger("uk.scrollspy.inview")),!a&&i&&k.options.repeat&&(k.element.removeClass("uk-scrollspy-inview").removeClass(k.options.cls),i=!1,k.element.trigger("uk.scrollspy.outview"))};l(),this.element.data("scrollspy",this),this.check=l,d.push(this)}};f.defaults={cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},b.scrollspy=f;var g=[],h=function(){for(var a=0;a<g.length;a++)b.support.requestAnimationFrame.apply(window,[g[a].check])},i=function(d,e){var f=a(d);if(!f.data("scrollspynav")){this.element=f,this.options=a.extend({},i.defaults,e);var h,j=[],k=this.element.find("a[href^='#']").each(function(){j.push(a(this).attr("href"))}),l=a(j.join(",")),m=this,n=function(){h=[];for(var a=0;a<l.length;a++)b.Utils.isInView(l.eq(a),m.options)&&h.push(l.eq(a));if(h.length){var d=c.scrollTop(),e=function(){for(var a=0;a<h.length;a++)if(h[a].offset().top>=d)return h[a]}();if(!e)return;m.options.closest?k.closest(m.options.closest).removeClass(m.options.cls).end().filter("a[href='#"+e.attr("id")+"']").closest(m.options.closest).addClass(m.options.cls):k.removeClass(m.options.cls).filter("a[href='#"+e.attr("id")+"']").addClass(m.options.cls)}};this.options.smoothscroll&&b.smoothScroll&&k.each(function(){new b.smoothScroll(this,m.options.smoothscroll)}),n(),this.element.data("scrollspynav",this),this.check=n,g.push(this)
}};i.defaults={cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},b.scrollspynav=i;var j=function(){e(),h()};c.on("scroll",j).on("resize orientationchange",b.Utils.debounce(j,50)),a(document).on("uk-domready",function(){a("[data-uk-scrollspy]").each(function(){var c=a(this);if(!c.data("scrollspy")){new f(c,b.Utils.options(c.attr("data-uk-scrollspy")))}}),a("[data-uk-scrollspy-nav]").each(function(){var c=a(this);if(!c.data("scrollspynav")){new i(c,b.Utils.options(c.attr("data-uk-scrollspy-nav")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);f.data("smoothScroll")||(this.options=a.extend({},c.defaults,d),this.element=f.on("click",function(){{var b=a(a(this.hash).length?this.hash:"body"),c=b.offset().top-e.options.offset,d=a(document).height(),f=a(window).height();b.outerHeight()}return c+f>d&&(c=d-f),a("html,body").stop().animate({scrollTop:c},e.options.duration,e.options.transition),!1}),this.element.data("smoothScroll",this))};c.defaults={duration:1e3,transition:"easeOutExpo",offset:0},b.smoothScroll=c,a.easing.easeOutExpo||(a.easing.easeOutExpo=function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c}),a(document).on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var d=a(this);if(!d.data("smoothScroll")){{new c(d,b.Utils.options(d.attr("data-uk-smooth-scroll")))}d.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b,c){var d=function(a,c){var e=this,f=b(a);f.data("toggle")||(this.options=b.extend({},d.defaults,c),this.totoggle=this.options.target?b(this.options.target):[],this.element=f.on("click",function(a){a.preventDefault(),e.toggle()}),this.element.data("toggle",this))};b.extend(d.prototype,{toggle:function(){this.totoggle.length&&(this.totoggle.toggleClass(this.options.cls),"uk-hidden"==this.options.cls&&b(document).trigger("uk-check-display"))}}),d.defaults={target:!1,cls:"uk-hidden"},c.toggle=d,b(document).on("uk-domready",function(){b("[data-uk-toggle]").each(function(){var a=b(this);if(!a.data("toggle")){new d(a,c.Utils.options(a.attr("data-uk-toggle")))}})})}(this,jQuery,jQuery.UIkit);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
 /*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

  // our plugin constructor
  var OnePageNav = function(elem, options){
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.metadata = this.$elem.data('plugin-options');
    this.$win = $(window);
    this.sections = {};
    this.didScroll = false;
    this.$doc = $(document);
    this.docHeight = this.$doc.height();
  };

  // the plugin prototype
  OnePageNav.prototype = {
    defaults: {
      navItems: 'a',
      currentClass: 'current',
      changeHash: false,
      easing: 'swing',
      filter: '',
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      begin: false,
      end: false,
      scrollChange: false
    },

    init: function() {
      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.$nav = this.$elem.find(this.config.navItems);

      //Filter any links out of the nav
      if(this.config.filter !== '') {
        this.$nav = this.$nav.filter(this.config.filter);
      }

      //Handle clicks on the nav
      this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

      //Get the section positions
      this.getPositions();

      //Handle scroll changes
      this.bindInterval();

      //Update the positions on resize too
      this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

      return this;
    },

    adjustNav: function(self, $parent) {
      self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
      $parent.addClass(self.config.currentClass);
    },

    bindInterval: function() {
      var self = this;
      var docHeight;

      self.$win.on('scroll.onePageNav', function() {
        self.didScroll = true;
      });

      self.t = setInterval(function() {
        docHeight = self.$doc.height();

        //If it was scrolled
        if(self.didScroll) {
          self.didScroll = false;
          self.scrollChange();
        }

        //If the document height changes
        if(docHeight !== self.docHeight) {
          self.docHeight = docHeight;
          self.getPositions();
        }
      }, 250);
    },

    getHash: function($link) {
      return $link.attr('href').split('#')[1];
    },

    getPositions: function() {
      var self = this;
      var linkHref;
      var topPos;
      var $target;

      self.$nav.each(function() {
        linkHref = self.getHash($(this));
        $target = $('#' + linkHref);

        if($target.length) {
          topPos = $target.offset().top ;
          self.sections[linkHref] = Math.round(topPos);
        }
      });
    },

    getSection: function(windowPos) {
      var returnValue = null;
      var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

      for(var section in this.sections) {
        if((this.sections[section] - windowHeight) < windowPos) {
          returnValue = section;
        }
      }

      return returnValue;
    },

    handleClick: function(e) {
      var self = this;
      var $link = $(e.currentTarget);
      var $parent = $link.parent();
      var newLoc = '#' + self.getHash($link);

      if(!$parent.hasClass(self.config.currentClass)) {
        //Start callback
        if(self.config.begin) {
          self.config.begin();
        }

        //Change the highlighted nav item
        self.adjustNav(self, $parent);

        //Removing the auto-adjust on scroll
        self.unbindInterval();

        //Scroll to the correct position
        self.scrollTo(newLoc, function() {
          //Do we need to change the hash?
          if(self.config.changeHash) {
            window.location.hash = newLoc;
          }

          //Add the auto-adjust on scroll back in
          self.bindInterval();

          //End callback
          if(self.config.end) {
            self.config.end();
          }
        });
      }

      e.preventDefault();
    },

    scrollChange: function() {
      var windowTop = this.$win.scrollTop();
      var position = this.getSection(windowTop);
      var $parent;

      //If the position is set
      if(position !== null) {
        $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

        //If it's not already the current section
        if(!$parent.hasClass(this.config.currentClass)) {
          //Change the highlighted nav item
          this.adjustNav(this, $parent);

          //If there is a scrollChange callback
          if(this.config.scrollChange) {
            this.config.scrollChange($parent);
          }
        }
      }
    },

    scrollTo: function(target, callback) {
      var offset = $(target).offset().top- 95;

      $('html, body').animate({
        scrollTop: offset
      }, this.config.scrollSpeed, this.config.easing, callback);
    },

    unbindInterval: function() {
      clearInterval(this.t);
      this.$win.unbind('scroll.onePageNav');
    }
  };

  OnePageNav.defaults = OnePageNav.prototype.defaults;

  $.fn.onePageNav = function(options) {
    return this.each(function() {
      new OnePageNav(this, options).init();
    });
  };

})( jQuery, window , document );
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*
Sequence.js (http://www.sequencejs.com)
Version: 1.0
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is available under a MIT License:
http://www.opensource.org/licenses/mit-license.php

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 - 2013 unless otherwise stated.

Sequence also relies on the following open source scripts:

- jQuery imagesLoaded 2.1.0 (http://github.com/desandro/imagesloaded)
  Paul Irish et al
  Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- jQuery TouchWipe 1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
  Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
  Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- Modernizr 2.6.1 Custom Build (http://modernizr.com/)
  Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
  Available under the BSD and MIT licenses: www.modernizr.com/license/
  */
  (function(e){function n(n,s,o,f){function d(){l.afterLoaded();l.settings.hideFramesUntilPreloaded&&l.settings.preloader!==undefined&&l.settings.preloader!==!1&&l.frames.show();if(l.settings.preloader!==undefined&&l.settings.preloader!==!1)if(l.settings.hidePreloaderUsingCSS&&l.transitionsSupported){l.prependPreloadingCompleteTo=l.settings.prependPreloadingComplete===!0?l.settings.preloader:e(l.settings.prependPreloadingComplete);l.prependPreloadingCompleteTo.addClass("preloading-complete");setTimeout(S,l.settings.hidePreloaderDelay)}else l.settings.preloader.fadeOut(l.settings.hidePreloaderDelay,function(){clearInterval(l.defaultPreloader);S()});else S()}function g(t,n){var r=[];if(!n)for(var i=t;i>0;i--)l.frames.eq(l.settings.preloadTheseFrames[i-1]-1).find("img").each(function(){r.push(e(this)[0])});else for(var s=t;s>0;s--)r.push(e("body").find('img[src="'+l.settings.preloadTheseImages[s-1]+'"]'));return r}function y(t,n){function c(){var t=e(f),r=e(l);s&&(l.length?s.reject(u,t,r):s.resolve(u));e.isFunction(n)&&n.call(i,u,t,r)}function h(t,n){if(t.src===r||e.inArray(t,a)!==-1)return;a.push(t);n?l.push(t):f.push(t);e.data(t,"imagesLoaded",{isBroken:n,src:t.src});o&&s.notifyWith(e(t),[n,u,e(f),e(l)]);if(u.length===a.length){setTimeout(c);u.unbind(".imagesLoaded")}}var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=t,s=e.isFunction(e.Deferred)?e.Deferred():0,o=e.isFunction(s.notify),u=i.find("img").add(i.filter("img")),a=[],f=[],l=[];e.isPlainObject(n)&&e.each(n,function(e,t){e==="callback"?n=t:s&&s[e](t)});u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(e){h(e.target,e.type==="error")}).each(function(t,n){var i=n.src,s=e.data(n,"imagesLoaded");if(s&&s.src===i){h(n,s.isBroken);return}if(n.complete&&n.naturalWidth!==undefined){h(n,n.naturalWidth===0||n.naturalHeight===0);return}if(n.readyState||n.complete){n.src=r;n.src=i}}):c()}function S(){function t(e,t){var i,s;for(s in t){s==="left"||s==="right"?i=n[s]:i=s;e===parseFloat(i)&&r(l,t[s])}}function s(){l.canvas.on("touchmove.sequence",o);c=null;p=!1}function o(e){l.settings.swipePreventsDefault&&e.preventDefault();if(p){var t=e.originalEvent.touches[0].pageX,n=e.originalEvent.touches[0].pageY,i=c-t,o=h-n;if(Math.abs(i)>=l.settings.swipeThreshold){s();i>0?r(l,l.settings.swipeEvents.left):r(l,l.settings.swipeEvents.right)}else if(Math.abs(o)>=l.settings.swipeThreshold){s();o>0?r(l,l.settings.swipeEvents.down):r(l,l.settings.swipeEvents.up)}}}function f(e){if(e.originalEvent.touches.length===1){c=e.originalEvent.touches[0].pageX;h=e.originalEvent.touches[0].pageY;p=!0;l.canvas.on("touchmove.sequence",o)}}e(l.settings.preloader).remove();l.nextButton=a(l,l.settings.nextButton,".sequence-next");l.prevButton=a(l,l.settings.prevButton,".sequence-prev");l.pauseButton=a(l,l.settings.pauseButton,".sequence-pause");l.pagination=a(l,l.settings.pagination,".sequence-pagination");l.nextButton!==undefined&&l.nextButton!==!1&&l.settings.showNextButtonOnInit===!0&&l.nextButton.show();l.prevButton!==undefined&&l.prevButton!==!1&&l.settings.showPrevButtonOnInit===!0&&l.prevButton.show();l.pauseButton!==undefined&&l.pauseButton!==!1&&l.settings.showPauseButtonOnInit===!0&&l.pauseButton.show();if(l.settings.pauseIcon!==!1){l.pauseIcon=a(l,l.settings.pauseIcon,".sequence-pause-icon");l.pauseIcon!==undefined&&l.pauseIcon.hide()}else l.pauseIcon=undefined;if(l.pagination!==undefined&&l.pagination!==!1){l.paginationLinks=l.pagination.children();l.paginationLinks.on("click.sequence",function(){var t=e(this).index()+1;l.goTo(t)});l.settings.showPaginationOnInit===!0&&l.pagination.show()}l.nextFrameID=l.settings.startingFrameID;if(l.settings.hashTags===!0){l.frames.each(function(){l.frameHashID.push(e(this).prop(l.getHashTagFrom))});l.currentHashTag=location.hash.replace("#","");if(l.currentHashTag===undefined||l.currentHashTag==="")l.nextFrameID=l.settings.startingFrameID;else{l.frameHashIndex=e.inArray(l.currentHashTag,l.frameHashID);l.frameHashIndex!==-1?l.nextFrameID=l.frameHashIndex+1:l.nextFrameID=l.settings.startingFrameID}}l.nextFrame=l.frames.eq(l.nextFrameID-1);l.nextFrameChildren=l.nextFrame.children();l.pagination!==undefined&&e(l.paginationLinks[l.settings.startingFrameID-1]).addClass("current");if(l.transitionsSupported)if(!l.settings.animateStartingFrameIn){l.currentFrameID=l.nextFrameID;l.settings.moveActiveFrameToTop&&l.nextFrame.css("z-index",l.numberOfFrames);i(l.prefix,l.nextFrameChildren,"0s");l.nextFrame.addClass("animate-in");if(l.settings.hashTags&&l.settings.hashChangesOnFirstFrame){l.currentHashTag=l.nextFrame.prop(l.getHashTagFrom);document.location.hash="#"+l.currentHashTag}setTimeout(function(){i(l.prefix,l.nextFrameChildren,"")},100);u(l,!0,l.settings.autoPlayDelay)}else if(l.settings.reverseAnimationsWhenNavigatingBackwards&&l.settings.autoPlayDirection-1&&l.settings.animateStartingFrameIn){i(l.prefix,l.nextFrameChildren,"0s");l.nextFrame.addClass("animate-out");l.goTo(l.nextFrameID,-1,!0)}else l.goTo(l.nextFrameID,1,!0);else{l.container.addClass("sequence-fallback");l.currentFrameID=l.nextFrameID;if(l.settings.hashTags&&l.settings.hashChangesOnFirstFrame){l.currentHashTag=l.nextFrame.prop(l.getHashTagFrom);document.location.hash="#"+l.currentHashTag}l.frames.addClass("animate-in");l.frames.not(":eq("+(l.nextFrameID-1)+")").css({display:"none",opacity:0});u(l,!0,l.settings.autoPlayDelay)}l.nextButton!==undefined&&l.nextButton.bind("click.sequence",function(){l.next()});l.prevButton!==undefined&&l.prevButton.bind("click.sequence",function(){l.prev()});l.pauseButton!==undefined&&l.pauseButton.bind("click.sequence",function(){l.pause(!0)});if(l.settings.keyNavigation){var n={left:37,right:39};e(document).bind("keydown.sequence",function(e){var n=String.fromCharCode(e.keyCode);if(n>0&&n<=l.numberOfFrames&&l.settings.numericKeysGoToFrames){l.nextFrameID=n;l.goTo(l.nextFrameID)}t(e.keyCode,l.settings.keyEvents);t(e.keyCode,l.settings.customKeyEvents)})}l.settings.pauseOnHover&&l.settings.autoPlay&&!l.hasTouch&&l.canvas.on({"mouseenter.sequence":function(){l.isBeingHoveredOver=!0;l.isHardPaused||l.pause()},"mouseleave.sequence":function(){l.isBeingHoveredOver=!1;l.isHardPaused||l.unpause()}});l.settings.hashTags&&e(window).bind("hashchange.sequence",function(){var t=location.hash.replace("#","");if(l.currentHashTag!==t){l.currentHashTag=t;l.frameHashIndex=e.inArray(l.currentHashTag,l.frameHashID);if(l.frameHashIndex!==-1){l.nextFrameID=l.frameHashIndex+1;l.goTo(l.nextFrameID)}}});if(l.settings.swipeNavigation&&l.hasTouch){var c,h,p=!1;l.canvas.on("touchstart.sequence",f)}}var l=this;l.container=e(n);l.canvas=l.container.children(".sequence-canvas");l.frames=l.canvas.children("li");try{Modernizr.prefixed;if(Modernizr.prefixed===undefined)throw"undefined"}catch(c){f.modernizr()}var h={WebkitTransition:"-webkit-",MozTransition:"-moz-",OTransition:"-o-",msTransition:"-ms-",transition:""},p={WebkitTransition:"webkitTransitionEnd.sequence webkitAnimationEnd.sequence",MozTransition:"transitionend.sequence animationend.sequence",OTransition:"otransitionend.sequence oanimationend.sequence",msTransition:"MSTransitionEnd.sequence MSAnimationEnd.sequence",transition:"transitionend.sequence animationend.sequence"};l.prefix=h[Modernizr.prefixed("transition")],l.transitionProperties={},l.transitionEnd=p[Modernizr.prefixed("transition")],l.numberOfFrames=l.frames.length,l.transitionsSupported=l.prefix!==undefined?!0:!1,l.hasTouch="ontouchstart"in window?!0:!1,l.isPaused=!1,l.isBeingHoveredOver=!1,l.container.removeClass("sequence-destroyed");l.paused=function(){},l.unpaused=function(){},l.beforeNextFrameAnimatesIn=function(){},l.afterNextFrameAnimatesIn=function(){},l.beforeCurrentFrameAnimatesOut=function(){},l.afterCurrentFrameAnimatesOut=function(){},l.afterLoaded=function(){};l.destroyed=function(){};l.settings=e.extend({},o,s);l.settings.preloader=a(l,l.settings.preloader,".sequence-preloader");l.isStartingFrame=l.settings.animateStartingFrameIn?!0:!1;l.settings.unpauseDelay=l.settings.unpauseDelay===null?l.settings.autoPlayDelay:l.settings.unpauseDelay;l.getHashTagFrom=l.settings.hashDataAttribute?"data-sequence-hashtag":"id";l.frameHashID=[];l.direction=l.settings.autoPlayDirection;l.settings.hideFramesUntilPreloaded&&l.settings.preloader!==undefined&&l.settings.preloader!==!1&&l.frames.hide();l.prefix==="-o-"&&(l.transitionsSupported=f.operaTest());l.frames.removeClass("animate-in");var v=l.settings.preloadTheseFrames.length,m=l.settings.preloadTheseImages.length;if(l.settings.preloader===undefined||l.settings.preloader===!1||v===0&&m===0)if(t===!0){d();e(this).unbind("load.sequence")}else e(window).bind("load.sequence",function(){d();e(this).unbind("load.sequence")});else{var b=g(v),w=g(m,!0),E=e(b.concat(w));y(E,d)}}var t=!1;e(window).bind("load",function(){t=!0});n.prototype={startAutoPlay:function(e){var t=this;e=e===undefined?t.settings.autoPlayDelay:e;t.unpause();u(t);t.autoPlayTimer=setTimeout(function(){t.settings.autoPlayDirection===1?t.next():t.prev()},e)},stopAutoPlay:function(){var e=this;e.pause(!0);clearTimeout(e.autoPlayTimer)},pause:function(e){var t=this;if(!t.isSoftPaused){if(t.pauseButton!==undefined){t.pauseButton.addClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.show()}t.paused();t.isSoftPaused=!0;t.isHardPaused=e?!0:!1;t.isPaused=!0;u(t)}else t.unpause()},unpause:function(e){var t=this;if(t.pauseButton!==undefined){t.pauseButton.removeClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.hide()}t.isSoftPaused=!1;t.isHardPaused=!1;t.isPaused=!1;if(!t.active){e!==!1&&t.unpaused();u(t,!0,t.settings.unpauseDelay)}else t.delayUnpause=!0},next:function(){var e=this;e.nextFrameID=e.currentFrameID!==e.numberOfFrames?e.currentFrameID+1:1;e.active===!1||e.active===undefined?e.goTo(e.nextFrameID,1):e.goTo(e.nextFrameID,1,!0)},prev:function(){var e=this;e.nextFrameID=e.currentFrameID===1?e.numberOfFrames:e.currentFrameID-1;e.active===!1||e.active===undefined?e.goTo(e.nextFrameID,-1):e.goTo(e.nextFrameID,-1,!0)},goTo:function(t,n,r){var o=this;t=parseFloat(t);var a=r===!0?0:o.settings.transitionThreshold;if(t===o.currentFrameID||o.settings.navigationSkip&&o.navigationSkipThresholdActive||!o.settings.navigationSkip&&o.active||!o.transitionsSupported&&o.active||!o.settings.cycle&&n===1&&o.currentFrameID===o.numberOfFrames||!o.settings.cycle&&n===-1&&o.currentFrameID===1||o.settings.preventReverseSkipping&&o.direction!==n&&o.active)return!1;if(o.settings.navigationSkip&&o.active){o.navigationSkipThresholdActive=!0;o.settings.fadeFrameWhenSkipped&&o.nextFrame.stop().animate({opacity:0},o.settings.fadeFrameTime);clearTimeout(o.transitionThresholdTimer);setTimeout(function(){o.navigationSkipThresholdActive=!1},o.settings.navigationSkipThreshold)}if(!o.active||o.settings.navigationSkip){o.active=!0;u(o);n===undefined?o.direction=t>o.currentFrameID?1:-1:o.direction=n;o.currentFrame=o.canvas.children(".animate-in");o.nextFrame=o.frames.eq(t-1);o.currentFrameChildren=o.currentFrame.children();o.nextFrameChildren=o.nextFrame.children();if(o.pagination!==undefined){o.paginationLinks.removeClass("current");e(o.paginationLinks[t-1]).addClass("current")}if(o.transitionsSupported){if(o.currentFrame.length!==undefined){o.beforeCurrentFrameAnimatesOut();o.settings.moveActiveFrameToTop&&o.currentFrame.css("z-index",1);i(o.prefix,o.nextFrameChildren,"0s");if(!o.settings.reverseAnimationsWhenNavigatingBackwards||o.direction===1){o.nextFrame.removeClass("animate-out");i(o.prefix,o.currentFrameChildren,"")}else if(o.settings.reverseAnimationsWhenNavigatingBackwards&&o.direction===-1){o.nextFrame.addClass("animate-out");s(o)}}else o.isStartingFrame=!1;o.active=!0;o.currentFrame.unbind(o.transitionEnd);o.nextFrame.unbind(o.transitionEnd);o.settings.fadeFrameWhenSkipped&&o.settings.navigationSkip&&o.nextFrame.css("opacity",1);o.beforeNextFrameAnimatesIn();o.settings.moveActiveFrameToTop&&o.nextFrame.css("z-index",o.numberOfFrames);if(!o.settings.reverseAnimationsWhenNavigatingBackwards||o.direction===1){setTimeout(function(){i(o.prefix,o.nextFrameChildren,"");f(o,o.nextFrame,o.nextFrameChildren,"in");(o.afterCurrentFrameAnimatesOut!=="function () {}"||o.settings.transitionThreshold===!0&&r!==!0)&&f(o,o.currentFrame,o.currentFrameChildren,"out",!0,1)},50);setTimeout(function(){if(o.settings.transitionThreshold===!1||o.settings.transitionThreshold===0||r===!0){o.currentFrame.toggleClass("animate-out animate-in");o.nextFrame.addClass("animate-in")}else{o.currentFrame.toggleClass("animate-out animate-in");o.settings.transitionThreshold!==!0&&(o.transitionThresholdTimer=setTimeout(function(){o.nextFrame.addClass("animate-in")},a))}},50)}else if(o.settings.reverseAnimationsWhenNavigatingBackwards&&o.direction===-1){setTimeout(function(){i(o.prefix,o.currentFrameChildren,"");i(o.prefix,o.nextFrameChildren,"");s(o);f(o,o.nextFrame,o.nextFrameChildren,"in");(o.afterCurrentFrameAnimatesOut!=="function () {}"||o.settings.transitionThreshold===!0&&r!==!0)&&f(o,o.currentFrame,o.currentFrameChildren,"out",!0,-1)},50);setTimeout(function(){if(o.settings.transitionThreshold===!1||o.settings.transitionThreshold===0||r===!0){o.currentFrame.removeClass("animate-in");o.nextFrame.toggleClass("animate-out animate-in")}else{o.currentFrame.removeClass("animate-in");o.settings.transitionThreshold!==!0&&(o.transitionThresholdTimer=setTimeout(function(){o.nextFrame.toggleClass("animate-out animate-in")},a))}},50)}}else{function c(){l(o);o.active=!1;u(o,!0,o.settings.autoPlayDelay)}switch(o.settings.fallback.theme){case"fade":o.frames.css({position:"relative"});o.beforeCurrentFrameAnimatesOut();o.currentFrame=o.frames.eq(o.currentFrameID-1);o.currentFrame.animate({opacity:0},o.settings.fallback.speed,function(){o.currentFrame.css({display:"none","z-index":"1"});o.afterCurrentFrameAnimatesOut();o.beforeNextFrameAnimatesIn();o.nextFrame.css({display:"block","z-index":o.numberOfFrames}).animate({opacity:1},500,function(){o.afterNextFrameAnimatesIn()});c()});o.frames.css({position:"relative"});break;case"slide":default:var h={},p={},d={};if(o.direction===1){h.left="-100%";p.left="100%"}else{h.left="100%";p.left="-100%"}d.left="0";d.opacity=1;o.currentFrame=o.frames.eq(o.currentFrameID-1);o.beforeCurrentFrameAnimatesOut();o.currentFrame.animate(h,o.settings.fallback.speed,function(){o.currentFrame.css({display:"none","z-index":"1"});o.afterCurrentFrameAnimatesOut()});o.beforeNextFrameAnimatesIn();o.nextFrame.show().css(p);o.nextFrame.css({display:"block","z-index":o.numberOfFrames}).animate(d,o.settings.fallback.speed,function(){c();o.afterNextFrameAnimatesIn()})}}o.currentFrameID=t}},destroy:function(t){var n=this;n.container.addClass("sequence-destroyed");n.nextButton!==undefined&&n.nextButton.unbind("click.sequence");n.prevButton!==undefined&&n.prevButton.unbind("click.sequence");n.pauseButton!==undefined&&n.pauseButton.unbind("click.sequence");n.pagination!==undefined&&n.paginationLinks.unbind("click.sequence");e(document).unbind("keydown.sequence");n.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence");e(window).unbind("hashchange.sequence");n.stopAutoPlay();clearTimeout(n.transitionThresholdTimer);n.canvas.children("li").remove();n.canvas.prepend(n.frames);n.frames.removeClass("animate-in animate-out").removeAttr("style");n.frames.eq(n.currentFrameID-1).addClass("animate-in");n.nextButton!==undefined&&n.nextButton!==!1&&n.nextButton.hide();n.prevButton!==undefined&&n.prevButton!==!1&&n.prevButton.hide();n.pauseButton!==undefined&&n.pauseButton!==!1&&n.pauseButton.hide();n.pauseIcon!==undefined&&n.pauseIcon!==!1&&n.pauseIcon.hide();n.pagination!==undefined&&n.pagination!==!1&&n.pagination.hide();t!==undefined&&t();n.destroyed();n.container.removeData()}};var r=function(e,t){switch(t){case"next":e.next();break;case"prev":e.prev();break;case"pause":e.pause(!0)}},i=function(e,t,n){t.css(o(e,{"transition-duration":n,"transition-delay":n,"transition-timing-function":""}))},s=function(t){var n=[],r=[];t.currentFrameChildren.each(function(){n.push(parseFloat(e(this).css(t.prefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.prefix+"transition-delay").replace("s","")))});t.nextFrameChildren.each(function(){r.push(parseFloat(e(this).css(t.prefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.prefix+"transition-delay").replace("s","")))});var i=Math.max.apply(Math,n),s=Math.max.apply(Math,r),u=i-s,a=0,f=0;u<0&&!t.settings.preventDelayWhenReversingAnimations?a=Math.abs(u):u>0&&(f=Math.abs(u));var l=function(n,r,i,s){r.each(function(){var r=parseFloat(e(this).css(t.prefix+"transition-duration").replace("s","")),u=parseFloat(e(this).css(t.prefix+"transition-delay").replace("s","")),a=e(this).css(t.prefix+"transition-timing-function");if(a.indexOf("cubic-bezier")>=0){var f=a.replace("cubic-bezier(","").replace(")","").split(",");e.each(f,function(e,t){f[e]=parseFloat(t)});var l=[1-f[2],1-f[3],1-f[0],1-f[1]];a="cubic-bezier("+l+")"}else a="linear";var c=r+u;n["transition-duration"]=r+"s";n["transition-delay"]=i-c+s+"s";n["transition-timing-function"]=a;e(this).css(o(t.prefix,n))})};l(t.transitionProperties,t.currentFrameChildren,i,a);l(t.transitionProperties,t.nextFrameChildren,s,f)},o=function(e,t){var n={};for(var r in t)n[e+r]=t[r];return n},u=function(e,t,n){if(t===!0){if(e.settings.autoPlay&&!e.isSoftPaused){clearTimeout(e.autoPlayTimer);e.autoPlayTimer=setTimeout(function(){e.settings.autoPlayDirection===1?e.next():e.prev()},n)}}else clearTimeout(e.autoPlayTimer)},a=function(t,n,r){switch(n){case!1:return undefined;case!0:r===".sequence-preloader"&&c.defaultPreloader(t.container,t.transitionsSupported,t.prefix);return e(r);default:return e(n)}},f=function(t,n,r,i,s,o){if(i==="out")var u=function(){t.afterCurrentFrameAnimatesOut();t.settings.transitionThreshold===!0&&(o===1?t.nextFrame.addClass("animate-in"):o===-1&&t.nextFrame.toggleClass("animate-out animate-in"))};else if(i==="in")var u=function(){t.afterNextFrameAnimatesIn();l(t);t.active=!1;if(!t.isHardPaused&&!t.isBeingHoveredOver)if(!t.delayUnpause)t.unpause(!1);else{t.delayUnpause=!1;t.unpause()}};r.data("animationEnded",!1);n.bind(t.transitionEnd,function(i){e(i.target).data("animationEnded",!0);var s=!0;r.each(function(){if(e(this).data("animationEnded")===!1){s=!1;return!1}});if(s){n.unbind(t.transitionEnd);u()}})},l=function(t){if(t.settings.hashTags){t.currentHashTag=t.nextFrame.prop(t.getHashTagFrom);t.frameHashIndex=e.inArray(t.currentHashTag,t.frameHashID);if(t.frameHashIndex!==-1&&(t.settings.hashChangesOnFirstFrame||!t.isStartingFrame||!t.transitionsSupported)){t.nextFrameID=t.frameHashIndex+1;document.location.hash="#"+t.currentHashTag}else{t.nextFrameID=t.settings.startingFrameID;t.isStartingFrame=!1}}},c={modernizr:function(){window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&v[i]!==n)return t=="pfx"?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+b.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+w.join(r+" ")+r).split(" "),a(i,t,n))}var l="2.6.1",c={},h=t.documentElement,p="modernizr",d=t.createElement(p),v=d.style,m,g={}.toString,y="Webkit Moz O ms",b=y.split(" "),w=y.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},S={},x={},T={},N=[],C=N.slice,k,L={}.hasOwnProperty,A;!s(L,"undefined")&&!s(L.call,"undefined")?A=function(e,t){return L.call(e,t)}:A=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=self;if(typeof t!="function")throw new TypeError;var n=C.call(arguments,1),r=function(){if(self instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(C.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(C.call(arguments)))};return r}),S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect};for(var O in S)A(S,O)&&(k=O.toLowerCase(),c[k]=S[O](),N.push((c[k]?"":"no-")+k));return c.addTest=function(e,t){if(typeof e=="object")for(var r in e)A(e,r)&&c.addTest(r,e[r]);else{e=e.toLowerCase();if(c[e]!==n)return c;t=typeof t=="function"?t():t,enableClasses&&(h.className+=" "+(t?"":"no-")+e),c[e]=t}return c},r(""),d=m=null,c._version=l,c._domPrefixes=w,c._cssomPrefixes=b,c.testProp=function(e){return u([e])},c.testAllProps=f,c.prefixed=function(e,t,n){return t?f(e,t,n):f(e,"pfx")},c}(self,self.document)},defaultPreloader:function(t,n,r){var i='<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';e("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+r+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+r+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+r+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+r+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+r+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");t.prepend(i);if(!Modernizr.svg&&!n){e(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');setInterval(function(){e(".sequence-preloader .circle").fadeToggle(500)},500)}else n||setInterval(function(){e(".sequence-preloader").fadeToggle(500)},500)},operaTest:function(){e("body").append('<span id="sequence-opera-test"></span>');var t=e("#sequence-opera-test");t.css("-o-transition","1s");return t.css("-o-transition")!=="1s"?!1:!0}},h={startingFrameID:1,cycle:!0,animateStartingFrameIn:!1,transitionThreshold:!1,reverseAnimationsWhenNavigatingBackwards:!0,preventDelayWhenReversingAnimations:!1,moveActiveFrameToTop:!0,autoPlay:!1,autoPlayDirection:1,autoPlayDelay:5e3,navigationSkip:!0,navigationSkipThreshold:250,fadeFrameWhenSkipped:!0,fadeFrameTime:150,preventReverseSkipping:!1,nextButton:!1,showNextButtonOnInit:!0,prevButton:!1,showPrevButtonOnInit:!0,pauseButton:!1,unpauseDelay:null,pauseOnHover:!0,pauseIcon:!1,showPauseButtonOnInit:!0,pagination:!1,showPaginationOnInit:!0,preloader:!1,preloadTheseFrames:[1],preloadTheseImages:[],hideFramesUntilPreloaded:!0,prependPreloadingComplete:!0,hidePreloaderUsingCSS:!0,hidePreloaderDelay:0,keyNavigation:!0,numericKeysGoToFrames:!0,keyEvents:{left:"prev",right:"next"},customKeyEvents:{},swipeNavigation:!0,swipeThreshold:20,swipePreventsDefault:!1,swipeEvents:{left:"prev",right:"next",up:!1,down:!1},hashTags:!1,hashDataAttribute:!1,hashChangesOnFirstFrame:!1,fallback:{theme:"slide",speed:500}};e.fn.sequence=function(t){return this.each(function(){e.data(this,"sequence")||e.data(this,"sequence",new n(e(this),t,h,c))})}})(jQuery);
$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "images/tn-model1.png",
            "images/tn-model2.png",
            "images/tn-model3.png"
        ]
    };

    var mySequence = $("#sequence").sequence(options).data("sequence");
});

/*
  Author: Troy Mcilvena (http://troymcilvena.com)
  Twitter: @mcilvena
  Date: 24 November 2011
  Version: 1.3

  Revision History:
    1.0 (23/08/2010)  - Initial release.
    1.1 (27/08/2010)  - Made plugin chainable
    1.2 (10/11/2010)  - Fixed broken retina_part setting. Wrapped in self executing function (closure)
    1.3 (29/10/2011)  - Checked if source has already been updated (via mattbilson)
*/

(function( $ ){
  $.fn.retina = function(retina_part) {
    // Set default retina file part to '-2x'
    // Eg. some_image.jpg will become some_image-2x.jpg
    var settings = {'retina_part': '-2x'};
    if(retina_part) jQuery.extend(settings, { 'retina_part': retina_part });

    if(window.devicePixelRatio >= 2) {
      this.each(function(index, element) {
        if(!$(element).attr('src')) return;

        var checkForRetina = new RegExp("(.+)("+settings['retina_part']+"\\.\\w{3,4})");
        if(checkForRetina.test($(element).attr('src'))) return;

        var new_image_src = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1"+ settings['retina_part'] +"$2");
        $.ajax({url: new_image_src, type: "HEAD", success: function() {
          $(element).attr('src', new_image_src);
        }});
      });
    }
    return this;
  }
})( jQuery );

$(window).load(function () {

    jQuery("#preloader").delay(500).fadeOut("slow");
    sliderHeight();
    topMenuAnimate();
    $('.panel-title').children('a').children('.accordion_sign').html('+');
    $('.activePanel').children('a').children('.accordion_sign').html('-');
    $('.main_slider').flexslider({
        animation: "slide",
        direction: "vertical",
        directionNav: false,
        pauseOnHover: false,
        slideshowSpeed: 2000,
        animationSpeed: 300
    });
    var deviceDetect = $(window).width();
    var sliderContentWidth;
    if (deviceDetect <= 1024 && deviceDetect >= 800) {
        sliderContentWidth = 320;
        counter_no = 3
    }
    else if (deviceDetect <= 799 && deviceDetect >= 768) {
        sliderContentWidth = 370;
        counter_no = 2
    }
    else if (deviceDetect <= 767 && deviceDetect >= 480) {
        sliderContentWidth = 480;
        counter_no = 1
    }
    else {
        sliderContentWidth = 292;
        counter_no = 4
    }
    $('.landing_page_slider_container').flexslider({
        animation: "slide",
        animationLoop: true,
        directionNav: true,
        itemWidth: sliderContentWidth,
        controlNav: false,
        itemMargin: counter_no,
        prevText: "",
        nextText: ""
    });
    $('.twitter_slider').flexslider({
        animation: "slide",
        directionNav: false,
    });
});
jQuery(window).resize(function () {
    sliderHeight();
});
jQuery(document).resize(function () {
    sliderHeight();
});
jQuery(document).ready(function () {
$('input[name="phone"]').inputmask("(999)999-99-99");
$('.formsend').submit(function(e){

    e.preventDefault();
    var form = $(this);
    var data = form.serialize();
    var id = form.attr('id');
    data = data+'&id='+id;
    var name = form.find('input[name="name"]').val();
    var phone = form.find('input[name="phone"]');
    if(phone.val() != ''){


    $.ajax({
      type:'POST',
      url:'../data/sendmail.php',
      data: data,
      success:function(data){
        $.fancybox.open({href:'#message_sended'});
        setTimeout(function () {$.fancybox.close();}, 1000);

      },
      error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                alert(xhr.status); // покажем ответ сервера
                alert(thrownError); // и текст ошибки
          }
      });

  } else {
    phone.css("border", "2px solid red");
    phone.attr("placeholder", "Заполните, пожалуйста номер телефона");
  }


  });
    sliderHeight();
    $('img').retina();
    // theme color change function
    $('.preViewsColor a').click(function () {
        $('#themeColorChangeLink').attr({'href': 'css/color/' + $(this).attr('data-folderName') + '/style.css'});
        return false;
    });
    $('.single_team_mamber_close').click(function () {
        $('#single_team_mamber_back').css({"display": "none"});
    });
    $('.team_menu').click(function () {
        $('#single_team_mamber_back').css({"display": "block"});
        $(this).attr('data-teamShow');
        $('.all_team').slideUp(0);
        $('.' + $(this).attr('data-teamShow')).slideDown("slow");
        return false;
    });
    $('#formSubmit').click(function () {
        var error = false;
        if (emailValidation('email') == false) {
            error = true;
        }
        if (textBoxValidation('name') == false) {
            error = true;
        }
        if (error == true) {
            return false;
        }
        else {
            var uname = $('#name').val();
            var uemail = $('#email').val();
            var umessage = $('#message').val();
            $.ajax({
                type: "POST",
                url: "mailto.php",
                data: {uname: uname, uemail: uemail, umessage: umessage}
            }).done(function (msg) {
                $('.mail_message').css({"display": "block"});
                $('.mail_message').html(msg);
            });
        }
    })
    topMenuAnimate();
    //main manu scroll and active code start
    $('.menu_area a[href^="#"] , .team_menu[href^="#"], .single_team_mamber_close[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 95
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    $('#nav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            easing: 'swing',
        }
    );
    //main manu scroll and active end
    $('.panel-title').click(function () {
        $('.panel-title').removeClass('activePanel');
        $('.panel-title').children('a').children('.accordion_sign').html('+');
        $(this).children('a').children('.accordion_sign').html('-');
        $(this).addClass('activePanel');
    });
    /*
     // Active BxSlider.
     $('.bxslider').bxSlider();
     */
    // fotter slider
    /*portfolio_menu */
    $('.portfolio_menu ul li').click(function () {
        $('.portfolio_menu ul li').removeClass('active_prot_menu');
        $(this).addClass('active_prot_menu');
    });

    var $container = $('#portfolio');
    $container.isotope({
        itemSelector: '.col-md-3',
        layoutMode: 'fitRows'
    });
    /*
     $('.rating_active').mouseover(function(){
     $(this).prevAll().addClass('rating_active');
     });
     */
    $('#filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});
        return false;
    });
});
$(window).scroll(function () {
    topMenuAnimate();
});
function topMenuAnimate() {
    var topSliderHeight = jQuery('#home').height();
    var menuAreaHeight = $('.menu_area').height();
    if ($(window).width() >= 768) {
        if ($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu') && jQuery(window).scrollTop() >= menuAreaHeight) {
            $('.menu_area').addClass('topFixedMenu');
            $('.main_menu_outer').css({
                "opacity": '1'
            });
        }
        else if ($('body').hasClass('menuTop') && jQuery(window).scrollTop() >= menuAreaHeight) {
            $('.menu_area').addClass('topFixedMenu');
        }
        else if (jQuery(window).scrollTop() >= topSliderHeight) {
            $('.menu_area').addClass('topFixedMenu');
        }
        else {
            $('.menu_area').removeClass('topFixedMenu');
            if ($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu')) {
                $('.main_menu_outer').css({
                    "opacity": '0'
                });
            }
        }
    }
    if (!$('body').hasClass('transparentMenu')) {
        $('.main_menu_outer').css({
            "min-height": menuAreaHeight
        });
    }

}

/* User Input Validation Functions*/
function emailValidation(id) {
    var email_compare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = $('#' + id).val();
    if (email == "" || email == " ") {
        $('#' + id).addClass('invalid');
        return false;
    } else if (!email_compare.test(email)) {
        $('#' + id).addClass('invalid');
        return false;
    }
    else {
        $('#' + id).removeClass('invalid');
        return true;
    }
}
function textBoxValidation(id) {
    var selctor = $('#' + id).val();
    if (selctor == "" || selctor == " ") {
        $('#' + id).addClass('invalid');
        return false;
    }
    else {
        if ($('#' + id).hasClass('invalid')) {
            $('#' + id).removeClass('invalid');
        }
        return true;
    }
}
function sliderHeight() {
    var sliderConHeight = $('.slider_readmore').height() + $('.main_slider').height();
    var paddingTop = parseInt(($(window).height() - sliderConHeight) / 2);
}


/* Theme Setup icon*/

function themeColorShow() {
    if ($('.preViewsMenu_area').hasClass('visibleTrue')) {
        jQuery('.preViewsMenu_area').animate({left: "-263px"}, 500);
        jQuery('.preViewsMenu_area').removeClass('visibleTrue');
    }
    else {
        jQuery('.preViewsMenu_area').animate({left: "0"}, 500);
        jQuery('.preViewsMenu_area').addClass('visibleTrue');
    }

}
/*
 * @name        eTimer
 * @version     1.1
 * @author      Ilia Grigorev
 * @email       giv13@bk.ru
 * @license     MIT License
 * http://e-timer.ru/
 */
;(function($) {
  var units = {
      en: ['Days', 'Hours', 'Minutes', 'Seconds'],
      ru: ['д.', 'ч.', 'м.', 'с.'],
      ua: ['днів', 'годин', 'хвилин', 'секунд'],
      sec: [86400, 3600, 60, 1]
    },
    defaults = {
      etType: 1,
      etDate: '0',
      etTitleText: '',
      etTitleSize: 14,
      etShowSign: 1,
      etSep: ':',
      etFontFamily: 'Arial',
      etTextColor: 'black',
      etPaddingTB: 0,
      etPaddingLR: 0,
      etBackground: 'transparent',
      etBorderSize: 0,
      etBorderRadius: 0,
      etBorderColor: 'transparent',
      etShadow: '',
      etLastUnit: 4,
      etNumberFontFamily: 'Arial',
      etNumberSize: 32,
      etNumberColor: 'black',
      etNumberPaddingTB: 0,
      etNumberPaddingLR: 0,
      etNumberBackground: 'transparent',
      etNumberBorderSize: 0,
      etNumberBorderRadius: 0,
      etNumberBorderColor: 'transparent',
      etNumberShadow: ''
    };

  $.fn.eTimer = function(options) {
    var config = $.extend({}, defaults, options);

    return this.each(function() {
      var element = $(this),
        date = config.etDate,
        dayNum = 2;

      element.date = function() {
        var now = new Date();
        if (config.etType == 1) {
          date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        } else if (config.etType == 2) {
          var day = now.getDay();
          if (day == 0) day = 7;
          date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8 - day);
        } else if (config.etType == 3) {
          date = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        } else {
          date = date.split('.');
          date = new Date(date[2], date[1] - 1, date[0], date[3], date[4]);
          if (Math.floor((date - now) / units.sec[0] / 1000) >= 100) dayNum = 3;
        }
      };

      element.layout = function() {
        var unit,
          elClass = element.attr('class').split(' ')[0];
        element.html('').addClass('eTimer').append('<div class="etTitle">' + config.etTitleText + '</div>');
        $.each(units.en, function(i) {
          if (i < config.etLastUnit) {
            unit = $('<div class="etUnit et' + this + '"></div>').appendTo(element).append('<div class="etNumber">0</div>').append('<div class="etNumber">0</div>').after('<div class="etSep">' + config.etSep + '</div>');
            if (i == 0 && dayNum == 3) unit.append('<div class="etNumber">0</div>');
            if (config.etShowSign == 1) unit.append('<div class="etSign">' + units.ru[i] + '</div>');
            if (config.etShowSign == 2) unit.append('<div class="etSign">' + units.en[i].toLowerCase() + '</div>');
            if (config.etShowSign == 3) unit.append('<div class="etSign">' + units.ua[i] + '</div>');
          }
        });
        element.append('<style type="text/css">.' + elClass + ' {display: inline-block; line-height: normal; font-family: ' + config.etFontFamily + '; color: ' + config.etTextColor + '; padding: ' + config.etPaddingTB + 'px ' + config.etPaddingLR + 'px; background: ' + config.etBackground + '; border: ' + config.etBorderSize + 'px solid ' + config.etBorderColor + '; -webkit-border-radius: ' + config.etBorderRadius + 'px; -moz-border-radius: ' + config.etBorderRadius + 'px; border-radius: ' + config.etBorderRadius + 'px; -webkit-box-shadow: ' + config.etShadow + '; -moz-box-shadow: ' + config.etShadow + '; box-shadow: ' + config.etShadow + ';} .' + elClass + ' .etTitle {margin-bottom: 10px; font-size: ' + config.etTitleSize + 'px;} .' + elClass + ' .etUnit {display: inline-block;} .' + elClass + ' .etUnit .etNumber {display: inline-block; margin: 1px; text-align: center; font-family: ' + config.etNumberFontFamily + '; font-size: ' + config.etNumberSize + 'px; color: ' + config.etNumberColor + '; padding: ' + config.etNumberPaddingTB + 'px ' + config.etNumberPaddingLR + 'px; background: ' + config.etNumberBackground + '; border: ' + config.etNumberBorderSize + 'px solid ' + config.etNumberBorderColor + '; -webkit-border-radius: ' + config.etNumberBorderRadius + 'px; -moz-border-radius: ' + config.etNumberBorderRadius + 'px; border-radius: ' + config.etNumberBorderRadius + 'px; -webkit-box-shadow: ' + config.etNumberShadow + '; -moz-box-shadow: ' + config.etNumberShadow + '; box-shadow: ' + config.etNumberShadow + ';} .' + elClass + ' .etUnit .etSign {text-align: center; font-size: ' + (+config.etNumberSize / 2.5) + 'px;} .' + elClass + ' .etSep {display: inline-block; vertical-align: top; font-size: ' + config.etNumberSize + 'px; padding: ' + (+config.etNumberPaddingTB + +config.etNumberBorderSize) + 'px 5px;} .' + elClass + ' .etSep:last-of-type {display: none;}</style>').append('<style type="text/css">.' + elClass + ' .etUnit .etNumber {width: ' + $('.etNumber:visible').eq(0).css('width') + ';}</style>');
      };

      element.tick = function() {
        var timeLeft = Math.floor((date - new Date()) / 1000),
          unit;
        if (timeLeft < 0) clearInterval(element.data('interval'));
        else {
          $.each(units.en, function(i) {
            if (i < config.etLastUnit) {
              unit = Math.floor(timeLeft / units.sec[i]);
              timeLeft -= unit * units.sec[i];
              if (i == 0 && dayNum == 3) {
                element.find('.et' + this).find('.etNumber').eq(0).text(Math.floor(unit / 100) % 10);
                element.find('.et' + this).find('.etNumber').eq(1).text(Math.floor(unit / 10) % 10);
                element.find('.et' + this).find('.etNumber').eq(2).text(unit % 10);
                if ((Math.floor(unit / 100) % 10) == 0) {
                  dayNum = 2;
                  element.find('.et' + this).find('.etNumber').eq(0).remove();
                }
              } else {
                element.find('.et' + this).find('.etNumber').eq(0).text(Math.floor(unit / 10) % 10);
                element.find('.et' + this).find('.etNumber').eq(1).text(unit % 10);
              }
            }
          });
        }
      };

      clearInterval(element.data('interval'));
      element.date();
      element.layout();
      element.tick();
      element.data('interval', setInterval(function() {
        element.tick()
      }, 1000));
    });
  };
})(jQuery);
  jQuery(document).ready(function () {
    jQuery(".eTimer").eTimer({
      etType: 0,
      etDate: generationDateStr(),
      etTitleText: "До конца акции осталось:",
      etTitleSize: 18,
      etShowSign: 1,
      etSep: " ",
      etFontFamily: "Trebuchet MS",
      etTextColor: "black",
      etPaddingTB: 15,
      etPaddingLR: 13,
      etBackground: "transparent",
      etBorderSize: 0,
      etBorderRadius: 0,
      etBorderColor: "black",
      etShadow: " 0px 0px 0px 0px #333333",
      etLastUnit: 3,
      etNumberFontFamily: "Trebuchet MS",
      etNumberSize: 28,
      etNumberColor: "black",
      etNumberPaddingTB: 5,
      etNumberPaddingLR: 6,
      etNumberBackground: "transparent",
      etNumberBorderSize: 0,
      etNumberBorderRadius: 5,
      etNumberBorderColor: "transparent",
      etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
    });
  });
  function generationDateStr() {
    var nowDate = new Date();
    nowDate.setDate(nowDate.getDate() + 2);

    return nowDate.getDate() + '.' + parseInt(nowDate.getMonth() + 1) + '.' + nowDate.getFullYear() + '.' + parseInt(getRandomTime(23, 1)) + '.' + parseInt(getRandomTime(60, 1));

  }
  function getRandomTime(max, min) {
    return Math.random() * (max - min) + min;
  }
