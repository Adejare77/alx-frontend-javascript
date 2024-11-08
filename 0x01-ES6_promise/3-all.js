import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // return uploadPhoto()
  //   .then((result) => result.body)
  //   .then((body) => {
  //     return createUser()
  //       .then((result) => console.log(body, result.firstName, result.lastName));
  //   })
  //   .catch(() => console.error('Signup system offline'));

  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      return console.log(photo.body, user.firstName, user.lastName);
    })
    .catch(() => console.error('Signup system offline'));
}
