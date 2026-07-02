export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface userCardProps {
  user: IUser;
}

export interface Input {
  onAdd: (text: string) => void;
}
