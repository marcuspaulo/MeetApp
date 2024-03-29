# Desafio Rocketseat - Meetapp - Backend

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. - Sucrase + Nodemon;
2. - ESLint + Prettier + EditorConfig;
3. - Sequelize (Utilize PostgresSQL ou MySQL);

## Setup

Use the adonis command to install the blueprint

```bash
adonis new backend --api-only
```

or manually clone the repo and then run `npm install`.

## Install ESLint

```bash
 npm install -D eslint
```

## Setup ESLint

```bash
 npx eslint --init
```

# Running the project

```sh
$ adonis serve --dev
```

# Running Docker Postgres Database

```sh
docker run --name meetup -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v ~/developer/PostgreSQL:/var/lib/postgresql/data -d postgres
```

> > or

# Start Docker Postgres Database

```sh
docker start meetup
```

## Running Docker Redis

```bash
$ docker run --name redis -p 6379:6379 -d redis:alpine
```

## Start Docker Redis

```bash
$ docker start redis
```

## Start Adonis Kue listen

```bash
adonis kue:listen
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
