import { fetchJobForRecruiterAction, fetchProfileAction } from "@/actions";
import JobListing from "@/components/JobListing";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function page() {
  const user = await currentUser();

  // Onboarding data
  const profileInfo = await fetchProfileAction(user?.id);

  const jobList = await fetchJobForRecruiterAction(user?.id);

  console.log("Joblist", jobList);

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
    />
  );
}

export default page;
