
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
          <title>Simple HTML Page</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              color: #333;
            }
            h1 {
              color: #2d2d2d;
              border-bottom: 2px solid #555;
              padding-bottom: 10px;
            }
            p {
              margin-bottom: 20px;
            }
            .info-box {
              background-color: #f5f5f5;
              border-left: 4px solid #555;
              padding: 15px;
              margin: 20px 0;
            }
            footer {
              margin-top: 30px;
              border-top: 1px solid #ddd;
              padding-top: 10px;
              font-size: 0.9em;
              color: #777;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>Welcome to My Simple HTML Page</h1>
          </header>
          
          <main>
            <p>This is a basic HTML page created with pure HTML. No React components or complex JavaScript involved.</p>
            
            <div class="info-box">
              <h3>About This Page</h3>
              <p>This page demonstrates a simple HTML structure with basic styling. It includes:</p>
              <ul>
                <li>HTML5 document structure</li>
                <li>Inline CSS styling</li>
                <li>Semantic HTML elements</li>
              </ul>
            </div>
            
            <p>Feel free to modify this template to suit your needs. You can add more sections, change the styling, or include additional HTML elements.</p>
          </main>
          
          <footer>
            <p>&copy; 2023 Simple HTML Page. All rights reserved.</p>
          </footer>
        </body>
        </html>
      `;
    }
  }, []);

  return <div ref={containerRef} className="w-full min-h-screen"></div>;
};

export default SimpleHtml;
