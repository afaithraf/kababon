

const events = [
    "https://gurupalacerestaurant.com/wp-content/uploads/2019/04/fatherday.jpg",
    "https://blackhouse.uk.com/wp-content/uploads/2019/02/MUM-1240x560.png",
    "https://blackhouse.uk.com/wp-content/uploads/2018/03/BH_PlacesNoText42-1240x560.jpg",
    // "https://blackhouse.uk.com/wp-content/uploads/2019/01/grill-on-new-york-street-brunch-400x280.jpg",
    // "https://blackhouse.uk.com/wp-content/uploads/2018/03/ButchersBlock1-400x280.jpg",
    // "https://blackhouse.uk.com/wp-content/uploads/2018/05/GrillAlley_Roasts__E4A1251-400x280.jpg",
    // "https://gurupalacerestaurant.com/wp-content/uploads/2019/04/food3.jpg"
];

export default function Events() {

    return (
        <div className="container">
            <div className="header">
                <h1>Events</h1>
            </div>
            <div className="content">
                {
                    events.map((v, i) => {
                        return (
                            <div key={i} className="item">
                                <img src={events[i]} alt="event" />
                                <div className="overlay">

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>{`
                .container{
                    background: #000;
                    text-align:center;
                }
                .header{
                    width: 100%;
                }
                .content{
                    height: 33vw;
                    width: 100%;
                    display: flex;
                }
                .item{
                    height: 100%;
                    flex: 1;
                    position: relative;
                    transition-duration: 600ms;
                }
                .item img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .item .overlay{
                    position: absolute;
                    box-shadow: inset 0px 0px 132px 20px rgb(0, 0, 0);
                    background: rgb(0,0,0,0.3);
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                .item:hover{
                    flex: 2;
                }
                .item:hover .overlay{
                    box-shadow: inset 0px 0px 0 0 rgb(0,0,0);
                    background: rgb(0,0,0,0.2);
                }
            `}</style>
        </div>
    )
}
