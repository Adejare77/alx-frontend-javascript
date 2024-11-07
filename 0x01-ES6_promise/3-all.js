import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((result) => result.body)
    .then((body) => {
      createUser()
        .then((result) => console.log(body, result.firstName, result.lastName));
    });
}
