"use client";

import Image from "next/image";
import Link from "next/link";
import mission from '@/assets/mission.png'
import vision from '@/assets/vission.png'

export default function About() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">আমাদের সম্পর্কে</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          আমরা একটি বিশ্বস্ত প্ল্যাটফর্ম, যেখানে আপনি সহজেই বাসা খুঁজে পেতে পারেন। আমাদের লক্ষ্য হল ভাড়াটিয়া
          ও বাড়ির মালিকদের জন্য একটি নিরাপদ এবং সহজ সমাধান প্রদান করা।
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">আমাদের মিশন</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            আমরা বিশ্বাস করি, বাসা খোঁজা একটি কঠিন কাজ। তাই আমরা একটি সহজ, দ্রুত ও নির্ভরযোগ্য
            প্ল্যাটফর্ম তৈরি করেছি যেখানে ভাড়াটিয়ারা সহজেই বাসার তথ্য পেতে পারে এবং মালিকরা
            সহজেই তাদের বিজ্ঞাপন দিতে পারে।
          </p>
        </div>
        <Image
          src={mission}
          width={500}
          height={300}
          alt="Our Mission"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src={vision}
          width={500}
          height={300}
          alt="Our Vision"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">আমাদের ভিশন</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            আমরা বাসা খোঁজার প্রচলিত পদ্ধতিকে আরও আধুনিক ও সহজ করতে চাই। আমাদের উদ্দেশ্য হল
            প্রযুক্তির মাধ্যমে মানুষের জীবনকে সহজ করা এবং বাংলাদেশে একটি ডিজিটাল হাউজিং মার্কেটপ্লেস তৈরি করা।
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">যোগাযোগ করুন</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          যদি আপনার কোনো প্রশ্ন থাকে, তবে আমাদের সাথে যোগাযোগ করতে পারেন। আমরা সবসময় আপনাদের পাশে আছি।
        </p>
        <Link href="/contact">
          <button className="bg-primary text-white px-6 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-primary-dark transition-all">
            যোগাযোগ করুন
          </button>
        </Link>
      </div>
    </section>
  );
}