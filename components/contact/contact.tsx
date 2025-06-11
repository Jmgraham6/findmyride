"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Twitter, Github, Linkedin, Send } from "lucide-react";
import * as React from "react";


export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add Recaptcha logic here to secure this endpoint
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        message,
      }),
    });
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Thanks! We'll reach out to you soon.");
  };

  return (
    <section
      id="contact"
      className="mx-auto flex max-w-6xl flex-col items-center gap-20 px-5 md:px-8 lg:px-0 py-12 lg:py-[4.5rem] lg:flex-row"
    >
      <div className="mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6">
        <div>
          <h1 className="mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl">
            <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Get in touch with the Cycling Meetup team
            </span>
          </h1>
        </div>
        <p className="text-center text-lg text-muted-foreground lg:text-left">
          <span className="hidden lg:block">
            Have questions about rides, want to suggest a new route, or
            interested in partnering with us? Reach out and let’s make your
            cycling experience even better!
          </span>
          <span className="block lg:hidden">
            Need info or want to join a ride? Contact us anytime!
          </span>
        </p>
        <div className="flex justify-center lg:justify-start">
          <div className="flex flex-col gap-4 lg:items-start">
            <a
              href="Lorem"
              className="inline-flex gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6" />
              @CyclingMeetup
            </a>
            <a
              href="#"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" /> cycling-meetup
            </a>
            <span className="flex items-center gap-2">
              <Linkedin className="h-6 w-6" /> cycling-meetup
            </span>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-card border p-6"
      >
        <div className="flex w-full flex-col gap-1.5">
          <Label className="text-left text-muted-foreground" htmlFor="name">
            Your name
          </Label>
          <input
            type="text"
            required
            className="text-black h-12 px-4 border border-border rounded-md focus:border-primary focus:outline-none"
            placeholder={"Jane Cyclist"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <Label
            className="text-left text-muted-foreground"
            htmlFor="contact-email"
          >
            Email address
          </Label>
          <input
            type="email"
            required
            className="text-black h-12 px-4 border border-border rounded-md focus:border-primary focus:outline-none"
            placeholder={"jane.cyclist@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="text-left text-muted-foreground">
            Your message
          </Label>
          <textarea
            required
            rows={4}
            className="text-black p-4 border border-border rounded-md focus:border-primary focus:outline-none"
            placeholder={"How can we help you join the ride?"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button className="w-full flex justify-center items-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-md uppercase transition-colors">
          Send
        </Button>
      </form>
    </section>
  );
}
