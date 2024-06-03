import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

export function MonthOccurrenceCard(){
  return (
    <Card>
          <CardHeader className='flex-row items-center space-y-0 justify-between pb-2'>
            <CardTitle className='text-base font-semibold '>Ocorrência (Mes)</CardTitle>
            <BarChart className='h-4 w-4 text-muted-foreground'/>
          </CardHeader>

          <CardContent className='space-y-1'>
            <span className='text-2xl font-bold tracking-tight'>26</span>
            <p className='text-lg text-muted-foreground font-medium'>
             <span className='text-rose-500 dark:text-rose-400'>-4%</span> em relação ao mês passado</p>
          </CardContent>
    </Card>
  )
}
