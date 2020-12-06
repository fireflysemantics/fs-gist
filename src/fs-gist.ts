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
   * The name to say "Hello" to.
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
    this.iframe.id = 'gist-' + this.gistID;
    
    let doc = (this.iframe.contentDocument || this.iframe.contentWindow) as Document;
      let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistID}.js?file=${fileName}"></script>
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
