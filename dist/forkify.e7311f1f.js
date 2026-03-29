let e="https://forkify-api.herokuapp.com/api/v2/recipes/",t=async function(e){try{let t=fetch(e),i=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),n=await i.json();if(!i.ok)throw Error(`${n.message} (${i.status})`);return n}catch(e){throw e}},i={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},n=async function(t){try{let n=await fetch(`${e}${t}`),r=await n.json();if(!n.ok)throw Error(`${r.message} (${n.status})`);let{recipe:s}=r.data;i.recipe={id:s.id,title:s.title,publisher:s.publisher,sourceUrl:s.source_url,image:s.image_url,servings:s.servings,cookTime:s.cooking_time,ingredients:s.ingredients}}catch(e){throw e}},r=async function(n){try{i.search.query=n;let r=await t(`${e}?search=${n}`);i.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},s=function(e=i.search.page){i.search.page=e;let t=(e-1)*i.search.resultsPerPage,n=e*i.search.resultsPerPage;return i.search.results.slice(t,n)};var a={};let o=new URL(a=import.meta.resolve("hfd23")).href;class l{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${o}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${o}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${o}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var c={};!function(){function e(){return Error("Parameters must be integer")}function t(){return Error("Invalid argument")}function i(){return Error("Division by Zero")}function n(n,s){var a=h,o=d;let l=d;if(null!=n)if(void 0!==s){if("bigint"==typeof n)a=n;else{if(isNaN(n))throw t();if(0!=n%1)throw e();a=BigInt(n)}if("bigint"==typeof s)o=s;else{if(isNaN(s))throw t();if(0!=s%1)throw e();o=BigInt(s)}l=a*o}else if("object"==typeof n){if("d"in n&&"n"in n)a=BigInt(n.n),o=BigInt(n.d),"s"in n&&(a*=BigInt(n.s));else if(0 in n)a=BigInt(n[0]),1 in n&&(o=BigInt(n[1]));else if("bigint"==typeof n)a=n;else throw t();l=a*o}else if("number"==typeof n){if(isNaN(n))throw t();if(0>n&&(l=-d,n=-n),0==n%1)a=BigInt(n);else{s=1;var c=0,u=1,f=1;let e=1;for(1<=n&&(s=10**Math.floor(1+Math.log10(n)),n/=s);1e7>=u&&1e7>=e;)if(n===(o=(c+f)/(u+e))){1e7>=u+e?(a=c+f,o=u+e):e>u?(a=f,o=e):(a=c,o=u);break}else n>o?(c+=f,u+=e):(f+=c,e+=u),1e7<u?(a=f,o=e):(a=c,o=u);a=BigInt(a)*BigInt(s),o=BigInt(o)}}else if("string"==typeof n){if(o=0,c=s=a=h,u=f=d,null===(n=n.replace(/_/g,"").match(/\d+|./g)))throw t();if("-"===n[o]?(l=-d,o++):"+"===n[o]&&o++,n.length===o+1?s=r(n[o++],l):"."===n[o+1]||"."===n[o]?("."!==n[o]&&(a=r(n[o++],l)),(++o+1===n.length||"("===n[o+1]&&")"===n[o+3]||"'"===n[o+1]&&"'"===n[o+3])&&(s=r(n[o],l),f=_**BigInt(n[o].length),o++),("("===n[o]&&")"===n[o+2]||"'"===n[o]&&"'"===n[o+2])&&(c=r(n[o+1],l),u=_**BigInt(n[o+1].length)-d,o+=3)):"/"===n[o+1]||":"===n[o+1]?(s=r(n[o],l),f=r(n[o+2],d),o+=3):"/"===n[o+3]&&" "===n[o+1]&&(a=r(n[o],l),s=r(n[o+2],l),f=r(n[o+4],d),o+=5),n.length<=o)l=a=c+(o=f*u)*a+u*s;else throw t()}else if("bigint"==typeof n)l=a=n,o=d;else throw t();if(o===h)throw i();v.s=l<h?-d:d,v.n=a<h?-a:a,v.d=o<h?-o:o}function r(e,i){try{e=BigInt(e)}catch(e){throw t()}return e*i}function s(e){return"bigint"==typeof e?e:Math.floor(e)}function a(e,t){if(t===h)throw i();let n=Object.create(u.prototype);n.s=e<h?-d:d;let r=l(e=e<h?-e:e,t);return n.n=e/r,n.d=t/r,n}function o(e){let t=Object.create(null);if(e<=d)return t[e]=d,t;for(;e%f===h;)t[f]=(t[f]||h)+d,e/=f;for(;e%g===h;)t[g]=(t[g]||h)+d,e/=g;for(;e%p===h;)t[p]=(t[p]||h)+d,e/=p;for(let i=0,n=f+p;n*n<=e;){for(;e%n===h;)t[n]=(t[n]||h)+d,e/=n;n+=m[i],i=i+1&7}return e>d&&(t[e]=(t[e]||h)+d),t}function l(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function u(e,t){if(n(e,t),!(this instanceof u))return a(v.s*v.n,v.d);e=l(v.d,v.n),this.s=v.s,this.n=v.n/e,this.d=v.d/e}"u"<typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let h=BigInt(0),d=BigInt(1),f=BigInt(2),g=BigInt(3),p=BigInt(5),_=BigInt(10),v={s:d,n:h,d:d},m=[f*f,f,f*f,f,f*f,f*g,f,f*g];u.prototype={s:d,n:h,d:d,abs:function(){return a(this.n,this.d)},neg:function(){return a(-this.s*this.n,this.d)},add:function(e,t){return n(e,t),a(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(e,t){return n(e,t),a(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(e,t){return n(e,t),a(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(e,t){return n(e,t),a(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return a(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return a(this.s*this.n%this.d,d);if(n(e,t),h===v.n*this.d)throw i();return a(this.s*v.d*this.n%(v.n*this.d),v.d*this.d)},gcd:function(e,t){return n(e,t),a(l(v.n,this.n)*l(v.d,this.d),v.d*this.d)},lcm:function(e,t){return n(e,t),v.n===h&&this.n===h?a(h,d):a(v.n*this.n,l(v.n,this.n)*l(v.d,this.d))},inverse:function(){return a(this.s*this.d,this.n)},pow:function(e,t){if(n(e,t),v.d===d)return v.s<h?a((this.s*this.d)**v.n,this.n**v.n):a((this.s*this.n)**v.n,this.d**v.n);if(this.s<h)return null;e=o(this.n),t=o(this.d);let i=d,r=d;for(let t in e)if("1"!==t){if("0"===t){i=h;break}if(e[t]*=v.n,e[t]%v.d!==h)return null;e[t]/=v.d,i*=BigInt(t)**e[t]}for(let e in t)if("1"!==e){if(t[e]*=v.n,t[e]%v.d!==h)return null;t[e]/=v.d,r*=BigInt(e)**t[e]}return v.s<h?a(r,i):a(i,r)},log:function(e,t){if(n(e,t),this.s<=h||v.s<=h)return null;var i=Object.create(null);e=o(v.n);let r=o(v.d);t=o(this.n);let s=o(this.d);for(var c in r)e[c]=(e[c]||h)-r[c];for(var u in s)t[u]=(t[u]||h)-s[u];for(var d in e)"1"!==d&&(i[d]=!0);for(var f in t)"1"!==f&&(i[f]=!0);for(let n in u=c=null,i)if(d=e[n]||h,i=t[n]||h,d===h){if(i!==h)return null}else if(f=l(i,d),i/=f,d/=f,null===c&&null===u)c=i,u=d;else if(i*u!=c*d)return null;return null!==c&&null!==u?a(c,u):null},equals:function(e,t){return n(e,t),this.s*this.n*v.d==v.s*v.n*this.d},lt:function(e,t){return n(e,t),this.s*this.n*v.d<v.s*v.n*this.d},lte:function(e,t){return n(e,t),this.s*this.n*v.d<=v.s*v.n*this.d},gt:function(e,t){return n(e,t),this.s*this.n*v.d>v.s*v.n*this.d},gte:function(e,t){return n(e,t),this.s*this.n*v.d>=v.s*v.n*this.d},compare:function(e,t){return n(e,t),(h<(e=this.s*this.n*v.d-v.s*v.n*this.d))-(e<h)},ceil:function(e){return e=_**BigInt(e||0),a(s(this.s*e*this.n/this.d)+(e*this.n%this.d>h&&this.s>=h?d:h),e)},floor:function(e){return e=_**BigInt(e||0),a(s(this.s*e*this.n/this.d)-(e*this.n%this.d>h&&this.s<h?d:h),e)},round:function(e){return e=_**BigInt(e||0),a(s(this.s*e*this.n/this.d)+this.s*((this.s>=h?d:h)+e*this.n%this.d*f>this.d?d:h),e)},roundTo:function(e,t){n(e,t);var i=this.n*v.d;return t=i%(e=this.d*v.n),i=s(i/e),t+t>=e&&i++,a(this.s*i*v.n,v.d)},divisible:function(e,t){return n(e,t),v.n!==h&&this.n*v.d%(v.n*this.d)===h},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e=15){let t=this.n,i=this.d;e:{for(n=i;n%f===h;n/=f);for(;n%p===h;n/=p);if(n===d)n=h;else{for(var n,r=_%n,a=1;r!==d;a++)if(r=r*_%n,2e3<a){n=h;break e}n=BigInt(a)}}e:{r=d,a=_;var o=n;let e=d;for(;o>h;a=a*a%i,o>>=d)o&d&&(e=e*a%i);for(o=0,a=e;300>o;o++){if(r===a){r=BigInt(o);break e}r=r*_%i,a=a*_%i}r=0}if(a=r,r=(this.s<h?"-":"")+s(t/i),(t=t%i*_)&&(r+="."),n){for(e=a;e--;)r+=s(t/i),t%=i,t*=_;for(r+="(",e=n;e--;)r+=s(t/i),t%=i,t*=_;r+=")"}else for(;t&&e--;)r+=s(t/i),t%=i,t*=_;return r},toFraction:function(e=!1){let t=this.n,i=this.d,n=this.s<h?"-":"";if(i===d)n+=t;else{let r=s(t/i);e&&r>h&&(n+=r,n+=" ",t%=i),n=n+t+"/"+i}return n},toLatex:function(e=!1){let t=this.n,i=this.d,n=this.s<h?"-":"";if(i===d)n+=t;else{let r=s(t/i);e&&r>h&&(n+=r,t%=i),n=n+"\\frac{"+t+"}{"+i+"}"}return n},toContinued:function(){let e=this.n,t=this.d,i=[];for(;t;){i.push(s(e/t));let n=e%t;e=t,t=n}return i},simplify:function(e=.001){e=BigInt(Math.ceil(1/e));let t=this.abs(),i=t.toContinued();for(let r=1;r<i.length;r++){let s=a(i[r-1],d);for(var n=r-2;0<=n;n--)s=s.inverse().add(i[n]);if((n=s.sub(t)).n*e<n.d)return s.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return u}):(Object.defineProperty(u,"__esModule",{value:!0}),u.default=u,u.Fraction=u,c=u)}();let u=new URL(a).href;class h extends l{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${u}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${u}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>
        </div>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>.
          Please check out directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${u}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){var t;return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${u}#icon-check"></use>
        </svg>

        <div class="recipe__quantity">
          ${e.quantity?new((t=c)&&t.__esModule?t.default:t)(e.quantity).toFraction(!0):""}
        </div>

        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var d=new h;class f{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var g=new f;class p extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}var _=new p;let v=new URL(a).href;class m extends l{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let i=t.target.closest(".btn--inline");if(!i)return;let n=+i.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${v}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>

        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${v}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let i=t.target.closest(".btn--inline");i&&e(+i.dataset.goto)})}}var b=new m;let w=async function(){try{let e=window.location.hash.slice(1);if(!e)return;d.renderSpinner(),await n(e),d.render(i.recipe)}catch(e){d.renderError()}},y=async function(){try{let e=g.getQuery();if(!e)return;_.renderSpinner(),await r(e),_.render(s()),b.render(i.search)}catch(e){console.log(e)}};g.addHandlerSearch(y),b.addHandlerClick(function(e){_.render(s(e)),b.render(i.search)}),window.addEventListener("hashchange",w),window.addEventListener("load",w);
//# sourceMappingURL=forkify.e7311f1f.js.map
