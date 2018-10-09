import { Button } from "@shawn/button-lib";
import { Widget } from "@shawn/widget-lib";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Rating from "react-rating";
import React from "react";
import styles from "./example.scss";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.css = "ok";
  }
}

class Test extends Component {
  render() {
    return <div className={styles.example}>test</div>;
  }
}
class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <Test />
        <Button />
        <Widget />
        <Rating />
        <DayPicker />
      </div>
    );
  }
}

export default Index;
