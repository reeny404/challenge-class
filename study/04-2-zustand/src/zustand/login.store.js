import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "login-store",
      // storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoginStore;
