import MyNavbar from "../../component/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// useState for saving data

function AddArticle() {
  const [formData, setFormData] = useState({});
  const navigate=useNavigate();
  const goBack=()=>{
    navigate(-1);
  }

  // resetFormdata for reset after type at article both true or false
  const resetFormdata = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      writter: "",
      readingTime: "",
      category: "",
    });
  };

  // send informations at our db.json localhost in port 5000
  const AddArticleHandler = () => {
    axios
      .post("http://localhost/react/api/articles/", formData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "مقاله جدید با موفقیت اضافه شد",
            timer: 4000,
            timerProgressBar: true,
          });
        }
      })
      // when type wrong port or adress data show error alert
      .catch((error) => {
        Swal.fire({
          title: "!!!مقاله ساخته نشد",
          timer: 4000,
          icon: "error",
          timerProgressBar: true,
        });
      });
    resetFormdata();
  };

  // give and send and save informations in formdata
  const formHandler = (e, propertyName) => {
    setFormData({ ...formData, [propertyName]: e.target.value });
  };
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              onChange={(e) => formHandler(e, "title")}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه </Form.Label>
            <Form.Control
              value={formData.desc}
              onChange={(e) => formHandler(e, "description")}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله بنویسید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              onChange={(e) => formHandler(e, "writter")}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              onChange={(e) => formHandler(e, "category")}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              onChange={(e) => formHandler(e, "image")}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن مقاله</Form.Label>
            <Form.Control
              value={formData.readingTime}
              onChange={(e) => formHandler(e, "readingTime")}
              type="text"
              placeholder="مدت زمان مطالعه مقاله را وارد کنید"
            />
          </Form.Group>
          <Button onClick={AddArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
          <Button  style={{marginRight:'10px'}} onClick={goBack} variant="warning" type="button">
            برگشت به خانه 
          </Button>
        </Form>
      </div>
      
    </>
  );
}
export default AddArticle;
