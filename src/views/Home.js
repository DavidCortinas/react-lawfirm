import React from 'react';


export const Home = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-9 col-sm-9">
                        <img className="home-image" src='/nza_slideshow.jpg' alt="" />
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="news-feed-container">
                            <p id='news-feed-head'>NEWS FEED</p>
                            <hr id='news-feed-line' />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione autem molestiae facere
                                inventore provident labore tempora fuga voluptates architecto ex id facilis, hic est, quibusdam
                                sit dolorem, quaerat ad laborum ea alias! Corrupti laudantium provident accusamus veritatis
                                natus veniam dolore a magni quis aperiam dolorum eaque modi nesciunt, maxime atque asperiores
                                animi. Quod quasi magni necessitatibus sint. Quos hic recusandae nam. Aspernatur optio
                                voluptatem porro quasi at a perspiciatis fugiat id tenetur perferendis doloremque, eveniet
                                cumque dolorem nostrum recusandae?
                            </p>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-md-9 col-sm-9">
                        <h6>Welcome to our website!</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo mollitia eum sit voluptatem nobis facilis accusamus illo voluptas quo quae ut vero, nostrum aspernatur, atque quasi itaque, dicta modi dolore iste vitae molestiae fuga nisi? Nobis sapiente sequi quisquam?</p>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h6>Bigshot, Zoo, & Adds, P.C.</h6>
                        <p>419 West South Street, Suite 4200<br />
                        Houston, Texas 35983<br />
                        555-555-5555 (Phone)<br />
                        555-555-5555 (Fax)</p>
                    </div>
                </div>    
            </div>
        </React.Fragment>
    )
}
