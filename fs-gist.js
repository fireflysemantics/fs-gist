var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-gist/blob/main/LICENSE
 */
import { LitElement, html, customElement, property, css, query } from 'lit-element';
/**
 * An element for including github gists in html documents.
 */
let FSGistElement = class FSGistElement extends LitElement {
    constructor() {
        super();
        /**
         * The gist URL.  Use either
         * the gistURL or the gistID
         * to identify the gist.
         */
        this.gistURL = '';
        /**
         * The gist id.  If the URL is:
         * https://gist.github.com/fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
         *
         * Then the gist id will be:
         * fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
         */
        this.gistID = '';
        this.height = '';
        /**
         * Select a file within a multi file gist.
         * https://stackoverflow.com/questions/14206307/how-do-i-embed-a-single-file-from-a-github-gist-with-the-new-gist-interface
         */
        this.file = '';
    }
    firstUpdated() {
        let fileName = (this.file) ? this.file : '';
        let scriptURL = '';
        if (this.gistURL) {
            this.iframe.id = 'gist-' + this.gistURL;
            scriptURL = `${this.gistURL}.js`;
        }
        else {
            this.iframe.id = 'gist-' + this.gistID;
            scriptURL = `https://gist.github.com/${this.gistID}.js`;
        }
        let doc = (this.iframe.contentDocument || this.iframe.contentWindow);
        let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.id}')">
        <script type="text/javascript" src="${scriptURL}?file=${fileName}"></script>
        </body>
      </html>
    `;
        doc.open();
        doc.write(content);
        doc.close();
    }
    render() {
        return html `
    <style>
      :host {
        display: flex;
        width: 100%;
        height: ${this.height ? this.height : '100%'} !important  
      }
    </style>    
      <iframe id="gist" type="text/javascript" frameborder="0" style="display:flex; width: 100%; height:${this.height ? this.height : '100%'};"></iframe>
    `;
    }
};
FSGistElement.styles = css `
    :host {}
  `;
__decorate([
    property()
], FSGistElement.prototype, "gistURL", void 0);
__decorate([
    property()
], FSGistElement.prototype, "gistID", void 0);
__decorate([
    property()
], FSGistElement.prototype, "height", void 0);
__decorate([
    property()
], FSGistElement.prototype, "file", void 0);
__decorate([
    query('iframe')
], FSGistElement.prototype, "iframe", void 0);
FSGistElement = __decorate([
    customElement('fs-gist')
], FSGistElement);
export { FSGistElement };
//# sourceMappingURL=fs-gist.js.map