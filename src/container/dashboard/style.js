import Styled from "styled-components";

const ECahrtCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    .card-chunk{
        width: 50%;
        flex: 0 0 50%;
    }
    @media (min-width: 992px) and (max-width: 1500px){
        .card-chunk{
            width: 100%;
            flex: 0 0 100%;
            h1{
                margin-bottom: 0;
            }
            p{
                margin: 5px 0 20px 0;
            }
        }
    }
`;

const Focard = Styled.div`
    canvas{
        width: 100% !important;
        margin-top: 65px;
        min-height: 100px;
    }}
    .focard-details{
        &.growth-downward{
            h1{
                font-size: 30px;
                margin: 0 0 4px;
            }
            .focard-status{
                .focard-status__percentage{
                    color: ${({theme})=>theme['danger-color']};
                }
            }
        }
        &.growth-upward{
            .focard-status{
                .focard-status__percentage{
                    color: ${({theme})=>theme['success-color']};
                }
            }
        }
        h1{
            font-weight: 600;
            margin-bottom: 2px;
        }
        .subtitle{
            font-size: 14px;
            color: #868EAE;
            margin-bottom: 10px;
        }
        .focard-status{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 -5px;
            span{
                display: inline-flex;
                align-items: center;
                margin: 0 5px;
                &.focard-status__percentage{
                    font-weight: 500;
                }
            }
            span + span{
                color: #868EAE;
                font-size: 13px;
            }
        }
        svg{
            width: 15px;
            margin-right: 10px;
        }
    }

    @media (max-width: 1300px){
        .focard-details{
            h1{
                font-size: 24px;
            }
            &.growth-downward{
                h1{
                    font-size: 24px;
                }
            }
        }
    }

    .forcast-card-box{
        .ant-card-body{
            padding: 0 !important;
            h1{
                padding: 25px 0 0 25px;
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 26px;
            }
        }

        .focard-details{
            margin-top: 15px;
            padding: 0 25px 22px;
            h1{
                padding: 0;
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 4px;
            }
            p{
                margin-bottom: 0;
            }
        }
        canvas{
            margin-top: 0px;
            border-radius: 0 0 10px 10px;
        }
    }
`;

const CardBarChart = Styled.div`
    .chartjs-render-monitor{
        height: 290px !important;
    }
    .card-bar-top{
        margin-left: -20px;
        .flex-grid-child{
            padding: 0 20px;
        }
        p{
            font-size: 14px;
            margin-bottom: 8px;
            color: ${({theme})=>theme['light-color']};
        }
        h1{
            font-size: 24px;
            margin-bottom: 22px;
            sub{
                bottom: 0;
                font-size: 14px;
                margin-left: 10px;
                color: ${({theme})=>theme['success-color']};
                svg{
                    margin-right: 4px;
                }
            }
        }
    }
