import { fetchProfileAction } from "@/actions";
import Onboard from "@/components/OnBoard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function OnboardPage() {
  // get current user from clerk
  const user = await currentUser();

  // fetch profile info from db
  const profileInfo = await fetchProfileAction(user?.id);
  console.log(profileInfo);

  // confirm profile, profile role and isPremiumUser
  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else {
    return <Onboard />;
  }
}

export default OnboardPage;
