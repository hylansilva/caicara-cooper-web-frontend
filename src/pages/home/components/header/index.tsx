import { Button } from 'antd'
import { MdLockOutline } from "react-icons/md";
import * as S from './styles'
import { useNavigate } from 'react-router-dom';

export const HeaderSite: React.FC = () => {

    const navigate = useNavigate()

    return (
        <S.Header>
            <Button type='text' style={S.Button_tYpe_text} onClick={() => navigate('/login')}>
                <MdLockOutline /> | Acessar Conta
            </Button>
        </S.Header>
    )
}