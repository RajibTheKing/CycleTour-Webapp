import React from 'react';
import FooterWidgets from './components/FooterWidgets';

class Footer extends React.Component {
    render(){
        return(
            <footer className="position-relative z-index-10 d-print-none">
                <FooterWidgets />
            </footer>
        )
    }
}

export default Footer;