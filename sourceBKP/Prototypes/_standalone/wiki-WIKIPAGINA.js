const PERSOON = require('./../../_models/_global/persoon')()
// const WIKIPAGINA = require('./wiki-WIKIPAGINA')()
// const PROJECT = require('./wiki-PROJECT')()

module.exports = (deep) => {

  let model = {
    title: 'Concept pagina',
    titlePlural: 'Concept pagina’s',
    sampleTitle: 'Identificatie',
    data: [{
      title: 'name',
      sampleData: 'name'
    }]
  }

  if (deep) {
    model.data = model.data.concat([
      {
        title: 'Verantwoordelijke',
        relation: PERSOON,
        relationType: 'single'
      },
      {
        title: 'Projecten',
        // relation: PROJECT,
        relationType: 'many'
      },
      {
        title: 'Fasering',
        // relation: PROJECT,
        relationType: 'single'
      }
    ])
  }

  return model
}
