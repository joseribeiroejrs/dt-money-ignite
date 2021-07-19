import Modal from 'react-modal';
import { NewTransactionModalContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => any;
}

Modal.setAppElement("#root");

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const { isOpen, onRequestClose } = props

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <NewTransactionModalContainer>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
