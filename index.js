/* empty css                      */import{a as m,S as p}from"./assets/vendor-CpAUTAlN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",h="56096585-ddb018c745b01879901fb568e";async function g(n,t){return(await m.get(y,{params:{key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=document.querySelector(".load-more"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const t=n.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");d.insertAdjacentHTML("beforeend",t),L.refresh()}function w(){d.innerHTML=""}function S(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}function q(){f.classList.remove("hidden")}function M(){f.classList.add("hidden")}const $=document.querySelector(".form"),B=document.querySelector(".load-more");let c=1,a="",l=0;$.addEventListener("submit",O);B.addEventListener("click",onLoadMore);async function O(n){if(n.preventDefault(),a=n.currentTarget.elements.searchText.value.trim(),!!a){c=1,w(),M(),S();try{const t=await g(a,c);if(l=t.totalHits,t.hits.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(t.hits),l>15&&q()}catch(t){console.log(t)}finally{v()}}}
//# sourceMappingURL=index.js.map
