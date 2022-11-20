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
heading.setAttribute('class', 'heading');

body.setAttribute('class', 'body');
header.setAttribute('class', 'header');
main.setAttribute('class', 'main');
footer.setAttribute('class', 'footer');

const books = document.createElement('div');
const booksHeading = document.createElement('h2');
booksHeading.innerText = "Available books";
books.append(booksHeading);
main.append(books);

const bag = document.createElement('div');
const bagHeading = document.createElement('h2');
bagHeading.innerText = "Bag for your chosen books";
bag.append(bagHeading);
main.append(bag);

const link = document.createElement('a');
link.href = "../delivery/index.html";
link.innerText = "Delivery Page";
footer.append(link);

docFragment.append(container);
body.append(docFragment);

fetch('../books.json', { mode: 'no-cors' }).then(response => {
  return response.json();
}).then(data => {
  const bookContainer = [];
  for (let i = 0; i < data.length; i++) {
    bookContainer[i] = document.createElement('div');
    bookContainer[i].setAttribute('class', 'book-container');
    books.append(bookContainer[i]);
    
    books.addEventListener('click', (event) => {
      bag.append(bookContainer[0]);
    });
    
    const author = document.createElement('h2');
    author.innerText = data[i].author;
    bookContainer[i].append(author);

    const image = document.createElement('img');
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
    description.setAttribute('class', 'description');
    bookContainer[i].append(description);

    // const popup = document.createElement('div');
    // const closeBtn = document.createElement('button');
    // const popupBody = document.createElement('div');
    // closeBtn.innerText = "x";
    // closeBtn.setAttribute('class', 'close-button');
    // popupBody.innerText = data[i].description;
    // popup.append(closeBtn);
    // popup.append(popupBody);
    // bookContainer[i].append(popup);
    
    const showMore = document.createElement('button');
    showMore.innerText = 'Show more';
    showMore.setAttribute('class', 'show-more-btn');
    bookContainer[i].append(showMore);

    const addToBag = document.createElement('button');
    addToBag.innerText = "Add to Bag";
    addToBag.setAttribute('class', 'add-to-bag-btn');
    bookContainer[i].append(addToBag);
  }
});






