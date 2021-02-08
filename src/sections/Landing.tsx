import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';
import { text } from '@fortawesome/fontawesome-svg-core';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  // const { name, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  const copyText = () => {
    console.log('text')
    const textArea = document.createElement("textarea");
    textArea.value = '3021162813611 농협';
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.visibility = 'hidden';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      navigator.clipboard.writeText(textArea.value);
      console.log(successful)
    } catch(e) {
      console.log(e)
    }
  }
  const roles = [
    '장혁이의 외로운 생일😢', '후원으로 도와주세요!',
    '행복한 생일을 위해🎂', '작은 금액도 큰 힘입니다.'
  ]

  return (
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        mb={[3, 4, 5]}
      >
        <div style={{ fontSize: '32px', margin: '16px 0'}}>장혁이를 도와주세요.</div>
        <div style={{ fontSize: '24px', color: '#000', margin: '4px 0'}}>내가 가진 것을 나누어 아동의 일상이 변화되는 순간, 내 삶도 반짝입니다.</div>
        <div style={{ fontSize: '24px', color: '#000'}}>2월 11일 우리 장혁 어린이 생일, 후원으로 마음을 전달해주세요.</div>
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={2000}>
          {roles
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        <div style={{background: '#7c37ad', borderRadius: '8px', padding: '16px', fontSize: '56px', color: '#fff', textAlign: 'center'}}>3021162813611 농협 최장혁</div>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap" onClick={copyText}>
        <div style={{ cursor: 'pointer', margin: '16px', fontSize: '20px'}}>복사하기</div>
      </Flex>

      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
