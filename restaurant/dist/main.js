(()=>{"use strict";function e(e="div",t="",n=""){const c=document.createElement(e);return c.classList.add(t),c.textContent=n,c}function t(e,t){document.querySelectorAll(e).forEach((e=>e.classList.remove(t)))}function n(e,t){return{name:e,price:t}}const c=[n("Krabby Patty",1.25),n("Double Krabby Patty",2),n("Triple Krabby Patty",3),n("Small",1),n("Medium",1.25),n("Large",1.5),n("Kelp Rings",1.5)];function a(e){const n=document.querySelector(`.tab-content.${e}`);n.classList.contains("active")||(t(".tab-content","active"),".tab-content","hidden",document.querySelectorAll(".tab-content").forEach((e=>e.classList.add("hidden"))),n.classList.add("active"),n.classList.remove("hidden"))}function i(n,c){const a=e("button","nav-button",n);return a.addEventListener("click",(e=>{(function(e,t="active"){return e.classList.contains(t)})(e.target)||(t(".nav-button","active"),e.target.classList.add("active"),c())})),a}function d(e,t){return{label:e,value:t}}const r=[d("Phone","123 123 123 123"),d("Address","Under sea")];const o=document.getElementById("content");o.appendChild(function(){const e=document.createElement("nav");return e.setAttribute("id","nav-header"),e.appendChild(i("Menu",(()=>a("menu")))),e.appendChild(i("Contact",(()=>a("contact")))),e}()),o.appendChild(function(){const t=e("div","menu");t.classList.add("tab-content");const n=e("div","menu-card");return t.appendChild(n),n.appendChild(e("h1","menu-title","Galley Grub")),c.forEach((t=>n.appendChild(function(t){const n=e("div","menu-item");return n.appendChild(e("div","menu-item-name",t.name)),n.appendChild(e("div","menu-item-dot")),n.appendChild(e("div","menu-item-price",t.price)),n}(t)))),n.addEventListener("mouseover",(()=>{document.getElementById("character-img").src="./eugene-money.png"})),n.addEventListener("mouseleave",(()=>{document.getElementById("character-img").src="./eugene.png"})),t}()),o.appendChild(function(){const t=e("div","contact");return t.classList.add("tab-content"),t.appendChild(e("h1","contact-title","Contact")),r.forEach((n=>t.appendChild(function(t){const n=document.createElement("div","content-item");return n.appendChild(e("div","content-item-label",t.label)),n.appendChild(e("div","content-item-value",t.value)),n}(n)))),t}()),o.appendChild(function(){const t=e("div","character"),n=e("img","character-img");return n.setAttribute("id","character-img"),n.src="./eugene.png",t.appendChild(n),t}()),o.firstElementChild.firstElementChild.classList.add("active"),o.querySelectorAll(".tab-content").forEach((e=>e.classList.add("hidden"))),o.querySelectorAll(".tab-content")[0].classList.add("active"),o.querySelectorAll(".tab-content")[0].classList.remove("hidden")})();