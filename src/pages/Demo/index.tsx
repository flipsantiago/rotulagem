import BooleanSwitcher from '../../components/BooleanSwitcher';
import BaseModal from '../../components/BaseModal';
import { ActionButton } from '../../components/Buttons';

import { useToggle } from '../../hooks/toggle';

import { Container } from './styles';
import Spacer from '../../components/Spacer';

const Demo: React.FC = () => {
  const { isOn, turnOn, turnOff } = useToggle();
  const { isOn: modalOn, turnOn: openModal, turnOff: closeModal } = useToggle();

  return (
    <>
      <BaseModal on={modalOn} close={closeModal}>
        <h1>Hello From Modal!</h1>
      </BaseModal>

      <Container>
        <h4>Offerwise demo apps</h4>

        <BooleanSwitcher
          leftText="NO"
          rightText="YES"
          leftCallback={turnOff}
          rightCallback={turnOn}
          leftBoolean={!isOn}
        />

        <Spacer orientation="vertical" space={20} />

        <ActionButton variant="PrimaryAction" onClick={openModal}>
          Open Modal
        </ActionButton>
      </Container>
    </>
  );
};

export default Demo;
