import {FaUsers}from 'react-icons/fa'
import {GiTeacher}from 'react-icons/gi'
import {BiDollar}from 'react-icons/bi'
import './CourseItem.css'
function CourseItem(props){
    return(
        <div className="courseCardWrapper">
            <div className="courseCardImage">
                <img className="courseImage" src={props.image}/>
                <p><FaUsers size='25px'/>
                <span>{props.studentCount}</span>
                </p>
            </div>
            <div className="courseCardContent">
                <h5 className='courseDescription'>{props.title}</h5>
                <p>{props.description}</p>
            </div>
            <div className="courseCardTeacher">
                <p><GiTeacher size='35px' style={{padding:'0 5px'}}/>
               مدرس:{props.teacher}
               </p>
            </div>
            <div className="courseCardFooter">
                <p><button><b>ثبت نام دوره</b></button></p>
                <p>
                    <BiDollar size='25px'/>
                    <b>{props.mainPrice}</b>
                </p>
            </div>



        </div>

    )
}
export default CourseItem