import { Box, Card, CardContent, Grid, Skeleton } from "@mui/material";

const ApproverSettingSkeleton = () => {
  return (
      <Box sx={{ mx: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 12 }}
            sx={{ maxWidth: "100%", maxHeight: "100%", m: 0 }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <CardContent
                sx={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={200}
                  width={400}
                  sx={{ p: 6, my: 10 }}
                />
              </CardContent>

              <CardContent sx={{ width: "40%" }}>
                
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="100%"
                    sx={{ mb: 0.75, mr: 1 }}
                  />
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="100%"
                    sx={{ mb: 0.75 }}
                  />
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="100%"
                    sx={{ mb: 0.75 }}
                  />
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="100%"
                    sx={{ mb: 0.75 }}
                  />
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
  );
};

export default ApproverSettingSkeleton;
