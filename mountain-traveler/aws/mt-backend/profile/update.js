'use strict';

module.exports.main = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                event,
                message: 'profile updated...',
                userId: 'loggedInUser_ID',
                name: 'Cezary Lolek',
            },
            null,
            2
        ),
    };

};
