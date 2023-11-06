import React from "react";
import logo_e from "../../../images/rarible-logo.svg";
import logo_t from "../../../images/rarible-eng-logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  return (
    <Nav>
      <h1 className="logo">
        <Link to="/">
          <img src={logo_e} alt="Rarible" className="logos" />
          <img src={logo_t} alt="Rarible" className="eng-logo" />
        </Link>
      </h1>
      <div className="search-wrap">
        <form action="https://www.google.com/search" method="GET">
          <label htmlFor="search"></label>
          <input
            type="search"
            id="search"
            placeholder="Search for collections, NFTs or users"
          />
          <button>/</button>
        </form>
      </div>
      <div className="gnb">
        <ul>
          <li>
            <Link to="/Create" className="create-position">
              Create
            </Link>
          </li>
          <li>
            <Link to="/Explore" className="explore-position">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/Shell">Shell</Link>
          </li>
          <li>
            <Link to="/Drops">Drops</Link>
          </li>
        </ul>
        <div className="gnb-depth">
          <div className="depth-wrap">
            <div className="depth-inner">
              <div className="gnb-left">
                <ul>
                  <li>
                    <Link to="/">Collections</Link>
                  </li>
                  <li>
                    <Link to="/">NFTs</Link>
                  </li>
                  <li>
                    <Link to="/">Users</Link>
                  </li>
                  <li>
                    <Link to="/">Marketplace</Link>
                  </li>
                </ul>
              </div>
              <div className="gnb-right">
                <ul>
                  <li>
                    <Link to="/">Ethereum</Link>
                  </li>
                  <li>
                    <Link to="/">Polygon</Link>
                  </li>
                  <li>
                    <Link to="/">Tezos</Link>
                  </li>
                  <li>
                    <Link to="/">Immutable</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 2%;
  .logo {
    width: 134px;
    height: 40px;
    margin-right: 24px;
    a {
      display: flex;
      height: 100%;
      img {
        width: 38px;
        height: 100%;
        margin-right: 10px;
        object-fit: contain;
      }
      .eng-logo {
        width: 60%;
      }
    }
  }
  .search-wrap {
    margin-right: 24px;

    form {
      position: relative;
      width: 400px;
      height: 40px;
    }
    input {
      outline: none;
      width: 100%;
      height: 40px;
      border-radius: 10px;
      padding: 0 3%;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40px);
      color: rgba(255, 255, 255, 0.8);
      font-weight: bold;
    }
    button {
      position: absolute;
      top: 50%;
      right: 0;
      border-radius: 5px;
      transform: translate(-50%, -50%);
      width: 24px;
      color: rgba(255, 255, 255, 0.8);
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40px);
    }
  }
  .gnb {
    position: relative;
    > ul {
      display: flex;
      li {
        margin-right: 24px;
        a {
          font-size: 15px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s;
          &:hover {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
    .gnb-depth {
      position: absolute;
      top: 52px;
      left: 75px;
      .depth-inner {
        display: flex;
        ul {
          li {
            a {
              width: 240px;
              padding: 14px;
              line-height: 22px;
              display: block;
            }
          }
        }
        .gnb-left {
          width: 240px;
        }
        .gnb-right {
          ul {
            width: 500px;
            display: flex;
            flex-direction: row;
    flex-wrap: wrap;
            li {
              max-width: 240px;
            }
          }
        }
      }
    }
  }
`;

export default Gnb;
