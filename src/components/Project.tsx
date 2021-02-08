import React from 'react';
import SocialLink from '../components/SocialLink';
import ImageLabel from './ImageLabel';
import Hide from '../components/Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Project as ProjectType } from '../types';
import { Card } from './Card';

type Props = ProjectType;

export const getImgSrc = (index : number) => {
  if(+index === 1) return 'https://user-images.githubusercontent.com/47528556/107217544-a8b10200-6a51-11eb-95a8-24b51c8c47b1.png'
  if(+index === 2) return 'https://user-images.githubusercontent.com/47528556/107217632-c8e0c100-6a51-11eb-8909-32566ce70b0b.png'
  return 'https://user-images.githubusercontent.com/47528556/107217786-080f1200-6a52-11eb-93a4-dc65a2496cf0.png'
}

const Project = ({
  name,
  description,
  logo,
  index,
}: Props) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto', fontSize: '1.2em' }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={getImgSrc(index)} />
        {/* <ProjectTag>
          <Flex
            m={1}
            style={{
              float: 'right',
            }}
          >
          </Flex>
          <ImageLabel bg="primary" color="white" position="bottom-right" round>
            {type}
          </ImageLabel>

        </ProjectTag> */}
      </ImageContainer>
    </Flex>
  </Card>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
        line-height: 2;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

export default Project;
