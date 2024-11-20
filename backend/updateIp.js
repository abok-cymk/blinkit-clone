import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const ATLAS_BASE_URL = 'https://cloud.mongodb.com/api/atlas/v1.0';
const PROJECT_ID = process.env.PROJECT_ID; // MongoDB Atlas Project ID
const PUBLIC_KEY = process.env.PUBLIC_KEY; // MongoDB API Public Key
const PRIVATE_KEY = process.env.PRIVATE_KEY; // MongoDB API Private Key

const addIpToWhitelist = async () => {
  try {
    // Step 1: Fetch the public IP
    const ipResponse = await axios.get('https://ifconfig.me');
    const publicIP = ipResponse.data.trim();

    console.log(`Your current public IP is: ${publicIP}`);

    // Step 2: Check existing IP whitelist
    const whitelistUrl = `${ATLAS_BASE_URL}/groups/${PROJECT_ID}/accessList`;
    const auth = {
      username: PUBLIC_KEY,
      password: PRIVATE_KEY,
    };

    const existingIpsResponse = await axios.get(whitelistUrl, { auth });
    const existingIps = existingIpsResponse.data.results.map((entry) => entry.ipAddress);

    if (existingIps.includes(publicIP)) {
      console.log('Your current IP is already whitelisted.');
      return;
    }

    // Step 3: Add the IP to the whitelist
    const addIpResponse = await axios.post(
      whitelistUrl,
      [
        {
          ipAddress: publicIP,
          comment: 'Added automatically via script',
        },
      ],
      { auth }
    );

    console.log(`IP successfully added to whitelist: ${publicIP}`);
  } catch (error) {
    console.error('Error updating IP whitelist:', error.response?.data || error.message);
  }
};

addIpToWhitelist();
