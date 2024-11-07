import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return uploadPhoto()
    .then((photo) => photo)
    .then((photo) => createUser()
      .then((user) => ({
        photo,
        user,
      })))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
