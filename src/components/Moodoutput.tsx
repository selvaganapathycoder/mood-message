
import { Input } from "./ui/Input"
import { Button } from "./ui/Button";

type Props = {
    subject: string;
    footer: string;
    onSendEmail: () => void;
}
const Moodoutput = ({ subject, footer, onSendEmail }: Props) => {
    return (
        <div className="space-y-4">
            <div>  <label className="block font-medium">Subject</label>
                <Input value={subject} readOnly /></div>

            <div>  <label className="block font-medium">footer signature</label>
                <Input value={footer} readOnly /></div>

     <Button variant="destructive" className="w-full" onClick={onSendEmail}>Send Email</Button>

        </div>
    )
}

export default Moodoutput