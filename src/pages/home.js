import React, { useState, useEffect } from "react";
import { SideBar } from "../containers/sidebar/sidebar.js";
import { Body } from "../containers/body/body.js";
import { TopBar } from "../components/topbar/topbar.js";
import { useMediaQuery } from "react-responsive";
import "./home.css";

export function Home() {
  const [openMessages, setOpenMessages] = useState(false);
  const isTabletOrMobileDevice = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    if (!isTabletOrMobileDevice) {
      setOpenMessages(false);
    }
  }, [isTabletOrMobileDevice]);

  return (
    <div className="base">
      <div className="side">
        <TopBar
          dropdown={isTabletOrMobileDevice}
          openMessages={openMessages}
          setOpenMessages={setOpenMessages}
        />
        {!isTabletOrMobileDevice && <SideBar />}
      </div>
      {openMessages ? <SideBar /> : <Body />}
    </div>
  );
}
