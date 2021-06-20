const { insertSchema, updateSchema, findOneSchema } = require('./schemas')

const errors = require('../../utils/errors')
const clientService = require('./service.js')

module.exports = async function(fastify, opts) {
    fastify.post('/', { schema: insertSchema }, insertHandler)
    fastify.put('/:clientId', { schema: updateSchema }, updateHandler)

    fastify.setErrorHandler(function(error, request, reply) {
        const message = error.message
        if (errors[message]) {
            reply.code(412)
        }
        reply.send(error)
    })
}


async function insertHandler(req, reply) {
    const clientId = await clientService.insert(req.body)
    return { clientId }
}
async function updateHandler(req, reply) {
    const clientId = await clientService.update(req.params.clientId, req.body)
    return { clientId }
}