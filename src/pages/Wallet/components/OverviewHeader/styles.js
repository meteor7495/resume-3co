import { makeStyles } from "@mui/styles";
import { elementHight } from "../../../../constants/elementHight.enum";

export default makeStyles((theme) => ({
  chart: {
    "& .apexcharts-legend-series": {
      display: "flex",
      alignItems: "center",
      gap: 5,
    },
  },
}));
