"use client";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { PricingTable } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";


const Page = () => {
    const currentTheme = useCurrentTheme();
    return (
        <div className="flex flex-col max-w-3xl mx-auto w-full">
            <section className="space-y-6 py-[16vh] 2xl:py-48">
                <PricingTable
                    appearance={{
                        baseTheme: currentTheme === "dark" ? dark : undefined,
                        elements: {
                            cardBox: "border! shadow-none! rounded-lg!"
                        }
                    }}
                />
            </section>
        </div>
    )
}

export default Page;