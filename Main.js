// Barra de Navegação
window.onscroll = function() { _onScroll() };
var header = document.getElementById("Topo");

function _onScroll() {
  console.log(window.pageYOffset);
  
  if (window.pageYOffset >= header.offsetHeight) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
}

// Botao Voltar ao Topo
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});