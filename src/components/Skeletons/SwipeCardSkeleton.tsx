import React from "react";
import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

const SwipeCardSkeleton: React.FC = () => {
  const skeletonCount = 5;

  return (
    <Box sx={{ p: 2 }}>
      {[...Array(skeletonCount)].map((_, index) => (
        <Card
          key={index}
          sx={{
            mb: 1,
            borderRadius: 2,
            height: "140px",
            boxShadow: 7,
          }}
        >
          <Box sx={{ p: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Skeleton variant="text" width={40} height={24} sx={{}} />
              <Skeleton variant="text" width={100} height={24} sx={{}} />
            </Stack>
          </Box>
          <CardContent>
            <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
            <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
              <Skeleton variant="text" width="40%" height={16} sx={{}} />
              <Skeleton variant="text" width="40%" height={16} sx={{}} />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Skeleton
                variant="rectangular"
                width={60}
                height={24}
                sx={{ borderRadius: 1 }}
              />
              <Skeleton variant="text" width="30%" height={16} sx={{}} />
            </Box>
          </CardContent>
          <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
            <Skeleton variant="text" width={100} height={16} sx={{}} />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default SwipeCardSkeleton;
