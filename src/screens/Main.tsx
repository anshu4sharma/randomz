import Features from "../components/Features"
import FeaturesToken from "../components/FeaturesToken"
import Footer from "../components/Footer"
import LatestCrypto from "../components/LatestCrypto"
import MostTrusted from "../components/MostTrusted"
import Navbar from "../components/Navbar"
import Partners from "../components/Partners"
import Roadmap from "../components/Roadmap"
import Tokenomics from "../components/Tokenomics"
import Hero from "./Hero"

const Main = () => {
    return (
        <div className="bg-hero md:bg-transparent">
            <Navbar />
            <Hero />
            <MostTrusted />
            <Features />
            <Partners />
            <Tokenomics />
            <LatestCrypto />
            <Roadmap />
            <FeaturesToken />
            <Footer />
        </div>
    )
}

export default Main