import { axiosUserInstance } from "../apis/axios-instance";
import { create } from 'zustand'


interface UserInfo {
  "id": number,
  "email": string,
  "password": string,
  "username": string,
  "refreshToken": string,
  "role": string,
}

interface StoreState {
  user: UserInfo | null;
  loading: boolean;
  getUser: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  loading: false,
  getUser: async () => {
    set({ loading: true });
    const response = await axiosUserInstance.get(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/users/me`);
    set({ user: response.data, loading: false });
  },
}))