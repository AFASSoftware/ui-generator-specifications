module.exports = (deep) => {

  const PERSOON = require('./../../../models/persoon.js')()
  let model = {
    title: 'Deelnemer',
    titlePlural: 'Deelnemers',
    sampleTitle: 'John Doe',
    data: [
      ...PERSOON.data,
    ]
  }

  if (deep) {
    const INTRODUCEE = require('./introducee.js')()
    model.data = model.data.concat([
      {
        title: 'Aantal bezochte evenementen',
        sampleData: 'integer'
      },
      {
        relation: INTRODUCEE,
        relationType: 'many'
      }
    ])
  }

  return model
}
