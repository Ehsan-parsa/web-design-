import './SwiperButton.css'
import { useSwiper } from 'swiper/react';
import {GrNext,GrPrevious} from 'react-icons/gr'
function SwiperButton(){
    const swipe=useSwiper()
    return(
<div className="swiperBtn">
    <button onClick={()=>swipe.slidePrev()}><GrNext size='25px'/></button>
    <button onClick={()=>swipe.slideNext()}><GrPrevious size='25px'/></button>
</div>
    )
}
export default SwiperButton;