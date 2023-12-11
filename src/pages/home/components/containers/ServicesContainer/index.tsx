import { Button, Card, Col, Row } from "antd"
import * as S from './styles'
import { IoIosArrowForward } from "react-icons/io";
export const ServicesContainer: React.FC = () => {

    return (
        <S.ServicesContainer>
            <Row gutter={[16, 16]} style={S.row_space}>
                <Col flex={2}>
                    <Card style={S.Add1}>
                        <h2 style={S.Add1.Title}>Conta Digital</h2>
                        <p style={S.Add1.Subtitle}>Completa e ccom abertura 100% Digital.</p>
                        <Button style={S.ButtonStyles}>
                            ABRIR CONTA
                        </Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Add2}>
                        <h2 style={S.Add2.Title}>Cartão do Cooperado</h2>
                        <p style={S.Add2.Subtitle}>Aproveite as vantagens de ser um cooperado</p>
                        <Button type="link" style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: 8 }}>Peça já o seu</p>  {<IoIosArrowForward />}
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col flex={1}>
                    <Card style={S.Add3}>
                        <h1 style={S.Add3.Title}>Armazenamento</h1>
                        <p style={S.Add3.Subtitle}>Dentro do nosso app, você pode sozinho iniciar o processo de armazenamrento</p>
                        <Button style={S.SubButtonStyles}>
                            BAIXE JÁ!
                        </Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Add4}>
                        <h1 style={S.Add4.Title}>Shopping Caiçara</h1>
                        <p style={S.Add4.Subtitle}>Comercialize produtos entre cooperados detro do nosso marketplace</p>
                        <Button style={S.SubButtonStyles}>
                            QUERO SER UM VENDEDOR
                        </Button>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card style={S.Add5}>
                        <h1 style={S.Add5.Title}>Histórico de vendas</h1>
                        <p style={S.Add5.Subtitle}>Oferecemos um sistema completo com histórico de vendas dos seus pescados.</p>
                        <Button style={S.SubButtonStyles}>
                            SAIBA MAIS
                        </Button>
                    </Card>
                </Col>
            </Row>
        </S.ServicesContainer>
    )
}