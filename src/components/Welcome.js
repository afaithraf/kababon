
export default function Welcome() {
    const videoSource = "/videos/steak.mp4";
    const logoSource = "/images/logo.png";

    return (
        <div className="container">
            <video autoPlay="autoplay" loop="loop" muted className="video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
        </video>

            <div className="content">
                <div>
                    <img alt="logo" src={logoSource} />
                </div>
                <div>
                    <h1>Where food speaks your language</h1>
                </div>
                <div>
                    <button>
                        Book Now
                    </button>
                </div>
            </div>

            <style jsx>{`
                .container{
                    height: 100vh;
                    position: relative;
                    overflow: hidden;
                }
                .video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                  
                .content {
                    position: absolute;
                    top: 0;
                    color:#f1f1f1;
                    background-color: rgba(0, 0, 0, 0.3);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    text-align: center;
                }
                .content>div {
                    display: block;
                    margin: 16px 30px;
                }
                h1{
                    font-size: 60px;
                    font-weight: bold;
                    font-family: 'Dancing Script', cursive;
                }
                button {
                    color: #ffffff;
                    border: 2px solid #FF4136;
                    font-size: 1em;
                    padding: 11px 57px;
                    font-weight: 700;
                    font-family: 'Open Sans',sans-serif;
                    transition-duration: 500ms;
                    background-color: rgb(208, 178, 57, 0);
                }
                button:hover{
                    background-color: #FF4136;
                    border-color: #FF4136;
                }
            `}</style>
        </div>
    )
}
