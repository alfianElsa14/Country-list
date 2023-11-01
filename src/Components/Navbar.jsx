import React from 'react'
import style from '../style/style.module.scss'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Navbar() {
    return (
        <nav className={style.navbar}>
            <div>
                <h1>Where in the World</h1>
            </div>
            <div className={style.navbarright}>
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Dark mode"
                    labelPlacement="start"
                />
            </div>
        </nav>
    )
}

export default Navbar