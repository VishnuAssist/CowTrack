export type ExpenseCategory = "feed" | "medicine" | "rope" | "equipment" | "misc";

export interface FarmExpenseType {
  id: number;
  amount: number;
  date: string; // ISO string
  place: string;
  category: ExpenseCategory;
  notes?: string;

  // optional fields
  paidBy?: string;
  receiptNumber?: string;
  paymentMethod?: "cash" | "card" | "upi" | "other";
  supplierName?: string;
}
