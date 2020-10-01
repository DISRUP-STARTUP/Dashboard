import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Form, Input, Select, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link, useRouteMatch, Switch, Route, NavLink } from 'react-router-dom';
import { EmailNav, EmailWrapper, Bullet } from './style';
import { BasicFormWrapper, Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Modal } from '../../components/modals/antd-modals';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

import { noteAddData } from '../../redux/note/actionCreator';

const { Option } = Select;
const Note = () => {
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { path } = useRouteMatch();
  const [state, setState] = useState({
    visible: false,
    modalType: 'primary',
    checked: [],
  });

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleOk = values => {
    onCancel();
    const arrayData = [];
    noteData.map(data => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    dispatch(
      noteAddData([
        ...noteData,
        {
          ...values,
          key: max + 1,
          time: new Date().getTime(),
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const All = lazy(() => import('./overview/all'));
  const Favorite = lazy(() => import('./overview/favorite'));
  const Personal = lazy(() => import('./overview/personal'));
  const Work = lazy(() => import('./overview/work'));
  const Social = lazy(() => import('./overview/social'));
  const Important = lazy(() => import('./overview/important'));

  return (
    <>
      <PageHeader
        ghost
        title="Note"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />

      <Main>
        <EmailWrapper>
          <Row gutter={30}>
            <Col xxl={5} xl={7} lg={10} xs={24}>
              <Cards headless>
                <div className="mail-sidebar-top">
                  <Button onClick={showModal} shape="round" type="primary" size="default" block>
                    <FeatherIcon icon="plus" size={18} /> Add Notes
                  </Button>
                </div>

                <div className="mail-sidebar-bottom">
                  <EmailNav>
                    <ul>
                      <li>
                        <NavLink to={`${path}/all`}>
                          <FeatherIcon icon="edit" size={18} />
                          <span className="nav-text">
                            <span>All</span>
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/favorite`}>
                          <FeatherIcon icon="star" size={18} />
                          <span className="nav-text">
                            <span>Favorites</span>
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                    <div className="nav-labels">
                      <p>
                        <img src={require('../../static/img/icon/label.png')} alt="icon" /> Labels
                      </p>
                      <ul>
                        <li>
                          <NavLink to={`${path}/personal`}>
                            <Bullet className="personal" /> Personal
                          </NavLink>
                        </li>
                        <li>
                          <Link to={`${path}/work`}>
                            <Bullet className="work" /> Work
                          </Link>
                        </li>
                        <li>
                          <Link to={`${path}/social`}>
                            <Bullet className="social" /> Social
                          </Link>
                        </li>
                        <li>
                          <Link to={`${path}/important`}>
                            <Bullet className="important" /> Important
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </EmailNav>
                </div>
              </Cards>
            </Col>
            <Col md={19}>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route exact path={`${path}/all`} component={All} />
                  <Route path={`${path}/favorite`} component={Favorite} />
                  <Route path={`${path}/personal`} component={Personal} />
                  <Route path={`${path}/work`} component={Work} />
                  <Route path={`${path}/social`} component={Social} />
                  <Route path={`${path}/important`} component={Important} />
                </Suspense>
              </Switch>
            </Col>
          </Row>
        </EmailWrapper>
        <Modal type={state.modalType} title={null} visible={state.visible} footer={null} onCancel={handleCancel}>
          <div className="project-modal">
            <BasicFormWrapper>
              <Form form={form} name="createProject" onFinish={handleOk}>
                <Form.Item
                  rules={[{ required: true, message: 'Please input your note title!' }]}
                  name="title"
                  label="Title"
                >
                  <Input placeholder="Note Title" />
                </Form.Item>

                <Form.Item
                  rules={[{ required: true, message: 'Please input your note description!' }]}
                  name="description"
                  label="Description"
                >
                  <Input.TextArea rows={4} placeholder="Note Description" />
                </Form.Item>
                <Form.Item name="label" initialValue="personal" label="Note Label">
                  <Select style={{ width: '100%' }}>
                    <Option value="personal">Personal</Option>
                    <Option value="work">Work</Option>
                    <Option value="social">Social</Option>
                    <Option value="important">Important</Option>
                  </Select>
                </Form.Item>
                <Button htmlType="submit" size="default" type="primary" key="submit">
                  Add New Note
                </Button>
              </Form>
            </BasicFormWrapper>
          </div>
        </Modal>
      </Main>
    </>
  );
};

Note.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default Note;
