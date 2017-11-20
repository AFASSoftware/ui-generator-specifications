//@flow
import type { Specification } from './../type-definition'
import ORGANISATIE_ from './../_modelsES6/organisatie'
const ORGANISATIE = ORGANISATIE_(true)
// import ORGANISATIE = require('./../_models/_global/organisatie.js')(true)
const specification: Specification = {
  layoutSizes: [
    [1024, 700],
    [375, 667]
  ],
  pages: [
    {
      model: ORGANISATIE,
      content: {
        state: 'new'
      }
    }
  ]
}
