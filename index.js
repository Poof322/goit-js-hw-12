/* empty css                      */import{a as w,S,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="56096585-ddb018c745b01879901fb568e",q="https://pixabay.com/api/";async function f(s,t){return(await w.get(q,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}function B(){m.innerHTML=""}function g(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function M(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more"),L=15;let a=1,i="",c=0;$.addEventListener("submit",I);E.addEventListener("click",O);async function I(s){if(s.preventDefault(),i=s.currentTarget.elements.searchText.value.trim(),!!i){a=1,c=0,B(),d(),g();try{const t=await f(i,a);if(c=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits),c>L?M():(d(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong. Please try again."})}finally{b()}}}async function O(){a+=1,g();try{const s=await f(i,a);p(s.hits),a*L>=c&&(d(),n.info({message:"We're sorry, but you've reached the end of search results."}));const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Please try again."})}finally{b()}}
//# sourceMappingURL=index.js.map
