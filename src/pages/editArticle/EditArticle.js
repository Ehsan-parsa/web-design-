import axios from "axios";
import { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import MyNavbar from "../../component/navbar/MyNavbar";
import {Form,Button}from 'react-bootstrap'
import Swal from "sweetalert2";


function EditArticle(){
    const[articleData,setArticleData]=useState({});
    const articleId=useParams().articleId
    const navigate=useNavigate();
  const goBack=()=>{
    navigate(-1);
  }

    useEffect(()=>{
        axios.get(`http://localhost/react/api/articles/?id=${articleId}`)
        .then(response=>setArticleData(response.data.data[0]))
    },[])

    // const resetFormdata = () => {
    //     setArticleData({
    //       title: "",
    //       desc: "",
    //       image: "",
    //       writter: "",
    //       readingtime: "",
    //       category: "",
    //     });
    //   };

    const editArticleHandler=()=>{
     axios.put(`http://localhost/react/api/articles/?id=${articleId}`,articleData)
     Swal.fire({
        title:'ویرایش مقاله با موفقیت به اتمام رسید',
        icon:'success',
        timer:1600,
        timerProgressBar:true,
        showCancelButton:false
     })
    //  resetFormdata()
     navigate('/');
    }

    const formHandler=(e,propertyName)=>{
     setArticleData({...articleData,[propertyName]:e.target.value})
    }
    return(
        <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              onChange={(e) => formHandler(e, "title")}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه </Form.Label>
            <Form.Control
              value={articleData.description}
              onChange={(e) => formHandler(e, "description")}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله بنویسید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              onChange={(e) => formHandler(e, "writter")}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              onChange={(e) => formHandler(e, "category")}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              onChange={(e) => formHandler(e, "image")}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن مقاله</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              onChange={(e) => formHandler(e, "readingTime")}
              type="text"
              placeholder="مدت زمان مطالعه مقاله را وارد کنید"
            />
          </Form.Group>
          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
          <Button  style={{marginRight:'10px'}} onClick={goBack} variant="warning" type="button">
            برگشت به خانه 
          </Button>
        </Form>
      </div>
    </>
    )
}
export default EditArticle;