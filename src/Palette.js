import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './PaletteFooter';
import './Palette.css';

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
        this.setState({open: false});
    }
    render() {
        const { colors, paletteName, emoji } = this.props.palette;
        const { level, format, open } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox key={color.id} background={color[format]} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji} format={format} open={open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default Palette;