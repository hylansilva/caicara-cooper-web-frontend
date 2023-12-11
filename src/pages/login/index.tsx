import { Col, Row } from "antd"
import * as S from './styled'
import { SinginPage } from "./components/SinginPage";
import { LogInPage } from "./components/LoginPage";
import { useState } from "react";
import { SelectTypeEntry } from "./components/SelectTypeEntry";

export const Login: React.FC = () => {

    const [method, setMethod] = useState("LOGIN")
    return (
        <Row>
            <Col flex={3}>
                <S.Image />
            </Col>
            <Col flex={1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <SelectTypeEntry modality="LOGIN" setModality={setMethod} />
                {method === "LOGIN" ? <LogInPage /> : <SinginPage />}
            </Col>
        </Row>
    )
}