import React from 'react'

export const NewsEvents = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className='what-we-do-container'>
                            <p id='news-feed-head'>What announcements are we releasing?.</p>
                            <hr id='news-feed-line' />
                            <ul>
                                <li>United States</li>
                                <li>International</li>
                            </ul>
                            <img className="center" src='/content-navlink-career.jpg' alt="" /><br />
                            <h6>Human Resources</h6>
                            <p>Discover how Nielsen, Zehe and Antas, P.C uses its innovative software solutions in the market. See what the industry has to say about us,
                            read our latest announcements, and explore our upcoming events. You can catch several companies at events and expos throughout the U.S.</p>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <h2>NEWS</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odio distinctio unde sed, ipsum eum. Rem perspiciatis deserunt tempore praesentium. 
                            Et laudantium ullam ab aut vel quidem nemo exercitationem temporibus eligendi tempora facilis, perspiciatis porro magnam earum dolorum officia 
                            consequatur commodi natus iure non facere atque aliquam. Nisi accusantium quia a magnam quos accusamus quod veniam iusto alias est, nostrum minima? 
                            Sunt odit eum quidem veritatis similique quam molestiae sapiente dignissimos? Praesentium, voluptas sequi qui dolor quae provident voluptatum excepturi!</p>
                        <h2 class="events-header">EVENTS</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odio distinctio unde sed, ipsum eum. Rem perspiciatis deserunt tempore praesentium. 
                            Et laudantium ullam ab aut vel quidem nemo exercitationem temporibus eligendi tempora facilis, perspiciatis porro magnam earum dolorum officia 
                            consequatur commodi natus iure non facere atque aliquam. Nisi accusantium quia a magnam quos accusamus quod veniam iusto alias est, nostrum minima? 
                            Sunt odit eum quidem veritatis similique quam molestiae sapiente dignissimos? Praesentium, voluptas sequi qui dolor quae provident voluptatum excepturi!</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
