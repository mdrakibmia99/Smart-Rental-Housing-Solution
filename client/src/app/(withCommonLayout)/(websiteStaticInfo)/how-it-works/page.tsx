export default function HowItWorks() {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">কিভাবে এটি কাজ করে</h1>
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
              1
            </div>
            <div>
              <h2 className="text-xl font-semibold">অ্যাকাউন্ট তৈরি করুন</h2>
              <p className="text-gray-600">আপনার নাম, ইমেইল এবং পাসওয়ার্ড ব্যবহার করে সহজেই একটি অ্যাকাউন্ট খুলুন।</p>
            </div>
          </div>
  
          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
              2
            </div>
            <div>
              <h2 className="text-xl font-semibold">বাড়ি বা ফ্ল্যাট খুঁজুন</h2>
              <p className="text-gray-600">আপনার পছন্দ অনুযায়ী বাড়ি বা ফ্ল্যাট ব্রাউজ করুন এবং বিস্তারিত দেখুন।</p>
            </div>
          </div>
  
          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
              3
            </div>
            <div>
              <h2 className="text-xl font-semibold">রেন্টাল অনুরোধ পাঠান</h2>
              <p className="text-gray-600">আপনার পছন্দের বাড়ির জন্য রেন্টাল অনুরোধ পাঠান এবং অনুমোদনের জন্য অপেক্ষা করুন।</p>
            </div>
          </div>
  
          {/* Step 4 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
              4
            </div>
            <div>
              <h2 className="text-xl font-semibold">পেমেন্ট এবং চুক্তি</h2>
              <p className="text-gray-600">অনুমোদন পেলে পেমেন্ট সম্পন্ন করুন এবং বাড়ির মালিকের সাথে যোগাযোগ করুন।</p>
            </div>
          </div>
        </div>
      </div>
    );
  }