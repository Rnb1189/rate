/* eslint no-console: 0 */
import Rate from "rc-rate";
import React from "react";
import ReactDOM from "react-dom";
import "../assets/index.less";

function onChange(v) {
  console.log("selected star", v);
}

ReactDOM.render(
  <div style={{ margin: 100 }}>
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 40 }}
      allowHalf
      allowClear={false}
    />
    <br />
    <Rate
      isRtl
      defaultValue={0}
      onChange={onChange}
      style={{ fontSize: 80 }}
      allowHalf
      allowClear={false}
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      allowHalf
      character="$"
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      allowHalf
      character={<i className="anticon anticon-star" />}
    />
    <br />
    <Rate
      defaultValue={2}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      character={<i className="anticon anticon-star" />}
    />
  </div>,
  document.getElementById("__react-content")
);
