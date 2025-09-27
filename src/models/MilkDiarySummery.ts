export interface MilkDiarySummaryType {
  id: number;
  milkCenterName: string;
  milkCenterOwner: string;
  milkCenterContact: string;
  invoiceDate: string; // ISO string
  totalAmount: number;
  totalLitres: number;
  amountWithdrawn: boolean;
  purpose?: string;
  feedsProvided?: boolean;
  downloadLink?: string;
  notes?: string;
}
