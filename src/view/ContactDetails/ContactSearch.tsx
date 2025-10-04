import { TextField, Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { setSearchQuery } from "../../slice/ContactDeatilsSlice";
import { selectSearchQuery } from "../../selectors/contactsSelectors";

export default function ContactSearch() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearchQuery);

  return (


    <Box margin={2}>
        <Grid container spacing={2} alignItems="center" justifyContent={"flex-end"}>
          <Grid size={{xs:12,sm:6,md:3}}>
            <TextField
              label="Search by Name"
              value={search}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              size="small"
              fullWidth
            />
          </Grid>
         
        </Grid>
      </Box>
  );
}
