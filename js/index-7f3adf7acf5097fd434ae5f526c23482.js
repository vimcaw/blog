function $(e){return document.querySelector(e)}function $$(e){return document.querySelectorAll(e)}function renderTimes(e,t){document.getElementById(e).getElementsByClassName("value")[0].innerText=t}function showTime(e){var t=new AV.Query(e);$$(".leancloud_visitors").forEach(function(e){var n=e.id.trim();t.equalTo("url",n),t.find({success:function(e){if(0!=e.length)for(var t=0;t<e.length;t++){var r=e[t];renderTimes(n,r.get("time"))}else renderTimes(n,0)},error:function(e,t){console.log("Error: "+t.code+" "+t.message)}})})}function addCount(e){e=AV.Object.extend("Counter"),url=$(".leancloud_visitors").id.trim(),title=$(".leancloud_visitors").dataset.flagTitle.trim();var t=new AV.Query(e);t.equalTo("url",url),t.find({success:function(t){if(t.length>0){var n=t[0];n.fetchWhenSave(!0),n.increment("time"),n.save(null,{success:function(e){renderTimes(url,e.get("time"))},error:function(e,t){console.log("Failed to save Visitor num, with error message: "+t.message)}})}else{var r=new e;r.set("title",title),r.set("url",url),r.set("time",1),r.save(null,{success:function(e){console.log("newcounter.get('time')="+e.get("time")),renderTimes(url,e.get("time"))},error:function(e,t){console.log("Failed to create")}})}},error:function(e){console.log("Error:"+e.code+" "+e.message)}})}!function(){var e=AV.Object.extend("Counter");1==$$(".leancloud_visitors").length?addCount(e):$$(".post-link").length>1&&showTime(e)}(),HTMLCollection.prototype.forEach=function(e){for(var t,n=0;(t=this[n++])&&!1!==e(t););};