
module.exports = (deep) => {

  let model = {
    title: 'Factuur',//Gefactureerde verkoopfacturen
    titlePlural: 'Facturen',
    sampleTitle: 'Factuur ACME Corp, 12 juni 2016',
    data: [{
      title: 'Verkoopfactuurnummer'
    }]
  }

  if (deep) {
    const ORGANISATIE = require('./organisatie.js')()
    model.data = model.data.concat([
      // {
      //   title: 'Journaalpost administratie'
      // },
      // {
      //   title: 'Financiële administratie'
      // },
      {
        title: 'Verkoopfactuurnummer'
      },
      // {
      //   title: 'Totaal verkoopbedrag'
      // },
      // {
      //   title: 'Aantal regels'
      // },
      // {
      //   title: 'Totaal van aantal'
      // },
      {
        title: 'Datum'
      },
      {
        title: 'Klant',
        relation: ORGANISATIE
      },
      {
        title: 'Contactpersoon'
      }
    ])
  }

  return model
}
