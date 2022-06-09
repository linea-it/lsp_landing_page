# lsp_landing_page

Landing page for LSP

Docker Hub: <https://hub.docker.com/repository/docker/linea/lsp_landing_page>

## Setup Develop Enviroment

Faça o clone do repositório e acesse o diretório.

```bash
git clone https://github.com/linea-it/lsp_landing_page.git
cd lsp_landing_page
```

Instale as dependencias do Frontend executando o comando `yarn`. Por ser a primeira vez inciando este container, será feito o pull e o build da imagem base o que pode demorar um pouco.

```bash
docker-compose run frontend yarn
```

Este comando vai criar o diretório `lsp_landing_page/node_modules` caso tenha algum problema com dependencias remova este diretório e execute o comando novamente.

Inicie o ambiente

```bash
docker-compose up
```

Feito isto o processo de setup do ambiente de desenvolvimento está completo acesse o app no endereço <http://localhost:3000>.

**Recomendação:** Antes de realizar o push, é recomendável fazer o build do frontend para evitar que erros com o ESlint atrapalhe o processo de Pull Request:

``` bash
docker-compose run frontend yarn build
```

### Alguns comandos de exemplo

Ligar o ambiente em background.

```bash
docker-compose up -d
```

Desligar todo ambiente

```bash
docker-compose stop
```

Restartar todo ambiente

```bash
docker-compose stop && docker-compose up -d
```

Executar um terminal

```bash
# Com o serviço ligado
docker-compose exec frontend /bin/sh
# Com o serviço desligado
docker-compose run frontend /bin/sh
```

Adicionar Bibliotecas ao frontend utilizando yarn

``` bash
docker-compose run frontend yarn add <library>
```

Executar o ESlint

``` bash
docker-compose exec frontend yarn lint --fix
```

### Build manual das imagens e push para docker hub

Docker Hub: <https://hub.docker.com/repository/docker/linea/lsp_landing_page>

A identificação unica de cada tag pode ser o numero de versão exemplo: `linea/lsp_landing_page:v0.1` ou a hash do commit para versões de desenvolvimento: `linea/lsp_landing_page:sha-8816330` para obter o hash do commit usar o comando `$(git describe --always)`.

```bash
cd lsp_landing_page
docker build -t linea/lsp_landing_page:$(git describe --always) .
# Para o push copie o nome da imagem que aparece no final do build e faça o docker push 
docker push linea/lsp_landing_page:<commit_hash>
```

## Setup Production Enviroment

No ambiente de produção **Não** é necessário fazer clone do repositório.

O exemplo a seguir considera uma instalação utilizando a imagem docker builded e a página será servida pelo NextJS.

Apenas:

- crie as pastas
- crie o arquivo docker-compose.yml
- crie o arquivo ngnix.conf

Crie os diretórios `lsp-landing-page` e `lsp-landing-page/next`

```bash
mkdir lsp-landing-page lsp-landing-page/next
cd lsp-landing-page
```

Crie um arquivo `docker-compose.yml` baseado no template `docker-compose-production.yml`

Altere a imagem para a versão desejada, substitua a string `latest` pela tag da imagem.

Altere a porta que será utilizada para a aplicação, substitua a porta `80` por uma porta que esteja disponivel no ambiente, está porta é que deverá ser associada a url da aplicação.

Edite o arquivo conforme as necessidades do ambiente.
Geralmente as mudanças são nos volumes e na porta do ngnix.

Crie o arquivo de configuração do Ngnix `nginx.conf` baseado no arquivo `nginx_production.conf`

Inicie todos os serviços

```bash
docker-compose up -d
```

Configure uma URL que direcione para a maquina onde está instalado na porta configurada para o Ngnix no docker-compose.

No final deste exemplo a pasta docker-compose-production ficou desta forma:

```bash
-rw-r--r--  docker-compose.yml 
-rw-r--r--  nginx.conf # Arquivo de configuração do Ngnix.
drwxr-xr-x  next # Diretório onde ficam os arquivos gerados de cache gerados pela aplicação.
```

## Update Production Enviroment

Procedimento para atualizar o ambiente de produção ou qualquer outro que utilize imagens builded.

- Editar o arquivo docker-compose.yml e alterar a tag das imagens.
- Executar o pull das novas imagens com o comando `docker-compose pull`.
- Restart dos serviços `docker-compose stop && docker-compose up -d`.
