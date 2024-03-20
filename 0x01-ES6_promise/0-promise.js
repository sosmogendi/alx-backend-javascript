/**
 * Returns a Promise that resolves after a short delay.
 * @returns {Promise} A Promise that resolves after a short delay.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call with a delay of 1 second
    setTimeout(() => {
      resolve('API response');
    }, 1000);
  });
}
