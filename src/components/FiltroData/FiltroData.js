import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function FiltroData({inicioValue, inicioOnChange, fimValue, fimOnChange}) {
    return (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="br">
                <DemoContainer components={['DatePicker']}>

                    <DatePicker format="DD/MM/YYYY" label = "Data Inicial"  
                    value={inicioValue} onChange={(newValue) => inicioOnChange(newValue)}/>

                    <DatePicker format="DD/MM/YYYY" label = "Data Final"
                    value={fimValue} onChange={(newValue) => fimOnChange(newValue)}/>


                </DemoContainer>
            </LocalizationProvider>

    );
}

export default FiltroData;