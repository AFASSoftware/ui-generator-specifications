module.exports = (deep) => {

  let model = {
    title: 'Declaratie',
    titlePlural: 'Declaraties',
    sampleTitle: '2 party-tenten',
    data: [
      {
        title: 'beschrijving',
        sampleData: 'word'
      }
    ]
  }

  if (deep) {
    const CREWLID = require('./crewlid.js')()
    const EVENEMENT = require('./evenement.js')()
    model.data = model.data.concat([
      {
        title: 'bedrag',
        sampleData: 'euro'
      },
      {
        relation: EVENEMENT,
        relationType: 'many'
      },
      {
        relation: CREWLID,
        relationType: 'many'
      }
    ])
  }

  return model
}
