import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import {
  useColorScheme
} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const SelectMode=event.target.value
    // console.log(SelectMode);
    setMode(SelectMode)

  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-selcet-dark-light-mode">Age</InputLabel>
      <Select
        labelId="lable-selcet-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >

        <MenuItem value='light'>
          <Box sx={{display:'flex', alignItems:'center', gap:'8px' }}>
            <LightModeIcon fontSize='small'/>
          Light
          </Box>

        </MenuItem>
        <MenuItem value='dark' >
          <Box sx={{display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize='small'/>
          Dark
          </Box>

        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{display:'flex', alignItems:'center', gap:2 }}>
            <SettingsBrightnessIcon fontSize='small'/>
          System
          </Box>

        </MenuItem>
      </Select>
    </FormControl>
  );
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode', prefersDarkMode)
  // console.log('prefersLightMode', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect/>
      <hr />
      <ModeToggle/>
      <hr/>
      <div>Thanh Sơn</div>
      <Typography variant='h2' color='text.secondary'>Phương Ly</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[900] }} />
    </>
  )
}

export default App
