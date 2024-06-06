import {
  fetchJobApplicationForCandidate,
  fetchJobApplicationForRecruiter,
  fetchJobForCandidateAction,
  fetchJobForRecruiterAction,
  fetchProfileAction,
} from "@/actions";
import JobListing from "@/components/JobListing";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();

  // Onboarding data
  const profileInfo = await fetchProfileAction(user?.id);

  if (!profileInfo) redirect("/onboard");

  const jobList =
    profileInfo?.role === "candidate"
      ? await fetchJobForCandidateAction()
      : await fetchJobForRecruiterAction(user?.id);

  const getJobApplicationList =
    profileInfo?.role === "candidate"
      ? await fetchJobApplicationForCandidate(user?.id)
      : await fetchJobApplicationForRecruiter(user?.id);

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
      jobApplications={getJobApplicationList}
    />
  );
}

export default page;
