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

  POST /api/auth/login

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