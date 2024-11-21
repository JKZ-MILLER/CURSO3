// Seleciona o container onde os cartões serão adicionados
const container = document.getElementById('container');

// Função para criar um flashcard
function criaCartao(categoria, pergunta, resposta) {
    // Cria os elementos
    const artigo = document.createElement('article');
    artigo.classList.add('cartao');
    
    const conteudo = document.createElement('div');
    conteudo.classList.add('cartao__conteudo');
    
    const titulo = document.createElement('h3');
    titulo.textContent = categoria;
    
    const perguntaDiv = document.createElement('div');
    perguntaDiv.classList.add('cartao__conteudo__pergunta');
    perguntaDiv.innerHTML = `<p>${pergunta}</p>`;
    
    const respostaDiv = document.createElement('div');
    respostaDiv.classList.add('cartao__conteudo__resposta');
    respostaDiv.innerHTML = `<p>${resposta}</p>`;
    respostaDiv.style.display = 'none'; // Oculta a resposta inicialmente

    // Adiciona funcionalidade de clique
    perguntaDiv.addEventListener('click', () => {
        respostaDiv.style.display = respostaDiv.style.display === 'none' ? 'block'
