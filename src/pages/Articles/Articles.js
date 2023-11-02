// import 'Articles.css'
import MyNavbar from "../../component/navbar/MyNavbar";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import ArticleItem from "../../component/article/ArticleItem";
import axios from "axios";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Articles.css";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (sortType == "earliest") {
      getArticlesByOrder("desc", "id");
    } else if (sortType == "oldest") {
      getArticlesByOrder("asc", "id");
    } else if (sortType == "longest") {
      getArticlesByOrder("desc", "readingTime");
    } else if (sortType == "shortest") {
      getArticlesByOrder("asc", "readingTime");
    }
  }, [sortType]);

  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
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
        `http://localhost/react/api/articles/?search=${searchKeyword}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };


  return (
    <>
      <MyNavbar />

      <Container>
        <div className="searchContainer">
          <h1>لیست مقالات</h1>
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 gy-5 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
            {articles.length == 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                <p>مقاله ای یافت نشد!!!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Articles;
