"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, X, Twitter } from "lucide-react";


export default function Team3() {
  const teamList = [
    {
      imageUrl: "https://i.pravatar.cc/500?img=53",
      name: "Leo Miranda",
      position: "Frontend Developer",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "Lorem",
          icon: Linkedin,
        },
        {
          name: "Github",
          url: "Lorem",
          icon: Github,
        },
        {
          name: "X",
          url: "Lorem",
          icon: Twitter,
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/500?img=8",
      name: "Elizabeth Moore",
      position: "UI/UX Designer",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "Lorem",
          icon: Linkedin,
        },
        {
          name: "X",
          url: "#",
          icon: Twitter,
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/500?img=38",
      name: "David Diaz",
      position: "Mobile App Engineer",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "Lorem",
          icon: Linkedin,
        },
        {
          name: "Github",
          url: "#",
          icon: Github,
        },
      ],
    },
  ];

  return (
    <section
      id="team3"
      className="flex justify-center px-5 md:px-8 lg:px-0 py-12 lg:py-[4.5rem]"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Meet Our{" "}
          </span>
          Cycling Team
        </h2>

        <p className="mt-4 mb-10 text-xl text-muted-foreground">
          We’re passionate cyclists building a better way to connect riders and
          create unforgettable group rides.
        </p>

        <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {teamList.map(
            ({ imageUrl, name, position, socialNetworks }, index) => (
              <Card
                key={index}
                className="bg-card relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <div className="absolute -top-12">
                    <img
                      src={imageUrl}
                      className="rounded-full w-24 h-24 aspect-square object-cover"
                    />
                  </div>
                  <CardTitle className="text-center">
                    <span>{name}</span>
                  </CardTitle>
                  <CardDescription className="text-primary">
                    <span>{position}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p>
                    Our team brings together cycling enthusiasts and tech
                    experts to make every ride more social and accessible.
                  </p>
                </CardContent>

                <CardFooter className="mt-4 flex gap-4">
                  {socialNetworks.map(({ name, url, icon: Icon }, index) => (
                    <div key={index}>
                      <a href={url} rel="noreferrer noopener" target="_blank">
                        <span className="sr-only">
                          <span>{name}</span> icon
                        </span>
                        <Icon size={20} />
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
