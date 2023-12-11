import { Avatar, Button, Card, Col, Row } from 'antd'
import { FaMasksTheater } from "react-icons/fa6";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdDataSaverOff } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdEco } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { MdArrowRight } from "react-icons/md";

import * as S from './styles'

export const AboutContainer: React.FC = () => {
    return (
        <S.Section>
            <Row gutter={[32, 32]} style={{ paddingBottom: '32px' }}>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<FaMasksTheater />}
                        />
                        <h1 style={S.Card.Title}>Cultura</h1>
                        <p style={S.Card.text}>Conheça as ações dA Cooperativa Caiçara na área cultural.</p>
                        <Button style={S.Card.Button} type='text'>SAIBA MAIS {<MdArrowRight />}</Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<BsRocketTakeoffFill />}
                        />
                        <h1 style={S.Card.Title}>Inovação</h1>
                        <p style={S.Card.text}>Trabanlhando com as principais tenologias para melhorar a sua vida</p>
                        <Button style={S.Card.Button} type='text'>SAIBA MAIS {<MdArrowRight />}</Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<MdDataSaverOff />}
                        />
                        <h1 style={S.Card.Title}>Etene</h1>
                        <p style={S.Card.text}>Estudos, pesquisas e informações socioeconômicas sobre cada região.</p>
                        <Button style={S.Card.Button} type='text'><p>SAIBA MAIS {<MdArrowRight />}</p></Button>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[32, 32]}>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<FaHandshakeSimple />}
                        />
                        <h1 style={S.Card.Title}>Ética e Integridade</h1>
                        <p style={S.Card.text}>A atuação da Cooperativa Caiçara é baseada em princípios e valores éticos.</p>
                        <Button style={S.Card.Button} type='text'>SAIBA MAIS {<MdArrowRight />}</Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<MdEco />}
                        />
                        <h1 style={S.Card.Title}>Sustentabilidade</h1>
                        <p style={S.Card.text}>Conheça as ações do Banco do Nordeste na área cultural.</p>
                        <Button style={S.Card.Button} type='text'>SAIBA MAIS {<MdArrowRight />}</Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Card}>
                        <Avatar
                            size={64}
                            style={S.Card.icon}
                            icon={<RiShieldCheckFill />}
                        />
                        <h1 style={S.Card.Title}>Segurança</h1>
                        <p style={S.Card.text}>Conheça as ações do Banco do Nordeste na área cultural.</p>
                        <Button style={S.Card.Button} type='text'>SAIBA MAIS {<MdArrowRight />}</Button>
                    </Card>
                </Col>
            </Row>
        </S.Section>
    )
}