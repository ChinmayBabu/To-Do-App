
import Theme from "./Theme"

const Heading = () => {
    return (
        <div className="mb-10 flex flex-col items-center gap-2">
            <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance">
                Welcome To Taskly
            </h1>
            <p className="text-muted-foreground text-2xl">
                Keep track. Stay on track.
            </p>
            <div className="mt-4 flex items-center flex-row">
                <Theme />
            </div>
        </div>

    )
}

export default Heading