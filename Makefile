NOME_IMAGEM     := curumim-front-end

# Subir docker e rodar aplicação na porta 3000
rodar: .rodando assistir

.rodando:
	@sudo docker-compose build
	@echo "Buildando Containers Docker."
	@sudo docker-compose up -d
	@echo "Subindo Containers Docker."
	@touch .rodando
	@echo "Containers Docker estão rodando."

subir-docker: .rodando

assistir: .rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run start

testar: .rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run test

build: .rodando
	@sudo docker exec -it $(NOME_IMAGEM) yarn run build

parar:
	sudo docker-compose kill
	sudo docker-compose stop
	sudo docker-compose down --rmi local
	sudo docker-compose rm -f
	-@rm .rodando
	@echo "Containers Docker foram parados e deletados."