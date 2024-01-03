import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckBox({ handleChange }) {
    return (
        <div>
            <Checkbox {...label} onChange={handleChange} />
        </div>
    );
}
