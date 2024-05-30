import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const showAlert = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'OK'
  });
};

export const showSuccessAlert = (title, text) => {
  showAlert(title, text, 'success');
};

export const showErrorAlert = (title, text) => {
  showAlert(title, text, 'error');
};

