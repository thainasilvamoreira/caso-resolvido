const avanca = document.querySelectorall('.btn-proximo');

avanca.forEach(button=> {
  button.addEventListerner('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classList.remove('ativo');
    DocumentTimeline.getElementById(proximoPasso).classList.add('ativo');




  })
}
)