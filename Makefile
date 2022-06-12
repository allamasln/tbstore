build-dev:
	cd client && $(MAKE) build-dev
	cd api && $(MAKE) build

run-dev:
	ENV=dev docker-compose -f docker-compose.yml up

###

build-local:
	cd client && $(MAKE) build-local
	cd api && $(MAKE) build

run-local:
	ENV=local docker-compose -f docker-compose-prod.yml up

###

build-prod:
	cd client && $(MAKE) build-prod
	cd api && $(MAKE) build

run-prod:
	ENV=prod docker-compose -f docker-compose-prod.yml up