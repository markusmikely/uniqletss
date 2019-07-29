!function(){"use strict";function e(e){return{restrict:"E",scope:{count:"=",take:"=",activate:"&",maxSize:"=?",hideArrows:"=?"},template:t,link:function(t,a){function n(e){return e.value===d}function i(e){return"separator"===e.type||"prev"===e.type&&1===d||"next"===e.type&&d===h}function r(e){if(e.value!==d&&"separator"!==e.type){if("page"===e.type)d=e.value;else if("prev"===e.type){if(!(d>1))return;d--}else if("next"===e.type){if(!(h>d))return;d++}v(d,t.take),u()}}function u(){var a=o(),n=l(a);return n?(h=n.count,t.pages=s(n,a),void e.search("page",d)):void(t.pages=[])}function c(){var a=parseInt(e.search().page);a&&t.toPage({type:"page",value:a})}function o(){var e={count:t.count,take:t.take,maxSize:11,current:d,hideArrows:t.hideArrows};return t.maxSize&&(t.maxSize<7?e.maxSize=7:e.maxSize=t.maxSize),e}function l(e){var t={};return t.count=Math.ceil(e.count/e.take),t.count&&1!==t.count?(e.maxSize%2===0?(t.cellsLeft=e.maxSize/2-1,t.cellsRight=e.maxSize/2):(t.cellsLeft=(e.maxSize-1)/2,t.cellsRight=(e.maxSize-1)/2),e.hideArrows||(t.cellsLeft--,t.cellsRight--),e.current>t.cellsLeft+1&&t.cellsLeft--,e.current>t.cellsLeft+1&&t.cellsLeft--,e.current<t.count-t.cellsRight&&t.cellsRight--,e.current<t.count-t.cellsRight&&t.cellsRight--,t.lo=e.current-t.cellsLeft,t.hi=e.current+t.cellsRight,t.lo<1&&(t.hi+=1-t.lo,t.lo=1),t.hi>t.count&&(t.lo-=t.hi-t.count,t.hi=t.count),t):void 0}function s(e,t){var a;return a=e.count<=t.maxSize?p(e):g(e),t.hideArrows||(a.unshift({type:"prev",value:"<"}),a.push({type:"next",value:">"})),a}function p(e){for(var t=[],a=1;a<=e.count;a++)t.push({type:"page",value:a});return t}function g(e){var t=[];e.lo>1&&t.push({type:"page",value:1}),e.lo>2&&t.push({type:"separator",value:"..."});for(var a=e.lo;a<=e.hi;a++)0>=a||a>e.count||t.push({type:"page",value:a});return e.hi<e.count-1&&t.push({type:"separator",value:"..."}),e.hi<e.count&&t.push({type:"page",value:e.count}),t}var h,v=t.activate(),f=e.search().page,d=f?parseInt(f):1;v(d,t.take),t.$watchGroup(["take","count","maxSize","hideArrows"],u),t.isCurrent=n,t.isDisabled=i,t.pages=[],t.toPage=r,t.$on("$locationChangeSuccess",c)}}}function t(){return'<div class="pagination"><div class="page"ng-repeat="page in pages"ng-class="{ \'active\': isCurrent(page), \'disabled\': isDisabled(page) }"ng-click="toPage(page)">{{ page.value }}</div></div>'}angular.module("ng-pagination",[]).directive("pagination",["$location",e])}();
//# sourceMappingURL=directive.pagination.min.js.map
