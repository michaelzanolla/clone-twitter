import styled, { css } from 'styled-components';

import {
  MdHome,
  MdNotifications,
  MdEmail,
  MdFavoriteBorder,
  MdPerson,
  MdExitToApp,
  Rocketseat,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 40px;
  height: 40px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 18px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const IconCSS = css`
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  color: var(--white);
`;

export const HomeIcon = styled(MdHome)`
  ${IconCSS}
`;
export const BellIcon = styled(MdNotifications)`
  ${IconCSS}
`;
export const EmailIcon = styled(MdEmail)`
  ${IconCSS}
`;
export const FavoriteIcon = styled(MdFavoriteBorder)`
  ${IconCSS}
`;
export const ProfileIcon = styled(MdPerson)`
  ${IconCSS}
`;

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 13px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(MdExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 24px;
    width: 24px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
