import styled, { css } from 'styled-components';

import { MdLocationOn, MdCake } from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** para o firefox */
  ::-webkit-scrollbar {
    /** para o chrome */
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vh, 199px);

  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 18px;
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    color: var(--gray);
  }

  > p {
    font-size: 14px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const IconCSS = css`
  width: 18px;
  height: 18px;

  fill: var(--gray);
`;

export const LocationIcon = styled(MdLocationOn)`
  ${IconCSS}
`;
export const CakeIcon = styled(MdCake)`
  ${IconCSS}
`;

export const Followage = styled.div`
  display: flex;
  > span {
    font-size: 14px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 12px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 14px;
  }
`;
