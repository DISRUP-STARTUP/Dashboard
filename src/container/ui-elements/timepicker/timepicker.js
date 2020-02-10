import React, { Fragment, useState } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, TimePicker, Button } from 'antd';
import moment from 'moment';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
const format = 'HH:mm';
const TimePickers = props => {
  const [state, setState] = useState({ open: false });

  const handleOpenChange = open => {
    setState({ open });
  };
  const handleClose = () => setState({ open: false });

  return (
    <Fragment>
      <PageHeader title="Time picker" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Time picker">
              <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Disebled" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="interval option" caption="The simplest use of Time picker">
              <TimePicker minuteStep={15} secondStep={10} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="12 hours" caption="The simplest use of Time picker">
              <TimePicker use12Hours />
              <TimePicker use12Hours format="h:mm:ss A" />
              <TimePicker use12Hours format="h:mm a" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Three Size" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Hours and minute" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Addon" caption="The simplest use of Time picker">
              <TimePicker
                open={state.open}
                onOpenChange={handleOpenChange}
                addon={() => (
                  <Button size="small" type="primary" onClick={handleClose}>
                    Ok
                  </Button>
                )}
              />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default TimePickers;
