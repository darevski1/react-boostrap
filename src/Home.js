import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import {Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.p`
   col{
       margin-top:200px;
   }
    h3{
        color:#5B4B7E;
        font-size:34px;
    }
    p {
        color:#aaaaaa;
        font-size:18px;
    }
`;

class Home extends Component {
    render() {
        return (<div>
            <Jumbotron />
            <Styles>
            <Container>
                <Row>
                    <Col xs={6} md={4}>

                        <h3>Rebuilt with React</h3>
                        <p>
                            React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                    </p>
                        <p>
                            As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
                    </p>

                    </Col>
                    <Col xs={6} md={4}>
                        <h3>Bootstrap at its core</h3>
                        <p>
                            Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.
                    </p>
                        <p>
                            By relying entirely on the Bootstrap stylesheet, React- Bootstrap just works with the thousands of bootstrap themes you already love.s
                    </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h3>Accessible by default</h3>
                        <p>The React component model gives us more control over form and function of each component.</p>
                        <p>Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</p>
                    </Col>
                </Row>
                </Container>
            </Styles>
        </div>);
    }
}

export default Home;