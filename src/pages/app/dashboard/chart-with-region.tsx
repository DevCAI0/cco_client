
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import colors from 'tailwindcss/colors'
import {
    Pie,
    PieChart,
    ResponsiveContainer,
    Cell

} from 'recharts';
import { BarChart } from "lucide-react";
const data = 
//[
//     // { date: '09/01', revenue: 1320 },
//     // { date: '13/02', revenue: 500 },
//     // { date: '13/03', revenue: 900 },
//     // { date: '29/04', revenue: 6000 },
//     // { date: '04/05', revenue: 2200 },
//     // { date: '02/06', revenue: 1100 },
//     // { date: '14/07', revenue: 980 },
//     // { date: '18/08', revenue: 1980 },
//     // { date: '13/09', revenue: 3650 },
//     // { date: '27/10', revenue: 2875 },
//     // { date: '10/11', revenue: 1200 },
//     // { date: '11/12', revenue: 4450 }
// ]  
[
    {region: "Goiania ", amount: 20 },
    {region: "São Paulo", amount: 10 },
    {region: "Vca", amount: 35 },
    {region: "Brumado", amount: 15 },
    {region: "Montes claros", amount: 16 },
    {region: "guanambi", amount: 25 },
]
const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
    colors.gray[500],
]
export const ChartWithRegion = () => {
    return (
        <Card className="col-span-3">
            <CardHeader className=" pb-8 ">
                <div className=" flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Ocorrências por regiões</CardTitle>
                    <BarChart className="h-4 w-4  text-muted-foreground"/>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart style={{ fontSize: 20 }}>
                        <Pie 
                         data={data}
                         dataKey="amount"
                         nameKey="region" 
                         cx="50%"
                         cy="50%"
                         outerRadius={180}
                         innerRadius={100}
                         strokeWidth={50}
                         label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index,
                          }) => {
                            const RADIAN = Math.PI / 180
                            const radius = 12 + innerRadius + (outerRadius - innerRadius)
                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                            const y = cy + radius * Math.sin(-midAngle * RADIAN)
          
                            return (
                              <text
                                x={x}
                                y={y}
                                className="fill-muted-foreground text-xs"
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                              >
                                {data[index].region
                                  .substring(0, 12)
                                  .concat('...')}{' '}
                                ({value})
                              </text>
                            )
                          }}
                          labelLine={false}
                        
                        >
                        {data.map((_, index) =>{
                            return(
                                <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80"/>
                                )
                        })}

                        </Pie>
                       
                        
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>

        </Card>
    )
}

