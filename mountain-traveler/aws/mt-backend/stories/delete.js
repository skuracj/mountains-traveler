module.exports.main = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            `Story with id ${event['pathParameters'].id} removed`,
            null,
            2
        ),
    };
};