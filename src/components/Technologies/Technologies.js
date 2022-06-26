import React from 'react';
import { DiCode, DiCss3, DiDjango, DiFirebase, DiGo, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import { FiAirplay } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Span } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm experienced with with different technologies from Back-end development to design
    </SectionText>
    <List>
      <ListItem>
        <FiAirplay size='5rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiHtml5/> <Span>HTML</Span> <br />
            <DiCss3/> <Span>CSS</Span> <br />
            <DiReact size='2rem' /> <Span>React.js</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='5rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <DiNodejs size='2rem' /> <Span>Node.js</Span> <br />
            <DiDjango size='2rem' /> <Span>Django REST framework</Span> <br />
            <DiPostgresql size='2rem' /> <Span>PostgreSQL</Span> <br />
            <DiMongodb size='2rem' /> <Span>Mongo</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size='5rem' />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            <DiPython /> <Span>Python</Span> <br />
            <DiJavascript/> <Span>JavaScript</Span> <br />
            <DiGo /> <Span>GO-Lang</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
