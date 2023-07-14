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
        console.log(srcValue);
    };
}

const textMeme = document.querySelector('#text-input');
textMeme.addEventListener('keyup', previewText);

const imageMeme = document.querySelector('#meme-insert');
imageMeme.addEventListener('change', previewImage);

window.onload = () =>{
}