FROM node:22.11.0-bookworm-slim AS base
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=8192
# Install apt packages
RUN apt-get update && apt-get install --no-install-recommends -y \
    git \
    zsh \
    vim \
    unzip \
    wget 

FROM base AS dependencies
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=8192
WORKDIR /app
COPY ./lsp/package.json /app
COPY ./lsp/yarn.lock /app
RUN yarn --non-interactive --ignore-optional --network-timeout 500000


FROM base AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY --from=dependencies /app/node_modules /app/node_modules
COPY ./lsp /app
RUN yarn run build


FROM base AS runner
WORKDIR /app
COPY --from=builder /app /app
RUN chown -R node:node /app/.next/cache
USER node

EXPOSE 3000
CMD ["yarn", "start"]