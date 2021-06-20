/* eslint-disable */

const mongoose = require('mongoose')

before(() => {
    require('dotenv').config()

    const { DB_USER, DB_PASSWORD, DB_HOST, TEST_DB_NAME } = process.env;
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${TEST_DB_NAME}?authSource=admin`, { useNewUrlParser: true })
      .then(() => {
        console.log('MongoDB connected...')
        mongoose.set('useFindAndModify', false);
      })
      .catch(err => console.log(err))
})

after((done) => {
    mongoose.connection.close(done)
})