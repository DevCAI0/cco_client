import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OccurrenceSpeed } from "./OccurrenceSpeed";
import { OccurrenceIbutton } from "./OccurrenceIbutton";

export function Occurrences() {
  return (
    <div className="flex flex-col justify-center items-center ">
      
        <Tabs defaultValue="account" className="w-[100%] h-[100%]">
          <div className=" flex justify-center items-center">
            <TabsList className="w-[400px]">
              <TabsTrigger value="account" className="mr-4">Velocidade</TabsTrigger>
              <TabsTrigger value="password">Ibutton</TabsTrigger>
            </TabsList>
          </div>
          <div className="max-w-[1880px] m-auto">
            <TabsContent value="account">
              <OccurrenceSpeed/>
            </TabsContent>
            <TabsContent value="password">
              <OccurrenceIbutton/>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    
  );
}
