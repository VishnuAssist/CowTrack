export type AnimalType = "cow" | "goat";

export interface AnimalCareType {
  id: number;
  animalType: AnimalType;
  medicineName: string;
  reason: string;
  suggestedBy: string;
  buyingPrice: number;
  buyingPlace: string;
  buyingContact?: string;
  
  notes?: string;
date:string;

  medicineType?: string; // tablet, injection, syrup etc.
  
}
