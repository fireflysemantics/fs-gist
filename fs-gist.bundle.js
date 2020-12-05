!function(t){
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,s,i=null)=>{for(;s!==i;){const i=s.nextSibling;t.removeChild(s),s=i}},e=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${e}--\x3e`,o=new RegExp(`${e}|${n}`);class r{constructor(t,s){this.parts=[],this.element=s;const i=[],n=[],r=document.createTreeWalker(s.content,133,null,!1);let c=0,u=-1,d=0;const{strings:f,values:{length:p}}=t;for(;d<p;){const t=r.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:i}=s;let e=0;for(let t=0;t<i;t++)h(s[t].name,"$lit$")&&e++;for(;e-- >0;){const s=f[d],i=a.exec(s)[2],e=i.toLowerCase()+"$lit$",n=t.getAttribute(e);t.removeAttribute(e);const r=n.split(o);this.parts.push({type:"attribute",index:u,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(e)>=0){const e=t.parentNode,n=s.split(o),r=n.length-1;for(let s=0;s<r;s++){let i,o=n[s];if(""===o)i=l();else{const t=a.exec(o);null!==t&&h(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}e.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===n[r]?(e.insertBefore(l(),t),i.push(t)):t.data=n[r],d+=r}}else if(8===t.nodeType)if(t.data===e){const s=t.parentNode;null!==t.previousSibling&&u!==c||(u++,s.insertBefore(l(),t)),c=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),d++}else{let s=-1;for(;-1!==(s=t.data.indexOf(e,s+1));)this.parts.push({type:"node",index:-1}),d++}}else r.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const h=(t,s)=>{const i=t.length-s.length;return i>=0&&t.slice(i)===s},c=t=>-1!==t.index,l=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,s){const{element:{content:i},parts:e}=t,n=document.createTreeWalker(i,133,null,!1);let o=f(e),r=e[o],h=-1,c=0;const l=[];let a=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),s.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==r&&r.index===h;)r.index=null!==a?-1:r.index-c,o=f(e,o),r=e[o]}l.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let s=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)s++;return s},f=(t,s=-1)=>{for(let i=s+1;i<t.length;i++){const s=t[i];if(c(s))return i}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const p=new WeakMap,w=t=>"function"==typeof t&&p.has(t),m={},y={};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class v{constructor(t,s,i){this.t=[],this.template=t,this.processor=s,this.options=i}update(t){let s=0;for(const i of this.t)void 0!==i&&i.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],e=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,h=0,l=n.nextNode();for(;r<e.length;)if(o=e[r],c(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const b=` ${e} `;class g{constructor(t,s,i,e){this.strings=t,this.values=s,this.type=i,this.processor=e}getHTML(){const t=this.strings.length-1;let s="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const h=a.exec(t);s+=null===h?t+(i?b:n):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,s,i){this.dirty=!0,this.element=t,this.name=s,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,s=t.length-1;let i="";for(let e=0;e<s;e++){i+=t[e];const s=this.parts[e];if(void 0!==s){const t=s.value;if(S(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const s of t)i+="string"==typeof s?s:String(s)}}return i+=t[s],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||S(t)&&t===this.value||(this.value=t,w(t)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class j{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=l()),t.i(this.endNode=l())}insertAfterPart(t){t.i(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;w(this.s);){const t=this.s;this.s=m,t(this)}const t=this.s;t!==m&&(S(t)?t!==this.value&&this.o(t):t instanceof g?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===y?(this.value=y,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const s=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const s=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===s)this.value.update(t.values);else{const i=new v(s,t.processor,this.options),e=i._clone();i.update(t.values),this.l(e),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let i,e=0;for(const n of t)i=s[e],void 0===i&&(i=new j(this.options),s.push(i),0===e?i.appendIntoPart(this):i.insertAfterPart(s[e-1])),i.setValue(n),i.commit(),e++;e<s.length&&(s.length=e,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,s,i){if(this.value=void 0,this.s=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=i}setValue(t){this.s=t}commit(){for(;w(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=m}}class C extends _{constructor(t,s,i){super(t,s,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends ${}let k=!1;(()=>{try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,s,i){this.value=void 0,this.s=void 0,this.element=t,this.eventName=s,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;w(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=this.s,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),e=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),e&&(this.m=O(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.s=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function E(t){let s=U.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(e);return i=s.keyString.get(n),void 0===i&&(i=new r(t,t.getTemplateElement()),s.keyString.set(n,i)),s.stringsArray.set(t.strings,i),i}const U=new Map,T=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const N=new
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class{handleAttributeExpressions(t,s,i,e){const n=s[0];if("."===n){return new C(t,s.slice(1),i).parts}return"@"===n?[new M(t,s.slice(1),e.eventContext)]:"?"===n?[new A(t,s.slice(1),i)]:new _(t,s,i).parts}handleTextExpression(t){return new j(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(t,...s)=>new g(t,s,"html",N)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */,I=(t,s)=>`${t}--${s}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const q=t=>s=>{const i=I(s.type,t);let n=U.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},U.set(i,n));let o=n.stringsArray.get(s.strings);if(void 0!==o)return o;const h=s.strings.join(e);if(o=n.keyString.get(h),void 0===o){const i=s.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),o=new r(s,i),n.keyString.set(h,o)}return n.stringsArray.set(s.strings,o),o},R=["html","svg"],z=new Set,J=(t,s,i)=>{z.add(t);const e=i?i.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{R.forEach(s=>{const i=U.get(I(s,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:s}}=t,i=new Set;Array.from(s.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})})(t);const h=e.content;i?function(t,s,i=null){const{element:{content:e},parts:n}=t;if(null==i)return void e.appendChild(s);const o=document.createTreeWalker(e,133,null,!1);let r=f(n),h=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(h=d(s),i.parentNode.insertBefore(s,i));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=f(n,r);return}r=f(n,r)}}}(i,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)s.insertBefore(c.cloneNode(!0),s.firstChild);else if(i){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),u(i,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const B={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,s)=>s!==t&&(s==s||t==t),W={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:L};class D extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((s,i)=>{const e=this._attributeNameForProperty(i,s);void 0!==e&&(this._attributeToPropertyMap.set(e,i),t.push(e))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(t,s=W){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(i){const e=this[t];this[s]=i,this._requestUpdate(t,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,i=L){return i(t,s)}static _propertyValueFromAttribute(t,s){const i=s.type,e=s.converter||B,n="function"==typeof e?e:e.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const i=s.type,e=s.converter;return(e&&e.toAttribute||B.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,s)=>this[s]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,i){s!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,s,i=W){const e=this.constructor,n=e._attributeNameForProperty(t,i);if(void 0!==n){const t=e._propertyValueToAttribute(s,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,s){if(8&this._updateState)return;const i=this.constructor,e=i._attributeToPropertyMap.get(t);if(void 0!==e){const t=i.getPropertyOptions(e);this._updateState=16|this._updateState,this[e]=i._propertyValueFromAttribute(s,t),this._updateState=-17&this._updateState}}_requestUpdate(t,s){let i=!0;if(void 0!==t){const e=this.constructor,n=e.getPropertyOptions(t);e._valueHasChanged(this[t],s,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,s){return this._requestUpdate(t,s),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t?this.update(s):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}D.finalized=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const H=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?Object.assign(Object.assign({},s),{finisher(i){i.createProperty(s.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}};function G(t){return(s,i)=>void 0!==i?((t,s,i)=>{s.constructor.createProperty(i,t)})(t,s,i):H(t,s)}const K=(t,s,i)=>{Object.defineProperty(s,i,t)},Q=(t,s)=>({kind:"method",placement:"prototype",key:s.key,descriptor:t})
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */,X="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Z{constructor(t,s){if(s!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const tt={};class st extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const s=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?s(i,t):(t.add(i),t),i),i=s(t,new Set),e=[];i.forEach(t=>e.unshift(t)),this._styles=e}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const s=this.render();super.update(t),s!==tt&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)}))}render(){return tt}}st.finalized=!0,st.render=(t,s,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=T.has(s),r=F&&11===s.nodeType&&!!s.host,h=r&&!z.has(n),c=h?document.createDocumentFragment():s;if(((t,s,e)=>{let n=T.get(s);void 0===n&&(i(s,s.firstChild),T.set(s,n=new j(Object.assign({templateFactory:E},e))),n.appendInto(s)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:q(n)},e)),h){const t=T.get(c);T.delete(c);const e=t.value instanceof v?t.value.template:void 0;J(n,c,e),i(s,s.firstChild),s.appendChild(c),T.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};var it,et,nt=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};t.FSGistElement=class extends st{constructor(){super(),this.gistID="",this.file=""}firstUpdated(){let t=this.file?this.file:"";this.iframe.id="gist-"+this.gistID;let s=this.iframe.contentDocument||this.iframe.contentWindow,i=`\n        <html>\n        <head>\n          <base target="_parent">\n        </head>\n        <body onload="parent.document.getElementById('${this.iframe.id}')">\n        <script type="text/javascript" src="https://gist.github.com/${this.gistID}.js?file=${t}"><\/script>\n        </body>\n      </html>\n    `;s.open(),s.write(i),s.close()}render(){return V`
      <iframe id="gist" type="text/javascript" width="100%" frameborder="0" style = "height:inherit"></iframe>      
    `}},t.FSGistElement.styles=((t,...s)=>{const i=s.reduce((s,i,e)=>s+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[e+1],t[0]);return new Z(i,Y)})`
    :host {
      display: block;
      max-width: 1000px;
    }
  `,nt([G()],t.FSGistElement.prototype,"gistID",void 0),nt([G()],t.FSGistElement.prototype,"file",void 0),nt([(it="iframe",(t,s)=>{const i={get(){return this.renderRoot.querySelector(it)},enumerable:!0,configurable:!0};return void 0!==s?K(i,t,s):Q(i,t)})],t.FSGistElement.prototype,"iframe",void 0),t.FSGistElement=nt([(et="fs-gist",t=>"function"==typeof t?((t,s)=>(window.customElements.define(t,s),s))(et,t):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){window.customElements.define(t,s)}}})(et,t))],t.FSGistElement),Object.defineProperty(t,"v",{value:!0})}({});
//# sourceMappingURL=fs-gist.bundle.js.map
