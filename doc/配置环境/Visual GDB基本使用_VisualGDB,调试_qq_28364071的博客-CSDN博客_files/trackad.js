!function(t,a,n){var e=!0,r={isInSight:function(a){const n=a.parentNode;if("indexSuperise_"+this.getDataset(n).pid in localStorage)return!1;var e=a.getBoundingClientRect(),r=t.innerHeight;return e.top<=r+100},loadImg:function(t){var a=this;if(!t.src){var n=a.getDataset(t).src;t.src=n}},getDataset:function(t){if(t.dataset)return t.dataset;var a=t.attributes,n={};name,matchStr;for(var e=0;e<a.length;e++)matchStr=a[e].name.match(/^data-(.+)/),matchStr=a[e].name.match(/^data-(.+)/),matchStr&&(name=matchStr[1].replace(/-([\da-z])/gi,function(t,a){return a.toUpperCase()}),n[name]=a[e].value);return n},throttle:function(t){var a=null;return function(){var n=new Date,e=this,r=arguments;a||(a=n),n-a>=500&&(t.apply(e,r),a=n)}},checkImgs:function(){for(var t=this,a=n(".pre-img-lasy"),r=0;r<a.length;r++)t.isInSight(a[r])&&t.loadImg(a[r]);e=!0}};void 0===t.csdn&&(t.csdn={}),t.csdn.trackad=r,n(function(){csdn.trackad.checkImgs(),n(t).on("scroll",function(){e&&(e=!1,csdn.trackad.throttle(csdn.trackad.checkImgs()))})})}(window,document,jQuery);