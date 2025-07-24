import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ItemModal from './ItemModal';
import ModalWithForm from './ModalWithForm';

export default function App(){
    const [activeModal, setActiveModal] = useState("");
    function openAddClothesModal(){setActiveModal("openAddClothesModal")};
    function closeAllModals(){setActiveModal("")};
    return( 
<> 
<Header openAddClothesModal= {openAddClothesModal}/>
<Main />
<Footer/>
<ItemModal/>
<ModalWithForm isOpen = {activeModal == "openAddClothesModal"} closeAllModals={closeAllModals}/>
</>
)
}