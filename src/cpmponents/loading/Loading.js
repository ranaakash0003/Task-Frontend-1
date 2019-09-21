import React, { Fragment } from "react";
import loading from "./load.gif";

export default function Loading() {
  return (
    <Fragment>
      <img
        src={loading}
        style={{ display: "block", marginLeft: "600px", marginTop: "200px", width: "25%" }}
        alt="Loading..."
      />
    </Fragment>
  );
}
