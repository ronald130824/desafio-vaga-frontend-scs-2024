import styled from 'styled-components';
import backgroundMobile from '../../assets/images/backgrounds/background-mobile.jpg';
import backgroundAbout from '../../assets/images/backgrounds/background-about.jpg';
import backgroundAboutDesktop
  from '../../assets/images/backgrounds/background-about-desktop.jpg';
import back
  from '../../assets/images/backgrounds/background-main-desktop.jpg';

export const MainContainer = styled.main`
  background-color: var(--neutral-color-white-200);
  height: 817px;
  width: 100%;
`;

export const SectionMain = styled.section`
  background-color: var(--neutral-color-white-200);
  background-image: url(${backgroundMobile});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: 100%;
  clip-path: ellipse(160vw 50vw at 50% 18vw);
  display: flex;
  height: 72vw;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 0;

    @media screen and (min-width: 900px) {
      background-image: url(${back});
      clip-path: ellipse(130vw 37vw at 50% 13vw);
      background-position: 50% 0%;
      height: calc(100vw / 2);
    }

    h1 {
      color: var(--neutral-color-white-300);
      font-family: bebas-kai;   
      font-size: 4rem;
      font-weight: var(--font-weight-bold);
      letter-spacing: 0.12em;
      line-height: var(--line-height-m);
      position: absolute;
      text-align: center;
      top: 45px;

        @media screen and (min-width: 900px) {
          font-weight: 400;
          font-size: 14rem;
          line-height: 150%;
          letter-spacing: 0.12em;
          top: 70px;
        }
    }
`;

export const SectionAbout = styled.section`
  background-image: url(${backgroundAbout});
  background-position-x: -2px;
  background-position-y: -16px;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 568px;
  position: relative;
  width: 100%;
  z-index: 0;

    @media screen and (min-width: 900px) {
      background-image: url(${backgroundAboutDesktop});
      background-position-x: initial;
      background-position-y: initial;
      display: flex;
      height: 543px;
      justify-content: flex-end;
    }

    div {
      backdrop-filter: blur(1.6679px);
      background: linear-gradient(180deg, rgba(29, 37, 39, 0.6) 15.42%, rgba(29, 37, 39, 0.552) 35.73%, rgba(29, 37, 39, 0.156) 78.67%, rgba(29, 37, 39, 0) 100%);
      height: 359px;
      position: absolute;
      width: 100%;
        
        @media screen and (min-width: 900px) {
          background: linear-gradient(270deg, rgba(29, 37, 39, 0.6) 15.42%, rgba(29, 37, 39, 0.552) 35.73%, rgba(29, 37, 39, 0.156) 78.67%, rgba(29, 37, 39, 0) 100%);
          height: 543px;
          right: 0;
          width: 773px;
      }
    }

    h1 {
      color: var(--neutral-color-white-100);
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-m);
      text-align: right;

        @media screen and (min-width: 900px) {
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-xxl);
          line-height: var(--line-height-m);
          text-align: right;
        }
    }

    p {
      color: var(--neutral-color-white-100);
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-300);
      line-height: var(--line-height-l);
      text-align: right;

      @media screen and (min-width: 900px) {
          font-weight: var(--font-weight-300);
          font-size: var(--font-size-m);
          line-height: var(--line-height-l);
          text-align: right;
        }
    }
`;

export const ButtonAbout = styled.button`
  background-color: transparent;
  border-radius: 2.51009px;
  border: 0.627523px solid var(--neutral-color-white-100);
  color: var(--neutral-color-white-100);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-500);
  height: 40px;
  line-height: var(--line-height-l);
  margin-right: 11px;  
  text-align: center;
  width: 193px;

  @media screen and (min-width: 900px) {
    width: 273px;
    height: 56px;
    margin-top: 15px;
    padding: 8px 0px;
  }
`;

export const ArticleAbout = styled.article`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  position: relative;
  row-gap: 15px;
  top: 40px;

  @media screen and (min-width: 900px) {
    width: 616px;
    height: 201px;
    margin: 0 157px 0 0;
  }
`;
