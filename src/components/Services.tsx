import { siteConfig } from "@/config/site.config";

export const Services = () => {
  const { services } = siteConfig;

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <div key={index} className="border border-[#F1F1F1] rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-[#666] mb-6">{service.content}</p>
              <a
                href={service.viewWorkLink}
                className="inline-flex items-center gap-2 text-black font-medium hover:underline"
              >
                <span>view work</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
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

