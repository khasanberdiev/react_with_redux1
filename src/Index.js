import React from "react";
import ReactDom from "react-dom";

// const App = () => {
//   return <div>heyyy</div>;
// };

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition();
  };
  return <div>heyyy</div>;
}
ReactDom.render(<App />, document.querySelector("#root"));
