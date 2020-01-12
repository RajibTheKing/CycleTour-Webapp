import React from 'react';
import FooterBottom from './components/FooterBottom';
import FooterWidgets from './components/FooterWidgets';

class Footer extends React.Component {
    render(){
        return(
            <footer className="position-relative z-index-10 d-print-none">
                <FooterWidgets />
                <FooterBottom />
            </footer>
        )
    }
}

export default Footer;