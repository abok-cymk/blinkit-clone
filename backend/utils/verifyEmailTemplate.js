const verifyEmailTemplate = ({ name, url }) => {
    return `
        <h3 style="font-size: 18px; font-weight: 600; font-style: italic; color: #171717;">
            Dear ${name}
        </h3>
        <div style="margin-top: 20px; padding-inline: 15px;">
            <p style="font-size: 16px; margin-bottom: 8px; color: #171717;">Thank you for resgistering with Blinkit Clone</p><br >
            <span style="display: block; font-weight: bold; color: #171717;">Click the link below to verify your account</span>
            <a href=${url} style="color: #020b52;">
                Verify Email
            </a>
        </div>
    `
}

export default verifyEmailTemplate;