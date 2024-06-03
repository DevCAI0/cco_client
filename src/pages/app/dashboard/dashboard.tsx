import { useQuery } from "@tanstack/react-query"
import { ChartWithRegion } from "./chart-with-region"
import { DayOccurrenceCard } from "./day-occurrence-card"
import { MonthOccurrenceCard } from "./month-ocorrence-card"
import { RankingWithMostOccurrences } from "./ranking-with-most- occurrences"
import { WeekOccurrenceCard } from "./week-occurrence-card"
import { getProfile } from "@/api/get-profile"
import { Skeleton } from "@/components/ui/skeleton"

export const Dashboard = () => {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime:Infinity,
  })
  return (
    <div  className='flex flex-col gap-4 '>
        <h1 className='text-3xl font-bold tracking-tight leading-4 '>Dashboard</h1>
        <p className="ml-3 text-sm  tracking-tighter ">Olá seja bem vindo <span className="text-lg font-semibold">
          {isLoadingProfile ? <Skeleton className="h-4 w-4" /> : profile?.name}
        </span></p>

        <div className=' grid grid-cols-4 gap-4'>
          <MonthOccurrenceCard />
          <WeekOccurrenceCard />
          <DayOccurrenceCard />
          <DayOccurrenceCard />
        </div>
        <div className='grid grid-cols-9 gap-4'>
          <RankingWithMostOccurrences/>
          <ChartWithRegion/>
        </div>
    </div>
  )
}
