
import {User} from './models/User'

const user = new User({name:'Shreyus',age:3})

user.on('change',()=>{
    console.log('This is working');
});

user.set({age:7})



// A Quick Reminder on Accessors



