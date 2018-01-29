import React from "react";
import InlineSVG from "svg-inline-react";

const ICONS = {
    SOLUTION_1: require("./solution-1.svg"),
    SOLUTION_2: require("./solution-2.svg"),
    SOLUTION_3: require("./solution-3.svg"),
};

class Icon extends React.PureComponent {
    render() {
      let className = "icon";
      if (this.props.className) {
        className += ` ${this.props.className}`;
      }
  
      return <InlineSVG className={className} src={ICONS[this.props.icon]} />;
    }
  }
  
  export default Icon;