//localhost:3000/-> src/app

// export default function Home(){
//   //It always return JSX
//   //What is JSX?(jsXML = help to write html inside javascript)
//   return(
//     <main>
//       <h1>Hello World!</h1>
//     </main>
//   )
// }

export default function Home() {
  return (
    <main>
      
      {/* Navbar */}
      <nav>
        <h2>MyWebsite</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button>Get Started</button>
      </nav>


      {/* Hero Section */}
      <section id="home">
        <div>
          <p>WELCOME TO OUR WEBSITE</p>

          <h1>
            We create
            <br />
            <strong>amazing experiences.</strong>
          </h1>

          <p>
            We help businesses build modern, beautiful and
            user-friendly digital experiences.
          </p>

          <button>Explore More →</button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Modern workspace"
            width="500"
          />
        </div>
      </section>


      {/* About Section */}
      <section id="about">
        <p>ABOUT US</p>

        <h2>We turn ideas into reality.</h2>

        <p>
          Our goal is to create simple, beautiful and useful
          digital experiences. We combine creativity and
          technology to build things people love to use.
        </p>
      </section>


      {/* Services Section */}
      <section id="services">
        <p>OUR SERVICES</p>

        <h2>What we offer</h2>

        <div>
          <article>
            <h3>Web Development</h3>
            <p>
              Modern and responsive websites built using
              the latest technologies.
            </p>
          </article>

          <article>
            <h3>UI/UX Design</h3>
            <p>
              Clean and intuitive designs focused on
              providing a great user experience.
            </p>
          </article>

          <article>
            <h3>Digital Solutions</h3>
            <p>
              Scalable solutions designed to help your
              business grow.
            </p>
          </article>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact">
        <h2>Let's work together.</h2>

        <p>
          Have an idea? We'd love to hear from you.
        </p>

        <button>Contact Us</button>
      </section>


      {/* Footer */}
      <footer>
        <h3>MyWebsite</h3>

        <p>
          © 2026 MyWebsite. All rights reserved.
        </p>
      </footer>

    </main>
  );
}