import {
    NavLink
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import '../index.css'
import logo from './logo.png';

const Navbarui = () => {
    return (
        <Navbar   expand="lg"  variant="dark">
            <Container className="nav">
                <Navbar.Brand >
                <NavLink  className='navlink' to="/">  <img src={logo} width='72.06px' height='51.23px' className="" alt="" /><span >&nbsp;NoisyPanda</span></NavLink>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="s" >
                        <NavLink className='navlink'  to="/dashboard">My Account</NavLink>
                        <NavLink className='navlink' to="/createnft">Create NFT</NavLink>
                        <NavLink className='navlink'  to="/marketplace">MarketPlace</NavLink>
                        
                    </Nav>
                    <Nav className="c">
                        
                            <Button  variant="outline-light">Connect Wallet</Button>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navbarui;