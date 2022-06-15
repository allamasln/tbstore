.PHONY: build
build-dev:
	docker build -t tbs-client-dev:dev .

build-prod:
	docker build \
		-t tbs-client-prod:${TAG} \
		--build-arg CADDYFILE=Caddyfile.prod \
		-f Dockerfile.prod .