# Next  UI Generator Specifications

## Introduction
‘Specifications’ can be used by the Next UI Generator, for rendering fully design-spec compliant prototypes.

## Specification source file to JSON parsing
Specification files are written in ECMAScript and automatically parsed into JSON for use by the Next UI Generator. Parsing allows us to extend and re-use models, use the quoteless ECMAScript Object notation add comments.

The editable specification files are located in the `source` directory. The parser converts them to json files which are placed in the `/parsed` directory.

## Specification types
There are 2 types of specification files: ‘prototype’ specifications, and ‘componenent’ specifications.

## Setup
1. Make sure you have `GIT`, `NodeJS` and `Watchman` installed.
2. Check out this GIT repository.
3. Open the Terminal and cd into the repo directory (where this file is located).
4. Run `npm install` in order to fetch the required dependencies.
5. Run `node parse-and-watch.js` to parse all ‘specifications’ and re-parse whenever changes are made.
6. The resulting specification files, in the `/parsed` directory can be used by the `Next UI Generator` plugin in Sketch.
7. Optionally ‘commit’ changes so everyone has access to the latest specifications (and models).

## The specification format

### Object keys
#### Options
- format: Camel-case (`optionName`)
- note: Options are used in stead of overrides where this results in significantly less verbose specification code. Some options are unique to a specific component, some are recurring. An important recurring option is the `content` option, which is used for rendering (virtually) ‘nested’ component(s) which are not implemented as overrides because they are variable.
#### Components
- format: Pascal-case (`ComponentName`)
#### Direct component overrides
- format: Underscore-prefixed-camel-case (`_overrideName`)
- note: Options are occasionally used in stead of overrides to reduce verboseness
#### Indirect component overrides
- format: Underscore-prefixed-pascal-case (`_ComponentName`)
- note: When ‘overriding’ a nested –but seperate– component, which is not ‘variable’ (see ‘Options’), we’ll use this format to specify its overrides.

### TODO
- validate specification files when parsing (syntax highlighting? autocomplete? CSON?

### Examples
```
// Specification format example
// /source/<functionality>/roles/<role>.js

/*
  NOTE Models are preferably seperate modules, declared outside the specification,
  so the can be re-used and the specification stays nice and tidy.
*/
// IMPORT MODELS
const MODELONE = require('./modelOne.js')
const MODELTWO = require('./modelTwo.js')
const MODELTREE = require('./modelTree.js')

module.exports = {
  sizes: [
    [1024, 700]
  ],
  pages: [
    {
      Page: {
        title: 'Some functionality'
        Detail: {

        }
        pages: [
      {
        type: 'Page.Collection.Table',
        model: MODELONE,
        pages: [
          {
            type: 'Page.Detail',
            model: MODELTWO
          },
          {
            type: 'Page.Detail.Collection.Table',
            model: MODELTREE
          }
        ]
      }
    ]
  ]
}
```
```

```
```
// /source/<functionality>/models/<somemodel>.js
// Model format example

module.exports = {
    title: '',
    titlePlural: '',
    sampleTitle: '',
    data: {
      title: '',
      sampleData: ''
    }
  }
}
```
