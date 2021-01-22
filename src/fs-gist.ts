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
@customElement('fs-gist')
export class FSGistElement extends LitElement {

  static styles = css`
    :host {}
  `;

  /** 
   * The gist URL.  Use either 
   * the gistURL or the gistID
   * to identify the gist.
   */
  @property()
  gistURL = '';

  /** 
   * The gist id.  If the URL is:
   * https://gist.github.com/fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
   * 
   * Then the gist id will be:
   * fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
   */
  @property()
  gistID = '';

  @property()
  height:string = ''

  /**
   * Select a file within a multi file gist.
   * https://stackoverflow.com/questions/14206307/how-do-i-embed-a-single-file-from-a-github-gist-with-the-new-gist-interface
   */
  @property()
  file = '';

  @query('iframe')
  iframe!: HTMLIFrameElement;


  firstUpdated() {
    let fileName = (this.file) ? this.file : ''; 

    let scriptURL = ''

    if (this.gistURL) {
      this.iframe.id = 'gist-' + this.gistURL;
      scriptURL = `${this.gistURL}.js`
    }
    else {
      this.iframe.id = 'gist-' + this.gistID;
      scriptURL = `https://gist.github.com/${this.gistID}.js`
    }
    
    let doc = (this.iframe.contentDocument || this.iframe.contentWindow) as Document;
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
    doc!.open()
    doc!.write(content)
    doc!.close()
  }

  constructor() {
    super()
  }

  render() {
    return html`
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
}
declare global {
  interface HTMLElementTagNameMap {
    'fs-gist': FSGistElement;
  }
}
