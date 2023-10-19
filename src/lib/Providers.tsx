"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Providers;
