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
      status: {
        type: Sequelize.ENUM('PENDING', 'PROGRESS', 'DONE'),
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
