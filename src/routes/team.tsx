
import { useTeamData } from "../hooks/useTeamData";
import { TeamSection } from "../components/teamSection";
import { ErrorPage } from "../components/error";
import { useTranslation } from "react-i18next";


export function Team() {
  const { t } = useTranslation(); // Hook para acessar a tradução
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
        title={t('team.principalInvestigators')}
        memberRole="principal"
        data={principalInvestigators} // Pass in the data once loaded
        colorClass="bg-sand-100/50 dark:bg-sand-200"
      />
      <TeamSection
        title={t('team.associateResearchers')}
        memberRole="researchers"
        data={associateResearchers}
        className="bg-sand-100/50 dark:bg-sand-200"
        colorClass="bg-zinc-200"
      />
      <TeamSection
        title={t('team.teamMembers')}
        memberRole="members"
        data={teamMembers}
        colorClass="bg-sand-100/50 dark:bg-sand-200"
      />
    </div>
  );
}
