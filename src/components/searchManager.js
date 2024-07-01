let searchResults = []; 
let searchQuery = ''; 

export const setSearchResults = (results) => {
  searchResults = results;
};

export const setSearchQuery = (query) => {
  searchQuery = query;
};

export const resetSearch = () => {
  searchResults = [];
  searchQuery = '';
};

export const getSearchResults = () => {
  return searchResults;
};

export const getSearchQuery = () => {
  return searchQuery;
};
