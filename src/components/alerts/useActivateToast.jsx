import { toast } from "react-toastify";

const useActivateToast = () => {
    const activateSneak = (message, severity) => {
        toast[severity](message, {
            autoClose: 3000, // Close the notification after 3 seconds
            hideProgressBar: false, // Show progress bar
            closeOnClick: true, // Close the notification when clicked
            pauseOnHover: true, // Pause the timer when hovered
            draggable: true, // Allow dragging the notification
            progress: undefined, // Progress bar animation duration
            position: "bottom-center",
        });
    }
    return { activateSneak };
}

export default useActivateToast;
