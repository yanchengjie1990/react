!function(t){function e(e,a){var n=e.length-1;document.title=e[a].title,t.articleTmpHtml(e[a],"#article-list","#article-detail"),0>=a?r.prevId="":(r.prevId=(a-1).toString(),r.prevTitle=e[a-1].title),a>=n?r.nextId="":(r.nextId=a+1,r.nextTitle=e[a+1].title),location.hash="#"+a;var i=Handlebars.compile(t("#article-page").html());t("#article-detail").append(i(r))}var a=parseInt(t.getUrlParam("id").split("#")[0])||parseInt(location.hash.substr(1));t(".small-menu").on("click",function(e){var a=e.target||window.event.srcElement;if(t(this).find(".sub-menu").toggle(),"A"==a.nodeName){var n=a.getAttribute("data-type");localStorage.setItem("type",n),location.href="index.htm"}});var n=localStorage.getItem("type"),i=[],r={prev:!1,next:!1};n&&t('.navContainer li[data-type="'+n+'"]').addClass("current").siblings().removeClass("current"),t(".navContainer li").on("click",function(){var e=t(this);e.addClass("current").siblings().removeClass("current");var a=e.attr("data-type");localStorage.setItem("type",a),location.href="index.htm"}),t.ajax({type:"get",url:"json/list.json",async:!0,success:function(n){i=JSON.parse(n).data;var r='<meta name="Description" content="'+i[a].content+'"/>',l='<meta name="keywords" content="'+i[a].keywords+'"/>';document.title=i[a].title,t("head").append(l).append(r),e(i,a)}}),t("#article-detail").on("click","#article-page-a a",function(){var a=parseInt(t(this).attr("data-type"));e(i,a)})}(Zepto);