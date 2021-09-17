import './App.css';
import { Provider } from 'react-redux'
import ListEpisodes from './components/ListEpisodes';
import { store } from './store/store';
import BKBImg from './assets/bkB.png'
import InputFilter from './components/InputFilter';

function App() {

  return (
    <Provider store={store}>
      <div className="header-app">
        <div className="img-container">
          <img src={ BKBImg } alt="BKB"/> 
        </div>
        <div className="input-container">
          <InputFilter/>
        </div>
      </div>
      <ListEpisodes />
    </Provider>
  );
}

export default App;
