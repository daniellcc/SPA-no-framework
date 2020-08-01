const key = '?api_key= here goes your api key';
const cors = 'https://cors-anywhere.herokuapp.com/';
const URL = cors + 'https://comicvine.gamespot.com/api';
const format = '&format=json';

export const heroesList  = fetch(`${URL}/characters/${key}&limit=10${format}`, {
  method: 'GET'
});
