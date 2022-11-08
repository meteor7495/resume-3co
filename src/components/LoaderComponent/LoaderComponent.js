import { CircularProgress, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const LoaderComponent = () => {
  var classes = useStyles();
  const { visible, text, loaderArray } = useSelector((state) => state.loading);
  const progressBar = useSelector((state) => state.progressBar);
  return visible || (loaderArray && loaderArray.length > 0) ? (
    <div id="Loader" className={classes.divLoader}>
      <CircularProgress
        className={classes.loading}
        size={120}
        color={"primary"}
      />

      {progressBar && progressBar !== 100 ? (
        <Box
          sx={{
            width: "50%",
            padding: 4,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progressBar}
            sx={{ height: 15, borderRadius: 20 }}
          />
        </Box>
      ) : (
        ""
      )}
      <p>{text}</p>
    </div>
  ) : (
    <></>
  );
};

export default LoaderComponent;