`;

const CardGroup = Styled.div`
    .forcast-overview{
        .ant-card-body{
            padding: 0 25px !important;
        }
    }
    .card-radio{
        .ant-radio-button-wrapper{
            height: 30px;
            font-size: 12px;
            font-weight: 500;
            padding: 0 10.5px;
            color: ${({theme})=>theme['gray-color']};
            border-color: ${({theme})=>theme['border-color-light']};
            &:before{
                display: none;
            }
            &:focus-within{
                box-shadow: 0 0;
            }
            &:first-child{
                border-radius: 3px 0 0 3px;
            }
            &:last-child{
                border-radius: 0 3px 3px 0;
            }
            &.ant-radio-button-wrapper-checked{
                color: #fff !important;
                background: ${({theme})=>theme['primary-color']} !important;
                &:hover{
                    color: #fff !important;
                    background: ${({theme})=>theme['primary-color']} !important;
                }
            }
            &:hover{
                background: ${({theme})=>theme['bg-color-normal']} !important;
            }
        }
    }
    .focard-wrapper{
        margin: 0 -12px;
        padding: 24px 0 25px 0;
        &.focard-divider{
            border-right: 1px solid ${({theme})=>theme['border-color-light']} !important;
            .ant-col-md-12{
                &:first-child{
                    padding: 0 0 0 15px;
                }
                &:last-child{
                    padding: 0 24px 0 24px;
                }
            }
            @media only screen and (max-width: 1350px){
                .ant-col-md-12{
                    &:first-child{
                        padding: 0 6px;
                    }
                    &:last-child{
                        padding: 0 6px;
                    }
                }
            }
            @media only screen and (max-width: 1199px){
                border-right: 0 none !important;
                .ant-col-md-12{
                    &:first-child{
                        padding: 0 15px;
                    }
                    &:last-child{
                        padding: 0 15px;
                    }
                }
            }
        }
        .ant-col-md-12{
            padding: 0 0 0 24px;
            &:last-child{
                padding: 0 14px 0 24px;
            }
        }
        @media only screen and (max-width: 1350px){
            .ant-col-md-12{
                padding: 0 6px;
                &:last-child{
                    padding: 0 6px;
                }
            }
        }
        @media only screen and (max-width: 1199px){
            .ant-col-md-12{
                padding: 0 15px;
                &:last-child{
                    padding: 0 15px;
                }
            }
        }
    }

    .traffic-table{
        .ant-table{
            border-radius: 10px;
        }
        table{
            color: #333;
            thead{
                th{
                    &:nth-child(2){
                        border-left: 1px solid ${({theme})=>theme['border-color-light']};
                    }
                    &:nth-child(4){
                        border-right: 1px solid ${({theme})=>theme['border-color-light']};
                    }
                }
            }
            tbody{
                tr{
                    &:hover{
                        td{
                            background: ${({theme})=>theme['bg-color-light']};
                            .social-name{
                                color: ${({theme})=>theme['primary-color']};
                            }
                        }
                    }
                }
                td{
                    border-right: 1px solid ${({theme})=>theme['border-color-light']};
                    &:first-child{
                        border-left: 0 none;
                    }
                    &:last-child{
                        border-right: 0 none;
                    }
                    .traffic-title{
                        font-weight: 500;
                        color: ${({theme})=>theme['dark-color']};
                    }
                    .social-name{
                        color: ${({theme})=>theme['info-color']};
                    }
                }
            }
        }
    }
