const City = require("./models/City");

exports.insert = async (requestBody) => {
    const city = await City.create(requestBody);
    return city;
};

exports.find = async (name, state) => {
    const $query = {};
    if (name) {
        $query.name = name;
    }
    if (state) {
        $query.state = state;
    }
    const cities = await City.find($query);
    return cities || [];
};
