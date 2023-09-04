import styled from "styled-components";


export const Container = styled.div`
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: column;

    & > div.container-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const IdOrder = styled.span`
    font-size: 1.2rem;
    & strong {
        font-weight: 500;
    }
`;

export const ContainerStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LabelAmount = styled.span`
    font-size: 1rem;

    & > strong {
        font-weight: 500;
    }
`;

export const ContainerAmounts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const BulletStatus = styled.div<{ shipeed: boolean }>`
    background-color: ${({ shipeed }) => shipeed ? '#00ff00' : '#e6db74'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;

export const IconViewProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 24px;
`;