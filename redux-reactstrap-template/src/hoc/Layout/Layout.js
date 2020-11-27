import React, { Component } from 'react';
import Auxilary from '../../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return(
            <Auxilary>
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
}

export default Layout;

