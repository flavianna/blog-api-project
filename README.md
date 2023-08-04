<div align='center'> <h1>Blogs API</h1>
  <p>
    Uma API RESTful para a produção de conteúdo para um blog onde é possível criar, visualizar, deletar e atualizar posts e usuários, usando banco de dados MySQL e arquitetura MSC (model-service-controller).
  </p>
</div>

<br /><hr /><br />

## 🖥️ Stacks
Este projeto foi desenvolvido usando as seguintes tecnologias:

-  **MySQL e Sequelize**
-  **Express** 
-  **Docker** 

## ℹ️ Rodando


```bash
# Clone o repositório
git clone https://github.com/flavianna/blogs-api-project

# Inicie o Docker Compose
docker-compose up -d

# Entre no container
docker exec -it blogs_api bash

# Instale as dependências
npm install

# Crie e popule o banco de dados
npm run prestart && npm run seed

```

<br /><hr /><br />

## Autora

- [@flavianna](https://www.github.com/flavianna)
