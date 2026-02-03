export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-2 text-secondary-300">
              <p className="font-medium">Dr. Maya Reynolds, Psy.D.</p>
              <p>Licensed Clinical Psychologist</p>
              <p className="mt-3">123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <div className="mt-4 space-y-1">
                <p>
                  <a 
                    href="tel:+1234567890" 
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-900 rounded-sm"
                  >
                    (123) 456-7890
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:info@drmayareynolds.com" 
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-900 rounded-sm break-all"
                  >
                    info@drmayareynolds.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 text-white">Santa Monica Therapy Services</h3>
            <ul className="space-y-2 text-secondary-300">
              <li className="hover:text-white transition-colors duration-200">Anxiety & Panic Disorder Therapy</li>
              <li className="hover:text-white transition-colors duration-200">Trauma Therapy & EMDR</li>
              <li className="hover:text-white transition-colors duration-200">Burnout Recovery Counseling</li>
              <li className="hover:text-white transition-colors duration-200">Individual Therapy Sessions</li>
              <li className="hover:text-white transition-colors duration-200">Telehealth Therapy California</li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 text-white">Office Hours</h3>
            <div className="space-y-2 text-secondary-300">
              <p className="flex justify-center sm:justify-start">
                <span className="w-24 sm:w-28 text-left">Monday - Thursday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-center sm:justify-start">
                <span className="w-24 sm:w-28 text-left">Friday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-center sm:justify-start">
                <span className="w-24 sm:w-28 text-left">Saturday:</span>
                <span>By appointment</span>
              </p>
              <p className="flex justify-center sm:justify-start">
                <span className="w-24 sm:w-28 text-left">Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-6 sm:pt-8">
          <div className="text-center text-secondary-400 space-y-2">
            <p className="text-sm sm:text-base">&copy; 2024 Dr. Maya Reynolds. All rights reserved.</p>
            <p className="text-xs sm:text-sm">
              Licensed Clinical Psychologist | PSY 12345 | Providing therapy services in Santa Monica, California
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}