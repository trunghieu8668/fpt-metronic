
import React from 'react'
import {useSubheader} from "../_metronic/layout";

const ComponentAuthenticating = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Đang xác thực người dùng");
  return (
    <div className="container"></div>
  );
};

export default ComponentAuthenticating