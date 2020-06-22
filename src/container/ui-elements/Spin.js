import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Spin } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { SpinerWraperStyle } from './ui-elements-styled';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

const Spiner = () => {
  return (
    <Fragment>
      <PageHeader title="Spin" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Spin">
              <Spin />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Size" caption="The simplest use of Spin">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Inside a container" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin />
              </SpinerWraperStyle>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Custom Indicator" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin indicator={antIcon} />
              </SpinerWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Spiner;
