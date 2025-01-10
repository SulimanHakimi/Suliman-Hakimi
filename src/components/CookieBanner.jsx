import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 w-full bg-[#FF5736] text-white p-5 text-center z-50 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0">
            We use cookies to improve your experience. By using our site, you
            agree to our use of cookies.{" "}
            <a
              href="#"
              className="underline hover:text-gray-200 transition-colors"
            >
              Learn more
            </a>.
          </p>
          <button
            onClick={handleAccept}
            className="bg-white text-[#FF5736] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
