
module.exports = (deep) => {

  const PERSOON = require('./../../../models/persoon.js')()
  let model = {
    title: 'Docent',
    titlePlural: 'Docenten',
    sampleTitle: 'Piet Hein',
    data: [
      ...PERSOON.data
    ]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Gegeven cursussen',
        sampleData: ['integer', { min: 0, max: 120 }]
      }
    ])
  }

  return model
}
