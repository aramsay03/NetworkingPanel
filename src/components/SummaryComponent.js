import React from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import WifiIcon from '@material-ui/icons/Wifi';
import SpeedIcon from '@material-ui/icons/Speed';
<<<<<<< HEAD
=======
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
>>>>>>> develop

const variant = 'body2'

function SummaryComponent(props) {
    return (
        
        <Grid
        container
        direction="row"
        justify='space-around'
        alignItems='center'
        style = {{
            height: '100%',
        }}
        >
            <Box
            style={{
                textAlign: 'center',
            }}> 
            <WifiIcon/>
            <Typography variant={variant} align='center'> Connections </Typography>
            <Typography variant={variant} align='center'>{props.connectedDevices}</Typography>
            </Box>

            <Box
            style={{
                textAlign: 'center',
            }}>
            <SpeedIcon
            style={{fill: '#69E067'}}
            />
            <Typography variant={variant} align='center'>Download Speed </Typography>
            <Typography variant={variant} align='center'>{props.downloadSpeed} Mbs</Typography>
            </Box>

            <Box
            style={{
                textAlign: 'center',
            }}>
            <SpeedIcon
            style={{fill: '#FF1053'}}
            >
            </SpeedIcon>    
            <Typography variant={variant}align='center'>Upload Speed</Typography>
            <Typography variant={variant} align='center'>{props.uploadSpeed} Mbs </Typography>
            </Box>
        </Grid>
        
    )
} 

export default SummaryComponent;

