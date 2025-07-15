import Input from "./components/input";

const App: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-10 bg-white/40 shadow-sm backdrop-blur-3xl">
        <section className="content-wrap flex items-center justify-between py-4">
          <a className="text-xl text-primary">CnRabbit</a>
          <nav className="flex space-x-6 *:text-sm *:transition-colors *:transition-discrete *:duration-500 *:hover:text-primary">
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
          <div className="flex space-x-4">
            <Input
              className="small-input rounded-full"
              placeholder="search..."
            />
            <a
              href=""
              title="Sign In"
              className="btn btn-small px-0"
            >
              Sign In
            </a>
            <a
              href=""
              title="Subscribe"
              className="btn btn-primary btn-small rounded-full text-sm hover:backdrop-brightness-70"
            >
              Subscribe
            </a>
          </div>
        </section>
      </header>
      <section className="bg-gray-100 py-9">
        <section className="content-wrap flex flex-col items-center">
          <h1 className="text-5xl font-extrabold">Launch, Scale, and Profit</h1>
          <span className="mb-6">Join 75,000+ creators learning how to grow smarter in under 5 minutes a week.</span>
          <Input
            className="mb-2 w-100 rounded-full"
            placeholder="Enter your email"
            append=<button className="btn btn-primary">Subscribe</button>
          />
          <span className="text-xs font-light text-gray-500">No spam. Unsubscribe anytime.</span>
        </section>
      </section>
      <section className="py-9">
        <section className="content-wrap flex flex-col items-center">
          <div className="text-sm text-gray-500">Read by teams & creators from</div>
          <div></div>
        </section>
      </section>
      <section className="py-9">
        <section className="content-wrap flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="mb-3 text-3xl font-bold">Latest Insights</h2>
            <span className="text-sm font-light">
              Practical breakdowns, creator case studies, income ideas & monetization tips.
            </span>
          </div>
          <div className="mb-3"></div>
          <button className="btn btn-primary rounded-full">Load More</button>
        </section>
      </section>
      <footer className="bg-gray-100">
        <section className="content-wrap py-8">
          <section className="mb-8 flex space-x-9">
            <section className="flex flex-1 flex-col">
              <a className="mb-2 text-xl text-primary">CnRabbit</a>
              <p className="mb-4 text-sm text-gray-500">
                Practical strategies to build, grow, and monetize your online business. No fluff. Ever.
              </p>
              <Input
                className="rounded-full"
                placeholder="Your email"
                append=<button className="btn btn-primary">Subscribe</button>
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
