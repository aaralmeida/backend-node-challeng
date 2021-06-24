const {
    insertSchema,
    updateSchema,
    findOneSchema,
    deleteSchema,
} = require("./schemas");

const errors = require("../../utils/errors");
const clientService = require("./service");

module.exports = async function (fastify) {
    fastify.post("/", { schema: insertSchema }, insertHandler);
    fastify.put("/:clientId", { schema: updateSchema }, updateHandler);
    fastify.get("/:clientId", { schema: findOneSchema }, findByIdHandle);
    fastify.delete("/:clientId", { schema: deleteSchema }, deleteHandle);
    fastify.setErrorHandler((error, request, reply) => {
        switch (error.message) {
        case errors.NOT_FOUND:
            reply.code(404);
            break;
        case errors.INVALID_OBJECT_ID:
            reply.code(400);
            break;
        default:
            reply.code(500);
        }

        reply.send(error);
    });
};

async function insertHandler(req, reply) {
    try {
        const client = await clientService.insert(req.body);
        reply.code(200).send(client);
    } catch (error) {
        return error;
    }
}

async function updateHandler(req, reply) {
    try {
        const client = await clientService.update(req.params.clientId, req.body);
        reply.code(200).send(client);
    } catch (error) {
        return error;
    }
}

async function findByIdHandle(req, reply) {
    try {
        const client = await clientService.findOne(req.params.clientId);
        reply.code(200).send(client);
    } catch (error) {
        return error;
    }
}

async function deleteHandle(req, reply) {
    try {
        const client = await clientService.delete(req.params.clientId);
        reply.code(200).send(client);
    } catch (error) {
        return error;
    }
}
