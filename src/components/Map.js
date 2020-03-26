
export default function Map() {
    return (
        <div className="container">
            <img src="/images/map.png" alt="map"/>
            <a href="https://maps.google.com" target="_blank">
                <div className="overlay">
                    <h2>Click to open map</h2>
                </div>
            </a>
            <style jsx>{`
                .container{
                    height: 300px;
                    width: 100%;
                    position: relative;
                }
                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .overlay{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgb(0,0,0,0.10);
                    transition-duration: 200ms;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                a{
                    opacity: 0;
                    transition-duration: 200ms;
                    font-size: 2em;
                    color: #ffffff;
                    font-family: 'Open Sans',sans-serif;
                }
                .container:hover .overlay{
                    background: rgb(0,0,0,0.60);
                }
                .container:hover a{
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}
