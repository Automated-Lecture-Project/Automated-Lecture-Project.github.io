
import { useEffect, useRef } from 'react';

const SimpleHtml = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create our basic HTML content
      containerRef.current.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Simple HTML Website</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              color: #333;
              background-color: #f7f7f7;
            }
            header {
              text-align: center;
              padding: 20px 0;
              border-bottom: 1px solid #ddd;
              margin-bottom: 20px;
            }
            h1 {
              color: #2d2d2d;
              margin-bottom: 10px;
            }
            nav {
              margin: 20px 0;
            }
            nav ul {
              list-style: none;
              padding: 0;
              display: flex;
              justify-content: center;
              gap: 20px;
            }
            nav a {
              color: #0066cc;
              text-decoration: none;
              font-weight: bold;
            }
            nav a:hover {
              text-decoration: underline;
            }
            section {
              background-color: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              margin-bottom: 20px;
            }
            footer {
              margin-top: 30px;
              border-top: 1px solid #ddd;
              padding-top: 20px;
              text-align: center;
              font-size: 0.9em;
              color: #777;
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>My Simple HTML Website</h1>
            <p>Welcome to my basic HTML website</p>
          </header>
          
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <main>
            <section id="home">
              <h2>Home</h2>
              <p>Welcome to my simple website built with pure HTML and CSS. This page demonstrates how to create a basic website without any frameworks or complex JavaScript.</p>
              <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.</p>
            </section>
            
            <section id="about">
              <h2>About</h2>
              <p>This is a simple HTML website created as an example of basic web development. It includes common HTML elements and simple CSS styling to demonstrate fundamental web page structure.</p>
              <p>HTML5 introduced many new elements that provide better semantic structure to web pages, making them more accessible and easier to understand for both humans and machines.</p>
            </section>
            
            <section id="services">
              <h2>Services</h2>
              <p>Here are some services we offer:</p>
              <ul>
                <li>Web Design</li>
                <li>Content Creation</li>
                <li>SEO Optimization</li>
                <li>Hosting Services</li>
              </ul>
            </section>
            
            <section id="contact">
              <h2>Contact</h2>
              <p>Get in touch with us:</p>
              <p>Email: example@example.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Web Dev Lane, Internet City</p>
            </section>
          </main>
          
          <footer>
            <p>&copy; 2023 Simple HTML Website. All rights reserved.</p>
          </footer>
        </body>
        </html>
      `;
    }
  }, []);

  return <div ref={containerRef} className="w-full min-h-screen"></div>;
};

export default SimpleHtml;
