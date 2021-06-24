const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env
const swagger = require('./config/swagger')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        mongoose.set('useFindAndModify', false)
        mongoose.set('returnOriginal', false)
        console.log('MongoDB connected...')
    })
    .catch(err => {
        console.log(err);
    })

module.exports = async function(fastify, opts) {
    fastify
        .register(require('fastify-swagger'), swagger.options)
        .register(require('fastify-cors'), { origin: '*' })
        // APIs modules
        .register(require('./services/client'), { prefix: '/api/client' })
        .register(require('./services/city'), { prefix: '/api/city' })

}