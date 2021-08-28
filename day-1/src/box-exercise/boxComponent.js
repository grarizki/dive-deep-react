import React from "react";
import "./box.css";

const BoxContext = React.createContext({
  arrayBox: [],
  addBoxToArrayBox: () => {},
  removeArrayBoxBasedIndex: () => {},
});

class BoxComponent extends React.Component {
  render() {
    let styleBox = "box";

    switch (this.props.type) {
      case "small":
        styleBox = styleBox + " box--small";
        break;
      case "medium":
        styleBox = styleBox + " box--medium";
        break;
      case "large":
        styleBox = styleBox + " box--large";
        break;
      default:
    }

    return (
      <BoxContext.Consumer>
        {(context) => {
          console.log("value >> ", context);
          return (
            <div className={styleBox}>
              <div>
                {this.props.type + " box"}
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    this.props.removeBox(this.props.indexArray);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        }}
      </BoxContext.Consumer>
    );
  }
}

class ColourFulBoxComponent extends React.Component {
  state = {
    boxTypeItems: ["small", "medium", "large"],
    selectedBoxType: "small",
  };

  removeBoxBasedOnIndexArray = (indexToDelete) => {
    const newArray = this.state.boxTypeItems.filter(
      (_, index) => index !== indexToDelete
    );
    this.setState({ boxTypeItems: newArray });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          {this.state.boxTypeItems.map((boxType, index) => (
            <BoxComponent
              key={index.toString()}
              type={boxType}
              removeBox={this.removeBoxBasedOnIndexArray}
              indexArray={index}
            />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <select
            name="box"
            id="boxstype"
            onChange={(event) => {
              this.setState({ selectedBoxType: event.target.value });
            }}
          >
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          <button
            onClick={() => {
              this.setState({
                boxTypeItems: [
                  ...this.state.boxTypeItems,
                  this.state.selectedBoxType,
                ],
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

class BoxContainer extends React.Component {
  state = { arrayBox: [] };

  addBoxToArrayBox = (boxType) => {
    this.setState({
      arrayBox: [...this.state.arrayBox, boxType],
    });
  };

  removeArrayBoxBasedIndex = (indexToDelete) => {
    const newArray = this.state.boxTypes.filter(
      (_, index) => index !== indexToDelete
    );
    this.setState({ arrayBox: newArray });
  };

  render() {
    return (
      <BoxContext.Provider
        value={{
          arrayBox: this.state.arrayBox,
          addBoxToArrayBox: this.addBoxToArrayBox,
          removeArrayBoxBasedIndex: this.removeArrayBoxBasedIndex,
        }}
      >
        <ColourFulBoxComponent />
      </BoxContext.Provider>
    );
  }
}

export default BoxContainer;
