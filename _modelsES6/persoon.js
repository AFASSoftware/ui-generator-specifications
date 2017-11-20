import ORGANISATIE_ from './organisatie.js'
export default (deep) => {

  let model = {
    title: 'Persoon',
    titlePlural: 'Personen',
    sampleTitle: 'Timo Hofmeijer',
    data: [{
      title: 'Naam',
      sampleData: 'name'
    }]
  }

  if (deep) {
    const ORGANISATIE = ORGANISATIE_()
    model.data = model.data.concat([
      {
        title: 'Geslacht',
        sampleData: 'gender'
      },
      {
        title: 'Geboortedatum',
        sampleData: 'date'
      },
      {
        relation: ORGANISATIE,
        relationType: 'single'
      }
    ])
  }

  return model
}
