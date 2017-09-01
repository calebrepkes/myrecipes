var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'De kokkin die beter kust dan ze kookt',
    intro: 'Voor Jera, een eigen digitaal recepten boek. Hier vind je alle recepten die je lekker vind om te maken.',
    description: 'Dit couscousgerecht is supermakkelijk te maken en bovendien erg smaakvol dankzij de combinatie van romige geitenkaas en zoete appel. De limoen, verse munt en verse peterselie geven de salade een fris en zomers tintje.',
    ingredientsText: 'Ingredienten om een heerlijke maaltijd te maken.',
    ingredientsObject: {
      'Volkoren couscous':'170 gram',
      'Gele paprika':'1 stuk',
      'Pruimtomaat':'2 stuks',
      'Lente-ui':'4 stuks',
      'Junami appel':'1 stuk',
      'Verse munt':'8 takjes',
      'bladpeterselie':'6 takjes',
      'Limoen':'een halve',
      'Geitenkaas':'100 gram',
      'Groentenbouillon': '350 ml',
      'Olijfolie':'2 tl',
      'Peper en Zout':'Naar smaak'
    },
    section1: 'Bereid de bouillon. Meng de couscous met de bouillon in een saladekom en laat, afgedekt, 10 minuten wellen.',
    section2: 'Snijd ondertussen de gele paprika en de pruimtomaat klein. Snijd de lente-ui in fijne ringen.',
    section3: 'Snijd de appel (junami) in kwarten, verwijder het klokhuis en snijd de appel klein. Haal de blaadjes munt van de takjes en snijd de munt fijn. Snijd zowel de takjes als de blaadjes van de bladpeterselie fijn.',
    section4: 'Voeg de paprika, tomaat, appel, lente-ui en het grootste gedeelte van de verse kruiden toe aan de couscous.',
    section5: 'Was de limoen grondig. Rasp de groene schil met een fijne rasp en pers de limoen uit. Voeg de extra vierge olijfolie, ½ el limoensap en ½ tl limoenrasp per persoon toe aan de salade en breng op smaak met peper en zout.',
    section6: 'Verdeel de couscoussalade over de borden. Brokkel de geitenkaas erover en garneer met de overige bladpeterselie en munt. Voeg naar smaak meer limoensap of -rasp toe.'
  });
});

module.exports = router;
