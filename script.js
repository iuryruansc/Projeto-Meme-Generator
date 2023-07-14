const container = document.querySelector('#meme-image-container');
const containerStyle = getComputedStyle(container);
let containerBorder = containerStyle.getPropertyValue('border');

// função para preview do texto
const previewText = () => {
    const inputText = document.querySelector('#text-input').value;
    document.querySelector('#meme-text').innerHTML = inputText;
}

// função para preview da imagem
const previewImage = () => {
    const inputImage = document.querySelector('#meme-insert').files[0];
    const reader = new FileReader();
  
    if (inputImage) {
      reader.readAsDataURL(inputImage);
    }

    reader.onload = () => {
        const srcValue = reader.result;
        document.querySelector('#meme-image').src = srcValue;
    };
}

// funções para mudar a borda do preview
const redBorder = () => {
    containerBorder = "3px dashed rgb(255, 0, 0)";
    container.style.border = containerBorder;
}

const blueBorder = () => {
    containerBorder = "5px double rgb(0, 0, 255)";
    container.style.border = containerBorder;
}

const greenBorder = () => {
    containerBorder = "6px groove rgb(0, 128, 0)";
    container.style.border = containerBorder;
}

// funções para selecionar exemplo
const selectExample = (event) => {
    const exampleImage = event.target.src;
    document.querySelector('#meme-image').src = exampleImage;
    console.log(exampleImage);
}

// atribuindo funções aos elementos
const textMeme = document.querySelector('#text-input');
textMeme.addEventListener('keyup', previewText);

const imageMeme = document.querySelector('#meme-insert');
imageMeme.addEventListener('change', previewImage);

const buttonFire = document.querySelector('#fire');
buttonFire.addEventListener('click', redBorder);

const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', blueBorder);

const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', greenBorder);

const buttonMeme1 = document.querySelector('#meme-1');
const buttonMeme2 = document.querySelector('#meme-2');
const buttonMeme3 = document.querySelector('#meme-3');
const buttonMeme4 = document.querySelector('#meme-4');

buttonMeme1.addEventListener('click', selectExample);
buttonMeme2.addEventListener('click', selectExample);
buttonMeme3.addEventListener('click', selectExample);
buttonMeme4.addEventListener('click', selectExample);

window.onload = () =>{
}