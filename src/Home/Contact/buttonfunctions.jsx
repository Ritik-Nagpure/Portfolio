import cv from '/resume/Ritik Nagpure.pdf'

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