import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination } from 'antd';
import Heading from '../../../components/heading/heading';
import { useSelector } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Link } from 'react-router-dom';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import FeatherIcon from 'feather-icons-react';

const List = props => {
  const project = useSelector(state => state.projects.data);
  const [state, setState] = useState({
    projects: project,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    console.log(current, pageSize);
  };

  const dataSource = [];

  projects.length &&
    projects.map(project => {
      const { id, title, status, category } = project;
      return dataSource.push({
        key: id,
        project: (
          <ProjectListTitle>
            <Link to="/projectDetails/1">
              <Heading as="h4">{title}</Heading>
            </Link>
            <p>{category}</p>
          </ProjectListTitle>
        ),
        startDate: <span className="date-started">26 Dec 2019</span>,
        deadline: <span className="date-finished">18 Mar 2020</span>,
        assigned: (
          <ProjectListAssignees>
            <ul>
              <li>
                <img src={require(`../../../static/img/users/1.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/2.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/3.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/4.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/5.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/6.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/7.png`)} alt="" />
              </li>
            </ul>
          </ProjectListAssignees>
        ),
        status: <span className={status}>{status}</span>,
        completion: (
          <div className="project-list-progress">
            <Progress percent={84} status="active" />
            <p>12/15 Task Completed</p>
          </div>
        ),
        action: (
          <Dropdown
            content={
              <>
                <Link to="#">View</Link>
                <Link to="#">Edit</Link>
                <Link to="#">Delete</Link>
              </>
            }
          >
            <Link to="#">
              <FeatherIcon icon="more-horizontal" size={18} />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Assigned To',
      dataIndex: 'assigned',
      key: 'assigned',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <Row gutter={25}>
      <Col md={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
          </ProjectList>
        </Cards>
      </Col>
      <Col md={24} className="pb-30">
        <ProjectPagination>
          {projects.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
};

export default List;
