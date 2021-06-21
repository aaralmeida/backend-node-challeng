'use strict'

// full_name: {
//     type: String,
//     required: true
// },
// gender: {
//     type: String,
//     enum: ['M', 'F'], // digital, physical
//     required: true
// },
// birth_date: {
//     required: true,
//     type: Date
// },

const insertSchema = {
    body: {
        type: 'object',
        properties: {
            full_name: { type: 'string' },
            gender: { type: 'string' },
        },
        anyOf: [{
            required: ['full_name', 'gender']
        }]
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         required: ['clientId'],
    //         properties: {
    //             clientId: { type: 'string' }
    //         },
    //         additionalProperties: false
    //     }
    // }
}

const updateSchema = {
    // body: {
    //     type: 'object',
    //     properties: {
    //         client_id: { type: 'string' },
    //         name: { type: 'string' },
    //         email: { type: 'string' },
    //         phone: { type: 'string' },
    //         document: { type: 'string' },
    //         address: { type: 'object' }
    //     }
    // },
    // response: {
    //     200: {
    //         type: 'object',
    //         required: ['clientId'],
    //         properties: {
    //             clientId: { type: 'string' }
    //         },
    //         additionalProperties: false
    //     }
    // }
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
    // params: {
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