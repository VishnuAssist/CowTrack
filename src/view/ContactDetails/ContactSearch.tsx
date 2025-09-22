import { TextField, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/store/configureStore";
import { setSearchQuery } from "../../slice/ContactDeatilsSlice";
import { selectSearchQuery } from "../../selectors/contactsSelectors";

export default function ContactSearch() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearchQuery);

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Search"
        value={search}
        fullWidth
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </Box>
  );
}
