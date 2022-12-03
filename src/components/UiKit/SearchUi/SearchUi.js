import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import InputUi from "../InputUi/InputUi";

export default function SearchUi({ ...props }) {
  // {width > 1024 ? (

  return (
    <InputUi
      {...props}
      placeholder="Search..."
      InputProps={{
        endAdornment: (
          <InputAdornment
            // className="z-[1]"
            position="end"
          >
            <Search className="opacity-50" />
          </InputAdornment>
        ),
        classes: { root: "p-[0] pr-[8px]" },
      }}
    />
  );
}