`;

const Exlist = Styled.div`
    padding: 25px 0 0;
    height: 100%;
    border-right: 1px solid ${({theme})=>theme['border-color-light']};
    div{
        margin-bottom: 25px;
        p{
            font-size: 14px;
            color: ${({theme})=>theme["light-gray-color"]};
            margin-bottom:0;
        }
        h1{
            font-size: 22px;
            font-weight: 600;
            & > span{
                margin-right: 10px;
            }
            sub{
                font-size: 13px;
                font-weight: 400;
                display: inline-flex;
                align-items: center;
                line-height: normal;
                color: ${({theme})=>theme["light-color"]};
                span{
                    display: inline-flex;
                    align-items: center;
                    color: ${({theme})=>theme["success-color"]};
                    padding: 0 10px 0 0;
                }
                svg{
                    width:12px;
                }
                &.growth-downward{
                    span{
                        color: ${({theme})=>theme["danger-color"]};
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1199px){
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border-right: 0 none;
        margin: 0 -15px;
        div{
            flex: 0 0 50%;
            padding: 0 15px;
        }
    }
    @media only screen and (max-width: 480px){
        div{
            flex: 0 0 100%;
        }
    }
`;

const OverviewCard = Styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${({theme})=>theme["secondary-color"]}, ${({theme})=>theme["warning-color"]});
        left:0;
        top:0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .overview-box-single{
            p{
                color: ${({theme})=>theme["light-color"]};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                margin-left: 6px;
            }
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${({theme})=>theme["success-color"]};
            font-weight: 600;
            span{
                color: ${({theme})=>theme["light-gray-color"]};
                font-weight: 400;
            }
        }
        .growth-downward{
            color: ${({theme})=>theme["danger-color"]};
            font-weight: 600;
            span{
                color: ${({theme})=>theme["light-gray-color"]};
                font-weight: 400;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            background: rgba(255,255,255,0.1);
            border: 0 none;
            color: #fff;
        }
    }
`;

const Pstates = Styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -25px 0 30px;
    div{
        transition: 0.3s ease;
        padding: 20px;
        &:hover{
            box-shadow: 0 15px 30px rgba(146,153,184,0.15);
        }
        &.growth-downward{
            background: ${({theme})=>theme['bg-color-light']};
        }
    }
`;

const SessionState = Styled.div`
    margin: 0 0 15px -15px;
    div{
        padding: 0 15px;
        span{
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
        }
        sub{
            bottom: 0;
            left: 5px;
            font-size: 13px;
            color: ${({theme})=>theme["light-gray-color"]};
        }
    }
`;

const RegionList = Styled.div`
    max-height: 300px;
    overflow: hidden auto;
`;

const CardBarChart2 = Styled.div`
    h1{
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 1500px){
        h1{
            font-size: 22px;
        }
    }
    & > span{
        font-size: 14px;
        color: ${({theme})=>theme["light-gray-color"]};
    }
    p{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 15px 0 0 0;
        .growth-upward, .growth-downward{
            display: inline-flex;
            align-items: center;
            padding-right: 10px;
            font-weight: 600;
            svg{
                width: 15px;
            }
        }
        .growth-upward{
            color: ${({theme})=>theme["success-color"]};
            svg{
                color: ${({theme})=>theme["success-color"]};
            }
        }
        .growth-downward{
            color: ${({theme})=>theme["danger-color"]};
            svg{
                color: ${({theme})=>theme["danger-color"]};
            }
        }
        span{
            color: ${({theme})=>theme["light-gray-color"]};
            font-size: 13px;
            display: inline-block;
        }
    }
`;


const SocialMediaWrapper = Styled.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`;

const LineChartWrapper = Styled.div`
    .linkedin-chart-wrap{
        min-height: 392px;
    }
    .line-chart-row{
        &:not(:last-child){
            margin-bottom: 28px;
        }
        .border-linechart{
            border-bottom: 1px solid ${({theme})=>theme["border-color-deep"]};
        }
    }
`;

const RatioCard = Styled.div`
    .ant-card-body{
        h1{
            font-size: 16px;
            font-weight: 500;
        }
    }
    .ratio-content{
        margin-top: 30px;
        h1{
            margin-bottom: 2px;
            font-size: 36px;
            font-weight: 600;
        }
        .ant-progress{
            margin-bottom: 12px;
            .ant-progress-text{
                position: absolute;
                right: 0;
                bottom: 26px;
                font-weight: 500;
            }
        }
        p{
            color: ${({theme})=>theme["light-color"]};
            margin-bottom: 0;
            strong{
                font-size: 13px; 
                color: ${({theme})=>theme["dark-color"]};
                font-weight: 600;
            }
        }
    }
`;

const IncomeExpenseWrapper = Styled.div`
    .ant-card-body{
        padding: 0 25px !important;
    }
    canvas{
        padding: 20px 0;
    }
`;

const LocationMapWrapper = Styled.div`
    .location-map{
        padding: 20px 0;
        svg{
            width: 300px;
            height: 166px;
        }
    }
    .location-table{
        margin: 0 25px 15px;
        padding-top: 12px;
        min-height: 180px;
        border-top: 1px solid ${({theme})=>theme['border-color-light']} !important;
        table{
            tr{
                &:hover{
                    td{
                        background: #fff;
                    }
                }
                td{
                    border: 0 none;
                    color: ${({theme})=>theme['gray-color']}
                }
                th,
                td{
                    padding: 6px 16px;
                    &:first-child{
                        padding-left: 0;
                    }
                    &:last-child{
                        text-align: right;
                        padding-right: 0;
                    }
                }
            }
            thead{
                th{
                    background: #fff;
                    border: 0 none;
                    font-weight: 400;
                    color: ${({theme})=>theme['light-color']}
                }
            }
        }
    }
`;

const RevenueChartWrapper = Styled.div`

`;

export {
    ECahrtCard,
    Focard,
    CardBarChart,
    CardGroup,
    Exlist,
    OverviewCard,
    Pstates,
    SessionState,
    RegionList,
    CardBarChart2,
    SocialMediaWrapper,
    LineChartWrapper,
    RatioCard,
    IncomeExpenseWrapper,
    LocationMapWrapper,
    RevenueChartWrapper
};