import { Box, Grid, Skeleton } from "@mui/material";

const GridViewSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container spacing={1}>
        {data.map((data) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={data}>
            <Skeleton width={"100%"} height={500} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridViewSkeleton;
