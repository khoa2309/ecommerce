import Footer from "@/components/Footer/page";
import "./globals.css";
import Header from "@/components/Header/page";
import StoreProvider from "@/lib/StoreProvider";
import React from "react";

export const metadata = {
    title: "Ecommerce K-shop",
    description: "Sneaker Shop",
};

export default function RootLayout({ children }) {
    return (
        <StoreProvider>
            <html lang="en">
                <body>
                    <div className="layout">
                        <Header />
                        <div className="main_content flex-1 dark:bg-black">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </body>
            </html>
        </StoreProvider>
    );
}
