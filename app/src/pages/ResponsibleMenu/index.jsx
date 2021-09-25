import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardComponent from "../../components/Card/index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ResponsibleMenu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div> NavBar </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Atividades" {...a11yProps(0)} />
          <Tab label="Eventos" {...a11yProps(1)} />
          <Tab label="Agenda" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Atividades</h2>
        <CardComponent activityName="Atividade 1" date="30/05/2021" description="Descricao da atividade 1" type="activity" id="1"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Eventos</h2>
        <CardComponent activityName="Evento 1" date="30/05/2021" description="Descricao da evento 1" type="event" id="2"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Agenda</h2>
        <CardComponent activityName="Agenda 1" date="30/05/2021" description="Descricao da agenda 1" type="schedule" id="3"/>
      </TabPanel>
    </Fragment>
  );
}
