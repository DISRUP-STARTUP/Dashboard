import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Empty, Button } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const EmptyData = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Empty" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Empty">
              <Empty />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Chose image" caption="The simplest use of Empty">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Customize" caption="The simplest use of Empty">
              <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                imageStyle={{
                  height: 60,
                }}
                description={
                    <span>
                      Customize <a href="#API">Description</a>
                    </span>
                }
              >
                <Button type="primary">Create Now</Button>
              </Empty>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default EmptyData;
