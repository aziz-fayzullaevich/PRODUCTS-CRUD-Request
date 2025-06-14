export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: string[];
};

export type ProductOne = Product;

export type ProductBody = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
};

export type LoaderWithErrorProps = {
  isLoading: boolean;
  error: any;
  children: React.ReactNode;
};

export type CustomPaginationProps = {
  total: number;
  value: number;
  onChange: (page: number) => void;
};

export type INITIAL_VALUE = {
  "title": string,
  "price": number,
  "description": string,
  "categoryId": number,
  "images": string[]
}

export type ProductFormProps = {
  title: string;
  initialValues: INITIAL_VALUE;
  onSubmit: (values: INITIAL_VALUE) => void;
};

export type UpdateBody = {
  title: string;
  price: number;
};