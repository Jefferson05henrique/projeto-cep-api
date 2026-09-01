# Projeto de Consulta de CEP

## Visão geral

Este projeto é uma aplicação web simples para consultar endereços por CEP no Brasil. A interface permite que o usuário digite um CEP, a aplicação valida a entrada e consulta a API do ViaCEP para retornar informações como logradouro, bairro, cidade, estado e o próprio CEP informado.

O objetivo principal é demonstrar o uso de HTML, CSS e JavaScript para consumir uma API pública e preencher os dados na tela de forma automática.

## Funcionalidades

- Digitação de CEP com validação automática
- Remoção de caracteres não numéricos
- Consulta automática quando o usuário digita 8 dígitos
- Requisição à API do ViaCEP
- Exibição dos dados retornados:
  - Logradouro
  - Bairro
  - Cidade
  - Estado
  - CEP
- Tratamento de erro para CEP inexistente ou falha na requisição

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API pública ViaCEP

## Estrutura do projeto

```text
ATIVIDADESPESSOAIS/
├── README.md
├── PROJETOAPI/
│   ├── consultaCep/
│   │   └── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
```

## Descrição dos arquivos

### README.md
Arquivo de documentação do projeto, com instruções de uso e descrição geral.

### PROJETOAPI/consultaCep/index.html
Arquivo principal da interface. Ele contém o formulário de entrada do CEP e os elementos que recebem os dados retornados pela API.

### PROJETOAPI/css/style.css
Arquivo de estilos que define a aparência visual da página, como layout, cores, botões, formulário e rodapé.

### PROJETOAPI/js/script.js
Arquivo responsável pela lógica da aplicação:

- captura o valor digitado pelo usuário
- remove caracteres inválidos
- dispara a consulta quando o CEP tem 8 dígitos
- envia a requisição para a API
- preenche os campos com os dados retornados
- exibe alertas em caso de erro

## Fluxo de funcionamento

1. O usuário digita o CEP no campo de entrada.
2. O JavaScript remove qualquer caractere que não seja número.
3. Quando a entrada tiver 8 dígitos, a aplicação realiza uma requisição para a API do ViaCEP.
4. A resposta da API é convertida em JSON.
5. Se o CEP for válido, os dados são exibidos na tela.
6. Se o CEP não existir ou houver erro de conexão, a aplicação informa o usuário e limpa os campos.

## Como executar o projeto

### Opção 1: abrir diretamente no navegador

- Abra o arquivo [PROJETOAPI/consultaCep/index.html](PROJETOAPI/consultaCep/index.html) em um navegador.

> Importante: como o projeto usa caminhos absolutos para CSS e JavaScript, a execução mais confiável é via um servidor local.

### Opção 2: usar um servidor local

No diretório raiz do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/PROJETOAPI/consultaCep/index.html
```

## Exemplo de uso

1. Acesse a página da aplicação.
2. Digite um CEP válido, por exemplo: 01001000.
3. A página exibirá automaticamente:
   - Logradouro
   - Bairro
   - Cidade
   - Estado
   - CEP

## Observações

- A aplicação depende da disponibilidade da API do ViaCEP.
- O projeto é uma demonstração acadêmica/estudo de front-end e consumo de API.
- O código foi construído de forma simples e didática para facilitar aprendizado e manutenção.

## Autor

Jefferson Henrique de Oliveira Reis

## Status do projeto

Em desenvolvimento / funcional para consulta básica de CEP.

