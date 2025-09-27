import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from 'src/components/Footer';
import { AnimalType, AnimalCareType } from 'src/models/AnimalCareType';
import { FarmerAddType } from 'src/models/FarmerType';
import { ContactDetailsType, RoleType } from 'src/models/ContactDetailsType';
import { ExpenseCategory, FarmExpenseType } from 'src/models/ExpenseTracker';
import {
  AnimalDetailsType,
  Gender,
  HealthStatus,
  AnimalType as AnimalCategory
} from 'src/models/AnimalDetailsType';
import { VisitorRegistrationType } from 'src/models/VisitorRegistrationType';
import { DailyMilkRecord, MilkDiaryType } from 'src/models/MilkDairyType';
import { MilkDiarySummaryType } from 'src/models/MilkDiarySummery';
import Dashboard from './Dashboard';

// Mock data
const mockFarmerData: FarmerAddType = {
  id: 1,
  age: 35,
  role: 'farmer',
  userName: 'john_farmer',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  dob: '1989-05-15',
  phoneNumber: '+91 9876543210',
  village: 'Green Valley',
  taluk: 'North Taluk',
  district: 'Agriculture District',
  pincode: 560001,
  experienceYears: 10,
  farmEquipmentOwned: 'Tractor, Harvester, Plough'
};

const mockContactData: ContactDetailsType = {
  id: 1,
  name: 'Dr. Sarah Smith',
  role: 'Doctor',
  phoneNumber: '+91 9876543211',
  email: 'sarah.smith@example.com',
  native: 'Bangalore',
  purpose: 'Farm Consultation',
  notes: 'Regular visitor for farm health checks',
  farmEquipmentOwned: 'Medical Equipment'
};

// Mock data for Cow Care
const mockAnimalCareData: AnimalCareType = {
  id: 1,
  animalType: 'cow',
  medicineName: 'Antibiotic Injection',
  reason: 'Mastitis Treatment',
  suggestedBy: 'Dr. Rajesh Kumar',
  date: '2024-01-15',
  buyingPrice: 850,
  buyingPlace: 'Vet Pharma Store, Bangalore',
  buyingContact: '+91 9876543210',
  notes: 'Administer twice daily for 5 days. Monitor temperature regularly.',
  medicineType: 'injection'
};

// Mock data for Expense Tracker
const mockExpenseData: FarmExpenseType = {
  id: 1,
  amount: 2500,
  date: '2024-01-15',
  place: 'Agri Mart, Bangalore',
  category: 'feed',
  notes: 'Purchased cattle feed for monthly supply',
  paidBy: 'John Doe',
  receiptNumber: 'AGR123456',
  paymentMethod: 'upi',
  supplierName: 'Agri Mart Suppliers'
};

// Mock data for Animal Detail
const mockAnimalData: AnimalDetailsType = {
  id: 1,
  animalId: 'ANI-2024-001',
  animalName: 'Lakshmi',
  animalType: 'cow',
  dateOfArrival: '2023-06-15',
  fromPlace: 'Krishna Dairy Farm, Tamil Nadu',
  lastInjectionDate: '2024-01-10',
  lastInjectionBy: 'Dr. Rajesh',
  lastBirthDate: '2023-11-20',
  lastBirthGender: 'female',
  lastBirthCount: 1,
  monthsToNextBirth: 8,
  breed: 'Jersey',
  weight: 450,
  healthStatus: 'healthy',
  vaccinationSchedule: [
    { date: '2024-01-10', vaccine: 'Foot and Mouth', by: 'Dr. Rajesh' },
    { date: '2023-12-15', vaccine: 'Brucellosis', by: 'Dr. Priya' }
  ],
  feedPreference: 'Green fodder with grains',
  milkProduction: 18,
  notes: 'Regular milker, gentle temperament'
};

// Mock data for Visitor Registration
const mockVisitorData: VisitorRegistrationType = {
  id: 1,
  name: 'Rajesh Kumar',
  native: 'Chennai, Tamil Nadu',
  contact: '+91 9876543210',
  email: 'rajesh.kumar@example.com',
  purpose: 'Farm Equipment Purchase',
  theyProvide: 'Agricultural Machinery',
  theyNeed: 'Dairy Farm Consultation',
  dateTime: '2024-01-20T10:30:00',
  address: 'No. 123, MG Road, Chennai - 600001',
  companyName: 'AgriTech Solutions Pvt Ltd',
  notes: 'Interested in modern dairy farming equipment. Follow up required.'
};

