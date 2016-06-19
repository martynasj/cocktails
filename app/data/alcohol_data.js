import _ from 'lodash';

export const types = {
  cachaca: 'Cachaça',
  gin: 'Gin',
  vermouth: {
    plain: 'Vermouth',
    red: 'Red Vermouth',
    white: 'White Vermouth'
  },
  bitters: 'Bitters',
  liqueur: 'Liqueur',
  rum: 'Rum',
  whisky: 'Whisky',
  tequila: 'Tequila',
  vodka: 'Vodka',
  wine: {
    red: 'Red Wine',
    white: 'White Wine',
    rose: 'Rose Wine'
  },
  cider: 'Cider',
  beer: {
    ale: 'Ale',
    lager: 'Lager',
    wheat: 'Wheat Beer'
  },
  angostura: 'Angostura',
  gingerBeer: 'Ginger beer'
};

export const brandedDrinks = [
  { _id: '01', name: 'Geranium', type: types.gin, alcoholVolume: 55, country: 'UK', flavour: '', color: 'Clear' },
  { _id: '02', name: 'Campari', type: types.bitters, alcoholVolume: 44, country: 'Italy', flavour: ['bitter', 'spicy', 'sweet'], color: 'Red' },
  { _id: '03', name: 'Carpano Antica Formula', type: types.vermouth, country: 'Italy' }
];

// Array of lowercase drinks for use in suggestions and etc...
const generateDrinksArray = () => {
  let drinks = _.flatMap(types, (value, key) => {
    if (_.isObject(value)) {
      return _.valuesIn(value, (value2, key2) => { return value2 })
    }
    return value;
  });
  return _.map(drinks, (value) => {
    return _.toLower(value);
  });
};

export const allDrinks = generateDrinksArray();

const fruit = [ 'lime', 'lemon', 'apple', 'orange', 'cranberry', 'melon', 'pineapple', 'pomegranate', 'celery', 'parsley', 'tomato' ];
const fullJuiceNames = _.map(fruit, value => `${value} juice`);

const syrups = [ 'simple syrup', 'sugar syrup', 'caramel syrup', 'vanilla syrup', 'grenadine syrup', 'tonic syrup', 'elderflower syrup' ];
const other = [ 'brown sugar', 'sugar', 'mint' ];
const mixers = [ 'coke', 'sprite', 'fanta', 'lemonade', 'tonic', 'soda' ];

export const otherIngredients = _.concat([], fruit, fullJuiceNames, syrups, mixers, other);

export const allSuggestions = _.concat([], allDrinks, otherIngredients);



