import React from "react";
import OpenPortal from "./CommitteeDashboard/CommitteeFeatures/OpenPortal";
import CommitteeSidebar from "./CommitteeDashboard/CommitteeSidebar";
import NavBar from "../NavBar";
import DefSchedule from "../DefSchedule/DefSchedule";

const CommitteeDashboard = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-around">
                <CommitteeSidebar />
                <DefSchedule />
                <OpenPortal />
            </div>
        </>

    );
};

export default CommitteeDashboard;
