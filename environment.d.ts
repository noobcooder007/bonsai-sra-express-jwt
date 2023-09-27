declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            PORT: string;
            JWT_KEY: string;
            // add more environment variables and their types here
        }
    }
}

export {}