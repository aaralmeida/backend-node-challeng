/* eslint-disable */

const expect = require('chai').expect;
const mongoose = require('mongoose')
var { insert } = require('../../services/client/service')
const DB_USER = 'root',
    DB_PASSWORD = 'root',
    DB_HOST = 'localhost',
    DB_NAME = 'pay_trend_api_test'


describe('Client service', () => {
    before(async() => {
        mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?authSource=admin`, { useNewUrlParser: true })
            .then(() => {
                console.log('MongoDB connected...')
                mongoose.set('useFindAndModify', false);
            })
            .catch(err => console.log(err))
    })

    after(async() => {
        mongoose.connection.close()
    })

    describe('Create new client', () => {
        let requestBody = {
            full_name: "Armando Alan Ramalho de Almeida",
            gender: "M",
            birthdate: "1994-10-10",
            city: "60d09c85df52a26ece898166"
        }

        it('Verify stored client', async() => {
            let insertResult = await insert(requestBody)
            expect(insertResult.full_name).to.be.equal('Armando Alan Ramalho de Almeida');
        })

    })
})