import Carousel from 'react-bootstrap/Carousel';
import slider5 from '../../assets/pic/slider5.jpg';
import slider6 from '../../assets/pic/slider6.jpg';
import slider7 from '../../assets/pic/slider7.jpg';
import './Slider.css'
function Slider(){
    return(
<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> web developer</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>React.js</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider7}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default Slider;