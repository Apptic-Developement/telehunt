
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function HomeTabs() {
    return (
        <Tabs defaultValue="channels" className="w-fit">
            <TabsList>
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="bots">Bots</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
