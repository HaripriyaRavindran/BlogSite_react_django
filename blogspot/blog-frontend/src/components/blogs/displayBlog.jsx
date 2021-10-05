import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';


const DisplayBlog = (props) => {

    const {myblogs} = props


    const card =
    props.blogs &&
    props.blogs.map((value, index) => (
      <Col sm={1} md={6} lg={4} key={index} className={styles.div_center}>
        <Card className={styles.card}>
            <Card.Body className={styles.text_left}>
                <div className={styles.display_height}>
                    <Card.Title className={styles.card_title}>{value.blog_name}</Card.Title>
                    <Card.Text className={styles.card_text}>
                        {value.blog_desc.slice(0,100)}...
                    </Card.Text>
                </div>
                <hr/> 
                <div className={styles.remain_height}> 
                    <div className={styles.left}>           
                        <Link to={"/singleblog/"+value.blog_id}><Button className={styles.readmore}>Read More</Button></Link>
                    </div>  
                    <div className={styles.right}>
                        <div className={styles.cardicon}>{myblogs && <Link to={"/editblog/"+value.blog_id}><FontAwesomeIcon icon={faPencilAlt} /></Link>}</div>
                        <div className={styles.cardicon}>{myblogs && <FontAwesomeIcon icon={faTrash} onClick={props.onDelete.bind(this,value.blog_id)}/> }</div>
                    </div>
                </div>

            </Card.Body>
        </Card>
      </Col>
      
    ));
    return (
        
        <Container>
            <Row>
                {card}
            </Row>
        </Container>
    )
}

export default DisplayBlog
