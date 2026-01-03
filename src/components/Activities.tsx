import { siteConfig } from "@/config/site.config";

export const Activities = () => {
  const { activities } = siteConfig;

  return (
    <section className="py-24 bg-[#eaedfe]">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{activities.title}</h2>
        <p className="text-[#666] mb-10 max-w-2xl">{activities.introContent}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.items.map((activity, index) => (
            <div key={index} className="border border-[#F1F1F1] rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{activity.title}</h3>
              <p className="text-[#666] mb-6">{activity.content}</p>
              <a
                href={activity.readMoreLink}
                className="inline-flex items-center gap-2 text-black font-medium hover:underline"
              >
                <span>Read More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

