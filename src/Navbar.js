import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" };
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }
    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to='/'>reactcolorpicker</Link>
                </div>
                {showingAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange} >
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,1)</MenuItem>
                        <MenuItem value="hsl">HSL - hsl(0,0%,0%)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);