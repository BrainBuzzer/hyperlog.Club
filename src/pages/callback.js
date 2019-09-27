import React from "react"
import { handleAuthentication } from "../utils/auth"
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Callback = () => {
  handleAuthentication()

  return <Spin indicator={antIcon} />
}

export default Callback
