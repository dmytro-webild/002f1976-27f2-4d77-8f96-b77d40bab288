import { Outlet } from "react-router-dom";
import NavbarSplitLinks from "@/components/navbars/NavbarSplitLinks";
import FooterDashedColumns from "@/components/sections/footer/FooterDashedColumns";

const LOGO_URL = "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795301453677-vmg5rnzi.jpg";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-particles="architecture" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSplitLinks
          brand="Crack Fillers Caulking"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Service Areas",
              href: "#about"
            },
            {
              name: "About",
              href: "#cta"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ]}
          secondaryButton={{
            text: "Call (920) 838-4678",
            href: "tel:9208384678"
          }}
          primaryButton={{
            text: "Get a Free Quote",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-particles="architecture" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterDashedColumns
          brand="Crack Fillers Caulking"
          logoSrc={LOGO_URL}
          columns={[
            {
              title: "Services",
              links: [
                {
                  text: "Joint Sealants & Caulking",
                  href: "#services"
                },
                {
                  text: "Waterproofing",
                  href: "#services"
                },
                {
                  text: "Brick & Block Repair",
                  href: "#services"
                },
                {
                  text: "Tuckpointing",
                  href: "#services"
                }
              ]
            },
            {
              title: "Service Areas",
              links: [
                {
                  text: "Southeastern WI",
                  href: "#about"
                },
                {
                  text: "Fox Valley",
                  href: "#about"
                },
                {
                  text: "Northeastern WI",
                  href: "#about"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "(920) 838-4678",
                  href: "tel:9208384678",
                  note: "Call Now"
                },
                {
                  text: "crackfillerscaulking@gmail.com",
                  href: "mailto:crackfillerscaulking@gmail.com"
                },
                {
                  text: "Request a Free Quote",
                  href: "#contact"
                }
              ]
            }
          ]}
          copyright="Copyright © 2026 Crack Fillers Caulking."
          rights="All rights reserved. Fully insured masonry & caulking contractor."
          socials={[
            {
              icon: "Facebook",
              href: "#",
              label: "Facebook"
            },
            {
              icon: "Linkedin",
              href: "#",
              label: "LinkedIn"
            },
            {
              icon: "Phone",
              href: "tel:9208384678",
              label: "Phone"
            },
            {
              icon: "Mail",
              href: "mailto:crackfillerscaulking@gmail.com",
              label: "Email"
            }
          ]}
        />
      </footer>
    </div>
  );
}
