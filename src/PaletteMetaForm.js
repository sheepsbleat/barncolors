import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import randomName from "./utils/Name";

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: randomName()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { newPaletteName } = this.state;

        return (
                
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby='form-dialog-title'
                >
                    <DialogTitle id='form-dialog-title'>Choose A Palette Name</DialogTitle>
                    <ValidatorForm
                        onSubmit={() => this.props.handleSubmit(newPaletteName)}
                    >  
                    <DialogContent>
                            <DialogContentText>
                                This name will be displayed under the palette preview on the home page.
            </DialogContentText>

                            <TextValidator
                                fullWidth
                                margin="normal" 
                                label='Palette Name'
                                value={newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color='primary'>
                                Cancel
            </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Save Palette
              </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
        );
    }
}
export default PaletteMetaForm;