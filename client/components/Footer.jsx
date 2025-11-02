
import React, { useState } from 'react';
import '../css/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="newsletter-section">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form" data-testid="form-newsletter">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                data-testid="input-newsletter-email"
                aria-label="Email address"
              />
              <button type="submit" className="newsletter-button" data-testid="button-subscribe">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="contact-currency-section">
            <div className="contact-info">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency-info">
              <h3>CURRENCY</h3>
              <div className="currency-selector">
                <span className="currency-flag">🇺🇸</span>
                <span>• USD</span>
              </div>
              <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-links">
          <div className="footer-column">
            <h3>mettā muse</h3>
            <ul>
              <li><a href="#about" data-testid="link-footer-about">About Us</a></li>
              <li><a href="#stories" data-testid="link-footer-stories">Stories</a></li>
              <li><a href="#artisans" data-testid="link-footer-artisans">Artisans</a></li>
              <li><a href="#boutiques" data-testid="link-footer-boutiques">Boutiques</a></li>
              <li><a href="#contact" data-testid="link-footer-contact">Contact Us</a></li>
              <li><a href="#eu" data-testid="link-footer-eu">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#orders" data-testid="link-footer-orders">Orders & Shipping</a></li>
              <li><a href="#join" data-testid="link-footer-join">Join/Login as a Seller</a></li>
              <li><a href="#payment" data-testid="link-footer-payment">Payment & Pricing</a></li>
              <li><a href="#returns" data-testid="link-footer-returns">Return & Refunds</a></li>
              <li><a href="#faqs" data-testid="link-footer-faqs">FAQs</a></li>
              <li><a href="#privacy" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#terms" data-testid="link-footer-terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram" data-testid="link-instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" data-testid="link-linkedin">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="payment-methods">
              <h4>mettā muse ACCEPTS</h4>
              <div className="payment-icons">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkZGIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5HUGF5PC90ZXh0Pjwvc3ZnPg==" alt="GPay" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkY1ZjAwIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxMiIgcj0iNiIgZmlsbD0iI0VCMDAxQiIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMTIiIHI9IjYiIGZpbGw9IiNGNzkwMTAiLz48L3N2Zz4=" alt="Mastercard" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAzMDg3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5QYXlQYWw8L3RleHQ+PC9zdmc+" alt="PayPal" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDE2RkQwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5BTUVYPC90ZXh0Pjwvc3ZnPg==" alt="Amex" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkZGIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5BcHBsZTwvdGV4dD48L3N2Zz4=" alt="Apple Pay" />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNUY1OURCIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5TaG9wPC90ZXh0Pjwvc3ZnPg==" alt="Shop Pay" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
