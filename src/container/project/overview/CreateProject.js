import React, { useState, useEffect } from 'react';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { Form, Input, Select, Col, Row, DatePicker } from 'antd';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

const CreateProject = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible: visible,
    modalType: 'primary',
    checked: [],
  });

  useEffect(() => {
    if (visible) {
      setState({
        visible: visible,
      });
    }
  }, [visible]);

  const handleOk = values => {
    console.log('Received values of form: ', values);
    onCancel();
  };

  const handleCancel = e => {
    onCancel();
  };

  const options = [
    {
      label: 'Privet',
      value: 'privet',
    },
    {
      label: 'Team',
      value: 'team',
    },
    {
      label: 'Public',
      value: 'public',
    },
  ];

  return (
    <Modal
      type={state.modalType}
      title="Create Project"
      visible={state.visible}
      footer={[
        <Button type="primary" key="submit" onClick={handleOk}>
          Add New Project
        </Button>,
        <Button type="default" key="back" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
      onCancel={handleCancel}
    >
      <Form form={form} name="createProject" onFinish={handleOk}>
        <Form.Item name="project" label="">
          <Input placeholder="Project Name" />
        </Form.Item>
        <Form.Item name="category" initialValue="" label="">
          <Select style={{ width: '100%' }}>
            <Option value="">Project Category</Option>
            <Option value="one">Project One</Option>
            <Option value="two">Project Two</Option>
          </Select>
        </Form.Item>
        <Form.Item name="description" label="">
          <Input.TextArea rows={4} placeholder="Project Description" />
        </Form.Item>
        <Form.Item name="pricacy" initialValue={['team']} label="Project Privacy">
          <CheckboxGroup options={options} />
        </Form.Item>
        <Form.Item name="members" label="Project Members">
          <Input placeholder="Search Members" />
        </Form.Item>
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
        <Row gutter={15}>
          <Col md={12}>
            <Form.Item name="start" label="Start Date">
              <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item name="end" label="End Date">
              <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateProject;
