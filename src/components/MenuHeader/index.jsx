import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Coronavirus from '../../pages/Coronavirus';
import './styles.scss';
import FaceRecognition from '../../pages/FaceRecognition';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MenuHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position='static'>
        <div className='navbarrrrrrrrrrrrrrr'>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
          >
            <Tab label='Coronavairus' {...a11yProps(0)} />
            <Tab label='FaceApp' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
        </div>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Coronavirus />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FaceRecognition />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
