import React from 'react';
import MyComponent from './components/MyComponent';
import AppRouter from './routes/Router';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <MyComponent />
      <AppRouter />
    </div>
  );
};

export default App;
