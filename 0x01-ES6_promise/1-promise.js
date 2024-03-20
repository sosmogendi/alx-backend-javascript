/**
 * Returns a Promise that resolves or rejects based on the input boolean.
 * @param {boolean} success - Indicates whether the response should be successful or not.
 * @returns {Promise} A Promise that resolves or rejects based on the input boolean.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
