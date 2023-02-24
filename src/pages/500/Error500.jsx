import React from "react";
import Error404 from "../404/Error404";

function Error500() {
  return <Error404 isError500={true} />;
}

export default Error500;
