export type RoleType = "farmer" | "common person"; 

export interface FarmerAddType {
  id: number;
  farmerName: string;
  age: number;
  role: RoleType; 
}
