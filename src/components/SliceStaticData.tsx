import { ContactDetailsType } from "src/models/ContactDetailsType";

export const ContactDetailsStaticData: ContactDetailsType[] = [
  {
    id: 1,
    name: "Vishnu Venkatesan",
    role: "farmer",
    phoneNumber: "9876543210",
    email: "vishnu@example.com",
    native: "Salem",
    
    purpose: "Milk",
    notes: "Supplies fresh cow milk every morning.",
    farmEquipmentOwned:"tractor"
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Doctor",
    phoneNumber: "9123456780",
    email: "arun.kumar@clinic.com",
    native: "Chennai",
    
    purpose: "Other",
    notes: "Veterinary doctor visits farm weekly.",
    farmEquipmentOwned:"Cross Cutter"
  },

];
