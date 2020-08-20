import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteFooterStyles';

class PaletteFooter extends Component {
    render() {
        const { paletteName, emoji, format, open, handleClose, classes } = this.props;
        return (
            <div>
                <footer className={classes.PaletteFooter}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </footer>
                <div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={3000}
                        message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
                        ContentProps={{ "aria-describedby": "message-id" }}
                        onClose={handleClose}
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteFooter);