import { Close, Search } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import InputUi from "../InputUi/InputUi";

export default function SearchUi({ ...props }) {
  // const [value, setValue] = useState();
  const { onChange, value } = props;
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (value !== undefined) {
      if (value !== search) {
        setSearch(value);
        setSearchValue(value);
      }
    }
    //eslint-disable-next-line
  }, [value]);

  const searchHandler = (e) => {
    if (searchValue !== search) {
      if (e.keyCode) {
        if (e.keyCode === 13) {
          setSearchValue(search);
          onChange && onChange(search);
        }
        return;
      }
      setSearchValue(search);
      onChange && onChange(search);
    }
  };
  const cleanHandler = () => {
    setSearch("");
    setSearchValue("");
    onChange && onChange("");
  };
  const isClose = searchValue === search && searchValue;
  return (
    <InputUi
      {...props}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={searchHandler}
      placeholder="Search..."
      InputProps={{
        endAdornment: (
          <InputAdornment
            // className="z-[1]"
            position="end"
          >
            <IconButton
              onClick={isClose ? cleanHandler : searchHandler}
              sx={{
                backgroundColor: `${
                  searchValue === search ? "transparent" : "rgb(0 0 0 / 4%)"
                } !important`,
              }}
            >
              {isClose ? <Close /> : <Search className="opacity-50" />}
            </IconButton>
          </InputAdornment>
        ),
        classes: { root: "p-[0] pr-[8px]" },
      }}
    />
  );
}
