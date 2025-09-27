export interface VisitorRegistrationType {
  id: number;
  name: string;
  native: string;
  contact: string;
  email?: string;
  purpose: string;
  theyProvide?: string;
  theyNeed?: string;
  dateTime: string; // ISO string with date and time

  // optional fields
  address?: string;
  companyName?: string;
  notes?: string;
}
