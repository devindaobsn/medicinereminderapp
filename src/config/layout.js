import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomePage from '../page/homepage/homepage'
import RecordPage from '../page/recordpage';
import ChartPage from '../page/chartpage';

const BottomNav = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    // Navigate based on the tab index
    switch (value) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/record');
        break;
      case 2:
        navigate('/chart');
        break;
      default:
        navigate('/');
    }
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 400,
        boxShadow: 3,
      }}
    >
      <BottomNavigationAction
        label="Medication reminder"
        icon={<NotificationsIcon />}

      />
      <BottomNavigationAction
        label="Medication record"
        icon={<HistoryIcon />}

      />
      <BottomNavigationAction
        label="Chart"
        icon={<BarChartIcon />}

      />
    </BottomNavigation>
  );
};

const MobileResponsiveAppWithRouting = () => {
  return (
    <Router>
      <Box
        sx={{
          maxWidth: 400,
          margin: '0 auto',
          padding: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/chart" element={<ChartPage />} />
          </Routes>
        </Box>

        {/* Bottom Navigation */}
        <BottomNav />
      </Box>
    </Router>
  );
};

export default MobileResponsiveAppWithRouting;
