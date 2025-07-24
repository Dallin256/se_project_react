import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ItemModal from './ItemModal';
import ModalWithForm from './ModalWithForm';

export default function App(){
    const [activeModal, setActiveModal] = useState("");
    function openAddClothesModal(){setActiveModal("openAddClothesModal")};
    function openItemCardModal(){setActiveModal("openItemCardModal")};
    function closeAllModals(){setActiveModal("")};
    return( 
<> 
<Header openAddClothesModal= {openAddClothesModal}/>
<Main closeAllModals={closeAllModals} />
<Footer/>
<ModalWithForm isOpen = {activeModal == "openAddClothesModal"} closeAllModals={closeAllModals}/>
</>
)
}