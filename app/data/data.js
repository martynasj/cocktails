import uuid from 'uuid';
import { glasses } from './glass_data';
import { brandedDrinks, types } from './alcohol_data';

const cocktailsUrl = '/assets/img/cocktails/';

function create(cocktail) {

  return Object.assign({
    _id: uuid.v4()
  }, cocktail);

}

const negroni = create({

  _id: '01234negroni01234',

  name: 'Negroni',
  images: [`${cocktailsUrl}negroni_1.jpg`, `${cocktailsUrl}negroni_2.jpg`],

  ingredients: {
    alcohol: [
      // amounts in cl
      // alcohol can be either a specific branded drink or type
      { alcohol: '01', amount: 3 },
      { alcohol: '02', amount: 3 },
      { alcohol: '03', amount: 3 }
    ],
    other: [
      'Ice cubes'
    ],
    garnish: [
      'Orange peel'
    ]
  },

  preparation: {
    steps: [
      'Pour all drinks',
      'Add ice',
      'Stir for 1 min',
      'Garnish with orange peel'
    ],
    glassTypes: [ glasses.rocks ]
  },

  description: {

    brief: `This ruby red Italian charmer is popping up everywhere, having entered the mainstream in mid-2015. While the Negroni may look sweet, it’s anything but – it’s strong, bitter alcohol tastes are revered; there’s no syrup masking anything here. Drink it before a good meal, and by good we mean big, because a gin, vermouth and Campari combination would have sunk Henry VIII.`,

    history: `While the drink's origins are unknown, the most widely reported account is that it was invented in Florence, Italy, in 1919, at Caffè Casoni, ex Caffè Giacosa, now called Caffè Cavalli. Count Camillo Negroni invented it by asking the bartender, Fosco Scarselli, to strengthen his favorite cocktail, the Americano, by adding gin rather than the normal soda water. The bartender also added an orange garnish rather than the typical lemon garnish of the Americano to signify that it was a different drink.[2][3][4][5] After the success of the cocktail, the Negroni Family founded Negroni Distillerie in Treviso, Italy, and produced a ready-made version of the drink, sold as Antico Negroni 1919.[citation needed] One of the earliest reports of the drink came from Orson Welles in correspondence with the Coshocton Tribune while working in Rome on Cagliostro in 1947, where he described a new drink called the Negroni, "The bitters are excellent for your liver, the gin is bad for you. They balance each other."[6][7]
    The respected drinks historian David Wondrich has researched Camillo Negroni, who was born on 25 May 1868 to Enrico Negroni and Ada Savage Landor, and died in Florence on 25 September 1934. While his status as a count is questionable, his grandfather, Luigi Negroni, was indeed a count. [8]
    Descendants of General Pascal Olivier de Negroni, Count de Negroni claim that he was the Count Negroni who invented the drink in 1857 in Senegal. "A Corse Matin" Sunday Edition article dated 2 February 1980 is translated on a descendant's blog: this claims he invented the drink around 1914.[9] An article in the New Hampshire Union Leader reported on the controversy.[10]`,

  },

  variations: [
    { name: 'Boulevardier', briefDescription: ' A similar cocktail that uses whiskey in place of gin.' }
  ]

});

const cosmopolitan = create({

  name: 'Cosmopolitan',
  images: [`${cocktailsUrl}cosmopolitan_1.jpg`, `${cocktailsUrl}cosmopolitan_2.jpg`],

  ingredients: {
    alcohol: [
      // amounts in cl
      { name: 'Vodka Citron', amount: 4 },
      { name: 'Cointreau', amount: 1.5 }
    ],
    other: [
      { name: 'Lime Juice', amount: 1.5 },
      { name: 'Cranberry Juice', amount: 3 }
    ],
    garnish: [
      'Lemon slice or lime wedge'
    ]
  },

  preparation: [
    'Add all ingredients into cocktail shaker filled with ice',
    'Shake well and double strain into large cocktail glass',
    'Garnish'
  ],

  description: {

    history: `The International Bartenders Association recipe is based on vodka citron, lemon-flavored vodka.[1] The cosmopolitan is a relative of cranberry coolers like the Cape Codder.[2] Though often presented far differently, the cosmopolitan also bears a likeness in composition to the kamikaze cocktail.
The origin of the cosmopolitan is disputed. It is widely believed that the drink was created independently by different bartenders since the 1970s.[3] Generally, people have recognized that John Caine brought the drink to San Francisco around 1987 from Ohio.[4][5] The same year in Manhattan, the internationally recognized version of the cocktail was created by Toby Cecchini, based on a poorly described version of Cheryl Cook's creation.[6] According to Sally Ann Berk and Bob Sennett, the cosmopolitan appears in literature as early as 1993 and derives from New York City.[7][8][9][10]`,

  },

  variations: [
    { name: 'Cosmocello', briefDescription: 'Substitutes limoncello for the lime juice.' }
  ]

});

export const cocktails = [
  negroni,
  cosmopolitan
];
