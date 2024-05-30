# API do CRM

Bem-vindo à documentação da API do CRM (Customer Relationship Management). Esta API é desenvolvida em Node.js e Express, e é usada para gerenciar clientes, projetos e tickets de suporte.

## Recursos Disponíveis

A API fornece os seguintes recursos:

- Autenticação de Usuários
- Gerenciamento de Clientes
- Gerenciamento de Projetos
- Gerenciamento de Tickets de Suporte

A seguir, são detalhados os endpoints disponíveis para cada recurso.

### Autenticação de Usuários

#### Registrar Usuário

    POST /api/auth/register

Registra um novo usuário na plataforma.

**Corpo da Requisição:**

```json
{
  "name": "Nome do Usuário",
  "email": "email@example.com",
  "password": "senha123"
}
```

#### Login de Usuário

    POST /api/auth/register

Realiza o login de um usuário existente.

**Corpo da Requisição:**

```json

{
  "email": "email@example.com",
  "password": "senha123"
}

```

#### Obter Perfil de Usuário

    GET /api/auth/profile

Retorna as informações do perfil do usuário autenticado.

### Gerenciamento de Clientes

#### Listar Clientes

    GET /api/customers

Retorna a lista de todos os clientes cadastrados.

#### Obter Cliente por ID

    GET /api/customers/:id

Retorna os detalhes de um cliente específico com base no ID fornecido.

#### Criar Cliente

    POST /api/customers

Cria um novo cliente.

**Corpo da Requisição:**

```json
{
  "name": "Nome do Cliente",
  "email": "cliente@example.com",
  "phone": "+55123456789"
}
```

#### Atualizar Cliente

    PUT /api/customers/:id

Atualiza as informações de um cliente existente com base no ID fornecido.

**Corpo da Requisição:**

```json
{
  "name": "Novo Nome do Cliente",
  "email": "novocliente@example.com",
  "phone": "+55123456789"
}
```

#### Excluir Cliente

    DELETE /api/customers/:id

Exclui um cliente existente com base no ID fornecido.

### Gerenciamento de Projetos

#### Listar Projetos

    GET /api/projects

Retorna a lista de todos os projetos cadastrados.

#### Obter Projeto por ID

   GET /api/projects/:id

Retorna os detalhes de um projeto específico com base no ID fornecido.

#### Criar Projeto

    POST /api/projects

Cria um novo projeto.

**Corpo da Requisição:**

```json

{
  "name": "Nome do Projeto",
  "description": "Descrição do Projeto"
}

```

#### Atualizar Projeto

    PUT /api/projects/:id

Atualiza as informações de um projeto existente com base no ID fornecido.

**Corpo da Requisição:**

```json
{
  "name": "Novo Nome do Projeto",
  "description": "Nova Descrição do Projeto"
}
```

#### Excluir Projeto

    DELETE /api/projects/:id

Exclui um projeto existente com base no ID fornecido.

### Gerenciamento de Tickets de Suporte

#### Listar Tickets

    GET /api/tickets

Retorna a lista de todos os tickets de suporte cadastrados.

#### Obter Ticket por ID

    GET /api/tickets/:id

Retorna os detalhes de um ticket de suporte específico com base no ID fornecido.

#### Criar Ticket

    POST /api/tickets

Cria um novo ticket de suporte.

**Corpo da Requisição:**

```json
{
  "subject": "Assunto do Ticket",
  "description": "Descrição do Ticket"
}
```

#### Atualizar Ticket

    PUT /api/tickets/:id

Atualiza as informações de um ticket de suporte existente com base no ID fornecido.

**Corpo da Requisição:**

```json
{
  "subject": "Novo Assunto do Ticket",
  "description": "Nova Descrição do Ticket"
}
```

#### Excluir Ticket

    DELETE /api/tickets/:id

Exclui um ticket de suporte existente com base no ID fornecido.

### Autenticação

Alguns endpoints requerem autenticação. Para isso, é necessário incluir o token JWT no cabeçalho `Authorization` da requisição.

Exemplo:

    Authorization: Bearer <token_JWT>

Certifique-se de substituir `<token_JWT>` pelo token de autenticação JWT válido obtido durante o processo de login.

### Tratamento de Erros

A API também inclui um sistema de tratamento de erros para fornecer respostas consistentes em caso de erros. Se ocorrer um erro durante o processamento de uma solicitação, a API retornará uma resposta com o código de status apropriado e uma mensagem de erro descritiva.

## Configuração e Execução

Para executar a API localmente, siga estas etapas:

1. Clone o repositório:

    git clone https://github.com/Poluxin21/crm-project-api


2. Instale as dependências:

    cd crm-project-api
    npm install


3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

    MONGO_URI=sua_url_de_conexão_do_MongoDB
    JWT_SECRET=sua_chave_secreta_para_jwt


4. Inicie o servidor:

    npm start (se configurar o package.json) ou node src/server.js

O servidor será iniciado na porta padrão 5000. Você pode acessar a API em `http://localhost:5000`.

## Contribuição

Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).







