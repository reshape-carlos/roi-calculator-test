import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
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
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const mainTheme = createTheme ({
  // box: {
  //   display: 'grid',
  //   bgcolor: (theme) =>
  //     theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
  //   color: (theme) =>
  //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
  //   border: '1px solid',
  //   borderColor: (theme) =>
  //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
  //   p: 1,
  //   borderRadius: 2,
  //   fontSize: '0.875rem',
  //   fontWeight: '700',
  // },
  // container: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(12, 1fr)",
  //   gridGap: `${theme.spacing.unit * 3}px`
  // },
  // paper: {
  //   padding: theme.spacing.unit,
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   whiteSpace: "nowrap",
  //   marginBottom: theme.spacing.unit
  // },
  // divider: {
  //   margin: `${theme.spacing.unit * 2}px 0`
  // }
});


const defaultValues = {
  partsPerHour: 1,
  shiftsPerDay: 2,
  operatorPerShift: 1,
  roi: 0,
  facilityType: "Automotive",
  facilityLocation: "US Midwest",
  whatIsProduced: "",
  whatIsUtilized: "",
  operatorRate: 15,
  operatorCount: 10,
  insurance: 0,
  hiringCost: 10000
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
    console.log("Input changed");
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
    <React.Fragment>
      
      <CssBaseline />
      <Container maxWidth="sm">

        <Typography variant="h4" color="initial" align="center">
          AutoCanvas ROI Calculator
        </Typography>

        <Box sx={{ display: 'grid', gap: 1, margin: 2, gridTemplateRows: 'repeat(4, 1fr)' }}>
          
          {/* ----------------------------- */}
          <Grid id="first-row" container justify="flex-end" alignItems="center" spacing={1}>
              
            <Grid item xs={3}>
              <Typography>
                I have a tier 1
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <FormControl size="small" variant="standard">
                <Select
                  name="facilityType"
                  value={formValues.facilityType}
                  onChange={handleInputChange}
                >
                  <MenuItem key="automotive" value="automotive">
                    Automotive
                  </MenuItem>
                  <MenuItem key="plastic" value="plastic">
                    Plastic
                  </MenuItem>
                  <MenuItem key="metal " value="metal">
                    Metal
                  </MenuItem>
                </Select>
              </FormControl>
              
            </Grid>

            <Grid item xs={4}>
              <Typography>
                facility
              </Typography>
            </Grid>

          </Grid>

          {/* <Grid>
            <Container size="small"/>
          </Grid> */}

          {/* ----------------------------- */}
          <Grid id="second-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={3}>
              <Typography>
                that produces
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                id="whatIsProduced"
                variant="standard"
                value={formValues.whatIsProduced}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={2}>
              <Typography>
                utilizing
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                id="whatIsUtilized"
                variant="standard"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={1}>
              <Typography>
                .
              </Typography>
            </Grid>
            
          </Grid>

          {/* ----------------------------- */}
          <Grid id="third-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={2}>
              <Typography>
                I produce
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField
                id="partsPerHour"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>
                parts per hour.
              </Typography>
            </Grid>
          </Grid>          

          {/* ----------------------------- */}
          <Grid id="fourth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={1}>
              <Typography>
                I run
              </Typography>
            </Grid>

            <Grid item xs={1}>

              <FormControl size="small" variant="standard">
                <Select
                  name="shiftsPerDay"
                  value={formValues.shiftsPerDay}
                  onChange={handleInputChange}
                >
                  <MenuItem key="one" value="1">
                    1
                  </MenuItem>
                  <MenuItem key="two" value="2">
                    2
                  </MenuItem>
                  <MenuItem key="three" value="3">
                    3
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <Typography>
                shifts.
              </Typography>
            </Grid>
          </Grid>

          {/* ----------------------------- */}
          <Grid id="fifth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={3.5}>
              <Typography>
                This task requires
              </Typography>
            </Grid>

            <Grid item xs={1.5}>

              <FormControl size="small" variant="standard">
                <Select
                  name="operatorPerShift"
                  value={formValues.operatorPerShift}
                  onChange={handleInputChange}
                >
                  <MenuItem key="one" value="1">
                    1
                  </MenuItem>
                  <MenuItem key="two" value="2">
                    2
                  </MenuItem>
                  <MenuItem key="three" value="3">
                    3
                  </MenuItem>
                  <MenuItem key="four" value="4">
                    4
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography>
                operator(s) per shifts.
              </Typography>
            </Grid>
          </Grid>

          {/* ----------------------------- */}
          <Grid id="sixth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={5.5}>
              <Typography>
                The hourly rate of operators is
              </Typography>
            </Grid>

            <Grid item xs={0.5}>
              <Typography>
                $
              </Typography>
            </Grid>
            
            <Grid item xs={1}>
              <TextField
                id="operatorRate"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>
                / hour.
              </Typography>
            </Grid>
          </Grid> 

          {/* ----------------------------- */}
          <Grid id="seventh-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={3}>
              <Typography>
                My facility has
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="operatorCount"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>
                operators.
              </Typography>
            </Grid>
          </Grid> 

          {/* ----------------------------- */}
          <Grid id="eighth-row" container justify="flex-end" alignItems="center" spacing={1}>
              
            <Grid item xs={3.5}>
              <Typography>
                My facility is in the
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <FormControl size="small" variant="standard">
                <Select
                  name="facilityLocation"
                  value={formValues.facilityLocation}
                  onChange={handleInputChange}
                >
                  <MenuItem key="us-east" value="us-east">
                    US East Coast
                  </MenuItem>
                  <MenuItem key="us-midwest" value="us-midwest">
                    US Midwest
                  </MenuItem>
                  <MenuItem key="us-south" value="us-south">
                    US South
                  </MenuItem>
                  <MenuItem key="us-west" value="us-west">
                    US West Coast
                  </MenuItem>
                  
                </Select>
              </FormControl>
              
            </Grid>

          </Grid>

          {/* ----------------------------- */}
          <Grid id="ninth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={10}>
              <Typography>
                My OH&S, insurance, sick leave and other alternative personnel costs are approximately 
              </Typography>
            </Grid>
          </Grid>
          <Grid id="tenth-row" container justify="flex-end" alignItems="center" spacing={1}>
            <Grid item xs={2}>
              <TextField
                id="insurance"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>
                /year.
              </Typography>
            </Grid>
          </Grid> 

          {/* ----------------------------- */}
          <Grid id="eleventh-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={4}>
              <Typography>
                My HR/hiring costs are
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="hiringCost"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>
                / year.
              </Typography>
            </Grid>
          </Grid> 

          {/* ----------------------------- */}
          <Grid id="last-row" container spacing={1}>
            <Grid item xs justify="flex-end" alignItems="center" align="center" >
              <Button variant="contained" size="small" color="primary" type="submit" onClick={handleSubmit}>
              Get ROI Results
              </Button>
            </Grid>
          

          </Grid>
          

        </Box>

        <Copyright />

      </Container>
      
    </React.Fragment>
  );


