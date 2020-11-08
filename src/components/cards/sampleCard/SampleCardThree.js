import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardWrapper = styled.figure`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  margin: 15px 0;
  figcaption {
    h2 {
      margin: 18px 0 17px 0;
    }
    p {
      line-height: 25px;
    }
  }
`;

const SampleCardThree = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={require(`../../../${img}`)} alt="" />
      <figcaption>
        <h2>{title}</h2>
        <p>{content}</p>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardThree.propTypes = {
  item: propTypes.object,
};

SampleCardThree.defaultProps = {
  item: {
    id: 1,
    title: 'User Friendly',
    content: 'Lorem Ipsum is simply dummy text of the',
    img: 'static/img/sampleCards/1.svg',
  },
};

export default SampleCardThree;
