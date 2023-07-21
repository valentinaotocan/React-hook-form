import success from './assets/success.png'
function Success() {
  return (
    <>
      <img src={success} alt="Success" />
      <p className="success-msg">Form submitted successfully!</p>
    </>
  );
}
export default Success