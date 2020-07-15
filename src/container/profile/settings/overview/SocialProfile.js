import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { SocialProfileForm } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import Heading from '../../../../components/heading/heading';
import { BasicFormWrapper } from '../../../styled';

const SocialProfile = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <Cards
      title={
        <div className="setting-card-title">
          <Heading as="h4">Social Profiles</Heading>
          <span>Add elsewhere links to your profile </span>
        </div>
      }
    >
      <SocialProfileForm>
        <Row justify="center">
          <Col xxl={12} xl={14} sm={18} xs={24}>
            <BasicFormWrapper>
              <Form name="social" onFinish={handleSubmit}>
                <Form.Item name="facebook" label="Facebook">
                  <Input className="facebook" prefix={<FeatherIcon icon="facebook" size={16} />} placeholder="URL" />
                </Form.Item>
                <Form.Item name="twitter" label="Twitter">
                  <Input
                    className="twitter"
                    prefix={<FeatherIcon icon="twitter" size={16} />}
                    placeholder="@username"
                  />
                </Form.Item>
                <Form.Item name="linkedin" label="Linkedin">
                  <Input className="linkedin" prefix={<FeatherIcon icon="linkedin" size={16} />} placeholder="URL" />
                </Form.Item>
                <Form.Item name="instagram" label="Instagram">
                  <Input className="instagram" prefix={<FeatherIcon icon="instagram" size={16} />} placeholder="URL" />
                </Form.Item>
                <Form.Item name="github" label="GitHub">
                  <Input className="github" prefix={<FeatherIcon icon="github" size={16} />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="youtube" label="Youtube">
                  <Input className="youtube" prefix={<FeatherIcon icon="youtube" size={16} />} placeholder="Url" />
                  <div className="setting-form-actions">
                    <Button size="default" htmlType="submit" type="primary">
                      Update Social Profile
                    </Button>
                    &nbsp; &nbsp;
                    <Button size="default" onClick={handleCancel} type="light">
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </SocialProfileForm>
    </Cards>
  );
};

export default SocialProfile;
