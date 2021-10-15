import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardComponent from "../../components/Card/index";
import Api from "../../services/rspAPIRequests";
import Brick from "../../assets/images/brick.png";
import Calendar from "../../assets/images/calendar.png";
import RedFlag from "../../assets/images/red-flag.png";

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

function renderCards(activities, type){
  return activities.map((val) => {
    return <CardComponent key={val.id} activityName={val.nome} date={val.data} description={val.descricao} type={type} id={val.id}/>
  });
}

export default function ResponsibleMenu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let activities = Api.getActivities;
  let events = Api.getEvents;
  let schedules = Api.getSchedules;

  return (
    <Fragment>
      <div> NavBar </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'block', width: 270, marginLeft: 'auto', marginRight: 'auto',left: 22, top: 51 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<img alt="" src={ Brick } />} {...a11yProps(0)}></Tab>
          <Tab icon={<img alt="" src={ RedFlag } />} {...a11yProps(1)} />
          <Tab icon={<img alt="" src={ Calendar } />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Atividades</h2>
        { renderCards(activities, "activity") }
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h2>Eventos</h2>
        { renderCards(events, "event") }
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h2>Agenda</h2>
        { renderCards(schedules, "schedule") }
      </TabPanel>
    </Fragment>
  );
}
