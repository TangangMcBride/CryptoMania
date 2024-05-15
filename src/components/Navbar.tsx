// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, Button, theme, Typography, Avatar } from "antd";

import crypto_icon from "../assets/crypto-icon.png";
import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <div className="nav-container">
//       <div className="logo">
//         <Avatar src={crypto_icon} size="large" />
//         <Typography.Title level={3}>
//           <Link to="/">Crypto Mania</Link>
//         </Typography.Title>
//       </div>
//       <Menu  mode="inline" theme="dark">
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           <Link to="/">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           <Link to="/exchanges">Exchanges</Link>
//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           <Link to="/news">News</Link>
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Button, theme, Typography } from "antd";

const Navbar: React.FC = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        <Link to="/news">News</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
     
    </Menu>
  );
};

export default Navbar;
