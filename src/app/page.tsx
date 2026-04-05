"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Materials",
          id: "materials",
        },
        {
          name: "Safety",
          id: "safety",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Elite invisible Grill and railing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Invisible Grills & Premium Railing Solutions for Gujarat"
      description="Ensure your home's safety without compromising your view. Our high-strength, virtually invisible wire railing and grill solutions are perfect for modern balconies, terraces, and staircases."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775389998133-d80ia0ad.jpg",
          imageAlt: "Modern balcony with invisible grills",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775389953904-xh4y7sfu.jpg",
          imageAlt: "Safety wire mesh railing",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775391774190-522pllh6.jpg",
          imageAlt: "Close up of high-strength wire",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775388176029-grmnrz8r.jpg",
          imageAlt: "Terrace with invisible grills",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775388763210-sm8v6mp5.jpg",
          imageAlt: "Installation components",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775390033642-no9k9lwc.jpg",
          imageAlt: "Building view with transparent railing",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Safety",
          title: "Child & Pet Safety",
          subtitle: "Total Peace of Mind",
          description: "Prevent accidents with our high-tension wire systems that act as a secure barrier.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bvf25ktmAxQ2Lg40lMtoj7aH3x/uploaded-1775392021682-1m5mkgs9.jpg",
        },
        {
          tag: "View",
          title: "Unobstructed Views",
          subtitle: "Crystal Clear Sight",
          description: "Enjoy the scenery without heavy metal grids blocking your landscape views.",
          imageSrc: "http://img.b2bpic.net/free-photo/kitchen-cabinet-samples-shelf-with-reflective-surface-display-modern-furniture-material-concept_169016-71969.jpg?_wi=1",
        },
        {
          tag: "Durability",
          title: "Rust Proof & Strong",
          subtitle: "Built for Gujarat Weather",
          description: "Our materials are specifically chosen for their high resilience to extreme humidity and weather.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409626.jpg?_wi=1",
        },
      ]}
      title="Why Choose Our Invisible Grills?"
      description="Experience superior protection with an aesthetic touch. Our solutions are designed for modern living standards."
    />
  </div>

  <div id="materials" data-section="materials">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "m1",
          name: "High-Grade 316 Stainless Steel Wire",
          price: "Heavy-duty",
          variant: "Industry standard for longevity",
          imageSrc: "http://img.b2bpic.net/free-photo/grey-black-leather-cotton-texture-background_74190-9226.jpg?_wi=2",
        },
        {
          id: "m2",
          name: "Aluminum Channel Profile",
          price: "Structural",
          variant: "Precision engineered",
          imageSrc: "http://img.b2bpic.net/free-photo/kitchen-cabinet-samples-shelf-with-reflective-surface-display-modern-furniture-material-concept_169016-71969.jpg?_wi=2",
        },
        {
          id: "m3",
          name: "Plastic Coated High Tension Rope",
          price: "Protective",
          variant: "Extreme safety rating",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409626.jpg?_wi=2",
        },
        {
          id: "m4",
          name: "Premium Installation Kit",
          price: "Complete",
          variant: "All hardware included",
          imageSrc: "http://img.b2bpic.net/free-photo/grey-black-leather-cotton-texture-background_74190-9226.jpg?_wi=3",
        },
        {
          id: "m5",
          name: "Corrosion Resistant Bolts",
          price: "Durable",
          variant: "Weather-proof",
          imageSrc: "http://img.b2bpic.net/free-photo/kitchen-cabinet-samples-shelf-with-reflective-surface-display-modern-furniture-material-concept_169016-71969.jpg?_wi=3",
        },
        {
          id: "m6",
          name: "Custom Tensioners",
          price: "Precision",
          variant: "Maintain stability",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409626.jpg?_wi=3",
        },
      ]}
      title="Precision Materials"
      description="Quality components for long-lasting performance."
    />
  </div>

  <div id="safety" data-section="safety">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Are these grills safe for children?",
          content: "Yes, they are highly reliable, high-tension wire barriers that prevent children from leaning out or climbing over.",
        },
        {
          id: "f2",
          title: "Is the material rust-proof?",
          content: "We use only 316-grade stainless steel which is highly resistant to oxidation and moisture, ideal for coastal or humid climates.",
        },
        {
          id: "f3",
          title: "Will it block my view?",
          content: "The main benefit is the transparency. The wires are so thin that they are barely noticeable from just a few feet away.",
        },
        {
          id: "f4",
          title: "How much tension do they hold?",
          content: "Our systems are engineered to hold significant weight, meeting industrial safety standards for railings and barriers.",
        },
      ]}
      title="Safety & Advantages"
      description="Everything you need to know about our safety-focused railing systems."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Great Work!",
          quote: "Fantastic service and excellent quality. The balcony looks so modern now and the view is beautiful.",
          name: "Sarah Mehta",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-with-book_23-2147770055.jpg",
        },
        {
          id: "2",
          title: "Safe & Secure",
          quote: "I feel so much safer now with my kids playing on the terrace. The installation was very professional.",
          name: "Rajesh Patel",
          role: "Dad",
          imageSrc: "http://img.b2bpic.net/free-photo/daughters-hugging-mother_23-2148473969.jpg",
        },
        {
          id: "3",
          title: "Highly Recommend",
          quote: "Professional team. They explained all the materials and finished the work well ahead of time.",
          name: "Anita Shah",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-father-kid-couch_23-2148920087.jpg",
        },
        {
          id: "4",
          title: "Pet Friendly",
          quote: "My cats are safe now! No more worrying when they are near the balcony railing. Great job.",
          name: "Vikram Desai",
          role: "Pet Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/dog-lifestyle-care-with-owner_23-2149150760.jpg",
        },
        {
          id: "5",
          title: "Best in Town",
          quote: "Top-notch invisible grill installation in the entire city. Quick service and great support.",
          name: "Sunita Rao",
          role: "Teacher",
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-lady-with-curls-wearing-denim-jacket-shorts-has-fun-outside-summer-good-day_291650-1293.jpg",
        },
      ]}
      title="Customer Stories"
      description="Helping families across Gujarat secure their homes."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-animated",
      }}
      text="Ready to secure your home? Call us for a free quote: 9274736352. We serve all over Gujarat."
      buttons={[
        {
          text: "Call Now: 9537836352",
          href: "tel:9537836352",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Materials",
              href: "#materials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Safety Measures",
              href: "#safety",
            },
            {
              label: "Advantages",
              href: "#features",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Elite invisible Grills"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
