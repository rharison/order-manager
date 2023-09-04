import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse } from "@mui/material";
import { useState } from "react";
import { OrderResponse } from "../../types/Order";
import { formatMoneyCents } from "../../utils/money";
import { CardProductCheckout } from "../CardProductCheckout";
import { BulletStatus, Container, ContainerAmounts, ContainerInfos, ContainerProducts, ContainerStatus, IconViewProducts, IdOrder, LabelAmount } from "./styles";

type CardOrderProps = {
    order: OrderResponse;
};

export const CardOrder = ({ order }: CardOrderProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <div className="container-content">
                <ContainerInfos>
                    <IdOrder>
                        <strong>Pedido: </strong>N. {order.id}
                    </IdOrder>
                    <ContainerAmounts>
                        <LabelAmount><strong>Total dos produtos:</strong> R$ {formatMoneyCents(order.productsAmount)}</LabelAmount>
                        <LabelAmount><strong>Taxas:</strong> R$ {formatMoneyCents(order.surchargeAmount)}</LabelAmount>
                        <LabelAmount><strong>Total do pedido:</strong> R$ {formatMoneyCents(order.totalAmount)}</LabelAmount>
                    </ContainerAmounts>
                </ContainerInfos>
                <ContainerStatus>
                    <strong>Status: </strong>{order.shipped ? "Enviado" : "Pendente"}<BulletStatus shipeed={order.shipped} />
                </ContainerStatus>
            </div>
            <IconViewProducts
                onClick={handleClick}
                aria-expanded={open}
                aria-label="show more"
            >
                {open
                    ? <>
                        Ocultar produtos
                        <ExpandLess />
                    </>
                    : <>
                        Ver produtos
                        <ExpandMore />
                    </>
                }
            </IconViewProducts>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ContainerProducts>
                    {order.purcharseOrderProduct.map((product) => (
                        <CardProductCheckout
                            viewMode
                            product={product.product}
                            qty={product.productQty}
                            key={product.id}
                        />
                    ))}
                </ContainerProducts>
            </Collapse>
        </Container>
    )
}