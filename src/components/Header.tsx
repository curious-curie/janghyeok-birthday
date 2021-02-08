import React from 'react';
import Headroom from 'react-headroom';
import { Box, Button, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { useScrollSection, useScrollSections } from 'react-scroll-section';
import Link from './Link';
import { capitalize } from '../utils/string';
import { useHelmetQuery } from '../queries/useHelmetQuery';

const Header = () => {
  const sections = useScrollSections();

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <HomeLink />
        <Flex mr={[0, 3, 5]}>
          <div style={{ color: '#fff', fontSize: '24px'}}>유규리 아동 후원 재단</div>
        </Flex>
      </Flex>
    </StyledHeadroom>
  );
};

export const getImgSrc = (index: number) => {
  if(+index === 1) return 'https://user-images.githubusercontent.com/47528556/107217544-a8b10200-6a51-11eb-95a8-24b51c8c47b1.png'
  if(+index === 2) return 'https://user-images.githubusercontent.com/47528556/107217632-c8e0c100-6a51-11eb-8909-32566ce70b0b.png'
  return 'https://user-images.githubusercontent.com/47528556/107217786-080f1200-6a52-11eb-93a4-dc65a2496cf0.png'
}

const HomeLink = () => {
  // const { profile } = useHelmetQuery();
  const { onClick } = useScrollSection('home');
  return (
    <Button onClick={onClick} variant="empty">
      <Flex justifyContent="center">
        <Image
          src={getImgSrc(2)}
          height={['60px', '80px']}
          width={['60px', '80px']}
          alt="Portfolio Logo"
          p={2}
          css={{ borderRadius: '20px', cursor: 'pointer' }}
        />
      </Flex>
    </Button>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
