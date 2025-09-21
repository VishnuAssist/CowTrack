import { Typography, Button, Grid, ButtonGroup } from '@mui/material';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  icon?: ReactNode;
  btntitle?: string;
  btntitle2?: string;
  onActionClick?: () => void;
  onActionClick2?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  icon,
  btntitle,
  onActionClick,
  btntitle2,
  onActionClick2
}) => {
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid>
          <motion.h1
            style={{
              overflow: 'hidden',
              whiteSpace: 'noWrap',
              color: 'orange'
            }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <Typography sx={{ fontSize: '22px', fontWeight: '800' }}>
              FarmFusion – Everything farm-related in one place
            </Typography>
          </motion.h1>
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            {title}
          </motion.h1>
        </Grid>
        <Grid component={ButtonGroup}>
          {' '}
          {btntitle && (
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={icon}
              onClick={onActionClick}
            >
              {btntitle}
            </Button>
          )}
          {btntitle2 && (
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              // startIcon={icon}
              onClick={onActionClick2}
            >
              {btntitle2}
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default PageHeader;
