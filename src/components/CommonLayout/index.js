import React from "react";
import Header from "../Header";
import { currentUser } from "@clerk/nextjs/server";
import { fetchProfileAction } from "@/actions";

async function CommonLayout({ children }) {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header component */}
      <Header
        profileInfo={profileInfo}
        user={JSON.parse(JSON.stringify(user))}
      />
      {/* main component */}
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;
