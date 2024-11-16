
import { useTeamData } from "../hooks/useTeamData";
import { TeamSection } from "../components/teamSection";
import { ErrorPage } from "../components/error";


export function Team() {
  const { data, isError, error } = useTeamData(); // Using the custom hook

  if (isError) {
    return (
      <ErrorPage erro={error.message}/>
    );
  }

  // Group members by role for display
  const principalInvestigators = data.filter(member => member.role.toLowerCase() === "principal");
  const associateResearchers = data.filter(member => member.role.toLowerCase() === "researcher");
  const teamMembers = data.filter(member => member.role.toLowerCase() === "member");

  return (
    <div className="flex flex-col w-full h-auto justify-center bg-white dark:bg-zinc-800">
      <TeamSection
        title="Principal Investigators"
        memberRole="principal"
        data={principalInvestigators} // Pass in the data once loaded
        colorClass="bg-sand-100/50 dark:bg-sand-200"
      />
      <TeamSection
        title="Associate Researchers"
        memberRole="researchers"
        data={associateResearchers}
        className="bg-sand-100/50 dark:bg-sand-200"
        colorClass="bg-zinc-200"
      />
      <TeamSection
        title="Team Members"
        memberRole="members"
        data={teamMembers}
        colorClass="bg-sand-100/50 dark:bg-sand-200"
      />
    </div>
  );
}
