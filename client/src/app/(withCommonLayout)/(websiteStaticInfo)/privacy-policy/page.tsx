'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-primary">গোপনীয়তা নীতি</h1>
      
      <section>
        <h2 className="text-xl font-semibold">আপনার তথ্য সংগ্রহ</h2>
        <p>
          আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, অ্যাকাউন্ট তৈরি করেন, 
          সেবা গ্রহণ করেন বা আমাদের সাথে যোগাযোগ করেন। এই তথ্যের মধ্যে থাকতে পারে আপনার নাম, ইমেইল, 
          ফোন নম্বর এবং অন্যান্য প্রয়োজনীয় তথ্য।
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">আপনার তথ্য ব্যবহার</h2>
        <p>
          আমরা আপনার প্রদত্ত তথ্য ব্যবহার করি আপনার অভিজ্ঞতা উন্নত করতে, সেবা প্রদান করতে, 
          নিরাপত্তা নিশ্চিত করতে এবং আইনি বাধ্যবাধকতা মেনে চলতে।
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং</h2>
        <p>
          আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে বিক্রয় করি না বা বিনিময় করি না। তবে আমাদের সেবার 
          প্রয়োজনে নির্দিষ্ট কিছু তথ্য নির্ভরযোগ্য পার্টনারদের সাথে ভাগ করা হতে পারে।
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">তথ্য সুরক্ষা</h2>
        <p>
          আমরা আপনার ব্যক্তিগত তথ্যের সুরক্ষার জন্য উপযুক্ত প্রযুক্তিগত ও প্রশাসনিক পদক্ষেপ গ্রহণ করি। 
          তবে, ইন্টারনেটে সম্পূর্ণ নিরাপত্তা নিশ্চিত করা সম্ভব নয়।
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">আপনার অধিকার</h2>
        <p>
          আপনি আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন বা মুছতে পারেন। যদি আপনার কোনো প্রশ্ন থাকে, 
          তবে আমাদের সাথে যোগাযোগ করুন।
        </p>
      </section>
      
      <p className="text-center text-gray-500">শেষ আপডেট: {new Date().getFullYear()}</p>
    </div>
  );
}
