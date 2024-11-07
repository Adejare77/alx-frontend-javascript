// export default function getFullResponseFromAPI(success) {
//   if (success) {
//     return new Promise((resolve) => {
//       return resolve({
//         status: 200,
//         body: 'Success'
//       })
//     })
//   }
//   return Promise.reject("The fake API is not working currently")
// }

export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
