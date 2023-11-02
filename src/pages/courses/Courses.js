import MyNavbar from "../../component/navbar/MyNavbar";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import './Courses.css'
import CourseItem from "../../component/course/CourseItem";
function Courses(){
    const [courses, setCourses] = useState([]);
    const [sortType, setSortType] = useState("earliest");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [category,setCategory]=useState('');
    const [categoryState,setCategoryState]=useState('')
  
    useEffect(() => {
      if (sortType == "earliest") {
        getCoursesByOrder("desc", "id");
      } else if (sortType == "oldest") {
        getCoursesByOrder("asc", "id");
      } else if (sortType == "expensivest") {
        getCoursesByOrder("desc", "mainPrice");
      } else if (sortType == "cheapest") {
        getCoursesByOrder("asc", "mainPrice");
      }
    }, [sortType]);

    useEffect(()=>{
      if(category=='frontend')
      getCoursesByCategory('فرانت اند')
    else if(category=='backend')
    getCoursesByCategory('بک اند')

    },[category]);

    useEffect(()=>{
      if(categoryState=='completed')
      getCoursesByState('completed')
    else if(categoryState=='presell')
    getCoursesByState('presell')
  else if(categoryState=='recording')
    getCoursesByState('recording')
    

    },[categoryState]);
  
    const getCoursesByOrder = (order, column) => {
      axios
        .get(
          `http://localhost/react/api/courses/?order=${order}&column=${column}`
        )
        .then((response) => setCourses(response.data.data));
    };

    const getCoursesByCategory = (category) => {
      axios
        .get(
          `http://localhost/react/api/courses/?category=${category}`
        )
        .then((response) => setCourses(response.data.data));
    };

    const getCoursesByState = (state) => {
      axios
        .get(
          `http://localhost/react/api/courses/?state=${state}`
        )
        .then((response) => setCourses(response.data.data));
    };
  
    const sortHandler = (e) => {
      setSortType(e.target.id);
    };

    const searchInputHandler = (e) => {
      setSearchKeyword(e.target.value);
    };

    const buttonHandler = () => {
      axios
        .get(
          `http://localhost/react/api/courses/?search=${searchKeyword}&column=title`
        )
        .then((response) => setCourses(response.data.data));
    };

    const categoryHandler=(e)=>{
      setCategory(e.target.value)
    }

    const categoryStateHandler=(e)=>{
setCategoryState(e.target.value)
    }
  
    return (
      <>
        <MyNavbar />
  
        <Container>
          <div className="searchContainer">
            <h1>لیست دوره ها</h1>
            <div className="searchBox">
              <input
                type="text"
                className="searchInput"
                onChange={searchInputHandler}
              />
              <button className="searchButton" onClick={buttonHandler}>
                جستجو
              </button>
            </div>
          </div>
          <Row>
            <Col className="col-12 col-lg-3">
              <Accordion alwaysOpen className="py-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaSort size="20px" />
                    <b>مرتب سازی</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Check
                        type="radio"
                        id="earliest"
                        name="sort"
                        label="جدیدترین"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="oldest"
                        name="sort"
                        label="قدیمی ترین"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="expensivest"
                        name="sort"
                        label="گران ترین"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="cheapest"
                        name="sort"
                        label="ارزان ترین"
                        onChange={sortHandler}
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
               <div className="filterWrapper">
                <div className="filterIcon">
                    <MdCategory size='20px'/>
                    <b>دسته بندی</b>
                </div>
                <Form>
                   <Form.Check
                   type="checkbox"
                   value='frontend'
                   label="فرانت اند"
                   onChange={categoryHandler}
                   checked={category== 'frontend' ?true:false}
                   />
                      <Form.Check
                   type="checkbox"
                   value='backend'
                   label='بک اند'
                   onChange={categoryHandler}
                   checked={category== 'backend' ?true:false}
                   />
                </Form>

               </div>
               <div className="filterWrapper">
                <div className="filterIcon">
                    <FiFilter size='20px'/>
                    <b> وضعیت دوره ها</b>
                </div>
                <Form>
                   <Form.Check
                   type="switch"
                   value='completed'
                   label="تکمیل شده"
                   onChange={categoryStateHandler}
                   checked={categoryState== 'completed' ?true:false}
                   />
                      <Form.Check
                   type="switch"
                   value='presell'
                   label='پیش فروش'
                   onChange={categoryStateHandler}
                   checked={categoryState== 'presell' ?true:false}
                   />
                          <Form.Check
                   type="switch"
                   value='recording'
                   label='درحال ضبط'
                   onChange={categoryStateHandler}
                   checked={categoryState== 'recording' ?true:false}
                   />
                </Form>

               </div>
              </Accordion>
            </Col>
            <Col className="col-12 col-lg-9">
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 gy-5 py-3">
                {courses.map((course) => (
                  <Col key={course.id}>
                    <CourseItem {...course} />
                  </Col>
                ))}
              </Row>
              {courses.length == 0 && (
                <Alert variant="warning" className="py-3 gy-4 mt-2">
                  <p>دوره ای یافت نشد!!!!</p>
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Courses