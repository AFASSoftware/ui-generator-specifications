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
      FieldContainer: true,

      // When collection tab
      // Collection: []
    }
  }
}
