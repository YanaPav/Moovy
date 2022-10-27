import { createSlice } from "@reduxjs/toolkit";

const filterValuesSlice = createSlice({
  name: "filterValues",
    initialState: {
        title: '',
      releaseYear: '',
        page: 1
  },
  reducers: {
    setFilters(state, { payload }) {
      state.title = payload.title
      state.releaseYear = payload.releaseYear
      // RTK use Immer, so we don't mutate state
    },
    setPage(state, { payload }) {
      state.page = payload
    }
     },
});



export const { setFilters, setPage } = filterValuesSlice.actions;
export const filterValuesReducer = filterValuesSlice.reducer