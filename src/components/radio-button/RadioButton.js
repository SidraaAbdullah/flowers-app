import React from "react";
import { Icon, CheckBox } from "react-native-elements";
import { get } from "lodash";
const RadioButton = ({ check, handleClick, data }) => {
  const isChecked = (check, data) => {
    if (typeof check !== "undefined") {
      if (check === get(data, "_id")) {
        return true;
      }
    }
    return false;
  };
  return (
    <CheckBox
      containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
      title={data?.address}
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color="#ffbd11"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="grey"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      checked={isChecked(check, data)}
      onPress={handleClick}
    />
  );
};
export default RadioButton;
