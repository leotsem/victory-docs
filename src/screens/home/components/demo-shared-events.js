import React from "react";
import Radium from "radium";

// Common
import { VictoryBar, VictoryPie, VictorySharedEvents, VictoryLabel } from "victory";

class SharedEvents extends React.Component {
  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        margin: "0 auto",
        padding: 0,
        width: "100%",
        height: "auto"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div className="Benefits-demo fancyBorder">
        <svg
          height={350} width={450}
          viewBox="0 0 450 350"
          style={styles.parent}
        >
          <VictorySharedEvents
            events={[{
              childName: ["pie", "bar"],
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [{
                    childName: ["pie", "bar"],
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {fill: "tomato"})
                      };
                    }
                  }];
                },
                onMouseOut: () => {
                  return [{
                    childName: ["pie", "bar"],
                    mutation: () => {
                      return null;
                    }
                  }];
                }
              }
            }]}
          >
            <g transform={"translate(150, 50)"}>
              <VictoryBar name="bar"
                width={300}
                standalone={false}
                style={{
                  data: { width: 20 },
                  labels: {fontSize: 25}
                }}
                data={[
                  {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
                ]}
                labels={["a", "b", "c", "d"]}
                labelComponent={<VictoryLabel y={280}/>}
              />
            </g>
            <VictoryPie name="pie"
              width={250}
              standalone={false}
              style={{ labels: {fontSize: 25, padding: 10}}}
              data={[
                {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
              ]}
            />
          </VictorySharedEvents>
        </svg>
      </div>
    );
  }
}

export default Radium(SharedEvents); // eslint-disable-line new-cap
