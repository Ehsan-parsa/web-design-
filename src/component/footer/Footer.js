import { Container, Row,Col } from "react-bootstrap";
import {FaTelegram}from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import './Footer.css'
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#eeeeee" fill-opacity="1" 
            d="M0,224L48,240C96,256,192,288,288,256C384,224,480,128,576,101.3C672,75,768,117,864,149.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        
        <footer>
         <Container>
           <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 gy-5 py-3">
            <Col>
            <div className="footer-right">
             <h2 >ارتباط با ما</h2>
              <p><FaTelegram size={'15px'}/> ehsanparsakah@   </p>
              <p><IoLogoWhatsapp size={'15px'}/> **091442710 </p>
              <p><MdEmail size={'15px'}/> ehsanparsa@gmail.com </p>
             </div>
             </Col>
             <Col>
             <h2 className="footer-center">دسترسی سریع</h2>
             <ul className="centerStyle">
                  <NavLink className='nav-link' to='/add-article'>ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to='/articles'>مقالات </NavLink>
                  <NavLink className='nav-link' to='/courses'>دوره ها </NavLink>
                  <NavLink className='nav-link' to='/about'> درباره ما</NavLink> 
            </ul>
            </Col>

             <Col><p className="footer-left">کلیه حقوق مادی و معنوی این سایت<br />متعلق به احسان پارساخواه میباشد</p></Col>
           
             
            
        </Row>
        </Container>
        </footer>
        </>
    )
}
export default Footer;