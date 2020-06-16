import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Result, Button, Icon, Typography } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { NavLink } from 'react-router-dom';

const { Paragraph, Text } = Typography;
const Results = () => {
  return (
    <Fragment>
      <PageHeader title="Results" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Success" caption="The simplest use of Results">
              <Result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                style={{padding: 0}}
                extra={[
                  <Button type="primary" key="console">
                    Go Console
                  </Button>,
                  <Button key="buy">Buy Again</Button>,
                ]}
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Info" caption="The simplest use of Results">
              <Result
                title="Your operation has been executed"
                style={{padding: 0}}
                extra={
                  <Button type="primary" key="console">
                    Go Console
                  </Button>
                }
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Warning" caption="The simplest use of Results">
              <Result
                status="warning"
                title="There are some problems with your operation."
                style={{padding: 0}}
                extra={
                  <Button type="primary" key="console">
                    Go Console
                  </Button>
                }
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="403" caption="The simplest use of Results">
              <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                style={{padding: 0}}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="404" caption="The simplest use of Results">
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                style={{padding: 0}}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="500" caption="The simplest use of Results">
              <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                style={{padding: 0}}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Error" caption="The simplest use of Results">
              <Result
                status="error"
                title="Submission Failed"
                subTitle="Please check and modify the following information before resubmitting."
                style={{padding: 0}}
                extra={[
                  <Button type="primary" key="console">
                    Go Console
                  </Button>,
                  <Button key="buy">Buy Again</Button>,
                ]}
              >
                <div className="desc">
                  <Paragraph>
                    <Text
                      strong
                      style={{
                        fontSize: 16,
                      }}
                    >
                      The content you submitted has the following error:
                    </Text>
                  </Paragraph>
                  <Paragraph>
                    <Icon style={{ color: 'red' }} type="close-circle" /> Your account has been frozen
                    <NavLink to="#">Thaw immediately &gt;</NavLink>
                  </Paragraph>
                  <Paragraph>
                    <Icon style={{ color: 'red' }} type="close-circle" /> Your account is not yet eligible to apply{' '}
                    <NavLink to="#">Apply Unlock &gt;</NavLink>
                  </Paragraph>
                </div>
              </Result>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Results;
