import React from 'react';
import logo from './logo.svg';
import './App.css';

//import { MyComponent } from 'bcd-ui-component/generated/bcd-ui-component-react/src/components'
//import { MyComponent } from './bcd-ui-component-react/src/components'
import { MyComponent } from 'bcd-ui-component-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent first="a Web Component / Custom Element"
          middle={[
            'with complex prop passing and easy event binding',
            'for React yeah!'
          ]}
          last="thanks to Stencil"
          onNameClicked={e => alert(e.detail)} />

      </header>
    </div>
  );
}

export default App;
