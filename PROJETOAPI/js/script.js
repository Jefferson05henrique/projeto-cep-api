// Seleção dos elementos do DOM
const campoCep = document.querySelector("#cep");

// Elementos onde o resultado será exibido
const campoLogradouro = document.querySelector("#logradouro");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const campoResultadoCep = document.querySelector("#resultado-cep");

// Escuta a digitação do usuário em tempo real
campoCep.addEventListener("input", function() {

    // Remove traços, pontos ou letras, deixando apenas números
    const cepFormatado = campoCep.value.replace(/\D/g, "");

    // Dispara a consulta apenas quando completar exatamente 8 dígitos
    if (cepFormatado.length === 8) {
        
        // Opcional: Feedback visual de carregando
        campoLogradouro.textContent = "Buscando...";
        campoBairro.textContent = "Buscando...";
        campoCidade.textContent = "Buscando...";
        campoEstado.textContent = "Buscando...";
        campoResultadoCep.textContent = "Buscando...";

        const url = `https://viacep.com.br/ws/${cepFormatado}/json/`;

        fetch(url)
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(dados) {

                if (dados.erro) {
                    alert("CEP não encontrado!");
                    limparCampos();
                    return;
                }

                // Preenche os campos automaticamente
                campoLogradouro.textContent = dados.logradouro || "Não informado";
                campoBairro.textContent = dados.bairro || "Não informado";
                campoCidade.textContent = dados.localidade;
                campoEstado.textContent = dados.uf;
                campoResultadoCep.textContent = dados.cep;

            })
            .catch(function(erro) {
                console.error("Erro na requisição:", erro);
                alert("Erro ao buscar o CEP.");
                limparCampos();
            });
    }
});

// Função auxiliar para limpar a exibição caso haja erro
function limparCampos() {
    campoLogradouro.textContent = "";
    campoBairro.textContent = "";
    campoCidade.textContent = "";
    campoEstado.textContent = "";
    campoResultadoCep.textContent = "";
}

/* addEventListener = o js vai observar o elemento e mandara ele fazer algo quando algo acontece
event.preventDefault() = "navegador, não faça o comportamento padrão. eu vou cuidar disso." 
.replace = pegue o conteúdo de cep e substitua - por nada (isso que estamos fazendo é um tratamento)
fetch() = js vá nessa url e peça os dados para ela
.then(function(resposta) = aqui basicamente vai ficar a resposta da API
.textContent = pegue o elemento campoLogradouro e coloque dentro dele o valor de dados.logradouro*/