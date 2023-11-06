import React from "react";
import Header from "./Header/Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  background-color: #191c1f;
`;
