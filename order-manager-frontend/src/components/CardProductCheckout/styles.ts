import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 160px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    gap: 1rem;
`;

export const ProductPicture = styled.img`
    width: 120px;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProductName = styled.span`
    color: #1d1d1f;
    font-size: 1.2rem;
    font-weight: 500;
`;

export const ProductDescription = styled.span`
    color: #1d1d1f;
    font-size: 1rem;
    font-weight: 300;
`;

export const ProductSubTotal = styled.span`
    color: #1d1d1f;
    font-size: 1rem;
    font-weight: 500;
`;

export const ContainerActions = styled.div``;