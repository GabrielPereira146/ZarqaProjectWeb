import type { ComponentProps } from 'react'
import type { TeamData } from '../interface/TeamData'
import { twMerge } from 'tailwind-merge'

interface TeamSectionProps extends ComponentProps<'div'> {
  title: string
  memberRole: string
  data: TeamData[]
  colorClass?: string
}

export function TeamSection({
  title,
  memberRole,
  data,
  className,
  colorClass,
}: TeamSectionProps) {
  return (
    <div
      className={twMerge('flex flex-col px-4 md:px-16 py-8 gap-4', className)}
    >
      <p className="font-extrabold text-4xl text-zinc-800 dark:text-white">
        {title}
      </p>
      {/* usar metade do gap em px no calc para cada item renderizado da lista */}
      <div className="flex flex-row w-full py-2 gap-8 flex-wrap">
        {data.length > 0 ? (
          data
            .filter(
              teamMember =>
                teamMember.role.toLowerCase() === memberRole.toLowerCase()
            )
            .map(teamMember => (
              <div
                key={teamMember.name}
                className={twMerge(
                  'aspect-[2/3] w-full flex flex-col rounded-2xl basis-[calc(50%-16px)] md:basis-auto md:max-w-60 rounded-t-2xl overflow-hidden',
                  colorClass
                )}
              >
                <img
                  className="object-cover w-full h-3/4"
                  src={teamMember.picture}
                  alt={teamMember.name}
                />
                <div className="flex flex-col justify-center flex-1 align-middle py-2">
                  <h3 className="text-lg font-semibold text-center">
                    {teamMember.name}
                  </h3>
                  <p className="text-sm font-medium text-black/50 text-center">
                    {teamMember.institution}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <div className='h-32'>
            <p className="text-zinc-500 text-2xl px-5">Loading...</p>
          </div>

        )}
      </div>
    </div>
  )
}
