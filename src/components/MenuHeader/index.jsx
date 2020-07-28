import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Link
} from "react-router-dom";
import './styles.scss';


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
            <Tab label='Coronavairus' component={Link} to={"/"} />
            <Tab label='FaceApp' component={Link} to={"/faceapi"} />
          </Tabs>
        </div>
      </AppBar>
    </div>
  );
}
