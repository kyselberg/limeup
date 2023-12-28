import {observer} from 'mobx-react';
import AddButton from "./components/add-button/add-button";
import UserList from './components/list/list';

const App = observer(({store}) => {
    return (
          <div className="App">
            <UserList users={store.users} remove={store.remove} />
            <AddButton add={store.add}/>
          </div>
      );
});

export default App;
