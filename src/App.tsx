import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import theme from './components/Theme';
import AppContainer from './App.style';
import MemoPage from './components/MemoPage';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MemoPage />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
