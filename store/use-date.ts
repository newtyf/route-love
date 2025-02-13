import { create } from "zustand";

type DateState = {
  data: {
    title : string;
    name : string;
    description : string;
    media : string;
    isViewed: string;
    isLocked: string;
  }
  set: (data: any) => void;
};

export const useDate = create<DateState>((set) => ({
  data: {
    title: "",
    name: "",
    description : "",
    media : "",
    isViewed: "",
    isLocked: "",
  },
  set: (data) => set({data: {...data}}),
}));
