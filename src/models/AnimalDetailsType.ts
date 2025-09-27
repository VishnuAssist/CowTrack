export type AnimalType = "cow" | "goat" | "buffalo";
export type Gender = "male" | "female";
export type HealthStatus = "healthy" | "sick" | "quarantine";

export interface AnimalDetailsType {
  id: number;
  animalId: string;
  animalName: string;
  animalType: AnimalType;
  dateOfArrival: string; // ISO string
  fromPlace: string;

  lastInjectionDate?: string;
  lastInjectionBy?: string;
  lastBirthDate?: string;
  lastBirthGender?: Gender;
  lastBirthCount?: number;
  monthsToNextBirth?: number;

  // optional fields
  breed?: string;
  weight?: number; // in kg
  healthStatus?: HealthStatus;
  vaccinationSchedule?: { date: string; vaccine: string; by?: string }[];
  feedPreference?: string;
  milkProduction?: number; // liters per day
  notes?: string;
}
