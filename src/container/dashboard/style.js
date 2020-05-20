import Styled from "styled-components";

const Focard = Styled.div`

    canvas{
        width: 100% !important;
        margin-top: 45px;
    }
    .focard-details{
        h1{
            margin-bottom: 0;
        }
        .subtitle{
            font-size: 14px;
            color: #868EAE;
            margin-bottom: 10px;
        }
        p{
            display: flex;
            align-items: center;
            span{
                display: inline-flex;
                align-items: center;
            }
            span + span{
                margin-left: 10px;
                color: #868EAE;
                font-size: 13px;
            }
        }
        svg{
            color: ${({theme})=>theme['success-color']};
            width: 15px;
            margin-right: 10px;
        }
        &.growth-downward{
            svg{
                color: ${({theme})=>theme['danger-color']};
            }
        }
    }
`;

const CardBarChart = Styled.div`
    div{
        p{
            font-size: 14px;
            color: ${({theme})=>theme['light-gray-color']};
        }
        h1{
            sub{
                font-size: 14px;
                color: ${({theme})=>theme['success-color']};
            }
        }
    }
`;

const CardGroup = Styled.div`
    .focard-wrapper{
        margin: 0 -12px;
        .ant-col-md-12{
            padding: 0 12px;
        }
    }
`;

const Exlist = Styled.div`
    div{
        margin-bottom: 20px;
        p{
            font-size: 14px;
            color: ${({theme})=>theme["light-gray-color"]};
            margin-bottom:0;
        }
        h1{
            font-size: 22px;
            font-weight: 600;
            sub{
                font-size: 13px;
                display: inline-flex;
                align-items: center;
                span{
                    display: inline-flex;
                    align-items: center;
                    color: ${({theme})=>theme["success-color"]};
                    padding: 0 10px;
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
`;

const OverviewCard = Styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 25px 25px 45px;
    overflow: hidden;
    position: relative;
    z-index: 1;
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
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
    }
`;




export { Focard, CardBarChart, CardGroup, Exlist, OverviewCard };