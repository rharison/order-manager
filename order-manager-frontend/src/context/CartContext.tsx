import { createContext, useCallback, useEffect } from "react";
import { CartItem } from "../types/Cart";
import useLocalStorage from "../hooks/useLocalStorage";
import { Product } from "../types/Product";

type CartContextProps = {
  children: JSX.Element
}

type CartDispatchContextProps = {
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  clearCart: () => void
  productAlreadyExistsInCart: (product: Product) => CartItem | undefined
}

const CartContext = createContext<CartItem[]>([]);
const CartDispatchContext = createContext({} as CartDispatchContextProps);

function CartProvider({ children }: CartContextProps) {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [setCart])

  useEffect(() => {
    if (cart.length > 3) {
      clearCart()
    }
  }, [cart, clearCart])

  const addProduct = (product: Product) => {
    const producAlreadyExists = productAlreadyExistsInCart(product)

    if (producAlreadyExists) {
      setCart(cart.map(item => item.product.id === product.id ? {
        ...item,
        qty: item.qty + 1
      } : item))
    } else {
      setCart([...cart, {
        product,
        qty: 1
      }])
    }
  }

  const removeProduct = (product: Product) => {
    const producAlreadyExists = productAlreadyExistsInCart(product)
    if (producAlreadyExists) {
      if (producAlreadyExists.qty === 1) {
        setCart(cart.filter(item => item.product.id !== product.id))
      } else {
        setCart(cart.map(item => item.product.id === product.id ? {
          ...item,
          qty: item.qty - 1
        } : item))
      }
    }
  }

  const productAlreadyExistsInCart = (product: Product) => {
    return cart.find(item => item.product.id === product.id)
  }



  const value = {
    addProduct,
    removeProduct,
    clearCart,
    productAlreadyExistsInCart
  }

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={value}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext, CartDispatchContext }