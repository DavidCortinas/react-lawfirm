import React from 'react'

export const WhereWeWork = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className='what-we-do-container'>
                            <p id='news-feed-head'>WHERE WE WORK</p>
                            <hr id='news-feed-line' />
                            <ul>
                                <li>United States</li>
                                <li>International</li>
                            </ul>
                            <img className="center" src='/content-navlink-career.jpg' alt="" /><br />
                            <h6>Career Opportunities</h6>
                            <p>Join our magnificent firm.</p>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odio distinctio unde sed, ipsum eum. 
                            Rem perspiciatis deserunt tempore praesentium. Et laudantium ullam ab aut vel quidem nemo exercitationem 
                            temporibus eligendi tempora facilis, perspiciatis porro magnam earum dolorum officia consequatur commodi 
                            natus iure non facere atque aliquam. Nisi accusantium quia a magnam quos accusamus quod veniam iusto 
                            alias est, nostrum minima? Sunt odit eum quidem veritatis similique quam molestiae sapiente dignissimos? 
                            Praesentium, voluptas sequi qui dolor quae provident voluptatum excepturi! 
                        </p>
                        <div className="row">
                            <div className="col-md-9 col-sm-9">
                                <h6>United States</h6><hr />
                                <div className="row">
                                    <div className="col-1">State State State State State State State State State State State State State</div>
                                    <div className="col-1 offset-3">State State State State State State State State State State State State State</div>
                                    <div className="col-1 offset-3">State State State State State State State State State State</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-9">
                                <h6>International</h6><hr />
                                <p>Canada<br />Columbia<br />Germany<br />Nicarauga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
