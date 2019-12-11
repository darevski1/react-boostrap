import React, { Component } from 'react';
import Layout from './components/Layout';
import Example from './hooks/counter';

class Hooks extends Component {
    state = {  }
    render() { 
        return (
        <Layout>
            
            
            <div>Hooks</div>
            <Example/>

        </Layout>
      

        
        );
    }
}
 
export default Hooks;