import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import GridCard from '../project/overview/GridCard';
import ProductCards from '../ecommerce/product/overview/ProductCards';
import ProductCardsList from '../ecommerce/product/overview/ProductCardList';
import GalleryCards from '../pages/overview/GalleryCard';
import ContactCard from '../contact/overview/ContactCard';
import { Cards } from '../../components/cards/frame/cards-frame';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';
import SampleCardTwo from '../../components/cards/sampleCard/SampleCardTwo';
import SampleCardThree from '../../components/cards/sampleCard/SampleCardThree';
import SampleCardFour from '../../components/cards/sampleCard/SampleCardFour';
import SampleCardFive from '../../components/cards/sampleCard/SampleCardFive';
import SampleCardSix from '../../components/cards/sampleCard/SampleCardSix';
import SampleCardSeven from '../../components/cards/sampleCard/SampleCardSeven';
import { cardOne, cardTwo, cardThree } from '../../demoData/sampleCards.json';

const actions = (
  <>
    <Link to="#">
      <FeatherIcon size={14} icon="eye" />
      <span>View</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="edit" />
      <span>Edit</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="trash-2" />
      <span>Delete</span>
    </Link>
  </>
);

const WidgetsCard = () => {
  const { products, projects, users, team, gallery, contactUsers } = useSelector(state => {
    return {
      products: state.products.data,
      projects: state.projects.data,
      users: state.users,
      team: state.team.data,
      gallery: state.gallery.data,
      contactUsers: state.Contact.data,
    };
  });
  return (
    <>
      <PageHeader
        title="Widgets Cards"
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
        <Row gutter={25}>
          {projects.map(project => {
            return (
              project.id <= 3 && (
                <Col key={project.id} md={8}>
                  <GridCard value={project} />
                </Col>
              )
            );
          })}

          {users.map(user => {
            return (
              user.id <= 4 && (
                <Col key={user.id} lg={6} md={8} sm={12}>
                  <UserCards user={user} />
                </Col>
              )
            );
          })}

          {products.map((product, index) => {
            return (
              index <= 3 && (
                <Col key={product.id} lg={6} md={8} sm={12}>
                  <ProductCards product={product} />
                </Col>
              )
            );
          })}

          {team.map(member => {
            return (
              member.id <= 4 && (
                <Col key={member.id} lg={6} md={8} sm={12}>
                  <TeamCard actions={actions} user={member} />
                </Col>
              )
            );
          })}

          {gallery.map(item => {
            return (
              item.id <= 4 && (
                <Col key={item.id} lg={6} md={8} sm={12}>
                  <GalleryCards actions={actions} item={item} />
                </Col>
              )
            );
          })}

          {contactUsers.map(user => {
            return (
              user.id <= 4 && (
                <Col key={user.id} lg={6} md={8} sm={12}>
                  <Cards headless>
                    <ContactCard user={user} />
                  </Cards>
                </Col>
              )
            );
          })}

          {cardOne.map(item => {
            return (
              <Col key={item.id} lg={6} md={8} sm={12}>
                <SampleCardOne item={item} />
              </Col>
            );
          })}

          {cardTwo.map(item => {
            return (
              <Col key={item.id} lg={6} md={8} sm={12}>
                <SampleCardTwo item={item} />
              </Col>
            );
          })}

          {cardThree.map(item => {
            return (
              <Col key={item.id} lg={6} md={8} sm={12}>
                <SampleCardThree item={item} />
              </Col>
            );
          })}

          {cardOne.map(item => {
            return (
              <Col key={item.id} lg={6} md={8} sm={12}>
                <SampleCardFour item={item} />
              </Col>
            );
          })}

          <Col lg={6} md={8} sm={24}>
            <SampleCardFive />
          </Col>
          <Col lg={6} md={8} sm={24}>
            <SampleCardFive />
          </Col>
          <Col lg={6} md={8} sm={24}>
            <SampleCardFive />
          </Col>
          <Col lg={6} md={8} sm={24}>
            <SampleCardFive />
          </Col>

          <Col lg={6} md={8} sm={12}>
            <SampleCardSix />
          </Col>
          <Col lg={6} md={8} sm={12}>
            <SampleCardSix />
          </Col>
          <Col lg={6} md={8} sm={12}>
            <SampleCardSix />
          </Col>
          <Col lg={6} md={8} sm={12}>
            <SampleCardSix />
          </Col>

          <Col lg={6} md={8} sm={12}>
            <SampleCardSeven />
          </Col>

          <Col md={18}>
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default WidgetsCard;
