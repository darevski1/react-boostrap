import React, { Component } from 'react';
import { Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components'; 

const Style = styled.div`
    header {
        padding: 3% 0;
        position: relative
        h4{
            padding: 6% 0;
            text-align:center;
        }
    }

    .container-fluid {
        width: 100%;
        padding-right: 0;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
    }
   
`;

class Components extends Component {
     
    render() { 
        return (
        <Style>
            <Container fluid={true}>
            <Row noGutters={true}>
            <Col xs lg="2">
                <header>
                    <h4>Getting started</h4>
                </header>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Introduction</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Col>
            <Col xs lg="10">

                  <section className="section">
                    <div className="container">
                      <div className="heading">
                        <h4 className="title">Section</h4>
                        <h5 className="subtitle">
                          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                        </h5>
                        <p>In the css above I’ve set top and bottom paddings on both elements. Setting it on the child will make sure the contents in the child will be vertically centered and setting it on the parent ensures the entire child is centered within the parent.</p>
                      </div>
                    </div>
                  </section>
            </Col>
            </Row>
          </Container>
          </Style>
          );
    }
}
 
export default Components;