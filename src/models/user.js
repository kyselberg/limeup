import {types} from 'mobx-state-tree';

const User = types.model('User', {
    id: types.string,
    name: types.string,
    isDisabled: types.boolean,
}).actions((self) => ({
    toggleIsDisabled(){
        self.isDisabled = !self.isDisabled;
    },
    setName(newName){
        self.name = newName;
    },
}));

export default User;
