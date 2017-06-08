
module.exports = (deep) => {

  const PERSOON = require('./../../../models/persoon.js')()
  let model = {
    title: 'Cursist',
    titlePlural: 'Cursisten',
    sampleTitle: 'Harold Quack',
    data: [
      ...PERSOON.data
    ]
  }

  if (deep) {
    const INGEPLAND = require('./cursus-ingepland.js')()
    model.data = model.data.concat([
      // {
      //   title: 'Aantal gevolgde cursussen',
      //   sampleData: ['integer', { min: 0, max: 11 }]
      // },
      {
        title: 'Gevolgde cursussen',
        relation: INGEPLAND,
        relationType: 'many'
      }
      // {
      //   title: 'Gemiddelde Beoordeling',
      //   sampleData: ['integer', { min: 2, max: 10 }]
      // },
    ])
  }

  return model
}
