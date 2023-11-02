import './HeroBox.css'
import CountUp from 'react-countup';
function HeroBox({title,count,children}){
    return(
        <>
        <div className="heroBoxcontainer">
            <div className="heroboxheader">
                {children}
                <b className='heroboxTittel'>{title} </b>
            </div>
            <p className="heroboxcount">
            <CountUp
            start={0}
            end={count}
            delay={.5}
            separator=''
            duration={5}
            />
            </p>
        </div>
        </>
    )
}
export default HeroBox