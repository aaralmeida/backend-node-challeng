'use strict'

const insertSchema = {
    body: {
        type: 'object',
        properties: {
            full_name: { type: 'string' },
            gender: { type: 'string' },
            birthdate: { type: 'string' },
            city: { type: 'string' }
        },
        anyOf: [{
            required: ['full_name', 'gender', 'birthdate', 'city']
        }]
    },
}

const updateSchema = {
    body: {
        type: 'object',
        properties: {
            full_name: { type: 'string' },
            gender: { type: 'string' },
            birthdate: { type: 'string' },
            city: { type: 'string' },
        }
    },
}

const findOneSchema = {
    // querystring: {
    //     type: 'object',
    //     required: ['id'],
    //     properties: {
    //         id: {
    //             type: 'string',
    //             pattern: '^[0-9a-fA-F]{24}'
    //         }
    //     }
    // },
    response: {
        200: {
            type: 'object',
            additionalProperties: true
        }
    }
}

const deleteSchema = {
    // querystring: {
    //     type: 'object',
    //     required: ['id'],
    //     properties: {
    //         id: {
    //             type: 'string',
    //             pattern: '^[0-9a-fA-F]{24}'
    //         }
    //     }
    // },
    response: {
        200: {
            type: 'object',
            additionalProperties: true
        }
    }
}

module.exports = {
    insertSchema,
    updateSchema,
    findOneSchema,
    deleteSchema
}