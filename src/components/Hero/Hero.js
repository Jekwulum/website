import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle style={{color: '#c7722c'}} main center>
        Hi, <br />
        I'm Charles Nwoye
      </SectionTitle>
      <SectionText>
        an experienced software engineer.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1o1-HaMi7ynlmg1pY7_tYc27rFj8AEgia/view?usp=sharing'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;