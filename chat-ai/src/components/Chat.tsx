"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div>
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full h-[600px] space-y-4 pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 text-muted-foreground text-sm mb-4"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>HC</AvatarFallback>
                      <AvatarImage src="https://github.com/HenriqueCole.png" />
                    </Avatar>
                  )}
                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>CI</AvatarFallback>
                      <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHY8dfocrYOPA/profile-displayphoto-shrink_200_200/0/1693587888952?e=1700697600&v=beta&t=SyEoFVjJkr9J8aZF123sxBgRQ1t-Hv2gJHxrrR2pM3I" />
                    </Avatar>
                  )}
                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === "user" ? "Henrique Cole" : "Cole AI"}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="How can I help you?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
