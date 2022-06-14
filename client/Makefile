.PHONY: build
build-dev:
	docker build -t tbs-client-dev:dev .

build-local:
	docker build \
		-t tbs-client-prod:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:3001/api \
		-f Dockerfile.prod .

build-prod:
	docker build \
		-t tbs-client-prod:${TAG} \
		--build-arg CADDYFILE=Caddyfile.prod \
		-f Dockerfile.prod .

# build-prod:
# 	docker build \
# 		-t tbs-client-prod:${TAG} \
# 		--build-arg CADDYFILE=Caddyfile.prod \
# 		--build-arg BASE_URL=https://tbstore.allamas.com/api \
# 		-f Dockerfile.prod .
