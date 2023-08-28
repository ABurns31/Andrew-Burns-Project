console.clear();

const slideContainer = document.createElement('div');
slideContainer.classList.add('slidesContainer');
document.body.appendChild(slideContainer)

const quotesContainer = document.createElement('div');
slideContainer.appendChild(quotesContainer);

const quoteOne = document.createElement('p');
quoteOne.innerText = `'Lorem ipsum dolor sit amet, consecteur adipiscing 
                   elit, sed do eiusmod tempor incididunt ut labore et 
                   dolore magna aliqua. Ut enim ad minim veniam.'`
quotesContainer.appendChild(quoteOne);
quoteOne.classList.add('quote-one');

const quoteTwo = document.createElement('p');
quoteTwo.innerText = `'Duece ipsum Lorem dolor sit amet, consecteur adipiscing 
                   elit, sed do eiusmod tempor incididunt ut labore et 
                   dolore magna veniam aliqua. Ut enim minim ad aliqua.'`
quoteTwo.classList.add('quote-two');
quotesContainer.appendChild(quoteTwo);



const quoteThree = document.createElement('p');
quoteThree.innerText = `'Tre Lorem ipsum dolor sit amet, consecteur adipiscing 
                   elit, sed do eiusmod tempor incididunt ut labore et 
                   dolore magna aliqua. Ut enim ad minim veniam.'`
quoteThree.classList.add('quote-three');
quotesContainer.appendChild(quoteThree);
quotesContainer.classList.add('border');


quoteTwo.classList.add('hide')
quoteThree.classList.add('hide')

const nameAndPositionContainer = document.createElement('div');
nameAndPositionContainer.classList.add('flex')
const nameOne = document.createElement('p');
const nameTwo = document.createElement('p');
const nameThree = document.createElement('p');

nameTwo.classList.add('hide'); 
nameThree.classList.add('hide');

nameOne.innerText = 'Jenny Doe';
nameTwo.innerText = 'Senny Doe';
nameThree.innerText = 'Threnny Doe';

nameAndPositionContainer.appendChild(nameOne);
nameAndPositionContainer.appendChild(nameTwo);
nameAndPositionContainer.appendChild(nameThree);

const sliderDotsContainer = document.createElement('div');
sliderDotsContainer.classList.add('border','flexSA');

const dotOne = document.createElement('button');
const dotTwo = document.createElement('button');
const dotThree = document.createElement('button');

sliderDotsContainer.appendChild(dotOne);
sliderDotsContainer.appendChild(dotTwo);
sliderDotsContainer.appendChild(dotThree);

slideContainer.appendChild(nameAndPositionContainer);
slideContainer.appendChild(sliderDotsContainer);

dotOne.addEventListener('click', function(){
  
  nameTwo.classList.add('hide');
  nameThree.classList.add('hide');
  nameOne.classList.remove('hide');
  
  dotTwo.classList.add('hideOutline');
  dotThree.classList.add('hideOutline');
  dotOne.classList.remove('hideOutline');
  dotOne.classList.add('defaultButton')
  dotThree.classList.remove('defaultButton');
  dotTwo.classList.remove('defaultButton');
  
  quoteOne.classList.remove('hide');
  quoteTwo.classList.add('hide');
  quoteThree.classList.add('hide');
  
})

dotTwo.addEventListener('click', function(){
  nameOne.classList.add('hide');
  nameThree.classList.add('hide');
  nameTwo.classList.remove('hide');
  
  dotOne.classList.add('hideOutline');
  dotThree.classList.add('hideOutline');
  dotTwo.classList.remove('hideOutline');
  dotTwo.classList.add('defaultButton');
  dotThree.classList.remove('defaultButton');
  dotOne.classList.remove('defaultButton');
  
  quoteOne.classList.add('hide');
  quoteTwo.classList.remove('hide');
  quoteThree.classList.add('hide');
})

dotThree.addEventListener('click', function(){
  nameTwo.classList.add('hide');
  nameOne.classList.add('hide');
  nameThree.classList.remove('hide');
  
  dotTwo.classList.add('hideOutline');
  dotOne.classList.add('hideOutline');
  dotThree.classList.remove('hideOutline');
  dotThree.classList.add('defaultButton');
  dotTwo.classList.remove('defaultButton');
  dotOne.classList.remove('defaultButton');
  
  quoteOne.classList.add('hide');
  quoteTwo.classList.add('hide');
  quoteThree.classList.remove('hide');
})







