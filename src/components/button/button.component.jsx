import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

// Ada dua cara penggunaan untuk menghandle banyak props
// 1. menggunakan spread operator seperti di komponen Button ini, yaitu ...otherProps
// 2. ubah menjadi sebuah objek seperti di komponen FormInput

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
