import { Container, Decocation, Title } from "./styles";

type PageTitleProps = {
    title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Decocation />
        </Container>
    )
};