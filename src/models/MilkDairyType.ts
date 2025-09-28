export interface DailyMilkRecord {
  day: number;
  morningLitres: number;
  morningFat: number;
  morningAmount: number;
  eveningLitres: number;
  eveningFat: number;
  eveningAmount: number;
}

export interface MilkDiaryType {
  id: number;
  milkCenterName: string;
  milkCenterOwner: string;
  milkCenterContact: string;
  dueTimeMorning: string; // e.g., "06:00"
  dueTimeEvening: string; // e.g., "18:00"
  month: string; // e.g., "August 2025"
  perLitreRate: number;
  firstHalf: DailyMilkRecord[];
  secondHalf: DailyMilkRecord[];
  totalLitres: number;
  totalAmount: number;
  notes?: string;
}
