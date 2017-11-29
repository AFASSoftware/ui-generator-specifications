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
      // mode: 'edit',
      process: 'leveren', // TODO get from model
      // actions: [
      //   ['plus' , 'text', 'primary']
      // ]

      // Automatic
      // ItemHeader: {

        // Automatic
        // ItemNavigation: {},

        // Automatic
        // ActionGroup: []
      // },

      // Defaults to rendering tabs for each model relation
      // TableOfContents: [],

      // When general tab
      // FieldContainer: [],

      // When collection tab
      Collection: {
        mode: 'new',
        process: 'Inpakken', // TODO get from model
      }
    }
  }
}
