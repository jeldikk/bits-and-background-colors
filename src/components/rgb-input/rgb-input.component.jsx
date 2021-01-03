import React, { Component } from 'react'

import {Form, Row, Col} from 'react-bootstrap'

import "./rgb-input.styles.scss"

import {connect} from 'react-redux'
import {setRedValue, setBlueValue, setGreenValue} from "../../redux/rgb/rgb.actions"

export class RgbInput extends Component {

    state = {
        valueType: 'decimal',
        redValue: 209,
        greenValue: 223,
        blueValue: 234
    }

    onValueTypeChanges = (event) => {
        this.setState({valueType: event.target.value})
    }

    onColorValueChanged = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        let parsedValue = -1
        if(value.length === 0){
            parsedValue = 0;
        }
        else{
            parsedValue = parseInt(value)
        }
        
        switch(name){
            case 'redValue':
                this.props.setRed(parsedValue)
                break;
            case 'greenValue':
                this.props.setGreen(parsedValue);
                break;
            case 'blueValue':
                this.props.setBlue(parsedValue);
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className="rgb-input">
                
                <Form>
                    <Form.Group >
                        {/* // <Form.Check inline type="radio" checked={this.state.valueType === 'hex' ? true : false} label="Hex Value" value="hex" onChange={this.onValueTypeChanges} name="typeSelectionHex" /> */}
                        <Form.Check inline type="radio" checked={this.state.valueType === 'decimal' ? true : false} label="Decimal Value" value="decimal" onChange={this.onValueTypeChanges} name="typeSelectionDecimal" />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col xs={12} sm={4}>
                            <Form.Label>Red</Form.Label>
                            <div className="d-flex">
                                <Form.Control type="text" placeholder="RED" name="redValue" value={this.props.redValue} onChange={this.onColorValueChanged} />
                                <span style={{backgroundColor: `rgb(${this.props.redValue},0,0)`}} className="shades"></span>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Form.Label>Green</Form.Label>
                            <div className="d-flex">
                                <Form.Control type="text" placeholder="GREEN" name="greenValue" value={this.props.greenValue} onChange={this.onColorValueChanged} />
                                <span style={{backgroundColor: `rgb(0,${this.props.greenValue},0)`}}className="shades"></span>
                            </div>
                            
                        </Col>
                        <Col xs={12} sm={4}>
                            <Form.Label>Blue</Form.Label>
                            <div className="d-flex">
                                <Form.Control type="text" placeholder="BLUE" name="blueValue" value={this.props.blueValue} onChange={this.onColorValueChanged}/>
                                <span style={{backgroundColor: `rgb(0,0,${this.props.blueValue})`}}className="shades"></span>
                            </div>
                        </Col>
                    </Form.Group>
                </Form>
                    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRed: (value) => dispatch(setRedValue(value)),
        setGreen: (value) => dispatch(setGreenValue(value)),
        setBlue: (value) => dispatch(setBlueValue(value))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        redValue: state.rgb.red,
        greenValue: state.rgb.green,
        blueValue: state.rgb.blue
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RgbInput);
