"use client";

import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/modal-context";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <AuthProvider>
                <NextTopLoader showSpinner={false} color="#0CAF60" />
                <Toaster               
                    position="top-right" 
                    richColors
                    closeButton
                />
                {children}
            </AuthProvider>
        </ModalProvider>
    );
}
