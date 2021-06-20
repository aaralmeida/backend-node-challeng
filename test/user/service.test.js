// /* eslint-disable */

// const userService = require('../../user/service')
// const User = require('../../user/models/User')
// const mongoose = require('mongoose')
// const { expect } = require('chai')
// const errors = require('../../errors')

// describe('testes relacionados ao serviço de usuarios', () => {
//   afterEach(async () => {
//     await mongoose.connection.db.dropCollection('users')
//   })

//   describe('testando serviço de login', () => {
//     const seed1 = {
//       username: 'qlqrcoisa',
//       email: 'teste@example.com',
//       password: 'senhateste',
//       phone: '9196666-6666'
//     }

//     it('login de usuario cadastro com credenciais corretas', async () => {
//       await User.create(seed1)

//       const result = (await userService.login('teste@example.com', 'senhateste')).toObject()
//       expect(result).to.include({
//         username: 'qlqrcoisa',
//         email: 'teste@example.com',
//         phone: '9196666-6666'
//       })
//     })

//     it('login de usuario com email existente mas senha incorreta', async () => {
//       await User.create(seed1)

//       try {
//         await userService.login('teste@example.com', 'senhaincorreta')
//       }
//       catch(e) {
//         expect(e.message).to.be.equal(errors.LOGIN_ERROR)
//       }
//     })

//     it('login de usuario com email não cadastrado', async () => {
//       await User.create(seed1)

//       try {
//         await userService.login('aleatorio@example.com', 'senhaaleatoria')
//       }
//       catch(e) {
//         expect(e.message).to.be.equal(errors.LOGIN_ERROR)
//       }
//     })
//   })
//   describe('testando serviço de cadastro', () => {
//     let seed1 = {
//       full_name: 'qlqrcoisa',
//       email: 'teste@example.com',
//       password: 'senhateste',
//       confirmed_password: 'senhateste',
//       phone: '9196666-6666'
//     }

//     it('Cadastro de usuário com email não cadastrado', async () => {

//       const result = await userService.register(seed1)
//       expect(result).to.include({
//         full_name: 'qlqrcoisa',
//         email: 'teste@example.com',
//         phone: '9196666-6666'
//       })
//     })

//     it('Cadastro de usuário com email já cadastrado', async () => {
//       try {
//         await userService.register(seed1)
//       }
//       catch(e) {
//         expect(e.message).to.be.equal(errors.WRONG_CREDENTIAL)
//       }
//     })

//     it('Cadastro de usuário com email não cadastrado e senha divergente', async () => {
//       await User.create(seed1)
//       seed1.email = 'outroemail@example.com'
//       seed1.confirmed_password = 'senhaerrada'
//       try {
//         await userService.register(seed1)
//       }
//       catch(e) {
//         expect(e.message).to.be.equal(errors.NOT_EQUAL_PASSWORDS)
//       }
//     })
//   });

// })
