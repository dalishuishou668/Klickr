import './Footer.css';


function Footer() {

    const techList = ['Python', 'Flask', 'React', 'Redux', 'SQLAlchemy', 'PostgreSQL', 'HTML5', 'CSS3'];

    return (
        <div className='footerContainer'>
            <div className='techUsed'>
                {techList.map((ele) => {
                    return <div key={ele}>{ele}</div>
                })}

            </div>
            <div>
                <div className='created'>Created by Qiaoyi Liu</div>
                <a href='https://www.linkedin.com/in/qiaoyi-joyce-liu-623204241/' >
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href='https://github.com/dalishuishou668' >
                    <i class="fa-brands fa-square-github"></i>
                </a>
            </div>

        </div>
    )
}


export default Footer;
