import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ClaimViewSkeleton = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile && (
        <Box sx={{ mx: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
                <Skeleton
                  variant="text"
                  width={250}
                  height={50}
                  sx={{ mr: 2 }}
                />
                <Skeleton
                  variant="text"
                  width={250}
                  height={50}
                  sx={{ mr: 2 }}
                />
                <Skeleton
                  variant="text"
                  width={250}
                  height={50}
                  sx={{ mr: 2 }}
                />
                <Skeleton
                  variant="text"
                  width={250}
                  height={50}
                  sx={{ mr: 2 }}
                />
              </Card>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
                <CardHeader
                  action={<Skeleton variant="text" width={80} height={50} />}
                  title={
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="60%"
                      sx={{ mb: 0.75 }}
                    />
                  }
                />
                <CardContent>
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                  }}
                >
                  <Skeleton animation="wave" height={36} width={64} />
                </CardActions>
              </Card>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
                <CardHeader
                  action={<Skeleton variant="text" width={80} height={50} />}
                  title={
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="60%"
                      sx={{ mb: 0.75 }}
                    />
                  }
                />
                <CardContent>
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                  }}
                >
                  <Skeleton animation="wave" height={36} width={64} />
                </CardActions>
              </Card>
            </Grid>
       
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
            
                <CardContent>
                  <Skeleton animation="wave" height={60} sx={{ mb: 0.75 }} />
       
                </CardContent>
               
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {isMobile && (
        <Box sx={{ mx: 2, mb: 2 }}>
          <Grid container spacing={2}>
         

            <Grid
              size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
                <CardHeader
                  action={<Skeleton variant="text" width={80} height={50} />}
                  title={
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="60%"
                      sx={{ mb: 0.75 }}
                    />
                  }
                />
                <CardContent>
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                  }}
                >
                  <Skeleton animation="wave" height={36} width={64} />
                </CardActions>
              </Card>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 1,
                  height: "100%",
                }}
              >
                <CardHeader
                  action={<Skeleton variant="text" width={80} height={50} />}
                  title={
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="60%"
                      sx={{ mb: 0.75 }}
                    />
                  }
                />
                <CardContent>
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                  <Skeleton animation="wave" height={30} sx={{ mb: 0.75 }} />
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                  }}
                >
                  <Skeleton animation="wave" height={36} width={64} />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ClaimViewSkeleton;