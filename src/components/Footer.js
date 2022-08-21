import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from './Logo';
import ParagraphText from './paragraphTexts/ParagraphText';

const FooterStyles = styled.footer`
  background-color: var(--darkBlue_4);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
  }
  .footer__logo {
    max-width: 120px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__desc {
    color: var(--white);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__links {
    margin-bottom: 2rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
    a {
      font-size: 1.6rem;
      line-height: 1.5em;
      color: var(--lightBlue_1);
    }
    li:hover {
      a {
        color: var(--mediumSlateBlue);
        text-decoration: underline;
      }
    }
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--lightBlue_1);
  }
  @media only screen and (max-width: 768px) {
    .footer__links {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div
          className="footer__wrapper"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Link to="home" smooth>
            <Logo className="footer__logo" />
          </Link>
          <ParagraphText className="footer__desc">
            Hecodex is a startup studio will bring a new innovation on
            Blockchain Space.
          </ParagraphText>
          <div className="footer__links">
            <ul>
              <li>
                <Link to="home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" smooth>
                  Features
                </Link>
              </li>
              <li>
                <Link to="about" smooth>
                  Docs
                </Link>
              </li>
              <li>
                <Link to="tools" smooth>
                  Tools
                </Link>
              </li>
              <li>
                <Link to="roadmap" smooth>
                  Roadmap
                </Link>
              </li>
              <li>
                <a href="https://twitter.com/HecodexOfficial" smooth>
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/hecodex" smooth>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://t.me/hecodex" smooth>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <ParagraphText className="footer__copyright">
            © Hecodex {new Date().getFullYear()}. All rights reserved
          </ParagraphText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