// Mock data for Milk Diary
const mockMilkDiaryData: MilkDiaryType = {
  id: 1,
  milkCenterName: 'Green Valley Dairy',
  milkCenterOwner: 'Mr. Sharma',
  milkCenterContact: '+91 9876543210',
  dueTimeMorning: '06:00',
  dueTimeEvening: '18:00',
  month: 'January 2024',
  totalAmount: 45250,
  totalLitres: 905,
  notes: 'Regular supply maintained throughout the month',
  days: [
    { day: 1, morningLitres: 15, eveningLitres: 16, amount: 1550 },
    { day: 2, morningLitres: 14, eveningLitres: 15, amount: 1450 },
    { day: 3, morningLitres: 16, eveningLitres: 17, amount: 1650 },
    { day: 4, morningLitres: 15, eveningLitres: 16, amount: 1550 },
    { day: 5, morningLitres: 17, eveningLitres: 18, amount: 1750 }
  ]
};

// Mock data for Milk Diary Summary
const mockMilkSummaryData: MilkDiarySummaryType = {
  id: 1,
  milkCenterName: 'Green Valley Dairy',
  milkCenterOwner: 'Mr. Sharma',
  milkCenterContact: '+91 9876543210',
  invoiceDate: '2024-01-31',
  totalAmount: 45250,
  totalLitres: 905,
  amountWithdrawn: true,
  purpose: 'Monthly milk supply payment',
  feedsProvided: true,
  downloadLink: '/invoices/milk-january-2024.pdf',
  notes: 'Payment processed successfully. Feeds provided as agreed.'
};

// Field Card Component
const FieldCard = ({
  label,
  value,
  borderColor = '#2196f3'
}: {
  label: string;
  value: string | number | undefined;
  borderColor?: string;
}) => (
  <Card
    sx={{
      mb: 1,
      borderLeft: `4px solid ${borderColor}`,
      boxShadow: 1,
      '&:hover': {
        boxShadow: 3,
        transform: 'translateY(-2px)',
        transition: 'all 0.3s ease'
      }
    }}
  >
    <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight="medium">
        {value || 'Not provided'}
      </Typography>
    </CardContent>
  </Card>
);

