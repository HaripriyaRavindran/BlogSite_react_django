import React from 'react'
import Container from 'react-bootstrap/Container'
import stylecss from "./landing.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons' ;
import {Link } from 'react-router-dom';

function Landing() {
    return (
        <section className={stylecss.container}>
            <header className={stylecss.flexcenter}>      
                <h1>Publish your passions, your way</h1>
                <h3>Create a unique and beautiful blog. It’s easy and free.</h3>
                <Link to="/login" className={stylecss.cta}>Create your blog
                <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                
           </header>
       </section>
       
    )
}

export default Landing
