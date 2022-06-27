//react
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

//components
import App from './App';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)