# Next  UI Generator Specifications

‘Specifications’ can be used by the Next UI Generator, to render fully design-spec compliant prototypes. Specifications themselves are in JSON format. To be able to extend and re-use models (and use quote-less ECMAScript object notation and commenting) we parse ECMAScript files into compatible JSON specification files.

1. Make sure you have `GIT`, `NodeJS` and `Watchman` installed.
2. Check out this GIT repository.
3. Open the Terminal and cd into the repo directory.
4. Run `npm install` in order to fetch the required dependencies.
5. Run `node parse-and-watch.js` to parse all ‘specifications’ and re-parse when changes are made.
6. The specification files in `/parsed` can handed to the UI Generator.
7. Commit changes so everyone has access to the latest specifications (and models).
