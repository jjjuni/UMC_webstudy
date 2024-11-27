import reactDom from 'react-dom';

const ModalPortal = ({children}) => {
    if (typeof window === "undefined") {
        return null;
    }

    const node = document.getElementById("portal");

    return reactDom.createPortal(children, node);
}

export default ModalPortal;