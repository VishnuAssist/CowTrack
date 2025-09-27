export type RoleType = "farmer" | "common person" | "Admin"; 

export interface FarmerAddType {
  id: number;
  
  age: number;
  role: RoleType; 

    userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string; // Date of Birth as string
  phoneNumber?: string;
  village?: string;
  taluk?: string;
  district?: string;
  pincode?: number;
  experienceYears?: number;
  farmEquipmentOwned:string;
}
