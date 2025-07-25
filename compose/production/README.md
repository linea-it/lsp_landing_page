# Deploy Production environment

Clone the repository to temp folder, copy docker-compose.production.yml, env template and ngnix conf to application folder, remove temp folder, edit env file change the settings and image tag, edit docker compose and mapping port if necessary.

Steps Considering 

```bash
Host: srvnode01
User: app.deployer
application port: 8190 
application folder: /apps/scienceplatform.
```
Copy files and create directories

```bash
mkdir -p scienceplatform scienceplatform/logs scienceplatform/data/redis scienceplatform/data/tmp scienceplatform/certificates \
&& chmod -R g+w scienceplatform/logs scienceplatform/data \
&& git clone https://github.com/linea-it/lsp_landing_page.git scienceplatform_temp \
&& cp scienceplatform_temp/compose/production/docker-compose.production.yml scienceplatform/docker-compose.yml \ 
&& cp scienceplatform_temp/compose/production/env_template scienceplatform/.env \ 
&& cp scienceplatform_temp/compose/production/nginx-proxy.conf scienceplatform/nginx-proxy.conf
&& rm -rf scienceplatform_temp \
&& cd scienceplatform \
&& docker compose pull
```

Generate SAML2 Certificates

```bash
cd certificates \
&& openssl genrsa -out mykey.key 2048 \
&& openssl req -new -key mykey.key -out mycert.csr \
&& openssl x509 -req -days 365 -in mycert.csr -signkey mykey.key -out mycert.crt \
&& cp mykey.key mykey.pem \
&& cp mycert.crt mycert.pem \
&& cd .. \
&& chmod -R go+r certificates
```

Edit .env for secrets, users and passwords.

Up all services in background

```bash
docker compose up -d
```

Generate a secret for Django 
```bash
docker compose exec -it backend python -c "import secrets; print(secrets.token_urlsafe())"
```
Copy the secret and edit .env, replace template DJANGO_SECRET_KEY

Create Django superuser
```bash
docker compose exec backend python manage.py createsuperuser
```

Restart all Services
```bash
docker compose down && docker compose up -d
```