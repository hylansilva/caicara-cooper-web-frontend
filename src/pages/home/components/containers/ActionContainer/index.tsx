import { Button } from "antd"
import * as S from "./styles"

export const ActionContainer: React.FC = () => {
    return (
        <S.Section>
            <S.Title>Ainda não é um cooperado ? </S.Title>
            <Button style={S.Button}>ABRA SUA CONTA</Button>
        </S.Section>
    )
}