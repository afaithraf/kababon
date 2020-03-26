import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


export default function Navbar() {
    const [stick, setStick] = useState(false);

    const Ref = useRef()


    function handleScroll() {
        var stickyOT = Ref.current.offsetTop;
        if (window.pageYOffset >= stickyOT - 50) {
            setStick(true);
        } else {
            setStick(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const links = {
        "About": "#about",
        "Menu": "#menu",
        "Gallery": "#gallery",
        "Faq": "#faq",
        "Contact us": "#contact"
    }
    return (
        <>
            <div ref={Ref} ></div>
            <div className={stick ? "sticky navbar" : "navbar"} >
                <ul className="menu">
                    {
                        Object.keys(links).map((keyName, i) => (
                            <a key={i} href={links[keyName]}>
                                <li className="menu-item"><span>{keyName}</span></li>
                            </a>
                        ))
                    }
                </ul>
                <div className="actions">
                    <button>
                        Book Now
                    </button>
                    <button>
                        Contact us
                    </button>
                </div>
                <style jsx>{`
                a{
                    color: #ffffff;
                    text-decoration: none;
                }
                .navbar{
                    background: rgb(0,0,0,0.90);
                    color: #ffffff;
                    font-weight: bold;
                    height: 50px;
                    width: 100%;
                    margin-top: -50px;
                    position: absolute;
                    z-index: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                }
                .navbar.sticky{    
                    position: fixed;
                    top: 0;
                    margin: 0;
                }
                ul.menu{
                    height: 100%;
                    list-style: none;
                    margin-right: auto;
                }
                li.menu-item{
                    display: inline-flex;
                    align-items: center;
                    height: 100%;
                    padding: 0 10px;
                    margin: 0 10px;
                }
                li.menu-item:hover{
                    color: #FF4136;
                }
                .actions{
                    margin: auto 60px;
                }
                button{
                    margin: auto 7px;
                    background: #fff;
                    border: none;
                    padding: 4px 12px;
                    color: #000;
                    font-size: 0.9em;
                    font-weight: bold;
                    font-family: 'Open Sans',sans-serif;
                    transition-duration: 100ms;
                }
                button:hover{
                    background-color: #FF4136;
                    color: #ffffff;
                }
            `}</style>
            </div>
        </>
    )
}
