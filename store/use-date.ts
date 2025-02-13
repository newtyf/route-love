import { create } from "zustand";

type DateState = {
  data: {
    title : string;
    name : string;
    date : string;
    whatsapp: string;
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
    date: "",
    whatsapp: "",
    description : "",
    media : "",
    isViewed: "",
    isLocked: "",
  },
  set: (data) => set({data: {...data}}),
}));
