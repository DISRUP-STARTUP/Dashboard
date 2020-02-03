import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, notification, Icon, Button, Divider } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { BtnBasic } from '../../../components/antd/buttons/antd-buttons';

const Notifications = props => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const openNotification2 = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };

  const close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  const openNotification3 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const openNotificationCustomIcon = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
  };

  const openNotificationCustomStyle = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  const openNotificationPlacement = placement => {
    notification.info({
      message: `Notification ${placement}`,
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <Fragment>
      <PageHeader title="Notifications" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Notification">
              <Button type="primary" onClick={openNotification}>
                Open the notification box
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Duration after which the notification box is closed" caption="The simplest use of Notification">
              <Button type="primary" onClick={openNotification2}>
                Open the notification box
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Custom close button" caption="The simplest use of Notification">
              <Button type="primary" onClick={openNotification3}>
                Open the notification box
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Notification with icon" caption="The simplest use of Notification">
              <BtnBasic type="success" click={() => openNotificationWithIcon('success')}>
                Success
              </BtnBasic>
              <BtnBasic type="info" click={() => openNotificationWithIcon('info')}>
                Info
              </BtnBasic>
              <BtnBasic type="warning" click={() => openNotificationWithIcon('warning')}>
                Warning
              </BtnBasic>
              <BtnBasic type="error" click={() => openNotificationWithIcon('error')}>
                Error
              </BtnBasic>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Notification with custom icon" caption="The simplest use of Notification">
              <Button type="primary" onClick={openNotificationCustomIcon}>
                Open the notification box
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Notification with custom Style" caption="The simplest use of Notification">
              <Button type="primary" onClick={openNotificationCustomStyle}>
                Open the notification box
              </Button>
              ,
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Notification with placement" caption="The simplest use of Notification">
              <BtnBasic type="primary" click={() => openNotificationPlacement('topLeft')}>
                <Icon type="radius-upleft" />
                topLeft
              </BtnBasic>
              <BtnBasic type="primary" click={() => openNotificationPlacement('topRight')}>
                <Icon type="radius-upright" />
                topRight
              </BtnBasic>
              <Divider />
              <BtnBasic type="primary" click={() => openNotificationPlacement('bottomLeft')}>
                <Icon type="radius-bottomleft" />
                bottomLeft
              </BtnBasic>
              <BtnBasic type="primary" click={() => openNotificationPlacement('bottomRight')}>
                <Icon type="radius-bottomright" />
                bottomRight
              </BtnBasic>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Notifications;
