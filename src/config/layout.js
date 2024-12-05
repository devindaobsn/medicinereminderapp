import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomePage from '../page/homepage/homepage'
import RecordPage from '../page/recordpage';
import ChartPage from '../page/chartpage';

const BottomNav = ({ value, setValue }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const routes = ['/medicinereminderapp', '/medicinereminderapp/record', '/medicinereminderapp/chart'];
    if (routes[value]) {
      navigate(routes[value]);
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
  const [value, setValue] = React.useState(0);

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
            <Route path="/medicinereminderapp" element={<HomePage />} />
            <Route path="/medicinereminderapp/record" element={<RecordPage />} />
            <Route path="/medicinereminderapp/chart" element={<ChartPage />} />
          </Routes>
        </Box>

        <BottomNav value={value} setValue={setValue} />
      </Box>
    </Router>
  );
};

export default MobileResponsiveAppWithRouting;
