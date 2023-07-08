import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import YtLogo from "../img/logo.png";
import {
  MdHome,
  MdAccountCircle,
  MdBrightness5,
  MdOutlineSportsBasketball,
  MdSportsEsports,
  MdMovieCreation,
  MdOutlineHelpOutline,
  MdOutlineLiveTv,
  MdOutlineOutlinedFlag,
  MdSettings,
  MdHistory,
  MdLibraryAddCheck,
  MdNewspaper,
  MdExplore,
  MdOutlineSubscriptions,
  MdMusicNote,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YtLogo} />
            YuTube
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <MdHome />
            Home
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <MdExplore />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <MdOutlineSubscriptions />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <MdLibraryAddCheck />
          Library
        </Item>
        <Item>
          <MdHistory />
          History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <MdAccountCircle />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>BEST OF YuTube</Title>
        <Item>
          <MdMusicNote />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball />
          Sports
        </Item>
        <Item>
          <MdSportsEsports />
          Gaming
        </Item>
        <Item>
          <MdMovieCreation />
          Movies
        </Item>
        <Item>
          <MdNewspaper />
          News
        </Item>
        <Item>
          <MdOutlineLiveTv />
          Live
        </Item>
        <Hr />
        <Item>
          <MdSettings />
          Settings
        </Item>
        <Item>
          <MdOutlineOutlinedFlag />
          Report
        </Item>
        <Item>
          <MdOutlineHelpOutline />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <MdBrightness5 />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
