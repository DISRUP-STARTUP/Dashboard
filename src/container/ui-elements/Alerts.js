import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main, AlertList } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';
import FeatherIcon from 'feather-icons-react';

const Alerts = () => {
  return (
    <Fragment>
      <PageHeader title="Alerts" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" size="large">
              <AlertList>
                <Alert message="" description="Success Text" type="success" />
              </AlertList>
            </Cards>
            <Cards title="Closable" size="large">
              <AlertList>
                <Alert 
                  closable
                  message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                  type="warning"
                />
                <Alert
                  closable
                  message="Error Text"
                  description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                  type="error"
                />
              </AlertList>
            </Cards>
            <Cards title="Icon" size="large">
              <AlertList>
                <Alert showIcon message="" description="Success Tips" type="success" />
                <Alert showIcon message="" description="Informational Notes" type="info" />
                <Alert showIcon message="" description="Warning" type="warning" />
                <Alert showIcon message="" description="Error" type="error" />
                <Alert
                  message={
                    <div>
                      <FeatherIcon icon="layers" size={15} />
                      <sapn>Success Tips</sapn>
                    </div>
                  }
                  description="Detailed description and advice about successful copywriting."
                  type="success" 
                />
                <Alert 
                  showIcon
                  message="Informational Notes"
                  description="Additional description and information about copywriting."
                  type="info" 
                />
                <Alert 
                  showIcon
                  message="Warning"
                  description="This is a warning notice about copywriting."
                  type="warning" 
                />
                <Alert 
                  showIcon 
                  message="Error" 
                  description= "This is an error message about copywriting."
                  type="error" 
                />
                <Alert message="Success Text" type="success" />
                <Alert message="Info Text" type="info" />
                <Alert message="Warning Text" type="warning" />
                <Alert message="Error Text" type="error" />
              </AlertList>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="More Types" size="large">
              <AlertList>
                <Alert message="" description="Success Text" type="success" />
                <Alert message="" description="Info Text" type="info" />
                <Alert message="" description="Warning Text" type="warning" />
                <Alert message="" description="Error Text" type="error" />
              </AlertList>
            </Cards>
            <Cards title="Description" size="large">
              <AlertList>
                <Alert
                  message="Success Text"
                  description="Success Description Success Description Success Description"
                  type="success" 
                />
                <Alert
                  message="Info Text"
                  description="Info Description Info Description Info Description Info Description"
                  type="info" 
                />
                <Alert
                  message="Warning Text"
                  description="Warning Description Warning Description Warning Description Warning Description"
                  type="warning" 
                />
                <Alert
                  message="Error Text"
                  description="Error Description Error Description Error Description Error Description"
                  type="error" 
                />
              </AlertList>
            </Cards>
            <Cards headless title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple success alert—check it out!</sapn>
                  </div>
                }
                type="success"
              />
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple error alert—check it out!</sapn>
                  </div>
                }
                type="error"
              />
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple warning alert—check it out!</sapn>
                  </div>
                }
                type="warning"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple info alert—check it out!</sapn>
                  </div>
                }
                type="info"
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple success alert—check it out!</sapn>
                  </div>
                }
                type="success"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple error alert—check it out!</sapn>
                  </div>
                }
                type="error"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple warning alert—check it out!</sapn>
                  </div>
                }
                type="warning"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple info alert—check it out!</sapn>
                  </div>
                }
                type="info"
              />
            </Cards>
            <Cards title="Customized Close Text" size="large">
              <AlertList>
                <Alert 
                  closeText="Close Now"
                  closable
                  message="" 
                  description="Info Text" 
                  type="info" 
                />
              </AlertList>
            </Cards>
            <Cards title="Smoothly Unmount" size="large">
              <AlertList>
                <Alert 
                  closable
                  message="" 
                  description="Alert Message Text" 
                  type="success" 
                />
              </AlertList>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Alerts;
