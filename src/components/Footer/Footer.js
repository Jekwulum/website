import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FiPhone, FiMail } from 'react-icons/fi';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call <FiPhone size='2rem' /></LinkTitle>
          <LinkItem href='tel:2348125493107'>2348125493107</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <FiMail size='2rem' /> </LinkTitle>
          <LinkItem href="mailto:charlesnwoye2@gmail.com">charlesnwoye2@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Excellence is my forte</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://twitter.com'>
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
