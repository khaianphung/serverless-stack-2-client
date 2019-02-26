const dev = {
  STRIPE_KEY: "pk_test_5pMfboAG8ooblzl4tcDG2Ba8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads12345"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a0l2uiif0f.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jSKuXRT8i",
    APP_CLIENT_ID: "5sfk3jih00bkttndoggea7mdbn",
    IDENTITY_POOL_ID: "us-east-1:1b8e6bf3-108e-4c44-9326-a8e6892abf28"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_5pMfboAG8ooblzl4tcDG2Ba8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads12345"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://a0l2uiif0f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gmIgIZ2fg",
    APP_CLIENT_ID: "7f5f2k8ono7kb1mlqhfq2bm37n",
    IDENTITY_POOL_ID: "us-east-1:880c0b1d-dc42-45f5-bf25-e45353bda2b9"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};