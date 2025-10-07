import React from 'react'

function Help() {
  return (
    <div><section className="text-center py-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Help & Support</h2>
    <p className="text-xl text-gray-300">Find answers to your questions</p>
  </section>

  {/* <!-- Search FAQ --> */}
  <div className="container mx-auto px-4 max-w-2xl mb-12">
    <div className="relative">
      <input type="text" id="faq-search" placeholder="Search frequently asked questions..." className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
      <svg className="absolute right-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
      </svg>
    </div>
  </div>

  {/* <!-- Contact Info --> */}
  <div className="container mx-auto px-4 max-w-4xl mb-12">
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Need Personal Assistance?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <svg className="w-8 h-8 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <h4 className="text-white font-semibold">Call Us</h4>
          <p className="text-blue-200">+91 1800-SNEAKER</p>
          <p className="text-blue-300 text-sm">Mon-Fri 9AM-8PM</p>
        </div>
        <div>
          <svg className="w-8 h-8 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <h4 className="text-white font-semibold">Email Us</h4>
          <p className="text-blue-200">support@abhi.com</p>
          <p className="text-blue-300 text-sm">Reply within 24 hours</p>
        </div>
        <div>
          <svg className="w-8 h-8 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <h4 className="text-white font-semibold">Live Chat</h4>
          <p className="text-blue-200">Chat with us live</p>
          <p className="text-blue-300 text-sm">Available 24/7</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- FAQ Categories --> */}
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        <button className="faq-category-btn active px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700" data-category="all">All</button>
        <button className="faq-category-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600" data-category="orders">Orders</button>
        <button className="faq-category-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600" data-category="shipping">Shipping</button>
        <button className="faq-category-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600" data-category="returns">Returns</button>
        <button className="faq-category-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600" data-category="products">Products</button>
        <button className="faq-category-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600" data-category="account">Account</button>
      </div>
    </div>

    {/* <!-- FAQ Items --> */}
    <div className="space-y-4 mb-12">
      
      {/* <!-- Orders FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="orders">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>How do I place an order?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>To place an order, simply browse our collection, select your desired sneakers, choose your size, and add them to cart. Then proceed to checkout, fill in your shipping and payment details, and confirm your order. You'll receive a confirmation email once your order is successfully placed.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="orders">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>Can I modify or cancel my order?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>You can modify or cancel your order within 30 minutes of placing it by contacting our customer support team. Once your order is processed and shipped, modifications are not possible, but you can return the items as per our return policy.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="orders">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>How can I track my order?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this number to track your order on our website or the courier's website. You can also check your order status by logging into your account.</p>
        </div>
      </div>

      {/* <!-- Shipping FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="shipping">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>What are the shipping charges and delivery time?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>We offer free shipping on all orders above ₹2,000. For orders below this amount, shipping charges are ₹200. Standard delivery takes 3-7 business days depending on your location. Express delivery (1-3 days) is available for an additional ₹500.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="shipping">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>Do you ship internationally?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Currently, we only ship within India. We're working on expanding our shipping to international locations. Please subscribe to our newsletter to stay updated on international shipping availability.</p>
        </div>
      </div>

      {/* <!-- Returns FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="returns">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>What is your return and exchange policy?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>We offer a 30-day return and exchange policy from the date of delivery. Items must be in original condition with tags attached. We provide free return pickup for defective items. For size exchanges or other reasons, return shipping charges apply.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="returns">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>How do I return an item?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>To return an item, log into your account, go to 'My Orders', select the order and click 'Return'. Choose your reason for return and schedule a pickup. You can also contact customer support at +91 1800-SNEAKER for assistance with returns.</p>
        </div>
      </div>

      {/* <!-- Products FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="products">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>Are all your sneakers authentic?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Yes, we guarantee 100% authentic products. All our sneakers are sourced directly from authorized dealers and brands. Each product comes with authenticity verification and original packaging. We also provide a certificate of authenticity for premium products.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="products">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>How do I choose the right size?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>We provide a detailed size guide on each product page. Measure your foot length and compare it with our size chart. Different brands may have slight variations in sizing. If you're between sizes, we generally recommend going half a size up for comfort.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="products">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>Do you restock sold-out items?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Restocking depends on availability from the brand. You can sign up for restock notifications on the product page to get notified when the item is back in stock. Limited edition items typically don't get restocked once sold out.</p>
        </div>
      </div>

      {/* <!-- Account FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="account">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>How do I create an account?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Click on 'Log In/Sign Up' in the top right corner, then select 'Sign Up'. Fill in your details including name, email, and password. You can also sign up using your Google or social media accounts for faster registration.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="account">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>I forgot my password. How do I reset it?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>On the login page, click 'Forgot Password?'. Enter your registered email address and we'll send you a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email, check your spam folder.</p>
        </div>
      </div>

      {/* <!-- Payment FAQs --> */}
      <div className="faq-item bg-gray-800 rounded-lg" data-category="orders">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>What payment methods do you accept?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>We accept all major credit and debit cards (Visa, Mastercard, RuPay), UPI payments, net banking, digital wallets (Paytm, PhonePe, Google Pay), and cash on delivery (COD) for eligible locations. All transactions are secured with SSL encryption.</p>
        </div>
      </div>

      <div className="faq-item bg-gray-800 rounded-lg" data-category="orders">
        <button className="faq-question w-full text-left p-6 text-white font-medium hover:bg-gray-700 rounded-lg flex justify-between items-center">
          <span>Is it safe to pay online on your website?</span>
          <svg className="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div className="faq-answer hidden p-6 pt-0 text-gray-300">
          <p>Absolutely! We use industry-standard SSL encryption and work with trusted payment gateways to ensure your payment information is completely secure. We never store your card details on our servers. All transactions are processed through secure payment partners.</p>
        </div>
      </div>
    </div>

    {/* <!-- Still Need Help --> */}
    <div className="bg-gray-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
      <p className="text-gray-300 mb-6">Can't find what you're looking for? Our support team is here to help!</p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <a href="tel:+911800SNEAKER" className="block sm:inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Call Support
        </a>
        <a href="mailto:support@abhi.com" className="block sm:inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
          Email Us
        </a>
      </div>
    </div>
  </div></div>
  )
}

export default Help