import { Product } from "./Product";

export type ProductItem = {
    product: Product;
    qty: number;
}

export type OrderPayload = {
    products: ProductItem[];
};

type purcharseOrderProductItem = {
    id: number;
    product: Product;
    productPrice: number;
    productQty: number;
}

export type OrderResponse = {
    id: number;
    productAmount: number;
    surchargeAmount: number;
    totalAmount: number;
    shipped: boolean;
    purcharseOrderProduct: purcharseOrderProductItem[];
}