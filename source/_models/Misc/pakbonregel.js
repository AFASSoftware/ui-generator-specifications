
module.exports = (deep) => {

  let model = {
    title: 'Te leveren pakbonregel',
    titlePlural: 'Te leveren pakbonregels',
    sampleTitle: 'Apple MacBook Air 13 inch - 05-07-2017',
    data: [
      {
        title: 'Omschrijving',
        sampleData: '_uitTeVoerenLoonberekeningen'
      }
    ]
  }

  if (deep) {
    const PERSON = require('./../_global/persoon.js')()
    const ORGANISATIE = require('./../_global/organisatie.js')()
    model.data = [
      {
        title: 'Omschrijving',
        sampleData: '_teLeverenPakbonRegels'
      },
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        title: 'Klant',
        relation: ORGANISATIE,
        relationType: 'single'
      },
      {
        title: 'Contactpersoon',
        relation: PERSON,
        relationType: 'single'
      },
      {
        title: 'Verkoopproduct',
        sampleData: 'name'
      },
      {
        title: 'Verantwoordelijke',
        relation: PERSON,
        relationType: 'single'
      },
    ]
  }

  return model
}
