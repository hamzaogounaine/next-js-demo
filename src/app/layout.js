'use client'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MenuIcon, Moon, MountainIcon, Sun } from "lucide-react";
import "./globals.css";
import { useState } from "react";
import Navbar from "./comps/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MoviesProvider } from "./context/context";


export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Provider store={store}>
            <MoviesProvider>

              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                <main className={`px-4 bg-secondary text-foreground`}>{children}</main>
              </ThemeProvider>
            </MoviesProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}