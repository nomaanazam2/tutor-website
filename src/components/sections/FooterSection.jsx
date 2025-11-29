import { Mail, MessageCircle, Phone } from "lucide-react";

const Footer = ({ onNavigate }) => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold">
              S
            </div>
            <span className="text-xl font-bold">MathWithSamra</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering students globally with personalized mathematics
            education. Transforming anxiety into achievement from Deoband to the
            World.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Experience", "Curriculum", "Pricing", "Resources", "FAQ"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                  onClick={() => onNavigate(item.toLowerCase())}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact & Connect</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" />
              <a
                href="mailto:tutor@samrasiddiqui.com"
                className="hover:text-white"
              >
                samrasddq77@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" />
              <span className="hover:text-white">+91 7302652421</span>
            </li>
            {/* <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-indigo-500" />
                <a
                  href="https://linkedin.com/in/samrasiddiqui"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </li> */}
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-indigo-500" />
              <a
                href="https://wa.me/917302652421"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Samra Siddiqui. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0 text-slate-600">Teaching Grades 1 - 10</p>
      </div>
    </div>
  </footer>
);

export default Footer;
