import { useEffect, useState } from "react";
import ArticleItem from "../../component/article/ArticleItem";
import MyNavbar from "../../component/navbar/MyNavbar";
import Footer from "../../component/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Article from "../article/Article";
import Slider from "../../component/slider/Slider";
import Hero from "../../component/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperButton from "../../component/swiperbutton/SwiperButton";
import "./Home.css";
import CourseItem from "../../component/course/CourseItem";

function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=8")
      .then((response) => setCourses(response.data.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <Slider />

      <Container>
        {/* <h1 style={{marginTop:'20px',textAlign:'center'}}>لیست مقالات</h1>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-5 py-3">
           {articles.map((article) =>(
             <Col key={article.id}>
             <ArticleItem {...article}/>
             </Col>
              )) }
       
          </Row> */}
     
       <Row className="py-3">
          <Swiper
            className="swiperStyle"
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={15}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 1 },
            }}
          >
            <div className="swiperTopSection">
              <h2>جدیدترین دوره ها</h2>
              <SwiperButton />
            </div>

            {courses.map((course) => (
              <SwiperSlide>
                <CourseItem {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>

        <Row className="py-3">
          <Swiper
            className="swiperStyle"
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={15}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              500: { slidesPerView: 1 },
            }}
          >
            <div className="swiperTopSection">
              <h2>قدیمی ترین مقالات</h2>
              <SwiperButton />
            </div>

            {articles.map((article) => (
              <SwiperSlide>
                <ArticleItem {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
