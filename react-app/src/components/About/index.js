import React from 'react';
import './About.css'

function About() {
    return (
        <div className='aboutOutContainer'>
            <div className='aboutSubcontainer'>
                <div className='photoContainer'>
                <img className='developerPhoto' src="https://media-exp1.licdn.com/dms/image/C4D03AQGk5rQvlCZ_yA/profile-displayphoto-shrink_400_400/0/1654710587613?e=1664409600&v=beta&t=ZDV4dpaekhMtnq8dTWBKs02sAcnUTE_frRgSbE8OI7o" alt='Joyce' />
                </div>

                <div>
                    <div className='name'>Qiaoyi Liu</div>
                </div>

                <div className='aboutLinks'>

                    <a href="https://github.com/dalishuishou668" target="popup">
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/qiaoyi-joyce-liu-623204241/"
                        target="popup"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>



                </div>
            </div>
        </div>
    )
}

export default About;
