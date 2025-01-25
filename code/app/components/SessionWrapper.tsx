"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface SessionWrapperProps {
  children: ReactNode;
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children }) => {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  );
};

export default SessionWrapper;
