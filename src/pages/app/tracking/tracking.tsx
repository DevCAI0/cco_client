import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function Tracking() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Tabs className="w-full">
        <TabsList className="flex w-56  items-center justify-start  ">
          <TabsTrigger className="text-center  " value="CheckDelay">
            Verificar Atraso
          </TabsTrigger>
          <TabsTrigger className="text-center " value="Stops">
            Paradas
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className="h-svh w-full border-x-2 border-y-2 border-slate-700"
          value="CheckDelay"
        >
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>Three</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel>One</ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>Two</ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </TabsContent>
        <TabsContent className="w-full" value="Stops">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
