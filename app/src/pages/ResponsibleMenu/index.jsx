import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
        <Card>
            <CardContent>
              <Typography variant={"h6"}>
                Nome da atividade
              </Typography>
              <Typography variant={"caption"}>
                Data
              </Typography>
              <Typography variant={"caption"}>
                Descricao - Tipo
              </Typography>
              <Button>Detalhes</Button>
            </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Eventos</h2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Agenda</h2>
      </TabPanel>
    </Fragment>
  );
}

// export default ResponsibleMenu;
