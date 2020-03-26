import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function Menu() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className="container">
            <div className="header">
                <h1>Our Menu</h1>
            </div>
            <div className="content">
                {
                    photos.map((x, i) => {
                        return(<div className="item" key={i}>
                            <img alt="restaurant menu" src={x.src}/>
                            <div className="overlay" onClick={openLightbox.bind(this, i)}>
                            </div>
                        </div>)
                    })
                }
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
            <style jsx>{`
                .container{
                    background: #E4E3E3;
                    min-height: 60vh;
                    text-align:center;
                    padding: 10px 0 40px 0;
                }
                h1{
                    color: #FF4136;
                }
                .content{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    algin-items: center;
                }
                .item{
                    min-width: 500px;
                    max-width: 800px;
                    max-width: 40vw;
                    max-height: 100%;
                    margin: 20px;
                    position: relative;
                }
                .item img{
                    height: 100%;
                    width: 100%;
                }
                .item .overlay{
                    position: absolute;
                    top:0;
                    bottom:0;
                    left:0;
                    right:0;
                    opacity: 0;
                    transition-duration: 300ms;
                    background: rgb(0,0,0,0.60);
                    cursor: zoom-in;
                }
                .item:hover .overlay{
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}

const photos = [
    {
        src: "/images/menu.png"
    },
    {
        src:"/images/menu-1.png"
    }
];