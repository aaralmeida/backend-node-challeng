const insertSchema = {
    body: {
        type: "object",
        properties: {
            full_name: { type: "string" },
            gender: { type: "string", enum: ["F", "M"] },
            birthdate: { type: "string" },
            city: { type: "string" },
        },
        anyOf: [{
            required: ["full_name", "gender", "birthdate", "city"],
        }],
    },
};

const updateSchema = {
    body: {
        type: "object",
        properties: {
            full_name: { type: "string" },
            gender: { type: "string", enum: ["F", "M"] },
            birthdate: { type: "string" },
            city: { type: "string" },
        },
    },
};

const findOneSchema = {
    response: {
        200: {
            type: "object",
            additionalProperties: true,
        },
    },
};

const deleteSchema = {
    response: {
        200: {
            type: "object",
            additionalProperties: true,
        },
    },
};

module.exports = {
    insertSchema,
    updateSchema,
    findOneSchema,
    deleteSchema,
};
