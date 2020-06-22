import React, { Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import { Main, PageHeaderWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const PageHeaders = () => {
  return (
    <Fragment>
      <PageHeader
        ghost
        buttons={[
          <CalendarButtonPageHeader key="1" />,
          <ExportButtonPageHeader key="2" />,
          <ShareButtonPageHeader key="3" />,
          <Button key="4" type="primary">
            <Icon type="plus" />
            Add New
          </Button>,
          // <DateRangePickerOne key="5" />,
        ]}
        title="Page Headers"
      />
      <Main>
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Basic header" caption="The simplest use of Page header">
              <PageHeaderWrapper>
                <PageHeader bgColor="#fff" title="Title" subTitle="This is a subtitle"/>
              </PageHeaderWrapper>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Custom header" caption="The simplest use of Page header">
              <PageHeader ghost title="Title" subTitle="This is a subtitle" />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Custom header" caption="The simplest use of Page header">
              <PageHeader
                ghost
                title="Title"
                subTitle="This is a subtitle"
                buttons={[
                  <CalendarButtonPageHeader key="1" />,
                  <ExportButtonPageHeader key="2" />,
                  <ShareButtonPageHeader key="3" />,
                  <Button key="4" type="primary">
                    <Icon type="plus" />
                    Add New
                  </Button>,
                  // <DateRangePickerOne key="5" />,
                ]}
              />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Breadcrumb header" caption="The simplest use of Breadcrumb header">
              <PageHeader bgColor="#fff" title="Title" subTitle="This is a subtitle" routes={routes} />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Extra content header" caption="The simplest use of Extra content header">
              <PageHeader
                bgColor="#fff"
                buttons={[
                  <Button type="default" key="3">
                    Operation
                  </Button>,
                  <Button type="default" key="2">
                    Operation
                  </Button>,
                  <Button type="primary" key="1">
                    Primary
                  </Button>,
                ]}
                title="Title"
                subTitle="This is a subtitle"
                routes={routes}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default PageHeaders;
