import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './PaletteFooter';
import styles from './styles/PaletteStyles'
import { withStyles } from '@material-ui/core/styles';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex", open: false };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(value) {
        this.setState({ format: value, open: true });
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format, open } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox key={color.id} background={color[format]} name={color.name} id={color.id} paletteId={id} showingFullPalette={true} />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true} />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji} format={format} open={open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);