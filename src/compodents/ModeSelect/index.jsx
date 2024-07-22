import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import {
  useColorScheme
} from '@mui/material/styles'
import { AddBoxRounded } from '@mui/icons-material'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const SelectMode=event.target.value
    // console.log(SelectMode);
    setMode(SelectMode)

  }

  return (
    <FormControl size="small">
      <InputLabel id="lable-selcet-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="lable-selcet-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >

        <MenuItem value='light'>
          <Box sx={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <LightModeIcon fontSize='small'/>
          Light
          </Box>

        </MenuItem>
        <MenuItem value='dark' >
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize='small'/>
          Dark
          </Box>

        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <SettingsBrightnessIcon fontSize='small'/>
          System
          </Box>

        </MenuItem>
      </Select>
    </FormControl>
  )
}


export default ModeSelect
