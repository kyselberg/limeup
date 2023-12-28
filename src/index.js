import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsersModel from './models/users';
import User from './models/user';

const store = UsersModel.create({
    users: [
        {id: '1', name: 'Leanne Graham', isDisabled: false},
        {id: '2', name: 'Ervin Howell', isDisabled: false},
        {id: '3', name: 'Clementine Bauch', isDisabled: false},
        {id: '4', name: 'Patricia Lebsack', isDisabled: false},
        {id: '5', name: 'Chelsey Dietrich', isDisabled: false},
        {id: '6', name: 'Mrs. Dennis Schulist', isDisabled: false},
        {id: '7', name: 'Kurtis Weissnat', isDisabled: false},
        {id: '8', name: 'Nicholas Runolfsdottir V', isDisabled: false},
        {id: '9', name: 'Glenna Reichert', isDisabled: false},
        {id: '10', name: 'Clementina DuBuque', isDisabled: false}
    ].map((user) => User.create(user))
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App store={store} />
  </React.StrictMode>
);
