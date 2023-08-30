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

const mainTheme = createTheme({
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
  daysPerWeek: 5,
  weeksPerYear: 50,
  operatorPerShift: 1,
  roi: 0,
  facilityType: "",
  facilityLocation: "us-midwest",
  whatIsProduced: "cars",
  whatIsUtilized: "robots",
  operatorRate: 15,
  operatorCount: 10,
  insurance: 0,
  hiringCost: 10000,
  systemCost: 150000
};

const visibilityState = {
  firstRow: true,
  secondRow: true,
  thirdRow: true,
  fourthRow: true,
  fifthRow: true,
  sixthRow: true,
  seventhRow: true,
  eighthRow: true,
  ninthRow: true,
  tenthRow: true,
  eleventhRow: true,
  twelfthRow: true,
  buttonRow: true,
}


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
    // console.log("Input changed");
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // visibilityState.secondRow = (formValues.facilityType != "" ? true : false);    
    // visibilityState.thirdRow = ( (formValues.whatIsProduced != "" && formValues.whatIsUtilized != "") ? true : false);
    // visibilityState.fourthRow = (defaultValues.shiftsPerDay == "" ? false : true);

    // console.log(formValues);
  };


  const computeCashflow = function(operatorRate, 
                                    operatorPerShift, 
                                    shiftsPerDay, 
                                    daysPerWeek, 
                                    weeksPerYear,
                                    systemCost){
    const laborSavings = 8*operatorRate*operatorPerShift*shiftsPerDay*daysPerWeek*weeksPerYear;
    console.log("labor savings: ", laborSavings);
    const operationCost = 0.03*systemCost;
    console.log("operation costs: ", operationCost);
    const year1Cashflow = laborSavings-operationCost-systemCost;
    console.log("year 1 cashflow: ", year1Cashflow);
    return year1Cashflow;

  }

  const handleSubmit = () => {
    // formValues.roiValue = formValues.shiftsPerDay * formValues.partsPerHour;
    const cost = computeCashflow(formValues.operatorRate,
                                  formValues.operatorPerShift, 
                                  formValues.shiftsPerDay, 
                                  formValues.daysPerWeek, 
                                  formValues.weeksPerYear,
                                  formValues.systemCost);
    
    console.log("cost is", cost)
    console.log(formValues);
  }

  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="sm">

        <Box sx={{ display: 'grid', gap: 1, margin: 2, gridTemplateRows: 'repeat(1, 1fr)' }}>
          <Grid align="center">
            <Box
              component="img"
              sx={{
                // height: 100,
                width: 300,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="Reshape logo"
              src="https://img1.wsimg.com/isteam/ip/db523e1b-fe31-4794-bf6c-94aee0354d70/LogoDefault%20(1).png"
            />
          </Grid>
        </Box>

        <Grid>
          <Typography variant="h5" color="initial" align="center">
            Automation ROI Calculator
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="body1" color="text.secondary" align="center">
            Answer the questions below to generate an ROI estimate for your automation project
          </Typography>
        </Grid>

        {/* <Box sx={{ display: 'grid', gap: 1, margin: 2, gridTemplateRows: 'repeat(1, 1fr)' }}>
          <Grid>
            <Typography variant="h5" color="initial" align="left">
              1. Current Costs
            </Typography>
          </Grid>
        </Box> */}

        <Box sx={{ display: 'grid', gap: 1, margin: 2, gridTemplateRows: 'repeat(4, 1fr)' }}>

          {/* ----------------------------- */}
          {visibilityState.firstRow && <Grid id="first-row" container justify="flex-end" alignItems="center" spacing={1}>

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
                  <MenuItem key="automotive" value="automotive">Automotive</MenuItem>
                  <MenuItem key="plastic" value="plastic">Plastic</MenuItem>
                  <MenuItem key="metal " value="metal">Metal</MenuItem>
                </Select>
              </FormControl>

            </Grid>

            <Grid item xs={4}>
              <Typography>facility</Typography>
            </Grid>

          </Grid>}

          {/* <Grid>
            <Container size="small"/>
          </Grid> */}

          {/* ----------------------------- */}
          {visibilityState.secondRow && <Grid id="second-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={3}>
              <Typography>that produces</Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="whatIsProduced"
                variant="standard"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={2}>
              <Typography>utilizing</Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                name="whatIsUtilized"
                variant="standard"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={1}>
              <Typography>.</Typography>
            </Grid>

          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.thirdRow && <Grid id="third-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={2}>
              <Typography>I produce</Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField
                name="partsPerHour"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>parts per hour.</Typography>
            </Grid>
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.fourthRow && <Grid id="fourth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={1}>
              <Typography>I run</Typography>
            </Grid>

            <Grid item xs={1}>

              <FormControl size="small" variant="standard">
                <Select
                  name="shiftsPerDay"
                  value={formValues.shiftsPerDay}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <Typography>shifts/day,</Typography>
            </Grid>

            <Grid item xs={1}>

              <FormControl size="small" variant="standard">
                <Select
                  name="daysPerWeek"
                  value={formValues.daysPerWeek}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2.5}>
              <Typography>days/week, </Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField
                name="weeksPerYear"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>weeks/year.</Typography>
            </Grid>
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.fifthRow && <Grid id="fifth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={5}>
              <Typography>This task currently requires</Typography>
            </Grid>

            <Grid item xs={1.5}>

              <FormControl size="small" variant="standard">
                <Select
                  name="operatorPerShift"
                  value={formValues.operatorPerShift}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography>
                operator(s) per shifts.
              </Typography>
            </Grid>
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.sixthRow &&<Grid id="sixth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={5.5}>
              <Typography>
                The hourly rate of an operator is
              </Typography>
            </Grid>

            <Grid item xs={0.5}>
              <Typography>
                $
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <TextField
                name="operatorRate"
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
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.seventhRow &&<Grid id="seventh-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={3}>
              <Typography>
                My facility has
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <TextField
                name="operatorCount"
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
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.eighthRow &&<Grid id="eighth-row" container justify="flex-end" alignItems="center" spacing={1}>

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

          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.ninthRow &&<Grid id="ninth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={10}>
              <Typography>
                My OH&S, insurance, sick leave and other alternative personnel costs are approximately
              </Typography>
            </Grid>
          </Grid>}

          {visibilityState.tenthRow &&<Grid id="tenth-row" container justify="flex-end" alignItems="center" spacing={1}>
            <Grid item xs={2}>
              <TextField
                name="insurance"
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
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.eleventhRow &&<Grid id="eleventh-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={4}>
              <Typography>
                My HR/hiring costs are
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <TextField
                name="hiringCost"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={3}>
              <Typography>/ year.</Typography>
            </Grid>
          </Grid>}

          {/* ----------------------------- */}
          {visibilityState.twelfthRow &&<Grid id="twelfth-row" container justify="flex-end" alignItems="center" spacing={1}>

            <Grid item xs={7.2}>
              <Typography>
                The estimated cost of the new system is $
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <TextField
                name="systemCost"
                variant="standard"
                type="number"
                onChange={handleInputChange}
                size="small"
              />
            </Grid>

            <Grid item xs={1}>
              <Typography>.</Typography>
            </Grid>
          </Grid>}


        </Box>

        {visibilityState.buttonRow &&<Grid align="center" margin={4}>
          <Button variant="contained" size="small" color="primary" type="submit" onClick={handleSubmit}>
            Get ROI Results
          </Button>
        </Grid>}

        <Grid align="center" margin={4}>
          <Copyright />
        </Grid>

      </Container>

    </React.Fragment>
  );
}

export default App;


