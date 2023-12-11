import * as S from './styles'


type selectedModalityProps = {
    modality: "SINGIN" | "LOGIN"
    setModality: (modality: "SINGIN" | "LOGIN") => void;
}

export const SelectTypeEntry: React.FC<selectedModalityProps> = ({ modality, setModality }) => {
    return (
        <S.Container>
            {modality === 'SINGIN' ? (
                <S.Selected>
                    <S.TextModality>Criar Conta</S.TextModality>
                </S.Selected>
            ) : (
                <S.Unselected onClick={() => setModality('LOGIN')}>
                    <S.TextModality>Entrar</S.TextModality>
                </S.Unselected>
            )}

            {modality === "LOGIN" ? (
                <S.Selected>
                    <S.TextModality>Criar Conta</S.TextModality>
                </S.Selected>
            ) : (
                <S.Unselected onClick={() => setModality('SINGIN')}>
                    <S.TextModality>Entrar</S.TextModality>
                </S.Unselected>
            )}
        </S.Container>
    )
}