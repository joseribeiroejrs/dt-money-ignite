import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="dt money logo" />
        <button type="button">
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
