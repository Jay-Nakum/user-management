import './App.css';
import router from './routes/Router.';
import { Provider } from 'react-redux';
import store from './redux/store/Store';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
