import MostTrusted from "../components/MostTrusted"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const Main = () => {
    return (
        <div className="bg-hero md:bg-transparent">
            <Navbar />
            <Hero />
            <MostTrusted />
        </div>
    )
}

export default Main