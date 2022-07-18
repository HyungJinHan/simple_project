import { Component } from "react";

class Ref4 extends Component {
    render() {
        const style = {
            border: "none",
            height: "500px",
            width: "450px",
            overflow: "auto",
            position: "relative",
            margin: 'auto',
            marginTop: '5%'
        };
        const innerStyle = {
            width: "100%",
            height: "410px",
            background: "linear-gradient(black, blue 45%, orange, darkorange, red ,darkred, black)",
            paddingTop: "20%",
        };

        const innerStick = {
            width: "3%",
            height: "80%",
            background: "linear-gradient(yellow,orange, red, black,blue 70%)",
            border: "5px solid white",
            margin: "auto",
        };

        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref;
                }}
            >
                <div style={innerStyle}>
                    <div style={innerStick} />
                </div>
            </div>
        );
    }
}

export default Ref4;