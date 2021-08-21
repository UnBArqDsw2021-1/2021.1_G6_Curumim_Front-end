# 2021.1_G6_Curumim_Front-end
Front-end da aplicação curumim

## Pré-requisitos para rodar aplicação

- [Docker Engine](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Comandos disponíveis

### `make run`

Roda a aplicação (subindo o(s) container(s) caso o(s) mesmo(s) não esteja(m) rodando) em modo de desenvolvimento. Disponível para acesso em http://localhost:3000/.

A página recarrega qualquer atualização feita nos arquivos.

### `make up`

Sobe apenas o container da aplicação. O arquivo `.rodando` é criado na pasta raiz do projeto enquanto o docker está ativo.

### `make test`

Roda os testes (subindo o(s) container(s) caso o(s) mesmo(s) não esteja(m) rodando) em modo iterativo.

Veja a [documentação de testes](https://create-react-app.dev/docs/running-tests/) para mais informações.

### `make build`

Builda a aplicação (subindo o(s) container(s) caso o(s) mesmo(s) não esteja(m) rodando) para produção na pasta `build`.

Veja a [seção de deploy](https://create-react-app.dev/docs/deployment/) para mais informações.

### `make stop`

Para o(s) container(s) deletando o(s) mesmo(s) e o arquivo `.rodando`.