// Farmer Details Component
const FarmerDetailsAccordion = ({ data }: { data: FarmerAddType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Farmer Join Details
          <Chip
            label={data.role}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="User Name"
              value={data.userName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="First Name"
              value={data.firstName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Name"
              value={data.lastName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Email" value={data.email} borderColor="#ff9800" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Phone Number"
              value={data.phoneNumber}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Date of Birth"
              value={data.dob}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Age" value={data.age} borderColor="#2196f3" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Village"
              value={data.village}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Taluk" value={data.taluk} borderColor="#2196f3" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="District"
              value={data.district}
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Pincode"
              value={data.pincode}
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Experience Years"
              value={data.experienceYears}
              borderColor="#f44336"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FieldCard
              label="Farm Equipment Owned"
              value={data.farmEquipmentOwned}
              borderColor="#f44336"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Contact Details Component
const ContactDetailsAccordion = ({ data }: { data: ContactDetailsType }) => {
  const [expanded, setExpanded] = useState(false);

  const getRoleColor = (role: RoleType) => {
    switch (role) {
      case 'farmer':
        return 'primary';
      case 'Doctor':
        return 'error';
      case 'Visitor':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Contact Details
          <Chip
            label={data.role}
            size="small"
            color={getRoleColor(data.role)}
            variant="outlined"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Name" value={data.name} borderColor="#4caf50" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Phone Number"
              value={data.phoneNumber}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Email" value={data.email} borderColor="#ff9800" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Native"
              value={data.native}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Purpose"
              value={data.purpose}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Farm Equipment Owned"
              value={data.farmEquipmentOwned}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#9c27b0" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Cow Care Details Component
const AnimalCareDetailsAccordion = ({ data }: { data: AnimalCareType }) => {
  const [expanded, setExpanded] = useState(false);

  const getAnimalColor = (animalType: AnimalType) => {
    switch (animalType) {
      case 'cow':
        return 'primary';
      case 'goat':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getMedicineTypeColor = (medicineType?: string) => {
    switch (medicineType) {
      case 'injection':
        return 'error';
      case 'tablet':
        return 'success';
      case 'syrup':
        return 'warning';
      default:
        return 'default';
    }
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Animal Care Details
          <Chip
            label={data.animalType}
            size="small"
            color={getAnimalColor(data.animalType)}
            variant="outlined"
          />
          {data.medicineType && (
            <Chip
              label={data.medicineType}
              size="small"
              color={getMedicineTypeColor(data.medicineType)}
            />
          )}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Animal Type"
              value={data.animalType}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Medicine Name"
              value={data.medicineName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Medicine Type"
              value={data.medicineType}
              borderColor="#4caf50"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Reason for Treatment"
              value={data.reason}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Date"
              value={formatDate(data.date)}
              borderColor="#f44336"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Suggested By"
              value={data.suggestedBy}
              borderColor="#2196f3"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Buying Price"
              value={formatPrice(data.buyingPrice)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Buying Place"
              value={data.buyingPlace}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Buying Contact"
              value={data.buyingContact}
              borderColor="#ff9800"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#9c27b0" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Expense Tracker Details Component
const ExpenseTrackerDetailsAccordion = ({
  data
}: {
  data: FarmExpenseType;
}) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryColor = (category: ExpenseCategory) => {
    switch (category) {
      case 'feed':
        return 'success';
      case 'medicine':
        return 'error';
      case 'rope':
        return 'warning';
      case 'equipment':
        return 'info';
      case 'misc':
        return 'default';
      default:
        return 'default';
    }
  };

  const getPaymentMethodColor = (method?: string) => {
    switch (method) {
      case 'cash':
        return 'success';
      case 'card':
        return 'primary';
      case 'upi':
        return 'info';
      case 'other':
        return 'default';
      default:
        return 'default';
    }
  };

  const formatPrice = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Expense Tracker Details
          <Chip
            label={data.category}
            size="small"
            color={getCategoryColor(data.category)}
            variant="outlined"
          />
          {data.paymentMethod && (
            <Chip
              label={data.paymentMethod}
              size="small"
              color={getPaymentMethodColor(data.paymentMethod)}
            />
          )}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Amount"
              value={formatPrice(data.amount)}
              borderColor="#f44336"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Date"
              value={formatDate(data.date)}
              borderColor="#f44336"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Category"
              value={data.category}
              borderColor="#f44336"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Place" value={data.place} borderColor="#4caf50" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Supplier Name"
              value={data.supplierName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Paid By"
              value={data.paidBy}
              borderColor="#4caf50"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Payment Method"
              value={data.paymentMethod}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Receipt Number"
              value={data.receiptNumber}
              borderColor="#2196f3"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#9c27b0" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Animal Detail Details Component
const AnimalDetailDetailsAccordion = ({
  data
}: {
  data: AnimalDetailsType;
}) => {
  const [expanded, setExpanded] = useState(false);

  const getAnimalTypeColor = (animalType: AnimalCategory) => {
    switch (animalType) {
      case 'cow':
        return 'primary';
      case 'goat':
        return 'secondary';
      case 'buffalo':
        return 'info';
      default:
        return 'default';
    }
  };

  const getHealthStatusColor = (status?: HealthStatus) => {
    switch (status) {
      case 'healthy':
        return 'success';
      case 'sick':
        return 'error';
      case 'quarantine':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getGenderColor = (gender?: Gender) => {
    switch (gender) {
      case 'male':
        return 'primary';
      case 'female':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatWeight = (weight?: number) => {
    return weight ? `${weight} kg` : 'Not provided';
  };

  const formatMilkProduction = (production?: number) => {
    return production ? `${production} liters/day` : 'Not provided';
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Animal Details
          <Chip
            label={data.animalType}
            size="small"
            color={getAnimalTypeColor(data.animalType)}
            variant="outlined"
          />
          {data.healthStatus && (
            <Chip
              label={data.healthStatus}
              size="small"
              color={getHealthStatusColor(data.healthStatus)}
            />
          )}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {/* Basic Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Animal ID"
              value={data.animalId}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Animal Name"
              value={data.animalName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Breed" value={data.breed} borderColor="#4caf50" />
          </Grid>

          {/* Arrival Details */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Date of Arrival"
              value={formatDate(data.dateOfArrival)}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="From Place"
              value={data.fromPlace}
              borderColor="#2196f3"
            />
          </Grid>

          {/* Physical Attributes */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Weight"
              value={formatWeight(data.weight)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Milk Production"
              value={formatMilkProduction(data.milkProduction)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Feed Preference"
              value={data.feedPreference}
              borderColor="#ff9800"
            />
          </Grid>

          {/* Medical Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Injection Date"
              value={
                data.lastInjectionDate
                  ? formatDate(data.lastInjectionDate)
                  : 'Not provided'
              }
              borderColor="#f44336"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Injection By"
              value={data.lastInjectionBy}
              borderColor="#f44336"
            />
          </Grid>

          {/* Birth Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Birth Date"
              value={
                data.lastBirthDate
                  ? formatDate(data.lastBirthDate)
                  : 'Not provided'
              }
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Birth Gender"
              value={data.lastBirthGender}
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Last Birth Count"
              value={data.lastBirthCount}
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Months to Next Birth"
              value={
                data.monthsToNextBirth
                  ? `${data.monthsToNextBirth} months`
                  : 'Not provided'
              }
              borderColor="#9c27b0"
            />
          </Grid>

          {/* Vaccination Schedule */}
          {data.vaccinationSchedule && data.vaccinationSchedule.length > 0 && (
            <Grid size={{ xs: 12 }}>
              <Card sx={{ borderLeft: '4px solid #673ab7', mb: 1 }}>
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Vaccination Schedule
                  </Typography>
                  {data.vaccinationSchedule.map((vaccine, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                      • {formatDate(vaccine.date)} - {vaccine.vaccine}{' '}
                      {vaccine.by && `(by ${vaccine.by})`}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Notes */}
          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#607d8b" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Visitor Registration Details Component
const VisitorRegistrationDetailsAccordion = ({
  data
}: {
  data: VisitorRegistrationType;
}) => {
  const [expanded, setExpanded] = useState(false);

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Visitor Registration Details
          <Chip
            label="Visitor"
            size="small"
            color="primary"
            variant="outlined"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {/* Personal Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Name" value={data.name} borderColor="#4caf50" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Contact"
              value={data.contact}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Email" value={data.email} borderColor="#4caf50" />
          </Grid>

          {/* Address Details */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Native Place"
              value={data.native}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Address"
              value={data.address}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Company Name"
              value={data.companyName}
              borderColor="#2196f3"
            />
          </Grid>

          {/* Visit Details */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Visit Date & Time"
              value={formatDateTime(data.dateTime)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Purpose"
              value={data.purpose}
              borderColor="#ff9800"
            />
          </Grid>

          {/* Business Exchange */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="They Provide"
              value={data.theyProvide}
              borderColor="#9c27b0"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="They Need"
              value={data.theyNeed}
              borderColor="#9c27b0"
            />
          </Grid>

          {/* Notes */}
          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#607d8b" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Milk Diary Details Component
const MilkDiaryDetailsAccordion = ({ data }: { data: MilkDiaryType }) => {
  const [expanded, setExpanded] = useState(false);

  const formatPrice = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatLitres = (litres: number) => {
    return `${litres} litres`;
  };

  const calculateDailyTotal = (day: DailyMilkRecord) => {
    return day.morningLitres + day.eveningLitres;
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Milk Diary - {data.month}
          <Chip
            label="Daily Records"
            size="small"
            color="primary"
            variant="outlined"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {/* Milk Center Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Milk Center Name"
              value={data.milkCenterName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Milk Center Owner"
              value={data.milkCenterOwner}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Contact"
              value={data.milkCenterContact}
              borderColor="#4caf50"
            />
          </Grid>

          {/* Timing Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Morning Due Time"
              value={data.dueTimeMorning}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Evening Due Time"
              value={data.dueTimeEvening}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard label="Month" value={data.month} borderColor="#2196f3" />
          </Grid>

          {/* Summary Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Total Litres"
              value={formatLitres(data.totalLitres)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Total Amount"
              value={formatPrice(data.totalAmount)}
              borderColor="#ff9800"
            />
          </Grid>

          {/* Daily Records */}
          <Grid size={{ xs: 12 }}>
            <Card sx={{ borderLeft: '4px solid #9c27b7', mb: 2 }}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Daily Milk Records
                </Typography>
                <Grid container spacing={1}>
                  {data.days.map((dayRecord) => (
                    <Grid
                      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      key={dayRecord.day}
                    >
                      <Card variant="outlined" sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          gutterBottom
                        >
                          Day {dayRecord.day}
                        </Typography>
                        <Typography variant="body2">
                          Morning: {dayRecord.morningLitres}L
                        </Typography>
                        <Typography variant="body2">
                          Evening: {dayRecord.eveningLitres}L
                        </Typography>
                        <Typography variant="body2">
                          Daily Total: {calculateDailyTotal(dayRecord)}L
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          Amount: ₹{dayRecord.amount}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Notes */}
          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#607d8b" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Milk Diary Summary Details Component
const MilkDiarySummaryDetailsAccordion = ({
  data
}: {
  data: MilkDiarySummaryType;
}) => {
  const [expanded, setExpanded] = useState(false);

  const formatPrice = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatBoolean = (value?: boolean) => {
    return value ? 'Yes' : 'No';
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          Milk Diary Summary
          <Chip
            label={data.amountWithdrawn ? 'Paid' : 'Pending'}
            size="small"
            color={data.amountWithdrawn ? 'success' : 'warning'}
            variant="outlined"
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {/* Milk Center Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Milk Center Name"
              value={data.milkCenterName}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Milk Center Owner"
              value={data.milkCenterOwner}
              borderColor="#4caf50"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Contact"
              value={data.milkCenterContact}
              borderColor="#4caf50"
            />
          </Grid>

          {/* Invoice Details */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Invoice Date"
              value={formatDate(data.invoiceDate)}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Total Litres"
              value={`${data.totalLitres} litres`}
              borderColor="#2196f3"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Total Amount"
              value={formatPrice(data.totalAmount)}
              borderColor="#2196f3"
            />
          </Grid>

          {/* Payment Status */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Amount Withdrawn"
              value={formatBoolean(data.amountWithdrawn)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Feeds Provided"
              value={formatBoolean(data.feedsProvided)}
              borderColor="#ff9800"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <FieldCard
              label="Purpose"
              value={data.purpose}
              borderColor="#ff9800"
            />
          </Grid>

          {/* Download Link */}
          {data.downloadLink && (
            <Grid size={{ xs: 12 }}>
              <Card sx={{ borderLeft: '4px solid #9c27b0', mb: 1 }}>
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Download Invoice
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href={data.downloadLink}
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    Click here to download the invoice PDF
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Notes */}
          <Grid size={{ xs: 12 }}>
            <FieldCard label="Notes" value={data.notes} borderColor="#607d8b" />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

// Main Component
const FormDetailsPanelPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Helmet>
        <title>Form Details Panel</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader title="Form Details Panel" btntitle="" icon={''} />
      </PageTitleWrapper>

      <Box sx={{ maxWidth: '95%', mx: isMobile ? 1 : 4, mb: 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid size={{ xs: 12 }}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Dashboard />
              </CardContent>
            </Card>

            {/* Milk Diary Summary Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <MilkDiarySummaryDetailsAccordion data={mockMilkSummaryData} />
              </CardContent>
            </Card>

            {/* Milk Diary Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <MilkDiaryDetailsAccordion data={mockMilkDiaryData} />
              </CardContent>
            </Card>

            {/* Animal Detail Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <AnimalDetailDetailsAccordion data={mockAnimalData} />
              </CardContent>
            </Card>
            {/* Expense Tracker Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <ExpenseTrackerDetailsAccordion data={mockExpenseData} />
              </CardContent>
            </Card>

            {/* Cow Care Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <AnimalCareDetailsAccordion data={mockAnimalCareData} />
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <FarmerDetailsAccordion data={mockFarmerData} />
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <ContactDetailsAccordion data={mockContactData} />
              </CardContent>
            </Card>

            {/* Visitor Registration Component */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <VisitorRegistrationDetailsAccordion data={mockVisitorData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default FormDetailsPanelPage;
