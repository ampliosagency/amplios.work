import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';

export const PrivacyPolicy = () => (
  <div className="space-y-8 text-white/70 font-sans leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">1. Information We Collect</h2>
      <p>
        We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">2. Use of Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and our company.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">3. Data Sharing and Disclosure</h2>
      <p>
        We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">4. Your Rights (CCPA/CPRA)</h2>
      <p>
        If you are a California resident, you have specific rights regarding your personal information, including the right to request access to and deletion of your data.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">5. Children's Privacy (COPPA)</h2>
      <p>
        Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.
      </p>
    </section>
  </div>
);

export const TermsOfUse = () => (
  <div className="space-y-8 text-white/70 font-sans leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">1. Acceptance of Terms</h2>
      <p>
        By accessing or using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">3. Disclaimer</h2>
      <p>
        The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">4. Limitations of Liability</h2>
      <p>
        In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">5. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of the United States and the State of Delaware.
      </p>
    </section>
  </div>
);

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col"
      >
        <div className="p-8 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
          <h2 className="text-3xl font-bold tracking-tighter uppercase text-primary">{title}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
