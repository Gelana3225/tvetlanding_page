import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <section className="py-section-gap bg-surface" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Get in Touch</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-8">Have questions about our programs or admissions? We're here to help.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface mb-1">Visit Us</h4>
                  <p className="font-body-md text-body-md text-secondary">Hawa Gelan District, Oromia Region<br/>Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">phone</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface mb-1">Call Us</h4>
                  <p className="font-body-md text-body-md text-secondary">0573310661<br/>Mon-Fri, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface mb-1">Email Us</h4>
                  <p className="font-body-md text-body-md text-secondary">info@hawagelantvet.edu.et<br/>admissions@hawagelantvet.edu.et</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">First Name</label>
                  <Input placeholder="First Name" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1">Last Name</label>
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1">Email Address</label>
                <Input placeholder="your@email.com" type="email" />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1">Interested Program</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="metal_fabrication">General Metal Fabrication and Assembly</SelectItem>
                    <SelectItem value="hns">Hardware and Networking Service(HNS)</SelectItem>
                    <SelectItem value="garment">Garment</SelectItem>
                    <SelectItem value="animal_production">Animal Production</SelectItem>
                    <SelectItem value="crop_production">Crop Production</SelectItem>
                    <SelectItem value="wood_work">Wood Work Technology</SelectItem>
                    <SelectItem value="scw">Structural Construction Work(SCW)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1">Message</label>
                <Textarea placeholder="How can we help you?" className="h-32 resize-none" />
              </div>
              <Button className="w-full mt-4 bg-primary text-on-primary hover:bg-primary/90 text-label-md py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
