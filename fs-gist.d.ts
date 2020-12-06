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
     * The name to say "Hello" to.
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