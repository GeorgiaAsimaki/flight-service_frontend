import * as React from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

import './Complete.css'

const Complete = () => {
    const [success,setSuccess]=React.useState(false)
    return(
        <div className="alert">
        {success && (

                <Alert severity="success">
                    <AlertTitle>Success!</AlertTitle>
                    Your booking has been confirmed!
                </Alert>
        )}
        {!success && (
                <Alert className="error" severity="error">
                        <AlertTitle>Error</AlertTitle>
                        There was a problem with your booking. Please try again!
                </Alert>

        )}
        </div>
    );

}

    export default Complete;
