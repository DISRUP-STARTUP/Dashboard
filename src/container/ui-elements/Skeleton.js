import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Skeletons = () => {
  return (
    <Fragment>
      <PageHeader title="Skeleton" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Skeleton">
              <Skeleton />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Complex combination" caption="The simplest use of Skeleton">
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Active Animation" caption="The simplest use of Skeleton">
              <Skeleton active avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Skeletons;
