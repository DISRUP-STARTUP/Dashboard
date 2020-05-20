import React, { Fragment, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Table, Form, Input, Select, Spin } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import FeatherIcon from 'feather-icons-react';
import { Link, Switch, Route } from 'react-router-dom';
import Heading from '../../components/heading/heading';
import { FigureCart } from './Style';
import { Button } from '../../components/buttons/buttons';

const Checkout = lazy(() => import('./overview/CheckOut'));

const ShoppingCart = ({ match }) => {
  const [form] = Form.useForm();

  const dataSource = [
    {
      key: '1',
      product: (
        <FigureCart>
          <img style={{ width: 70 }} src={require('../../static/img/products/1.png')} alt="" />
          <figcaption>
            <Heading as="h4">Fiber Base Chair</Heading>
            <p>Size : Large &nbsp;&nbsp; Color : Brown</p>
          </figcaption>
        </FigureCart>
      ),
      price: '$' + 248.66,
      quantity: (
        <div>
          <Button>
            <FeatherIcon icon="minus" size={14} />
          </Button>
          1
          <Button>
            <FeatherIcon icon="plus" size={14} />
          </Button>
        </div>
      ),
      total: '$' + 248.66,
      action: (
        <Link to="#">
          <FeatherIcon icon="trash-2" size={16} />
        </Link>
      ),
    },
    {
      key: '2',
      product: (
        <FigureCart>
          <img style={{ width: 70 }} src={require('../../static/img/products/2.png')} alt="" />
          <figcaption>
            <Heading as="h4">Fiber Base Chair</Heading>
            <p>Size : Large &nbsp;&nbsp; Color : Brown</p>
          </figcaption>
        </FigureCart>
      ),
      price: '$' + 248.66,
      quantity: (
        <div>
          <Button>
            <FeatherIcon icon="minus" size={14} />
          </Button>
          1
          <Button>
            <FeatherIcon icon="plus" size={14} />
          </Button>
        </div>
      ),
      total: '$' + 248.66,
      action: (
        <Link to="#">
          <FeatherIcon icon="trash-2" size={16} />
        </Link>
      ),
    },
  ];

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const submitCoupon = values => {
    console.log('Received values of form: ', values);
  };

  const submitPromo = values => {
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;

  return (
    <Fragment>
      <PageHeader ghost title="Shopping Cart" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={15}>
                <Col md={18}>
                  <Switch>
                    <Suspense
                      fallback={
                        <div className="spin">
                          <Spin />
                        </div>
                      }
                    >
                      <Route
                        exact
                        path={match.path}
                        component={() => {
                          return (
                            <Fragment>
                              <Table pagination={false} dataSource={dataSource} columns={columns} />
                              <Form form={form} name="submitcoupon" onFinish={submitCoupon}>
                                <Row gutter={15}>
                                  <Col md={6}>
                                    <Form.Item name="coupon" label="">
                                      <Input placeholder="Coupon Code" />
                                    </Form.Item>
                                  </Col>
                                  <Col md={2}>
                                    <Button htmlType="submit" type="primary">
                                      Apply Coupon
                                    </Button>
                                  </Col>
                                </Row>
                              </Form>
                            </Fragment>
                          );
                        }}
                      />
                      <Route path={match.path + '/checkout'} component={Checkout} />
                    </Suspense>
                  </Switch>
                </Col>
                <Col md={6}>
                  <Cards
                    bodyStyle={{
                      backgroundColor: '#F8F9FB',
                    }}
                    headless
                  >
                    <Heading as="h4">Order Summary</Heading>
                    <Cards headless>
                      <p>Subtotal : {'$' + 497.32}</p>
                      <p>Descount : -20</p>
                      <p>Shipping Charge : 30</p>
                      <Form form={form} name="promo" onFinish={submitPromo}>
                        <Form.Item name="couponType" initialValue="" label="">
                          <Select style={{ width: '100%' }}>
                            <Option value="">% Select Coupon</Option>
                            <Option value="one">% Coupon one</Option>
                            <Option value="tow">% Coupon tow</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item name="promo" label="Promo Code">
                          <Input style={{ width: '70%' }} placeholder="Promo Code" />
                          <Button htmlType="submit" type="primary">
                            Apply
                          </Button>
                        </Form.Item>
                      </Form>
                      <hr />
                      <Heading as="h4">Total : {'$' + 507.32}</Heading>
                      <Link to={match.path + '/checkout'}>
                        Proceed To Checkout <FeatherIcon icon="arrow-right" size={14} />
                      </Link>
                    </Cards>
                  </Cards>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ShoppingCart;
