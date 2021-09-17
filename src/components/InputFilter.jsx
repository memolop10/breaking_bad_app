import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { FormControl,FormHelperText,InputLabel,Input } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//           },
//         },
// }));

const InputFilter = () => {

    // const classes = useStyles();

    return (
        <>
            <FormControl>
                <InputLabel htmlFor="my-input">Search</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">filter your favorite episode</FormHelperText>
            </FormControl>
        </>
    )
}

export default InputFilter
