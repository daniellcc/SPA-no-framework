// imports
import { heroesList } from './comicvine-api.js';

// http requests

heroesList
  .then(data => data.json())
  .then(res => {
    const list = res.results.map(el => `<li>${el.name} </li>`).join('');
    templates.heroes += list;
  })
  .catch(err => { throw err });

// ui

const UIelements = {
  navBtns: [
    document.getElementById('home'),
    document.getElementById('heroes-list'),
    document.getElementById('about')
  ],
  content: document.getElementById('content'),
  title: 'noframework | '
}

let templates = {
  home: '<h1>on home</h1>',
  heroes: '<h1>on heroes</h1>',
  about: '<h1>on about</h1>'
}

// routing

const routes = {
  '/home': templates.home,
  '/heroes-list': templates.heroes,
  '/about': templates.about
}

const navigation = path => { 
  const sitePath = path.slice(1);

  window.history.pushState(
    { sitePath },
    sitePath,
    path
  );
  content.innerHTML = routes[path];
  document.title = UIelements.title + sitePath;
}

// events

window.addEventListener('load', (e) => {
  if(!window.history.state) {
    content.innerHTML = routes['/home'];
    document.title = UIelements.title;
  }
  else {
    content.innerHTML = routes['/' + window.history.state.sitePath]
    document.title = UIelements.title + window.history.state.sitePath;
  }
});

window.addEventListener('popstate', e => {
  content.innerHTML = routes['/' + e.state.sitePath];
  document.title = UIelements.title + e.state.sitePath;
});

UIelements.navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    navigation('/' + e.target.id);
  });
});





