import styled from "styled-components";

export const Container = styled.header`
    height: 75px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    position: sticky;
    top: 0px;
    background-color: #fff;
    z-index: 1000;

    & > img {
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
`;

export const HeaderTitle = styled.span`
    font-size: 1.75rem;
    font-weight: 600;
    position: relative;

`;

