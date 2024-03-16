import React from "react";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { themeColor, useTheme } from "react-native-rapi-ui";

// You might want to create a mapping of icon names to their respective components and names
const ICONS = {
  home: { component: FontAwesome, name: 'home' },
  backpack: { component: MaterialIcons, name: 'backpack' },
  'shopping-cart': { component: FontAwesome, name: 'shopping-cart' },
  'list-alt': { component: MaterialIcons, name: 'list-alt' },
  'more-horiz': { component: MaterialIcons, name: 'more-horiz' },
  // add other icons here following the same format
};

export default (props) => {
  const { isDarkmode } = useTheme();

  const IconData = ICONS[props.icon] || ICONS.home; // Fallback to 'home' if not found
  const IconComponent = IconData.component;

  return (
    <IconComponent
      name={IconData.name}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        props.focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)"
      }
    />
  );
};
