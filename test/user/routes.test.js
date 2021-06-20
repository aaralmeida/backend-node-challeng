// /* eslint-disable */

// const { Fastify, setup } = require('../app_builder')
// const User = require('../../user/models/User')
// const mongoose = require('mongoose')
// const { expect } = require('chai')
// const errors = require('../../errors')

// describe('testes relacionados ao endpoint de usuarios', () => {
//   before(async () => await setup(fastify))
//   afterEach(async () => {
//     await mongoose.connection.db.dropCollection('users')
//   })

//   after(() => fastify.close())

//   const fastify = Fastify()

//   const seed1 = {
//     username: 'qlqrcoisa',
//     full_name: 'eraumavez',
//     email: 'teste@example.com',
//     password: 'senhateste',
//     phone: '9196666-6666'
//   }

//   const seed2 = {
//     username: 'qlqrcoisa',
//     full_name: 'eraumavez',
//     email: 'teste1@example.com',
//     password: 'senhateste',
//     confirmed_password: 'senhateste',
//     phone: '9196666-6666'
//   }

//   it('login de usuario com credenciais corretas', async () => {
//     await User.create(seed1)

//     const response = await fastify.inject({
//       method: 'POST',
//       url: '/api/user/login',
//       body: {
//         email: seed1.email,
//         password: seed1.password,
//       }
//     })

//     expect(response.statusCode).to.be.equal(200)
//   })
//   it('Cadastro de usuario com credenciais corretas', async () => {
//     await User.create(seed1)

//     const response = await fastify.inject({
//       method: 'POST',
//       url: '/api/user/register',
//       body: seed2
//     })

//     expect(response.statusCode).to.be.equal(200)
//   })
// })
