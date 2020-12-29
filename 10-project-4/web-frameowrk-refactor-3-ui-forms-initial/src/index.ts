/*
import {User} from './models/User'

/!*const user = new User({name:'Shreyus',age:3})*!/

const user = User.buildUser({name: 'Shreyus', age: 3})

user.on('change', () => {
    console.log('This is working');
});

user.set({age: 7})


const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch()

// A Quick Reminder on Accessors



*/

import {UserForm} from "./view/UserForm";
import {User} from "./models/User";

const user = User.buildUser({id: 3, name: 'Shreyus', age: 3})

const rootElement = document.getElementById('root');
if (rootElement) {
    const userForm = new UserForm(rootElement, user);

    userForm.render();
}

