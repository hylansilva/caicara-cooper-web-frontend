import { Avatar, Col, Row } from 'antd'
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrTwitter, GrYoutube } from "react-icons/gr";
import * as S from './styles'

export const FooterSection: React.FC = () => {
    return (
        <S.Section>
            <div>
                <Row gutter={[126,126]}>
                    <Col flex={1} style={{ display: 'flex' }}>
                        <h1 style={{color: '#fff'}}>Acompanhe</h1>
                        <S.ListShape>
                            <S.ListItem><Avatar size="small" icon={<GrLinkedinOption />} /></S.ListItem>
                            <S.ListItem><Avatar size="small" icon={<GrFacebookOption />} /></S.ListItem>
                            <S.ListItem><Avatar size="small" icon={<GrTwitter />} /></S.ListItem>
                            <S.ListItem><Avatar size="small" icon={<GrYoutube />} /></S.ListItem>
                            <S.ListItem><Avatar size="small" icon={<GrInstagram />} /></S.ListItem>
                        </S.ListShape>
                    </Col>
                    <Col flex={1}>
                        <address style={{color: '#fff'}}>© Cooperativa Caiçara - CNPJ 23.463.213/0001-11<br />
                            Edf. Alfredo Fernandes, Bairro do Recife, Recife-Pe, Brasil - CEP 50030-917</address>
                    </Col>
                    <Col flex={1}>
                        <img width={150} src='https://cooperativacaicara.vercel.app/images/logo.png' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <S.ListShape>
                            <S.ListItem>SOBRE A COOPERATIVA</S.ListItem>
                            <S.ListItem>|</S.ListItem>
                            <S.ListItem>CAICARA LABS</S.ListItem>
                            <S.ListItem>|</S.ListItem>
                            <S.ListItem>TRABALHE CONOSCO</S.ListItem>
                            <S.ListItem>|</S.ListItem>
                            <S.ListItem>SEGURANÇA</S.ListItem>
                            <S.ListItem>|</S.ListItem>
                            <S.ListItem>RELAÇÃO COM INVESTIDORES</S.ListItem>
                            <S.ListItem>|</S.ListItem>
                            <S.ListItem>SUSTENTABILIDADE</S.ListItem>
                        </S.ListShape>
                    </Col>
                </Row>
            </div>
        </S.Section>
    )
}