function searchContent() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const contentItems = document.querySelectorAll('.content-item');
  const resultados = document.getElementById('resultados');

  // Limpar resultados anteriores
  resultados.innerHTML = '';
  let found = false;

  contentItems.forEach(item => {
      const title = item.dataset.title.toLowerCase();
      if (title.includes(searchTerm)) {
          found = true;

          // Criar elemento na lista de resultados
          const resultItem = document.createElement('div');
          resultItem.className = 'resultado-item';
          resultItem.textContent = title;
          resultItem.onclick = function() {
              item.scrollIntoView({ behavior: 'smooth' });
              highlightContent(item);
          };

          resultados.appendChild(resultItem);
      }
  });

  // Mostrar ou esconder a aba de resultados
  if (searchTerm && found) {
      resultados.style.display = 'block';
  } else {
      resultados.style.display = 'none';
  }
}

function highlightContent(item) {
  // Remover destaque de itens anteriores
  document.querySelectorAll('.content-item').forEach(i => i.style.borderColor = '#ccc');

  // Destacar o item selecionado
  item.style.borderColor = '#007bff';
}




// Quando o usuário rolar 20px da parte superior da página, mostrar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
}

// Quando o usuário clicar no botão, rolar até o topo da página
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


