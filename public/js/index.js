import '@babel/polyfill';
import './map';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';

const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('.form-user-data #name').value;
    const email = document.querySelector('.form-user-data #email').value;
    updateSettings({ name, email }, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.querySelector('#password-current').value;
    const password = document.querySelector('#password').value;
    const passwordConfirm = document.querySelector('#password-confirm').value;
    updateSettings({ passwordCurrent, password, passwordConfirm }, 'password');
  });

  document.querySelector('.btn--save-password').textContent = 'Save password';
  document.querySelector('#password-current').value = '';
  document.querySelector('#password').value = '';
  document.querySelector('#password-confirm').value = '';
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
