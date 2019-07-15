const connection = require("./connection");

let orm = {

    selectAll: function(tableName, callback) {

        connection.query("SELECT * FROM ?? WHERE icao_code=?", [tableName, icao_code], function(err, result) {

            if (err) {
                throw err;
            };
            callback(result);
            console.log(result);
            
        });
        
    }
};

module.export = orm;