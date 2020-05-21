import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Rate } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Rating = () => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [state, setState] = useState({
    value: 3,
  });

  const handleChange = value => {
    setState({ value });
  };

  const { value } = state;
  return (
    <Fragment>
      <PageHeader title="Rating" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <Rate />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Half Star">
              <Rate allowHalf defaultValue={2.5} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Show copywriting">
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
              </span>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Clear Star">
              <Rate defaultValue={3} />
              <span className="ant-rate-text">allowClear: true</span>
              <br />
              <Rate allowClear={false} defaultValue={3} />
              <span className="ant-rate-text">allowClear: false</span>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Rater">
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                &nbsp;&nbsp;
                {value + ' Star'}
              </span>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Rating;
