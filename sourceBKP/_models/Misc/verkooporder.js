
module.exports = (deep) => {

  let model = {
    title: 'Verkooporder',
    titlePlural: 'Verkooporders',
    sampleTitle: 'Accento B.V. 28-02-2017',
    data: [{
      title: 'Naam',
      sampleData: 'name',
      data: [
        {
          title: 'Omschrijving',
          sampleData: '_uitTeVoerenLoonberekeningen'
        }
      ],
    }]
  }

  if (deep) {
    const PERSON = require('./../_global/persoon.js')()
    model.data = [
      {
        title: 'Omschrijving',
        sampleData: '_uitTeVoerenLoonberekeningen'
      },
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        title: 'Periode',
        sampleData: 'date'
      },
      {
        title: 'Medewerker',
        relation: PERSON,
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
