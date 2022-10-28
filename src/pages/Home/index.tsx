import { Header } from "../../components/Header";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./style";

export function Home(){
    return(
        <HomeContainer>
            <Header />
            <Intro />
        </HomeContainer>
    );
}