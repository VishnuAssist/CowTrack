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
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
  IconButton,
  AccordionDetails,
  Accordion,
  AccordionSummary
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  TrendingUp,
  TrendingDown,
  LocalHospital,
  PieChart,
  AttachMoney,
  LocalShipping,
  Group,
  Event,
  Warning,
  Notifications
} from '@mui/icons-material';
import Footer from 'src/components/Footer';

// Types for Dashboard Data
interface DashboardMetric {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactElement;
  color: string;
}

interface ActivityItem {
  id: number;
  type: 'milk' | 'expense' | 'medical' | 'equipment' | 'visitor';
  description: string;
  amount?: number;
  date: string;
}

interface AnimalStat {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

interface ChartData {
  date: string;
  revenue: number;
  expense: number;
}

// Mock Data
const dashboardMetrics: DashboardMetric[] = [
  {
    title: 'Total Revenue (Current Month)',
    value: '₹85,420',
    change: 12.5,
    icon: <AttachMoney />,
    color: '#4caf50'
  },
  {
    title: 'Total Expenses (Current Month)',
    value: '₹32,150',
    change: -8.2,
    icon: <TrendingDown />,
    color: '#f44336'
  },
  {
    title: 'Net Profit',
    value: '₹53,270',
    change: 15.3,
    icon: <TrendingUp />,
    color: '#2196f3'
  },
  {
    title: 'Year-to-Date Revenue',
    value: '₹8,45,600',
    change: 22.7,
    icon: <PieChart />,
    color: '#ff9800'
  }
];

const animalStats: AnimalStat[] = [
  { type: 'Cows', count: 25, percentage: 55, color: '#4caf50' },
  { type: 'Buffaloes', count: 12, percentage: 27, color: '#2196f3' },
  { type: 'Goats', count: 8, percentage: 18, color: '#ff9800' }
];

const recentActivities: ActivityItem[] = [
  {
    id: 1,
    type: 'milk',
    description: 'Milk Sales',
    amount: 128500,
    date: '2 hours ago'
  },
  {
    id: 2,
    type: 'expense',
    description: 'Feed Expenses',
    amount: 25800,
    date: '1 day ago'
  },
  {
    id: 3,
    type: 'medical',
    description: 'Medical Expenses',
    amount: 8450,
    date: '1 day ago'
  },
  {
    id: 4,
    type: 'equipment',
    description: 'Equipment Purchases',
    amount: 12000,
    date: '2 days ago'
  },
  {
    id: 5,
    type: 'visitor',
    description: 'Visitor Registrations',
    amount: 15,
    date: 'Today'
  }
];

const milkProductionData = {
  todayCollection: 185,
  monthlyAverage: 165,
  milkRevenue: 42500,
  bestProducer: { name: 'Lakshmi', production: 18 }
};

const animalHealthData = {
  healthy: 43,
  underTreatment: 2,
  vaccinationDue: 5,
  pregnancyDue: 3
};

const feedInventoryData = {
  currentStock: 850,
  daysSupply: 15,
  monthlyConsumption: 1800,
  costPerLiter: 4.2
};

const quickAlerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Milk collection due in 2 hours',
    icon: <Notifications />
  },
  {
    id: 2,
    type: 'info',
    message: 'Veterinary visit scheduled today',
    icon: <LocalHospital />
  },
  {
    id: 3,
    type: 'warning',
    message: '2 animals due for vaccination',
    icon: <Warning />
  },
  {
    id: 4,
    type: 'info',
    message: '3 visitors registered today',
    icon: <Group />
  },
  {
    id: 5,
    type: 'warning',
    message: 'Tractor service due',
    icon: <LocalShipping />
  }
];

const revenueExpenseChart: ChartData[] = [
  { date: 'Jan 1', revenue: 8500, expense: 3200 },
  { date: 'Jan 2', revenue: 9200, expense: 2800 },
  { date: 'Jan 3', revenue: 7800, expense: 3500 },
  { date: 'Jan 4', revenue: 10500, expense: 4200 },
  { date: 'Jan 5', revenue: 8800, expense: 3100 },
  { date: 'Jan 6', revenue: 9500, expense: 3800 },
  { date: 'Jan 7', revenue: 8200, expense: 2900 },
  { date: 'Jan 8', revenue: 11000, expense: 4500 },
  { date: 'Jan 9', revenue: 9800, expense: 3600 },
  { date: 'Jan 10', revenue: 8900, expense: 3300 },
  { date: 'Jan 11', revenue: 10200, expense: 4100 },
  { date: 'Jan 12', revenue: 9400, expense: 3700 },
  { date: 'Jan 13', revenue: 8700, expense: 3400 },
  { date: 'Jan 14', revenue: 9900, expense: 3900 },
  { date: 'Jan 15', revenue: 11300, expense: 4700 }
];

// Metric Card Component
const MetricCard = ({ metric }: { metric: DashboardMetric }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': { transform: 'translateY(-4px)' }
    }}
  >
    <CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Avatar sx={{ bgcolor: metric.color, width: 56, height: 56 }}>
          {metric.icon}
        </Avatar>
        <Chip
          label={`${metric.change > 0 ? '+' : ''}${metric.change}%`}
          color={metric.change > 0 ? 'success' : 'error'}
          size="small"
        />
      </Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {metric.value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {metric.title}
      </Typography>
    </CardContent>
  </Card>
);

