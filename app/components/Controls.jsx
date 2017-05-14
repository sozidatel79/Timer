var React = require('react');

var Controls = React.createClass({
    propTypes:{
      status: React.PropTypes.string.isRequired
    },
    pauseClicked: function () {
        console.log('pause');
    },
    startClicked:function () {
        console.log('start');
    },
    clearClicked: function () {
        console.log('clear');
    },
    render: function () {
        var {status} = this.props;
        var renderStartStopButton = () => {
            if (status === 'started'){
                return <button onClick={this.pauseClicked} className="button secondary">Pause</button>
            }else if (status === 'paused'){
                return <button onClick={this.startClicked}  className="button primary">Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button  onClick={this.clearClicked}  className="button hollow alert">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;