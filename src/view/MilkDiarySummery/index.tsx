import React, { useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import { useReactToPrint } from "react-to-print";

import { updateSummary } from "../../slice/MilkDiarySummerySlice";
import { useAppDispatch, useAppSelector } from "src/store/configureStore";

const MilkDiarySummary: React.FC = () => {
  const { summaries } = useAppSelector((state) => state.milkDiarySummary);
  const { allDiaries } = useAppSelector((state) => state.milkDiary);
  const dispatch = useAppDispatch();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedDiaryId, setSelectedDiaryId] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const handlePrint = useReactToPrint({
  // content: () => componentRef.current,
});


  const getDiaryById = (id: number) =>
    allDiaries.find((diary) => diary.id === id);

  const handlePreview = (id: number) => {
    setSelectedDiaryId(id);
    setPreviewOpen(true);
  };

  // const selectedDiary =
  //   selectedDiaryId !== null ? getDiaryById(selectedDiaryId) : null;

    const selectedDiary =
  selectedDiaryId !== null
    ? allDiaries.find(d => d.id === selectedDiaryId)
    : null;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Milk Diary Summaries
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Center</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Total Litres</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Withdrawn</TableCell>
              <TableCell>Feeds Provided</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summaries.map((s) => (
              <TableRow key={s.id}>
                <TableCell>
                  {new Date(s.invoiceDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{s.milkCenterName}</TableCell>
                <TableCell>{s.milkCenterOwner}</TableCell>
                <TableCell>{s.milkCenterContact}</TableCell>
                <TableCell>{s.totalLitres}</TableCell>
                <TableCell>{s.totalAmount}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={s.amountWithdrawn}
                    onChange={(e) =>
                      dispatch(
                        updateSummary({
                          id: s.id,
                          field: "amountWithdrawn",
                          value: e.target.checked,
                        })
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={s.feedsProvided || false}
                    onChange={(e) =>
                      dispatch(
                        updateSummary({
                          id: s.id,
                          field: "feedsProvided",
                          value: e.target.checked,
                        })
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    sx={{ mr: 1 }}
                    onClick={() => handlePreview(s.id)}
                  >
                    Preview
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<DownloadIcon />}
                    onClick={handlePrint}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Preview Dialog */}
      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Milk Diary Preview</DialogTitle>
        <DialogContent dividers>
          {selectedDiary ? (
            <Box ref={componentRef}>
              <Typography variant="h6">{selectedDiary.milkCenterName}</Typography>
              <Typography>Owner: {selectedDiary.milkCenterOwner}</Typography>
              <Typography>Contact: {selectedDiary.milkCenterContact}</Typography>
              <Typography>
                Total Litres: {selectedDiary.totalLitres} | Total Amount:{" "}
                {selectedDiary.totalAmount}
              </Typography>
              <Typography>
                Amount Withdrawn: {selectedDiary.amountWithdrawn ? "Yes" : "No"}
              </Typography>
              <Typography>
                Feeds Provided: {selectedDiary.feedsProvided ? "Yes" : "No"}
              </Typography>

              {/* First Half Table */}
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Days 1–15
              </Typography>
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
                  {selectedDiary.firstHalf.map((d) => (
                    <TableRow key={d.day}>
                      <TableCell>{d.day}</TableCell>
                      <TableCell>{d.morningLitres}</TableCell>
                      <TableCell>{d.morningFat}</TableCell>
                      <TableCell>{d.morningAmount}</TableCell>
                      <TableCell>{d.eveningLitres}</TableCell>
                      <TableCell>{d.eveningFat}</TableCell>
                      <TableCell>{d.eveningAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Second Half Table */}
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Days 16–30/31
              </Typography>
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
                  {selectedDiary.secondHalf.map((d) => (
                    <TableRow key={d.day}>
                      <TableCell>{d.day}</TableCell>
                      <TableCell>{d.morningLitres}</TableCell>
                      <TableCell>{d.morningFat}</TableCell>
                      <TableCell>{d.morningAmount}</TableCell>
                      <TableCell>{d.eveningLitres}</TableCell>
                      <TableCell>{d.eveningFat}</TableCell>
                      <TableCell>{d.eveningAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          ) : (
            <Typography>No diary selected</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Close</Button>
          <Button variant="contained" onClick={handlePrint}>
            Download Receipt
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MilkDiarySummary;
