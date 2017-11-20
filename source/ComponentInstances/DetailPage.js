//@flow
import type { Specification } from './../type-definition'
const ORGANISATIE = require('./../_models/_global/organisatie.js')(true)
const specification: Specification = {
  layoutSizes: [
    [1024, 700]
  ],
  Page: {
    model: ORGANISATIE,
    Detail: {
      actions: [
        ['plus' , 'text', 'primary']
      ]
    }
  }
}
