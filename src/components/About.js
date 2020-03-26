
export default function About() {
    const bgSource = "/images/bg-1.jpg";
    const dividerTopSource = "/images/divider-top.svg";
    const dividerBotSource = "/images/divider-bot.svg";
    return (
        <div className="container">
            <div className="content">
                <img src={dividerTopSource} className="divider top" alt="divider" />
                <div className="header">
                    <h1>Our Story</h1>
                    <a href="#details">Learn more</a>
                </div>
                <div className="box">
                    <p>
                        <span>At Guru Palace Indian Restaurant, we offer distinctive cuisine in an informal, friendly setting.</span>
                        <br /><br /><span>Our restaurant enjoys a reputation for impeccable service, elegant Asian-style décor, and exquisite Indian food.</span>
                        <br /><br /><span>Dining at our restaurant is like visiting India without leaving your hometown–an exciting blend of authentic Indian food, culture, and atmosphere awaits.</span>
                    </p>
                </div>
                <img src={dividerBotSource} className="divider bot" alt="divider" />
            </div>
            <style jsx>{`
                .container{
                    background: url(${bgSource}) no-repeat center center fixed; 
                    background-size: cover;
                    // min-height: 100vh;
                    position: relative;
                }
                .content {
                    color:#f1f1f1;
                    background-color: rgba(0, 0, 0, 0.7);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0;
                    text-align: center;
                }
                h1{
                    font-weight: bold;       
                    font-family: 'Pacifico', cursive;
                    font-size: 2em;
                    color: #e4d9ad;
                }
                a{
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover{
                    text-decoration: underline;
                }
                .header{
                    margin: 9px auto 9px auto;
                    width: 90%;
                    max-width: 600px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: baseline;
                }
                .divider.top{
                    margin: 80px auto 9px auto;
                    width: 300px;
                    fill: #e4d9ad;
                }
                .divider.bot{
                    margin: 30px auto 80px auto;
                    width: 300px;
                }
                .box{
                    background: rgba(0, 0, 0, 0.75);
                    max-width: 600px;
                    padding: 1.1em;
                    margin: 1em auto;
                }
                .box p {
                    font-weight: bold;
                    font-size: 1em;
                    line-height: 1.4;
                    text-align: left;
                }
            `}</style>
        </div>
    )
}
