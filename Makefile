build-dev:
	cd client && $(MAKE) build-dev
	cd api && $(MAKE) build

run-dev:
	docker-compose -f docker-compose.yml up -d

###

build-local:
	cd client && $(MAKE) build-local
	cd api && $(MAKE) build

run-local:
	ENV_VERSION=local docker-compose -f docker-compose-prod.yml up

###

build-prod:
	cd client && $(MAKE) build-prod
	cd api && $(MAKE) build

run-prod:
	docker-compose -f docker-compose-prod.yml up

down:
	docker-compose down