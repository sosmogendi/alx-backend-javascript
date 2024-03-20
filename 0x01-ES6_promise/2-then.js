/**
 * Appends handlers to the given Promise.
 * @param {Promise} promise - The Promise to handle.
 */
export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log("Got a response from the API");
      return { status: 200, body: "success" };
    })
    .catch(() => new Error());
}
