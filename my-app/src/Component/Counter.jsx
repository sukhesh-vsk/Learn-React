import React from 'react';

class Counter extends React.Component {
    state = {
        count : 0
    }

    increment = (val) => {
        var count = this.state.count;
        this.setState({count : (count+val)});
    }

    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment(1)}>Increment</button>
                <button onClick={this.increment(-1)}>Decrement</button>
            </div>
        );
    };
}

export default Counter;