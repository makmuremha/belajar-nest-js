<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Belajar NestJS

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

#### Introduction

Install Nest CLI
```bash
# Install Nest CLI
$ npm i -g @nestjs/cli

# Membuat kerangka project
$ nest new project-name
```

Files generated
``app.controller.ts``	A basic controller with a single route.
``app.controller.spec.ts``	The unit tests for the controller.
``app.module.ts``	The root module of the application.
``app.service.ts``	A basic service with a single method.
``main.ts``	The entry file of the application which uses the core function NestFactory to create a Nest application instance.


#### Generate Module

```bash
# Generate module dengan menggunakan resource (CRUD)
$ nest g resource todo

# Muncul pilihan: REST API, GraphQL, Microservice, Websockets
# Contoh kasus menggunakan REST API
```


#### Menambahkan adaptor koneksi database (Sequelize)

```bash
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
```


#### Database connection & migration setup

create file `.sequelizerc` file in the root folder and dd the following code
```js
const path = require('path');
module.exports = {
   'seeders-path': path.resolve('src/database', 'seeders'),
   'migrations-path': path.resolve('src/database', 'migrations'),
   'config': path.resolve('src/database', 'config.json'),
}
```
dan buat secara manual folder berdasarkan struktur kode di atas, kemudian install / eksekusi perintah berikut

```bash
$ npm install --save-dev sequelize-cli
$ npx sequelize-cli init
```
apabila folder models ter-create, silahkan hapus saja.

```bash
Generate migration file
$ npx sequelize-cli migration:generate --name TodoTableCreate
```

Untuk membuat shortcut command, anda dapat melakukan registrasi di file package.json dan masukkan code pada properti ``script``
``"migration:generate": "nest build && npx sequelize-cli migration:generate --name"``
Sehingga perintah dari 
```bash 
$ npx sequelize-cli migration:generate TodoTableCreate
```
menjadi 
```bash 
# gunakan yarn
$ yarn migration:generate TodoTableCreate

# gunakan npm
$ yarn run migration:generate TodoTableCreate
```

#### Make DB Table menggunakan migration
```js
module.exports = {
  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize-typescript').DataType} Sequelize
   * @returns
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Todos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      flag: {
        type: Sequelize.ENUM('active', 'completed'),
      },
      createdAt: Sequelize.DATEONLY,
      updatedAt: Sequelize.DATEONLY,
    });
  },

  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @returns
   */
  async down(queryInterface) {
    await queryInterface.dropTable('Todos');
  },
};


```


#### Running the app

```bash
# development with watch mode 
$ npm run start:dev

# production mode
$ npm run start:prod
```
