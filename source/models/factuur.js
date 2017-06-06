const ORGANISATIE = require('./organisatie.js')
module.exports = {
  // title: 'Gefactureerde verkoopfacturen',
  title: 'Factuur',
  titlePlural: 'Facturen',
  sampleTitle: 'Factuur ACME Corp, 12 juni 2016',
  data: [
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
  ]
}
