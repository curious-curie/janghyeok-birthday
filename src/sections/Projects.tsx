import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';

const Projects = () => {
  const projects = [{ name: '귀요미', description: '액면가 21학번, 최고의 귀여움을 자랑합니다. 정기 후원 시 후원자님만을 위한 장혁이의 프리스타일 댄스 및 랩 5분 공연이 펼쳐집니다.', index: 1}, 
  { name: '멋쟁이', description: '못하는 게 없는 멋쟁이입니다. 후원자분만을 위한 서울대학교 재학생 최장혁의 코딩 과외가 항시 기다리고 있습니다.', index: 2},
  { name: '장혁이 짱!', description: '미안 더이상 할 말이 없는 것 같아 장혁아 생일축하해~~~ 방문자 분들의 많은 후원 및 축하 메시지 부탁드립니다~ ', index: 3}]
  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="당신의 후원아동, 장혁이를 소개합니다." icon="💻" label="notebook" />

      <CardContainer minWidth="350px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {projects.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />

    <Triangle
      color="primary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Projects;
