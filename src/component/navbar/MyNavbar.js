import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css';

function MyNavbar(){
    const expand='md'
    return(
<Navbar key={expand} style={{backgroundColor: '#eee'}} expand={expand} >
          <Container fluid>
            <Navbar.Brand  className='lalezar fs-5 ps-4 '
             data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000" style={{color:'purple'}}>فرانت اند گروپ</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  فرانت اند گروپ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <NavLink className='nav-link' to='/'>صفحه اصلی</NavLink>
                  <NavLink className='nav-link' to='/add-article'>ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to='/articles'>مقالات </NavLink>
                  <NavLink className='nav-link' to='/courses'>دوره ها </NavLink>
                  <NavLink className='nav-link' to='/about'> درباره ما</NavLink>
                 </Nav>        
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}
export default MyNavbar;