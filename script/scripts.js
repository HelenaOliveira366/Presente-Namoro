function fuja(){
    let btnNo = document.getElementById('nao');

    //Variaveis que armazenam a largura e altura da tela do usuário
    let widthWindow = window.innerWidth;
    let heightWindow = window.innerHeight;

    //Determinar a área que o botão pode percorrer, sem extrapolar o tamanho disponível nos eixos x e y
    let maxX = widthWindow - btnNo.offsetWidth;
    let maxY = heightWindow - btnNo.offsetHeight;

    //Determinar posição aleatória do botão "Não" nos eixos x e y
    let positionX = Math.floor(Math.random() * maxX);
    let positionY = Math.floor(Math.random() * maxY);

    //Manipulando o CSS com DOM
    btnNo.style.left = positionX + 'px';
    btnNo.style.top = positionY + 'px';
}