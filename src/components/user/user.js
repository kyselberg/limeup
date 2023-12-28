import {observer} from 'mobx-react';
import classes from './user.module.css';

const User = observer(({user, onDelete}) => {
    return (
        <li className={`${classes.user} ${user.isDisabled ? classes.disabled : ''}`}>
            <input type="checkbox" checked={user.isDisabled} onChange={user.toggleIsDisabled} />
            <input placeholder="Input name" value={user.name} onChange={(e) => user.setName(e.target.value)} />
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
    );
});

export default User;
