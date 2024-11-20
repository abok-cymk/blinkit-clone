const forgotPasswordTemplate = ({ name, otp }) => {
    return `
        <h3 style="font-size: 18px; font-weight: 600; font-style: italic; color: #171717;">
            Dear ${name}
        </h3>
        <div style="margin-top: 20px; padding-inline: 15px;">
            <p style="font-size: 16px; margin-bottom: 8px; color: #171717;">You've have requested a password reset. Please use the OTP code below to reset your password</p><br >
            <div style="color: #d1d1d1; font-weight: bold; font-size: 32px; text-align: center; background-color: #485275; padding: 6px 15px;">
                ${otp}
            </div>
            <span style="display: block; font-weight: bold; color: #171717; margin-bottom: 56px;">This OTP expires after 1 hr, enter this OTP in the BlinkitClone website to proceed with resetting your password</span>
            <div>
                <p>Thank you.</p>
            </div>
        </div>
    `
}

export default forgotPasswordTemplate;