import React from 'react';
import { useAuth } from '../contexts/AuthContext';
// import { Message } from '../components/Message';

export const ContactUs = (props) => {
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className='what-we-do-container'>
                            <p id='news-feed-head'>CONTACT US</p>
                            <hr id='news-feed-line' />
                            <ul>
                                <li>Directions/Parking</li>
                                <br />
                                <li>Career Opportunities</li>
                            </ul>
                            <img className="center career-opp-img" src='./content-navlink-news.jpg' alt="" /><br />
                            <h6>News & Events</h6>
                            <p>Join our magnificent firm and do more stuff with us.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <img src='/content-05-contact.jpg' className="contact-image" alt="" />
                        {
                            !currentUser
                            ?
                            <h4>PLEASE LOGIN TO ACCESS CONTACT FORM</h4>
                            :
                            <form onSubmit={(e) => props.addMessage(e)} id="message-form">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input name="email" id="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea name="body" id="body" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </form>
                        }
                        <br />
                        <p>The office hours are 8am - 5pm Monday through Friday</p>
                        <br />
                        <p>689 East South Street<br />Suite 4210 <br />Houston, Texas 09324 <br />
                        <br />PH: 555.555.5555 <br /><br />FAX: 555.555.5555 <br />
                        <br />Contact Rosemary Sage at <a href="mailto:rosemary@lawfirm.com">rosemary@lawfirm.com</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className='where-we-work-container' style={{ backgroundImage: "url(/other_links_background.jpg)" }}>
                            <img src='/content-link-where.jpg' className="contact-image" alt="" />
                            <p></p>
                            <h6>Where We Work</h6>
                            <p>Find out more about our work coverage area.</p>
                            <br />
                            <img className="center career-opp-img" src='/content-link-reputation.jpg' alt="" /><br />
                            <h6>News & Events</h6>
                            <p>Join our magnificent firm and do more stuff with us.</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
