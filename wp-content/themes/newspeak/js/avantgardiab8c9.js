"use strict";


function empty(mixed_var) {
  //  discuss at: http://phpjs.org/functions/empty/
  // original by: Philippe Baumann
  //    input by: Onno Marsman
  //    input by: LH
  //    input by: Stoyan Kyosev (http://www.svest.org/)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Francesco
  // improved by: Marc Jansen
  // improved by: Rafal Kukawski
  //   example 1: empty(null);
  //   returns 1: true
  //   example 2: empty(undefined);
  //   returns 2: true
  //   example 3: empty([]);
  //   returns 3: true
  //   example 4: empty({});
  //   returns 4: true
  //   example 5: empty({'aFunc' : function () { alert('humpty'); } });
  //   returns 5: false

  var undef, key, i, len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }

  if (typeof mixed_var === 'object') {
    for (key in mixed_var) {
      // TODO: should we check for own properties only?
      //if (mixed_var.hasOwnProperty(key)) {
      return false;
      //}
    }
    return true;
  }

  return false;
}


/**
 * OWL Carousel
 */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){a=this.options.rtl?-a:a; return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1,rtl:!1}})(jQuery,window,document);

/** OWL Carousel
-----------------------------------*/

jQuery(document).ready(function($){
	var columnWidth = 155;
	var marginWidth = 10;
	var minGridWrapWidth = 3 * columnWidth;
	var $brickWrap = $('.post-block-wrapper');
	var $packeryBlocks = $('.post-block-wrapper');
	var hasGrid = $brickWrap.length > 0;
	var $window = $(window);
	var $headStrip = $('.head-stripe');
	var headStripeHeight = $headStrip.length > 0 ? $headStrip.height() : 0;

	if(hasGrid){
		$packeryBlocks.packery({
			itemSelector: '.grid-block'
		});
		
		$brickWrap.find('img').load(function(){
			$packeryBlocks.packery();
		});
	}
	
	$window.resize(sfResize);
	
	/**
	 *	This function is called every time browser window is resized. It is used for layout fixing
	 *	that cannot be achieved with CSS.
	 */
	function sfResize(){
		if(hasGrid){
			var w = Math.floor($window.width() / columnWidth) * columnWidth;
			if(w < minGridWrapWidth){
				w = minGridWrapWidth;
			}
			
			$brickWrap.css('width', w);
		}
	}
	
	/**
	 *	This is handler for click on load more post button in grid view.
	 *	If there are more posts to be loaded, button will be visible and active.
	 */
	$('#grid-load-more').on({
		click: function(e){
			e.preventDefault();
			
			var $this = $(this);
			if($this.hasClass('loading')) return;
			
			var href = $this.attr('href');
			var nextPage = parseInt($this.data('next-page'));
			
			if(nextPage == '' || typeof(nextPage) == 'undefined' || typeof(nextPage) == 'NaN'){
				nextPage = 1;
			}
			nextPage++;
			$this.data('next-page', nextPage);
			
			$this.addClass('loading');
			$.get(href, function(response){				
				var $responseHTML = $(response);
				var $blocks = $responseHTML.find('.grid-block');
				var $images = $blocks.find('img.avantgardia-block-image');
				var loaded = 0;
								
				if($images.length > 0){
					$images.on('load', function(){
						loaded++;
						if(loaded == $images.length){
							$this.removeClass('loading');
							
							$packeryBlocks.append($blocks);
							$packeryBlocks.packery('appended', $blocks);
							
							var $nexPageLink = $responseHTML.find('#grid-load-more');
							var link = $nexPageLink.attr('href');
							if(link == '#'){
								$this.css('opacity', '0');
							}else{
								$this.attr('href', link);
							}
						}
					});
				}else{
					$this.removeClass('loading');
							
					$packeryBlocks.append($blocks);
					$packeryBlocks.packery('appended', $blocks);
					
					var $nexPageLink = $responseHTML.find('#grid-load-more');
					var link = $nexPageLink.attr('href');
					if(link == '#'){
						$this.css('opacity', '0');
					}else{
						$this.attr('href', link);
					}
				}
				
				$images.each(function(index, elem){
					var newImage = new Image();
					newImage.src = elem.src;
				});
				
			}, 'html');
		}
	});
	
	/**
	 *	This is handler for click on load more post button in two column and archives view.
	 *	If there are more posts to be loaded, button will be visible and active.
	 */
	$('#archive-load-more').on({
		click: function(e){
			e.preventDefault();
			
			var $this = $(this);
			if($this.hasClass('loading')) return;
			
			var href = $this.attr('href');
			var nextPage = parseInt($this.data('next-page'));
			
			if(nextPage == '' || typeof(nextPage) == 'undefined' || typeof(nextPage) == 'NaN'){
				nextPage = 1;
			}
			nextPage++;
			$this.data('next-page', nextPage);
			
			$this.addClass('loading');
			$.get(href, function(response){				
				var $responseHTML = $(response);
				var $blocks = $responseHTML.find('.post-content-wrapper .post, .post-content-wrapper .ag-ad-wrap');
				var $images = $blocks.find('img.ag-image');
				var $navigationWrapper = $('#load-more-posts');
				
				$blocks.addClass('animated zoomIn');
				var loaded = 0;
				if($images.length > 0){
					$images.on('load', function(){
						loaded++;
						if(loaded == $images.length){
							$this.removeClass('loading');
							
							$navigationWrapper.before($blocks);
							handleSidebarTransition();
							
							var $nexPageLink = $responseHTML.find('#archive-load-more');
							var link = $nexPageLink.attr('href');
							if(link == '#'){
								$navigationWrapper.css('display', 'none');
							}else{
								$this.attr('href', link);
							}
						}
					});
				}else{
					$this.removeClass('loading');
					
					$navigationWrapper.before($blocks);
					handleSidebarTransition();
					
					var $nexPageLink = $responseHTML.find('#archive-load-more');
					var link = $nexPageLink.attr('href');
					if(link == '#'){
						$navigationWrapper.css('display', 'none');
					}else{
						$this.attr('href', link);
					}
				}
				
				$images.each(function(index, elem){
					var newImage = new Image();
					newImage.src = elem.src;
				});
				
			}, 'html');
		}
	});
	
	var sidebarsInTransition = false;
	
	function handleSidebarTransition(){
		
		if(sidebarsInTransition) return;
		
		sidebarsInTransition = true;
		
		//Add transition classes and start transition 
		if($leftColumnContent.length > 0){
			$leftColumnContent.addClass('transition');
		}
		if($sidebarContent.length > 0){
			$sidebarContent.addClass('transition');
		}
		
		$window.scrollTop($window.scrollTop() + 1);
		
		// Remove transition classes after transition has completed
		setTimeout(function(){
				if($leftColumnContent.length > 0){
					$leftColumnContent.removeClass('transition');
				}
				if($sidebarContent.length > 0){
					$sidebarContent.removeClass('transition');
				}
				sidebarsInTransition = false;
			}, 
		510);
	}
	
	/**
	 *	This is handler for sidebar size scrolling.
	 */
	 
	var $sidebar = $('.sidebar');
	var $sidebarContent = $('.sidebar-content');
	var sidebarHeight = $sidebar.height();
	var $contentArea = $('.content-area');
	var sidebarLastScrollTop = -1;
	var sidebarWasScrollingDown = true;
	
	var $leftColumn = $('.column-left');
	var $leftColumnContent = $('.column-left-content');
	var leftColumnlastScrollTop = -1;
	var leftColumnWasScrollingDown = true;
		
	var pageMaxWidth960 = false;
	var pageMaxWidth640 = false;
	
	$sidebar.find('img').on('load', function(e){
		sidebarHeight = $sidebar.height();
		$window.resize();
	});
	
	$window.resize(function(e){		
		pageMaxWidth960 = $('#max-width-960').css('display') != 'none';
		pageMaxWidth640 = $('#max-width-640').css('display') != 'none';
		
		updateLeftColumn();
		
		$window.scroll();
	});
	
	function updateLeftColumn(){
		if($leftColumn.length == 0) return;
		
		var $sliderOnTop = $('.site-main .page-slider-wrap');
		$leftColumn.css('height', '');
		var leftColumnHeight = $contentArea.height();
		
		if($sliderOnTop.length > 0){
			leftColumnHeight = leftColumnHeight - parseInt($sliderOnTop.css('height'));
		}
		if(!pageMaxWidth640){
			$leftColumn.css('height', leftColumnHeight);
		}else{
			$leftColumn.css('height', '');
		}
		$leftColumnContent.css('width', $leftColumn.css('width'));
	}
	
	setSidebarPosition($sidebarContent, sidebarLastScrollTop, sidebarWasScrollingDown, 640);
	setSidebarPosition($leftColumnContent, leftColumnlastScrollTop, leftColumnWasScrollingDown, 960);

	
	function setSidebarPosition($mySidebar, lastScrollTop, wasScrollingDown, maxPageWidth){
		if ($mySidebar.length > 0) {
			
			var initialSidebarTop = $mySidebar.offset().top;
			var $contentArea = $('.content-area');
			
			$window.scroll(function(e) {

				if((maxPageWidth == 640 && pageMaxWidth640) || (maxPageWidth == 960 && pageMaxWidth960)){
					$mySidebar.removeClass('fixed');
					$mySidebar.css('top', 0);
					return;
				}
								
				var sidebarHeight = $mySidebar.outerHeight();
				var contentAreaHeight = $contentArea.height();
				
				if(sidebarHeight >= contentAreaHeight){
					return;
				}
				
				var windowHeight = $window.height();

				var scrollTop = $window.scrollTop();
				var scrollBottom = scrollTop + windowHeight;

				var sidebarTop = $mySidebar.offset().top;
				var sidebarBottom = sidebarTop + sidebarHeight;
				var sidebarPaddingTop = parseInt($mySidebar.css('padding-top'));
				
				var heightDelta = Math.abs(windowHeight - sidebarHeight);
				var scrollDelta = lastScrollTop - scrollTop;

				var isScrollingDown = (scrollTop > lastScrollTop);
				var isWindowLarger = (windowHeight > sidebarHeight);
				
				var $parent = $mySidebar.parent();
				var parentHeight = $parent.height();
				
				var contentAreaTop = $contentArea.offset().top;

				if ((isWindowLarger && scrollTop > initialSidebarTop) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
					$mySidebar.addClass('fixed');
				} else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
					$mySidebar.removeClass('fixed');
				}

				var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
				var dragTopUp = (sidebarTop + sidebarPaddingTop >= scrollTop && !isScrollingDown);

				if (dragBottomDown) {
					if (isWindowLarger) {
						if(sidebarTop + sidebarHeight > contentAreaTop + contentAreaHeight){
							var bottomTop = contentAreaTop + contentAreaHeight - sidebarHeight - scrollTop;
							$mySidebar.css('top', bottomTop);
						}else{
							$mySidebar.css('top', 0);
						}
					} else {
						if(sidebarTop + sidebarHeight > contentAreaTop + contentAreaHeight){
							var bottomTop = contentAreaTop + contentAreaHeight - sidebarHeight - scrollTop;
							$mySidebar.css('top', bottomTop);
						}else{
							$mySidebar.css('top', -heightDelta);
						}
					}
				} else if (dragTopUp) {
					$mySidebar.css('top', -sidebarPaddingTop);					
					
					if($mySidebar.offset().top < $parent.offset().top){
						$mySidebar.css('top', '');
						$mySidebar.removeClass('fixed');
					}
				} else if ($mySidebar.hasClass('fixed')) {
					var currentTop = parseInt($mySidebar.css('top'), 10);
					
					var minTop = -(sidebarHeight);
					var scrolledTop = currentTop + scrollDelta;
					
					var isPageAtBottom = (scrollTop + windowHeight >= $(document).height());
					var newTop = (isPageAtBottom) ? minTop : scrolledTop;
					$mySidebar.css('top', newTop);					
				}
												
				lastScrollTop = scrollTop - 1;
				wasScrollingDown = isScrollingDown;
				
				sidebarTop = $mySidebar.offset().top;
				if(sidebarTop + sidebarHeight > contentAreaTop + contentAreaHeight){
							var bottomTop = contentAreaTop + contentAreaHeight - sidebarHeight - scrollTop;
							$mySidebar.css('top', bottomTop);							
				}
			});
		}
	}
		
	function resizeSFSlider(){
		$fullWidthSlider.css('left', '');
		$fullWidthSlider.css('width', $window.width()).css('left', -$fullWidthSlider.offset().left);
	}
	
	// Avantgardia Slider window width 
	var $fullWidthSlider = $('.page-slider-wrap.window-width');
	if($fullWidthSlider.length > 0){
		resizeSFSlider();
		$window.resize(resizeSFSlider);
	}

	
	// Avantgardia Slider Layout 1
	$('.sfs-layout-type-1 .ag-slides-wrap').owlCarousel({
		autoPlay: 6000,
		stopOnHover: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		autoHeight: false,
		transitionStyle: 'fade',
		mouseDrag: false,
		navigation: false,
		touchDrag: false,
		rtl: avantgardia_data.rtl_support,
	}); 
	
	// Avantgardia Slider Layout 2
	$('.sfs-layout-type-2 .ag-slides-wrap').owlCarousel({
		autoPlay: 6000,
		stopOnHover: true,
		paginationSpeed: 1000,
		goToFirstSpeed: 2000,
		singleItem: true,
		autoHeight: false,
		transitionStyle: 'fade',
		mouseDrag: false,
		navigation: false,
		touchDrag: false,
		rtl: avantgardia_data.rtl_support,
	}); 
	
	// Avantgardia Slider Layout 3
	if($('.sfs-layout-type-3').length > 0){		
		var $sfs3 = $('.sfs-layout-type-3 .ag-slides-wrap').owlCarousel({
			autoPlay: 6000,
			stopOnHover: true,
			paginationSpeed: 1000,
			goToFirstSpeed: 2000,
			singleItem: true,
			autoHeight: false,
			transitionStyle: 'fade',
			mouseDrag: false,
			navigation: false,
			touchDrag: false,
			rtl: avantgardia_data.rtl_support,
			afterMove: function(e, item){
				if(shouldScrollList){
					var pages = $('.owl-page');
					var index = 0;
					for(var i = 0; i < pages.length; i++){
						if($(pages[i]).hasClass('active')){
							index = i;
							break;
						}
					}
					
					updateTitleList(index);					
				}
			}
		});
		
		$('.page-slider-wrap .post-and-slide-title a').click(function(e){
			e.preventDefault();
		});
		
		var shouldScrollList = false;
		var $titleList = $('.post-and-slide-title-list');		
		var $singleTitle = $('.post-and-slide-title-list .post-and-slide-title');
		var visibleTitles = 4;
		// this will setup  list of post titles on the right of the slider
		$window.resize(function(e){	
			$titleList.css('height', '');
			var singleTitleHeight = $singleTitle.height();
			visibleTitles = Math.floor($titleList.height() / singleTitleHeight);
			var newH = visibleTitles * singleTitleHeight - 16;
			$titleList.css('height', newH);
			shouldScrollList = visibleTitles < $singleTitle.length;
		});
		
		$singleTitle.each(function(index, elem){
			$(elem).data('index', index);
		});
		
		$('.page-slider-wrap').on('click', '.post-and-slide-title', function(e){
			var index = 0;
			for(var i = 0; i < $singleTitle.length; i++){
				if($singleTitle[i] == this){
					index = $(this).data('index');
					break;
				}
			}
			
			$sfs3.data('owlCarousel').goTo(index);
		});
	}
	
	function updateTitleList(index){
		var $elem = $(getTitleElementByIndex(index));
		if($elem.offset().top + $elem.height() >= $titleList.offset().top + $titleList.height()){
			doTitleListScroll(index);
		}
	}
	
	function getTitleElementByIndex(index) {
		for(var i = 0; i < $singleTitle.length; i++){
			if($($singleTitle[i]).data('index') == index){
				return $singleTitle[i];
			}
		}
		
		return null;
	}
	
	function doTitleListScroll(index){
		$singleTitle.each(function(index, elem){
			$(elem).animate({'top': -$(this).height()}, 300, 'linear');			
		});
		
		$singleTitle.promise().done(function(){
			var $first = $($singleTitle[0]);
			$first.detach();
			$titleList.append($first);
			$singleTitle = $('.post-and-slide-title-list .post-and-slide-title').css('top', '');
			$first = $($singleTitle[0]);
			var indexOfFirst = parseInt($first.data('index'));				
			if(indexOfFirst != index){
				doTitleListScroll(index);
			}
		});
	}
	
	// Main menu 'More' button
	
	var $mainMenu = $('.ag-header-menu');
	var $dropDown = $('.ag-drop-down');
	
	if($mainMenu.length > 0){
		var $headerSearch = $('.header-search');
		var $menuItems = $('.ag-header-menu > li');
		var $smallLogo = $('#small-header-logo');
				
		$window.resize(function(){
			var logoW = $smallLogo.outerWidth();
			if($smallLogo.css('display') == 'none'){
				logoW = 0;
			}	
			var availableW = $mainMenu.outerWidth() - $headerSearch.outerWidth() - $smallLogo.outerWidth() - $dropDown.outerWidth();
			var menuItemsW = 0;	
			$menuItems.each(function(index, elem){
				var $elem = $(elem);
				if(!$elem.hasClass('ag-drop-down')){
					var itemId = $elem.data('id');
					menuItemsW += $elem.outerWidth();

					if(menuItemsW > availableW){
						$elem.css('display', 'none');
						$dropDown.find('.menu-item-' + itemId).css('display', 'block');
					}else{
						$elem.css('display', '');
						$dropDown.find('.menu-item-' + itemId).css('display', 'none');
					}
				}
			});
			
			if(menuItemsW > availableW){
				$dropDown.css('display', 'block');
			}else{
				$dropDown.css('display', '');
			}
		});
	}
	
	// Main menu categories
	
	var $sfMenuFilters = $('.ag-menu-cat-filter');
	$sfMenuFilters.hover(
		function(){
			var $this = $(this);
			var $wrapper = $this.closest('.ag-fine-wrap');
			var index = $this.data('index');
			
			$wrapper.find('.current').removeClass('current fadeInRight animated');
			$this.addClass('current');
			$($wrapper.find('.ag-menu-post-list')[index]).addClass('current fadeInRight animated');
		}, 
		function(){}
	);
	
	// Main menu search
	var $headerSearch = $('.header-search-form');
	
	$headerSearch.find('input').on({
		focus: function(){
			$headerSearch.addClass('focus');
		},
		blur: function(){
			$headerSearch.removeClass('focus');
		}
	});
	
	$('#header-search-form').on('keyup', function(){
		var $form = $(this);
		var searchText = $form.find('input.s').val();
		if(!empty(searchText)){
			$form.addClass('active');
		}else{
			$form.removeClass('active');
		}
	});
	
	$('.search-button').on('click', function(e){
		var $form = $(this).closest('form');
		var searchText = $form.find('input.s').val();
		if(!empty(searchText)){
			$form.find('.searchsubmit').click();
		}
	});
	
	// Mobile menu
	
	var $mobileMenu = $('.ag-mobile-menu');
	var $mobileMenuButton = $('.ag-mobile-menu-button');
	
	$mobileMenuButton.on('click', function(e){
		if($mobileMenu.hasClass('open')){
			$mobileMenu.removeClass('open');
			$mobileMenu.find('.ag-nav-menu-mobile').slideUp(500);
		}else{
			$mobileMenu.addClass('open');
			$mobileMenu.find('.ag-nav-menu-mobile').slideDown(500);
		}
	});
	
	$mobileMenu.on({
		click: function(e){
			e.preventDefault();
			e.stopPropagation();
			
			var $li = $(this).closest('li');
			if($li.hasClass('open')){
				$li.removeClass('open');
				$li.find('> .sub-menu').slideUp(500);
			}else{
				$li.addClass('open');
				$li.find('> .sub-menu').slideDown(500);
			}
		}
	}, '.menu-arrow-down');
	
	// Header News Ticker
		
	var $ticker = $('.ag-head-ticker-sliding-panel');
	var $tickerWrap = $('.ag-head-ticker');
	var $tickerTitle = $('.ag-head-ticker-cat');
	var pauseTicker = false;
	var ticking = false;
	var newsTickerTimeoutID = 0;
	var tickerElementsPositions = new Array();
	// If you want to speed up/slow down ticker just change tickerSpeed.
	var tickerSpeed = 30;
	
	// Scrolls ticker slowly to the left.
	function newsTicker(){
		if(pauseTicker){
			$ticker.stop();
			ticking = false;
			clearTimeout(newsTickerTimeoutID);
			newsTickerTimeoutID = setTimeout(newsTicker, 1000);
			return;
		}
		if(ticking) return;
		ticking = true;
		var left = parseInt($ticker.css('left'));
		
		var duration = 1000 * (tickerWidth + left) / tickerSpeed;
		$ticker.stop().animate({left: -tickerWidth}, duration, 'linear', function(){
			$ticker.css('left', $tickerWrap.width());
			ticking = false;
			newsTicker();
		});
	}
	
	// Calculates how much should ticker move to the left so that the next element is shown.
	function getTickerLeftForNextElement(){
		var tickerLeft = parseInt($ticker.css('left'));
		var controlsWidth = $tickerWrap.find('.owl-controls').outerWidth();
		var targetWidth = $tickerWrap.width() - tickerLeft - controlsWidth;
				
		for(var i = 0; i < tickerElementsPositions.length; i++){
			if(tickerElementsPositions[i] >= targetWidth){
				return $tickerWrap.width() - tickerElementsPositions[i] - $($ticker.find('.item')[i]).width() - controlsWidth;
			}				
		}
		
		return $ticker.css('left');
	}
		
	// Calculates how much should ticker move to the left so that the previous element is shown.
	function getTickerLeftForPrevElement(){
		var tickerLeft = parseInt($ticker.css('left'));
		var tickerTitleWidth = $tickerWrap.find('.ag-head-ticker-cat').outerWidth(true);
				
		for(var i = 0; i < tickerElementsPositions.length; i++){
			if(tickerLeft - tickerTitleWidth + tickerElementsPositions[i] < 0){
				continue;
			}
			
			if(i > 0){
				return tickerTitleWidth -tickerElementsPositions[i - 1];
			}else{
				$ticker.css('left');
			}
		}
		
		return $ticker.css('left');
	}
	
	// If news ticker is present on the page, we should set it up.
	if($ticker.length > 0){
		var tickerWidth = 0;
		// Calculate ticker width.
		$ticker.find('.item').each(function(index, elem){
			tickerElementsPositions.push(tickerWidth);
			tickerWidth += $(elem).outerWidth();
		});
		
		$ticker.css('width', tickerWidth + 10).css('position', 'absolute').css('top', 0).css('left', $tickerTitle.outerWidth());
		
		// Wait for one second before starting ticker.
		setTimeout(function(){
			newsTicker();
		}, 1000);
		
		// Pause news ticker when mouse is over it.
		$ticker.find('.item').mouseover(
			function(){
				pauseTicker = true;
				newsTicker();
			}
		);
		
		$tickerWrap.hover(
			function(){},
			function(){
				pauseTicker = false;
				newsTicker();
			}
		);		
		
		// Controls for the news ticker.
		$tickerWrap.on('click', '.owl-prev', function(e){
			pauseTicker = true;
			newsTicker();
			clearTimeout(newsTickerTimeoutID);
			$ticker.stop().animate({left: getTickerLeftForNextElement()}, 200, 'linear');
		});
		
		$tickerWrap.on('click', '.owl-next', function(e){
			pauseTicker = true;
			newsTicker();
			clearTimeout(newsTickerTimeoutID);
			$ticker.stop().animate({left: getTickerLeftForPrevElement()}, 200, 'linear');
		});
	}
	
	// Two wolumn page, controlls for ressponsive view, hiding and showing
	// left and right column on title click.
	
	$('.column-tab').click(function(e){
		$('.column-tab').removeClass('selected');
		
		var $elem = $(this);
		$elem.addClass('selected');
		
		if($elem.hasClass('left-column-title')){
			$('.column-left').addClass('selected');
			$('.column-right').removeClass('selected');
		}
		
		if($elem.hasClass('right-column-title')){
			$('.column-left').removeClass('selected');
			$('.column-right').addClass('selected');
		}
		
		updateLeftColumn();
	});
		
	// Single post gallery
	var $singlePostGallery = $('.single-post-gallery-thumbnails');
	if($singlePostGallery.length > 0){
		$('.single-post-gallery-thumbnails').owlCarousel({	 
			items : 8,
			itemsDesktop : [960, 4],
			itemsDesktopSmall : [640, 3],
			itemsMobile: [480,  3],
			lazyLoad : true,
			navigation : true,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			pagination: false,
			mouseDrag: false
		});
		
		$singlePostGallery.on('click', '.item', function(e){
			var $item = $(this);
			var $imageWrap = $item.closest('.single-post-gallery').find('.single-post-gallery-main-image');
			var imgFullSrc = $item.data('full-image');
			var photographerName = $item.data('photographer');
			var photographerURL = $item.data('photographer-url');
			var loadImage = new Image();
			
			loadImage.onload = function(){
				$imageWrap.removeClass('loading');
				$imageWrap.find('img').attr('src', this.src).css('display', 'block');
				$imageWrap.find('.photographer-data-name').html(photographerName);
				$imageWrap.find('.photographer-data-url').attr('href', photographerURL);
				if(empty(photographerName)){
					$imageWrap.find('.image-source-info-wrap').css('display', 'none');
				}else{
					$imageWrap.find('.image-source-info-wrap').css('display', '');
				}
				$window.resize();
			}
					
			$imageWrap.addClass('loading');
			loadImage.src = imgFullSrc;			
		});
		
		$singlePostGallery.find('.item').get(0).click();
	}
	
	// Single post full width media
	var $singleFullWidthMedia = $('.post.type-3, .post.type-4, .post.type-5');
	var reInit = false;
	if($singleFullWidthMedia.length > 0){
		$window.resize(function(e){
			var $media = $('.single-post-media');
			
			if($media.length == 0) return;
			
			$media.css('left', '');
			$media.css('width', $window.width()).css('left', -$media.offset().left);
			
			// Title needs to match the width of the content and sidebar.
			var $titleWrap = $('.single-post-title-wrap');			
			$titleWrap.css('width', $('#content').css('width'));
			if($singleFullWidthMedia.hasClass('type-4') || $singleFullWidthMedia.hasClass('type-5')){
				$titleWrap.css('top', $media.height() + headStripeHeight);
			}
			
			if($singleFullWidthMedia.hasClass('type-3') || $singleFullWidthMedia.hasClass('type-5')){
				var $titleBackground = $('.single-post-title-background');
				$titleBackground.css('left', '');
				$titleBackground.css('width', $window.width()).css('left', -$titleBackground.offset().left);
			}
			
			// Sidebar needs to be moved down for the value of the media height.
			if($sidebarContent.length > 0){
				if(!pageMaxWidth640){
					$sidebarContent.css('padding-top', $media.height() + headStripeHeight);
				}else{
					$sidebarContent.css('padding-top', '');
				}
			}
			
			var $iframe = $media.find('iframe');
			// If we are showing video or audio in this post layout.
			if($iframe.length > 0) {
				var w = $iframe.attr('width');
				var h = $iframe.attr('height');
				
				var nw = $media.width();
				var nh = h / w * nw;
				
				$iframe.attr('width', nw).attr('height', nh);
				
			}
			
			// If this is quote post type, it should be adjusted.
			var $quoteWrap = $('.single-post-quote-wrap');
			var $postTitle = $('.single-post-title-content');
			
			if($('.post.type-3').length > 0) {
				$quoteWrap.css('margin-top', $postTitle.outerHeight());
			}
			
			if($('.post.type-4, .post.type-5').length > 0) {
				$quoteWrap.css('margin-bottom', $postTitle.outerHeight());
			}
					
			// If we are showing gallery in this post layout.
			if($singlePostGallery.length > 0 && !reInit){
				$singlePostGallery.data('owl-carousel').reinit();
				reInit = true;
			}
		});
	}
	
	// News blocks pagination and filtering
	
	$window.resize(function(){
		$('.ag-news-header').each(function(index, elem){
			var $elem = $(elem);
			var $title = $elem.find('.ag-news-block-title');
			var $pagination = $elem.find('.ag-news-navigation');
			var $menuButton = $elem.find('.ag-news-menu');
			
			var titleW = 0;
			if($title.length > 0){
				titleW = $title.outerWidth(true);
			}
			
			var paginationW = 0;
			if($pagination.length > 0){
				paginationW = $pagination.outerWidth(true);
			}
			
			var menuButtonW = 0;
			if($menuButton.length > 0){
				menuButtonW = $menuButton.outerWidth(true);
			}
			
			var availableW = $elem.outerWidth() - titleW - paginationW - menuButtonW;			
			var linksW = 0;
			var $menuDropdown = $elem.find('.ag-news-menu-links');
			
			$elem.find('.ag-news-filter-links .ag-news-filter-link').each(function(index, link){
				var $link = $(link);
				var linkW = $link.outerWidth(true);
				var catId = $link.data('cat');
				
				linksW += linkW;
				if(linksW + 10 >= availableW) {
					$link.css('display', 'none');
					$menuDropdown.find('.cat-id-' + catId).css('display', 'block');
				}else{
					$link.css('display', '');
					$menuDropdown.find('.cat-id-' + catId).css('display', 'none');
				}
			});
			
			if(linksW >= availableW){
				$elem.find('.ag-news-menu').css('display', 'inline-block');
			}else{
				$elem.find('.ag-news-menu').css('display', 'none');				
			}
		});
	});
	
	$('.ag-news-menu').click(function(e){
		var $this = $(this);
		if($this.hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});
	
	// Next page 
	$('.ag-news-nav-next').on('click', function(e){
		var $block = getNewsBlock(this);
		var page = parseInt($block.data('page')) + 1;
		var totalPages = parseInt($block.find('.ag-news-blocks-wrap').data('total-pages'));
		if(page > totalPages){
			return;
		}
		
		loadNewsBlock($block, page);		
	});
	
	// Previous page
	$('.ag-news-nav-prev').on('click', function(e){
		var $block = getNewsBlock(this);
		var page = parseInt($block.data('page')) - 1;
		if(page < 1) {
			return;
		}
		
		loadNewsBlock($block, page);		
	});
	
	// Category filter click
	$('.ag-news-filter-link').on('click', function(e){
		e.preventDefault();
		var $block = getNewsBlock(this);
		var catId = $(this).data('cat');
		$block.data('cat', catId);
		$block.find('.ag-news-filter-link').removeClass('active');
		$block.find('.cat-id-' + catId).addClass('active');
		$block.data('page', 1);
		loadNewsBlock($block, 1);
	});
	
	function getNewsBlock(elem){
		return $(elem).closest('.ag-news-block');
	}
	
	// Load content for news block
	function loadNewsBlock($block, page){
		$block.addClass('loading').find('.ag-news-loading-cover').html(loaderHtml);
		var data = {
				block_index: $block.data('index'),
				block_page: page,
				block_cat: $block.data('cat'),
				post_id: $block.data('post-id'),
			};
		
		$.ajax({
			type: 'POST',
			url: avantgardia_data.ajax_url + '?action=avantgardia_get_news',
			data: data,
			success: function(response){
				if(empty(response.error)){
					$block.data('page', page);
					var loaded = 0;
					var $images = $(response).find('img');
					$images.on('load', function(e){
						loaded++;
						if(loaded == $images.length){
							$block.removeClass('loading');
							$block.find('.ag-news-list').html(response);
							updateNewsNavigation($block, page);							
						}
					});
					$images.each(function(index, elem){
						var newImage = new Image();
						newImage.src = elem.src;
					});
				}else{
					$block.removeClass('loading');
				}
			}
		});
	}
	
	// Enable/disable navigation (prev/next page) in news blocks.
	function updateNewsNavigation($block, page){
		if($block.find('.ag-news-nav-next').length == 0 || $block.find('.ag-news-nav-prev').length == 0) return;
		
		var totalPages = parseInt($block.find('.ag-news-blocks-wrap').data('total-pages'));
		$block.find('.ag-news-nav-next').removeClass('disabled');
		$block.find('.ag-news-nav-prev').removeClass('disabled');
		
		if(page <= 1){
			$block.find('.ag-news-nav-prev').addClass('disabled');
		}
		if(page >= totalPages){
			$block.find('.ag-news-nav-next').addClass('disabled');
		}
		if(1 == totalPages){
			$block.find('.ag-news-nav-next').addClass('disabled');
			$block.find('.ag-news-nav-prev').addClass('disabled');
		}
	}
	
	function updateNewsFilters($block){
		
	}
	
	// Resizing video and audio embeds
	var $embededMedia = $('.format-video, .format-audio, .video-player, .embed-youtube');
	
	if($embededMedia.length > 0){
		$window.resize(function(){
			$embededMedia.each(function(index, elem){
				var $elem = $(elem);
				
				var $iframe = $elem.find('iframe');
				if($iframe.length > 0){
					var $frameWrapper = $iframe.parent();
					var w = $iframe.attr('width');
					var h = $iframe.attr('height');
					
					if(w.indexOf('%') >= 0){
						w = $elem.width() * parseInt(w) / 100;
					}else{
						w = parseInt(w);
					}
					
					if(h.indexOf('%') >= 0){
						h = $window.height() * parseInt(h) / 100;
					}else{
						h = parseInt(h);
					}				
					
					var ar = h / w;
					var wrapperW = $frameWrapper.width();
					var wrapperH = wrapperW * ar;
					$frameWrapper.css('display', 'block').css('position', 'relative').css('height', wrapperH);
					$frameWrapper.addClass('ag-embeded');
				}
			});
		});
	}
		
	// Fix for post header media late loading (sometimes iframe is late with 
	// loading and resizing, and can break page without this).
	if($('.single-post-media iframe').length > 0){		
		$window.load(function(e){
			$window.resize();
		});
	}
	
	// Justf fetchess global loader. It is used for displaying global loader on other 
	// places.
	function loaderHtml() {
		return $('#global-loader').html();
	}
	
	// Initialize navigation for each news block.
	$('.ag-news-block').each(function(index, elem){
		var $block = $(elem);
		updateNewsNavigation($block, 1);
		updateNewsFilters($block);
	});
	
	// Share buttons
	$('#page').on({
		mouseenter: function(){
			var $meta = $(this).closest('.grid-entry-meta');
			$meta.addClass('show-shb');
		},
		mouseleave: function(){
		},
		click: function(){
			var $meta = $(this).closest('.grid-entry-meta');
			$meta.addClass('show-shb');
		}
	}, '.post-meta-shb');
	
	$('#page').on({
		mouseenter: function(){
		},
		mouseleave: function(){
			$(this).removeClass('show-shb');
		}
	}, '.grid-entry-meta');
	
	$('#page').on({
		click: function(){
			var $elem = $(this);
			var $dataWrap = $elem.closest('.post-share-data');
			var title = $dataWrap.data('title');
			var url = $dataWrap.data('url');
			var description = $dataWrap.data('description');
			var thumb = $dataWrap.data('thumbnail');
			
			if($elem.hasClass('sffb-share')){
				avantgardiaFBShare(url, title, description, thumb);
			}
						
			if($elem.hasClass('sftw-share')){
				avantgardiaTWShare(url, title, description, thumb);
			}
						
			if($elem.hasClass('sfgp-share')){
				avantgardiaGPShare(url, title, description, thumb);
			}
						
			if($elem.hasClass('sfln-share')){
				avantgardiaINShare(url, title, description, thumb);
			}
						
			if($elem.hasClass('sfpt-share')){
				avantgardiaPTShare(url, title, description, thumb);
			}
		}
	}, '.meta-shb-button, .ag-ss-icon');
	
	// Single post content SwipeBox gallery
	
	var swipeboxOptions = {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: true // true will return to the first image after the last image is reached
	}

	$('.entry-content figure a').each(function(index, elem){
		var href = elem.href;
		if(href.indexOf('.jpg') > 0 || href.indexOf('.png') > 0 || href.indexOf('.jpeg') > 0){
			$(elem).addClass('ag-swipebox');
		}
	});

	$('.ag-swipebox').swipebox(swipeboxOptions);
	
	
	// Back to top button
	var $backToTop = $('#back-to-top');
	if($backToTop.length > 0){
		$backToTop.on('click', function(e){
			$('html, body').animate({'scrollTop': 0}, 500);
		});
		
		$window.scroll(function(e){
			if($window.scrollTop() > 1000){
				$backToTop.addClass('fadeInRight').removeClass('fadeOutRight');
			}else{
				$backToTop.addClass('fadeOutRight').removeClass('fadeInRight');
			}			
		});
	}
		
	//------------------------------------------------------------------
		
	var globalLoaderVisible = true;
	function removeGlobalLoader(){
		$window.resize();
		setTimeout(function(){ $window.resize(); }, 20);
		
		if(globalLoaderVisible){
			window.setTimeout(function(){
				$window.scrollTop(0);
			}, 0);			
			globalLoaderVisible = false;
			$('#global-loader').fadeOut();
			$('#page').fadeIn(500, function(){
				$(this).css('opacity', 1); 
			});
		}
	}
	
	$window.load(function(e){
		removeGlobalLoader();
	});
	
	setTimeout(removeGlobalLoader, 10000);
});

