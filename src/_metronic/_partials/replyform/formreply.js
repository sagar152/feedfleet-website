
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MenuItem } from '@material-ui/core';
import { Menu } from '@material-ui/core';

import VideocamOffIcon from '@material-ui/icons/VideocamOff';
// import ModalVideo from 'react-modal-video'
// import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { Backdrop } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// import Plyr from 'plyr';
import '../../../style/editreview.css'
import { Fab } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// const player = new Plyr('#player');
const useStyles = makeStyles((theme) => ({

}));

export function Replyform() {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >

                        </Grid>
                          
                </Grid>
            </div>

        </>
    );
}
