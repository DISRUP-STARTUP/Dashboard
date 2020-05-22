import Styled from 'styled-components';

const DropdownStyle = Styled.div`
  .ant-card-body .ant-btn {
      margin-right: 8px;
      margin-bottom: 8px;
  }
`;

const SpinerWraperStyle = Styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const CarouselStyleWraper = Styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 150px;
    line-height: 160px;
    background: #5A5F7D;
    overflow: hidden;
  }
  .ant-carousel .slick-dots li{
    width: 15px;
  }
  .ant-carousel .slick-dots li.slick-active{
    width: 25px;
  }
  .ant-radio-group{
    margin-bottom: 16px !important;
  }
  .ant-radio-button-wrapper{
    height: 38px;
    line-height: 36px;
    padding: 0 25.25px;
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const AvatarWraperStyle = Styled.div`
  .ant-avatar {
    margin: 5px;
    background: #E3E6EF;
  }
  .ant-avatar:not(:last-child){
    margin-right: 15px;
  }
  .ant-badge-count{
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
`;

const BadgeWraperStyle = Styled.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: #ddd;
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    right: 15px;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    padding: 0;
    height: 20px;
    line-height: 14px;
    border: 3px solid #fff
  }
  .ant-scroll-number-custom-component{
    top: 10px !important;
    right: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    right: -1px;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    margin-left: 10px;
    color: #9299B8;
  }
`;

const BadgeRedStyle = Styled.div`
  .ant-badge:not(:last-child){
    margin-right: 20px;
  }
`;

const BadgeStandAloneStyle = Styled.div`
  .ant-badge-count{
    left: 0;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`;

const BadgeOverflowStyle = Styled.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`;

const BreadcrumbWrapperStyle = Styled.div`
  .ant-breadcrumb{
    color: #5A5F7D;
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: #5F63F2;
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: #9299B8;
  }
`;

const BadgeDynamicStyle = Styled.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin-left: 12px;
  }
}
.ant-badge-dot{
  right: 16px;
  top: 8px;
}
.ant-switch{
  margin-left: 15px;
}
`;

const CardStyleWrapper = Styled.div`
.ant-card{
  background: #F8F9FB;
}
.ant-card-head{
  border-color: #E3E6EF;
  background: #F8F9FB;
}
.ant-card-head .ant-card-head-title{
  padding: 12px 0;
}
.ant-card-head .ant-card-extra{
  padding: 12px 0;
}
.ant-card.ant-card-bordered .ant-card-head{
  background: #fff;
}
.ant-card-body{
  padding: 22px 25px 15px 25px !important
}
.ant-card-body p{
  margin-bottom: 4px;
}
.ant-card.ant-card-bordered {
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #E3E6EF !important;
}
.ant-card-small > .ant-card-head{
  font-size: 16px;
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.ant-card-small > .ant-card-body{
  padding: 12px 15px 8px 15px !important
}
`;

const CasCaderStyleWrapper = Styled.div`
  .ant-cascader-picker{
    display: block;
    width: fit-content;
  }
  .ant-cascader-picker:not(:last-child){
    margin-bottom: 20px;
  }
`;

export { DropdownStyle, SpinerWraperStyle, CarouselStyleWraper, AvatarWraperStyle, BadgeWraperStyle, BadgeStandAloneStyle , BadgeOverflowStyle, BreadcrumbWrapperStyle, BadgeRedStyle, BadgeDynamicStyle, CardStyleWrapper, CasCaderStyleWrapper };
