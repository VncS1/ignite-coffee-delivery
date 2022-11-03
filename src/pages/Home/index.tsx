import { Header } from "../../components/Header";
import { Coffees } from "./components/Coffees";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./style";

export function Home(){
    return(
        <HomeContainer>
            <Header />
            <Intro />
            <Coffees />
        </HomeContainer>
    );
}