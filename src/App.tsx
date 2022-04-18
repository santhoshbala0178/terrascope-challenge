import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme';
import AppContainer from './App.style';
import MemoPage from './components/MemoPage';
import { APIContextProvider } from './apiContext';
function App() {
  return (
    <APIContextProvider>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MemoPage />
        </AppContainer>
      </ThemeProvider>
    </APIContextProvider>
  );
}

export default App;
