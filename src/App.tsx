import React, { useEffect } from 'react';
import api from './service/api';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import AppRoutes from './routes';

function App() {

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get('?page=0&size=99&winner=false&year=1980');
        console.log(response)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
