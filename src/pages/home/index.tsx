import { HeaderSite } from "./components/header"
import { MainContainer } from './components/containers/MainContainer';
import { ServicesContainer } from "./components/containers/ServicesContainer";
import { AboutContainer } from "./components/containers/AboutContainer";
import { IoIosArrowDropup } from "react-icons/io";
import { FloatButton } from "antd";
import { FooterSection } from "./components/containers/FooterConjtainer";
import { ActionContainer } from "./components/containers/ActionContainer";


export const Home: React.FC = () => {
    return (
        <>
            <HeaderSite />
            <MainContainer />
            <ServicesContainer />
            <AboutContainer />
            <ActionContainer/>
            <FooterSection/>
            <FloatButton.BackTop
                badge={{ color: '#FFBB00' }}
                style={{
                    color: '#FFBB00',
                    backgroundColor: '#FFBB00'
                }}
                icon={<IoIosArrowDropup />}
            />
        </>
    )
}