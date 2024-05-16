import React from 'react';
import ModelContent from "./modalContent"
import IconHeading from '../IconHeading';
import { ModalProps } from '../../interfaces';
import { styled } from 'styled-components';
import Button from '../Button';
import { useGetAlertsQuery } from '../../store/api/apislice';
import Loading from '../Loading';


const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    height: 76px;
    box-shadow: 0px 2px 8px 0px #3741510F;
`;
const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 370px;
    height: 100vh;
    background: white;
    border-left: 1px solid #ddd;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 1000;
`;
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
`;


const AlertModal: React.FC<ModalProps> = ({ show, onClose }) => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAlertsQuery('');
  if (!show) {
    return null;
  }
  return (
    <>
      <Backdrop onClick={onClose} />
      <Modal >
        <ModalHeader>
          <IconHeading heading={`${data?.alerts?.count || '02'} Alerts`} iconUrl='/assets/alerts.svg' />
          <Button onClick={onClose} iconUrl={'/assets/close.svg'} type="icon" label=""/>
        </ModalHeader>

        {isLoading && <Loading /> }
        {isSuccess && data?.alerts &&<ModelContent
          image={data?.alerts?.insurance?.image}
          title={data?.alerts?.insurance.title}
          tags={data?.alerts?.insurance?.tags}
          claimsUnderQuery={data?.alerts?.claimsUnderQuery}
        />}
      </Modal>
    </>
  );
};
export default AlertModal;
