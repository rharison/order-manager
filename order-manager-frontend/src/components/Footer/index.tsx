import { Container } from "./styles"
import appleLogo from "../../assets/apple-logo.svg"


export const Footer = () => {
    return (
        <Container>
            <img
                src={appleLogo}
                alt="Apple logo"
            />
        </Container>
    )
}