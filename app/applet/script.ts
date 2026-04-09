const url = 'https://lh3.googleusercontent.com/d/1Vffj6APsYg2uhw8L7BNbLR2gWud19q3z';

async function fetchImage() {
  const res = await fetch(url);
  const text = await res.text();
  console.log(text);
}

fetchImage();
