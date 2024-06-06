"use server";

import connectToDB from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";

// create profile action
export async function createProfileAction(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);

  revalidatePath(pathToRevalidate);
}

// fetch profile action
export async function fetchProfileAction(id) {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });

  return JSON.parse(JSON.stringify(result));
}

// create job action
export async function postNewJobAction(formData, pathToRevalidate) {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
}

// fetch job action
// recruiter
export async function fetchJobForRecruiterAction(id) {
  await connectToDB();

  const result = await Job.find({ recruiterId: id });

  return JSON.parse(JSON.stringify(result));
}

// candidate
export async function fetchJobForCandidateAction() {
  await connectToDB();

  const result = await Job.find({});

  return JSON.parse(JSON.stringify(result));
}

// create job application
export async function createJobApplicationAction(data, pathToRevalidate) {
  await connectToDB();
  await Application.create(data);
  revalidatePath(pathToRevalidate);
}

// fetch job application - candidate
export async function fetchJobApplicationForCandidate(candidateID) {
  await connectToDB();
  const result = await Application.find({ candidateUserID: candidateID });

  return JSON.parse(JSON.stringify(result));
}

// fetch job application - recruiter

// update job application
