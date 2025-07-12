import { useState, useEffect } from 'react'
import MenuItem from "@mui/material/MenuItem"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function SelectFiliais({filiais, filiaisPermitidas=[], onChangePermissoes}) {
    const [buscaFilial, setBuscaFilial] = useState("");
    const [opcoesAbertas, setOpcoesAbertas] =  useState(false);
    const [filiaisSelecionadas, setFiliaisSelecionadas] = useState({});


    useEffect(() => {
        const copia = {}
        filiais.forEach((filial) => {
            copia[filial] = filiaisPermitidas.includes(filial)
        })
        setFiliaisSelecionadas(copia)
    }, [filiais])

    useEffect(() => {
        onChangePermissoes(Object.keys(filiaisSelecionadas).filter((filial) => filiaisSelecionadas[filial]))
    }, [filiaisSelecionadas, onChangePermissoes])

    const handleClickAdd = () => {
        if(buscaFilial in filiaisSelecionadas)
        {
            const copia = {...filiaisSelecionadas}
            copia[buscaFilial] = true
            setFiliaisSelecionadas(copia)
            setBuscaFilial("")
        }
    }

    const handleClickDelete = (filial) => {
        const copia = {...filiaisSelecionadas}
        copia[filial] = false
        setFiliaisSelecionadas(copia)
    }

    return (
        <Box className="flex flex-row gap-1">
            
            <Box sx={{flex:"1", position:"relative"}}>
                    
                <InputLabel>Filiais permitidas (Vazio libera todas)</InputLabel>


                <ClickAwayListener onClickAway={() => {setOpcoesAbertas(false)}}>
                    <Box onClick={() => {setOpcoesAbertas(true)}} >
                        <TextField  onChange={(ev) => {setBuscaFilial(ev.target.value)}} value={buscaFilial}
                                    sx={{width:"100%", "& .MuiInputBase-root": {height: "35px"}}}
                                    autoComplete="off">
                        </TextField>
                    </Box>
                </ClickAwayListener>

                
                
                {opcoesAbertas && 
                    <Box sx={{width:"100%", marginBottom:"10px"}}>
                        {Object.keys(filiaisSelecionadas).map((filial) => 
                             (!filiaisSelecionadas[filial] && 
                                    filial.toLowerCase().includes(buscaFilial.toLowerCase())) 
                                && 
                                <MenuItem key={filial} 
                                          sx={{ borderStyle:"solid", 
                                                borderWidth:"1px", 
                                                borderColor:"border.secondary",
                                                fontSize:"16px",
                                                fontWeight:"500",
                                                backgroundColor: "background.primary",
                                                "&:hover": {backgroundColor: "background.primary"}}}
                                        onClick={() => {setBuscaFilial(filial)}}> 
                                                {filial}
                                </MenuItem>
                        )}

                    </Box>
                }
                {filiais.map((filial) => {
                   return filiaisSelecionadas[filial] && 
                    <Stack key={filial} className=' m-[2px] p-2 border-solid border-[1px]
                                                 border-border_secondary font-medium'> 
                        <Box sx={{display:"flex", flexDirection:"row", gap:"5px"}}>
                            <p>
                                {filial}
                            </p>
                            
                            <HighlightOffIcon onClick={() => handleClickDelete(filial)} sx={{color:"red"}} />
                            
                        </Box>

                                
                    </Stack>
                })}
                
            </Box>  

            <Button sx={{   backgroundColor:"background.icon", alignSelf: "flex-start", 
                            marginTop:"23px", color:"text.primary"}}
                    onClick={handleClickAdd}>
                    
                <AddIcon/>
            </Button>
        </Box>
    )
}

export default SelectFiliais