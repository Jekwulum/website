import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Img } from '../Projects/ProjectsStyles';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Hackerrank 30 days of code', image: '/images/30_days.jpeg' },
  { text: 'Hackerrank problem solving', image: '/images/problem_solving.jpeg' },
  { text: 'Hackerrank python programming', image: '/images/python_gold.png' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <img style={{ height: '7rem', width: '20rem' }} src={card.image} />
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
