
module.exports = (deep) => {

  let model = {
    title: 'Te leveren pakbonregel',
    titlePlural: 'Te leveren pakbonregels',
    sampleTitle: 'Game, set match - Tijdschrift voor gamers - Stefan de Hoop - 03-05-2015',
    data: [{
      title: 'Omschrijving',
      sampleData: '_organisatie'
      /*
        Accentum 01-01-2018,
        ...
      */
    }]
  }

  if (deep) {
    const PERSOON = require('./persoon.js')()
    // const KALENDER = require('./kalender.js')()
    const PERIODE = require('./periode.js')()
    const ADRES = {
      title: 'Leveradres',
      // titlePlural: 'Te leveren pakbonregels',
      sampleTitle: 'Philipsstraat 9, 3800 AB Leusden',
      data: [{
        title: 'Omschrijving',
        sampleData: '_organisatie'
        /*
          Accentum 01-01-2018,
          ...
        */
      }]
    }
    model.data = model.data.concat([
      {
        title: 'Kalender voor jaarkalender goederenstroom',
        sampleData: 'weekkalender op basis van kalenderjaar'
        // relation: KALENDER,
        // relationType: 'single'
      },
      {
        title: 'Begindatum',
        sampleData: 'date'
      },
      {
        title: 'Datum',
        sampleData: 'date'
      },
      {
        title: 'Periode',
        relation: PERIODE,
        relationType: 'single'
      },
      {
        title: 'Klant',
        relation: PERSOON,
        relationType: 'single'
      },
      {
        title: 'Leveradres',
        relation: ADRES,
        relationType: 'single'
      },
      {
        title: 'Verkoopproduct',
        sampleData: 'Game, set match - Tijdschrift voor gamers'
        // relation: VERKOOPPRODUCT,
        // relationType: 'single'
      },
      {
        title: 'Aantal',
        sampleData: 'date'
      },
      {
        title: 'Vaste verrekenprijs',
        sampleData: 'currency'
      },
      {
        title: 'Status',
        sampleData: 'uit te voeren'
      },
      {
        title: 'Vaste grootboekrekening kostprijs verkopen',
        sampleData: 'Kostprijs verkopen (7200)'
        // relation: ,
        // relationType: 'single'
      },
      {
        title: 'Vaste grootboekrekening voorraad',
        sampleData: 'Voorraad (3000)'
        // relation: ,
        // relationType: 'single'
      },
      {
        title: 'Vaste grootboekrekening voorziening kostprijs verkopen',
        sampleData: 'Voorziening kostprijs verkopen (2011)'
        // relation: ,
        // relationType: 'single'
      },
      {
        title: 'Vaste grootboekrekening te leveren handelsartikelen',
        sampleData: 'Te leveren goederen (2010)'
        // relation: //,
        // relationType: 'single'
      },
      {
        title: 'Te leveren pakbonregel',
        sampleData: 'Te leveren goederen (2010)'
        // relation: //,
        // relationType: 'single'
      }
    ])
  }

  return model
}
