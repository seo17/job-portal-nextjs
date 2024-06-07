import {
  fetchJobApplicationForCandidate,
  fetchJobForCandidateAction,
} from "@/actions";
import CandidateActivity from "@/components/CandidateActivity";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function ActivityPage() {
  const user = await currentUser();

  const jobList = await fetchJobForCandidateAction();
  const jobApplicants = await fetchJobApplicationForCandidate(user?.id);

  return <CandidateActivity jobList={jobList} jobApplicants={jobApplicants} />;
}

export default ActivityPage;
