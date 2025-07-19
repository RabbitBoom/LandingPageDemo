import Input from "./components/input";
import Google from "./assets/svg/companys/Google.svg?react";
import Facebook from "./assets/svg/companys/Facebook.svg?react";
import Figma from "./assets/svg/companys/Figma.svg?react";
import YouTube from "./assets/svg/companys/YouTube.svg?react";
import ArrowRight from "./assets/svg/icons/arrow-right.svg?react";
import ListPic from "./assets/images/7-600x400.png";

export type ListItemTypes = {
  id: number;
  url: string;
  title: string;
  desc: string;
  status: string;
  time: string;
};

const listData: ListItemTypes[] = [
  {
    id: 1,
    url: "",
    title: "Launch Your First Product",
    desc: "Step-by-step guide to start selling online.",
    status: "start",
    time: "2h",
  },
  {
    id: 2,
    url: "",
    title: "Grow with Social Media",
    desc: "Build traction using micro-content strategy.",
    status: "grow",
    time: "2h",
  },
  {
    id: 3,
    url: "",
    title: "Monetize with SEO",
    desc: "Use search traffic to increase your revenue.",
    status: "monetize",
    time: "2h",
  },
  {
    id: 4,
    url: "",
    title: "Email Marketing Mastery",
    desc: "Craft subject lines that convert.",
    status: "marketing",
    time: "1h",
  },
  {
    id: 5,
    url: "",
    title: "Work Smarter with Tools",
    desc: "Best tools to automate your work.",
    status: "productivity",
    time: "1h",
  },
  {
    id: 6,
    url: "",
    title: "June 2025 Income Report 💰",
    desc: "$12,345 from affiliates and courses.",
    status: "income",
    time: "1h",
  },
];

