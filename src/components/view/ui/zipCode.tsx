import { Modal, Button } from "antd";
import {Address, DaumPostcodeEmbed} from "react-daum-postcode";
import {useState} from "react";
import {SearchOutlined} from "@mui/icons-material";


export default function zipCode(handleAddress: Function) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    handleAddress('zoncode', data.zonecode)
    handleAddress('address', data.address)
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    onToggleModal();
  };

  return (
    <>
      <Button
        onClick={onToggleModal}
        className='address_btn'
      >
        <p style={{marginRight: '5px'}}>주소</p>
        <SearchOutlined />
      </Button>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete}/>
        </Modal>
      )}
    </>
  );
}