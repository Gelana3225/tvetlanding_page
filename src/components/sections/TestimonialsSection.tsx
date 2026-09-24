export default function TestimonialsSection() {
  return (
    <section className="py-section-gap bg-surface-container-low" id="impact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Student Success Stories</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">Hear from our graduates who are making a real impact in their communities and careers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div className="p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/30 relative">
            <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim absolute top-6 right-6 opacity-30">format_quote</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden">
                <img alt="Student" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tH9058b8x7x53H2o4I0L4y4y3aG7V425n5hO0K5e0E5k4W8E5A7K1x4L2k8r7C6Z0L7T0h4B8r5j9T9t1E4W4K0t9E3A5y9r4H9I4t2z5I7k4A2K9e4H2G8C7Z3U3R4P9M3c2a3K1R0N2t9K8C7B4w4Q4y5w8Q3U5T2S1X6o8Y4B0W5m3P3o0c9n6L9b2p4C6"/>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">Abebe Kebede</h4>
                <p className="font-body-sm text-body-sm text-secondary">Agriculture Graduate, 2021</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "The practical training I received in the agriculture program completely changed how I approach farming. I've now started my own agribusiness and employ three people from my village."
            </p>
          </div>
          <div className="p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/30 relative">
            <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim absolute top-6 right-6 opacity-30">format_quote</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden">
                <img alt="Student" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8F3O4W3T2E9O4N5a5R9C4M5T5o0E5e9X8t9g0C4c8s9L5G5P5E0M4w9A0g9C5m5K5X9w4E4k4c9D0R9t4A9O4w4H5r9w4Q9s9w9A8u9c9Q8U9h0c0A9e0t8v8N8C8R8o5w5m9N8h0S8H0g4o9T4n9e9U0E9w8Y8K9O0C0m9S0w5E9u9A5E8r8e0P9T8t3P9X"/>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">Tigist Alemu</h4>
                <p className="font-body-sm text-body-sm text-secondary">IT Graduate, 2022</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "Starting with zero computer knowledge, the basic computer skills course gave me the confidence to apply for office jobs. I'm now an administrative assistant at a local NGO."
            </p>
          </div>
          <div className="p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/30 relative">
            <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim absolute top-6 right-6 opacity-30">format_quote</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden">
                <img alt="Student" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY0F5g4C8c2e9P4k8L4M5n0R0I5a5R5O0g9e4T4E5K4P5n5C4E5E0W4E5M0H5g0W5H4E0R4u4k4s9G5M5e0s8K4t8N5n9O4c4w4U0S5N0Y5t0U9w4y5E9C5X9X0C5g5R0W8Y0h9I9L9w4S8P9C5H4X4k0o9T8P8U0w9E5U8s4c0Y0m5h9X9X0u5T9C0t5a5E0u8e"/>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface">Dawit Bekele</h4>
                <p className="font-body-sm text-body-sm text-secondary">Construction Graduate, 2020</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              "The construction training was tough but exactly what the industry demands. The instructors ensure you know not just how to build, but how to manage a safe site."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
