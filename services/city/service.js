const City = require('./models/City')

exports.insert = async(requestBody) => {
    try {
        let city = await City.create(requestBody)
        console.log(city);
        return city
    } catch (e) {
        throw e
    }
}

exports.find = async(name, state) => {
    try {
        $query = {}
        if (name) {
            $query['name'] = name;
        }
        if (state) {
            $query['state'] = state;
        }
        const cities = await City.find($query);
        return cities ? cities : [];
    } catch (e) {
        throw e
    }
}