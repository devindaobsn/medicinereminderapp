import './App.css';
import Theme from './config/theme';
import Layout from './config/layout';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Layout>
        <Typography variant="h4" gutterBottom>
          Welcome to My React App!
        </Typography>
        <Typography>
          This is a simple layout with Material-UI components for Header, Sidebar, and Footer.
        </Typography>
      </Layout>
    </Theme>
  );
}

export default App;
