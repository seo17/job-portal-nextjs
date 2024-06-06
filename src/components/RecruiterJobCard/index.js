"use client";

import React from "react";
import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";

function RecruiterJobCard({ jobItem }) {
  // TODO: Creating job-icon components timestamp: 9:27:14
  return (
    <div>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">
            10 Applicants
          </Button>
        }
      />
    </div>
  );
}

export default RecruiterJobCard;
