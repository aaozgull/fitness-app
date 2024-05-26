module.exports = {
  name: "fitness-app",
  slug: "fitness-app",
  version: "1.0.0",
  scheme: "fitness-app",
  extra: {
    eas: {
      projectId: "a6c54d2f-8de3-48c6-a6a8-9d2c7d70c5a2",
    },

    clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    rapidApiId: process.env.RAPID_API_ID,
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  },

  android: {
    package: "com.aaozgull.fitness",
  },
};
