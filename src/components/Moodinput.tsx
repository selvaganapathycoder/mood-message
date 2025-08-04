import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

type MoodInputProps = {
    mood: string;
    setMood: (mood: string) => void;
    onGenerateEmail: () => void;
    disabled: boolean;
};

const Moodinput = ({ mood, setMood, onGenerateEmail, disabled }: MoodInputProps) => {
    return (
        <div className="space-y-4">
            <Input
                placeholder="Enter your mood Today...? {happy, sad, angry}"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                disabled={disabled}
            />
            <Button
                className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={onGenerateEmail}
                disabled={disabled}
            >
                Generate Email
            </Button>
        </div>
    );
};

export default Moodinput;
