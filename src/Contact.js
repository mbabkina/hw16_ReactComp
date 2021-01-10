import React from 'react';
import './Contact.css';

const greyColor = 'rgb(112, 107, 107)'
const contactIcon = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="contact-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill={greyColor} d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
const male = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mars" className="contact-gender" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill={greyColor} d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>
const female = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus" className="contact-gender" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill={greyColor} d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>
const genderless = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="genderless" className="contact-gender" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill={greyColor} d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"></path></svg>

const Contact = (props) => {
    return ( 
        <div className="contact" key={props.i}>

            {contactIcon}

            <p className="contact-name" key={props.i}>
                {props.firstName} {props.lastName}
            </p>
            <span className="contact-number" key={props.i}>
                {props.phone}
            </span>
            
            {props.gender==='male'? male : (props.gender==='female'? female : genderless) }
    </div>
)
}


export default Contact