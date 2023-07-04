import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TopBar() {
  return (
    <Navbar expand="lg" className="bg-color-dark">
      <Container className=''>
        
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link style={{"color":"green","positon":"center","fontWeight":"bold"}}>Springboot React Fullstack Application</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;