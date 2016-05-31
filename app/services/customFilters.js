export const filterByProperty = (objectProperty, searchCriteria) => {

  if (!searchCriteria) {
    return () => true;
  }

  const searchInput = searchCriteria ? searchCriteria.toLowerCase() : true;

  // this function is run once with every object of array to be filtered
  return function (object) {
    const lowerCaseProp = object[objectProperty].toLowerCase();
    return lowerCaseProp.startsWith(searchInput);
  };

}