import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((result) => result.body)
    .then((body) => {
      createUser()
        .then((result) => console.log(body, result.firstName, result.lastName));
    })
    .catch(() => console.error('Signup system offline'));
}
