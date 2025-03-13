'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-20">
      <h1 className="text-3xl font-bold text-center mb-6">সচরাচর জিজ্ঞাস্য (FAQ)</h1>
      <p className="text-center text-gray-600 mb-10">আপনার সাধারণ প্রশ্নের উত্তর এখানে পাওয়া যাবে।</p>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="q1">
          <AccordionTrigger>আমি কিভাবে একটি বাসা ভাড়া নিতে পারি?</AccordionTrigger>
          <AccordionContent>
            আপনি আমাদের ওয়েবসাইটে লগইন করে বাসা খুঁজে পছন্দের বাসার জন্য রেন্টাল রিকোয়েস্ট পাঠাতে পারেন।
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>বাসা ভাড়া দেওয়ার জন্য কী করতে হবে?</AccordionTrigger>
          <AccordionContent>
            আপনি যদি একজন বাড়িওয়ালা হন, তাহলে আমাদের প্ল্যাটফর্মে রেজিস্ট্রেশন করে নতুন বাসা লিস্ট করতে পারেন।
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>পেমেন্ট প্রসেস কীভাবে কাজ করে?</AccordionTrigger>
          <AccordionContent>
            বাসা মালিক আপনার রিকোয়েস্ট এপ্রুভ করলে পেমেন্ট অপশন অ্যাক্টিভ হয়ে যাবে এবং আপনি সহজেই অনলাইনে পেমেন্ট সম্পন্ন করতে পারবেন।
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>আমি কিভাবে আমার প্রোফাইল আপডেট করবো?</AccordionTrigger>
          <AccordionContent>
            লগইন করার পর প্রোফাইল সেকশনে গিয়ে সহজেই আপনার তথ্য আপডেট করতে পারবেন।
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>সমস্যা হলে কিভাবে সাহায্য পাবো?</AccordionTrigger>
          <AccordionContent>
            আপনি আমাদের <a href="/contact" className="text-blue-600 underline">Contact Us</a> পেজে গিয়ে সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন।
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}