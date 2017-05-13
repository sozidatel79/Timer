var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return  (
        <nav className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">[ :: Timer App :: ] </li>
                    <li><IndexLink className="button" to="/" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#fff'}}>Timer</IndexLink></li>
                    <li><Link className="button" to="/countdown" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#fff'}}>Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="credits">
                    <li>Created by: <b>Anton Rotshtein</b></li>
                </ul>
            </div>
        </nav>
    );
};

module.exports = Nav;