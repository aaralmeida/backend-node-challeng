const insertSchema = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            state: { type: 'string' },
        },
        anyOf: [{
            required: ['name', 'state']
        }]
    },
    response: {
        200: {
            type: 'object',
            required: ['name', 'state'],
            properties: {
                name: { type: 'string' },
                state: { type: 'string' },

            },
            additionalProperties: false
        }
    }
}

const findByNameSchema = {
    queryString: {
        name: { type: 'string' },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                state: { type: 'string' },
            },
            additionalProperties: false
        }
    }
}

const findByStateSchema = {
    queryString: {
        state: { type: 'string' },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                state: { type: 'string' },
            },
            additionalProperties: false
        }
    }
}

module.exports = {
    insertSchema,
    findByNameSchema,
    findByStateSchema
}