// Social share
var share_winWidth =  '740',
	share_winHeight = '620';


function avantgardiaFBShare(url, title, descr, image) {		
	var share_winTop = (screen.height / 2) - (share_winHeight / 2);
	var share_winLeft = (screen.width / 2) - (share_winWidth / 2);
	window.open('http://www.facebook.com/sharer.php?m2w&s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + encodeURIComponent(url) + '&p[images][0]=' + image, 'sharer', 'top=' + share_winTop + ',left=' + share_winLeft + ',toolbar=0,status=0,width=' + share_winWidth + ',height=' + share_winHeight);
}

function avantgardiaTWShare(url, title, descr, image) {
	var share_winTop = (screen.height / 2) - (share_winHeight / 2);
	var share_winLeft = (screen.width / 2) - (share_winWidth / 2);
	window.open('https://twitter.com/share?url=' + encodeURIComponent(url) +'&text='+ title, 'sharer', 'top=' + share_winTop + ',left=' + share_winLeft + ',toolbar=0,status=0,width=' + share_winWidth + ',height=' + share_winHeight);
}

function avantgardiaGPShare(url, title, descr, image) {
	var share_winTop = (screen.height / 2) - (share_winHeight / 2);
	var share_winLeft = (screen.width / 2) - (share_winWidth / 2);
	window.open('https://plus.google.com/share?url='+ encodeURIComponent(url), 'sharer', 'top=' + share_winTop + ',left=' + share_winLeft + ',toolbar=0,status=0,width=' + share_winWidth + ',height=' + share_winHeight);
}

function avantgardiaINShare(url, title, descr, image) {
	var share_winTop = (screen.height / 2) - (share_winHeight / 2);
	var share_winLeft = (screen.width / 2) - (share_winWidth / 2);
	window.open('http://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(url) +"&title="+ title +"&sumary="+ descr, 'sharer', 'top=' + share_winTop + ',left=' + share_winLeft + ',toolbar=0,status=0,width=' + share_winWidth + ',height=' + share_winHeight);
}

function avantgardiaPTShare(url, title, descr, image) {
	var share_winTop = (screen.height / 2) - (share_winHeight / 2);
	var share_winLeft = (screen.width / 2) - (share_winWidth / 2);
	window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&description=' + descr + '&media=' + image, 'sharer', 'top=' + share_winTop + ',left=' + share_winLeft + ',toolbar=0,status=0,width=' + share_winWidth + ',height=' + share_winHeight);
}
	