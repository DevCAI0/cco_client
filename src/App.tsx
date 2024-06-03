import { RouterProvider } from "react-router-dom"
import "./global.css"
import { router } from "./routes"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { Toaster } from "sonner"
import {  QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from './lib/react-query'

export function App(){
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <Toaster richColors />
         <QueryClientProvider client={queryClient}>

       <RouterProvider router={router} />
         </QueryClientProvider>
    </ThemeProvider>
  )
}



