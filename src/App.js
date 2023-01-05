import logo from './cook-9.jpg';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="cookie" />
        <p>
          Happy New Year 2023!
        </p>
        <p>
          Check the <a
          className="App-link"
                      href="https://github.com/KarinaDabbraccio/Django"
          target="_blank"
          rel="noopener noreferrer"
        >
           Django app
        </a> presentation on GitHub.
        </p>
              <div>
                  <Video />
              </div>
      </header>
    </div>
  );
}

export default App;
