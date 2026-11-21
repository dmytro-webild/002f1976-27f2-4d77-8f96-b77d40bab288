import HeroDotField from "@/components/sections/hero/HeroDotField";
import ServicesDotCells from "@/components/sections/features/ServicesDotCells";
import AboutParticleRow from "@/components/sections/about/AboutParticleRow";
import GalleryHalftoneRail from "@/components/sections/gallery/GalleryHalftoneRail";
import CtaParticleCell from "@/components/sections/statement/CtaParticleCell";
import TestimonialHalftoneLead from "@/components/sections/testimonial/TestimonialHalftoneLead";
import ContactSplitCell from "@/components/sections/contact/ContactSplitCell";
import LoaderFrameDraw from "@/components/loaders/LoaderFrameDraw";

export default function HomePage() {
  return (
    <>
      <LoaderFrameDraw
        introDelay={1}
      />

      <div id="hero" data-webild-section="HeroDotField" data-webild-section-id="HeroDotField-1" data-section="hero" data-scene>
        <HeroDotField
          tag={{
            text: "Locally Owned Since 2014",
            href: "#services"
          }}
          title="Expert caulking repair. Call today."
          description="Joint sealants, waterproofing, and brick repair from Milwaukee to Green Bay. Fully insured."
          primaryButton={{
            text: "Get Free Quote",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Call (920) 838-4678",
            href: "tel:9208384678"
          }}
          introDelay={1}
        />
      </div>

      <div id="services" data-webild-section="ServicesDotCells" data-webild-section-id="ServicesDotCells-1" data-section="services">
        <ServicesDotCells
          title="Sealant application and masonry repair built for Wisconsin weather"
          items={[
            {
              title: "Joint Sealants & Caulking",
              description: "Commercial and residential caulking, expansion joints, window sealing, and concrete joint protection.",
              button: {
                text: "Get Free Quote",
                href: "#contact"
              }
            },
            {
              title: "Waterproofing Services",
              description: "Masonry and concrete waterproofing with sealers to prevent leaks and freeze-thaw damage.",
              button: {
                text: "Get Free Quote",
                href: "#contact"
              }
            },
            {
              title: "Brick & Block Repair",
              description: "Expert brick replacement, block repair, and wall crack repair for all structures.",
              button: {
                text: "Get Free Quote",
                href: "#contact"
              }
            },
            {
              title: "Tuckpointing & Mortar",
              description: "Precision tuckpointing, mortar repair, and repointing for brick walls and chimneys.",
              button: {
                text: "Get Free Quote",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutParticleRow" data-webild-section-id="AboutParticleRow-1" data-section="about">
        <AboutParticleRow
          label="Service Regions"
          title="Caulking and Masonry Contractor Serving Eastern Wisconsin"
          description="We serve commercial and residential clients from Milwaukee to Green Bay with expert masonry care."
          points={[
            "Southeastern: Milwaukee, Waukesha, Racine, Kenosha, West Bend",
            "Fox Valley: Appleton, Oshkosh, Fond du Lac, Sheboygan",
            "Northeastern: Green Bay, De Pere, Door County, Shawano",
            "Commercial and residential properties fully covered"
          ]}
          items={[
            {
              title: "Southeastern Region",
              description: "Caulking and tuckpointing for southeastern Wisconsin properties.",
              icon: "globe"
            },
            {
              title: "Fox Valley",
              description: "Reliable masonry repair from Sheboygan to Appleton.",
              icon: "check"
            },
            {
              title: "Northeastern Region",
              description: "Joint sealing and waterproofing across northeastern counties.",
              icon: "lock"
            },
            {
              title: "Prompt Service",
              description: "Dependable local scheduling for all regional projects.",
              icon: "gauge"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryHalftoneRail" data-webild-section-id="GalleryHalftoneRail-1" data-section="gallery" data-scene>
        <GalleryHalftoneRail
          label="Worksite field notes"
          title="Precision sealant and masonry craftsmanship"
          description="A closer look at structural joint sealing and restoration work across Wisconsin."
          items={[
            {
              title: "Expansion joint sealing",
              imageSrc: "https://img.b2bpic.net/free-photo/abstract-minimal-background-with-floor_23-2149207759.jpg",
              imageAlt: "Abstract minimal background with floor"
            },
            {
              title: "Mortar joint grinding",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795300923889-n4un24c9.jpg",
              imageAlt: "brick wall with window"
            },
            {
              title: "Masonry crack layout",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795300923890-dj0uw8lt.jpg",
              imageAlt: "caulked joint between bricks"
            },
            {
              title: "Precision mortar application",
              imageSrc: "https://img.b2bpic.net/free-photo/detail-structure-dirty-stone-cement_1122-2388.jpg",
              imageAlt: "detail structure dirty stone cement"
            }
          ]}
        />
      </div>

      <div id="cta" data-webild-section="CtaParticleCell" data-webild-section-id="CtaParticleCell-1" data-section="cta">
        <CtaParticleCell
          title="Protect your Wisconsin masonry structure today."
          primaryButton={{
            text: "Get Free Quote",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Call Now",
            href: "tel:9208384678"
          }}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialHalftoneLead" data-webild-section-id="TestimonialHalftoneLead-1" data-section="testimonial">
        <TestimonialHalftoneLead
          title="What Wisconsin building owners say about us"
          items={[
            {
              quote: "Daniel resealed our commercial building brick seams before winter and completely stopped the leaks.",
              name: "Priya Price",
              role: "Facility Manager, Milwaukee",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795300923888-864npho6.jpg"
            },
            {
              quote: "Our chimney brick mortar was crumbling fast. Crack Fillers tuckpointed the entire stack cleanly and efficiently.",
              name: "Caleb Hughes",
              role: "Homeowner, Sheboygan",
              imageSrc: "https://img.b2bpic.net/free-photo/he-is-satisfied-from-his-life_329181-2789.jpg"
            },
            {
              quote: "They recaulked all exterior window perimeter joints across our warehouse property without disrupting daily operations.",
              name: "Grace Coleman",
              role: "Property Owner, Green Bay",
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-woman-with-curly-hair-posing_23-2148728584.jpg"
            },
            {
              quote: "The masonry sealant and wall crack repair saved our foundation walls from freeze thaw damage during heavy rains.",
              name: "Connor Carter",
              role: "Building Manager, Appleton",
              imageSrc: "https://img.b2bpic.net/free-photo/mature-bearded-man-with-cup-hands_259150-58327.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactSplitCell" data-webild-section-id="ContactSplitCell-1" data-section="contact">
        <ContactSplitCell
          title="Request a Free Caulking or Masonry Quote"
          submitText="Request Free Quote"
          successText="Thank you for reaching out. We will respond promptly to schedule your free estimate."
          imageSrc="https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795300923887-u4djhqar.jpg"
          imageAlt="Tiler working on renovation of apartment"
          labels={{
            name: "Your Name",
            email: "Email Address",
            company: "Phone & City",
            message: "Service Needed & Project Details"
          }}
        />
      </div>
    </>
  );
}
