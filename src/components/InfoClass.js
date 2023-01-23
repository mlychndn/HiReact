import React from "react";

class Info extends React.Component {
  // render should always be required for class based component
  constructor(props) {
    //constructor is a place where initilazion done
    super(props);
    //create state
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    console.log(this);
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>Info based class component of {this.props?.name}</h1>
        <h2>
          props:{this.props.kuchv} {this.state.count}
        </h2>
        <h4>{this.state.count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 - 1,
            });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Info;
