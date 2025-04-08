import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import styles from "./FiltroData.module.css"

function FiltroData({inicioValue, inicioOnChange, fimValue, fimOnChange}) {


    const props = {
    textField: {
        className: styles.input_wrapper,
        InputLabelProps: { shrink: true },
    },
    };

    return (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="br">
                <div className={styles.date_picker_wrapper}>
                    
                    <DatePicker className={styles.date_picker}  format="DD/MM/YYYY" 
                    label={"Data Inicial"}
                    slotProps={props}
                    value={inicioValue} onChange={(newValue) => inicioOnChange(newValue)}/>

                    <DatePicker className={styles.date_picker}  format="DD/MM/YYYY" label = "Data Final"
                    slotProps={props}
                    value={fimValue} onChange={(newValue) => fimOnChange(newValue)}/>
                </div>


            </LocalizationProvider>

    );
}

export default FiltroData;