# LIneA Science Platform (LSP Langing Page)


## Setup Production Environment
https://github.com/linea-it/lsp_landing_page/blob/main/compose/production/README.md

## Build docker images manualy

In root of repository: 

```bash
docker build -f compose/production/frontend/Dockerfile -t linea/lsp_landing_page:frontend_$(git describe --always) .
```

```bash
docker build -f compose/production/django/Dockerfile -t linea/lsp_landing_page:backend_$(git describe --always) .
```

Push image to docker hub:

```bash
docker push linea/lsp_landing_page:latest
```


## Deploy Staging environment

Clone the repository to temp folder, copy docker-compose.production.yml to application folder, remove temp folder, edit compose file change image tag and mapping port if necessary. 

Steps Considering srvnode04 as host, application port as 8189 and application folder as scienceplatform-dev.

```bash
mkdir scienceplatform-dev \
&& git clone https://github.com/linea-it/lsp_landing_page.git lsp_temp \
&& cp lsp_temp/docker-compose.staging.yml scienceplatform-dev/docker-compose.yml \ 
&& rm -rf lsp_temp \
&& cd scienceplatform-dev \
&& docker compose pull frontend \
&& docker compose up -d
```

Test in https://scienceplatform-dev.linea.org.br