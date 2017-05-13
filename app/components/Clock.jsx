var React = require('react');

var Clock = React.createClass({

   formatSeconds: function (totalSeconds) {
       var seconds = totalSeconds % 60;
       seconds = (seconds < 10) ? '0' + seconds : seconds;

       var minutes = Math.floor(totalSeconds / 60);
       minutes = (minutes < 10) ? '0' + minutes : minutes;

       return minutes + ':' + seconds;
   },

   render: function () {
       return (
         <div></div>
       );
   }
});

module.exports = Clock;