export interface ContactDetailsType {
  id: number;               //
  name: string;             
  role:string ; //"Farmer" | "Doctor" | "Visitor" | "Other"; 
  phoneNumber: string;      
  email?: string;           
  native?: string;          
  dateAdded: string;        
  purpose?: string ; //"Milk" | "Eggs" | "Other"; 
  notes?: string;           
}
