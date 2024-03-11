export interface CreateUserDto {
  name: string;
  username: string;
  password: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED'; // enum Status
}
