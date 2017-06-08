module.exports = (deep) => {

  const PERSOON = require('./../../../models/persoon.js')()
  let model = {
    title: 'Introducee',
    titlePlural: 'Introducees',
    sampleTitle: 'Jane Doe',
    data: [
      ...PERSOON.data
    ]
  }

  if (deep) {
    const DEELNEMER = require('./../models/deelnemer.js')()
    model.data = model.data.concat([
      {
        title: 'Aantal bezochte evenementen',
        sampleData: 'integer'
      },
      {
        relation: DEELNEMER
      }
    ])
  }

  return model
}
