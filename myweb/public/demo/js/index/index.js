!function(t){function e(e,a){t(".not-container").hide();var e=n.filter(function(t){return t.type===a});e.length||t(".not-container").show(),t.typeHtml(e,"#index-list","#container-list")}var n=[],a=localStorage.getItem("type");t(".navContainer li").on("click",function(){var r=t(this);r.addClass("current").siblings().removeClass("current");var i=r.attr("data-type");localStorage.setItem("type",i),a=i,e(n,a)}),Handlebars.registerHelper("getStr",function(t){return t.substring(0,110)}),a&&t('.navContainer li[data-type="'+a+'"]').addClass("current").siblings().removeClass("current"),t(".small-menu").on("click",function(r){var i=r.target||window.event.srcElement;if(t(this).find(".sub-menu").toggle(),"A"==i.nodeName){var s=i.getAttribute("data-type");localStorage.setItem("type",s),a=s,e(n,a)}}),t.ajax({type:"get",url:"demo/json/list.json",async:!0,success:function(r){var r=r;n=r.data,t.tmpHtml(r,"#index-list","#container-list"),a&&e(n,a)}})}(Zepto);