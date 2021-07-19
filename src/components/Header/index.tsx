
import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => any;
}

export const Header = (props: HeaderProps) => {
  const { onOpenNewTransactionModal } = props;
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
