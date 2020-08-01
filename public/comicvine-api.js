const key = '?api_key=51d4c9d90c7473811cfc050708f1b3a5f50d2a6f';
const cors = 'https://cors-anywhere.herokuapp.com/';
const URL = cors + 'https://comicvine.gamespot.com/api';
const format = '&format=json';

export const heroesList  = fetch(`${URL}/characters/${key}&limit=10${format}`);
