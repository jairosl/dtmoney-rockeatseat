import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenModalNewTransaction: () => void;
}

export function Header({ onOpenModalNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-maney" />
        <button type="button" onClick={onOpenModalNewTransaction}>
          nova transação
        </button>
      </Content>

    </Container>
  )
}