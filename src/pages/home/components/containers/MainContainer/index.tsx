import { Button, Carousel } from "antd"
import { HiOutlineSearch } from "react-icons/hi";
import * as S from "./styles"

export const MainContainer: React.FC = () => {

    return (
        <div style={{ height: '100vh' }}>
            <S.MenuAccount>
                <img src="https://cooperativacaicara.vercel.app/images/logo.png" alt="logo" height={'70px'} />
                <div>
                    <Button style={S.ButtonStyle}>Pesquisar {<HiOutlineSearch />}</Button>
                </div>
            </S.MenuAccount>
            <Carousel autoplay>
                <div>
                    <h3 style={S.Banner1}></h3>
                </div>
                <div>
                    <h3 style={S.Banner2}></h3>
                </div>
                <div>
                    <h3 style={S.Banner3}></h3>
                </div>
            </Carousel>
        </div>
    )
}