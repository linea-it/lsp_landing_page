

## Build docker images manualy

In root of repository: 

```bash
docker build -f Dockerfile -t linea/lsp_landing_page:latest .
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


## Deploy Production environment

Clone the repository to temp folder, copy docker-compose.production.yml to application folder, remove temp folder, edit compose file change image tag and mapping port if necessary. 

Steps Considering srvnode04 as host, application port as 8190 and application folder as scienceplatform.

```bash
mkdir scienceplatform \
&& git clone https://github.com/linea-it/lsp_landing_page.git lsp_temp \
&& cp lsp_temp/docker-compose.production.yml scienceplatform/docker-compose.yml \ 
&& rm -rf lsp_temp \
&& cd scienceplatform \
&& docker compose pull frontend \
&& docker compose up -d
```

Test in https://scienceplatform.linea.org.br