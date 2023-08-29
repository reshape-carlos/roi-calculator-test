import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip.js';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from '@mui/material/Alert';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";


const defaultValues = {
  partsPerHour: 1,
  shiftsPerDay: 2,
  roi: 0,
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://reshapeautomation.com/">
        Reshape Automation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  
  const [formValues, setFormValues] = React.useState(defaultValues);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  const handleSubmit = () => {
    formValues.roiValue = formValues.shiftsPerDay*formValues.partsPerHour;
    console.log("ROI is", formValues.roiValue)
  }


  return (    
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>

        <Typography variant="h3" color="text.primary" align="center">
          AutoCanvas ROI Calculator
        </Typography>
        
        
          <TextField 
            id="parts-per-hour-input"
            name="partsPerHour"
            label="Parts per hour"
            type="number"
            value={formValues.partsPerHour}
            onChange={handleInputChange}
          />
        
          <TextField
            id="shifts-input"
            name="shiftsPerDay"
            label="Shifts per day"
            type="number"
            value={formValues.shiftsPerDay}
            onChange={handleInputChange}
          />
        
{/* 
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
            >
              <MenuItem key="mac" value="mac">
                Mac
              </MenuItem>
              <MenuItem key="windows" value="windows">
                Windows
              </MenuItem>
              <MenuItem key="linux " value="linux">
                Linux
              </MenuItem>
            </Select>
          </FormControl> */}
       
        
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Get ROI Results
        </Button>

        <TextField
          id="roi-output"
          name="roi"
          label="ROI"
          type="number"
          value={formValues.roi}
          onChange={handleInputChange}
        />

        

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;



// <Typography variant="body1" color="text.secondary" align="left">
// I have a tier 1
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// facility that produces
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// utilizing
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// I produce
// </Typography>



// <Typography variant="body1" color="text.secondary" align="left">
// parts/hour.
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// I run
// </Typography>

// <ShiftsPerDaySelect onShiftsChange={handleShiftsChange} />

// <Typography variant="body1" color="text.secondary" align="left">
// Multiplied Shifts: {shiftsResult}
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// shifts.
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// This task requires
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// operator per shift.
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// The hourly rate of operators is
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// /hr
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// My facility has
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// operators.
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// My facility is in
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// My OH&S, insurance, sick leave and other alternative personnel costs are approximately
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// /year.
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// My HR/hiring costs are
// </Typography>

// <Typography variant="body1" color="text.secondary" align="left">
// /year
// </Typography>