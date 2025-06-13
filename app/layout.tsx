import React from "react";
import "./globals.css";
import Header from "@/components/Header";

// fonts
import {overpass} from "@/lib/fonts";
import {OptionsContextProvider} from "@/lib/ListContext";

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;}>) {

    return (
        <html lang="en" className={overpass.className}>
            <body className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-400 to-slate-800 h-full w-full bg-cover bg-center">
                {/* Blurred overlay using backdrop blur */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center text-white text-2xl font-bold">
                    <OptionsContextProvider>
                        {children}
                    </OptionsContextProvider>
                </div>
            </body>
        </html>
    );
}