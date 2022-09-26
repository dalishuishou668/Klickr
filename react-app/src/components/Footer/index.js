import './Footer.css';


function Footer() {

    const techList = ['Python', 'Flask', 'React', 'Redux', 'Javascript', 'SQLAlchemy', 'PostgreSQL', 'HTML5', 'CSS3', 'AWS'];

    return (
        <div className='footerContainer'>
            <div className='techUsed'>
                {techList.map((ele) => {
                    return <div key={ele}>{ele}</div>
                })}

            </div>
            <div className='developerInfo'>
                <div className='developerText'>Created by Qiaoyi Liu</div>
                <a href='https://www.linkedin.com/in/qiaoyi-joyce-liu-623204241/' target="_blank" >
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href='https://github.com/dalishuishou668' target="_blank">
                    <i class="fa-brands fa-square-github"></i>
                </a>
            </div>

        </div>
    )
}


export default Footer;
