export interface DailyMilkRecord {
  day: number;
  morningLitres: number;
  eveningLitres: number;
  amount: number;
}

export interface MilkDiaryType {
  id: number;
  milkCenterName: string;
  milkCenterOwner: string;
  milkCenterContact: string;
  dueTimeMorning: string; // e.g., "06:00"
  dueTimeEvening: string; // e.g., "18:00"
  month: string; // e.g., "August 2025"
  days: DailyMilkRecord[];
  totalAmount: number;
  totalLitres: number;
  notes?: string;
}
