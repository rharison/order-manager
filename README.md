
# Order Manager

Projeto fullstack utilizando Java com Spring Boot no back-end e Typescript com React no front-end. Basicamente é um sistema simples para geração de pedidos de pedidos de compras e ordem de transporte.

O usuário, através da interface seleciona os produtos e confirma a geração do pedido. Após isso o sistema gerará o pedido de compra, acrescentando um valor adicionar de 10% sobre o valor total dos produtos.

Existe um serviço cron job que busca todos os pedidos que ainda não está com o status 'enviado' e gera uma ordem de transporte para estes pedidos e altera os seus status para enviado.

- Regra para geração de pedidos:
    - O pedido deve ter no mínimo 1 produto e no máximo 3






## Instalação

Faça o clone deste projeto e acesso a pasta raiz.

Rodando o banco de dados:

```bash
  cd order-manager-backend
  cd database-docker
  sudo docker-compose up -d
```

Rodando o back-end:

O back-end deverá ser buildado utilizado a IDE, após a execução do serviço será executados as migrations utilziado o Flyway, que gerará todas as tabelas necessárias e irá também popular a tabela produtos com os dados iniciais.

Rodando o front-end:

```bash
  cd order-manager-frontend
  npm i
  npm run dev
```


    
