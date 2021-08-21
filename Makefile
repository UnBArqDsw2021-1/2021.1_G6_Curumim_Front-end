NOME_IMAGEM     := curumim-front-end

# Subir docker e rodar aplicação na porta 3000
rodar: .container-rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run start

.container-rodando:
	@sudo docker-compose build
	@echo "Buildando Containers Docker."
	@sudo docker-compose up -d
	@echo "Subindo Containers Docker."
	@touch .rodando
	@echo "Containers Docker estão rodando."
	@sudo docker exec -it $(NOME_IMAGEM) yarn install

subir-docker: .container-rodando

testar: .container-rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run test

build: .container-rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run build

parar:
	sudo docker-compose kill
	sudo docker-compose stop
	sudo docker-compose down --rmi local
	sudo docker-compose rm -f
	-@rm .rodando
	@echo "Containers Docker foram parados e deletados."