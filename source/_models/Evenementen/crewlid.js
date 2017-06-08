
module.exports = (deep) => {

  const PERSOON = require('./../../../models/persoon.js')()
  let model = {
    title: 'Crewlid',
    titlePlural: 'Crew leden',
    sampleTitle: 'Sara Doe',
    data: [
      ...PERSOON.data
    ]
  }

  if (deep) {
    // const DECLARATIE = require('./declaratie.js')()
    model.data = model.data.concat([
      {
        title: 'rol',
        sampleData: 'integer'
      },
      // {
      //   relation: DECLARATIE,
      //   relationType: 'many'
      // }
    ])
  }

  return model
}
