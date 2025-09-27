import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  IconButton
} from '@mui/material';
import { 
  Close,
  Person,
  Work,
  Language,
  Phone,
  Email,
  Flag,
  Notes,
  Agriculture,
  Category
} from '@mui/icons-material';
import { ContactDetailsType, RoleType } from 'src/models/ContactDetailsType';

interface ContactPreviewProps {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: ContactDetailsType | null;
}

export default function ContactPreview({ 
  preview, 
  closePreview, 
  PreviewDetails 
}: ContactPreviewProps) {
  if (!PreviewDetails) return null;

  const getRoleColor = (role: RoleType) => {
    switch (role) {
      case 'farmer': return 'primary';
      case 'Doctor': return 'secondary';
      case 'Visitor': return 'info';
      case 'common person': return 'success';
      default: return 'default';
    }
  };

  const getPurposeColor = (purpose?: string) => {
    switch (purpose) {
      case 'Milk': return 'primary';
      case 'Eggs': return 'warning';
      default: return 'default';
    }
  };

  const InfoRow = ({ icon, label, value, chip }: { icon: React.ReactNode, label: string, value?: string, chip?: React.ReactNode }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
        {icon}
        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
          {label}:
        </Typography>
      </Box>
      <Box sx={{ ml: 2, flex: 1 }}>
        {chip ? chip : (
          <Typography variant="body1" fontWeight="medium">
            {value || 'Not specified'}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <Dialog 
      open={preview} 
      onClose={closePreview} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Person sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Contact Details
          </Typography>
        </Box>
        <IconButton 
          onClick={closePreview} 
          sx={{ color: 'white' }}
          size="small"
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        {/* Basic Information */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <Person sx={{ mr: 1, fontSize: '1.2rem' }} />
            Basic Information
          </Typography>
          <Box sx={{ pl: 1 }}>
            <InfoRow
              icon={<Person fontSize="small" />}
              label="Name"
              value={PreviewDetails.name}
            />
            
            <InfoRow
              icon={<Work fontSize="small" />}
              label="Role"
              chip={
                <Chip 
                  label={PreviewDetails.role} 
                  color={getRoleColor(PreviewDetails.role) as any}
                  size="small"
                />
              }
            />

            <InfoRow
              icon={<Language fontSize="small" />}
              label="Native"
              value={PreviewDetails.native}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Contact Information */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <Phone sx={{ mr: 1, fontSize: '1.2rem' }} />
            Contact Information
          </Typography>
          <Box sx={{ pl: 1 }}>
            <InfoRow
              icon={<Phone fontSize="small" />}
              label="Phone"
              value={PreviewDetails.phoneNumber}
            />
            
            <InfoRow
              icon={<Email fontSize="small" />}
              label="Email"
              value={PreviewDetails.email}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Additional Information */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <Category sx={{ mr: 1, fontSize: '1.2rem' }} />
            Additional Information
          </Typography>
          <Box sx={{ pl: 1 }}>
            {PreviewDetails.purpose && (
              <InfoRow
                icon={<Flag fontSize="small" />}
                label="Purpose"
                chip={
                  <Chip 
                    label={PreviewDetails.purpose} 
                    color={getPurposeColor(PreviewDetails.purpose) as any}
                    size="small"
                  />
                }
              />
            )}

            {PreviewDetails.farmEquipmentOwned && (
              <InfoRow
                icon={<Agriculture fontSize="small" />}
                label="Farm Equipment"
                value={PreviewDetails.farmEquipmentOwned}
              />
            )}

            {PreviewDetails.notes && (
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Notes fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    Notes:
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ 
                  p: 1, 
                  backgroundColor: 'grey.50', 
                  borderRadius: 1,
                  fontStyle: 'italic',
                  ml: 3
                }}>
                  {PreviewDetails.notes}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={closePreview} 
          variant="contained" 
          color="primary"
          fullWidth
          startIcon={<Close />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}