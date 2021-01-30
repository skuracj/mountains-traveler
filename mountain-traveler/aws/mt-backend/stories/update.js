module.exports.main = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            `Story updated. ID: ${event['pathParameters'].id},
            body: ${event.body}`,
            null,
            2
        ),
    };
};