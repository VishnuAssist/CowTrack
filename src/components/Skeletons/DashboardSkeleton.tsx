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

const DashboardViewSkeleton = () => {
  const Data2 = [1, 2];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile && (
        <Box sx={{ mx: 2, mb: 2 }}>
          <Grid container spacing={2}>
            {Data2.map((data) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                key={data}
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
            ))}
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
              size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
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
              size={{ xs: 12, sm: 12, md: 12, lg: 9 }}
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
          </Grid>
        </Box>
      )}
      {isMobile && (
        <Box sx={{ mx: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
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
                      height={20}
                      width="60%"
                      sx={{ mb: 0.75 }}
                    />
                  }
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    height={200}
                    width={200}
                    sx={{ mb: 0.75 }}
                  />
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "auto",
                  }}
                >
                  <Skeleton animation="wave" height={30} width={64} />
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

export default DashboardViewSkeleton;
