var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            status: 'stopped'
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.status !== prevState.status){
            switch (this.state.status){
                case'started':
                    clearInterval(this.timer);
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                    clearInterval(this.timer);
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count +1;
            this.setState({
                count: (newCount >= 0) ? newCount : 0,
                status: (newCount >= 0) ? 'started' : 'stopped',
            });
            (newCount < 0) ? clearInterval(this.timer) : '' ;
        }, 1000 );
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            status: newStatus
        });
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    render: function () {
        var {count, status} = this.state;
        return  (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls status={status} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;