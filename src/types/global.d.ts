declare global {
  namespace NodeJs {
    interface ProcessEnv {
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
      AUTH_URL: string;
      AUTH_SECRET: string;
    }
  }
}

export {};
