
module.exports = (deep) => {

  const PERSOON = require('./../_global/persoon.js')()
  let model = {
    title: 'Docent',
    titlePlural: 'Docenten',
    sampleTitle: 'Piet Hein',
    data: [
      ...PERSOON.data
    ]
  }

  if (deep) {
    const INGEPLAND = require('./ingepland.js')()
    model.data = model.data.concat([
      {
        title: 'Gegeven cursussen',
        sampleData: ['integer', { min: 0, max: 120 }]
      },
      {
        relation: INGEPLAND,
        relationType: 'many'
      }
    ])
  }

  return model
}
