import cv from '../../assets/Ritik_Nagpure.pdf'

export const openPdfInNewTab = () => {
    window.open(cv, '_blank');
};

export const sendData = (name, mob, message) =>{
    let contactWithMessagePayload = {
        "name" : name,
        "mob" : mob,
        "message" : message
    }
    console.log(contactWithMessagePayload);
}