//   return (    
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>

//         <Typography variant="h3" color="text.primary" align="center">
//           AutoCanvas ROI Calculator
//         </Typography>
        
        
//           <TextField 
//             id="parts-per-hour-input"
//             name="partsPerHour"
//             label="Parts per hour"
//             type="number"
//             value={formValues.partsPerHour}
//             onChange={handleInputChange}
//           />
        
//           <TextField
//             id="shifts-input"
//             name="shiftsPerDay"
//             label="Shifts per day"
//             type="number"
//             value={formValues.shiftsPerDay}
//             onChange={handleInputChange}
//           />
        
// {/* 
//           <FormControl>
//             <Select
//               name="os"
//               value={formValues.os}
//               onChange={handleInputChange}
//             >
//               <MenuItem key="mac" value="mac">
//                 Mac
//               </MenuItem>
//               <MenuItem key="windows" value="windows">
//                 Windows
//               </MenuItem>
//               <MenuItem key="linux " value="linux">
//                 Linux
//               </MenuItem>
//             </Select>
//           </FormControl> */}
       
        
//         <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
//           Get ROI Results
//         </Button>

//         <TextField
//           id="roi-output"
//           name="roi"
//           label="ROI"
//           type="number"
//           value={formValues.roi}
//           onChange={handleInputChange}
//         />

        

//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );

  
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