import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    showEmojiPicker() {
        this.setState({ stage: "emoji" });
    }

    savePalette(emoji) {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette);
        this.setState({ stage: "" });
    }

    handleTextChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { hideForm } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div>
                <Dialog open={this.state.stage === "emoji"} onClose={hideForm} aria-labelledby="emoji-dialog">
                    <DialogTitle id="emoji-dialog">Choose an Emoji</DialogTitle>
                    <Picker title="Pick an Emoji" onSelect={this.savePalette} />
                </Dialog>
                <Dialog
                    open={this.state.stage === "form"}
                    onClose={hideForm}
                    aria-labelledby="form-dialog"
                >
                    <DialogTitle id="form-dialog">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a unique name for your new palette to add it to the list.
                        </DialogContentText>
                            <TextValidator
                                label="Palette Name"
                                name="newPaletteName"
                                value={newPaletteName}
                                onChange={this.handleTextChange}
                                fullWidth
                                autoFocus
                                margin="normal"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['Palette Name is required!', 'Palette Name must be unique!']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                        </Button>
                            <Button variant="contained" color="primary" type="submit">Save Palette</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;