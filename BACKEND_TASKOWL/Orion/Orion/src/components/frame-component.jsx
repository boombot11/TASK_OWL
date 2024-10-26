import QuestionItem from "./question-item";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const faqData = [
    {
      question: "What features does the WhatsApp bot provide?",
      answer:
        "The WhatsApp bot offers features like task reminders, updates on project status, the ability to create or modify tasks, and quick access to your task list—all via simple chat commands.",
    },
    {
      question: "Can I create tasks using the WhatsApp bot?",
      answer:
        "Yes! Simply send a message to the bot with the details of your task, and it will create it in your Notion workspace automatically.",
    },
    {
      question: "Is my data secure with the app?",
      answer:
        "Yes, we prioritize your privacy and data security. All information is encrypted, and we follow industry-standard practices to protect your data.",
    },
    {
      question: "What should I do if I encounter issues with the app?",
      answer:
        "You can reach out to our support team via the app or email us directly. We’re here to help with any technical issues or questions you may have.",
    },
  ];

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-black font-poppins ${className}`}
    >
      <div className="w-[1482px] flex flex-col items-end justify-start gap-[87px] max-w-full mq450:gap-[22px] mq825:gap-[43px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-green">
          <div className="w-[721px] flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
              <div className="rounded-4xs bg-mediumspringgreen-300 flex flex-row items-start justify-start py-2 px-[17px]">
                <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-300 hidden" />
                <div className="relative font-medium inline-block min-w-[129px] z-[1] mq450:text-base">
                  Testimonials
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-31xl leading-[47px] font-bold font-inherit text-black text-center mq450:text-11xl mq450:leading-[28px] mq825:text-21xl mq825:leading-[38px]">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full text-3xl mq825:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[466px] max-w-full mq825:gap-[23px] mq825:min-w-full">
            {faqData.slice(0, 3).map((item, index) => (
              <QuestionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[466px] max-w-full mq825:gap-[20px] mq825:min-w-full">
            {faqData.slice(3).map((item, index) => (
              <QuestionItem
                key={index + 3}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
