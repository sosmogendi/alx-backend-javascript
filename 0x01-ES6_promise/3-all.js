import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by collectively resolving promises returned by uploadPhoto and createUser.
 */
export default function handleProfileSignup() {
  const x = uploadPhoto();
  const y = createUser();
  return Promise.all([x, y]).then(
    (data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
