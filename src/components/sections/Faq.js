import {Q} from '../FAQQ'

export default function Faq() {
    return(
        <>
        <div className="items">
        <h2 className="h1"> Questions & Answers</h2>
        <Q
            icon="❓"
            question="What is 613?" 
            answer=" 613 is an independent outlet for those who know & love or would like to know & love Ottawa. You get a newsletter from us every Friday. Some culture, some tech, some politics, and a little bit of everything."
        />
        <Q
            icon="💭"
            question="Why are you doing it?" 
            answer=" The short answer is because we <3 Ottawa and want to make it a better place for everyone. The long answer is a little bit more complicated and is coming soon."
        />
        <Q
            icon="👥"
            question="Who is responsible for 613?" 
            answer='Currently, 613 is run by a single individual. Copy, Design, Code - everything is done on one a part of person. To get involved just email us <a href="mailto:welcome@613.news"> welcome@613.news</a> and we can work together.'
        />
        <Q
            icon="💌"
            question="How can I contact you?" 
            answer='<p> Email us at 
            <a href="mailto:welcome@613.news"> welcome@613.news</a> <br></br>
            </p>'
        />
        <Q
            icon="💔"
            question="I did not receive my email. " 
            answer='<p>Sometimes email providers get confused and send our emails to your spam folder. (we know right..) If you find us in your spam box, please mark us as "not spam." <br></br> Gmail app mobile readers: Press the 3 dots at the top right corner of this email, and hit “Move to” then “Primary.”
            Desktop Gmail readers: Back out of this email and then drag this email from your "Promotions" tab to the Primary tab near the top left of your screen.
            <br></br>Apple mail readers: Tap our email address at the top of this message (next to "From": on mobile) and click Add to VIPs.<br></br> If none of these solve your issue email us at <a href="mailto:welcome@613.news"> welcome@613.news</a></p>'
        />
        </div>
        <style jsx>{`
            .h1 {
                
             
                font-weight: 500;
                font-size: 57.6795px;
            }

            .items{
                display:flex;
                flex-direction: column;

            }
        `}</style>

        </>
    )
}