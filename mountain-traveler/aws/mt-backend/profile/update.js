'use strict';

module.exports.main = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            // TODO id from authorizer
            `Profile with event {id} updated`,
            {
                event,
            },
            null,
            2
        ),
    };

};
