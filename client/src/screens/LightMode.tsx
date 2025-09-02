
import { Button } from "@/components/ui/button"
import Heading from "../components/Heading"
import { Input } from "@/components/ui/input"


const LightMode = () => {
    return (

        <div className="flex min-h-svh flex-col items-center justify-center">
            <Heading />
            <div className="flex flex-row justify-center gap-2 ">
                <Input placeholder="Task?" className="mb-4"/>
                <Button>Search</Button>
            </div>
            
        </div>

    )
}

export default LightMode