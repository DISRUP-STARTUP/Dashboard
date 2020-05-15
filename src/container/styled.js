import Styled from 'styled-components';
const Main = Styled.div`
    padding: 0px 50px;
    min-height: 750px;
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* spinner */
    .ant-spin{
        margin-right: 20px;
        &:last-child{
            margin-right: 0;
        }
    }

`;
export { Main };
