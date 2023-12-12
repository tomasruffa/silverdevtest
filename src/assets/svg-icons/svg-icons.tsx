import { defaultColors } from "../../global-styles/global-styles";
import React from "react";
import { Svg, Path, Circle, Rect, Ellipse, G, Defs, ClipPath, Image, Pattern, Use } from "react-native-svg";

const SVG_ICONS = {
  BOTTOM_NAVIGATION: {
    HOME_ACTIVE: (
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          fill={defaultColors.black}
          d="M12 2L1 9l3 13h16l3-13z"
        />
      </Svg>
    ),
    HOME_INACTIVE: (
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          fill={defaultColors.grayChateau}
          d="M12 2L1 9l3 13h16l3-13z"
        />
      </Svg>
    ),
  }
};

export default SVG_ICONS;
