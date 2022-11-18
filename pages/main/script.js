const body = document.querySelector('body');

let docFragment = document.createDocumentFragment();

const container = document.createElement('div');
container.setAttribute('class', 'container');

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

container.append(header);
container.append(main);
container.append(footer);

const heading = document.createElement('h1');
header.append(heading);
heading.innerText = "Welcome to the amazing book shop!";

body.setAttribute('class', 'body');
header.setAttribute('class', 'header');
main.setAttribute('class', 'main');
footer.setAttribute('class', 'footer');

docFragment.append(container);
body.append(docFragment);

fetch('../books.json', { mode: 'no-cors' }).then(response => {
  return response.json();
}).then(data => {
  const bookContainer = [];
  for (let i = 0; i < data.length; i++) {
    bookContainer[i] = document.createElement('div');
    bookContainer[i].setAttribute('class', 'book-container');
    main.append(bookContainer[i]);

    const author = document.createElement('h2');
    author.innerText = data[i].author;
    bookContainer[i].append(author);

    const image = document.createElement('img');
    image.setAttribute('class', 'src');
    image.setAttribute('class', 'alt');
    image.src = data[i].imageLink;
    image.alt = `book ${i} image`;
    bookContainer[i].append(image);

    const title = document.createElement('h3');
    title.innerText = data[i].title;
    bookContainer[i].append(title);

    const price = document.createElement('p');
    price.innerText = data[i].price +'$';
    bookContainer[i].append(price);

    const description = document.createElement('p');
    description.innerText = data[i].description;
    bookContainer[i].append(description);

  }
});







