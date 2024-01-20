import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openFile: IFile[];
  clickedFile: IClickedFile;
  activeTab: string | null;
}

const initialState: IInitialState = {
  activeTab: null,
  openFile: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFileAction: (state, action: PayloadAction<IFile[]>) => {
      state.openFile = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setActiveTabAction: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setOpenFileAction, setClickedFileAction, setActiveTabAction } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
