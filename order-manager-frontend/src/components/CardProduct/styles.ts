import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 465px;
`;


export const ProductPicture = styled.img`
    height: 300px;
    object-fit: contain;
    margin-bottom: 16px;
`;

export const ProductTitle = styled.span`
    color: #1d1d1f;
    font-size: 1.5rem;
`;

export const ProductPriceContainer = styled.div`
    margin-top: 8px;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;

    & > span {
        font-weight: 300;
    }
`;

export const ProductPrice = styled.span`
    font-size: 1.75rem;
    color: #1d1d1f;
    font-weight: 500;
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TextQtyProduct = styled.span`
    min-width: 50px;
    font-size: 1.25rem;
    text-align: center;
`;