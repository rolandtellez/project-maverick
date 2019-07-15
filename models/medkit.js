const orm = require("../config/orm");

let medkit = {

    getAll: function (callback) {
        orm.selectAll("flightKit", "BAW", function(result) {

            callback(result);
            console.log(result);
        });
    }
};

module.exports = medkit;