import Modal from 'react-modal';
import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => any;
}

Modal.setAppElement("#root");

const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const { isOpen, onRequestClose } = props
  const [type, setType] = useState(DEPOSIT);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("")

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()
    const data = {
      type,
      title,
      value,
      category
    }

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <NewTransactionModalContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />
        <TransactionTypeContainer>
          <RadioBox
            isActive={type === DEPOSIT}
            activeColor="green"
            type="button"
            onClick={() => setType(DEPOSIT)}>
            <img src={incomeImg} alt="Entrada" />
            <span>
              Entrada
            </span>
          </RadioBox>
          <RadioBox
            isActive={type === WITHDRAW}
            activeColor="red"
            type="button"
            onClick={() => setType(WITHDRAW)}>
            <img src={outcomeImg} alt="Saída" />
            <span>
              Saída
            </span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}
