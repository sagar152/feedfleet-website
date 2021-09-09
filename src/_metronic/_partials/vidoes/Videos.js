
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
import { Paper } from '@material-ui/core';
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
import { TextField } from '@material-ui/core';
// const player = new Plyr('#player');
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        margin: '10rem auto',
        height: '600px',

    },
    modalbg: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        // width:'600px',
        // height:'600px',
        width: '90%',
        margin: '10rem auto',
        height: '600px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    root: {
        flexGrow: 1,
        // maxWidth: 345,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    icons: {
        color: 'red'
    },
    margin: {
        backgroundColor: '#24a2da',
        color: 'white'

    },
    videobtn: {
        backgroundColor: '#e65252',
        color: 'white'
    },
    deletebtn: {
        backgroundColor: "#e65252",
        color: 'white'
    },
   reply: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        width:'80%',
        margin:'10rem auto'
      },
      replypaper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        width:'80%',
        margin:'1.5rem auto'
        // padding: theme.spacing(2, 4, 3),
      },
}));

export function Videos() {
    const classes = useStyles();
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);
    const [modalOpen5, setModalOpen5] = useState(false);
    const [modalOpen6, setModalOpen6] = useState(false);
    const [modalOpen7, setModalOpen7] = useState(false);
    const [modalOpen8, setModalOpen8] = useState(false);
    // const [modalOpen9, setModalOpen9] = React.useState(false);
    // const [modalOpen, setModalOpen] = React.useState(false);


    const handleModalOpen1 = () => {
        setModalOpen1(true);
    };

    const handleModalClose1 = () => {
        setModalOpen1(false);
    };
    const handleModalOpen2 = () => {
        setModalOpen2(true);
    };

    const handleModalClose2 = () => {
        setModalOpen2(false);
    };
    const handleModalOpen3 = () => {
        setModalOpen3(true);
    };

    const handleModalClose3 = () => {
        setModalOpen3(false);
    };
    const handleModalOpen4 = () => {
        setModalOpen4(true);
    };

    const handleModalClose4 = () => {
        setModalOpen4(false);
    };
    const handleModalOpen5 = () => {
        setModalOpen5(true);
    };

    const handleModalClose5 = () => {
        setModalOpen5(false);
    };
    const handleModalOpen6 = () => {
        setModalOpen6(true);
    };

    const handleModalClose6 = () => {
        setModalOpen6(false);
    };
    const handleModalOpen7 = () => {
        setModalOpen7(true);
    };

    const handleModalClose7 = () => {
        setModalOpen7(false);
    };
    const handleModalOpen8 = () => {
        setModalOpen8(true);
    };

    const handleModalClose8 = () => {
        setModalOpen8(false);
    };

    // const [isOpen, setOpen] = useState(false);
    // const [isOpen1, setOpen1] = useState(false);
    // const [isOpen2, setOpen2] = useState(false);
    // const [isOpen3, setOpen3] = useState(false);
    // const [isOpen4, setOpen4] = useState(false);
    // const [isOpen5, setOpen5] = useState(false);
    // const [isOpen6, setOpen6] = useState(false);
    // const [isOpen7, setOpen7] = useState(false);
    // const [isOpen8, setOpen8] = useState(false);
    const [reply, setReply] = useState(false);

    const replyOpen = () => {
      setReply(true);
    };
  
    const replyClose = () => {
      setReply(false);
    };
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={

                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                Video
                                            </Fab>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen1}
                                    onClose={handleModalClose1}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen1}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen1} muted="muted">

                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1602142682962-15.mp4" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }

                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>

                                }

                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen2}
                                    onClose={handleModalClose2}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen2}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="L61p2uyiMSo" onClose={() => setOpen1(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen2} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"

                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="L61p2uyiMSo" onClose={() => setOpen2(false)} /> */}
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen3}
                                    onClose={handleModalClose3}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen3}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen3} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen4}
                                    onClose={handleModalClose4}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen4}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="L61p2uyiMSo" onClose={() => setOpen3(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen4} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="L61p2uyiMSo" onClose={() => setOpen4(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen4} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen5}
                                    onClose={handleModalClose5}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen5}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="L61p2uyiMSo" onClose={() => setOpen5(false)} /> */}
                            </div>
                            {/* onClick={() => setOpen5(true)}  */}
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen5} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen6}
                                    onClose={handleModalClose6}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen6}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen6} videoId="L61p2uyiMSo" onClose={() => setOpen6(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen6} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen7}
                                    onClose={handleModalClose7}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen7}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe
                                                    style={{ width: '100%', height: '600px' }}
                                                    id='vi' title="My Daily Marathon Tracker"
                                                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                                                    allowfullscreen
                                                    allowtransparency
                                                    allow="autoplay"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen7} videoId="L61p2uyiMSo" onClose={() => setOpen7(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen7} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <IconButton aria-label="settings" aria-haspopup="true"
                                            onClick={handleMenu}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                onClick={replyOpen}
                                                aria-label="add"
                                                className={classes.margin}
                                            ><ReplyIcon className={classes.extendedIcon} />
                                                <span style={{ paddingTop: '3px', fontSize: '14px', paddingLeft: '6px' }}>Reply</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.videobtn} KeyboardHideIcon
                                            ><VideocamOffIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Video</span>
                                            </Fab></MenuItem>
                                            <MenuItem onClick={handleClose}><Fab
                                                variant="extended"
                                                size="medium"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.deletebtn}
                                            ><DeleteForeverIcon className={classes.extendedIcon} />
                                                <span style={{ fontSize: '14px', paddingLeft: '6px' }}>Delete</span>
                                            </Fab></MenuItem>

                                        </Menu>
                                    </div>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    className={classes.modal}
                                    id='modal1'
                                    open={modalOpen8}
                                    onClose={handleModalClose8}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={modalOpen8}>
                                        <div className={classes.modalbg} id="fade1">
                                            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
                                            <div class="plyr__video-embed" id="player" >
                                                <iframe style={{ width: '100%', height: '600px' }} src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" title="My Daily Marathon Tracker"></iframe>
                                            </div>
                                        </div>
                                    </Fade>
                                </Modal>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen8} videoId="L61p2uyiMSo" onClose={() => setOpen8(false)} /> */}
                            </div>
                            <CardMedia title="Paella dish">
                                <video width="100%" onClick={handleModalOpen8} muted="muted" >
                                    <source src="https://feedfleetmaster.s3.ap-south-1.amazonaws.com/videos/1620747543597-949.mkv" type="video/mp4" />
                                </video>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                </Grid>
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.reply}
        open={reply}
        onClose={replyClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={reply}>
          <div className={classes.replypaper}>
          <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h4 textAlign='center'>Add Reply</h4>
          <form className={classes.root} noValidate autoComplete="off">
              <div style={{ padding:"8px 20px"}}>
              <TextField id="standard-basic" label="Standard" style={{width:"100%" }} />
              </div>
 
 
</form>
          </Paper>
        </Grid>
        </Grid> 
          </div>
        </Fade>
      </Modal>
              
            </div>

        </>
    );
}
