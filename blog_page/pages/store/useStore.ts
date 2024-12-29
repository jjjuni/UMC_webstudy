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
  isLogged: boolean;
  loading: boolean;
  getUser: () => Promise<void>;
  userInitialize: () => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  isLogged: false,
  loading: false,
  getUser: async () => {
    try{
      set({ loading: true });
      const response = await axiosUserInstance.get(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/users/me`);
      set({ user: response.data, loading: false, isLogged: true });
    } catch (error) {
      set({ isLogged: false });
    }
  },
  userInitialize: () => {
    set({ user: null, isLogged: false })
  }
}))