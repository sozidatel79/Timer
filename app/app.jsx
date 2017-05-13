var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='countdown' component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);
