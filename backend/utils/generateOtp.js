/**
 * Generates a 6-digit OTP.
 * @returns {string} A 6-digit numerical OTP.
 */
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export default generateOtp;
