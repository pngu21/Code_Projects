// src/app/models/user.model.ts
export interface User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  
  export interface UserDetails extends User {
    email: string;
    // Add more fields if necessary
  }