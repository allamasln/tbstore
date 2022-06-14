build-dev:
	cd client && $(MAKE) build-dev
	cd api && TAG=dev $(MAKE) build

run-dev:
	docker-compose -f docker-compose.yml up -d

###

build-local:
	cd client && TAG=${TAG} $(MAKE) build-local
	cd api && TAG=${TAG} $(MAKE) build

run-local:
	ENV_VERSION=local docker-compose -f docker-compose-prod.yml up

###

build-prod:
	cd client && TAG=${TAG} $(MAKE) build-prod
	cd api && TAG=${TAG} $(MAKE) build

run-prod:
	docker-compose -f docker-compose-prod.yml up

### 

deploy:
	docker-compose -f docker-compose-prod.yml down
	docker system prune --all --force
	TAG=${TAG} MONGO_URI=${MONGO_URI} docker-compose -f docker-compose-prod.yml up -d

