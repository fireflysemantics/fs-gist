# fs-gist

Web component for embedding gists in html content

## Installation

`npm i @fireflysemantics/fs-gist`

## Usage

Include `fs-gist` via CDN like this in your html page:

```
<script src="https://unpkg.com/@fireflysemantics/fs-gist"></script>
```

To show this gist url:

`https://gist.github.com/fireflysemantics/054716730103cd205c39167054542f68` 

configure the component `gistURL` like this:

```
<body style="height: 100vh;">
  <fs-gist gistURL="https://gist.github.com/fireflysemantics/054716730103cd205c39167054542f68">
  </fs-gist>
</body>
```

or 
configure the component `gistID` like this:

```
<body style="height: 100vh;">
  <fs-gist gistID="fireflysemantics/054716730103cd205c39167054542f68">
  </fs-gist>
</body>
```

Note that we set the `height` of the body to `100vh` in order to allow
`fs-gist` to expand.

A height property is also supported.  For example:

```
<body style="height: 100vh;">
  <fs-gist height="10rem" gistID="fireflysemantics/054716730103cd205c39167054542f68">
  </fs-gist>
</body>

```

[Stackblitz Demo](https://stackblitz.com/edit/typescript-fs-gist-set-body-height-demo?file=index.html)

## Development

### Baseline

The project baseline is based on the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).

### Package

This project uses the build configuration
from the [rollup starter app](https://github.com/rollup/rollup-starter-app/blob/master/package.json) as well as the `rollup.config.js` example configuration found in the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).