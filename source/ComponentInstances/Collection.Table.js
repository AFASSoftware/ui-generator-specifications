//@flow
import type { Specification } from './../type-definition'
const ORGANISATIE = require('./../_models/_global/organisatie.js')(true)
const specification: Specification = {
  Collection: {
    model: ORGANISATIE,
    switcher: ['Alle ingeplande cursussen', 'Aankomend', 'Historie'],
    Table: {

    }
  }
}
