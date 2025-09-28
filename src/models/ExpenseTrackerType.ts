export type ExpenseCategory = "feed" | "medicine" | "rope" | "equipment" | "misc";
export type paymentType = "cash" | "card" | "upi" | "other";
export interface FarmExpenseType {
  id: number;
  amount: number;
  date: string; 
  place: string;
  category: ExpenseCategory;
  notes?: string;

  
  paidBy?: string;
  receiptNumber?: string;
  paymentMethod?: paymentType;
  supplierName?: string;
}
