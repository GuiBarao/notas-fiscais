import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from '@mui/x-date-pickers/locales';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import styles from "./FiltroData.module.css"

function FiltroData({inicioValue, inicioOnChange, fimValue, fimOnChange}) {


    React.useEffect(() => {
        dayjs.locale('pt-br');
    }, []);
    

    const props = {
    textField: {
        className: styles.input_wrapper,
        InputLabelProps: { shrink: true },
    },
    };


    return (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br"
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
                
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