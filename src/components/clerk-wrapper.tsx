"use client";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

interface Props { 
    children: React.ReactNode; 
}

export const ClerkWrapper = ({children} : Props) => {
    const currentTheme = useCurrentTheme(); 
    return (
        <ClerkProvider
            appearance={
                {
                    baseTheme: currentTheme === "dark" ? dark : undefined, 
                }
            }
        >
            {children}
        </ClerkProvider>
        
    )
}