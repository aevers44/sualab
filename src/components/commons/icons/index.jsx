import React from "react";
import InlineSVG from "svg-inline-react";

const ICONS = {
  SOLUTION_1: require("./solution-1.svg"),
  SOLUTION_2: require("./solution-2.svg"),
  SOLUTION_3: require("./solution-3.svg"),
  ARROW_UP: require("./arrow-point-to-up.svg"),
  ARROW_DOWN: require("./arrow-point-to-down.svg"),
  SUAKIT_FEATURE_1: require("./suakit-feature-1.svg"),
  SUAKIT_FEATURE_2: require("./suakit-feature-2.svg"),
  SUAKIT_FEATURE_3: require("./suakit-feature-3.svg"),
  RIGHT_SIDE_ARROW: require("./right-side-arrow.svg"),
  PRODUCT_LEFT_ARROW: require("./long-arrow-point-to-left.svg"),
  PRODUCT_RIGHT_ARROW: require("./long-arrow-point-to-right.svg"),
  MENU_ICON: require("./menu.svg"),
  CANCEL_ICON: require("./cancel.svg"),
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
