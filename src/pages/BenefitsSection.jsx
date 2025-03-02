const BenefitsSection=() => {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-5xl mx-auto relative">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
        <span className="relative z-10 ">Benefits of The Startup Wallah</span>
        <div className="absolute inset-0 blur-2xl bg-purple-200/50 -z-10" />
      </h2>

      {/* Benefits timeline */}
      <div className="relative flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Vertical line for larger screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent hidden sm:block" />

        {/* Access to Funding */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
          <div className="hidden sm:flex flex-1" />
          <div className="relative flex items-center">
            {/* Timeline circle (hidden on mobile) */}
            <div className="w-5 h-5 rounded-full bg-orange-400 relative z-10 hidden sm:block" />
            <div className="absolute top-2 left-5 w-6 sm:w-8 h-px bg-orange-400 hidden sm:block" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-2">Access to Funding</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Connect with potential investors through our curated network and resources, increasing your chances of
              securing the capital you need to launch and grow.
            </p>
          </div>
        </div>

        {/* Essential Knowledge & Guidance */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
          <div className="flex-1 text-center sm:text-right">
            <h3 className="text-xl font-semibold mb-2">Essential Knowledge & Guidance</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Gain valuable insights and practical skills with our learning resources, expert mentorship, and business
              services, empowering you to make informed decisions and avoid common pitfalls.
            </p>
          </div>
          <div className="relative flex items-center">
            {/* Timeline circle (hidden on mobile) */}
            <div className="w-5 h-5 rounded-full bg-orange-400 relative z-10 hidden sm:block" />
            <div className="absolute top-2 right-5 w-6 sm:w-8 h-px bg-orange-400 hidden sm:block" />
          </div>
          <div className="hidden sm:flex flex-1" />
        </div>

        {/* Comprehensive Support Ecosystem */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
          <div className="hidden sm:flex flex-1" />
          <div className="relative flex items-center">
            {/* Timeline circle (hidden on mobile) */}
            <div className="w-5 h-5 rounded-full bg-orange-400 relative z-10 hidden sm:block" />
            <div className="absolute top-2 left-5 w-6 sm:w-8 h-px bg-orange-400 hidden sm:block" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Support Ecosystem</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              From investor connections to expert guidance and essential services like web development and pitch deck
              creation, The Startup Wallah provides a complete ecosystem to support your startup journey from idea to
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection