import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <GlobalStyle />
      <IconStyle />
      {renderRoutes(routes)}
    </Router>
    // </Provider>
  );
}

export default App;
