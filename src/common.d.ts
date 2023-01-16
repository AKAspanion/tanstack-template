declare type PostRequestType = {
  title: string;
  body: string;
  userId: string | number;
};

declare type PostType = PostRequestType & {
  id: string | number;
};

declare type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

declare type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

declare type Geo = {
  lat: string;
  lng: string;
};

declare type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
