import ReactDOM from 'react-dom';
import Play from './Play/Play.tsx'
import './index.scss'
import store from './redux/Redux'


ReactDOM.render(
  <Play store={store} />
  ,
  document.getElementById('root')
);

