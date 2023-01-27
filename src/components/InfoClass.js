import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this);
    const { count, count2 } = this.props;

    this.state = {
      count,
      count2,
      url: "",
    }; //
  }

  async componentDidMount() {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await data.json();

    this.setState({
      url: json.message,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${JSON.stringify(prevProps)}`);
    console.log(`prevState: ${JSON.stringify(prevState)}`);
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
