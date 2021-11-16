import React from "react";
import ReactDom from "react-dom";

var day = new Date();

var greeting;

const customStyle = {
  color: ""
};

if (day.getHours() <= 12 && day.getHours() >= 0) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (day.getHours() >= 12 && day.getHours() <= 16) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else if (day.getHours() > 16 && day.getHours() <= 20) {
  greeting = "Good Evening";
  customStyle.color = "blue";
} else {
  greeting = "Good Night";
  customStyle.color = "orange";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
