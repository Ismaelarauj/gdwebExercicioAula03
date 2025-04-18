/* Exercício 2 - Acessar o texto do <titulo> do segundo livro */
const xmlString1 = `
<biblioteca>
  <livro categoria="ficcao">
    <titulo>O Guia do Mochileiro das Galáxias</titulo>
    <autor>Douglas Adams</autor>
  </livro>
  <livro categoria="tecnico">
    <titulo>Introdução ao XML</titulo>
    <autor>Professor Exemplo</autor>
  </livro>
</biblioteca>`;

// Parsear o XML
const parser = new DOMParser();
const xmlDoc1 = parser.parseFromString(xmlString1, "text/xml");

// Acessar o segundo livro e seu <titulo>
const segundoLivro = xmlDoc1.getElementsByTagName("livro")[1];
const titulo = segundoLivro.getElementsByTagName("titulo")[0];
const textoTitulo = titulo.firstChild.nodeValue;

// Exibir no HTML
document.getElementById("resultado-ex2").innerHTML = `Título do segundo livro: ${textoTitulo}`;

/* Exercício 3 - Iterar sobre os nós filhos do nó raiz */
const raiz = xmlDoc1.documentElement; // Nó <biblioteca>
let nosFilhos = [];
for (let node of raiz.childNodes) {
  if (node.nodeType === 1) { // Filtrar nós de elemento
    nosFilhos.push(node.nodeName);
  }
}
// Exibir no HTML
document.getElementById("resultado-ex3").innerHTML = `Nós de elemento filhos de &lt;biblioteca&gt;: ${nosFilhos.join(", ")}`;

/* Exercício 4 - Alterar o valor do nó de texto de <preco> */
const xmlString2 = `
<catalogo>
  <produto id="A45">
    <nome>Caneta Azul</nome>
    <preco>2.50</preco>
    <estoque>150</estoque>
  </produto>
</catalogo>`;

// Parsear o XML
const xmlDoc2 = parser.parseFromString(xmlString2, "text/xml");

// Encontrar o elemento <preco> dentro do <produto> com id="A45"
const produto = xmlDoc2.querySelector("produto[id='A45']");
const preco = produto.getElementsByTagName("preco")[0];

// Alterar o valor do nó de texto
preco.firstChild.nodeValue = "3.00";

// Confirmar a alteração e exibir no HTML
const novoPreco = preco.firstChild.nodeValue;
document.getElementById("resultado-ex4").innerHTML = `Novo valor do preço: ${novoPreco}`;

/* Exercício 5 - Adicionar um novo atributo 'moeda' ao <produto> */
// Usar o mesmo xmlDoc2 do Exercício 4
// Encontrar o elemento <produto> com id="A45"
const produto2 = xmlDoc2.querySelector("produto[id='A45']");

// Adicionar o atributo 'moeda' com valor 'BRL'
produto2.setAttribute("moeda", "BRL");

// Confirmar a adição do atributo e exibir no HTML
const valorMoeda = produto2.getAttribute("moeda");
document.getElementById("resultado-ex5").innerHTML = `Valor do atributo 'moeda': ${valorMoeda}`;
