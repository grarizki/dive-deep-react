// import React from "react";
// import "./box.css";

// const BoxColourFulContext = React.createContext({
//   boxTypeItems: [],
//   addBoxToArray: (boxType) => {},
//   removeBoxFromArray: (indexToDelete) => {}
// });

// class Box extends React.Component {
//   render() {
//     let styleBox = "box";

//     switch (this.props.type) {
//       case "small":
//         styleBox = styleBox + " box--small";
//         break;
//       case "medium":
//         styleBox = styleBox + " box--medium";
//         break;
//       case "large":
//         styleBox = styleBox + " box--large";
//         break;
//       default:
//     }

//     return (
//       <BoxColourFulContext.Consumer>
//         {(context) => {
//           return (
//             <div className={styleBox} style={{ fontStyle: "italic" }}>
//               <div style={{ flex: 1, justifyContent: "flex-end" }}>{`${
//                 this.props.indexArray + 1
//               }. ${this.props.type} box`}</div>
//               <div>
//                 <button
//                   style={{
//                     backgroundColor: "red",
//                     color: "white",
//                     width: "100%"
//                   }}
//                   onClick={() => {
//                     context.removeBoxFromArray(this.props.indexArray);
//                   }}
//                 >
//                   delete
//                 </button>
//               </div>
//             </div>
//           );
//         }}
//       </BoxColourFulContext.Consumer>
//     );
//   }
// }

// class ColourFulBoxComponent extends React.Component {
//   state = {
//     selectedBoxType: "small"
//   };

//   render() {
//     return (
//       <BoxColourFulContext.Consumer>
//         {(context) => {
//           return (
//             <div style={{ display: "flex" }}>
//               <div style={{ flex: 1 }}>
//                 {context.boxTypeItems.map((boxType, index) => (
//                   <Box
//                     key={index.toString()}
//                     type={boxType}
//                     indexArray={index}
//                   />
//                 ))}
//               </div>
//               <div style={{ flex: 1 }}>
//                 <select
//                   name="box"
//                   id="boxstype"
//                   onChange={(event) => {
//                     this.setState({ selectedBoxType: event.target.value });
//                   }}
//                 >
//                   <option value="small">small</option>
//                   <option value="medium">medium</option>
//                   <option value="large">large</option>
//                 </select>
//                 <button
//                   onClick={() => {
//                     context.addBoxToArray(this.state.selectedBoxType);
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           );
//         }}
//       </BoxColourFulContext.Consumer>
//     );
//   }
// }

// class ColourFulBoxContainerComponent extends React.Component {
//   state = { boxTypeItems: ["small", "medium", "large"] };

//   addBoxToArray = (boxType) => {
//     this.setState({
//       boxTypeItems: [...this.state.boxTypeItems, boxType]
//     });
//   };

//   removeBoxFromArray = (indexToDelete) => {
//     const newArray = this.state.boxTypeItems.filter(
//       (_, index) => index !== indexToDelete
//     );
//     this.setState({ boxTypeItems: newArray });
//   };

//   render = () => {
//     return (
//       <BoxColourFulContext.Provider
//         value={{
//           boxTypeItems: this.state.boxTypeItems,
//           addBoxToArray: this.addBoxToArray,
//           removeBoxFromArray: this.removeBoxFromArray
//         }}
//       >
//         <ColourFulBoxComponent />
//       </BoxColourFulContext.Provider>
//     );
//   };
// }

// export default ColourFulBoxContainerComponent;

import React from "react";
import "./box.css";

const BoxColourFulContext = React.createContext({
  boxTypeItems: [],
  addBoxToArray: (boxType) => {},
  removeBoxFromArray: (indexToDelete) => {}
});

class Box extends React.Component {
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
      <BoxColourFulContext.Consumer>
        {(context) => {
          return (
            <div className={styleBox} style={{ fontStyle: "italic" }}>
              <div style={{ flex: 1, justifyContent: "flex-end" }}>{`${
                this.props.indexArray + 1
              }. ${this.props.type} box`}</div>
              <div>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "100%"
                  }}
                  onClick={() => {
                    context.removeBoxFromArray(this.props.indexArray);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        }}
      </BoxColourFulContext.Consumer>
    );
  }
}

class ColourFulBoxComponent extends React.Component {
  state = {
    selectedBoxType: "small"
  };

  render() {
    return (
      <BoxColourFulContext.Consumer>
        {(context) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {context.boxTypeItems.map((boxType, index) => (
                  <Box
                    key={index.toString()}
                    type={boxType}
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
                    context.addBoxToArray(this.state.selectedBoxType);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        }}
      </BoxColourFulContext.Consumer>
    );
  }
}

class ColourFulBoxContainerComponent extends React.Component {
  state = { boxTypeItems: ["small", "medium", "large"] };

  addBoxToArray = (boxType) => {
    this.setState({
      boxTypeItems: [...this.state.boxTypeItems, boxType]
    });
  };

  removeBoxFromArray = (indexToDelete) => {
    const newArray = this.state.boxTypeItems.filter(
      (_, index) => index !== indexToDelete
    );
    this.setState({ boxTypeItems: newArray });
  };

  render = () => {
    return (
      <BoxColourFulContext.Provider
        value={{
          boxTypeItems: this.state.boxTypeItems,
          addBoxToArray: this.addBoxToArray,
          removeBoxFromArray: this.removeBoxFromArray
        }}
      >
        <ColourFulBoxComponent />
      </BoxColourFulContext.Provider>
    );
  };
}

export default ColourFulBoxContainerComponent;
