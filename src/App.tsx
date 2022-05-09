import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LinkItem, SideBar} from './components/SideBar';
import {Home} from './pages/Home';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
});

const linkItems: LinkItem[] = [{name: 'Home', link: '/'}];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{display: 'flex'}}>
          <SideBar linkItems={linkItems} />
          <Box component="main" sx={{flexGrow: 1, height: '100vh'}}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
