var React = require('react');

var CountdownForm = React.createClass({
    onButtonClick: function (e) {
        e.preventDefault();
        var {onSetSeconds} = this.props;
        var strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/^[0-9]*$/) && strSeconds != ''){
            this.refs.seconds.value = '';
            onSetSeconds(parseInt(strSeconds, 10));
        }
    },
    render: function () {
        return (
            <div className="row"  onSubmit={this.onButtonClick}>
                <form ref="cForm" className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="countdown-form-button button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;