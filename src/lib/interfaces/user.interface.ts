export interface Token {
  refresh?: string;
  access?: string;
}
export interface User {
  id?: string;
  email?: string;
  password?: string;
  tokens?: Token;
  first_name?: string;
  last_name?: string;
  is_superuser?: boolean;
}

export interface UserResponse {
  user?: User;
}