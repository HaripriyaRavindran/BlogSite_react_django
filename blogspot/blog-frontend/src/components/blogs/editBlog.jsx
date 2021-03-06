import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import { Redirect } from 'react-router-dom';

const PostBlog = (props) => {
    const [name , setName] = useState("");
    const [desc , setDesc] = useState("");
    const [content , setContent] = useState("");

    const {isLogin, username, password, refresh } = localStorage

    useEffect(()=>{
        if(!localStorage.getItem("isLogin") ){
            props.history.push("/")
            }
        var config = {
            method: 'get',
            url: 'http://localhost:8000/blogs/blogapi/'+props.match.params.id,
            headers: { 
                'Authorization': 'Bearer '+localStorage.getItem('access') 
              }
        };      
        axios(config).then(
            (response) => {
                setName(response.data.blog_name);
                setDesc(response.data.blog_desc);
                setContent(response.data.blog_content);
            }
        ).catch(
            (error)=>{
                console.log(error.response);
                if(error.response.data.code=="token_not_valid"){
                    axios.post("http://localhost:8000/api/token/refresh/",
                    { "username" :username , "password" : password, "refresh" : refresh})
                    .then((response)=>{
                        console.log("refreshing");
                        localStorage.setItem("access",response.data.access)
                        window.location.reload()
                    }).catch(
                        (error)=>{
                            localStorage.clear()
                            props.history.push("/")
                        }
                    )
                }
            } 
        )     
    },[]);

    
    const getName = (event) =>{
        setName(event.target.value)
    }
    const getDesc = (event) =>{
        setDesc(event.target.value)
    }
    const getContent = (event) =>{
        setContent(event.target.value)
    }
    const putsubmit = (e) =>{
        
        e.preventDefault();
        axios
          .put("http://localhost:8000/blogs/blogapi/"+props.match.params.id, 
          { "user_id":localStorage.getItem("id"),"blog_name" : name, "blog_desc" : desc, "blog_content" : content},
          { headers: {'Authorization': 'Bearer '+localStorage.getItem('access')}}
          )
          .then((response) => {
            console.log("here");
            props.history.push("../users/"+localStorage.getItem("id"));
          })    
        
    }

    return (
        <section id="postblog">
            <Container className={styles.logindiv}>
                <div className={styles.postcard}>
                    <form onSubmit={putsubmit}>
                        <fieldset className={styles.postfield}>
                            <legend>EDIT A BLOG</legend>
                            <div className={styles.inputdiv}>
                                <label htmlFor="name">Blog Name</label>
                                <textarea name="name" id="name" onChange={getName} value={name} rows="3" col="10">{name}</textarea>
                            </div>
                            <div className={styles.inputdiv}>
                                <label htmlFor="desc">Blog Description</label>
                                <textarea name="desc" id="desc" onChange={getDesc} value={desc} rows="3" col="10">{desc}</textarea>
                            </div>
                            <div className={styles.inputdiv}>
                                <label htmlFor="content">Blog Content</label>
                                <textarea name="content" id="content" onChange={getContent} value={content} rows="3" col="10">{content}</textarea>
                            </div>
                            <div className={styles.buttondiv}>
                                <Button className={styles.readmore} type="submit">EDIT BLog</Button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default PostBlog

