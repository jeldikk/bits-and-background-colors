import React, { Component } from 'react'

import "./content.styles.scss"

import {Container} from 'react-bootstrap'

import RgbInput from "../rgb-input/rgb-input.component"

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <Container>
                    <RgbInput />
                </Container>
            </div>
        )
    }
}

export default Content
