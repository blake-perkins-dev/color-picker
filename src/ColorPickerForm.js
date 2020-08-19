import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const styles = {
    container: {
        width: "100%"
    },
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
}

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currentColor: "purple", newColorName: "" }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    handleColorChange = (color) => {
        this.setState({ currentColor: color.hex });
    };

    handleTextChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit() {
        const newColor = { color: this.state.currentColor, name: this.state.newColorName };
        this.props.addNewColor(newColor);
        this.setState({newColorName: ""});
    }

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div className={classes.container}>
                <ChromePicker color={currentColor} onChange={this.handleColorChange} className={classes.picker} />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        label="Color Name"
                        className={classes.colorNameInput}
                        variant="filled"
                        margin="normal"
                        onChange={this.handleTextChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Color Name is required!', 'Color Name must be unique!', 'Color already used!']}
                    />
                    <Button variant="contained" type="submit" color="primary" disabled={paletteIsFull}  className={classes.addColor} style={{ backgroundColor: paletteIsFull ? "gray" : currentColor }}>
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);