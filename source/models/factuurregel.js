
module.exports = (deep) => {

  let model = {
    title: 'Factuurregel',
    titlePlural: 'Factuurregels',
    sampleTitle: 'Factuurregel cursus HRM 20 juni',
    data: [{
      title: 'Verkoopfactuurnummer'
    }]
  }

  if (deep) {

    const ORGANISATIE = require('./organisatie.js')()
    model.data = model.data.concat([
      {
        title: 'Omschrijving',
        sampleData: ['paragraph', { sentences: 1 }]
      },
      // {
      //   title: 'Financiële administratie',
      //   sampleData: '_financial.administration'
      // },
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        relation: ORGANISATIE
      },
      {
        // reference: persoon()
        title: 'Contactpersoon',
        sampleData: 'name'
      },
      {
        title: 'Verkoopproduct',
        sampleData: '_course'
      },
      {
        title: 'Aantal',
        sampleData: ['integer', { min: 1, max: 60 }]
      },
      {
        title: 'Verkoopprijs',
        sampleData: ['euro', { min: 150, max: 350 }]
      },
      {
        title: 'Verkoopbedrag',
        sampleData: ['euro', { min: 150, max: 4000 }]
      },
      // {
      //   title: 'Journaalpost administratie',
      //   sampleData: '_financial.journalentryadministration'
      // },
      // {
      //   title: 'Grootboekrekening te factureren'
      // },
      // {
      //   title: 'Grootboekrekening debiteuren'
      // },
      // {
      //   title:'Grootboekrekening verwachte omzet'
      // },
      // {
      //   title:'Grootboekrekening omzet'
      // },
      {
        title:'Status'
      },
      {
        title:'Bron'
      }
    ])
  }

  return model
}
