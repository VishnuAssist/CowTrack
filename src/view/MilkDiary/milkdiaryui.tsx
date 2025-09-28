import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface DailyEntry {
  day: number;
  morningLitres: number;
  morningFat: number;
  morningAmount: number;
  eveningLitres: number;
  eveningFat: number;
  eveningAmount: number;
}

const generateDays = (start: number, end: number): DailyEntry[] =>
  Array.from({ length: end - start + 1 }, (_, i) => ({
    day: start + i,
    morningLitres: 0,
    morningFat: 0,
    morningAmount: 0,
    eveningLitres: 0,
    eveningFat: 0,
    eveningAmount: 0,
  }));

const MilkDiary: React.FC = () => {
  const [milkCenterName, setMilkCenterName] = useState("");
  const [owner, setOwner] = useState("");
  const [contact, setContact] = useState("");
  const [dueMorning, setDueMorning] = useState("06:00");
  const [dueEvening, setDueEvening] = useState("18:00");
  const [month, setMonth] = useState("September 2025");
  const [rate, setRate] = useState(30); // per litre amount

  const [firstHalf, setFirstHalf] = useState<DailyEntry[]>(
    generateDays(1, 15)
  );
  const [secondHalf, setSecondHalf] = useState<DailyEntry[]>(
    generateDays(16, 30)
  );

  const handleChange = (
    half: "first" | "second",
    dayIndex: number,
    field: keyof DailyEntry,
    value: number
  ) => {
    const data = half === "first" ? [...firstHalf] : [...secondHalf];
    data[dayIndex][field] = value;

    // Auto update amounts
    data[dayIndex].morningAmount =
      data[dayIndex].morningLitres * rate;
    data[dayIndex].eveningAmount =
      data[dayIndex].eveningLitres * rate;

    half === "first" ? setFirstHalf(data) : setSecondHalf(data);
  };

  const calculateTotals = (entries: DailyEntry[]) => {
    let litres = 0,
      amount = 0;
    entries.forEach((e) => {
      litres += e.morningLitres + e.eveningLitres;
      amount += e.morningAmount + e.eveningAmount;
    });
    return { litres, amount };
  };

  const totals1 = calculateTotals(firstHalf);
  const totals2 = calculateTotals(secondHalf);

  const renderTable = (data: DailyEntry[], half: "first" | "second") => (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Morning Litres</TableCell>
            <TableCell>Morning Fat%</TableCell>
            <TableCell>Morning Amount</TableCell>
            <TableCell>Evening Litres</TableCell>
            <TableCell>Evening Fat%</TableCell>
            <TableCell>Evening Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.day}>
              <TableCell>{row.day}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  value={row.morningLitres}
                  onChange={(e) =>
                    handleChange(
                      half,
                      i,
                      "morningLitres",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  value={row.morningFat}
                  onChange={(e) =>
                    handleChange(
                      half,
                      i,
                      "morningFat",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </TableCell>
              <TableCell>{row.morningAmount.toFixed(2)}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  value={row.eveningLitres}
                  onChange={(e) =>
                    handleChange(
                      half,
                      i,
                      "eveningLitres",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  value={row.eveningFat}
                  onChange={(e) =>
                    handleChange(
                      half,
                      i,
                      "eveningFat",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </TableCell>
              <TableCell>{row.eveningAmount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell colSpan={2}>Total Litres</TableCell>
            <TableCell colSpan={2}>{calculateTotals(data).litres}</TableCell>
            <TableCell colSpan={2}>Total Amount</TableCell>
            <TableCell>{calculateTotals(data).amount.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Milk Diary
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{xs:12,sm:6,md:4}}>
          <TextField
            label="Milk Center Name"
            fullWidth
            value={milkCenterName}
            onChange={(e) => setMilkCenterName(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:6,md:4}}>
          <TextField
            label="Owner Name"
            fullWidth
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:6,md:4}}>
          <TextField
            label="Contact"
            fullWidth
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:12,md:3}}>
          <TextField
            label="Morning Time"
            type="time"
            fullWidth
            value={dueMorning}
            onChange={(e) => setDueMorning(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:12,md:3}}>
          <TextField
            label="Evening Time"
            type="time"
            fullWidth
            value={dueEvening}
            onChange={(e) => setDueEvening(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:12,md:3}}>
          <TextField
            label="Month"
            fullWidth
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </Grid>
        <Grid size={{xs:12,sm:12,md:3}}>
          <TextField
            label="Rate per Litre"
            type="number"
            fullWidth
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Days 1–15
      </Typography>
      {renderTable(firstHalf, "first")}

      <Typography variant="h6" sx={{ mt: 3 }}>
        Days 16–30
      </Typography>
      {renderTable(secondHalf, "second")}

      <Typography variant="h6" sx={{ mt: 3 }}>
        Grand Totals
      </Typography>
      <Typography>
        Total Litres: {totals1.litres + totals2.litres} | Total Amount:{" "}
        {(totals1.amount + totals2.amount).toFixed(2)}
      </Typography>
    </div>
  );
};

export default MilkDiary;
