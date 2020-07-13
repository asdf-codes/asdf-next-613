import {Faq} from './FAQ'

export default function SectionFaq() {
    return(
        <>
        <h1 className="h1"> FAQ</h1>
        <Faq
            question="What is 613?" 
            answer=" 613 is an independent outlet for those who know & love or would like to know more about Ottawa. It currently exists in the form of a newsletter that gets sent to you once every Friday. Some culture, some tech, some politics, and a little bit of everything."
        />
        <Faq
            question="Why are you doig it?" 
            answer=" The short answer is because we <3 Ottawa and want to make it a better place for everyone. The long answer is a little bit more complicated and is coming soon."
        />
        <Faq
            question="Who is responsible for 613?" 
            answer='Currently, 613 is run by a single individual. Everything from writing to coding is done on the part of one person. To get involved just email us <a href="mailto:welcome@613.news"> welcome@613.news</a> and we can work together'
        />
        <Faq
            question="How can I contact you?" 
            answer='<p> Email us at 
            <a href="mailto:welcome@613.news"> welcome@613.news</a> <br></br>
            </p>'
        />
        <Faq
            question="I did not receive my email. What should I do?" 
            answer='<p>Sometimes email providers get confused and send our emails to your spam folder. (we know right..) If you find us in your spam box, please mark us as "not spam." <br></br> Gmail app mobile readers: Press the 3 dots at the top right corner of this email, and hit “Move to” then “Primary.”
            Desktop Gmail readers: Back out of this email and then drag this email from your "Promotions" tab to the Primary tab near the top left of your screen.
            <br></br>Apple mail readers: Tap our email address at the top of this message (next to "From": on mobile) and click Add to VIPs.<br></br> If none of these solve your issue email us at <a href="mailto:welcome@613.news"> welcome@613.news</a></p>'
        />
        <style jsx>{`
            .h1 {
                
                font-size: 5vh
            }
        `}</style>

        </>
    )
}