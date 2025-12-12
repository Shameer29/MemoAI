import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../types';

interface AuthScreenProps {
    onLogin: (userId: string, userName: string) => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
    const handleWorkOSLogin = () => {
        const clientId = 'client_01KC9HMB985RBDZC0C6V4A13A4';
        const redirectUri = `${window.location.origin}/callback`;

        console.log("WorkOS Login Config:", { clientId, redirectUri });

        // Direct AuthKit Domain (more robust for AuthKit-only flows)
        const workOsUrl = `https://zealous-monarch-72-staging.authkit.app/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = workOsUrl;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-deep)] p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md glass-panel p-8 relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-indigo-500/30">
                        <Brain size={32} />
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Welcome to MemoAI
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Your secure Second Brain
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleWorkOSLogin}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4V12H20C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4Z" fill="currentColor" />
                        </svg>
                        Continue with WorkOS
                    </button>

                    <div className="text-center">
                        <p className="text-xs text-gray-500 mt-4">
                            Secure Enterprise & Social Login
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
