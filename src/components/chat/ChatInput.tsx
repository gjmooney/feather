import { Send } from "lucide-react";
import { useContext, useRef } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ChatContext } from "./ChatContext";

interface InputProps {
  isDisabled?: boolean;
}

const Input = ({ isDisabled }: InputProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext);

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <div className="relative">
              <Textarea
                placeholder="Enter your question..."
                ref={textAreaRef}
                rows={1}
                maxRows={4}
                autoFocus
                onChange={handleInputChange}
                value={message}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    addMessage();
                    textAreaRef.current?.focus();
                  }
                }}
                className="resize-none pr-12 text-base py-3 scrollbar-thumb-purple scrollbar-thumb-rounded scrollbar-track-purple-lighter scrollbar-w-2 scrolling-touch"
              />

              <Button
                aria-label="send message"
                disabled={isLoading || isDisabled}
                onClick={() => {
                  addMessage();
                  textAreaRef.current?.focus();
                }}
                className="absolute bottom-1.5 right-[8px]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
