import { Button } from "@shawn/button-lib";
import { Widget } from "@shawn/widget-lib";
import DayPicker from "react-day-picker";
import Rating from "react-rating";
import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <Button />
        <Widget />
        <Rating />
        <DayPicker />
      </div>
    );
  }
}

export default Index;
