# Consulta de CEP

## Visão geral

Este projeto é uma aplicação web simples desenvolvida em HTML, CSS e JavaScript para consultar informações de endereço a partir de um CEP brasileiro. A aplicação consome a API pública do ViaCEP e exibe automaticamente os dados do endereço correspondente.

O projeto foi criado como uma demonstração prática de consumo de APIs no front-end, com foco em simplicidade, clareza e facilidade de aprendizado.

## Objetivo

Permitir que o usuário informe um CEP e visualize em tela:

- logradouro
- bairro
- cidade
- estado
- CEP consultado

## Funcionalidades

- Digitação de CEP por meio de campo de texto
- Validação automática para aceitar apenas números
- Consulta automática ao completar 8 dígitos
- Requisição à API ViaCEP
- Exibição dinâmica dos resultados na interface
- Mensagem de erro para CEP inválido ou inexistente
- Limpeza automática dos campos em caso de falha

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API ViaCEP

## Estrutura do projeto

```text
ATIVIDADESPESSOAIS/
├── README.md
├── .gitignore
└── PROJETOAPI/
    ├── consultaCep/
    │   └── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Descrição dos principais arquivos

### [PROJETOAPI/consultaCep/index.html](PROJETOAPI/consultaCep/index.html)
Arquivo principal da interface da aplicação. Ele contém o formulário, os campos de entrada e os elementos HTML em que os dados da consulta serão exibidos.

### [PROJETOAPI/css/style.css](PROJETOAPI/css/style.css)
Arquivo responsável pelo layout visual da página, incluindo cores, espaçamento, botões, formulário e estrutura geral.

### [PROJETOAPI/js/script.js](PROJETOAPI/js/script.js)
Arquivo que contém a lógica da aplicação. Ele:

- captura o valor digitado pelo usuário
- remove caracteres não numéricos
- verifica quando o CEP tem 8 dígitos
- realiza a requisição para a API do ViaCEP
- atualiza os campos com os dados retornados
- trata erros e exibe alertas

## Como funciona a aplicação

1. O usuário digita um CEP no campo indicado.
2. O JavaScript remove qualquer caractere que não seja número.
3. Quando a entrada atingir 8 dígitos, a aplicação envia a requisição para a API.
4. A API retorna um objeto JSON com os dados do endereço.
5. Os dados são exibidos na interface sem recarregar a página.
6. Se o CEP não existir ou houver algum problema na comunicação, o sistema informa o usuário e limpa os campos.

## Como executar

### Opção 1: abrir diretamente no navegador

Abra o arquivo [PROJETOAPI/consultaCep/index.html](PROJETOAPI/consultaCep/index.html) no navegador.

### Opção 2: executar com servidor local

No diretório raiz do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse no navegador:

```text
http://localhost:8000/PROJETOAPI/consultaCep/index.html
```

> Essa segunda opção é recomendada porque a página usa caminhos para arquivos CSS e JS de forma mais confiável quando servida localmente.

## Exemplo de uso

1. Acesse a página da aplicação.
2. Digite um CEP válido, como 01001000.
3. A interface exibe automaticamente:
   - logradouro
   - bairro
   - cidade
   - estado
   - CEP

## Observações

- A aplicação depende da disponibilidade da API do ViaCEP.
- O projeto é voltado para estudo e demonstração de consumo de API com JavaScript.
- A estrutura é simples e fácil de entender para iniciantes em desenvolvimento web.

## Autor

Jefferson Henrique de Oliveira Reis

## Status atual

Projeto funcional para consulta básica de CEP e em constante possibilidade de melhorias.

