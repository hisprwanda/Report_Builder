import { useState } from "react";
import { Button, Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip } from "@dhis2/ui";

export const WarningModal = ({hidden, title, content, btnName}) => {

    const [isHiddedn, setIsHiddedn] = useState(hidden);
  return (
    <Modal hide={isHiddedn} onClose={()=> setIsHiddedn(true)} position="middle">
        <ModalTitle>
            {title}
        </ModalTitle>
        <ModalContent>
            {content}
        </ModalContent>
        <ModalActions>
            <ButtonStrip end>
                <Button onClick={()=> setIsHiddedn(true)} primary>
                    {btnName}
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
  )
}
