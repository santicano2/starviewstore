"use client";

import { createContext, ReactNode } from "react";
import Cookies from "js-cookie";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
    // currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type wixClientType = typeof wixClient;

export const wixClientContext = createContext<wixClientType>(wixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <wixClientContext.Provider value={wixClient}>
      {children}
    </wixClientContext.Provider>
  );
};