// Animal Stats Component
const AnimalStatsCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Group color="primary" /> Animal Statistics
      </Typography>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        45
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Total Animals
      </Typography>

      <Box mt={2}>
        {animalStats.map((stat, index) => (
          <Box key={index} mb={2}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body2">{stat.type}</Typography>
              <Typography variant="body2" fontWeight="bold">
                {stat.count}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={stat.percentage}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#f5f5f5',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: stat.color
                }
              }}
            />
          </Box>
        ))}
      </Box>

      <Grid container spacing={2} mt={1}>
        <Grid size={{ xs: 6 }}>
          <Chip
            label="Pregnant: 6"
            color="secondary"
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Chip
            label="Calves: 9"
            color="primary"
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Chip
            label="Sick Animals: 2 (Under Treatment)"
            color="error"
            size="small"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

// Milk Production Card
const MilkProductionCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <LocalShipping color="primary" /> Milk Production
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            {milkProductionData.todayCollection}L
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Today's Collection
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="secondary">
            {milkProductionData.monthlyAverage}L
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monthly Average
          </Typography>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography variant="body2" gutterBottom>
          <strong>Best Producer:</strong> {milkProductionData.bestProducer.name}{' '}
          ({milkProductionData.bestProducer.production}L/day)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Milk Revenue (MTD): ₹
          {milkProductionData.milkRevenue.toLocaleString('en-IN')}
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" gutterBottom>
          Top Producing Animals:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <TrendingUp color="success" />
            </ListItemIcon>
            <ListItemText primary="Lakshmi (Jersey): 18L/day" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TrendingUp color="success" />
            </ListItemIcon>
            <ListItemText primary="Ganga (HF): 16L/day" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TrendingUp color="success" />
            </ListItemIcon>
            <ListItemText primary="Kamadhenu (Local): 14L/day" />
          </ListItem>
        </List>
      </Box>
    </CardContent>
  </Card>
);

// Recent Activities Card
const RecentActivitiesCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Event color="primary" /> Recent Activities (15 Days)
      </Typography>

      <List>
        {recentActivities.map((activity) => (
          <ListItem key={activity.id} divider>
            <ListItemText
              primary={activity.description}
              secondary={activity.date}
            />
            {activity.amount && (
              <Typography variant="body2" fontWeight="bold">
                ₹{activity.amount.toLocaleString('en-IN')}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

// Quick Alerts Card
const QuickAlertsCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Warning color="warning" /> Quick Alerts & Tasks
      </Typography>

      <List>
        {quickAlerts.map((alert) => (
          <ListItem key={alert.id} divider>
            <ListItemIcon>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: alert.type === 'warning' ? '#ff9800' : '#2196f3'
                }}
              >
                {alert.icon}
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={alert.message} />
          </ListItem>
        ))}
      </List>

      <Box mt={2}>
        <Chip label="Pending Tasks: 5" color="warning" variant="filled" />
      </Box>
    </CardContent>
  </Card>
);

// Animal Health Card
const AnimalHealthCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <LocalHospital color="primary" /> Animal Health Overview
      </Typography>

      <Grid container spacing={2} textAlign="center">
        <Grid size={{ xs: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="success.main">
            {animalHealthData.healthy}
          </Typography>
          <Typography variant="body2">Healthy</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="error.main">
            {animalHealthData.underTreatment}
          </Typography>
          <Typography variant="body2">Under Treatment</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="warning.main">
            {animalHealthData.vaccinationDue}
          </Typography>
          <Typography variant="body2">Vaccination Due</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="secondary.main">
            {animalHealthData.pregnancyDue}
          </Typography>
          <Typography variant="body2">Pregnancy Due</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

// Feed Inventory Card
const FeedInventoryCard = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Feed & Inventory
      </Typography>

      <Box mb={2}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {feedInventoryData.currentStock} kg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current Stock ({feedInventoryData.daysSupply} days supply)
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2">
            Monthly Consumption: {feedInventoryData.monthlyConsumption} kg
          </Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2">
            Cost per Liter: ₹{feedInventoryData.costPerLiter}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Chip
          label="Medicine Stock Low"
          color="error"
          size="small"
          sx={{ mr: 1, mb: 1 }}
        />
        <Chip label="Feed Reorder Required" color="warning" size="small" />
      </Box>
    </CardContent>
  </Card>
);

// Main Dashboard Component
const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ maxWidth: '95%', mx: isMobile ? 1 : 4, mb: 4 }}>
            {/* Overview Metrics */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {dashboardMetrics.map((metric, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                  <MetricCard metric={metric} />
                </Grid>
              ))}
            </Grid>

            {/* Main Content Grid */}
            <Grid container spacing={3}>
              {/* Left Column */}
              <Grid size={{ xs: 12, lg: 8 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <MilkProductionCard />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <AnimalStatsCard />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <RecentActivitiesCard />
                  </Grid>
                </Grid>
              </Grid>

              {/* Right Column */}
              <Grid size={{ xs: 12, lg: 4 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12 }}>
                    <QuickAlertsCard />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6, lg: 12 }}>
                    <AnimalHealthCard />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 12 }}>
                    <FeedInventoryCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dashboard;
