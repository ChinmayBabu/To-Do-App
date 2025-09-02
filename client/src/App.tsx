import Home from "./screens/Home"
import { Card , CardContent } from "./components/ui/card"
 
function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-500 p-4 min-h-svh">
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl dark:bg-gray-700">
        <CardContent className="p-8 space-y-6">
          <Home/>
        </CardContent>
      </Card>
      
    </div>
  )
}
 
export default App