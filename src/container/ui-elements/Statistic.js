import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Statistic, Button, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const { Countdown } = Statistic;
const Statistics = () => {
  const onFinish = () => {
    console.log('finished!');
  };

  return (
    <Fragment>
      <PageHeader title="Statistics" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless title="Basic" caption="The simplest use of Statistic">
              <Row gutter={16}>
                <Col span={6}>
                  <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={6}>
                  <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                  </Button>
                </Col>
                <Col span={6}>
                  <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
                </Col>
                <Col span={6}>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="In Card and Counter" caption="The simplest use of Statistic">
              <Row gutter={15}>
                <Col md={6}>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                </Col>
                <Col md={6}>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                  />
                </Col>
                <Col md={6}>
                  <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col md={6}>
                  <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Statistics;
