function getPaymentTokenFromAPI(success) {
    if (success === true) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        return Promise.reject(new Error('Failed to get payment token from API'));
    }
}

module.exports = getPaymentTokenFromAPI;
