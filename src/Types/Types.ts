export interface DataTypesLocalStorage {
  id: number;
  title: string;
  price: number;
  images: string[];
  brand: string;
  discountPercentage: number;
  stock: number;
  count: number;
}

export interface DataTypesProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  discountPercentage: number;
  description: string;
  rating: number;
}

export interface DataTypesProductCard
  extends Omit<DataTypesProduct, "images" | "discountPercentage" | "rating"> {
  image: string;
  discount: number;
  rate: number;
}

interface BaseCartItem {
  id: number;
  title: string;
  count: number;
  brand: string;
  price: number;
}

export interface DataTypesCart extends BaseCartItem {
  images: string[];
  discountPercentage: number;
}

export interface DataTypesCartCard extends BaseCartItem {
  image: string;
}

export interface DataTypesCategory {
  id: number;
  name: string;
}

export interface SalesTypes {
  salesHeader: string;
  images: string;
}

export interface GlassPageProps {
  onClick?: () => void;
  zIndex?: number;
}

export type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface MediaType {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
}

export interface AccountTypes {
  name: string;
  email: string;
  password: string;
}

export type AccountWithoutName = Omit<AccountTypes, "name"> & {
  name?: boolean;
};

export interface OrderTypes {
  title: string;
  brand: string;
  price: number;
  count: number;
  discountPercentage: number;
}

export interface OrderData {
  date: string;
  items: OrderTypes[];
}
