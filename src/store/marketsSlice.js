import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
// import useMarkets from "../hooks/useMarkets";
import UseMarkets from "../hooks/useMarkets";

/*const {GetIndexMarkets} = useMarkets()
export const getMarkets = GetIndexMarkets();*/
// const {GetIndexMarkets} = Markets()
// export const getMarkets = GetIndexMarkets({url: '/home'});

// Define the initial state using that type
const marketsAdapter = createEntityAdapter({});

export const {selectAll: selectMarkets, selectById: selectMarketById} =
  marketsAdapter.getSelectors((state) => {
    return state.markets
  });

const marketsSlice = createSlice({
  name: "Markets",
  initialState: marketsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    // [getMarkets.fulfilled]: marketsAdapter.setAll,
  },
});

export const {} = marketsSlice.actions;
export default marketsSlice.reducer;
