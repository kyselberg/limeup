import {observer} from 'mobx-react';
import User from '../user/user';
import classes from './list.module.css';

const UserList = observer(({users, remove}) => {
    return (
        <ul className={classes.list}>
            {users.map((user) => (
                <User key={user.id} user={user} onDelete={remove} />
            ))}
        </ul>
    );
});

export default UserList;
