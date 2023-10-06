import { AppRouter } from "@/trpc";
import { inferRouterOutputs } from "@trpc/server";
import { Prettify } from "./prettify";

type RouterOutput = inferRouterOutputs<AppRouter>;

type Messages = RouterOutput["getFileMessages"]["messages"];

type OmitText = Omit<Messages[number], "text">;

type ExtendedText = {
  text: string | JSX.Element;
};

export type ExtendedMessage = Prettify<OmitText & ExtendedText>;
