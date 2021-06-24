const { insertSchema, findSchema } = require("./schemas");

const errors = require("../../utils/errors");
const cityService = require("./service");

module.exports = async function (fastify) {
    fastify.post("/", { schema: insertSchema }, insertHandler);
    fastify.get("/", { schema: findSchema }, findHandle);

    fastify.setErrorHandler((error, request, reply) => {
        const { message } = error;
        if (errors[message]) {
            reply.code(412);
        }
        reply.send(error);
    });
};

async function insertHandler(req, reply) {
    try {
        const city = await cityService.insert(req.body);
        reply.code(200).send(city);
    } catch (error) {
        return error;
    }
}

async function findHandle(req, reply) {
    try {
        const cities = await cityService.find(req.query.name, req.query.state);
        reply.code(200).send(cities);
    } catch (error) {
        return error;
    }
}
