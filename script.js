const colorPalette = document.getElementById('color-palette');
let count = 0; 
document.getElementById('acertos').innerHTML = count

function gerarCor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    return `(${r},${g},${b})`;
  }

function gerarPaleta() {
    for (let i = 0; i < 6; i += 1) {
      const div = document.createElement('div');
      div.className = 'ball';
      colorPalette.appendChild(div);
    }
  }


gerarPaleta();

function colorirPaleta() { for (let i = 0; i < 6; i += 1){
  document.getElementsByClassName('ball')[i].style.backgroundColor = `rgb${gerarCor()}`;;
  }
}

colorirPaleta()

function cor(){
  const rgb = document.getElementById('rgb-color')
  const num = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[num].style.backgroundColor
}
cor()

function select(event) {
  event.target.classList.add('selected');
  if (document.getElementsByClassName('selected')[0].style
  .backgroundColor === document.getElementById('rgb-color').innerHTML) {
    document.getElementById('answer').innerHTML = 'Acertou'
    colorirPaleta()
    count ++
    document.getElementById('acertos').innerHTML = count
    event.target.classList.remove('selected');
    cor()
  } else { 
    document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    count = 0
    document.getElementById('acertos').innerHTML = count
    event.target.classList.remove('selected');
    colorirPaleta()
    cor()
  }
}

for (let i = 0; i < 6; i += 1){
  document.getElementsByClassName('ball')[i].addEventListener('click', select);
}
