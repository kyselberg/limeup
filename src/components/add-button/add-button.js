import {observer} from "mobx-react";
import classes from './add-button.module.css';

const AddButton = observer(({add}) => {
    return (
        <button onClick={() => add({name: '', isDisabled: false})} className={classes.addButton}>
            Add user
        </button>
    )
});

export default AddButton;
