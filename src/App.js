import React from 'react';
import './App.css';
import AvatarViewer from './components/AvatarViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Proxy AI Assistant</h1>
        <p>AI-powered assistant with 3D Avatar</p>
      </header>
      <main>
        <AvatarViewer />
      </main>
    </div>
  );
}

export default App;