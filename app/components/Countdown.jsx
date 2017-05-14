var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
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
                    this.startTimer();
                    break;
                case 'stopped':

                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count -1;
            this.setState({
                count: (newCount >= 0) ? newCount : 0,
            });
        }, 1000 );
    },
    HandleCountdownClock:function (seconds) {
        this.setState({
            count: seconds,
            status: 'started'
        })
    },
    render: function () {
        var {count, status} = this.state;
        var that = this;
        function renderControls(){
            if(status == 'stopped'){
                return <CountdownForm onSetSeconds={that.HandleCountdownClock}/>
            }else if(status == 'started' || status == 'paused'){
                return <Controls status={status}/>
            }
        }
        return  (
            <div>
                <Clock totalSeconds={count}/>
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;