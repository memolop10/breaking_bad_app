import './App.css';
import { Provider} from 'react-redux'
import { store } from './store/store';
import HomeView from './components/HomeView';

function App() {

  return (
    <Provider store={store}>
      <HomeView/>
    </Provider>
  );
}

export default App;
