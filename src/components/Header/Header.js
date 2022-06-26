import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFilledTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


let orangeColor = '#c7722c';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: orangeColor, marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" >
          <NavLink style={{ color: orangeColor }}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" >
          <NavLink style={{ color: orangeColor }}>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" >
          <NavLink style={{ color: orangeColor }}>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons target='_blank' href="https://github.com/Jekwulum">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target='_blank' href="https://www.linkedin.com/in/charles-nwoye-82677a19a">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target='_blank' href="https://twitter.com/chuk_charles">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
