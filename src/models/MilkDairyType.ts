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
  dueTimeMorning: string;
  dueTimeEvening: string;
  month: string;
  perLitreRate: number;
  firstHalf: DailyMilkRecord[];
  secondHalf: DailyMilkRecord[];
  firstHalfTotalLitres: number;
  firstHalfTotalAmount: number;
  secondHalfTotalLitres: number;
  secondHalfTotalAmount: number;
  totalLitres: number;
  totalAmount: number;
  notes?: string;
}