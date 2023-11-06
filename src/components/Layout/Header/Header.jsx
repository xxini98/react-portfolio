import React from "react";
import Gnb from "./Gnb";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="header-inner">
        <Gnb />
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header `
  height: 80px;
  .header-inner {
    width: 100%;
    height: 100%;
  }
`

export default Header;
