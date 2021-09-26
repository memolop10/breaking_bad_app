import React from 'react'
import { FormControl,FormHelperText,InputLabel,Input } from '@material-ui/core';


const InputFilter = ({ onSearchEpisodes }) => {

    return (
        <>
            <FormControl>
                <InputLabel htmlFor="my-input">Search</InputLabel>
                <Input 
                    id="my-input" 
                    aria-describedby="my-helper-text" 
                    onChange={ onSearchEpisodes }
                />
                <FormHelperText id="my-helper-text">filter your favorite episode</FormHelperText>
            </FormControl>
        </>
    )
}

export default InputFilter
