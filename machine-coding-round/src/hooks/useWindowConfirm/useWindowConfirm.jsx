import { useContext } from 'react'
import { ConfirmContext } from '../../Context/ConfirmContext';
import WindowConfirm from "../../components/WindowConfirm/WindowConfirm";

export default function useWindowConfirm() {
  const [confirm, setConfirm] = useContext(ConfirmContext);
  
  const isConfirmed = async (prompt) => {
    const promise = new Promise((resolve, reject) => {
      setConfirm({prompt, proceed: resolve, cancel: reject, isOpen: true});
    })

    return promise.then(() => {
      setConfirm({isOpen: false});
      return true;
    }).catch(() => {
      setConfirm({isOpen: false});
      return false;
    });
  }
  
  return {...confirm, isConfirmed, Component: WindowConfirm};
}
