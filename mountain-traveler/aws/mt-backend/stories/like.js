module.exports.add = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            `Like added to story ${event['pathParameters'].id}`,
            null,
            2
        ),
    };
};

module.exports.delete = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            `Like removed from story ${event['pathParameters'].id}`,
            null,
            2
        ),
    };
};