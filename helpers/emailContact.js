import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const emailContact = async (data) => {
  try {
    Swal.fire({
      title: "Enviando...",
      text: "Espere un momento...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const emailResp = await emailjs.sendForm(
      "service_mec8uwk",
      "template_gtjxinq",
      data,
      "user_RCE2muWVC7gqmDnATTfOv"
    );

    // Swal.close();

    Swal.fire({
      icon: "success",
      title: emailResp.text,
      showConfirmButton: false,
      timer: 1000,
    });
  } catch (error) {
    console.log(error.text);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salió mal!",
    });
  }
};
