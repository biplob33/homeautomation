import './App.css';
import Home from './components/home';

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    window.backend_url = window.location.href.split(':').slice(0,2).join(':') + ':8000/'
  } else {
    window.backend_url = window.location.href
  }
  return (
    <Home />
  );
}

export default App;
