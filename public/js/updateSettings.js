import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  // type is either 'passsword' or 'data'

  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} update successfully`);
      window.setTimeout(() => {
        location.assign('/me');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    console.log(err.response);
    showAlert('error', err.response.data.message);
  }
};
