# @fabwcie/ckeditor5-preview

Add button for preview ckeditor content.

This package was created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package.

## Table of contents

* [Install plugin](#install)
* [Use plugin](#use)

## Install

```bash
npm install @fabwcie/ckeditor5-preview
```

## Available options

| option         | type      | default   | description                         |
|--------------  |---------  |---------  |-----------------------------------  |
| injectCkeCSS   | boolean   | true      | Inject the ckeditor css for preview |
| contentCSS     | string    | undefined | Inject custom css for preview       |
| srcCSS         | string    | undefined | Inject custom css file for preview  |

## Use

Using module import

```typescript
import { Preview } from '@fabwcie/ckeditor5-preview';

ClassicEditor
  .create( document.querySelector( '#editor' ), {
    plugins: [
      Preview,
      // ... other plugins
    ]
  })
  .catch( error => {
      console.error( error );
  } );
```

You can also use as simple script

Download js file here

```html
<script src="path/to/preview.js"></script>

<!-- Or with CDN -->
<script src="https://cdn/@fabwcie/ckeditor5-preview/preview.js"></script>
```

and that all, preview button appear automaticaly !
