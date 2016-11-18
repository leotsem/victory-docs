import React from "react";
import { Link } from "react-router";

// Common
import { VictorySettings } from "formidable-landers";
import Icon from "../../../components/icon";

class Benefits extends React.Component {
  render() {
    return (
      <div className="Benefits">

        <div className="Container">
          <div className="Grid Grid--gutters Grid--full medium-Grid--1of3">
            <div className="Grid-cell u-textCenter">
              <h3>
                Robust
              </h3>
              <p>
                Area charts. Scatter plots. Voronoi polygons. Easy-to-use components for complex charting.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>
                Flexible
              </h3>
              <p>
                Fully-contained, reusable data visualization elements are responsible for their own styles and behaviors.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>
                Native
              </h3>
              <p>
                Extend the Victory experience on Android and iOS platforms with an identical&nbsp;API. <br/>
                <code>npm install victory-native</code>
              </p>
            </div>
          </div>

          <div className="Benefits-btn">
            <Link className="Benefits-btn-link" to="/docs">
              Get Started <Icon glyph="internal-link" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Benefits.propTypes = {
  style: React.PropTypes.object
};

Benefits.defaultProps = {
  style: null
};

export default Benefits;
