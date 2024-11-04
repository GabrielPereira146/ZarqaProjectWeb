// const TEAM_DATA: TeamData[] = [
//   {
//     name: 'João Pedro de Almeida',
//     institution: 'UFPR | Istituto Italiano di Paleontologia Umana',
//     picture:
//       'https://i1.rgstatic.net/ii/profile.image/936740416143360-1600347727717_Q512/Fabio-Parenti-2.jpg',
//     role: 'principal',
//   },
//   {
//     name: 'João Pedro de Almeida',
//     institution: 'UFPR | Istituto ',
//     picture: 'https://igce.rc.unesp.br/Home/pesquisa/unespetro/jeancarlo.jpg',
//     role: 'principal',
//   },
//   {
//     name: 'João Pedro de Almeida',
//     institution: 'UFPR',
//     picture: 'https://avatars.githubusercontent.com/u/105940565?v=4',
//     role: 'principal',
//   },
//   {
//     name: 'João Afonso de Almeida',
//     institution: 'UFPR',
//     picture: 'https://avatars.githubusercontent.com/u/105940565?v=4',
//     role: 'researchers',
//   },
//   {
//     name: 'Leandro Apolinário Bento',
//     institution: 'UFPR',
//     picture: 'https://avatars.githubusercontent.com/u/105940565?v=4',
//     role: 'members',
//   },
// ]

import { useTeamData } from "../hooks/useTeamData";
import { TeamSection } from "../components/teamSection";

export function Team() {
  const { data, isLoading, isError, error } = useTeamData(); // Using the custom hook

  if (isLoading) return <div className="dark: text-white">Loading...</div>; // Show a loading state
  if (isError) return <div className="dark: text-white">Error: {error.message}</div>; // Show an error message

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
