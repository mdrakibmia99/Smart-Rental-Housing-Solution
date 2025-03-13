'use client';

import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-center">শর্তাবলী এবং নিয়মাবলী</h1>

      <p className="mb-4">এই ওয়েবসাইটটি ব্যবহারের মাধ্যমে, আপনি নিম্নলিখিত শর্তাবলী ও নিয়মাবলীতে সম্মত হচ্ছেন।
      যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তবে অনুগ্রহ করে ওয়েবসাইট ব্যবহার থেকে বিরত থাকুন।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">১. পরিষেবার শর্তাবলী</h2>
      <p className="mb-4">আমাদের ওয়েবসাইটের মাধ্যমে যে কোনো পরিষেবা ব্যবহার করার জন্য আপনাকে নির্দিষ্ট শর্ত মেনে চলতে হবে।
      আমরা যে কোনো সময় পরিষেবার পরিবর্তন বা বাতিল করার অধিকার সংরক্ষণ করি।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">২. ব্যবহারকারীর দায়িত্ব</h2>
      <p className="mb-4">আপনার একাউন্ট ও পাসওয়ার্ডের নিরাপত্তা নিশ্চিত করা আপনার দায়িত্ব। যদি আপনার একাউন্টের অননুমোদিত ব্যবহার হয়,
      তবে অবিলম্বে আমাদের জানাতে হবে।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">৩. গোপনীয়তা নীতি</h2>
      <p className="mb-4">আপনার ব্যক্তিগত তথ্যের গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। আমাদের <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">গোপনীয়তা নীতি</a> দেখুন
      যাতে আপনি জানতে পারেন কিভাবে আমরা আপনার তথ্য সংগ্রহ ও ব্যবহার করি।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">৪. কপিরাইট ও মেধাস্বত্ব</h2>
      <p className="mb-4">এই ওয়েবসাইটে থাকা সমস্ত কন্টেন্ট আমাদের মালিকানাধীন এবং কপিরাইট সুরক্ষিত।
      আমাদের অনুমতি ছাড়া এই কন্টেন্ট ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">৫. সেবা বাতিল ও সীমাবদ্ধতা</h2>
      <p className="mb-4">আমরা আমাদের ওয়েবসাইটের যে কোনো ব্যবহারকারীকে সেবা প্রদান করতে বা বাতিল করতে পারি,
      যদি তাদের কার্যক্রম আমাদের নীতিমালার পরিপন্থী হয়।</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">৬. আইনি বাধ্যবাধকতা</h2>
      <p className="mb-4">এই শর্তাবলী বাংলাদেশের বিদ্যমান আইন দ্বারা পরিচালিত হবে এবং যে কোনো আইনি বিষয়ে
      কেবলমাত্র স্থানীয় আদালত সিদ্ধান্ত প্রদান করবে।</p>

      <p className="mt-6 text-center">শেষ আপডেট: {new Date().getFullYear()} - RentalHub</p>
    </div>
  );
}
