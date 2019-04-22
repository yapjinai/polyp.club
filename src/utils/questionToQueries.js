let result;

// const WIKI_API = 'https://en.wiktionary.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&origin=*';
const WIKI_API = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&origin=*';

export default async function questionToQueries(question) {
  return [
    await wiki(),
    await wiki(),
    await wiki(),
  ]
}

async function wiki() {
  const response = await fetch(WIKI_API);
  const json = await response.json();
  result = await json.query.random[0].title;

  return result;
}
