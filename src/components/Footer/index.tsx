import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import QRCode from '../../qr/qr';
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <h1>Latina Web</h1>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/juanxp1/latinaWeb"
                src="github.svg"
              />
              <SocialLink href="#" src="twitter.svg" />
              <SocialLink
                href="https://www.linkedin.com/in/ericks-jes%C3%BAs-espinoza-g%C3%B3mez-58b9b8231/"
                src="linkedin.svg"
              />
            </FooterContainer>
            <QRCode />
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

