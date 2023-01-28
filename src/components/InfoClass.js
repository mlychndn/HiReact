import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);

    const { count, count2 } = this.props;

    this.state = {
      count,
      count2,
      url: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await data.json();

    this.setState({
      url: json.message,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await data.json();

      this.setState({
        url: json.message,
      });
    }

    this.timer = setInterval(() => {
      console.log("This timer will run after every one second");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    const { count, count2 } = this.state;

    return (
      <div>
        <h1>This info is comming from react class component</h1>
        <p>{count}</p>
        <p>{count2}</p>
        {!this.state.url ? "" : <img src={this.state.url} alt="dog-image" />}
        <button
          onClick={() => {
            this.setState({
              count: +count + 1,
              count2: count2 - 1,
            });
          }}
        >
          set class count
        </button>
      </div>
    );
  }
}

export default Info;
