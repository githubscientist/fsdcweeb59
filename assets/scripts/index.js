const headers = document.getElementsByTagName('h1');

headers[0].style.color = 'green';

const paragraphs = document.getElementsByTagName('p');

for (let index = 0; index < paragraphs.length; index++){
    paragraphs[index].style.color = 'red';
}