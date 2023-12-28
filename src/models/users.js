import {types} from 'mobx-state-tree';
import User from './user';

const UsersModel = types.model('Users', {
    users: types.array(User)
}).actions(self =>({
    add(user){
        self.users.push(User.create({...user, id: (Math.random() * 10000).toLocaleString()}));
    },
    remove(userId){
        const userIndex = self.users.findIndex((user) => user.id === userId);
        self.users.splice(userIndex, 1);
    }
}));

export default UsersModel;
