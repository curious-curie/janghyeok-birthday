import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';

const markdown = `

### 장혁이가 꿈을 펼쳐 가는 소중한 기회가 됩니다.
개발자를 꿈꾸는 장혁이가 중고 컴퓨터를 살 수 있도록 도와주세요.
### 마음껏 공부할 수 있는 환경이 됩니다.
피치 못한 사정으로 비극적인 재수강을 해야하는 장혁이를 도와주세요.
### 문제를 해결하는 지원금이 됩니다.
장혁이가 친구들에게 놀림받아 우는 일이 없도록 도와주세요.

`
const About = () => {
  const { profile } = useAboutMeQuery();

  return (
    <Section.Container id="about" Background={Background}>
      
      <Section.Header name="여러분의 후원금은 든든한 울타리가 됩니다." icon="" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={markdown} renderers={markdownRenderer} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...profile} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

export default About;
