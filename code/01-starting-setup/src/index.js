// react-dom & react:
// Makes the features in the react available inside this file
import ReactDOM from 'react-dom/client';

// Not work in vanilla js
// to import a css file
// React will compile the js
// Then delivery it to browser
import './index.css';
import App from './App';

// createRoot
// Create the main entry point, the main hook of the UI
const root = ReactDOM.createRoot(document.getElementById('root'));

// Tell React where this app should be placed in the web page ths is loaded.
root.render(<App />);
