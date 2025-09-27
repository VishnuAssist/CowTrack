export type RoleType = "farmer" | "common person" | "Visitor" | "Doctor"; 
export interface ContactDetailsType {
  id: number;               //
  name: string;             
  role:RoleType ; //"Farmer" | "Doctor" | "Visitor" | "Other"; 
  phoneNumber: string;      
  email?: string;           
  native?: string;          
       
  purpose?: string ; //"Milk" | "Eggs" | "Other"; 
  notes?: string;           
  farmEquipmentOwned?: string;           
}
