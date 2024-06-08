import React from "react";
import Membership from "@/components/Membership";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import { fetchProfileAction } from "@/actions";

async function MembershipPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");

  return <Membership profileInfo={profileInfo} />;
}

export default MembershipPage;
