// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface PromptState {
//   promptText: string;
//   result: string;
//   heading?: string;
//   paragraph?: string;
// }

// const initialState: PromptState = {
//   promptText: "",
//   result: "",
//   heading: "",
//   paragraph: "",
// };

// const promptSlice = createSlice({
//   name: "prompt",
//   initialState,
//   reducers: {
//     setPromptData: (
//       state,
//       action: PayloadAction<{ promptText: string; result: string }>
//     ) => {
//       state.promptText = action.payload.promptText;
//       state.result = action.payload.result;
//     },
//     clearPromptData: (state) => {
//       state.promptText = "";
//       state.result = "";
//     },
//   },
// });

// export const { setPromptData, clearPromptData } = promptSlice.actions;
// export default promptSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromptState {
  promptText: string;
  result: string;
  heading?: string;
  paragraph?: string;
  subHeading?: string;
  subParagraph?: string;
}

const initialState: PromptState = {
  promptText: "",
  result: "",
  heading: "",
  paragraph: "",
  subHeading: "",
  subParagraph: "",
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPromptData: (
      state,
      action: PayloadAction<{
        promptText: string;
        result: string;
        heading?: string;
        paragraph?: string;
        subHeading?: string;
        subParagraph?: string;
      }>
    ) => {
      state.promptText = action.payload.promptText;
      state.result = action.payload.result;
      if (action.payload.heading) state.heading = action.payload.heading;
      if (action.payload.paragraph) state.paragraph = action.payload.paragraph;
      if (action.payload.subHeading)
        state.subHeading = action.payload.subHeading;
    },
    clearPromptData: (state) => {
      state.promptText = "";
      state.result = "";
      state.heading = "";
      state.paragraph = "";
      state.subHeading = "";
    },
  },
});

export const { setPromptData, clearPromptData } = promptSlice.actions;
export default promptSlice.reducer;
