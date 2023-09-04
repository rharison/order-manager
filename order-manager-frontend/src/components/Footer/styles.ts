import styled from "styled-components";


export const Container = styled.footer`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        height: 35px;
        object-fit: contain;
    }
`;