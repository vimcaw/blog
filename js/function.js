function $(e){return document.querySelector(e)}function $$(e){return document.querySelectorAll(e)}HTMLCollection.prototype.forEach=function(e){for(var t=0,s;s=this[t++];){if(e(s)===false)break}};Element.prototype.getPosTop=function(){var e=this.offsetTop;var t=this.offsetParent;while(t!==null){e+=t.offsetTop;t=t.offsetParent}return e};Element.prototype.getPosLeft=function(){var e=this.offsetLeft;var t=this.offsetParent;while(t!==null){e+=t.offsetLeft;t=t.offsetParent}return e};Element.prototype.addClass=function(e){if(this.className===""){this.className=e}else{this.className+=" "+e}};Element.prototype.removeClass=function(e){var t=new RegExp("^"+e+"$|^"+e+" +| +"+e+"$| +"+e+" +");if(this.className.match(t)){this.className=this.className.replace(t,"");return true}else{return false}};