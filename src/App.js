import logo from './logo.svg';
import './App.css';
import Addtask from './Addtask';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Todolist from './Todolist';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react'

function App() {
 const persistConfig={
    key : 'root', 
    storage
 }
 const persist_Reducer=persistReducer(persistConfig,rootReducer);
  const store=createStore(persist_Reducer);
   const persistor= persistStore(store);


  return (
    <div className="App">
   <h1>
    redux-persist
   </h1>
   <Provider store={store}>
     <PersistGate persistor={persistor}>
         
     <Addtask/>
    <Todolist/>
     </PersistGate>

   </Provider>
 
    </div>
  );
}

export default App;
