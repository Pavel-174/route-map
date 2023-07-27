import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Layout as LayoutAntd } from "antd";
import CustomTable from "../Table";
import Draggable from "../Draggable";

const { Content, Sider } = LayoutAntd;

function LayoutMain() {
  const resizableRef = useRef(null)

  return (
    <LayoutAntd>
      <Content style={{ padding: "0 50px" }}>
        <LayoutAntd
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <CustomTable />
          <Draggable  resizableRef={resizableRef}/>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </LayoutAntd>
      </Content>
    </LayoutAntd>
  );
}

export default LayoutMain;
