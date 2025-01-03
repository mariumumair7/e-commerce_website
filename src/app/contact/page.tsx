"use client";

import React, { useState, useEffect } from "react";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client"; // Ensure correct import
import { NextPage } from "next";

interface ContactInfo {
  title: string;
  description: string;
}

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [contactContent, setContactContent] = useState<ContactInfo | null>(null);

  // Fetching Sanity content inside useEffect
  useEffect(() => {
    const fetchContactContent = async () => {
      const query = groq`*[_type == "contactInfo"][0]`;
      const data = await client.fetch(query);
      setContactContent(data);
    };
    fetchContactContent();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Logic for form submission (e.g., sending data to your API or using an email service)
    try {
      console.log("Sending message:", formData);
      setResponseMessage("Thank you for your message. We will get back to you soon!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Contact Page Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Us</h1>

      {/* Display Content from Sanity */}
      <div className="mb-6">
        {/* Fetch Sanity content (title and description) */}
        {contactContent ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{contactContent.title}</h2>
            <p className="text-lg text-gray-600 mt-2">{contactContent.description}</p>
          </div>
        ) : (
          <p>Loading content...</p>
        )}
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full mt-4 p-3 ${isSubmitting ? "bg-gray-500" : "bg-blue-500"} text-white rounded-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && (
          <div className="mt-4 text-center text-gray-600">
            <p>{responseMessage}</p>
          </div>
        )}
      </div>

      {/* Clerk User Authentication */}
      <div className="mt-8">
        <ClerkLoaded>
          <SignedIn>
            <div className="flex justify-center items-center">
              <UserButton />
            </div>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default ContactPage;
