const { insertSchema, updateSchema, findOneSchema, deleteSchema } = require('./schemas')

const errors = require('../../utils/errors')
const clientService = require('./service.js')

module.exports = async function(fastify) {
    fastify.post('/', { schema: insertSchema }, insertHandler)
    fastify.put('/:clientId', { schema: updateSchema }, updateHandler)
    fastify.get('/:clientId', { schema: findOneSchema }, findByIdHandle)
    fastify.delete('/:clientId', { schema: deleteSchema }, deleteHandle)
    fastify.setErrorHandler(function(error, request, reply) {
        const message = error.message
        if (errors[message]) {
            reply.code(412)
        }
        reply.send(error)
    })
}


async function insertHandler(req, reply) {
    const client = await clientService.insert(req.body)
    reply.code(200).send(client);
}

async function updateHandler(req, reply) {
    const client = await clientService.update(req.params.clientId, req.body)
    reply.code(200).send(client);
}

async function findByIdHandle(req, reply) {
    const client = await clientService.findOne(req.params.clientId)
    reply.code(200).send(client);
}

async function deleteHandle(req, reply) {
    const client = await clientService.delete(req.params.clientId)
    reply.code(200).send(client);
}