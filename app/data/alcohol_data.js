import _ from 'lodash';

export const types = {
  cachaca: 'Cachaça',
  gin: 'Gin',
  vermouth: 'Vermouth',
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
  }
};

export const brandedDrinks = [
  { _id: '01', name: 'Geranium', type: types.gin, alcoholVolume: 55, country: 'UK', flavour: '', color: 'Clear' },
  { _id: '02', name: 'Campari', type: types.bitters, alcoholVolume: 44, country: 'Italy', flavour: ['bitter', 'spicy', 'sweet'], color: 'Red' },
  { _id: '03', name: 'Carpano Antica Formula', type: types.vermouth, country: 'Italy' }
];

export const allDrinks = _.flatMap(types, (value, key) => {
  if (_.isObject(value)) {
    return _.valuesIn(value, (value2, key2) => { return value2 })
  }
  return value;
});




