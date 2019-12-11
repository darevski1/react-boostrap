import React, { Component } from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import mountImage from '../assets/images/mountain.jpg';

const Styles = styled.div`
    .jumbotron {
        padding: 12rem 1rem;
        background-image: url(${mountImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0;
        h1 {
            color:#fff;
            font-size:8rem;
            font-weight:bold;
            padding-left:25px;
        }
        p {
            font-size:3rem;
            color:#fff;
            padding-left:25px;

        }
    }
`;

class Jumbotron extends Component {
   
    render() { 
        return ( 

            <Styles>
                <Jumbo>
                <h1>ReactJS!</h1>
                <p>
                Build a website with React, React-Bootstrap,<br/> React-Router and Styled-Components
                </p>
                <p>
                </p>
                </Jumbo>
            </Styles>
         );
    }
}
 
export default Jumbotron;

