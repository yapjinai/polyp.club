const imageSearch = require("image-search-google");

const CSE_ID = "006930869079301058380:ctt1uuitfsk";
const API_KEY = "AIzaSyDEbNLV8a7LNotrWSGwK1lFbJ7t7_D7ioo";

const client = new imageSearch(CSE_ID, API_KEY);

export default async function randomSearch(query) {
  const page = randomPage();
  const images = await search(query, page)
  const image = (images ? await randomFromArray(images) : null);
  return await image;
}

export async function search(query, page=1) {
  let results;
  try {
    results = await client.search(query, {page});
  }
  catch {
    try {
      results = await client.search(query, {page: 1});
    }
    catch {
      results = null;
    }
  }

  const images = (results ? await results.map(r => r.url) : null);
  return await images;
}

export function randomPage() {
  const milli = new Date().getUTCMilliseconds();
  return parseInt(Math.random() * milli % 8);
}

export function randomFromArray(arr) {
  const index = parseInt(Math.random() * arr.length);
  return arr[index];
}
