import Moodinput from "../Moodinput"
import Moodoutput from "../Moodoutput"
import { useState } from "react"

const Home = () => {

  const [mood, setMood] = useState("")
  const [subject, setSubject] = useState("")
  const [footer, setFooter] = useState("")
  const [generator, setGenerator] = useState(false)

  const handleGenerateEmail = () => {
    const lowerMood = mood.toLowerCase();
    if (lowerMood.includes("happy")) {
      setSubject("Happy Mood Detected")
      setFooter("Stay positive and keep smiling!")
    } else if (lowerMood.includes("sad")) {
      setSubject("Sad Mood Detected")
      setFooter("It's okay to feel sad sometimes. Take care!")
    } else if (lowerMood.includes("angry")) {
      setSubject("Angry Mood Detected")
      setFooter("Take a deep breath and relax.")
    }
    else {
      setSubject("Mood Not Recognized")
      setFooter("Please enter a valid mood like happy, sad, or angry.")
    }
    setGenerator(true)
  }

  const handleReset = () => {
    setMood("")
    setSubject("")
    setFooter("")
    setGenerator(false)
  }

  return (
    <div className="max-w-xl mx-auto mt-20px p-6 rounded-lg shadow-lg bg-white space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Moodmail Generator</h2>
      {!generator ? (
        <Moodinput
          mood={mood}
          setMood={setMood}
          onGenerateEmail={handleGenerateEmail}
          disabled={generator}
        />
      ) : (
        <Moodoutput subject={subject} footer={footer} onSendEmail={handleReset} />
      )}
    </div>
  )
}

export default Home