(()=>{"use strict";var e,t,l,c;l=document.querySelector(".club-select"),c=document.querySelector(".club-items"),l.addEventListener("click",(function(){"none"==getComputedStyle(c).display?c.style.display="block":c.style.display="none"})),function(e){document.querySelector(".open-popup");var t=document.querySelector("#callback_form"),l=document.querySelector("#free_visit_form"),c=document.getElementById("thanks");document.querySelector("body").addEventListener("click",(function(e){var n=e.target;n.matches(".free-visit>p>a")?l.style.display="block":n.matches(".overlay, .close_icon")&&(l.style.display="none"),n.matches(".callback-btn")?t.style.display="block":n.matches(".overlay, .close_icon, .close-btn")&&(t.style.display="none",c.style.display="none")}))}(),e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0,setInterval((function(){e[t].style.display="none",++t>e.length&&(t=0),e[t].style.display="flex"}),2e3)})();