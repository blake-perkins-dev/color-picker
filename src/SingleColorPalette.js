import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './PaletteFooter';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex", open: false };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1);
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
        const { paletteName, emoji, id } = this.props.palette;
        const { format, open } = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                        <Link to={`/palette/${id}`} className="go-back ColorBox">
                            <div className="back-button">GO BACK</div>
                        </Link>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} format={format} open={open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default SingleColorPalette;