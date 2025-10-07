import React, { useState } from 'react'

function TC() {
  const [tog,setTog]=useState(true)
  return (
     <>
     <section className="text-center py-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy & Terms</h2>
    <p className="text-xl text-gray-300">Your privacy and security matter to us</p>
    <p className="text-gray-400 mt-2">Last updated: September 1, 2025</p>
  </section>

  {/* <!-- Navigation Tabs --> */}
  <div className="container mx-auto px-4 max-w-4xl mb-8">
    <div className="flex justify-center">
      <div className="bg-gray-800 rounded-lg p-1 flex space-x-1">
        <button id="privacy-tab" onClick={()=>{setTog(!tog)}} className={`px-6 py-3 ${tog?" bg-blue-600 text-white":"text-gray-400"} rounded-md  font-medium transition-all`}>
          Privacy Policy
        </button>
        <button id="terms-tab" onClick={()=>{setTog(!tog)}} className={`px-6 py-3 rounded-md ${tog?"text-gray-400 ":" bg-blue-600 text-white"} font-medium transition-all`}>
          Terms & Conditions
        </button>
      </div>
    </div>
  </div>
    {tog?
  <div id="privacy-content" className="container mx-auto px-4 max-w-4xl mb-16">
  {/* <!-- Privacy Policy Content --> */}
    
    {/* <!-- Quick Summary --> */}
    <div className="bg-blue-900 border border-blue-700 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-200 mb-3">Privacy Policy Summary</h3>
      <p className="text-blue-300 text-sm">
        We collect minimal personal information needed to process your orders and improve your experience. 
        We never sell your data to third parties and use industry-standard security measures to protect your information.
      </p>
    </div>

    <div className="bg-gray-800 rounded-lg p-8 space-y-8 text-gray-300">
      
      {/* <!-- Information We Collect --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h3>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Personal Information</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
          <li><strong>Shipping Information:</strong> Delivery address and contact details for order fulfillment</li>
          <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors)</li>
          <li><strong>Order History:</strong> Details of products purchased, order dates, and transaction records</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Automatically Collected Information</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, and search queries</li>
          <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience</li>
        </ul>
      </section>

      {/* <!-- How We Use Information --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Order Processing:</strong> To fulfill your orders, process payments, and provide customer support</li>
          <li><strong>Communication:</strong> To send order confirmations, shipping updates, and respond to inquiries</li>
          <li><strong>Personalization:</strong> To recommend products based on your preferences and browsing history</li>
          <li><strong>Marketing:</strong> To send promotional emails about new products and offers (you can opt-out anytime)</li>
          <li><strong>Security:</strong> To prevent fraud, protect our platform, and ensure secure transactions</li>
          <li><strong>Analytics:</strong> To understand how our website is used and improve our services</li>
        </ul>
      </section>

      {/* <!-- Information Sharing --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h3>
        <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (shipping companies, payment processors, analytics providers)</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
          <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of our business assets</li>
          <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information with specific third parties</li>
        </ul>
      </section>

      {/* <!-- Data Security --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">4. Data Security</h3>
        <p className="mb-4">We implement industry-standard security measures to protect your personal information:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>SSL Encryption:</strong> All data transmission is encrypted using Secure Socket Layer (SSL) technology</li>
          <li><strong>Secure Payment Processing:</strong> Credit card information is processed through PCI-compliant payment gateways</li>
          <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
          <li><strong>Regular Security Audits:</strong> Periodic assessment of our security practices and systems</li>
          <li><strong>Data Backup:</strong> Regular backups to prevent data loss</li>
        </ul>
      </section>

      {/* <!-- Cookies and Tracking --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h3>
        <p className="mb-4">We use cookies and similar technologies to enhance your experience:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality (shopping cart, login sessions)</li>
          <li><strong>Analytics Cookies:</strong> Help us understand website usage and improve our services</li>
          <li><strong>Marketing Cookies:</strong> Used to show you relevant advertisements and track campaign effectiveness</li>
          <li><strong>Personalization Cookies:</strong> Remember your preferences and customize your experience</li>
        </ul>
        <p className="mt-4 text-sm bg-gray-700 p-3 rounded">
          <strong>Managing Cookies:</strong> You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
        </p>
      </section>

      {/* <!-- Your Rights --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h3>
        <p className="mb-4">You have the following rights regarding your personal information:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
          <li><strong>Marketing Opt-out:</strong> Unsubscribe from promotional emails at any time</li>
          <li><strong>Account Deletion:</strong> Delete your account and associated data through your account settings</li>
        </ul>
        <p className="mt-4 text-sm">To exercise these rights, contact us at <a href="mailto:privacy@abhi.com" className="text-blue-400 hover:underline">privacy@abhi.com</a></p>
      </section>

      {/* <!-- Data Retention --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">7. Data Retention</h3>
        <p className="mb-4">We retain your personal information for as long as necessary to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide you with our services and maintain your account</li>
          <li>Comply with legal obligations and resolve disputes</li>
          <li>Prevent fraud and ensure security</li>
          <li>Improve our products and services</li>
        </ul>
        <p className="mt-4">When information is no longer needed, we securely delete or anonymize it.</p>
      </section>

      {/* <!-- Children's Privacy --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h3>
        <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
      </section>

      {/* <!-- International Transfers --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h3>
        <p>Your information may be processed and stored in countries outside of India where our service providers operate. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.</p>
      </section>

      {/* <!-- Updates to Privacy Policy --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">10. Updates to This Privacy Policy</h3>
        <p>We may update this privacy policy from time to time. We will notify you of material changes by email or through a notice on our website. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>
      </section>

      {/* <!-- Contact Information --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">11. Contact Us</h3>
        <p className="mb-4">If you have questions about this privacy policy or our privacy practices, contact us:</p>
        <div className="bg-gray-700 p-4 rounded">
          <p><strong>Email:</strong> <a href="mailto:privacy@abhi.com" className="text-blue-400 hover:underline">privacy@abhi.com</a></p>
          <p><strong>Phone:</strong> +91 1800-SNEAKER</p>
          <p><strong>Address:</strong> ABHI Sneakers, Mumbai, Maharashtra, India</p>
        </div>
      </section>
    </div>
  </div>
  :
  (<div id="terms-content" className="container mx-auto px-4 max-w-4xl mb-16 ">
  {/* <!-- Terms & Conditions Content (Hidden by default) --> */}
    
    {/* <!-- Quick Summary --> */}
    <div className="bg-orange-900 border border-orange-700 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-orange-200 mb-3">Terms & Conditions Summary</h3>
      <p className="text-orange-300 text-sm">
        By using our website and services, you agree to these terms. We provide authentic sneakers with a 30-day return policy. 
        All sales are subject to product availability and our authentication process.
      </p>
    </div>

    <div className="bg-gray-800 rounded-lg p-8 space-y-8 text-gray-300">
      
      {/* <!-- Agreement to Terms --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h3>
        <p>By accessing and using the ABHI website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you should not use our services.</p>
      </section>

      {/* <!-- Definitions --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">2. Definitions</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>"We", "Us", "Our"</strong> refers to ABHI Sneakers and its affiliates</li>
          <li><strong>"You", "Your"</strong> refers to the user or customer</li>
          <li><strong>"Services"</strong> refers to our website, products, and customer support</li>
          <li><strong>"Products"</strong> refers to sneakers and related items sold through our platform</li>
          <li><strong>"Content"</strong> refers to all text, images, videos, and other materials on our website</li>
        </ul>
      </section>

      {/* <!-- Use of Services --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">3. Use of Our Services</h3>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Permitted Uses</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Browse and purchase products for personal use</li>
          <li>Create and manage your account</li>
          <li>Contact customer support</li>
          <li>Share product reviews and feedback</li>
        </ul>

        <h4 className="text-lg font-semibold text-orange-400 mb-3">Prohibited Uses</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Use our services for any unlawful purposes</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Reproduce, distribute, or reverse engineer our website or content</li>
          <li>Use automated systems (bots) to make purchases or collect data</li>
          <li>Post false reviews or misleading information</li>
          <li>Resell products for commercial purposes without authorization</li>
        </ul>
      </section>

      {/* <!-- Account Registration --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">4. Account Registration</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>You must provide accurate and complete information when creating an account</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>You must notify us immediately of any unauthorized use of your account</li>
          <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
          <li>You must be at least 18 years old to create an account and make purchases</li>
        </ul>
      </section>

      {/* <!-- Products and Pricing --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">5. Products and Pricing</h3>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Product Information</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>We strive to display products accurately, but colors may vary due to screen settings</li>
          <li>All products are authentic and sourced from authorized dealers</li>
          <li>Product availability is subject to change without notice</li>
          <li>We reserve the right to limit quantities and refuse orders</li>
        </ul>

        <h4 className="text-lg font-semibold text-orange-400 mb-3">Pricing and Payment</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>All prices are in Indian Rupees (INR) and include applicable taxes</li>
          <li>Shipping charges are calculated at checkout</li>
          <li>We reserve the right to change prices without prior notice</li>
          <li>Payment must be received before order processing</li>
          <li>We accept major credit cards, debit cards, UPI, and digital wallets</li>
        </ul>
      </section>

      {/* <!-- Order Processing --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">6. Order Processing and Shipping</h3>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Order Confirmation</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Order confirmation does not guarantee product availability</li>
          <li>We reserve the right to cancel orders due to pricing errors or stock issues</li>
          <li>You will receive email confirmation once your order is processed</li>
        </ul>

        <h4 className="text-lg font-semibold text-orange-400 mb-3">Shipping and Delivery</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Shipping times are estimates and not guaranteed</li>
          <li>Risk of loss transfers to you upon delivery to the shipping carrier</li>
          <li>You are responsible for providing accurate shipping information</li>
          <li>Additional charges may apply for remote locations</li>
        </ul>
      </section>

      {/* <!-- Returns and Exchanges --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">7. Returns and Exchanges</h3>
        
        <h4 className="text-lg font-semibold text-orange-400 mb-3">Return Policy</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Returns accepted within 30 days of delivery</li>
          <li>Items must be unworn, in original condition with tags attached</li>
          <li>Original packaging and accessories must be included</li>
          <li>Custom or personalized items cannot be returned</li>
        </ul>

        <h4 className="text-lg font-semibold text-orange-400 mb-3">Return Process</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Contact customer service to initiate a return</li>
          <li>Return shipping costs are your responsibility unless item is defective</li>
          <li>Refunds processed within 7-10 business days after we receive returned items</li>
          <li>Exchanges subject to product availability</li>
        </ul>
      </section>

      {/* <!-- Intellectual Property --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h3>
        <p className="mb-4">All content on our website, including text, images, logos, and design elements, is owned by ABHI or our licensors and is protected by intellectual property laws.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>You may not reproduce, distribute, or create derivative works without permission</li>
          <li>Brand names and logos are trademarks of their respective owners</li>
          <li>User-generated content (reviews, photos) may be used by us for marketing purposes</li>
        </ul>
      </section>

      {/* <!-- Limitation of Liability --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h3>
        <p className="mb-4">To the maximum extent permitted by law:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>We provide our services "as is" without warranties of any kind</li>
          <li>We are not liable for indirect, incidental, or consequential damages</li>
          <li>Our total liability shall not exceed the amount paid for the product in question</li>
          <li>We are not responsible for delays or failures due to circumstances beyond our control</li>
        </ul>
      </section>

      {/* <!-- Dispute Resolution --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Any disputes will be resolved through binding arbitration in Mumbai, Maharashtra</li>
          <li>Indian law governs these terms and conditions</li>
          <li>Courts in Mumbai have exclusive jurisdiction over any legal proceedings</li>
        </ul>
      </section>

      {/* <!-- Changes to Terms --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.</p>
      </section>

      {/* <!-- Termination --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">12. Termination</h3>
        <p className="mb-4">We may terminate or suspend your account and access to our services:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>For violations of these terms</li>
          <li>For fraudulent or illegal activities</li>
          <li>At our sole discretion with or without notice</li>
        </ul>
      </section>

      {/* <!-- Contact Information --> */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">13. Contact Information</h3>
        <p className="mb-4">For questions about these terms and conditions:</p>
        <div className="bg-gray-700 p-4 rounded">
          <p><strong>Email:</strong> <a href="mailto:legal@abhi.com" className="text-blue-400 hover:underline">legal@abhi.com</a></p>
          <p><strong>Phone:</strong> +91 1800-SNEAKER</p>
          <p><strong>Address:</strong> ABHI Sneakers, Mumbai, Maharashtra, India</p>
        </div>
      </section>
    </div>
  </div>)}
  

  
  </>
  )
}

export default TC