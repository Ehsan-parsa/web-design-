import './Hero.css'
import { Container,Row,Col } from 'react-bootstrap';
import heroImage from '../../assets/pic/heroImage.svg'
import HeroBox from '../heroBox/HeroBox';
import {FaUserAlt,FaCode} from 'react-icons/fa'
import { MdArticle } from 'react-icons/md';
import {ImBooks} from 'react-icons/im'
import {BsFillSkipStartFill} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Hero(){
    useEffect(()=>{
        Aos.init()
    })
    return(
        <>
        <div className='heroContainer'>
            <Container>
                <Row className='align-item-center'>
                    <Col className='col-12 col-md-6' 
                     data-aos="fade-left"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration='1900'
                     data-aos-delay="700">
                        <img src={heroImage} className='heroimg img-fluid' />
                    </Col>
                    <Col className='col-12 col-md-6' data-aos="zoom-in" data-aos-duration='2500' data-aos-delay="800">
                        <h2 className='herotitle'>آمارها باعث افتخار ماست</h2>
                        <Row className='justify-content-center row-cols-1 row-cols-xl-2 gy-4' >
                            <Col>
                            <HeroBox title='تعداد دانشجو' count={3500}>
                                <FaUserAlt size='40px'/>
                            </HeroBox>
                            </Col>

                            <Col>
                            <HeroBox title='تعداد مقاله ' count={214}>
                                <MdArticle size='40px'/>
                            </HeroBox>
                            </Col>

                            <Col>
                            <HeroBox title='تعداد دوره' count={15}>
                                <ImBooks size='40px'/>
                            </HeroBox>
                            </Col>

                            <Col>
                            <HeroBox title='پروژه موفق ' count={57}>
                                <FaCode size='40px'/>
                            </HeroBox>
                            </Col>
                        </Row>
                        <p className="startLearning">
                            <b>شروع آموزش</b>
                            <BsFillSkipStartFill size='40px'/>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#eee" fill-opacity="1"
             d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,181.3C672,171,768,117,864,85.3C960,53,1056,43,1152,74.7C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">

             </path>
            </svg>
        </>

    )
}
export default Hero;