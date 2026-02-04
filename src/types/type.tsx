export type fakeCartType = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type pizzaType = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type orderDataType = {
  address: string;
  cart: {
    name: string;
    pizzaId: number;
    quantity: number;
    totalPrice: number;
    unitPrice: number;
  }[];
  customer: string;
  phone: string;
  priority: boolean;
};

export type OrderCreationErrorType = {
  phone?: string;
};

export type ButtonStyleType = "primary" | "small" | "secondary";

export type CartItemType = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
