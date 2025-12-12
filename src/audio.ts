import axios from 'axios';
import { API_BASE_URL } from './types';

export const playTextToSpeech = async (text: string, voiceId?: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/speak`, {
            text,
            voiceId
        }, {
            responseType: 'blob'
        });

        const audioUrl = URL.createObjectURL(response.data);
        const audio = new Audio(audioUrl);
        audio.play();
        return audio;
    } catch (error: any) {
        if (error.response && error.response.data instanceof Blob) {
            try {
                const errorText = await error.response.data.text();
                // Try JSON parse
                const errObj = JSON.parse(errorText);
                console.error("TTS Backend Error:", errObj.error || errorText);
                alert(`TTS Failed: ${errObj.error || "Unknown error"}`);
            } catch (e) {
                console.error("TTS Backend Error (Text):", await error.response.data.text());
            }
        } else {
            console.error("TTS Error:", error);
        }
        return null;
    }
};
