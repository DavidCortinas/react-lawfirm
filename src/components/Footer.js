import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
            <div className="col-md-12"><hr /></div>
            <div className="col-md-10 offset-md-1">
                <ul className="list-unstyled list-inline d-flex justify-content-center list-dash f">
                    <li className="list-inline-item f">
                        <Link to='/' className="foot-nav-link nav-link  h">WHO WE ARE</Link>
                        <p className="list-inline-item f">&mdash;</p>
                    </li>
                    <li className="list-inline-item f">
                        <Link to='/whatwedo' className="foot-nav-link nav-link h">WHAT WE DO</Link>
                        <p className="list-inline-item f">&mdash;</p>
                    </li>
                    <li className="list-inline-item f">
                        <Link to='/newsevents' className="foot-nav-link nav-link h">NEWS & EVENTS</Link>
                        <p className="list-inline-item f">&mdash;</p>
                    </li>
                    <li className="list-inline-item f">
                        <Link to='/wherewework' className="foot-nav-link nav-link h">WHERE WE WORK</Link>
                        <p className="list-inline-item f">&mdash;</p>
                    </li>
                    <li className="list-inline-item f">
                        <Link to='/contactus' className="foot-nav-link nav-link h">CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}