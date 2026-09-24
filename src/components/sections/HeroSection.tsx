import { buttonVariants } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" data-alt="A vibrant, wide-angle shot of a modern, well-lit technical workshop in an Ethiopian vocational college. Students in professional safety gear are actively engaged in hands-on learning with industrial equipment. The scene is bathed in natural light streaming through large windows, highlighting the clean, organized workspace. The color palette features deep greens, warm golds, and bright whites, conveying a sense of practical authority, progress, and professional readiness in a modern institutional setting." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8K8m01WM8FdRjOpUVU4vn7Z4ZSqzpwxgVhAleLRrYOCzXF4dmT7PBGCWa6w_vYunHS9GYl3QEA94v3BuumdxCy74CKgjokJ6FG-jQbGRZgXmQq0joItoErhdTdhV0T-bi2AAA_VwdOUy3Z9yzBT1hwYnajd_3lgtj1aqWAWdpp6fXmH5038p_LWwEAaJ4XTpQk9Ppz014JhpmnmoscnFgBQZdzF_JVtPgWGw50-wWO2BYK1RNt8siCQ')"}}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center text-on-primary">
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label-md text-label-md tracking-wider">
          EST. 1998
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto leading-tight">
          Empowering Skills.<br/>
          <span className="text-tertiary-fixed-dim">Creating Opportunities.</span><br/>
          Building the Future.
        </h1>
        <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto text-on-primary/90">
          Nurturing knowledgeable, skilled, and well-disciplined citizens to drive innovation and community development across Ethiopia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#programs" className={buttonVariants({ className: "w-full sm:w-auto bg-tertiary-fixed-dim text-tertiary font-label-md text-label-md hover:bg-tertiary-fixed transition-transform transform hover:-translate-y-1 shadow-lg py-6 px-8 rounded-lg" })}>
            Explore Programs
          </a>
          <a href="#about" className={buttonVariants({ variant: "outline", className: "w-full sm:w-auto bg-transparent border-2 border-on-primary text-on-primary font-label-md text-label-md hover:bg-on-primary/10 transition-colors py-6 px-8 rounded-lg" })}>
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
