import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Do I need to be present during the inspection?",
        answer: "While it's not required, we highly recommend it. Being there allows you to see what the inspector sees, ask questions in real-time, and get a better understanding of the home's condition than a report alone can provide."
    },
    {
        question: "How long does a typical inspection take?",
        answer: "Most inspections take between 2 to 3 hours, depending on the size, age, and condition of the property. We take our time to ensure nothing is overlooked."
    },
    {
        question: "When will I receive my inspection report?",
        answer: "We know time is of the essence in real estate transactions. You will receive your detailed, digital report on the same day as the inspection, typically within a few hours of completion."
    },
    {
        question: "What if the inspection reveals problems?",
        answer: "No house is perfect, not even brand new ones. If we find issues, it doesn't mean you shouldn't buy the house. It gives you the knowledge to negotiate price or repairs, or simply to know what potential costs generally lie ahead."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, absolutely. Vincent Fundaro is a NY State Licensed Home Inspector (#16000066020) and fully insured. We are also InterNACHI Certified, adhering to the highest standards in the industry."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section bg-white" id="faq">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="text-primary">Frequently Asked Questions</h2>
                    <p className="text-light section-subtitle max-w-2xl mx-auto">
                        Got questions? We have answers. If you don't see your question here, feel free to call us.
                    </p>
                </div>

                <div className="faq-list max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
