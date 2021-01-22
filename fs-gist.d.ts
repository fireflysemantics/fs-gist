/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-gist/blob/main/LICENSE
 */
import { LitElement } from 'lit-element';
/**
 * An element for including github gists in html documents.
 */
export declare class FSGistElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The gist URL.  Use either
     * the gistURL or the gistID
     * to identify the gist.
     */
    gistURL: string;
    /**
     * The gist id.  If the URL is:
     * https://gist.github.com/fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
     *
     * Then the gist id will be:
     * fireflysemantics/44d1a1e52f2a43e881e8175a1be7bea1
     */
    gistID: string;
    height: string;
    /**
     * Select a file within a multi file gist.
     * https://stackoverflow.com/questions/14206307/how-do-i-embed-a-single-file-from-a-github-gist-with-the-new-gist-interface
     */
    file: string;
    iframe: HTMLIFrameElement;
    firstUpdated(): void;
    constructor();
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'fs-gist': FSGistElement;
    }
}
//# sourceMappingURL=fs-gist.d.ts.map