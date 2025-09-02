import Heading from "../components/Heading"
import TodoList from "@/components/TodoList"


const Home = () => {
    return (

        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6">
            <Heading />
            <TodoList/>
            
        </div>

    )
}

export default Home