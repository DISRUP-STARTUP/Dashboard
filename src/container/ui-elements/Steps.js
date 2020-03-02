import React, { Fragment, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Steps, Icon, Divider } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { PopupWithIcon } from '../../components/popup/popup';
import { SwitchStep, NavigationStep } from '../../components/steps/steps';

const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <PopupWithIcon
    placement="bottomLeft"
    content={
      <span className="span">
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </PopupWithIcon>
);
const Stepess = () => {
  const [state, setState] = useState({
    current: 0,
  });

  const { current } = state;

  const onChange = current => {
    console.log('onChange:', current);
    setState({ current });
  };

  return (
    <Fragment>
      <PageHeader title="Steps" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardHeadLessFrame title="Basic Step" caption="The simplest use of Steps">
              <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="With Icon" caption="The simplest use of Steps">
              <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Switch Step" caption="The simplest use of Steps">
              <SwitchStep />
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Vertical mini version" caption="The simplest use of Steps">
              <Steps direction="vertical" size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Error Status" caption="The simplest use of Steps">
              <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Custom dot style" caption="The simplest use of Steps">
              <Steps current={1} progressDot={customDot}>
                <Step title="Finished" description="You can hover on the dot." />
                <Step title="In Progress" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Clickable" caption="The simplest use of Steps">
              <Steps current={current} onChange={onChange}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>

              <Divider />

              <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </CardHeadLessFrame>
          </Col>
          <Col md={24}>
            <CardHeadLessFrame title="Navigation Steps" caption="The simplest use of Steps">
              {/* <Steps type="navigation" current={current} onChange={onChange} style={stepStyle}>
                <Step status="finish" title="Step 1" />
                <Step status="process" title="Step 2" />
                <Step status="wait" title="Step 3" />
              </Steps>
              <Steps type="navigation" size="small" current={current} onChange={onChange} style={stepStyle}>
                <Step status="finish" title="finish 1" />
                <Step status="finish" title="finish 2" />
                <Step status="process" title="current process" />
                <Step status="wait" title="wait" disabled />
              </Steps> */}

              <NavigationStep>
                <Step status="finish" title="Step 1" />
                <Step status="process" title="Step 2" />
                <Step status="wait" title="Step 3" />
              </NavigationStep>
              <NavigationStep>
                <Step status="finish" title="finish 1" />
                <Step status="finish" title="finish 2" />
                <Step status="process" title="current process" />
                <Step status="wait" title="wait" disabled />
              </NavigationStep>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Stepess;