const App: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-10 bg-white/70 shadow-sm backdrop-blur-md">
        <section className="content-wrap flex items-center justify-between py-5">
          <a href="/" className="text-2xl font-semibold text-primary" title="CNRabbit">CNRabbit</a>
          <nav className="flex space-x-6 *:font-semibold *:transition-colors *:transition-discrete *:duration-500 *:hover:text-primary">
            <a
              href=""
              title="Topics"
            >
              Topics
            </a>
            <a
              href=""
              title="Archive"
            >
              Archive
            </a>
            <a
              href=""
              title="Resources"
            >
              Resources
            </a>
            <a
              href=""
              title="Advertise"
            >
              Advertise
            </a>
          </nav>
          <div className="flex space-x-6">
            <Input
              className="small-input w-70 rounded-full"
              placeholder="search..."
            />
            <a
              href=""
              title="Sign In"
              className="btn px-0"
            >
              Sign In
            </a>
            <a
              href=""
              title="Subscribe"
              className="btn btn-primary rounded-full hover:backdrop-brightness-70"
            >
              Subscribe
            </a>
          </div>
        </section>
      </header>
      <section className="bg-gray-50/40 py-20">
        <section className="content-wrap flex flex-col items-center">
          <h1 className="mb-4 text-5xl/15 font-extrabold">Launch, Scale, and Profit</h1>
          <span className="mb-6 text-lg text-gray-500">
            Join 75,000+ creators learning how to grow smarter in under 5 minutes a week.
          </span>
          <Input
            className="mb-2 w-full max-w-100 rounded-full"
            placeholder="Enter your email"
            appendNode={
              <button
                type="button"
                className="btn btn-primary"
              >
                Subscribe
              </button>
            }
          />
          <span className="text-xs font-light text-gray-500">No spam. Unsubscribe anytime.</span>
        </section>
      </section>
      <section className="py-9">
        <section className="content-wrap flex flex-col items-center">
          <div className="text-sm text-gray-500">Read by teams & creators from</div>
          <div className="flex space-x-5 py-4">
            <Google className="transform-gpu animate-bounce" />
            <Facebook className="animate-bounce animation-delay-100" />
            <Figma className="animate-bounce animation-delay-200" />
            <YouTube className="animate-bounce animation-delay-300" />
          </div>
        </section>
      </section>
      <section className="py-9">
        <section className="content-wrap flex flex-wrap space-x-8">
          <div className="flex-1 overflow-hidden">
            <img
              src={ListPic}
              width={600}
              height={400}
              fetchPriority="high"
              alt="Featured Story"
            />
          </div>
          <div className="group flex flex-1 flex-col overflow-hidden">
            <div className="mb-2 text-base font-semibold text-primary">FEATURED ARTICLE</div>
            <h2 className="mb-4 text-3xl font-extrabold transition-colors hover:text-primary/80">
              <a
                href=""
                title="From Zero to $10K/Month as a Solo Creator"
              >
                From Zero to $10K/Month as a Solo Creator
              </a>
            </h2>
            <p className="mb-5 text-gray-500">
              Discover how Alex transformed his small newsletter into a five-figure income stream using smart content
              strategies, strong positioning, and the power of partnerships.
            </p>
            <a
              href=""
              className="flex items-center space-x-2.5 text-primary *:text-primary"
              title="Read More"
            >
              <span>Read More</span>
              <ArrowRight className="size-4.5 animate-going *:stroke-current" />
            </a>
          </div>
          <ul className="flex flex-1 flex-col space-y-5 *:flex *:cursor-default *:space-x-4 *:rounded-md *:border-1 *:border-gray-300 *:bg-white *:p-4 *:drop-shadow-md *:transition-transform *:hover:scale-105 *:hover:border-primary *:hover:drop-shadow-primary/30">
            <li>
              <Google className="size-10" />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Gumroad</div>
                <div className="text-sm text-gray-500">Revenue: $1.2M/mo</div>
                <p className="text-sm text-gray-500">
                  A creator-friendly platform for selling digital products easily.
                </p>
              </div>
            </li>
            <li>
              <Facebook className="size-10" />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">ConvertKit</div>
                <div className="text-sm text-gray-500">Revenue: $2.5M/mo</div>
                <p className="text-sm text-gray-500">
                  Email marketing tools built for creators and newsletter writers.
                </p>
              </div>
            </li>
            <li>
              <Figma className="size-10" />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Substack</div>
                <div className="text-sm text-gray-500">Revenue: $1M+/mo</div>
                <p className="text-sm text-gray-500">Start a paid newsletter and grow a loyal audience.</p>
              </div>
            </li>
          </ul>
        </section>
      </section>
      <section className="py-9">
        <section className="content-wrap flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="mb-3 text-3xl font-bold">Latest Insights</h2>
            <span className="text-sm font-light">
              Practical breakdowns, creator case studies, income ideas & monetization tips.
            </span>
          </div>
          <div className="grid w-full grid-cols-3 gap-7.5">
            {listData.map((item) => {
              return (
                <div
                  className="group flex flex-col overflow-hidden rounded-lg border-1 border-gray-200 bg-gray-50 p-5 drop-shadow-md hover:border-primary hover:bg-white hover:drop-shadow-primary/30"
                  key={item.id}
                >
                  <div className="mb-5 aspect-600/300 overflow-hidden">
                    <img
                      className="aspect-600/300 h-full w-full object-cover transition-all group-hover:scale-110"
                      loading="lazy"
                      width="600"
                      height="400"
                      src={ListPic}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-sm text-primary">
                      {item.status.toUpperCase()} • {item.time.toUpperCase()}
                    </div>
                    <h2 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
                      <a
                        href={item.url}
                        title={item.title}
                      >
                        {item.title}
                      </a>
                    </h2>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn btn-primary my-9 rounded-full">Load More</button>
        </section>
      </section>
      <footer className="bg-gray-50/40 py-10">
        <section className="content-wrap">
          <section className="mb-8 flex space-x-9">
            <section className="flex flex-1 flex-col">
              <a href="/" className="mb-2 text-2xl font-semibold text-primary" title="CNRabbit">CNRabbit</a>
              <p className="mb-4 text-sm text-gray-500">
                Practical strategies to build, grow, and monetize your online business. No fluff. Ever.
              </p>
              <Input
                className="rounded-full"
                placeholder="Your email"
                appendNode={
                  <button
                    type="button"
                    className="btn btn-primary"
                  >
                    Subscribe
                  </button>
                }
              />
            </section>
            <section className="flex-1">
              <h2 className="mb-2.5">Company</h2>
              <div className="flex flex-col *:my-1 *:text-sm *:text-gray-500 *:transition-colors *:transition-discrete *:duration-500 *:hover:text-primary/80">
                <a
                  href=""
                  title="About"
                >
                  About
                </a>
                <a
                  href=""
                  title="Contact"
                >
                  Contact
                </a>
                <a
                  href=""
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
                <a
                  href=""
                  title="Terms of Service"
                >
                  Terms of Service
                </a>
              </div>
            </section>
            <section className="flex-1">
              <h2 className="mb-2.5">Follow</h2>
              <div className="flex flex-col *:my-1 *:text-sm *:text-gray-500 *:transition-colors *:transition-discrete *:duration-500 *:hover:text-primary/80">
                <a
                  href=""
                  title="Twitter/X"
                >
                  Twitter/X
                </a>
                <a
                  href=""
                  title="YouTube"
                >
                  YouTube
                </a>
                <a
                  href=""
                  title="Bluesky"
                >
                  Bluesky
                </a>
              </div>
            </section>
          </section>
          <div className="text-center text-xs font-light text-gray-500">© 2025 All rights reserved.</div>
        </section>
      </footer>
    </>
  );
};

export default App;
