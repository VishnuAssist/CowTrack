import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import { ToastContainer } from "react-toastify";
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import './styles.css';  
function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <CssBaseline />
        {content}
      {/* </LocalizationProvider> */}
      <ToastContainer position="top-right" />
    </ThemeProvider>
  );
}
export default App;
