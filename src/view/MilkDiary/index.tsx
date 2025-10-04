import React, { useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  startNewDiary,
  updateDiaryEntry,
  updateRate,
  submitDiary,
} from "../../slice/MilkDiarySlice";
// import { RootState } from "../store/store";
import { DailyMilkRecord } from "../../models/MilkDairyType";
import { RootState } from "../../store/configureStore";
import { addSummaryFromDiary } from "../../slice/MilkDiarySummerySlice";

const generateDays = (start: number, end: number): DailyMilkRecord[] =>
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
  const dispatch = useDispatch();
  const diary = useSelector((state: RootState) => state.milkDiary.currentDiary);

  useEffect(() => {
    if (!diary) {
      dispatch(
        startNewDiary({
          milkCenterName: "",
          milkCenterOwner: "",
          milkCenterContact: "",
          dueTimeMorning: "06:00",
          dueTimeEvening: "18:00",
          month: "September 2025",
          perLitreRate: 30,
          firstHalf: generateDays(1, 15),
          secondHalf: generateDays(16, 30),
          // firstHalfTotalLitres: 0,
          // firstHalfTotalAmount: 0,
          // secondHalfTotalLitres: 0,
          // secondHalfTotalAmount: 0
        })
      );
    }
  }, [dispatch, diary]);

  if (!diary) return null;

 const renderTable = (half: "firstHalf" | "secondHalf") => {
  const halfTotals =
    half === "firstHalf"
      ? {
          litres: diary.firstHalfTotalLitres,
          amount: diary.firstHalfTotalAmount,
        }
      : {
          litres: diary.secondHalfTotalLitres,
          amount: diary.secondHalfTotalAmount,
        };

  return (
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
          {diary[half].map((row, i) => (
            <TableRow key={row.day}>
              <TableCell>{row.day}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  size="small"
                  value={row.morningLitres}
                  onChange={(e) =>
                    dispatch(
                      updateDiaryEntry({
                        half,
                        dayIndex: i,
                        field: "morningLitres",
                        value: parseFloat(e.target.value) || 0,
                      })
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
                    dispatch(
                      updateDiaryEntry({
                        half,
                        dayIndex: i,
                        field: "morningFat",
                        value: parseFloat(e.target.value) || 0,
                      })
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
                    dispatch(
                      updateDiaryEntry({
                        half,
                        dayIndex: i,
                        field: "eveningLitres",
                        value: parseFloat(e.target.value) || 0,
                      })
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
                    dispatch(
                      updateDiaryEntry({
                        half,
                        dayIndex: i,
                        field: "eveningFat",
                        value: parseFloat(e.target.value) || 0,
                      })
                    )
                  }
                />
              </TableCell>
              <TableCell>{row.eveningAmount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell colSpan={2}>Total Litres</TableCell>
            <TableCell colSpan={2}>{halfTotals.litres}</TableCell>
            <TableCell colSpan={2}>Total Amount</TableCell>
            <TableCell>{halfTotals.amount.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};


  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Milk Diary</Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid size={{xs:6}}>
          <TextField
            label="Milk Center Name"
            fullWidth
            value={diary.milkCenterName}
            onChange={(e) =>
              dispatch(
                startNewDiary({ ...diary, milkCenterName: e.target.value })
              )
            }
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            label="Owner"
            fullWidth
            value={diary.milkCenterOwner}
            onChange={(e) =>
              dispatch(
                startNewDiary({ ...diary, milkCenterOwner: e.target.value })
              )
            }
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            label="Contact"
            fullWidth
            value={diary.milkCenterContact}
            onChange={(e) =>
              dispatch(
                startNewDiary({ ...diary, milkCenterContact: e.target.value })
              )
            }
          />
        </Grid>
        <Grid size={{xs:3}}>
          <TextField
            label="Morning Time"
            type="time"
            fullWidth
            value={diary.dueTimeMorning}
            onChange={(e) =>
              dispatch(
                startNewDiary({ ...diary, dueTimeMorning: e.target.value })
              )
            }
          />
        </Grid>
        <Grid size={{xs:3}}>
          <TextField
            label="Evening Time"
            type="time"
            fullWidth
            value={diary.dueTimeEvening}
            onChange={(e) =>
              dispatch(
                startNewDiary({ ...diary, dueTimeEvening: e.target.value })
              )
            }
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            label="Month"
            fullWidth
            value={diary.month}
            onChange={(e) =>
              dispatch(startNewDiary({ ...diary, month: e.target.value }))
            }
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            label="Rate per Litre"
            type="number"
            fullWidth
            value={diary.perLitreRate}
            onChange={(e) =>
              dispatch(updateRate(parseFloat(e.target.value) || 0))
            }
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Days 1–15
      </Typography>
      {renderTable("firstHalf")}

      <Typography variant="h6" sx={{ mt: 3 }}>
        Days 16–30
      </Typography>
      {renderTable("secondHalf")}

      <Typography variant="h6" sx={{ mt: 3 }}>
        Totals
      </Typography>
      <Typography>
        Total Litres: {diary.totalLitres} | Total Amount:{" "}
        {diary.totalAmount.toFixed(2)}
      </Typography>


<Typography variant="h6" sx={{ mt: 3 }}>
  Grand Totals
</Typography>
<Typography>
  1–15 → Litres: {diary.firstHalfTotalLitres} | Amount: {diary.firstHalfTotalAmount.toFixed(2)}
</Typography>
<Typography>
  16–30 → Litres: {diary.secondHalfTotalLitres} | Amount: {diary.secondHalfTotalAmount.toFixed(2)}
</Typography>
<Typography sx={{ fontWeight: "bold" }}>
  Overall → Litres: {diary.totalLitres} | Amount: {diary.totalAmount.toFixed(2)}
</Typography>



      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        // onClick={() => dispatch(submitDiary())}
         onClick={() => {
    if (diary) {
      dispatch(submitDiary()); // Save to allDiaries
      dispatch(addSummaryFromDiary(diary)); // Add to summary slice
    }
  }}
      >
        Submit Diary
      </Button>
    </div>
  );
};

export default MilkDiary;
