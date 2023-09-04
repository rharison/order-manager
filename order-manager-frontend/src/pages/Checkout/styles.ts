import styled from "styled-components";


export const ContainerResume = styled.div`
    width: 100%;
`;

export const TitleResume = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
`;

export const TotalAmountContainer = styled.div`
    margin-top: 8px;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;

    & > span {
        font-weight: 300;
    }
`;

export const TotalAmount = styled.span`
    font-size: 1.75rem;
    color: #1d1d1f;
    font-weight: 500;
`;

export const TextHelper = styled.span`
    font-weight: 300;
    font-size: 0.75rem;
`;