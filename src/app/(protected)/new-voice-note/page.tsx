'use client'
import PlaceOrderBtn from "@/components/PlaceOrderBtn"
import { useEffect, useState } from "react";

const NewOrder = () => {
    const [finalTranscript, setFinalTranscript] = useState<string>('');
    const [recognition, setRecognition] = useState<webkitSpeechRecognition | null>(null);

    const startRecording = () => {
        const recognitionInstance = new webkitSpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;

        recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    setFinalTranscript(prevTranscript => prevTranscript + transcript + ' ');
                } else {
                    interimTranscript += transcript;
                }
            }
        };

        recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error('Speech recognition error:', event.error);
        };

        recognitionInstance.onend = () => {
            console.log('Speech recognition ended');
        };

        recognitionInstance.start();
        setRecognition(recognitionInstance);
    };

    const stopRecording = () => {
        if (recognition) {
            recognition.stop();
            setRecognition(null);
        }
    };

    useEffect(() => {
        console.log("Final transcript", finalTranscript)
    }, [finalTranscript])
    
    return (
        <div className="flex flex-col w-full py-[15px] text-black">
            <PlaceOrderBtn />
            <br />
            <button onClick={startRecording} className="p-2 bg-[lightblue] rounded" id="startRecord">Start Recording</button>
            <br/>
            <button onClick={stopRecording} className="p-2 bg-[lightpink] rounded" id="stopRecord">Stop Recording</button>
            <div className="text-black"id="output">{finalTranscript}</div>
        </div>
    )
}

export default NewOrder